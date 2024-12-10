'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="bg-green-100 py-4">
      <div className="container mx-auto px-4 flex">
        <Input
          type="search"
          placeholder="Search remedies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  )
}

