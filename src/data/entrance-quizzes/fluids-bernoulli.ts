/**
 * Entrance Quiz — Fluids: Bernoulli's Equation — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Bernoulli's Equation Setup
  {
    id: 'fbe-ent-1a',
    question: 'A large closed tank holds water with air above it at an absolute pressure of 140 kPa. Water leaves through a small outlet 1.0 m below the water surface into the open air at 100 kPa. Treating the water as ideal, how fast does it leave? Use $g = 10\\text{ m/s}^2$ and $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '14 m/s',
      '8.9 m/s',
      '4.5 m/s',
      '10 m/s',
    ],
    correctIndex: 3,
    explanation: 'Between the surface ($v \\approx 0$) and the outlet, $\\frac{1}{2}\\rho v^2 = (P_1 - P_2) + \\rho g h = 40{,}000 + 10{,}000 = 50{,}000$ Pa, so $v^2 = 100$ and $v = 10$ m/s. Ignoring the 1.0 m drop gives 8.9 m/s, and dropping the $\\frac{1}{2}$ gives 14 m/s.',
    partNumber: 1,
    partTitle: 'Bernoulli\'s Equation Setup',
  },
  {
    id: 'fbe-ent-1b',
    question: 'Which of these flows does the ideal-fluid Bernoulli equation describe poorly?',
    options: [
      'Thick syrup creeping slowly through a long narrow tube with sticky walls',
      'Water draining steadily from a small hole in a large tank',
      'Water flowing smoothly through a short horizontal pipe that narrows',
      'Water coming steadily out of a fire-hose nozzle',
    ],
    correctIndex: 0,
    explanation: 'Bernoulli\'s equation assumes a non-viscous, incompressible fluid in steady flow. Syrup in a long narrow tube loses much of its mechanical energy to viscous friction, so the ideal model fails there.',
    partNumber: 1,
    partTitle: 'Bernoulli\'s Equation Setup',
  },
  // Part 2 — Conservation of Energy in Fluids
  {
    id: 'fbe-ent-2a',
    question: 'A pump lifts water 15 m and speeds it up from rest to 4.0 m/s, with the same pressure at the intake and the outlet. Ignoring friction, how much work must the pump do on each cubic meter of water? Use $g = 10\\text{ m/s}^2$ and $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '150,000 J',
      '158,000 J',
      '166,000 J',
      '8,000 J',
    ],
    correctIndex: 1,
    explanation: 'The work per volume equals the increase in $\\rho g y + \\frac{1}{2}\\rho v^2$: $1000(10)(15) + \\frac{1}{2}(1000)(4.0)^2 = 150{,}000 + 8000 = 158{,}000$ J. Leaving out the kinetic term gives 150,000 J, and dropping the $\\frac{1}{2}$ gives 166,000 J.',
    partNumber: 2,
    partTitle: 'Conservation of Energy in Fluids',
  },
  {
    id: 'fbe-ent-2b',
    question: 'Water flows steadily up a vertical pipe of constant cross-section to a higher floor. How do the water\'s speed and pressure at the top compare with those at the bottom?',
    options: [
      'The speed and the pressure are both lower at the top of the pipe',
      'The speed is lower at the top, while the pressure is unchanged',
      'The speed is unchanged, and the pressure is lower at the top',
      'The speed is unchanged, and the pressure is higher at the top',
    ],
    correctIndex: 2,
    explanation: 'Continuity with equal areas keeps the speed the same, so the $\\frac{1}{2}\\rho v^2$ term does not change. The gain in $\\rho g y$ must then come out of the pressure term, which drops by $\\rho g h$.',
    partNumber: 2,
    partTitle: 'Conservation of Energy in Fluids',
  },
  // Part 3 — Pressure-Speed Trade-off
  {
    id: 'fbe-ent-3a',
    question: 'Wind blows at 25 m/s across a flat roof of area 150 m², while the air inside the house is still. Using Bernoulli\'s equation with $\\rho_{air} = 1.2\\text{ kg/m}^3$, what is the net upward force of the air on the roof?',
    options: [
      '$1.1 \\times 10^5$ N',
      '$2.3 \\times 10^3$ N',
      '$3.8 \\times 10^2$ N',
      '$5.6 \\times 10^4$ N',
    ],
    correctIndex: 3,
    explanation: 'The pressure difference is $\\frac{1}{2}\\rho v^2 = \\frac{1}{2}(1.2)(25)^2 = 375$ Pa, and multiplying by the roof area gives $375(150) \\approx 5.6 \\times 10^4$ N. Dropping the $\\frac{1}{2}$ gives $1.1 \\times 10^5$ N, and 375 N is the pressure difference without the area.',
    partNumber: 3,
    partTitle: 'Pressure-Speed Trade-off',
  },
  {
    id: 'fbe-ent-3b',
    question: 'Ideal, incompressible water flows steadily through a horizontal pipe into a narrower section, where it moves faster. How does the pressure in the narrow section compare with the pressure in the wide section?',
    options: [
      'Lower, because the water must be pushed from behind to speed up',
      'Higher, because the water is squeezed into a smaller space',
      'The same, because the pipe stays at one height throughout',
      'Higher, because faster water pushes harder on the walls',
    ],
    correctIndex: 0,
    explanation: 'The water speeds up entering the narrow section, so the net force on it points forward: the pressure behind it must exceed the pressure ahead. Bernoulli\'s equation at constant height says the same thing: larger $\\tfrac{1}{2}\\rho v^2$ means smaller $P$.',
    partNumber: 3,
    partTitle: 'Pressure-Speed Trade-off',
  },
  // Part 4 — Torricelli's Theorem
  {
    id: 'fbe-ent-4a',
    question: 'A large open tank has a small hole in its side 1.8 m below the water surface. How fast does the water leave the hole? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '36 m/s',
      '6.0 m/s',
      '4.2 m/s',
      '18 m/s',
    ],
    correctIndex: 1,
    explanation: 'Torricelli\'s result, from Bernoulli with $P_{atm}$ at both points and $v \\approx 0$ at the surface, is $v = \\sqrt{2gh} = \\sqrt{2(10)(1.8)} = 6.0$ m/s. Forgetting the square root gives 36, and leaving out the 2 gives 4.2.',
    partNumber: 4,
    partTitle: 'Torricelli\'s Theorem',
  },
  {
    id: 'fbe-ent-4b',
    question: 'A tall open tank has two small holes in its side: one 0.20 m below the water surface and one 0.80 m below it. How do the speeds of the two jets compare as they leave the holes?',
    options: [
      'Equally fast, as the atmosphere sets the speed',
      'Four times as fast from the deeper hole',
      'Twice as fast from the deeper hole',
      'Faster from the shallower hole, with less water above',
    ],
    correctIndex: 2,
    explanation: 'The exit speed is $\\sqrt{2gh}$, so four times the depth gives $\\sqrt{4} = 2$ times the speed. Four times as fast would require the speed to be proportional to the depth itself.',
    partNumber: 4,
    partTitle: 'Torricelli\'s Theorem',
  },
  // Part 5 — Real-World Applications
  {
    id: 'fbe-ent-5a',
    question: 'A Pitot tube on a drone measures a difference of 240 Pa between the stagnation pressure and the static pressure. The air density is $1.2\\text{ kg/m}^3$. What is the drone\'s airspeed?',
    options: [
      '14 m/s',
      '400 m/s',
      '28 m/s',
      '20 m/s',
    ],
    correctIndex: 3,
    explanation: 'At the stagnation port the air is brought to rest, so $\\Delta P = \\frac{1}{2}\\rho v^2$ and $v = \\sqrt{2(240)/1.2} = \\sqrt{400} = 20$ m/s. Leaving out the 2 gives 14 m/s, and forgetting the square root gives 400.',
    partNumber: 5,
    partTitle: 'Real-World Applications',
  },
  {
    id: 'fbe-ent-5b',
    question: 'Water flows through a horizontal Venturi meter. Open vertical tubes rise from the wide section and from the narrow throat. Which tube holds the taller column of water?',
    options: [
      'The wide part\'s tube, because slower water there is at higher pressure',
      'The throat tube, because faster water exerts more pressure',
      'The throat tube, because the water is squeezed into a smaller space',
      'Neither, since the same water flows through both',
    ],
    correctIndex: 0,
    explanation: 'By continuity the water moves faster in the throat, and by Bernoulli at constant height faster flow means lower pressure. The higher pressure in the wide section supports a taller column.',
    partNumber: 5,
    partTitle: 'Real-World Applications',
  },
  // Part 6 — Combined Continuity + Bernoulli
  {
    id: 'fbe-ent-6a',
    question: 'A horizontal pipe narrows from an area of $0.060\\text{ m}^2$ to $0.020\\text{ m}^2$. In the wide part, water moves at 1.5 m/s at a pressure of 180 kPa. What is the pressure in the narrow part? Use $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '189 kPa',
      '171 kPa',
      '162 kPa',
      '180 kPa',
    ],
    correctIndex: 1,
    explanation: 'Continuity gives $v_2 = 1.5(3.0) = 4.5$ m/s. Bernoulli then gives $P_2 = 180{,}000 - \\frac{1}{2}(1000)(4.5^2 - 1.5^2) = 180{,}000 - 9000 = 171$ kPa. Adding the term instead gives 189 kPa, and dropping the $\\frac{1}{2}$ gives 162 kPa.',
    partNumber: 6,
    partTitle: 'Combined Continuity + Bernoulli',
  },
  {
    id: 'fbe-ent-6b',
    question: 'Water flows upward through a pipe from point 1 (area $0.020\\text{ m}^2$, speed 2.0 m/s, pressure 250 kPa) to point 2, which is 4.0 m higher and has area $0.010\\text{ m}^2$. What is the pressure at point 2? Use $g = 10\\text{ m/s}^2$ and $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '210 kPa',
      '244 kPa',
      '204 kPa',
      '216 kPa',
    ],
    correctIndex: 2,
    explanation: 'Continuity gives $v_2 = 4.0$ m/s. Then $P_2 = 250{,}000 - \\frac{1}{2}(1000)(4.0^2 - 2.0^2) - 1000(10)(4.0) = 250{,}000 - 6000 - 40{,}000 = 204$ kPa. Ignoring the speed change gives 210 kPa, and ignoring the height gives 244 kPa.',
    partNumber: 6,
    partTitle: 'Combined Continuity + Bernoulli',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'fbe-ent-7a',
    question: 'A large open tank drains through a short horizontal pipe at its base, 5.0 m below the water surface. The pipe\'s opening has an area of 2.0 cm². What is the volume flow rate out of the pipe? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '0.20 L/s',
      '20 L/s',
      '1.4 L/s',
      '2.0 L/s',
    ],
    correctIndex: 3,
    explanation: 'Torricelli gives $v = \\sqrt{2(10)(5.0)} = 10$ m/s, and $A = 2.0 \\times 10^{-4}\\text{ m}^2$, so $Q = Av = 2.0 \\times 10^{-3}\\text{ m}^3\\text{/s} = 2.0$ L/s. Using $v = \\sqrt{gh}$ gives 1.4 L/s.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fbe-ent-7b',
    question: 'Ideal (frictionless) water flows steadily through a horizontal pipe that narrows and then widens back to its original size. How does the pressure in the final wide section compare with the pressure in the first wide section?',
    options: [
      'Equal, since the water returns to its starting speed and height',
      'Lower, since pressure is used up passing through the throat',
      'Higher, since the water speeds up and then slows again',
      'Lower, since the water loses speed after the throat',
    ],
    correctIndex: 0,
    explanation: 'Continuity returns the water to its original speed in the final section, and Bernoulli at constant height then returns the pressure to its original value. An ideal fluid loses no energy in the throat.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Bernoulli\'s Equation Setup' },
    { partNumber: 2, partTitle: 'Conservation of Energy in Fluids' },
    { partNumber: 3, partTitle: 'Pressure-Speed Trade-off' },
    { partNumber: 4, partTitle: 'Torricelli\'s Theorem' },
    { partNumber: 5, partTitle: 'Real-World Applications' },
    { partNumber: 6, partTitle: 'Combined Continuity + Bernoulli' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
