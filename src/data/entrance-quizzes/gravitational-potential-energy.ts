import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Definition of Gravitational PE
  {
    id: 'gpe-ent-1a',
    question: 'Gravitational potential energy near Earth\'s surface is given by:',
    options: ['$\\frac{1}{2}mv^2$', '$mgh$', '$\\frac{1}{2}kx^2$', '$Fd$'],
    correctIndex: 1,
    explanation: 'Near Earth\'s surface, gravitational potential energy is $U_g = mgh$, where $h$ is the height above the chosen reference level.',
    partNumber: 1,
    partTitle: 'Definition of Gravitational PE',
  },
  {
    id: 'gpe-ent-1b',
    question: 'A $3$ kg book is on a shelf $2$ m above the floor. What is its gravitational PE relative to the floor? (Use $g = 10$ m/s².)',
    options: ['$6$ J', '$30$ J', '$60$ J', '$600$ J'],
    correctIndex: 2,
    explanation: '$U_g = mgh = 3 \\times 10 \\times 2 = 60$ J.',
    partNumber: 1,
    partTitle: 'Definition of Gravitational PE',
  },

  // Part 2: Reference Level Choice
  {
    id: 'gpe-ent-2a',
    question: 'A ball is $5$ m above the ground and $3$ m above a table. If the table is the reference level, the gravitational PE is proportional to:',
    options: ['$5$ m', '$3$ m', '$8$ m', '$2$ m'],
    correctIndex: 1,
    explanation: 'PE depends on height above the chosen reference. With the table as reference, $h = 3$ m.',
    partNumber: 2,
    partTitle: 'Reference Level Choice',
  },
  {
    id: 'gpe-ent-2b',
    question: 'Can gravitational potential energy be negative?',
    options: ['No, energy is always positive', 'Yes, if the object is below the reference level', 'Only in outer space', 'Only for massless objects'],
    correctIndex: 1,
    explanation: 'If an object is below the chosen reference level, $h$ is negative, making $U_g = mgh$ negative. The reference level is arbitrary.',
    partNumber: 2,
    partTitle: 'Reference Level Choice',
  },

  // Part 3: Work & Change in PE
  {
    id: 'gpe-ent-3a',
    question: 'You lift a $5$ kg box $4$ m upward at constant velocity. The work you do is: (Use $g = 10$ m/s².)',
    options: ['$20$ J', '$50$ J', '$200$ J', '$400$ J'],
    correctIndex: 2,
    explanation: 'At constant velocity, your force equals weight: $F = mg = 50$ N. $W = Fd = 50 \\times 4 = 200$ J. This equals the change in PE.',
    partNumber: 3,
    partTitle: 'Work & Change in PE',
  },
  {
    id: 'gpe-ent-3b',
    question: 'When an object falls, gravity does positive work and gravitational PE:',
    options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
    correctIndex: 1,
    explanation: 'As the object falls, height decreases, so $U_g = mgh$ decreases. The decrease in PE equals the work done by gravity.',
    partNumber: 3,
    partTitle: 'Work & Change in PE',
  },

  // Part 4: PE on Inclines & Ramps
  {
    id: 'gpe-ent-4a',
    question: 'A $2$ kg ball rolls down a ramp from a height of $5$ m. The change in gravitational PE is: (Use $g = 10$ m/s².)',
    options: ['$+100$ J', '$-100$ J', '$+50$ J', '$-50$ J'],
    correctIndex: 1,
    explanation: '$\\Delta U_g = mg\\Delta h = 2(10)(0-5) = -100$ J. PE decreases because the ball moves to a lower height.',
    partNumber: 4,
    partTitle: 'PE on Inclines & Ramps',
  },
  {
    id: 'gpe-ent-4b',
    question: 'Two ramps lead to the same height $h$. One is steep and short, the other is gentle and long. The change in gravitational PE for identical objects is:',
    options: ['Greater for the steep ramp', 'Greater for the gentle ramp', 'The same for both', 'Zero for both'],
    correctIndex: 2,
    explanation: 'Gravitational PE depends only on height, not the path taken. Both ramps reach the same height, so $\\Delta U_g$ is the same.',
    partNumber: 4,
    partTitle: 'PE on Inclines & Ramps',
  },

  // Part 5: PE & Kinetic Energy Conversion
  {
    id: 'gpe-ent-5a',
    question: 'A ball is dropped from $20$ m. Ignoring air resistance, what is its speed just before hitting the ground? (Use $g = 10$ m/s².)',
    options: ['$10$ m/s', '$20$ m/s', '$200$ m/s', '$\\sqrt{200}$ m/s'],
    correctIndex: 1,
    explanation: '$mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20$ m/s.',
    partNumber: 5,
    partTitle: 'PE & Kinetic Energy Conversion',
  },
  {
    id: 'gpe-ent-5b',
    question: 'At what point during free fall is kinetic energy equal to potential energy? (Object released from rest at height $h$.)',
    options: ['At the top', 'At $h/4$', 'At $h/2$', 'Just before the ground'],
    correctIndex: 2,
    explanation: 'When KE = PE, each is half the total energy. Since PE decreases linearly with height, this occurs at $h/2$.',
    partNumber: 5,
    partTitle: 'PE & Kinetic Energy Conversion',
  },

  // Part 6: Gravitational PE Problems
  {
    id: 'gpe-ent-6a',
    question: 'A roller coaster car ($500$ kg) is at the top of a $40$ m hill. How much PE does it have relative to the bottom? (Use $g = 10$ m/s².)',
    options: ['$20{,}000$ J', '$200{,}000$ J', '$500{,}000$ J', '$2{,}000{,}000$ J'],
    correctIndex: 1,
    explanation: '$U_g = mgh = 500 \\times 10 \\times 40 = 200{,}000$ J = $200$ kJ.',
    partNumber: 6,
    partTitle: 'Gravitational PE Problems',
  },
  {
    id: 'gpe-ent-6b',
    question: 'A $0.5$ kg ball is thrown upward with $10$ m/s. What maximum height does it reach? (Use $g = 10$ m/s².)',
    options: ['$1$ m', '$5$ m', '$10$ m', '$50$ m'],
    correctIndex: 1,
    explanation: 'At max height, all KE converts to PE: $\\frac{1}{2}mv^2 = mgh$. $h = v^2/(2g) = 100/20 = 5$ m.',
    partNumber: 6,
    partTitle: 'Gravitational PE Problems',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'gpe-ent-7a',
    question: 'A pendulum swings from height $h$. At the lowest point, its speed is:',
    options: ['$\\sqrt{gh}$', '$\\sqrt{2gh}$', '$2gh$', '$mgh$'],
    correctIndex: 1,
    explanation: 'Converting PE to KE: $mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh}$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'gpe-ent-7b',
    question: 'Gravitational PE is a property of:',
    options: ['The object alone', 'The Earth alone', 'The object-Earth system', 'The gravitational field only'],
    correctIndex: 2,
    explanation: 'Potential energy is a system property. Gravitational PE belongs to the object-Earth system, not to either alone.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of Gravitational PE' },
    { partNumber: 2, partTitle: 'Reference Level Choice' },
    { partNumber: 3, partTitle: 'Work & Change in PE' },
    { partNumber: 4, partTitle: 'PE on Inclines & Ramps' },
    { partNumber: 5, partTitle: 'PE & Kinetic Energy Conversion' },
    { partNumber: 6, partTitle: 'Gravitational PE Problems' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
