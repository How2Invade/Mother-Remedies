"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export default function DailyTipsPage() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [deliveryMethod, setDeliveryMethod] = useState("push")
  const [deliveryTime, setDeliveryTime] = useState("09:00")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    // In a real app, we would fetch the user's preferences from the backend here
    // For now, we'll just simulate it with some default values
    setIsEnabled(true)
    setDeliveryMethod("push")
    setDeliveryTime("09:00")
    setStreak(5)
  }, [])

  const handleSave = () => {
    // In a real app, we would save the user's preferences to the backend here
    toast({
      title: "Preferences saved",
      description: "Your daily tips preferences have been updated.",
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Daily Health Tips</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Daily Tips</CardTitle>
          <CardDescription>Customize your daily health and wellness tips</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="tips-enabled">Enable Daily Tips</Label>
            <Switch
              id="tips-enabled"
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
            />
          </div>
          <div>
            <Label htmlFor="delivery-method">Delivery Method</Label>
            <Select value={deliveryMethod} onValueChange={setDeliveryMethod}>
              <SelectTrigger id="delivery-method">
                <SelectValue placeholder="Select delivery method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="push">Push Notification</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {deliveryMethod === "email" && (
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </div>
          )}
          {deliveryMethod === "sms" && (
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          )}
          <div>
            <Label htmlFor="delivery-time">Delivery Time</Label>
            <Input
              id="delivery-time"
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </div>
          <Button onClick={handleSave}>Save Preferences</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>Track your daily tips engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-2">Current Streak: {streak} days</p>
          <p>Keep engaging with your daily tips to build your streak and improve your health!</p>
        </CardContent>
      </Card>
    </div>
  )
}

