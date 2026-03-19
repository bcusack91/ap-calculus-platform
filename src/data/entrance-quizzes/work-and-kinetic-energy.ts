import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Definition of Work
  {
    id: 'wke-ent-1a',
    question: 'Work is defined as:',
    options: ['$W = mv$', '$W = Fd\\cos\\theta$', '$W = \\frac{1}{2}mv^2$', '$W = mgh$'],
    correctIndex: 1,
    explanation: 'Work is the dot product of force and displacement: $W = Fd\\cos\\theta$, where $\\theta$ is the angle between the force and displacement vectors.',
    partNumber: 1,
    partTitle: 'Definition of Work',
  },
  {
    id: 'wke-ent-1b',
    question: 'A person carries a box horizontally across a room. The work done by the normal (carrying) force is:',
    options: ['Positive', 'Negative', 'Zero', 'Equal to $mgh$'],
    correctIndex: 2,
    explanation: 'The carrying force is vertical (upward) while displacement is horizontal. Since $\\theta = 90°$, $\\cos 90° = 0$, so work = 0.',
    partNumber: 1,
    partTitle: 'Definition of Work',
  },

  // Part 2: Positive & Negative Work
  {
    id: 'wke-ent-2a',
    question: 'Friction does ______ work on a sliding object.',
    options: ['Positive', 'Negative', 'Zero', 'Sometimes positive, sometimes negative'],
    correctIndex: 1,
    explanation: 'Friction opposes the direction of motion ($\\theta = 180°$), so $W = Fd\\cos 180° = -Fd$. Friction always does negative work on sliding objects.',
    partNumber: 2,
    partTitle: 'Positive & Negative Work',
  },
  {
    id: 'wke-ent-2b',
    question: 'A $10$ N force pushes a box $5$ m in the direction of the force. The work done is:',
    options: ['$2$ J', '$15$ J', '$50$ J', '$500$ J'],
    correctIndex: 2,
    explanation: '$W = Fd\\cos 0° = 10 \\times 5 \\times 1 = 50$ J.',
    partNumber: 2,
    partTitle: 'Positive & Negative Work',
  },

  // Part 3: Kinetic Energy
  {
    id: 'wke-ent-3a',
    question: 'What is the kinetic energy of a $2$ kg object moving at $6$ m/s?',
    options: ['$6$ J', '$12$ J', '$36$ J', '$72$ J'],
    correctIndex: 2,
    explanation: '$KE = \\frac{1}{2}mv^2 = \\frac{1}{2}(2)(6^2) = \\frac{1}{2}(2)(36) = 36$ J.',
    partNumber: 3,
    partTitle: 'Kinetic Energy',
  },
  {
    id: 'wke-ent-3b',
    question: 'If the speed of an object doubles, its kinetic energy:',
    options: ['Doubles', 'Triples', 'Quadruples', 'Stays the same'],
    correctIndex: 2,
    explanation: '$KE = \\frac{1}{2}mv^2$. If $v \\to 2v$, then $KE \\to \\frac{1}{2}m(2v)^2 = 4 \\times \\frac{1}{2}mv^2$. Kinetic energy quadruples.',
    partNumber: 3,
    partTitle: 'Kinetic Energy',
  },

  // Part 4: Work-Energy Theorem
  {
    id: 'wke-ent-4a',
    question: 'The work-energy theorem states that the net work done on an object equals the change in its:',
    options: ['Momentum', 'Potential energy', 'Kinetic energy', 'Total energy'],
    correctIndex: 2,
    explanation: 'The work-energy theorem: $W_{net} = \\Delta KE = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$.',
    partNumber: 4,
    partTitle: 'Work-Energy Theorem',
  },
  {
    id: 'wke-ent-4b',
    question: 'A $3$ kg object accelerates from $2$ m/s to $6$ m/s. What net work was done on it?',
    options: ['$12$ J', '$24$ J', '$48$ J', '$54$ J'],
    correctIndex: 2,
    explanation: '$W = \\Delta KE = \\frac{1}{2}(3)(6^2) - \\frac{1}{2}(3)(2^2) = 54 - 6 = 48$ J.',
    partNumber: 4,
    partTitle: 'Work-Energy Theorem',
  },

  // Part 5: Work Done by Gravity
  {
    id: 'wke-ent-5a',
    question: 'A $5$ kg ball falls $10$ m. What work does gravity do on it? (Use $g = 10$ m/s².)',
    options: ['$-500$ J', '$50$ J', '$500$ J', '$-50$ J'],
    correctIndex: 2,
    explanation: 'Gravity acts downward, displacement is downward, so $\\theta = 0°$. $W = mgh = 5 \\times 10 \\times 10 = 500$ J (positive, since force and displacement are in the same direction).',
    partNumber: 5,
    partTitle: 'Work Done by Gravity',
  },
  {
    id: 'wke-ent-5b',
    question: 'A ball is thrown upward $10$ m. The work done by gravity during the upward trip is:',
    options: ['Positive', 'Negative', 'Zero', 'Depends on initial speed'],
    correctIndex: 1,
    explanation: 'Gravity points downward but displacement is upward ($\\theta = 180°$), so work is negative: $W = -mgh$. Gravity removes kinetic energy from the ball.',
    partNumber: 5,
    partTitle: 'Work Done by Gravity',
  },

  // Part 6: Power
  {
    id: 'wke-ent-6a',
    question: 'Power is defined as:',
    options: ['Force times distance', 'Work divided by time', 'Energy times time', 'Force divided by mass'],
    correctIndex: 1,
    explanation: 'Power is the rate of doing work: $P = W/t$, measured in watts (J/s).',
    partNumber: 6,
    partTitle: 'Power',
  },
  {
    id: 'wke-ent-6b',
    question: 'A motor does $6000$ J of work in $3$ s. What is its power output?',
    options: ['$200$ W', '$2000$ W', '$18000$ W', '$3000$ W'],
    correctIndex: 1,
    explanation: '$P = W/t = 6000/3 = 2000$ W.',
    partNumber: 6,
    partTitle: 'Power',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'wke-ent-7a',
    question: 'A $1500$ kg car brakes from $20$ m/s to rest. How much work does friction do?',
    options: ['$300{,}000$ J', '$-300{,}000$ J', '$150{,}000$ J', '$-150{,}000$ J'],
    correctIndex: 1,
    explanation: '$W = \\Delta KE = 0 - \\frac{1}{2}(1500)(20^2) = -\\frac{1}{2}(1500)(400) = -300{,}000$ J. Negative because friction opposes motion.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'wke-ent-7b',
    question: 'An object moves at constant velocity under an applied force and friction. The net work done on the object is:',
    options: ['Positive', 'Negative', 'Zero', 'Equal to friction work'],
    correctIndex: 2,
    explanation: 'Constant velocity means $\\Delta KE = 0$, so by the work-energy theorem, net work = $0$. The positive work by the applied force is exactly canceled by the negative work of friction.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of Work' },
    { partNumber: 2, partTitle: 'Positive & Negative Work' },
    { partNumber: 3, partTitle: 'Kinetic Energy' },
    { partNumber: 4, partTitle: 'Work-Energy Theorem' },
    { partNumber: 5, partTitle: 'Work Done by Gravity' },
    { partNumber: 6, partTitle: 'Power' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
