/**
 * Entrance Quiz — Organic Chemistry (MCAT)
 * 15 questions · 7 parts (3 / 2 / 2 / 2 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Functional Groups & Stereochemistry'
const P2 = 'SN1, SN2, E1, E2 Reactions'
const P3 = 'Carbonyl Chemistry'
const P4 = 'Carboxylic Acid Derivatives'
const P5 = 'Aromatic Chemistry & Lab Techniques'
const P6 = 'Spectroscopy (NMR, IR, Mass Spec)'
const P7 = 'Review & MCAT Strategy'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Functional Groups & Stereochemistry
  { id: 'moc-ent-1a', question: 'Which functional group defines an alcohol?', options: ['$-\\text{COOH}$', '$-\\text{OH}$', '$-\\text{NH}_2$', '$-\\text{CHO}$'], correctIndex: 1, explanation: 'An alcohol carries a hydroxyl group, $-\\text{OH}$, on a saturated carbon, as in ethanol. $-\\text{COOH}$ is a carboxylic acid, $-\\text{NH}_2$ an amine and $-\\text{CHO}$ an aldehyde.', partNumber: 1, partTitle: P1 },
  { id: 'moc-ent-1b', question: 'Enantiomers are stereoisomers that:', options: ['Differ in connectivity but share a formula', 'Interconvert by rotation about single bonds', 'Are mirror images that cannot superimpose', 'Differ at some but not all chiral centers'], correctIndex: 2, explanation: 'Enantiomers are non-superimposable mirror images, alike in every physical property except the direction they rotate plane-polarized light. Differing in connectivity makes constitutional isomers, interconverting by bond rotation makes conformers, and differing at only some chiral centers makes diastereomers.', partNumber: 1, partTitle: P1 },
  { id: 'moc-ent-1c', question: 'A chiral center in an organic molecule is a carbon bonded to:', options: ['Two pairs of identical groups', 'Three identical groups and one H', 'At least one double-bonded atom', 'Four different atoms or groups'], correctIndex: 3, explanation: 'A carbon with four different substituents has no internal mirror plane, so it and its mirror image cannot be superimposed: that is a chiral center, and $n$ of them allow up to $2^n$ stereoisomers. Any repeated substituent, or a double bond (which leaves only three groups on the carbon), makes the carbon achiral.', partNumber: 1, partTitle: P1 },

  // Part 2 — SN1, SN2, E1, E2 Reactions
  { id: 'moc-ent-2a', question: 'In an $S_N2$ reaction, the nucleophile attacks the carbon:', options: ['From the same side as the leaving group', 'From the side opposite the leaving group', 'Only after the leaving group has left', 'At the carbon next to the leaving group'], correctIndex: 1, explanation: '$S_N2$ is one concerted step: the nucleophile attacks from the back side, 180° from the leaving group, so a chiral center is inverted. Attack after the leaving group departs describes $S_N1$, which goes through a planar carbocation, and removing a group from the neighboring carbon is elimination, not substitution.', partNumber: 2, partTitle: P2 },
  { id: 'moc-ent-2b', question: '$S_N1$ reactions are favored by:', options: ['Primary substrates and strong nucleophiles', 'Primary substrates and polar aprotic solvents', 'Methyl substrates and bulky strong bases', 'Tertiary substrates and polar protic solvents'], correctIndex: 3, explanation: 'The rate-determining step of $S_N1$ is loss of the leaving group to form a carbocation, so it needs a substrate that gives a stable (tertiary) carbocation and a polar protic solvent that stabilizes the ions. Primary or methyl substrates with strong nucleophiles in aprotic solvents favor $S_N2$, and bulky strong bases favor E2.', partNumber: 2, partTitle: P2 },

  // Part 3 — Carbonyl Chemistry
  { id: 'moc-ent-3a', question: 'Nucleophiles attack the carbonyl carbon of an aldehyde or ketone because that carbon is:', options: ['Electron-rich, from the oxygen lone pairs', 'Electron-poor, as oxygen pulls density away', 'A radical center with one unpaired electron', 'Negatively charged in the resonance hybrid'], correctIndex: 1, explanation: 'Oxygen is more electronegative than carbon, so the $\\text{C=O}$ bond is polarized with $\\delta^+$ on carbon and $\\delta^-$ on oxygen. That electron-poor carbon is the electrophile nucleophiles attack. The lone pairs and the partial negative charge sit on oxygen, not on carbon.', partNumber: 3, partTitle: P3 },
  { id: 'moc-ent-3b', question: 'Reducing a ketone with $\\text{NaBH}_4$ gives a:', options: ['Secondary alcohol', 'Primary alcohol', 'Carboxylic acid', 'Tertiary alcohol'], correctIndex: 0, explanation: 'Hydride adds to the carbonyl carbon, and the carbonyl carbon of a ketone already carries two carbon groups, so the product is a secondary alcohol. Aldehydes reduce to primary alcohols, a carboxylic acid would come from oxidation, and a tertiary alcohol needs a third carbon group, which hydride cannot supply.', partNumber: 3, partTitle: P3 },

  // Part 4 — Carboxylic Acid Derivatives
  { id: 'moc-ent-4a', question: 'Which ordering of reactivity toward nucleophilic acyl substitution is correct?', options: ['Amide > ester > anhydride > acid chloride', 'Ester > acid chloride > amide > anhydride', 'Acid chloride > anhydride > ester > amide', 'Anhydride > amide > acid chloride > ester'], correctIndex: 2, explanation: 'Reactivity follows leaving-group quality: chloride is an excellent leaving group, a carboxylate is good, an alkoxide is fair, and an amide ion is very poor. Amide resonance also makes the amide carbonyl the least electrophilic, which is why peptide bonds are so stable.', partNumber: 4, partTitle: P4 },
  { id: 'moc-ent-4b', question: 'An acid chloride is treated with a primary amine ($\\text{RNH}_2$). The main organic product is:', options: ['An ester', 'An anhydride', 'A ketone', 'An amide'], correctIndex: 3, explanation: 'The amine nitrogen attacks the carbonyl carbon, the tetrahedral intermediate collapses, and chloride leaves, giving an amide. The reaction runs downhill because a more reactive derivative becomes a less reactive one. An ester would need an alcohol as the nucleophile, and an anhydride a carboxylate.', partNumber: 4, partTitle: P4 },

  // Part 5 — Aromatic Chemistry & Lab Techniques
  { id: 'moc-ent-5a', question: 'Bromination of phenol ($\\text{C}_6\\text{H}_5\\text{OH}$) by electrophilic aromatic substitution places bromine mainly at the:', options: ['Ortho and para positions', 'Meta position only', 'Ipso carbon bearing the OH', 'Meta and para positions'], correctIndex: 0, explanation: 'The $-\\text{OH}$ group donates a lone pair into the ring by resonance, which stabilizes the sigma complex for attack at the ortho and para positions, so it is an activating ortho/para director. Meta direction belongs to deactivating groups such as $-\\text{NO}_2$.', partNumber: 5, partTitle: P5 },
  { id: 'moc-ent-5b', question: 'A mixture of benzoic acid and naphthalene in ether is shaken with aqueous NaOH. After the layers separate, the benzoic acid is found:', options: ['In the ether layer, as neutral benzoic acid', 'In the water layer, as the benzoate anion', 'In both layers, split evenly between them', 'As a solid that settles at the interface'], correctIndex: 1, explanation: 'Extraction separates by solubility. NaOH deprotonates the carboxylic acid to benzoate, an ion that dissolves in water rather than ether, while neutral naphthalene stays in the ether layer. Acidifying the water layer afterward would recover the benzoic acid.', partNumber: 5, partTitle: P5 },

  // Part 6 — Spectroscopy (NMR, IR, Mass Spec)
  { id: 'moc-ent-6a', question: 'A compound with formula $\\text{C}_4\\text{H}_8\\text{O}$ shows a strong, sharp IR absorption near 1715 cm$^{-1}$ and no broad band above 3000 cm$^{-1}$. It is most likely:', options: ['A primary alcohol', 'A cyclic ether', 'A ketone or aldehyde', 'A carboxylic acid'], correctIndex: 2, explanation: 'A strong, sharp band near 1715 cm$^{-1}$ is the $\\text{C=O}$ stretch, and with no broad O-H band there is no alcohol or carboxylic acid. An ether has no carbonyl, so a carbonyl compound such as butanone or butanal fits $\\text{C}_4\\text{H}_8\\text{O}$.', partNumber: 6, partTitle: P6 },
  { id: 'moc-ent-6b', question: 'In $^1$H NMR, a signal near 9.5 ppm most likely comes from:', options: ['An alkyl C-H proton', 'An aromatic ring proton', 'A proton next to an ether O', 'An aldehyde C-H proton'], correctIndex: 3, explanation: 'The aldehyde proton is strongly deshielded by the carbonyl and appears at about 9-10 ppm. Aromatic protons fall at 6.5-8 ppm, protons on carbons next to O or N at 3-4 ppm, and alkyl protons at 0.5-2 ppm.', partNumber: 6, partTitle: P6 },

  // Part 7 — Review & MCAT Strategy
  { id: 'moc-ent-7a', question: 'Which amino acid has a nonpolar side chain?', options: ['Leucine', 'Serine', 'Lysine', 'Aspartate'], correctIndex: 0, explanation: "Leucine's side chain is a branched hydrocarbon, so it is nonpolar and tends to sit in a protein's interior. Serine is polar uncharged (a hydroxyl), lysine is basic and positive at pH 7, and aspartate is acidic and negative at pH 7.", partNumber: 7, partTitle: P7 },
  { id: 'moc-ent-7b', question: 'An ionizable group has a p$K_a$ of 9.0. In a solution at pH 7.0, the group is:', options: ['Mostly deprotonated', 'Exactly half protonated', 'Mostly protonated', 'Fully neutral at any pH'], correctIndex: 2, explanation: 'When the pH is below the p$K_a$, the protonated form dominates; here the pH is 2 units below, so about 99% of the group is protonated. Half protonation happens only when pH equals p$K_a$, and whether the protonated form is charged depends on the group (an amine is $+1$, a carboxylic acid neutral).', partNumber: 7, partTitle: P7 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
