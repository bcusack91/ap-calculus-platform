/**
 * Entrance Quiz — Fluids: Buoyancy (AP Physics 1)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — What is Buoyancy?
  { id: 'fbu-ent-1a', question: 'Buoyant force on an object submerged in a fluid arises from:', options: ['The object\'s own weight', 'The pressure difference between the bottom and top of the object', 'Friction with the fluid', 'Surface tension only'], correctIndex: 1, explanation: 'Greater pressure at the bottom (deeper) than the top creates a net upward force — the buoyant force.', partNumber: 1, partTitle: 'What is Buoyancy?' },
  { id: 'fbu-ent-1b', question: 'Buoyant force always points:', options: ['In the direction of motion', 'Downward (with gravity)', 'Upward (opposite gravity)', 'Horizontally outward'], correctIndex: 2, explanation: 'Buoyant force is upward — opposite gravity — because deeper fluid layers are at higher pressure.', partNumber: 1, partTitle: 'What is Buoyancy?' },

  // Part 2 — Archimedes' Principle
  { id: 'fbu-ent-2a', question: "Archimedes' Principle states that the buoyant force on an object equals:", options: ['The weight of the object', 'The weight of the fluid displaced by the object', 'The volume of the fluid displaced', 'The pressure at the bottom of the object'], correctIndex: 1, explanation: '$F_b = \\rho_{fluid} V_{disp} g$ — the weight of the displaced fluid.', partNumber: 2, partTitle: "Archimedes' Principle" },
  { id: 'fbu-ent-2b', question: 'In $F_b = \\rho g V$, the density $\\rho$ refers to the:', options: ['Density of the object', 'Density of the fluid', 'Average of object and fluid', 'Density of air above the fluid'], correctIndex: 1, explanation: 'Buoyancy uses the **fluid\'s** density — the displaced fluid is what creates the upward force.', partNumber: 2, partTitle: "Archimedes' Principle" },

  // Part 3 — Floating vs Sinking
  { id: 'fbu-ent-3a', question: 'An object floats in a fluid if its density is:', options: ['Greater than the fluid\'s density', 'Less than the fluid\'s density', 'Equal to the fluid\'s density only', 'Equal to the density of air'], correctIndex: 1, explanation: 'When $\\rho_{obj} < \\rho_{fluid}$, the object can displace enough fluid (less than its own volume) to support its weight → it floats.', partNumber: 3, partTitle: 'Floating vs Sinking' },
  { id: 'fbu-ent-3b', question: 'Which object would sink in fresh water ($\\rho = 1000$ kg/m³)?', options: ['Cork ($\\rho = 240$)', 'Ice ($\\rho = 917$)', 'Olive oil ($\\rho = 920$)', 'Aluminum ($\\rho = 2700$)'], correctIndex: 3, explanation: 'Only aluminum is denser than water, so only it sinks.', partNumber: 3, partTitle: 'Floating vs Sinking' },

  // Part 4 — Submerged Object Calculations
  { id: 'fbu-ent-4a', question: 'A block fully submerged in water displaces $5.0\\times10^{-4}$ m³. The buoyant force on it is ($g = 9.8$):', options: ['0.49 N', '4.9 N', '49 N', '490 N'], correctIndex: 1, explanation: '$F_b = \\rho g V = 1000(9.8)(5.0\\times10^{-4}) = 4.9$ N.', partNumber: 4, partTitle: 'Submerged Object Calculations' },
  { id: 'fbu-ent-4b', question: 'A 2.0 kg metal block (volume $2.5\\times10^{-4}$ m³) is fully submerged in water and held by a string. The tension in the string is ($g = 9.8$):', options: ['17.1 N', '19.6 N', '22.1 N', '2.45 N'], correctIndex: 0, explanation: '$W = 2.0(9.8) = 19.6$ N. $F_b = 1000(9.8)(2.5\\times10^{-4}) = 2.45$ N. $T = W − F_b = 17.15$ N.', partNumber: 4, partTitle: 'Submerged Object Calculations' },

  // Part 5 — Floating Object Calculations
  { id: 'fbu-ent-5a', question: 'A wood block ($\\rho = 600$ kg/m³) floats in fresh water. The fraction of its volume submerged is:', options: ['40%', '50%', '60%', '100%'], correctIndex: 2, explanation: '$V_{sub}/V = \\rho_{obj}/\\rho_{fluid} = 600/1000 = 0.60 = 60\\%$.', partNumber: 5, partTitle: 'Floating Object Calculations' },
  { id: 'fbu-ent-5b', question: 'Salt water is denser than fresh water. A boat floats in salt water vs fresh water — in salt water it sits:', options: ['Higher (less submerged)', 'Lower (more submerged)', 'At the same depth', 'On its side'], correctIndex: 0, explanation: 'For a given weight, denser fluid → less volume needs to be displaced → boat sits higher.', partNumber: 5, partTitle: 'Floating Object Calculations' },

  // Part 6 — Problem-Solving Workshop
  { id: 'fbu-ent-6a', question: 'A 0.30 kg object has volume $4.0\\times10^{-4}$ m³. When released in fresh water, it will:', options: ['Float at the surface', 'Sink to the bottom', 'Remain stationary at any depth', 'Rise then sink alternately'], correctIndex: 0, explanation: '$\\rho_{obj} = 0.30 / 4.0\\times10^{-4} = 750$ kg/m³, less than water (1000), so it floats.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'fbu-ent-6b', question: 'A 1.0 kg object weighs 7.0 N when fully submerged in water (apparent weight). Its volume is approximately ($g = 9.8$):', options: ['$1.0\\times10^{-4}$ m³', '$2.86\\times10^{-4}$ m³', '$1.0\\times10^{-3}$ m³', '$7.14\\times10^{-3}$ m³'], correctIndex: 1, explanation: 'True weight = 9.8 N. Buoyant force = 9.8 − 7.0 = 2.8 N. $V = F_b/(\\rho g) = 2.8 / (1000)(9.8) ≈ 2.86\\times10^{-4}$ m³.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7 — Synthesis & AP Review
  { id: 'fbu-ent-7a', question: 'A boat carries a heavy iron anchor. The anchor is dropped into the lake. The water level in the lake will:', options: ['Rise', 'Fall', 'Stay the same', 'Depends on the boat\'s shape'], correctIndex: 1, explanation: 'In the boat, the anchor displaces water equal to its **weight**. Submerged on the bottom, it displaces water equal only to its **volume**. Iron is dense, so volume < weight in water → less displacement → water level falls.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'fbu-ent-7b', question: 'Why does a hot-air balloon rise?', options: ['Hot air has zero weight', 'The buoyant force from the surrounding cooler/denser air exceeds the balloon\'s weight', 'Air molecules push it up by collision only', 'Gravity weakens at altitude'], correctIndex: 1, explanation: 'Hot air inside is less dense than the cooler outside air. Archimedes: buoyant force = weight of displaced cool air > weight of balloon → net upward force.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What is Buoyancy?' },
    { partNumber: 2, partTitle: "Archimedes' Principle" },
    { partNumber: 3, partTitle: 'Floating vs Sinking' },
    { partNumber: 4, partTitle: 'Submerged Object Calculations' },
    { partNumber: 5, partTitle: 'Floating Object Calculations' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
