/**
 * Entrance Quiz — Power — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What Power Means
  {
    id: 'pow-ent-1a',
    question: 'Two students of equal mass climb the same staircase from bottom to top. Student A takes 8.0 s and student B takes 12 s. How do the work they do against gravity and their power outputs compare?',
    options: [
      'Equal power, since they gain the same energy',
      'A does 1.5 times the work at 1.5 times the power',
      'Equal work, with A delivering 1.5 times the power',
      'B does more work, since B climbs for longer',
    ],
    correctIndex: 2,
    explanation: 'Both raise the same weight through the same height, so the work $mgh$ is equal. Power is work per time, so A, taking $8.0$ s instead of $12$ s, delivers $12/8.0 = 1.5$ times the power.',
    partNumber: 1,
    partTitle: 'What Power Means',
  },
  {
    id: 'pow-ent-1b',
    question: 'A 1500 W heater runs for 2.0 minutes. How much energy does it transfer?',
    options: [
      '$3.0 \\times 10^3$ J',
      '$1.3 \\times 10^1$ J',
      '$7.5 \\times 10^2$ J',
      '$1.8 \\times 10^5$ J',
    ],
    correctIndex: 3,
    explanation: 'Energy is power times time in seconds: $W = Pt = 1500(120) = 1.8 \\times 10^5$ J. Multiplying by 2.0 without converting minutes to seconds gives $3.0 \\times 10^3$ J.',
    partNumber: 1,
    partTitle: 'What Power Means',
  },
  // Part 2 — Power From Work: $P = \dfrac{Fd}{t}$
  {
    id: 'pow-ent-2a',
    question: 'A crane lifts a 400 kg beam 15 m straight up at constant speed in 30 s. What is the crane\'s power output? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '2000 W',
      '200 W',
      '60000 W',
      '4000 W',
    ],
    correctIndex: 0,
    explanation: 'The lifting force equals the weight, 4000 N, so $W = Fd = 4000(15) = 60000$ J and $P = 60000/30 = 2000$ W. The 60000 value is the work, and using the mass instead of the weight gives 200 W.',
    partNumber: 2,
    partTitle: 'Power From Work: $P = \\dfrac{Fd}{t}$',
  },
  {
    id: 'pow-ent-2b',
    question: 'A child pulls a wagon at a steady 2.0 m/s with a 50 N force directed $60^\\circ$ above the horizontal ($\\cos 60^\\circ = 0.50$, $\\sin 60^\\circ = 0.87$). At what rate does her pull do work on the wagon?',
    options: [
      '100 W',
      '50 W',
      '87 W',
      '25 W',
    ],
    correctIndex: 1,
    explanation: 'Only the force component along the motion does work: $P = Fv\\cos\\theta = 50(2.0)(0.50) = 50$ W. Ignoring the angle gives 100 W, using the sine gives 87 W, and dividing the force by the speed gives 25 W.',
    partNumber: 2,
    partTitle: 'Power From Work: $P = \\dfrac{Fd}{t}$',
  },
  // Part 3 — Power From Speed: $P = Fv$
  {
    id: 'pow-ent-3a',
    question: 'A boat\'s engine delivers 24 kW while the boat moves at a steady 8.0 m/s. What is the drag force on the boat?',
    options: [
      '300 N',
      '192000 N',
      '3000 N',
      '24000 N',
    ],
    correctIndex: 2,
    explanation: 'At constant speed the engine\'s thrust equals the drag, and $P = Fv$ gives $F = 24000/8.0 = 3000$ N. Multiplying power by speed (192000) does not give a force.',
    partNumber: 3,
    partTitle: 'Power From Speed: $P = Fv$',
  },
  {
    id: 'pow-ent-3b',
    question: 'A truck\'s engine delivers its maximum power both on a level road and while climbing a steep hill. Why does the truck move more slowly up the hill?',
    options: [
      'Gravity does positive work on the truck as it climbs the hill',
      'Climbing lowers the engine\'s power output below its maximum',
      'The hill effectively adds mass, lowering its speed',
      'With power capped, a larger force is possible only at a lower speed',
    ],
    correctIndex: 3,
    explanation: 'The hill requires a larger driving force to balance the downhill component of gravity. Since $P = Fv$ and $P$ is at its limit, a larger $F$ means a smaller $v$; gravity does negative work on a climbing truck.',
    partNumber: 3,
    partTitle: 'Power From Speed: $P = Fv$',
  },
  // Part 4 — Power and Kinematics
  {
    id: 'pow-ent-4a',
    question: 'An 800 kg car speeds up from 10 m/s to 20 m/s in 6.0 s on level ground. Ignoring friction and drag, what average power does the engine deliver?',
    options: [
      '20 kW',
      '6.7 kW',
      '40 kW',
      '27 kW',
    ],
    correctIndex: 0,
    explanation: '$\\Delta KE = \\tfrac{1}{2}(800)(20^2 - 10^2) = 1.2 \\times 10^5$ J, so $P_{\\text{avg}} = 1.2 \\times 10^5/6.0 = 20$ kW. Using $(\\Delta v)^2$ gives 6.7 kW, and using only the final kinetic energy gives 27 kW.',
    partNumber: 4,
    partTitle: 'Power and Kinematics',
  },
  {
    id: 'pow-ent-4b',
    question: 'A constant net force pushes a cart that starts from rest. How does the instantaneous power delivered by that force at $t = 3.0$ s compare with the power at $t = 1.0$ s?',
    options: [
      'Nine times as large',
      'Three times as large',
      'One-third as large',
      'The same',
    ],
    correctIndex: 1,
    explanation: 'With a constant force the speed grows in proportion to time, and $P = Fv$, so at 3.0 s the speed and the power are three times their values at 1.0 s. The kinetic energy, not the power, is nine times as large.',
    partNumber: 4,
    partTitle: 'Power and Kinematics',
  },
  // Part 5 — Energy Graphs and Negative Power
  {
    id: 'pow-ent-5a',
    question: 'A car cruises at constant speed on a level highway, so a graph of its kinetic energy versus time is flat. Which statement is correct during that time?',
    options: [
      'The car must be at rest for the whole interval',
      'The engine is delivering no power to the car at all',
      'Zero net power, as the engine offsets drag',
      'Friction and drag deliver positive power to the car',
    ],
    correctIndex: 2,
    explanation: 'A flat graph means the kinetic energy is not changing, so the net power is zero. The engine\'s positive power exactly cancels the negative power of drag and friction, which point against the motion.',
    partNumber: 5,
    partTitle: 'Energy Graphs and Negative Power',
  },
  {
    id: 'pow-ent-5b',
    question: 'A 0.40 kg ball is moving straight up at 5.0 m/s. At that instant, at what rate is gravity changing the ball\'s kinetic energy? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$-10$ W',
      '$+20$ W',
      '$-2.0$ W',
      '$-20$ W',
    ],
    correctIndex: 3,
    explanation: 'Gravity (4.0 N down) points opposite the upward velocity, so $P = Fv\\cos 180^\\circ = -(4.0)(5.0) = -20$ W: the ball loses kinetic energy at 20 J/s while rising. Using the mass instead of the weight gives $-2.0$ W.',
    partNumber: 5,
    partTitle: 'Energy Graphs and Negative Power',
  },
  // Part 6 — Power on Inclines and Against Friction
  {
    id: 'pow-ent-6a',
    question: 'A winch pulls a 100 kg crate up a frictionless ramp inclined at $30^\\circ$ at a steady 0.80 m/s. What power does the winch deliver? Use $g = 10\\text{ m/s}^2$, $\\sin 30^\\circ = 0.50$, and $\\cos 30^\\circ = 0.87$.',
    options: [
      '400 W',
      '800 W',
      '700 W',
      '500 W',
    ],
    correctIndex: 0,
    explanation: 'At constant speed the winch force balances the downhill component, $mg\\sin 30^\\circ = 500$ N, so $P = Fv = 500(0.80) = 400$ W. Using the full weight gives 800 W, and the cosine gives 700 W.',
    partNumber: 6,
    partTitle: 'Power on Inclines and Against Friction',
  },
  {
    id: 'pow-ent-6b',
    question: 'A motor pulls a crate up a rough incline at constant speed. Where does the motor\'s power go?',
    options: [
      'Entirely into the crate\'s kinetic energy',
      'Into gravitational and thermal energy, with none to kinetic energy',
      'Into thermal energy only, since the speed is constant',
      'Gravitational energy only, as friction does no work',
    ],
    correctIndex: 1,
    explanation: 'The speed is constant, so kinetic energy does not change. The crate-Earth system gains gravitational energy at $mg\\sin\\theta\\, v$, and friction turns energy into thermal energy at $f_k v$; these rates add up to the motor\'s power.',
    partNumber: 6,
    partTitle: 'Power on Inclines and Against Friction',
  },
  // Part 7 — Mixed Mastery & Exit Quiz
  {
    id: 'pow-ent-7a',
    question: 'A 500 kg elevator rises 24 m at constant speed in 16 s while a 1000 N friction force acts against its motion. What is the motor\'s power output? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '7500 W',
      '1500 W',
      '9000 W',
      '6000 W',
    ],
    correctIndex: 2,
    explanation: 'The motor must balance the 5000 N weight and the 1000 N friction, 6000 N in all, at $v = 24/16 = 1.5$ m/s, so $P = 6000(1.5) = 9000$ W. Ignoring friction gives 7500 W.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
  {
    id: 'pow-ent-7b',
    question: 'A 60 W lamp runs for 20 minutes, and a 1200 W kettle runs for 1.0 minute. Which uses more energy?',
    options: [
      'The kettle, as a watt is energy',
      'The kettle, with 20 times the power',
      'The lamp, running 20 times longer',
      'Each uses the same total energy',
    ],
    correctIndex: 3,
    explanation: 'Energy is power times time: the lamp uses $60(1200\\text{ s}) = 72$ kJ and the kettle uses $1200(60\\text{ s}) = 72$ kJ. A higher power only means the energy is transferred faster.',
    partNumber: 7,
    partTitle: 'Mixed Mastery & Exit Quiz',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Power Means' },
    { partNumber: 2, partTitle: 'Power From Work: $P = \\dfrac{Fd}{t}$' },
    { partNumber: 3, partTitle: 'Power From Speed: $P = Fv$' },
    { partNumber: 4, partTitle: 'Power and Kinematics' },
    { partNumber: 5, partTitle: 'Energy Graphs and Negative Power' },
    { partNumber: 6, partTitle: 'Power on Inclines and Against Friction' },
    { partNumber: 7, partTitle: 'Mixed Mastery & Exit Quiz' },
  ]
}
