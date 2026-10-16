/**
 * Entrance Quiz — Parametric Curves & Calculus — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Parametric Equations
  {
    id: 'pc-ent-1a',
    question: 'A curve is given by $x = \\sqrt{t}$, $y = t - 2$ for $t \\ge 0$. Which Cartesian description matches it exactly?',
    options: [
      '$y = x^2-2$ for all $x$',
      '$y = \\sqrt{x}-2$ for $x \\ge 0$',
      '$y = x^2-2$ for $x \\ge 0$',
      '$y = x^2+2$ for $x \\ge 0$',
    ],
    correctIndex: 2,
    explanation: 'From $x = \\sqrt{t}$, $t = x^2$, so $y = x^2 - 2$. Because $x = \\sqrt{t}$ is never negative, only the right half of the parabola is traced. Writing "for all $x$" ignores that restriction.',
    partNumber: 1,
    partTitle: 'Parametric Equations',
  },
  {
    id: 'pc-ent-1b',
    question: 'A particle moves with $x = t^2 - 1$ and $y = 2t + 3$. What is its speed at $t = 2$?',
    options: ['$2\\sqrt{5}$', '$6$', '$20$', '$4$'],
    correctIndex: 0,
    explanation: 'Speed is $\\sqrt{(dx/dt)^2 + (dy/dt)^2} = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$. Adding the components gives $6$, forgetting the square root gives $20$, and $4$ is only the horizontal rate.',
    partNumber: 1,
    partTitle: 'Parametric Equations',
  },

  // Part 2 — Derivatives of Parametric Curves
  {
    id: 'pc-ent-2a',
    question: 'For $x = t^2 + 2t$, $y = t^4$, what is $\\frac{d^2y}{dx^2}$ at $t = 1$?',
    options: ['$6$', '$\\frac{5}{8}$', '$\\frac{5}{2}$', '$10$'],
    correctIndex: 1,
    explanation: 'Here $\\frac{dy}{dx} = \\frac{4t^3}{2t + 2} = \\frac{2t^3}{t + 1}$, whose $t$-derivative is $\\frac{4t^3 + 6t^2}{(t+1)^2} = \\frac{5}{2}$ at $t = 1$. Dividing by $\\frac{dx}{dt} = 4$ gives $\\frac{5}{8}$. The ratio $\\frac{y\'\'(t)}{x\'\'(t)}$ gives $6$, skipping the division gives $\\frac{5}{2}$, and multiplying instead gives $10$.',
    partNumber: 2,
    partTitle: 'Derivatives of Parametric Curves',
  },
  {
    id: 'pc-ent-2b',
    question: 'For $x = t^3 - 3t$, $y = t^2 - 4t$, at which values of $t$ does the curve have a vertical tangent line?',
    options: ['$t = 2$ only', '$t = \\pm\\sqrt{3}$', '$t = 0$ and $t = 4$', '$t = \\pm 1$'],
    correctIndex: 3,
    explanation: 'A vertical tangent needs $\\frac{dx}{dt} = 3t^2 - 3 = 0$ with $\\frac{dy}{dt} \\ne 0$; at $t = \\pm 1$, $\\frac{dy}{dt} = 2t - 4 \\ne 0$. The value $t = 2$ makes $\\frac{dy}{dt} = 0$ (a horizontal tangent), and the others are where $x = 0$ or $y = 0$.',
    partNumber: 2,
    partTitle: 'Derivatives of Parametric Curves',
  },

  // Part 3 — Arc Length (Parametric)
  {
    id: 'pc-ent-3a',
    question: 'What is the arc length of $x = t$, $y = \\frac{2}{3}t^{3/2}$ for $0 \\le t \\le 3$?',
    options: ['$\\frac{14}{3}$', '$\\frac{16}{3}$', '$\\sqrt{21}$', '$\\frac{7}{3}$'],
    correctIndex: 0,
    explanation: 'The speed is $\\sqrt{1^2 + (t^{1/2})^2} = \\sqrt{1 + t}$, and $\\int_0^3 \\sqrt{1 + t}\\,dt = \\frac{2}{3}(1 + t)^{3/2}\\Big|_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$. Dropping the lower limit gives $\\frac{16}{3}$, and $\\sqrt{21}$ is the straight-line distance between the endpoints.',
    partNumber: 3,
    partTitle: 'Arc Length (Parametric)',
  },
  {
    id: 'pc-ent-3b',
    question: 'A particle moves on $x = \\cos(\\pi t)$, $y = \\sin(\\pi t)$ for $0 \\le t \\le 2$. What are its total distance traveled and its displacement?',
    options: [
      'Distance $\\pi$, displacement $2$',
      'Distance $0$, displacement $2\\pi$',
      'Distance $2\\pi$, displacement $0$',
      'Distance $2\\pi$, displacement $2\\pi$',
    ],
    correctIndex: 2,
    explanation: 'The speed is constant at $\\pi$, so the distance is $\\int_0^2 \\pi\\,dt = 2\\pi$: one full trip around the unit circle. It ends where it started, so the displacement is $0$.',
    partNumber: 3,
    partTitle: 'Arc Length (Parametric)',
  },

  // Part 4 — Area Under Parametric Curves
  {
    id: 'pc-ent-4a',
    question: 'The curve $x = t^2$, $y = t^3$ for $0 \\le t \\le 1$ is traced left to right. What is the area between this curve and the $x$-axis?',
    options: ['$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{4}$', '$\\frac{1}{6}$'],
    correctIndex: 1,
    explanation: 'Area $= \\int y\\,dx = \\int_0^1 y(t)\\,x\'(t)\\,dt = \\int_0^1 t^3 \\cdot 2t\\,dt = \\frac{2}{5}$. Using $x\\,y\'$ gives $\\frac{3}{5}$, and leaving out $x\'(t)$ gives $\\frac{1}{4}$.',
    partNumber: 4,
    partTitle: 'Area Under Parametric Curves',
  },
  {
    id: 'pc-ent-4b',
    question: 'The curve $x = 4 - t^2$, $y = t$ for $0 \\le t \\le 2$ runs from $(4, 0)$ to $(0, 2)$. Which integral gives the area between the curve and the $x$-axis?',
    options: [
      '$\\int_0^2 -2t^2\\,dt$',
      '$\\int_0^2 (4-t^2)\\,dt$',
      '$\\int_0^4 t\\,dt$',
      '$\\int_0^2 2t^2\\,dt$',
    ],
    correctIndex: 3,
    explanation: 'Here $y\\,x\'(t) = t(-2t) = -2t^2$, and because $x$ decreases as $t$ increases, the area is $-\\int_0^2 y\\,x\'(t)\\,dt = \\int_0^2 2t^2\\,dt = \\frac{16}{3}$. Keeping the minus sign gives a negative area.',
    partNumber: 4,
    partTitle: 'Area Under Parametric Curves',
  },

  // Part 5 — Planar Motion
  {
    id: 'pc-ent-5a',
    question: 'A particle has $x\'(t) = 3t^2$ and $y\'(t) = 2 - t$, and it is at $(-1, 5)$ when $t = 0$. Where is it at $t = 2$?',
    options: ['$(7, 7)$', '$(12, 0)$', '$(11, 5)$', '$(7, 11)$'],
    correctIndex: 0,
    explanation: '$x(2) = -1 + \\int_0^2 3t^2\\,dt = -1 + 8 = 7$ and $y(2) = 5 + \\int_0^2 (2 - t)\\,dt = 5 + 2 = 7$. The pair $(12, 0)$ is the velocity at $t = 2$, and $(7, 11)$ has a sign slip in the $y$ integral.',
    partNumber: 5,
    partTitle: 'Planar Motion',
  },
  {
    id: 'pc-ent-5b',
    question: 'A particle has velocity components $x\'(t) = t^2 - 4$ and $y\'(t) = 3t$. What is true at $t = 1$?',
    options: [
      'Moving right and up at speed $3\\sqrt{2}$',
      'Moving left and down at speed $3\\sqrt{2}$',
      'Moving left and up at speed $3\\sqrt{2}$',
      'Moving left and up at speed $6$',
    ],
    correctIndex: 2,
    explanation: 'At $t = 1$ the velocity is $\\langle -3, 3 \\rangle$: negative horizontal means left, positive vertical means up, and the speed is $\\sqrt{9 + 9} = 3\\sqrt{2}$. Adding the absolute values of the components gives $6$, which is not the speed.',
    partNumber: 5,
    partTitle: 'Planar Motion',
  },

  // Part 6 — Practice Workshop
  {
    id: 'pc-ent-6a',
    question: 'A particle moves with $x(t) = t^2 - 2t$ and $y(t) = t^3 - 12t$. For which $t$ is it moving up and to the left?',
    options: ['$-2 < t < 1$', '$t < -2$', '$1 < t < 2$', '$t < 1$ or $t > 2$'],
    correctIndex: 1,
    explanation: 'Left needs $x\'(t) = 2t - 2 < 0$, so $t < 1$; up needs $y\'(t) = 3t^2 - 12 > 0$, so $t < -2$ or $t > 2$. Both hold only for $t < -2$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },
  {
    id: 'pc-ent-6b',
    question: 'For the curve $x = t^2$, $y = \\ln t$ with $t > 0$, which describes its concavity?',
    options: [
      'Concave up for all $t > 0$',
      'Concave up for $t < 1$ and down for $t > 1$',
      'Linear, since $\\frac{d^2y}{dx^2} = 0$',
      'Concave down for all $t > 0$',
    ],
    correctIndex: 3,
    explanation: '$\\frac{dy}{dx} = \\frac{1/t}{2t} = \\frac{1}{2t^2}$, whose $t$-derivative is $-\\frac{1}{t^3}$; dividing by $\\frac{dx}{dt} = 2t$ gives $\\frac{d^2y}{dx^2} = -\\frac{1}{2t^4} < 0$ for every $t > 0$.',
    partNumber: 6,
    partTitle: 'Practice Workshop',
  },

  // Part 7 — Final Assessment
  {
    id: 'pc-ent-7a',
    question: 'What is the line tangent to $x = t^3 + 1$, $y = 2t^2$ at $t = 1$?',
    options: [
      '$y-2 = \\frac{4}{3}(x-2)$',
      '$y-2 = \\frac{3}{4}(x-2)$',
      '$y-2 = \\frac{4}{3}(x-1)$',
      '$y-1 = \\frac{4}{3}(x-2)$',
    ],
    correctIndex: 0,
    explanation: 'At $t = 1$ the point is $(2, 2)$ and the slope is $\\frac{dy/dt}{dx/dt} = \\frac{4t}{3t^2} = \\frac{4}{3}$. Inverting the ratio gives $\\frac{3}{4}$, and the other options use the parameter value $1$ as a coordinate.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'pc-ent-7b',
    question: 'A particle moves with $x = 2t^3$, $y = 3t^2$ for $0 \\le t \\le 1$. How far does it travel along its path?',
    options: ['$4\\sqrt{2}$', '$2\\sqrt{2}$', '$4\\sqrt{2}-2$', '$\\sqrt{13}$'],
    correctIndex: 2,
    explanation: 'The speed is $\\sqrt{36t^4 + 36t^2} = 6t\\sqrt{t^2 + 1}$, and $\\int_0^1 6t\\sqrt{t^2 + 1}\\,dt = 2(t^2 + 1)^{3/2}\\Big|_0^1 = 4\\sqrt{2} - 2$. The value $\\sqrt{13}$ is the straight-line displacement from $(0, 0)$ to $(2, 3)$, and $4\\sqrt{2}$ drops the lower limit.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Parametric Equations' },
    { partNumber: 2, partTitle: 'Derivatives of Parametric Curves' },
    { partNumber: 3, partTitle: 'Arc Length (Parametric)' },
    { partNumber: 4, partTitle: 'Area Under Parametric Curves' },
    { partNumber: 5, partTitle: 'Planar Motion' },
    { partNumber: 6, partTitle: 'Practice Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
