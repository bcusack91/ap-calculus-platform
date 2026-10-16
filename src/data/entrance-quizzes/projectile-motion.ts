/**
 * Entrance Quiz — Projectile Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Horizontal Launch
  {
    id: 'pm-ent-1a',
    question: 'A ball is launched horizontally from the top of a 45 m cliff and lands 60 m from the base. What was its launch speed? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '13 m/s',
      '28 m/s',
      '10 m/s',
      '20 m/s',
    ],
    correctIndex: 3,
    explanation: 'The fall time depends only on the height: $45 = \\tfrac{1}{2}(10)t^2$ gives $t = 3.0$ s. The horizontal speed is constant, so $v_0 = 60/3.0 = 20$ m/s. Using $t = 45/10$ s gives 13 m/s.',
    partNumber: 1,
    partTitle: 'Horizontal Launch',
  },
  {
    id: 'pm-ent-1b',
    question: 'A ball rolls off a level table at a fixed speed and lands a certain distance from the table\'s edge. To make it land twice as far from the edge at the same launch speed, how high must the table be?',
    options: [
      'Four times as high',
      'Twice as high',
      '$\\sqrt{2}$ times as high',
      'Eight times as high',
    ],
    correctIndex: 0,
    explanation: 'The landing distance is $v_0 t$, so the fall time must double. Since $h = \\tfrac{1}{2}gt^2$, doubling $t$ requires four times the height.',
    partNumber: 1,
    partTitle: 'Horizontal Launch',
  },
  // Part 2 — Angled Launch
  {
    id: 'pm-ent-2a',
    question: 'A ball is launched at 30 m/s, $37^\\circ$ above the horizontal ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). What are its velocity components 2.0 s after launch? Use $g = 10\\text{ m/s}^2$, with up positive.',
    options: [
      '$v_x = 24$ m/s, $v_y = +18$ m/s',
      '$v_x = 24$ m/s, $v_y = -2$ m/s',
      '$v_x = 18$ m/s, $v_y = +4$ m/s',
      '$v_x = 4$ m/s, $v_y = -2$ m/s',
    ],
    correctIndex: 1,
    explanation: '$v_x = 30\\cos 37^\\circ = 24$ m/s never changes, while $v_y = 30\\sin 37^\\circ - gt = 18 - 20 = -2$ m/s, so the ball has just passed its peak. Gravity changes only the vertical component.',
    partNumber: 2,
    partTitle: 'Angled Launch',
  },
  {
    id: 'pm-ent-2b',
    question: 'A player keeps the same launch speed but raises the launch angle from $30^\\circ$ to $50^\\circ$. How do the initial velocity components change?',
    options: [
      'Both of the components grow, because the launch is steeper',
      'The horizontal part grows while the vertical part shrinks',
      'The vertical part grows and the horizontal part shrinks',
      'Neither one changes, because the launch speed is the same',
    ],
    correctIndex: 2,
    explanation: '$v_{0y} = v_0\\sin\\theta$ increases and $v_{0x} = v_0\\cos\\theta$ decreases as $\\theta$ increases toward $90^\\circ$; the components always combine to the same speed.',
    partNumber: 2,
    partTitle: 'Angled Launch',
  },
  // Part 3 — Time of Flight and Range
  {
    id: 'pm-ent-3a',
    question: 'A ball is launched from level ground at 20 m/s, $30^\\circ$ above the horizontal ($\\sin 30^\\circ = 0.5$, $\\cos 30^\\circ = 0.866$). How far away does it land? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '17.3 m',
      '40.0 m',
      '20.0 m',
      '34.6 m',
    ],
    correctIndex: 3,
    explanation: 'The flight time is $2v_{0y}/g = 2(10)/10 = 2.0$ s, and $v_{0x} = 17.3$ m/s, so the range is $17.3 \\times 2.0 = 34.6$ m. Using only the time to the top gives 17.3 m, and multiplying the full 20 m/s by the time gives 40.0 m.',
    partNumber: 3,
    partTitle: 'Time of Flight and Range',
  },
  {
    id: 'pm-ent-3b',
    question: 'On a planet where $g$ is twice its value on Earth, a ball is launched with the same speed and angle as a ball on Earth. How does its range compare with the range on Earth?',
    options: [
      'Half as far',
      'One-fourth as far',
      'Twice as far',
      'The same distance',
    ],
    correctIndex: 0,
    explanation: 'The flight time $2v_0\\sin\\theta/g$ is halved while $v_{0x}$ is unchanged, so the range $v_0^2\\sin 2\\theta/g$ is half as large.',
    partNumber: 3,
    partTitle: 'Time of Flight and Range',
  },
  // Part 4 — Maximum Height
  {
    id: 'pm-ent-4a',
    question: 'A ball launched from level ground reaches a maximum height of 20 m and lands 60 m away. What was its launch speed? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '20 m/s',
      '25 m/s',
      '35 m/s',
      '15 m/s',
    ],
    correctIndex: 1,
    explanation: 'From $h = v_{0y}^2/(2g)$, $v_{0y} = 20$ m/s, so the flight lasts $2(20)/10 = 4.0$ s and $v_{0x} = 60/4.0 = 15$ m/s. The launch speed is $\\sqrt{15^2 + 20^2} = 25$ m/s; adding the components gives 35 m/s.',
    partNumber: 4,
    partTitle: 'Maximum Height',
  },
  {
    id: 'pm-ent-4b',
    question: 'Ball A is thrown straight up at speed $v$, and ball B is thrown at speed $v$ at $30^\\circ$ above the horizontal ($\\sin 30^\\circ = 0.5$). How does A\'s maximum height compare with B\'s?',
    options: [
      'Twice as high',
      'Just as high',
      'Four times as high',
      '$\\sqrt{2}$ times as high',
    ],
    correctIndex: 2,
    explanation: 'Maximum height depends on the vertical component only: $h = v_{0y}^2/(2g)$. B\'s vertical component is $v/2$, so its height is one-fourth of A\'s.',
    partNumber: 4,
    partTitle: 'Maximum Height',
  },
  // Part 5 — Symmetry of Trajectory
  {
    id: 'pm-ent-5a',
    question: 'A ball launched from level ground has velocity components $v_x = 12$ m/s and $v_y = +10$ m/s at $t = 1.0$ s. What is its velocity when it passes the same height on the way down? Ignore air resistance.',
    options: [
      '12 m/s horizontally and 20 m/s down',
      '12 m/s horizontally and 10 m/s upward',
      '0 m/s horizontally and 10 m/s downward',
      '12 m/s horizontally and 10 m/s downward',
    ],
    correctIndex: 3,
    explanation: 'The horizontal component never changes, and by symmetry the vertical velocity at a given height has the same magnitude on the way down but the opposite direction.',
    partNumber: 5,
    partTitle: 'Symmetry of Trajectory',
  },
  {
    id: 'pm-ent-5b',
    question: 'A ball is thrown at 15 m/s at $40^\\circ$ above the horizontal from the ground and lands on a flat roof higher than the launch point. Ignoring air resistance, what is its speed when it lands?',
    options: [
      'Less than 15 m/s',
      'More than 15 m/s',
      'Exactly 15 m/s',
      'Zero',
    ],
    correctIndex: 0,
    explanation: 'Symmetry holds only for landing at the launch height. Here the ball ends higher, so part of its vertical speed has not been regained and $v^2 = v_0^2 - 2g\\Delta y$ is less than $v_0^2$.',
    partNumber: 5,
    partTitle: 'Symmetry of Trajectory',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'pm-ent-6a',
    question: 'A ball is launched from the top of a 20 m cliff at 25 m/s, $37^\\circ$ above the horizontal ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$), and lands on flat ground below. How far from the base of the cliff does it land? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '60 m',
      '80 m',
      '100 m',
      '40 m',
    ],
    correctIndex: 1,
    explanation: 'With up positive, $-20 = 15t - 5t^2$ gives $t^2 - 3t - 4 = 0$, so $t = 4.0$ s. Then $\\Delta x = 20 \\times 4.0 = 80$ m. Using the ground-to-ground time of 3.0 s gives 60 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'pm-ent-6b',
    question: 'Two balls are kicked from level ground at the same speed, one at $40^\\circ$ and one at $50^\\circ$ above the horizontal. Ignoring air resistance, which lands first, and why?',
    options: [
      'They land together, because their ranges are equal',
      'The $50^\\circ$ ball, since its horizontal part is smaller',
      'The $40^\\circ$ ball, because its vertical component is smaller',
      'The $50^\\circ$ ball, because it covers the same range faster',
    ],
    correctIndex: 2,
    explanation: 'Flight time depends only on the vertical component ($2v_0\\sin\\theta/g$), which is smaller at $40^\\circ$. The two ranges are equal, but equal range does not mean equal time.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'pm-ent-7a',
    question: 'A motorbike leaves the end of a horizontal ramp and lands on ground lower than the ramp. Ignoring air resistance, which single change would double the horizontal distance it travels before landing?',
    options: [
      'Halving the drop height',
      'Doubling the drop height',
      'Doubling the bike\'s mass',
      'Doubling the launch speed',
    ],
    correctIndex: 3,
    explanation: 'The fall time is set by the drop height alone, and the horizontal distance is speed times that time, so doubling the launch speed doubles the distance. Doubling the height only multiplies the time by $\\sqrt{2}$, and mass has no effect.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'pm-ent-7b',
    question: 'A ball is kicked from the ground at 20 m/s, $37^\\circ$ above the horizontal ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$), toward a wall 32 m away. How high above the ground does it hit the wall? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '4 m',
      '7.2 m',
      '24 m',
      '14 m',
    ],
    correctIndex: 0,
    explanation: 'The ball reaches the wall when $16t = 32$, so $t = 2.0$ s. Its height is then $12(2.0) - \\tfrac{1}{2}(10)(2.0)^2 = 4$ m, on the way down. Leaving out gravity gives 24 m, and 7.2 m is the peak height.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Horizontal Launch' },
    { partNumber: 2, partTitle: 'Angled Launch' },
    { partNumber: 3, partTitle: 'Time of Flight and Range' },
    { partNumber: 4, partTitle: 'Maximum Height' },
    { partNumber: 5, partTitle: 'Symmetry of Trajectory' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
