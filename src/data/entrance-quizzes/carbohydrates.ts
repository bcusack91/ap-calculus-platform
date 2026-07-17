/**
 * Entrance Quiz — Carbohydrates (AP Biology)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  { id: 'carb-eq-1a', question: 'What is the general formula for monosaccharides?', options: ['$C_{n}H_{2n}O$', '$(CH_{2}O)_{n}$ where n is typically 3 to 7', '$C_{6}H_{12}O_{6}$ exclusively', '$C_{x}H$ᵧOᵧ with no standard ratio'], correctIndex: 1, explanation: 'Monosaccharides follow the general formula $(CH_{2}O)_{n}$, where n is typically 3 to 7. Glucose is $C_{6}H_{12}O_{6}$ (n=6); ribose is $C_{5}H_{10}O_{5}$ (n=5).', partNumber: 1, partTitle: 'Monosaccharides' },
  { id: 'carb-eq-1b', question: 'What type of sugar structure does glucose have?', options: ['A linear chain of 5 carbons with an aldehyde group', 'A 6-carbon ring structure with an aldehyde group', 'A 6-carbon ring structure where the aldehyde folds into a hemiacetal (the normal form in solution)', 'A 7-carbon branched chain'], correctIndex: 2, explanation: 'Glucose is a hexose (6-carbon monosaccharide). Although it contains an aldehyde group in its open-chain form, in aqueous solution it typically exists as a cyclic hemiacetal ring structure.', partNumber: 1, partTitle: 'Monosaccharides' },

  // Part 2
  { id: 'carb-eq-2a', question: 'What is the relationship between a monosaccharide, a disaccharide, and a polysaccharide?', options: ['Monosaccharides are the largest; they break down into disaccharides', 'A disaccharide is two monosaccharides joined together; a polysaccharide is many monosaccharides linked in a chain', 'They are three different types of organisms', 'A polysaccharide is a monosaccharide with multiple phosphate groups'], correctIndex: 1, explanation: 'Monosaccharides are simple sugars. A disaccharide is two monosaccharides joined by a glycosidic bond (e.g., glucose + fructose = sucrose). A polysaccharide is a long chain of monosaccharides.', partNumber: 2, partTitle: 'Carbohydrate Hierarchy' },
  { id: 'carb-eq-2b', question: 'How are monosaccharides connected in polysaccharides?', options: ['Via peptide bonds between amino groups', 'Via glycosidic bonds formed by dehydration synthesis between monosaccharide units', 'Via phosphodiester bonds linking phosphate groups', 'Via hydrogen bonds that can easily break'], correctIndex: 1, explanation: 'Monosaccharides join via glycosidic bonds: the carbohydrate equivalent of dehydration synthesis, releasing water and forming a covalent C-O-C bond between adjacent sugar units.', partNumber: 2, partTitle: 'Carbohydrate Hierarchy' },

  // Part 3
  { id: 'carb-eq-3a', question: 'What are the primary functions of starch and glycogen, and how do they differ?', options: ['Starch stores energy in plants; glycogen stores energy in animals', 'Starch is used for structure; glycogen is used for energy', 'Glycogen is found only in fungi; starch only in bacteria', 'Both are used for structural support in plant cell walls'], correctIndex: 0, explanation: 'Both starch (in plants) and glycogen (in animals) are glucose polysaccharides used for energy storage. Glycogen is more highly branched than starch, allowing faster glucose release.', partNumber: 3, partTitle: 'Storage Polysaccharides' },
  { id: 'carb-eq-3b', question: 'What is cellulose, and what distinguishes it from starch and glycogen?', options: ['A monosaccharide found in animal tissues', 'A polysaccharide made of glucose units linked by β-glycosidic bonds; humans cannot digest it, and it serves as a structural component in plant cell walls', 'A disaccharide used for short-term energy storage', 'An unbranched glucose polymer identical to starch'], correctIndex: 1, explanation: 'Cellulose is a glucose polymer with β-glycosidic bonds (whereas starch has α-bonds). The β-configuration makes it rigid and indigestible to animals, ideal for plant structural support.', partNumber: 3, partTitle: 'Storage Polysaccharides' },

  // Part 4
  { id: 'carb-eq-4a', question: 'Which carbohydrates are used primarily for energy, and which for structure?', options: ['Glucose and fructose for structure; cellulose for energy', 'Monosaccharides and disaccharides for immediate energy; starch and glycogen for energy storage; cellulose for structure', 'Carbohydrates are only used for energy, never for structure', 'All polysaccharides are used equally for both purposes'], correctIndex: 1, explanation: 'Simple sugars (glucose, fructose) provide immediate energy. Starch and glycogen store energy. Cellulose, with its strong β-bonds, provides structural support in plant cell walls and is not metabolized by animals.', partNumber: 4, partTitle: 'Functions and Roles' },
  { id: 'carb-eq-4b', question: 'Why can animals easily break down starch and glycogen but not cellulose?', options: ['Starch and glycogen have fewer bonds than cellulose', 'Animals have enzymes that break α-glycosidic bonds (in starch/glycogen) but lack enzymes to break β-glycosidic bonds (in cellulose)', 'Cellulose is not made of glucose', 'Cellulose is digested more quickly by stomach acid'], correctIndex: 1, explanation: 'Animals produce amylase and other enzymes that hydrolyze α-glycosidic bonds in starch and glycogen. Cellulose\'s β-glycosidic bonds require different enzymes that animals do not produce; only certain bacteria and fungi can digest cellulose.', partNumber: 4, partTitle: 'Functions and Roles' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Monosaccharides' },
    { partNumber: 2, partTitle: 'Carbohydrate Hierarchy' },
    { partNumber: 3, partTitle: 'Storage Polysaccharides' },
    { partNumber: 4, partTitle: 'Functions and Roles' },
  ]
}
