/**
 * Entrance Quiz — Particle Motion (AP Calculus AB) — 10 questions (2 per lesson part, 5 parts).
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
  // Part 3 — Motion from Graphs and Tables
  {
    id: 'pmo-ent-3c',
    question: 'The graph of a particle\'s velocity $v(t)$ is the line segment from $(0, 6)$ to $(4, -2)$. What is the acceleration at $t = 1$?',
    options: ['$-2$', '$4$', '$2$', '$-8$'],
    correctIndex: 0,
    explanation: 'Acceleration is the slope of the velocity graph: $\\frac{-2 - 6}{4 - 0} = -2$. The value $4$ is the velocity $v(1)$, and $-8$ is the total change in velocity, not the rate.',
    partNumber: 3,
    partTitle: 'Motion from Graphs and Tables',
  },
  {
    id: 'pmo-ent-3d',
    question: 'A particle\'s position $s(t)$, in meters, is $2$ at $t = 0$, $11$ at $t = 3$ and $7$ at $t = 5$ seconds. Using these values, what is the best estimate of $v(4)$?',
    options: ['$-2$ m/s', '$2$ m/s', '$1$ m/s', '$-4$ m/s'],
    correctIndex: 0,
    explanation: 'Use the interval that brackets $t = 4$: $\\frac{s(5) - s(3)}{5 - 3} = \\frac{7 - 11}{2} = -2$ m/s. Forgetting to divide by $2$ gives $-4$, the whole interval $[0, 5]$ gives $1$, and $2$ has the wrong sign.',
    partNumber: 3,
    partTitle: 'Motion from Graphs and Tables',
  },
  // Part 4 — AP-Style Workshop
  {
    id: 'pmo-ent-6b',
    question: 'At $t = 5$, a particle has $v(5) = -2$ and $a(5) = 3$. Which answer correctly states whether its speed is increasing or decreasing, with a valid reason?',
    options: ['Increasing, since $a(5) > 0$ means the velocity is rising', 'Decreasing, since $v(5) < 0$ means the particle moves left', 'Increasing, since $|a(5)|$ is larger than $|v(5)|$ at that time', 'Decreasing, since $v(5)$ and $a(5)$ have opposite signs'],
    correctIndex: 3,
    explanation: 'Speed decreases when velocity and acceleration have opposite signs. A positive acceleration alone does not mean speeding up, and the sign of $v$ alone gives only the direction.',
    partNumber: 4,
    partTitle: 'AP-Style Workshop',
  },
  {
    id: 'pmo-ent-4c',
    question: 'A particle has position $x(t) = t^3 - 12t + 1$ for $t \\ge 0$. On what interval is it moving left?',
    options: ['$0 < t < 2$', '$t > 2$', '$-2 < t < 2$', '$0 < t < 12$'],
    correctIndex: 0,
    explanation: '$v(t) = 3t^2 - 12 = 3(t - 2)(t + 2)$ is negative for $0 < t < 2$, so the particle moves left there. The interval $-2 < t < 2$ ignores the restriction $t \\ge 0$, and $t > 2$ is where it moves right.',
    partNumber: 4,
    partTitle: 'AP-Style Workshop',
  },
  // Part 5 — Final Assessment
  {
    id: 'pmo-ent-5c',
    question: 'A particle has position $x(t) = t^3 - 3t^2 - 9t$. At $t = 2$, is its speed increasing or decreasing?',
    options: ['Decreasing, since $v(2) < 0$ and $a(2) > 0$', 'Increasing, since $a(2) > 0$', 'Decreasing, since $v(2) < 0$', 'Increasing, since $v(2)$ and $a(2)$ agree'],
    correctIndex: 0,
    explanation: '$v(t) = 3t^2 - 6t - 9$ gives $v(2) = -9$, and $a(t) = 6t - 6$ gives $a(2) = 6$. Opposite signs mean the speed is decreasing. The sign of $a$ or of $v$ alone does not decide it, and the two signs do not agree.',
    partNumber: 5,
    partTitle: 'Final Assessment',
  },
  {
    id: 'pmo-ent-7b',
    question: 'A particle has velocity $v(t) = 3(t - 2)^2$ for $0 < t < 5$. How many times does it change direction?',
    options: ['Once, at $t = 2$', 'None', 'Twice, at $t = 0$ and $t = 2$', 'Once, at $t = 5$'],
    correctIndex: 1,
    explanation: 'The particle is momentarily at rest at $t = 2$, but $v(t) \\ge 0$ on both sides, so it keeps moving right. A direction change requires $v$ to change sign.',
    partNumber: 5,
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
    { partNumber: 3, partTitle: 'Motion from Graphs and Tables' },
    { partNumber: 4, partTitle: 'AP-Style Workshop' },
    { partNumber: 5, partTitle: 'Final Assessment' },
  ]
}
