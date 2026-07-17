/**
 * Entrance Quiz — Fluids: Bernoulli's Equation (AP Physics 1)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Bernoulli's Equation Setup
  { id: 'fbe-ent-1a', question: "Bernoulli's equation along a streamline is:", options: ['$P + \\rho v + \\rho g h = $ const', '$P + \\tfrac12\\rho v^2 + \\rho g h = $ const', '$P + \\rho g h = $ const only', '$\\tfrac12 mv^2 + mgh = $ const'], correctIndex: 1, explanation: "Bernoulli: $P + \\tfrac12\\rho v^2 + \\rho g h$ is constant along a streamline for steady, incompressible, non-viscous flow.", partNumber: 1, partTitle: "Bernoulli's Equation Setup" },
  { id: 'fbe-ent-1b', question: "Each term in Bernoulli's equation has units of:", options: ['Newtons', 'Joules', 'Pascals (energy per unit volume)', 'Watts'], correctIndex: 2, explanation: 'All three terms are energy per unit volume — equivalent to pressure (Pa = $J/m^{3}$).', partNumber: 1, partTitle: "Bernoulli's Equation Setup" },

  // Part 2 — Conservation of Energy in Fluids
  { id: 'fbe-ent-2a', question: "Bernoulli's equation is fundamentally a statement of conservation of:", options: ['Mass', 'Momentum', 'Energy per unit volume', 'Charge'], correctIndex: 2, explanation: 'It is the work-energy theorem applied to a fluid element, expressed per unit volume.', partNumber: 2, partTitle: 'Conservation of Energy in Fluids' },
  { id: 'fbe-ent-2b', question: 'For Bernoulli\'s equation to apply, the fluid must be:', options: ['Compressible and viscous', 'Incompressible, non-viscous, in steady flow', 'Turbulent and viscous', 'At room temperature only'], correctIndex: 1, explanation: 'Bernoulli assumes incompressible, non-viscous fluid in steady (laminar) flow along a streamline.', partNumber: 2, partTitle: 'Conservation of Energy in Fluids' },

  // Part 3 — Pressure-Speed Trade-off
  { id: 'fbe-ent-3a', question: 'In a horizontal pipe, fluid speed increases through a constriction. The pressure in the constriction is:', options: ['Higher than in the wide section', 'Lower than in the wide section', 'Unchanged', 'Zero'], correctIndex: 1, explanation: 'Bernoulli (horizontal): $P + \\tfrac12\\rho v^2 = $ const. Faster $v$ → smaller $P$.', partNumber: 3, partTitle: 'Pressure-Speed Trade-off' },
  { id: 'fbe-ent-3b', question: 'In a horizontal pipe, water moves from $v_1 = 2$ m/s to $v_2 = 6$ m/s. The pressure change $P_2 - P_1$ is ($\\rho = 1000$ $kg/m^{3}$):', options: ['$+16{,}000$ Pa', '$-16{,}000$ Pa', '$0$', '$-32{,}000$ Pa'], correctIndex: 1, explanation: '$P_2 - P_1 = \\tfrac12\\rho(v_1^2 - v_2^2) = \\tfrac12(1000)(4 - 36) = -16{,}000$ Pa.', partNumber: 3, partTitle: 'Pressure-Speed Trade-off' },

  // Part 4 — Torricelli's Theorem
  { id: 'fbe-ent-4a', question: "Torricelli's theorem gives the speed of fluid leaving a small hole at depth $h$ below the open surface as:", options: ['$v = gh$', '$v = \\sqrt{2gh}$', '$v = 2\\sqrt{gh}$', '$v = \\sqrt{gh/2}$'], correctIndex: 1, explanation: "From Bernoulli with $P_1 = P_2 = P_{atm}$ and $v_1 \\approx 0$: $v = \\sqrt{2gh}$.", partNumber: 4, partTitle: "Torricelli's Theorem" },
  { id: 'fbe-ent-4b', question: 'Water leaves a small hole 5.0 m below the open top of a tank ($g = 9.8$ $m/s^{2}$). The exit speed is approximately:', options: ['7.0 m/s', '9.9 m/s', '14.0 m/s', '19.6 m/s'], correctIndex: 1, explanation: '$v = \\sqrt{2gh} = \\sqrt{2(9.8)(5.0)} = \\sqrt{98} \\approx 9.9$ m/s.', partNumber: 4, partTitle: "Torricelli's Theorem" },

  // Part 5 — Real-World Applications (Lift, Venturi)
  { id: 'fbe-ent-5a', question: 'An airplane wing is shaped so air moves faster over the top than the bottom. By Bernoulli\'s equation, the pressure on top is:', options: ['Higher than below — pushing the wing down', 'Lower than below — producing net lift', 'Equal to below — no lift', 'Zero'], correctIndex: 1, explanation: 'Faster air on top → lower pressure on top → net upward pressure difference (lift).', partNumber: 5, partTitle: 'Real-World Applications' },
  { id: 'fbe-ent-5b', question: 'A Venturi meter measures fluid speed by:', options: ['Heating the fluid and measuring expansion', 'Measuring the pressure difference between a wide and narrow section', 'Counting molecules per second', 'Detecting fluid color change'], correctIndex: 1, explanation: 'A Venturi exploits Bernoulli + continuity: pressure drop in the narrow section relates directly to the speed (and thus flow rate).', partNumber: 5, partTitle: 'Real-World Applications' },

  // Part 6 — Combined Continuity + Bernoulli
  { id: 'fbe-ent-6a', question: 'Water at 20 kPa flows at 1.0 m/s in a horizontal pipe of area $A_1$. It enters a section of area $A_2 = A_1/2$. The pressure in the narrow section is ($\\rho = 1000$ $kg/m^{3}$):', options: ['18.5 kPa', '20 kPa', '21.5 kPa', '17 kPa'], correctIndex: 0, explanation: 'Continuity: $v_2 = 1.0(A_1/A_2) = 2.0$ m/s. Bernoulli (horizontal): $P_2 = P_1 + \\tfrac12\\rho(v_1^2 - v_2^2) = 20{,}000 + \\tfrac12(1000)(1 - 4) = 18{,}500$ Pa.', partNumber: 6, partTitle: 'Combined Continuity + Bernoulli' },
  { id: 'fbe-ent-6b', question: 'A pipe rises by 2.0 m and stays the same diameter. The pressure at the higher point compared to the lower point:', options: ['Increases by $\\rho g h$', 'Decreases by $\\rho g h$', 'Is unchanged', 'Doubles'], correctIndex: 1, explanation: 'Same diameter → same speed (continuity). Bernoulli: pressure drops by $\\rho g h = 1000(9.8)(2.0) ≈ 19{,}600$ Pa as you go up.', partNumber: 6, partTitle: 'Combined Continuity + Bernoulli' },

  // Part 7 — Synthesis & AP Review
  { id: 'fbe-ent-7a', question: "Two AP misconceptions: a student says (1) faster fluids always have higher pressure and (2) Bernoulli holds even for very viscous, turbulent flow. Both are:", options: ['True', 'False — fast fluids have lower pressure, and Bernoulli requires non-viscous steady flow', 'Partially true', 'Only true for water'], correctIndex: 1, explanation: 'Fast fluid → low pressure. Bernoulli assumes steady, incompressible, non-viscous flow — not turbulent or viscous flow.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'fbe-ent-7b', question: 'Why does a curtain near a slightly open window get pulled toward the window when wind blows past outside?', options: ['Static electricity', 'Bernoulli: faster outside air has lower pressure than the still indoor air, so net force pushes the curtain outward', 'Magnetism', 'Atmospheric pressure is always lower outside'], correctIndex: 1, explanation: 'Outside air moves faster → lower pressure outside. Higher indoor pressure pushes the curtain toward the window.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Bernoulli's Equation Setup" },
    { partNumber: 2, partTitle: 'Conservation of Energy in Fluids' },
    { partNumber: 3, partTitle: 'Pressure-Speed Trade-off' },
    { partNumber: 4, partTitle: "Torricelli's Theorem" },
    { partNumber: 5, partTitle: 'Real-World Applications' },
    { partNumber: 6, partTitle: 'Combined Continuity + Bernoulli' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
