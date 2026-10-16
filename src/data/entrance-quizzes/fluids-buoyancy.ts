/**
 * Entrance Quiz — Fluids: Buoyancy — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What is Buoyancy?
  {
    id: 'fb-ent-1a',
    question: 'A cube 0.10 m on each side is held fully under water ($\\rho = 1000\\text{ kg/m}^3$) with its top face horizontal and 0.50 m below the surface. Considering only the water\'s pressure (not the atmosphere), what is the net upward force the water exerts on the cube? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '50 N',
      '10 N',
      '60 N',
      '110 N',
    ],
    correctIndex: 1,
    explanation: 'The water pushes down on the top face with $\\rho g h A = 1000(10)(0.50)(0.010) = 50$ N and up on the bottom face with $1000(10)(0.60)(0.010) = 60$ N; the side forces cancel. The net upward force is 10 N, which equals $\\rho g V$.',
    partNumber: 1,
    partTitle: 'What is Buoyancy?',
  },
  {
    id: 'fb-ent-1b',
    question: 'An aluminum block and a lead block of identical volume are both fully submerged in water, with the lead block held deeper. How do the buoyant forces on them compare?',
    options: [
      'Greater on the lead block, which is deeper',
      'Greater on the lead block, which is denser',
      'Equal, as both displace equal liquid',
      'Greater on the aluminum block, which is lighter',
    ],
    correctIndex: 2,
    explanation: 'The buoyant force is $\\rho_{fluid} g V_{disp}$. Both blocks displace the same volume of the same fluid, so the forces are equal; neither the object\'s density nor the depth enters.',
    partNumber: 1,
    partTitle: 'What is Buoyancy?',
  },
  // Part 2 — Archimedes' Principle
  {
    id: 'fb-ent-2a',
    question: 'A wooden block of volume 0.040 m³ floats in fresh water with 0.025 m³ of its volume below the surface. What is the buoyant force on the block? Use $g = 10\\text{ m/s}^2$ and $\\rho_{water} = 1000\\text{ kg/m}^3$.',
    options: [
      '400 N',
      '25 N',
      '150 N',
      '250 N',
    ],
    correctIndex: 3,
    explanation: 'Only the submerged part displaces water: $F_b = \\rho g V_{disp} = 1000(10)(0.025) = 250$ N. Using the whole block\'s volume gives 400 N, and using the part above the water gives 150 N.',
    partNumber: 2,
    partTitle: 'Archimedes\' Principle',
  },
  {
    id: 'fb-ent-2b',
    question: 'A sealed 2.0 L container is held fully submerged in a liquid of density $1200\\text{ kg/m}^3$. What is the buoyant force on it? Use $g = 10\\text{ m/s}^2$.',
    options: [
      '24 N',
      '20 N',
      '2.4 N',
      '24,000 N',
    ],
    correctIndex: 0,
    explanation: '$2.0\\text{ L} = 2.0 \\times 10^{-3}\\text{ m}^3$, so $F_b = 1200(10)(2.0 \\times 10^{-3}) = 24$ N. Using water\'s density gives 20 N, and treating 2.0 L as 2.0 m³ gives 24,000 N.',
    partNumber: 2,
    partTitle: 'Archimedes\' Principle',
  },
  // Part 3 — Floating vs Sinking
  {
    id: 'fb-ent-3a',
    question: 'A block of density $750\\text{ kg/m}^3$ floats in a liquid of density $1250\\text{ kg/m}^3$. What fraction of the block\'s volume is below the liquid\'s surface?',
    options: [
      '40%',
      '60%',
      '75%',
      '25%',
    ],
    correctIndex: 1,
    explanation: 'Floating means $F_b = W$, so $V_{sub}/V = \\rho_{obj}/\\rho_{fluid} = 750/1250 = 0.60$. The value 40% is the fraction above the surface, and 75% assumes the liquid is water.',
    partNumber: 3,
    partTitle: 'Floating vs Sinking',
  },
  {
    id: 'fb-ent-3b',
    question: 'A steel bowl floats on water, but the same steel hammered into a solid lump sinks. What explains the difference?',
    options: [
      'The bowl spreads its weight over more area, so it presses less on the water',
      'Hammering the steel into a lump makes the steel itself denser than before',
      'The bowl\'s average density including the air it encloses is less than water\'s',
      'The bowl\'s wide rim is held up by surface tension, unlike the lump',
    ],
    correctIndex: 2,
    explanation: 'Floating depends on the average density of everything below the waterline. The bowl encloses air, so it can displace its own weight of water before submerging, while the solid lump (density about 7800 kg/m³) cannot.',
    partNumber: 3,
    partTitle: 'Floating vs Sinking',
  },
  // Part 4 — Submerged Object Calculations
  {
    id: 'fb-ent-4a',
    question: 'A 3.0 kg stone with volume $1.2 \\times 10^{-3}\\text{ m}^3$ hangs from a string, fully submerged in water. What is the tension in the string? Use $g = 10\\text{ m/s}^2$ and $\\rho_{water} = 1000\\text{ kg/m}^3$.',
    options: [
      '30 N',
      '12 N',
      '42 N',
      '18 N',
    ],
    correctIndex: 3,
    explanation: 'The weight is 30 N and the buoyant force is $1000(10)(1.2 \\times 10^{-3}) = 12$ N, so $T = W - F_b = 18$ N. Adding the buoyant force to the weight gives 42 N.',
    partNumber: 4,
    partTitle: 'Submerged Object Calculations',
  },
  {
    id: 'fb-ent-4b',
    question: 'A rock rests on the bottom of a pool, fully submerged. More water is added, so the rock ends up deeper, still resting on the bottom. What happens to the normal force the pool bottom exerts on the rock?',
    options: [
      'It is unchanged, as buoyancy is fixed',
      'It decreases, since buoyancy grows with depth',
      'It increases, since more water presses down on it',
      'It drops to zero once the water is deep enough',
    ],
    correctIndex: 0,
    explanation: 'The normal force is $N = W - F_b$. The weight is fixed, and the buoyant force $\\rho g V$ depends on the displaced volume, not the depth, so $N$ does not change.',
    partNumber: 4,
    partTitle: 'Submerged Object Calculations',
  },
  // Part 5 — Floating Object Calculations
  {
    id: 'fb-ent-5a',
    question: 'A barge of mass 14,000 kg with a flat bottom of area 20 m² carries 6000 kg of cargo in fresh water ($\\rho = 1000\\text{ kg/m}^3$). How deep is the bottom of the barge below the waterline?',
    options: [
      '0.70 m',
      '1.0 m',
      '10 m',
      '0.30 m',
    ],
    correctIndex: 1,
    explanation: 'Floating requires $\\rho V_{sub} = m_{total}$, so $V_{sub} = 20{,}000/1000 = 20\\text{ m}^3$ and the depth is $20/20 = 1.0$ m. The value 0.70 m leaves out the cargo, and 10 m uses weight in newtons in place of mass.',
    partNumber: 5,
    partTitle: 'Floating Object Calculations',
  },
  {
    id: 'fb-ent-5b',
    question: 'A cargo ship sails from a freshwater river into the ocean, where the water is denser. Its load does not change. What happens?',
    options: [
      'It rides higher, as the buoyant force increases',
      'It sinks lower, since seawater supports it less',
      'It rides higher, with the same buoyant force as before',
      'It rides at the same level, with more buoyant force',
    ],
    correctIndex: 2,
    explanation: 'A floating ship\'s buoyant force always equals its weight, which has not changed. Denser water supplies that force with less displaced volume, so the ship rises slightly.',
    partNumber: 5,
    partTitle: 'Floating Object Calculations',
  },
  // Part 6 — Problem-Solving Workshop
  {
    id: 'fb-ent-6a',
    question: 'A metal sculpture weighs 54 N in air and 34 N when hanging fully submerged in water. What is the density of the metal? Use $g = 10\\text{ m/s}^2$ and $\\rho_{water} = 1000\\text{ kg/m}^3$.',
    options: [
      '$1700\\text{ kg/m}^3$',
      '$3700\\text{ kg/m}^3$',
      '$1600\\text{ kg/m}^3$',
      '$2700\\text{ kg/m}^3$',
    ],
    correctIndex: 3,
    explanation: 'The buoyant force is $54 - 34 = 20$ N, so $V = 20/(1000 \\cdot 10) = 2.0 \\times 10^{-3}\\text{ m}^3$. The mass is 5.4 kg, so $\\rho = 5.4/(2.0 \\times 10^{-3}) = 2700\\text{ kg/m}^3$ (equivalently $\\rho = (W/F_b)\\rho_{water}$).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'fb-ent-6b',
    question: 'A 2.0 kg rigid ball of volume $5.0 \\times 10^{-3}\\text{ m}^3$ is held at the bottom of a pool and then released. What is its acceleration just after release? Neglect drag, and use $g = 10\\text{ m/s}^2$ and $\\rho_{water} = 1000\\text{ kg/m}^3$.',
    options: [
      '$15\\text{ m/s}^2$ upward',
      '$10\\text{ m/s}^2$ upward',
      '$25\\text{ m/s}^2$ upward',
      '$15\\text{ m/s}^2$ downward',
    ],
    correctIndex: 0,
    explanation: 'The buoyant force is $1000(10)(5.0 \\times 10^{-3}) = 50$ N up and the weight is 20 N down, so the net force is 30 N up and $a = 30/2.0 = 15\\text{ m/s}^2$ upward. Dividing the buoyant force alone by the mass gives 25.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7 — Synthesis & AP Review
  {
    id: 'fb-ent-7a',
    question: 'A log floats in fresh water ($\\rho = 1000\\text{ kg/m}^3$) with 30% of its volume above the surface. If it floats instead in a liquid of density $875\\text{ kg/m}^3$, what percent of its volume is above the surface?',
    options: [
      '30%',
      '20%',
      '80%',
      '39%',
    ],
    correctIndex: 1,
    explanation: 'In water, 70% is submerged, so the log\'s density is $700\\text{ kg/m}^3$. In the new liquid, the submerged fraction is $700/875 = 80\\%$, leaving 20% above. Multiplying 0.70 by 0.875 instead of dividing gives 39%.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fb-ent-7b',
    question: 'A beaker of water sits on a scale that reads 20 N. A 5.0 N block hanging from a string is lowered until it is fully submerged, not touching the beaker, and the water exerts a 2.0 N upward force on it. What does the scale read now?',
    options: [
      '20 N, as the string holds the block',
      '25 N, the block\'s full weight',
      '22 N, by Newton\'s third law',
      '23 N, adding its apparent weight',
    ],
    correctIndex: 2,
    explanation: 'By Newton\'s third law, the block pushes down on the water with the same 2.0 N that the water pushes up on it, so the scale reads 22 N. The string still holds the rest of the block\'s weight, so the full 25 N does not appear.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is Buoyancy?' },
    { partNumber: 2, partTitle: 'Archimedes\' Principle' },
    { partNumber: 3, partTitle: 'Floating vs Sinking' },
    { partNumber: 4, partTitle: 'Submerged Object Calculations' },
    { partNumber: 5, partTitle: 'Floating Object Calculations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
