/**
 * Entrance Quiz — The Chain Rule (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Chain Rule Basics
  {
    id: 'chr-ent-1a',
    question: 'Find $\\dfrac{d}{dx}(4 - 3x^2)^5$.',
    options: ['$-6x(4 - 3x^2)^4$', '$5(4 - 3x^2)^4$', '$-30x(4 - 3x^2)^4$', '$30x(4 - 3x^2)^4$'],
    correctIndex: 2,
    explanation: 'Outer derivative $5(4 - 3x^2)^4$ times inner derivative $-6x$ gives $-30x(4 - 3x^2)^4$. Stopping after the outer derivative gives $5(4 - 3x^2)^4$.',
    partNumber: 1,
    partTitle: 'Chain Rule Basics',
  },
  {
    id: 'chr-ent-1b',
    question: 'Let $f(x) = e^{\\sqrt{x}}$. Find $f\'(4)$.',
    options: ['$e^2$', '$\\frac{e^2}{4}$', '$4e^2$', '$\\frac{e^2}{2}$'],
    correctIndex: 1,
    explanation: '$f\'(x) = e^{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}}$. At $x = 4$: $e^2 \\cdot \\frac{1}{4} = \\frac{e^2}{4}$. Leaving off the inner derivative gives $e^2$.',
    partNumber: 1,
    partTitle: 'Chain Rule Basics',
  },
  // Part 2 — Nested Functions & Double Chain Rule
  {
    id: 'chr-ent-2a',
    question: 'Find $\\dfrac{d}{dx}\\sin^4(3x)$.',
    options: ['$4\\sin^3(3x)\\cos(3x)$', '$12\\sin^3(3x)$', '$12\\sin^3(3x)\\cos(3x)$', '$4\\cos^3(3x)$'],
    correctIndex: 2,
    explanation: 'Three layers: the power gives $4\\sin^3(3x)$, the sine gives $\\cos(3x)$, and the inside gives 3. Multiplying all three gives $12\\sin^3(3x)\\cos(3x)$.',
    partNumber: 2,
    partTitle: 'Nested Functions & Double Chain Rule',
  },
  {
    id: 'chr-ent-2b',
    question: 'Let $f(x) = e^{\\cos(\\pi x)}$. Find $f\'\\left(\\frac{1}{2}\\right)$.',
    options: ['$\\pi$', '$-1$', '$-\\pi e$', '$-\\pi$'],
    correctIndex: 3,
    explanation: '$f\'(x) = e^{\\cos(\\pi x)} \\cdot (-\\sin(\\pi x)) \\cdot \\pi$. At $x = \\frac{1}{2}$: $e^0 \\cdot (-1) \\cdot \\pi = -\\pi$. Forgetting the innermost factor $\\pi$ gives $-1$.',
    partNumber: 2,
    partTitle: 'Nested Functions & Double Chain Rule',
  },
  // Part 3 — Implicit Differentiation
  {
    id: 'chr-ent-3a',
    question: 'The point $(3, 1)$ lies on the curve $x^2 y + y^3 = 10$. Find $\\dfrac{dy}{dx}$ there.',
    options: ['$-\\frac{1}{2}$', '$-1$', '$-2$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'Differentiate: $2xy + x^2\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = \\frac{-2xy}{x^2 + 3y^2}$. At $(3, 1)$: $\\frac{-6}{12} = -\\frac{1}{2}$. Skipping the product rule on $x^2y$ gives $-2$.',
    partNumber: 3,
    partTitle: 'Implicit Differentiation',
  },
  {
    id: 'chr-ent-3b',
    question: 'Find $\\dfrac{dy}{dx}$ if $e^y = x + y$.',
    options: ['$\\frac{1}{e^y}$', '$\\frac{1}{e^y - 1}$', '$e^y - 1$', '$\\frac{1}{e^y + 1}$'],
    correctIndex: 1,
    explanation: 'Differentiate both sides: $e^y\\frac{dy}{dx} = 1 + \\frac{dy}{dx}$. Collect terms: $\\frac{dy}{dx}(e^y - 1) = 1$, so $\\frac{dy}{dx} = \\frac{1}{e^y - 1}$. Forgetting the $\\frac{dy}{dx}$ from $y$ on the right gives $\\frac{1}{e^y}$.',
    partNumber: 3,
    partTitle: 'Implicit Differentiation',
  },
  // Part 4 — Related Rates Intro
  {
    id: 'chr-ent-4a',
    question: 'The radius of a sphere increases at $0.5$ cm/s. How fast is its surface area $S = 4\\pi r^2$ increasing when $r = 4$ cm?',
    options: ['$32\\pi$ cm$^2$/s', '$4\\pi$ cm$^2$/s', '$16\\pi$ cm$^2$/s', '$64\\pi$ cm$^2$/s'],
    correctIndex: 2,
    explanation: 'Differentiate with respect to time: $\\frac{dS}{dt} = 8\\pi r\\frac{dr}{dt} = 8\\pi(4)(0.5) = 16\\pi$ cm$^2$/s. The value $64\\pi$ is the surface area itself, not its rate.',
    partNumber: 4,
    partTitle: 'Related Rates Intro',
  },
  {
    id: 'chr-ent-4b',
    question: 'A rectangle\'s length grows at $3$ cm/s while its width shrinks at $2$ cm/s. How fast is its area changing when the length is $10$ cm and the width is $6$ cm?',
    options: ['$38$ cm$^2$/s', '$-6$ cm$^2$/s', '$2$ cm$^2$/s', '$-2$ cm$^2$/s'],
    correctIndex: 3,
    explanation: 'With $A = lw$, the product rule gives $\\frac{dA}{dt} = l\\frac{dw}{dt} + w\\frac{dl}{dt} = 10(-2) + 6(3) = -2$ cm$^2$/s. Multiplying the two rates gives $-6$, which is not how a product changes.',
    partNumber: 4,
    partTitle: 'Related Rates Intro',
  },
  // Part 5 — Logarithmic Differentiation & Inverse Trig
  {
    id: 'chr-ent-5a',
    question: 'Let $f(x) = \\arcsin\\left(\\dfrac{x}{2}\\right)$. Find $f\'(1)$.',
    options: ['$\\frac{1}{\\sqrt{3}}$', '$\\frac{2}{\\sqrt{3}}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{2}{5}$'],
    correctIndex: 0,
    explanation: '$f\'(x) = \\frac{1/2}{\\sqrt{1 - x^2/4}}$. At $x = 1$: $\\frac{1/2}{\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}}$. Omitting the inner factor $\\frac{1}{2}$ gives $\\frac{2}{\\sqrt{3}}$, and using the arctangent formula gives $\\frac{2}{5}$.',
    partNumber: 5,
    partTitle: 'Logarithmic Differentiation & Inverse Trig',
  },
  {
    id: 'chr-ent-5b',
    question: 'Find $\\dfrac{d}{dx}\\left(3^{x^2}\\right)$.',
    options: ['$x^2 \\cdot 3^{x^2 - 1}$', '$2x \\cdot 3^{x^2}\\ln 3$', '$2x \\cdot 3^{x^2}$', '$3^{x^2}\\ln 3$'],
    correctIndex: 1,
    explanation: 'For a constant base, $\\frac{d}{dx}a^u = a^u \\ln a \\cdot u\'$. Here $u = x^2$, so the derivative is $3^{x^2} \\ln 3 \\cdot 2x$. Treating $3^{x^2}$ like a power function gives $x^2 \\cdot 3^{x^2 - 1}$, which is wrong.',
    partNumber: 5,
    partTitle: 'Logarithmic Differentiation & Inverse Trig',
  },
  // Part 6 — Mixed Chain Rule Problems
  {
    id: 'chr-ent-6a',
    question: 'Given $g(1) = 2$, $g\'(1) = -1$, $f\'(1) = 3$ and $f\'(2) = 4$, let $h(x) = f(g(x))$. Find $h\'(1)$.',
    options: ['$-3$', '$4$', '$-4$', '$8$'],
    correctIndex: 2,
    explanation: '$h\'(1) = f\'(g(1)) \\cdot g\'(1) = f\'(2) \\cdot (-1) = -4$. Using $f\'(1)$ instead of $f\'(g(1))$ gives $-3$.',
    partNumber: 6,
    partTitle: 'Mixed Chain Rule Problems',
  },
  {
    id: 'chr-ent-6b',
    question: 'Let $f(x) = x e^{-2x}$. Find $f\'(1)$.',
    options: ['$e^{-2}$', '$-2e^{-2}$', '$3e^{-2}$', '$-e^{-2}$'],
    correctIndex: 3,
    explanation: 'Product rule with the chain rule: $f\'(x) = e^{-2x} + x(-2e^{-2x}) = e^{-2x}(1 - 2x)$. At $x = 1$: $e^{-2}(-1) = -e^{-2}$.',
    partNumber: 6,
    partTitle: 'Mixed Chain Rule Problems',
  },
  // Part 7 — Chain Rule Review
  {
    id: 'chr-ent-7a',
    question: 'Find $\\dfrac{d}{dx}\\displaystyle\\int_2^{x^2} \\ln t \\, dt$ for $x > 0$.',
    options: ['$2x\\ln(x^2)$', '$\\ln(x^2) - \\ln 2$', '$2x\\ln(x^2) - 2\\ln 2$', '$\\frac{1}{x^2} \\cdot 2x$'],
    correctIndex: 0,
    explanation: 'By the Fundamental Theorem with the chain rule, substitute the upper limit into the integrand and multiply by its derivative: $\\ln(x^2) \\cdot 2x$. The constant lower limit contributes nothing.',
    partNumber: 7,
    partTitle: 'Chain Rule Review',
  },
  {
    id: 'chr-ent-7b',
    question: 'Let $f(x) = \\ln(\\cos(2x))$. Find $f\'\\left(\\frac{\\pi}{8}\\right)$.',
    options: ['$-1$', '$-2$', '$2$', '$-2\\sqrt{2}$'],
    correctIndex: 1,
    explanation: '$f\'(x) = \\frac{-2\\sin(2x)}{\\cos(2x)} = -2\\tan(2x)$. At $\\frac{\\pi}{8}$: $-2\\tan\\frac{\\pi}{4} = -2$. Dropping the inner factor 2 gives $-1$.',
    partNumber: 7,
    partTitle: 'Chain Rule Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Chain Rule Basics' },
    { partNumber: 2, partTitle: 'Nested Functions & Double Chain Rule' },
    { partNumber: 3, partTitle: 'Implicit Differentiation' },
    { partNumber: 4, partTitle: 'Related Rates Intro' },
    { partNumber: 5, partTitle: 'Logarithmic Differentiation & Inverse Trig' },
    { partNumber: 6, partTitle: 'Mixed Chain Rule Problems' },
    { partNumber: 7, partTitle: 'Chain Rule Review' },
  ]
}
