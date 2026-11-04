/**
 * Entrance Quiz — Cell Biology (MCAT)
 * 15 questions · 7 parts (2 / 2 / 3 / 2 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026 so each part tests the lesson part of the same number).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Cell Structure & Organelles'
const P2 = 'Cell Membrane & Transport'
const P3 = 'Cell Cycle & Mitosis'
const P4 = 'Meiosis & Genetic Diversity'
const P5 = 'Cell Signaling'
const P6 = 'Apoptosis & Cellular Processes'
const P7 = 'Specialized Cell Types & Tissues'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Cell Structure & Organelles
  { id: 'mcb-ent-1a', question: 'Which organelle modifies, sorts and packages proteins bound for secretion or for delivery to other organelles?', options: ['Rough endoplasmic reticulum', 'Golgi apparatus', 'Lysosome', 'Peroxisome'], correctIndex: 1, explanation: 'The Golgi apparatus receives proteins from the rough ER at its cis face, modifies them (for example by glycosylation) and ships them from its trans face in vesicles. The rough ER is where secretory proteins are made, not where they are sorted; the lysosome digests material and the peroxisome oxidizes fatty acids and breaks down hydrogen peroxide.', partNumber: 1, partTitle: P1 },
  { id: 'mcb-ent-1b', question: 'Prokaryotic and eukaryotic cells both contain which of the following?', options: ['Membrane-bound nucleus', '80S ribosomes', 'Mitochondria', 'Plasma membrane'], correctIndex: 3, explanation: 'Every living cell is enclosed by a plasma membrane. Prokaryotes have a nucleoid rather than a membrane-bound nucleus, no mitochondria, and smaller 70S ribosomes instead of the eukaryotic 80S kind.', partNumber: 1, partTitle: P1 },

  // Part 2 — Cell Membrane & Transport
  { id: 'mcb-ent-2a', question: 'How does facilitated diffusion differ from simple diffusion?', options: ['It needs ATP to move solute against its gradient', 'It needs no membrane protein and never saturates', 'It uses a carrier or channel and can saturate', 'It moves solute only inside membrane vesicles'], correctIndex: 2, explanation: 'Both are passive and run down the concentration gradient, but facilitated diffusion relies on channels or carrier proteins (such as GLUT transporters), so its rate levels off once the carriers are all occupied. Using ATP against a gradient is active transport, and the no-protein, non-saturating description fits simple diffusion. Vesicle transport is endocytosis or exocytosis.', partNumber: 2, partTitle: P2 },
  { id: 'mcb-ent-2b', question: 'The $Na^{+}/K^{+}$-ATPase moves 3 $Na^{+}$ out and 2 $K^{+}$ in for each ATP hydrolyzed. This transport is best classified as:', options: ['Secondary active transport, driven by the $Na^{+}$ gradient', "Facilitated diffusion down the ions' gradients", 'Simple diffusion straight through the bilayer', 'Primary active transport, powered directly by ATP'], correctIndex: 3, explanation: 'The pump hydrolyzes ATP itself to move both ions against their gradients, which defines primary active transport. Secondary active transport (such as $Na^{+}$-glucose symport) uses the $Na^{+}$ gradient that this pump creates. Ions cannot cross the bilayer by simple diffusion, and moving against a gradient rules out any passive process.', partNumber: 2, partTitle: P2 },

  // Part 3 — Cell Cycle & Mitosis
  { id: 'mcb-ent-3a', question: 'During which phase of mitosis do sister chromatids separate and move toward opposite poles?', options: ['Prophase', 'Anaphase', 'Metaphase', 'Telophase'], correctIndex: 1, explanation: 'In anaphase, cohesin is cleaved and the spindle pulls sister chromatids to opposite poles. Chromosomes condense in prophase, line up at the plate in metaphase, and nuclear envelopes re-form in telophase.', partNumber: 3, partTitle: P3 },
  { id: 'mcb-ent-3b', question: 'A human somatic cell (2n = 46) completes mitosis. Each daughter cell contains:', options: ['46 chromosomes, each a single chromatid', '23 chromosomes, each a single chromatid', '46 chromosomes, each with two chromatids', '92 chromosomes, each a single chromatid'], correctIndex: 0, explanation: 'Mitosis keeps the chromosome number: each daughter is diploid with 46 unreplicated chromosomes. Two chromatids per chromosome describes a cell after S phase but before division, 23 chromosomes is the haploid number reached only by meiosis, and 92 single chromatids exist only briefly in anaphase, before the cell splits.', partNumber: 3, partTitle: P3 },
  { id: 'mcb-ent-3c', question: 'The $G_1$/S checkpoint primarily checks:', options: ['Whether every kinetochore is on the spindle', 'Whether cytokinesis has fully split the cell', 'Whether size, nutrients and DNA are adequate', 'Whether the nuclear envelope has re-formed'], correctIndex: 2, explanation: 'Before committing to S phase the cell checks that it is large enough, has the resources it needs and has undamaged DNA; damaged DNA triggers p53, which halts the cycle here. Kinetochore attachment is checked by the spindle checkpoint in metaphase, and cytokinesis and nuclear envelope re-formation happen at the end of mitosis.', partNumber: 3, partTitle: P3 },

  // Part 4 — Meiosis & Genetic Diversity
  { id: 'mcb-ent-4a', question: 'Which event in meiosis halves the chromosome number, taking a cell from diploid to haploid?', options: ['Sister chromatids separating in meiosis II', 'DNA replication in the preceding S phase', 'Homologous chromosomes separating in meiosis I', 'Crossing over between sister chromatids'], correctIndex: 2, explanation: 'Meiosis I is the reduction division: homologs go to different cells, so each daughter is haploid. Meiosis II separates sister chromatids, which changes the DNA content but not the ploidy. S phase doubles DNA without changing the chromosome number, and crossing over happens between non-sister chromatids of homologs.', partNumber: 4, partTitle: P4 },
  { id: 'mcb-ent-4b', question: 'Which process creates new combinations of alleles along a single chromosome?', options: ['Crossing over between homologs in prophase I', 'Independent assortment at metaphase I', 'Random fertilization of an egg by a sperm', 'Separation of sister chromatids in anaphase II'], correctIndex: 0, explanation: 'Crossing over swaps segments between homologous chromosomes at chiasmata, producing recombinant chromosomes that carry a new mix of alleles. Independent assortment and random fertilization reshuffle whole chromosomes, not the alleles within one, and separating identical sister chromatids creates no new combinations.', partNumber: 4, partTitle: P4 },

  // Part 5 — Cell Signaling
  { id: 'mcb-ent-5a', question: 'Which pairing of a G protein with its effect is correct?', options: ['$G_i$: activates adenylyl cyclase, raising cAMP', '$G_s$: activates adenylyl cyclase, raising cAMP', '$G_q$: inhibits phospholipase C, lowering IP$_3$', '$G_s$: activates phospholipase C, raising DAG'], correctIndex: 1, explanation: '$G_s$ stimulates adenylyl cyclase, so cAMP rises and protein kinase A is activated. $G_i$ does the opposite (it inhibits adenylyl cyclase), and it is $G_q$ that activates phospholipase C to make IP$_3$ and DAG.', partNumber: 5, partTitle: P5 },
  { id: 'mcb-ent-5b', question: 'A tumor cell secretes a growth factor and also carries the receptor for it, so the factor stimulates the same cell that released it. This is:', options: ['Paracrine signaling', 'Endocrine signaling', 'Autocrine signaling', 'Juxtacrine signaling'], correctIndex: 2, explanation: 'A signal that acts on the cell that made it is autocrine. Paracrine signals act on nearby cells, endocrine signals travel through the blood to distant targets, and juxtacrine signaling needs direct contact between membrane-bound ligand and receptor on neighboring cells.', partNumber: 5, partTitle: P5 },

  // Part 6 — Apoptosis & Cellular Processes
  { id: 'mcb-ent-6a', question: 'Which feature marks apoptosis rather than necrosis?', options: ['The cell swells until its membrane ruptures', 'Spilled contents recruit inflammatory cells', 'It proceeds with no ATP or enzyme activity', 'The cell shrinks into sealed membrane bodies'], correctIndex: 3, explanation: 'Apoptosis is orderly and ATP-dependent: the cell shrinks and breaks into membrane-bound apoptotic bodies that phagocytes clear without inflammation. Swelling, membrane rupture and inflammation from spilled contents are the signs of necrosis. Apoptosis needs ATP and caspase activity.', partNumber: 6, partTitle: P6 },
  { id: 'mcb-ent-6b', question: 'In the intrinsic pathway, cytochrome c released from mitochondria first activates which initiator caspase?', options: ['Caspase-9, through the apoptosome', 'Caspase-8, through the Fas death receptor', 'Caspase-3, by binding it directly', 'Bcl-2, which then cleaves caspase-3'], correctIndex: 0, explanation: 'Cytosolic cytochrome c helps assemble the apoptosome, which activates caspase-9; caspase-9 then activates the executioner caspase-3. Caspase-8 is the initiator of the extrinsic (death receptor) pathway, caspase-3 is downstream rather than first, and Bcl-2 is an anti-apoptotic protein, not a caspase.', partNumber: 6, partTitle: P6 },

  // Part 7 — Specialized Cell Types & Tissues
  { id: 'mcb-ent-7a', question: "Which cell junction lets ions and small molecules pass directly from one cell's cytoplasm into its neighbor's?", options: ['Gap junction', 'Tight junction', 'Desmosome', 'Hemidesmosome'], correctIndex: 0, explanation: 'Gap junctions form channels between adjacent cells, allowing communication and electrical coupling. Tight junctions seal the space between cells to form a barrier, desmosomes anchor neighboring cells to each other, and hemidesmosomes anchor cells to the basement membrane.', partNumber: 7, partTitle: P7 },
  { id: 'mcb-ent-7b', question: 'Which pairing of a muscle type with its features is correct?', options: ['Skeletal: non-striated, involuntary, one nucleus', 'Cardiac: striated, involuntary, intercalated discs', 'Smooth: striated, voluntary, many nuclei', 'Cardiac: non-striated, voluntary, no gap junctions'], correctIndex: 1, explanation: 'Cardiac muscle is striated and involuntary, and its cells are joined by intercalated discs that contain gap junctions. Skeletal muscle is striated and voluntary with many nuclei per fiber, and smooth muscle is non-striated and involuntary.', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
