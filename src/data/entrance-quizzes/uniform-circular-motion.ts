import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Describing Circular Motion
  {
    id: 'ucm-ent-1a',
    question: 'An object in uniform circular motion has constant:',
    options: ['Velocity', 'Acceleration', 'Speed', 'Net force direction'],
    correctIndex: 2,
    explanation: 'Uniform circular motion means constant speed. The velocity (which includes direction) changes continuously as the object moves around the circle.',
    partNumber: 1,
    partTitle: 'Describing Circular Motion',
  },
  {
    id: 'ucm-ent-1b',
    question: 'The period of circular motion is the:',
    options: ['Number of revolutions per second', 'Time for one complete revolution', 'Speed of the object', 'Radius of the circle'],
    correctIndex: 1,
    explanation: 'The period $T$ is the time required for one complete revolution.',
    partNumber: 1,
    partTitle: 'Describing Circular Motion',
  },

  // Part 2: Direction of Velocity & Acceleration
  {
    id: 'ucm-ent-2a',
    question: 'In uniform circular motion, the velocity vector is always:',
    options: ['Directed toward the center', 'Directed away from the center', 'Tangent to the circle', 'In the same direction as acceleration'],
    correctIndex: 2,
    explanation: 'The velocity vector is always tangent to the circular path. It is perpendicular to the radius at every point.',
    partNumber: 2,
    partTitle: 'Direction of Velocity & Acceleration',
  },
  {
    id: 'ucm-ent-2b',
    question: 'The acceleration in uniform circular motion points:',
    options: ['Tangent to the circle', 'Away from the center', 'Toward the center of the circle', 'In the direction of motion'],
    correctIndex: 2,
    explanation: 'Centripetal acceleration always points radially inward, toward the center of the circular path.',
    partNumber: 2,
    partTitle: 'Direction of Velocity & Acceleration',
  },

  // Part 3: Centripetal Acceleration
  {
    id: 'ucm-ent-3a',
    question: 'The centripetal acceleration of an object moving in a circle of radius $r$ at speed $v$ is:',
    options: ['$v/r$', '$v^2/r$', '$vr$', '$v^2 r$'],
    correctIndex: 1,
    explanation: 'Centripetal acceleration $a_c = v^2/r$, directed toward the center.',
    partNumber: 3,
    partTitle: 'Centripetal Acceleration',
  },
  {
    id: 'ucm-ent-3b',
    question: 'A car travels at $20$ m/s around a curve of radius $100$ m. What is the centripetal acceleration?',
    options: ['$0.2$ $m/s^{2}$', '$2$ $m/s^{2}$', '$4$ $m/s^{2}$', '$200$ $m/s^{2}$'],
    correctIndex: 2,
    explanation: '$a_c = v^2/r = 400/100 = 4$ $m/s^{2}$.',
    partNumber: 3,
    partTitle: 'Centripetal Acceleration',
  },

  // Part 4: Frequency & Period
  {
    id: 'ucm-ent-4a',
    question: 'An object completes $5$ revolutions in $2$ seconds. Its frequency is:',
    options: ['$0.4$ Hz', '$2.5$ Hz', '$5$ Hz', '$10$ Hz'],
    correctIndex: 1,
    explanation: 'Frequency $f$ = revolutions / time = $5/2 = 2.5$ Hz.',
    partNumber: 4,
    partTitle: 'Frequency & Period',
  },
  {
    id: 'ucm-ent-4b',
    question: 'The relationship between period $T$ and frequency $f$ is:',
    options: ['$T = f$', '$T = 2\\pi f$', '$T = 1/f$', '$T = f^2$'],
    correctIndex: 2,
    explanation: 'Period and frequency are reciprocals: $T = 1/f$.',
    partNumber: 4,
    partTitle: 'Frequency & Period',
  },

  // Part 5: Speed in Circular Motion
  {
    id: 'ucm-ent-5a',
    question: 'The speed of an object in circular motion with radius $r$ and period $T$ is:',
    options: ['$v = rT$', '$v = 2\\pi r/T$', '$v = \\pi r^2/T$', '$v = r/T$'],
    correctIndex: 1,
    explanation: 'The circumference is $2\\pi r$ and is traveled in one period $T$, so $v = 2\\pi r/T$.',
    partNumber: 5,
    partTitle: 'Speed in Circular Motion',
  },
  {
    id: 'ucm-ent-5b',
    question: 'A wheel of radius $0.5$ m spins at $4$ Hz. What is the speed of a point on the rim?',
    options: ['$2$ m/s', '$4\\pi$ m/s', '$2\\pi$ m/s', '$8\\pi$ m/s'],
    correctIndex: 1,
    explanation: '$v = 2\\pi rf = 2\\pi(0.5)(4) = 4\\pi$ m/s.',
    partNumber: 5,
    partTitle: 'Speed in Circular Motion',
  },

  // Part 6: Applications
  {
    id: 'ucm-ent-6a',
    question: 'A satellite orbits Earth at constant speed. Is the satellite accelerating?',
    options: ['No, speed is constant', 'Yes, direction of velocity is changing', 'Only when passing over the equator', 'Only when thrusters are fired'],
    correctIndex: 1,
    explanation: 'Even though speed is constant, the direction of velocity changes continuously, so the satellite has centripetal acceleration toward Earth\'s center.',
    partNumber: 6,
    partTitle: 'Applications',
  },
  {
    id: 'ucm-ent-6b',
    question: 'A coin sits on a spinning turntable. If the turntable spins faster, the coin is more likely to slide off because:',
    options: [
      'Gravity increases',
      'The required centripetal force exceeds the maximum static friction',
      'The mass of the coin increases',
      'The normal force decreases',
    ],
    correctIndex: 1,
    explanation: 'The required centripetal force ($mv^2/r$) increases with speed. When it exceeds the maximum static friction ($\\mu_s N$), the coin slides off.',
    partNumber: 6,
    partTitle: 'Applications',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ucm-ent-7a',
    question: 'If the radius of circular motion is doubled while keeping speed constant, centripetal acceleration:',
    options: ['Doubles', 'Halves', 'Quadruples', 'Stays the same'],
    correctIndex: 1,
    explanation: '$a_c = v^2/r$. Doubling $r$ halves $a_c$ (if $v$ is constant).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ucm-ent-7b',
    question: 'An object moves in a circle. If you suddenly remove the centripetal force, the object will:',
    options: [
      'Continue in a circle',
      'Move radially outward',
      'Move in a straight line tangent to the circle',
      'Stop immediately',
    ],
    correctIndex: 2,
    explanation: 'By Newton\'s first law, without a net force, the object continues with its current velocity, which is tangent to the circle.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Describing Circular Motion' },
    { partNumber: 2, partTitle: 'Direction of Velocity & Acceleration' },
    { partNumber: 3, partTitle: 'Centripetal Acceleration' },
    { partNumber: 4, partTitle: 'Frequency & Period' },
    { partNumber: 5, partTitle: 'Speed in Circular Motion' },
    { partNumber: 6, partTitle: 'Applications' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
