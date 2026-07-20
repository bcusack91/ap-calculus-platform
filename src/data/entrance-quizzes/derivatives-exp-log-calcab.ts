/**
 * Entrance Quiz — Derivatives of Exponential & Logarithmic Functions (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'del-ent-1a', question: 'Find $\\frac{d}{dx}[e^x]$:', options: ['$e^x$', '$xe^{x-1}$', '$\\ln(x) e^x$', '$1$'], correctIndex: 0, explanation: '$e^x$ is its own derivative — the defining property of the natural exponential.', partNumber: 1, partTitle: 'The Natural Exponential Function' },
  { id: 'del-ent-1b', question: 'Find $\\frac{d}{dx}[3e^x + 2x]$:', options: ['$3e^x + 2$', '$3e^{x-1} + 2$', '$3xe^x + 2$', '$e^x + 2x$'], correctIndex: 0, explanation: 'Sum/constant multiple rules: $3e^x + 2$.', partNumber: 1, partTitle: 'The Natural Exponential Function' },
  { id: 'del-ent-2a', question: 'Find $\\frac{d}{dx}[\\ln x]$:', options: ['$\\frac{1}{x}$', '$\\frac{1}{\\ln x}$', '$x$', '$e^x$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$ for $x > 0$.', partNumber: 2, partTitle: 'Natural Logarithm Derivatives' },
  { id: 'del-ent-2b', question: 'Find $\\frac{d}{dx}[\\ln(2x + 5)]$:', options: ['$\\frac{1}{2x+5}$', '$\\frac{2}{2x+5}$', '$\\frac{1}{2}\\ln(2x+5)$', '$\\frac{2x+5}{2}$'], correctIndex: 1, explanation: 'Chain rule: $\\frac{1}{2x+5} \\cdot 2 = \\frac{2}{2x+5}$.', partNumber: 2, partTitle: 'Natural Logarithm Derivatives' },
  { id: 'del-ent-3a', question: 'Find $\\frac{d}{dx}[xe^x]$:', options: ['$e^x$', '$xe^x$', '$(x+1)e^x$', '$(x-1)e^x$'], correctIndex: 2, explanation: 'Product Rule: $1 \\cdot e^x + x \\cdot e^x = (x+1)e^x$.', partNumber: 3, partTitle: 'Combining with Product, Quotient, & Chain Rules' },
  { id: 'del-ent-3b', question: 'Find $\\frac{d}{dx}\\left[\\frac{e^x}{x}\\right]$:', options: ['$\\frac{e^x}{1}$', '$\\frac{e^x(x-1)}{x^2}$', '$\\frac{e^x(x+1)}{x^2}$', '$\\frac{xe^x - e^x}{x}$'], correctIndex: 1, explanation: 'Quotient Rule: $\\frac{xe^x - e^x}{x^2} = \\frac{e^x(x-1)}{x^2}$.', partNumber: 3, partTitle: 'Combining with Product, Quotient, & Chain Rules' },
  { id: 'del-ent-4a', question: 'A population grows according to $P(t) = 100e^{0.05t}$. The rate of growth at time $t$ is:', options: ['$100e^{0.05t}$', '$0.05e^{0.05t}$', '$0.05 \\cdot 100e^{0.05t}$', '$5 \\cdot 0.05e^t$'], correctIndex: 2, explanation: '$P\'(t) = 100 \\cdot 0.05 e^{0.05t} = 5e^{0.05t}$ (option C in unsimplified form).', partNumber: 4, partTitle: 'Growth, Decay & Applications' },
  { id: 'del-ent-4b', question: 'For exponential decay $A(t) = A_0 e^{-kt}$ with $k > 0$, the rate $\\frac{dA}{dt}$ is:', options: ['Always positive', 'Always zero', 'Always negative', 'Sometimes positive, sometimes negative'], correctIndex: 2, explanation: '$A\'(t) = -k A_0 e^{-kt} < 0$ since $k, A_0, e^{-kt} > 0$.', partNumber: 4, partTitle: 'Growth, Decay & Applications' },
  { id: 'del-ent-5a', question: 'Find $\\frac{d}{dx}[a^x]$ for constant $a > 0$:', options: ['$xa^{x-1}$', '$a^x$', '$a^x \\ln a$', '$\\frac{a^x}{\\ln a}$'], correctIndex: 2, explanation: 'General formula: $\\frac{d}{dx}[a^x] = a^x \\ln a$ (derived from $a^x = e^{x\\ln a}$).', partNumber: 5, partTitle: 'Inverse Function Theorem' },
  { id: 'del-ent-5b', question: 'Find $\\frac{d}{dx}[\\log_3 x]$:', options: ['$\\frac{1}{x}$', '$\\frac{1}{x \\ln 3}$', '$\\frac{\\ln 3}{x}$', '$\\frac{3}{x}$'], correctIndex: 1, explanation: '$\\log_a x = \\frac{\\ln x}{\\ln a}$, so $\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$.', partNumber: 5, partTitle: 'Inverse Function Theorem' },
  { id: 'del-ent-6a', question: 'For $f(x) = e^x$, the function is:', options: ['Always concave down', 'Concave up everywhere', 'Decreasing everywhere', 'Has a horizontal asymptote at $y = 1$'], correctIndex: 1, explanation: '$f\'\'(x) = e^x > 0$ for all $x$, so concave up everywhere.', partNumber: 6, partTitle: 'Graphing & Analysis' },
  { id: 'del-ent-6b', question: 'For $f(x) = \\ln x$, the function has:', options: ['Vertical asymptote at $x = 0$', 'Horizontal asymptote at $y = 0$', 'A minimum at $x = 1$', 'A maximum at $x = e$'], correctIndex: 0, explanation: '$\\ln x \\to -\\infty$ as $x \\to 0^+$ — vertical asymptote at $x = 0$.', partNumber: 6, partTitle: 'Graphing & Analysis' },
  { id: 'del-ent-7a', question: 'Find $\\frac{d}{dx}[e^{x^2}]$:', options: ['$e^{x^2}$', '$2xe^{x^2}$', '$2xe^{2x}$', '$x^2 e^{x^2 - 1}$'], correctIndex: 1, explanation: 'Chain rule: $e^{x^2} \\cdot 2x = 2xe^{x^2}$.', partNumber: 7, partTitle: 'AP Exam Review & Comprehensive Practice' },
  { id: 'del-ent-7b', question: 'Find the slope of $y = \\ln(x)$ at $x = e$:', options: ['$1$', '$\\frac{1}{e}$', '$e$', '$0$'], correctIndex: 1, explanation: '$y\' = 1/x$; at $x = e$, slope $= 1/e$.', partNumber: 7, partTitle: 'AP Exam Review & Comprehensive Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Natural Exponential Function' },
    { partNumber: 2, partTitle: 'Natural Logarithm Derivatives' },
    { partNumber: 3, partTitle: 'Combining with Product, Quotient, & Chain Rules' },
    { partNumber: 4, partTitle: 'Growth, Decay & Applications' },
    { partNumber: 5, partTitle: 'Inverse Function Theorem' },
    { partNumber: 6, partTitle: 'Graphing & Analysis' },
    { partNumber: 7, partTitle: 'AP Exam Review & Comprehensive Practice' },
  ]
}
