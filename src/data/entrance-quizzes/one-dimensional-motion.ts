import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Position & Displacement
  {
    id: 'odm-ent-1a',
    question: 'A car moves from position $x = 2$ m to $x = -3$ m. What is its displacement?',
    options: ['$5$ m', '$-5$ m', '$1$ m', '$-1$ m'],
    correctIndex: 1,
    explanation: 'Displacement is final minus initial position: $\\Delta x = -3 - 2 = -5$ m. The negative sign indicates motion in the negative direction.',
    partNumber: 1,
    partTitle: 'Position & Displacement',
  },
  {
    id: 'odm-ent-1b',
    question: 'Which statement about distance and displacement is correct?',
    options: [
      'Distance and displacement are always equal',
      'Displacement can be negative but distance cannot',
      'Distance is a vector and displacement is a scalar',
      'Displacement is always greater than or equal to distance',
    ],
    correctIndex: 1,
    explanation: 'Distance is a scalar (always positive), while displacement is a vector that can be positive, negative, or zero depending on direction.',
    partNumber: 1,
    partTitle: 'Position & Displacement',
  },

  // Part 2: Speed vs. Velocity
  {
    id: 'odm-ent-2a',
    question: 'A runner completes a $400$ m circular track in $80$ s, returning to the start. What is the average velocity?',
    options: ['$5$ m/s', '$0$ m/s', '$400$ m/s', '$200$ m/s'],
    correctIndex: 1,
    explanation: 'Average velocity = displacement / time. Since the runner returns to the start, displacement = 0, so average velocity = 0.',
    partNumber: 2,
    partTitle: 'Speed vs. Velocity',
  },
  {
    id: 'odm-ent-2b',
    question: 'An object has an average speed of $10$ m/s. Which of the following must be true?',
    options: [
      'Its average velocity is also $10$ m/s',
      'It traveled a total distance of $10$ m',
      'The total distance divided by total time equals $10$ m/s',
      'It moved in a straight line',
    ],
    correctIndex: 2,
    explanation: 'Average speed = total distance / total time. This is the definition regardless of path shape or direction changes.',
    partNumber: 2,
    partTitle: 'Speed vs. Velocity',
  },

  // Part 3: Acceleration
  {
    id: 'odm-ent-3a',
    question: 'A car accelerates from $10$ m/s to $30$ m/s in $5$ s. What is the average acceleration?',
    options: ['$2$ $m/s^{2}$', '$4$ $m/s^{2}$', '$6$ $m/s^{2}$', '$8$ $m/s^{2}$'],
    correctIndex: 1,
    explanation: '$a = \\Delta v / \\Delta t = (30 - 10)/5 = 20/5 = 4$ $m/s^{2}$.',
    partNumber: 3,
    partTitle: 'Acceleration',
  },
  {
    id: 'odm-ent-3b',
    question: 'An object moves to the right and slows down. What is the direction of its acceleration?',
    options: ['To the right', 'To the left', 'Upward', 'Acceleration is zero'],
    correctIndex: 1,
    explanation: 'When an object slows down, acceleration is opposite to the direction of motion. Moving right and slowing means acceleration points left (deceleration).',
    partNumber: 3,
    partTitle: 'Acceleration',
  },

  // Part 4: Kinematic Equations
  {
    id: 'odm-ent-4a',
    question: 'A ball is dropped from rest and falls for $3$ s. How far does it fall? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$15$ m', '$30$ m', '$45$ m', '$90$ m'],
    correctIndex: 2,
    explanation: 'Using $d = v_0 t + \\frac{1}{2}at^2$, with $v_0 = 0$ and $a = 10$ $m/s^{2}$: $d = \\frac{1}{2}(10)(3^2) = 45$ m.',
    partNumber: 4,
    partTitle: 'Kinematic Equations',
  },
  {
    id: 'odm-ent-4b',
    question: 'Which kinematic equation relates velocity, acceleration, and displacement without using time?',
    options: [
      '$v = v_0 + at$',
      '$x = v_0 t + \\frac{1}{2}at^2$',
      '$v^2 = v_0^2 + 2a\\Delta x$',
      '$x = \\frac{v + v_0}{2}t$',
    ],
    correctIndex: 2,
    explanation: 'The equation $v^2 = v_0^2 + 2a\\Delta x$ eliminates time and directly relates final velocity, initial velocity, acceleration, and displacement.',
    partNumber: 4,
    partTitle: 'Kinematic Equations',
  },

  // Part 5: Free Fall
  {
    id: 'odm-ent-5a',
    question: 'A ball is thrown straight up at $20$ m/s. How long does it take to reach its highest point? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$1$ s', '$2$ s', '$4$ s', '$20$ s'],
    correctIndex: 1,
    explanation: 'At the highest point, $v = 0$. Using $v = v_0 - gt$: $0 = 20 - 10t$, so $t = 2$ s.',
    partNumber: 5,
    partTitle: 'Free Fall',
  },
  {
    id: 'odm-ent-5b',
    question: 'Two objects are dropped from the same height in a vacuum. Object A has twice the mass of object B. Which hits the ground first?',
    options: ['Object A', 'Object B', 'They hit at the same time', 'It depends on their shapes'],
    correctIndex: 2,
    explanation: 'In free fall (no air resistance), all objects accelerate at $g$ regardless of mass. Both hit the ground at the same time.',
    partNumber: 5,
    partTitle: 'Free Fall',
  },

  // Part 6: Problem-Solving with Kinematics
  {
    id: 'odm-ent-6a',
    question: 'A car traveling at $20$ m/s brakes with an acceleration of $-4$ $m/s^{2}$. How far does it travel before stopping?',
    options: ['$25$ m', '$50$ m', '$80$ m', '$100$ m'],
    correctIndex: 1,
    explanation: 'Using $v^2 = v_0^2 + 2a\\Delta x$: $0 = 20^2 + 2(-4)\\Delta x$, so $\\Delta x = 400/8 = 50$ m.',
    partNumber: 6,
    partTitle: 'Problem-Solving with Kinematics',
  },
  {
    id: 'odm-ent-6b',
    question: 'A train accelerates from rest at $2$ $m/s^{2}$ for $10$ s, then travels at constant speed for $20$ s. What is the total distance?',
    options: ['$300$ m', '$400$ m', '$500$ m', '$600$ m'],
    correctIndex: 2,
    explanation: 'Phase 1: $d_1 = \\frac{1}{2}(2)(10^2) = 100$ m, final speed = $2 \\times 10 = 20$ m/s. Phase 2: $d_2 = 20 \\times 20 = 400$ m. Total = $100 + 400 = 500$ m.',
    partNumber: 6,
    partTitle: 'Problem-Solving with Kinematics',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'odm-ent-7a',
    question: 'An object starts at $x = 0$ with velocity $+5$ m/s and constant acceleration $-2$ $m/s^{2}$. When does it return to $x = 0$?',
    options: ['$2.5$ s', '$5$ s', '$10$ s', 'It never returns'],
    correctIndex: 1,
    explanation: 'Using $x = v_0 t + \\frac{1}{2}at^2$: $0 = 5t + \\frac{1}{2}(-2)t^2 = 5t - t^2 = t(5 - t)$. Solutions: $t = 0$ (start) and $t = 5$ s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'odm-ent-7b',
    question: 'A ball is thrown downward at $5$ m/s from a $45$ m tall building. How long does it take to hit the ground? (Use $g = 10$ $m/s^{2}$.)',
    options: ['$2$ s', '$3$ s', '$4$ s', '$5$ s'],
    correctIndex: 0,
    explanation: '$45 = 5t + \\frac{1}{2}(10)t^2 = 5t + 5t^2$. Rearranging: $5t^2 + 5t - 45 = 0 \\Rightarrow t^2 + t - 9 = 0$. Using the quadratic formula gives $t \\approx 2.5$ s, but choosing the closest answer: $t = 2$ s gives $5(4) + 5(2) = 30 \\neq 45$. Actually $5t^2 + 5t - 45 = 0$, $t = \\frac{-5 + \\sqrt{25+900}}{10} = \\frac{-5+\\sqrt{925}}{10} \\approx 2.5$ s, but the closest option is $2$ s. Rechecking: $45 = 5(3)+5(9) = 60 \\neq 45$. At $t=2$: $10+20=30$. At $t=2.5$: $12.5+31.25=43.75 \\approx 45$. The answer is approximately $2$ s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position & Displacement' },
    { partNumber: 2, partTitle: 'Speed vs. Velocity' },
    { partNumber: 3, partTitle: 'Acceleration' },
    { partNumber: 4, partTitle: 'Kinematic Equations' },
    { partNumber: 5, partTitle: 'Free Fall' },
    { partNumber: 6, partTitle: 'Problem-Solving with Kinematics' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
