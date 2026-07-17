/**
 * Entrance Quiz — Organic Chemistry (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'moc-ent-1a', question: 'Which functional group is characteristic of alcohols?', options: ['$-COOH$', '$-OH$', '$-NH_2$', '$-CHO$'], correctIndex: 1, explanation: 'Alcohols contain the hydroxyl group $-OH$ bonded to a carbon atom. Examples: ethanol ($CH_3CH_2OH$), methanol ($CH_3OH$).', partNumber: 1, partTitle: 'Functional Groups' },
  { id: 'moc-ent-1b', question: 'Carboxylic acids contain which functional group?', options: ['$-OH$ only', '$-CHO$ (aldehyde)', '$-COOH$ (carboxyl)', '$-CO-$ (ketone)'], correctIndex: 2, explanation: 'Carboxylic acids contain the $-COOH$ group: a carbonyl ($C=O$) bonded to a hydroxyl ($-OH$). They are weak acids with $pK_a \\approx 4-5$.', partNumber: 1, partTitle: 'Functional Groups' },
  { id: 'moc-ent-2a', question: 'The IUPAC name of $CH_3CH_2CH_2OH$ is:', options: ['Ethanol', '1-Propanol', '2-Propanol', 'Butanol'], correctIndex: 1, explanation: 'Three carbons (prop-) with an $-OH$ on carbon 1 = 1-propanol (or n-propanol). 2-Propanol is isopropyl alcohol ($CH_3CHOHCH_3$).', partNumber: 2, partTitle: 'IUPAC Nomenclature' },
  { id: 'moc-ent-2b', question: 'Which suffix indicates an alkene in IUPAC nomenclature?', options: ['-ane', '-yne', '-ene', '-ol'], correctIndex: 2, explanation: 'Alkenes contain a C=C double bond and use the suffix "-ene" (e.g., ethene, propene, but-1-ene).', partNumber: 2, partTitle: 'IUPAC Nomenclature' },
  { id: 'moc-ent-3a', question: 'Enantiomers are stereoisomers that:', options: ['Have the same connectivity and same spatial arrangement', 'Are non-superimposable mirror images of each other', 'Differ only in the position of a double bond', 'Are identical in all physical properties including optical rotation'], correctIndex: 1, explanation: 'Enantiomers are non-superimposable mirror images, like left and right hands. They have identical physical properties except optical rotation (rotate plane-polarized light equally but in opposite directions).', partNumber: 3, partTitle: 'Stereochemistry' },
  { id: 'moc-ent-3b', question: 'A chiral center (stereocenter) in an organic molecule is a carbon bonded to:', options: ['Two identical groups and two different groups', 'Four identical groups', 'Four different groups', 'At least one hydrogen atom'], correctIndex: 2, explanation: 'A stereocenter (chiral carbon) has four different substituents, making the carbon asymmetric and giving rise to enantiomers.', partNumber: 3, partTitle: 'Stereochemistry' },
  { id: 'moc-ent-4a', question: 'In an $S_N2$ reaction, the nucleophile attacks the substrate:', options: ['From the same side as the leaving group (retention of configuration)', 'From the opposite side of the leaving group (inversion of configuration)', 'After the leaving group departs', 'At a carbon adjacent to the leaving group'], correctIndex: 1, explanation: '$S_N2$ is a concerted backside attack — the nucleophile approaches 180° from the leaving group, resulting in Walden inversion of configuration.', partNumber: 4, partTitle: 'Nucleophilic Substitution' },
  { id: 'moc-ent-4b', question: '$S_N1$ reactions are favored by:', options: ['Primary alkyl halides and strong nucleophiles', 'Tertiary alkyl halides and polar protic solvents', 'Primary alkyl halides and polar aprotic solvents', 'Methyl halides and weak nucleophiles'], correctIndex: 1, explanation: '$S_N1$ involves a carbocation intermediate. Tertiary substrates form stable 3° carbocations; polar protic solvents stabilize the ionic transition state.', partNumber: 4, partTitle: 'Nucleophilic Substitution' },
  { id: 'moc-ent-5a', question: 'A nucleophile attacks the carbonyl carbon of an aldehyde or ketone. This is because the carbonyl carbon is:', options: ['Nucleophilic due to lone pairs', 'Electron-rich due to resonance', 'Electrophilic due to the electronegative oxygen pulling electron density away', 'A radical center'], correctIndex: 2, explanation: 'The $C=O$ bond is polarized: $\\delta^+$ on C and $\\delta^-$ on O. The electrophilic carbon is attacked by nucleophiles in addition reactions.', partNumber: 5, partTitle: 'Carbonyl Chemistry' },
  { id: 'moc-ent-5b', question: 'The product of reacting an aldehyde with a primary amine is:', options: ['An alcohol', 'A carboxylic acid', 'An imine (Schiff base)', 'An amide'], correctIndex: 2, explanation: 'Aldehydes react with primary amines ($R-NH_2$) via nucleophilic addition-elimination to form an imine ($R-CH=NR\'$, Schiff base) plus water.', partNumber: 5, partTitle: 'Carbonyl Chemistry' },
  { id: 'moc-ent-6a', question: 'Which reagent converts an alcohol to an alkyl halide via $S_N2$?', options: ['$NaOH$', '$SOCl_2$ (thionyl chloride)', '$KMnO_4$', '$H_2/Pd$'], correctIndex: 1, explanation: 'Thionyl chloride ($SOCl_2$) converts alcohols to alkyl chlorides. The reaction proceeds with inversion of configuration via an $S_N2$ mechanism.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'moc-ent-6b', question: 'A compound has the molecular formula $C_4H_8O$ and shows a strong IR absorption at ~1715 $cm^{-1}$. It is most likely a:', options: ['Primary alcohol', 'Ether', 'Aldehyde or ketone (carbonyl compound)', 'Carboxylic acid'], correctIndex: 2, explanation: 'A strong IR absorption at ~1715 $cm^{-1}$ is the signature of a $C=O$ (carbonyl) stretch. With no broad O-H stretch, it is a ketone or aldehyde.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'moc-ent-7a', question: 'In Fischer projections, horizontal lines represent bonds coming:', options: ['Behind the plane of the paper', 'Toward the viewer (out of the plane)', 'Along the carbon chain backbone', 'In the plane of the paper only'], correctIndex: 1, explanation: 'In Fischer projections, horizontal bonds project toward the viewer (wedge bonds), while vertical bonds project away from the viewer (dash bonds).', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'moc-ent-7b', question: 'Saponification is the base-catalyzed hydrolysis of an ester to form:', options: ['An alcohol and a carboxylic acid', 'A carboxylate salt and an alcohol', 'Two alcohols', 'A ketone and water'], correctIndex: 1, explanation: 'Saponification: ester + NaOH → carboxylate salt (soap) + alcohol. This is the basis for soap-making from triglycerides (fats).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Functional Groups' },
    { partNumber: 2, partTitle: 'IUPAC Nomenclature' },
    { partNumber: 3, partTitle: 'Stereochemistry' },
    { partNumber: 4, partTitle: 'Nucleophilic Substitution' },
    { partNumber: 5, partTitle: 'Carbonyl Chemistry' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
