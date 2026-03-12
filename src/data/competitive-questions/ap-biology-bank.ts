// AP Biology question bank for competitive mode

export interface ApBiologyQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApBiologyQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What is the powerhouse of the cell?',
    options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi apparatus'],
    correctAnswer: 0,
    explanation: 'Mitochondria produce ATP through cellular respiration.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which molecule carries genetic information?',
    options: ['DNA', 'ATP', 'Glucose', 'Amino acids'],
    correctAnswer: 0,
    explanation: 'DNA (deoxyribonucleic acid) stores genetic information in its nucleotide sequence.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the process by which plants convert sunlight into glucose?',
    options: ['Photosynthesis', 'Cellular respiration', 'Fermentation', 'Chemosynthesis'],
    correctAnswer: 0,
    explanation: 'Photosynthesis uses light energy to convert CO₂ and H₂O into glucose and O₂.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which organelle is responsible for protein synthesis?',
    options: ['Ribosome', 'Lysosome', 'Smooth ER', 'Vacuole'],
    correctAnswer: 0,
    explanation: 'Ribosomes translate mRNA into polypeptide chains (proteins).',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What type of bond holds the two strands of DNA together?',
    options: ['Hydrogen bonds', 'Covalent bonds', 'Ionic bonds', 'Peptide bonds'],
    correctAnswer: 0,
    explanation: 'Hydrogen bonds between complementary base pairs (A-T, G-C) hold the two strands together.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which phase of mitosis do chromosomes line up at the cell equator?',
    options: ['Metaphase', 'Anaphase', 'Prophase', 'Telophase'],
    correctAnswer: 0,
    explanation: 'During metaphase, chromosomes align at the metaphase plate (cell equator).',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'What is the basic unit of life?',
    options: ['Cell', 'Atom', 'Molecule', 'Organ'],
    correctAnswer: 0,
    explanation: 'The cell is the smallest structural and functional unit of life.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What is the role of enzymes in biological reactions?',
    options: ['Lower activation energy', 'Provide energy', 'Increase temperature', 'Create new bonds'],
    correctAnswer: 0,
    explanation: 'Enzymes are biological catalysts that lower the activation energy of reactions.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'During which stage of cellular respiration is the most ATP produced?',
    options: ['Oxidative phosphorylation', 'Glycolysis', 'Krebs cycle', 'Pyruvate oxidation'],
    correctAnswer: 0,
    explanation: 'Oxidative phosphorylation (electron transport chain) produces ~34 ATP per glucose molecule.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is the net ATP yield from glycolysis?',
    options: ['2 ATP', '4 ATP', '36 ATP', '38 ATP'],
    correctAnswer: 0,
    explanation: 'Glycolysis produces 4 ATP but uses 2, giving a net yield of 2 ATP.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Which type of selection favors individuals at both extremes of a trait?',
    options: ['Disruptive selection', 'Stabilizing selection', 'Directional selection', 'Sexual selection'],
    correctAnswer: 0,
    explanation: 'Disruptive selection favors both extreme phenotypes over intermediate ones.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'In the lac operon, what molecule acts as the inducer?',
    options: ['Allolactose', 'Lactose', 'Glucose', 'cAMP'],
    correctAnswer: 0,
    explanation: 'Allolactose binds to the repressor, causing it to release from the operator and allowing transcription.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the function of helicase during DNA replication?',
    options: ['Unwinds the double helix', 'Adds nucleotides', 'Creates RNA primers', 'Joins Okazaki fragments'],
    correctAnswer: 0,
    explanation: 'Helicase breaks hydrogen bonds between base pairs, separating the two DNA strands.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Which biogeochemical cycle does NOT have an atmospheric reservoir?',
    options: ['Phosphorus cycle', 'Carbon cycle', 'Nitrogen cycle', 'Water cycle'],
    correctAnswer: 0,
    explanation: 'The phosphorus cycle moves through rocks and water; phosphorus does not enter the atmosphere significantly.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What enzyme is responsible for adding nucleotides during DNA replication?',
    options: ['DNA polymerase III', 'RNA polymerase', 'Ligase', 'Topoisomerase'],
    correctAnswer: 0,
    explanation: 'DNA polymerase III is the primary enzyme that adds nucleotides to the growing DNA strand in the 5\' to 3\' direction.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'In a cross between two heterozygous parents (Aa × Aa), what fraction of offspring are expected to be homozygous recessive?',
    options: ['1/4', '1/2', '3/4', '1/8'],
    correctAnswer: 0,
    explanation: 'A Punnett square shows: AA (1/4), Aa (2/4), aa (1/4). So 1/4 are homozygous recessive.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'Which Hardy-Weinberg equation term represents the frequency of heterozygous individuals?',
    options: ['$2pq$', '$p^2$', '$q^2$', '$p + q$'],
    correctAnswer: 0,
    explanation: 'In the Hardy-Weinberg equation $p^2 + 2pq + q^2 = 1$, the term $2pq$ represents heterozygote frequency.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is the maximum number of ATP produced per glucose molecule in aerobic respiration?',
    options: ['30-32 ATP', '36-38 ATP', '24 ATP', '40 ATP'],
    correctAnswer: 0,
    explanation: 'Modern estimates show 30-32 ATP per glucose (not the older estimate of 36-38) due to transport costs.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'Which describes the relationship between Gibbs free energy change and reaction spontaneity?',
    options: ['Negative ΔG = spontaneous', 'Positive ΔG = spontaneous', 'ΔG = 0 means spontaneous', 'ΔG depends on enzyme presence'],
    correctAnswer: 0,
    explanation: 'A negative ΔG indicates an exergonic, spontaneous reaction that releases free energy.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'During a bottleneck event, what happens to genetic diversity?',
    options: ['It decreases dramatically', 'It increases', 'It stays the same', 'Only dominant alleles remain'],
    correctAnswer: 0,
    explanation: 'Bottleneck events drastically reduce population size, causing loss of genetic variation through genetic drift.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'Which type of RNA interference involves small RNA molecules silencing gene expression?',
    options: ['siRNA and miRNA', 'mRNA and tRNA', 'rRNA and snRNA', 'tmRNA and gRNA'],
    correctAnswer: 0,
    explanation: 'Small interfering RNA (siRNA) and microRNA (miRNA) are key players in RNA interference (RNAi) pathways.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'What is the role of CAM photosynthesis?',
    options: ['Fixes CO₂ at night to reduce water loss', 'Fixes CO₂ in bundle sheath cells', 'Uses only PSI for ATP', 'Produces ethanol instead of glucose'],
    correctAnswer: 0,
    explanation: 'CAM plants open stomata at night to fix CO₂, then use it during the day with stomata closed, minimizing water loss.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'In signal transduction, what is the role of a second messenger like cAMP?',
    options: ['Amplifies the signal inside the cell', 'Binds to the receptor directly', 'Transports hormones in blood', 'Degrades the ligand'],
    correctAnswer: 0,
    explanation: 'Second messengers like cAMP relay and amplify signals from surface receptors to target molecules inside the cell.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'Which mechanism of speciation occurs without geographic isolation?',
    options: ['Sympatric speciation', 'Allopatric speciation', 'Parapatric speciation', 'Peripatric speciation'],
    correctAnswer: 0,
    explanation: 'Sympatric speciation occurs within the same geographic area, often through polyploidy or habitat differentiation.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What is the primary function of the Calvin cycle?',
    options: ['Carbon fixation to produce G3P', 'Splitting water molecules', 'Generating a proton gradient', 'Producing NADPH'],
    correctAnswer: 0,
    explanation: 'The Calvin cycle uses CO₂, ATP, and NADPH to produce glyceraldehyde-3-phosphate (G3P) through carbon fixation.',
    difficulty: 'hard',
  },
]

export function getApBiologyQuestions(count: number = 10): ApBiologyQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
