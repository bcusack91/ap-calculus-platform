/**
 * Entrance Quiz — Fluids: Density & Pressure (AP Physics 1)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Density: Definition & SI Units
  { id: 'fdp-ent-1a', question: 'A 4.0 kg block has volume $2.0\\times10^{-3}$ m³. Its density is:', options: ['$0.5$ kg/m³', '$2.0\\times10^{3}$ kg/m³', '$2.0\\times10^{-3}$ kg/m³', '$8.0$ kg/m³'], correctIndex: 1, explanation: '$\\rho = m/V = 4.0 / 2.0\\times10^{-3} = 2000$ kg/m³.', partNumber: 1, partTitle: 'Density: Definition & Units' },
  { id: 'fdp-ent-1b', question: 'The SI unit of density is:', options: ['kg', 'kg/m', 'kg/m²', 'kg/m³'], correctIndex: 3, explanation: 'Density = mass per unit volume → kg/m³ in SI.', partNumber: 1, partTitle: 'Density: Definition & Units' },

  // Part 2 — Pressure: Definition & SI Units
  { id: 'fdp-ent-2a', question: 'Pressure is defined as:', options: ['Force times area', 'Force divided by area', 'Mass divided by volume', 'Energy per unit time'], correctIndex: 1, explanation: '$P = F/A$. The pascal (Pa) is N/m².', partNumber: 2, partTitle: 'Pressure: Definition & Units' },
  { id: 'fdp-ent-2b', question: 'A 200 N force pushes on a 0.5 m² surface. The pressure exerted is:', options: ['100 Pa', '200 Pa', '400 Pa', '0.0025 Pa'], correctIndex: 2, explanation: '$P = F/A = 200/0.5 = 400$ Pa.', partNumber: 2, partTitle: 'Pressure: Definition & Units' },

  // Part 3 — Hydrostatic Pressure
  { id: 'fdp-ent-3a', question: 'Gauge pressure 5.0 m below the surface of fresh water ($\\rho = 1000$ kg/m³, $g = 9.8$ m/s²) is approximately:', options: ['$5{,}000$ Pa', '$49{,}000$ Pa', '$98{,}000$ Pa', '$1.0\\times10^{5}$ Pa'], correctIndex: 1, explanation: '$P_{gauge} = \\rho g h = 1000(9.8)(5.0) = 49{,}000$ Pa.', partNumber: 3, partTitle: 'Hydrostatic Pressure' },
  { id: 'fdp-ent-3b', question: 'Hydrostatic pressure in a static fluid depends on:', options: ['Container shape', 'Total volume of fluid', 'Depth and fluid density', 'Surface area at the top'], correctIndex: 2, explanation: '$P = P_0 + \\rho g h$ — only depth and density of the fluid matter, not container shape.', partNumber: 3, partTitle: 'Hydrostatic Pressure' },

  // Part 4 — Absolute vs Gauge Pressure
  { id: 'fdp-ent-4a', question: 'Absolute pressure equals:', options: ['Gauge pressure only', 'Atmospheric pressure only', 'Atmospheric pressure + gauge pressure', 'Atmospheric pressure − gauge pressure'], correctIndex: 2, explanation: '$P_{abs} = P_{atm} + P_{gauge}$.', partNumber: 4, partTitle: 'Absolute vs Gauge Pressure' },
  { id: 'fdp-ent-4b', question: 'A tire gauge reads 220 kPa. If atmospheric pressure is 101 kPa, the absolute pressure inside the tire is:', options: ['119 kPa', '220 kPa', '321 kPa', '441 kPa'], correctIndex: 2, explanation: '$P_{abs} = P_{atm} + P_{gauge} = 101 + 220 = 321$ kPa.', partNumber: 4, partTitle: 'Absolute vs Gauge Pressure' },

  // Part 5 — Pascal's Principle & Hydraulics
  { id: 'fdp-ent-5a', question: "Pascal's principle states that pressure applied to an enclosed fluid is:", options: ['Lost as heat', 'Transmitted equally to every part of the fluid', 'Reduced by depth', 'Absorbed by the container walls'], correctIndex: 1, explanation: 'Pascal: a change in applied pressure is transmitted undiminished throughout an enclosed fluid.', partNumber: 5, partTitle: "Pascal's Principle & Hydraulics" },
  { id: 'fdp-ent-5b', question: 'A hydraulic lift has $A_1 = 0.01$ m² and $A_2 = 0.10$ m². A 150 N force on the small piston produces what force on the large piston?', options: ['15 N', '150 N', '1500 N', '15000 N'], correctIndex: 2, explanation: '$F_2 = F_1 (A_2/A_1) = 150 \\times 10 = 1500$ N.', partNumber: 5, partTitle: "Pascal's Principle & Hydraulics" },

  // Part 6 — Problem-Solving Workshop
  { id: 'fdp-ent-6a', question: 'A column of mercury ($\\rho = 13{,}600$ kg/m³) is 0.76 m tall. The pressure at its base (g = 9.8) is approximately:', options: ['$10{,}300$ Pa', '$76{,}000$ Pa', '$1.01\\times10^{5}$ Pa', '$1.36\\times10^{6}$ Pa'], correctIndex: 2, explanation: '$P = \\rho g h = 13{,}600(9.8)(0.76) \\approx 1.01\\times10^{5}$ Pa — i.e. one atmosphere.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'fdp-ent-6b', question: 'Two open columns of fresh water are connected at the bottom. If one column is 2 m tall and the other is 5 m tall, the pressure at the connecting point:', options: ['Is greater under the 2 m column', 'Is greater under the 5 m column', 'Is equal under both columns', 'Cannot be determined'], correctIndex: 2, explanation: 'Connected static fluids reach the same level. If both are open to atmosphere they cannot stay at different heights — the system equalizes; pressure at the connecting point is equal.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7 — Synthesis & AP Review
  { id: 'fdp-ent-7a', question: 'Which everyday object best illustrates the principle that pressure depends on depth (not container shape)?', options: ['A balloon held under water', 'A dam, which is built thicker at the bottom', 'A hot-air balloon rising', 'A pressure cooker on a stove'], correctIndex: 1, explanation: 'Dam thickness increases with depth because hydrostatic pressure $\\rho g h$ grows linearly with depth, requiring more material to resist the larger force per area.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'fdp-ent-7b', question: 'On the AP exam, you are asked: "Why is atmospheric pressure greater at sea level than at the top of a mountain?" The best answer involves:', options: ['The Sun heating the lower atmosphere more', 'A larger column of air above sea level pressing down', 'Oxygen being denser at sea level', 'Earth\'s rotation pulling air down'], correctIndex: 1, explanation: 'Atmospheric pressure at any altitude equals the weight of the column of air above per unit area. Sea level → tallest column → greatest pressure (~101 kPa).', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Density: Definition & Units' },
    { partNumber: 2, partTitle: 'Pressure: Definition & Units' },
    { partNumber: 3, partTitle: 'Hydrostatic Pressure' },
    { partNumber: 4, partTitle: 'Absolute vs Gauge Pressure' },
    { partNumber: 5, partTitle: "Pascal's Principle & Hydraulics" },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
