/**
 * MCAT Cell Biology & Molecular Biology Exit Quiz
 */

import { authoredFor } from './mcat-authored-pool'
import { mcatSubtopicPool } from './mcat-subtopic-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'Which phase of the cell cycle is characterized by DNA replication?',
    options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'],
    correctAnswer: 1,
    explanation: 'The S (synthesis) phase is when DNA replication occurs. G1 prepares for replication, G2 prepares for mitosis, and M phase is mitosis/cell division.',
    difficulty: 'easy',
  },
  {
    question: 'The lac operon is an example of:',
    options: ['Positive regulation only', 'Negative regulation only', 'Both positive and negative regulation', 'Neither positive nor negative regulation'],
    correctAnswer: 2,
    explanation: 'The lac operon has both negative regulation (lac repressor blocks transcription without lactose) and positive regulation (CAP-cAMP activates transcription when glucose is low).',
    difficulty: 'medium',
  },
  {
    question: 'During oxidative phosphorylation, the final electron acceptor in the electron transport chain is:',
    options: ['$NAD^{+}$', 'FAD', '$O_{2}$', '$CO_{2}$'],
    correctAnswer: 2,
    explanation: 'Molecular oxygen $(O_{2})$ is the final electron acceptor in the ETC. It receives electrons from Complex IV and combines with $H^{+}$ to form water.',
    difficulty: 'easy',
  },
  {
    question: 'Which type of RNA carries amino acids to the ribosome during translation?',
    options: ['mRNA', 'tRNA', 'rRNA', 'snRNA'],
    correctAnswer: 1,
    explanation: 'Transfer RNA (tRNA) carries specific amino acids to the ribosome. Each tRNA has an anticodon that matches a codon on mRNA, ensuring correct amino acid placement.',
    difficulty: 'easy',
  },
  {
    question: 'A mutation that changes a codon from UAC to UAA would result in:',
    options: ['A missense mutation', 'A silent mutation', 'A nonsense (premature stop) mutation', 'A frameshift mutation'],
    correctAnswer: 2,
    explanation: 'UAA is a stop codon. Changing from UAC (tyrosine) to UAA (stop) creates a premature termination signal, producing a truncated protein — this is a nonsense mutation.',
    difficulty: 'medium',
  },
  {
    question: 'The rough endoplasmic reticulum is "rough" because it is studded with:',
    options: ['Mitochondria', 'Lysosomes', 'Ribosomes', 'Golgi vesicles'],
    correctAnswer: 2,
    explanation: 'The rough ER has ribosomes attached to its cytoplasmic surface, giving it a "rough" appearance. These ribosomes synthesize proteins destined for secretion, membranes, or lysosomes.',
    difficulty: 'easy',
  },
  {
    question: 'In DNA replication, Okazaki fragments are found on the:',
    options: ['Leading strand', 'Lagging strand', 'Both strands', 'Template strand'],
    correctAnswer: 1,
    explanation: 'Okazaki fragments are short DNA segments synthesized on the lagging strand because DNA polymerase can only synthesize in the 5\' → 3\' direction, while the lagging strand template runs 5\' → 3\'.',
    difficulty: 'easy',
  },
  {
    question: 'What is the role of p53 in the cell cycle?',
    options: ['It promotes cell division', 'It acts as a tumor suppressor by halting the cell cycle when DNA damage is detected', 'It is an oncogene that drives uncontrolled growth', 'It replicates DNA'],
    correctAnswer: 1,
    explanation: 'p53 is a tumor suppressor that acts as a "guardian of the genome." It can halt the cell cycle at G1/S checkpoint to allow DNA repair, or trigger apoptosis if damage is irreparable.',
    difficulty: 'medium',
  },
  {
    question: 'Which organelle is responsible for the modification, sorting, and packaging of proteins?',
    options: ['Endoplasmic reticulum', 'Golgi apparatus', 'Lysosome', 'Peroxisome'],
    correctAnswer: 1,
    explanation: 'The Golgi apparatus (Golgi body) receives proteins from the ER, further modifies them (glycosylation, phosphorylation), sorts them, and packages them into vesicles for secretion or delivery to other organelles.',
    difficulty: 'easy',
  },
  {
    question: 'During meiosis, crossing over occurs in:',
    options: ['Prophase I', 'Metaphase I', 'Anaphase II', 'Telophase II'],
    correctAnswer: 0,
    explanation: 'Crossing over (recombination) occurs during prophase I of meiosis, when homologous chromosomes pair up (synapsis) and exchange genetic material at chiasmata.',
    difficulty: 'easy',
  },
  {
    question: 'The wobble hypothesis explains why:',
    options: ['Some codons code for stop signals', 'The genetic code is universal', 'Fewer than 61 tRNA molecules can recognize all 61 sense codons', 'DNA is double-stranded'],
    correctAnswer: 2,
    explanation: 'The wobble hypothesis (Crick) explains that the 3rd position of the codon allows non-standard base pairing with the 1st position (wobble position) of the anticodon, so fewer tRNAs are needed.',
    difficulty: 'medium',
  },
  {
    question: 'Which process involves the conversion of mRNA to protein?',
    options: ['Transcription', 'Translation', 'Replication', 'Reverse transcription'],
    correctAnswer: 1,
    explanation: 'Translation is the process by which ribosomes decode mRNA to synthesize proteins. Transcription converts DNA to mRNA, and replication copies DNA.',
    difficulty: 'easy',
  },
  {
    question: 'Programmed cell death is known as:',
    options: ['Necrosis', 'Apoptosis', 'Autophagy', 'Lysis'],
    correctAnswer: 1,
    explanation: 'Apoptosis is programmed cell death — a controlled, orderly process involving caspases. Necrosis is uncontrolled cell death from injury. Autophagy is self-digestion of cellular components.',
    difficulty: 'easy',
  },
  {
    question: 'A silent mutation:',
    options: ['Always occurs in non-coding DNA', 'Changes the amino acid sequence', 'Changes the nucleotide but not the amino acid (due to codon degeneracy)', 'Is always harmful'],
    correctAnswer: 2,
    explanation: 'A silent mutation changes a codon to a synonymous codon (one that codes for the same amino acid) due to the degeneracy of the genetic code. The protein sequence is unchanged.',
    difficulty: 'easy',
  },
  {
    question: 'The endosymbiotic theory proposes that mitochondria evolved from:',
    options: ['Endoplasmic reticulum', 'Ancient aerobic prokaryotes', 'Golgi vesicles', 'Nuclear envelope'],
    correctAnswer: 1,
    explanation: 'The endosymbiotic theory proposes that mitochondria were once free-living aerobic bacteria engulfed by ancestral eukaryotic cells. Evidence includes their double membrane, own DNA, and bacterial-size ribosomes.',
    difficulty: 'medium',
  },
]

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1). Authored items carry subtopic tags the selector prefers.
const fullPool = [...questionPool, ...authoredFor(['mcat-biology-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const source = topicSlug ? mcatSubtopicPool(fullPool, 'cell-mol-bio', topicSlug) : fullPool
  const shuffled = [...source].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `biology-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-biology',
  }))
}
