"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { remedies } from '../remedies/page'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Favorites() {
  const [favoriteRemedies, setFavoriteRemedies] = useState<typeof remedies>([])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const favoriteRemedies = remedies.filter(remedy => favorites.includes(remedy.id))
    setFavoriteRemedies(favoriteRemedies)
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Favorite Remedies</h1>
      {favoriteRemedies.length === 0 ? (
        <p>You haven't added any remedies to your favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteRemedies.map((remedy) => (
            <Card key={remedy.id}>
              <Image src={remedy.image} alt={remedy.title} width={400} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{remedy.title}</CardTitle>
                <CardDescription>{remedy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/remedies/${remedy.id}`}>
                  <Button variant="outline">View Tutorial</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

