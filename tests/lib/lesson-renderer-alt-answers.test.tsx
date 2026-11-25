// @vitest-environment jsdom
/**
 * Typed-answer alternates (2026-11-25 key audit): Format A `exercise.acceptableAnswers[i]` (one list per box)
 * and Format B `inputs[i].acceptableAnswers` are accepted by the input-box grader. Mocks copied from
 * tests/lib/lesson-renderer-figure-input.test.tsx.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react'
import type { ReactNode } from 'react'

const { Null } = vi.hoisted(() => ({ Null: () => null }))
vi.mock('next/navigation', () => ({
  useSearchParams: () => new URLSearchParams(''),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  usePathname: () => '/topics/direct-substitution-method/interactive',
}))
vi.mock('next-auth/react', () => ({ useSession: () => ({ data: null, status: 'unauthenticated' }) }))
vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode } & Record<string, unknown>) => (
    <a href={href} {...rest}>{children}</a>
  ),
}))
// eslint-disable-next-line @next/next/no-img-element
vi.mock('next/image', () => ({ default: (p: Record<string, unknown>) => <img alt="" {...(p as object)} /> }))
vi.mock('next/dynamic', () => ({ default: () => { const Lazy = () => null; return Lazy } }))
vi.mock('react-markdown', () => ({ default: ({ children }: { children: ReactNode }) => <div>{children}</div> }))
vi.mock('remark-math', () => ({ default: () => undefined }))
vi.mock('remark-gfm', () => ({ default: () => undefined }))
vi.mock('rehype-katex', () => ({ default: () => undefined }))
vi.mock('rehype-raw', () => ({ default: () => undefined }))
vi.mock('@/lib/katex-lazy', () => ({ preloadKatex: () => Promise.resolve(), renderKatexSync: (t: string) => t }))
vi.mock('@/lib/render-rich-text', () => ({ renderRichText: (t: string) => t }))
vi.mock('@/lib/question-activity-client', () => ({ postQuestionActivity: () => undefined }))
vi.mock('@/lib/sat-math-topics', () => ({ isSatMathTopic: () => false }))
vi.mock('@/lib/competitive-course-map', () => ({ competitiveHrefForCourse: () => '/competitive' }))
vi.mock('@/data/ap-reference-sheets', () => ({ hasReferenceSheet: () => false }))
vi.mock('@/data/interactive-lessons/beyond-exam', () => ({ isBeyondExam: () => false }))
vi.mock('@/data/exit-quizzes', () => ({ hasExitQuiz: () => false, generateExitQuiz: async () => [], isTrackMix: () => false }))
vi.mock('@/data/entrance-quizzes', () => ({ hasEntranceQuiz: () => false, loadEntranceQuiz: async () => null }))
vi.mock('@/hooks/useLessonProgressSaver', () => ({ useLessonProgressSaver: () => ({ sendProgress: vi.fn() }) }))
vi.mock('@/hooks/useActivitySurface', () => ({ useActivitySurface: () => undefined }))
vi.mock('@/hooks/useLessonKeyboard', () => ({ useLessonKeyboard: () => undefined }))
vi.mock('@/components/DesmosCalculatorLink', () => ({ default: Null }))
vi.mock('@/components/flashcard-notification', () => ({ FlashcardNotification: Null }))
vi.mock('@/components/CorrectAnswerCelebration', () => ({ default: Null }))
vi.mock('@/components/BookmarkButton', () => ({ default: Null }))
vi.mock('@/components/StudyNotes', () => ({ default: Null }))
vi.mock('@/components/StudyPlanNextUp', () => ({ default: Null, studyPlanTopicHref: (t: { slug: string }) => `/topics/${t.slug}/interactive` }))
vi.mock('@/components/LessonProgressBar', () => ({ default: Null }))
vi.mock('@/components/KeyboardShortcutHint', () => ({ default: Null }))
vi.mock('@/components/TextToSpeech', () => ({ default: Null }))
vi.mock('@/components/PrintButton', () => ({ default: Null }))
vi.mock('@/components/FontSizeAdjuster', () => ({ default: Null }))
vi.mock('@/components/ReadingProgressBar', () => ({ default: Null }))
vi.mock('@/components/MarkForReview', () => ({ default: Null }))
vi.mock('@/components/ScratchPad', () => ({ default: Null }))

import InteractiveLessonRenderer from '@/components/InteractiveLessonRenderer'

const part = (sections: unknown[]) => [{ title: 'Alternates', data: { topicSlug: 'alt-answers', sections } }]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FORMAT_A: any = part([
  {
    id: 'a1', type: 'input-boxes', content: '**Key Terms**\n\n1) Farming to feed one family\n2) Gestalt psychologist of the ape studies',
    exercise: { boxes: 2, correctAnswers: ['subsistence', 'Köhler'], acceptableAnswers: [['subsistence agriculture', 'subsistence farming'], []] },
  },
])
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FORMAT_B: any = part([
  {
    id: 'b1', type: 'input-boxes', content: 'Name the program.',
    exercise: { inputs: [{ label: 'WWII Mexican guest-worker program', correctAnswer: 'Bracero', acceptableAnswers: ['Bracero Program'] }] },
  },
])

beforeEach(() => {
  window.scrollTo = vi.fn()
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 404, json: async () => ({}) })))
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  window.localStorage.clear()
})

async function open(parts: unknown) {
  render(<InteractiveLessonRenderer topicSlug="alt-answers" courseSlug="ap-human-geography" preloadedParts={parts as never} />)
  const first = await screen.findByText(/Key Terms|Name the program|Start from the Beginning/)
  if (/Start from the Beginning/.test(first.textContent ?? '')) await act(async () => { fireEvent.click(first) })
}

describe('InteractiveLessonRenderer — typed-answer alternates', () => {
  it('Format A: a per-box alternate and an accent-free spelling are accepted', async () => {
    await open(FORMAT_A)
    const boxes = (await screen.findAllByRole('textbox')) as HTMLInputElement[]
    fireEvent.change(boxes[0], { target: { value: 'commercial agriculture' } })
    fireEvent.change(boxes[1], { target: { value: 'Kohler' } })
    fireEvent.click(screen.getByText('Check Answer'))
    expect(screen.getAllByText('❌').length).toBe(1) // box 1 wrong; Kohler (box 2) already right
    fireEvent.change(boxes[0], { target: { value: 'Subsistence Agriculture' } })
    fireEvent.click(screen.getByText('Check Answer'))
    expect(screen.queryAllByText('❌').length).toBe(0)
    expect(screen.getAllByText('✅').length).toBeGreaterThan(0)
  })

  it('Format B: inputs[i].acceptableAnswers is accepted', async () => {
    await open(FORMAT_B)
    const box = (await screen.findAllByRole('textbox'))[0] as HTMLInputElement
    fireEvent.change(box, { target: { value: 'Bracero Program' } })
    fireEvent.click(screen.getByText('Check Answer'))
    expect(screen.getAllByText('✅').length).toBeGreaterThan(0)
  })
})
