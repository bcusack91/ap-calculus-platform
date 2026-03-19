/**
 * Entrance Quiz — Free-Response Strategies (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Understanding FRQ Structure
  {
    id: 'fr-ent-1a',
    question: 'AP Calculus AB has how many free-response questions?',
    options: ['$4$', '$6$', '$8$', '$10$'],
    correctIndex: 1,
    explanation: 'The AB exam has 6 FRQs: 2 with calculator, 4 without.',
    partNumber: 1,
    partTitle: 'Understanding FRQ Structure',
  },
  {
    id: 'fr-ent-1b',
    question: 'Each FRQ typically has how many parts?',
    options: ['$2$', '$3-4$', '$6-8$', '$1$'],
    correctIndex: 1,
    explanation: 'Most FRQs have 3-4 parts (a, b, c, d).',
    partNumber: 1,
    partTitle: 'Understanding FRQ Structure',
  },
  // Part 2: Rate & Accumulation Problems
  {
    id: 'fr-ent-2a',
    question: 'In a rate/accumulation FRQ, \'total amount\' means:',
    options: ['Take the derivative', 'Integrate the rate function', 'Evaluate at the endpoints', 'Find the average'],
    correctIndex: 1,
    explanation: 'Total amount = $\\int$ rate. This is the most tested concept.',
    partNumber: 2,
    partTitle: 'Rate & Accumulation Problems',
  },
  {
    id: 'fr-ent-2b',
    question: 'If $R(t)$ is the rate people enter a park and $E(t)$ is the exit rate, the number in the park changes by:',
    options: ['$\\int[R(t) + E(t)]\\,dt$', '$\\int[R(t) - E(t)]\\,dt$', '$R(t) \\cdot E(t)$', '$R(t)/E(t)$'],
    correctIndex: 1,
    explanation: 'Net change = $\\int$ (rate in − rate out).',
    partNumber: 2,
    partTitle: 'Rate & Accumulation Problems',
  },
  // Part 3: Justification & Explanation
  {
    id: 'fr-ent-3a',
    question: 'When asked to \'justify\' an answer on the AP exam, you must:',
    options: ['Just state the answer', 'Provide mathematical reasoning using theorems or definitions', 'Write a paragraph', 'Show a graph'],
    correctIndex: 1,
    explanation: 'Justifications require citing theorems (MVT, IVT, etc.) or showing work.',
    partNumber: 3,
    partTitle: 'Justification & Explanation',
  },
  {
    id: 'fr-ent-3b',
    question: 'To justify a function is increasing, state that:',
    options: ['$f(x) > 0$', '$f\'(x) > 0$ on the interval', '$f\'\'(x) > 0$', '$f$ is continuous'],
    correctIndex: 1,
    explanation: '$f\'(x) > 0$ means $f$ is increasing.',
    partNumber: 3,
    partTitle: 'Justification & Explanation',
  },
  // Part 4: Differential Equation FRQs
  {
    id: 'fr-ent-4a',
    question: 'A typical DE FRQ asks you to:',
    options: ['Only draw a slope field', 'Separate variables and solve with an initial condition', 'Graph the solution', 'Find all solutions'],
    correctIndex: 1,
    explanation: 'Common pattern: separate, integrate, solve for $C$ using the initial condition.',
    partNumber: 4,
    partTitle: 'Differential Equation FRQs',
  },
  {
    id: 'fr-ent-4b',
    question: 'When solving $\\frac{dy}{dx} = f(x,y)$ with $y(a) = b$, the final answer should be:',
    options: ['In terms of $C$', 'An explicit function $y = ...$', 'In terms of the derivative', 'Any form'],
    correctIndex: 1,
    explanation: 'Solve for $y$ explicitly if possible, using the initial condition to find $C$.',
    partNumber: 4,
    partTitle: 'Differential Equation FRQs',
  },
  // Part 5: Graph-Based FRQs
  {
    id: 'fr-ent-5a',
    question: 'When given a graph of $f\'$ and asked about $f$:',
    options: ['$f\'$ positive means $f$ is decreasing', '$f\'$ positive means $f$ is increasing', '$f\' = 0$ means $f = 0$', '$f\'$ increasing means $f$ is increasing'],
    correctIndex: 1,
    explanation: '$f\' > 0 \\Rightarrow f$ is increasing.',
    partNumber: 5,
    partTitle: 'Graph-Based FRQs',
  },
  {
    id: 'fr-ent-5b',
    question: 'From a graph of $f\'$, the absolute maximum of $f$ on $[a,b]$ occurs:',
    options: ['Where $f\'$ is largest', 'Where $f\'$ changes from positive to negative', 'Where $f\'$ changes from negative to positive', 'At every zero of $f\'$'],
    correctIndex: 1,
    explanation: 'Candidates: where $f\'$ changes from + to −, or at endpoints.',
    partNumber: 5,
    partTitle: 'Graph-Based FRQs',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'fr-ent-6a',
    question: 'On calculator-active FRQs, you should:',
    options: ['Show all algebraic steps', 'Use the calculator for definite integrals and store intermediate values', 'Avoid the calculator', 'Only graph'],
    correctIndex: 1,
    explanation: 'Use the calculator for numerical integration and finding zeros.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'fr-ent-6b',
    question: 'When asked \'is the approximation an over or under estimate,\' check:',
    options: ['The sign of $f$', 'The concavity of $f$', 'The value of $f\'$', 'The limits of integration'],
    correctIndex: 1,
    explanation: 'Concavity determines whether trapezoids over/underestimate.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: Review & AP Exam Applications
  {
    id: 'fr-ent-7a',
    question: 'On the AP exam, if you cannot finish a part, you should:',
    options: ['Skip the entire problem', 'Write what you know and move on', 'Erase everything', 'Leave it blank'],
    correctIndex: 1,
    explanation: 'Partial credit is awarded. Write any relevant setup or reasoning.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'fr-ent-7b',
    question: 'The most important skill for FRQs is:',
    options: ['Speed', 'Connecting derivatives and integrals to the problem context', 'Memorizing formulas', 'Calculator proficiency'],
    correctIndex: 1,
    explanation: 'Understanding the meaning of derivatives and integrals in context is essential.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding FRQ Structure' },
    { partNumber: 2, partTitle: 'Rate & Accumulation Problems' },
    { partNumber: 3, partTitle: 'Justification & Explanation' },
    { partNumber: 4, partTitle: 'Differential Equation FRQs' },
    { partNumber: 5, partTitle: 'Graph-Based FRQs' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
