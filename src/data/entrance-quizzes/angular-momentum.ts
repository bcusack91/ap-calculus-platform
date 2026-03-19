import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Definition of Angular Momentum
  {
    id: 'am-ent-1a',
    question: 'Angular momentum for a rotating object is defined as:',
    options: ['$L = mv$', '$L = I\\omega$', '$L = I\\alpha$', '$L = mr$'],
    correctIndex: 1,
    explanation: 'Angular momentum $L = I\\omega$, where $I$ is the moment of inertia and $\\omega$ is the angular velocity.',
    partNumber: 1,
    partTitle: 'Definition of Angular Momentum',
  },
  {
    id: 'am-ent-1b',
    question: 'The SI unit of angular momentum is:',
    options: ['kg·m/s', 'kg·m²/s', 'N·m', 'J·s'],
    correctIndex: 1,
    explanation: 'From $L = I\\omega$: units are (kg·m²)(rad/s) = kg·m²/s.',
    partNumber: 1,
    partTitle: 'Definition of Angular Momentum',
  },

  // Part 2: Angular Momentum of a Particle
  {
    id: 'am-ent-2a',
    question: 'The angular momentum of a particle moving in a straight line at distance $r$ from a point is:',
    options: ['$L = mvr\\cos\\theta$', '$L = mvr\\sin\\theta$', '$L = mv/r$', '$L = mr^2$'],
    correctIndex: 1,
    explanation: 'For a particle: $L = mvr\\sin\\theta = mvr_{\\perp}$, where $\\theta$ is the angle between $\\vec{r}$ and $\\vec{v}$.',
    partNumber: 2,
    partTitle: 'Angular Momentum of a Particle',
  },
  {
    id: 'am-ent-2b',
    question: 'A $2$ kg ball moves at $3$ m/s in a circle of radius $0.5$ m. Its angular momentum is:',
    options: ['$1$ kg·m²/s', '$1.5$ kg·m²/s', '$3$ kg·m²/s', '$6$ kg·m²/s'],
    correctIndex: 2,
    explanation: 'For circular motion, $\\vec{v} \\perp \\vec{r}$, so $L = mvr = 2(3)(0.5) = 3$ kg·m²/s.',
    partNumber: 2,
    partTitle: 'Angular Momentum of a Particle',
  },

  // Part 3: Conservation of Angular Momentum
  {
    id: 'am-ent-3a',
    question: 'Angular momentum is conserved when:',
    options: ['Net force is zero', 'Net torque is zero', 'Energy is conserved', 'Velocity is constant'],
    correctIndex: 1,
    explanation: 'Angular momentum is conserved when the net external torque on the system is zero: $\\tau_{net} = 0 \\Rightarrow L = \\text{constant}$.',
    partNumber: 3,
    partTitle: 'Conservation of Angular Momentum',
  },
  {
    id: 'am-ent-3b',
    question: 'An ice skater pulls in their arms while spinning. Their angular velocity:',
    options: ['Decreases', 'Stays the same', 'Increases', 'Drops to zero'],
    correctIndex: 2,
    explanation: 'Pulling in arms decreases $I$. Since $L = I\\omega$ is conserved (no external torque), $\\omega$ must increase.',
    partNumber: 3,
    partTitle: 'Conservation of Angular Momentum',
  },

  // Part 4: Changing Moment of Inertia
  {
    id: 'am-ent-4a',
    question: 'A spinning disk with $I = 4$ kg·m² at $\\omega = 6$ rad/s has a mass added so $I$ becomes $8$ kg·m². The new $\\omega$ is:',
    options: ['$12$ rad/s', '$6$ rad/s', '$3$ rad/s', '$1.5$ rad/s'],
    correctIndex: 2,
    explanation: '$L = I_1\\omega_1 = I_2\\omega_2$. $4(6) = 8\\omega_2$. $\\omega_2 = 3$ rad/s.',
    partNumber: 4,
    partTitle: 'Changing Moment of Inertia',
  },
  {
    id: 'am-ent-4b',
    question: 'A diver tucks into a ball during a somersault to:',
    options: [
      'Decrease angular momentum',
      'Increase angular momentum',
      'Spin faster by reducing moment of inertia',
      'Spin slower by increasing moment of inertia',
    ],
    correctIndex: 2,
    explanation: 'Tucking reduces the moment of inertia. With angular momentum conserved, the angular velocity increases and the diver spins faster.',
    partNumber: 4,
    partTitle: 'Changing Moment of Inertia',
  },

  // Part 5: Torque & Angular Momentum
  {
    id: 'am-ent-5a',
    question: 'The rotational analog of $F = dp/dt$ is:',
    options: ['$\\tau = I\\alpha$', '$\\tau = dL/dt$', '$F = ma$', '$L = I\\omega$'],
    correctIndex: 1,
    explanation: 'Net torque equals the rate of change of angular momentum: $\\tau_{net} = dL/dt$.',
    partNumber: 5,
    partTitle: 'Torque & Angular Momentum',
  },
  {
    id: 'am-ent-5b',
    question: 'A constant torque of $6$ N·m acts on a wheel for $2$ s. The change in angular momentum is:',
    options: ['$3$ kg·m²/s', '$6$ kg·m²/s', '$12$ kg·m²/s', '$36$ kg·m²/s'],
    correctIndex: 2,
    explanation: '$\\Delta L = \\tau \\Delta t = 6 \\times 2 = 12$ kg·m²/s.',
    partNumber: 5,
    partTitle: 'Torque & Angular Momentum',
  },

  // Part 6: Rotational Kinetic Energy
  {
    id: 'am-ent-6a',
    question: 'The rotational kinetic energy of a spinning object is:',
    options: ['$\\frac{1}{2}mv^2$', '$I\\omega$', '$\\frac{1}{2}I\\omega^2$', '$I\\alpha$'],
    correctIndex: 2,
    explanation: 'Rotational KE = $\\frac{1}{2}I\\omega^2$, analogous to translational $\\frac{1}{2}mv^2$.',
    partNumber: 6,
    partTitle: 'Rotational Kinetic Energy',
  },
  {
    id: 'am-ent-6b',
    question: 'When a skater pulls in their arms and spins faster (conserving angular momentum), the rotational kinetic energy:',
    options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'],
    correctIndex: 2,
    explanation: '$KE = \\frac{1}{2}I\\omega^2 = \\frac{L^2}{2I}$. Since $L$ is constant and $I$ decreases, $KE$ increases. The extra energy comes from the work done by the skater\'s muscles.',
    partNumber: 6,
    partTitle: 'Rotational Kinetic Energy',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'am-ent-7a',
    question: 'A merry-go-round spins freely. A child walks from the edge toward the center. Which quantity is conserved?',
    options: ['Angular velocity', 'Rotational kinetic energy', 'Angular momentum', 'Moment of inertia'],
    correctIndex: 2,
    explanation: 'No external torque acts on the system. Angular momentum is conserved. As the child moves inward, $I$ decreases and $\\omega$ increases.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'am-ent-7b',
    question: 'Earth\'s rotation is gradually slowing due to tidal friction from the Moon. As a result, the Moon is:',
    options: [
      'Moving closer to Earth',
      'Moving farther from Earth',
      'Staying at the same distance',
      'Speeding up its own rotation',
    ],
    correctIndex: 1,
    explanation: 'By conservation of angular momentum for the Earth-Moon system, as Earth\'s spin angular momentum decreases, the Moon\'s orbital angular momentum increases, causing it to spiral outward.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of Angular Momentum' },
    { partNumber: 2, partTitle: 'Angular Momentum of a Particle' },
    { partNumber: 3, partTitle: 'Conservation of Angular Momentum' },
    { partNumber: 4, partTitle: 'Changing Moment of Inertia' },
    { partNumber: 5, partTitle: 'Torque & Angular Momentum' },
    { partNumber: 6, partTitle: 'Rotational Kinetic Energy' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
