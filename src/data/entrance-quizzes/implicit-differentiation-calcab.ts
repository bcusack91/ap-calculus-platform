/**
 * Entrance Quiz — Implicit Differentiation (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'imd-ent-1a', question: 'Differentiating $x^2 + y^2 = 25$ implicitly with respect to $x$ gives:', options: ['$2x + 2y = 0$', '$2x + 2y \\frac{dy}{dx} = 0$', '$2x + \\frac{dy}{dx} = 0$', '$2x + 2 \\frac{dy}{dx} = 0$'], correctIndex: 1, explanation: 'Each $y$ term gets multiplied by $\\frac{dy}{dx}$ via the chain rule.', partNumber: 1, partTitle: 'Differentiating Equations Not Solved for $y$' },
  { id: 'imd-ent-1b', question: 'For $x^2 + y^2 = 25$, find $\\frac{dy}{dx}$:', options: ['$-\\frac{x}{y}$', '$\\frac{x}{y}$', '$-\\frac{y}{x}$', '$\\frac{2x}{2y}$'], correctIndex: 0, explanation: 'Solving $2x + 2y\\frac{dy}{dx} = 0$ for $\\frac{dy}{dx}$ gives $-x/y$.', partNumber: 1, partTitle: 'Differentiating Equations Not Solved for $y$' },
  { id: 'imd-ent-2a', question: 'Differentiating $xy = 6$ implicitly gives:', options: ['$\\frac{dy}{dx} = 0$', '$y + x \\frac{dy}{dx} = 0$', '$x + y\\frac{dy}{dx} = 0$', '$\\frac{dy}{dx} = \\frac{6}{x^2}$'], correctIndex: 1, explanation: 'Product rule on $xy$: $\\frac{d}{dx}[xy] = y + x\\frac{dy}{dx}$, set equal to $0$.', partNumber: 2, partTitle: 'Product & Quotient Rule in Implicit Context' },
  { id: 'imd-ent-2b', question: 'For $x^2 y = 4$, $\\frac{dy}{dx} =$', options: ['$\\frac{-2y}{x}$', '$\\frac{-y}{x}$', '$\\frac{-2x}{y}$', '$\\frac{2y}{x}$'], correctIndex: 0, explanation: '$2xy + x^2\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{2xy}{x^2} = -\\frac{2y}{x}$.', partNumber: 2, partTitle: 'Product & Quotient Rule in Implicit Context' },
  { id: 'imd-ent-3a', question: 'Differentiate $\\sin(y) = x$ implicitly. Then $\\frac{dy}{dx} =$', options: ['$\\cos(y)$', '$\\frac{1}{\\cos y}$', '$-\\sin y$', '$\\sec y$'], correctIndex: 1, explanation: '$\\cos(y)\\frac{dy}{dx} = 1 \\Rightarrow \\frac{dy}{dx} = \\frac{1}{\\cos y} = \\sec y$. Both B and D are equivalent — B is the direct form from solving.', partNumber: 3, partTitle: 'Trigonometric & Exponential Implicit Equations' },
  { id: 'imd-ent-3b', question: 'For $e^y = x^2$, $\\frac{dy}{dx} =$', options: ['$\\frac{2x}{e^y}$', '$\\frac{2}{x}$', '$\\frac{x^2}{e^y}$', '$\\frac{2x}{x^2}$'], correctIndex: 1, explanation: '$e^y \\frac{dy}{dx} = 2x \\Rightarrow \\frac{dy}{dx} = \\frac{2x}{e^y} = \\frac{2x}{x^2} = \\frac{2}{x}$.', partNumber: 3, partTitle: 'Trigonometric & Exponential Implicit Equations' },
  { id: 'imd-ent-4a', question: 'After finding $\\frac{dy}{dx}$ implicitly, finding $\\frac{d^2 y}{dx^2}$ requires:', options: ['Differentiating $\\frac{dy}{dx}$ again, often substituting $\\frac{dy}{dx}$', 'Solving for $y$ first', 'Setting $\\frac{dy}{dx} = 0$', 'Setting $y = 0$'], correctIndex: 0, explanation: 'Standard technique: differentiate again with chain rule, then substitute the expression for $\\frac{dy}{dx}$ to simplify.', partNumber: 4, partTitle: 'Second Derivatives & Higher-Order Implicit Differentiation' },
  { id: 'imd-ent-4b', question: 'For $x^2 + y^2 = 1$, $\\frac{dy}{dx} = -\\frac{x}{y}$. Then $\\frac{d^2 y}{dx^2}$ at $(0, 1)$ is:', options: ['$0$', '$-1$', '$1$', '$-\\frac{1}{2}$'], correctIndex: 1, explanation: '$\\frac{d^2y}{dx^2} = -\\frac{y - x \\cdot dy/dx}{y^2} = -\\frac{1}{y^3}$ for unit circle. At $(0,1)$: $-1$.', partNumber: 4, partTitle: 'Second Derivatives & Higher-Order Implicit Differentiation' },
  { id: 'imd-ent-5a', question: 'A horizontal tangent occurs where:', options: ['$\\frac{dy}{dx} = 0$', '$\\frac{dy}{dx}$ is undefined', '$y = 0$', '$x = 0$'], correctIndex: 0, explanation: 'Horizontal tangent: slope = 0, i.e., $\\frac{dy}{dx} = 0$ (numerator vanishes when written as a fraction).', partNumber: 5, partTitle: 'Horizontal & Vertical Tangents' },
  { id: 'imd-ent-5b', question: 'A vertical tangent occurs where $\\frac{dy}{dx}$ is:', options: ['Zero', 'Undefined (denominator $= 0$)', 'Equal to $1$', 'Equal to the $y$-coordinate'], correctIndex: 1, explanation: 'Vertical tangent: slope undefined, i.e., the denominator of $\\frac{dy}{dx}$ vanishes (while numerator does not).', partNumber: 5, partTitle: 'Horizontal & Vertical Tangents' },
  { id: 'imd-ent-6a', question: 'Using implicit differentiation on $y = \\arctan(x)$ (i.e., $\\tan y = x$) gives $\\frac{dy}{dx} =$', options: ['$\\sec^2(y)$', '$\\frac{1}{\\sec^2(y)} = \\frac{1}{1+x^2}$', '$\\cos^2(x)$', '$\\frac{1}{1-x^2}$'], correctIndex: 1, explanation: '$\\sec^2(y)\\frac{dy}{dx} = 1$, so $\\frac{dy}{dx} = \\frac{1}{\\sec^2 y} = \\frac{1}{1 + \\tan^2 y} = \\frac{1}{1+x^2}$.', partNumber: 6, partTitle: 'Related Connections & Inverse Functions' },
  { id: 'imd-ent-6b', question: 'A normal line at a point has slope:', options: ['Equal to the tangent slope', 'Negative reciprocal of the tangent slope', 'Always zero', 'Always undefined'], correctIndex: 1, explanation: 'Normal $\\perp$ tangent: slope is the negative reciprocal.', partNumber: 6, partTitle: 'Related Connections & Inverse Functions' },
  { id: 'imd-ent-7a', question: 'On the AP exam, when differentiating an equation containing $y$, you must:', options: ['Solve for $y$ first', 'Treat $y$ as a constant', 'Multiply each derivative of a $y$-term by $\\frac{dy}{dx}$', 'Set $y = x$'], correctIndex: 2, explanation: 'Chain rule: every $y$-term gets a factor of $\\frac{dy}{dx}$.', partNumber: 7, partTitle: 'AP Exam Review & Mixed Practice' },
  { id: 'imd-ent-7b', question: 'A common mistake on the AP exam is forgetting to:', options: ['Add a constant of integration', 'Apply the product rule when both $x$ and $y$ multiply', 'Convert to radians', 'Multiply by $-1$'], correctIndex: 1, explanation: 'Forgetting the product rule on terms like $xy$ or $x^2 y$ is one of the most-cited AP errors.', partNumber: 7, partTitle: 'AP Exam Review & Mixed Practice' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Differentiating Equations Not Solved for $y$' },
    { partNumber: 2, partTitle: 'Product & Quotient Rule in Implicit Context' },
    { partNumber: 3, partTitle: 'Trigonometric & Exponential Implicit Equations' },
    { partNumber: 4, partTitle: 'Second Derivatives & Higher-Order Implicit Differentiation' },
    { partNumber: 5, partTitle: 'Horizontal & Vertical Tangents' },
    { partNumber: 6, partTitle: 'Related Connections & Inverse Functions' },
    { partNumber: 7, partTitle: 'AP Exam Review & Mixed Practice' },
  ]
}
