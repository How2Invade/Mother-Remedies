import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { remedies } from '../data/remedies'

export default function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q?.toLowerCase() || ''
  const results = remedies.filter(remedy => 
    remedy.title.toLowerCase().includes(query) || 
    remedy.description.toLowerCase().includes(query)
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      {results.length === 0 ? (
        <p>No results found. Try a different search term.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((remedy) => (
            <Card key={remedy.id}>
              <Image src={remedy.image} alt={remedy.title} width={400} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{remedy.title}</CardTitle>
                <CardDescription>{remedy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/remedies/${remedy.id}`}>
                  <Button variant="outline">View Remedy</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

