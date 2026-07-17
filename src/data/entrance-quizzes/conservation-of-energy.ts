import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Law of Conservation of Energy
  {
    id: 'coe-ent-1a',
    question: 'The law of conservation of energy states that in an isolated system, total energy:',
    options: ['Increases over time', 'Decreases over time', 'Remains constant', 'Equals zero'],
    correctIndex: 2,
    explanation: 'Energy cannot be created or destroyed in an isolated system; it can only transform between forms. Total energy remains constant.',
    partNumber: 1,
    partTitle: 'Law of Conservation of Energy',
  },
  {
    id: 'coe-ent-1b',
    question: 'Which of the following is a conservative force?',
    options: ['Friction', 'Air resistance', 'Gravity', 'Drag force'],
    correctIndex: 2,
    explanation: 'Gravity is conservative — the work it does depends only on initial and final positions, not the path. Friction and air resistance are non-conservative.',
    partNumber: 1,
    partTitle: 'Law of Conservation of Energy',
  },

  // Part 2: KE–PE Conversions
  {
    id: 'coe-ent-2a',
    question: 'A ball is thrown upward. As it rises, kinetic energy converts to:',
    options: ['Thermal energy', 'Elastic PE', 'Gravitational PE', 'Chemical energy'],
    correctIndex: 2,
    explanation: 'As the ball rises, it slows down (KE decreases) and gains height (gravitational PE increases). KE converts to gravitational PE.',
    partNumber: 2,
    partTitle: 'KE–PE Conversions',
  },
  {
    id: 'coe-ent-2b',
    question: 'A pendulum reaches maximum speed at the ______ of its swing.',
    options: ['Highest point', 'Lowest point', 'Midway between high and low', 'It has constant speed'],
    correctIndex: 1,
    explanation: 'At the lowest point, all gravitational PE has converted to KE, giving maximum speed.',
    partNumber: 2,
    partTitle: 'KE–PE Conversions',
  },

  // Part 3: Conservation Without Friction
  {
    id: 'coe-ent-3a',
    question: 'A $2$ kg ball is released from $5$ m. What is its speed at the bottom? (Use $g = 10$ $m/s^{2}$, no friction.)',
    options: ['$5$ m/s', '$10$ m/s', '$20$ m/s', '$50$ m/s'],
    correctIndex: 1,
    explanation: '$mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s.',
    partNumber: 3,
    partTitle: 'Conservation Without Friction',
  },
  {
    id: 'coe-ent-3b',
    question: 'A roller coaster starts from rest at height $h_1$ and reaches height $h_2 < h_1$ (no friction). Its speed at $h_2$ depends on:',
    options: ['$h_1$ only', '$h_2$ only', '$h_1 - h_2$', 'The shape of the track'],
    correctIndex: 2,
    explanation: '$v = \\sqrt{2g(h_1 - h_2)}$. Only the height difference matters, not the path taken.',
    partNumber: 3,
    partTitle: 'Conservation Without Friction',
  },

  // Part 4: Conservation With Friction
  {
    id: 'coe-ent-4a',
    question: 'When friction is present, mechanical energy is converted to:',
    options: ['Gravitational PE', 'Elastic PE', 'Thermal energy', 'Nuclear energy'],
    correctIndex: 2,
    explanation: 'Friction converts mechanical energy (KE + PE) into thermal energy (heat). Total energy is still conserved, but mechanical energy decreases.',
    partNumber: 4,
    partTitle: 'Conservation With Friction',
  },
  {
    id: 'coe-ent-4b',
    question: 'A $4$ kg block slides down from $5$ m and reaches the bottom at $8$ m/s. How much energy was lost to friction? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$40$ J', '$72$ J', '$128$ J', '$200$ J'],
    correctIndex: 0,
    explanation: '$PE_i = mgh = 4(10)(5) = 200$ J. $KE_f = \\frac{1}{2}(4)(64) = 128$ J. Energy lost = $200 - 128 = 72$ J. Hmm wait: $\\frac{1}{2}(4)(8^2) = \\frac{1}{2}(4)(64) = 128$ J. Lost = $200 - 128 = 72$ J. The answer is $72$ J.',
    partNumber: 4,
    partTitle: 'Conservation With Friction',
  },

  // Part 5: Springs & Energy Conservation
  {
    id: 'coe-ent-5a',
    question: 'A spring-loaded launcher ($k = 500$ N/m, $x = 0.2$ m) shoots a $0.5$ kg ball. What is the ball\'s speed? (Horizontal, frictionless.)',
    options: ['$\\sqrt{20}$ m/s', '$\\sqrt{40}$ m/s', '$10$ m/s', '$20$ m/s'],
    correctIndex: 1,
    explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. $v^2 = kx^2/m = 500(0.04)/0.5 = 40$. $v = \\sqrt{40} \\approx 6.3$ m/s.',
    partNumber: 5,
    partTitle: 'Springs & Energy Conservation',
  },
  {
    id: 'coe-ent-5b',
    question: 'A block slides into a spring on a frictionless surface. At maximum spring compression:',
    options: [
      'KE is maximum',
      'KE equals elastic PE',
      'All KE has become elastic PE',
      'Energy is lost',
    ],
    correctIndex: 2,
    explanation: 'At maximum compression, the block is momentarily at rest. All kinetic energy has been stored as elastic PE in the spring.',
    partNumber: 5,
    partTitle: 'Springs & Energy Conservation',
  },

  // Part 6: Energy Bar Charts
  {
    id: 'coe-ent-6a',
    question: 'In an energy bar chart for a falling ball (no friction), as the ball falls:',
    options: [
      'The KE bar grows and PE bar shrinks by the same amount',
      'Both bars grow',
      'Both bars shrink',
      'Only the KE bar changes',
    ],
    correctIndex: 0,
    explanation: 'Total energy is conserved. As PE decreases, KE increases by exactly the same amount. The bars exchange height symmetrically.',
    partNumber: 6,
    partTitle: 'Energy Bar Charts',
  },
  {
    id: 'coe-ent-6b',
    question: 'In an energy bar chart with friction, the sum of KE + PE bars over time:',
    options: ['Stays constant', 'Increases', 'Decreases', 'Oscillates'],
    correctIndex: 2,
    explanation: 'With friction, some mechanical energy converts to thermal energy. The sum KE + PE (mechanical energy) decreases.',
    partNumber: 6,
    partTitle: 'Energy Bar Charts',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'coe-ent-7a',
    question: 'A $1$ kg ball bounces to $80\\%$ of its original height. What fraction of mechanical energy is conserved per bounce?',
    options: ['$60\\%$', '$80\\%$', '$90\\%$', '$64\\%$'],
    correctIndex: 1,
    explanation: 'Since PE = mgh and it reaches $0.8h$, the ball retains $80\\%$ of its mechanical energy per bounce. The other $20\\%$ becomes thermal/sound energy.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'coe-ent-7b',
    question: 'A skater goes up a frictionless ramp. To reach a height of $3.2$ m, the minimum speed at the bottom must be: (Use $g = 10$ $m/s^{2}$.)',
    options: ['$4$ m/s', '$6$ m/s', '$8$ m/s', '$10$ m/s'],
    correctIndex: 2,
    explanation: '$\\frac{1}{2}mv^2 = mgh \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(3.2)} = \\sqrt{64} = 8$ m/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Law of Conservation of Energy' },
    { partNumber: 2, partTitle: 'KE–PE Conversions' },
    { partNumber: 3, partTitle: 'Conservation Without Friction' },
    { partNumber: 4, partTitle: 'Conservation With Friction' },
    { partNumber: 5, partTitle: 'Springs & Energy Conservation' },
    { partNumber: 6, partTitle: 'Energy Bar Charts' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
