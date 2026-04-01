/**
 * Entrance Quiz — Exponential Models (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Exponential Growth Model
  {
    id: 'em-ent-1a',
    question: 'The exponential growth model is $y =$',
    options: ['$y_0 + kt$', '$y_0 e^{kt}$ where $k > 0$', '$y_0 e^{-kt}$', '$y_0 \\cdot t^k$'],
    correctIndex: 1,
    explanation: '$y = y_0 e^{kt}$ with $k > 0$ gives exponential growth.',
    partNumber: 1,
    partTitle: 'Exponential Growth Model',
  },
  {
    id: 'em-ent-1b',
    question: 'In $y = y_0 e^{kt}$, the constant $y_0$ represents:',
    options: ['The growth rate', 'The initial value', 'The time', 'The decay constant'],
    correctIndex: 1,
    explanation: '$y_0 = y(0)$ is the initial amount.',
    partNumber: 1,
    partTitle: 'Exponential Growth Model',
  },
  // Part 2: Exponential Decay Model
  {
    id: 'em-ent-2a',
    question: 'Exponential decay has $k$ that is:',
    options: ['Positive', 'Negative', 'Zero', 'Undefined'],
    correctIndex: 1,
    explanation: 'Decay means $k < 0$ in $y = y_0 e^{kt}$.',
    partNumber: 2,
    partTitle: 'Exponential Decay Model',
  },
  {
    id: 'em-ent-2b',
    question: 'Half-life is the time for a quantity to:',
    options: ['Double', 'Reduce to half', 'Reach zero', 'Triple'],
    correctIndex: 1,
    explanation: 'Half-life: $y = \\frac{y_0}{2}$.',
    partNumber: 2,
    partTitle: 'Exponential Decay Model',
  },
  // Part 3: Solving Growth/Decay Problems
  {
    id: 'em-ent-3a',
    question: 'If a population doubles every 5 years and $P_0 = 100$, find $k$:',
    options: ['$k = \\frac{\\ln 2}{5}$', '$k = \\frac{2}{5}$', '$k = 5\\ln 2$', '$k = \\frac{1}{5}$'],
    correctIndex: 0,
    explanation: '$200 = 100e^{5k}$. $e^{5k} = 2$. $k = \\frac{\\ln 2}{5}$.',
    partNumber: 3,
    partTitle: 'Solving Growth/Decay Problems',
  },
  {
    id: 'em-ent-3b',
    question: 'A substance has half-life 10 years. After 30 years, the fraction remaining is:',
    options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{1}{16}$'],
    correctIndex: 2,
    explanation: '30 years = 3 half-lives. $(\\frac{1}{2})^3 = \\frac{1}{8}$.',
    partNumber: 3,
    partTitle: 'Solving Growth/Decay Problems',
  },
  // Part 4: Continuous Compounding
  {
    id: 'em-ent-4a',
    question: 'Continuous compounding uses the formula $A =$',
    options: ['$P(1+r)^t$', '$Pe^{rt}$', '$P + rt$', '$P(1+\\frac{r}{n})^{nt}$'],
    correctIndex: 1,
    explanation: 'As $n \\to \\infty$: $A = Pe^{rt}$.',
    partNumber: 4,
    partTitle: 'Continuous Compounding',
  },
  {
    id: 'em-ent-4b',
    question: '$1000 at 5% compounded continuously for 10 years gives:',
    options: ['$\\$1000e^{0.5}$', '$\\$1500$', '$\\$1000e^{50}$', '$\\$1000(1.05)^{10}$'],
    correctIndex: 0,
    explanation: '$A = 1000e^{(0.05)(10)} = 1000e^{0.5}$.',
    partNumber: 4,
    partTitle: 'Continuous Compounding',
  },
  // Part 5: Newton's Law of Cooling
  {
    id: 'em-ent-5a',
    question: 'Newton\'s Law of Cooling: $\\frac{dT}{dt} =$',
    options: ['$k(T - T_s)$ where $T_s$ is ambient temp', '$kT$', '$-kT^2$', '$T - t$'],
    correctIndex: 0,
    explanation: 'Rate of temp change is proportional to difference from surrounding temp.',
    partNumber: 5,
    partTitle: 'Newton\'s Law of Cooling',
  },
  {
    id: 'em-ent-5b',
    question: 'In Newton\'s cooling, the solution is $T(t) =$',
    options: ['$T_s + (T_0 - T_s)e^{kt}$ with $k < 0$', '$T_0 e^{kt}$', '$T_s - T_0 e^{kt}$', '$T_0 + kt$'],
    correctIndex: 0,
    explanation: 'Temperature approaches $T_s$ exponentially.',
    partNumber: 5,
    partTitle: 'Newton\'s Law of Cooling',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'em-ent-6a',
    question: 'A bacteria culture has 500 at $t=0$ and 1500 at $t=2$. Find $k$:',
    options: ['$\\frac{\\ln 3}{2}$', '$\\frac{3}{2}$', '$\\ln(1000)$', '$\\frac{\\ln 2}{3}$'],
    correctIndex: 0,
    explanation: '$1500 = 500e^{2k}$. $e^{2k} = 3$. $k = \\frac{\\ln 3}{2}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'em-ent-6b',
    question: 'Carbon-14 has half-life 5730 years. If 25% remains, the age is approximately:',
    options: ['$5730$ years', '$11460$ years', '$2865$ years', '$17190$ years'],
    correctIndex: 1,
    explanation: '25% = $(\\frac{1}{2})^2$, so 2 half-lives = $2 \\times 5730 = 11460$ years.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: Review & AP Exam Applications
  {
    id: 'em-ent-7a',
    question: 'The differential equation $\\frac{dy}{dt} = ky$ always produces:',
    options: ['Linear growth', 'Exponential behavior', 'Polynomial growth', 'Logarithmic growth'],
    correctIndex: 1,
    explanation: '$\\frac{dy}{dt} = ky$ has solution $y = Ce^{kt}$, which is exponential.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
  {
    id: 'em-ent-7b',
    question: 'On the AP exam, exponential models often appear in:',
    options: ['Multiple choice only', 'Free response with separation of variables', 'Only in BC', 'Geometry problems'],
    correctIndex: 1,
    explanation: 'Separable DEs leading to exponential models are common FRQ topics.',
    partNumber: 7,
    partTitle: 'Review & AP Exam Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Exponential Growth Model' },
    { partNumber: 2, partTitle: 'Exponential Decay Model' },
    { partNumber: 3, partTitle: 'Solving Growth/Decay Problems' },
    { partNumber: 4, partTitle: 'Continuous Compounding' },
    { partNumber: 5, partTitle: 'Newton\'s Law of Cooling' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
