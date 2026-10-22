/**
 * Entrance Quiz — Taylor & Maclaurin Series — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Taylor Polynomial Construction
  {
    id: 'tm-ent-1a',
    question: 'A function has $f(2) = 5$, $f\'(2) = -2$, $f\'\'(2) = 8$, and $f\'\'\'(2) = 6$. What is its third-degree Taylor polynomial about $x = 2$?',
    options: [
      '$5-2(x-2)+8(x-2)^2+6(x-2)^3$',
      '$5-2(x-2)+4(x-2)^2+(x-2)^3$',
      '$5-2x+4x^2+x^3$',
      '$5-2(x-2)+4(x-2)^2+2(x-2)^3$',
    ],
    correctIndex: 1,
    explanation: 'Each coefficient is $\\frac{f^{(n)}(2)}{n!}$: $\\frac{8}{2} = 4$ and $\\frac{6}{6} = 1$, with powers of $(x - 2)$. Leaving out the factorials gives $8$ and $6$, dividing by $3$ instead of $3!$ gives $2$, and powers of $x$ belong to a series centered at $0$.',
    partNumber: 1,
    partTitle: 'Taylor Polynomial Construction',
  },
  {
    id: 'tm-ent-1b',
    question: 'What is the fifth-degree Maclaurin polynomial for $\\cos(2x)$?',
    options: [
      '$1-2x^2+\\frac{2}{3}x^4$',
      '$1-2x^2+\\frac{2}{3}x^4-\\frac{4}{45}x^6$',
      '$1-x^2+\\frac{x^4}{3}$',
      '$1-\\frac{x^2}{2}+\\frac{x^4}{24}$',
    ],
    correctIndex: 0,
    explanation: 'Substituting $2x$ into the cosine series gives $1 - \\frac{(2x)^2}{2} + \\frac{(2x)^4}{24} - \\cdots = 1 - 2x^2 + \\frac{2}{3}x^4 - \\cdots$. Degree $5$ stops at $x^5$, and the $x^5$ coefficient is $0$, so the $x^6$ term is not included.',
    partNumber: 1,
    partTitle: 'Taylor Polynomial Construction',
  },

  // Part 2 — Derivative Tables & Non-Zero Centers
  {
    id: 'tm-ent-2a',
    question: 'What is the second-degree Taylor polynomial for $f(x) = \\sqrt{x + 1}$ about $x = 3$?',
    options: [
      '$2+\\frac{x-3}{4}-\\frac{(x-3)^2}{32}$',
      '$2+\\frac{x-3}{4}+\\frac{(x-3)^2}{64}$',
      '$2+\\frac{x-3}{4}-\\frac{(x-3)^2}{64}$',
      '$2+\\frac{x}{4}-\\frac{x^2}{64}$',
    ],
    correctIndex: 2,
    explanation: 'Here $f(3) = 2$, $f\'(x) = \\frac{1}{2\\sqrt{x+1}}$ gives $\\frac{1}{4}$, and $f\'\'(x) = -\\frac{1}{4(x+1)^{3/2}}$ gives $-\\frac{1}{32}$; dividing by $2!$ makes the last coefficient $-\\frac{1}{64}$. Forgetting the $2!$ gives $\\frac{1}{32}$.',
    partNumber: 2,
    partTitle: 'Derivative Tables & Non-Zero Centers',
  },
  {
    id: 'tm-ent-2b',
    question: 'In the Taylor series for $\\sin x$ about $x = \\pi$, what is the coefficient of $(x - \\pi)^3$?',
    options: ['$-\\frac{1}{6}$', '$-\\frac{1}{2}$', '$\\frac{1}{24}$', '$\\frac{1}{6}$'],
    correctIndex: 3,
    explanation: 'The third derivative of $\\sin x$ is $-\\cos x$, and $-\\cos \\pi = 1$, so the coefficient is $\\frac{1}{3!} = \\frac{1}{6}$. Copying the Maclaurin coefficient $-\\frac{1}{6}$ ignores the change of center.',
    partNumber: 2,
    partTitle: 'Derivative Tables & Non-Zero Centers',
  },

  // Part 3 — Using Known Series to Build New Ones
  {
    id: 'tm-ent-3a',
    question: 'What are the first three nonzero terms of the Maclaurin series for $\\frac{1 - \\cos x}{x}$?',
    options: [
      '$\\frac{x}{2}-\\frac{x^3}{24}+\\frac{x^5}{720}$',
      '$\\frac{x^2}{2}-\\frac{x^4}{24}+\\frac{x^6}{720}$',
      '$\\frac{x}{2}+\\frac{x^3}{24}+\\frac{x^5}{720}$',
      '$1-\\frac{x}{2}+\\frac{x^3}{24}$',
    ],
    correctIndex: 0,
    explanation: 'Since $1 - \\cos x = \\frac{x^2}{2} - \\frac{x^4}{24} + \\frac{x^6}{720} - \\cdots$, dividing by $x$ gives $\\frac{x}{2} - \\frac{x^3}{24} + \\frac{x^5}{720}$. Forgetting to divide by $x$ leaves the series for $1 - \\cos x$, and the subtraction from $1$ does not make every sign positive.',
    partNumber: 3,
    partTitle: 'Using Known Series to Build New Ones',
  },
  {
    id: 'tm-ent-3b',
    question: 'What is the coefficient of $x^4$ in the Maclaurin series for $\\ln(1 + 2x^2)$?',
    options: ['$-\\frac{1}{2}$', '$-2$', '$-\\frac{1}{4}$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: 'With $u = 2x^2$, $\\ln(1 + u) = u - \\frac{u^2}{2} + \\cdots$, and $\\frac{u^2}{2} = \\frac{4x^4}{2}$, so the coefficient is $-2$. Forgetting to square the $2$ gives $-\\frac{1}{2}$.',
    partNumber: 3,
    partTitle: 'Using Known Series to Build New Ones',
  },

  // Part 4 — The Lagrange Error Bound
  {
    id: 'tm-ent-4a',
    question: 'The third-degree Taylor polynomial for $f$ about $x = 1$ is used to approximate $f(1.5)$, and $|f^{(4)}(x)| \\le 6$ on $[1, 1.5]$. What is the Lagrange error bound?',
    options: ['$\\frac{1}{16}$', '$\\frac{3}{8}$', '$\\frac{1}{64}$', '$\\frac{1}{32}$'],
    correctIndex: 2,
    explanation: 'The bound is $\\frac{M|x - c|^4}{4!} = \\frac{6(0.5)^4}{24} = \\frac{1}{64}$. Dividing by $3!$ gives $\\frac{1}{16}$, and leaving out the factorial gives $\\frac{3}{8}$.',
    partNumber: 4,
    partTitle: 'The Lagrange Error Bound',
  },
  {
    id: 'tm-ent-4b',
    question: 'The third-degree Maclaurin polynomial for $e^x$ approximates $e^{0.4}$. Which is the Lagrange error bound?',
    options: [
      '$\\frac{(0.4)^4}{24}$',
      '$\\frac{e^{0.4}(0.4)^3}{6}$',
      '$\\frac{e^{0.4}(0.4)^5}{120}$',
      '$\\frac{e^{0.4}(0.4)^4}{24}$',
    ],
    correctIndex: 3,
    explanation: 'The fourth derivative is $e^x$, whose maximum on $[0, 0.4]$ is $M = e^{0.4}$, so the bound is $\\frac{e^{0.4}(0.4)^4}{4!}$. Using $M = 1$ underestimates $e^x$ there, and the other two use the wrong power and factorial.',
    partNumber: 4,
    partTitle: 'The Lagrange Error Bound',
  },

  // Part 5 — Exam Techniques
  {
    id: 'tm-ent-5a',
    question: 'What is the general term of the Maclaurin series for $xe^{-2x}$?',
    options: [
      '$\\frac{(-2)^n x^{n+1}}{n!}$',
      '$\\frac{(-2)^n x^{n}}{n!}$',
      '$\\frac{-2x^{n+1}}{n!}$',
      '$\\frac{(-1)^n 2x^{n+1}}{n!}$',
    ],
    correctIndex: 0,
    explanation: 'Substitute $-2x$ into $e^u = \\sum \\frac{u^n}{n!}$ to get $\\sum \\frac{(-2)^n x^n}{n!}$, then multiply by $x$. The $2$ must be raised to the $n$th power along with the sign, and the factor $x$ raises every exponent by one.',
    partNumber: 5,
    partTitle: 'Exam Techniques',
  },
  {
    id: 'tm-ent-5b',
    question: 'Using the first two nonzero terms of the Maclaurin series for $\\cos(x^2)$, what is the approximation of $\\int_0^1 \\cos(x^2)\\,dx$?',
    options: ['$\\frac{1}{2}$', '$\\frac{9}{10}$', '$\\frac{2}{3}$', '$\\frac{4}{5}$'],
    correctIndex: 1,
    explanation: 'Since $\\cos(x^2) = 1 - \\frac{x^4}{2} + \\cdots$, the integral is about $\\int_0^1 \\left(1 - \\frac{x^4}{2}\\right)dx = 1 - \\frac{1}{10} = \\frac{9}{10}$. Forgetting the $2!$ gives $\\frac{4}{5}$, and $\\frac{1}{2}$ evaluates the terms at $x = 1$ without integrating.',
    partNumber: 5,
    partTitle: 'Exam Techniques',
  },

  // Part 6 — Mixed Practice
  {
    id: 'tm-ent-6a',
    question: 'What is the coefficient of $x^3$ in the Maclaurin series for $(1 + x)\\ln(1 + x)$?',
    options: ['$\\frac{1}{3}$', '$\\frac{5}{6}$', '$-\\frac{1}{6}$', '$\\frac{1}{6}$'],
    correctIndex: 2,
    explanation: 'Multiply $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$ by $1 + x$: the $x^3$ terms are $1 \\cdot \\frac{x^3}{3}$ and $x \\cdot \\left(-\\frac{x^2}{2}\\right)$, giving $\\frac{1}{3} - \\frac{1}{2} = -\\frac{1}{6}$. Keeping only the first product gives $\\frac{1}{3}$, and adding the magnitudes gives $\\frac{5}{6}$.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'tm-ent-6b',
    question: 'What is the sum of $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n \\cdot 2^n}$?',
    options: ['$\\ln 2$', '$e^{1/2}$', '$-\\ln 2$', '$\\ln\\frac{3}{2}$'],
    correctIndex: 3,
    explanation: 'This is $\\ln(1 + x) = \\sum \\frac{(-1)^{n+1}x^n}{n}$ evaluated at $x = \\frac{1}{2}$, so the sum is $\\ln\\frac{3}{2}$. The value $\\ln 2$ comes from $x = 1$, and $-\\ln 2 = \\ln\\frac{1}{2}$ comes from substituting $x = -\\frac{1}{2}$ into the wrong series.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },

  // Part 7 — Complete Topic Review
  {
    id: 'tm-ent-7a',
    question: 'Let $f(x) = \\sum_{n=0}^{\\infty} \\frac{n + 2}{3^n}(x + 1)^n$. What is $f\'\'(-1)$?',
    options: ['$\\frac{8}{9}$', '$\\frac{4}{9}$', '$\\frac{8}{3}$', '$2$'],
    correctIndex: 0,
    explanation: 'The coefficient of $(x + 1)^2$ is $a_2 = \\frac{4}{9}$, and $f\'\'(-1) = 2! \\cdot a_2 = \\frac{8}{9}$. The value $\\frac{4}{9}$ forgets the factor $2!$.',
    partNumber: 7,
    partTitle: 'Complete Topic Review',
  },
  {
    id: 'tm-ent-7b',
    question: 'A function $f$ is even and equals its Maclaurin series near $0$. Which statement must be true?',
    options: [
      'Each even-power coefficient is $0$',
      'The constant term $f(0)$ must equal $0$',
      'Each odd-power coefficient is $0$',
      'The coefficients must alternate in sign',
    ],
    correctIndex: 2,
    explanation: 'An even function satisfies $f(-x) = f(x)$, which forces every odd power to drop out, as in $\\cos x$. The constant term can be nonzero, and the signs need not alternate (for example $e^{x^2}$).',
    partNumber: 7,
    partTitle: 'Complete Topic Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Taylor Polynomial Construction' },
    { partNumber: 2, partTitle: 'Derivative Tables & Non-Zero Centers' },
    { partNumber: 3, partTitle: 'Using Known Series to Build New Ones' },
    { partNumber: 4, partTitle: 'The Lagrange Error Bound' },
    { partNumber: 5, partTitle: 'Exam Techniques' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Complete Topic Review' },
  ]
}
