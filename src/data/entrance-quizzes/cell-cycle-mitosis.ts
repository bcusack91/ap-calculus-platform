/**
 * Entrance Quiz — Cell Cycle & Mitosis (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'ccm-ent-1a', question: 'The cell cycle consists of which two major phases?', options: ['Mitosis and meiosis', 'Interphase and the mitotic phase', 'G1 and G2 phases only', 'S phase and cytokinesis'], correctIndex: 1, explanation: 'The cell cycle is divided into interphase (G1, S, G2) and the mitotic phase (mitosis + cytokinesis).', partNumber: 1, partTitle: 'Cell Cycle Phases' },
  { id: 'ccm-ent-1b', question: 'What is the primary purpose of mitosis?', options: ['To produce four genetically unique cells', 'To reduce chromosome number by half', 'To produce two genetically identical daughter cells', 'To generate gametes for reproduction'], correctIndex: 2, explanation: 'Mitosis produces two genetically identical daughter cells, ensuring faithful copying of the genome for growth and repair.', partNumber: 1, partTitle: 'Cell Cycle Phases' },
  // Part 2
  { id: 'ccm-ent-2a', question: 'During which phase of interphase does DNA replication occur?', options: ['G1 phase', 'S phase', 'G2 phase', 'M phase'], correctIndex: 1, explanation: 'The S (synthesis) phase is when DNA replication occurs, doubling the cell\'s genetic material.', partNumber: 2, partTitle: 'Interphase' },
  { id: 'ccm-ent-2b', question: 'Which statement correctly distinguishes G1 from G2?', options: ['G1 follows mitosis and involves cell growth; G2 follows DNA synthesis and prepares for mitosis', 'G1 is when DNA replicates; G2 is when proteins are made', 'G1 and G2 are identical phases repeated twice', 'G1 occurs only in cancer cells; G2 occurs in normal cells'], correctIndex: 0, explanation: 'G1 is a period of cell growth before DNA synthesis, while G2 is a period of preparation for mitosis after DNA has been replicated.', partNumber: 2, partTitle: 'Interphase' },
  // Part 3
  { id: 'ccm-ent-3a', question: 'What is the correct order of mitotic stages?', options: ['Metaphase → prophase → telophase → anaphase', 'Prophase → metaphase → anaphase → telophase', 'Anaphase → metaphase → prophase → telophase', 'Telophase → anaphase → metaphase → prophase'], correctIndex: 1, explanation: 'The correct order of mitosis is prophase → metaphase → anaphase → telophase (remember: PMAT).', partNumber: 3, partTitle: 'Mitosis' },
  { id: 'ccm-ent-3b', question: 'What key event occurs during anaphase of mitosis?', options: ['Chromosomes condense and become visible', 'Chromosomes align at the metaphase plate', 'Sister chromatids are pulled to opposite poles of the cell', 'The nuclear envelope re-forms around each set of chromosomes'], correctIndex: 2, explanation: 'During anaphase, the centromeres split and sister chromatids are pulled to opposite poles by shortening spindle fibers.', partNumber: 3, partTitle: 'Mitosis' },
  // Part 4
  { id: 'ccm-ent-4a', question: 'How does cytokinesis occur in animal cells?', options: ['A cell plate forms at the center of the cell', 'A cleavage furrow pinches the cell in two', 'The cell wall grows inward to divide the cell', 'Vesicles from the Golgi fuse at the equator'], correctIndex: 1, explanation: 'In animal cells, a contractile ring of actin filaments forms a cleavage furrow that pinches the cell in two.', partNumber: 4, partTitle: 'Cytokinesis' },
  { id: 'ccm-ent-4b', question: 'How does cytokinesis differ in plant cells compared to animal cells?', options: ['Plant cells form a cleavage furrow', 'Plant cells skip cytokinesis entirely', 'Plant cells form a cell plate from vesicles', 'Plant cells undergo budding'], correctIndex: 2, explanation: 'Plant cells cannot form a cleavage furrow because of their rigid cell wall, so Golgi-derived vesicles fuse to form a cell plate that becomes the new cell wall.', partNumber: 4, partTitle: 'Cytokinesis' },
  // Part 5
  { id: 'ccm-ent-5a', question: 'What is the role of cell cycle checkpoints?', options: ['To speed up cell division', 'To ensure DNA integrity and proper conditions before proceeding', 'To activate oncogenes', 'To skip unnecessary phases of the cell cycle'], correctIndex: 1, explanation: 'Checkpoints act as quality control mechanisms, ensuring DNA integrity and proper cell conditions before allowing the cell to proceed to the next phase.', partNumber: 5, partTitle: 'Cell Cycle Regulation' },
  { id: 'ccm-ent-5b', question: 'Which molecules work together to regulate progression through cell cycle checkpoints?', options: ['ATP and ADP', 'Cyclins and cyclin-dependent kinases (CDKs)', 'RNA polymerase and helicase', 'Actin and myosin'], correctIndex: 1, explanation: 'Cyclins accumulate at specific points and bind CDKs, activating them to phosphorylate target proteins that drive the cell through checkpoints.', partNumber: 5, partTitle: 'Cell Cycle Regulation' },
  // Part 6
  { id: 'ccm-ent-6a', question: 'If a drug prevents spindle fiber formation, at which stage would the cell most likely arrest?', options: ['G1 phase', 'S phase', 'Metaphase', 'Telophase'], correctIndex: 2, explanation: 'Without spindle fibers, chromosomes cannot be properly attached and aligned, so the spindle assembly checkpoint arrests the cell at metaphase.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ccm-ent-6b', question: 'A cancer cell lacks functional p53 protein. What is the most likely consequence?', options: ['The cell will immediately undergo apoptosis', 'The cell will arrest permanently in G1', 'The cell will undergo uncontrolled division even with DNA damage', 'The cell will differentiate into a specialized cell type'], correctIndex: 2, explanation: 'p53 normally halts the cell cycle when DNA damage is detected. Without functional p53, damaged cells continue dividing uncontrollably, a hallmark of cancer.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'ccm-ent-7a', question: 'How does the p53 tumor suppressor gene protect against cancer?', options: ['It promotes rapid cell division', 'It activates oncogenes', 'It stops the cell cycle at the G1 checkpoint if DNA is damaged', 'It prevents cytokinesis in all cells'], correctIndex: 2, explanation: 'p53 is a tumor suppressor that stops the cell cycle at the G1 checkpoint when DNA damage is detected, allowing repair or triggering apoptosis.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'ccm-ent-7b', question: 'Which statement correctly compares the products of mitosis and meiosis?', options: ['Mitosis produces 4 haploid cells; meiosis produces 2 diploid cells', 'Mitosis produces 2 diploid cells; meiosis produces 4 haploid cells', 'Both produce 2 diploid cells', 'Both produce 4 haploid cells'], correctIndex: 1, explanation: 'Mitosis produces 2 genetically identical diploid cells, while meiosis produces 4 genetically unique haploid cells.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Cell Cycle Phases' },
    { partNumber: 2, partTitle: 'Interphase' },
    { partNumber: 3, partTitle: 'Mitosis' },
    { partNumber: 4, partTitle: 'Cytokinesis' },
    { partNumber: 5, partTitle: 'Cell Cycle Regulation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
