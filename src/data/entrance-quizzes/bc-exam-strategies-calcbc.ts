/**
 * Entrance Quiz — AP Calculus BC Exam Strategies — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 * Exam-format facts follow the May 2027 format (42 MC: 29 no-calculator + 13 calculator; 6 FRQ).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Exam Format, Scoring, and the AB Subscore
  {
    id: 'bes-ent-1a',
    question: 'How is the multiple-choice section of the May 2027 AP Calculus BC exam divided?',
    options: [
      'Part A has 29 questions without a calculator, Part B has 13 with one',
      'Part A has 30 questions without a calculator, Part B has 15 with one',
      'Part A has 13 questions without a calculator, Part B has 29 with one',
      'Part A has 28 questions without a calculator, Part B has 17 with one',
    ],
    correctIndex: 0,
    explanation: 'The 2027 multiple-choice section has 42 questions: 29 in Part A (62 minutes, no calculator) and 13 in Part B (38 minutes, graphing calculator). The 30 and 15 split was the format used before 2027.',
    partNumber: 1,
    partTitle: 'Exam Format, Scoring, and the AB Subscore',
  },
  {
    id: 'bes-ent-1b',
    question: 'On five multiple-choice questions you have eliminated two of the four choices but cannot decide between the remaining two. What should you do, and what is the expected gain?',
    options: [
      'Leave all five blank to avoid losing points',
      'Guess on all five, expecting about $1.25$ points',
      'Guess on all five, expecting about $2.5$ points',
      'Guess only on questions with three choices left',
    ],
    correctIndex: 2,
    explanation: 'There is no penalty for a wrong answer, so every guess helps. With two choices left, each guess has a $\\frac{1}{2}$ chance, so five guesses are worth about $2.5$ points; $1.25$ would be the expectation with all four choices still open.',
    partNumber: 1,
    partTitle: 'Exam Format, Scoring, and the AB Subscore',
  },

  // Part 2 — Techniques for the 42 MC Questions
  {
    id: 'bes-ent-2a',
    question: 'The value of $\\int_0^1 e^{x^2}\\,dx$ is one of $0.86$, $1.46$, $2.10$, $2.72$. Using $1 \\le e^{x^2} \\le e^x$ on $[0, 1]$, which must it be?',
    options: ['$0.86$', '$1.46$', '$2.10$', '$2.72$'],
    correctIndex: 1,
    explanation: 'The bounds give $1 \\le \\int_0^1 e^{x^2}\\,dx \\le \\int_0^1 e^x\\,dx = e - 1 \\approx 1.72$. Only $1.46$ lies in that range, so the other choices are eliminated without integrating.',
    partNumber: 2,
    partTitle: 'Techniques for the 42 MC Questions',
  },
  {
    id: 'bes-ent-2b',
    question: 'On the calculator-active multiple-choice part, which task is the calculator actually needed for?',
    options: [
      'Finding $f\'(x)$ for $f(x) = x^3\\sin x$',
      'Simplifying $\\frac{x^2 - 9}{x - 3}$ before taking a limit',
      'Choosing which expression equals $\\int 2x\\,dx$',
      'Finding where $e^{-x} = \\cos x$ on $[1, 2]$',
    ],
    correctIndex: 3,
    explanation: 'The equation $e^{-x} = \\cos x$ has no algebraic solution, so the graphing calculator\'s intersect or solve feature is the right tool. The product rule, factoring, and recognizing an antiderivative are faster by hand.',
    partNumber: 2,
    partTitle: 'Techniques for the 42 MC Questions',
  },

  // Part 3 — Maximizing Points on FRQs
  {
    id: 'bes-ent-3a',
    question: 'A calculator-active answer is $2.71828\\ldots$. Which reported value earns the answer point?',
    options: ['$2.718$', '$2.72$', '$2.7$', '$2.719$'],
    correctIndex: 0,
    explanation: 'Decimal answers must be correct to three places after the decimal point, so $2.718$ earns the point. $2.72$ and $2.7$ are not accurate to three places, and $2.719$ is rounded incorrectly.',
    partNumber: 3,
    partTitle: 'Maximizing Points on FRQs',
  },
  {
    id: 'bes-ent-3b',
    question: 'A free-response part asks for the distance a particle travels on $0 \\le t \\le 3$, and a calculator is allowed. Which written work earns the setup point?',
    options: [
      'Writing fnInt(v(t), t, 0, 3) and the result',
      'Writing only the decimal value of the distance',
      'Writing $\\int_0^3 |v(t)|\\,dt$ with the integrand shown, then the value',
      'Writing $\\int |v(t)|\\,dt$ with no limits, then the value',
    ],
    correctIndex: 2,
    explanation: 'The setup point needs a definite integral in standard notation with the correct integrand and limits; the value can then come from the calculator. Calculator syntax is not accepted, a bare number earns no setup credit, and an integral without limits is incomplete.',
    partNumber: 3,
    partTitle: 'Maximizing Points on FRQs',
  },

  // Part 4 — Avoiding Costly Errors Under Pressure
  {
    id: 'bes-ent-4a',
    question: 'A power series centered at $x = 1$ has radius of convergence $3$. Before writing its interval of convergence, what must still be done?',
    options: [
      'Recompute $R$ as its reciprocal, $\\frac{1}{3}$',
      'Test the endpoints $x = -2$ and $x = 4$ separately',
      'Nothing, the interval is always $(-2, 4)$',
      'Test convergence at the center $x = 1$',
    ],
    correctIndex: 1,
    explanation: 'The ratio test gives the open interval but says nothing at $|x - 1| = 3$, so each endpoint must be tested on its own before writing brackets or parentheses. A series always converges at its center.',
    partNumber: 4,
    partTitle: 'Avoiding Costly Errors Under Pressure',
  },
  {
    id: 'bes-ent-4b',
    question: 'A particle moving in the plane has velocity vector $\\langle -3, 4 \\rangle$ at time $t = 2$. What is its speed then?',
    options: ['$-5$', '$\\sqrt{7}$', '$25$', '$5$'],
    correctIndex: 3,
    explanation: 'Speed is the length of the velocity vector, $\\sqrt{(-3)^2 + 4^2} = 5$, and it is never negative. A sign slip under the root gives $\\sqrt{7}$, and $25$ forgets the square root.',
    partNumber: 4,
    partTitle: 'Avoiding Costly Errors Under Pressure',
  },

  // Part 5 — Targeted Strategies for BC-Only Content
  {
    id: 'bes-ent-5a',
    question: 'On a no-calculator question you must approximate $\\int_0^{0.5} x^2 e^{-x^2}\\,dx$ with error less than $0.001$. Which approach works?',
    options: [
      'Integrate the Maclaurin series term by term and bound the error with the alternating series bound',
      'Integrate by parts twice to get an exact antiderivative',
      'Use a left Riemann sum with two subintervals',
      'Bound the error of a single tangent line at $x = 0$',
    ],
    correctIndex: 0,
    explanation: 'The integrand has no elementary antiderivative, but its series $x^2 - x^4 + \\frac{x^6}{2} - \\cdots$ integrates term by term to an alternating series whose error is at most the first omitted term. A two-rectangle Riemann sum has no guaranteed accuracy.',
    partNumber: 5,
    partTitle: 'Targeted Strategies for BC-Only Content',
  },
  {
    id: 'bes-ent-5b',
    question: 'Which task is paired with the correct formula?',
    options: [
      'Polar slope: $\\frac{dr}{d\\theta}$ evaluated at $\\theta$',
      'Polar area: $\\int_{\\alpha}^{\\beta} r^2\\,d\\theta$ with no factor',
      'Polar slope: $\\frac{dy/d\\theta}{dx/d\\theta}$',
      'Parametric speed: $\\frac{dy/dt}{dx/dt}$ at $t$',
    ],
    correctIndex: 2,
    explanation: 'The slope of a polar curve comes from treating $x = r\\cos\\theta$ and $y = r\\sin\\theta$ as parametric in $\\theta$. $\\frac{dr}{d\\theta}$ is the rate of change of $r$, polar area needs the factor $\\frac{1}{2}$, and $\\frac{dy/dt}{dx/dt}$ is a slope, not a speed.',
    partNumber: 5,
    partTitle: 'Targeted Strategies for BC-Only Content',
  },

  // Part 6 — Timed Mixed-Topic Practice
  {
    id: 'bes-ent-6a',
    question: 'A curve is given by $x = 2t$ and $y = t^4$. What is $\\frac{d^2y}{dx^2}$ when $t = 1$?',
    options: ['$6$', '$3$', '$12$', '$\\frac{3}{2}$'],
    correctIndex: 1,
    explanation: 'First $\\frac{dy}{dx} = \\frac{4t^3}{2} = 2t^3$; its $t$-derivative $6t^2$ must then be divided by $\\frac{dx}{dt} = 2$, giving $3t^2 = 3$ at $t = 1$. Skipping that division gives $6$, and $12$ is just $\\frac{d^2y}{dt^2}$.',
    partNumber: 6,
    partTitle: 'Timed Mixed-Topic Practice',
  },
  {
    id: 'bes-ent-6b',
    question: 'What is the interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x + 1)^n}{n^2}$?',
    options: ['$(-2, 0)$', '$[-2, 0)$', '$(-2, 0]$', '$[-2, 0]$'],
    correctIndex: 3,
    explanation: 'The radius is $1$ about $x = -1$. At $x = 0$ the series is $\\sum \\frac{1}{n^2}$ and at $x = -2$ it is $\\sum \\frac{(-1)^n}{n^2}$; both converge, so both endpoints are included.',
    partNumber: 6,
    partTitle: 'Timed Mixed-Topic Practice',
  },

  // Part 7 — What to Do in the Last Week
  {
    id: 'bes-ent-7a',
    question: 'Three days before the exam, a student does well on derivative questions but misses most series free-response parts. What is the best use of the remaining time?',
    options: [
      'Work timed Taylor polynomial and convergence problems from past exams',
      'Redo derivative drills, since those questions are the most common',
      'Learn the root test and surface area of revolution',
      'Take three full practice exams back to back',
    ],
    correctIndex: 0,
    explanation: 'Series appears in a free-response question on nearly every BC exam, so fixing the weakest high-frequency topic gains the most points. The root test and surface area are not tested, and back-to-back full exams leave no time to fix the weakness.',
    partNumber: 7,
    partTitle: 'What to Do in the Last Week',
  },
  {
    id: 'bes-ent-7b',
    question: 'What is the best plan for the night before the exam?',
    options: [
      'A final pass through BC topics you have not yet mastered',
      'A timed full-length practice exam to keep pacing fresh',
      'A short review of key formulas, then eight hours of sleep',
      'Redoing every past free-response question in one sitting',
    ],
    correctIndex: 2,
    explanation: 'The night before is for a short review of formulas such as polar area and the Lagrange bound, followed by rest. New material and a late full-length exam add fatigue without much gain.',
    partNumber: 7,
    partTitle: 'What to Do in the Last Week',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exam Format, Scoring, and the AB Subscore' },
    { partNumber: 2, partTitle: 'Techniques for the 42 MC Questions' },
    { partNumber: 3, partTitle: 'Maximizing Points on FRQs' },
    { partNumber: 4, partTitle: 'Avoiding Costly Errors Under Pressure' },
    { partNumber: 5, partTitle: 'Targeted Strategies for BC-Only Content' },
    { partNumber: 6, partTitle: 'Timed Mixed-Topic Practice' },
    { partNumber: 7, partTitle: 'What to Do in the Last Week' },
  ]
}
