"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
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
  { id: 1, name: "Organic Chamomile Tea", description: "Soothing herbal tea for relaxation and better sleep", price: 500, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Lavender Essential Oil", description: "Pure lavender oil for aromatherapy and skin care", price: 900, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Echinacea Tincture", description: "Immune-boosting herbal extract", price: 1000, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Aloe Vera Gel", description: "Natural soothing gel for skin irritations", price: 480, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Ginger Root Capsules", description: "Supports digestive health and reduces nausea", price: 660, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Peppermint Oil", description: "Versatile essential oil for aromatherapy and topical use", price: 800, image: "/placeholder.svg?height=200&width=200" },
]

export default function ShopPage() {
  const [cart, setCart] = useState<{[key: number]: number}>({})
  const router = useRouter()

  const addToCart = (productId: number) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }))
  }

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const newCart = { ...prevCart }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const cartTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === parseInt(productId))
    return total + (product ? product.price * quantity : 0)
  }, 0)

  const handleCheckout = () => {
    router.push(`/checkout?cart=${JSON.stringify(cart)}`)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Herbal Products Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-48 object-cover mb-4" />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">₹{product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shopping Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {Object.entries(cart).map(([productId, quantity]) => {
            const product = products.find(p => p.id === parseInt(productId))
            if (!product) return null
            return (
              <div key={productId} className="flex justify-between items-center mb-2">
                <span>{product.name} x {quantity}</span>
                <div>
                  <Button variant="outline" size="sm" onClick={() => removeFromCart(product.id)}>-</Button>
                  <span className="mx-2">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => addToCart(product.id)}>+</Button>
                </div>
              </div>
            )
          })}
          {Object.keys(cart).length === 0 && <p>Your cart is empty</p>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <span className="text-xl font-bold">Total: ₹{cartTotal.toFixed(2)}</span>
          <Button onClick={handleCheckout} disabled={Object.keys(cart).length === 0}>Checkout</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

