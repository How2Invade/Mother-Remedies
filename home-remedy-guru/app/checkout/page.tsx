"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Organic Chamomile Tea", description: "Soothing herbal tea for relaxation and better sleep", price: 9.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Lavender Essential Oil", description: "Pure lavender oil for aromatherapy and skin care", price: 14.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Echinacea Tincture", description: "Immune-boosting herbal extract", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Aloe Vera Gel", description: "Natural soothing gel for skin irritations", price: 7.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Ginger Root Capsules", description: "Supports digestive health and reduces nausea", price: 12.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Peppermint Oil", description: "Versatile essential oil for aromatherapy and topical use", price: 11.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [cart, setCart] = useState<{[key: number]: number}>({})

  useEffect(() => {
    const cartParam = searchParams.get('cart')
    if (cartParam) {
      setCart(JSON.parse(cartParam))
    }
  }, [searchParams])

  const cartTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === parseInt(productId))
    return total + (product ? product.price * quantity : 0)
  }, 0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the order
    alert('Order placed successfully!')
    router.push('/shop')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.entries(cart).map(([productId, quantity]) => {
              const product = products.find(p => p.id === parseInt(productId))
              if (!product) return null
              return (
                <div key={productId} className="flex justify-between items-center mb-2">
                  <span>{product.name} x {quantity}</span>
                  <span>${(product.price * quantity).toFixed(2)}</span>
                </div>
              )
            })}
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
            <CardDescription>Please enter your shipping details</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" required />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div>
                <Label htmlFor="zipcode">Zip Code</Label>
                <Input id="zipcode" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <Button type="submit" className="w-full">Place Order</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

