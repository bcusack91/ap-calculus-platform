/**
 * Entrance Quiz — Power Series (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What is a Power Series
  {
    id: 'ps-ent-1a',
    question: 'A power series centered at $a$ has the form:',
    options: ['$\\sum c_n x^n$', '$\\sum c_n (x-a)^n$', '$\\sum \\frac{x^n}{n}$', '$c_0 + c_1 x$'],
    correctIndex: 1,
    explanation: 'Centered at $a$: $\\sum_{n=0}^{\\infty} c_n(x-a)^n$.',
    partNumber: 1,
    partTitle: 'What is a Power Series',
  },
  {
    id: 'ps-ent-1b',
    question: 'A power series centered at $0$ is also called a:',
    options: ['Taylor series', 'Laurent series', 'Maclaurin series', 'Fourier series'],
    correctIndex: 2,
    explanation: 'A Maclaurin series is a power series centered at $x = 0$.',
    partNumber: 1,
    partTitle: 'What is a Power Series',
  },

  // Part 2: Radius of Convergence
  {
    id: 'ps-ent-2a',
    question: 'The radius of convergence $R$ is found using:',
    options: ['The ratio or root test', 'The comparison test only', 'Factoring', 'Substitution'],
    correctIndex: 0,
    explanation: 'Apply ratio or root test to $|c_n(x-a)^n|$ and solve for $|x-a| < R$.',
    partNumber: 2,
    partTitle: 'Radius of Convergence',
  },
  {
    id: 'ps-ent-2b',
    question: 'If the ratio test gives $L = |x| \\cdot \\lim \\frac{|c_{n+1}|}{|c_n|}$, the series converges when $L < 1$, so $R =$',
    options: ['$\\lim \\frac{|c_n|}{|c_{n+1}|}$', '$\\lim \\frac{|c_{n+1}|}{|c_n|}$', '$1$', '$0$'],
    correctIndex: 0,
    explanation: '$R = \\lim \\frac{|c_n|}{|c_{n+1}|}$ (reciprocal of the limit ratio).',
    partNumber: 2,
    partTitle: 'Radius of Convergence',
  },

  // Part 3: Interval of Convergence
  {
    id: 'ps-ent-3a',
    question: 'The interval of convergence is found by:',
    options: ['Only finding $R$', 'Finding $R$ then checking endpoints separately', 'Checking only the center', 'Using the integral test'],
    correctIndex: 1,
    explanation: 'Find $R$ for the open interval, then test each endpoint individually.',
    partNumber: 3,
    partTitle: 'Interval of Convergence',
  },
  {
    id: 'ps-ent-3b',
    question: 'A power series must converge at:',
    options: ['Every point', 'Its center $x = a$', 'The endpoints', 'No points'],
    correctIndex: 1,
    explanation: 'At $x = a$, every term is $0$ (except $c_0$), so it always converges there.',
    partNumber: 3,
    partTitle: 'Interval of Convergence',
  },

  // Part 4: Finding Power Series Representations
  {
    id: 'ps-ent-4a',
    question: 'The geometric series $\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n$ for:',
    options: ['$|x| > 1$', '$|x| < 1$', 'All $x$', '$x > 0$'],
    correctIndex: 1,
    explanation: 'Converges for $|x| < 1$.',
    partNumber: 4,
    partTitle: 'Finding Power Series Representations',
  },
  {
    id: 'ps-ent-4b',
    question: 'To find a power series for $\\frac{1}{1+x^2}$, substitute $x^2$ for $x$ in $\\frac{1}{1-x}$:',
    options: ['$\\sum (-x^2)^n = \\sum (-1)^n x^{2n}$', '$\\sum x^{2n}$', '$\\sum \\frac{x^n}{1+n}$', '$\\sum (-1)^n x^n$'],
    correctIndex: 0,
    explanation: '$\\frac{1}{1+x^2} = \\frac{1}{1-(-x^2)} = \\sum (-x^2)^n = \\sum (-1)^n x^{2n}$.',
    partNumber: 4,
    partTitle: 'Finding Power Series Representations',
  },

  // Part 5: Operations on Power Series
  {
    id: 'ps-ent-5a',
    question: 'You can differentiate a power series:',
    options: ['Only at the center', 'Term by term within the interval of convergence', 'Never', 'Only at the endpoints'],
    correctIndex: 1,
    explanation: 'Power series can be differentiated term by term; $R$ stays the same.',
    partNumber: 5,
    partTitle: 'Operations on Power Series',
  },
  {
    id: 'ps-ent-5b',
    question: 'You can integrate a power series:',
    options: ['Only at the center', 'Term by term within the interval of convergence', 'Never', 'Only with u-substitution'],
    correctIndex: 1,
    explanation: 'Term-by-term integration; $R$ stays the same (endpoints may change).',
    partNumber: 5,
    partTitle: 'Operations on Power Series',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ps-ent-6a',
    question: 'A power series for $\\ln(1+x)$ can be obtained by integrating:',
    options: ['$\\sum x^n$', '$\\sum (-1)^n x^n = \\frac{1}{1+x}$', '$\\sum \\frac{x^n}{n}$', '$e^x$'],
    correctIndex: 1,
    explanation: '$\\int \\frac{1}{1+x}\\,dx = \\int \\sum (-1)^n x^n\\,dx = \\sum \\frac{(-1)^n x^{n+1}}{n+1}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ps-ent-6b',
    question: 'The power series for $e^x$ centered at $0$:',
    options: ['$\\sum \\frac{x^n}{n}$', '$\\sum \\frac{x^n}{n!}$', '$\\sum x^n$', '$\\sum \\frac{(-1)^n x^n}{n!}$'],
    correctIndex: 1,
    explanation: '$e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, converging for all $x$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'ps-ent-7a',
    question: 'On the AP BC exam, power series problems often require:',
    options: ['Only finding $R$', 'Finding $R$, the interval, and representations via known series', 'Only graphing', 'Only the first term'],
    correctIndex: 1,
    explanation: 'Full analysis: radius, interval, endpoint behavior, and series manipulation.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'ps-ent-7b',
    question: 'If $R = \\infty$, the series converges:',
    options: ['Nowhere', 'Only at the center', 'For all real $x$', 'For $|x| < 1$'],
    correctIndex: 2,
    explanation: '$R = \\infty$ means convergence for all $x$ (e.g., $e^x$, $\\sin x$).',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is a Power Series' },
    { partNumber: 2, partTitle: 'Radius of Convergence' },
    { partNumber: 3, partTitle: 'Interval of Convergence' },
    { partNumber: 4, partTitle: 'Finding Power Series Representations' },
    { partNumber: 5, partTitle: 'Operations on Power Series' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
