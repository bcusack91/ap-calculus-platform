/**
 * Entrance Quiz — Phylogenetics & Cladistics (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Reading Phylogenetic Trees (relatedness by shared nodes, clades)
 *  2 — Building Cladograms (tree from a character matrix, marking a derived trait)
 *  3 — Molecular Phylogenetics (molecular clock calculation, counting differences)
 *  4 — Homology, Analogy & Convergent Evolution (analogous eyes, divergent forelimbs)
 *  5 — Evidence for Common Ancestry (transitional fossils, ongoing evolution)
 *  6 — Speciation & Adaptive Radiation on Trees (dating a node, punctuated pattern)
 *  7 — AP Review (counting changes on a tree, limits of parsimony)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Reading Phylogenetic Trees
  {
    id: 'bphy-ent-1a',
    question:
      'A tree is written as (Shark, (Salmon, (Frog, (Lizard, Mouse)))). Is the frog more closely related to the salmon or to the mouse?',
    options: [
      'The mouse, as the two share a more recent common ancestor',
      'The salmon, since the two are drawn next to each other',
      'The salmon, since both of them live in or near water',
      'Equally to the salmon and mouse, since all are vertebrates',
    ],
    correctIndex: 0,
    explanation:
      'Tracing back, the frog meets the mouse at a node nearer the tips than the node where it meets the salmon, so the frog and mouse share a more recent common ancestor. Position on the page and habitat do not show relatedness.',
    partNumber: 1,
    partTitle: 'Reading Phylogenetic Trees',
  },
  {
    id: 'bphy-ent-1b',
    question:
      'A tree is written as ((A, B), (C, (D, E))). Which group of taxa forms a clade?',
    options: ['B and C', 'C, D and E', 'A, B and C', 'C and D'],
    correctIndex: 1,
    explanation:
      'A clade is an ancestor plus all of its descendants. C, D and E include every descendant of the node joining C to the (D, E) pair. C and D leave out E, and the other groups combine parts of two separate branches.',
    partNumber: 1,
    partTitle: 'Reading Phylogenetic Trees',
  },

  // Part 2: Building Cladograms
  {
    id: 'bphy-ent-2a',
    question:
      'The out-group lacks traits 1 to 4. Trait 1 is found in taxa A, B, C and D; trait 2 only in C and D; trait 3 only in A and B; trait 4 only in D. Which cladogram is best supported?',
    options: [
      '(Out-group, (A, (B, (C, D))))',
      '(Out-group, ((A, C), (B, D)))',
      '(Out-group, ((A, B), (C, D)))',
      '(Out-group, (D, (C, (A, B))))',
    ],
    correctIndex: 2,
    explanation:
      'Trait 1 unites all four ingroup taxa, trait 3 is a shared derived character of A and B, and trait 2 is one of C and D, so the tree has two pairs. Trait 4 appears in D alone, so it marks D\'s own branch but groups nothing.',
    partNumber: 2,
    partTitle: 'Building Cladograms',
  },
  {
    id: 'bphy-ent-2b',
    question:
      'On the cladogram (Frog, (Lizard, (Crocodile, Bird))), only birds have feathers. Where should the origin of feathers be marked?',
    options: [
      'On the branch leading to lizards, crocodiles and birds',
      'On the branch leading to crocodiles and birds',
      'At the root, below the frog',
      'On the branch leading only to birds',
    ],
    correctIndex: 3,
    explanation:
      'A derived character is marked on the branch where it first appeared. Because only birds have feathers, the trait arose on the bird lineage after it split from crocodiles. Marking it lower would wrongly imply that crocodiles or lizards inherited it.',
    partNumber: 2,
    partTitle: 'Building Cladograms',
  },

  // Part 3: Molecular Phylogenetics
  {
    id: 'bphy-ent-3a',
    question:
      'Fossils show that species A and B diverged 15 million years ago, and a gene differs at 45 positions between them. Species A and C differ at 21 positions in the same gene. Assuming a constant rate, about when did A and C diverge?',
    options: [
      'About 7 million years ago',
      'About 5 million years ago',
      'About 21 million years ago',
      'About 32 million years ago',
    ],
    correctIndex: 0,
    explanation:
      'Calibrate the rate first: $45 \\div 15 = 3$ differences per million years. Then $21 \\div 3 = 7$ million years. Using 21 directly treats differences as years, and 5 comes from dividing 15 by 3.',
    partNumber: 3,
    partTitle: 'Molecular Phylogenetics',
  },
  {
    id: 'bphy-ent-3b',
    question:
      'Aligned DNA sequences are species 1: ATGCCA, species 2: ATGCTA and species 3: TTGATA. Which two species are most closely related?',
    options: [
      'Species 1 and 3, which share the most bases',
      'Species 1 and 2, differing at one site',
      'Species 2 and 3, which differ at one position',
      'All three equally, since each sequence has six bases',
    ],
    correctIndex: 1,
    explanation:
      'Species 1 and 2 differ only at position 5. Species 2 and 3 differ at positions 1 and 4, and species 1 and 3 at positions 1, 4 and 5. Fewer differences indicate a more recent common ancestor.',
    partNumber: 3,
    partTitle: 'Molecular Phylogenetics',
  },

  // Part 4: Homology, Analogy & Convergent Evolution
  {
    id: 'bphy-ent-4a',
    question:
      'Octopuses and humans both have camera-type eyes with a lens, but the eyes develop from different tissues and the two lineages\' common ancestor had only simple light-sensing spots. How should the eyes be described?',
    options: [
      'Homologous, since both eyes focus light with a lens',
      'Vestigial, since their shared ancestor had simple eyes',
      'Analogous, since they arose separately',
      'Homologous, produced by divergent evolution',
    ],
    correctIndex: 2,
    explanation:
      'Similar structures that evolved independently in different lineages, with different developmental origins, are analogous and result from convergent evolution. They should not be used as evidence that octopuses and humans are closely related.',
    partNumber: 4,
    partTitle: 'Homology, Analogy & Convergent Evolution',
  },
  {
    id: 'bphy-ent-4b',
    question:
      'The same forelimb bones, inherited from a common four-limbed ancestor, became flippers in whales, wings in bats and arms in humans. Which pattern does this illustrate?',
    options: [
      'Analogous structures shaped by similar environments',
      'Vestigial structures left over from an earlier function',
      'Convergent evolution producing homologous structures',
      'Divergent evolution producing homologous structures',
    ],
    correctIndex: 3,
    explanation:
      'Related lineages adapting to different ways of life diverged in form while keeping the inherited bone pattern, so the forelimbs are homologous structures produced by divergent evolution.',
    partNumber: 4,
    partTitle: 'Homology, Analogy & Convergent Evolution',
  },

  // Part 5: Evidence for Common Ancestry
  {
    id: 'bphy-ent-5a',
    question:
      'Which fossil finding would best support the hypothesis that whales descended from land-dwelling mammals?',
    options: [
      'Fossil sharks with streamlined bodies like whales',
      'Early whale relatives that had four legs',
      'Fossil fish found in the same rocks as whales',
      'Modern whales that breathe air through lungs',
    ],
    correctIndex: 1,
    explanation:
      'Transitional fossils such as Pakicetus, an early whale relative with four legs, document the change from land to water. Shark body shape reflects convergence, and modern whales alone do not show the transition.',
    partNumber: 5,
    partTitle: 'Evidence for Common Ancestry',
  },
  {
    id: 'bphy-ent-5b',
    question:
      'Which observation best shows that species are still evolving today?',
    options: [
      'Insect populations becoming resistant to a pesticide within years',
      'Fossils of extinct species found in very old rock layers',
      'All living organisms using DNA as their genetic material',
      'Whales carrying small pelvic bones inside their bodies',
    ],
    correctIndex: 0,
    explanation:
      'The rise of pesticide resistance over a few years is evolution measured in real time. Old fossils, the universal use of DNA and vestigial bones are evidence of past evolution and common ancestry.',
    partNumber: 5,
    partTitle: 'Evidence for Common Ancestry',
  },

  // Part 6: Speciation & Adaptive Radiation on Trees
  {
    id: 'bphy-ent-6a',
    question:
      'On a tree, a node joins two sister species of beetle that live on opposite sides of a mountain range that rose about 5 million years ago. What does this node most likely represent?',
    options: [
      'Sympatric speciation within one shared habitat',
      'A hybrid species formed when the two groups met',
      'Allopatric speciation as the uplift split the ancestral population',
      'An adaptive radiation into many species on each side',
    ],
    correctIndex: 2,
    explanation:
      'Each node marks a speciation event. Sister species on either side of a barrier suggest the barrier split an ancestral population, which is allopatric speciation, and the barrier\'s age can be used to date the node.',
    partNumber: 6,
    partTitle: 'Speciation & Adaptive Radiation on Trees',
  },
  {
    id: 'bphy-ent-6b',
    question:
      'In the fossil record of a lineage, body form changes very little for millions of years and then shifts abruptly near each branching point. Which pattern is shown?',
    options: [
      'Gradualism, since change is spread evenly over time',
      'Convergent evolution, since forms end up looking alike',
      'Adaptive radiation, since many forms arise at once',
      'Punctuated equilibrium, since stasis alternates with rapid change',
    ],
    correctIndex: 3,
    explanation:
      'Long periods of stasis broken by rapid change, often at speciation, describe punctuated equilibrium. Gradualism would show steady change between branching points, and an adaptive radiation is a burst of many species, not a pattern of change within one lineage.',
    partNumber: 6,
    partTitle: 'Speciation & Adaptive Radiation on Trees',
  },

  // Part 7: AP Review
  {
    id: 'bphy-ent-7a',
    question:
      'A trait is present in taxa A and B but absent from taxa C, D and the out-group. What is the fewest number of evolutionary changes needed to explain the trait on the tree (Out-group, ((A, C), (B, D)))?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation:
      'A and B are not sister taxa on this tree, so the trait must have been gained twice (once on the A branch and once on the B branch). Gaining it once lower down would require losses in both C and D, which is 3 changes. On ((A, B), (C, D)) a single gain would do.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bphy-ent-7b',
    question:
      'Why might the tree that requires the fewest evolutionary changes still be wrong?',
    options: [
      'Real histories can include convergence and lost traits, adding changes',
      'Trees with fewer changes are built from fewer characters',
      'Molecular data are counted differently from anatomical traits',
      'Parsimony applies mainly to extinct species known from fossils',
    ],
    correctIndex: 0,
    explanation:
      'Evolution does not always take the simplest path: convergent evolution and traits that are lost and regained mean the true history can include extra changes. That is why scientists compare many characters, especially molecular ones, and treat every tree as a hypothesis.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the phylogenetics-cladistics topic.
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
    { partNumber: 1, partTitle: 'Reading Phylogenetic Trees' },
    { partNumber: 2, partTitle: 'Building Cladograms' },
    { partNumber: 3, partTitle: 'Molecular Phylogenetics' },
    { partNumber: 4, partTitle: 'Homology, Analogy & Convergent Evolution' },
    { partNumber: 5, partTitle: 'Evidence for Common Ancestry' },
    { partNumber: 6, partTitle: 'Speciation & Adaptive Radiation on Trees' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
