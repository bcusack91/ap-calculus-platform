/**
 * Entrance Quiz — Chain Rule (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cr-ent-1a', question: 'The Chain Rule states that $\\frac{d}{dx}[f(g(x))] =$', options: ['$f\'(g(x))$', '$f\'(g(x)) \\cdot g\'(x)$', '$f\'(x) \\cdot g\'(x)$', '$f(g\'(x))$'], correctIndex: 1, explanation: 'The Chain Rule: differentiate the outer function evaluated at the inner, times the derivative of the inner.', partNumber: 1, partTitle: 'Understanding Composite Functions' },
  { id: 'cr-ent-1b', question: 'In $h(x) = \\sin(3x)$, the "outer" function is:', options: ['$3x$', '$\\sin(x)$', '$3\\sin(x)$', '$x$'], correctIndex: 1, explanation: 'The outer function is $\\sin(u)$ where $u = 3x$ is the inner function.', partNumber: 1, partTitle: 'Understanding Composite Functions' },
  { id: 'cr-ent-2a', question: 'Find $\\frac{d}{dx}[\\sin(3x)]$:', options: ['$3\\cos(3x)$', '$\\cos(3x)$', '$-3\\cos(3x)$', '$3\\sin(3x)$'], correctIndex: 0, explanation: 'Outer: $\\cos(3x)$. Inner derivative: $3$. Result: $3\\cos(3x)$.', partNumber: 2, partTitle: 'Applying the Chain Rule' },
  { id: 'cr-ent-2b', question: 'Find $\\frac{d}{dx}[(x^2+1)^5]$:', options: ['$5(x^2+1)^4$', '$10x(x^2+1)^4$', '$5(2x)^4$', '$10x^4$'], correctIndex: 1, explanation: '$5(x^2+1)^4 \\cdot 2x = 10x(x^2+1)^4$.', partNumber: 2, partTitle: 'Applying the Chain Rule' },
  { id: 'cr-ent-3a', question: 'Find $\\frac{d}{dx}[e^{5x}]$:', options: ['$e^{5x}$', '$5e^{5x}$', '$5e^{5}$', '$xe^{5x}$'], correctIndex: 1, explanation: '$\\frac{d}{dx}[e^{u}] = e^u \\cdot u\'$. Here $u = 5x$, so $5e^{5x}$.', partNumber: 3, partTitle: 'Chain Rule with Exponentials & Logs' },
  { id: 'cr-ent-3b', question: 'Find $\\frac{d}{dx}[\\ln(x^2)]$:', options: ['$\\frac{2}{x}$', '$\\frac{1}{x^2}$', '$\\frac{2x}{x^2}$', '$2\\ln x$'], correctIndex: 0, explanation: '$\\frac{1}{x^2} \\cdot 2x = \\frac{2}{x}$. (Also: $\\ln(x^2) = 2\\ln x$, derivative $= 2/x$.)', partNumber: 3, partTitle: 'Chain Rule with Exponentials & Logs' },
  { id: 'cr-ent-4a', question: 'Find $\\frac{d}{dx}[\\cos^2(x)]$:', options: ['$-2\\cos(x)\\sin(x)$', '$2\\cos(x)$', '$-\\sin^2(x)$', '$-2\\sin(x)$'], correctIndex: 0, explanation: '$2\\cos(x) \\cdot (-\\sin(x)) = -2\\cos(x)\\sin(x)$.', partNumber: 4, partTitle: 'Nested Chain Rule' },
  { id: 'cr-ent-4b', question: 'Find $\\frac{d}{dx}[\\sqrt{4x+1}]$:', options: ['$\\frac{2}{\\sqrt{4x+1}}$', '$\\frac{4}{\\sqrt{4x+1}}$', '$\\frac{1}{2\\sqrt{4x+1}}$', '$\\frac{4}{2\\sqrt{4x+1}}$'], correctIndex: 0, explanation: '$\\frac{1}{2\\sqrt{4x+1}} \\cdot 4 = \\frac{2}{\\sqrt{4x+1}}$.', partNumber: 4, partTitle: 'Nested Chain Rule' },
  { id: 'cr-ent-5a', question: 'Using implicit differentiation on $x^2 + y^2 = 25$, $\\frac{dy}{dx} =$', options: ['$\\frac{-x}{y}$', '$\\frac{x}{y}$', '$\\frac{-y}{x}$', '$\\frac{-2x}{2y}$'], correctIndex: 0, explanation: '$2x + 2y\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}$. (Option D simplifies to the same, but A is simplest.)', partNumber: 5, partTitle: 'Implicit Differentiation' },
  { id: 'cr-ent-5b', question: 'For $xy = 6$, find $\\frac{dy}{dx}$:', options: ['$\\frac{6}{x^2}$', '$\\frac{-y}{x}$', '$\\frac{-6}{x}$', '$\\frac{y}{x}$'], correctIndex: 1, explanation: 'Product Rule: $y + x\\frac{dy}{dx} = 0$, so $\\frac{dy}{dx} = -\\frac{y}{x}$.', partNumber: 5, partTitle: 'Implicit Differentiation' },
  { id: 'cr-ent-6a', question: 'Find $\\frac{d}{dx}[\\tan(2x^3)]$:', options: ['$6x^2\\sec^2(2x^3)$', '$\\sec^2(2x^3)$', '$6x^2\\tan(2x^3)$', '$2x^3\\sec^2(2x^3)$'], correctIndex: 0, explanation: '$\\sec^2(2x^3) \\cdot 6x^2 = 6x^2\\sec^2(2x^3)$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cr-ent-6b', question: 'If $y = (3x-1)^4$, find $y\'$ at $x = 1$:', options: ['$12(2)^3 = 96$', '$4(2)^3 = 32$', '$12(3)^3 = 324$', '$4(3)^3 \\cdot 3 = 108$'], correctIndex: 0, explanation: '$y\' = 4(3x-1)^3 \\cdot 3 = 12(3x-1)^3$. At $x=1$: $12(2)^3 = 96$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'cr-ent-7a', question: 'Find $\\frac{d}{dx}[e^{\\sin x}]$:', options: ['$e^{\\sin x}$', '$e^{\\cos x}$', '$\\cos(x) \\cdot e^{\\sin x}$', '$\\sin(x) \\cdot e^{\\cos x}$'], correctIndex: 2, explanation: '$e^{\\sin x} \\cdot \\cos x = \\cos(x)e^{\\sin x}$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'cr-ent-7b', question: 'If $f(x) = \\ln(\\cos x)$, then $f\'(x) =$', options: ['$\\frac{1}{\\cos x}$', '$-\\tan x$', '$\\tan x$', '$-\\frac{\\sin x}{\\cos x}$'], correctIndex: 1, explanation: '$\\frac{-\\sin x}{\\cos x} = -\\tan x$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding Composite Functions' },
    { partNumber: 2, partTitle: 'Applying the Chain Rule' },
    { partNumber: 3, partTitle: 'Chain Rule with Exponentials & Logs' },
    { partNumber: 4, partTitle: 'Nested Chain Rule' },
    { partNumber: 5, partTitle: 'Implicit Differentiation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
