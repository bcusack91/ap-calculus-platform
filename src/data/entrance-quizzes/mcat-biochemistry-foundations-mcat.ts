/**
 * Entrance Quiz — Biochemistry Foundations (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mbf-ent-1a', question: 'At physiological pH (~7.4), which amino acid side chain would be positively charged?', options: ['Aspartate (pKa ~3.9)', 'Glutamate (pKa ~4.1)', 'Lysine (pKa ~10.5)', 'Tyrosine (pKa ~10.1)'], correctIndex: 2, explanation: "Lysine's ε-amino group (pKa ~10.5) is above physiological pH, so it remains protonated ($-NH_3^+$) at pH 7.4 — positively charged.", partNumber: 1, partTitle: 'Amino Acids & Proteins' },
  { id: 'mbf-ent-1b', question: 'The peptide bond between amino acids is formed between:', options: ['The amine of one and the amine of another', 'The carboxyl of one and the amine of another (condensation reaction)', 'Two carboxyl groups', 'The R groups of adjacent amino acids'], correctIndex: 1, explanation: 'Peptide bonds form via condensation: the carboxyl group ($-COOH$) of one amino acid reacts with the amino group ($-NH_2$) of another, releasing water.', partNumber: 1, partTitle: 'Amino Acids & Proteins' },
  { id: 'mbf-ent-2a', question: 'In Michaelis-Menten kinetics, $V_{max}$ is the:', options: ['Substrate concentration at half-maximal velocity', 'Maximum reaction velocity when enzyme is saturated with substrate', 'Rate constant for enzyme-substrate binding', 'Inhibition constant'], correctIndex: 1, explanation: '$V_{max}$ is reached when all enzyme active sites are saturated with substrate. It reflects the total amount of enzyme and the catalytic rate constant $k_{cat}$.', partNumber: 2, partTitle: 'Enzyme Kinetics' },
  { id: 'mbf-ent-2b', question: 'Competitive inhibition of an enzyme:', options: ['Decreases $V_{max}$ and increases $K_m$', 'Decreases $V_{max}$ without changing $K_m$', 'Does not change $V_{max}$ but increases apparent $K_m$', 'Irreversibly blocks the active site'], correctIndex: 2, explanation: 'Competitive inhibitors compete with substrate for the active site, raising apparent $K_m$ (less affinity), but $V_{max}$ is unchanged (excess substrate can overcome inhibition).', partNumber: 2, partTitle: 'Enzyme Kinetics' },
  { id: 'mbf-ent-3a', question: 'Glycolysis occurs in the cytoplasm and converts one glucose molecule into:', options: ['1 pyruvate + 2 ATP', '2 pyruvate + 2 ATP (net) + 2 NADH', '2 acetyl-CoA + 4 ATP', '2 lactate + 4 ATP'], correctIndex: 1, explanation: 'Glycolysis: glucose → 2 pyruvate. Net yield: 2 ATP (4 produced, 2 used) + 2 NADH + 2 pyruvate, all in the cytoplasm without oxygen.', partNumber: 3, partTitle: 'Carbohydrate Metabolism' },
  { id: 'mbf-ent-3b', question: 'The Krebs cycle (citric acid cycle) takes place in the:', options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Nucleus'], correctIndex: 1, explanation: 'The Krebs cycle occurs in the mitochondrial matrix. Acetyl-CoA enters and is oxidized to CO₂, producing NADH, FADH₂, and GTP per turn.', partNumber: 3, partTitle: 'Carbohydrate Metabolism' },
  { id: 'mbf-ent-4a', question: 'Beta-oxidation of fatty acids primarily produces:', options: ['Glucose and glycerol', 'Acetyl-CoA, NADH, and FADH₂', 'Amino acids and ATP', 'Glycogen and urea'], correctIndex: 1, explanation: 'Each round of β-oxidation removes two carbons from a fatty acid as acetyl-CoA, plus generating one NADH and one FADH₂. These feed into the Krebs cycle and ETC.', partNumber: 4, partTitle: 'Lipid Metabolism' },
  { id: 'mbf-ent-4b', question: 'Fatty acid synthesis (lipogenesis) occurs primarily in the:', options: ['Mitochondrial matrix', 'Cytoplasm (cytosol)', 'Nucleus', 'Smooth ER only'], correctIndex: 1, explanation: 'Fatty acid synthesis occurs in the cytosol and uses acetyl-CoA (transported out of mitochondria as citrate), NADPH, and the enzyme fatty acid synthase (FAS).', partNumber: 4, partTitle: 'Lipid Metabolism' },
  { id: 'mbf-ent-5a', question: 'The electron transport chain (ETC) in oxidative phosphorylation is located in the:', options: ['Cytoplasm', 'Outer mitochondrial membrane', 'Inner mitochondrial membrane', 'Mitochondrial matrix only'], correctIndex: 2, explanation: 'The ETC complexes (I–IV) are embedded in the inner mitochondrial membrane. They pump protons to create the electrochemical gradient driving ATP synthase.', partNumber: 5, partTitle: 'Bioenergetics' },
  { id: 'mbf-ent-5b', question: 'The complete oxidation of one glucose molecule via aerobic respiration yields approximately how many ATP?', options: ['2 ATP', '8 ATP', '30–32 ATP', '100 ATP'], correctIndex: 2, explanation: 'Aerobic respiration: glycolysis (2 ATP net) + Krebs cycle (2 GTP) + ETC (~26–28 ATP from NADH/FADH₂) = ~30–32 ATP total. The ETC makes the majority.', partNumber: 5, partTitle: 'Bioenergetics' },
  { id: 'mbf-ent-6a', question: 'An enzyme has $K_m = 2$ mM and $V_{max} = 100$ μmol/min. At $[S] = 2$ mM, the reaction velocity is:', options: ['25 μmol/min', '50 μmol/min', '75 μmol/min', '100 μmol/min'], correctIndex: 1, explanation: 'Michaelis-Menten: $v = V_{max}[S]/(K_m + [S]) = 100(2)/(2+2) = 200/4 = 50$ μmol/min. At $[S] = K_m$, velocity is always $V_{max}/2$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mbf-ent-6b', question: 'The isoelectric point (pI) of an amino acid is the pH at which:', options: ['The amino acid has maximum charge', 'The net charge of the amino acid is zero (zwitterion form predominates)', 'The amino acid is fully protonated', 'The amino acid is fully deprotonated'], correctIndex: 1, explanation: 'At the pI, the amino acid exists as a zwitterion with equal positive and negative charges — net charge is zero. For simple amino acids, $pI = (pK_{a1} + pK_{a2})/2$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mbf-ent-7a', question: 'Which vitamin is a cofactor essential for pyruvate dehydrogenase and the Krebs cycle, derived from thiamine?', options: ['Vitamin C (ascorbate)', 'Thiamine pyrophosphate (TPP, from B1)', 'Niacin (NAD⁺, from B3)', 'Riboflavin (FAD, from B2)'], correctIndex: 1, explanation: 'Thiamine pyrophosphate (TPP), derived from vitamin B1 (thiamine), is essential for pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, and transketolase.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mbf-ent-7b', question: 'During intense exercise when oxygen is limited, pyruvate is converted to lactate. This regenerates:', options: ['ATP directly', 'NAD⁺ from NADH, allowing glycolysis to continue', 'FADH₂', 'Acetyl-CoA'], correctIndex: 1, explanation: 'Lactate fermentation: pyruvate + NADH → lactate + NAD⁺. Regenerating NAD⁺ allows glycolysis to continue producing ATP under anaerobic conditions.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Amino Acids & Proteins' },
    { partNumber: 2, partTitle: 'Enzyme Kinetics' },
    { partNumber: 3, partTitle: 'Carbohydrate Metabolism' },
    { partNumber: 4, partTitle: 'Lipid Metabolism' },
    { partNumber: 5, partTitle: 'Bioenergetics' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
