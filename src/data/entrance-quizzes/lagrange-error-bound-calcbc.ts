/**
 * Entrance Quiz — Lagrange Error Bound — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Understanding the Remainder
  {
    id: 'leb-ent-1a',
    question: 'The third-degree Maclaurin polynomial for $\\cos x$ approximates $\\cos(0.2)$. Using the Lagrange error bound with $n = 3$, what is the bound?',
    options: ['$\\frac{(0.2)^3}{6}$', '$\\frac{(0.2)^4}{24}$', '$\\frac{(0.2)^4}{6}$', '$(0.2)^4$'],
    correctIndex: 1,
    explanation: 'Every derivative of $\\cos x$ is bounded by $1$, so $M = 1$ and $|R_3| \\le \\frac{(0.2)^{4}}{4!}$. The power and the factorial both use $n + 1 = 4$; the other options use $3$ in one place or drop the factorial.',
    partNumber: 1,
    partTitle: 'Understanding the Remainder',
  },
  {
    id: 'leb-ent-1b',
    question: 'The second-degree Maclaurin polynomial for $f(x) = \\frac{1}{1 + x}$ approximates $f(0.3)$, and $f\'\'\'(x) = -\\frac{6}{(1+x)^4}$. Which value of $M$ belongs in the Lagrange error bound?',
    options: ['$6$', '$\\frac{6}{(1.3)^4}$', '$24$', '$\\frac{1}{1.3}$'],
    correctIndex: 0,
    explanation: '$M$ is the largest value of $|f\'\'\'(t)| = \\frac{6}{(1+t)^4}$ for $0 \\le t \\le 0.3$, and that occurs at $t = 0$, giving $6$. Evaluating at $t = 0.3$ gives the smallest value, which is too small to be a bound.',
    partNumber: 1,
    partTitle: 'Understanding the Remainder',
  },

  // Part 2 — How Many Terms Do You Need?
  {
    id: 'leb-ent-2a',
    question: 'Maclaurin polynomials for $e^x$ approximate $e^{0.5}$, using $M = 2$. What is the smallest degree $n$ whose Lagrange bound $\\frac{2(0.5)^{n+1}}{(n+1)!}$ is less than $10^{-4}$?',
    options: ['$4$', '$6$', '$5$', '$3$'],
    correctIndex: 2,
    explanation: 'For $n = 4$ the bound is $\\frac{2(0.5)^5}{120} \\approx 5.2 \\times 10^{-4}$, which is too large; for $n = 5$ it is $\\frac{2(0.5)^6}{720} \\approx 4.3 \\times 10^{-5}$, which works. So $n = 5$.',
    partNumber: 2,
    partTitle: 'How Many Terms Do You Need?',
  },
  {
    id: 'leb-ent-2b',
    question: 'For $e^x$ centered at $0$ and evaluated at $x = 2$, the Lagrange bound $\\frac{e^2 \\cdot 2^{n+1}}{(n+1)!}$ shrinks toward $0$ as $n$ grows. Why?',
    options: [
      'The value $M = e^2$ shrinks as $n$ increases',
      'The terms of the series alternate in sign',
      'The power $2^{n+1}$ shrinks because $2 > 1$',
      'The factorial outgrows $2^{n+1}$',
    ],
    correctIndex: 3,
    explanation: 'Each step multiplies the bound by $\\frac{2}{n+2}$, which is less than $1$ once $n \\ge 1$, so the factorial in the denominator eventually dominates the growing power. $M$ stays fixed at $e^2$, the series does not alternate for $x > 0$, and $2^{n+1}$ grows.',
    partNumber: 2,
    partTitle: 'How Many Terms Do You Need?',
  },

  // Part 3 — Finding M for Different Functions
  {
    id: 'leb-ent-3a',
    question: 'The second-degree Taylor polynomial for $\\ln x$ about $x = 2$ approximates $\\ln(2.4)$. Since $f\'\'\'(t) = \\frac{2}{t^3}$, what is $M$?',
    options: ['$\\frac{1}{4}$', '$\\frac{2}{(2.4)^3}$', '$2$', '$\\frac{1}{2}$'],
    correctIndex: 0,
    explanation: 'On $[2, 2.4]$ the function $\\frac{2}{t^3}$ decreases, so its maximum is at $t = 2$: $\\frac{2}{8} = \\frac{1}{4}$. Evaluating at $2.4$ gives the minimum, and $2$ comes from using $t = 1$, which is outside the interval.',
    partNumber: 3,
    partTitle: 'Finding M for Different Functions',
  },
  {
    id: 'leb-ent-3b',
    question: 'The third-degree Maclaurin polynomial for $e^{-2x}$ approximates its value at $x = 1$. What is $M$ for the Lagrange error bound?',
    options: ['$16e^{-2}$', '$16$', '$e^{-2}$', '$8$'],
    correctIndex: 1,
    explanation: 'The fourth derivative is $16e^{-2t}$, which decreases on $[0, 1]$, so its maximum is $16$ at $t = 0$. Evaluating at $t = 1$ gives the minimum, and $8$ is the size of the third-derivative coefficient.',
    partNumber: 3,
    partTitle: 'Finding M for Different Functions',
  },

  // Part 4 — Choosing the Right Error Bound
  {
    id: 'leb-ent-4a',
    question: 'The approximation $\\cos(0.4) \\approx 1 - \\frac{(0.4)^2}{2}$ uses the second-degree Maclaurin polynomial. Comparing the alternating series bound with the Lagrange bound for $n = 2$ (using $M = 1$), which is true?',
    options: [
      'The Lagrange bound $\\frac{(0.4)^3}{6}$ is the smaller one',
      'Only the Lagrange bound applies here',
      'The AST bound $\\frac{(0.4)^4}{24}$ is the smaller one',
      'Both bounds equal $\\frac{(0.4)^3}{6}$',
    ],
    correctIndex: 2,
    explanation: 'The cosine series alternates, so the error is at most the first omitted term, $\\frac{(0.4)^4}{24}$, which is smaller than the Lagrange bound $\\frac{(0.4)^3}{3!}$ for $n = 2$. The Lagrange bound does not use the fact that the $x^3$ coefficient is $0$.',
    partNumber: 4,
    partTitle: 'Choosing the Right Error Bound',
  },
  {
    id: 'leb-ent-4b',
    question: 'The approximation $e^{-0.5} \\approx 1 - 0.5 + \\frac{(0.5)^2}{2}$ uses the second-degree Maclaurin polynomial. How do the alternating series bound and the Lagrange bound compare?',
    options: [
      'AST gives $\\frac{(0.5)^3}{6}$, but Lagrange needs $M = e^{0.5}$',
      'Only Lagrange applies, since $e^{-x}$ is not a polynomial',
      'Only the AST bound applies, since the series alternates',
      'They are equal, each $\\frac{(0.5)^3}{6}$',
    ],
    correctIndex: 3,
    explanation: 'The series alternates with shrinking terms, so the AST bound is the next term, $\\frac{(0.5)^3}{3!}$. For Lagrange, $|f\'\'\'(t)| = e^{-t}$ is largest at $t = 0$, so $M = 1$ and the bound is also $\\frac{(0.5)^3}{3!}$. Both bounds apply to this approximation.',
    partNumber: 4,
    partTitle: 'Choosing the Right Error Bound',
  },

  // Part 5 — Earning Full Credit
  {
    id: 'leb-ent-5a',
    question: 'A free-response part asks you to show an approximation is within $0.005$ of $f(1.2)$. You found $|R_3(1.2)| \\le 0.0031$. Which conclusion earns the point?',
    options: [
      'Since $0.0031 < 0.005$, the error is less than $0.005$',
      'The error is $0.0031$, so it is below $0.005$',
      'The error is approximately $0.005$',
      'Since $T_3$ converges, the error is small',
    ],
    correctIndex: 0,
    explanation: 'The Lagrange result is an upper bound, so the conclusion must compare the bound with the target. The error is not equal to $0.0031$, "approximately $0.005$" proves nothing, and convergence of a series says nothing about this polynomial.',
    partNumber: 5,
    partTitle: 'Earning Full Credit',
  },
  {
    id: 'leb-ent-5b',
    question: 'It is given that $|f^{(5)}(t)| \\le 40$ for $0 \\le t \\le 0.5$. What is the Lagrange error bound for the fourth-degree Maclaurin polynomial at $x = 0.5$?',
    options: ['$\\frac{5}{96}$', '$\\frac{1}{96}$', '$\\frac{5}{4}$', '$\\frac{1}{48}$'],
    correctIndex: 1,
    explanation: 'With $n = 4$, $|R_4| \\le \\frac{40(0.5)^5}{5!} = \\frac{40}{3840} = \\frac{1}{96}$. Dividing by $4!$ gives $\\frac{5}{96}$, dropping the factorial gives $\\frac{5}{4}$, and using $(0.5)^4$ gives $\\frac{1}{48}$.',
    partNumber: 5,
    partTitle: 'Earning Full Credit',
  },

  // Part 6 — Mixed Practice
  {
    id: 'leb-ent-6a',
    question: 'A Lagrange bound gives $|R_2(x)| \\le \\frac{12|x - 1|^3}{3!}$. For which values of $|x - 1|$ is this bound less than $0.016$?',
    options: ['$|x - 1| < 0.008$', '$|x - 1| < 0.11$', '$|x - 1| < 0.2$', '$|x - 1| < 0.4$'],
    correctIndex: 2,
    explanation: 'The bound is $2|x - 1|^3$, and $2|x - 1|^3 < 0.016$ means $|x - 1|^3 < 0.008$, so $|x - 1| < 0.2$. Stopping before the cube root gives $0.008$, and forgetting the $3!$ gives about $0.11$.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },
  {
    id: 'leb-ent-6b',
    question: 'The second-degree Maclaurin polynomial for $e^{3x}$ approximates its value at $x = -0.5$. What is $M$ for the Lagrange error bound?',
    options: ['$27e^{-1.5}$', '$e^{-1.5}$', '$9$', '$27$'],
    correctIndex: 3,
    explanation: 'The third derivative is $27e^{3t}$, which increases, so on $[-0.5, 0]$ its maximum is at $t = 0$: $M = 27$. Using $t = -0.5$ gives the minimum, and $9$ is the second-derivative coefficient.',
    partNumber: 6,
    partTitle: 'Mixed Practice',
  },

  // Part 7 — Lagrange Error Bound Mastery
  {
    id: 'leb-ent-7a',
    question: 'The third-degree Maclaurin polynomial for $\\cos(2x)$ approximates $\\cos(0.2)$, which is the value at $x = 0.1$. Using the Lagrange bound with $n = 3$, what is the bound?',
    options: [
      '$\\frac{16(0.1)^4}{24}$',
      '$\\frac{(0.1)^4}{24}$',
      '$\\frac{2(0.1)^4}{24}$',
      '$\\frac{8(0.1)^3}{6}$',
    ],
    correctIndex: 0,
    explanation: 'The fourth derivative of $\\cos(2x)$ is $16\\cos(2x)$, so $M = 16$, and $|R_3| \\le \\frac{16(0.1)^4}{4!}$. Using $M = 1$ ignores the chain-rule factors $2^4$, and the last option uses the third derivative and $3!$.',
    partNumber: 7,
    partTitle: 'Lagrange Error Bound Mastery',
  },
  {
    id: 'leb-ent-7b',
    question: 'For $e^x$ on $[0, 0.5]$, which value of $M$ gives a valid Lagrange error bound?',
    options: ['$M = 1.5$', '$M = e^{0.25}$', '$M = 2$', '$M = \\sqrt{e}/2$'],
    correctIndex: 2,
    explanation: 'Every derivative of $e^x$ is $e^x$, whose maximum on $[0, 0.5]$ is $e^{0.5} \\approx 1.65$; any $M$ at least that large works, so $M = 2$ is valid (if a little loose). The other values are all below $1.65$, so they could understate the error.',
    partNumber: 7,
    partTitle: 'Lagrange Error Bound Mastery',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding the Remainder' },
    { partNumber: 2, partTitle: 'How Many Terms Do You Need?' },
    { partNumber: 3, partTitle: 'Finding M for Different Functions' },
    { partNumber: 4, partTitle: 'Choosing the Right Error Bound' },
    { partNumber: 5, partTitle: 'Earning Full Credit' },
    { partNumber: 6, partTitle: 'Mixed Practice' },
    { partNumber: 7, partTitle: 'Lagrange Error Bound Mastery' },
  ]
}
