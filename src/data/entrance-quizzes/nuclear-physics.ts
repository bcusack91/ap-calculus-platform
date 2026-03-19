import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Nuclear Structure
  {
    id: 'np-ent-1a',
    question: 'The nucleus contains:',
    options: ['Protons and electrons', 'Protons and neutrons', 'Neutrons and electrons', 'Only protons'],
    correctIndex: 1,
    explanation: 'The nucleus contains protons (positive charge) and neutrons (neutral). Together they are called nucleons.',
    partNumber: 1,
    partTitle: 'Nuclear Structure',
  },
  {
    id: 'np-ent-1b',
    question: 'The atomic number $Z$ represents:',
    options: ['The number of neutrons', 'The number of protons', 'The total number of nucleons', 'The atomic mass'],
    correctIndex: 1,
    explanation: '$Z$ = number of protons. It defines the element. The mass number $A = Z + N$ (protons + neutrons).',
    partNumber: 1,
    partTitle: 'Nuclear Structure',
  },

  // Part 2: Radioactive Decay Types
  {
    id: 'np-ent-2a',
    question: 'In alpha decay, the nucleus emits:',
    options: ['An electron', 'A photon', 'A helium-4 nucleus ($^4_2$He)', 'A neutron'],
    correctIndex: 2,
    explanation: 'Alpha particle = $^4_2$He (2 protons, 2 neutrons). $Z$ decreases by 2, $A$ decreases by 4.',
    partNumber: 2,
    partTitle: 'Radioactive Decay',
  },
  {
    id: 'np-ent-2b',
    question: 'In beta-minus decay:',
    options: ['A proton becomes a neutron', 'A neutron becomes a proton, emitting an electron and an antineutrino', 'The nucleus splits in half', 'A photon is emitted'],
    correctIndex: 1,
    explanation: '$n \\to p + e^- + \\bar{\\nu}_e$. $Z$ increases by 1, $A$ stays the same.',
    partNumber: 2,
    partTitle: 'Radioactive Decay',
  },

  // Part 3: Half-Life
  {
    id: 'np-ent-3a',
    question: 'The half-life of a radioactive isotope is:',
    options: ['The time for all atoms to decay', 'The time for half the atoms to decay', 'Half the total lifetime', 'The time to reach equilibrium'],
    correctIndex: 1,
    explanation: 'Half-life ($t_{1/2}$): the time for half of the radioactive nuclei to decay. After $n$ half-lives, $N = N_0/2^n$.',
    partNumber: 3,
    partTitle: 'Half-Life',
  },
  {
    id: 'np-ent-3b',
    question: 'A sample starts with $800$ atoms. After $3$ half-lives, how many remain?',
    options: ['$400$', '$200$', '$100$', '$50$'],
    correctIndex: 2,
    explanation: '$N = 800/2^3 = 800/8 = 100$ atoms remaining.',
    partNumber: 3,
    partTitle: 'Half-Life',
  },

  // Part 4: Nuclear Binding Energy
  {
    id: 'np-ent-4a',
    question: 'Mass defect is:',
    options: ['A manufacturing error', 'The difference between the mass of separated nucleons and the actual nuclear mass', 'The mass of electrons', 'The mass of the nucleus'],
    correctIndex: 1,
    explanation: 'Mass defect $\\Delta m = (Zm_p + Nm_n) - m_{nucleus}$. This missing mass is converted to binding energy via $E = \\Delta mc^2$.',
    partNumber: 4,
    partTitle: 'Nuclear Binding Energy',
  },
  {
    id: 'np-ent-4b',
    question: 'The binding energy per nucleon is greatest for nuclei near:',
    options: ['Hydrogen', 'Iron-56', 'Uranium-238', 'Helium-4'],
    correctIndex: 1,
    explanation: 'Iron-56 has the highest binding energy per nucleon (~8.8 MeV). This is why fission of heavy nuclei and fusion of light nuclei both release energy.',
    partNumber: 4,
    partTitle: 'Nuclear Binding Energy',
  },

  // Part 5: Fission
  {
    id: 'np-ent-5a',
    question: 'Nuclear fission is:',
    options: ['Combining light nuclei', 'Splitting a heavy nucleus into smaller nuclei', 'Emitting alpha particles', 'Electron capture'],
    correctIndex: 1,
    explanation: 'Fission splits a heavy nucleus (like U-235) into lighter fragments, releasing energy and neutrons.',
    partNumber: 5,
    partTitle: 'Fission',
  },
  {
    id: 'np-ent-5b',
    question: 'A chain reaction in fission occurs because:',
    options: ['Heat melts the fuel', 'Emitted neutrons cause further fission events', 'Electrons are ejected', 'Gravity compresses the fuel'],
    correctIndex: 1,
    explanation: 'Each fission event releases 2-3 neutrons that can trigger more fissions, creating a self-sustaining chain reaction.',
    partNumber: 5,
    partTitle: 'Fission',
  },

  // Part 6: Fusion
  {
    id: 'np-ent-6a',
    question: 'Nuclear fusion is:',
    options: ['Splitting heavy nuclei', 'Combining light nuclei to form heavier nuclei', 'Radioactive decay', 'Chemical bonding'],
    correctIndex: 1,
    explanation: 'Fusion combines light nuclei (e.g., hydrogen isotopes) into heavier ones, releasing enormous energy. It powers the Sun.',
    partNumber: 6,
    partTitle: 'Fusion',
  },
  {
    id: 'np-ent-6b',
    question: 'Fusion requires extremely high temperatures because:',
    options: ['To melt the fuel', 'To overcome the electrostatic repulsion between nuclei', 'To slow down neutrons', 'To ionize electrons'],
    correctIndex: 1,
    explanation: 'Nuclei are positively charged and repel each other (Coulomb barrier). Extremely high temperatures give nuclei enough kinetic energy to overcome this repulsion.',
    partNumber: 6,
    partTitle: 'Fusion',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'np-ent-7a',
    question: 'Which conserved quantities must balance in a nuclear equation?',
    options: ['Only mass', 'Only charge', 'Mass number ($A$) and atomic number ($Z$)', 'Only energy'],
    correctIndex: 2,
    explanation: 'In nuclear reactions, both $A$ (total nucleons) and $Z$ (total charge/protons) must be conserved.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'np-ent-7b',
    question: 'In the decay $^{238}_{92}$U → $^{234}_{90}$Th + X, particle X is:',
    options: ['A beta particle', 'A gamma ray', 'An alpha particle ($^4_2$He)', 'A neutron'],
    correctIndex: 2,
    explanation: '$A$: $238 = 234 + 4$. $Z$: $92 = 90 + 2$. X has $A=4, Z=2$ → alpha particle ($^4_2$He).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Nuclear Structure' },
    { partNumber: 2, partTitle: 'Radioactive Decay' },
    { partNumber: 3, partTitle: 'Half-Life' },
    { partNumber: 4, partTitle: 'Nuclear Binding Energy' },
    { partNumber: 5, partTitle: 'Fission' },
    { partNumber: 6, partTitle: 'Fusion' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
