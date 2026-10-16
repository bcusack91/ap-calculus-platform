/**
 * Entrance Quiz — Work and Kinetic Energy — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Definition of Work
  {
    id: 'wke-ent-1a',
    question: 'A rope pulls a sled 5.0 m across level snow with a tension of 120 N directed $60^\\circ$ above the horizontal ($\\cos 60^\\circ = 0.50$, $\\sin 60^\\circ = 0.87$). How much work does the tension do?',
    options: [
      '600 J',
      '150 J',
      '520 J',
      '300 J',
    ],
    correctIndex: 3,
    explanation: 'Only the component along the displacement does work: $W = Fd\\cos\\theta = 120(5.0)(0.50) = 300$ J. Ignoring the angle gives 600 J, and using the sine gives 520 J.',
    partNumber: 1,
    partTitle: 'Definition of Work',
  },
  {
    id: 'wke-ent-1b',
    question: 'A ball on a string moves in a horizontal circle at constant speed. How much work does the string\'s tension do on the ball during half a revolution?',
    options: [
      'Zero, because the tension is always perpendicular to the ball\'s motion',
      'Positive, because the tension pulls the ball around the circle',
      'Negative, because the tension points inward, away from the motion',
      'Positive, equal to the tension times half the circumference',
    ],
    correctIndex: 0,
    explanation: 'The tension points toward the center while the displacement at each instant is tangent to the circle, so $\\cos 90^\\circ = 0$ throughout. Consistent with this, the ball\'s kinetic energy does not change.',
    partNumber: 1,
    partTitle: 'Definition of Work',
  },
  // Part 2 — The Work-Energy Theorem
  {
    id: 'wke-ent-2a',
    question: 'A 4.0 kg cart moving at 3.0 m/s is pushed by a net force of 10 N in its direction of motion over a distance of 2.4 m. What is its final speed?',
    options: [
      '3.5 m/s',
      '4.6 m/s',
      '6.5 m/s',
      '1.7 m/s',
    ],
    correctIndex: 1,
    explanation: 'The net work is $10(2.4) = 24$ J, added to the initial $\\tfrac{1}{2}(4.0)(3.0)^2 = 18$ J, for 42 J. Then $v = \\sqrt{2(42)/4.0} = 4.6$ m/s. Treating the cart as starting from rest gives 3.5 m/s.',
    partNumber: 2,
    partTitle: 'The Work-Energy Theorem',
  },
  {
    id: 'wke-ent-2b',
    question: 'Two pucks of masses $m$ and $4m$ start from rest on frictionless ice. Each is pushed by the same constant force over the same distance. How do their kinetic energies compare afterward?',
    options: [
      'The $m$ puck has more',
      'The $4m$ puck has more',
      'They are the same',
      'The $m$ puck has double',
    ],
    correctIndex: 2,
    explanation: 'Equal forces over equal distances do equal work, and the work-energy theorem makes each puck\'s kinetic energy equal to that work. The lighter puck moves faster, but its kinetic energy is the same.',
    partNumber: 2,
    partTitle: 'The Work-Energy Theorem',
  },
  // Part 3 — Kinetic Energy
  {
    id: 'wke-ent-3a',
    question: 'Which has more kinetic energy: a 3000 kg truck moving at 10 m/s or a 1000 kg car moving at 20 m/s?',
    options: [
      'Neither, each has 150 kJ',
      'The truck, with 300 kJ',
      'The truck, with 150 kJ',
      'The car, with 200 kJ',
    ],
    correctIndex: 3,
    explanation: 'The truck has $\\tfrac{1}{2}(3000)(10)^2 = 150$ kJ and the car has $\\tfrac{1}{2}(1000)(20)^2 = 200$ kJ. Doubling speed quadruples kinetic energy, which outweighs the truck\'s tripled mass; dropping the $\\tfrac{1}{2}$ would give the truck 300 kJ.',
    partNumber: 3,
    partTitle: 'Kinetic Energy',
  },
  {
    id: 'wke-ent-3b',
    question: 'A 1.5 kg ball speeds up from 4.0 m/s to 8.0 m/s. By how much does its kinetic energy increase?',
    options: [
      '36 J',
      '12 J',
      '48 J',
      '72 J',
    ],
    correctIndex: 0,
    explanation: '$\\Delta KE = \\tfrac{1}{2}(1.5)(8.0^2 - 4.0^2) = 0.75(48) = 36$ J. Squaring the change in speed instead, $\\tfrac{1}{2}(1.5)(4.0)^2$, gives only 12 J.',
    partNumber: 3,
    partTitle: 'Kinetic Energy',
  },
  // Part 4 — Work by Multiple Forces
  {
    id: 'wke-ent-4a',
    question: 'A 6.0 kg box starts from rest and is pushed 5.0 m across a level floor by a 40 N horizontal force while kinetic friction exerts 16 N. What is the net work done on the box?',
    options: [
      '200 J',
      '120 J',
      '280 J',
      '80 J',
    ],
    correctIndex: 1,
    explanation: 'The push does $+40(5.0) = 200$ J and friction does $-16(5.0) = -80$ J; gravity and the normal force do none. The net work is 120 J, which becomes the box\'s kinetic energy.',
    partNumber: 4,
    partTitle: 'Work by Multiple Forces',
  },
  {
    id: 'wke-ent-4b',
    question: 'A block slides up a rough incline, stops, and slides back down to its starting point. Over the whole round trip, which forces did a nonzero total amount of work on the block?',
    options: [
      'Gravity, friction, and the normal force as well',
      'Gravity and friction, but not the normal force',
      'Friction, but not gravity or the normal force',
      'Gravity alone, not friction or the normal force',
    ],
    correctIndex: 2,
    explanation: 'Gravity does negative work going up and equal positive work coming down, so its total is zero; the normal force is perpendicular to the motion. Friction opposes the motion on both legs, so its work is negative both ways.',
    partNumber: 4,
    partTitle: 'Work by Multiple Forces',
  },
  // Part 5 — Power
  {
    id: 'wke-ent-5a',
    question: 'A motor lifts an 80 kg crate 12 m at constant speed in 16 s. What is the motor\'s average power output? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '60 W',
      '9600 W',
      '1200 W',
      '600 W',
    ],
    correctIndex: 3,
    explanation: 'The motor does $mgh = 800(12) = 9600$ J of work, so $P = 9600/16 = 600$ W. The 9600 value is the work, not the rate, and using the mass instead of the weight gives 60 W.',
    partNumber: 5,
    partTitle: 'Power',
  },
  {
    id: 'wke-ent-5b',
    question: 'A box slides across a rough floor, slowing down. At one instant its speed is 3.0 m/s and the kinetic friction force on it is 12 N. At what rate is friction doing work on the box at that instant?',
    options: [
      '$-36$ W',
      '$+36$ W',
      '$-4.0$ W',
      '$0$ W',
    ],
    correctIndex: 0,
    explanation: 'Instantaneous power is $P = Fv\\cos\\theta$. Friction points opposite the velocity, so $P = 12(3.0)(-1) = -36$ W: friction removes kinetic energy at 36 J each second.',
    partNumber: 5,
    partTitle: 'Power',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'wke-ent-6a',
    question: 'A 1500 kg car brakes from 20 m/s to 10 m/s over 30 m. What is the magnitude of the average braking force?',
    options: [
      '2500 N',
      '7500 N',
      '10000 N',
      '15000 N',
    ],
    correctIndex: 1,
    explanation: 'The kinetic energy drops by $\\tfrac{1}{2}(1500)(20^2 - 10^2) = 225$ kJ, and that equals the braking force times 30 m, so $F = 7500$ N. Using $(\\Delta v)^2$ gives 2500 N, and leaving out the $\\tfrac{1}{2}$ gives 15000 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'wke-ent-6b',
    question: 'A 2.0 kg puck slides across frictionless ice at 8.0 m/s and then crosses a 4.0 m rough patch where kinetic friction is 6.0 N. What is its speed after the patch?',
    options: [
      '4.5 m/s',
      '2.8 m/s',
      '6.3 m/s',
      '9.4 m/s',
    ],
    correctIndex: 2,
    explanation: 'Its kinetic energy starts at $\\tfrac{1}{2}(2.0)(8.0)^2 = 64$ J, and friction does $-6.0(4.0) = -24$ J, leaving 40 J, so $v = \\sqrt{2(40)/2.0} = 6.3$ m/s. Adding the friction work instead of subtracting it gives 9.4 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'wke-ent-7a',
    question: 'A crane lowers a crate at constant speed. What are the signs of the work done on the crate by gravity, by the cable, and by all forces together?',
    options: [
      'Gravity positive, cable doing no work, net positive',
      'Gravity positive, cable positive, net positive',
      'Gravity negative, cable positive, and net zero',
      'Gravity positive, cable negative, net zero',
    ],
    correctIndex: 3,
    explanation: 'The crate moves down, so gravity (down) does positive work and the cable\'s upward pull does negative work. The speed is constant, so by the work-energy theorem the net work is zero.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'wke-ent-7b',
    question: 'A 1200 kg car accelerates from rest to 20 m/s in 8.0 s on level ground. Ignoring friction and drag, what average power does the engine deliver?',
    options: [
      '30 kW',
      '15 kW',
      '3.0 kW',
      '60 kW',
    ],
    correctIndex: 0,
    explanation: 'The engine supplies the car\'s kinetic energy, $\\tfrac{1}{2}(1200)(20)^2 = 240$ kJ, in 8.0 s, so $P = 240/8.0 = 30$ kW. Dropping the $\\tfrac{1}{2}$ gives 60 kW.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Definition of Work' },
    { partNumber: 2, partTitle: 'The Work-Energy Theorem' },
    { partNumber: 3, partTitle: 'Kinetic Energy' },
    { partNumber: 4, partTitle: 'Work by Multiple Forces' },
    { partNumber: 5, partTitle: 'Power' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
