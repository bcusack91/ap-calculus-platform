/**
 * Entrance Quiz — Motion Graphs — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Position-Time Graphs
  {
    id: 'mg-ent-1a',
    question: 'A cart\'s position-time graph is a straight line passing through $(t = 2\\text{ s},\\ x = 18\\text{ m})$ and $(t = 6\\text{ s},\\ x = 6\\text{ m})$. What is the cart\'s velocity?',
    options: [
      '$+3$ m/s',
      '$-3$ m/s',
      '$+9$ m/s',
      '$-0.33$ m/s',
    ],
    correctIndex: 1,
    explanation: 'Velocity is the slope: $\\dfrac{6 - 18}{6 - 2} = -3$ m/s. Dividing a single position by its time (18/2) gives $+9$ m/s, which is not a slope, and $-0.33$ comes from inverting the slope.',
    partNumber: 1,
    partTitle: 'Position-Time Graphs',
  },
  {
    id: 'mg-ent-1b',
    question: 'A toy car\'s position-time graph is a curve that rises while getting less and less steep. Which describes the car\'s motion?',
    options: [
      'Moving in the + direction and speeding up',
      'Moving in the $-$ direction and speeding up',
      'Moving in the + direction and slowing down',
      'Moving in the $-$ direction and slowing down',
    ],
    correctIndex: 2,
    explanation: 'A rising curve means positive slope, so the car moves in the + direction; a slope that shrinks means the speed is decreasing.',
    partNumber: 1,
    partTitle: 'Position-Time Graphs',
  },
  // Part 2 — Velocity-Time Graphs
  {
    id: 'mg-ent-2a',
    question: 'A velocity-time graph is a straight line from $v = 4$ m/s at $t = 0$ to $v = 16$ m/s at $t = 10$ s. What is the displacement over these 10 s?',
    options: [
      '60 m',
      '40 m',
      '80 m',
      '100 m',
    ],
    correctIndex: 3,
    explanation: 'Displacement is the area under the $v$-$t$ line, a trapezoid: $\\tfrac{1}{2}(4 + 16)(10) = 100$ m. Using only the triangle above 4 m/s gives 60 m, and treating the region as a triangle from zero gives 80 m.',
    partNumber: 2,
    partTitle: 'Velocity-Time Graphs',
  },
  {
    id: 'mg-ent-2b',
    question: 'On one velocity-time graph, the straight lines for carts P and Q both start at $v = 0$ at $t = 0$ and stay above the time axis, with P\'s line steeper. Which is true at $t = 5$ s?',
    options: [
      'P has greater acceleration and has gone farther',
      'P has the greater acceleration, but they have traveled equally far',
      'P is moving faster, but Q has the greater displacement so far',
      'They share the same acceleration because both of them start from rest',
    ],
    correctIndex: 0,
    explanation: 'Slope gives acceleration, so the steeper line has the greater acceleration. The area under P\'s line is also larger at every time, so P has the larger displacement.',
    partNumber: 2,
    partTitle: 'Velocity-Time Graphs',
  },
  // Part 3 — Acceleration-Time Graphs
  {
    id: 'mg-ent-3a',
    question: 'A cart starts with velocity $-5$ m/s. Its acceleration-time graph shows $a = +3\\text{ m/s}^2$ from $t = 0$ to 4 s and $a = -2\\text{ m/s}^2$ from $t = 4$ s to 10 s. What is its velocity at $t = 10$ s?',
    options: [
      '$+7$ m/s',
      '$-5$ m/s',
      '$0$ m/s',
      '$+19$ m/s',
    ],
    correctIndex: 1,
    explanation: 'The area under the $a$-$t$ graph is the change in velocity: $(3)(4) + (-2)(6) = 0$, so the velocity returns to its initial $-5$ m/s. Stopping after the first interval gives $+7$ m/s.',
    partNumber: 3,
    partTitle: 'Acceleration-Time Graphs',
  },
  {
    id: 'mg-ent-3b',
    question: 'An object moving at 3 m/s has an acceleration that increases steadily from 0 at $t = 0$ to $5\\text{ m/s}^2$ at $t = 6$ s. What is its speed at $t = 6$ s?',
    options: [
      '33 m/s',
      '15 m/s',
      '18 m/s',
      '8 m/s',
    ],
    correctIndex: 2,
    explanation: 'The area under the $a$-$t$ graph is a triangle, $\\tfrac{1}{2}(6)(5) = 15$ m/s, which is the change in velocity, so $v = 3 + 15 = 18$ m/s. Using a rectangle (30 m/s) or leaving out the initial 3 m/s gives the other values.',
    partNumber: 3,
    partTitle: 'Acceleration-Time Graphs',
  },
  // Part 4 — Converting Between Graph Types
  {
    id: 'mg-ent-4a',
    question: 'A ball\'s position-time graph is a downward-opening parabola that peaks at $t = 3$ s (up is positive). Which pair of graphs matches this motion?',
    options: [
      '$v$-$t$: horizontal line; $a$-$t$: line at zero',
      '$v$-$t$: falling straight line crossing zero at 3 s; $a$-$t$: zero at 3 s only',
      '$v$-$t$: parabola peaking at 3 s; $a$-$t$: falling straight line',
      '$v$-$t$: falling straight line crossing zero at 3 s; $a$-$t$: constant negative line',
    ],
    correctIndex: 3,
    explanation: 'The slope of the $x$-$t$ parabola decreases steadily and is zero at the peak, so $v$-$t$ is a falling line through zero at 3 s. The slope of that line is a constant negative value, so the $a$-$t$ graph is a horizontal line below the axis.',
    partNumber: 4,
    partTitle: 'Converting Between Graph Types',
  },
  {
    id: 'mg-ent-4b',
    question: 'A cart starts at $x = 10$ m. Its velocity-time graph is constant at $+4$ m/s from $t = 0$ to 3 s, then decreases in a straight line to 0 at $t = 5$ s. What is the cart\'s position at $t = 5$ s?',
    options: [
      '26 m',
      '16 m',
      '30 m',
      '22 m',
    ],
    correctIndex: 0,
    explanation: 'The area under the $v$-$t$ graph is $(4)(3) + \\tfrac{1}{2}(2)(4) = 16$ m of displacement, added to the starting position: $10 + 16 = 26$ m. Forgetting $x_0$ gives 16 m and dropping the triangle\'s $\\tfrac{1}{2}$ gives 30 m.',
    partNumber: 4,
    partTitle: 'Converting Between Graph Types',
  },
  // Part 5 — Non-Uniform Motion on Graphs
  {
    id: 'mg-ent-5a',
    question: 'A runner\'s velocity is $+6$ m/s from $t = 0$ to 3 s; then her velocity-time graph falls in a straight line from $+6$ m/s at $t = 3$ s to $-6$ m/s at $t = 9$ s. What total distance does she cover from 0 to 9 s?',
    options: [
      '18 m',
      '36 m',
      '27 m',
      '54 m',
    ],
    correctIndex: 1,
    explanation: 'Distance adds the magnitudes of all areas: $18 + \\tfrac{1}{2}(3)(6) + \\tfrac{1}{2}(3)(6) = 36$ m. The net displacement is only 18 m because the two triangles cancel.',
    partNumber: 5,
    partTitle: 'Non-Uniform Motion on Graphs',
  },
  {
    id: 'mg-ent-5b',
    question: 'A position-time graph rises, flattens to a horizontal tangent at $t = 4$ s, and then falls ever more steeply. What is the object doing?',
    options: [
      'Speeding up in the + direction the whole time, then stopping at 4 s',
      'Moving at constant speed, with a reversal of direction at 4 s',
      'Slowing to rest at 4 s, then speeding up the other way',
      'Slowing down the whole time, while staying in the + direction',
    ],
    correctIndex: 2,
    explanation: 'The slope (velocity) is positive and shrinking before 4 s, zero at the turning point, then negative and growing in size, so the object stops and speeds up the other way.',
    partNumber: 5,
    partTitle: 'Non-Uniform Motion on Graphs',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'mg-ent-6a',
    question: 'A car starts from rest. Its velocity-time graph rises in a straight line to 15 m/s at $t = 5$ s, stays at 15 m/s until $t = 12$ s, then falls in a straight line to rest at $t = 15$ s. What is its average velocity for the 15 s?',
    options: [
      '7.5 m/s',
      '15 m/s',
      '5.5 m/s',
      '11 m/s',
    ],
    correctIndex: 3,
    explanation: 'The total area is $37.5 + 105 + 22.5 = 165$ m, so the average velocity is $165/15 = 11$ m/s. Averaging the starting and peak speeds gives 7.5 m/s, which ignores the long cruise.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'mg-ent-6b',
    question: 'Carts A and B start side by side at $t = 0$. A moves at a constant 6 m/s, while B starts from rest with a constant acceleration of $2\\text{ m/s}^2$. When does B catch up with A?',
    options: [
      'At 6 s',
      'At 3 s',
      'At 12 s',
      'At 9 s',
    ],
    correctIndex: 0,
    explanation: 'B catches A when the areas under their $v$-$t$ graphs are equal: $6t = \\tfrac{1}{2}(2)t^2$, so $t = 6$ s. At 3 s their velocities are equal, which is when A\'s lead is largest, not when B catches up.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'mg-ent-7a',
    question: 'A ball is thrown straight up and caught at the same height (up is positive, air resistance negligible). Which set describes its $x$-$t$, $v$-$t$ and $a$-$t$ graphs, in that order?',
    options: [
      'Downward parabola; downward parabola; falling straight line',
      'Downward parabola; falling line through zero; constant negative line',
      'Rising then falling lines; positive then negative constants; zero',
      'Downward parabola; falling line through zero; zero at the peak only',
    ],
    correctIndex: 1,
    explanation: 'Constant acceleration $-g$ gives a horizontal $a$-$t$ line below the axis, a $v$-$t$ line of slope $-g$ crossing zero at the top, and a concave-down $x$-$t$ parabola. The acceleration is not zero at the peak; only the velocity is.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'mg-ent-7b',
    question: 'An object starts from rest. Its velocity-time graph rises in a straight line to 8 m/s at $t = 2$ s, stays at 8 m/s until $t = 6$ s, then falls in a straight line to $-4$ m/s at $t = 9$ s. What are its displacement and total distance from 0 to 9 s?',
    options: [
      'Displacement 50 m, distance 50 m',
      'Displacement 46 m, distance 46 m',
      'Displacement 46 m, distance 50 m',
      'Displacement 42 m, distance 50 m',
    ],
    correctIndex: 2,
    explanation: 'The areas are $8 + 32 + 8 = 48$ m above the axis (the last line crosses zero at 8 s) and 2 m below, so the displacement is $48 - 2 = 46$ m while the distance is $48 + 2 = 50$ m.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position-Time Graphs' },
    { partNumber: 2, partTitle: 'Velocity-Time Graphs' },
    { partNumber: 3, partTitle: 'Acceleration-Time Graphs' },
    { partNumber: 4, partTitle: 'Converting Between Graph Types' },
    { partNumber: 5, partTitle: 'Non-Uniform Motion on Graphs' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
