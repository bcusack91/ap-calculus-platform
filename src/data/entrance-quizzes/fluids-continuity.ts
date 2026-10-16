/**
 * Entrance Quiz — Fluids: Continuity — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Volume Flow Rate
  {
    id: 'fc-ent-1a',
    question: 'A faucet fills a 12 L bucket in 30 s. The faucet\'s opening has a cross-sectional area of $2.0 \\times 10^{-4}\\text{ m}^2$. At what speed does the water leave the faucet? (1 L = $10^{-3}\\text{ m}^3$)',
    options: [
      '2000 m/s',
      '0.50 m/s',
      '2.0 m/s',
      '1.0 m/s',
    ],
    correctIndex: 2,
    explanation: '$Q = 12\\text{ L}/30\\text{ s} = 0.40\\text{ L/s} = 4.0 \\times 10^{-4}\\text{ m}^3\\text{/s}$, so $v = Q/A = 2.0$ m/s. Leaving the liters unconverted gives 2000 m/s, and dividing $A$ by $Q$ gives 0.50.',
    partNumber: 1,
    partTitle: 'Volume Flow Rate',
  },
  {
    id: 'fc-ent-1b',
    question: 'Water moves at the same speed through pipe X and pipe Y. Pipe X has twice the inside diameter of pipe Y. How do their volume flow rates compare?',
    options: [
      'Pipe Y carries more, since its water is squeezed',
      'Pipe X carries twice as much water each second',
      'The two are equal, because the speeds are equal',
      'Pipe X carries four times as much water each second',
    ],
    correctIndex: 3,
    explanation: '$Q = Av$, and area scales with diameter squared, so at equal speed pipe X carries $2^2 = 4$ times the volume per second.',
    partNumber: 1,
    partTitle: 'Volume Flow Rate',
  },
  // Part 2 — Continuity for Incompressible Flow
  {
    id: 'fc-ent-2a',
    question: 'Water flows at 1.5 m/s through a pipe of cross-sectional area $6.0 \\times 10^{-3}\\text{ m}^2$ that narrows to an area of $2.0 \\times 10^{-3}\\text{ m}^2$. What is the speed in the narrow section?',
    options: [
      '4.5 m/s',
      '13.5 m/s',
      '1.5 m/s',
      '0.50 m/s',
    ],
    correctIndex: 0,
    explanation: 'Continuity gives $v_2 = v_1(A_1/A_2) = 1.5(3.0) = 4.5$ m/s. Inverting the ratio gives 0.50 m/s, and squaring an area ratio (as if it were a radius ratio) gives 13.5 m/s.',
    partNumber: 2,
    partTitle: 'Continuity for Incompressible Flow',
  },
  {
    id: 'fc-ent-2b',
    question: 'Why must the volume flow rate of water be the same at every cross-section of a single completely filled pipe with no leaks?',
    options: [
      'The water\'s speed is the same at every point along a single pipe',
      'Water barely compresses and cannot pile up, so what enters must leave',
      'The pressure is equal at every point along a pipe that has no leaks',
      'Friction with the pipe walls evens out the flow from place to place',
    ],
    correctIndex: 1,
    explanation: 'For an incompressible fluid, volume (and mass) entering a section each second must equal what leaves it, so $Av$ is constant. The speed itself changes wherever the area changes.',
    partNumber: 2,
    partTitle: 'Continuity for Incompressible Flow',
  },
  // Part 3 — Pipe Narrowing & Speed
  {
    id: 'fc-ent-3a',
    question: 'A garden hose with an inside diameter of 1.6 cm carries water at 1.0 m/s into a nozzle whose opening has a diameter of 0.40 cm. How fast does the water leave the nozzle?',
    options: [
      '4.0 m/s',
      '2.0 m/s',
      '16 m/s',
      '0.063 m/s',
    ],
    correctIndex: 2,
    explanation: 'The area ratio is the diameter ratio squared, $(1.6/0.40)^2 = 16$, so the speed rises from 1.0 to 16 m/s. Using the diameter ratio without squaring gives 4.0 m/s.',
    partNumber: 3,
    partTitle: 'Pipe Narrowing & Speed',
  },
  {
    id: 'fc-ent-3b',
    question: 'A student claims that halving a pipe\'s diameter doubles the speed of the water flowing through it. What is the correct conclusion?',
    options: [
      'The speed is unchanged, since the flow rate stays constant',
      'The claim is right; speed varies inversely with diameter',
      'The speed halves, since less water fits through the narrow part',
      'The area falls to one-fourth, so the speed quadruples',
    ],
    correctIndex: 3,
    explanation: 'Continuity keeps $Av$ constant, and $A = \\pi d^2/4$, so halving $d$ cuts the area to one-fourth and makes the speed four times as large.',
    partNumber: 3,
    partTitle: 'Pipe Narrowing & Speed',
  },
  // Part 4 — Branching & Merging Pipes
  {
    id: 'fc-ent-4a',
    question: 'A main pipe of area $0.030\\text{ m}^2$ carries water at 2.0 m/s and splits into branch A (area $0.010\\text{ m}^2$, speed 3.0 m/s) and branch B (area $0.015\\text{ m}^2$). What is the speed in branch B?',
    options: [
      '2.0 m/s',
      '3.0 m/s',
      '4.0 m/s',
      '1.0 m/s',
    ],
    correctIndex: 0,
    explanation: '$Q_{main} = 0.030(2.0) = 0.060\\text{ m}^3\\text{/s}$ and $Q_A = 0.010(3.0) = 0.030\\text{ m}^3\\text{/s}$, so $Q_B = 0.030\\text{ m}^3\\text{/s}$ and $v_B = 0.030/0.015 = 2.0$ m/s. Sending the whole main flow into B gives 4.0 m/s.',
    partNumber: 4,
    partTitle: 'Branching & Merging Pipes',
  },
  {
    id: 'fc-ent-4b',
    question: 'A pipe with an inside diameter of 4.0 cm splits into four branches, each with an inside diameter of 2.0 cm. How does the water speed in each branch compare with the speed in the main pipe?',
    options: [
      'One-fourth the speed in the main pipe',
      'The same as in the main pipe',
      'Four times the speed in the main pipe',
      'Twice the speed in the main pipe',
    ],
    correctIndex: 1,
    explanation: 'Each branch has one-fourth the main pipe\'s area, so the four together have exactly the main pipe\'s area. The total flow rate is unchanged, so the speed is the same.',
    partNumber: 4,
    partTitle: 'Branching & Merging Pipes',
  },
  // Part 5 — Mass Flow Rate
  {
    id: 'fc-ent-5a',
    question: 'Oil of density $900\\text{ kg/m}^3$ flows at 2.5 m/s through a pipe of cross-sectional area $4.0 \\times 10^{-3}\\text{ m}^2$. What is the mass flow rate?',
    options: [
      '10 kg/s',
      '0.010 kg/s',
      '9.0 kg/s',
      '3.6 kg/s',
    ],
    correctIndex: 2,
    explanation: '$\\dot m = \\rho A v = 900(4.0 \\times 10^{-3})(2.5) = 9.0$ kg/s. The value 0.010 is the volume flow rate in m³/s, and 10 kg/s uses water\'s density.',
    partNumber: 5,
    partTitle: 'Mass Flow Rate',
  },
  {
    id: 'fc-ent-5b',
    question: 'Water enters a pipe section at 6.0 kg/s, and the section then narrows to one-third of its original area. What is the mass flow rate in the narrow part?',
    options: [
      '54 kg/s, since the speed rises by a factor of nine',
      '18 kg/s, since the water there moves three times faster',
      '2.0 kg/s, since the area there is one-third as large',
      '6.0 kg/s, the same as in the wide part',
    ],
    correctIndex: 3,
    explanation: 'Mass cannot pile up inside a filled pipe, so the mass flow rate $\\rho A v$ is the same at every cross-section: the speed triples while the area drops to one-third.',
    partNumber: 5,
    partTitle: 'Mass Flow Rate',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'fc-ent-6a',
    question: 'A circular pipe of radius 2.0 cm carries water ($\\rho = 1000\\text{ kg/m}^3$) at 3.0 m/s, then narrows to a radius of 1.0 cm. What are the mass flow rate and the speed in the narrow section?',
    options: [
      '3.8 kg/s and 12 m/s',
      '3.8 kg/s and 6.0 m/s',
      '15 kg/s and 12 m/s',
      '0.0038 kg/s and 12 m/s',
    ],
    correctIndex: 0,
    explanation: '$\\dot m = \\rho \\pi r^2 v = 1000\\pi(0.020)^2(3.0) \\approx 3.8$ kg/s, the same everywhere in the pipe. Halving the radius quarters the area, so the speed becomes $4(3.0) = 12$ m/s; 6.0 m/s forgets to square the radius ratio.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'fc-ent-6b',
    question: 'An irrigation channel 3.0 m wide carries water 0.80 m deep at 0.50 m/s. It then passes through a culvert 2.0 m wide in which the water is 0.30 m deep. What is the water\'s speed in the culvert?',
    options: [
      '0.75 m/s',
      '2.0 m/s',
      '0.13 m/s',
      '0.50 m/s',
    ],
    correctIndex: 1,
    explanation: '$Q = (3.0)(0.80)(0.50) = 1.2\\text{ m}^3\\text{/s}$, and the culvert\'s flow area is $(2.0)(0.30) = 0.60\\text{ m}^2$, so $v = 2.0$ m/s. Accounting only for the narrower width gives 0.75 m/s, and inverting the area ratio gives 0.13 m/s.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'fc-ent-7a',
    question: 'Water leaves a faucet at 1.0 m/s through an opening of area $1.2\\text{ cm}^2$ and falls freely. What is the cross-sectional area of the stream 0.20 m below the opening? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '$2.7\\text{ cm}^2$',
      '$1.2\\text{ cm}^2$',
      '$0.54\\text{ cm}^2$',
      '$0.24\\text{ cm}^2$',
    ],
    correctIndex: 2,
    explanation: 'Free fall gives $v^2 = 1.0^2 + 2(10)(0.20) = 5.0$, so $v \\approx 2.24$ m/s. Continuity then gives $A = 1.2(1.0/2.24) \\approx 0.54\\text{ cm}^2$; dividing by $v^2$ instead of $v$ gives 0.24.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fc-ent-7b',
    question: 'Water from a hose aimed straight up rises to height $h$. You then cover part of the opening so its area is one-fourth as large, and assume the volume flow rate stays the same. Ignoring air resistance, how high does the water rise now?',
    options: [
      'Four times as high',
      'The same height',
      'Twice as high',
      'Sixteen times as high',
    ],
    correctIndex: 3,
    explanation: 'One-fourth the area at the same flow rate means four times the exit speed. Rise height is $v^2/2g$, so it becomes $4^2 = 16$ times as high.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Volume Flow Rate' },
    { partNumber: 2, partTitle: 'Continuity for Incompressible Flow' },
    { partNumber: 3, partTitle: 'Pipe Narrowing & Speed' },
    { partNumber: 4, partTitle: 'Branching & Merging Pipes' },
    { partNumber: 5, partTitle: 'Mass Flow Rate' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
