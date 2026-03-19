import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Temperature Scales
  {
    id: 'th-ent-1a',
    question: 'The SI unit of temperature is:',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
    correctIndex: 2,
    explanation: 'The kelvin (K) is the SI base unit of temperature. $T(K) = T(°C) + 273.15$.',
    partNumber: 1,
    partTitle: 'Temperature Scales',
  },
  {
    id: 'th-ent-1b',
    question: 'Absolute zero corresponds to:',
    options: ['$0°$C', '$-273°$C (0 K)', '$-100°$C', '$0°$F'],
    correctIndex: 1,
    explanation: 'Absolute zero = $0$ K = $-273.15°$C. It is the lowest possible temperature, where molecular motion is minimized.',
    partNumber: 1,
    partTitle: 'Temperature Scales',
  },

  // Part 2: Thermal Equilibrium
  {
    id: 'th-ent-2a',
    question: 'Two objects are in thermal equilibrium when:',
    options: ['They have the same mass', 'They have the same temperature', 'They have the same volume', 'No forces act between them'],
    correctIndex: 1,
    explanation: 'Thermal equilibrium means no net heat flow between objects, which occurs when they are at the same temperature.',
    partNumber: 2,
    partTitle: 'Thermal Equilibrium',
  },
  {
    id: 'th-ent-2b',
    question: 'The zeroth law of thermodynamics states:',
    options: [
      'Energy is conserved',
      'Entropy never decreases',
      'If A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in equilibrium with each other',
      'Heat flows from hot to cold',
    ],
    correctIndex: 2,
    explanation: 'The zeroth law establishes temperature as a well-defined property and the basis for thermometry.',
    partNumber: 2,
    partTitle: 'Thermal Equilibrium',
  },

  // Part 3: Specific Heat & Calorimetry
  {
    id: 'th-ent-3a',
    question: 'The equation for heat transfer using specific heat is:',
    options: ['$Q = mL$', '$Q = mc\\Delta T$', '$Q = PV$', '$Q = kA\\Delta T/L$'],
    correctIndex: 1,
    explanation: '$Q = mc\\Delta T$, where $m$ is mass, $c$ is specific heat, and $\\Delta T$ is the temperature change.',
    partNumber: 3,
    partTitle: 'Specific Heat & Calorimetry',
  },
  {
    id: 'th-ent-3b',
    question: '$200$ g of water ($c = 4.18$ J/g·°C) is heated from $20°$C to $70°$C. The heat required is:',
    options: ['$4180$ J', '$41{,}800$ J', '$83{,}600$ J', '$418$ J'],
    correctIndex: 1,
    explanation: '$Q = mc\\Delta T = 200 \\times 4.18 \\times 50 = 41{,}800$ J.',
    partNumber: 3,
    partTitle: 'Specific Heat & Calorimetry',
  },

  // Part 4: Latent Heat & Phase Changes
  {
    id: 'th-ent-4a',
    question: 'During a phase change, the temperature of a substance:',
    options: ['Increases', 'Decreases', 'Remains constant', 'Oscillates'],
    correctIndex: 2,
    explanation: 'During a phase change (e.g., melting, boiling), energy goes into breaking intermolecular bonds rather than increasing temperature.',
    partNumber: 4,
    partTitle: 'Latent Heat & Phase Changes',
  },
  {
    id: 'th-ent-4b',
    question: 'The heat needed to melt a solid is given by:',
    options: ['$Q = mc\\Delta T$', '$Q = mL_f$', '$Q = mL_v$', '$Q = PV$'],
    correctIndex: 1,
    explanation: '$Q = mL_f$, where $L_f$ is the latent heat of fusion. For vaporization, $Q = mL_v$.',
    partNumber: 4,
    partTitle: 'Latent Heat & Phase Changes',
  },

  // Part 5: Thermal Expansion
  {
    id: 'th-ent-5a',
    question: 'The linear thermal expansion of a solid is given by:',
    options: ['$\\Delta L = \\alpha L_0 \\Delta T$', '$\\Delta L = L_0 / \\alpha$', '$\\Delta L = \\alpha \\Delta T$', '$\\Delta L = \\alpha L_0^2$'],
    correctIndex: 0,
    explanation: '$\\Delta L = \\alpha L_0 \\Delta T$, where $\\alpha$ is the coefficient of linear expansion and $L_0$ is the original length.',
    partNumber: 5,
    partTitle: 'Thermal Expansion',
  },
  {
    id: 'th-ent-5b',
    question: 'A steel beam ($\\alpha = 12 \\times 10^{-6}$ /°C) is $10$ m long at $20°$C. At $50°$C, it expands by:',
    options: ['$3.6$ mm', '$0.36$ mm', '$36$ mm', '$0.036$ mm'],
    correctIndex: 0,
    explanation: '$\\Delta L = \\alpha L_0 \\Delta T = 12 \\times 10^{-6} \\times 10 \\times 30 = 3.6 \\times 10^{-3}$ m = $3.6$ mm.',
    partNumber: 5,
    partTitle: 'Thermal Expansion',
  },

  // Part 6: Heat Transfer Mechanisms
  {
    id: 'th-ent-6a',
    question: 'The three mechanisms of heat transfer are:',
    options: ['Evaporation, condensation, sublimation', 'Conduction, convection, radiation', 'Diffusion, osmosis, filtration', 'Absorption, reflection, transmission'],
    correctIndex: 1,
    explanation: 'Heat transfers by conduction (direct contact), convection (fluid movement), and radiation (electromagnetic waves).',
    partNumber: 6,
    partTitle: 'Heat Transfer Mechanisms',
  },
  {
    id: 'th-ent-6b',
    question: 'Heat transfer that requires no medium and can occur through a vacuum is:',
    options: ['Conduction', 'Convection', 'Radiation', 'All three'],
    correctIndex: 2,
    explanation: 'Radiation transfers energy via electromagnetic waves and doesn\'t require matter. This is how the Sun heats the Earth.',
    partNumber: 6,
    partTitle: 'Heat Transfer Mechanisms',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'th-ent-7a',
    question: 'Equal masses of water and aluminum ($c_{Al}$ < $c_{water}$) receive the same amount of heat. Which has a greater temperature increase?',
    options: ['Water', 'Aluminum', 'Both increase equally', 'Cannot be determined'],
    correctIndex: 1,
    explanation: '$\\Delta T = Q/(mc)$. Since $c_{Al} < c_{water}$, aluminum has a larger temperature increase for the same $Q$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'th-ent-7b',
    question: '$100$ g of water at $80°$C is mixed with $100$ g of water at $20°$C. The equilibrium temperature is:',
    options: ['$40°$C', '$50°$C', '$60°$C', '$80°$C'],
    correctIndex: 1,
    explanation: 'Same mass and specific heat: $T_f = (T_1 + T_2)/2 = (80 + 20)/2 = 50°$C.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Temperature Scales' },
    { partNumber: 2, partTitle: 'Thermal Equilibrium' },
    { partNumber: 3, partTitle: 'Specific Heat & Calorimetry' },
    { partNumber: 4, partTitle: 'Latent Heat & Phase Changes' },
    { partNumber: 5, partTitle: 'Thermal Expansion' },
    { partNumber: 6, partTitle: 'Heat Transfer Mechanisms' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
