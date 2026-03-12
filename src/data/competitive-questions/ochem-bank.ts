// Organic Chemistry question bank for competitive mode

export interface OChemQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: OChemQuestion[] = [
  // --- EASY ---
  {
    id: 1,
    question: 'What type of bond is found in alkanes?',
    options: ['Single bonds ($\\sigma$ bonds only)', 'Double bonds', 'Triple bonds', 'Ionic bonds'],
    correctAnswer: 0,
    explanation: 'Alkanes contain only C-C and C-H single (sigma) bonds and are fully saturated.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the general formula for an alkane?',
    options: ['$C_nH_{2n+2}$', '$C_nH_{2n}$', '$C_nH_{2n-2}$', '$C_nH_n$'],
    correctAnswer: 0,
    explanation: 'Alkanes follow the formula $C_nH_{2n+2}$ (e.g., methane $CH_4$, ethane $C_2H_6$).',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What functional group defines an alcohol?',
    options: ['$-OH$ (hydroxyl)', '$-COOH$ (carboxyl)', '$-NH_2$ (amino)', '$-CHO$ (aldehyde)'],
    correctAnswer: 0,
    explanation: 'Alcohols contain a hydroxyl group ($-OH$) bonded to a carbon atom.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'How many carbons are in butane?',
    options: ['4', '3', '5', '2'],
    correctAnswer: 0,
    explanation: 'The prefix "but-" means 4 carbons (meth=1, eth=2, prop=3, but=4).',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'What is the hybridization of carbon in ethene ($C_2H_4$)?',
    options: ['$sp^2$', '$sp^3$', '$sp$', '$sp^3d$'],
    correctAnswer: 0,
    explanation: 'Each carbon in ethene has a double bond (1 sigma + 1 pi), requiring $sp^2$ hybridization.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'What is an isomer?',
    options: ['A molecule with the same formula but different structure', 'A molecule with different formula', 'A charged molecule', 'A radioactive isotope'],
    correctAnswer: 0,
    explanation: 'Isomers share the same molecular formula but have different structural arrangements.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Which functional group is present in carboxylic acids?',
    options: ['$-COOH$', '$-OH$', '$-C=O$', '$-NH_2$'],
    correctAnswer: 0,
    explanation: 'Carboxylic acids contain a carboxyl group ($-COOH$): a carbonyl bonded to a hydroxyl.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What type of reaction adds atoms across a double bond?',
    options: ['Addition reaction', 'Elimination reaction', 'Substitution reaction', 'Rearrangement'],
    correctAnswer: 0,
    explanation: 'Addition reactions add atoms to the carbons of a double or triple bond, breaking the pi bond.',
    difficulty: 'easy',
  },
  // --- MEDIUM ---
  {
    id: 9,
    question: 'In an $S_N2$ reaction, the rate depends on:',
    options: ['Both the nucleophile and substrate concentration', 'Only the substrate concentration', 'Only the nucleophile concentration', 'Neither concentration'],
    correctAnswer: 0,
    explanation: '$S_N2$ is bimolecular: $rate = k[substrate][nucleophile]$. Both concentrations affect the rate.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'What is Markovnikov\'s rule?',
    options: ['The hydrogen adds to the carbon with more H atoms already', 'The hydrogen adds to the more substituted carbon', 'HBr always adds anti-Markovnikov', 'Only applies to alkynes'],
    correctAnswer: 0,
    explanation: 'Markovnikov\'s rule: in HX addition to alkenes, H goes to the carbon with more hydrogens (forming the more stable carbocation).',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Which carbon is most substituted in a tertiary carbocation?',
    options: ['Bonded to 3 other carbon atoms', 'Bonded to 3 hydrogen atoms', 'Bonded to 1 carbon atom', 'Bonded to 2 hydrogens'],
    correctAnswer: 0,
    explanation: 'Tertiary (3°) means the carbon bearing the charge is bonded to 3 other carbons. More substituted = more stable.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'What is the product of an alkene reacting with $H_2$ in the presence of Pd/C?',
    options: ['An alkane (saturated)', 'An alcohol', 'A ketone', 'An ether'],
    correctAnswer: 0,
    explanation: 'Catalytic hydrogenation ($H_2$/Pd) adds $H_2$ across the double bond, producing an alkane.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'What is the relationship between enantiomers?',
    options: ['Non-superimposable mirror images', 'Same compound', 'Structural isomers', 'Geometric isomers'],
    correctAnswer: 0,
    explanation: 'Enantiomers are stereoisomers that are mirror images of each other but cannot be superimposed.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Which reagent converts a primary alcohol to an aldehyde without further oxidation?',
    options: ['PCC (pyridinium chlorochromate)', '$KMnO_4$', '$CrO_3/H_2SO_4$ (Jones)', '$H_2O_2$'],
    correctAnswer: 0,
    explanation: 'PCC is a mild oxidant that selectively oxidizes primary alcohols to aldehydes without over-oxidizing to carboxylic acids.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'What determines whether an $S_N1$ or $S_N2$ mechanism is favored?',
    options: ['Substrate structure and nucleophile strength', 'Temperature only', 'Solvent color', 'Pressure'],
    correctAnswer: 0,
    explanation: '$S_N2$ favors primary substrates + strong nucleophiles; $S_N1$ favors tertiary substrates + weak nucleophiles.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'What is the IUPAC name for $CH_3CH_2CH_2OH$?',
    options: ['1-propanol', '2-propanol', 'Propane', 'Propanal'],
    correctAnswer: 0,
    explanation: 'A 3-carbon chain with $-OH$ on carbon 1 is 1-propanol.',
    difficulty: 'medium',
  },
  // --- HARD ---
  {
    id: 17,
    question: 'In an E2 elimination, what is the geometric requirement?',
    options: ['Anti-periplanar arrangement of H and leaving group', 'Syn-periplanar arrangement', 'No geometric requirement', 'Carbocation intermediate required'],
    correctAnswer: 0,
    explanation: 'E2 requires anti-periplanar (180°) orientation between the H and leaving group for concerted elimination.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'What is the Zaitsev rule in elimination reactions?',
    options: ['The more substituted alkene is the major product', 'The less substituted alkene is the major product', 'Both alkenes form equally', 'Only terminal alkenes form'],
    correctAnswer: 0,
    explanation: 'Zaitsev\'s rule: the major product is the most substituted (most stable) alkene.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'What is the Diels-Alder reaction?',
    options: ['[4+2] cycloaddition between a diene and dienophile', '[2+2] cycloaddition', 'An electrophilic addition', 'A radical substitution'],
    correctAnswer: 0,
    explanation: 'The Diels-Alder reaction is a pericyclic [4+2] cycloaddition forming a six-membered ring.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'What does a compound with an $R$ configuration mean?',
    options: ['Substituents decrease in priority in clockwise direction', 'The molecule rotates plane-polarized light to the right', 'It is always dextrorotatory', 'It has a positive specific rotation'],
    correctAnswer: 0,
    explanation: '$R$ (rectus) means when lowest priority is pointing away, priorities 1→2→3 go clockwise.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'What is a meso compound?',
    options: ['Has stereocenters but an internal mirror plane, making it achiral', 'A compound with no stereocenters', 'Always optically active', 'A racemic mixture'],
    correctAnswer: 0,
    explanation: 'A meso compound has stereocenters but is achiral due to an internal plane of symmetry.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'In aromatic electrophilic substitution, which group is an ortho/para director?',
    options: ['$-OH$', '$-NO_2$', '$-COOH$', '$-CN$'],
    correctAnswer: 0,
    explanation: '$-OH$ is an electron-donating group (activating, ortho/para director) due to lone pair donation into the ring.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'What is the Grignard reaction product of $RMgBr + \\text{formaldehyde}$?',
    options: ['A primary alcohol', 'A secondary alcohol', 'A tertiary alcohol', 'A ketone'],
    correctAnswer: 0,
    explanation: 'Grignard + formaldehyde ($HCHO$) → primary alcohol ($RCH_2OH$) after acid workup.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'What is the difference between kinetic and thermodynamic control?',
    options: ['Kinetic favors faster product; thermodynamic favors more stable product', 'They are the same', 'Kinetic favors more stable product', 'Thermodynamic favors faster product'],
    correctAnswer: 0,
    explanation: 'Kinetic control (low T, short time) gives the faster-forming product. Thermodynamic control (high T, long time) gives the more stable product.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'What type of strain is present in cyclohexane\'s boat conformation?',
    options: ['Flagpole (steric) interactions and torsional strain', 'Angle strain only', 'No strain', 'Ring strain only'],
    correctAnswer: 0,
    explanation: 'The boat conformation of cyclohexane has flagpole 1,4-diaxial steric interactions and eclipsing torsional strain.',
    difficulty: 'hard',
  },
]

export function getOChemQuestions(count: number = 10): OChemQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
