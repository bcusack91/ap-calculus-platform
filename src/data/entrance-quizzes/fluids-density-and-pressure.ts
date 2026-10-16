/**
 * Entrance Quiz — Fluids: Density and Pressure — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Density: Definition & Units
  {
    id: 'fdp-ent-1a',
    question: 'A 250 cm³ sample of a material has a mass of 0.60 kg. What is its density in SI units?',
    options: [
      '$2400\\text{ kg/m}^3$',
      '$2.4\\text{ kg/m}^3$',
      '$240\\text{ kg/m}^3$',
      '$24{,}000\\text{ kg/m}^3$',
    ],
    correctIndex: 0,
    explanation: '$250\\text{ cm}^3 = 2.5 \\times 10^{-4}\\text{ m}^3$, so $\\rho = 0.60/(2.5 \\times 10^{-4}) = 2400\\text{ kg/m}^3$. The value 2.4 is the density in g/cm³ with the wrong units attached.',
    partNumber: 1,
    partTitle: 'Density: Definition & Units',
  },
  {
    id: 'fdp-ent-1b',
    question: 'A solid gold bar is melted and recast into two identical smaller bars. Compared with the original bar, each smaller bar has:',
    options: [
      'Half the mass; half the density',
      'Half the mass; same density',
      'Same mass; one-half the density',
      'Half the mass; twice the density',
    ],
    correctIndex: 1,
    explanation: 'Density $\\rho = m/V$ is a property of the material: each new bar has half the mass and half the volume, so the ratio is unchanged.',
    partNumber: 1,
    partTitle: 'Density: Definition & Units',
  },
  // Part 2 — Pressure: Definition & Units
  {
    id: 'fdp-ent-2a',
    question: 'A 60 kg hiker stands on snowshoes whose total contact area with the snow is 0.30 m². What average pressure does she exert on the snow? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '200 Pa',
      '180 Pa',
      '2000 Pa',
      '20,000 Pa',
    ],
    correctIndex: 2,
    explanation: '$P = F/A = mg/A = 600/0.30 = 2000$ Pa. Using the mass instead of the weight gives 200 Pa, and multiplying force by area gives 180.',
    partNumber: 2,
    partTitle: 'Pressure: Definition & Units',
  },
  {
    id: 'fdp-ent-2b',
    question: 'A rectangular brick can rest on the floor on its largest face or on its smallest face. How do the two cases compare?',
    options: [
      'The force is greater on the largest face; the pressure is equal',
      'The force and the pressure are both the same in the two cases',
      'The pressure is the same, but the smallest face gets more force',
      'The force is the same, but the pressure is greater on the smallest face',
    ],
    correctIndex: 3,
    explanation: 'The floor supports the brick\'s full weight either way, so the force is the same. Pressure is that force divided by the contact area, so the smaller face gives the greater pressure.',
    partNumber: 2,
    partTitle: 'Pressure: Definition & Units',
  },
  // Part 3 — Hydrostatic Pressure
  {
    id: 'fdp-ent-3a',
    question: 'An open tank holds oil of density $800\\text{ kg/m}^3$. What is the gauge pressure 3.0 m below the oil\'s surface? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '24,000 Pa',
      '30,000 Pa',
      '2,400 Pa',
      '124,000 Pa',
    ],
    correctIndex: 0,
    explanation: '$P_{gauge} = \\rho g h = 800(10)(3.0) = 24{,}000$ Pa. Using water\'s density gives 30,000 Pa, and adding atmospheric pressure gives the absolute pressure, 124,000 Pa.',
    partNumber: 3,
    partTitle: 'Hydrostatic Pressure',
  },
  {
    id: 'fdp-ent-3b',
    question: 'Two dams hold back lakes that are both 30 m deep at the dam. One lake is 10 km long and the other is 100 m long. How does the water pressure at the base of the two dams compare?',
    options: [
      'Greater at the long lake\'s dam, which holds back more water',
      'The same at both, since the depths are equal',
      'Greater at the short lake\'s dam, where the water is confined',
      'Greater at the long lake\'s dam, by a factor of 100',
    ],
    correctIndex: 1,
    explanation: 'Fluid pressure depends only on the density, $g$, and the depth ($P = \\rho g h$), not on how much water lies behind the dam, so equal depths give equal pressures.',
    partNumber: 3,
    partTitle: 'Hydrostatic Pressure',
  },
  // Part 4 — Absolute vs Gauge Pressure
  {
    id: 'fdp-ent-4a',
    question: 'Atmospheric pressure is $1.0 \\times 10^5$ Pa. At what depth in a freshwater lake ($\\rho = 1000\\text{ kg/m}^3$) is the absolute pressure three times atmospheric pressure? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '30 m',
      '10 m',
      '20 m',
      '200 m',
    ],
    correctIndex: 2,
    explanation: 'Absolute pressure is $P_{atm} + \\rho g h$, so $\\rho g h = 2.0 \\times 10^5$ Pa and $h = 2.0 \\times 10^5/(1000 \\cdot 10) = 20$ m. Setting $\\rho g h$ alone equal to three atmospheres gives 30 m.',
    partNumber: 4,
    partTitle: 'Absolute vs Gauge Pressure',
  },
  {
    id: 'fdp-ent-4b',
    question: 'A vacuum-sealed jar has an absolute pressure of 30 kPa inside, while the air outside is at 100 kPa. The lid\'s area is $5.0 \\times 10^{-3}\\text{ m}^2$. What is the gauge pressure inside the jar, and what net force does the air exert on the lid?',
    options: [
      '$-30$ kPa and 150 N',
      '$-70$ kPa and 500 N',
      '$+30$ kPa and 150 N',
      '$-70$ kPa and 350 N',
    ],
    correctIndex: 3,
    explanation: 'Gauge pressure is $P_{abs} - P_{atm} = 30 - 100 = -70$ kPa. The net force is the pressure difference times the area, $(70{,}000)(5.0 \\times 10^{-3}) = 350$ N pressing the lid on; 500 N counts only the outside air.',
    partNumber: 4,
    partTitle: 'Absolute vs Gauge Pressure',
  },
  // Part 5 — Pascal's Principle & Hydraulics
  {
    id: 'fdp-ent-5a',
    question: 'A hydraulic lift has an input piston of diameter 4.0 cm and an output piston of diameter 40 cm. A 120 N force is applied to the input piston. What is the largest weight the output piston can support?',
    options: [
      '12,000 N',
      '1,200 N',
      '120 N',
      '1.2 N',
    ],
    correctIndex: 0,
    explanation: 'The pressure is the same on both pistons, so the force scales with area, which scales with diameter squared: $(40/4.0)^2 = 100$, giving 12,000 N. Using the diameter ratio without squaring gives 1,200 N.',
    partNumber: 5,
    partTitle: 'Pascal\'s Principle & Hydraulics',
  },
  {
    id: 'fdp-ent-5b',
    question: 'A hydraulic jack lets a mechanic lift a car that weighs far more than the force she applies. Why does this not violate conservation of energy?',
    options: [
      'The fluid stores the extra energy as pressure until the car is lowered',
      'The output piston moves a much smaller distance, so the work out equals the work in',
      'The extra energy comes from heat produced as the fluid is compressed',
      'The pressure is greater at the output piston, and that supplies the energy',
    ],
    correctIndex: 1,
    explanation: 'The same volume of fluid leaves the small cylinder and enters the large one, so the large piston rises only a small distance. Force times distance, the work, is the same at both ends (ignoring friction).',
    partNumber: 5,
    partTitle: 'Pascal\'s Principle & Hydraulics',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'fdp-ent-6a',
    question: 'An aquarium has a rectangular bottom 0.50 m by 0.30 m and holds water 0.40 m deep. What force does the water exert on the bottom, not counting atmospheric pressure? Use $g = 10\\text{ m/s}^2$ and $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '60 N',
      '1500 N',
      '600 N',
      '300 N',
    ],
    correctIndex: 2,
    explanation: 'The gauge pressure at the bottom is $\\rho g h = 1000(10)(0.40) = 4000$ Pa, and the area is $0.15\\text{ m}^2$, so $F = PA = 600$ N. Leaving out $g$ gives 60 N, and leaving out the depth gives 1500 N.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'fdp-ent-6b',
    question: 'A sealed, completely full container of water has a tight piston on top. A push on the piston raises the pressure just under it by 2000 Pa. By how much does the pressure increase at a point 0.50 m lower in the water? Use $g = 10\\text{ m/s}^2$ and $\\rho = 1000\\text{ kg/m}^3$.',
    options: [
      '0 Pa',
      '7000 Pa',
      '5000 Pa',
      '2000 Pa',
    ],
    correctIndex: 3,
    explanation: 'By Pascal\'s principle, a pressure change applied to an enclosed incompressible fluid is transmitted undiminished to every point, so the increase is 2000 Pa everywhere. The $\\rho g h = 5000$ Pa was already there before the push and does not change.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'fdp-ent-7a',
    question: 'A solid cube 0.20 m on each side, made of a material with density $3000\\text{ kg/m}^3$, rests on a table. What pressure does it exert on the table? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '6000 Pa',
      '1200 Pa',
      '600 Pa',
      '30,000 Pa',
    ],
    correctIndex: 0,
    explanation: 'The cube\'s mass is $3000(0.20)^3 = 24$ kg, so its weight is 240 N, spread over $0.040\\text{ m}^2$: $P = 6000$ Pa (the same as $\\rho g h$ for the cube\'s height). Using the mass instead of the weight gives 600 Pa.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fdp-ent-7b',
    question: 'Open tank A holds oil ($\\rho = 800\\text{ kg/m}^3$) to a depth of 5.0 m. Open tank B holds water ($\\rho = 1000\\text{ kg/m}^3$) to a depth of 4.0 m. How do the gauge pressures at the bottoms of the tanks compare?',
    options: [
      'Tank A\'s, as its liquid is deeper',
      'Neither tank\'s is greater',
      'Tank B\'s, as water is denser',
      'Tank A\'s, by a factor of 1.25',
    ],
    correctIndex: 1,
    explanation: 'Tank A: $800(10)(5.0) = 40{,}000$ Pa; tank B: $1000(10)(4.0) = 40{,}000$ Pa. The extra depth of the oil exactly makes up for its lower density.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Density: Definition & Units' },
    { partNumber: 2, partTitle: 'Pressure: Definition & Units' },
    { partNumber: 3, partTitle: 'Hydrostatic Pressure' },
    { partNumber: 4, partTitle: 'Absolute vs Gauge Pressure' },
    { partNumber: 5, partTitle: 'Pascal\'s Principle & Hydraulics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
