/**
 * Entrance Quiz — AP Physics C: Mechanics, Angular Momentum
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Angular Momentum of a Particle',
  'Angular Momentum of Rigid Bodies',
  'Torque & dL/dt',
  'Conservation of Angular Momentum',
  'Angular Impulse from Graphs and Angular Momentum Exchange',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcam-ent-1a',
    question: 'A $2$ kg particle is at $\\vec{r} = (2\\hat{x} + 3\\hat{y})$ m with velocity $\\vec{v} = (4\\hat{x} - \\hat{y})$ m/s. What is its angular momentum about the origin?',
    options: [
      '$28\\hat{z}$ kg$\\cdot$m$^2$/s',
      '$20\\hat{z}$ kg$\\cdot$m$^2$/s',
      '$-28\\hat{z}$ kg$\\cdot$m$^2$/s',
      '$10\\hat{z}$ kg$\\cdot$m$^2$/s',
    ],
    correctIndex: 2,
    explanation: '$L_z = m(xv_y - yv_x) = 2[(2)(-1) - (3)(4)] = -28$ kg$\\cdot$m$^2$/s, so $\\vec{L} = -28\\hat{z}$ kg$\\cdot$m$^2$/s (clockwise as seen from $+z$).',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcam-ent-1b',
    question: 'A $1200$ kg car drives at a constant $20$ m/s along a straight road whose closest point is $50$ m from a lamppost. When the car is $120$ m past that closest point, what is its angular momentum about the lamppost?',
    options: [
      '$1.2 \\times 10^6$ kg$\\cdot$m$^2$/s',
      '$3.1 \\times 10^6$ kg$\\cdot$m$^2$/s',
      '$2.9 \\times 10^6$ kg$\\cdot$m$^2$/s',
      '$2.4 \\times 10^4$ kg$\\cdot$m$^2$/s',
    ],
    correctIndex: 0,
    explanation: '$L = mvr_\\perp$, and the perpendicular distance from the lamppost to the line of motion is always $50$ m: $L = 1200(20)(50) = 1.2 \\times 10^6$ kg$\\cdot$m$^2$/s. Using the $130$ m straight-line distance gives $3.1 \\times 10^6$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcam-ent-2a',
    question: 'A uniform $3.0$ kg rod, $2.0$ m long, spins at $4.0$ rad/s about a perpendicular axis $0.50$ m from one end. What is its angular momentum about that axis?',
    options: ['$4.0$ kg$\\cdot$m$^2$/s', '$7.0$ kg$\\cdot$m$^2$/s', '$16.0$ kg$\\cdot$m$^2$/s', '$31.0$ kg$\\cdot$m$^2$/s'],
    correctIndex: 1,
    explanation: 'The axis is $0.50$ m from the center, so $I = \\frac{1}{12}(3.0)(2.0)^2 + 3.0(0.50)^2 = 1.75$ kg$\\cdot$m$^2$ and $L = I\\omega = 7.0$ kg$\\cdot$m$^2$/s. Using $I$ about the center gives $4.0$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcam-ent-2b',
    question: 'A thin hoop of mass $M$ and radius $R$ rolls without slipping at speed $v$. What is its angular momentum about the point where it touches the ground?',
    options: ['$MvR$', '$\\frac{3}{2}MvR$', '$\\frac{7}{5}MvR$', '$2MvR$'],
    correctIndex: 3,
    explanation: 'Add the orbital part $MvR$ (center of mass moving at $v$, a height $R$ above the contact point) and the spin part $I_{cm}\\omega = MR^2(v/R) = MvR$, for $2MvR$. Equivalently, $I_{contact} = 2MR^2$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcam-ent-3a',
    question: 'A wheel with $I = 2.0$ kg$\\cdot$m$^2$ spins at $6.0$ rad/s. A constant $4.0$ N$\\cdot$m torque then acts in the direction of its spin for $2.0$ s. What is its new angular speed?',
    options: ['$10$ rad/s', '$4$ rad/s', '$2$ rad/s', '$8$ rad/s'],
    correctIndex: 0,
    explanation: 'The angular impulse is $\\tau\\,\\Delta t = 8.0$ kg$\\cdot$m$^2$/s, added to the initial $L = 12$ kg$\\cdot$m$^2$/s. So $L = 20$ and $\\omega = 20/2.0 = 10$ rad/s. Leaving out the starting spin gives $4$ rad/s.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcam-ent-3b',
    question: 'A force $\\vec{F} = (3\\hat{x} + 4\\hat{y})$ N acts at position $\\vec{r} = (2\\hat{x} + \\hat{y})$ m. What torque does it exert about the origin?',
    options: ['$-5\\hat{z}$ N$\\cdot$m', '$5\\hat{z}$ N$\\cdot$m', '$11\\hat{z}$ N$\\cdot$m', '$-11\\hat{z}$ N$\\cdot$m'],
    correctIndex: 1,
    explanation: '$\\tau_z = xF_y - yF_x = (2)(4) - (1)(3) = 5$ N$\\cdot$m, so $\\vec{\\tau} = 5\\hat{z}$ N$\\cdot$m. Adding the two products instead of subtracting gives $11$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcam-ent-4a',
    question: 'A $0.020$ kg bullet moving at $300$ m/s strikes and embeds in the free end of a uniform $1.5$ kg rod, $1.2$ m long, hanging from a pivot at its top end. The bullet\'s path is horizontal and perpendicular to the rod. What is the rod\'s angular speed just afterward?',
    options: ['$10.0$ rad/s', '$34.5$ rad/s', '$9.6$ rad/s', '$3.3$ rad/s'],
    correctIndex: 2,
    explanation: 'About the pivot, $L = (0.020)(300)(1.2) = 7.2$ kg$\\cdot$m$^2$/s is conserved. Afterward $I = \\frac{1}{3}(1.5)(1.2)^2 + (0.020)(1.2)^2 \\approx 0.749$ kg$\\cdot$m$^2$, so $\\omega \\approx 9.6$ rad/s. Leaving out the bullet gives $10.0$ rad/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcam-ent-4b',
    question: 'A comet at its closest approach is $1.0$ AU from the Sun, moving at $40$ km/s. Its farthest point is $5.0$ AU from the Sun. How fast does it move there?',
    options: ['$40$ km/s', '$1.6$ km/s', '$18$ km/s', '$8$ km/s'],
    correctIndex: 3,
    explanation: 'Gravity exerts no torque about the Sun, and at both extremes $\\vec{v} \\perp \\vec{r}$, so $r_1v_1 = r_2v_2$: $v_2 = 40(1.0)/5.0 = 8$ km/s. Dividing by $5^2$ gives $1.6$ km/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcam-ent-5a',
    question: 'A wheel ($I = 2.0$ kg$\\cdot$m$^2$) spins at $1.0$ rad/s. A torque then acts in its direction of spin, rising linearly from $0$ to $6.0$ N$\\cdot$m over $3.0$ s and staying at $6.0$ N$\\cdot$m until $t = 5.0$ s. From $5.0$ s to $6.0$ s the torque is $-6.0$ N$\\cdot$m. What is the angular speed at $6.0$ s?',
    options: ['$8.5$ rad/s', '$7.5$ rad/s', '$14.5$ rad/s', '$13.0$ rad/s'],
    correctIndex: 0,
    explanation: 'The net area under the $\\tau$-$t$ graph is $9 + 12 - 6 = 15$ N$\\cdot$m$\\cdot$s. Then $L = 2.0 + 15 = 17$ kg$\\cdot$m$^2$/s and $\\omega = 8.5$ rad/s. Counting the negative area as positive gives $14.5$ rad/s.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcam-ent-5b',
    question: 'A spinning disk A is pressed against disk B, initially at rest, on the same frictionless axle until they turn together. Taking disk A alone as the system, what happens to its angular momentum during the coupling?',
    options: [
      'It stays constant, because friction is internal',
      'It increases, because B speeds up',
      'It decreases, because friction from B is an external torque on A',
      'It stays constant, because the axle is frictionless',
    ],
    correctIndex: 2,
    explanation: 'For A alone, B\'s friction torque comes from outside the system and opposes A\'s spin, so $L_A$ falls. B gains exactly what A loses, and only the total $L_A + L_B$ is constant.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcam-ent-6a',
    question: 'A turntable with $I = 0.80$ kg$\\cdot$m$^2$ spins freely at $3.0$ rad/s. A $0.50$ kg lump of clay is dropped straight down onto it and sticks $0.40$ m from the axis. What is the new angular speed?',
    options: ['$3.00$ rad/s', '$2.73$ rad/s', '$2.40$ rad/s', '$3.30$ rad/s'],
    correctIndex: 1,
    explanation: 'The falling clay has no angular momentum about the axis, so $0.80(3.0) = (0.80 + 0.50 \\times 0.40^2)\\omega$, giving $\\omega = 2.4/0.88 \\approx 2.73$ rad/s.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcam-ent-6b',
    question: 'A uniform rod of length $L$, pivoted at one end, is released from rest in a horizontal position and swings down. What is its angular acceleration at the instant it hangs vertically?',
    options: ['$\\frac{3g}{2L}$', '$\\frac{3g}{L}$', '$\\frac{g}{L}$', '$0$'],
    correctIndex: 3,
    explanation: 'When the rod hangs vertically, gravity acts along the rod through the pivot, so its torque is zero and $\\alpha = 0$. That is where the angular speed is greatest. The value $\\frac{3g}{2L}$ is the angular acceleration at release.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcam-ent-7a',
    question: 'A star spinning once every $50$ days collapses, with no external torque, to $1/5$ of its radius while keeping its shape. What is its new rotation period?',
    options: ['$2$ days', '$10$ days', '$50$ days', '$0.4$ days'],
    correctIndex: 0,
    explanation: 'For the same shape, $I \\propto R^2$, so $I$ falls by $25$ and $\\omega$ rises by $25$. The period becomes $50/25 = 2$ days. Scaling by $5$ instead of $5^2$ gives $10$ days.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcam-ent-7b',
    question: 'Disk A ($I = 2.0$ kg$\\cdot$m$^2$) spins at $+3.0$ rad/s and disk B ($I = 3.0$ kg$\\cdot$m$^2$) spins at $-4.0$ rad/s on the same axle. They are pressed together until they turn as one. What is the common angular velocity?',
    options: ['$1.2$ rad/s', '$3.6$ rad/s', '$-1.2$ rad/s', '$0.5$ rad/s'],
    correctIndex: 2,
    explanation: 'Total angular momentum is $2.0(3.0) + 3.0(-4.0) = -6.0$ kg$\\cdot$m$^2$/s, so $\\omega = -6.0/5.0 = -1.2$ rad/s, in B\'s original direction. Ignoring the signs gives $3.6$ rad/s.',
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
