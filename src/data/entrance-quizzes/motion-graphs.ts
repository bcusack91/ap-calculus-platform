import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Position-Time Graphs
  {
    id: 'mg-ent-1a',
    question: 'On a position-time graph, a straight line with a positive slope represents what type of motion?',
    options: ['Constant positive velocity', 'Constant positive acceleration', 'Object at rest', 'Decreasing speed'],
    correctIndex: 0,
    explanation: 'A straight line on a position-time graph indicates constant velocity. A positive slope means the object moves in the positive direction.',
    partNumber: 1,
    partTitle: 'Position-Time Graphs',
  },
  {
    id: 'mg-ent-1b',
    question: 'On a position-time graph, a horizontal line means the object is:',
    options: ['Moving at constant velocity', 'Accelerating', 'At rest', 'Moving backward'],
    correctIndex: 2,
    explanation: 'A horizontal line on a position-time graph means the position is not changing over time, so the object is at rest.',
    partNumber: 1,
    partTitle: 'Position-Time Graphs',
  },

  // Part 2: Velocity from Position-Time
  {
    id: 'mg-ent-2a',
    question: 'How do you find instantaneous velocity from a position-time graph?',
    options: [
      'Find the area under the curve',
      'Find the slope of the tangent line at that point',
      'Read the y-value at that point',
      'Find the average of all positions',
    ],
    correctIndex: 1,
    explanation: 'Instantaneous velocity is the slope of the tangent line on a position-time graph at a given instant.',
    partNumber: 2,
    partTitle: 'Velocity from Position-Time',
  },
  {
    id: 'mg-ent-2b',
    question: 'A position-time graph is a parabola opening upward. What does this indicate about the motion?',
    options: [
      'Constant velocity',
      'Constant positive acceleration',
      'Constant negative acceleration',
      'The object is at rest',
    ],
    correctIndex: 1,
    explanation: 'A parabolic position-time curve means the velocity is changing linearly — indicating constant acceleration. Upward opening means positive acceleration.',
    partNumber: 2,
    partTitle: 'Velocity from Position-Time',
  },

  // Part 3: Velocity-Time Graphs
  {
    id: 'mg-ent-3a',
    question: 'On a velocity-time graph, a horizontal line at $v = 5$ m/s represents:',
    options: ['An object at rest', 'Constant acceleration of $5$ $m/s^{2}$', 'Constant velocity of $5$ m/s', 'Decreasing velocity'],
    correctIndex: 2,
    explanation: 'A horizontal line on a velocity-time graph means velocity is constant (not changing). The object moves at a steady $5$ m/s with zero acceleration.',
    partNumber: 3,
    partTitle: 'Velocity-Time Graphs',
  },
  {
    id: 'mg-ent-3b',
    question: 'On a velocity-time graph, a straight line with a negative slope means the object is:',
    options: [
      'Speeding up in the positive direction',
      'Experiencing negative (or decreasing) acceleration',
      'Always moving backward',
      'At rest',
    ],
    correctIndex: 1,
    explanation: 'A negative slope on a v-t graph means the acceleration is negative. The object could be slowing down (if velocity is positive) or speeding up in the negative direction.',
    partNumber: 3,
    partTitle: 'Velocity-Time Graphs',
  },

  // Part 4: Displacement from Velocity-Time
  {
    id: 'mg-ent-4a',
    question: 'How do you determine displacement from a velocity-time graph?',
    options: [
      'Find the slope of the line',
      'Read the y-intercept',
      'Calculate the area under the curve',
      'Find where the line crosses zero',
    ],
    correctIndex: 2,
    explanation: 'Displacement is the area under (or between) the velocity-time curve and the time axis. Areas below the axis count as negative displacement.',
    partNumber: 4,
    partTitle: 'Displacement from Velocity-Time',
  },
  {
    id: 'mg-ent-4b',
    question: 'A velocity-time graph shows a triangle with base $4$ s and height $10$ m/s. What is the displacement during this interval?',
    options: ['$40$ m', '$20$ m', '$10$ m', '$14$ m'],
    correctIndex: 1,
    explanation: 'The area of a triangle is $\\frac{1}{2} \\times base \\times height = \\frac{1}{2}(4)(10) = 20$ m.',
    partNumber: 4,
    partTitle: 'Displacement from Velocity-Time',
  },

  // Part 5: Acceleration-Time Graphs
  {
    id: 'mg-ent-5a',
    question: 'On an acceleration-time graph, the area under the curve represents the change in:',
    options: ['Position', 'Velocity', 'Acceleration', 'Distance'],
    correctIndex: 1,
    explanation: 'The area under an acceleration-time graph equals the change in velocity: $\\Delta v = \\int a \\, dt$.',
    partNumber: 5,
    partTitle: 'Acceleration-Time Graphs',
  },
  {
    id: 'mg-ent-5b',
    question: 'An acceleration-time graph shows a constant value of $3$ $m/s^{2}$ for $4$ s. If the initial velocity was $2$ m/s, what is the final velocity?',
    options: ['$14$ m/s', '$12$ m/s', '$10$ m/s', '$6$ m/s'],
    correctIndex: 0,
    explanation: '$\\Delta v = a \\times t = 3 \\times 4 = 12$ m/s. Final velocity = $2 + 12 = 14$ m/s.',
    partNumber: 5,
    partTitle: 'Acceleration-Time Graphs',
  },

  // Part 6: Connecting Multiple Graph Types
  {
    id: 'mg-ent-6a',
    question: 'If a velocity-time graph is a straight line with positive slope, what does the corresponding acceleration-time graph look like?',
    options: [
      'A straight line with positive slope',
      'A horizontal line at a positive value',
      'A parabola',
      'A horizontal line at zero',
    ],
    correctIndex: 1,
    explanation: 'A straight line on a v-t graph means constant acceleration (constant slope). The a-t graph is therefore a horizontal line at the value of that slope.',
    partNumber: 6,
    partTitle: 'Connecting Multiple Graph Types',
  },
  {
    id: 'mg-ent-6b',
    question: 'An object has a position-time graph that is a downward-opening parabola. At the vertex, the object\'s velocity is:',
    options: ['Maximum', 'Zero', 'Negative', 'Undefined'],
    correctIndex: 1,
    explanation: 'The vertex of a parabola is where the slope of the tangent is zero. Since velocity = slope of x-t graph, the velocity is zero at the vertex (the object momentarily stops).',
    partNumber: 6,
    partTitle: 'Connecting Multiple Graph Types',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'mg-ent-7a',
    question: 'A velocity-time graph crosses the time axis from positive to negative values. At the crossing point, the object:',
    options: [
      'Has zero acceleration',
      'Changes direction of motion',
      'Is at its starting position',
      'Has maximum acceleration',
    ],
    correctIndex: 1,
    explanation: 'When velocity changes sign (passes through zero), the object reverses direction. This is the instant the object momentarily stops before moving the other way.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mg-ent-7b',
    question: 'From a velocity-time graph, an object has positive velocity that is decreasing. The object is:',
    options: [
      'Moving forward and speeding up',
      'Moving backward and slowing down',
      'Moving forward and slowing down',
      'At rest',
    ],
    correctIndex: 2,
    explanation: 'Positive velocity means moving forward. Decreasing velocity (negative acceleration) with positive velocity means the object is slowing down while still moving forward.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position-Time Graphs' },
    { partNumber: 2, partTitle: 'Velocity from Position-Time' },
    { partNumber: 3, partTitle: 'Velocity-Time Graphs' },
    { partNumber: 4, partTitle: 'Displacement from Velocity-Time' },
    { partNumber: 5, partTitle: 'Acceleration-Time Graphs' },
    { partNumber: 6, partTitle: 'Connecting Multiple Graph Types' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
