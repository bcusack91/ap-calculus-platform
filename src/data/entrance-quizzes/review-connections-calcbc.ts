/**
 * Entrance Quiz — AP Calculus BC Review and Connections — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Big Three of Calculus BC
  {
    id: 'rc-ent-1a',
    question: 'Suppose $f(x) = \\sum_{n=0}^{\\infty} c_n (x - 2)^n$ and $f\'\'\'(2) = 18$. What is $c_3$?',
    options: ['$3$', '$6$', '$18$', '$108$'],
    correctIndex: 0,
    explanation: 'The coefficient of $(x - 2)^3$ is $\\frac{f\'\'\'(2)}{3!} = \\frac{18}{6} = 3$. Dividing by $3$ instead of $3!$ gives $6$, and multiplying by $3!$ gives $108$.',
    partNumber: 1,
    partTitle: 'The Big Three of Calculus BC',
  },
  {
    id: 'rc-ent-1b',
    question: 'Let $h(x) = \\int_0^x \\frac{\\sin t}{t}\\,dt$. What are the first two nonzero terms of the Maclaurin series for $h$?',
    options: [
      '$x - \\frac{x^3}{6}$',
      '$1 - \\frac{x^2}{6}$',
      '$x + \\frac{x^3}{18}$',
      '$x - \\frac{x^3}{18}$',
    ],
    correctIndex: 3,
    explanation: 'Dividing the sine series by $t$ gives $1 - \\frac{t^2}{6} + \\cdots$, and integrating from $0$ to $x$ gives $x - \\frac{x^3}{18} + \\cdots$. The integrand series itself is $1 - \\frac{x^2}{6}$, and $x - \\frac{x^3}{6}$ is the sine series, not its integral.',
    partNumber: 1,
    partTitle: 'The Big Three of Calculus BC',
  },

  // Part 2 — Three Coordinate Systems, One Framework
  {
    id: 'rc-ent-2a',
    question: 'Which parametric equations trace the polar curve $r = 1 + \\cos\\theta$?',
    options: [
      '$x = \\cos\\theta$, $y = 1 + \\sin\\theta$',
      '$x = \\cos\\theta + \\cos^2\\theta$, $y = \\sin\\theta + \\sin\\theta\\cos\\theta$',
      '$x = 1 + \\cos\\theta$, $y = \\theta$',
      '$x = \\theta\\cos\\theta$, $y = \\theta\\sin\\theta$',
    ],
    correctIndex: 1,
    explanation: 'Any polar curve becomes parametric in $\\theta$ through $x = r\\cos\\theta$ and $y = r\\sin\\theta$ with $r = 1 + \\cos\\theta$. Using $\\theta$ in place of $r$ traces a spiral, and the other choices are not built from $x = r\\cos\\theta$ at all.',
    partNumber: 2,
    partTitle: 'Three Coordinate Systems, One Framework',
  },
  {
    id: 'rc-ent-2b',
    question: 'A particle moves along $x = 3\\cos t$, $y = 3\\sin t$. What is its velocity vector at $t = \\frac{\\pi}{2}$?',
    options: [
      '$\\langle 0, 3 \\rangle$',
      '$\\langle 3, 0 \\rangle$',
      '$\\langle -3, 0 \\rangle$',
      '$\\langle 0, -3 \\rangle$',
    ],
    correctIndex: 2,
    explanation: 'The velocity is $\\langle -3\\sin t, 3\\cos t \\rangle$, which equals $\\langle -3, 0 \\rangle$ at $t = \\frac{\\pi}{2}$. $\\langle 0, 3 \\rangle$ is the position there, and $\\langle 0, -3 \\rangle$ is the acceleration.',
    partNumber: 2,
    partTitle: 'Three Coordinate Systems, One Framework',
  },

  // Part 3 — How DEs Connect to Everything
  {
    id: 'rc-ent-3a',
    question: 'The solution of $\\frac{dy}{dx} = 2y$ with $y(0) = 3$ has a Maclaurin series that begins how?',
    options: [
      '$3 + 6x + 6x^2 + \\cdots$',
      '$3 + 6x + 12x^2 + \\cdots$',
      '$3 + 2x + 2x^2 + \\cdots$',
      '$1 + 2x + 2x^2 + \\cdots$',
    ],
    correctIndex: 0,
    explanation: 'From the equation, $y\'(0) = 2 \\cdot 3 = 6$ and $y\'\'(0) = 2y\'(0) = 12$, so the $x^2$ coefficient is $\\frac{12}{2!} = 6$; this matches $3e^{2x}$. Leaving out the $2!$ gives $12x^2$, and $1 + 2x + 2x^2$ ignores the initial value.',
    partNumber: 3,
    partTitle: 'How DEs Connect to Everything',
  },
  {
    id: 'rc-ent-3b',
    question: 'Which function solves $\\frac{dy}{dx} = \\cos(x^2)$ with $y(1) = 4$?',
    options: [
      '$y = 4 + \\int_0^x \\cos(t^2)\\,dt$',
      '$y = 4\\int_1^x \\cos(t^2)\\,dt$',
      '$y = 4 + \\sin(x^2) - \\sin 1$',
      '$y = 4 + \\int_1^x \\cos(t^2)\\,dt$',
    ],
    correctIndex: 3,
    explanation: 'By the FTC, $4 + \\int_1^x \\cos(t^2)\\,dt$ has derivative $\\cos(x^2)$ and equals $4$ at $x = 1$. A lower limit of $0$ misses the initial condition, $4\\int_1^x$ gives $0$ at $x = 1$, and $\\sin(x^2)$ has derivative $2x\\cos(x^2)$.',
    partNumber: 3,
    partTitle: 'How DEs Connect to Everything',
  },

  // Part 4 — How All the Series Tests Fit Together
  {
    id: 'rc-ent-4a',
    question: 'Which approach shows that $\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 5}$ converges?',
    options: [
      'Ratio test with limit $L < 1$',
      'Direct comparison with $\\sum \\frac{1}{n^2}$',
      'Divergence test with $a_n \\to 0$',
      'Comparison with the harmonic series',
    ],
    correctIndex: 1,
    explanation: 'Each term is smaller than $\\frac{1}{n^2}$, and $\\sum \\frac{1}{n^2}$ is a convergent $p$-series. The ratio test gives $L = 1$, $a_n \\to 0$ alone proves nothing, and being smaller than a divergent series is inconclusive.',
    partNumber: 4,
    partTitle: 'How All the Series Tests Fit Together',
  },
  {
    id: 'rc-ent-4b',
    question: 'How should $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{\\sqrt{n}}$ be classified?',
    options: [
      'Converges absolutely by comparison',
      'Diverges by the nth-term test',
      'Converges conditionally',
      'Diverges as a $p$-series with $p = \\frac{1}{2}$',
    ],
    correctIndex: 2,
    explanation: 'The terms $\\frac{1}{\\sqrt{n}}$ decrease to $0$, so the alternating series converges, but $\\sum \\frac{1}{\\sqrt{n}}$ is a divergent $p$-series. Convergence that depends on the alternating signs is conditional.',
    partNumber: 4,
    partTitle: 'How All the Series Tests Fit Together',
  },

  // Part 5 — Choosing the Right Method
  {
    id: 'rc-ent-5a',
    question: 'Which method is most efficient for $\\int x^2 e^{x^3}\\,dx$?',
    options: [
      'Integration by parts with $u = x^2$ and $dv = e^{x^3}\\,dx$',
      'Tabular integration, differentiating $x^2$ down to zero',
      'Substituting $w = x^3$ to get $\\frac{1}{3}\\int e^{w}\\,dw$ directly',
      'Writing the Maclaurin series for $e^{x^3}$ and integrating it',
    ],
    correctIndex: 2,
    explanation: 'The factor $x^2$ is a constant multiple of the derivative of the inner function $x^3$, so $u = x^3$ gives $\\frac{1}{3}e^{x^3} + C$ at once. Parts and the tabular method both need an antiderivative of $e^{x^3}$, which has no elementary form, and a series gives only an infinite sum.',
    partNumber: 5,
    partTitle: 'Choosing the Right Method',
  },
  {
    id: 'rc-ent-5b',
    question: 'What is $\\int \\frac{dx}{x^2 - 4x + 5}$?',
    options: [
      '$\\arcsin(x - 2) + C$',
      '$\\ln|x^2 - 4x + 5| + C$',
      '$\\frac{1}{2}\\arctan\\frac{x - 2}{2} + C$',
      '$\\arctan(x - 2) + C$',
    ],
    correctIndex: 3,
    explanation: 'The denominator does not factor, so complete the square: $(x - 2)^2 + 1$, which gives $\\arctan(x - 2) + C$. The logarithm would need $2x - 4$ in the numerator, and the factor $\\frac{1}{2}$ belongs to $(x - 2)^2 + 4$.',
    partNumber: 5,
    partTitle: 'Choosing the Right Method',
  },

  // Part 6 — Cross-Topic Problem Solving
  {
    id: 'rc-ent-6a',
    question: 'A function $f$ has $f(0) = 0$, $f\'(0) = 2$, and $f\'\'(0) = -4$. Using its second-degree Taylor polynomial about $x = 0$, what is the estimate of $\\int_0^1 f(x)\\,dx$?',
    options: ['$0$', '$-\\frac{1}{3}$', '$1$', '$\\frac{1}{3}$'],
    correctIndex: 3,
    explanation: 'The polynomial is $2x - \\frac{4}{2!}x^2 = 2x - 2x^2$, and $\\int_0^1 (2x - 2x^2)\\,dx = 1 - \\frac{2}{3} = \\frac{1}{3}$. Forgetting the $2!$ gives $-\\frac{1}{3}$, and $0$ is the polynomial evaluated at $x = 1$ rather than integrated.',
    partNumber: 6,
    partTitle: 'Cross-Topic Problem Solving',
  },
  {
    id: 'rc-ent-6b',
    question: 'If $\\frac{dy}{dx} = xy^2$ and $y(0) = 1$, what is $y(1)$?',
    options: ['$\\frac{2}{3}$', '$2$', '$e^{1/2}$', '$\\frac{1}{2}$'],
    correctIndex: 1,
    explanation: 'Separating gives $-\\frac{1}{y} = \\frac{x^2}{2} - 1$, so $y = \\frac{2}{2 - x^2}$ and $y(1) = 2$. A sign slip gives $\\frac{2}{3}$, and $e^{1/2}$ solves $\\frac{dy}{dx} = xy$ instead.',
    partNumber: 6,
    partTitle: 'Cross-Topic Problem Solving',
  },

  // Part 7 — The Complete BC Picture
  {
    id: 'rc-ent-7a',
    question: 'How can the Maclaurin series for $\\ln(1 + x)$ be built from the series for $\\frac{1}{1 - x}$?',
    options: [
      'Replace $x$ by $-x$, then integrate term by term',
      'Replace $x$ by $-x$, then differentiate term by term',
      'Square the geometric series term by term',
      'Replace $x$ by $x^2$, then integrate term by term',
    ],
    correctIndex: 0,
    explanation: 'Replacing $x$ by $-x$ gives the series for $\\frac{1}{1 + x}$, and integrating from $0$ to $x$ gives $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$. Differentiating would give the series for $-\\frac{1}{(1 + x)^2}$.',
    partNumber: 7,
    partTitle: 'The Complete BC Picture',
  },
  {
    id: 'rc-ent-7b',
    question: 'For which estimate is the alternating series error bound the right tool?',
    options: [
      'Estimating $e^{0.2}$ by its first three Maclaurin terms',
      'Estimating $\\sin(0.2)$ by its first two Maclaurin terms',
      'Estimating $y(0.2)$ from $y(0) = 1$ with one Euler step',
      'Estimating $\\int_0^{0.2} e^{x}\\,dx$ with one trapezoid',
    ],
    correctIndex: 1,
    explanation: 'With $x = 0.2$ the sine series has alternating terms that decrease to $0$, so the error of $0.2 - \\frac{(0.2)^3}{6}$ is at most the next term, $\\frac{(0.2)^5}{120}$. The series for $e^{0.2}$ has all positive terms and needs the Lagrange bound, and Euler steps and trapezoids are not series.',
    partNumber: 7,
    partTitle: 'The Complete BC Picture',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Big Three of Calculus BC' },
    { partNumber: 2, partTitle: 'Three Coordinate Systems, One Framework' },
    { partNumber: 3, partTitle: 'How DEs Connect to Everything' },
    { partNumber: 4, partTitle: 'How All the Series Tests Fit Together' },
    { partNumber: 5, partTitle: 'Choosing the Right Method' },
    { partNumber: 6, partTitle: 'Cross-Topic Problem Solving' },
    { partNumber: 7, partTitle: 'The Complete BC Picture' },
  ]
}
