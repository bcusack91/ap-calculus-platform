/**
 * Entrance Quiz — DNA Replication (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — DNA Structure (purine-pyrimidine pairing, histone acetylation)
 *  2 — Semiconservative Replication (conservative-model prediction, replication bubbles)
 *  3 — Enzymes of Replication (what polymerase needs, ligase on the lagging strand)
 *  4 — Proofreading & Repair (radiation damage, mutations as raw material)
 *  5 — Modeling the Replication Fork (building a new strand, plasmid origins)
 *  6 — Problem-Solving Workshop (density-gradient generations, pulse labeling)
 *  7 — AP Review (multiple origins calculation, prokaryote vs eukaryote replication)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: DNA Structure
  {
    id: 'bdna-ent-1a',
    question:
      'In the DNA double helix, every base pair contains one purine (two rings) and one pyrimidine (one ring). Why is this pairing rule important for the structure?',
    options: [
      'It keeps the helix the same width all along',
      'It lets each purine form exactly three hydrogen bonds with its partner',
      'It allows adenine to pair with guanine whenever thymine is not present',
      'It keeps the sugar-phosphate backbone on the inside of the double helix',
    ],
    correctIndex: 0,
    explanation:
      'A two-ring base paired with a one-ring base always spans the same distance, so the helix has a constant diameter. A–T pairs have two hydrogen bonds, A pairs only with T, and the backbones are on the outside.',
    partNumber: 1,
    partTitle: 'DNA Structure',
  },
  {
    id: 'bdna-ent-1b',
    question:
      'A drug causes acetyl groups to be added to the histones around a particular gene. What is the most likely effect on that gene?',
    options: [
      'Its DNA sequence is changed where the acetyl groups attach',
      'Packing tightens, which silences the gene completely',
      'The chromatin loosens, making the gene easier to transcribe',
      'It is replicated a second time during the same S phase',
    ],
    correctIndex: 2,
    explanation:
      'Adding acetyl groups to histones generally loosens how tightly DNA is packed, so transcription proteins can reach the gene. Removing them tightens chromatin and silences genes. These changes do not alter the DNA sequence.',
    partNumber: 1,
    partTitle: 'DNA Structure',
  },

  // Part 2: Semiconservative Replication
  {
    id: 'bdna-ent-2a',
    question:
      'Bacteria with fully heavy (¹⁵N) DNA are moved to ¹⁴N medium. If replication were conservative (the parent double helix stays intact), what would a density gradient show after two generations?',
    options: [
      'Half intermediate and half light bands',
      'One-fourth heavy, three-fourths light',
      'A single band of intermediate density',
      'Half heavy and half light bands',
    ],
    correctIndex: 1,
    explanation:
      'Under conservative replication the original heavy molecule never splits: after one generation there is 1 heavy and 1 light molecule, and after two there is 1 heavy and 3 light. No intermediate DNA would ever form. Half intermediate and half light is the semiconservative result.',
    partNumber: 2,
    partTitle: 'Semiconservative Replication',
  },
  {
    id: 'bdna-ent-2b',
    question:
      'Two neighboring origins of replication on a eukaryotic chromosome each open a replication bubble. What happens to these bubbles as replication continues?',
    options: [
      'Each bubble copies only its own short region and then stops',
      'One bubble closes so that the other can copy both regions alone',
      'Each bubble moves in one direction only, toward the chromosome end',
      'They grow toward each other until they merge',
    ],
    correctIndex: 3,
    explanation:
      'Each origin opens a bubble with a fork at each end, and the forks move in opposite directions. Neighboring bubbles grow until they meet and merge, so the chromosome is copied as one continuous molecule, each stretch exactly once.',
    partNumber: 2,
    partTitle: 'Semiconservative Replication',
  },

  // Part 3: Enzymes of Replication
  {
    id: 'bdna-ent-3a',
    question:
      'What must be present for DNA polymerase to add the next nucleotide to a new strand?',
    options: [
      'A free 5′ phosphate end on the template strand',
      'An RNA polymerase bound beside it on the DNA',
      'A paired strand with a free 3′ end',
      'A single unpaired nucleotide with no template',
    ],
    correctIndex: 2,
    explanation:
      'DNA polymerase can only extend an existing strand by adding to its 3′ end, using the template to choose each base. That is why an RNA primer, which supplies the first 3′ end, is laid down before synthesis can begin.',
    partNumber: 3,
    partTitle: 'Enzymes of Replication',
  },
  {
    id: 'bdna-ent-3b',
    question:
      'Which enzyme is needed many times along the lagging strand but only rarely along the leading strand?',
    options: [
      'DNA ligase, which joins the short fragments',
      'Helicase, which separates the two strands',
      'Topoisomerase, which relieves strain ahead',
      'RNA polymerase, which transcribes the genes',
    ],
    correctIndex: 0,
    explanation:
      'The lagging strand is made as many Okazaki fragments, and ligase must seal the backbone between each pair of fragments. The leading strand is built continuously, so it needs almost no joining. Helicase and topoisomerase work continuously at the fork for both strands, and RNA polymerase carries out transcription, not replication.',
    partNumber: 3,
    partTitle: 'Enzymes of Replication',
  },

  // Part 4: Proofreading & Repair
  {
    id: 'bdna-ent-4a',
    question:
      'A lab worker is accidentally exposed to a high dose of X-rays. Which kind of DNA damage is this exposure most likely to cause?',
    options: [
      'Covalent links between adjacent bases on one strand',
      'Chemical changes to bases that make them mispair',
      'Mismatched bases left by errors in DNA polymerase',
      'Breaks in the sugar-phosphate backbone, on one or both strands',
    ],
    correctIndex: 3,
    explanation:
      'High-energy radiation such as X-rays and gamma rays can break the DNA backbone, sometimes on both strands. UV light links adjacent bases on one strand, reactive chemicals alter bases so they mispair, and polymerase errors are mistakes in copying rather than radiation damage.',
    partNumber: 4,
    partTitle: 'Proofreading & Repair',
  },
  {
    id: 'bdna-ent-4b',
    question:
      'A UV-induced mutation escapes repair in a germ cell and is passed to offspring. Will the new allele help or harm the offspring?',
    options: [
      'It will harm them, since UV mutations disrupt protein shape',
      'It depends on how it changes the protein and on the environment',
      'It will help them, since it adds variation for selection',
      'It will have no effect, since repair enzymes fix it in each new cell',
    ],
    correctIndex: 1,
    explanation:
      'Mutations are random. Whether one is beneficial, harmful or neutral depends on how it changes the gene product and on the environment the organism lives in. Mutations that escape repair are the ultimate source of new alleles for natural selection.',
    partNumber: 4,
    partTitle: 'Proofreading & Repair',
  },

  // Part 5: Modeling the Replication Fork
  {
    id: 'bdna-ent-5a',
    question:
      'At a replication fork, a template strand reads 3′–ATTGCA–5′ and runs 3′ → 5′ toward the fork. Which describes the new strand built on it?',
    options: [
      '5′–TAACGT–3′, made as the lagging strand',
      '5′–TGCAAT–3′, made as the leading strand',
      '3′–TAACGT–5′, made as the lagging strand',
      '5′–TAACGT–3′, made as the leading strand',
    ],
    correctIndex: 3,
    explanation:
      'Pairing A–T and G–C gives TAACGT, written 5′ to 3′ because the new strand is antiparallel to its template. A template running 3′ → 5′ toward the fork lets the new strand grow toward the fork continuously, so it is the leading strand.',
    partNumber: 5,
    partTitle: 'Modeling the Replication Fork',
  },
  {
    id: 'bdna-ent-5b',
    question:
      'Researchers put into bacteria a plasmid carrying an antibiotic-resistance gene but lacking any origin of replication. What will happen over many cell divisions, with no antibiotic present?',
    options: [
      'Every descendant keeps the plasmid, since plasmids copy on their own',
      'The plasmid is diluted out, since it cannot be copied for daughters',
      'It joins the chromosome, since it has nowhere else to go',
      'The cells start making extra origins so that the plasmid is copied',
    ],
    correctIndex: 1,
    explanation:
      'A plasmid replicates independently only because it has its own origin. Without one it is not copied, so as the cells divide it is diluted into fewer and fewer of the descendants.',
    partNumber: 5,
    partTitle: 'Modeling the Replication Fork',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bdna-ent-6a',
    question:
      'One fully heavy (¹⁵N) DNA molecule replicates in ¹⁴N medium. After some number of generations, exactly 1/16 of the DNA molecules have intermediate density. How many generations have passed?',
    options: ['4', '5', '16', '32'],
    correctIndex: 1,
    explanation:
      'After n generations there are $2^n$ molecules, and exactly 2 of them are intermediate (each original heavy strand paired with a light one). $2 / 2^n = 1/16$ gives $2^n = 32$, so n = 5. Four generations would give 2/16 = 1/8.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bdna-ent-6b',
    question:
      'Replicating bacteria are given labeled nucleotides for only a few seconds and are then examined immediately. Where will the label appear on the lagging strand?',
    options: [
      'Spread evenly along the entire lagging strand',
      'Only in the RNA primers at the origin',
      'In the most recent short fragment near the fork',
      'Only in the parental template strand',
    ],
    correctIndex: 2,
    explanation:
      'A very short pulse labels only DNA made in those seconds. On the lagging strand that is the Okazaki fragment being built nearest the fork; label spreads into a continuous strand only after a long chase lets ligase join the fragments.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bdna-ent-7a',
    question:
      'A eukaryotic chromosome has 100 million base pairs, and each fork copies 50 nucleotides per second. If 2,000 evenly spaced origins all start at once and each produces two forks, about how long does replication take?',
    options: [
      'About 500 seconds',
      'About 250 seconds',
      'About 1,000 seconds',
      'About 1,000,000 seconds',
    ],
    correctIndex: 0,
    explanation:
      '2,000 origins × 2 forks = 4,000 forks, which together copy $4{,}000 \\times 50 = 200{,}000$ bp per second; $100{,}000{,}000 \\div 200{,}000 = 500$ s. Forgetting that each origin has two forks gives 1,000 s, and a single origin would take 1,000,000 s.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bdna-ent-7b',
    question:
      'Which statement correctly compares DNA replication in a typical bacterium with replication in a human cell?',
    options: [
      'A bacterium copies one circular chromosome from one origin; humans use many origins per chromosome',
      'Bacteria use many origins per chromosome; humans use one per chromosome',
      'Bacteria replicate conservatively, while human cells replicate semiconservatively',
      'Only human cells need primers, since bacterial polymerase can start strands alone',
    ],
    correctIndex: 0,
    explanation:
      'A bacterial chromosome is a single circle copied from one origin by two forks, while each much longer human chromosome is linear and copied from many origins at once. Both replicate semiconservatively, and both require primers.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the dna-replication topic.
 * Returns all 14 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'DNA Structure' },
    { partNumber: 2, partTitle: 'Semiconservative Replication' },
    { partNumber: 3, partTitle: 'Enzymes of Replication' },
    { partNumber: 4, partTitle: 'Proofreading & Repair' },
    { partNumber: 5, partTitle: 'Modeling the Replication Fork' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
