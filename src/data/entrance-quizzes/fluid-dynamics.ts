import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Continuity Equation
  {
    id: 'fd-ent-1a',
    question: 'The continuity equation for an incompressible fluid states:',
    options: ['$P_1 + P_2 = \\text{const}$', '$A_1 v_1 = A_2 v_2$', '$\\rho_1 = \\rho_2$', '$v_1 = v_2$'],
    correctIndex: 1,
    explanation: 'For incompressible flow, $A_1 v_1 = A_2 v_2$ (volume flow rate is constant).',
    partNumber: 1,
    partTitle: 'Continuity Equation',
  },
  {
    id: 'fd-ent-1b',
    question: 'Water flows through a pipe that narrows from $0.04$ $m^{2}$ to $0.01$ $m^{2}$. If the speed at the wide end is $2$ m/s, the speed at the narrow end is:',
    options: ['$0.5$ m/s', '$2$ m/s', '$4$ m/s', '$8$ m/s'],
    correctIndex: 3,
    explanation: '$A_1 v_1 = A_2 v_2 \\Rightarrow 0.04(2) = 0.01 v_2 \\Rightarrow v_2 = 8$ m/s.',
    partNumber: 1,
    partTitle: 'Continuity Equation',
  },

  // Part 2: Bernoulli's Equation
  {
    id: 'fd-ent-2a',
    question: "Bernoulli's equation relates:",
    options: ['Force and acceleration', 'Pressure, velocity, and height along a streamline', 'Density and temperature', 'Viscosity and flow rate'],
    correctIndex: 1,
    explanation: "$P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$ along a streamline. It's an energy conservation statement for fluids.",
    partNumber: 2,
    partTitle: "Bernoulli's Equation",
  },
  {
    id: 'fd-ent-2b',
    question: "In Bernoulli's equation, if fluid speed increases at the same height, the pressure:",
    options: ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'],
    correctIndex: 1,
    explanation: 'At constant height: $P + \\frac{1}{2}\\rho v^2 = \\text{const}$. If $v$ increases, $P$ must decrease.',
    partNumber: 2,
    partTitle: "Bernoulli's Equation",
  },

  // Part 3: Venturi Effect
  {
    id: 'fd-ent-3a',
    question: 'In a Venturi tube, the pressure is lowest at:',
    options: ['The widest section', 'The narrowest section', 'The inlet', 'The outlet'],
    correctIndex: 1,
    explanation: "By continuity, speed is greatest at the narrowest section. By Bernoulli's principle, higher speed means lower pressure.",
    partNumber: 3,
    partTitle: 'Venturi Effect',
  },
  {
    id: 'fd-ent-3b',
    question: 'An airplane wing generates lift because:',
    options: [
      'Air moves faster over the top, creating lower pressure above',
      'Air moves slower over the top, creating lower pressure above',
      'The wing pushes air upward',
      'Gravity acts more on air below the wing',
    ],
    correctIndex: 0,
    explanation: 'The wing shape causes air to move faster over the top surface. By Bernoulli, faster air = lower pressure, creating a net upward force (lift).',
    partNumber: 3,
    partTitle: 'Venturi Effect',
  },

  // Part 4: Torricelli's Theorem
  {
    id: 'fd-ent-4a',
    question: "Torricelli's theorem gives the speed of fluid exiting a hole at depth $h$ below the surface as:",
    options: ['$v = gh$', '$v = \\sqrt{2gh}$', '$v = \\rho gh$', '$v = 2gh$'],
    correctIndex: 1,
    explanation: "$v = \\sqrt{2gh}$, derived from Bernoulli's equation. It's the same speed as an object free-falling from height $h$.",
    partNumber: 4,
    partTitle: "Torricelli's Theorem",
  },
  {
    id: 'fd-ent-4b',
    question: 'Water exits a hole $5$ m below the surface of a tank. The exit speed is approximately: ($g = 10$ $m/s^{2}$)',
    options: ['$5$ m/s', '$10$ m/s', '$50$ m/s', '$100$ m/s'],
    correctIndex: 1,
    explanation: '$v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10$ m/s.',
    partNumber: 4,
    partTitle: "Torricelli's Theorem",
  },

  // Part 5: Flow Rate
  {
    id: 'fd-ent-5a',
    question: 'Volume flow rate $Q$ is defined as:',
    options: ['$Q = Av$', '$Q = \\rho A v$', '$Q = P/v$', '$Q = FA$'],
    correctIndex: 0,
    explanation: 'Volume flow rate $Q = Av$, where $A$ is cross-sectional area and $v$ is flow speed. Units: $m^{3}/s$.',
    partNumber: 5,
    partTitle: 'Flow Rate',
  },
  {
    id: 'fd-ent-5b',
    question: 'Water flows at $3$ m/s through a pipe of radius $0.1$ m. The volume flow rate is:',
    options: ['$0.03\\pi$ $m^{3}/s$', '$0.3\\pi$ $m^{3}/s$', '$0.003\\pi$ $m^{3}/s$', '$3\\pi$ $m^{3}/s$'],
    correctIndex: 0,
    explanation: '$Q = Av = \\pi r^2 v = \\pi(0.1)^2(3) = 0.03\\pi$ $m^{3}/s$.',
    partNumber: 5,
    partTitle: 'Flow Rate',
  },

  // Part 6: Viscosity & Real Fluids
  {
    id: 'fd-ent-6a',
    question: 'Viscosity in a fluid is analogous to:',
    options: ['Mass', 'Elasticity', 'Friction', 'Buoyancy'],
    correctIndex: 2,
    explanation: 'Viscosity is internal friction in a fluid. It resists flow and causes energy dissipation.',
    partNumber: 6,
    partTitle: 'Viscosity & Real Fluids',
  },
  {
    id: 'fd-ent-6b',
    question: "Bernoulli's equation applies ideally to fluids that are:",
    options: ['Viscous and compressible', 'Inviscid, incompressible, and in steady flow', 'Turbulent', 'Stationary'],
    correctIndex: 1,
    explanation: "Bernoulli's equation assumes an ideal fluid: inviscid (no friction), incompressible, and in steady (laminar) flow.",
    partNumber: 6,
    partTitle: 'Viscosity & Real Fluids',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'fd-ent-7a',
    question: 'A garden hose nozzle is narrower than the hose. Compared to the hose, water in the nozzle has:',
    options: ['Higher speed and higher pressure', 'Higher speed and lower pressure', 'Lower speed and higher pressure', 'Lower speed and lower pressure'],
    correctIndex: 1,
    explanation: 'Continuity: narrower → faster. Bernoulli: faster → lower pressure. The nozzle has higher speed and lower pressure.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'fd-ent-7b',
    question: 'During a hurricane, roofs can be blown off because:',
    options: [
      'The wind pushes the roof up',
      'Fast-moving air over the roof creates low pressure above, while higher pressure inside lifts the roof',
      'The house is too light',
      'Rain adds weight to the roof',
    ],
    correctIndex: 1,
    explanation: "By Bernoulli's principle, the fast wind over the roof creates low pressure outside. Higher pressure inside the house pushes the roof upward.",
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Continuity Equation' },
    { partNumber: 2, partTitle: "Bernoulli's Equation" },
    { partNumber: 3, partTitle: 'Venturi Effect' },
    { partNumber: 4, partTitle: "Torricelli's Theorem" },
    { partNumber: 5, partTitle: 'Flow Rate' },
    { partNumber: 6, partTitle: 'Viscosity & Real Fluids' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
