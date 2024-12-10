"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DailyTip() {
  const [tip, setTip] = useState("")

  useEffect(() => {
    const fetchTip = async () => {
      // In a real app, we would pass the actual user ID
      const response = await fetch('/api/daily-tips?userId=123')
      const data = await response.json()
      setTip(data.tip)
    }

    fetchTip()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Daily Health Tip</CardTitle>
        <CardDescription>A personalized tip to improve your well-being</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{tip}</p>
      </CardContent>
    </Card>
  )
}

