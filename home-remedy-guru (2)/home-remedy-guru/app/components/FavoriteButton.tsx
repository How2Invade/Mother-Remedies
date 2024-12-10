"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Heart } from 'lucide-react'

export default function FavoriteButton({ remedyId }: { remedyId: number }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(remedyId))
  }, [remedyId])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const newFavorites = favorites.filter((id: number) => id !== remedyId)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      favorites.push(remedyId)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <Button variant={isFavorite ? "default" : "outline"} size="icon" onClick={toggleFavorite}>
      <Heart className={isFavorite ? "fill-current" : ""} />
    </Button>
  )
}

