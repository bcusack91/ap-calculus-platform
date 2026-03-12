import { NextResponse } from 'next/server'
import { getMCATDailyQuestions } from '@/data/mcat-daily-question'

export const revalidate = 3600 // revalidate once per hour (questions change daily)

export async function GET() {
  try {
    const questions = await getMCATDailyQuestions()
    return NextResponse.json({
      date: new Date().toISOString().slice(0, 10),
      questions,
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate daily questions' },
      { status: 500 },
    )
  }
}
