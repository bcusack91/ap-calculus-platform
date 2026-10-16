/**
 * Entrance Quiz — Newton's Third Law — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Action-Reaction Pairs
  {
    id: 'ntl-ent-1a',
    question: 'Earth pulls a 60 kg student downward with a 600 N gravitational force. What force does the student exert on Earth, and why does Earth not noticeably accelerate?',
    options: [
      'No force at all, since a student is far too small to pull on a planet',
      '600 N upward, but Earth\'s huge mass makes the effect tiny',
      '600 N upward, but it is canceled by the normal force acting on the student',
      'Much less than 600 N, because her mass is so much smaller than Earth\'s',
    ],
    correctIndex: 1,
    explanation: 'The forces in a third-law pair are equal in size, so she pulls Earth up with 600 N. That force acts on Earth, whose huge mass gives it an undetectable acceleration ($a = F/M$); the normal force acts on her, so it cannot cancel a force on Earth.',
    partNumber: 1,
    partTitle: 'Action-Reaction Pairs',
  },
  {
    id: 'ntl-ent-1b',
    question: 'A swimmer pushes off the wall of a pool with her feet and glides away. Which force accelerates her away from the wall?',
    options: [
      'Her leg muscles pushing on her body',
      'Her feet pushing against the wall',
      'The wall pushing on her feet',
      'The water pushing her toward the middle',
    ],
    correctIndex: 2,
    explanation: 'To accelerate, she needs an external force acting on her. Her push acts on the wall; the wall\'s equal and opposite push acts on her, and that is what speeds her up.',
    partNumber: 1,
    partTitle: 'Action-Reaction Pairs',
  },
  // Part 2 — Identifying Force Pairs
  {
    id: 'ntl-ent-2a',
    question: 'Block A (2.0 kg) rests on block B (6.0 kg), which rests on a table. You press straight down on top of A with a 15 N force. What force does B exert on A? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '20 N',
      '15 N',
      '95 N',
      '35 N',
    ],
    correctIndex: 3,
    explanation: 'A is in equilibrium: B\'s upward push must balance A\'s 20 N weight plus your 15 N push, so B pushes up on A with 35 N (and A pushes down on B with 35 N, its third-law partner).',
    partNumber: 2,
    partTitle: 'Identifying Force Pairs',
  },
  {
    id: 'ntl-ent-2b',
    question: 'A lamp hangs at rest from a chain attached to the ceiling. Which force forms a Newton\'s third law pair with the chain\'s upward pull on the lamp?',
    options: [
      'The lamp\'s downward pull on the chain',
      'The ceiling\'s pull on the chain',
      'Earth\'s downward pull on the lamp',
      'The chain\'s pull on the ceiling',
    ],
    correctIndex: 0,
    explanation: 'A third-law partner swaps the two objects: chain on lamp pairs with lamp on chain, and it is the same type of force (contact/tension). Earth\'s pull on the lamp balances the chain\'s pull but acts on the same object, so it is not a third-law pair.',
    partNumber: 2,
    partTitle: 'Identifying Force Pairs',
  },
  // Part 3 — Why Action-Reaction Doesn't Mean Nothing Moves
  {
    id: 'ntl-ent-3a',
    question: 'On frictionless ice, a 50 kg skater pushes a 25 kg sled with a constant 75 N horizontal force for 2.0 s, starting from rest. What are their speeds when the push ends?',
    options: [
      'Both at rest, since the forces cancel',
      'Sled 6 m/s forward, skater 3 m/s backward',
      'Sled 6 m/s forward, skater at rest',
      'Sled 3 m/s, skater 6 m/s backward',
    ],
    correctIndex: 1,
    explanation: 'Each feels 75 N on itself: the sled accelerates at $75/25 = 3\\text{ m/s}^2$ and the skater at $75/50 = 1.5\\text{ m/s}^2$ the other way, giving 6 m/s and 3 m/s after 2.0 s. The pair acts on different objects, so it does not cancel.',
    partNumber: 3,
    partTitle: 'Why Action-Reaction Doesn\'t Mean Nothing Moves',
  },
  {
    id: 'ntl-ent-3b',
    question: 'Team A beats team B in a tug-of-war with a light rope. Which statement explains the result?',
    options: [
      'Team A pulls on the rope harder than team B pulls on it',
      'Team A is heavier, so its pull on the rope is larger',
      'The rope pulls both teams equally, but the ground pushes A harder',
      'Both rope forces cancel, so inertia alone decides the winner',
    ],
    correctIndex: 2,
    explanation: 'A light rope has the same tension at both ends, so each team feels the same rope force. Team A accelerates forward because the friction force the ground exerts on its feet exceeds the rope\'s pull on it.',
    partNumber: 3,
    partTitle: 'Why Action-Reaction Doesn\'t Mean Nothing Moves',
  },
  // Part 4 — Connected Objects — Strings, Pulleys, and the Atwood Machine
  {
    id: 'ntl-ent-4a',
    question: 'An Atwood machine has a 2.0 kg block and a 3.0 kg block hanging on either side of an ideal pulley. What is the tension in the string? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '30 N',
      '20 N',
      '10 N',
      '24 N',
    ],
    correctIndex: 3,
    explanation: '$a = \\dfrac{(3.0 - 2.0)(10)}{5.0} = 2.0\\text{ m/s}^2$, and for the lighter block $T - 20 = 2.0(2.0)$, so $T = 24$ N. The tension must lie between the two weights for the light block to rise and the heavy one to fall.',
    partNumber: 4,
    partTitle: 'Connected Objects — Strings, Pulleys, and the Atwood Machine',
  },
  {
    id: 'ntl-ent-4b',
    question: 'A 6.0 kg block on a frictionless table is connected by a string over an ideal pulley to a 2.0 kg block hanging off the edge. What is the acceleration of the blocks? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$2.5\\text{ m/s}^2$',
      '$3.3\\text{ m/s}^2$',
      '$5.0\\text{ m/s}^2$',
      '$10\\text{ m/s}^2$',
    ],
    correctIndex: 0,
    explanation: 'Only the hanging weight (20 N) drives the system, but both masses must be accelerated: $a = 20/(6.0 + 2.0) = 2.5\\text{ m/s}^2$. Dividing by the table block\'s mass alone gives 3.3.',
    partNumber: 4,
    partTitle: 'Connected Objects — Strings, Pulleys, and the Atwood Machine',
  },
  // Part 5 — Two-Body Problems
  {
    id: 'ntl-ent-5a',
    question: 'Two blocks touch on a frictionless floor: a 2.0 kg block and a 6.0 kg block. A 40 N horizontal force pushes the 2.0 kg block into the 6.0 kg block. What force does the 2.0 kg block exert on the 6.0 kg block?',
    options: [
      '10 N',
      '30 N',
      '40 N',
      '20 N',
    ],
    correctIndex: 1,
    explanation: 'Both blocks accelerate at $40/8.0 = 5.0\\text{ m/s}^2$, and the contact force is the only horizontal force on the 6.0 kg block, so it is $6.0 \\times 5.0 = 30$ N. Pushing on the other block instead would give 10 N.',
    partNumber: 5,
    partTitle: 'Two-Body Problems',
  },
  {
    id: 'ntl-ent-5b',
    question: 'Block A (1.0 kg) sits on block B (4.0 kg) on a frictionless floor, with $\\mu_s = 0.30$ between the blocks. What is the largest horizontal force that can be applied to B without A sliding? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '3.0 N',
      '12 N',
      '15 N',
      '30 N',
    ],
    correctIndex: 2,
    explanation: 'Static friction is the only horizontal force on A, so A\'s acceleration is at most $\\mu_s g = 3.0\\text{ m/s}^2$. Both blocks share that acceleration: $F = (1.0 + 4.0)(3.0) = 15$ N. The 3.0 N value is the maximum friction on A, not the force on the pair.',
    partNumber: 5,
    partTitle: 'Two-Body Problems',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'ntl-ent-6a',
    question: 'Three crates connected by light strings, 4.0 kg in front, then 3.0 kg, then 1.0 kg, are pulled across a frictionless floor by a 24 N force on the front crate. What is the tension in the string between the 4.0 kg and 3.0 kg crates?',
    options: [
      '24 N',
      '3 N',
      '9 N',
      '12 N',
    ],
    correctIndex: 3,
    explanation: 'All three accelerate at $24/8.0 = 3.0\\text{ m/s}^2$. The string behind the front crate must accelerate everything behind it: $T = (3.0 + 1.0)(3.0) = 12$ N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ntl-ent-6b',
    question: 'An Atwood machine holds a 1.0 kg block and a 4.0 kg block, released from rest. How far does the 4.0 kg block fall in the first 0.50 s? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.75 m',
      '1.5 m',
      '1.25 m',
      '0.94 m',
    ],
    correctIndex: 0,
    explanation: '$a = \\dfrac{(4.0 - 1.0)(10)}{5.0} = 6.0\\text{ m/s}^2$, so $d = \\tfrac{1}{2}(6.0)(0.50)^2 = 0.75$ m. Assuming free fall gives 1.25 m, and dividing by the heavy mass alone ($a = 7.5\\text{ m/s}^2$) gives 0.94 m.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'ntl-ent-7a',
    question: 'A heavy truck pushes a lighter stalled car, and the two speed up together. How does the force of the truck on the car compare with the force of the car on the truck?',
    options: [
      'The truck\'s push is larger',
      'They are equal in size',
      'The car\'s push is larger',
      'Equal only once speed is steady',
    ],
    correctIndex: 1,
    explanation: 'The two forces are a third-law pair, equal at every instant whether or not the vehicles accelerate. The car speeds up because the truck\'s push exceeds the friction on the car, not because the pair is unequal.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ntl-ent-7b',
    question: 'A 2.0 kg box sits on the floor of an elevator that is accelerating upward at $3.0\\text{ m/s}^2$. What force does the box exert on the floor? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '20 N downward',
      '26 N upward',
      '26 N downward',
      '14 N downward',
    ],
    correctIndex: 2,
    explanation: 'For the box, $N - mg = ma$, so the floor pushes up with $N = 2.0(10 + 3.0) = 26$ N. By the third law, the box pushes down on the floor with 26 N.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Action-Reaction Pairs' },
    { partNumber: 2, partTitle: 'Identifying Force Pairs' },
    { partNumber: 3, partTitle: 'Why Action-Reaction Doesn\'t Mean Nothing Moves' },
    { partNumber: 4, partTitle: 'Connected Objects — Strings, Pulleys, and the Atwood Machine' },
    { partNumber: 5, partTitle: 'Two-Body Problems' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
