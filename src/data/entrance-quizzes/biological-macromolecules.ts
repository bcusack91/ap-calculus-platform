/**
 * Entrance Quiz — Biological Macromolecules (AP Biology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'bm-ent-1a', question: 'What are the four classes of biological macromolecules?', options: ['Carbohydrates, lipids, proteins, nucleic acids', 'Sugars, fats, enzymes, DNA', 'Monosaccharides, triglycerides, polypeptides, chromosomes', 'Glucose, cholesterol, amino acids, nucleotides'], correctIndex: 0, explanation: 'The four major classes of biological macromolecules are carbohydrates, lipids, proteins, and nucleic acids. Each plays distinct and essential roles in living organisms.', partNumber: 1, partTitle: 'Introduction to Macromolecules' },
  { id: 'bm-ent-1b', question: 'What type of reaction builds polymers from monomers?', options: ['Hydrolysis', 'Oxidation', 'Dehydration synthesis (condensation)', 'Reduction'], correctIndex: 2, explanation: 'Dehydration synthesis (also called condensation) links monomers together by removing a water molecule at each bond formed. This is how polysaccharides, polypeptides, and nucleic acids are assembled.', partNumber: 1, partTitle: 'Introduction to Macromolecules' },
  // Part 2
  { id: 'bm-ent-2a', question: 'Which of the following correctly pairs a monosaccharide with a polysaccharide?', options: ['Fructose → cellulose', 'Glucose → starch, glycogen, and cellulose', 'Galactose → chitin', 'Ribose → glycogen'], correctIndex: 1, explanation: 'Glucose is the monomer for starch (plant energy storage), glycogen (animal energy storage), and cellulose (plant structural support). All three are glucose polymers that differ in their glycosidic linkages and branching patterns.', partNumber: 2, partTitle: 'Carbohydrates' },
  { id: 'bm-ent-2b', question: 'Why can humans digest starch but not cellulose?', options: ['Cellulose is made of fructose, which humans cannot break down', 'Starch has α-glycosidic linkages that human enzymes can hydrolyze; cellulose has β-linkages that they cannot', 'Cellulose is a lipid, not a carbohydrate', 'Starch is soluble in water but cellulose is not'], correctIndex: 1, explanation: 'Starch contains α-1,4 glycosidic linkages that are hydrolyzed by human amylase. Cellulose has β-1,4 linkages that require cellulase — an enzyme humans lack. This β-linkage difference makes cellulose a structural fiber (dietary fiber) rather than an energy source for humans.', partNumber: 2, partTitle: 'Carbohydrates' },
  // Part 3
  { id: 'bm-ent-3a', question: 'Why do fats store more energy per gram than carbohydrates?', options: ['Fats are larger molecules', 'Fats contain more C–H bonds, which release more energy when oxidized', 'Fats dissolve in water more easily', 'Fats are polymers of glucose'], correctIndex: 1, explanation: 'Fats have a high proportion of C–H bonds relative to their mass. These bonds store significant energy that is released during oxidation, yielding about 9 kcal/g compared to ~4 kcal/g for carbohydrates.', partNumber: 3, partTitle: 'Lipids' },
  { id: 'bm-ent-3b', question: 'What makes phospholipids well-suited for forming cell membranes?', options: ['They are completely hydrophobic', 'They are completely hydrophilic', 'They are amphipathic — a hydrophilic head and two hydrophobic fatty acid tails', 'They form covalent bonds with water'], correctIndex: 2, explanation: 'Phospholipids have a polar, hydrophilic phosphate head and two nonpolar, hydrophobic fatty acid tails. This amphipathic nature drives them to spontaneously form bilayers in aqueous environments, creating the basis of all biological membranes.', partNumber: 3, partTitle: 'Lipids' },
  // Part 4
  { id: 'bm-ent-4a', question: 'What type of bond links amino acids together in a polypeptide chain?', options: ['Hydrogen bond', 'Glycosidic bond', 'Peptide bond (formed by dehydration synthesis)', 'Phosphodiester bond'], correctIndex: 2, explanation: 'A peptide bond forms by dehydration synthesis between the carboxyl group (–COOH) of one amino acid and the amino group (–NH₂) of the next, releasing water. This covalent bond links amino acids into polypeptide chains.', partNumber: 4, partTitle: 'Proteins' },
  { id: 'bm-ent-4b', question: 'What happens when a protein is denatured?', options: ['Its amino acid sequence changes', 'Its 3D shape is disrupted, causing loss of function', 'It breaks into individual amino acids', 'It gains a new biological function'], correctIndex: 1, explanation: 'Denaturation disrupts the secondary, tertiary, and quaternary structure of a protein (its 3D shape) without breaking peptide bonds. Since protein function depends on shape, denatured proteins typically lose their biological activity.', partNumber: 4, partTitle: 'Proteins' },
  // Part 5
  { id: 'bm-ent-5a', question: 'Which of the following correctly distinguishes DNA from RNA?', options: ['DNA contains ribose; RNA contains deoxyribose', 'DNA uses uracil; RNA uses thymine', 'DNA contains deoxyribose and thymine; RNA contains ribose and uracil', 'DNA is single-stranded; RNA is double-stranded'], correctIndex: 2, explanation: 'DNA has deoxyribose sugar and the base thymine (T), while RNA has ribose sugar and the base uracil (U) instead of thymine. DNA is typically double-stranded and RNA is typically single-stranded.', partNumber: 5, partTitle: 'Nucleic Acids' },
  { id: 'bm-ent-5b', question: 'What are the three components of a nucleotide?', options: ['Amino group, carboxyl group, R group', 'Phosphate group, pentose sugar, nitrogenous base', 'Glycerol, fatty acid, phosphate', 'Sugar, phospholipid, protein'], correctIndex: 1, explanation: 'A nucleotide consists of a phosphate group, a pentose sugar (ribose or deoxyribose), and a nitrogenous base (A, T/U, G, or C). Nucleotides are the monomers of nucleic acids.', partNumber: 5, partTitle: 'Nucleic Acids' },
  // Part 6
  { id: 'bm-ent-6a', question: 'If a polypeptide contains 150 amino acids, how many water molecules are released during its synthesis?', options: ['150', '149', '151', '300'], correctIndex: 1, explanation: 'Each peptide bond formation releases one water molecule. To link 150 amino acids into a chain, 149 peptide bonds must form, so 149 water molecules are released (one fewer bond than the number of monomers).', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'bm-ent-6b', question: 'A molecule provides long-term energy storage, is hydrophobic, and contains glycerol bonded to three fatty acids. Which macromolecule is it?', options: ['Polysaccharide', 'Protein', 'Triglyceride (lipid)', 'Nucleic acid'], correctIndex: 2, explanation: 'The description — glycerol backbone, three fatty acids, hydrophobic, long-term energy storage — matches a triglyceride (fat). Triglycerides are the primary lipid used for energy storage in animals.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7
  { id: 'bm-ent-7a', question: 'What is the relationship between hydrolysis and dehydration synthesis?', options: ['They are identical processes', 'Hydrolysis builds polymers; dehydration synthesis breaks them', 'Hydrolysis breaks polymers by adding water; dehydration synthesis builds polymers by removing water', 'Both require ATP and enzymes to proceed'], correctIndex: 2, explanation: 'Hydrolysis and dehydration synthesis are reverse reactions. Dehydration synthesis removes water to form bonds between monomers (building polymers), while hydrolysis adds water to break those bonds (breaking polymers back into monomers).', partNumber: 7, partTitle: 'AP Review' },
  { id: 'bm-ent-7b', question: 'Which class of biological macromolecule stores and transmits hereditary information?', options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'], correctIndex: 3, explanation: 'Nucleic acids (DNA and RNA) store and transmit genetic information. DNA serves as the long-term repository of hereditary instructions, while RNA plays key roles in translating that information into proteins.', partNumber: 7, partTitle: 'AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to Macromolecules' },
    { partNumber: 2, partTitle: 'Carbohydrates' },
    { partNumber: 3, partTitle: 'Lipids' },
    { partNumber: 4, partTitle: 'Proteins' },
    { partNumber: 5, partTitle: 'Nucleic Acids' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
