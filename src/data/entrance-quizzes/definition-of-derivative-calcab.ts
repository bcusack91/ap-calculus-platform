/**
 * Entrance Quiz — Definition of the Derivative (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — From Average to Instantaneous Rate of Change
  {
    id: 'dod-ent-1a',
    question: 'A particle\'s position is $s(t) = t^3 - t$ meters at time $t$ seconds. What is its average velocity on $[1, 3]$?',
    options: ['$24$ m/s', '$26$ m/s', '$12$ m/s', '$14$ m/s'],
    correctIndex: 2,
    explanation: 'Average velocity is the slope of the secant line: $\\frac{s(3) - s(1)}{3 - 1} = \\frac{24 - 0}{2} = 12$ m/s. The value 26 is the instantaneous velocity at $t = 3$, and 14 averages the endpoint velocities.',
    partNumber: 1,
    partTitle: 'From Average to Instantaneous Rate of Change',
  },
  {
    id: 'dod-ent-1b',
    question: 'The limit $\\lim_{x \\to 2} \\dfrac{x^4 - 16}{x - 2}$ is $f\'(2)$ for $f(x) = x^4$. What is its value?',
    options: ['$8$', '$32$', '$4$', '$0$'],
    correctIndex: 1,
    explanation: 'This is the alternate form $\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$ with $f(x) = x^4$ and $a = 2$. Factoring, $\\frac{x^4 - 16}{x - 2} = (x^2 + 4)(x + 2) \\to 8 \\cdot 4 = 32$, matching $4(2)^3$.',
    partNumber: 1,
    partTitle: 'From Average to Instantaneous Rate of Change',
  },
  // Part 2 — When Derivatives Exist (and When They Don't)
  {
    id: 'dod-ent-2a',
    question: 'Let $f(x) = \\begin{cases} x^2 + 2 & x \\le 1 \\\\ 2x + 1 & x > 1 \\end{cases}$. Which statement is true at $x = 1$?',
    options: ['$f$ is not continuous at $x = 1$', '$f$ is continuous but not differentiable at $x = 1$', '$f$ is differentiable at $x = 1$', '$f$ is differentiable only from the left'],
    correctIndex: 2,
    explanation: 'Both pieces equal 3 at $x = 1$, so $f$ is continuous. The one-sided derivatives are $2x \\to 2$ and $2$, which match, so $f$ is differentiable there.',
    partNumber: 2,
    partTitle: 'When Derivatives Exist (and When They Don\'t)',
  },
  {
    id: 'dod-ent-2b',
    question: 'Why is $f(x) = (x - 2)^{1/3}$ not differentiable at $x = 2$?',
    options: ['Its graph has a corner there', 'Its graph has a cusp there', 'It has a jump discontinuity at that point', 'Its graph has a vertical tangent there'],
    correctIndex: 3,
    explanation: 'The function is continuous, and $f\'(x) = \\frac{1}{3}(x - 2)^{-2/3}$ grows to $+\\infty$ from both sides of 2. Slopes going to infinity in the same direction mean a vertical tangent (a cusp would need opposite infinities).',
    partNumber: 2,
    partTitle: 'When Derivatives Exist (and When They Don\'t)',
  },
  // Part 3 — Reading Derivatives from Graphs
  {
    id: 'dod-ent-3a',
    question: 'A table gives $f(0) = 3$, $f(2) = 7$, $f(4) = 15$ and $f(6) = 20$. What is the best estimate of $f\'(4)$ from the table?',
    options: ['$\\frac{13}{4}$', '$13$', '$4$', '$\\frac{5}{2}$'],
    correctIndex: 0,
    explanation: 'The symmetric difference quotient uses the points on both sides: $\\frac{f(6) - f(2)}{6 - 2} = \\frac{20 - 7}{4} = \\frac{13}{4}$. The one-sided quotients give 4 and $\\frac{5}{2}$, and 13 forgets to divide by the run.',
    partNumber: 3,
    partTitle: 'Reading Derivatives from Graphs',
  },
  {
    id: 'dod-ent-3b',
    question: 'The derivative of a function $f$ is $f\'(x) = (x + 1)(x - 3)^2$. Which describes the local extrema of $f$?',
    options: ['Maximum at $x = -1$; minimum at $x = 3$', 'Minimum at $x = -1$; none at $x = 3$', 'Minimum at $x = -1$; maximum at $x = 3$', 'Minimum at $x = 3$; maximum at $x = -1$'],
    correctIndex: 1,
    explanation: 'The factor $(x - 3)^2$ is never negative, so the sign of $f\'$ follows $x + 1$: negative before $-1$ and positive after. So $f$ has a minimum at $-1$, and $f\'$ does not change sign at 3, so there is no extremum there.',
    partNumber: 3,
    partTitle: 'Reading Derivatives from Graphs',
  },
  // Part 4 — The Language of Derivatives
  {
    id: 'dod-ent-4a',
    question: 'A tank holds $W(t)$ gallons of water $t$ hours after noon. What are the units of $W\'\'(t)$?',
    options: ['$\\text{gal}/\\text{hr}$', '$\\text{gal}^2/\\text{hr}$', '$\\text{gal}/\\text{hr}^2$', '$\\text{hr}/\\text{gal}$'],
    correctIndex: 2,
    explanation: '$W\'(t)$ is in gallons per hour, and $W\'\'(t)$ is the rate of change of that rate with respect to time, so its units are gallons per hour per hour, $\\text{gal}/\\text{hr}^2$.',
    partNumber: 4,
    partTitle: 'The Language of Derivatives',
  },
  {
    id: 'dod-ent-4b',
    question: '$T(t)$ is the temperature of a drink, in degrees Fahrenheit, $t$ hours after it is poured, and $T\'(2) = -4$. Which interpretation is correct?',
    options: ['At $t = 2$ the temperature is $-4$ degrees Fahrenheit', 'Over the first 2 hours the temperature fell 4 degrees', 'At $t = 2$ the temperature is rising at 4 degrees per hour', 'At $t = 2$ the temperature is falling 4 degrees per hour'],
    correctIndex: 3,
    explanation: 'A derivative is an instantaneous rate: at the moment $t = 2$ hours, the temperature is changing at $-4$ degrees Fahrenheit per hour, so it is decreasing at 4 degrees per hour. It is not the temperature itself or a total change.',
    partNumber: 4,
    partTitle: 'The Language of Derivatives',
  },
  // Part 5 — The Tangent Line Equation
  {
    id: 'dod-ent-5a',
    question: 'What is the equation of the tangent line to $f(x) = 2x^3 - x$ at $x = -1$?',
    options: ['$y = 5x + 4$', '$y = 5x + 6$', '$y = 7x + 6$', '$y = 5x - 4$'],
    correctIndex: 0,
    explanation: 'The point is $f(-1) = -2 + 1 = -1$, and the slope is $f\'(-1) = 6(1) - 1 = 5$. So $y + 1 = 5(x + 1)$, which is $y = 5x + 4$.',
    partNumber: 5,
    partTitle: 'The Tangent Line Equation',
  },
  {
    id: 'dod-ent-5b',
    question: 'A function has $f(2) = 5$, $f\'(2) = 3$, and $f\'\'(x) > 0$ for all $x$. Using the tangent line at $x = 2$, what is the estimate of $f(2.2)$, and how does it compare with the true value?',
    options: ['$5.6$, an overestimate', '$5.6$, an underestimate', '$11.6$, an underestimate', '$11.6$, an overestimate'],
    correctIndex: 1,
    explanation: 'The linearization gives $5 + 3(0.2) = 5.6$. Since $f\'\' > 0$, the graph is concave up and lies above its tangent line, so the estimate is an underestimate.',
    partNumber: 5,
    partTitle: 'The Tangent Line Equation',
  },
  // Part 6 — Derivative Definition Practice
  {
    id: 'dod-ent-6a',
    question: 'Applying the limit definition to $f(x) = \\dfrac{1}{x + 2}$ gives which derivative?',
    options: ['$\\frac{1}{(x + 2)^2}$', '$-\\frac{1}{x^2 + 2}$', '$-\\frac{1}{(x + 2)^2}$', '$\\ln(x + 2)$'],
    correctIndex: 2,
    explanation: 'Combining $\\frac{1}{x + h + 2} - \\frac{1}{x + 2}$ over a common denominator gives $\\frac{-h}{(x + h + 2)(x + 2)}$. Dividing by $h$ and letting $h \\to 0$ leaves $-\\frac{1}{(x + 2)^2}$.',
    partNumber: 6,
    partTitle: 'Derivative Definition Practice',
  },
  {
    id: 'dod-ent-6b',
    question: 'Evaluate $\\lim_{h \\to 0} \\dfrac{\\cos\\left(\\frac{\\pi}{3} + h\\right) - \\frac{1}{2}}{h}$.',
    options: ['$\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$', '$0$', '$-\\frac{\\sqrt{3}}{2}$'],
    correctIndex: 3,
    explanation: 'Since $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, this is $f\'\\left(\\frac{\\pi}{3}\\right)$ for $f(x) = \\cos x$. The derivative is $-\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$.',
    partNumber: 6,
    partTitle: 'Derivative Definition Practice',
  },
  // Part 7 — Comprehensive Review
  {
    id: 'dod-ent-7a',
    question: 'A particle has position $s(t) = t^3 - 6t^2 + 9t$ for $t \\ge 0$. At what times is it at rest?',
    options: ['$t = 1$ and $t = 3$', '$t = 0$ and $t = 3$', '$t = 2$ and $t = 4$', '$t = 0$ and $t = 4$'],
    correctIndex: 0,
    explanation: 'At rest means velocity zero: $v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)$, so $t = 1$ and $t = 3$. The times 0 and 3 are where the position is zero, not the velocity, and $t = 2$ is where the acceleration is zero.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
  {
    id: 'dod-ent-7b',
    question: 'The tangent line to the graph of $g$ at $x = 4$ is $y = 2x - 5$. What are $g(4)$ and $g\'(4)$?',
    options: ['$g(4) = 3$ and $g\'(4) = -5$', '$g(4) = 3$ and $g\'(4) = 2$', '$g(4) = -5$ and $g\'(4) = 2$', '$g(4) = 2$ and $g\'(4) = -5$'],
    correctIndex: 1,
    explanation: 'The tangent line touches the graph at $x = 4$, so $g(4) = 2(4) - 5 = 3$, and its slope is the derivative, $g\'(4) = 2$. The intercept $-5$ is neither value.',
    partNumber: 7,
    partTitle: 'Comprehensive Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'From Average to Instantaneous Rate of Change' },
    { partNumber: 2, partTitle: 'When Derivatives Exist (and When They Don\'t)' },
    { partNumber: 3, partTitle: 'Reading Derivatives from Graphs' },
    { partNumber: 4, partTitle: 'The Language of Derivatives' },
    { partNumber: 5, partTitle: 'The Tangent Line Equation' },
    { partNumber: 6, partTitle: 'Derivative Definition Practice' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
