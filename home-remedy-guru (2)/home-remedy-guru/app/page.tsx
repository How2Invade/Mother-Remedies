import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DailyTip from './components/DailyTip'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Mother's Remedies</h1>
        <p className="text-xl mb-6">Your ultimate guide to natural healing</p>
        <div className="flex justify-center space-x-4">
          <Link href="/symptom-checker">
            <Button size="lg">Start Symptom Checker</Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline">Shop Herbal Products</Button>
          </Link>
        </div>
      </section>

      <DailyTip />

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id}>
              <Image src={product.image} alt={product.name} width={400} height={200} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
                <Link href="/shop">
                  <Button variant="outline">Shop Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Natural Remedies?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Safe and Gentle</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Natural remedies often have fewer side effects compared to pharmaceutical drugs, making them a gentler option for many common ailments.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cost-Effective</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Many natural remedies use common household ingredients or easily accessible herbs, making them an affordable alternative to expensive medications.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Holistic Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Natural remedies often address the root cause of health issues, promoting overall wellness rather than just treating symptoms.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Empowering Self-Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learning about and using natural remedies can empower you to take control of your health and well-being.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

const featuredProducts = [
  { id: 1, name: "Organic Chamomile Tea", description: "Soothing herbal tea for relaxation and better sleep", price: 9.99, image: "/placeholder.svg?height=200&width=400" },
  { id: 2, name: "Lavender Essential Oil", description: "Pure lavender oil for aromatherapy and skin care", price: 14.99, image: "/placeholder.svg?height=200&width=400" },
  { id: 3, name: "Echinacea Tincture", description: "Immune-boosting herbal extract", price: 19.99, image: "/placeholder.svg?height=200&width=400" },
]

