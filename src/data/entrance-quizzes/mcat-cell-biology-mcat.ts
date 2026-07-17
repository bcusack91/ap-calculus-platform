/**
 * Entrance Quiz — Cell Biology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Cell Structure
  {
    id: 'mcb-ent-1a',
    question: 'Which organelle is responsible for modifying, sorting, and packaging proteins destined for secretion or delivery to other organelles?',
    options: [
      'Smooth endoplasmic reticulum',
      'Golgi apparatus',
      'Lysosome',
      'Peroxisome'
    ],
    correctIndex: 1,
    explanation: 'The Golgi apparatus (cis → medial → trans) receives proteins from the rough ER, performs post-translational modifications (glycosylation, phosphorylation), and routes them to their destinations via vesicles.',
    partNumber: 1,
    partTitle: 'Cell Structure'
  },
  {
    id: 'mcb-ent-1b',
    question: 'Prokaryotic and eukaryotic cells both contain which of the following?',
    options: [
      'Membrane-bound nucleus',
      '80S ribosomes',
      'Plasma membrane',
      'Mitochondria'
    ],
    correctIndex: 2,
    explanation: 'All living cells (prokaryotic and eukaryotic) have a plasma membrane. Prokaryotes lack a membrane-bound nucleus and mitochondria, and use 70S ribosomes (not 80S).',
    partNumber: 1,
    partTitle: 'Cell Structure'
  },

  // Part 2: Membrane Transport
  {
    id: 'mcb-ent-2a',
    question: 'A cell is placed in a hypertonic solution. Which of the following correctly describes the movement of water?',
    options: [
      'Water moves into the cell by osmosis; the cell swells.',
      'Water moves out of the cell by osmosis; the cell shrinks.',
      'Water moves into the cell by active transport; the cell swells.',
      'No net water movement occurs because the membrane is impermeable to water.'
    ],
    correctIndex: 1,
    explanation: 'In a hypertonic (higher solute) external solution, the osmotic gradient drives water out of the cell via osmosis, causing crenation (cell shrinkage). Osmosis is passive and requires no ATP.',
    partNumber: 2,
    partTitle: 'Membrane Transport'
  },
  {
    id: 'mcb-ent-2b',
    question: 'The $Na^{+}/K^{+}$-ATPase pump moves 3 $Na^{+}$ out and 2 $K^{+}$ in per ATP hydrolyzed. This transport is best classified as:',
    options: [
      'Primary active transport, because it directly uses ATP hydrolysis.',
      'Secondary active transport, because $Na^{+}$ gradient drives $K^{+}$ movement.',
      'Facilitated diffusion, because ions move down their electrochemical gradients.',
      'Simple diffusion, because ions cross the membrane freely.'
    ],
    correctIndex: 0,
    explanation: 'Primary active transport uses energy from direct ATP hydrolysis to move solutes against their gradients. The $Na^{+}/K^{+}$-ATPase is the classic MCAT example, pumping both ions against their concentration gradients.',
    partNumber: 2,
    partTitle: 'Membrane Transport'
  },

  // Part 3: Cell Signaling
  {
    id: 'mcb-ent-3a',
    question: 'Epinephrine binds to a β-adrenergic receptor (a GPCR), activating adenylyl cyclase to produce cAMP. cAMP then activates protein kinase A (PKA). This signaling cascade is an example of:',
    options: [
      'Direct gene activation by a lipid-soluble hormone.',
      'Signal amplification through a second messenger cascade.',
      'Autocrine signaling with no receptor required.',
      'Ion channel-linked receptor signaling.'
    ],
    correctIndex: 1,
    explanation: 'cAMP is a second messenger. Each activated GPCR activates many Gs proteins → many adenylyl cyclase molecules → massive cAMP production → many PKA molecules → amplified response. This cascade amplifies the original signal many-fold.',
    partNumber: 3,
    partTitle: 'Cell Signaling'
  },
  {
    id: 'mcb-ent-3b',
    question: 'Steroid hormones such as cortisol exert their effects differently from peptide hormones because steroids:',
    options: [
      'Bind to cell-surface receptors and activate G proteins.',
      'Are water-soluble and cannot cross the plasma membrane.',
      'Are lipid-soluble, cross the plasma membrane, and bind intracellular receptors that directly regulate transcription.',
      'Require second messengers such as cAMP to transduce their signal.'
    ],
    correctIndex: 2,
    explanation: 'Steroid hormones are lipid-soluble (derived from cholesterol) and diffuse freely across the plasma membrane to bind cytoplasmic or nuclear receptors. The hormone-receptor complex acts as a transcription factor, directly altering gene expression.',
    partNumber: 3,
    partTitle: 'Cell Signaling'
  },

  // Part 4: Cell Division (Mitosis)
  {
    id: 'mcb-ent-4a',
    question: 'During which phase of mitosis do sister chromatids separate and move toward opposite poles?',
    options: [
      'Prophase',
      'Metaphase',
      'Anaphase',
      'Telophase'
    ],
    correctIndex: 2,
    explanation: 'In anaphase, cohesin proteins are cleaved by separase, releasing sister chromatids. Kinetochore microtubules shorten, pulling each chromatid to opposite poles. This ensures each daughter cell receives one copy of each chromosome.',
    partNumber: 4,
    partTitle: 'Cell Division (Mitosis)'
  },
  {
    id: 'mcb-ent-4b',
    question: 'A human somatic cell (2n = 46) completes mitosis. Each daughter cell contains:',
    options: [
      '23 chromosomes, each consisting of 1 chromatid.',
      '46 chromosomes, each consisting of 1 chromatid.',
      '46 chromosomes, each consisting of 2 sister chromatids.',
      '92 chromosomes, each consisting of 1 chromatid.'
    ],
    correctIndex: 1,
    explanation: 'After mitosis, each daughter cell is diploid (2n = 46). After separation in anaphase, each chromosome consists of a single chromatid. Daughter cells are genetically identical to the parent cell.',
    partNumber: 4,
    partTitle: 'Cell Division (Mitosis)'
  },

  // Part 5: Cell Cycle
  {
    id: 'mcb-ent-5a',
    question: 'The G1/S checkpoint primarily monitors:',
    options: [
      'Whether chromosomes are properly aligned at the metaphase plate.',
      'Whether the cell has sufficient size, nutrients, and intact DNA to commit to replication.',
      'Whether cytokinesis has been completed correctly.',
      'Whether the nuclear envelope has reformed properly.'
    ],
    correctIndex: 1,
    explanation: 'The G1/S checkpoint (restriction point in mammals) is a key decision point. The cell assesses DNA integrity, nutrient availability, and growth signals. If conditions are not met, cyclin D/CDK4-6 activity remains low and Rb stays unphosphorylated, blocking S phase entry.',
    partNumber: 5,
    partTitle: 'Cell Cycle'
  },
  {
    id: 'mcb-ent-5b',
    question: 'p53 is often called the "guardian of the genome" because it:',
    options: [
      'Promotes cell division by activating cyclin-CDK complexes.',
      'Blocks apoptosis in damaged cells to preserve cellular resources.',
      'Activates DNA repair genes and can trigger apoptosis when DNA damage is irreparable.',
      'Methylates DNA to silence tumor suppressor genes.'
    ],
    correctIndex: 2,
    explanation: 'p53 is a tumor suppressor transcription factor. In response to DNA damage, p53 induces p21 (CDK inhibitor) to pause the cycle for repair, and if damage is severe, activates pro-apoptotic genes (Bax). Loss of p53 function is found in ~50% of human cancers.',
    partNumber: 5,
    partTitle: 'Cell Cycle'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mcb-ent-6a',
    question: 'A researcher treats cells with colchicine, a drug that depolymerizes microtubules. Cells treated with colchicine would most likely arrest at which cell cycle stage?',
    options: [
      'G1, because microtubules are needed for DNA synthesis.',
      'S phase, because microtubules are required for sister chromatid cohesion.',
      'Metaphase, because the spindle checkpoint detects unattached kinetochores.',
      'G2, because microtubules are needed for nuclear envelope breakdown.'
    ],
    correctIndex: 2,
    explanation: 'The spindle assembly checkpoint (SAC) monitors kinetochore-microtubule attachment. Colchicine prevents microtubule polymerization, leaving kinetochores unattached. The SAC (via Mad2 inhibiting APC/C) prevents anaphase onset, arresting cells in metaphase.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mcb-ent-6b',
    question: 'A mutation eliminates the signal peptide from a secretory protein. What is the most likely consequence?',
    options: [
      'The protein is degraded immediately in the cytoplasm.',
      'The protein is redirected to the nucleus instead.',
      'The protein is synthesized in the cytoplasm and cannot enter the ER lumen, so it is not secreted.',
      'The protein is secreted normally through a signal-independent pathway.'
    ],
    correctIndex: 2,
    explanation: 'Signal peptides (N-terminal hydrophobic sequences) are recognized by SRP, directing ribosomes to the rough ER. Without a signal peptide, the protein is translated by free ribosomes in the cytoplasm and cannot enter the secretory pathway.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mcb-ent-7a',
    question: 'Which of the following best explains why mitochondria and chloroplasts are thought to have originated from ancient prokaryotic endosymbionts?',
    options: [
      'They contain 80S ribosomes identical to cytoplasmic ribosomes.',
      'They possess their own circular DNA, 70S ribosomes, and binary fission-like replication.',
      'They are surrounded by a single membrane derived from the ER.',
      'They produce ATP only under anaerobic conditions.'
    ],
    correctIndex: 1,
    explanation: 'The endosymbiotic theory (Lynn Margulis) is supported by: circular DNA (like prokaryotes), 70S ribosomes sensitive to prokaryotic antibiotics, double membranes, and replication by binary fission. These features strongly imply an ancient prokaryotic origin.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mcb-ent-7b',
    question: 'A patient\'s cells lack functional lysosomes. Which of the following consequences is most likely?',
    options: [
      'Cells cannot synthesize ATP via oxidative phosphorylation.',
      'Cells cannot perform phagocytosis of bacteria.',
      'Undigested macromolecules accumulate in the cell, leading to cellular dysfunction (lysosomal storage disease).',
      'Cells overproduce proteins and secrete them uncontrollably.'
    ],
    correctIndex: 2,
    explanation: 'Lysosomes contain acid hydrolases that degrade macromolecules delivered by phagocytosis, autophagy, or endocytosis. Without functional lysosomes, substrates accumulate—the hallmark of lysosomal storage diseases (e.g., Tay-Sachs, Gaucher disease).',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cell Structure' },
    { partNumber: 2, partTitle: 'Membrane Transport' },
    { partNumber: 3, partTitle: 'Cell Signaling' },
    { partNumber: 4, partTitle: 'Cell Division (Mitosis)' },
    { partNumber: 5, partTitle: 'Cell Cycle' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
