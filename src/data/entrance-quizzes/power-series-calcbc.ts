/**
 * Entrance Quiz — Power Series — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Introduction to Power Series
  {
    id: 'ps-ent-1a',
    question: 'What is the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{(3x - 2)^n}{n}$?',
    options: ['$\\frac{1}{3}$', '$3$', '$1$', '$\\frac{2}{3}$'],
    correctIndex: 0,
    explanation: 'The ratio test gives convergence when $|3x - 2| < 1$, which is $\\left|x - \\frac{2}{3}\\right| < \\frac{1}{3}$, so the radius is $\\frac{1}{3}$ (the center is $\\frac{2}{3}$). Reading the radius from $|3x - 2| < 1$ without dividing by $3$ gives $1$.',
    partNumber: 1,
    partTitle: 'Introduction to Power Series',
  },
  {
    id: 'ps-ent-1b',
    question: 'For which $x$ does $\\sum_{n=0}^{\\infty} n!\\,(x - 4)^n$ converge?',
    options: [
      'For every real number $x$',
      'On the interval $3 < x < 5$',
      'Only at $x = 4$',
      'On the interval $-4 < x < 4$',
    ],
    correctIndex: 2,
    explanation: 'The ratio of consecutive terms is $(n + 1)|x - 4|$, which grows without bound unless $x = 4$, so the radius is $0$ and the series converges only at its center. Factorials in the numerator give $R = 0$, not $R = \\infty$.',
    partNumber: 1,
    partTitle: 'Introduction to Power Series',
  },

  // Part 2 — Endpoint Testing
  {
    id: 'ps-ent-2a',
    question: 'What is the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x - 1)^n}{n^2 \\cdot 2^n}$?',
    options: ['$(-1, 3)$', '$[-1, 3]$', '$[-1, 3)$', '$(-1, 3]$'],
    correctIndex: 1,
    explanation: 'The ratio test gives $|x - 1| < 2$. At $x = 3$ the series is $\\sum \\frac{1}{n^2}$ and at $x = -1$ it is $\\sum \\frac{(-1)^n}{n^2}$; both converge, so both endpoints are included.',
    partNumber: 2,
    partTitle: 'Endpoint Testing',
  },
  {
    id: 'ps-ent-2b',
    question: 'The series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n x^n}{n}$ has radius of convergence $1$. At which endpoints does it converge?',
    options: [
      'Only at $x = -1$',
      'At both $x = 1$ and $x = -1$',
      'At neither endpoint',
      'Only at $x = 1$',
    ],
    correctIndex: 3,
    explanation: 'At $x = 1$ the series is $\\sum \\frac{(-1)^n}{n}$, which converges by the alternating series test. At $x = -1$ the factors combine to $(-1)^{2n} = 1$, giving the divergent harmonic series. So the interval is $(-1, 1]$.',
    partNumber: 2,
    partTitle: 'Endpoint Testing',
  },

  // Part 3 — Differentiation, Integration, and Manipulation
  {
    id: 'ps-ent-3a',
    question: 'Let $f(x) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n}$ for $|x| < 1$. Which series equals $\\int_0^x f(t)\\,dt$?',
    options: [
      '$\\sum_{n=1}^{\\infty} \\frac{x^{n+1}}{n^2+n}$',
      '$\\sum_{n=1}^{\\infty} x^{n-1}$',
      '$\\sum_{n=1}^{\\infty} \\frac{x^{n+1}}{n+1}$',
      '$\\sum_{n=1}^{\\infty} \\frac{x^{n+1}}{n^2}$',
    ],
    correctIndex: 0,
    explanation: 'Integrating term by term, $\\int_0^x \\frac{t^n}{n}\\,dt = \\frac{x^{n+1}}{n(n+1)}$. The series $\\sum x^{n-1}$ is the derivative instead, and the other two each keep only one of the two factors in the denominator.',
    partNumber: 3,
    partTitle: 'Differentiation, Integration, and Manipulation',
  },
  {
    id: 'ps-ent-3b',
    question: 'The series $\\sum a_n x^n$ has radius of convergence $4$. What are the radii of $\\sum n a_n x^{n-1}$ and of $\\sum a_n x^{2n}$?',
    options: ['$4$ and $16$', '$3$ and $2$', '$4$ and $2$', '$4$ and $4$'],
    correctIndex: 2,
    explanation: 'Differentiating term by term keeps the radius $4$. Replacing $x$ by $x^2$ requires $|x^2| < 4$, that is $|x| < 2$. Squaring the radius instead gives $16$, and differentiation does not lower the radius.',
    partNumber: 3,
    partTitle: 'Differentiation, Integration, and Manipulation',
  },

  // Part 4 — Building Series from Known Functions
  {
    id: 'ps-ent-4a',
    question: 'Which power series represents $\\frac{x^2}{1 + 4x}$ for $|x| < \\frac{1}{4}$?',
    options: [
      '$\\sum_{n=0}^{\\infty} (-4)^n x^{n}$',
      '$\\sum_{n=0}^{\\infty} (-4)^n x^{n+2}$',
      '$\\sum_{n=0}^{\\infty} 4^n x^{n+2}$',
      '$\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{n+2}}{4^n}$',
    ],
    correctIndex: 1,
    explanation: 'Write $\\frac{1}{1 + 4x} = \\frac{1}{1 - (-4x)} = \\sum (-4x)^n$ and multiply by $x^2$. Leaving out the factor $x^2$, losing the sign, or dividing by $4^n$ instead of multiplying are the usual slips.',
    partNumber: 4,
    partTitle: 'Building Series from Known Functions',
  },
  {
    id: 'ps-ent-4b',
    question: 'What is the coefficient of $x^7$ in the Maclaurin series for $x\\sin(x^2)$?',
    options: ['$\\frac{1}{6}$', '$-\\frac{1}{5040}$', '$\\frac{1}{120}$', '$-\\frac{1}{6}$'],
    correctIndex: 3,
    explanation: 'Since $\\sin u = u - \\frac{u^3}{6} + \\cdots$, $\\sin(x^2) = x^2 - \\frac{x^6}{6} + \\cdots$, and multiplying by $x$ gives $x^3 - \\frac{x^7}{6} + \\cdots$. The value $-\\frac{1}{5040}$ is the $x^7$ coefficient of $\\sin x$ itself, before substituting.',
    partNumber: 4,
    partTitle: 'Building Series from Known Functions',
  },

  // Part 5 — Series Solutions & Exam Techniques
  {
    id: 'ps-ent-5a',
    question: 'Let $f(x) = \\sum_{n=0}^{\\infty} \\frac{(n+1)(x - 1)^n}{2^n}$. What is $f\'\'\'(1)$?',
    options: ['$3$', '$\\frac{1}{2}$', '$24$', '$\\frac{3}{4}$'],
    correctIndex: 0,
    explanation: 'The coefficient of $(x - 1)^3$ is $a_3 = \\frac{4}{8} = \\frac{1}{2}$, and $f\'\'\'(1) = 3! \\cdot a_3 = 3$. The value $\\frac{1}{2}$ forgets to multiply by $3!$, and $24$ multiplies $3!$ by the numerator $4$ alone.',
    partNumber: 5,
    partTitle: 'Series Solutions & Exam Techniques',
  },
  {
    id: 'ps-ent-5b',
    question: 'The solution of $y\' = x - y$ with $y(0) = 2$ is written $y = a_0 + a_1 x + a_2 x^2 + \\cdots$. What is $a_2$?',
    options: ['$3$', '$1$', '$\\frac{3}{2}$', '$-3$'],
    correctIndex: 2,
    explanation: 'Here $y(0) = 2$ and $y\'(0) = 0 - 2 = -2$. Differentiating the equation gives $y\'\' = 1 - y\'$, so $y\'\'(0) = 3$ and $a_2 = \\frac{y\'\'(0)}{2!} = \\frac{3}{2}$. Forgetting the $2!$ gives $3$, and dropping the $x$ term gives $1$.',
    partNumber: 5,
    partTitle: 'Series Solutions & Exam Techniques',
  },

  // Part 6 — Mixed Practice
  {
    id: 'ps-ent-6a',
    question: 'What is the radius of convergence of $\\sum_{n=1}^{\\infty} \\frac{2^n x^{2n}}{n}$?',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{2}}$', '$2$', '$\\sqrt{2}$'],
    correctIndex: 1,
    explanation: 'The ratio of consecutive terms tends to $2x^2$, so the series converges when $2x^2 < 1$, that is $|x| < \\frac{1}{\\sqrt{2}}$. Treating $x^{2n}$ as $x^n$ gives $\\frac{1}{2}$.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'ps-ent-6b',
    question: 'Using $\\sum_{n=1}^{\\infty} n x^n = \\frac{x}{(1-x)^2}$ for $|x| < 1$, what is $\\sum_{n=1}^{\\infty} \\frac{n}{3^n}$?',
    options: ['$\\frac{1}{2}$', '$\\frac{9}{4}$', '$\\frac{3}{2}$', '$\\frac{3}{4}$'],
    correctIndex: 3,
    explanation: 'Substitute $x = \\frac{1}{3}$: $\\frac{1/3}{(2/3)^2} = \\frac{1/3}{4/9} = \\frac{3}{4}$. The value $\\frac{1}{2}$ is $\\sum \\left(\\frac{1}{3}\\right)^n$, and $\\frac{9}{4}$ drops the factor $x$ in the numerator.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },

  // Part 7 — Complete Topic Review
  {
    id: 'ps-ent-7a',
    question: 'What is the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(2x - 1)^n}{n}$?',
    options: ['$[0, 1)$', '$(0, 1)$', '$(0, 1]$', '$[0, 1]$'],
    correctIndex: 0,
    explanation: 'Convergence needs $|2x - 1| < 1$, so $0 < x < 1$. At $x = 1$ the series is $\\sum \\frac{1}{n}$, which diverges; at $x = 0$ it is $\\sum \\frac{(-1)^n}{n}$, which converges. So the interval is $[0, 1)$.',
    partNumber: 7,
    partTitle: 'Complete Topic Review',
  },
  {
    id: 'ps-ent-7b',
    question: 'A power series $\\sum a_n x^n$ converges at $x = 3$ and diverges at $x = -5$. Which statement must be true?',
    options: [
      'It must converge at $x = 4.5$',
      'It must diverge at $x = -3$',
      'It converges at $x = -2$',
      'Its radius is exactly $4$',
    ],
    correctIndex: 2,
    explanation: 'Convergence at $x = 3$ forces $R \\ge 3$, and divergence at $x = -5$ forces $R \\le 5$. Every $x$ with $|x| < 3$, including $-2$, is inside the interval, so the series converges there. Nothing is guaranteed for $3 \\le |x| \\le 5$.',
    partNumber: 7,
    partTitle: 'Complete Topic Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Power Series' },
    { partNumber: 2, partTitle: 'Endpoint Testing' },
    { partNumber: 3, partTitle: 'Differentiation, Integration, and Manipulation' },
    { partNumber: 4, partTitle: 'Building Series from Known Functions' },
    { partNumber: 5, partTitle: 'Series Solutions & Exam Techniques' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Complete Topic Review' },
  ]
}
