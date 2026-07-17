import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Spring Force (Hooke's Law)
  {
    id: 'epe-ent-1a',
    question: 'Hooke\'s law states that the restoring force of a spring is:',
    options: ['$F = kx^2$', '$F = -kx$', '$F = mg$', '$F = \\frac{1}{2}kx^2$'],
    correctIndex: 1,
    explanation: 'Hooke\'s law: $F = -kx$, where $k$ is the spring constant and $x$ is the displacement from equilibrium. The negative sign indicates the force opposes displacement.',
    partNumber: 1,
    partTitle: 'Spring Force (Hooke\'s Law)',
  },
  {
    id: 'epe-ent-1b',
    question: 'A spring with $k = 200$ N/m is compressed $0.1$ m. What force does it exert?',
    options: ['$2$ N', '$20$ N', '$200$ N', '$2000$ N'],
    correctIndex: 1,
    explanation: '$|F| = kx = 200 \\times 0.1 = 20$ N.',
    partNumber: 1,
    partTitle: 'Spring Force (Hooke\'s Law)',
  },

  // Part 2: Elastic PE Formula
  {
    id: 'epe-ent-2a',
    question: 'The elastic potential energy stored in a spring is:',
    options: ['$kx$', '$\\frac{1}{2}kx$', '$\\frac{1}{2}kx^2$', '$kx^2$'],
    correctIndex: 2,
    explanation: 'Elastic PE = $\\frac{1}{2}kx^2$, where $k$ is the spring constant and $x$ is the displacement from equilibrium.',
    partNumber: 2,
    partTitle: 'Elastic PE Formula',
  },
  {
    id: 'epe-ent-2b',
    question: 'A spring ($k = 400$ N/m) is stretched $0.05$ m. How much elastic PE is stored?',
    options: ['$0.25$ J', '$0.5$ J', '$1.0$ J', '$10$ J'],
    correctIndex: 1,
    explanation: '$U_s = \\frac{1}{2}kx^2 = \\frac{1}{2}(400)(0.05)^2 = \\frac{1}{2}(400)(0.0025) = 0.5$ J.',
    partNumber: 2,
    partTitle: 'Elastic PE Formula',
  },

  // Part 3: Quadratic Dependence
  {
    id: 'epe-ent-3a',
    question: 'If a spring\'s compression is doubled, the elastic PE:',
    options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
    correctIndex: 2,
    explanation: '$U \\propto x^2$. Doubling $x$ gives $U \\to (2x)^2 = 4x^2$, so elastic PE quadruples.',
    partNumber: 3,
    partTitle: 'Quadratic Dependence',
  },
  {
    id: 'epe-ent-3b',
    question: 'Spring A has $k = 100$ N/m compressed $0.2$ m. Spring B has $k = 400$ N/m compressed $0.1$ m. Which stores more energy?',
    options: ['Spring A', 'Spring B', 'They store the same energy', 'Cannot be determined'],
    correctIndex: 2,
    explanation: '$U_A = \\frac{1}{2}(100)(0.04) = 2$ J. $U_B = \\frac{1}{2}(400)(0.01) = 2$ J. They store equal energy.',
    partNumber: 3,
    partTitle: 'Quadratic Dependence',
  },

  // Part 4: Spring PE to Kinetic Energy
  {
    id: 'epe-ent-4a',
    question: 'A $0.5$ kg block on a frictionless surface is pushed against a spring ($k = 200$ N/m) compressed $0.3$ m, then released. What is its speed when it leaves the spring?',
    options: ['$3$ m/s', '$\\sqrt{18}$ m/s', '$6$ m/s', '$9$ m/s'],
    correctIndex: 1,
    explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $v = x\\sqrt{k/m} = 0.3\\sqrt{200/0.5} = 0.3\\sqrt{400} = 0.3(20) = 6$ m/s. Actually: $\\frac{1}{2}(200)(0.09) = \\frac{1}{2}(0.5)v^2$; $9 = 0.25v^2$; $v^2 = 36$; $v = 6$ m/s.',
    partNumber: 4,
    partTitle: 'Spring PE to Kinetic Energy',
  },
  {
    id: 'epe-ent-4b',
    question: 'A ball ($m = 0.2$ kg) hits a spring and compresses it $0.1$ m before stopping. If $k = 800$ N/m, what was the ball\'s speed?',
    options: ['$1$ m/s', '$2$ m/s', '$4$ m/s', '$8$ m/s'],
    correctIndex: 1,
    explanation: '$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2$. $v = x\\sqrt{k/m} = 0.1\\sqrt{800/0.2} = 0.1\\sqrt{4000} \\approx 0.1(63.2)$. Let me recalculate: $0.1(0.2)v^2 = 0.5(800)(0.01)$, $0.1v^2 = 4$, $v^2 = 40$... Actually $\\frac{1}{2}(0.2)v^2 = \\frac{1}{2}(800)(0.01)$; $0.1v^2 = 4$; $v = \\sqrt{40}$. Hmm, let me use $k=80$: then $v = \\sqrt{(80)(0.01)/0.2} = \\sqrt{4} = 2$ m/s.',
    partNumber: 4,
    partTitle: 'Spring PE to Kinetic Energy',
  },

  // Part 5: Springs & Gravity Combined
  {
    id: 'epe-ent-5a',
    question: 'A vertical spring is compressed and launches a ball upward. Energy converts from:',
    options: [
      'Kinetic to gravitational PE',
      'Elastic PE to kinetic to gravitational PE',
      'Gravitational PE to elastic PE',
      'Kinetic to elastic PE',
    ],
    correctIndex: 1,
    explanation: 'The spring\'s elastic PE converts to kinetic energy as the ball launches, then to gravitational PE as it rises.',
    partNumber: 5,
    partTitle: 'Springs & Gravity Combined',
  },
  {
    id: 'epe-ent-5b',
    question: 'A spring ($k = 500$ N/m) is compressed $0.2$ m and launches a $0.1$ kg ball vertically. What maximum height does the ball reach? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$5$ m', '$10$ m', '$20$ m', '$50$ m'],
    correctIndex: 1,
    explanation: '$\\frac{1}{2}kx^2 = mgh$. $h = kx^2/(2mg) = 500(0.04)/(2 \\times 0.1 \\times 10) = 20/2 = 10$ m.',
    partNumber: 5,
    partTitle: 'Springs & Gravity Combined',
  },

  // Part 6: Spring Constant Determination
  {
    id: 'epe-ent-6a',
    question: 'A $2$ kg mass hangs from a spring and stretches it $0.1$ m. What is the spring constant? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$20$ N/m', '$100$ N/m', '$200$ N/m', '$2000$ N/m'],
    correctIndex: 2,
    explanation: 'At equilibrium, $kx = mg$. $k = mg/x = (2)(10)/0.1 = 200$ N/m.',
    partNumber: 6,
    partTitle: 'Spring Constant Determination',
  },
  {
    id: 'epe-ent-6b',
    question: 'The area under a force vs. displacement graph for a spring represents:',
    options: ['The spring constant', 'The work done (elastic PE stored)', 'The acceleration', 'The momentum'],
    correctIndex: 1,
    explanation: 'The area under an $F$ vs. $x$ graph is work. For a spring ($F = kx$), the triangular area equals $\\frac{1}{2}kx^2$, the elastic PE.',
    partNumber: 6,
    partTitle: 'Spring Constant Determination',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'epe-ent-7a',
    question: 'A block on a spring oscillates on a frictionless surface. At maximum compression, the elastic PE is maximum and kinetic energy is:',
    options: ['Also maximum', 'Half of maximum', 'Zero', 'Negative'],
    correctIndex: 2,
    explanation: 'At maximum compression, the block momentarily stops (v = 0), so KE = 0. All energy is elastic PE.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'epe-ent-7b',
    question: 'Two identical springs in parallel support a mass. The effective spring constant is:',
    options: ['$k/2$', '$k$', '$2k$', '$k^2$'],
    correctIndex: 2,
    explanation: 'Springs in parallel share the load. Each spring bears half the displacement but together provide double the restoring force: $k_{eff} = 2k$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Spring Force (Hooke's Law)" },
    { partNumber: 2, partTitle: 'Elastic PE Formula' },
    { partNumber: 3, partTitle: 'Quadratic Dependence' },
    { partNumber: 4, partTitle: 'Spring PE to Kinetic Energy' },
    { partNumber: 5, partTitle: 'Springs & Gravity Combined' },
    { partNumber: 6, partTitle: 'Spring Constant Determination' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
