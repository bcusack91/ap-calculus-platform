// @vitest-environment jsdom
/**
 * A worked-example problem section may carry SEVERAL numeric checkpoints
 * (parts a–b, then part c). Owner bug 2026-11-12 (Circuits Part 2, example 1):
 * after parts a–b were graded the card offered "Skip the solution" / "Watch
 * the solution anyway" and moved on, so part c was never asked and the
 * section never counted as answered. The solution choice must wait for the
 * LAST question, and skipping needs every question right on the first try.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => <a href={href} {...rest}>{children}</a>,
}))
vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }) }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => undefined }))
vi.mock('@/components/MathText', () => ({ MathText: ({ text }: { text: string }) => <span>{text}</span> }))
vi.mock('@/components/video/PreferVideoToggle', () => ({ PreferVideoToggle: () => null }))
vi.mock('@/components/video/InstructorAvatar', () => ({ InstructorAvatar: () => null }))
vi.mock('@/components/video/VideoPlayer', () => ({
  default: () => <div data-testid="stub-player" />,
}))

import VideoLessonPlayer from '@/components/video/VideoLessonPlayer'
import type { StudentStep } from '@/lib/video-lesson-core'

const problem: StudentStep = {
  clipId: 'clip-problem',
  title: 'Example 1: the problem',
  provider: 'FILE',
  providerId: '/x/problem.mp4',
  durationSec: 40,
  lowYield: false,
  role: 'problem',
  video: 2,
  videoTitle: 'Worked Examples',
  questions: [
    { index: 0, kind: 'numeric', question: 'Example 1. A 30 V battery drives 3, 5 and 7 Ω in series.', lowYield: false, parts: [
      { label: 'a', prompt: 'The current', unit: 'A' },
      { label: 'b', prompt: 'Drop across the 3 Ω', unit: 'V' },
    ] },
    { index: 1, kind: 'numeric', question: 'Example 1, part (c). Potential after the 3 Ω.', lowYield: false, parts: [
      { label: 'c', prompt: 'After the 3 Ω resistor', unit: 'V' },
    ] },
  ],
}
const solution: StudentStep = { ...problem, clipId: 'clip-solution', title: 'Example 1: the solution', role: 'solution', questions: [] }
const recap: StudentStep = { ...problem, clipId: 'clip-recap', title: 'Remember', role: 'teach', questions: [] }

/** Grades: every part whose value equals its key is right. */
let keys: Record<string, Record<number, string[]>> = {}
let fetchMock: ReturnType<typeof vi.fn>

beforeEach(() => {
  // jsdom has no scrollIntoView; the player scrolls the checkpoint card into view on phones.
  Element.prototype.scrollIntoView = vi.fn()
  keys = { 'clip-problem': { 0: ['2', '6'], 1: ['24'] } }
  fetchMock = vi.fn(async (url: string, init?: RequestInit) => {
    const json = (body: unknown, status = 200) => ({ ok: status < 400, status, json: async () => body })
    if (url.endsWith('/answer')) {
      const payload = JSON.parse(String(init?.body)) as { clipId: string; questionIndex: number; values: string[] }
      const key = keys[payload.clipId]?.[payload.questionIndex] ?? []
      const parts = key.map((k, i) => ({ correct: payload.values[i] === k, expected: k }))
      return json({ correct: parts.every((p) => p.correct), attempts: 1, parts, explanation: 'Because physics.' })
    }
    if (url.endsWith('/progress')) return json({ ok: true, steps: {} })
    return json({}, 404)
  })
  vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

function mount() {
  render(
    <VideoLessonPlayer
      lessonId="lesson-1"
      topicSlug="mcat-physics-electricity-kirchhoff-power-mcat"
      topicTitle="Circuits Part 2"
      title="Circuits Part 2"
      instructor={{ name: 'Brendan', headline: 'Tutor', photoUrl: null }}
      steps={[problem, solution, recap]}
      initialProgress={{}}
      initialIndex={0}
      initiallyComplete={false}
      pickerHref={null}
      readHref="/topics/x"
      exitQuizHref="/topics/x/interactive?exitQuiz=1"
    />,
  )
}

async function answer(parts: Record<string, string>) {
  for (const [label, value] of Object.entries(parts)) {
    fireEvent.change(screen.getByLabelText(new RegExp(`\\(${label}\\)`)), { target: { value } })
  }
  fireEvent.click(screen.getByRole('button', { name: /Check my answers/ }))
  await screen.findByText(/All correct|Not quite/)
}

describe('problem section with two numeric checkpoints', () => {
  it('asks part (c) after parts (a)–(b), then offers the skip when every part was right first time', async () => {
    mount()
    fireEvent.click(screen.getByRole('button', { name: /Enter my answers/ }))
    await answer({ a: '2', b: '6' })

    // Parts a–b graded: NOT the solution choice yet — part c is still owed.
    expect(screen.queryByRole('button', { name: /Skip the solution/ })).toBeNull()
    expect(screen.queryByRole('button', { name: /Watch the solution/ })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /^Continue/ }))

    await screen.findByLabelText(/\(c\)/)
    await answer({ c: '24' })
    expect(screen.getByRole('button', { name: /Skip the solution/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Watch the solution anyway/ })).toBeInTheDocument()

    // The step counts as answered: both questions were graded.
    const graded = fetchMock.mock.calls.filter(([u]) => String(u).endsWith('/answer')).map(([, init]) => JSON.parse(String((init as RequestInit).body)).questionIndex)
    expect(graded).toEqual([0, 1])
  })

  it('a miss on parts (a)–(b) still asks part (c), and then the solution cannot be skipped', async () => {
    mount()
    fireEvent.click(screen.getByRole('button', { name: /Enter my answers/ }))
    await answer({ a: '2', b: '9' })
    expect(screen.getByText(/Keep going — the full solution plays after the last part/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Watch the solution/ })).toBeNull()
    fireEvent.click(screen.getByRole('button', { name: /^Continue/ }))

    await screen.findByLabelText(/\(c\)/)
    await answer({ c: '24' })
    await waitFor(() => expect(screen.getByRole('button', { name: /^Watch the solution$/ })).toBeInTheDocument())
    expect(screen.queryByRole('button', { name: /Skip the solution/ })).toBeNull()
  })
})
