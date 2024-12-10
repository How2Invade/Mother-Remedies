import { NextResponse } from 'next/server'

const tips = [
  "Drink 8 glasses of water today to stay hydrated.",
  "Take a 10-minute walk to boost your energy and mood.",
  "Practice deep breathing for 5 minutes to reduce stress.",
  "Eat a serving of leafy greens with your lunch or dinner.",
  "Stretch for 5 minutes to improve flexibility and reduce muscle tension.",
  "Try a new healthy recipe this week to add variety to your diet.",
  "Get 7-9 hours of sleep tonight for better overall health.",
  "Practice gratitude by writing down three things you're thankful for.",
  "Take a break from screens for an hour before bedtime for better sleep.",
  "Try a new form of exercise this week to challenge your body.",
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  // In a real app, we would use the userId to fetch user preferences and generate a personalized tip
  const randomTip = tips[Math.floor(Math.random() * tips.length)]

  // Simulate sending the tip via the user's preferred method
  console.log(`Sending tip to user ${userId}: ${randomTip}`)

  return NextResponse.json({ tip: randomTip })
}

export async function POST(request: Request) {
  const body = await request.json()
  const { userId, preferences } = body

  // In a real app, we would save the user's preferences to a database here
  console.log(`Saving preferences for user ${userId}:`, preferences)

  return NextResponse.json({ success: true })
}

