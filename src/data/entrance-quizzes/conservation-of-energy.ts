/**
 * Entrance Quiz — Conservation of Energy — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Energy Conservation Principle
  {
    id: 'coe-ent-1a',
    question: 'A cart on a frictionless track passes a point 5.0 m above the ground at 10 m/s. What is the greatest height above the ground it can reach? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5.0 m',
      '7.5 m',
      '15 m',
      '10 m',
    ],
    correctIndex: 3,
    explanation: 'Its kinetic energy can raise it a further $v^2/(2g) = 100/20 = 5.0$ m, so the highest point is $5.0 + 5.0 = 10$ m. The 5.0 m value forgets the starting height, and 15 m drops the 2 in $2g$.',
    partNumber: 1,
    partTitle: 'Energy Conservation Principle',
  },
  {
    id: 'coe-ent-1b',
    question: 'In which situation is the mechanical energy of the object-Earth system constant?',
    options: [
      'A pendulum swinging in a vacuum',
      'A box pushed up a ramp at constant speed',
      'A car braking to a stop on a level road',
      'A skydiver falling at constant terminal speed',
    ],
    correctIndex: 0,
    explanation: 'Only gravity and the string act on the pendulum, and the string does no work, so kinetic plus potential energy is constant. The push adds energy, braking friction removes it, and drag removes energy from the falling skydiver (her potential energy drops while her kinetic energy stays the same).',
    partNumber: 1,
    partTitle: 'Energy Conservation Principle',
  },
  // Part 2 — Non-Conservative Forces & Work-Energy
  {
    id: 'coe-ent-2a',
    question: 'A 2.0 kg block slides from rest down a frictionless ramp 4.0 m high and then 5.0 m across a rough floor with $\\mu_k = 0.30$. What is its speed at the end of the rough section? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '8.9 m/s',
      '7.1 m/s',
      '5.0 m/s',
      '10 m/s',
    ],
    correctIndex: 1,
    explanation: 'The block starts with $mgh = 80$ J; friction removes $\\mu_k mgd = 0.30(20)(5.0) = 30$ J, leaving 50 J of kinetic energy, so $v = \\sqrt{2(50)/2.0} = 7.1$ m/s. Ignoring friction gives 8.9 m/s.',
    partNumber: 2,
    partTitle: 'Non-Conservative Forces & Work-Energy',
  },
  {
    id: 'coe-ent-2b',
    question: 'A student pushes a box up a rough ramp at constant speed. How does the work the student does compare with the increase in gravitational potential energy?',
    options: [
      'Smaller, since friction does part of the lifting',
      'Equal, since the box\'s speed stays constant',
      'Larger, by the heat friction makes',
      'Zero, since the net force on the box is zero',
    ],
    correctIndex: 2,
    explanation: 'The push must supply both the gain in gravitational energy and the thermal energy produced by friction, $f_k d$. Zero net force means zero net work, not zero work by the student.',
    partNumber: 2,
    partTitle: 'Non-Conservative Forces & Work-Energy',
  },
  // Part 3 — Springs and Gravity Combined
  {
    id: 'coe-ent-3a',
    question: 'A 2.0 kg block slides from rest down a frictionless ramp 0.80 m high and then compresses a horizontal spring with $k = 400$ N/m. What is the spring\'s maximum compression? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.080 m',
      '0.040 m',
      '0.20 m',
      '0.28 m',
    ],
    correctIndex: 3,
    explanation: 'All 16 J of gravitational energy becomes elastic energy: $\\tfrac{1}{2}(400)x^2 = 16$, so $x^2 = 0.080$ and $x = 0.28$ m. Forgetting the square root gives 0.080 m, and dropping the $\\tfrac{1}{2}$ gives 0.20 m.',
    partNumber: 3,
    partTitle: 'Springs and Gravity Combined',
  },
  {
    id: 'coe-ent-3b',
    question: 'A compressed spring launches a block up a frictionless ramp, and the block rises to height $h$. If the spring were compressed three times as far, how high would the block rise?',
    options: [
      '$9h$',
      '$3h$',
      '$6h$',
      '$\\sqrt{3}\\,h$',
    ],
    correctIndex: 0,
    explanation: 'The stored energy $\\tfrac{1}{2}kx^2$ becomes $mgh$, so $h \\propto x^2$. Tripling the compression stores 9 times the energy and gives 9 times the height.',
    partNumber: 3,
    partTitle: 'Springs and Gravity Combined',
  },
  // Part 4 — Roller Coasters & Pendulums
  {
    id: 'coe-ent-4a',
    question: 'A pendulum 2.0 m long is released from rest with its string at $60^\\circ$ from the vertical ($\\cos 60^\\circ = 0.50$). What is the bob\'s speed at the bottom of the swing? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '6.3 m/s',
      '4.5 m/s',
      '5.9 m/s',
      '3.2 m/s',
    ],
    correctIndex: 1,
    explanation: 'The bob drops $h = L(1 - \\cos 60^\\circ) = 1.0$ m, so $v = \\sqrt{2gh} = \\sqrt{20} = 4.5$ m/s. Using the full string length as the drop gives 6.3 m/s.',
    partNumber: 4,
    partTitle: 'Roller Coasters & Pendulums',
  },
  {
    id: 'coe-ent-4b',
    question: 'A cart starts from rest at height $h$ on a frictionless roller-coaster track. What is its speed as it passes over a hilltop at height $h/2$?',
    options: [
      '$\\sqrt{gh/2}$',
      '$\\sqrt{2gh}$',
      '$\\sqrt{gh}$',
      '$gh$',
    ],
    correctIndex: 2,
    explanation: 'It has dropped $h/2$, so $\\tfrac{1}{2}mv^2 = mg(h/2)$ and $v = \\sqrt{gh}$. The shape of the track between the two points does not matter.',
    partNumber: 4,
    partTitle: 'Roller Coasters & Pendulums',
  },
  // Part 5 — Energy Dissipation by Friction
  {
    id: 'coe-ent-5a',
    question: 'A car moving at 25 m/s locks its brakes and skids to a stop on a road where $\\mu_k = 0.50$. How far does it skid? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '125 m',
      '31 m',
      '6.3 m',
      '63 m',
    ],
    correctIndex: 3,
    explanation: 'The kinetic energy is removed by friction: $\\tfrac{1}{2}mv^2 = \\mu_k mgd$, so $d = v^2/(2\\mu_k g) = 625/10 = 63$ m, whatever the car\'s mass. Dropping the 2 gives 125 m.',
    partNumber: 5,
    partTitle: 'Energy Dissipation by Friction',
  },
  {
    id: 'coe-ent-5b',
    question: 'A block is released from rest at the top of a frictionless ramp 2.0 m high. At the bottom it slides onto a long rough floor with $\\mu_k = 0.25$. How far along the floor does it slide before stopping?',
    options: [
      '8.0 m',
      '0.50 m',
      '4.0 m',
      '16 m',
    ],
    correctIndex: 0,
    explanation: 'All of the gravitational energy $mgh$ is dissipated by friction $\\mu_k mgd$, so $d = h/\\mu_k = 2.0/0.25 = 8.0$ m. Multiplying instead of dividing gives 0.50 m.',
    partNumber: 5,
    partTitle: 'Energy Dissipation by Friction',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'coe-ent-6a',
    question: 'A 1.0 kg block slides from rest down a frictionless ramp 3.0 m high, crosses a 2.0 m rough patch with $\\mu_k = 0.50$, and then compresses a spring with $k = 400$ N/m on a frictionless floor. What is the maximum compression? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.39 m',
      '0.32 m',
      '0.10 m',
      '0.22 m',
    ],
    correctIndex: 1,
    explanation: 'The block starts with 30 J; the rough patch removes $0.50(10)(2.0) = 10$ J, leaving 20 J for the spring: $\\tfrac{1}{2}(400)x^2 = 20$ gives $x = 0.32$ m. Ignoring friction gives 0.39 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'coe-ent-6b',
    question: 'A 0.50 kg ball is dropped from 0.30 m above the top of a vertical spring with $k = 100$ N/m. What is the spring\'s maximum compression? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.17 m',
      '0.050 m',
      '0.23 m',
      '0.30 m',
    ],
    correctIndex: 2,
    explanation: 'The ball falls $0.30 + x$ in all, so $5.0(0.30 + x) = \\tfrac{1}{2}(100)x^2$, giving $50x^2 - 5x - 1.5 = 0$ and $x = 0.23$ m. Leaving out the extra fall $x$ gives 0.17 m, and 0.050 m is only where the ball would rest in equilibrium.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'coe-ent-7a',
    question: 'A cart released from rest 1.25 m above the bottom of a curved track reaches the bottom at 4.0 m/s. What does this show? Use $g = 10\\text{ m/s}^2$.',
    options: [
      'The cart\'s mass is needed before anything can be concluded',
      'Its total was conserved, as would be expected',
      'The track did positive work on the cart along the way',
      'Mechanical energy decreased, so friction or drag acted on it',
    ],
    correctIndex: 3,
    explanation: 'Per kilogram, the cart had $gh = 12.5$ J of potential energy but ends with only $\\tfrac{1}{2}v^2 = 8.0$ J of kinetic energy, so about a third of the mechanical energy was dissipated. Mass cancels, so it is not needed.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'coe-ent-7b',
    question: 'A ball is launched from level ground at $40^\\circ$ above the horizontal. Ignoring air resistance, how does its kinetic energy at the highest point compare with its kinetic energy at launch?',
    options: [
      'Less than at launch, but not zero',
      'Zero, because the ball is momentarily at rest',
      'Equal to its value at launch, since energy is conserved',
      'Greater than at launch, since it has risen higher',
    ],
    correctIndex: 0,
    explanation: 'At the top the vertical velocity is zero but the horizontal component remains, so some kinetic energy is left; the rest has become gravitational potential energy. Total mechanical energy is conserved, not kinetic energy alone.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Energy Conservation Principle' },
    { partNumber: 2, partTitle: 'Non-Conservative Forces & Work-Energy' },
    { partNumber: 3, partTitle: 'Springs and Gravity Combined' },
    { partNumber: 4, partTitle: 'Roller Coasters & Pendulums' },
    { partNumber: 5, partTitle: 'Energy Dissipation by Friction' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
