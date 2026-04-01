/**
 * Entrance Quiz — Area Between Curves (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Area Under a Single Curve
  { id: 'abc-ent-1a', question: 'The area under $f(x) \\geq 0$ from $a$ to $b$ is:', options: ['$f(b) - f(a)$', '$\\int_a^b f(x)\\,dx$', '$f\'(b) - f\'(a)$', '$\\sum f(x)$'], correctIndex: 1, explanation: 'For nonnegative functions, area = definite integral.', partNumber: 1, partTitle: 'Area Under a Single Curve' },
  { id: 'abc-ent-1b', question: 'If $f(x) < 0$ on $[a,b]$, the area between $f$ and the $x$-axis is:', options: ['$\\int_a^b f(x)\\,dx$', '$-\\int_a^b f(x)\\,dx$', '$0$', '$|f(a) - f(b)|$'], correctIndex: 1, explanation: 'Take the absolute value (or negate) since $f$ is negative.', partNumber: 1, partTitle: 'Area Under a Single Curve' },

  // Part 2: Area Between Two Curves (Vertical)
  { id: 'abc-ent-2a', question: 'The area between $f(x)$ and $g(x)$ from $a$ to $b$ (where $f \\geq g$) is:', options: ['$\\int_a^b [f(x) + g(x)]\\,dx$', '$\\int_a^b [f(x) - g(x)]\\,dx$', '$\\int_a^b f(x)\\,dx \\cdot \\int_a^b g(x)\\,dx$', '$f(b) - g(a)$'], correctIndex: 1, explanation: 'Area = $\\int_a^b [\\text{top} - \\text{bottom}]\\,dx$.', partNumber: 2, partTitle: 'Area Between Two Curves (Vertical)' },
  { id: 'abc-ent-2b', question: 'Find the area between $y = x^2$ and $y = x$ from $x = 0$ to $x = 1$:', options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$1$'], correctIndex: 0, explanation: '$\\int_0^1 (x - x^2)\\,dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{6}$.', partNumber: 2, partTitle: 'Area Between Two Curves (Vertical)' },

  // Part 3: Area Between Two Curves (Horizontal)
  { id: 'abc-ent-3a', question: 'When integrating with respect to $y$, the formula is:', options: ['$\\int_c^d [\\text{right} - \\text{left}]\\,dy$', '$\\int_c^d [\\text{top} - \\text{bottom}]\\,dy$', '$\\int_c^d [f(y) + g(y)]\\,dy$', '$\\int_a^b [f(x) - g(x)]\\,dx$'], correctIndex: 0, explanation: 'Horizontal slicing: area = $\\int [\\text{right function} - \\text{left function}]\\,dy$.', partNumber: 3, partTitle: 'Area Between Two Curves (Horizontal)' },
  { id: 'abc-ent-3b', question: 'You might prefer integrating with respect to $y$ when:', options: ['The curves are simple polynomials', 'The curves cross multiple times as functions of $x$', 'The region is bounded by functions of $y$', 'Always'], correctIndex: 2, explanation: 'If the boundary curves are easier to express as $x = f(y)$, integrate with respect to $y$.', partNumber: 3, partTitle: 'Area Between Two Curves (Horizontal)' },

  // Part 4: Setting Up Integrals from Graphs
  { id: 'abc-ent-4a', question: 'From a graph, you determine which function is on top by:', options: ['Taking derivatives', 'Looking at which curve has higher $y$-values', 'Checking concavity', 'Integrating both'], correctIndex: 1, explanation: 'The \'top\' function has greater $y$-values in the region.', partNumber: 4, partTitle: 'Setting Up Integrals from Graphs' },
  { id: 'abc-ent-4b', question: 'If two curves cross at $x = 2$, you need to:', options: ['Ignore the crossing', 'Split the integral at $x = 2$', 'Only integrate to $x = 2$', 'Use absolute values'], correctIndex: 1, explanation: 'When curves swap top/bottom, split the integral at the crossing point.', partNumber: 4, partTitle: 'Setting Up Integrals from Graphs' },

  // Part 5: Absolute Value Considerations
  { id: 'abc-ent-5a', question: 'To handle regions where $f - g$ changes sign, use:', options: ['$\\int_a^b \\left| f(x) - g(x) \\right|\\,dx$', '$\\int_a^b [f(x) - g(x)]\\,dx$', '$\\left| \\int_a^b f(x)\\,dx \\right|$', '$\\int_a^b [f(x) + g(x)]\\,dx$'], correctIndex: 0, explanation: 'Absolute value ensures all area is positive.', partNumber: 5, partTitle: 'Absolute Value Considerations' },
  { id: 'abc-ent-5b', question: 'The total shaded area is always:', options: ['Zero', 'Nonnegative', 'Equal to displacement', 'Negative'], correctIndex: 1, explanation: 'Geometric area is always nonnegative.', partNumber: 5, partTitle: 'Absolute Value Considerations' },

  // Part 6: Problem-Solving Workshop
  { id: 'abc-ent-6a', question: 'Find the area enclosed by $y = x^2$ and $y = 4$:', options: ['$\\frac{32}{3}$', '$\\frac{16}{3}$', '$8$', '$\\frac{8}{3}$'], correctIndex: 0, explanation: 'Intersect at $x = \\pm 2$. $\\int_{-2}^{2}(4-x^2)\\,dx = [4x - \\frac{x^3}{3}]_{-2}^{2} = \\frac{32}{3}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'abc-ent-6b', question: 'The area between $y = \\sin x$ and $y = 0$ from $0$ to $2\\pi$ is:', options: ['$0$', '$2$', '$4$', '$\\pi$'], correctIndex: 2, explanation: '$\\int_0^{\\pi} \\sin x\\,dx + \\int_{\\pi}^{2\\pi}|\\sin x|\\,dx = 2 + 2 = 4$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'abc-ent-7a', question: 'On the AP exam, always check whether the curves:', options: ['Have derivatives', 'Intersect within the given interval', 'Are continuous', 'Have antiderivatives'], correctIndex: 1, explanation: 'Intersection points determine where to split or set up limits.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'abc-ent-7b', question: 'The area between $y = e^x$ and $y = 1$ from $x = 0$ to $x = 1$ is:', options: ['$e - 2$', '$e - 1$', '$e$', '$1$'], correctIndex: 0, explanation: '$\\int_0^1(e^x - 1)\\,dx = [e^x - x]_0^1 = (e-1) - (1-0) = e - 2$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Area Under a Single Curve' },
    { partNumber: 2, partTitle: 'Area Between Two Curves (Vertical)' },
    { partNumber: 3, partTitle: 'Area Between Two Curves (Horizontal)' },
    { partNumber: 4, partTitle: 'Setting Up Integrals from Graphs' },
    { partNumber: 5, partTitle: 'Absolute Value Considerations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
