/**
 * Entrance Quiz — Proteins (AP Biology)
 *
 * 8 questions covering all 4 lesson parts (2 per part).
 * Each question is tagged with the part number it covers,
 * so we can determine which parts a student already knows.
 *
 * Part mapping:
 *  1 — Introduction to Proteins (R-group classes, peptide bond formation)
 *  2 — Structure: Four Levels (bonds at each level, sequence determines fold)
 *  3 — Function & Enzymes (shape-function, activation energy)
 *  4 — AP Review (active-site mutation, recognizing quaternary structure)
 */

import { shuffleArray } from '@/lib/shuffle-options'
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction to Proteins
  {
    id: 'bprot-ent-1a',
    question:
      'An amino acid has an uncharged R group that ends in an –OH group. Which interaction is this R group best suited to form with water or with other polar R groups?',
    options: [
      'Disulfide bridges, as the R group contains oxygen',
      'Hydrophobic interactions, as the R group is uncharged',
      'Peptide bonds, as these bonds link side chains together',
      'Hydrogen bonds, as the –OH group is hydrophilic',
    ],
    correctIndex: 3,
    explanation:
      'An –OH group is polar, so this R group is hydrophilic and forms hydrogen bonds with water or other polar groups. Disulfide bridges need sulfur, uncharged does not mean nonpolar, and peptide bonds join the backbone, not side chains.',
    partNumber: 1,
    partTitle: 'Introduction to Proteins',
  },
  {
    id: 'bprot-ent-1b',
    question:
      'When two amino acids are joined by a peptide bond, one water molecule is released. Where do the atoms of that water come from?',
    options: [
      'An H atom from each of the two R groups',
      'An –OH from the carboxyl of one and an H from the amino group of the other',
      'An –OH from the amino group of each amino acid',
      'An O from one R group and two H atoms from the central carbon',
    ],
    correctIndex: 1,
    explanation:
      'In dehydration synthesis, the carboxyl group of one amino acid gives up –OH and the amino group of the next gives up H, forming the –CO–NH– peptide bond. R groups are not involved in forming the backbone.',
    partNumber: 1,
    partTitle: 'Introduction to Proteins',
  },

  // Part 2: Structure: Four Levels
  {
    id: 'bprot-ent-2a',
    question:
      'A protein made of a single polypeptide is treated with a chemical that breaks only its disulfide bridges. Which level of structure is most directly disrupted?',
    options: [
      'Primary, since the bridges are covalent like peptide bonds',
      'Secondary, since the bridges form between backbone atoms',
      'Tertiary, since the bridges join R groups within the chain',
      'Quaternary, since the bridges link separate subunits',
    ],
    correctIndex: 2,
    explanation:
      'Disulfide bridges are covalent bonds between sulfur-containing R groups that lock a single chain\'s 3D fold, so they are part of tertiary structure. Primary structure is the peptide-bonded sequence, secondary structure uses backbone hydrogen bonds, and this protein has only one chain.',
    partNumber: 2,
    partTitle: 'Structure: Four Levels',
  },
  {
    id: 'bprot-ent-2b',
    question:
      'Two different proteins contain exactly the same number of each kind of amino acid, yet they fold into very different shapes. Which explanation is best supported?',
    options: [
      'The same building blocks are linked in a different order',
      'Each protein uses a different kind of peptide bond',
      'One of them contains nucleotides that alter how it folds',
      'Folding depends only on temperature, not on the chain itself',
    ],
    correctIndex: 0,
    explanation:
      'Primary structure is the order of amino acids, and that order determines which R groups end up near each other and therefore how the chain folds. Every peptide bond is the same kind of bond, and proteins do not contain nucleotides.',
    partNumber: 2,
    partTitle: 'Structure: Four Levels',
  },

  // Part 3: Function & Enzymes
  {
    id: 'bprot-ent-3a',
    question:
      'An antibody binds one specific antigen at the tips of its arms. A mutation replaces a charged amino acid at one tip with an amino acid that has a nonpolar R group. Which outcome is most likely?',
    options: [
      'It binds the antigen more tightly, since nonpolar groups attract it',
      'Nothing changes, since the rest of the antibody keeps its shape',
      'The other tip changes too, since both arms share one chain',
      'The tip\'s shape and chemistry change, weakening binding to that antigen',
    ],
    correctIndex: 3,
    explanation:
      'Function depends on shape, and binding depends on matching shape and charges, so one changed amino acid in the binding site can stop the antibody from recognizing its antigen, just as one substitution alters hemoglobin in sickle cell anemia.',
    partNumber: 3,
    partTitle: 'Function & Enzymes',
  },
  {
    id: 'bprot-ent-3b',
    question:
      'Adding an enzyme makes a reaction in a test tube run thousands of times faster. Which statement describes what the enzyme does?',
    options: [
      'It supplies energy so that the reaction releases more energy',
      'It lowers the energy barrier without changing energy released',
      'It warms the solution so that molecules collide more often',
      'It is used up and must be replaced after each reaction',
    ],
    correctIndex: 1,
    explanation:
      'Enzymes lower activation energy, so more molecules can react at the same temperature; the overall energy change of the reaction stays the same. Enzymes do not heat the solution and are not consumed.',
    partNumber: 3,
    partTitle: 'Function & Enzymes',
  },

  // Part 4: AP Review
  {
    id: 'bprot-ent-4a',
    question:
      'A mutation replaces one amino acid in an enzyme\'s active site. Tests show that the enzyme\'s overall fold is unchanged, but its activity drops by 95%. Which explanation is best supported?',
    options: [
      'The new R group interacts with the substrate differently',
      'The enzyme is denatured, since any change unfolds a protein',
      'The enzyme can no longer form peptide bonds in its backbone',
      'The mutation changed which nucleotides make up the enzyme',
    ],
    correctIndex: 0,
    explanation:
      'The active site works through R groups that bind and act on the substrate, so swapping one can weaken binding or catalysis even when the overall shape stays the same. The stem rules out denaturation, and enzymes are made of amino acids, not nucleotides.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
  {
    id: 'bprot-ent-4b',
    question:
      'Which observation would show that a protein has quaternary structure?',
    options: [
      'It contains α-helices and β-sheets within one chain',
      'It stops working after being heated above 60°C',
      'Gentle treatment splits it into two folded chains',
      'It has several disulfide bridges within one chain',
    ],
    correctIndex: 2,
    explanation:
      'Quaternary structure exists only when two or more polypeptide chains assemble, so separating the protein into distinct folded chains shows it. Helices, sheets and disulfide bridges within one chain are secondary and tertiary features, and heat sensitivity applies to all proteins.',
    partNumber: 4,
    partTitle: 'AP Review',
  },
]

/**
 * Generate an entrance quiz for the proteins topic.
 * Returns all 8 questions in shuffled order.
 */
export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

/**
 * Get the list of part numbers and titles covered by this entrance quiz.
 */
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Proteins' },
    { partNumber: 2, partTitle: 'Structure: Four Levels' },
    { partNumber: 3, partTitle: 'Function & Enzymes' },
    { partNumber: 4, partTitle: 'AP Review' },
  ]
}
