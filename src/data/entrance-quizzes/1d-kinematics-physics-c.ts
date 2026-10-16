/**
 * Entrance Quiz — AP Physics C: Mechanics, 1D Kinematics
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Position, Velocity & Acceleration',
  'Constant Acceleration Equations',
  'Free Fall',
  'Integration for Position',
  'Differentiation for v & a',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pc1d-ent-1a',
    question: 'A particle moves along the $x$-axis with $x(t) = t^3 - 4t^2 + 2$ (meters, seconds). What is its average velocity from $t = 0$ to $t = 3$ s?',
    options: ['$-3.0$ m/s', '$3.0$ m/s', '$1.5$ m/s', '$-2.3$ m/s'],
    correctIndex: 0,
    explanation: 'Average velocity is $\\Delta x/\\Delta t = [x(3) - x(0)]/3 = (-7 - 2)/3 = -3.0$ m/s. The value $3.0$ m/s is the instantaneous velocity $v(3)$, a tangent slope rather than a secant slope.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pc1d-ent-1b',
    question: 'A particle has $x(t) = t^3 - 6t^2 + 9t$. Which describes its motion at $t = 1.5$ s?',
    options: [
      'Moving toward $+x$ while speeding up',
      'Moving toward $-x$ and slowing down',
      'Moving toward $-x$ and speeding up',
      'Moving toward $+x$ and slowing down',
    ],
    correctIndex: 2,
    explanation: '$v = 3t^2 - 12t + 9 = -2.25$ m/s and $a = 6t - 12 = -3$ m/s$^2$ at $t = 1.5$ s. The velocity is negative, and because $v$ and $a$ share a sign the particle is speeding up.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pc1d-ent-2a',
    question: 'A car moving at $25$ m/s brakes with constant deceleration and stops in $50$ m. How long does it take to stop?',
    options: ['$2.0$ s', '$8.0$ s', '$6.3$ s', '$4.0$ s'],
    correctIndex: 3,
    explanation: 'With constant acceleration the average velocity is $(25 + 0)/2 = 12.5$ m/s, so $t = 50/12.5 = 4.0$ s. Dividing $50$ m by $25$ m/s treats the speed as constant.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pc1d-ent-2b',
    question: 'A cart starts from rest, accelerates at $2$ m/s$^2$ for $6$ s, then decelerates at $3$ m/s$^2$ until it stops. What total distance does it cover?',
    options: ['$36$ m', '$60$ m', '$84$ m', '$72$ m'],
    correctIndex: 1,
    explanation: 'Phase 1: $\\frac{1}{2}(2)(6^2) = 36$ m, ending at $12$ m/s. Phase 2: $v^2 = 2ad$ gives $d = 144/6 = 24$ m. Total $= 60$ m.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pc1d-ent-3a',
    question: 'A ball is thrown straight up at $15$ m/s from the edge of a $20$ m tall roof. How long until it hits the ground below? (Use $g = 10$ m/s$^2$.)',
    options: ['$4.0$ s', '$3.0$ s', '$1.0$ s', '$1.5$ s'],
    correctIndex: 0,
    explanation: 'With up positive, $-20 = 15t - 5t^2$, so $t^2 - 3t - 4 = 0$ and $t = 4.0$ s. The value $3.0$ s is the time to return to roof level, not to the ground.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pc1d-ent-3b',
    question: 'A ball launched straight up passes a point $15$ m above the launch point $1$ s after launch. What is the maximum height above the launch point? (Use $g = 10$ m/s$^2$.)',
    options: ['$15$ m', '$40$ m', '$10$ m', '$20$ m'],
    correctIndex: 3,
    explanation: 'From $15 = v_0(1) - 5(1)^2$, $v_0 = 20$ m/s. The peak height is $v_0^2/(2g) = 400/20 = 20$ m; $40$ m forgets the factor of 2.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pc1d-ent-4a',
    question: 'A particle has $v(t) = 4\\cos(2t)$ m/s and $x(0) = 1$ m. What is its position at $t = \\pi/4$ s?',
    options: ['$5$ m', '$2$ m', '$9$ m', '$3$ m'],
    correctIndex: 3,
    explanation: '$x(t) = 1 + \\int_0^t 4\\cos(2t\')\\,dt\' = 1 + 2\\sin(2t)$, so $x(\\pi/4) = 1 + 2 = 3$ m. Getting $5$ m drops the $1/2$ from the chain rule.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pc1d-ent-4b',
    question: 'A particle has $v(t) = t^2 - 2t - 3$ m/s. What total distance does it travel from $t = 0$ to $t = 4$ s?',
    options: ['$6.7$ m', '$11.3$ m', '$9.0$ m', '$2.3$ m'],
    correctIndex: 1,
    explanation: 'The velocity changes sign at $t = 3$ s. The particle moves $9$ m in the negative direction on $[0, 3]$ and $7/3$ m back on $[3, 4]$, so the distance is $34/3 \\approx 11.3$ m; $6.7$ m is the magnitude of the net displacement.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pc1d-ent-5a',
    question: 'A particle has $x(t) = 3\\cos(2t) + t^2$ (meters, seconds). What is its acceleration at $t = \\pi/2$ s?',
    options: ['$14$ m/s$^2$', '$8$ m/s$^2$', '$-10$ m/s$^2$', '$-4$ m/s$^2$'],
    correctIndex: 0,
    explanation: '$a(t) = d^2x/dt^2 = -12\\cos(2t) + 2$. At $t = \\pi/2$, $\\cos\\pi = -1$, so $a = 12 + 2 = 14$ m/s$^2$.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pc1d-ent-5b',
    question: 'A particle has $x(t) = t^3 - 9t^2 + 24t$ for $0 < t < 6$ s. During which intervals is it speeding up?',
    options: [
      '$0 < t < 2$ and $t > 4$',
      '$3 < t < 6$ only',
      '$2 < t < 3$ and $4 < t < 6$',
      '$2 < t < 4$ only',
    ],
    correctIndex: 2,
    explanation: '$v = 3(t - 2)(t - 4)$ and $a = 6t - 18$. Both are negative on $2 < t < 3$ and both positive on $4 < t < 6$, so those are the speeding-up intervals.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pc1d-ent-6a',
    question: 'A particle has $a(t) = 6t$ m/s$^2$, $v(0) = -12$ m/s, and $x(0) = 0$. Where is it when it first comes momentarily to rest?',
    options: ['$x = -16$ m', '$x = 16$ m', '$x = 8$ m', '$x = -8$ m'],
    correctIndex: 0,
    explanation: '$v = 3t^2 - 12$, which is zero at $t = 2$ s, and $x = t^3 - 12t$. So $x(2) = 8 - 24 = -16$ m.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pc1d-ent-6b',
    question: 'A cart starts from rest at $x = 0$ with $a(t) = 2t$ m/s$^2$ for $0 \\le t \\le 3$ s, then coasts at constant velocity. Where is it at $t = 5$ s?',
    options: ['$41.7$ m', '$18.0$ m', '$45.0$ m', '$27.0$ m'],
    correctIndex: 3,
    explanation: 'During the push, $v = t^2$ and $x = t^3/3$, so at $3$ s the cart is at $9$ m moving at $9$ m/s. Coasting $2$ s more adds $18$ m, for $27.0$ m; $41.7$ m wrongly keeps using $t^3/3$ after the push ends.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pc1d-ent-7a',
    question: 'A driver moving at $20$ m/s has a reaction time of $0.5$ s and then brakes at $5$ m/s$^2$. What is the total stopping distance from the moment the hazard appears?',
    options: ['$40$ m', '$45$ m', '$50$ m', '$90$ m'],
    correctIndex: 2,
    explanation: 'Reaction distance is $20(0.5) = 10$ m and braking distance is $v_0^2/(2a) = 400/10 = 40$ m, for $50$ m in all.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pc1d-ent-7b',
    question: 'A particle has $a(t) = 2t - 6$ m/s$^2$ and $v(0) = 8$ m/s. What total distance does it travel from $t = 0$ to $t = 4$ s?',
    options: ['$5.3$ m', '$8.0$ m', '$6.7$ m', '$9.3$ m'],
    correctIndex: 1,
    explanation: '$v = t^2 - 6t + 8 = (t - 2)(t - 4)$, so the particle moves forward $20/3$ m until $t = 2$ s and back $4/3$ m by $t = 4$ s. Distance $= 24/3 = 8.0$ m, while $5.3$ m is the net displacement.',
    partNumber: 7,
    partTitle: P[6],
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return P.map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
