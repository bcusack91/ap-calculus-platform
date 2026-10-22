// @vitest-environment jsdom
/**
 * InteractiveLessonRenderer end to end for the AP Calculus renderer fixes:
 *  - a `figure` on a section draws the sanitized SVG above the question, and a
 *    stand-alone `type: 'figure'` step needs no answer;
 *  - a Format A input box keyed `'5/3'` (calcab-direct-substitution-method p1,
 *    "(decimal or fraction)") accepts the decimal 1.667.
 * Mocks mirror tests/lib/lesson-first-session.test.tsx.
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

const SVG =
  '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg"><g class="fig-accent">' +
  '<path d="M 50 170 Q 110 80 160 60" fill="none" stroke="currentColor"/>' +
  '<circle class="fig-bg" cx="160" cy="60" r="4.5" stroke="currentColor"/></g></svg>'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PARTS: any = [
  {
    title: 'Direct substitution',
    data: {
      topicSlug: 'direct-substitution-method',
      sections: [
        {
          id: 'fig-step',
          type: 'figure',
          content: 'Study the graph.',
          figure: { svg: SVG, alt: 'A rising curve with an open circle at (1, 4).', caption: 'Figure 1.' },
        },
        {
          id: 'dsm1-continuity',
          type: 'input-boxes',
          content: 'Use the graph above.\n\n**1)** $\\lim_{x \\to 4} \\dfrac{x + 1}{x - 1} = ?$ (decimal or fraction)',
          figure: { svg: SVG, alt: 'The same curve, shown again for the question.' },
          exercise: { boxes: 1, correctAnswers: ['5/3'], hint1: '$(4+1)/(4-1)$' },
        },
      ],
    },
  },
]

const nextButton = () =>
  screen.getAllByRole('button').find((b) => /Next|Quiz|Done/.test(b.textContent ?? '') && !/Previous/.test(b.getAttribute('aria-label') ?? ''))!

beforeEach(() => {
  window.scrollTo = vi.fn()
  vi.stubGlobal('fetch', vi.fn(async () => ({ ok: false, status: 404, json: async () => ({}) })))
})
afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  window.localStorage.clear()
})

describe('InteractiveLessonRenderer — figures and numeric answers', () => {
  it('draws a figure step, then accepts 1.667 for a 5/3 key under the figure', async () => {
    render(<InteractiveLessonRenderer topicSlug="direct-substitution-method" courseSlug="ap-calculus-ab" preloadedParts={PARTS} />)

    // Plain arrival may show the start screen first.
    const start = await screen.findByText(/Study the graph\.|Start from the Beginning/)
    if (/Start from the Beginning/.test(start.textContent ?? '')) fireEvent.click(start)

    await screen.findByText('Study the graph.')
    const fig = screen.getByRole('img', { name: 'A rising curve with an open circle at (1, 4).' })
    expect(fig.querySelector('svg')).toBeTruthy()
    expect(fig.innerHTML).toContain('fig-accent')
    // A figure step needs no answer.
    expect((nextButton() as HTMLButtonElement).disabled).toBe(false)
    await act(async () => { fireEvent.click(nextButton()) })

    // The question section carries its own figure, drawn above the prompt.
    const qFig = await screen.findByRole('img', { name: 'The same curve, shown again for the question.' })
    expect(qFig.querySelector('svg')).toBeTruthy()
    const box = screen.getByPlaceholderText('?') as HTMLInputElement
    expect(qFig.compareDocumentPosition(box) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()

    fireEvent.change(box, { target: { value: '1.6' } })
    fireEvent.click(screen.getByText('Check Answer'))
    expect(screen.getByText('❌')).toBeTruthy()

    fireEvent.change(box, { target: { value: '1.667' } })
    fireEvent.click(screen.getByText('Check Answer'))
    expect(screen.getByText('✅')).toBeTruthy()
  })
})
