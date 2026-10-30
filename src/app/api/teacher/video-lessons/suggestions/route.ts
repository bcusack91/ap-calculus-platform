import { NextRequest, NextResponse } from 'next/server'
import { noStore, requireInstructorCaller, topicQuestionSuggestions } from '@/lib/video-lesson-authoring'

/**
 * GET /api/teacher/video-lessons/suggestions?topic=<slug>[&instructorId=] —
 * candidate checkpoint questions from the topic's interactive lesson
 * (exercise and quiz questions) and its slide-deck polls, already reviewed
 * and length-balanced. 4-option items only, deduped by question text, each
 * tagged with its source.
 */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const r = await requireInstructorCaller(sp.get('instructorId'))
  if ('error' in r) return r.error
  const topic = sp.get('topic') ?? ''
  if (!topic) return NextResponse.json({ error: 'topic required' }, { status: 400 })
  const suggestions = await topicQuestionSuggestions(topic)
  return NextResponse.json({ suggestions }, { headers: noStore })
}
