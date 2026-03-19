/**
 * Entrance Quiz — Basic Differentiation Rules (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'bdr-ent-1a', question: 'The Power Rule states $\\frac{d}{dx}[x^n] =$', options: ['$nx^{n-1}$', '$x^{n+1}/(n+1)$', '$nx^n$', '$x^{n-1}$'], correctIndex: 0, explanation: 'The Power Rule: bring the exponent down and subtract 1 from the exponent.', partNumber: 1, partTitle: 'The Power Rule' },
  { id: 'bdr-ent-1b', question: 'Find $\\frac{d}{dx}[x^5]$:', options: ['$5x^4$', '$4x^5$', '$5x^5$', '$x^4$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[x^5] = 5x^{5-1} = 5x^4$.', partNumber: 1, partTitle: 'The Power Rule' },
  { id: 'bdr-ent-2a', question: 'The Constant Multiple Rule says $\\frac{d}{dx}[cf(x)] =$', options: ['$cf\'(x)$', '$c + f\'(x)$', '$f(x) \\cdot c\'$', '$\\frac{f\'(x)}{c}$'], correctIndex: 0, explanation: 'Constants factor out of derivatives: $\\frac{d}{dx}[cf(x)] = c \\cdot f\'(x)$.', partNumber: 2, partTitle: 'Constant Multiple & Sum Rules' },
  { id: 'bdr-ent-2b', question: 'Find $\\frac{d}{dx}[3x^4 + 2x]$:', options: ['$12x^3 + 2$', '$3x^3 + 2$', '$12x^4 + 2x$', '$7x^3$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[3x^4] + \\frac{d}{dx}[2x] = 12x^3 + 2$.', partNumber: 2, partTitle: 'Constant Multiple & Sum Rules' },
  { id: 'bdr-ent-3a', question: 'The Product Rule: $\\frac{d}{dx}[f(x)g(x)] =$', options: ['$f\'(x)g\'(x)$', '$f\'(x)g(x) + f(x)g\'(x)$', '$f(x)g\'(x)$', '$\\frac{f\'(x)}{g\'(x)}$'], correctIndex: 1, explanation: 'Product Rule: derivative of first times second, plus first times derivative of second.', partNumber: 3, partTitle: 'The Product Rule' },
  { id: 'bdr-ent-3b', question: 'Find $\\frac{d}{dx}[x^2 \\sin x]$:', options: ['$2x \\cos x$', '$2x \\sin x + x^2 \\cos x$', '$x^2 \\cos x$', '$2x \\sin x$'], correctIndex: 1, explanation: 'Product Rule: $2x \\sin x + x^2 \\cos x$.', partNumber: 3, partTitle: 'The Product Rule' },
  { id: 'bdr-ent-4a', question: 'The Quotient Rule: $\\frac{d}{dx}\\left[\\frac{f}{g}\\right] =$', options: ['$\\frac{f\'g - fg\'}{g^2}$', '$\\frac{f\'}{g\'}$', '$\\frac{f\'g + fg\'}{g^2}$', '$\\frac{fg\' - f\'g}{g^2}$'], correctIndex: 0, explanation: 'Quotient Rule: "low d-high minus high d-low, over low squared."', partNumber: 4, partTitle: 'The Quotient Rule' },
  { id: 'bdr-ent-4b', question: 'Find $\\frac{d}{dx}\\left[\\frac{x}{x+1}\\right]$:', options: ['$\\frac{1}{(x+1)^2}$', '$\\frac{1}{x+1}$', '$\\frac{x}{(x+1)^2}$', '$\\frac{-1}{(x+1)^2}$'], correctIndex: 0, explanation: '$\\frac{(1)(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$.', partNumber: 4, partTitle: 'The Quotient Rule' },
  { id: 'bdr-ent-5a', question: '$\\frac{d}{dx}[\\sin x] =$', options: ['$-\\cos x$', '$\\cos x$', '$\\sin x$', '$-\\sin x$'], correctIndex: 1, explanation: 'The derivative of $\\sin x$ is $\\cos x$.', partNumber: 5, partTitle: 'Derivatives of Trig Functions' },
  { id: 'bdr-ent-5b', question: '$\\frac{d}{dx}[\\tan x] =$', options: ['$\\cot x$', '$\\sec x$', '$\\sec^2 x$', '$-\\csc^2 x$'], correctIndex: 2, explanation: '$\\frac{d}{dx}[\\tan x] = \\sec^2 x$.', partNumber: 5, partTitle: 'Derivatives of Trig Functions' },
  { id: 'bdr-ent-6a', question: 'Find $\\frac{d}{dx}[e^x]$:', options: ['$xe^{x-1}$', '$e^x$', '$e^{x+1}$', '$e$'], correctIndex: 1, explanation: '$e^x$ is its own derivative: $\\frac{d}{dx}[e^x] = e^x$.', partNumber: 6, partTitle: 'Derivatives of Exponential & Log Functions' },
  { id: 'bdr-ent-6b', question: '$\\frac{d}{dx}[\\ln x] =$', options: ['$\\frac{1}{x}$', '$\\ln x$', '$x \\ln x - x$', '$e^x$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[\\ln x] = \\frac{1}{x}$.', partNumber: 6, partTitle: 'Derivatives of Exponential & Log Functions' },
  { id: 'bdr-ent-7a', question: 'Find $f\'(x)$ if $f(x) = 4x^3 - 2\\sin x + e^x$:', options: ['$12x^2 - 2\\cos x + e^x$', '$12x^2 + 2\\cos x + e^x$', '$4x^2 - 2\\cos x$', '$12x^2 - 2\\cos x$'], correctIndex: 0, explanation: 'Apply rules term by term: $12x^2 - 2\\cos x + e^x$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'bdr-ent-7b', question: 'If $f(x) = \\frac{x^2 + 1}{x}$, rewrite and differentiate:', options: ['$1 - \\frac{1}{x^2}$', '$1 + \\frac{1}{x^2}$', '$2x$', '$\\frac{2x}{x^2}$'], correctIndex: 0, explanation: '$f(x) = x + x^{-1}$, so $f\'(x) = 1 - x^{-2} = 1 - \\frac{1}{x^2}$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Power Rule' },
    { partNumber: 2, partTitle: 'Constant Multiple & Sum Rules' },
    { partNumber: 3, partTitle: 'The Product Rule' },
    { partNumber: 4, partTitle: 'The Quotient Rule' },
    { partNumber: 5, partTitle: 'Derivatives of Trig Functions' },
    { partNumber: 6, partTitle: 'Derivatives of Exponential & Log Functions' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
