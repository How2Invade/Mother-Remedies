import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { remedies } from '../../data/remedies'

export default function RemedyPage({ params }: { params: { id: string } }) {
  const remedy = remedies.find(r => r.id === parseInt(params.id))

  if (!remedy) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{remedy.title}</h1>
      <Image src={remedy.image} alt={remedy.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-lg mb-6">{remedy.description}</p>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Ingredients</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {remedy.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5">
            {remedy.steps.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{remedy.benefits}</p>
        </CardContent>
      </Card>
    </div>
  )
}

