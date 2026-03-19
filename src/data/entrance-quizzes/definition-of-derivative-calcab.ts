/**
 * Entrance Quiz — Definition of the Derivative (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'dd-ent-1a', question: 'The derivative of $f$ at $x = a$ is defined as:', options: ['$\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$', '$\\frac{f(a+1) - f(a)}{1}$', '$f(a+h) - f(a)$', '$\\lim_{x \\to \\infty} \\frac{f(x)}{x}$'], correctIndex: 0, explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.', partNumber: 1, partTitle: 'The Difference Quotient' },
  { id: 'dd-ent-1b', question: 'The difference quotient $\\frac{f(a+h)-f(a)}{h}$ represents:', options: ['The area under the curve', 'The slope of the secant line', 'The $y$-intercept', 'The concavity'], correctIndex: 1, explanation: 'The difference quotient gives the slope of the secant line through $(a, f(a))$ and $(a+h, f(a+h))$.', partNumber: 1, partTitle: 'The Difference Quotient' },
  { id: 'dd-ent-2a', question: 'Using the limit definition, find $f\'(x)$ for $f(x) = x^2$:', options: ['$x^2$', '$2x$', '$x$', '$2x + h$'], correctIndex: 1, explanation: '$\\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = 2x$.', partNumber: 2, partTitle: 'Computing Derivatives from the Definition' },
  { id: 'dd-ent-2b', question: 'Find $f\'(3)$ using the definition if $f(x) = 5x - 1$:', options: ['$5$', '$14$', '$15$', '$3$'], correctIndex: 0, explanation: '$f\'(x) = \\lim_{h \\to 0} \\frac{5(x+h)-1-(5x-1)}{h} = 5$. The derivative of a linear function is its slope.', partNumber: 2, partTitle: 'Computing Derivatives from the Definition' },
  { id: 'dd-ent-3a', question: 'Geometrically, $f\'(a)$ represents:', options: ['The area under $f$ at $a$', 'The slope of the tangent line at $x = a$', 'The maximum value of $f$', 'The $y$-intercept of $f$'], correctIndex: 1, explanation: 'The derivative at a point is the slope of the tangent line to the curve at that point.', partNumber: 3, partTitle: 'Tangent Lines & Local Linearity' },
  { id: 'dd-ent-3b', question: 'The equation of the tangent line to $f(x) = x^2$ at $x = 2$ is:', options: ['$y = 2x$', '$y = 4x - 4$', '$y = 2x + 4$', '$y = 4x$'], correctIndex: 1, explanation: '$f(2)=4$, $f\'(2)=4$. Tangent: $y - 4 = 4(x-2) \\Rightarrow y = 4x - 4$.', partNumber: 3, partTitle: 'Tangent Lines & Local Linearity' },
  { id: 'dd-ent-4a', question: 'If $f$ is differentiable at $x = a$, then $f$ is:', options: ['Constant at $x = a$', 'Continuous at $x = a$', 'Increasing at $x = a$', 'Concave up at $x = a$'], correctIndex: 1, explanation: 'Differentiability implies continuity (but not vice versa).', partNumber: 4, partTitle: 'Differentiability & Continuity' },
  { id: 'dd-ent-4b', question: 'At which type of point is a function NOT differentiable?', options: ['Smooth maximum', 'Corner or cusp', 'Inflection point', 'Local minimum'], correctIndex: 1, explanation: 'Functions are not differentiable at corners, cusps, vertical tangents, or discontinuities.', partNumber: 4, partTitle: 'Differentiability & Continuity' },
  { id: 'dd-ent-5a', question: 'The derivative $f\'(x)$ can be interpreted as:', options: ['The instantaneous rate of change of $f$', 'The average value of $f$', 'The total change of $f$', 'The area under $f$'], correctIndex: 0, explanation: 'The derivative gives the instantaneous rate of change — how fast $f$ is changing at each point.', partNumber: 5, partTitle: 'Rates of Change' },
  { id: 'dd-ent-5b', question: 'If position is $s(t) = t^3$, the velocity at $t = 2$ is:', options: ['$8$', '$12$', '$6$', '$4$'], correctIndex: 1, explanation: '$v(t) = s\'(t) = 3t^2$. At $t = 2$: $v(2) = 3(4) = 12$.', partNumber: 5, partTitle: 'Rates of Change' },
  { id: 'dd-ent-6a', question: 'Estimate $f\'(2)$ from the table: $f(1.9) = 3.61$, $f(2.1) = 4.41$:', options: ['$0.8$', '$4$', '$8.02$', '$0.4$'], correctIndex: 1, explanation: '$f\'(2) \\approx \\frac{4.41 - 3.61}{2.1 - 1.9} = \\frac{0.8}{0.2} = 4$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'dd-ent-6b', question: 'If $f\'(a) > 0$, then near $x = a$, $f$ is:', options: ['Decreasing', 'Increasing', 'Constant', 'Undefined'], correctIndex: 1, explanation: 'A positive derivative means the function is increasing.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'dd-ent-7a', question: 'The derivative of $f(x) = |x|$ at $x = 0$:', options: ['Equals 0', 'Equals 1', 'Does not exist', 'Equals $-1$'], correctIndex: 2, explanation: 'The left-hand derivative is $-1$ and the right-hand derivative is $1$. Since they differ, $f\'(0)$ does not exist.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'dd-ent-7b', question: 'Which notation is NOT used for the derivative of $y = f(x)$?', options: ['$f\'(x)$', '$\\frac{dy}{dx}$', '$\\int f(x)\\,dx$', '$\\frac{d}{dx}[f(x)]$'], correctIndex: 2, explanation: '$\\int f(x)\\,dx$ is the integral (antiderivative), not the derivative.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Difference Quotient' },
    { partNumber: 2, partTitle: 'Computing Derivatives from the Definition' },
    { partNumber: 3, partTitle: 'Tangent Lines & Local Linearity' },
    { partNumber: 4, partTitle: 'Differentiability & Continuity' },
    { partNumber: 5, partTitle: 'Rates of Change' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
