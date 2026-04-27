/**
 * Entrance Quiz — Limits at Infinity (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'lai-ent-1a', question: 'Find $\\lim_{x \\to \\infty} \\frac{1}{x}$:', options: ['$0$', '$1$', '$\\infty$', 'Does not exist'], correctIndex: 0, explanation: 'As $x$ grows large, $1/x \\to 0$.', partNumber: 1, partTitle: 'End Behavior of Functions' },
  { id: 'lai-ent-1b', question: 'For $f(x) = \\frac{3x + 1}{x}$, $\\lim_{x \\to \\infty} f(x) =$', options: ['$0$', '$1$', '$3$', '$\\infty$'], correctIndex: 2, explanation: '$\\frac{3x+1}{x} = 3 + \\frac{1}{x} \\to 3$.', partNumber: 1, partTitle: 'End Behavior of Functions' },
  { id: 'lai-ent-2a', question: 'For $f(x) = \\frac{2x^2 + 1}{3x^2 + 5x}$, $\\lim_{x \\to \\infty} f(x) =$', options: ['$0$', '$\\frac{2}{3}$', '$\\frac{2}{5}$', '$\\infty$'], correctIndex: 1, explanation: 'Same degree on top and bottom: ratio of leading coefficients $= 2/3$.', partNumber: 2, partTitle: 'Beyond Rational Functions' },
  { id: 'lai-ent-2b', question: 'For $f(x) = \\frac{x^3 + 2x}{x^2 - 1}$, $\\lim_{x \\to \\infty} f(x) =$', options: ['$0$', '$1$', '$\\infty$', '$-\\infty$'], correctIndex: 2, explanation: 'Higher degree on top means $f(x) \\to \\infty$ (with positive leading coefficient ratio).', partNumber: 2, partTitle: 'Beyond Rational Functions' },
  { id: 'lai-ent-3a', question: 'A horizontal asymptote at $y = L$ means:', options: ['$f(L) = 0$', '$\\lim_{x \\to \\pm \\infty} f(x) = L$', '$f$ has a vertical line at $x = L$', '$f(x) = L$ for all $x$'], correctIndex: 1, explanation: 'Horizontal asymptote: limit as $x \\to \\pm\\infty$ equals $L$.', partNumber: 3, partTitle: 'When Horizontal Asymptotes Don\'t Exist' },
  { id: 'lai-ent-3b', question: 'How many horizontal asymptotes does $f(x) = \\arctan(x)$ have?', options: ['$0$', '$1$', '$2$', '$3$'], correctIndex: 2, explanation: '$\\lim_{x\\to\\infty} \\arctan x = \\pi/2$ and $\\lim_{x\\to-\\infty} \\arctan x = -\\pi/2$. Two distinct asymptotes.', partNumber: 3, partTitle: 'When Horizontal Asymptotes Don\'t Exist' },
  { id: 'lai-ent-4a', question: 'Which function grows fastest as $x \\to \\infty$?', options: ['$x^{100}$', '$e^x$', '$\\ln x$', '$x \\ln x$'], correctIndex: 1, explanation: 'Exponentials beat any polynomial: $e^x$ dominates $x^n$ for any $n$.', partNumber: 4, partTitle: 'Dominance & Relative Growth' },
  { id: 'lai-ent-4b', question: 'Find $\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$:', options: ['$0$', '$1$', '$\\infty$', 'Does not exist'], correctIndex: 0, explanation: '$x$ grows faster than $\\ln x$, so the ratio $\\to 0$.', partNumber: 4, partTitle: 'Dominance & Relative Growth' },
  { id: 'lai-ent-5a', question: 'By the Squeeze Theorem, $\\lim_{x \\to \\infty} \\frac{\\sin x}{x} =$', options: ['$0$', '$1$', '$\\infty$', 'Oscillates'], correctIndex: 0, explanation: 'Since $-1 \\le \\sin x \\le 1$, we have $-1/x \\le \\sin(x)/x \\le 1/x$, both bounds $\\to 0$.', partNumber: 5, partTitle: 'Squeeze Theorem, Substitution, and Key Limits' },
  { id: 'lai-ent-5b', question: 'Find $\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x$:', options: ['$1$', '$0$', '$e$', '$\\infty$'], correctIndex: 2, explanation: 'A famous defining limit: equals $e$.', partNumber: 5, partTitle: 'Squeeze Theorem, Substitution, and Key Limits' },
  { id: 'lai-ent-6a', question: 'Find $\\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 1}}{x}$:', options: ['$0$', '$1$', '$-1$', 'Does not exist'], correctIndex: 1, explanation: '$\\sqrt{x^2 + 1} \\approx |x|$ for large $x$; for $x \\to +\\infty$, $|x|/x = 1$.', partNumber: 6, partTitle: 'AP-Level Practice' },
  { id: 'lai-ent-6b', question: 'Find $\\lim_{x \\to -\\infty} \\frac{2x}{\\sqrt{x^2 + 1}}$:', options: ['$2$', '$-2$', '$0$', '$1$'], correctIndex: 1, explanation: 'For $x \\to -\\infty$, $\\sqrt{x^2+1} \\approx |x| = -x$. So $\\frac{2x}{-x} = -2$.', partNumber: 6, partTitle: 'AP-Level Practice' },
  { id: 'lai-ent-7a', question: 'Find $\\lim_{x \\to \\infty} \\frac{e^{-x}}{x}$:', options: ['$0$', '$1$', '$\\infty$', '$e$'], correctIndex: 0, explanation: '$e^{-x} \\to 0$ rapidly, while $x \\to \\infty$. The ratio $\\to 0$.', partNumber: 7, partTitle: 'Comprehensive Assessment' },
  { id: 'lai-ent-7b', question: 'For $f(x) = \\frac{5x^4 - 3x + 2}{2x^4 + 7}$, the horizontal asymptote is:', options: ['$y = 0$', '$y = \\frac{5}{2}$', '$y = \\frac{2}{5}$', 'No horizontal asymptote'], correctIndex: 1, explanation: 'Same degrees: ratio of leading coefficients = $5/2$.', partNumber: 7, partTitle: 'Comprehensive Assessment' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'End Behavior of Functions' },
    { partNumber: 2, partTitle: 'Beyond Rational Functions' },
    { partNumber: 3, partTitle: 'When Horizontal Asymptotes Don\'t Exist' },
    { partNumber: 4, partTitle: 'Dominance & Relative Growth' },
    { partNumber: 5, partTitle: 'Squeeze Theorem, Substitution, and Key Limits' },
    { partNumber: 6, partTitle: 'AP-Level Practice' },
    { partNumber: 7, partTitle: 'Comprehensive Assessment' },
  ]
}
