/**
 * Entrance Quiz — Vector-Valued Functions — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Introduction & Position Vectors
  {
    id: 'vv-ent-1a',
    question: 'What is $\\lim_{t \\to 0} \\left\\langle \\frac{e^{2t} - 1}{t}, \\frac{1 - \\cos t}{t} \\right\\rangle$?',
    options: ['$\\langle 1, 0 \\rangle$', '$\\langle 2, 0 \\rangle$', '$\\langle 2, 1 \\rangle$', 'Does not exist'],
    correctIndex: 1,
    explanation: 'Limits of vector functions are taken component by component: $\\frac{e^{2t} - 1}{t} \\to 2$ (the derivative of $e^{2t}$ at $0$) and $\\frac{1 - \\cos t}{t} \\to 0$. Forgetting the chain factor gives $1$ in the first component.',
    partNumber: 1,
    partTitle: 'Introduction & Position Vectors',
  },
  {
    id: 'vv-ent-1b',
    question: 'The position of a particle is $\\vec{r}(t) = \\langle e^t, e^{-2t} \\rangle$ for all real $t$. Which equation describes its path?',
    options: [
      '$y = \\frac{1}{x^2}$ with $x > 0$',
      '$y = \\frac{1}{x^2}$ with $x \\ne 0$',
      '$y = e^{-2x}$ with $x > 0$',
      '$y = -2x$ with $x > 0$',
    ],
    correctIndex: 0,
    explanation: 'Since $x = e^t$, $e^{-2t} = (e^t)^{-2} = \\frac{1}{x^2}$, and $x = e^t$ is always positive, so only the branch with $x > 0$ is traced. The other options either allow negative $x$ or substitute incorrectly.',
    partNumber: 1,
    partTitle: 'Introduction & Position Vectors',
  },

  // Part 2 — Derivatives of Vector Functions
  {
    id: 'vv-ent-2a',
    question: 'A particle has position $\\vec{r}(t) = \\langle t^3 - 3t^2, t^2 - 4t \\rangle$ for $t \\ge 0$. When is it at rest?',
    options: [
      '$t = 0$ and $t = 2$',
      'At no time $t \\ge 0$',
      '$t = 2$ only',
      '$t = 0$, $t = 2$, and $t = 4$',
    ],
    correctIndex: 2,
    explanation: 'At rest means both velocity components are zero: $3t^2 - 6t = 0$ at $t = 0, 2$ and $2t - 4 = 0$ at $t = 2$. Only $t = 2$ makes both zero; at $t = 0$ the particle is still moving vertically.',
    partNumber: 2,
    partTitle: 'Derivatives of Vector Functions',
  },
  {
    id: 'vv-ent-2b',
    question: 'For $\\vec{r}(t) = \\langle \\ln(t + 1), t^2 \\rangle$, what is the acceleration vector at $t = 1$?',
    options: [
      '$\\langle \\frac{1}{2}, 2 \\rangle$',
      '$\\langle \\frac{1}{4}, 2 \\rangle$',
      '$\\langle -1, 2 \\rangle$',
      '$\\langle -\\frac{1}{4}, 2 \\rangle$',
    ],
    correctIndex: 3,
    explanation: 'Velocity is $\\langle \\frac{1}{t+1}, 2t \\rangle$ and acceleration is $\\langle -\\frac{1}{(t+1)^2}, 2 \\rangle$, which is $\\langle -\\frac{1}{4}, 2 \\rangle$ at $t = 1$. The vector $\\langle \\frac{1}{2}, 2 \\rangle$ is the velocity, and the positive first component drops the minus sign.',
    partNumber: 2,
    partTitle: 'Derivatives of Vector Functions',
  },

  // Part 3 — Antiderivatives and Distance
  {
    id: 'vv-ent-3a',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle e^t, 2t \\rangle$ and position $\\vec{r}(0) = \\langle 2, -1 \\rangle$. What is $\\vec{r}(t)$?',
    options: [
      '$\\langle e^t+1, t^2-1 \\rangle$',
      '$\\langle e^t+2, t^2-1 \\rangle$',
      '$\\langle e^t, t^2 \\rangle$',
      '$\\langle e^t+1, 2t-1 \\rangle$',
    ],
    correctIndex: 0,
    explanation: 'Integrate each component: $x = e^t + C_1$ with $1 + C_1 = 2$, so $C_1 = 1$; $y = t^2 + C_2$ with $C_2 = -1$. Using $C_1 = 2$ forgets that $e^0 = 1$, and the last option never integrates the second component.',
    partNumber: 3,
    partTitle: 'Antiderivatives and Distance',
  },
  {
    id: 'vv-ent-3b',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle 3t^2, 4t^2 \\rangle$. What is the total distance it travels from $t = 0$ to $t = 2$?',
    options: ['$\\frac{56}{3}$', '$\\frac{40}{3}$', '$20$', '$8$'],
    correctIndex: 1,
    explanation: 'The speed is $\\sqrt{9t^4 + 16t^4} = 5t^2$, so the distance is $\\int_0^2 5t^2\\,dt = \\frac{40}{3}$. Adding the components gives $\\frac{56}{3}$, $20$ is the speed at $t = 2$, and $8$ integrates only the $x$-component.',
    partNumber: 3,
    partTitle: 'Antiderivatives and Distance',
  },

  // Part 4 — Arc Length, Speed, and Acceleration
  {
    id: 'vv-ent-4a',
    question: 'A particle moves with $\\vec{r}(t) = \\langle t^3, 3t \\rangle$. At what rate is its speed changing at $t = 1$?',
    options: ['$6$', '$0$', '$3\\sqrt{2}$', '$\\frac{3}{\\sqrt{2}}$'],
    correctIndex: 2,
    explanation: 'The speed is $\\sqrt{9t^4 + 9} = 3\\sqrt{t^4 + 1}$, and its derivative is $\\frac{6t^3}{\\sqrt{t^4 + 1}}$, which is $\\frac{6}{\\sqrt{2}} = 3\\sqrt{2}$ at $t = 1$. The value $6$ is the length of the acceleration vector $\\langle 6, 0 \\rangle$, which is not the rate of change of speed.',
    partNumber: 4,
    partTitle: 'Arc Length, Speed, and Acceleration',
  },
  {
    id: 'vv-ent-4b',
    question: 'What is the arc length of the path $\\vec{r}(t) = \\langle 2t^{3/2}, 3t \\rangle$ for $0 \\le t \\le 3$?',
    options: ['$\\frac{14}{3}$', '$\\sqrt{189}$', '$\\frac{16}{3}$', '$14$'],
    correctIndex: 3,
    explanation: 'Here $\\vec{r}\\,\'(t) = \\langle 3\\sqrt{t}, 3 \\rangle$, so the speed is $3\\sqrt{t + 1}$ and the length is $\\int_0^3 3\\sqrt{t+1}\\,dt = 2(t + 1)^{3/2}\\Big|_0^3 = 14$. Dropping the factor 3 gives $\\frac{14}{3}$, and $\\sqrt{189}$ is the straight-line distance between the endpoints.',
    partNumber: 4,
    partTitle: 'Arc Length, Speed, and Acceleration',
  },

  // Part 5 — AP Free-Response Motion Problems
  {
    id: 'vv-ent-5a',
    question: 'A particle has $\\vec{a}(t) = \\langle 6t, -2 \\rangle$, $\\vec{v}(0) = \\langle 0, 3 \\rangle$, and $\\vec{r}(0) = \\langle 1, 0 \\rangle$. Where is it at $t = 1$?',
    options: [
      '$\\langle 2, 2 \\rangle$',
      '$\\langle 1, 2 \\rangle$',
      '$\\langle 2, -1 \\rangle$',
      '$\\langle 3, 1 \\rangle$',
    ],
    correctIndex: 0,
    explanation: 'Integrating twice gives $\\vec{v}(t) = \\langle 3t^2, 3 - 2t \\rangle$ and $\\vec{r}(t) = \\langle t^3 + 1, 3t - t^2 \\rangle$, so $\\vec{r}(1) = \\langle 2, 2 \\rangle$. Skipping $\\vec{v}(0)$ gives $\\langle 2, -1 \\rangle$, and $\\langle 3, 1 \\rangle$ is the velocity at $t = 1$.',
    partNumber: 5,
    partTitle: 'AP Free-Response Motion Problems',
  },
  {
    id: 'vv-ent-5b',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle t^2 - 4t + 3, e^{-t} \\rangle$ for $t > 0$. At what times does it change horizontal direction?',
    options: [
      '$t = 2$, where $x\'\'(t) = 0$',
      '$t = 1$ and $t = 3$',
      'Never, since $e^{-t}$ stays positive',
      '$t = 1$, $t = 2$, and $t = 3$',
    ],
    correctIndex: 1,
    explanation: 'Horizontal direction reverses when $x\'(t) = (t - 1)(t - 3)$ changes sign, at $t = 1$ and $t = 3$. The vertical component has nothing to do with horizontal direction, and $x\'\' = 0$ marks where $x\'$ is smallest, not where it changes sign.',
    partNumber: 5,
    partTitle: 'AP Free-Response Motion Problems',
  },

  // Part 6 — Problem-Solving Workshop
  {
    id: 'vv-ent-6a',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle 2t, t^2 - 3 \\rangle$ for $0 \\le t \\le 3$. What is its minimum speed on this interval?',
    options: ['$3$', '$2$', '$2\\sqrt{2}$', '$0$'],
    correctIndex: 2,
    explanation: 'Speed squared is $4t^2 + (t^2 - 3)^2 = t^4 - 2t^2 + 9$, whose derivative $4t^3 - 4t$ is zero at $t = 1$; comparing $9$ at $t = 0$, $8$ at $t = 1$, and $72$ at $t = 3$ gives a minimum speed of $\\sqrt{8} = 2\\sqrt{2}$. The particle is never at rest, so the speed is never $0$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'vv-ent-6b',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle t - 2, 4 - t^2 \\rangle$ for $0 < t < 3$. When is it moving up and to the left?',
    options: ['$2 < t < 3$', 'Never on $0 < t < 3$', 'All of $0 < t < 3$', '$0 < t < 2$'],
    correctIndex: 3,
    explanation: 'Left needs $t - 2 < 0$, so $t < 2$; up needs $4 - t^2 > 0$, which for $t > 0$ also means $t < 2$. Both hold on $0 < t < 2$; after $t = 2$ the particle moves right and down.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7 — Full Topic Review
  {
    id: 'vv-ent-7a',
    question: 'A particle has velocity $\\vec{v}(t) = \\langle 2t, e^t \\rangle$. Which expression gives the total distance it travels from $t = 0$ to $t = 2$?',
    options: [
      '$\\int_0^2 \\sqrt{4t^2+e^{2t}}\\,dt$',
      '$\\int_0^2 (2t+e^t)\\,dt$',
      '$\\sqrt{4^2+(e^2-1)^2}$',
      '$\\int_0^2 \\sqrt{2t+e^t}\\,dt$',
    ],
    correctIndex: 0,
    explanation: 'Distance is the integral of speed, $\\int_0^2 \\|\\vec{v}(t)\\|\\,dt = \\int_0^2 \\sqrt{(2t)^2 + (e^t)^2}\\,dt$. Adding the components is not the speed, the square root of squared displacements is the straight-line distance, and the last option forgets to square the components.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
  {
    id: 'vv-ent-7b',
    question: 'A particle moves so that its speed is $4$ at every time. Which statement is correct?',
    options: [
      'Its acceleration is the zero vector at every time',
      'Its path must be a straight line traced at constant rate',
      'Its acceleration may still be nonzero',
      'Its displacement after $t$ units of time has length $4t$',
    ],
    correctIndex: 2,
    explanation: 'Constant speed only fixes the length of $\\vec{v}$; the direction can still change, as in circular motion, so the acceleration need not be zero. For the same reason the path need not be a line, and the displacement can be shorter than the distance $4t$.',
    partNumber: 7,
    partTitle: 'Full Topic Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction & Position Vectors' },
    { partNumber: 2, partTitle: 'Derivatives of Vector Functions' },
    { partNumber: 3, partTitle: 'Antiderivatives and Distance' },
    { partNumber: 4, partTitle: 'Arc Length, Speed, and Acceleration' },
    { partNumber: 5, partTitle: 'AP Free-Response Motion Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Full Topic Review' },
  ]
}
