/**
 * Entrance Quiz — Biotechnology (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'bt-ent-1a', question: 'What do restriction enzymes do?', options: ['They synthesize DNA from an RNA template', 'They cut DNA at specific palindromic recognition sequences', 'They join DNA fragments together', 'They amplify DNA during PCR'], correctIndex: 1, explanation: 'Restriction enzymes (restriction endonucleases) recognize and cut DNA at specific palindromic sequences, producing defined fragments.', partNumber: 1, partTitle: 'Restriction Enzymes' },
  { id: 'bt-ent-1b', question: 'What is the difference between sticky ends and blunt ends?', options: ['Sticky ends are longer than blunt ends', 'Blunt ends have overhangs; sticky ends are cut straight', 'Sticky ends have single-stranded overhangs; blunt ends are cut straight across', 'There is no functional difference between them'], correctIndex: 2, explanation: 'Sticky ends have short single-stranded overhangs that can base-pair with complementary sequences, while blunt ends are cut straight across with no overhangs.', partNumber: 1, partTitle: 'Restriction Enzymes' },
  // Part 2
  { id: 'bt-ent-2a', question: 'How does gel electrophoresis separate DNA fragments?', options: ['By charge — positively charged fragments move fastest', 'By sequence — fragments with more A-T pairs move faster', 'By shape — circular DNA moves faster than linear DNA', 'By size — smaller fragments migrate farther through the gel'], correctIndex: 3, explanation: 'Gel electrophoresis separates DNA fragments by size: smaller fragments encounter less resistance and migrate farther through the gel matrix.', partNumber: 2, partTitle: 'Gel Electrophoresis' },
  { id: 'bt-ent-2b', question: 'Toward which electrode does DNA migrate during gel electrophoresis?', options: ['Toward the negative electrode (cathode)', 'Toward the positive electrode (anode)', 'DNA does not move in an electric field', 'It depends on the size of the fragment'], correctIndex: 1, explanation: 'DNA has a negative charge due to its phosphate backbone, so it migrates toward the positive electrode (anode) during electrophoresis.', partNumber: 2, partTitle: 'Gel Electrophoresis' },
  // Part 3
  { id: 'bt-ent-3a', question: 'What are the three steps in each cycle of PCR?', options: ['Denature → anneal primers → extend with Taq polymerase', 'Ligation → transformation → selection', 'Transcription → translation → folding', 'Restriction → electrophoresis → blotting'], correctIndex: 0, explanation: 'Each PCR cycle consists of denaturation (separating strands), annealing (primers bind), and extension (Taq polymerase synthesizes new strands).', partNumber: 3, partTitle: 'PCR' },
  { id: 'bt-ent-3b', question: 'After n cycles of PCR, approximately how many copies of the target DNA are produced?', options: ['n copies', 'n² copies', '2n copies', '2^n copies'], correctIndex: 3, explanation: 'PCR amplification is exponential — each cycle doubles the number of target copies, resulting in approximately 2^n copies after n cycles.', partNumber: 3, partTitle: 'PCR' },
  // Part 4
  { id: 'bt-ent-4a', question: 'What is recombinant DNA technology?', options: ['Using restriction enzymes to destroy foreign DNA', 'Sequencing DNA using gel electrophoresis', 'Inserting a gene into a plasmid vector and transforming it into bacteria', 'Amplifying DNA using PCR only'], correctIndex: 2, explanation: 'Recombinant DNA technology involves inserting a gene of interest into a plasmid vector, then introducing the recombinant plasmid into a host organism like bacteria.', partNumber: 4, partTitle: 'Gene Cloning' },
  { id: 'bt-ent-4b', question: 'How are bacteria that have taken up the recombinant plasmid identified?', options: ['By their color under UV light', 'By selecting for antibiotic resistance markers on the plasmid', 'By measuring their growth rate', 'By sequencing every bacterial genome'], correctIndex: 1, explanation: 'Plasmids typically carry antibiotic resistance genes as selectable markers — only bacteria that have taken up the plasmid survive on antibiotic-containing media.', partNumber: 4, partTitle: 'Gene Cloning' },
  // Part 5
  { id: 'bt-ent-5a', question: 'How does the CRISPR-Cas9 system work?', options: ['It uses restriction enzymes to cut random DNA sequences', 'It amplifies DNA like PCR', 'It modifies histones to regulate gene expression', 'A guide RNA directs Cas9 protein to cut specific DNA sequences'], correctIndex: 3, explanation: 'CRISPR-Cas9 uses a synthetic guide RNA (gRNA) complementary to the target sequence to direct the Cas9 nuclease to cut DNA at a precise location.', partNumber: 5, partTitle: 'CRISPR & Gene Editing' },
  { id: 'bt-ent-5b', question: 'What can CRISPR technology be used to accomplish?', options: ['Only to visualize DNA under a microscope', 'To knock out genes, correct mutations, or insert new sequences', 'Only to amplify genes for sequencing', 'To separate DNA fragments by size'], correctIndex: 1, explanation: 'CRISPR is a versatile gene-editing tool that can knock out genes, correct disease-causing mutations, or insert new genetic sequences at targeted locations.', partNumber: 5, partTitle: 'CRISPR & Gene Editing' },
  // Part 6
  { id: 'bt-ent-6a', question: 'Two DNA fragments of 500 bp and 1500 bp are run on a gel. Which migrates farther?', options: ['The 500 bp fragment', 'The 1500 bp fragment', 'Both migrate the same distance', 'Neither moves — they are too large for the gel'], correctIndex: 0, explanation: 'Smaller DNA fragments migrate farther through the gel because they encounter less resistance from the gel matrix. The 500 bp fragment travels farther than the 1500 bp fragment.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'bt-ent-6b', question: 'After 10 cycles of PCR, approximately how many copies of the target DNA are produced?', options: ['20', '100', '512', '1024'], correctIndex: 3, explanation: 'PCR amplification is exponential: 2^10 = 1024 copies after 10 cycles.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'bt-ent-7a', question: 'What is the purpose of creating genetically modified organisms (GMOs)?', options: ['To study gel electrophoresis techniques', 'To eliminate all genetic variation in a species', 'To introduce beneficial genes using recombinant DNA technology', 'To increase the rate of natural selection'], correctIndex: 2, explanation: 'GMOs are created using recombinant DNA technology to introduce beneficial genes — such as pest resistance, improved nutrition, or pharmaceutical production.', partNumber: 7, partTitle: 'AP Review' },
  { id: 'bt-ent-7b', question: 'Which of the following is an ethical consideration of gene editing technologies?', options: ['Gene editing is too inexpensive to regulate', 'Concerns include consent, equity of access, and potential unintended effects', 'There are no ethical issues because gene editing is perfectly safe', 'Ethics only apply to plant genetic modification'], correctIndex: 1, explanation: 'Gene editing raises ethical considerations including informed consent, equitable access to the technology, unintended off-target effects, and germline modifications affecting future generations.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Restriction Enzymes' },
    { partNumber: 2, partTitle: 'Gel Electrophoresis' },
    { partNumber: 3, partTitle: 'PCR' },
    { partNumber: 4, partTitle: 'Gene Cloning' },
    { partNumber: 5, partTitle: 'CRISPR & Gene Editing' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
