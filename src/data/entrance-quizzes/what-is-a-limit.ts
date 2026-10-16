/**
 * Entrance Quiz — What Is a Limit? — 8 questions (2 per lesson part, 4 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Intuitive Idea of a Limit
  {
    id: 'wil-ent-1a',
    question: 'The graph of $f$ is an unbroken curve except for an open circle at $(2, 5)$ and a filled dot at $(2, 1)$. Which pair of statements is correct?',
    options: ['$\\lim_{x \\to 2} f(x) = 1$ and $f(2) = 5$', '$\\lim_{x \\to 2} f(x) = 5$ and $f(2) = 1$', '$\\lim_{x \\to 2} f(x) = 5$ and $f(2)$ is undefined', '$\\lim_{x \\to 2} f(x)$ does not exist and $f(2) = 1$'],
    correctIndex: 1,
    explanation: 'The curve heads toward the open circle from both sides, so the limit is 5; the filled dot gives the actual value $f(2) = 1$. The limit describes behavior near 2, not the value at 2.',
    partNumber: 1,
    partTitle: 'The Intuitive Idea of a Limit',
  },
  {
    id: 'wil-ent-1b',
    question: 'All you know about a function $f$ is that $f(5) = 8$. What can you conclude about $\\lim_{x \\to 5} f(x)$?',
    options: ['It must equal 8, the value of $f(5)$', 'It cannot exist, since $f(5)$ is defined', 'It must equal 5, the value $x$ approaches', 'Nothing, since it depends on values near 5'],
    correctIndex: 3,
    explanation: 'A limit depends only on the values of $f$ near 5, not on $f(5)$ itself. The single value $f(5) = 8$ says nothing about where $f(x)$ is heading.',
    partNumber: 1,
    partTitle: 'The Intuitive Idea of a Limit',
  },
  // Part 2 — Limit Notation
  {
    id: 'wil-ent-2a',
    question: 'Which statement says "as $x$ approaches $-1$ from the right, $p(x)$ decreases without bound"?',
    options: ['$\\lim_{x \\to -1^-} p(x) = -\\infty$', '$\\lim_{x \\to -1^+} p(x) = -\\infty$', '$\\lim_{x \\to +\\infty} p(x) = -1$', '$\\lim_{x \\to -\\infty} p(x) = -1$'],
    correctIndex: 1,
    explanation: 'Approaching from the right is written $x \\to -1^+$, and decreasing without bound is written $= -\\infty$. The superscript minus would mean approaching from the left.',
    partNumber: 2,
    partTitle: 'Limit Notation',
  },
  {
    id: 'wil-ent-2b',
    question: 'If $\\lim_{x \\to \\infty} r(x) = -4$, which feature must the graph of $r$ have?',
    options: ['A vertical asymptote at $x = -4$', 'A horizontal asymptote $y = -4$', 'An absolute minimum value of $-4$', 'A horizontal tangent line at $y = -4$'],
    correctIndex: 1,
    explanation: 'A limit at infinity describes end behavior: as $x$ grows without bound, $r(x)$ approaches $-4$, so $y = -4$ is a horizontal asymptote. A vertical asymptote would come from a limit equal to $\\pm\\infty$ at a finite $x$.',
    partNumber: 2,
    partTitle: 'Limit Notation',
  },
  // Part 3 — When Does a Limit Exist?
  {
    id: 'wil-ent-3a',
    question: 'Let $f(x) = \\begin{cases} 4 - x^2 & x < -1 \\\\ x + 4 & x \\ge -1 \\end{cases}$. What is $\\lim_{x \\to -1} f(x)$?',
    options: ['$5$', 'Does not exist', '$3$', '$4$'],
    correctIndex: 2,
    explanation: 'From the left, $4 - (-1)^2 = 3$; from the right, $-1 + 4 = 3$. Both one-sided limits equal 3, so the limit exists and equals 3. Getting 5 comes from treating $(-1)^2$ as $-1$.',
    partNumber: 3,
    partTitle: 'When Does a Limit Exist?',
  },
  {
    id: 'wil-ent-3b',
    question: 'For a function $g$: $\\lim_{x \\to 0^-} g(x) = 2$ and $g(0) = 2$, but as $x \\to 0^+$, $g(x)$ oscillates between $1$ and $3$ forever. What is $\\lim_{x \\to 0} g(x)$?',
    options: ['It equals 2', 'It equals 1', 'It equals 3', 'It does not exist'],
    correctIndex: 3,
    explanation: 'A two-sided limit requires both one-sided limits to exist and agree. The right-hand limit fails to exist because of the oscillation, so the two-sided limit does not exist even though the left side and $g(0)$ both equal 2.',
    partNumber: 3,
    partTitle: 'When Does a Limit Exist?',
  },
  // Part 4 — Limits That Do Not Exist
  {
    id: 'wil-ent-4a',
    question: 'Why does $\\lim_{x \\to -2} \\dfrac{x}{x + 2}$ fail to exist?',
    options: ['The one-sided limits are finite but unequal', 'The function values grow without bound', 'The function oscillates without settling', 'The function is undefined at $x = -2$'],
    correctIndex: 1,
    explanation: 'Near $x = -2$ the numerator is close to $-2$ while the denominator approaches 0, so the values blow up ($+\\infty$ from the left, $-\\infty$ from the right). Being undefined at $-2$ alone would not stop a limit from existing.',
    partNumber: 4,
    partTitle: 'Limits That Do Not Exist',
  },
  {
    id: 'wil-ent-4b',
    question: 'For $g(x) = \\dfrac{|2x - 6|}{x - 3}$, which describes the one-sided limits at $x = 3$?',
    options: ['Left limit $2$, right limit $-2$', 'Both one-sided limits equal $2$', 'Left limit $-1$, right limit $1$', 'Left limit $-2$, right limit $2$'],
    correctIndex: 3,
    explanation: 'Since $|2x - 6| = 2|x - 3|$, the function equals $-2$ for $x < 3$ and $2$ for $x > 3$. The one-sided limits are $-2$ and $2$, a jump, so the two-sided limit does not exist.',
    partNumber: 4,
    partTitle: 'Limits That Do Not Exist',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Intuitive Idea of a Limit' },
    { partNumber: 2, partTitle: 'Limit Notation' },
    { partNumber: 3, partTitle: 'When Does a Limit Exist?' },
    { partNumber: 4, partTitle: 'Limits That Do Not Exist' },
  ]
}
