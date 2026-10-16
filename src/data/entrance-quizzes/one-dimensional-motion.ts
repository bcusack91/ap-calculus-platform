/**
 * Entrance Quiz — One-Dimensional Motion — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Position & Displacement
  {
    id: 'odm-ent-1a',
    question: 'A delivery robot moves along a straight hallway, with east as positive. It starts at $x = +6$ m, rolls to $x = -10$ m, then rolls back to $x = -2$ m. What are its total distance traveled and its displacement?',
    options: [
      'Distance 24 m, displacement $-8$ m',
      'Distance 8 m, displacement $-8$ m',
      'Distance 24 m, displacement $+8$ m',
      'Distance 16 m, displacement $-8$ m',
    ],
    correctIndex: 0,
    explanation: 'Distance adds every leg: 16 m west plus 8 m east is 24 m. Displacement is $x_f - x_i = -2 - (+6) = -8$ m, so the robot ends 8 m west of where it started.',
    partNumber: 1,
    partTitle: 'Position & Displacement',
  },
  {
    id: 'odm-ent-1b',
    question: 'At the end of a drive, a car\'s odometer shows it covered 30 km, but the car finishes only 10 km west of where it began. Which statement must be true?',
    options: [
      'It moved west for the whole 30 km',
      'It changed direction at least once along the way',
      'Its displacement was 30 km to the west',
      'The distance it covered was 10 km',
    ],
    correctIndex: 1,
    explanation: 'Distance (30 km) exceeds the magnitude of displacement (10 km), which can happen only if the car turned around at some point. Distance is the odometer reading, and the displacement is 10 km west.',
    partNumber: 1,
    partTitle: 'Position & Displacement',
  },
  // Part 2 — Speed & Velocity
  {
    id: 'odm-ent-2a',
    question: 'A train travels 60 km due north at a steady 30 km/h, then continues another 60 km north at a steady 60 km/h. What is its average velocity for the whole trip?',
    options: [
      '45 km/h north',
      '50 km/h north',
      '40 km/h north',
      '36 km/h north',
    ],
    correctIndex: 2,
    explanation: 'The legs take 2 h and 1 h, so the average velocity is 120 km north divided by 3 h, or 40 km/h north. Averaging the two speeds to get 45 km/h ignores that the train spends more time at the slower speed.',
    partNumber: 2,
    partTitle: 'Speed & Velocity',
  },
  {
    id: 'odm-ent-2b',
    question: 'A cyclist rides 1200 m east in 100 s, then 400 m west in 300 s. Which pair gives her average speed and average velocity for the 400 s?',
    options: [
      'Speed 6.7 m/s, velocity 2 m/s east',
      'Speed 4 m/s, velocity 4 m/s east',
      'Speed 2 m/s, velocity 4 m/s east',
      'Speed 4 m/s, velocity 2 m/s east',
    ],
    correctIndex: 3,
    explanation: 'Average speed is total distance over time, 1600 m / 400 s = 4 m/s. Average velocity is displacement over time, 800 m east / 400 s = 2 m/s east; averaging the two leg speeds (12 and 1.3 m/s) does not give either quantity.',
    partNumber: 2,
    partTitle: 'Speed & Velocity',
  },
  // Part 3 — Acceleration
  {
    id: 'odm-ent-3a',
    question: 'Taking north as positive, a cart\'s velocity changes from $-6$ m/s to $+4$ m/s in 2.5 s. What is its average acceleration?',
    options: [
      '$+4\\text{ m/s}^2$',
      '$+0.8\\text{ m/s}^2$',
      '$-4\\text{ m/s}^2$',
      '$-0.8\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: '$a = \\dfrac{v_f - v_i}{\\Delta t} = \\dfrac{4 - (-6)}{2.5} = +4\\text{ m/s}^2$. Subtracting the speeds without their signs gives the incorrect magnitude 0.8.',
    partNumber: 3,
    partTitle: 'Acceleration',
  },
  {
    id: 'odm-ent-3b',
    question: 'An object has velocity $-5$ m/s and a constant acceleration of $+2\\text{ m/s}^2$. How does it move during the next 4 s?',
    options: [
      'It keeps speeding up in the negative direction for all 4 s',
      'It slows, stops at 2.5 s, then speeds up the other way',
      'It slows down, stops at 2.5 s, and then stays at rest after that',
      'It slows down for all 4 s and is still moving in the negative direction at the end',
    ],
    correctIndex: 1,
    explanation: 'Opposite signs of $v$ and $a$ mean it slows; $v = -5 + 2t$ reaches zero at $t = 2.5$ s. The acceleration keeps acting, so the velocity becomes positive and the speed grows, reaching $+3$ m/s at 4 s.',
    partNumber: 3,
    partTitle: 'Acceleration',
  },
  // Part 4 — Kinematic Equations
  {
    id: 'odm-ent-4a',
    question: 'A cart moving at 6 m/s speeds up with a constant acceleration of $4\\text{ m/s}^2$ over a distance of 8 m. What is its final speed?',
    options: [
      '8.2 m/s',
      '8.0 m/s',
      '10 m/s',
      '8.4 m/s',
    ],
    correctIndex: 2,
    explanation: 'With no time given, use $v^2 = v_0^2 + 2a\\Delta x = 36 + 2(4)(8) = 100$, so $v = 10$ m/s. Dropping the factor of 2 gives 8.2 m/s, ignoring $v_0$ gives 8.0 m/s, and forgetting to square $v_0$ gives 8.4 m/s.',
    partNumber: 4,
    partTitle: 'Kinematic Equations',
  },
  {
    id: 'odm-ent-4b',
    question: 'A sprinter starts from rest and, with constant acceleration, covers 18 m in the first 3.0 s. What is her speed at $t = 3.0$ s?',
    options: [
      '6 m/s',
      '24 m/s',
      '4 m/s',
      '12 m/s',
    ],
    correctIndex: 3,
    explanation: 'From $\\Delta x = \\tfrac{1}{2}at^2$, $a = 2(18)/9 = 4\\text{ m/s}^2$, so $v = at = 12$ m/s. The 6 m/s value is her average velocity, which is only half the final speed when starting from rest.',
    partNumber: 4,
    partTitle: 'Kinematic Equations',
  },
  // Part 5 — Free Fall
  {
    id: 'odm-ent-5a',
    question: 'A ball is thrown straight up at 15 m/s from a balcony 20 m above the ground. How long after the throw does it hit the ground? Use $g = 10\\text{ m/s}^2$ and ignore air resistance.',
    options: [
      '4.0 s',
      '2.0 s',
      '1.0 s',
      '3.0 s',
    ],
    correctIndex: 0,
    explanation: 'With up positive, $-20 = 15t - 5t^2$, so $t^2 - 3t - 4 = 0$ and $t = 4.0$ s. The 3.0 s value is when the ball passes the balcony on the way down.',
    partNumber: 5,
    partTitle: 'Free Fall',
  },
  {
    id: 'odm-ent-5b',
    question: 'Two identical balls leave the edge of a cliff with the same initial speed, one thrown straight up and the other straight down. Ignoring air resistance, how do they compare when they reach the ground below?',
    options: [
      'The downward ball lands faster',
      'They land equally fast',
      'The upward ball lands faster',
      'It depends on the cliff\'s height',
    ],
    correctIndex: 1,
    explanation: 'The upward ball returns to the cliff edge moving downward at its launch speed, so from there it repeats the motion of the downward ball. Equivalently, $v^2 = v_0^2 + 2g\\Delta y$ depends only on the launch speed and the drop, not on the launch direction.',
    partNumber: 5,
    partTitle: 'Free Fall',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'odm-ent-6a',
    question: 'A driver moving at 20 m/s sees a hazard. After a reaction time of 0.50 s she brakes with a constant acceleration of magnitude $5.0\\text{ m/s}^2$. How far does the car travel from the moment she sees the hazard until it stops?',
    options: [
      '90 m',
      '40 m',
      '50 m',
      '80 m',
    ],
    correctIndex: 2,
    explanation: 'During the reaction time the car moves at constant speed: $20(0.50) = 10$ m. Braking adds $v_0^2/(2a) = 400/10 = 40$ m, for 50 m total. Leaving out the reaction distance gives 40 m, and dropping the 2 gives 80 or 90 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'odm-ent-6b',
    question: 'A ball is launched straight up at 20 m/s. At what times is it 15 m above the launch point? Use $g = 10\\text{ m/s}^2$.',
    options: [
      'At 1.5 s and 2.5 s',
      'At 2 s and 4 s',
      'At 0.75 s only',
      'At 1 s and 3 s',
    ],
    correctIndex: 3,
    explanation: '$15 = 20t - 5t^2$ gives $t^2 - 4t + 3 = 0$, so $t = 1$ s (rising) and $t = 3$ s (falling). Both roots are physical because the ball passes that height twice.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'odm-ent-7a',
    question: 'A cart\'s velocity changes uniformly from $+8$ m/s to $-4$ m/s over 6.0 s. What are its displacement and the total distance it travels during this time?',
    options: [
      'Displacement $+12$ m, distance 20 m',
      'Displacement $+12$ m, distance 12 m',
      'Displacement $+20$ m, distance 20 m',
      'Displacement $+36$ m, distance 36 m',
    ],
    correctIndex: 0,
    explanation: 'The acceleration is $-2\\text{ m/s}^2$, so the cart moves forward 16 m in 4 s, stops, then goes back 4 m in 2 s. Displacement is $+12$ m (also $\\tfrac{8 + (-4)}{2} \\times 6$) but the distance is $16 + 4 = 20$ m.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'odm-ent-7b',
    question: 'A rock dropped from rest from height $h$ hits the ground with speed $v$. From what height must it be dropped to hit the ground with speed $3v$? Ignore air resistance.',
    options: [
      '$3h$',
      '$9h$',
      '$\\sqrt{3}\\,h$',
      '$6h$',
    ],
    correctIndex: 1,
    explanation: 'From $v^2 = 2gh$, the height is proportional to the square of the impact speed, so tripling the speed requires $3^2 = 9$ times the height.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Position & Displacement' },
    { partNumber: 2, partTitle: 'Speed & Velocity' },
    { partNumber: 3, partTitle: 'Acceleration' },
    { partNumber: 4, partTitle: 'Kinematic Equations' },
    { partNumber: 5, partTitle: 'Free Fall' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
