/**
 * Entrance Quiz — Inverse Functions & Derivatives (AP Calculus AB)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
const questions: EntranceQuizQuestion[] = [
  { id: 'ifd-ent-1a', question: 'If $f$ and $g$ are inverses, then $f(g(x)) =$', options: ['$0$', '$x$', '$1$', '$f(x)g(x)$'], correctIndex: 1, explanation: 'By definition of inverse functions, $f(g(x)) = x$.', partNumber: 1, partTitle: 'Inverse Function Review' },
  { id: 'ifd-ent-1b', question: 'If $f(2) = 5$, then $f^{-1}(5) =$', options: ['$2$', '$5$', '$\\frac{1}{5}$', '$\\frac{1}{2}$'], correctIndex: 0, explanation: 'Inverse functions swap inputs and outputs: $f^{-1}(5) = 2$.', partNumber: 1, partTitle: 'Inverse Function Review' },
  { id: 'ifd-ent-2a', question: 'The derivative of an inverse function: $(f^{-1})\'(b) =$', options: ['$f\'(b)$', '$\\frac{1}{f\'(f^{-1}(b))}$', '$\\frac{1}{f(b)}$', '$-f\'(b)$'], correctIndex: 1, explanation: 'The inverse function theorem: $(f^{-1})\'(b) = \\frac{1}{f\'(a)}$ where $f(a) = b$.', partNumber: 2, partTitle: 'Inverse Function Theorem' },
  { id: 'ifd-ent-2b', question: 'If $f(3) = 7$ and $f\'(3) = 4$, then $(f^{-1})\'(7) =$', options: ['$4$', '$\\frac{1}{4}$', '$\\frac{1}{7}$', '$3$'], correctIndex: 1, explanation: '$(f^{-1})\'(7) = \\frac{1}{f\'(3)} = \\frac{1}{4}$.', partNumber: 2, partTitle: 'Inverse Function Theorem' },
  { id: 'ifd-ent-3a', question: '$\\frac{d}{dx}[\\arcsin x] =$', options: ['$\\frac{1}{\\sqrt{1-x^2}}$', '$\\frac{-1}{\\sqrt{1-x^2}}$', '$\\frac{1}{1+x^2}$', '$\\cos^{-1}(x)$'], correctIndex: 0, explanation: 'The derivative of $\\arcsin x$ is $\\frac{1}{\\sqrt{1-x^2}}$.', partNumber: 3, partTitle: 'Derivatives of Inverse Trig Functions' },
  { id: 'ifd-ent-3b', question: '$\\frac{d}{dx}[\\arctan x] =$', options: ['$\\frac{1}{\\sqrt{1-x^2}}$', '$\\sec^2 x$', '$\\frac{1}{1+x^2}$', '$\\frac{-1}{1+x^2}$'], correctIndex: 2, explanation: '$\\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$.', partNumber: 3, partTitle: 'Derivatives of Inverse Trig Functions' },
  { id: 'ifd-ent-4a', question: '$\\frac{d}{dx}[a^x] =$', options: ['$xa^{x-1}$', '$a^x \\ln a$', '$a^x$', '$\\frac{a^x}{\\ln a}$'], correctIndex: 1, explanation: 'For general exponentials: $\\frac{d}{dx}[a^x] = a^x \\ln a$.', partNumber: 4, partTitle: 'General Exponential & Log Derivatives' },
  { id: 'ifd-ent-4b', question: '$\\frac{d}{dx}[\\log_a x] =$', options: ['$\\frac{1}{x \\ln a}$', '$\\frac{\\ln a}{x}$', '$\\frac{a}{x}$', '$\\frac{1}{x}$'], correctIndex: 0, explanation: '$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$.', partNumber: 4, partTitle: 'General Exponential & Log Derivatives' },
  { id: 'ifd-ent-5a', question: 'Find $\\frac{d}{dx}[\\arcsin(2x)]$:', options: ['$\\frac{2}{\\sqrt{1-4x^2}}$', '$\\frac{1}{\\sqrt{1-4x^2}}$', '$\\frac{2}{\\sqrt{1-2x}}$', '$\\frac{1}{2\\sqrt{1-x^2}}$'], correctIndex: 0, explanation: 'Chain Rule: $\\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}$.', partNumber: 5, partTitle: 'Chain Rule with Inverse Functions' },
  { id: 'ifd-ent-5b', question: 'Find $\\frac{d}{dx}[2^{3x}]$:', options: ['$3 \\cdot 2^{3x} \\ln 2$', '$2^{3x} \\ln 2$', '$3 \\cdot 2^{3x}$', '$6^x \\ln 6$'], correctIndex: 0, explanation: '$2^{3x} \\cdot \\ln 2 \\cdot 3 = 3 \\cdot 2^{3x} \\ln 2$.', partNumber: 5, partTitle: 'Chain Rule with Inverse Functions' },
  { id: 'ifd-ent-6a', question: 'If $f(x) = x^3 + x$ and $g = f^{-1}$, find $g\'(2)$:', options: ['$\\frac{1}{4}$', '$4$', '$\\frac{1}{2}$', '$2$'], correctIndex: 0, explanation: '$f(1) = 2$ and $f\'(1) = 3(1)^2 + 1 = 4$. So $g\'(2) = \\frac{1}{4}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ifd-ent-6b', question: 'Find $\\frac{d}{dx}[e^{\\arctan x}]$:', options: ['$\\frac{e^{\\arctan x}}{1+x^2}$', '$e^{\\arctan x}$', '$\\frac{e^x}{1+x^2}$', '$e^{\\arctan x} \\arctan x$'], correctIndex: 0, explanation: 'Chain Rule: $e^{\\arctan x} \\cdot \\frac{1}{1+x^2}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ifd-ent-7a', question: 'The domain of $\\arcsin(x)$ is:', options: ['$(-\\infty, \\infty)$', '$[-1, 1]$', '$[0, \\pi]$', '$(-1, 1)$'], correctIndex: 1, explanation: '$\\arcsin x$ is defined for $-1 \\leq x \\leq 1$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'ifd-ent-7b', question: 'Find $\\frac{d}{dx}[x \\cdot \\arctan(x)] $ at $x = 1$:', options: ['$\\frac{\\pi}{4} + \\frac{1}{2}$', '$\\frac{1}{2}$', '$\\frac{\\pi}{4}$', '$1$'], correctIndex: 0, explanation: 'Product Rule: $\\arctan(x) + \\frac{x}{1+x^2}$. At $x=1$: $\\frac{\\pi}{4} + \\frac{1}{2}$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]
export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Inverse Function Review' }, { partNumber: 2, partTitle: 'Inverse Function Theorem' },
    { partNumber: 3, partTitle: 'Derivatives of Inverse Trig Functions' }, { partNumber: 4, partTitle: 'General Exponential & Log Derivatives' },
    { partNumber: 5, partTitle: 'Chain Rule with Inverse Functions' }, { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
