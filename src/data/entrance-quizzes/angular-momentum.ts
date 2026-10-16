/**
 * Entrance Quiz — Angular Momentum — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Angular Momentum (L = Iω)
  {
    id: 'am-ent-1a',
    question: 'A solid disk of mass 3.0 kg and radius 0.40 m spins at 5.0 rad/s about its central axis. What is its angular momentum? ($I_{\\text{disk}} = \\frac{1}{2}MR^2$)',
    options: [
      '$2.4\\text{ kg}\\cdot\\text{m}^2\\text{/s}$',
      '$6.0\\text{ kg}\\cdot\\text{m}^2\\text{/s}$',
      '$3.0\\text{ kg}\\cdot\\text{m}^2\\text{/s}$',
      '$1.2\\text{ kg}\\cdot\\text{m}^2\\text{/s}$',
    ],
    correctIndex: 3,
    explanation: '$I = \\frac{1}{2}(3.0)(0.40)^2 = 0.24\\text{ kg}\\cdot\\text{m}^2$, so $L = I\\omega = 0.24(5.0) = 1.2\\text{ kg}\\cdot\\text{m}^2\\text{/s}$. Dropping the $\\frac{1}{2}$ gives 2.4, and using $R$ instead of $R^2$ gives 3.0.',
    partNumber: 1,
    partTitle: 'Angular Momentum (L = Iω)',
  },
  {
    id: 'am-ent-1b',
    question: 'A small ball on a string moves in a horizontal circle. The string is lengthened to twice the radius while the ball\'s speed stays the same. What happens to the ball\'s angular momentum about the center?',
    options: [
      'It doubles',
      'It quadruples',
      'It stays the same',
      'It is cut in half',
    ],
    correctIndex: 0,
    explanation: 'For a point mass, $L = mvr$; with $m$ and $v$ fixed, doubling $r$ doubles $L$. (Equivalently, $I = mr^2$ quadruples while $\\omega = v/r$ halves.)',
    partNumber: 1,
    partTitle: 'Angular Momentum (L = Iω)',
  },
  // Part 2 — Newton's Second Law for Rotation
  {
    id: 'am-ent-2a',
    question: 'A light string is wrapped around a solid cylinder of mass 4.0 kg and radius 0.25 m that turns on a frictionless fixed axle. The string is pulled with a constant tangential force of 6.0 N. What is the cylinder\'s angular acceleration? ($I_{\\text{cylinder}} = \\frac{1}{2}MR^2$)',
    options: [
      '$6.0\\text{ rad/s}^2$',
      '$12\\text{ rad/s}^2$',
      '$48\\text{ rad/s}^2$',
      '$1.5\\text{ rad/s}^2$',
    ],
    correctIndex: 1,
    explanation: '$I = \\frac{1}{2}(4.0)(0.25)^2 = 0.125\\text{ kg}\\cdot\\text{m}^2$ and $\\tau = FR = 6.0(0.25) = 1.5$ N·m, so $\\alpha = \\tau/I = 12\\text{ rad/s}^2$. Leaving out the $\\frac{1}{2}$ gives 6.0, and using the force itself as the torque gives 48.',
    partNumber: 2,
    partTitle: 'Newton\'s Second Law for Rotation',
  },
  {
    id: 'am-ent-2b',
    question: 'A hoop and a solid disk have the same mass and radius, and each turns on a frictionless axle through its center. Identical strings wrapped around their rims are pulled with the same constant force, starting from rest. After the same time, which has the greater angular speed?',
    options: [
      'Neither, because equal torques produce equal angular accelerations',
      'The hoop, because its mass sits at the rim where the force is applied',
      'The disk, because the same torque gives it a larger angular acceleration',
      'Neither, because equal masses respond the same way to equal forces',
    ],
    correctIndex: 2,
    explanation: 'Both feel the same torque $FR$, but the disk\'s rotational inertia ($\\frac{1}{2}MR^2$) is half the hoop\'s ($MR^2$), so $\\alpha = \\tau/I$ is twice as large for the disk and it reaches a greater angular speed.',
    partNumber: 2,
    partTitle: 'Newton\'s Second Law for Rotation',
  },
  // Part 3 — Rotational Kinetic Energy
  {
    id: 'am-ent-3a',
    question: 'A 2.0 kg solid cylinder rolls without slipping across a level floor at 2.0 m/s. What is its total kinetic energy? ($I_{\\text{cylinder}} = \\frac{1}{2}MR^2$)',
    options: [
      '4.0 J',
      '8.0 J',
      '2.0 J',
      '6.0 J',
    ],
    correctIndex: 3,
    explanation: 'Translational KE is $\\frac{1}{2}(2.0)(2.0)^2 = 4.0$ J, and with $\\omega = v/R$ the rotational KE is $\\frac{1}{2}(\\frac{1}{2}MR^2)(v/R)^2 = 2.0$ J, for 6.0 J in total. The value 4.0 J leaves out rotation, and 8.0 J treats the cylinder as a hoop.',
    partNumber: 3,
    partTitle: 'Rotational Kinetic Energy',
  },
  {
    id: 'am-ent-3b',
    question: 'A constant net torque of 4.0 N·m acts on a wheel with $I = 0.50\\text{ kg}\\cdot\\text{m}^2$, starting from rest, while the wheel turns through 25 rad. What is its final angular speed?',
    options: [
      '20 rad/s',
      '10 rad/s',
      '28 rad/s',
      '14 rad/s',
    ],
    correctIndex: 0,
    explanation: 'The torque does work $\\tau\\theta = 4.0(25) = 100$ J, which becomes $\\frac{1}{2}I\\omega^2$, so $\\omega^2 = 2(100)/0.50 = 400$ and $\\omega = 20$ rad/s. Forgetting the $\\frac{1}{2}$ gives 14 rad/s.',
    partNumber: 3,
    partTitle: 'Rotational Kinetic Energy',
  },
  // Part 4 — Conservation of Angular Momentum
  {
    id: 'am-ent-4a',
    question: 'Counterclockwise is positive. A turntable with $I = 0.60\\text{ kg}\\cdot\\text{m}^2$ spins at $+4.0$ rad/s. A disk with $I = 0.20\\text{ kg}\\cdot\\text{m}^2$ spinning at $-2.0$ rad/s is dropped onto it on the same axis, and the two end up turning together. What is their final angular velocity?',
    options: [
      '$+3.5$ rad/s',
      '$+2.5$ rad/s',
      '$+3.0$ rad/s',
      '$+1.0$ rad/s',
    ],
    correctIndex: 1,
    explanation: 'With no external torque about the axis, $L$ is conserved: $0.60(4.0) + 0.20(-2.0) = 2.0\\text{ kg}\\cdot\\text{m}^2\\text{/s}$, shared by $I = 0.80$, so $\\omega = +2.5$ rad/s. Treating the disk\'s spin as positive gives 3.5, and ignoring it gives 3.0.',
    partNumber: 4,
    partTitle: 'Conservation of Angular Momentum',
  },
  {
    id: 'am-ent-4b',
    question: 'A student stands at the center of a platform that rotates freely on a frictionless bearing. She walks outward to the rim. What happens to the platform-and-student system?',
    options: [
      'It turns more slowly, and its kinetic energy stays the same',
      'It turns more slowly, but it gains kinetic energy',
      'It turns more slowly and loses kinetic energy',
      'Its rotation rate and kinetic energy both stay the same',
    ],
    correctIndex: 2,
    explanation: 'Moving outward raises $I$, so with $L$ conserved $\\omega$ drops. Since $KE = L^2/2I$, a larger $I$ at constant $L$ means less kinetic energy; her legs do negative work as she walks out.',
    partNumber: 4,
    partTitle: 'Conservation of Angular Momentum',
  },
  // Part 5 — Figure Skater & Collapsing Star Examples
  {
    id: 'am-ent-5a',
    question: 'A diver leaves the board turning at 2.5 rad/s with $I = 12\\text{ kg}\\cdot\\text{m}^2$, then tucks to $I = 4.0\\text{ kg}\\cdot\\text{m}^2$. What is her angular speed in the tuck, and how does her rotational kinetic energy compare with before?',
    options: [
      '7.5 rad/s, with the same kinetic energy',
      '7.5 rad/s, with nine times the kinetic energy',
      '0.83 rad/s, with one-third the kinetic energy',
      '7.5 rad/s, with three times the kinetic energy',
    ],
    correctIndex: 3,
    explanation: 'Conserving $L$: $\\omega = (12/4.0)(2.5) = 7.5$ rad/s. Then $KE = \\frac{1}{2}I\\omega^2$ changes by $(1/3)(3)^2 = 3$, so it triples; her muscles supply the extra energy as she pulls in.',
    partNumber: 5,
    partTitle: 'Figure Skater & Collapsing Star Examples',
  },
  {
    id: 'am-ent-5b',
    question: 'A spinning star\'s core, roughly a uniform sphere of radius $R$ with rotation period $T$, collapses with no loss of mass and no external torque to a uniform sphere of radius $R/100$. What is its new rotation period?',
    options: [
      '$T/10^4$',
      '$T/10^2$',
      '$T/10^6$',
      '$10^4 T$',
    ],
    correctIndex: 0,
    explanation: '$I \\propto MR^2$, so shrinking $R$ by 100 cuts $I$ by $10^4$. Conserving $L = I\\omega$ raises $\\omega$ by $10^4$, so the period becomes $T/10^4$.',
    partNumber: 5,
    partTitle: 'Figure Skater & Collapsing Star Examples',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'am-ent-6a',
    question: 'A turntable with $I = 0.30\\text{ kg}\\cdot\\text{m}^2$ spins freely at 10 rad/s. A ring with $I = 0.20\\text{ kg}\\cdot\\text{m}^2$, initially not rotating, is dropped onto it on the same axis, and they turn together. How much kinetic energy is lost?',
    options: [
      '0.0 J',
      '6.0 J',
      '9.0 J',
      '15 J',
    ],
    correctIndex: 1,
    explanation: '$L = 0.30(10) = 3.0$, so $\\omega_f = 3.0/0.50 = 6.0$ rad/s. The kinetic energy drops from $\\frac{1}{2}(0.30)(10)^2 = 15$ J to $\\frac{1}{2}(0.50)(6.0)^2 = 9.0$ J, a loss of 6.0 J; kinetic energy is not conserved when the objects stick.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'am-ent-6b',
    question: 'A 1.0 kg block hangs from a light string wrapped around a pulley that is a uniform solid disk of mass 2.0 kg, on a frictionless axle. The block is released from rest. What is its acceleration? Use $g = 10\\text{ m/s}^2$ and $I = \\frac{1}{2}MR^2$.',
    options: [
      '$3.3\\text{ m/s}^2$',
      '$10\\text{ m/s}^2$',
      '$5.0\\text{ m/s}^2$',
      '$2.0\\text{ m/s}^2$',
    ],
    correctIndex: 2,
    explanation: 'For the block, $mg - T = ma$; for the pulley, $TR = \\frac{1}{2}MR^2(a/R)$ gives $T = \\frac{1}{2}Ma$. Adding gives $a = mg/(m + \\frac{1}{2}M) = 10/2.0 = 5.0\\text{ m/s}^2$. Treating the pulley as a hoop gives 3.3, and ignoring it gives free fall.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'am-ent-7a',
    question: 'A child runs tangent to the rim of a stationary merry-go-round that turns on a frictionless axle, and jumps on at the rim. During the landing, what is conserved for the child-plus-merry-go-round system?',
    options: [
      'Linear momentum, since no external force acts',
      'Kinetic energy, but not angular momentum about the axle',
      'Both angular momentum and kinetic energy',
      'Angular momentum about the axle, but not the kinetic energy',
    ],
    correctIndex: 3,
    explanation: 'The axle can push on the system, so linear momentum is not conserved, but that force acts at the axis and exerts no torque, so $L$ about the axle is conserved. Sticking together is a perfectly inelastic rotational collision, so kinetic energy is lost.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'am-ent-7b',
    question: 'A 40 kg child running at 3.0 m/s tangent to the rim of a stationary merry-go-round ($I = 200\\text{ kg}\\cdot\\text{m}^2$, radius 2.0 m, frictionless axle) jumps on at the rim. What is the final angular speed?',
    options: [
      '0.67 rad/s',
      '1.5 rad/s',
      '0.33 rad/s',
      '1.2 rad/s',
    ],
    correctIndex: 0,
    explanation: 'The child\'s angular momentum is $mvr = 40(3.0)(2.0) = 240\\text{ kg}\\cdot\\text{m}^2\\text{/s}$, and the total rotational inertia is $200 + 40(2.0)^2 = 360\\text{ kg}\\cdot\\text{m}^2$, so $\\omega = 240/360 = 0.67$ rad/s. Leaving out the child\'s own rotational inertia gives 1.2 rad/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angular Momentum (L = Iω)' },
    { partNumber: 2, partTitle: 'Newton\'s Second Law for Rotation' },
    { partNumber: 3, partTitle: 'Rotational Kinetic Energy' },
    { partNumber: 4, partTitle: 'Conservation of Angular Momentum' },
    { partNumber: 5, partTitle: 'Figure Skater & Collapsing Star Examples' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
