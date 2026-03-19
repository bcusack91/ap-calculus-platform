import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Faraday's Law
  {
    id: 'emi-ent-1a',
    question: "Faraday's law states that the induced EMF in a loop is proportional to:",
    options: ['The magnetic field', 'The rate of change of magnetic flux', 'The area of the loop', 'The current in the loop'],
    correctIndex: 1,
    explanation: '$\\varepsilon = -d\\Phi_B/dt$. The induced EMF equals the negative rate of change of magnetic flux through the loop.',
    partNumber: 1,
    partTitle: "Faraday's Law",
  },
  {
    id: 'emi-ent-1b',
    question: 'Magnetic flux through a loop is defined as:',
    options: ['$\\Phi = B/A$', '$\\Phi = BA\\cos\\theta$', '$\\Phi = BA\\sin\\theta$', '$\\Phi = B + A$'],
    correctIndex: 1,
    explanation: '$\\Phi_B = BA\\cos\\theta$, where $\\theta$ is the angle between $\\vec{B}$ and the area vector (normal to the loop).',
    partNumber: 1,
    partTitle: "Faraday's Law",
  },

  // Part 2: Lenz's Law
  {
    id: 'emi-ent-2a',
    question: "Lenz's law states that the induced current flows in a direction that:",
    options: ['Aids the change in flux', 'Opposes the change in flux', 'Is parallel to the magnetic field', 'Maximizes the flux'],
    correctIndex: 1,
    explanation: "Lenz's law: the induced current creates a magnetic field opposing the change that produced it. This ensures energy conservation.",
    partNumber: 2,
    partTitle: "Lenz's Law",
  },
  {
    id: 'emi-ent-2b',
    question: 'A magnet is pushed into a coil (north pole first). The induced current creates a magnetic field that:',
    options: ['Attracts the magnet', 'Repels the magnet (opposes its motion)', 'Has no effect', 'Reverses the magnet polarity'],
    correctIndex: 1,
    explanation: "By Lenz's law, the induced current opposes the increasing flux, creating a field that repels the approaching magnet.",
    partNumber: 2,
    partTitle: "Lenz's Law",
  },

  // Part 3: Motional EMF
  {
    id: 'emi-ent-3a',
    question: 'A conducting rod of length $L$ moves with velocity $v$ perpendicular to a magnetic field $B$. The induced EMF is:',
    options: ['$\\varepsilon = BLv$', '$\\varepsilon = BL/v$', '$\\varepsilon = Bv/L$', '$\\varepsilon = B^2Lv$'],
    correctIndex: 0,
    explanation: '$\\varepsilon = BLv$. This motional EMF arises from the magnetic force on charges in the moving conductor.',
    partNumber: 3,
    partTitle: 'Motional EMF',
  },
  {
    id: 'emi-ent-3b',
    question: 'A $0.5$ m rod moves at $4$ m/s through a $0.3$ T field. The induced EMF is:',
    options: ['$0.15$ V', '$0.6$ V', '$6$ V', '$0.06$ V'],
    correctIndex: 1,
    explanation: '$\\varepsilon = BLv = 0.3 \\times 0.5 \\times 4 = 0.6$ V.',
    partNumber: 3,
    partTitle: 'Motional EMF',
  },

  // Part 4: Generators & AC
  {
    id: 'emi-ent-4a',
    question: 'An AC generator works by:',
    options: ['Chemical reactions', 'Rotating a coil in a magnetic field', 'Static electricity', 'Capacitor discharge'],
    correctIndex: 1,
    explanation: 'A generator rotates a coil in a magnetic field. The changing flux induces a sinusoidal EMF: $\\varepsilon = NBA\\omega\\sin(\\omega t)$.',
    partNumber: 4,
    partTitle: 'Generators & AC',
  },
  {
    id: 'emi-ent-4b',
    question: 'The peak EMF of a generator with $N$ turns, area $A$, field $B$, and angular velocity $\\omega$ is:',
    options: ['$\\varepsilon_0 = NBA\\omega$', '$\\varepsilon_0 = NBA$', '$\\varepsilon_0 = NB\\omega$', '$\\varepsilon_0 = BA/\\omega$'],
    correctIndex: 0,
    explanation: '$\\varepsilon_0 = NBA\\omega$. The EMF varies sinusoidally: $\\varepsilon(t) = \\varepsilon_0 \\sin(\\omega t)$.',
    partNumber: 4,
    partTitle: 'Generators & AC',
  },

  // Part 5: Inductance
  {
    id: 'emi-ent-5a',
    question: 'Self-inductance opposes:',
    options: ['Steady current', 'Changes in current', 'Magnetic flux', 'Resistance'],
    correctIndex: 1,
    explanation: 'An inductor produces an EMF opposing changes in current: $\\varepsilon = -L(dI/dt)$. It resists current changes, not steady current.',
    partNumber: 5,
    partTitle: 'Inductance',
  },
  {
    id: 'emi-ent-5b',
    question: 'The energy stored in an inductor carrying current $I$ is:',
    options: ['$U = LI$', '$U = \\frac{1}{2}LI^2$', '$U = LI^2$', '$U = L/I$'],
    correctIndex: 1,
    explanation: '$U = \\frac{1}{2}LI^2$, analogous to $\\frac{1}{2}CV^2$ for a capacitor.',
    partNumber: 5,
    partTitle: 'Inductance',
  },

  // Part 6: Transformers
  {
    id: 'emi-ent-6a',
    question: 'A transformer works on the principle of:',
    options: ['Static electricity', 'Electromagnetic induction', 'Coulomb\'s law', 'Ohm\'s law'],
    correctIndex: 1,
    explanation: 'A transformer uses changing magnetic flux (from AC in the primary coil) to induce EMF in the secondary coil.',
    partNumber: 6,
    partTitle: 'Transformers',
  },
  {
    id: 'emi-ent-6b',
    question: 'A transformer has $100$ turns on the primary and $500$ on the secondary. If the primary voltage is $120$ V, the secondary voltage is:',
    options: ['$24$ V', '$120$ V', '$600$ V', '$60{,}000$ V'],
    correctIndex: 2,
    explanation: '$V_s/V_p = N_s/N_p \\Rightarrow V_s = 120 \\times 500/100 = 600$ V (step-up transformer).',
    partNumber: 6,
    partTitle: 'Transformers',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'emi-ent-7a',
    question: 'A circular loop is in a region where $B$ is increasing uniformly. The induced EMF is:',
    options: ['Zero', 'Constant', 'Increasing', 'Depends on both rate of change and area'],
    correctIndex: 3,
    explanation: '$\\varepsilon = -d\\Phi/dt = -A(dB/dt)$. The EMF depends on the loop area and the rate of change of $B$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'emi-ent-7b',
    question: 'Eddy currents in a conductor moving through a magnetic field:',
    options: ['Increase the speed of the conductor', 'Have no effect', 'Oppose the motion (electromagnetic braking)', 'Create static charges'],
    correctIndex: 2,
    explanation: "By Lenz's law, eddy currents oppose the change causing them. The resulting force opposes the conductor's motion, acting as an electromagnetic brake.",
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Faraday's Law" },
    { partNumber: 2, partTitle: "Lenz's Law" },
    { partNumber: 3, partTitle: 'Motional EMF' },
    { partNumber: 4, partTitle: 'Generators & AC' },
    { partNumber: 5, partTitle: 'Inductance' },
    { partNumber: 6, partTitle: 'Transformers' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
