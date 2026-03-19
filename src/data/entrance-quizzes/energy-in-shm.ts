import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Energy in a Mass-Spring System
  {
    id: 'eshm-ent-1a',
    question: 'The total mechanical energy of an ideal mass-spring oscillator in SHM is:',
    options: ['$\\frac{1}{2}mv^2$ only', '$\\frac{1}{2}kx^2$ only', '$\\frac{1}{2}kA^2$ (constant)', 'Variable'],
    correctIndex: 2,
    explanation: 'Total energy = $\\frac{1}{2}kA^2$, where $A$ is the amplitude. It remains constant throughout the motion (no friction).',
    partNumber: 1,
    partTitle: 'Energy in a Mass-Spring System',
  },
  {
    id: 'eshm-ent-1b',
    question: 'At the equilibrium position of a mass-spring oscillator, the energy is:',
    options: ['All potential', 'All kinetic', 'Half kinetic, half potential', 'Zero'],
    correctIndex: 1,
    explanation: 'At equilibrium, $x = 0$, so elastic PE = 0 and all energy is kinetic: $\\frac{1}{2}mv_{max}^2 = \\frac{1}{2}kA^2$.',
    partNumber: 1,
    partTitle: 'Energy in a Mass-Spring System',
  },

  // Part 2: KE and PE as Functions of Position
  {
    id: 'eshm-ent-2a',
    question: 'In SHM, the potential energy as a function of displacement is:',
    options: ['Linear in $x$', 'Proportional to $x^2$', 'Constant', 'Proportional to $x^3$'],
    correctIndex: 1,
    explanation: 'Elastic PE = $\\frac{1}{2}kx^2$, which is a parabolic (quadratic) function of displacement.',
    partNumber: 2,
    partTitle: 'KE and PE vs. Position',
  },
  {
    id: 'eshm-ent-2b',
    question: 'At what displacement is the kinetic energy equal to the potential energy?',
    options: ['$x = 0$', '$x = A$', '$x = A/\\sqrt{2}$', '$x = A/2$'],
    correctIndex: 2,
    explanation: 'When KE = PE, each is half the total: $\\frac{1}{2}kx^2 = \\frac{1}{4}kA^2$. So $x^2 = A^2/2$, giving $x = A/\\sqrt{2}$.',
    partNumber: 2,
    partTitle: 'KE and PE vs. Position',
  },

  // Part 3: Maximum Speed
  {
    id: 'eshm-ent-3a',
    question: 'The maximum speed of a mass in SHM is:',
    options: ['$v_{max} = A\\omega$', '$v_{max} = A/\\omega$', '$v_{max} = \\omega/A$', '$v_{max} = A^2\\omega$'],
    correctIndex: 0,
    explanation: '$v_{max} = A\\omega$, where $\\omega = \\sqrt{k/m}$. This occurs at the equilibrium position.',
    partNumber: 3,
    partTitle: 'Maximum Speed',
  },
  {
    id: 'eshm-ent-3b',
    question: 'A $2$ kg mass on a spring ($k = 50$ N/m) oscillates with amplitude $0.4$ m. What is $v_{max}$?',
    options: ['$1$ m/s', '$2$ m/s', '$4$ m/s', '$10$ m/s'],
    correctIndex: 1,
    explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{50/2} = 5$ rad/s. $v_{max} = A\\omega = 0.4 \\times 5 = 2$ m/s.',
    partNumber: 3,
    partTitle: 'Maximum Speed',
  },

  // Part 4: Energy Graphs
  {
    id: 'eshm-ent-4a',
    question: 'On a graph of energy vs. position for SHM, the KE curve and PE curve:',
    options: [
      'Are both parabolas that add up to a constant total',
      'Are both sinusoidal',
      'Are both linear',
      'Never intersect',
    ],
    correctIndex: 0,
    explanation: 'PE = $\\frac{1}{2}kx^2$ (upward parabola) and KE = $E - \\frac{1}{2}kx^2$ (downward parabola). They sum to the constant total energy $E = \\frac{1}{2}kA^2$.',
    partNumber: 4,
    partTitle: 'Energy Graphs',
  },
  {
    id: 'eshm-ent-4b',
    question: 'On an energy vs. time graph for SHM, KE and PE each oscillate at:',
    options: ['The same frequency as the motion', 'Twice the frequency of the motion', 'Half the frequency', 'They do not oscillate'],
    correctIndex: 1,
    explanation: 'KE and PE depend on $\\sin^2(\\omega t)$ and $\\cos^2(\\omega t)$, which oscillate at frequency $2\\omega/(2\\pi) = 2f$.',
    partNumber: 4,
    partTitle: 'Energy Graphs',
  },

  // Part 5: Pendulum Energy
  {
    id: 'eshm-ent-5a',
    question: 'At the highest point of a pendulum\'s swing, the energy is:',
    options: ['All kinetic', 'All gravitational PE', 'Half KE and half PE', 'Zero'],
    correctIndex: 1,
    explanation: 'At the highest point, the pendulum momentarily stops (KE = 0). All energy is gravitational PE.',
    partNumber: 5,
    partTitle: 'Pendulum Energy',
  },
  {
    id: 'eshm-ent-5b',
    question: 'A pendulum bob has speed $v$ at the bottom. What maximum height does it reach? (Small angle approximation.)',
    options: ['$h = v/g$', '$h = v^2/(2g)$', '$h = v^2/g$', '$h = 2v/g$'],
    correctIndex: 1,
    explanation: '$\\frac{1}{2}mv^2 = mgh \\Rightarrow h = v^2/(2g)$.',
    partNumber: 5,
    partTitle: 'Pendulum Energy',
  },

  // Part 6: Damped Oscillations
  {
    id: 'eshm-ent-6a',
    question: 'In a damped oscillation, the total mechanical energy over time:',
    options: ['Stays constant', 'Increases', 'Decreases', 'Oscillates'],
    correctIndex: 2,
    explanation: 'Damping (friction or drag) converts mechanical energy to thermal energy, so total mechanical energy decreases over time.',
    partNumber: 6,
    partTitle: 'Damped Oscillations',
  },
  {
    id: 'eshm-ent-6b',
    question: 'In a damped spring oscillator, the amplitude over time:',
    options: ['Stays constant', 'Increases', 'Decreases exponentially', 'Increases exponentially'],
    correctIndex: 2,
    explanation: 'Damping causes the amplitude to decrease exponentially. The oscillation gradually dies out.',
    partNumber: 6,
    partTitle: 'Damped Oscillations',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'eshm-ent-7a',
    question: 'A mass oscillates on a spring with amplitude $A$. If the amplitude is doubled, the total energy:',
    options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'],
    correctIndex: 1,
    explanation: '$E = \\frac{1}{2}kA^2$. Doubling $A$ gives $E \\to 4 \\times \\frac{1}{2}kA^2$. Energy quadruples.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'eshm-ent-7b',
    question: 'At what fraction of the amplitude does a mass-spring oscillator have $75\\%$ of its energy as kinetic?',
    options: ['$x = A/4$', '$x = A/2$', '$x = A/\\sqrt{2}$', '$x = A\\sqrt{3}/2$'],
    correctIndex: 1,
    explanation: '75% KE means 25% PE: $\\frac{1}{2}kx^2 = 0.25 \\times \\frac{1}{2}kA^2$. So $x^2 = A^2/4$, $x = A/2$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Energy in a Mass-Spring System' },
    { partNumber: 2, partTitle: 'KE and PE vs. Position' },
    { partNumber: 3, partTitle: 'Maximum Speed' },
    { partNumber: 4, partTitle: 'Energy Graphs' },
    { partNumber: 5, partTitle: 'Pendulum Energy' },
    { partNumber: 6, partTitle: 'Damped Oscillations' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
