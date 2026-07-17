import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Angular Position & Displacement
  {
    id: 'rk-ent-1a',
    question: 'Angular displacement is measured in:',
    options: ['Meters', 'Radians', 'Newtons', 'Kilograms'],
    correctIndex: 1,
    explanation: 'Angular displacement $\\Delta\\theta$ is measured in radians (rad). One full revolution = $2\\pi$ rad.',
    partNumber: 1,
    partTitle: 'Angular Position & Displacement',
  },
  {
    id: 'rk-ent-1b',
    question: 'How many radians are in one complete revolution?',
    options: ['$\\pi$', '$2\\pi$', '$\\pi/2$', '$4\\pi$'],
    correctIndex: 1,
    explanation: 'One revolution = $360° = 2\\pi$ radians.',
    partNumber: 1,
    partTitle: 'Angular Position & Displacement',
  },

  // Part 2: Angular Velocity
  {
    id: 'rk-ent-2a',
    question: 'Angular velocity ($\\omega$) is defined as:',
    options: ['$\\Delta\\theta / \\Delta t$', '$\\Delta t / \\Delta\\theta$', '$v \\times r$', '$a / r$'],
    correctIndex: 0,
    explanation: 'Angular velocity is the rate of change of angular position: $\\omega = \\Delta\\theta / \\Delta t$, in rad/s.',
    partNumber: 2,
    partTitle: 'Angular Velocity',
  },
  {
    id: 'rk-ent-2b',
    question: 'A wheel rotates at $600$ rpm. What is its angular velocity in rad/s?',
    options: ['$10\\pi$ rad/s', '$20\\pi$ rad/s', '$600\\pi$ rad/s', '$100$ rad/s'],
    correctIndex: 1,
    explanation: '$600$ rpm $= 600/60 = 10$ rev/s $= 10 \\times 2\\pi = 20\\pi$ rad/s.',
    partNumber: 2,
    partTitle: 'Angular Velocity',
  },

  // Part 3: Angular Acceleration
  {
    id: 'rk-ent-3a',
    question: 'Angular acceleration ($\\alpha$) is:',
    options: ['$\\omega / t$', '$\\Delta\\omega / \\Delta t$', '$\\omega \\times r$', '$v^2/r$'],
    correctIndex: 1,
    explanation: 'Angular acceleration is the rate of change of angular velocity: $\\alpha = \\Delta\\omega / \\Delta t$, in $rad/s^{2}$.',
    partNumber: 3,
    partTitle: 'Angular Acceleration',
  },
  {
    id: 'rk-ent-3b',
    question: 'A wheel accelerates from $10$ rad/s to $30$ rad/s in $4$ s. What is $\\alpha$?',
    options: ['$2.5$ $rad/s^{2}$', '$5$ $rad/s^{2}$', '$7.5$ $rad/s^{2}$', '$10$ $rad/s^{2}$'],
    correctIndex: 1,
    explanation: '$\\alpha = (30 - 10)/4 = 20/4 = 5$ $rad/s^{2}$.',
    partNumber: 3,
    partTitle: 'Angular Acceleration',
  },

  // Part 4: Rotational Kinematic Equations
  {
    id: 'rk-ent-4a',
    question: 'Which rotational kinematic equation is analogous to $v = v_0 + at$?',
    options: ['$\\omega = \\omega_0 + \\alpha t$', '$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$', '$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$', '$\\theta = \\frac{\\omega + \\omega_0}{2}t$'],
    correctIndex: 0,
    explanation: 'The rotational analog of $v = v_0 + at$ is $\\omega = \\omega_0 + \\alpha t$.',
    partNumber: 4,
    partTitle: 'Rotational Kinematic Equations',
  },
  {
    id: 'rk-ent-4b',
    question: 'A wheel starts from rest and accelerates at $4$ $rad/s^{2}$ for $3$ s. How many radians does it rotate?',
    options: ['$6$ rad', '$12$ rad', '$18$ rad', '$36$ rad'],
    correctIndex: 2,
    explanation: '$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 0 + \\frac{1}{2}(4)(9) = 18$ rad.',
    partNumber: 4,
    partTitle: 'Rotational Kinematic Equations',
  },

  // Part 5: Linear-Angular Relationships
  {
    id: 'rk-ent-5a',
    question: 'The relationship between linear velocity $v$ and angular velocity $\\omega$ is:',
    options: ['$v = \\omega / r$', '$v = \\omega r$', '$v = \\omega r^2$', '$v = \\omega + r$'],
    correctIndex: 1,
    explanation: 'For a point at distance $r$ from the rotation axis: $v = \\omega r$.',
    partNumber: 5,
    partTitle: 'Linear-Angular Relationships',
  },
  {
    id: 'rk-ent-5b',
    question: 'Two points on a spinning disk — one on the edge and one halfway out — have the same:',
    options: ['Linear speed', 'Angular velocity', 'Linear acceleration', 'Centripetal force'],
    correctIndex: 1,
    explanation: 'All points on a rigid rotating body have the same angular velocity. Linear speed differs: $v = \\omega r$ (larger $r$ → larger $v$).',
    partNumber: 5,
    partTitle: 'Linear-Angular Relationships',
  },

  // Part 6: Moment of Inertia
  {
    id: 'rk-ent-6a',
    question: 'The rotational analog of mass is called:',
    options: ['Torque', 'Angular momentum', 'Moment of inertia', 'Angular velocity'],
    correctIndex: 2,
    explanation: 'Moment of inertia ($I$) is the rotational analog of mass. It measures resistance to angular acceleration.',
    partNumber: 6,
    partTitle: 'Moment of Inertia',
  },
  {
    id: 'rk-ent-6b',
    question: 'For a point mass $m$ at distance $r$ from the axis, the moment of inertia is:',
    options: ['$mr$', '$mr^2$', '$\\frac{1}{2}mr^2$', '$2mr$'],
    correctIndex: 1,
    explanation: 'For a point mass: $I = mr^2$.',
    partNumber: 6,
    partTitle: 'Moment of Inertia',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'rk-ent-7a',
    question: 'Newton\'s second law for rotation is:',
    options: ['$F = ma$', '$\\tau = I\\alpha$', '$p = mv$', '$L = I\\omega$'],
    correctIndex: 1,
    explanation: 'The rotational form of Newton\'s second law: net torque = moment of inertia × angular acceleration ($\\tau_{net} = I\\alpha$).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'rk-ent-7b',
    question: 'A net torque of $12$ N·m acts on a wheel with $I = 4$ $kg\\cdot m^{2}$. The angular acceleration is:',
    options: ['$0.33$ $rad/s^{2}$', '$3$ $rad/s^{2}$', '$16$ $rad/s^{2}$', '$48$ $rad/s^{2}$'],
    correctIndex: 1,
    explanation: '$\\alpha = \\tau/I = 12/4 = 3$ $rad/s^{2}$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angular Position & Displacement' },
    { partNumber: 2, partTitle: 'Angular Velocity' },
    { partNumber: 3, partTitle: 'Angular Acceleration' },
    { partNumber: 4, partTitle: 'Rotational Kinematic Equations' },
    { partNumber: 5, partTitle: 'Linear-Angular Relationships' },
    { partNumber: 6, partTitle: 'Moment of Inertia' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
