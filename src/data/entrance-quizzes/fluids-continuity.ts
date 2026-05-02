/**
 * Entrance Quiz — Fluids: Continuity (AP Physics 1)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Volume Flow Rate Q = Av
  { id: 'fco-ent-1a', question: 'The volume flow rate of a fluid in a pipe is given by:', options: ['$Q = \\rho A v$', '$Q = A v$', '$Q = A / v$', '$Q = v / A$'], correctIndex: 1, explanation: 'Volume flow rate $Q$ = cross-sectional area × flow speed.', partNumber: 1, partTitle: 'Volume Flow Rate' },
  { id: 'fco-ent-1b', question: 'The SI units of volume flow rate $Q$ are:', options: ['m/s', 'm²/s', 'm³/s', 'kg/s'], correctIndex: 2, explanation: '$Q = Av$ → m² · m/s = m³/s.', partNumber: 1, partTitle: 'Volume Flow Rate' },

  // Part 2 — Continuity for Incompressible Flow
  { id: 'fco-ent-2a', question: 'For an incompressible fluid in steady flow through a pipe, the continuity equation is:', options: ['$P_1 + \\rho g h_1 = P_2 + \\rho g h_2$', '$A_1 v_1 = A_2 v_2$', '$v_1^2 = v_2^2 + 2gh$', '$F_1 = F_2$'], correctIndex: 1, explanation: 'Conservation of volume per second: $A_1 v_1 = A_2 v_2$.', partNumber: 2, partTitle: 'Continuity for Incompressible Flow' },
  { id: 'fco-ent-2b', question: 'Continuity for an incompressible fluid is fundamentally a statement of conservation of:', options: ['Energy', 'Momentum', 'Mass / volume', 'Pressure'], correctIndex: 2, explanation: 'For an incompressible fluid (constant ρ), conservation of mass reduces to conservation of volume per unit time → $Q$ is constant.', partNumber: 2, partTitle: 'Continuity for Incompressible Flow' },

  // Part 3 — Pipe Narrowing & Speed
  { id: 'fco-ent-3a', question: 'Water flows at 2.0 m/s through a pipe of cross-section 4.0 cm². It enters a section of cross-section 1.0 cm². The new speed is:', options: ['0.5 m/s', '2.0 m/s', '4.0 m/s', '8.0 m/s'], correctIndex: 3, explanation: '$v_2 = v_1 (A_1/A_2) = 2.0(4.0/1.0) = 8.0$ m/s.', partNumber: 3, partTitle: 'Pipe Narrowing & Speed' },
  { id: 'fco-ent-3b', question: 'A pipe\'s radius is halved (and density of fluid is constant). The fluid speed in that section changes by a factor of:', options: ['×½', '×2', '×4', '×¼'], correctIndex: 2, explanation: '$A \\propto r^2$, so halving $r$ → $A/4$ → speed × 4.', partNumber: 3, partTitle: 'Pipe Narrowing & Speed' },

  // Part 4 — Branching & Merging Pipes
  { id: 'fco-ent-4a', question: 'Two pipes carrying $Q_1 = 4$ L/s and $Q_2 = 6$ L/s merge into a single pipe. The flow rate in the combined pipe is:', options: ['2 L/s', '6 L/s', '10 L/s', '24 L/s'], correctIndex: 2, explanation: 'Conservation of volume: $Q_{out} = Q_1 + Q_2 = 4 + 6 = 10$ L/s.', partNumber: 4, partTitle: 'Branching & Merging Pipes' },
  { id: 'fco-ent-4b', question: 'A 12 L/s pipe splits into three identical branches. The flow rate in each branch is:', options: ['12 L/s', '6 L/s', '4 L/s', '3 L/s'], correctIndex: 2, explanation: 'By symmetry and conservation, each branch carries $12/3 = 4$ L/s.', partNumber: 4, partTitle: 'Branching & Merging Pipes' },

  // Part 5 — Mass Flow Rate
  { id: 'fco-ent-5a', question: 'For an incompressible fluid, mass flow rate $\\dot m$ is:', options: ['$\\rho A v$', '$A v$', '$A v / \\rho$', '$\\rho / (A v)$'], correctIndex: 0, explanation: 'Mass per second past a section = density × volume flow rate = $\\rho A v$.', partNumber: 5, partTitle: 'Mass Flow Rate' },
  { id: 'fco-ent-5b', question: 'Water ($\\rho = 1000$ kg/m³) flows through a pipe of cross-section $5.0\\times10^{-3}$ m² at 2.0 m/s. The mass flow rate is:', options: ['10 kg/s', '5.0 kg/s', '2.0 kg/s', '0.5 kg/s'], correctIndex: 0, explanation: '$\\dot m = \\rho A v = 1000(5.0\\times10^{-3})(2.0) = 10$ kg/s.', partNumber: 5, partTitle: 'Mass Flow Rate' },

  // Part 6 — Problem-Solving Workshop
  { id: 'fco-ent-6a', question: 'A garden hose of inner diameter 2.0 cm has water flowing at 1.5 m/s. A nozzle reduces the diameter to 0.5 cm. The exit speed is approximately:', options: ['1.5 m/s', '6 m/s', '24 m/s', '96 m/s'], correctIndex: 2, explanation: '$A \\propto d^2$. Diameter ratio 0.5/2.0 = 1/4 → area ratio 1/16 → speed ×16. $v_2 = 1.5 \\times 16 = 24$ m/s.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'fco-ent-6b', question: 'A 250 mL/s shower head must be supplied by a pipe with what minimum cross-sectional area if the water in the pipe must not exceed 1.0 m/s?', options: ['$2.5\\times10^{-2}$ m²', '$2.5\\times10^{-4}$ m²', '$1.0$ m²', '$2.5\\times10^{-3}$ m²'], correctIndex: 1, explanation: '$Q = 250\\text{ mL/s} = 2.5\\times10^{-4}$ m³/s. $A = Q/v = 2.5\\times10^{-4}/1.0 = 2.5\\times10^{-4}$ m².', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7 — Synthesis & AP Review
  { id: 'fco-ent-7a', question: "Why does a river speed up where it flows through a narrow gorge?", options: ['Gravity is stronger in narrow gorges', 'Continuity: same volume flow rate forced through smaller cross-section means higher speed', 'Friction with rock walls accelerates the water', 'Atmospheric pressure pushes harder in narrow channels'], correctIndex: 1, explanation: '$Q = Av$ is conserved (incompressible flow). Smaller $A$ → larger $v$.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'fco-ent-7b', question: 'A common AP misconception is that a pipe\'s flow rate $Q$ depends on the pipe\'s cross-sectional area. The correct statement is:', options: ['$Q$ depends only on cross-sectional area', '$Q$ is constant along a continuous pipe (steady, incompressible flow)', '$Q$ doubles whenever area doubles', '$Q$ is proportional to fluid density'], correctIndex: 1, explanation: 'For steady, incompressible flow, $Q$ is fixed throughout the pipe. Area and velocity adjust inversely so that their product stays constant.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
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
