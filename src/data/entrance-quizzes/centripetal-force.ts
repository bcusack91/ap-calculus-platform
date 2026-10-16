/**
 * Entrance Quiz — Centripetal Force — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Centripetal Force: $F_c = mv^2/r$
  {
    id: 'cf-ent-1a',
    question: 'A 0.40 kg puck tied to a string moves in a horizontal circle of radius 0.80 m on a frictionless table at 3.0 m/s. What is the tension in the string?',
    options: [
      '1.5 N',
      '4.5 N',
      '3.6 N',
      '9.0 N',
    ],
    correctIndex: 1,
    explanation: 'The tension is the only horizontal force, so it supplies the centripetal force: $T = mv^2/r = 0.40(9.0)/0.80 = 4.5$ N. Using $mv/r$ gives 1.5 N, and forgetting to divide by $r$ gives 3.6 N.',
    partNumber: 1,
    partTitle: 'Centripetal Force: $F_c = mv^2/r$',
  },
  {
    id: 'cf-ent-1b',
    question: 'A puck tied to a string moves in a horizontal circle on a frictionless table. Which forces belong on the puck\'s free-body diagram?',
    options: [
      'Tension and an outward centrifugal force',
      'Weight, normal force, tension, and centripetal force',
      'Weight, normal force, and tension',
      'Weight, normal force, tension, and a forward force',
    ],
    correctIndex: 2,
    explanation: 'Only real forces from interactions appear: Earth (weight), the table (normal), and the string (tension). "Centripetal force" is the name for the net inward force, here the tension, not an extra arrow.',
    partNumber: 1,
    partTitle: 'Centripetal Force: $F_c = mv^2/r$',
  },
  // Part 2 — Identifying the Real Force
  {
    id: 'cf-ent-2a',
    question: 'A car rounds a flat, unbanked curve of radius 40 m. The coefficient of static friction between the tires and the road is 0.90. What is the maximum speed at which the car can take the curve without skidding? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '6.0 m/s',
      '36 m/s',
      '13 m/s',
      '19 m/s',
    ],
    correctIndex: 3,
    explanation: 'Static friction supplies the centripetal force, at most $\\mu_s mg$: $\\mu_s mg = mv^2/r$ gives $v = \\sqrt{\\mu_s g r} = \\sqrt{360} = 19$ m/s. Leaving out $g$ gives 6.0 m/s, and forgetting the square root gives 36.',
    partNumber: 2,
    partTitle: 'Identifying the Real Force',
  },
  {
    id: 'cf-ent-2b',
    question: 'A car drives at constant speed over the top of a rounded hill. At the very top, how does the normal force on the car compare with its weight?',
    options: [
      'The normal force is less than the weight',
      'The normal force is exactly equal to the weight',
      'The normal force is greater than the weight',
      'The normal force drops to zero at every speed',
    ],
    correctIndex: 0,
    explanation: 'At the top, the center of the circle is below the car, so the net force must point down: $mg - N = mv^2/r$. That requires $N < mg$; it reaches zero only at one particular speed, $\\sqrt{gr}$.',
    partNumber: 2,
    partTitle: 'Identifying the Real Force',
  },
  // Part 3 — Horizontal Circles
  {
    id: 'cf-ent-3a',
    question: 'A 0.50 kg ball on a string swings as a conical pendulum, with the string at $37^\\circ$ from the vertical ($\\sin 37^\\circ = 0.6$, $\\cos 37^\\circ = 0.8$). What is the tension in the string? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5.0 N',
      '6.3 N',
      '8.3 N',
      '4.0 N',
    ],
    correctIndex: 1,
    explanation: 'The ball does not accelerate vertically, so $T\\cos 37^\\circ = mg$ and $T = 5.0/0.8 = 6.3$ N. The horizontal component $T\\sin 37^\\circ$ supplies the centripetal force; using $\\sin$ in the vertical equation gives 8.3 N.',
    partNumber: 3,
    partTitle: 'Horizontal Circles',
  },
  {
    id: 'cf-ent-3b',
    question: 'A coin stays in place on a turntable at distance $r$ from the center. It is moved to distance $2r$ while the turntable keeps the same rotation rate. How much static friction does the coin now need to stay in place?',
    options: [
      'Half as much',
      'Four times as much',
      'Twice as much',
      'The same amount',
    ],
    correctIndex: 2,
    explanation: 'At a fixed period, $a_c = 4\\pi^2 r/T^2$ is proportional to $r$, so the required friction $ma_c$ doubles. The coin\'s speed also doubles, which is why $v^2/r$ grows by 2, not 4.',
    partNumber: 3,
    partTitle: 'Horizontal Circles',
  },
  // Part 4 — Vertical Circles & Loops
  {
    id: 'cf-ent-4a',
    question: 'A 0.20 kg ball on a 0.50 m string swings in a vertical circle. At the lowest point it moves at 4.0 m/s. What is the tension in the string there? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '6.4 N',
      '2.0 N',
      '4.4 N',
      '8.4 N',
    ],
    correctIndex: 3,
    explanation: 'At the bottom, tension points up toward the center and weight points down: $T - mg = mv^2/r$, so $T = 2.0 + 0.20(16)/0.50 = 8.4$ N. Leaving out the weight gives 6.4 N, and subtracting it gives 4.4 N.',
    partNumber: 4,
    partTitle: 'Vertical Circles & Loops',
  },
  {
    id: 'cf-ent-4b',
    question: 'A roller-coaster car goes over the top of a vertical loop at exactly the minimum speed $\\sqrt{gr}$. Which statement about the rider at the top is correct?',
    options: [
      'Gravity alone supplies the centripetal force, and the seat exerts none',
      'The seat pushes down on her with a force equal to her weight',
      'The net force on her is zero at the top of the loop',
      'Her weight is canceled by an outward centrifugal force',
    ],
    correctIndex: 0,
    explanation: 'At the top, $mg + N = mv^2/r$. With $v^2 = gr$, the weight alone equals $mv^2/r$, so $N = 0$. The net force is her weight, pointing down toward the center, not zero.',
    partNumber: 4,
    partTitle: 'Vertical Circles & Loops',
  },
  // Part 5 — Banked Curves
  {
    id: 'cf-ent-5a',
    question: 'A highway curve of radius 160 m is banked so that $\\tan\\theta = 0.25$. At what speed can a car take the curve with no friction needed? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '40 m/s',
      '20 m/s',
      '6.3 m/s',
      '80 m/s',
    ],
    correctIndex: 1,
    explanation: 'With no friction, $N\\sin\\theta = mv^2/r$ and $N\\cos\\theta = mg$, so $\\tan\\theta = v^2/(rg)$ and $v = \\sqrt{0.25 \\times 160 \\times 10} = 20$ m/s. Leaving out $g$ gives 6.3 m/s.',
    partNumber: 5,
    partTitle: 'Banked Curves',
  },
  {
    id: 'cf-ent-5b',
    question: 'A car takes a banked curve more slowly than the curve\'s design speed. Which way does static friction on the tires act?',
    options: [
      'There is none, since banking removes friction',
      'Down the slope, because the car tends to slide up',
      'Up the slope, because the car tends to slide downward',
      'Toward the outside edge, along the horizontal',
    ],
    correctIndex: 2,
    explanation: 'Below the design speed, the normal force\'s inward component is more than the turn needs, so the car tends to slide down the bank. Static friction opposes that tendency by pointing up the slope.',
    partNumber: 5,
    partTitle: 'Banked Curves',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'cf-ent-6a',
    question: 'A 0.50 kg block slides from rest down a frictionless track from a height of $4r$ above the bottom of a circular loop of radius $r = 2.0$ m. What normal force does the track exert on the block at the top of the loop? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '5.0 N',
      '20 N',
      '25 N',
      '15 N',
    ],
    correctIndex: 3,
    explanation: 'At the top the block is $2r$ high, so $v^2 = 2g(4r - 2r) = 80\\text{ m}^2/\\text{s}^2$. Then $mg + N = mv^2/r$ gives $N = 0.50(80)/2.0 - 5.0 = 15$ N. Adding the weight instead of subtracting it gives 25 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'cf-ent-6b',
    question: 'A 60 kg pilot flies a vertical loop of radius 250 m at 50 m/s. At the top of the loop, upside down, how hard does the seat push on the pilot? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0 N',
      '600 N',
      '1200 N',
      '300 N',
    ],
    correctIndex: 0,
    explanation: 'The required centripetal force is $mv^2/r = 60(2500)/250 = 600$ N, which equals the pilot\'s weight. Gravity supplies all of it, so the seat exerts no force and the pilot feels weightless.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'cf-ent-7a',
    question: 'A rider on a Ferris wheel moving at constant speed passes the lowest and highest points. How does the seat\'s upward force on her compare with her weight at those points?',
    options: [
      'Equal to her weight at both points, since the speed is constant',
      'Larger than her weight at the bottom, smaller at the top',
      'Smaller than her weight at the bottom, and larger at the top',
      'At both points it exceeds her weight, since she moves in a circle',
    ],
    correctIndex: 1,
    explanation: 'The net force points toward the center: up at the bottom ($N - mg = mv^2/r$, so $N > mg$) and down at the top ($mg - N = mv^2/r$, so $N < mg$).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'cf-ent-7b',
    question: 'A 0.30 kg ball on a 0.60 m string swings in a vertical circle. At the top of the circle it moves at 3.0 m/s. What is the tension in the string there? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '4.5 N',
      '7.5 N',
      '1.5 N',
      '3.0 N',
    ],
    correctIndex: 2,
    explanation: 'At the top, tension and weight both point down toward the center: $T + mg = mv^2/r = 0.30(9.0)/0.60 = 4.5$ N, so $T = 4.5 - 3.0 = 1.5$ N. Adding the weight gives 7.5 N, which would be right at the bottom with that speed.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Centripetal Force: $F_c = mv^2/r$' },
    { partNumber: 2, partTitle: 'Identifying the Real Force' },
    { partNumber: 3, partTitle: 'Horizontal Circles' },
    { partNumber: 4, partTitle: 'Vertical Circles & Loops' },
    { partNumber: 5, partTitle: 'Banked Curves' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
