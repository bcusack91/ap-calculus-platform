/**
 * Entrance Quiz — AP Physics C: Mechanics, Rotational Dynamics
 * 14 questions, 2 per lesson part. Getting both items for a part right marks that part mastered.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P = [
  'Angular Kinematics',
  'Moment of Inertia',
  'Torque',
  'Angular Momentum',
  'Rolling Motion',
  'Problem-Solving Workshop',
  'Review & Applications',
]

const questions: EntranceQuizQuestion[] = [
  {
    id: 'pcrd-ent-1a',
    question: 'A wheel\'s angular position is $\\theta(t) = 2t^3 - 6t$ (radians, seconds). What is its angular acceleration at $t = 2$ s?',
    options: ['$24$ rad/s$^2$', '$18$ rad/s$^2$', '$4$ rad/s$^2$', '$12$ rad/s$^2$'],
    correctIndex: 0,
    explanation: '$\\omega = d\\theta/dt = 6t^2 - 6$ and $\\alpha = d\\omega/dt = 12t$, which is $24$ rad/s$^2$ at $t = 2$ s. The value $18$ is $\\omega(2)$ in rad/s.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrd-ent-1b',
    question: 'A wheel spinning at $20$ rad/s slows uniformly and stops after turning through $10$ revolutions. What is the magnitude of its angular acceleration?',
    options: ['$20.0$ rad/s$^2$', '$3.18$ rad/s$^2$', '$6.37$ rad/s$^2$', '$1.59$ rad/s$^2$'],
    correctIndex: 1,
    explanation: 'Ten revolutions is $20\\pi$ rad, so $\\alpha = \\omega_0^2/(2\\theta) = 400/(40\\pi) \\approx 3.18$ rad/s$^2$. Using $10$ as if it were radians gives $20.0$ rad/s$^2$.',
    partNumber: 1,
    partTitle: P[0],
  },
  {
    id: 'pcrd-ent-2a',
    question: 'A uniform rod of mass $M$ and length $L$ has $I_{cm} = \\frac{1}{12}ML^2$ about its center. What is its rotational inertia about an axis through one end, perpendicular to the rod?',
    options: ['$\\frac{1}{12}ML^2$', '$\\frac{7}{12}ML^2$', '$\\frac{1}{3}ML^2$', '$\\frac{13}{12}ML^2$'],
    correctIndex: 2,
    explanation: 'The parallel-axis theorem adds $Md^2$ with $d = L/2$: $\\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1}{3}ML^2$. Using $d = L$ gives $\\frac{13}{12}ML^2$.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrd-ent-2b',
    question: 'A rod of length $L$ and total mass $M$ has linear density $\\lambda = kx$, where $x$ is measured from one end. What is its rotational inertia about that end?',
    options: ['$\\frac{1}{3}ML^2$', '$\\frac{1}{4}ML^2$', '$\\frac{2}{3}ML^2$', '$\\frac{1}{2}ML^2$'],
    correctIndex: 3,
    explanation: '$I = \\int_0^L x^2(kx)\\,dx = kL^4/4$ and $M = \\int_0^L kx\\,dx = kL^2/2$, so $I = \\frac{1}{2}ML^2$. That is more than the uniform rod\'s $\\frac{1}{3}ML^2$ because the mass is concentrated far from the axis.',
    partNumber: 2,
    partTitle: P[1],
  },
  {
    id: 'pcrd-ent-3a',
    question: 'A uniform $1.5$ m rod is hinged at one end and held horizontal, then released. What is its angular acceleration at the instant of release? (Use $g = 10$ m/s$^2$.)',
    options: ['$40$ rad/s$^2$', '$10$ rad/s$^2$', '$20$ rad/s$^2$', '$6.7$ rad/s$^2$'],
    correctIndex: 1,
    explanation: 'Gravity acts at the center, so $\\tau = MgL/2$, and about the hinge $I = \\frac{1}{3}ML^2$. Then $\\alpha = 3g/(2L) = 10$ rad/s$^2$. Using $I$ about the center gives $40$ rad/s$^2$.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrd-ent-3b',
    question: 'A $30$ N force pulls on the end of a $0.40$ m wrench, directed at $30°$ to the wrench handle. What torque does it produce about the bolt?',
    options: ['$6$ N$\\cdot$m', '$10$ N$\\cdot$m', '$12$ N$\\cdot$m', '$24$ N$\\cdot$m'],
    correctIndex: 0,
    explanation: 'Only the component perpendicular to the handle produces torque: $\\tau = rF\\sin\\theta = (0.40)(30)(0.5) = 6$ N$\\cdot$m. Using $\\cos 30°$ gives about $10$ N$\\cdot$m.',
    partNumber: 3,
    partTitle: P[2],
  },
  {
    id: 'pcrd-ent-4a',
    question: 'A $3$ kg particle moves at $4$ m/s in the $+x$ direction along the line $y = 2$ m. At the moment it is at $x = 5$ m, what is the magnitude of its angular momentum about the origin?',
    options: ['$60$ kg$\\cdot$m$^2$/s', '$65$ kg$\\cdot$m$^2$/s', '$12$ kg$\\cdot$m$^2$/s', '$24$ kg$\\cdot$m$^2$/s'],
    correctIndex: 3,
    explanation: '$L = mvr_\\perp$, where $r_\\perp = 2$ m is the perpendicular distance from the origin to the line of motion: $L = 3(4)(2) = 24$ kg$\\cdot$m$^2$/s. It stays $24$ wherever the particle is on that line.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrd-ent-4b',
    question: 'A uniform $0.60$ kg rod, $1.0$ m long, can turn freely about a vertical axle through its center and starts at rest. A $0.050$ kg lump of clay moving at $8.0$ m/s, perpendicular to the rod, hits one end and sticks. What is the angular speed just afterward?',
    options: ['$4.0$ rad/s', '$2.7$ rad/s', '$3.2$ rad/s', '$0.9$ rad/s'],
    correctIndex: 2,
    explanation: 'Angular momentum about the axle is conserved: $L = (0.050)(8.0)(0.50) = 0.20$ kg$\\cdot$m$^2$/s. Afterward $I = \\frac{1}{12}(0.60)(1.0)^2 + (0.050)(0.50)^2 = 0.0625$ kg$\\cdot$m$^2$, so $\\omega = 3.2$ rad/s. Leaving the clay out of $I$ gives $4.0$ rad/s.',
    partNumber: 4,
    partTitle: P[3],
  },
  {
    id: 'pcrd-ent-5a',
    question: 'A thin-walled hollow sphere ($I = \\frac{2}{3}mR^2$) rolls without slipping from rest down a ramp, dropping $3.0$ m in height. What is its speed at the bottom? (Use $g = 10$ m/s$^2$.)',
    options: ['$6.0$ m/s', '$7.7$ m/s', '$6.5$ m/s', '$5.5$ m/s'],
    correctIndex: 0,
    explanation: '$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\frac{2}{3}mR^2)(v/R)^2 = \\frac{5}{6}mv^2$, so $v = \\sqrt{6gh/5} = \\sqrt{36} = 6.0$ m/s. Ignoring rotation gives $7.7$ m/s.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrd-ent-5b',
    question: 'A solid ball rolls without slipping down an incline. Which describes the static friction force on it?',
    options: [
      'Points down the slope and speeds it up',
      'Points up the slope and does no work',
      'Points up the slope and removes energy',
      'Is zero because the ball does not slip',
    ],
    correctIndex: 1,
    explanation: 'Friction acts up the slope to supply the torque that spins the ball up. The contact point is momentarily at rest, so static friction does no work and mechanical energy is conserved.',
    partNumber: 5,
    partTitle: P[4],
  },
  {
    id: 'pcrd-ent-6a',
    question: 'An Atwood machine hangs $3$ kg and $1$ kg masses from a string over a pulley that is a uniform $4$ kg disk ($I = \\frac{1}{2}MR^2$). The string does not slip. What is the acceleration of the masses? (Use $g = 10$ m/s$^2$.)',
    options: ['$5.00$ m/s$^2$', '$2.50$ m/s$^2$', '$3.33$ m/s$^2$', '$4.00$ m/s$^2$'],
    correctIndex: 2,
    explanation: 'With $\\alpha = a/R$, the pulley adds $I/R^2 = M/2 = 2$ kg of effective inertia: $a = (3 - 1)(10)/(3 + 1 + 2) \\approx 3.33$ m/s$^2$. A massless pulley would give $5.00$ m/s$^2$.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrd-ent-6b',
    question: 'A block hangs from a light string wrapped around a pulley that has rotational inertia and turns on a frictionless axle. Released from rest, the block falls. How does the string tension compare with the block\'s weight?',
    options: [
      'Equal to its weight, since the string is taut',
      'Greater than its weight',
      'Zero, since the pulley turns freely',
      'Less than its weight, since it accelerates downward',
    ],
    correctIndex: 3,
    explanation: 'The tension must be nonzero to give the pulley its angular acceleration ($TR = I\\alpha$). The block\'s acceleration is downward, so $mg - T = ma > 0$ and the tension is less than the weight.',
    partNumber: 6,
    partTitle: P[5],
  },
  {
    id: 'pcrd-ent-7a',
    question: 'A merry-go-round with $I = 400$ kg$\\cdot$m$^2$ spins at $1.5$ rad/s with a $40$ kg child standing at its rim, $2.5$ m from the axis. The child walks to the center. What is the new angular speed?',
    options: ['$0.92$ rad/s', '$2.44$ rad/s', '$1.50$ rad/s', '$1.88$ rad/s'],
    correctIndex: 1,
    explanation: 'With no external torque, $L$ is conserved: $I_i = 400 + 40(2.5)^2 = 650$ kg$\\cdot$m$^2$ and $I_f = 400$ kg$\\cdot$m$^2$, so $\\omega_f = 650(1.5)/400 \\approx 2.44$ rad/s.',
    partNumber: 7,
    partTitle: P[6],
  },
  {
    id: 'pcrd-ent-7b',
    question: 'A spinning skater pulls her arms in, reducing her rotational inertia from $4.0$ to $1.6$ kg$\\cdot$m$^2$. What happens to her rotational kinetic energy?',
    options: [
      'Grows by a factor of $2.5$',
      'Stays the same, since $L$ is conserved',
      'Grows by a factor of $6.25$',
      'Shrinks by a factor of $2.5$',
    ],
    correctIndex: 0,
    explanation: 'Angular momentum is conserved, and $K = L^2/(2I)$. With $L$ fixed and $I$ divided by $2.5$, $K$ is multiplied by $2.5$; her muscles do the extra work.',
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
