import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import { contactLimiter, getClientIp } from '@/lib/rate-limit-v2'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  source: z.string().optional().default('website'),
  interests: z.array(z.string()).optional().default([]),
})

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 req / 5 min (reuses contactLimiter)
    const ip = getClientIp(request)
    const { success } = await contactLimiter.check(ip)
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const data = subscribeSchema.parse(body)

    // Upsert to handle cases where the email already exists
    const subscriber = await prisma.emailSubscriber.upsert({
      where: { email: data.email.toLowerCase() },
      update: {
        // If they re-subscribe, mark as not unsubscribed and update interests
        unsubscribed: false,
        source: data.source,
        interests: {
          set: [...new Set(data.interests)],
        },
      },
      create: {
        email: data.email.toLowerCase(),
        source: data.source,
        interests: data.interests,
      },
    })

    return NextResponse.json(
      { success: true, id: subscriber.id },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0]?.message || 'Invalid input' },
        { status: 400 }
      )
    }

    console.error('Subscribe error:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
