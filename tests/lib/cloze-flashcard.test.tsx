// @vitest-environment jsdom
/**
 * Progressive reveal for multi-blank cloze cards.
 *
 * A card with several `{{cN::…}}` deletions used to expose every answer on
 * one "Show Answer" click, so the student only ever tested the first blank.
 * Now each distinct index reveals in turn (same-index deletions together, as
 * in Anki) and the per-card rating buttons wait for the last reveal. Cards
 * with one blank keep the original single-click flow.
 */
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import type { ComponentProps } from 'react'
import { ClozeFlashcard } from '@/components/cloze-flashcard'

// Revealed deletions go through rehype-katex directly; the lazy loader is
// mocked so nothing in the tree tries to fetch KaTeX at test time.
vi.mock('@/lib/katex-lazy', () => ({
  preloadKatex: () => Promise.resolve(),
  renderKatexSync: (s: string) => s,
  renderKatex: async (s: string) => s,
}))

const intervals = { again: '1m', hard: '6m', good: '10m', easy: '4d' }

function mount(front: string, extra: Partial<ComponentProps<typeof ClozeFlashcard>> = {}) {
  const onRate = vi.fn()
  const utils = render(
    <ClozeFlashcard
      front={front}
      back="Because that is how it works."
      topicTitle="Carbonyls"
      onRate={onRate}
      reviewing={false}
      intervals={intervals}
      {...extra}
    />,
  )
  return { ...utils, onRate }
}

const hidden = (c: HTMLElement) => c.querySelectorAll('[data-cloze="hidden"]')
const revealed = (c: HTMLElement) => c.querySelectorAll('[data-cloze="revealed"]')
const revealedText = (c: HTMLElement) => [...revealed(c)].map((el) => el.textContent?.trim())
const ratingButtons = () => screen.queryAllByRole('button', { name: /again|hard|good|easy/i })
const cue = () => screen.queryByText(/\d+ of \d+ revealed/)

