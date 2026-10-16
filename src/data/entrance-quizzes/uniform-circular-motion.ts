/**
 * Entrance Quiz — Uniform Circular Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Circular Motion Basics
  {
    id: 'ucm-ent-1a',
    question: 'A carousel horse is 3.0 m from the center of a carousel that makes one revolution every 6.0 s. What is the horse\'s speed?',
    options: [
      '3.1 m/s',
      '0.50 m/s',
      '6.3 m/s',
      '1.6 m/s',
    ],
    correctIndex: 0,
    explanation: 'In one period the horse travels the circumference: $v = 2\\pi r/T = 2\\pi(3.0)/6.0 = 3.1$ m/s. Dividing the radius by the period gives 0.50 m/s, and using the diameter as the radius gives 6.3 m/s.',
    partNumber: 1,
    partTitle: 'Circular Motion Basics',
  },
  {
    id: 'ucm-ent-1b',
    question: 'Two children ride the same merry-go-round, one 1 m from the center and one 3 m from the center. How do their motions compare?',
    options: [
      'Equal speeds, but the outer child takes three times as long',
      'Equal periods, with the outer child moving three times as fast',
      'The outer child has a longer period and a greater speed',
      'The inner child has a shorter period and the same speed',
    ],
    correctIndex: 1,
    explanation: 'Everyone on the rigid merry-go-round completes a lap in the same time. The outer child covers a circle three times as large in that time ($v = 2\\pi r/T$), so moves three times as fast.',
    partNumber: 1,
    partTitle: 'Circular Motion Basics',
  },
  // Part 2 — Centripetal Acceleration
  {
    id: 'ucm-ent-2a',
    question: 'A car rounds a curve of radius 45 m at a constant 15 m/s. What is the magnitude of its acceleration?',
    options: [
      '$0.33\\text{ m/s}^2$',
      '$10\\text{ m/s}^2$',
      '$5.0\\text{ m/s}^2$',
      '$3.0\\text{ m/s}^2$',
    ],
    correctIndex: 2,
    explanation: 'Even at constant speed the car accelerates toward the center: $a_c = v^2/r = 225/45 = 5.0\\text{ m/s}^2$. Dividing $v$ by $r$ gives 0.33, which has the wrong units.',
    partNumber: 2,
    partTitle: 'Centripetal Acceleration',
  },
  {
    id: 'ucm-ent-2b',
    question: 'A cyclist rides around a circular track. She then halves her speed and moves to a lane with half the radius. How does her centripetal acceleration change?',
    options: [
      'It becomes one-fourth as large',
      'It becomes twice as large',
      'It stays exactly the same',
      'It becomes half as large',
    ],
    correctIndex: 3,
    explanation: '$a_c = v^2/r$: halving $v$ divides the numerator by 4, and halving $r$ multiplies the result by 2, so the acceleration is $\\tfrac{2}{4} = \\tfrac{1}{2}$ as large.',
    partNumber: 2,
    partTitle: 'Centripetal Acceleration',
  },
  // Part 3 — Direction of Centripetal Acceleration
  {
    id: 'ucm-ent-3a',
    question: 'Viewed from above, a car drives clockwise around a circular track at constant speed. At the instant the car is at the track\'s easternmost point, which way do its velocity and acceleration point?',
    options: [
      'Velocity south, acceleration west',
      'Velocity north, acceleration west',
      'Velocity south, acceleration east',
      'Velocity south, acceleration south',
    ],
    correctIndex: 0,
    explanation: 'Clockwise from above, a car at the east side is heading south (tangent to the circle), and its centripetal acceleration points toward the center, which lies to the west. At constant speed there is no acceleration component along the velocity.',
    partNumber: 3,
    partTitle: 'Direction of Centripetal Acceleration',
  },
  {
    id: 'ucm-ent-3b',
    question: 'A passenger in a car that is turning left at constant speed feels pressed against the right-hand door. Which explanation is correct?',
    options: [
      'An outward centrifugal force pushes her toward the door',
      'Her body tends to go straight, and the door pushes her inward',
      'The door pulls her outward to keep her inside the car',
      'Friction from the seat pushes her to the right',
    ],
    correctIndex: 1,
    explanation: 'In the road\'s (inertial) frame there is no outward force. Her inertia keeps her moving straight while the car turns under her, so the door presses on her, and that inward push supplies her centripetal acceleration.',
    partNumber: 3,
    partTitle: 'Direction of Centripetal Acceleration',
  },
  // Part 4 — Describing Circular Motion with Vectors
  {
    id: 'ucm-ent-4a',
    question: 'Viewed from above, a ball on a string moves counterclockwise in a horizontal circle. At the instant the ball is at the northernmost point of the circle, the string breaks. In which direction does the ball move just after?',
    options: [
      'Northwest, between the two',
      'North, directly away from the center',
      'West, along the tangent',
      'South, back toward the center',
    ],
    correctIndex: 2,
    explanation: 'Counterclockwise from above, the ball at the north point is moving west. With the string gone there is no inward force, so it continues in a straight line along that tangent velocity.',
    partNumber: 4,
    partTitle: 'Describing Circular Motion with Vectors',
  },
  {
    id: 'ucm-ent-4b',
    question: 'A wheel spins at 4.0 revolutions per second. What is the speed of a point 0.30 m from the axle?',
    options: [
      '2.5 m/s',
      '1.2 m/s',
      '24 m/s',
      '7.5 m/s',
    ],
    correctIndex: 3,
    explanation: '$\\omega = 2\\pi f = 25$ rad/s, so $v = r\\omega = 0.30(25) = 7.5$ m/s. Multiplying 0.30 m by 4.0 rev/s without the $2\\pi$ gives 1.2 m/s.',
    partNumber: 4,
    partTitle: 'Describing Circular Motion with Vectors',
  },
  // Part 5 — Non-Uniform Circular Motion Intro
  {
    id: 'ucm-ent-5a',
    question: 'A car on a curve of radius 80 m is moving at 20 m/s and speeding up at $3.0\\text{ m/s}^2$. What is the magnitude of its total acceleration?',
    options: [
      '$5.8\\text{ m/s}^2$',
      '$8.0\\text{ m/s}^2$',
      '$5.0\\text{ m/s}^2$',
      '$3.0\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'The centripetal part is $v^2/r = 400/80 = 5.0\\text{ m/s}^2$ and the tangential part is 3.0; they are perpendicular, so $a = \\sqrt{5.0^2 + 3.0^2} = 5.8\\text{ m/s}^2$. Adding them as numbers gives 8.0.',
    partNumber: 5,
    partTitle: 'Non-Uniform Circular Motion Intro',
  },
  {
    id: 'ucm-ent-5b',
    question: 'A car is slowing down as it rounds a curve. Which describes the direction of its acceleration?',
    options: [
      'Straight toward the center of the curve',
      'Inward and partly backward',
      'Partly inward and partly forward',
      'Straight backward, opposite its velocity',
    ],
    correctIndex: 1,
    explanation: 'The centripetal component points toward the center to turn the car, and the tangential component points opposite the velocity because the speed is decreasing. The total acceleration is between those two directions.',
    partNumber: 5,
    partTitle: 'Non-Uniform Circular Motion Intro',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'ucm-ent-6a',
    question: 'A Ferris wheel of radius 20 m turns once every 40 s. What is the centripetal acceleration of a rider? Use $\\pi \\approx 3.14$.',
    options: [
      '$3.1\\text{ m/s}^2$',
      '$0.16\\text{ m/s}^2$',
      '$0.49\\text{ m/s}^2$',
      '$0.99\\text{ m/s}^2$',
    ],
    correctIndex: 2,
    explanation: 'The rider\'s speed is $2\\pi(20)/40 = 3.14$ m/s, so $a_c = v^2/r = 9.87/20 = 0.49\\text{ m/s}^2$. The 3.1 value is the speed, and using the diameter in $v$ gives 0.99.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ucm-ent-6b',
    question: 'A coin rides on a turntable 0.10 m from the center while the turntable spins at 45 revolutions per minute. What is the coin\'s speed?',
    options: [
      '28 m/s',
      '0.075 m/s',
      '4.5 m/s',
      '0.47 m/s',
    ],
    correctIndex: 3,
    explanation: 'Convert first: 45 rev/min is 0.75 rev/s, so $v = 2\\pi r f = 2\\pi(0.10)(0.75) = 0.47$ m/s. Skipping the conversion to seconds gives 28 m/s, and leaving out the $2\\pi$ gives 0.075 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'ucm-ent-7a',
    question: 'A point on a spinning disc moves in a circle. If it were moved to three times the radius while the disc keeps the same period, how would its speed and centripetal acceleration change?',
    options: [
      'Speed and acceleration each triple',
      'Speed triples, acceleration stays the same',
      'Speed triples, acceleration drops to one-third',
      'Each one becomes nine times as large',
    ],
    correctIndex: 0,
    explanation: 'At a fixed period, $v = 2\\pi r/T$ triples, and $a_c = 4\\pi^2 r/T^2$ is also proportional to $r$, so it triples too. The inverse relation $a_c = v^2/r$ applies only when the speed is held fixed.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ucm-ent-7b',
    question: 'A satellite moves in a circular orbit of radius $7.0 \\times 10^6$ m at a speed of $7.5 \\times 10^3$ m/s. About how long is one orbit?',
    options: [
      '16 min',
      '98 min',
      '49 min',
      '196 min',
    ],
    correctIndex: 1,
    explanation: '$T = 2\\pi r/v = 2\\pi(7.0 \\times 10^6)/(7.5 \\times 10^3) \\approx 5.9 \\times 10^3$ s, about 98 min. Dividing $r$ by $v$ without the $2\\pi$ gives about 16 min.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Circular Motion Basics' },
    { partNumber: 2, partTitle: 'Centripetal Acceleration' },
    { partNumber: 3, partTitle: 'Direction of Centripetal Acceleration' },
    { partNumber: 4, partTitle: 'Describing Circular Motion with Vectors' },
    { partNumber: 5, partTitle: 'Non-Uniform Circular Motion Intro' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
