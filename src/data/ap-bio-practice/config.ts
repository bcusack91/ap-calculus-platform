import type { PracticeExamConfig, PracticeQuestion } from '@/components/PracticeExam'

const POOL: PracticeQuestion[] = [
  { question: 'Which organelle is the site of aerobic respiration?', options: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Golgi apparatus'], correctAnswer: 2, explanation: 'Mitochondria are the site of aerobic cellular respiration, producing most of the cell\'s ATP.', topic: 'cell-biology' },
  { question: 'During which phase of mitosis do chromosomes align at the cell\'s equator?', options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], correctAnswer: 1, explanation: 'During metaphase, chromosomes line up along the metaphase plate (cell equator).', topic: 'cell-division' },
  { question: 'What is the primary function of mRNA?', options: ['Carries amino acids', 'Catalyzes reactions', 'Carries genetic code from DNA to ribosomes', 'Stores genetic information'], correctAnswer: 2, explanation: 'Messenger RNA (mRNA) carries the genetic code from DNA in the nucleus to ribosomes for protein synthesis.', topic: 'molecular-biology' },
  { question: 'In the Hardy-Weinberg equation p² + 2pq + q² = 1, what does 2pq represent?', options: ['Homozygous dominant frequency', 'Homozygous recessive frequency', 'Heterozygous frequency', 'Allele frequency'], correctAnswer: 2, explanation: '2pq represents the frequency of heterozygous individuals in the population.', topic: 'evolution' },
  { question: 'Which process converts glucose to pyruvate?', options: ['Krebs cycle', 'Glycolysis', 'Electron transport chain', 'Fermentation'], correctAnswer: 1, explanation: 'Glycolysis is the metabolic pathway that converts glucose into two molecules of pyruvate.', topic: 'cellular-respiration' },
  { question: 'What type of bond holds the two strands of DNA together?', options: ['Covalent bonds', 'Ionic bonds', 'Hydrogen bonds', 'Peptide bonds'], correctAnswer: 2, explanation: 'Hydrogen bonds between complementary base pairs (A-T, G-C) hold the two DNA strands together.', topic: 'molecular-biology' },
  { question: 'Which kingdom includes organisms that are prokaryotic and lack a nucleus?', options: ['Protista', 'Fungi', 'Plantae', 'Bacteria'], correctAnswer: 3, explanation: 'Bacteria (and Archaea) are prokaryotic organisms that lack a membrane-bound nucleus.', topic: 'classification' },
  { question: 'What is the net ATP yield from one molecule of glucose in aerobic respiration?', options: ['2 ATP', '4 ATP', '36-38 ATP', '100 ATP'], correctAnswer: 2, explanation: 'Aerobic respiration yields approximately 36-38 ATP per glucose molecule through glycolysis, the Krebs cycle, and oxidative phosphorylation.', topic: 'cellular-respiration' },
  { question: 'Which enzyme unwinds the DNA double helix during replication?', options: ['DNA polymerase', 'Helicase', 'Ligase', 'Primase'], correctAnswer: 1, explanation: 'Helicase unwinds and separates the two DNA strands by breaking hydrogen bonds between base pairs.', topic: 'molecular-biology' },
  { question: 'In a food web, what trophic level do primary consumers occupy?', options: ['First', 'Second', 'Third', 'Fourth'], correctAnswer: 1, explanation: 'Primary consumers (herbivores) occupy the second trophic level, feeding on producers (first level).', topic: 'ecology' },
  { question: 'Which type of natural selection favors individuals at both extremes of a trait?', options: ['Stabilizing', 'Directional', 'Disruptive', 'Sexual'], correctAnswer: 2, explanation: 'Disruptive selection favors individuals at both extremes of the phenotypic range, potentially leading to speciation.', topic: 'evolution' },
  { question: 'What is the role of tRNA in protein synthesis?', options: ['Transcribes DNA', 'Transports amino acids to the ribosome', 'Splices introns', 'Replicates mRNA'], correctAnswer: 1, explanation: 'Transfer RNA (tRNA) carries specific amino acids to the ribosome during translation, matching its anticodon to the mRNA codon.', topic: 'molecular-biology' },
  { question: 'Which of the following is NOT a characteristic of enzymes?', options: ['They are consumed in reactions', 'They lower activation energy', 'They are specific to substrates', 'They are proteins'], correctAnswer: 0, explanation: 'Enzymes are NOT consumed in reactions — they are catalysts that can be reused. They lower activation energy and are substrate-specific.', topic: 'biochemistry' },
  { question: 'What structure in plant cells is responsible for photosynthesis?', options: ['Mitochondrion', 'Chloroplast', 'Vacuole', 'Cell wall'], correctAnswer: 1, explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis in plant cells.', topic: 'cell-biology' },
  { question: 'During which stage of photosynthesis is O₂ released?', options: ['Calvin cycle', 'Light-dependent reactions', 'Carbon fixation', 'Photorespiration'], correctAnswer: 1, explanation: 'Oxygen is released during the light-dependent reactions when water molecules are split (photolysis).', topic: 'photosynthesis' },
  { question: 'A cross between two heterozygous parents (Aa × Aa) produces what phenotypic ratio?', options: ['1:1', '1:2:1', '3:1', '9:3:3:1'], correctAnswer: 2, explanation: 'A monohybrid cross of two heterozygotes yields a 3:1 phenotypic ratio (3 dominant : 1 recessive).', topic: 'genetics' },
  { question: 'Which hormone is primarily responsible for the fight-or-flight response?', options: ['Insulin', 'Melatonin', 'Epinephrine', 'Estrogen'], correctAnswer: 2, explanation: 'Epinephrine (adrenaline) is released by the adrenal medulla and triggers the fight-or-flight response.', topic: 'physiology' },
  { question: 'What is the function of the rough endoplasmic reticulum?', options: ['Lipid synthesis', 'Protein synthesis and processing', 'Cell division', 'Energy production'], correctAnswer: 1, explanation: 'The rough ER has ribosomes on its surface and is responsible for synthesizing and processing proteins.', topic: 'cell-biology' },
  { question: 'Which molecule serves as the primary energy currency of cells?', options: ['DNA', 'RNA', 'ATP', 'Glucose'], correctAnswer: 2, explanation: 'ATP (adenosine triphosphate) is the primary energy currency used by cells for various metabolic processes.', topic: 'biochemistry' },
  { question: 'What is the correct order of taxonomic classification from broadest to most specific?', options: ['Kingdom, Phylum, Class, Order, Family, Genus, Species', 'Species, Genus, Family, Order, Class, Phylum, Kingdom', 'Phylum, Kingdom, Class, Family, Order, Genus, Species', 'Kingdom, Class, Phylum, Order, Family, Genus, Species'], correctAnswer: 0, explanation: 'The correct order from broadest to most specific is: Kingdom, Phylum, Class, Order, Family, Genus, Species.', topic: 'classification' },
  { question: 'Which of the following is an example of a density-dependent limiting factor?', options: ['Wildfire', 'Competition for food', 'Hurricane', 'Volcanic eruption'], correctAnswer: 1, explanation: 'Competition for food increases as population density increases, making it density-dependent. Natural disasters are density-independent.', topic: 'ecology' },
  { question: 'What is the end product of the Calvin cycle?', options: ['Oxygen', 'Water', 'G3P (glyceraldehyde-3-phosphate)', 'NADPH'], correctAnswer: 2, explanation: 'The Calvin cycle produces G3P, which is used to synthesize glucose and other organic molecules.', topic: 'photosynthesis' },
  { question: 'Which type of immunity is provided by vaccination?', options: ['Natural passive', 'Natural active', 'Artificial passive', 'Artificial active'], correctAnswer: 3, explanation: 'Vaccination provides artificial active immunity by stimulating the immune system to produce antibodies.', topic: 'immune-system' },
  { question: 'In the lac operon, what happens when lactose is present?', options: ['Repressor binds to operator', 'Genes are transcribed', 'RNA polymerase is inhibited', 'Genes are silenced'], correctAnswer: 1, explanation: 'When lactose is present, it binds the repressor, removing it from the operator, allowing RNA polymerase to transcribe the genes.', topic: 'gene-regulation' },
  { question: 'What is the main difference between primary and secondary succession?', options: ['Speed of colonization', 'Primary starts on bare rock; secondary starts on existing soil', 'Number of species involved', 'Climate requirements'], correctAnswer: 1, explanation: 'Primary succession begins on bare substrate (no soil), while secondary succession occurs where soil and seeds already exist.', topic: 'ecology' },
  { question: 'Which nitrogenous base is found in RNA but not in DNA?', options: ['Adenine', 'Guanine', 'Uracil', 'Cytosine'], correctAnswer: 2, explanation: 'Uracil replaces thymine in RNA. DNA contains thymine, while RNA contains uracil.', topic: 'molecular-biology' },
  { question: 'What is the function of restriction enzymes?', options: ['Join DNA fragments', 'Cut DNA at specific sequences', 'Copy DNA', 'Transcribe RNA'], correctAnswer: 1, explanation: 'Restriction enzymes cut DNA at specific recognition sequences, used naturally in bacterial defense and in biotechnology.', topic: 'biotechnology' },
  { question: 'Which process produces genetic variation in sexually reproducing organisms?', options: ['Mitosis', 'Binary fission', 'Meiosis with crossing over', 'Budding'], correctAnswer: 2, explanation: 'Meiosis with crossing over (recombination) and independent assortment produces genetic variation in offspring.', topic: 'genetics' },
  { question: 'What happens to water potential when solute is added to pure water?', options: ['It increases', 'It decreases', 'It stays the same', 'It becomes zero'], correctAnswer: 1, explanation: 'Adding solute decreases water potential because solute potential (ψs) is always negative or zero.', topic: 'plant-biology' },
  { question: 'Which biogeochemical cycle does NOT have an atmospheric component?', options: ['Carbon cycle', 'Nitrogen cycle', 'Phosphorus cycle', 'Water cycle'], correctAnswer: 2, explanation: 'The phosphorus cycle is primarily sedimentary and does not have a significant atmospheric (gaseous) phase.', topic: 'ecology' },
  { question: 'What is the role of NADH in cellular respiration?', options: ['Directly produces ATP', 'Carries electrons to the electron transport chain', 'Splits water molecules', 'Fixes carbon dioxide'], correctAnswer: 1, explanation: 'NADH is an electron carrier that donates electrons to the electron transport chain, driving ATP synthesis via oxidative phosphorylation.', topic: 'cellular-respiration' },
  { question: 'Which structure prevents food from entering the trachea?', options: ['Larynx', 'Epiglottis', 'Pharynx', 'Esophagus'], correctAnswer: 1, explanation: 'The epiglottis is a flap that covers the trachea during swallowing to prevent food from entering the airway.', topic: 'physiology' },
  { question: 'A frameshift mutation is caused by:', options: ['Substitution of one base', 'Insertion or deletion of bases', 'Inversion of a chromosome segment', 'Translocation between chromosomes'], correctAnswer: 1, explanation: 'Frameshift mutations result from insertions or deletions of nucleotides that are not multiples of three, shifting the reading frame.', topic: 'molecular-biology' },
  { question: 'Which is the correct sequence of events in signal transduction?', options: ['Response → Transduction → Reception', 'Reception → Transduction → Response', 'Transduction → Reception → Response', 'Response → Reception → Transduction'], correctAnswer: 1, explanation: 'Signal transduction follows: Reception (signal binds receptor) → Transduction (relay cascade) → Response (cellular change).', topic: 'cell-signaling' },
  { question: 'In C4 plants, carbon fixation first occurs in:', options: ['Bundle sheath cells', 'Mesophyll cells', 'Guard cells', 'Epidermal cells'], correctAnswer: 1, explanation: 'In C4 plants, CO₂ is first fixed in mesophyll cells by PEP carboxylase, then shuttled to bundle sheath cells for the Calvin cycle.', topic: 'photosynthesis' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export const config: PracticeExamConfig = {
  subject: 'AP Biology',
  description: 'Timed practice exam covering cell biology, genetics, evolution, ecology, and physiology.',
  backLink: { href: '/ap-biology', label: 'AP Biology' },
  ctaLinks: [
    { href: '/ap-bio-diagnostic', label: 'Diagnostic Test' },
    { href: '/ap-bio-daily-question', label: 'Daily Question' },
  ],
  accent: 'green',
  sections: [{
    id: 'mc', name: 'Multiple Choice', description: 'AP-style MC covering all four Big Ideas: evolution, energy, information, and interactions.',
    questionCount: 30, timeLimitMinutes: 45,
  }],
  getQuestions: async () => shuffle(POOL).slice(0, 30),
  aboutInfo: {
    title: 'About the AP Biology Exam',
    columns: [
      { heading: 'Exam Structure', items: ['Section I: 60 MC questions (90 min)', 'Section II: 6 Free Response (90 min)', 'Total: 3 hours'] },
      { heading: 'Scoring', items: ['Score range: 1–5', 'MC: 50% of score', 'FRQ: 50% of score', 'College credit: Usually 3+'] },
    ],
  },
}
