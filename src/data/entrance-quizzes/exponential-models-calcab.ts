/**
 * Entrance Quiz — Exponential Models — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Exponential Growth & Decay
  {
    id: 'em-ent-1a',
    question: 'A town\'s population satisfies $\\frac{dP}{dt} = kP$, with $t$ in years. It was $12{,}000$ at $t = 0$ and $18{,}000$ at $t = 5$. What is $k$?',
    options: ['$\\frac{1}{5}\\ln\\frac{2}{3}$', '$\\frac{\\ln 6000}{5}$', '$\\frac{1}{5}\\ln\\frac{3}{2}$', '$5\\ln\\frac{3}{2}$'],
    correctIndex: 2,
    explanation: '$18000 = 12000e^{5k}$ gives $e^{5k} = \\frac{3}{2}$, so $k = \\frac{1}{5}\\ln\\frac{3}{2}$. The ratio upside down gives a negative (decay) constant, $k$ depends on the growth factor rather than the $6000$ gained, and multiplying by $5$ instead of dividing misplaces the time.',
    partNumber: 1,
    partTitle: 'Exponential Growth & Decay',
  },
  {
    id: 'em-ent-1b',
    question: 'A quantity satisfies $\\frac{dy}{dt} = ky$ with $y(0) = 100$ and $y(4) = 150$. What is $y(12)$?',
    options: ['$337.5$', '$250$', '$450$', '$225$'],
    correctIndex: 0,
    explanation: 'Exponential growth multiplies by the same factor over equal times: $\\frac{150}{100} = 1.5$ every 4 units, so $y(12) = 100(1.5)^3 = 337.5$. Adding $50$ every 4 units is linear growth ($250$), and $225$ is the value at $t = 8$.',
    partNumber: 1,
    partTitle: 'Exponential Growth & Decay',
  },

  // Part 2 — Newton's Law of Cooling
  {
    id: 'em-ent-2a',
    question: 'Soup at $190^\\circ$F is set in a room at $70^\\circ$F and cools by Newton\'s Law of Cooling. After 15 minutes it is $130^\\circ$F. What is its temperature after 30 minutes?',
    options: ['$70$', '$65$', '$85$', '$100$'],
    correctIndex: 3,
    explanation: 'The gap above room temperature falls from $120$ to $60$ in 15 minutes, so it halves every 15 minutes; after 30 minutes the gap is $30$ and $T = 70 + 30 = 100$. Losing $60^\\circ$ every 15 minutes is linear cooling ($70$), and halving $130$ applies the decay to the temperature instead of the gap.',
    partNumber: 2,
    partTitle: 'Newton\'s Law of Cooling',
  },
  {
    id: 'em-ent-2b',
    question: 'A cold drink warms according to $T(t) = 25 - 20e^{-0.1t}$, with $T$ in degrees Celsius and $t$ in minutes. How fast is $T$ changing, in degrees per minute, at the moment when $T = 15$?',
    options: ['$1.5$', '$1$', '$-1$', '$-1.5$'],
    correctIndex: 1,
    explanation: 'This model satisfies $\\frac{dT}{dt} = 0.1(25 - T)$, so at $T = 15$ the rate is $0.1(10) = 1$ degree per minute, positive because the drink is warming. Using $0.1 \\cdot 15$ makes the rate proportional to the temperature rather than to the gap.',
    partNumber: 2,
    partTitle: 'Newton\'s Law of Cooling',
  },

  // Part 3 — Doubling Time & Half-Life
  {
    id: 'em-ent-3a',
    question: 'A radioactive substance satisfies $\\frac{dy}{dt} = ky$ and has a half-life of 8 years. At the moment 40 grams remain, what is $\\frac{dy}{dt}$ in grams per year?',
    options: ['$-5\\ln 2$', '$-\\frac{\\ln 2}{8}$', '$-320\\ln 2$', '$-40\\ln 2$'],
    correctIndex: 0,
    explanation: 'The half-life gives $k = -\\frac{\\ln 2}{8}$, and the differential equation gives the rate directly: $ky = -\\frac{\\ln 2}{8} \\cdot 40 = -5\\ln 2$. The value $-\\frac{\\ln 2}{8}$ is only $k$, and multiplying by the half-life instead of dividing gives $-320\\ln 2$.',
    partNumber: 3,
    partTitle: 'Doubling Time & Half-Life',
  },
  {
    id: 'em-ent-3b',
    question: 'A population modeled by $\\frac{dP}{dt} = kP$ triples every 6 years. What is its doubling time, in years?',
    options: ['$\\frac{6\\ln 3}{\\ln 2}$', '$3$', '$\\frac{6\\ln 2}{\\ln 3}$', '$\\frac{\\ln 2}{6\\ln 3}$'],
    correctIndex: 2,
    explanation: 'Tripling in 6 years gives $k = \\frac{\\ln 3}{6}$, so the doubling time is $\\frac{\\ln 2}{k} = \\frac{6\\ln 2}{\\ln 3} \\approx 3.79$ years. The value $3$ assumes linear growth, and the other two fractions invert part of the calculation.',
    partNumber: 3,
    partTitle: 'Doubling Time & Half-Life',
  },

  // Part 4 — Derivatives & Integrals of Exponentials
  {
    id: 'em-ent-4a',
    question: 'What is $\\int x\\cdot 3^{x^2}\\,dx$?',
    options: ['$\\frac{3^{x^2}\\ln 3}{2}+C$', '$\\frac{x\\cdot 3^{x^2}}{\\ln 3}+C$', '$\\frac{3^{x^2+1}}{2(x^2+1)}+C$', '$\\frac{3^{x^2}}{2\\ln 3}+C$'],
    correctIndex: 3,
    explanation: 'With $u = x^2$, $x\\,dx = \\frac{1}{2}du$, so the integral is $\\frac{1}{2}\\int 3^u\\,du = \\frac{3^u}{2\\ln 3} + C$. Multiplying by $\\ln 3$ uses the derivative rule, keeping the factor $x$ skips the substitution, and raising the power treats $3^{x^2}$ like a power of $x$.',
    partNumber: 4,
    partTitle: 'Derivatives & Integrals of Exponentials',
  },
  {
    id: 'em-ent-4b',
    question: 'What is $\\int_0^{\\ln 2} e^{3x}\\,dx$?',
    options: ['$7$', '$\\frac{7}{3}$', '$21$', '$\\frac{8}{3}$'],
    correctIndex: 1,
    explanation: 'An antiderivative is $\\frac{1}{3}e^{3x}$, so the integral is $\\frac{1}{3}\\left(e^{3\\ln 2} - e^0\\right) = \\frac{1}{3}(8 - 1) = \\frac{7}{3}$. Leaving out $\\frac{1}{3}$ gives $7$, multiplying by $3$ gives $21$, and dropping the lower limit gives $\\frac{8}{3}$.',
    partNumber: 4,
    partTitle: 'Derivatives & Integrals of Exponentials',
  },

  // Part 5 — Writing and Solving Rate Models
  {
    id: 'em-ent-5a',
    question: 'A positive quantity $Q$ decreases at a rate proportional to the cube of $Q$. With $k > 0$, which equation models $Q$?',
    options: ['$\\frac{dQ}{dt} = -kQ^3$', '$\\frac{dQ}{dt} = -\\frac{k}{Q^3}$', '$\\frac{dQ}{dt} = -k\\sqrt[3]{Q}$', '$\\frac{dQ}{dt} = -3kQ^2$'],
    correctIndex: 0,
    explanation: 'The rate of change is $\\frac{dQ}{dt}$, "proportional to the cube of $Q$" means $kQ^3$, and the minus sign makes it decrease. $\\frac{k}{Q^3}$ is inverse proportion, $\\sqrt[3]{Q}$ is the cube root, and $3kQ^2$ differentiates $Q^3$ instead of using it.',
    partNumber: 5,
    partTitle: 'Writing and Solving Rate Models',
  },
  {
    id: 'em-ent-5b',
    question: 'What is the solution of $\\frac{dy}{dt} = 3(10 - y)$ with $y(0) = 4$?',
    options: ['$y = 10-4e^{-3t}$', '$y = 4+6e^{-3t}$', '$y = 10-6e^{3t}$', '$y = 10-6e^{-3t}$'],
    correctIndex: 3,
    explanation: 'Separating gives $10 - y = Be^{-3t}$, and $y(0) = 4$ gives $B = 6$, so $y = 10 - 6e^{-3t}$, which rises toward $10$. Using $4$ as the coefficient confuses the start with the gap, $4 + 6e^{-3t}$ starts at $10$, and a positive exponent sends $y$ away from $10$.',
    partNumber: 5,
    partTitle: 'Writing and Solving Rate Models',
  },

  // Part 6 — Practice Workshop
  {
    id: 'em-ent-6a',
    question: 'A substance has a half-life of 10 years. How many years until 20% of the original amount remains?',
    options: ['$\\frac{10\\ln 0.2}{\\ln 2}$', '$\\frac{10\\ln 5}{\\ln 2}$', '$\\frac{10\\ln 1.25}{\\ln 2}$', '$\\frac{\\ln 5}{10\\ln 2}$'],
    correctIndex: 1,
    explanation: 'Solve $\\left(\\frac{1}{2}\\right)^{t/10} = 0.2$: $t = \\frac{10\\ln 0.2}{\\ln 0.5} = \\frac{10\\ln 5}{\\ln 2} \\approx 23.2$ years. Using $\\ln 0.2$ over $\\ln 2$ gives a negative time, $\\ln 1.25$ answers "80% remains", and the last option places the 10 in the denominator.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'em-ent-6b',
    question: 'Salt leaves a tank at a rate proportional to the amount $S$ present, with $t$ in minutes. At $t = 0$, $S = 50$ kg and $S$ is decreasing at 2 kg per minute. After how many minutes will 25 kg remain?',
    options: ['$12.5$', '$\\frac{\\ln 2}{25}$', '$25\\ln 2$', '$\\frac{25}{\\ln 2}$'],
    correctIndex: 2,
    explanation: 'From $\\frac{dS}{dt} = kS$, $-2 = k(50)$ gives $k = -0.04$, so the half-life is $\\frac{\\ln 2}{0.04} = 25\\ln 2 \\approx 17.3$ minutes. Losing a steady 2 kg per minute would take $12.5$ minutes, but the rate slows as $S$ shrinks.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'em-ent-7a',
    question: 'The mass of a substance is $W(t) = 400e^{-0.03t}$ grams, with $t$ in days, and $W\'(10) \\approx -8.9$. What does this mean?',
    options: [
      'Over the first 10 days, the mass fell by about 8.9 grams',
      'At day 10, about 8.9 grams of the substance remain',
      'The mass falls by about 8.9 percent per day after day 10',
      'At day 10, the mass is decreasing at about 8.9 grams per day',
    ],
    correctIndex: 3,
    explanation: 'A derivative is an instantaneous rate with units of grams per day, so at $t = 10$ the mass is shrinking at about 8.9 grams per day. It is not a total change over an interval, not an amount, and the percent rate is the constant 3% per day.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'em-ent-7b',
    question: 'A sample decays exponentially from 60 grams at $t = 0$ to 45 grams at $t = 3$ hours. At what time will 20 grams remain?',
    options: ['$\\frac{3\\ln 3}{\\ln(4/3)}$', '$8$', '$\\frac{\\ln 3}{\\ln(4/3)}$', '$\\frac{3\\ln 2}{\\ln(4/3)}$'],
    correctIndex: 0,
    explanation: 'The amount is multiplied by $\\frac{3}{4}$ every 3 hours, so solve $\\left(\\frac{3}{4}\\right)^{t/3} = \\frac{1}{3}$: $t = \\frac{3\\ln 3}{\\ln(4/3)} \\approx 11.5$ hours. A steady loss of 5 g per hour gives $8$, leaving out the 3 hours gives the middle fraction, and $\\ln 2$ in the numerator is the half-life.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Growth & Decay' },
    { partNumber: 2, partTitle: 'Newton\'s Law of Cooling' },
    { partNumber: 3, partTitle: 'Doubling Time & Half-Life' },
    { partNumber: 4, partTitle: 'Derivatives & Integrals of Exponentials' },
    { partNumber: 5, partTitle: 'Writing and Solving Rate Models' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
