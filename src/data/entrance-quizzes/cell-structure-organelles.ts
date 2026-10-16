/**
 * Entrance Quiz — Cell Structure & Organelles (AP Biology)
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Cell Theory (SA:V calculation, size limits)
 *  2 — Prokaryotes vs Eukaryotes (shared vs distinguishing features)
 *  3 — Membrane-Bound Organelles (nucleolus, free vs bound ribosomes)
 *  4 — Endomembrane System (Golgi products, lysosomes and autophagy)
 *  5 — Energy Organelles (mitochondria, endosymbiosis evidence)
 *  6 — Problem-Solving Workshop (cell specialization, plant vs animal)
 *  7 — AP Review (SA:V comparison, secretory pathway)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Cell Theory
  {
    id: 'bcso-ent-1a',
    question:
      'A cube-shaped cell measures 6 μm on each side. What is its surface area-to-volume ratio?',
    options: ['6:1', '1:1', '1:6', '36:1'],
    correctIndex: 1,
    explanation:
      'Surface area = $6 \\times 6^2 = 216 \\text{ μm}^2$ and volume = $6^3 = 216 \\text{ μm}^3$, so SA:V = 1:1 (the shortcut $6/s$ gives the same). 6:1 is the ratio for a 1 μm cube, and 36:1 comes from dividing the area by the side length instead of by the volume.',
    partNumber: 1,
    partTitle: 'Cell Theory',
  },
  {
    id: 'bcso-ent-1b',
    question:
      'A skeletal muscle fiber is a single, very large cell that contains hundreds of nuclei. How does having many nuclei help such a large cell function?',
    options: [
      'Many nuclei raise the cell\'s surface area-to-volume ratio',
      'Many nuclei can make enough mRNA to serve all of the cytoplasm',
      'Many nuclei store the glucose that powers the cell\'s contraction',
      'Many nuclei let the fiber split quickly by binary fission',
    ],
    correctIndex: 1,
    explanation:
      'A single nucleus could not produce enough mRNA for a huge volume of cytoplasm (a DNA bottleneck), so multiple nuclei share the work. Nuclei do not change the cell\'s outer surface, store glucose or drive binary fission, which is how prokaryotes divide.',
    partNumber: 1,
    partTitle: 'Cell Theory',
  },

  // Part 2: Prokaryotes vs Eukaryotes
  {
    id: 'bcso-ent-2a',
    question:
      'A drug blocks the synthesis of peptidoglycan. Which cells would be harmed by this drug?',
    options: [
      'Bacteria, but not archaea or human cells',
      'Archaea and bacteria, but not human cells',
      'Human cells, as their membranes contain peptidoglycan',
      'Every cell, as all cells are surrounded by a cell wall',
    ],
    correctIndex: 0,
    explanation:
      'Peptidoglycan is found in bacterial cell walls. Archaeal walls lack it, and animal cells have no cell wall at all, so only bacteria depend on it.',
    partNumber: 2,
    partTitle: 'Prokaryotes vs Eukaryotes',
  },
  {
    id: 'bcso-ent-2b',
    question:
      'An unknown single-celled organism is examined with an electron microscope. Which observation would show that it is eukaryotic rather than prokaryotic?',
    options: [
      'It has ribosomes that carry out translation',
      'It has a cell wall outside its plasma membrane',
      'Its DNA is enclosed in a membrane-bound nucleus',
      'It has a phospholipid bilayer as its outer membrane',
    ],
    correctIndex: 2,
    explanation:
      'A membrane-bound nucleus (and other membrane-bound organelles) is what defines a eukaryote. Ribosomes and a plasma membrane are found in all cells, and both prokaryotes and many eukaryotes have cell walls.',
    partNumber: 2,
    partTitle: 'Prokaryotes vs Eukaryotes',
  },

  // Part 3: Membrane-Bound Organelles
  {
    id: 'bcso-ent-3a',
    question:
      'A laser destroys the nucleolus of a cell but leaves the rest of the nucleus intact. Which problem would the cell develop first?',
    options: [
      'It could no longer copy its DNA before dividing',
      'It could no longer assemble new ribosomes, so protein output would fall',
      'It could no longer make phospholipids for new membranes',
      'It could no longer package proteins into secretory vesicles',
    ],
    correctIndex: 1,
    explanation:
      'The nucleolus makes rRNA and assembles ribosomal subunits, so without it the cell cannot replace its ribosomes and protein synthesis declines. Lipids are made in the smooth ER, packaging happens in the Golgi, and DNA replication does not need the nucleolus.',
    partNumber: 3,
    partTitle: 'Membrane-Bound Organelles',
  },
  {
    id: 'bcso-ent-3b',
    question:
      'A ribosome finishes translating a secreted protein while attached to the rough ER and is released. It then starts translating an mRNA for an enzyme that works in the cytosol. What will happen?',
    options: [
      'It cannot do this, since bound ribosomes only make proteins for export',
      'It sends the enzyme into the ER, since it was attached there before',
      'It makes the enzyme as a free ribosome, since both types are the same',
      'It must first travel to the nucleolus to be rebuilt as a free ribosome',
    ],
    correctIndex: 2,
    explanation:
      'Free and bound ribosomes are structurally identical; a ribosome becomes bound only when the protein it is making has a signal peptide that directs it to the ER. Without a signal peptide, it translates the enzyme free in the cytosol.',
    partNumber: 3,
    partTitle: 'Membrane-Bound Organelles',
  },

  // Part 4: Endomembrane System
  {
    id: 'bcso-ent-4a',
    question:
      'A drug that blocks Golgi function is applied to a plant cell that is dividing. Which step would be most directly affected?',
    options: [
      'Pinching the cell in two with a ring of microfilaments',
      'Separating the chromosomes on the mitotic spindle',
      'Copying the chromosomes before division begins',
      'Building the cell plate from wall material in vesicles',
    ],
    correctIndex: 3,
    explanation:
      'The Golgi makes cell wall polysaccharides and packages them into vesicles, which fuse to form the cell plate during plant cytokinesis. Plant cells do not use a pinching ring (their wall prevents it), and spindle movement and DNA copying do not depend on the Golgi.',
    partNumber: 4,
    partTitle: 'Endomembrane System',
  },
  {
    id: 'bcso-ent-4b',
    question:
      'When nutrients run low, liver cells enclose some of their own older mitochondria in membranes and break them down. Which organelle does the breaking down, and what is the benefit?',
    options: [
      'Lysosomes, which free the molecules to be reused',
      'The Golgi, which ships the old mitochondria out of the cell by exocytosis',
      'Ribosomes, which rebuild the mitochondria from newly made amino acids',
      'Smooth ER, which detoxifies the mitochondria and stores them as lipid',
    ],
    correctIndex: 0,
    explanation:
      'In autophagy, lysosomes fuse with the enclosed organelles and their hydrolytic enzymes break them into building blocks the cell can reuse, which is valuable during starvation. The Golgi, ribosomes and smooth ER do not digest organelles.',
    partNumber: 4,
    partTitle: 'Endomembrane System',
  },

  // Part 5: Energy Organelles
  {
    id: 'bcso-ent-5a',
    question:
      'Heart muscle cells contain far more mitochondria per cell than skin cells do. Which explanation is best supported?',
    options: [
      'Heart cells make proteins for export and need more mitochondria to do so',
      'Heart cells photosynthesize and need mitochondria to store the sugar',
      'Heart cells contract nonstop and need a large, steady supply of ATP',
      'Heart cells cannot divide, so mitochondria take over the role of nuclei',
    ],
    correctIndex: 2,
    explanation:
      'Mitochondria make ATP by aerobic respiration, and their number matches a cell\'s energy demand; constantly contracting heart muscle needs a great deal of ATP. Mitochondria do not replace nuclei, and animal cells do not photosynthesize.',
    partNumber: 5,
    partTitle: 'Energy Organelles',
  },
  {
    id: 'bcso-ent-5b',
    question:
      'Which finding, if it were true, would most weaken the hypothesis that mitochondria descend from bacteria engulfed by an ancestral cell?',
    options: [
      'Mitochondrial DNA is circular, like a bacterial chromosome',
      'Mitochondria divide by fission on their own schedule',
      'Mitochondrial ribosomes match the ribosomes of the host cytoplasm',
      'Mitochondria are about the same size as many bacteria',
    ],
    correctIndex: 2,
    explanation:
      'Endosymbiosis predicts that mitochondrial ribosomes resemble bacterial ribosomes; if they matched the host\'s cytoplasmic ribosomes instead, that evidence would point the other way. Circular DNA, independent fission and bacterial size all support the hypothesis.',
    partNumber: 5,
    partTitle: 'Energy Organelles',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bcso-ent-6a',
    question:
      'Cells of an adrenal gland secrete large amounts of a steroid hormone. Which organelle would you expect to be unusually abundant in these cells?',
    options: [
      'Rough ER, where secreted proteins are made',
      'Smooth ER, where lipids are made',
      'Lysosomes, where engulfed molecules are digested',
      'Nucleoli, where ribosomal subunits are assembled',
    ],
    correctIndex: 1,
    explanation:
      'Smooth ER carries out lipid synthesis, so a cell that secretes a steroid hormone (a lipid) needs extensive smooth ER. Abundant rough ER marks cells that secrete proteins.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bcso-ent-6b',
    question:
      'Cells from a multicellular organism have cell walls and plasmodesmata but no chloroplasts. Which identification is best supported?',
    options: [
      'Animal cells, since chloroplasts are absent',
      'Prokaryotic cells, since they have a cell wall',
      'Fungal cells, since every plant cell has chloroplasts',
      'Plant cells from an unlit part, such as a root',
    ],
    correctIndex: 3,
    explanation:
      'Plasmodesmata are channels through plant cell walls, so these are plant cells; chloroplasts occur only in photosynthetic plant cells, not in roots. Animal cells have no walls, prokaryotes are not multicellular tissues with plasmodesmata, and many plant cells lack chloroplasts.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'bcso-ent-7a',
    question:
      'Cell A is a cube 2 μm on a side, and cell B is a cube 4 μm on a side. Which statement correctly compares their ability to exchange materials?',
    options: [
      'A has SA:V of 3:1 and B has 1.5:1, so A exchanges materials more readily',
      'A has SA:V of 1.5:1 and B has 3:1, so B exchanges materials more readily',
      'A has SA:V of 3:1 and B has 1.5:1, so B exchanges materials more readily',
      'Both have SA:V of 6:1, so they exchange materials equally well',
    ],
    correctIndex: 0,
    explanation:
      'For a cube SA:V = $6/s$: $6/2 = 3$ for A and $6/4 = 1.5$ for B. The smaller cell has more membrane per unit of volume, so it exchanges materials more readily.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'bcso-ent-7b',
    question:
      'In a pancreatic cell, a drug blocks the final fusion of vesicles with the plasma membrane but does not affect any earlier step. Where would newly made digestive-enzyme protein accumulate?',
    options: [
      'In the lumen of the rough ER, where it was made',
      'In the nucleus, where its mRNA was transcribed',
      'In lysosomes, the vesicles where it would be digested',
      'In vesicles that collect beneath the cell surface',
    ],
    correctIndex: 3,
    explanation:
      'The secretory pathway runs rough ER → Golgi → secretory vesicles → exocytosis. If only the last step is blocked, proteins still pass through the ER and Golgi and pile up in secretory vesicles near the cell surface.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the cell-structure-organelles topic.
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
    { partNumber: 1, partTitle: 'Cell Theory' },
    { partNumber: 2, partTitle: 'Prokaryotes vs Eukaryotes' },
    { partNumber: 3, partTitle: 'Membrane-Bound Organelles' },
    { partNumber: 4, partTitle: 'Endomembrane System' },
    { partNumber: 5, partTitle: 'Energy Organelles' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
