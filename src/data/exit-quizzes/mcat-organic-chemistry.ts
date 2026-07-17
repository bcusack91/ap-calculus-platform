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
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'What is the relationship between (R)-2-bromobutane and (S)-2-bromobutane?',
    options: ['Constitutional isomers', 'Diastereomers', 'Enantiomers', 'Identical molecules'],
    correctAnswer: 2,
    explanation: 'R and S configurations at the same stereocenter make these molecules non-superimposable mirror images — the definition of enantiomers.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  },
  {
    question: 'A compound shows a strong, sharp IR absorption at ~1715 $cm^{-1}$. This is most likely:',
    options: ['An alcohol O-H stretch', 'A C=O stretch of a ketone', 'A C-H stretch', 'An N-H stretch of an amine'],
    correctAnswer: 1,
    explanation: 'The C=O (carbonyl) stretch typically appears as a strong, sharp peak around 1700-1750 $cm^{-1}$. Ketones absorb around 1715 $cm^{-1}$.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  },
  {
    question: 'Which reaction mechanism involves the formation of a carbocation intermediate?',
    options: ['SN2', 'E2', 'SN1', 'Concerted [4+2] cycloaddition'],
    correctAnswer: 2,
    explanation: 'SN1 reactions proceed through a two-step mechanism: first, the leaving group departs to form a carbocation intermediate, then the nucleophile attacks.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'In $ {}^{1}H$ NMR, a triplet at δ 1.2 and a quartet at δ 4.1 suggest:',
    options: ['A methyl group adjacent to a $CH_{2}$', 'An ethyl ester (—$OCH_{2}CH_{3}$)', 'An aromatic ring', 'A vinyl group'],
    correctAnswer: 1,
    explanation: 'This classic splitting pattern (triplet + quartet) is characteristic of an ethyl group, commonly an ethyl ester (—$OCH_{2}CH_{3}$). The $CH_{3}$ appears as a triplet (split by 2 adjacent H) and the $CH_{2}$ appears as a quartet (split by 3 adjacent H).',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  },
  {
    question: 'Which of the following is the most stable carbocation?',
    options: ['Methyl cation $(CH_{3}^{+})$', 'Primary carbocation', 'Secondary carbocation', 'Tertiary carbocation'],
    correctAnswer: 3,
    explanation: 'Carbocation stability increases with substitution due to hyperconjugation and inductive electron donation from alkyl groups. Tertiary > secondary > primary > methyl.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'Zaitsev\'s rule predicts that in an elimination reaction, the major product is:',
    options: ['The less substituted alkene', 'The more substituted alkene', 'The Hofmann product', 'The anti-Markovnikov product'],
    correctAnswer: 1,
    explanation: 'Zaitsev\'s rule states that elimination reactions favor formation of the more substituted (more stable) alkene as the major product.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'A Grignard reagent (RMgBr) reacts with a ketone followed by acid workup to produce:',
    options: ['A primary alcohol', 'A secondary alcohol', 'A tertiary alcohol', 'An aldehyde'],
    correctAnswer: 2,
    explanation: 'Grignard reagents add to ketones (which already have two C substituents on the carbonyl carbon), producing a tertiary alcohol after protonation.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  },
  {
    question: 'Which amino acid has an aromatic R-group that absorbs UV light at 280 nm?',
    options: ['Alanine', 'Tryptophan', 'Glycine', 'Leucine'],
    correctAnswer: 1,
    explanation: 'Tryptophan (along with tyrosine and phenylalanine) has an aromatic side chain. Tryptophan\'s indole ring absorbs most strongly at 280 nm, which is used for protein quantification.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  },
  {
    question: 'What type of reaction converts a carboxylic acid and an alcohol into an ester?',
    options: ['Aldol condensation', 'Fischer esterification', 'Claisen rearrangement', 'Diels-Alder reaction'],
    correctAnswer: 1,
    explanation: 'Fischer esterification is the acid-catalyzed condensation of a carboxylic acid with an alcohol to form an ester and water. It is a reversible equilibrium process.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  },
  {
    question: 'The anomeric carbon in glucose is carbon:',
    options: ['C-1', 'C-2', 'C-4', 'C-6'],
    correctAnswer: 0,
    explanation: 'The anomeric carbon is the carbonyl carbon (C-1 in glucose) that becomes a new stereocenter during cyclization. The α and β forms differ in the configuration at C-1.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  },
  {
    question: 'Which reaction involves anti-periplanar geometry of the leaving group and the β-hydrogen?',
    options: ['SN1', 'SN2', 'E1', 'E2'],
    correctAnswer: 3,
    explanation: 'E2 elimination requires the leaving group and the β-hydrogen to be anti-periplanar (180° dihedral angle) for optimal orbital overlap in the concerted mechanism.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'Markovnikov\'s rule states that in HX addition to an alkene:',
    options: ['H adds to the more substituted carbon', 'H adds to the less substituted carbon', 'X adds to the less substituted carbon', 'The reaction produces the anti-Markovnikov product'],
    correctAnswer: 1,
    explanation: 'Markovnikov\'s rule: the hydrogen adds to the carbon with more hydrogens (less substituted), and X adds to the more substituted carbon, forming the more stable carbocation intermediate.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  },
  {
    question: 'Which reagent selectively oxidizes a primary alcohol to an aldehyde without further oxidation to a carboxylic acid?',
    options: ['$KMnO_{4}$', 'Jones reagent $(CrO_{3}/H_{2}SO_{4})$', 'PCC (pyridinium chlorochromate)', '$Na_{2}Cr_{2}O_{7}$'],
    correctAnswer: 2,
    explanation: 'PCC is a mild oxidant that oxidizes primary alcohols to aldehydes and stops there. Strong oxidants like $KMnO_{4}$ and Jones reagent would further oxidize the aldehyde to a carboxylic acid.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  },
  {
    question: 'A compound with molecular formula $C_{5}H_{10}O$ has no IR absorption near 1700 $cm^{-1}$. The compound is most likely:',
    options: ['A ketone', 'An aldehyde', 'A cyclic ether', 'A carboxylic acid'],
    correctAnswer: 2,
    explanation: '$C_{5}H_{10}O$ has one degree of unsaturation. Without a carbonyl peak (~1700 $cm^{-1}$), it cannot be a ketone, aldehyde, or acid. A cyclic ether (like tetrahydropyran) accounts for the degree of unsaturation and lacks a carbonyl.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  },
  {
    question: 'Which functional group is most commonly found in aldehydes and ketones?',
    options: ['Carboxyl', 'Carbonyl', 'Hydroxyl', 'Amide'],
    correctAnswer: 1,
    explanation: 'Aldehydes and ketones are defined by the carbonyl group (C=O). In aldehydes, the carbonyl carbon is at the end of the chain; in ketones, it is internal.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  },
  {
    question: 'How many stereoisomers are possible for a molecule with two chiral centers and no meso form?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 2,
    explanation: 'Maximum stereoisomers for n chiral centers is $2^{n}$. For n = 2, that gives 4 stereoisomers, assuming no symmetry that creates a meso reduction.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  },
  {
    question: 'Which condition most strongly favors E2 over SN2 for a secondary alkyl halide?',
    options: ['Strong bulky base and heat', 'Weak nucleophile in polar protic solvent', 'Low temperature with strong nucleophile', 'Silver ion catalyst in water'],
    correctAnswer: 0,
    explanation: 'Bulky strong bases and higher temperature promote elimination, especially E2, by abstracting beta-hydrogens while hindering backside SN2 attack.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'Reduction of an aldehyde with NaBH4 gives which product class?',
    options: ['Alkane', 'Primary alcohol', 'Secondary alcohol', 'Carboxylic acid'],
    correctAnswer: 1,
    explanation: 'NaBH4 is a reducing agent that converts aldehydes to primary alcohols and ketones to secondary alcohols under standard conditions.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  },
  {
    question: 'In mass spectrometry, the molecular ion peak (M+) most directly indicates:',
    options: ['Number of functional groups', 'Molecular mass of the compound', 'Number of stereocenters', 'Boiling point'],
    correctAnswer: 1,
    explanation: 'The molecular ion peak corresponds to the intact molecule after losing one electron, so its m/z usually reflects the molecular mass of the analyte.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  },
  {
    question: 'A chiral molecule with two stereocenters has observed optical rotation of 0° in solution. Which explanation is most likely?',
    options: ['The molecule is achiral', 'It is a meso compound or racemic mixture', 'It must be all R', 'It cannot contain stereocenters'],
    correctAnswer: 1,
    explanation: 'Zero rotation can result from internal symmetry (meso) or equal amounts of enantiomers (racemate), despite stereocenters being present.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-organic-chemistry-stereochemistry-mcat',
  },
  {
    question: 'Which substrate gives the fastest SN1 solvolysis in water?',
    options: ['1-bromobutane', '2-bromobutane', 'tert-butyl bromide', 'ethyl bromide'],
    correctAnswer: 2,
    explanation: 'SN1 rate depends on carbocation stability: tertiary carbocations form fastest. tert-Butyl bromide forms a tertiary carbocation most readily.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  },
  {
    question: 'Treatment of an ester with excess LiAlH4 followed by water produces:',
    options: ['A ketone only', 'A tertiary alcohol', 'Two alcohol products', 'A carboxylic acid'],
    correctAnswer: 2,
    explanation: 'LiAlH4 reduces esters to two alcohol fragments: the acyl portion to a primary alcohol and the alkoxy leaving group to an alcohol.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  },
  {
    question: 'A compound has IR peaks near 2250 $cm^{-1}$ and no broad peak near 3300 $cm^{-1}$. Which functional group is most consistent?',
    options: ['Terminal alkyne', 'Nitrile', 'Alcohol', 'Carboxylic acid'],
    correctAnswer: 1,
    explanation: 'A sharp absorption near 2250 $cm^{-1}$ with no broad O-H/N-H stretch strongly suggests a nitrile (C≡N).',
    difficulty: 'hard',
    subtopicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  },
]

const ORGANIC_SUBTOPICS = new Set([
  'mcat-organic-chemistry-functional-groups-mcat',
  'mcat-organic-chemistry-stereochemistry-mcat',
  'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  'mcat-organic-chemistry-carbonyls-mcat',
  'mcat-organic-chemistry-spectroscopy-mcat',
])

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const filteredPool = ORGANIC_SUBTOPICS.has(topicSlug ?? '')
    ? questionPool.filter((q) => q.subtopicSlug === topicSlug)
    : questionPool
  const sourcePool = filteredPool.length > 0 ? filteredPool : questionPool
  const shuffled = [...sourcePool].sort(() => Math.random() - 0.5)

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `organic-chemistry-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    difficulty: q.difficulty,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-organic-chemistry',
  }))
}
