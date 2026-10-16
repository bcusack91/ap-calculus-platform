/**
 * Entrance Quiz — Two-Dimensional Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Vectors & Components
  {
    id: 'tdm-ent-1a',
    question: 'A 40 N force points $150^\\circ$ counterclockwise from the $+x$ axis (that is, $30^\\circ$ above the $-x$ axis). What are its components? Use $\\cos 30^\\circ = 0.866$ and $\\sin 30^\\circ = 0.5$.',
    options: [
      '$F_x = -20$ N, $F_y = +34.6$ N',
      '$F_x = +34.6$ N, $F_y = +20$ N',
      '$F_x = -34.6$ N, $F_y = +20$ N',
      '$F_x = -34.6$ N, $F_y = -20$ N',
    ],
    correctIndex: 2,
    explanation: 'The vector lies in the second quadrant, so $F_x$ is negative and $F_y$ positive. Measured from the $-x$ axis, the side adjacent to $30^\\circ$ is horizontal: $|F_x| = 40\\cos 30^\\circ = 34.6$ N and $F_y = 40\\sin 30^\\circ = 20$ N.',
    partNumber: 1,
    partTitle: 'Vectors & Components',
  },
  {
    id: 'tdm-ent-1b',
    question: 'A velocity has components $v_x = -6$ m/s and $v_y = -8$ m/s. What are its magnitude and direction?',
    options: [
      '10 m/s, $53^\\circ$ below the $+x$ axis',
      '14 m/s, $53^\\circ$ below the $-x$ axis',
      '10 m/s, $37^\\circ$ below the $-x$ axis',
      '10 m/s, $53^\\circ$ below the $-x$ axis',
    ],
    correctIndex: 3,
    explanation: '$v = \\sqrt{6^2 + 8^2} = 10$ m/s. Both components are negative, so the vector points into the third quadrant, at $\\tan^{-1}(8/6) = 53^\\circ$ below the $-x$ axis. Adding the components directly gives the wrong 14 m/s.',
    partNumber: 1,
    partTitle: 'Vectors & Components',
  },
  // Part 2 — Vector Addition & Subtraction
  {
    id: 'tdm-ent-2a',
    question: 'Vector $\\vec{A} = 5\\hat{i} + 2\\hat{j}$ m and vector $\\vec{B} = -2\\hat{i} + 2\\hat{j}$ m. What is the magnitude of $\\vec{A} - \\vec{B}$?',
    options: [
      '7.0 m',
      '8.2 m',
      '5.0 m',
      '2.6 m',
    ],
    correctIndex: 0,
    explanation: 'Subtract component by component: $\\vec{A} - \\vec{B} = (5 - (-2))\\hat{i} + (2 - 2)\\hat{j} = 7\\hat{i}$, so the magnitude is 7.0 m. The 5.0 m value is $|\\vec{A} + \\vec{B}|$, and 8.2 m and 2.6 m come from adding or subtracting the magnitudes.',
    partNumber: 2,
    partTitle: 'Vector Addition & Subtraction',
  },
  {
    id: 'tdm-ent-2b',
    question: 'A car rounds a corner at constant speed, going from 20 m/s east to 20 m/s north. What is its change in velocity, $\\Delta\\vec{v} = \\vec{v}_f - \\vec{v}_i$?',
    options: [
      'Zero, as the speed is constant',
      '28 m/s toward the northwest',
      '28 m/s to the northeast',
      '40 m/s to the northwest',
    ],
    correctIndex: 1,
    explanation: '$\\Delta\\vec{v} = \\vec{v}_f + (-\\vec{v}_i)$ = 20 m/s north plus 20 m/s west, which has magnitude $\\sqrt{20^2 + 20^2} \\approx 28$ m/s and points northwest. Velocity changes even at constant speed because its direction changes.',
    partNumber: 2,
    partTitle: 'Vector Addition & Subtraction',
  },
  // Part 3 — Relative Motion
  {
    id: 'tdm-ent-3a',
    question: 'A truck drives east at 25 m/s on a straight highway, and a car on the same highway drives west at 15 m/s. What is the velocity of the car relative to the truck?',
    options: [
      '10 m/s west',
      '40 m/s east',
      '40 m/s west',
      '10 m/s east',
    ],
    correctIndex: 2,
    explanation: '$\\vec{v}_{CT} = \\vec{v}_{CG} - \\vec{v}_{TG} = (-15) - (+25) = -40$ m/s, so to the truck driver the car approaches at 40 m/s westward. Subtracting the speeds (10 m/s) ignores that they move in opposite directions.',
    partNumber: 3,
    partTitle: 'Relative Motion',
  },
  {
    id: 'tdm-ent-3b',
    question: 'A drone that flies at 12 m/s relative to the air makes a 240 m trip straight into a steady 4 m/s headwind and then flies straight back with the same wind behind it. How long does the round trip take?',
    options: [
      '40 s',
      '30 s',
      '60 s',
      '45 s',
    ],
    correctIndex: 3,
    explanation: 'Relative to the ground the drone moves at $12 - 4 = 8$ m/s out (30 s) and $12 + 4 = 16$ m/s back (15 s), for 45 s. The wind does not cancel out, because the drone spends longer flying against it; 40 s is the windless time.',
    partNumber: 3,
    partTitle: 'Relative Motion',
  },
  // Part 4 — Independence of Horizontal and Vertical Motion
  {
    id: 'tdm-ent-4a',
    question: 'Two balls roll off the same horizontal tabletop at the same moment: ball A at 1 m/s and ball B at 2 m/s. Ignoring air resistance, how does B\'s landing distance from the table compare with A\'s?',
    options: [
      'Twice as far',
      'Four times as far',
      'The same distance',
      '$\\sqrt{2}$ times as far',
    ],
    correctIndex: 0,
    explanation: 'Both start with zero vertical velocity and fall the same height, so their fall times are equal. With equal times, the horizontal distance $v_x t$ is proportional to the launch speed, so B lands twice as far out.',
    partNumber: 4,
    partTitle: 'Independence of Horizontal and Vertical Motion',
  },
  {
    id: 'tdm-ent-4b',
    question: 'A marble rolls off a 1.8 m high table at 3.0 m/s. How far from the table\'s edge does it land? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '1.3 m',
      '1.8 m',
      '1.1 m',
      '3.6 m',
    ],
    correctIndex: 1,
    explanation: 'The fall time comes from the vertical motion alone: $1.8 = \\tfrac{1}{2}(10)t^2$, so $t = 0.60$ s. The horizontal velocity stays 3.0 m/s, so $\\Delta x = 3.0 \\times 0.60 = 1.8$ m.',
    partNumber: 4,
    partTitle: 'Independence of Horizontal and Vertical Motion',
  },
  // Part 5 — Vector Practice Problems
  {
    id: 'tdm-ent-5a',
    question: 'A stone is thrown horizontally at 8.0 m/s from a ledge 3.2 m above the ground. What is its speed just before it lands? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '16.0 m/s',
      '8.0 m/s',
      '11.3 m/s',
      '4.0 m/s',
    ],
    correctIndex: 2,
    explanation: 'The fall takes $t = \\sqrt{2(3.2)/10} = 0.80$ s, so $v_y = 10(0.80) = 8.0$ m/s while $v_x$ stays 8.0 m/s. The speed is $\\sqrt{8^2 + 8^2} = 11.3$ m/s; adding the components as numbers gives 16.0 m/s.',
    partNumber: 5,
    partTitle: 'Vector Practice Problems',
  },
  {
    id: 'tdm-ent-5b',
    question: 'A ball is launched from the ground at 20 m/s, $53^\\circ$ above the horizontal ($\\sin 53^\\circ = 0.8$, $\\cos 53^\\circ = 0.6$). Where is it 1.0 s later, relative to the launch point? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '12 m forward, 16 m up',
      '12 m forward, 6 m up',
      '16 m forward, 7 m up',
      '12 m forward, 11 m up',
    ],
    correctIndex: 3,
    explanation: '$v_{0x} = 12$ m/s and $v_{0y} = 16$ m/s, so $x = 12(1.0) = 12$ m and $y = 16(1.0) - \\tfrac{1}{2}(10)(1.0)^2 = 11$ m. Leaving out gravity gives 16 m up, and swapping sine and cosine gives 16 m forward.',
    partNumber: 5,
    partTitle: 'Vector Practice Problems',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'tdm-ent-6a',
    question: 'A ball is kicked from level ground at 25 m/s, $37^\\circ$ above the horizontal ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). How far away does it land? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '60 m',
      '75 m',
      '30 m',
      '45 m',
    ],
    correctIndex: 0,
    explanation: '$v_{0y} = 15$ m/s gives a flight time of $2(15)/10 = 3.0$ s, and $v_{0x} = 20$ m/s, so the range is $20 \\times 3.0 = 60$ m. Using only the time to the top gives 30 m, and multiplying the full 25 m/s by the time gives 75 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tdm-ent-6b',
    question: 'A helicopter flying horizontally at a constant 30 m/s releases a package from 45 m above flat ground. Ignoring air resistance, where is the package relative to the helicopter when it lands?',
    options: [
      '90 m behind the helicopter',
      'Directly below the helicopter',
      '45 m behind the helicopter',
      '90 m ahead of the helicopter',
    ],
    correctIndex: 1,
    explanation: 'The package keeps the helicopter\'s 30 m/s horizontal velocity for its whole 3.0 s fall, so both cover 90 m horizontally and the package stays directly beneath the helicopter.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'tdm-ent-7a',
    question: 'A ball is launched from level ground at 20 m/s, $30^\\circ$ above the horizontal ($\\sin 30^\\circ = 0.5$, $\\cos 30^\\circ = 0.866$). What is its speed at the highest point of its path? Ignore air resistance.',
    options: [
      '0 m/s',
      '10 m/s',
      '17.3 m/s',
      '20 m/s',
    ],
    correctIndex: 2,
    explanation: 'At the top only the vertical velocity is zero; the horizontal component $20\\cos 30^\\circ = 17.3$ m/s is unchanged throughout the flight, so that is the speed at the top.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'tdm-ent-7b',
    question: 'Two balls are launched from level ground with the same speed, one at $30^\\circ$ and one at $60^\\circ$ above the horizontal. Ignoring air resistance, how do their flights compare?',
    options: [
      'The $30^\\circ$ ball has the greater range, and both reach the same height',
      'The $60^\\circ$ ball has the greater range and the greater height',
      'Equal ranges and equal heights, but the $60^\\circ$ ball flies longer',
      'Equal ranges, but the $60^\\circ$ ball flies higher and longer',
    ],
    correctIndex: 3,
    explanation: 'Complementary angles give the same range. The $60^\\circ$ ball has the larger vertical component, so it rises higher and stays up longer, while its smaller horizontal component covers the same distance in that longer time.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Vectors & Components' },
    { partNumber: 2, partTitle: 'Vector Addition & Subtraction' },
    { partNumber: 3, partTitle: 'Relative Motion' },
    { partNumber: 4, partTitle: 'Independence of Horizontal and Vertical Motion' },
    { partNumber: 5, partTitle: 'Vector Practice Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
