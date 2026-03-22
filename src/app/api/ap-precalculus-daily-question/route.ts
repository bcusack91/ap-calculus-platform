import { NextResponse } from 'next/server'
import { getDailyQuestions } from '@/data/precalc-daily-question'

export const revalidate = 3600

export async function GET() {
  try {
    const questions = getDailyQuestions()
    return NextResponse.json({ date: new Date().toISOString().slice(0, 10), questions })
  } catch {
    return NextResponse.json({ error: 'Failed to generate daily questions' }, { status: 500 })
  }
}
