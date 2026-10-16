/**
 * Entrance Quiz — Particle Motion (AP Calculus AB) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Position, Velocity, Acceleration
  {
    id: 'pmo-ent-1a',
    question: 'A particle moves along the $x$-axis with position $s(t) = t^3 - 3t^2 - 24t + 5$ for $t \\ge 0$. What is its acceleration at the moment it is at rest?',
    options: ['$18$', '$4$', '$-6$', '$-75$'],
    correctIndex: 0,
    explanation: '$v(t) = 3t^2 - 6t - 24 = 3(t - 4)(t + 2)$, so for $t \\ge 0$ the particle is at rest at $t = 4$. Then $a(t) = 6t - 6$ gives $a(4) = 18$. The value $-75$ is the position $s(4)$.',
    partNumber: 1,
    partTitle: 'Position, Velocity, Acceleration',
  },
  {
    id: 'pmo-ent-1b',
    question: 'A particle\'s position is $s(t) = 4\\cos(\\pi t)$. Find its acceleration at $t = 1$.',
    options: ['$-4\\pi^2$', '$4\\pi^2$', '$4\\pi$', '$0$'],
    correctIndex: 1,
    explanation: '$v(t) = -4\\pi\\sin(\\pi t)$ and $a(t) = -4\\pi^2\\cos(\\pi t)$. At $t = 1$, $\\cos\\pi = -1$, so $a(1) = 4\\pi^2$. Forgetting that $\\cos\\pi$ is negative gives $-4\\pi^2$.',
    partNumber: 1,
    partTitle: 'Position, Velocity, Acceleration',
  },
  // Part 2 — Speed & Direction of Motion
  {
    id: 'pmo-ent-2a',
    question: 'A particle has velocity $v(t) = 5 - t^2$ for $t \\ge 0$. On what interval is its speed increasing?',
    options: ['$0 < t < \\sqrt{5}$', '$t > 0$', '$t > \\sqrt{5}$', '$t > 5$'],
    correctIndex: 2,
    explanation: 'Here $a(t) = -2t < 0$ for $t > 0$. Speed increases when $v$ and $a$ have the same sign, which needs $v < 0$, that is, $t > \\sqrt{5}$. On $(0, \\sqrt{5})$ the particle moves right but slows down.',
    partNumber: 2,
    partTitle: 'Speed & Direction of Motion',
  },
  {
    id: 'pmo-ent-2b',
    question: 'A particle has velocity $v(t) = 2 - 3t$. What is its speed at $t = 2$?',
    options: ['$-4$', '$\\pm 4$', '$16$', '$4$'],
    correctIndex: 3,
    explanation: '$v(2) = 2 - 6 = -4$, and speed is the absolute value of velocity, $|-4| = 4$. The negative sign only tells the direction.',
    partNumber: 2,
    partTitle: 'Speed & Direction of Motion',
  },
  // Part 3 — Displacement vs. Total Distance
  {
    id: 'pmo-ent-3a',
    question: 'A particle has velocity $v(t) = t^2 - 2t$ on $0 \\le t \\le 3$. What total distance does it travel?',
    options: ['$\\frac{8}{3}$', '$0$', '$\\frac{4}{3}$', '$4$'],
    correctIndex: 0,
    explanation: 'The velocity is negative on $(0, 2)$ and positive on $(2, 3)$. The distance is $\\int_0^2 (2t - t^2)\\,dt + \\int_2^3 (t^2 - 2t)\\,dt = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$. The displacement $\\int_0^3 v\\,dt$ is 0.',
    partNumber: 3,
    partTitle: 'Displacement vs. Total Distance',
  },
  {
    id: 'pmo-ent-3b',
    question: 'A particle starts at $s(0) = 5$. Over $0 \\le t \\le 6$, $\\int_0^6 v(t)\\,dt = -2$ and $\\int_0^6 |v(t)|\\,dt = 10$. Where is the particle at $t = 6$?',
    options: ['$-2$', '$3$', '$15$', '$10$'],
    correctIndex: 1,
    explanation: 'Position changes by the displacement, not the distance: $s(6) = 5 + (-2) = 3$. The 10 units of total distance include back-and-forth travel that cancels.',
    partNumber: 3,
    partTitle: 'Displacement vs. Total Distance',
  },
  // Part 4 — Position from Velocity
  {
    id: 'pmo-ent-4a',
    question: 'A particle has velocity $v(t) = \\sqrt{t}$ and position $s(0) = 2$. Find $s(4)$.',
    options: ['$\\frac{16}{3}$', '$4$', '$\\frac{22}{3}$', '$\\frac{9}{4}$'],
    correctIndex: 2,
    explanation: '$s(4) = s(0) + \\int_0^4 t^{1/2}\\,dt = 2 + \\frac{2}{3}(4)^{3/2} = 2 + \\frac{16}{3} = \\frac{22}{3}$. Leaving out the starting position gives $\\frac{16}{3}$.',
    partNumber: 4,
    partTitle: 'Position from Velocity',
  },
  {
    id: 'pmo-ent-4b',
    question: 'A particle has velocity $v(t) = 6\\sin(2t)$ and position $s(0) = 1$. What is $s(t)$?',
    options: ['$s(t) = 1 - 3\\cos(2t)$', '$s(t) = 1 + 3\\cos(2t)$', '$s(t) = 12\\cos(2t) - 11$', '$s(t) = 4 - 3\\cos(2t)$'],
    correctIndex: 3,
    explanation: 'An antiderivative is $-3\\cos(2t) + C$. Using $s(0) = 1$: $-3 + C = 1$, so $C = 4$ and $s(t) = 4 - 3\\cos(2t)$. Writing $C = 1$ ignores that $\\cos 0 = 1$.',
    partNumber: 4,
    partTitle: 'Position from Velocity',
  },
  // Part 5 — Velocity from Acceleration
  {
    id: 'pmo-ent-5a',
    question: 'A particle has acceleration $a(t) = 12 - 6t$ and initial velocity $v(0) = -9$. At what times does it change direction?',
    options: ['$t = 1$ and $t = 3$', '$t = 2$', '$t = 0$ and $t = 4$', '$t = 3$'],
    correctIndex: 0,
    explanation: '$v(t) = -9 + 12t - 3t^2 = -3(t - 1)(t - 3)$, which changes sign at both $t = 1$ and $t = 3$. The time $t = 2$ is where $a(t) = 0$, not where $v$ changes sign, and $t = 0$ and $t = 4$ come from leaving out the initial velocity $-9$.',
    partNumber: 5,
    partTitle: 'Velocity from Acceleration',
  },
  {
    id: 'pmo-ent-5b',
    question: 'A ball is thrown upward from ground level with $a(t) = -32$ ft/s$^2$ and $v(0) = 48$ ft/s. What is its maximum height?',
    options: ['$108$ ft', '$36$ ft', '$144$ ft', '$1.5$ ft'],
    correctIndex: 1,
    explanation: '$v(t) = 48 - 32t = 0$ at $t = 1.5$ s, and $s(t) = 48t - 16t^2$ gives $s(1.5) = 72 - 36 = 36$ ft. The value 1.5 is the time of the peak, not its height.',
    partNumber: 5,
    partTitle: 'Velocity from Acceleration',
  },
  // Part 6 — AP-Style Workshop
  {
    id: 'pmo-ent-6a',
    question: 'A particle has velocity $v(t) = (t - 1)(t - 2)$ on $0 \\le t \\le 3$. What total distance does it travel?',
    options: ['$\\frac{3}{2}$', '$\\frac{5}{3}$', '$\\frac{11}{6}$', '$\\frac{1}{6}$'],
    correctIndex: 2,
    explanation: 'Split at the zeros: $\\int_0^1 v\\,dt = \\frac{5}{6}$, $\\int_1^2 v\\,dt = -\\frac{1}{6}$, $\\int_2^3 v\\,dt = \\frac{5}{6}$. The distance is $\\frac{5}{6} + \\frac{1}{6} + \\frac{5}{6} = \\frac{11}{6}$, while the displacement is $\\frac{3}{2}$.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'pmo-ent-6b',
    question: 'At $t = 5$, a particle has $v(5) = -2$ and $a(5) = 3$. Which answer correctly states whether its speed is increasing or decreasing, with a valid reason?',
    options: ['Increasing, since $a(5) > 0$ means the velocity is rising', 'Decreasing, since $v(5) < 0$ means the particle moves left', 'Increasing, since $|a(5)|$ is larger than $|v(5)|$ at that time', 'Decreasing, since $v(5)$ and $a(5)$ have opposite signs'],
    correctIndex: 3,
    explanation: 'Speed decreases when velocity and acceleration have opposite signs. A positive acceleration alone does not mean speeding up, and the sign of $v$ alone gives only the direction.',
    partNumber: 6,
    partTitle: 'AP-Style Workshop',
  },
  // Part 7 — Final Assessment
  {
    id: 'pmo-ent-7a',
    question: 'A particle has $a(t) = 6t - 2$, $v(0) = 1$ and $s(0) = 2$. Find $s(2)$.',
    options: ['$8$', '$6$', '$9$', '$12$'],
    correctIndex: 0,
    explanation: '$v(t) = 3t^2 - 2t + 1$ and $s(t) = t^3 - t^2 + t + 2$, so $s(2) = 8 - 4 + 2 + 2 = 8$. Leaving out $s(0)$ gives 6, and 9 is $v(2)$.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
  {
    id: 'pmo-ent-7b',
    question: 'A particle has velocity $v(t) = 3(t - 2)^2$ for $0 < t < 5$. How many times does it change direction?',
    options: ['Once, at $t = 2$', 'None', 'Twice, at $t = 0$ and $t = 2$', 'Once, at $t = 5$'],
    correctIndex: 1,
    explanation: 'The particle is momentarily at rest at $t = 2$, but $v(t) \\ge 0$ on both sides, so it keeps moving right. A direction change requires $v$ to change sign.',
    partNumber: 7,
    partTitle: 'Final Assessment',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position, Velocity, Acceleration' },
    { partNumber: 2, partTitle: 'Speed & Direction of Motion' },
    { partNumber: 3, partTitle: 'Displacement vs. Total Distance' },
    { partNumber: 4, partTitle: 'Position from Velocity' },
    { partNumber: 5, partTitle: 'Velocity from Acceleration' },
    { partNumber: 6, partTitle: 'AP-Style Workshop' },
    { partNumber: 7, partTitle: 'Final Assessment' },
  ]
}
