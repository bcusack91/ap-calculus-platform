/**
 * Entrance Quiz — Taylor & Maclaurin Series (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Taylor Series Formula
  {
    id: 'tm-ent-1a',
    question: 'The Taylor series of $f(x)$ centered at $a$ is:',
    options: ['$\\sum_{n=0}^{\\infty} f(a) x^n$', '$\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n$', '$\\sum_{n=0}^{\\infty} \\frac{f(x)}{n!}$', "$f(a) + f'(a)x$"],
    correctIndex: 1,
    explanation: 'Taylor series: $\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n$.',
    partNumber: 1,
    partTitle: 'Taylor Series Formula',
  },
  {
    id: 'tm-ent-1b',
    question: 'The $n$th coefficient of the Taylor series is:',
    options: ['$f^{(n)}(a)$', '$\\frac{f^{(n)}(a)}{n!}$', '$\\frac{f(a)}{n}$', '$n! f(a)$'],
    correctIndex: 1,
    explanation: 'Each coefficient is $\\frac{f^{(n)}(a)}{n!}$.',
    partNumber: 1,
    partTitle: 'Taylor Series Formula',
  },

  // Part 2: Maclaurin Series of Common Functions
  {
    id: 'tm-ent-2a',
    question: 'The Maclaurin series for $\\sin x$ is:',
    options: ['$\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$', '$\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$', '$\\sum \\frac{x^n}{n!}$', '$\\sum (-1)^n x^n$'],
    correctIndex: 1,
    explanation: '$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$',
    partNumber: 2,
    partTitle: 'Maclaurin Series of Common Functions',
  },
  {
    id: 'tm-ent-2b',
    question: 'The Maclaurin series for $\\cos x$ is:',
    options: ['$\\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$', '$\\sum \\frac{(-1)^n x^{2n}}{(2n)!}$', '$\\sum \\frac{x^n}{n!}$', '$\\sum x^{2n}$'],
    correctIndex: 1,
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$',
    partNumber: 2,
    partTitle: 'Maclaurin Series of Common Functions',
  },

  // Part 3: Finding Taylor Polynomials
  {
    id: 'tm-ent-3a',
    question: 'The 3rd-degree Taylor polynomial $T_3(x)$ uses terms through:',
    options: ['$x^2$', '$x^3$', '$x^4$', '$x^1$'],
    correctIndex: 1,
    explanation: '$T_3$ includes terms up to and including $(x-a)^3$.',
    partNumber: 3,
    partTitle: 'Finding Taylor Polynomials',
  },
  {
    id: 'tm-ent-3b',
    question: 'The Taylor polynomial $T_2(x)$ for $e^x$ at $a = 0$ is:',
    options: ['$1 + x$', '$1 + x + \\frac{x^2}{2}$', '$1 + x + x^2$', '$x + \\frac{x^2}{2}$'],
    correctIndex: 1,
    explanation: '$T_2 = 1 + x + \\frac{x^2}{2!}$.',
    partNumber: 3,
    partTitle: 'Finding Taylor Polynomials',
  },

  // Part 4: Taylor Series from Known Series
  {
    id: 'tm-ent-4a',
    question: 'To find the Maclaurin series for $e^{-x^2}$, substitute $-x^2$ into:',
    options: ['$\\sin x$', '$e^x = \\sum \\frac{x^n}{n!}$', '$\\cos x$', '$\\ln(1+x)$'],
    correctIndex: 1,
    explanation: 'Replace $x$ with $-x^2$ in $e^x$.',
    partNumber: 4,
    partTitle: 'Taylor Series from Known Series',
  },
  {
    id: 'tm-ent-4b',
    question: 'The Maclaurin series for $x\\sin x$ is obtained by:',
    options: ['Dividing $\\sin x$ by $x$', 'Multiplying the $\\sin x$ series by $x$', 'Differentiating $\\sin x$', 'Integrating $\\sin x$'],
    correctIndex: 1,
    explanation: 'Multiply each term of $\\sin x = x - \\frac{x^3}{6}+\\cdots$ by $x$.',
    partNumber: 4,
    partTitle: 'Taylor Series from Known Series',
  },

  // Part 5: Convergence of Taylor Series
  {
    id: 'tm-ent-5a',
    question: 'The Taylor series equals $f(x)$ on an interval if:',
    options: ['All derivatives exist', 'The remainder $R_n(x) \\to 0$ as $n \\to \\infty$', 'The series has $R > 0$', 'The coefficients are bounded'],
    correctIndex: 1,
    explanation: 'The series represents $f$ when the remainder approaches zero.',
    partNumber: 5,
    partTitle: 'Convergence of Taylor Series',
  },
  {
    id: 'tm-ent-5b',
    question: 'The Maclaurin series for $e^x$ converges:',
    options: ['Only for $|x| < 1$', 'For all real $x$', 'Only at $x = 0$', 'For $|x| < e$'],
    correctIndex: 1,
    explanation: '$e^x$ has $R = \\infty$: converges for all $x$.',
    partNumber: 5,
    partTitle: 'Convergence of Taylor Series',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'tm-ent-6a',
    question: 'Find the coefficient of $x^4$ in the Maclaurin series for $\\cos x$:',
    options: ['$\\frac{1}{4!} = \\frac{1}{24}$', '$-\\frac{1}{4!}$', '$\\frac{1}{4}$', '$0$'],
    correctIndex: 0,
    explanation: '$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$ Coefficient of $x^4$ is $\\frac{1}{24}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tm-ent-6b',
    question: 'The first three nonzero terms of the Maclaurin series for $\\tan^{-1} x$ are:',
    options: ['$x + \\frac{x^3}{3} + \\frac{x^5}{5}$', '$x - \\frac{x^3}{3} + \\frac{x^5}{5}$', '$1 - x + x^2$', '$x - \\frac{x^2}{2} + \\frac{x^3}{3}$'],
    correctIndex: 1,
    explanation: '$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots$',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Review & AP Exam Applications
  {
    id: 'tm-ent-7a',
    question: 'On the AP BC exam, you should memorize the Maclaurin series for:',
    options: ['Only $e^x$', '$e^x$, $\\sin x$, $\\cos x$, $\\frac{1}{1-x}$, and $\\ln(1+x)$', 'All possible functions', 'Only geometric series'],
    correctIndex: 1,
    explanation: 'These 5-6 series are the building blocks for all Taylor series problems.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'tm-ent-7b',
    question: 'Using a known series to create a new one (by substitution, multiplication, differentiation, or integration) is called:',
    options: ['Series manipulation', "Taylor's theorem", 'The integral test', "L'Hôpital's Rule"],
    correctIndex: 0,
    explanation: 'Series manipulation is the primary technique on the BC exam.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Taylor Series Formula' },
    { partNumber: 2, partTitle: 'Maclaurin Series of Common Functions' },
    { partNumber: 3, partTitle: 'Finding Taylor Polynomials' },
    { partNumber: 4, partTitle: 'Taylor Series from Known Series' },
    { partNumber: 5, partTitle: 'Convergence of Taylor Series' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
