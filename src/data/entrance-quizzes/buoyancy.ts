import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Buoyant Force
  {
    id: 'buoy-ent-1a',
    question: "Archimedes' principle states that the buoyant force on a submerged object equals:",
    options: ['The weight of the object', 'The weight of the fluid displaced', 'The volume of the object', 'The density of the fluid'],
    correctIndex: 1,
    explanation: 'Buoyant force $F_b = \\rho_{fluid} V_{displaced} g$ = weight of displaced fluid.',
    partNumber: 1,
    partTitle: 'Buoyant Force',
  },
  {
    id: 'buoy-ent-1b',
    question: 'The buoyant force on an object depends on:',
    options: ['The mass of the object', 'The density of the fluid and the volume displaced', 'The shape of the object only', 'The depth of the object'],
    correctIndex: 1,
    explanation: '$F_b = \\rho_{fluid} V_{displaced} g$. It depends on fluid density and the volume of fluid displaced, not the object\'s mass.',
    partNumber: 1,
    partTitle: 'Buoyant Force',
  },

  // Part 2: Floating vs. Sinking
  {
    id: 'buoy-ent-2a',
    question: 'An object floats when:',
    options: ['Its density is greater than the fluid', 'Its density is less than the fluid', 'It is heavier than the fluid', 'It has a large volume'],
    correctIndex: 1,
    explanation: 'An object floats when $\\rho_{object} < \\rho_{fluid}$. It displaces just enough fluid for the buoyant force to equal its weight.',
    partNumber: 2,
    partTitle: 'Floating vs. Sinking',
  },
  {
    id: 'buoy-ent-2b',
    question: 'A block of wood ($\\rho = 600$ $kg/m^{3}$) floats in water ($\\rho = 1000$ $kg/m^{3}$). What fraction is submerged?',
    options: ['$40\\%$', '$60\\%$', '$100\\%$', '$50\\%$'],
    correctIndex: 1,
    explanation: 'Fraction submerged = $\\rho_{object}/\\rho_{fluid} = 600/1000 = 0.6 = 60\\%$.',
    partNumber: 2,
    partTitle: 'Floating vs. Sinking',
  },

  // Part 3: Apparent Weight
  {
    id: 'buoy-ent-3a',
    question: 'The apparent weight of a submerged object is:',
    options: ['Its actual weight plus buoyant force', 'Its actual weight minus buoyant force', 'Just the buoyant force', 'Zero always'],
    correctIndex: 1,
    explanation: 'Apparent weight = $W - F_b = mg - \\rho_{fluid} V g$.',
    partNumber: 3,
    partTitle: 'Apparent Weight',
  },
  {
    id: 'buoy-ent-3b',
    question: 'A $5$ kg metal block ($V = 0.002$ $m^{3}$) is submerged in water. Its apparent weight is: (use $g = 10$ $m/s^{2}$)',
    options: ['$50$ N', '$30$ N', '$20$ N', '$10$ N'],
    correctIndex: 1,
    explanation: '$W = 50$ N. $F_b = 1000 \\times 0.002 \\times 10 = 20$ N. Apparent weight = $50 - 20 = 30$ N.',
    partNumber: 3,
    partTitle: 'Apparent Weight',
  },

  // Part 4: Buoyancy in Different Fluids
  {
    id: 'buoy-ent-4a',
    question: 'A ball that sinks in fresh water might float in:',
    options: ['A vacuum', 'Air', 'A denser fluid like mercury', 'A less dense fluid like alcohol'],
    correctIndex: 2,
    explanation: 'A denser fluid provides a larger buoyant force for the same displaced volume, potentially enough to float the ball.',
    partNumber: 4,
    partTitle: 'Buoyancy in Different Fluids',
  },
  {
    id: 'buoy-ent-4b',
    question: 'An object floats with $90\\%$ submerged in water. In a liquid with $\\rho = 800$ $kg/m^{3}$, the object will:',
    options: ['Float higher', 'Float at same level', 'Sink completely', 'Float with $90\\%$ submerged'],
    correctIndex: 2,
    explanation: 'The object\'s density = $0.9 \\times 1000 = 900$ $kg/m^{3}$. Since $900 > 800$, the object is denser than the new liquid and sinks.',
    partNumber: 4,
    partTitle: 'Buoyancy in Different Fluids',
  },

  // Part 5: Buoyancy and Pressure Difference
  {
    id: 'buoy-ent-5a',
    question: 'The buoyant force arises from:',
    options: ['Surface tension', 'The pressure difference between top and bottom of the object', 'The weight of the object', 'Viscosity of the fluid'],
    correctIndex: 1,
    explanation: 'Pressure increases with depth, so the bottom of a submerged object experiences greater pressure than the top, creating a net upward force.',
    partNumber: 5,
    partTitle: 'Buoyancy and Pressure Difference',
  },
  {
    id: 'buoy-ent-5b',
    question: 'A cube with side length $s$ is submerged with its top at depth $d$. The net upward force due to pressure difference is:',
    options: ['$\\rho g d s^2$', '$\\rho g s^3$', '$\\rho g (d+s) s^2$', '$\\rho g s^2 (d+s) - \\rho g s^2 d = \\rho g s^3$'],
    correctIndex: 3,
    explanation: 'Bottom pressure force = $\\rho g(d+s)s^2$ (up); top pressure force = $\\rho g d s^2$ (down). Net = $\\rho g s^3 = \\rho V g = F_b$.',
    partNumber: 5,
    partTitle: 'Buoyancy and Pressure Difference',
  },

  // Part 6: Applications of Buoyancy
  {
    id: 'buoy-ent-6a',
    question: 'A submarine adjusts its buoyancy by:',
    options: ['Changing its shape', 'Filling or emptying ballast tanks with water', 'Increasing its speed', 'Heating the surrounding water'],
    correctIndex: 1,
    explanation: 'By taking in water (increasing average density) or expelling it (decreasing average density), a submarine controls whether it sinks, rises, or maintains depth.',
    partNumber: 6,
    partTitle: 'Applications of Buoyancy',
  },
  {
    id: 'buoy-ent-6b',
    question: 'A hot air balloon rises because:',
    options: ['Hot air is lighter than cold air', 'The heated air inside has lower density than surrounding air, so the buoyant force exceeds weight', 'The fire pushes the balloon up', 'The balloon shape generates lift'],
    correctIndex: 1,
    explanation: 'Heating the air inside lowers its density. The buoyant force ($\\rho_{cool} V g$) exceeds the weight of the balloon and heated air combined.',
    partNumber: 6,
    partTitle: 'Applications of Buoyancy',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'buoy-ent-7a',
    question: 'An ice cube floats in a glass of water. When the ice melts, the water level:',
    options: ['Rises', 'Falls', 'Stays the same', 'Depends on the temperature'],
    correctIndex: 2,
    explanation: 'A floating ice cube displaces exactly its weight in water. When it melts, the resulting water fills exactly the volume previously displaced.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'buoy-ent-7b',
    question: 'A solid iron ball sits at the bottom of a boat floating in a pool. If the ball is thrown overboard into the water, the pool water level:',
    options: ['Rises', 'Falls', 'Stays the same', 'Depends on the ball size'],
    correctIndex: 1,
    explanation: 'In the boat, the ball displaces water equal to its weight (large volume since iron is dense). Submerged, it only displaces its own volume. Since $V_{weight} > V_{ball}$, the water level falls.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Buoyant Force' },
    { partNumber: 2, partTitle: 'Floating vs. Sinking' },
    { partNumber: 3, partTitle: 'Apparent Weight' },
    { partNumber: 4, partTitle: 'Buoyancy in Different Fluids' },
    { partNumber: 5, partTitle: 'Buoyancy and Pressure Difference' },
    { partNumber: 6, partTitle: 'Applications of Buoyancy' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
