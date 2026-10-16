/**
 * Entrance Quiz — Inclined Planes — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Forces on an Incline
  {
    id: 'ip-ent-1a',
    question: 'An 8.0 kg crate rests on a ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). What are the component of its weight along the ramp and the normal force on it? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '64 N along the ramp, normal force 48 N',
      '80 N along the ramp, normal force 64 N',
      '48 N along the ramp, normal force 80 N',
      '48 N along the ramp, normal force 64 N',
    ],
    correctIndex: 3,
    explanation: 'The component along the slope is $mg\\sin 37^\\circ = 80(0.6) = 48$ N, and the normal force balances the perpendicular component, $mg\\cos 37^\\circ = 80(0.8) = 64$ N. The normal force is less than the 80 N weight on any incline.',
    partNumber: 1,
    partTitle: 'Forces on an Incline',
  },
  {
    id: 'ip-ent-1b',
    question: 'A block rests on a ramp that is slowly tilted to a steeper angle. How do the normal force and the weight component along the ramp change?',
    options: [
      'The normal force drops as the downhill pull grows',
      'The downhill pull drops while the normal force grows',
      'Neither changes, since the block\'s weight stays constant',
      'Both grow, since the block presses harder into the ramp',
    ],
    correctIndex: 0,
    explanation: 'The normal force equals $mg\\cos\\theta$, which decreases as $\\theta$ increases, while the downhill component $mg\\sin\\theta$ increases. The weight itself is unchanged; only how it splits between the two directions changes.',
    partNumber: 1,
    partTitle: 'Forces on an Incline',
  },
  // Part 2 — Frictionless Inclines
  {
    id: 'ip-ent-2a',
    question: 'A block starts from rest and slides 3.6 m down a frictionless ramp inclined at $30^\\circ$. What is its speed at the bottom? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '8.5 m/s',
      '6.0 m/s',
      '4.2 m/s',
      '7.9 m/s',
    ],
    correctIndex: 1,
    explanation: 'Along the slope $a = g\\sin 30^\\circ = 5.0\\text{ m/s}^2$, so $v^2 = 2(5.0)(3.6) = 36$ and $v = 6.0$ m/s. Using the full $g$ gives 8.5 m/s, and using $\\cos 30^\\circ$ gives 7.9 m/s.',
    partNumber: 2,
    partTitle: 'Frictionless Inclines',
  },
  {
    id: 'ip-ent-2b',
    question: 'A block is launched at 8.0 m/s up a frictionless ramp inclined at $30^\\circ$. How long after launch does it return to the launch point? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '1.6 s',
      '0.80 s',
      '3.2 s',
      '1.8 s',
    ],
    correctIndex: 2,
    explanation: 'The acceleration is $g\\sin 30^\\circ = 5.0\\text{ m/s}^2$ down the slope both going up and coming down, so it takes $8.0/5.0 = 1.6$ s to stop and the same time to return: 3.2 s. The 1.6 s value is only the trip up, and using $\\cos 30^\\circ$ gives 1.8 s.',
    partNumber: 2,
    partTitle: 'Frictionless Inclines',
  },
  // Part 3 — Inclines with Friction
  {
    id: 'ip-ent-3a',
    question: 'A 4.0 kg block slides down a ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$) with $\\mu_k = 0.50$. What is its acceleration? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$6.0\\text{ m/s}^2$',
      '$10\\text{ m/s}^2$',
      '$3.0\\text{ m/s}^2$',
      '$2.0\\text{ m/s}^2$',
    ],
    correctIndex: 3,
    explanation: '$a = g(\\sin\\theta - \\mu_k\\cos\\theta) = 10(0.6 - 0.5 \\times 0.8) = 2.0\\text{ m/s}^2$. Leaving out friction gives 6.0, and adding friction to gravity (as when sliding up) gives 10.',
    partNumber: 3,
    partTitle: 'Inclines with Friction',
  },
  {
    id: 'ip-ent-3b',
    question: 'A block slides down a rough ramp at constant velocity. It is then launched up the same ramp. While it moves up, what is the magnitude of its acceleration, in terms of the ramp angle $\\theta$?',
    options: [
      '$2g\\sin\\theta$',
      '$g\\sin\\theta$',
      '$0$',
      '$\\tfrac{1}{2}g\\sin\\theta$',
    ],
    correctIndex: 0,
    explanation: 'Constant velocity downhill means friction equals $mg\\sin\\theta$. Going up, friction and the downhill weight component both point down the slope, so the net force is $2mg\\sin\\theta$ and $a = 2g\\sin\\theta$.',
    partNumber: 3,
    partTitle: 'Inclines with Friction',
  },
  // Part 4 — Connected Systems on Inclines
  {
    id: 'ip-ent-4a',
    question: 'A 6.0 kg block on a frictionless ramp inclined at $30^\\circ$ is tied by a string over an ideal pulley to a hanging 4.0 kg block. What is the tension in the string? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '40 N',
      '36 N',
      '30 N',
      '44 N',
    ],
    correctIndex: 1,
    explanation: 'The driving force is $40 - 60\\sin 30^\\circ = 10$ N on 10 kg, so $a = 1.0\\text{ m/s}^2$ with the hanging block falling. Then $T = m_2(g - a) = 4.0(9.0) = 36$ N, between the 30 N downhill pull and the 40 N hanging weight.',
    partNumber: 4,
    partTitle: 'Connected Systems on Inclines',
  },
  {
    id: 'ip-ent-4b',
    question: 'A 10 kg block on a frictionless ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$) is tied by a string over an ideal pulley to a hanging 5.0 kg block. The blocks are released from rest. What happens?',
    options: [
      'Neither moves, as the two weights balance',
      'The hanging block falls and the ramp block moves up',
      'The ramp block slides down and the hanging block rises',
      'The hanging block falls, as it hangs straight down',
    ],
    correctIndex: 2,
    explanation: 'Compare the forces along the string: the downhill pull on the ramp block is $10g\\sin 37^\\circ = 60$ N, larger than the 50 N weight of the hanging block, so the ramp block wins. Only the component of weight along the ramp matters, not the full 100 N weight.',
    partNumber: 4,
    partTitle: 'Connected Systems on Inclines',
  },
  // Part 5 — Acceleration and Velocity on Inclines
  {
    id: 'ip-ent-5a',
    question: 'A block is launched at 8.0 m/s up a ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$) with $\\mu_k = 0.25$. How far up the ramp does it slide? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5.3 m',
      '3.2 m',
      '8.0 m',
      '4.0 m',
    ],
    correctIndex: 3,
    explanation: 'Going up, gravity and friction both oppose the motion: $a = 10(0.6 + 0.25 \\times 0.8) = 8.0\\text{ m/s}^2$, so $d = 64/(2 \\times 8.0) = 4.0$ m. Without friction it would go 5.3 m, and subtracting friction instead gives 8.0 m.',
    partNumber: 5,
    partTitle: 'Acceleration and Velocity on Inclines',
  },
  {
    id: 'ip-ent-5b',
    question: 'A block launched at 8.0 m/s up a rough ramp slides 4.0 m, stops, and then slides back down with an acceleration of $4.0\\text{ m/s}^2$. What is its speed when it returns to the launch point?',
    options: [
      '5.7 m/s',
      '4.0 m/s',
      '8.0 m/s',
      '2.8 m/s',
    ],
    correctIndex: 0,
    explanation: 'Coming down, $v^2 = 2(4.0)(4.0) = 32$, so $v = 5.7$ m/s. Friction acts in both directions, so the block returns slower than it was launched; 8.0 m/s would hold only without friction.',
    partNumber: 5,
    partTitle: 'Acceleration and Velocity on Inclines',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'ip-ent-6a',
    question: 'A 10 kg block is pushed up a ramp inclined at $30^\\circ$ ($\\sin 30^\\circ = 0.5$, $\\cos 30^\\circ = 0.866$) at constant velocity by a force parallel to the ramp. The coefficient of kinetic friction is 0.20. What is the push? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '50 N',
      '67 N',
      '33 N',
      '117 N',
    ],
    correctIndex: 1,
    explanation: 'At constant velocity the push balances both the downhill component, $100\\sin 30^\\circ = 50$ N, and friction, $0.20(100)(0.866) = 17$ N, which also points down the slope: 67 N. Subtracting friction gives 33 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ip-ent-6b',
    question: 'A box is set down at rest on a truck\'s loading ramp inclined at $37^\\circ$ ($\\tan 37^\\circ = 0.75$). The coefficient of static friction is 0.60. What happens?',
    options: [
      'It stays put, because $\\mu_s$ is less than 1',
      'It stays put, because static friction can match any pull',
      'It slides, because $\\tan 37^\\circ$ is larger than $\\mu_s$',
      'It slides only if the box is heavy enough',
    ],
    correctIndex: 2,
    explanation: 'A block stays at rest only if $mg\\sin\\theta \\le \\mu_s mg\\cos\\theta$, that is $\\tan\\theta \\le \\mu_s$. Here $0.75 > 0.60$, so static friction cannot hold the box, whatever its mass.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'ip-ent-7a',
    question: 'Two frictionless ramps have the same height but different angles, $20^\\circ$ and $50^\\circ$. Identical blocks are released from rest at the top of each. How do their speeds at the bottom compare?',
    options: [
      'It depends on the block masses',
      'Faster on the $50^\\circ$ ramp',
      'Faster on the $20^\\circ$ ramp',
      'Equal for the two blocks',
    ],
    correctIndex: 3,
    explanation: 'On a ramp of height $h$ the slope length is $h/\\sin\\theta$ and $a = g\\sin\\theta$, so $v^2 = 2(g\\sin\\theta)(h/\\sin\\theta) = 2gh$, the same for both. The steeper ramp gets there sooner, but not faster.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ip-ent-7b',
    question: 'A 2.0 kg block on a ramp inclined at $37^\\circ$ ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$, $\\mu_k = 0.25$) is tied over an ideal pulley to a hanging 3.0 kg block, which falls. What is the acceleration of the blocks? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$2.8\\text{ m/s}^2$',
      '$3.6\\text{ m/s}^2$',
      '$3.0\\text{ m/s}^2$',
      '$6.0\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'The net driving force is $30 - 20(0.6) - 0.25(20)(0.8) = 30 - 12 - 4 = 14$ N, and the total mass is 5.0 kg, so $a = 2.8\\text{ m/s}^2$. Ignoring friction gives 3.6.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Forces on an Incline' },
    { partNumber: 2, partTitle: 'Frictionless Inclines' },
    { partNumber: 3, partTitle: 'Inclines with Friction' },
    { partNumber: 4, partTitle: 'Connected Systems on Inclines' },
    { partNumber: 5, partTitle: 'Acceleration and Velocity on Inclines' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
