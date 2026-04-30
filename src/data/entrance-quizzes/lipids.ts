/**
 * Entrance Quiz — Lipids (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'lip-eq-1a', question: 'What is the defining characteristic of hydrophobic molecules?', options: ['They dissolve readily in water', 'They are repelled by water and do not dissolve in it', 'They contain no hydrogen atoms', 'They have many polar bonds'], correctIndex: 1, explanation: 'Hydrophobic molecules are nonpolar and repelled by water due to lacking oxygen or polar groups. Lipids are hydrophobic and cluster away from aqueous environments.', partNumber: 1, partTitle: 'Lipid Properties' },
  { id: 'lip-eq-1b', question: 'Why are lipids classified as organic molecules even though they contain primarily carbon and hydrogen?', options: ['They contain at least one atom of every element', 'Organic molecules are defined by carbon backbones, regardless of polarity', 'They must dissolve in water to be organic', 'They contain covalent bonds between carbon atoms'], correctIndex: 1, explanation: 'Organic molecules are defined by containing carbon atoms, typically with carbon-carbon and carbon-hydrogen bonds. Lipids fit this definition despite being hydrophobic.', partNumber: 1, partTitle: 'Lipid Properties' },

  // Part 2
  { id: 'lip-eq-2a', question: 'How is a saturated fatty acid distinguished from an unsaturated fatty acid?', options: ['Saturated fats contain only single bonds between carbons; unsaturated fats contain one or more double bonds', 'Saturated fats have more carbon atoms than unsaturated fats', 'Saturated fats are liquid at room temperature; unsaturated are solid', 'Saturated fats contain phosphate groups; unsaturated do not'], correctIndex: 0, explanation: 'Saturated fatty acids have only single bonds between carbon atoms and are typically solid at room temperature. Unsaturated fatty acids contain one or more C=C double bonds and are usually liquid (oils).', partNumber: 2, partTitle: 'Fatty Acid Structure' },
  { id: 'lip-eq-2b', question: 'A triglyceride forms when one glycerol binds with three fatty acids. What type of bond is formed, and what is released?', options: ['Ionic bonds; sodium ions are released', 'Phosphodiester bonds; phosphate groups are released', 'Ester bonds; three water molecules are released', 'Disulfide bonds; hydrogen gas is released'], correctIndex: 2, explanation: 'Triglycerides form via dehydration synthesis: each fatty acid bonds to glycerol through an ester linkage, releasing one water molecule per bond (three H₂O total).', partNumber: 2, partTitle: 'Fatty Acid Structure' },

  // Part 3
  { id: 'lip-eq-3a', question: 'What is the structure of a phospholipid, and why is it important for cell membranes?', options: ['It has one fatty acid and forms a complete barrier to all substances', 'It has two fatty acids and a phosphate head group; the amphipathic structure allows it to form a bilayer in water', 'It is identical to triglycerides with three phosphate groups', 'It has no fatty acids, only a polar head and a nonpolar tail'], correctIndex: 1, explanation: 'Phospholipids have a hydrophilic (polar) phosphate head and two hydrophobic fatty acid tails. This amphipathic structure allows them to form bilayers in water with hydrophobic tails facing inward.', partNumber: 3, partTitle: 'Phospholipids and Membranes' },
  { id: 'lip-eq-3b', question: 'How do phospholipids spontaneously arrange in an aqueous environment?', options: ['They remain as individual molecules dispersed throughout water', 'They form a bilayer with hydrophobic tails inward and hydrophilic heads facing the water', 'They aggregate with tails facing outward and heads inward', 'They dissolve completely in water like glucose'], correctIndex: 1, explanation: 'In water, phospholipids self-assemble into a bilayer: hydrophilic heads face outward toward the aqueous environment, while hydrophobic tails point inward away from water. This is the basis of cell membrane structure.', partNumber: 3, partTitle: 'Phospholipids and Membranes' },

  // Part 4
  { id: 'lip-eq-4a', question: 'What is the basic structure shared by all steroids?', options: ['A long chain of saturated fatty acids', 'Four fused carbon rings with various side groups', 'A glycerol backbone with three phosphate groups', 'A five-carbon sugar with attached bases'], correctIndex: 1, explanation: 'Steroids have a characteristic four-ring structure (three 6-carbon rings and one 5-carbon ring). Cholesterol and hormones like testosterone and estrogen are steroids with different side groups.', partNumber: 4, partTitle: 'Steroids' },
  { id: 'lip-eq-4b', question: 'Cholesterol is classified as a steroid. What roles does it play in animal cells?', options: ['It only provides energy like glucose does', 'It is a component of cell membranes and a precursor for steroid hormones', 'It forms the backbone of all proteins', 'It stores genetic information'], correctIndex: 1, explanation: 'Cholesterol is embedded in cell membranes where it regulates membrane fluidity. It also serves as a precursor molecule for synthesizing steroid hormones and vitamin D.', partNumber: 4, partTitle: 'Steroids' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Lipid Properties' },
    { partNumber: 2, partTitle: 'Fatty Acid Structure' },
    { partNumber: 3, partTitle: 'Phospholipids and Membranes' },
    { partNumber: 4, partTitle: 'Steroids' },
  ]
}
