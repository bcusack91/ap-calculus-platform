/**
 * Entrance Quiz — Logistic Growth — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — The Logistic Differential Equation
  {
    id: 'lg-ent-1a',
    question: 'For $\\frac{dP}{dt} = 0.25P\\left(1 - \\frac{P}{1200}\\right)$, what is the maximum value of $\\frac{dP}{dt}$?',
    options: ['$75$', '$150$', '$300$', '$600$'],
    correctIndex: 0,
    explanation: 'The rate is largest when $P = \\frac{L}{2} = 600$, where $\\frac{dP}{dt} = 0.25(600)\\left(\\frac{1}{2}\\right) = \\frac{kL}{4} = 75$. The value $600$ is the population at that moment, not the rate, and $150$ and $300$ drop part of the factor $\\frac{1}{4}$.',
    partNumber: 1,
    partTitle: 'The Logistic Differential Equation',
  },
  {
    id: 'lg-ent-1b',
    question: 'A population satisfies $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$ with $k > 0$ and $P(0) = \\frac{L}{4}$. Which describes $P$ for $t \\ge 0$?',
    options: [
      'It increases toward $L$, growing fastest at $t = 0$',
      'It increases without bound, like exponential growth',
      'It increases toward $L$, growing fastest when $P = \\frac{L}{2}$',
      'It decreases toward $\\frac{L}{2}$, then levels off',
    ],
    correctIndex: 2,
    explanation: 'Below $L$ the rate is positive, so $P$ rises toward the carrying capacity, and the rate $kP\\left(1 - \\frac{P}{L}\\right)$ is largest at $P = \\frac{L}{2}$. At $t = 0$ the rate is only $\\frac{3kL}{16}$, smaller than the maximum $\\frac{kL}{4}$.',
    partNumber: 1,
    partTitle: 'The Logistic Differential Equation',
  },

  // Part 2 — The Solution
  {
    id: 'lg-ent-2a',
    question: 'What is the solution of $\\frac{dP}{dt} = 0.4P\\left(1 - \\frac{P}{300}\\right)$ with $P(0) = 60$?',
    options: [
      '$P = \\frac{300}{1+5e^{-0.4t}}$',
      '$P = \\frac{300}{1+4e^{-0.4t}}$',
      '$P = \\frac{300}{1+4e^{0.4t}}$',
      '$P = \\frac{60}{1+4e^{-0.4t}}$',
    ],
    correctIndex: 1,
    explanation: 'The solution is $\\frac{L}{1 + Ae^{-kt}}$ with $A = \\frac{L - P_0}{P_0} = \\frac{240}{60} = 4$. Using $A = \\frac{L}{P_0} = 5$ makes $P(0) = 50$, a positive exponent sends $P$ toward $0$, and the numerator must be the carrying capacity.',
    partNumber: 2,
    partTitle: 'The Solution',
  },
  {
    id: 'lg-ent-2b',
    question: 'Written in the form $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$, what are $k$ and $L$ for $\\frac{dP}{dt} = 1.2P - 0.004P^2$?',
    options: [
      '$k = 1.2$, $L = 250$',
      '$k = 0.004$, $L = 300$',
      '$k = 300$, $L = 1.2$',
      '$k = 1.2$, $L = 300$',
    ],
    correctIndex: 3,
    explanation: 'Factor out $1.2P$: $1.2P\\left(1 - \\frac{0.004}{1.2}P\\right) = 1.2P\\left(1 - \\frac{P}{300}\\right)$, so $k = 1.2$ and $L = \\frac{1.2}{0.004} = 300$. Using $\\frac{1}{0.004} = 250$ ignores the factor $1.2$.',
    partNumber: 2,
    partTitle: 'The Solution',
  },

  // Part 3 — Inflection Point
  {
    id: 'lg-ent-3a',
    question: 'At what time is $P(t) = \\frac{900}{1 + 8e^{-0.5t}}$ growing fastest?',
    options: ['$2\\ln 8$', '$16$', '$\\frac{\\ln 8}{2}$', '$\\ln 4$'],
    correctIndex: 0,
    explanation: 'Growth is fastest at $P = 450$, where $8e^{-0.5t} = 1$, so $t = \\frac{\\ln 8}{0.5} = 2\\ln 8 \\approx 4.16$. Dividing $8$ by $0.5$ forgets the logarithm, and $\\frac{\\ln 8}{2}$ multiplies by $k$ instead of dividing.',
    partNumber: 3,
    partTitle: 'Inflection Point',
  },
  {
    id: 'lg-ent-3b',
    question: 'For $\\frac{dP}{dt} = 0.1P\\left(1 - \\frac{P}{500}\\right)$ with $P(0) = 400$, which describes the graph of $P$ for $t > 0$?',
    options: [
      'Increasing, with an inflection point at $P = 250$',
      'Increasing and concave up for all $t > 0$',
      'Increasing and concave down for all $t > 0$',
      'Decreasing toward $250$ and concave up',
    ],
    correctIndex: 2,
    explanation: 'Since $250 < 400 < 500$, the rate is positive and $\\frac{d^2P}{dt^2} = k\\frac{dP}{dt}\\left(1 - \\frac{2P}{L}\\right) < 0$, so $P$ rises toward $500$ while concave down. It starts above $\\frac{L}{2}$, so it never passes through the inflection value $250$.',
    partNumber: 3,
    partTitle: 'Inflection Point',
  },

  // Part 4 — Analyzing Logistic Problems
  {
    id: 'lg-ent-4a',
    question: 'In a town of 2000 people, the number infected satisfies $\\frac{dI}{dt} = 0.0005I(2000 - I)$. What is the maximum rate of spread, in people per day?',
    options: ['$1000$', '$500$', '$2000$', '$0.25$'],
    correctIndex: 1,
    explanation: 'In standard form $k = 0.0005 \\cdot 2000 = 1$ and $L = 2000$, so the maximum rate is $\\frac{kL}{4} = 500$, reached when $I = 1000$. The value $1000$ is the number infected at that time, not the rate.',
    partNumber: 4,
    partTitle: 'Analyzing Logistic Problems',
  },
  {
    id: 'lg-ent-4b',
    question: 'A logistic population has carrying capacity $8000$. At $t = 0$ it is $2000$ and growing at $300$ per year. What is $k$?',
    options: ['$0.15$', '$0.0375$', '$0.5$', '$0.2$'],
    correctIndex: 3,
    explanation: 'Substitute into $\\frac{dP}{dt} = kP\\left(1 - \\frac{P}{L}\\right)$: $300 = k(2000)(0.75) = 1500k$, so $k = 0.2$. Dividing $300$ by $2000$ alone ignores the braking factor $0.75$, and dividing by $8000$ uses $L$ instead of $P$.',
    partNumber: 4,
    partTitle: 'Analyzing Logistic Problems',
  },

  // Part 5 — Common Question Patterns
  {
    id: 'lg-ent-5a',
    question: 'For $\\frac{dP}{dt} = P(9 - 0.03P)$, at what value of $P$ is $\\frac{d^2P}{dt^2} = 0$?',
    options: ['$150$', '$300$', '$4.5$', '$75$'],
    correctIndex: 0,
    explanation: 'Factoring gives $9P\\left(1 - \\frac{P}{300}\\right)$, so $L = \\frac{9}{0.03} = 300$, and the inflection is at $\\frac{L}{2} = 150$. The value $300$ is the carrying capacity, and $4.5$ halves the coefficient $9$.',
    partNumber: 5,
    partTitle: 'Common Question Patterns',
  },
  {
    id: 'lg-ent-5b',
    question: 'A population is modeled by $P(t) = \\frac{720}{1 + 5e^{-0.2t}}$. How fast is it growing at $t = 0$?',
    options: ['$24$', '$36$', '$20$', '$100$'],
    correctIndex: 2,
    explanation: 'Here $L = 720$, $k = 0.2$, and $P(0) = \\frac{720}{6} = 120$, so $\\frac{dP}{dt} = 0.2(120)\\left(1 - \\frac{120}{720}\\right) = 24 \\cdot \\frac{5}{6} = 20$. The value $24$ leaves out the braking factor, and $36 = \\frac{kL}{4}$ is the maximum rate, reached later.',
    partNumber: 5,
    partTitle: 'Common Question Patterns',
  },

  // Part 6 — Practice Workshop
  {
    id: 'lg-ent-6a',
    question: 'For $\\frac{dP}{dt} = 0.5P\\left(1 - \\frac{P}{200}\\right)$ with $P(0) = 40$, what do two Euler steps of size $1$ give for $P(2)$?',
    options: ['$72$', '$76.16$', '$56$', '$90$'],
    correctIndex: 1,
    explanation: 'Step 1: rate $0.5(40)(0.8) = 16$, so $P(1) = 56$. Step 2: rate $0.5(56)(0.72) = 20.16$, so $P(2) = 76.16$. Reusing the first rate gives $72$, and leaving out the braking factor gives $90$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'lg-ent-6b',
    question: 'A logistic population has $L = 1000$, $P(0) = 100$, and $P(3) = 250$. What is $k$?',
    options: ['$\\frac{\\ln 9}{3}$', '$3\\ln 3$', '$\\frac{1}{3}$', '$\\frac{\\ln 3}{3}$'],
    correctIndex: 3,
    explanation: 'Here $A = \\frac{900}{100} = 9$, and $250 = \\frac{1000}{1 + 9e^{-3k}}$ gives $9e^{-3k} = 3$, so $e^{-3k} = \\frac{1}{3}$ and $k = \\frac{\\ln 3}{3}$. Stopping at $e^{-3k} = \\frac{1}{9}$ gives $\\frac{\\ln 9}{3}$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'lg-ent-7a',
    question: 'For which populations does the logistic rate $kP\\left(1 - \\frac{P}{L}\\right)$ stay within $10\\%$ of the exponential rate $kP$?',
    options: ['$P < 0.1L$', '$P < 0.9L$', '$P > 0.9L$', '$P = 0.5L$'],
    correctIndex: 0,
    explanation: 'The ratio of the two rates is $1 - \\frac{P}{L}$, which is above $0.9$ exactly when $P < 0.1L$. So the logistic model behaves like exponential growth only while the population is small compared with $L$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'lg-ent-7b',
    question: 'For $\\frac{dP}{dt} = 0.3P\\left(1 - \\frac{P}{400}\\right)$ with $P(0) = 600$, which describes $P$ for $t > 0$?',
    options: [
      'Decreasing and concave down, approaching $400$',
      'Decreasing and concave up, approaching $L/2 = 200$',
      'Decreasing and concave up, approaching $400$',
      'Increasing and concave down, approaching $600$',
    ],
    correctIndex: 2,
    explanation: 'Above $L$ the rate is negative, so $P$ decreases toward $400$. Also $\\frac{d^2P}{dt^2} = k\\frac{dP}{dt}\\left(1 - \\frac{2P}{L}\\right)$ is a product of two negatives, so the graph is concave up. It cannot cross the equilibrium $400$ to reach $200$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'The Logistic Differential Equation' },
    { partNumber: 2, partTitle: 'The Solution' },
    { partNumber: 3, partTitle: 'Inflection Point' },
    { partNumber: 4, partTitle: 'Analyzing Logistic Problems' },
    { partNumber: 5, partTitle: 'Common Question Patterns' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
