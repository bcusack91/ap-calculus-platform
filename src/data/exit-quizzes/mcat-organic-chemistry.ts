/**
 * MCAT Organic Chemistry Exit Quiz
 * Covers: functional groups, stereochemistry, SN1/SN2/E1/E2, carbonyl chemistry, spectroscopy
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'An SN2 reaction is favored by which combination of conditions?',
    options: ['Tertiary substrate, polar protic solvent', 'Primary substrate, strong nucleophile, polar aprotic solvent', 'Secondary substrate, weak base, heat', 'Tertiary substrate, polar aprotic solvent'],
    correctAnswer: 1,
    explanation: 'SN2 reactions are favored by primary (unhindered) substrates, strong nucleophiles, and polar aprotic solvents (like DMSO, acetone) that don\'t solvate the nucleophile.',
    difficulty: 'medium',
  },
  {
    question: 'What is the relationship between (R)-2-bromobutane and (S)-2-bromobutane?',
    options: ['Constitutional isomers', 'Diastereomers', 'Enantiomers', 'Identical molecules'],
    correctAnswer: 2,
    explanation: 'R and S configurations at the same stereocenter make these molecules non-superimposable mirror images — the definition of enantiomers.',
    difficulty: 'easy',
  },
  {
    question: 'A compound shows a strong, sharp IR absorption at ~1715 cm⁻¹. This is most likely:',
    options: ['An alcohol O-H stretch', 'A C=O stretch of a ketone', 'A C-H stretch', 'An N-H stretch of an amine'],
    correctAnswer: 1,
    explanation: 'The C=O (carbonyl) stretch typically appears as a strong, sharp peak around 1700-1750 cm⁻¹. Ketones absorb around 1715 cm⁻¹.',
    difficulty: 'medium',
  },
  {
    question: 'Which reaction mechanism involves the formation of a carbocation intermediate?',
    options: ['SN2', 'E2', 'SN1', 'Concerted [4+2] cycloaddition'],
    correctAnswer: 2,
    explanation: 'SN1 reactions proceed through a two-step mechanism: first, the leaving group departs to form a carbocation intermediate, then the nucleophile attacks.',
    difficulty: 'easy',
  },
  {
    question: 'In ¹H NMR, a triplet at δ 1.2 and a quartet at δ 4.1 suggest:',
    options: ['A methyl group adjacent to a CH₂', 'An ethyl ester (—OCH₂CH₃)', 'An aromatic ring', 'A vinyl group'],
    correctAnswer: 1,
    explanation: 'This classic splitting pattern (triplet + quartet) is characteristic of an ethyl group, commonly an ethyl ester (—OCH₂CH₃). The CH₃ appears as a triplet (split by 2 adjacent H) and the CH₂ appears as a quartet (split by 3 adjacent H).',
    difficulty: 'medium',
  },
  {
    question: 'Which of the following is the most stable carbocation?',
    options: ['Methyl cation (CH₃⁺)', 'Primary carbocation', 'Secondary carbocation', 'Tertiary carbocation'],
    correctAnswer: 3,
    explanation: 'Carbocation stability increases with substitution due to hyperconjugation and inductive electron donation from alkyl groups. Tertiary > secondary > primary > methyl.',
    difficulty: 'easy',
  },
  {
    question: 'Zaitsev\'s rule predicts that in an elimination reaction, the major product is:',
    options: ['The less substituted alkene', 'The more substituted alkene', 'The Hofmann product', 'The anti-Markovnikov product'],
    correctAnswer: 1,
    explanation: 'Zaitsev\'s rule states that elimination reactions favor formation of the more substituted (more stable) alkene as the major product.',
    difficulty: 'easy',
  },
  {
    question: 'A Grignard reagent (RMgBr) reacts with a ketone followed by acid workup to produce:',
    options: ['A primary alcohol', 'A secondary alcohol', 'A tertiary alcohol', 'An aldehyde'],
    correctAnswer: 2,
    explanation: 'Grignard reagents add to ketones (which already have two C substituents on the carbonyl carbon), producing a tertiary alcohol after protonation.',
    difficulty: 'medium',
  },
  {
    question: 'Which amino acid has an aromatic R-group that absorbs UV light at 280 nm?',
    options: ['Alanine', 'Tryptophan', 'Glycine', 'Leucine'],
    correctAnswer: 1,
    explanation: 'Tryptophan (along with tyrosine and phenylalanine) has an aromatic side chain. Tryptophan\'s indole ring absorbs most strongly at 280 nm, which is used for protein quantification.',
    difficulty: 'medium',
  },
  {
    question: 'What type of reaction converts a carboxylic acid and an alcohol into an ester?',
    options: ['Aldol condensation', 'Fischer esterification', 'Claisen rearrangement', 'Diels-Alder reaction'],
    correctAnswer: 1,
    explanation: 'Fischer esterification is the acid-catalyzed condensation of a carboxylic acid with an alcohol to form an ester and water. It is a reversible equilibrium process.',
    difficulty: 'easy',
  },
  {
    question: 'The anomeric carbon in glucose is carbon:',
    options: ['C-1', 'C-2', 'C-4', 'C-6'],
    correctAnswer: 0,
    explanation: 'The anomeric carbon is the carbonyl carbon (C-1 in glucose) that becomes a new stereocenter during cyclization. The α and β forms differ in the configuration at C-1.',
    difficulty: 'medium',
  },
  {
    question: 'Which reaction involves anti-periplanar geometry of the leaving group and the β-hydrogen?',
    options: ['SN1', 'SN2', 'E1', 'E2'],
    correctAnswer: 3,
    explanation: 'E2 elimination requires the leaving group and the β-hydrogen to be anti-periplanar (180° dihedral angle) for optimal orbital overlap in the concerted mechanism.',
    difficulty: 'medium',
  },
  {
    question: 'Markovnikov\'s rule states that in HX addition to an alkene:',
    options: ['H adds to the more substituted carbon', 'H adds to the less substituted carbon', 'X adds to the less substituted carbon', 'The reaction produces the anti-Markovnikov product'],
    correctAnswer: 1,
    explanation: 'Markovnikov\'s rule: the hydrogen adds to the carbon with more hydrogens (less substituted), and X adds to the more substituted carbon, forming the more stable carbocation intermediate.',
    difficulty: 'easy',
  },
  {
    question: 'Which reagent selectively oxidizes a primary alcohol to an aldehyde without further oxidation to a carboxylic acid?',
    options: ['KMnO₄', 'Jones reagent (CrO₃/H₂SO₄)', 'PCC (pyridinium chlorochromate)', 'Na₂Cr₂O₇'],
    correctAnswer: 2,
    explanation: 'PCC is a mild oxidant that oxidizes primary alcohols to aldehydes and stops there. Strong oxidants like KMnO₄ and Jones reagent would further oxidize the aldehyde to a carboxylic acid.',
    difficulty: 'medium',
  },
  {
    question: 'A compound with molecular formula C₅H₁₀O has no IR absorption near 1700 cm⁻¹. The compound is most likely:',
    options: ['A ketone', 'An aldehyde', 'A cyclic ether', 'A carboxylic acid'],
    correctAnswer: 2,
    explanation: 'C₅H₁₀O has one degree of unsaturation. Without a carbonyl peak (~1700 cm⁻¹), it cannot be a ketone, aldehyde, or acid. A cyclic ether (like tetrahydropyran) accounts for the degree of unsaturation and lacks a carbonyl.',
    difficulty: 'hard',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `organic-chemistry-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-organic-chemistry',
  }))
}
