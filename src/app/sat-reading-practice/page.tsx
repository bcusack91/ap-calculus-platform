import type { Metadata } from 'next'
import Link from 'next/link'
import { SAT_PASSAGES } from '@/data/sat-passages'
import { PassageBrowser, type PassageSummary } from './passage-browser'

// Server component: the full 61-passage bank is imported HERE only, so it never
// ships to the client. The browser receives a lightweight summary list
// (title/genre/excerpt/question count — ~13 KB serialized vs ~83 KB for the
// full bank) and fetches individual passages from /api/sat-passages on demand.

export const metadata: Metadata = {
  title: `SAT Reading Practice — ${SAT_PASSAGES.length} Free Passages | Study Mondo`,
  description: `Practice Digital SAT Reading & Writing with ${SAT_PASSAGES.length} free passages across literary, social science, natural science, and historical genres — with answer explanations for every question.`,
  alternates: { canonical: 'https://www.studymondo.com/sat-reading-practice' },
}

function buildSummaries(): PassageSummary[] {
  return SAT_PASSAGES.map((p) => ({
    id: p.id,
    title: p.title,
    genre: p.genre,
    // Keep excerpts short (≤140 chars) so the serialized props stay a small
    // fraction of the full passage bank.
    excerpt: p.text.replace(/\s+/g, ' ').trim().slice(0, 140),
    questionCount: p.questions.length,
  }))
}

export default function SatReadingPracticePage() {
  const summaries = buildSummaries()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <Link href="/sat" className="mb-4 inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            SAT Prep
          </Link>
          <h1 className="mb-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">SAT Reading Practice</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {SAT_PASSAGES.length} passages across four genres — practice the Digital SAT Reading &amp; Writing skills passage by passage.
          </p>
        </div>

        <PassageBrowser passages={summaries} />
      </div>
    </div>
  )
}