describe('single-blank card (unchanged flow)', () => {
  it('shows the answer, explanation and rating previews on one click', () => {
    const { container, onRate } = mount('Rate-limiter of glycolysis: {{c1::PFK-1}}.')

    expect(hidden(container)).toHaveLength(1)
    expect(cue()).toBeNull()
    expect(ratingButtons()).toHaveLength(0)
    expect(screen.queryByText('Because that is how it works.')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Show Answer' }))

    expect(hidden(container)).toHaveLength(0)
    expect(revealedText(container)).toEqual(['PFK-1'])
    expect(screen.getByText('Because that is how it works.')).toBeInTheDocument()
    expect(ratingButtons()).toHaveLength(4)
    // Interval previews from the `intervals` prop, not the fallbacks.
    expect(screen.getByRole('button', { name: /easy/i })).toHaveTextContent('4d')
    expect(screen.getByRole('button', { name: /hard/i })).toHaveTextContent('6m')

    fireEvent.click(screen.getByRole('button', { name: /good/i }))
    expect(onRate).toHaveBeenCalledWith('good')
  })
})

describe('three distinct blanks', () => {
  const front = 'Acyl chloride > {{c1::anhydride}} > {{c2::ester}} > {{c3::amide}}.'

  it('reveals one blank per click, in index order, and holds the ratings until the last', () => {
    const { container, onRate } = mount(front)

    expect(hidden(container)).toHaveLength(3)
    expect(cue()).toHaveTextContent('0 of 3 revealed')
    expect(container.querySelector('[data-cloze-active]')?.getAttribute('data-cloze-index')).toBe('1')
    expect(ratingButtons()).toHaveLength(0)

    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 1' }))
    expect(revealedText(container)).toEqual(['anhydride'])
    expect(hidden(container)).toHaveLength(2)
    expect(cue()).toHaveTextContent('1 of 3 revealed')
    expect(container.querySelector('[data-cloze-active]')?.getAttribute('data-cloze-index')).toBe('2')
    expect(ratingButtons()).toHaveLength(0)
    expect(screen.queryByText('Because that is how it works.')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 2' }))
    expect(revealedText(container)).toEqual(['anhydride', 'ester'])
    expect(cue()).toHaveTextContent('2 of 3 revealed')
    expect(ratingButtons()).toHaveLength(0)

    // The final reveal is labelled like the single-blank flow.
    fireEvent.click(screen.getByRole('button', { name: 'Show Answer' }))
    expect(revealedText(container)).toEqual(['anhydride', 'ester', 'amide'])
    expect(hidden(container)).toHaveLength(0)
    expect(cue()).toHaveTextContent('3 of 3 revealed')
    expect(screen.getByText('Because that is how it works.')).toBeInTheDocument()
    expect(ratingButtons()).toHaveLength(4)
    expect(screen.getByRole('button', { name: /again/i })).toHaveTextContent('1m')

    fireEvent.click(screen.getByRole('button', { name: /again/i }))
    expect(onRate).toHaveBeenCalledTimes(1)
    expect(onRate).toHaveBeenCalledWith('again')
  })

  it('reveals by numeric index, not document order', () => {
    const { container } = mount('{{c2::second}} comes after {{c1::first}}.')
    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 1' }))
    expect(revealedText(container)).toEqual(['first'])
    expect(hidden(container)[0].getAttribute('data-cloze-index')).toBe('2')
  })

  it('resets to fully hidden when the parent swaps in the next card', () => {
    const { container, rerender, onRate } = mount(front)
    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 1' }))
    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 2' }))
    expect(revealed(container)).toHaveLength(2)

    rerender(
      <ClozeFlashcard
        front="Next card: {{c1::one}} and {{c2::two}}."
        back="Next explanation."
        topicTitle="Carbonyls"
        onRate={onRate}
        reviewing={false}
        intervals={intervals}
      />,
    )
    expect(revealed(container)).toHaveLength(0)
    expect(hidden(container)).toHaveLength(2)
    expect(cue()).toHaveTextContent('0 of 2 revealed')
  })
})

describe('same-index deletions', () => {
  it('reveal together in one step, exactly like a single-blank card', () => {
    const { container } = mount('Tollens oxidizes {{c1::aldehydes}} but not {{c1::ketones}}.')
    expect(hidden(container)).toHaveLength(2)
    expect(cue()).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Show Answer' }))
    expect(revealedText(container)).toEqual(['aldehydes', 'ketones'])
    expect(ratingButtons()).toHaveLength(4)
  })

  it('form one step alongside a distinct index', () => {
    const { container } = mount('{{c1::a}} and {{c1::b}} then {{c2::c}}.')
    expect(cue()).toHaveTextContent('0 of 2 revealed')

    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 1' }))
    expect(revealedText(container)).toEqual(['a', 'b'])
    expect(hidden(container)).toHaveLength(1)
    expect(ratingButtons()).toHaveLength(0)

    fireEvent.click(screen.getByRole('button', { name: 'Show Answer' }))
    expect(revealedText(container)).toEqual(['a', 'b', 'c'])
    expect(ratingButtons()).toHaveLength(4)
  })
})

describe('keyboard', () => {
  const front = '{{c1::A}} then {{c2::B}} then {{c3::C}}.'

  it('Space/Enter reveal the next blank; 1-4 rate only once everything is shown', () => {
    const { container, onRate } = mount(front)

    // Rating keys do nothing while blanks remain.
    fireEvent.keyDown(window, { key: '3' })
    expect(onRate).not.toHaveBeenCalled()

    fireEvent.keyDown(window, { key: ' ' })
    expect(revealedText(container)).toEqual(['A'])
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(revealedText(container)).toEqual(['A', 'B'])
    expect(ratingButtons()).toHaveLength(0)

    fireEvent.keyDown(window, { key: '2' })
    expect(onRate).not.toHaveBeenCalled()

    fireEvent.keyDown(window, { key: ' ' })
    expect(revealedText(container)).toEqual(['A', 'B', 'C'])
    expect(ratingButtons()).toHaveLength(4)

    fireEvent.keyDown(window, { key: '3' })
    expect(onRate).toHaveBeenCalledWith('good')
  })

  it('ignores key auto-repeat and keys aimed at a focused control', () => {
    const { container } = mount(front)

    fireEvent.keyDown(window, { key: ' ', repeat: true })
    expect(revealed(container)).toHaveLength(0)

    // A Space on the focused Show button is the button's own click; the
    // window handler must not reveal a second blank for the same press.
    fireEvent.keyDown(screen.getByRole('button', { name: 'Show Blank 1' }), { key: ' ' })
    expect(revealed(container)).toHaveLength(0)
  })

  it('does not rate while a review is already in flight', () => {
    const { onRate } = mount('{{c1::only}}', { reviewing: true })
    fireEvent.keyDown(window, { key: ' ' })
    expect(ratingButtons()).toHaveLength(4)
    fireEvent.keyDown(window, { key: '4' })
    expect(onRate).not.toHaveBeenCalled()
  })
})

describe('LaTeX inside a blank', () => {
  it('renders the revealed deletion through KaTeX', () => {
    const { container } = mount('Elementary charge: {{c1::1.6 \\times 10^{-19}}} C, mass {{c2::9.11 \\times 10^{-31}}} kg.')
    expect(container.querySelector('.katex')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Show Blank 1' }))
    const first = revealed(container)[0]
    expect(first.querySelector('.katex')).not.toBeNull()
    // Only the revealed deletion is rendered; the hidden one stays a blank.
    expect(hidden(container)).toHaveLength(1)
    expect(hidden(container)[0].textContent).toBe('')
  })
})
