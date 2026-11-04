/**
 * Entrance Quiz — Biochemistry Foundations (MCAT)
 * 16 questions · 7 parts (3 / 3 / 2 / 2 / 2 / 2 / 2)
 * Part titles match the interactive lesson's "Part N of 7" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Amino Acids & Protein Structure'
const P2 = 'Enzyme Kinetics (ULTRA HIGH YIELD)'
const P3 = 'Glycolysis & Gluconeogenesis'
const P4 = 'TCA Cycle & Oxidative Phosphorylation'
const P5 = 'Lipids & Fatty Acid Metabolism'
const P6 = 'Nucleic Acids & Molecular Biology'
const P7 = 'Metabolic Regulation & Integration'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Amino Acids & Protein Structure
  { id: 'mbf-ent-1a', question: 'At physiological pH (about 7.4), which amino acid side chain carries a positive charge?', options: ['Aspartate (p$K_a \\approx 3.9$)', 'Glutamate (p$K_a \\approx 4.1$)', 'Lysine (p$K_a \\approx 10.5$)', 'Tyrosine (p$K_a \\approx 10.1$)'], correctIndex: 2, explanation: "Lysine's side-chain amine has a p$K_a$ well above 7.4, so it stays protonated as $-\\text{NH}_3^+$ and carries a positive charge. Aspartate and glutamate are deprotonated (negative) at this pH, and tyrosine's phenol, although its p$K_a$ is also high, is neutral when protonated.", partNumber: 1, partTitle: P1 },
  { id: 'mbf-ent-1b', question: 'When two amino acids join in a polypeptide, the peptide bond links:', options: ['A carboxyl group and the next amino group', 'The amino groups of two amino acids', 'The carboxyl groups of two amino acids', 'The side chains of two adjacent residues'], correctIndex: 0, explanation: 'A condensation reaction joins the carboxyl group of one amino acid to the amino group of the next, releasing water and forming the amide (peptide) bond of the backbone. Links between side chains, such as Cys-Cys disulfide bonds, stabilize tertiary structure but are not peptide bonds.', partNumber: 1, partTitle: P1 },
  { id: 'mbf-ent-1c', question: 'The isoelectric point (pI) of an amino acid or protein is the pH at which:', options: ['Its net charge is at a maximum', 'Its net charge is zero', 'It is fully protonated', 'It is fully deprotonated'], correctIndex: 1, explanation: 'At the pI the positive and negative charges balance, so the net charge is zero and the molecule does not migrate in an electric field. Below the pI it carries a net positive charge, and above the pI a net negative charge.', partNumber: 1, partTitle: P1 },

  // Part 2 — Enzyme Kinetics
  { id: 'mbf-ent-2a', question: 'In Michaelis-Menten kinetics, $V_{max}$ is:', options: ['The [S] that gives half the maximum rate', 'The rate constant for substrate binding', 'The affinity of the inhibitor for the enzyme', 'The rate when every active site is filled'], correctIndex: 3, explanation: '$V_{max}$ is the rate reached when the enzyme is saturated with substrate, and it equals $k_{cat}[E]_T$, so it rises with the amount of enzyme. The [S] that gives half the maximum rate is $K_m$, not $V_{max}$.', partNumber: 2, partTitle: P2 },
  { id: 'mbf-ent-2b', question: 'A competitive inhibitor affects an enzyme by:', options: ['Lowering $V_{max}$ and raising apparent $K_m$', 'Lowering $V_{max}$ and leaving $K_m$ unchanged', 'Raising apparent $K_m$ with $V_{max}$ unchanged', 'Lowering both $V_{max}$ and apparent $K_m$'], correctIndex: 2, explanation: 'A competitive inhibitor competes with substrate for the active site, so more substrate is needed to reach half-maximal rate (apparent $K_m$ rises), but enough substrate still outcompetes it, so $V_{max}$ is unchanged. Lower $V_{max}$ with unchanged $K_m$ is noncompetitive inhibition, and lowering both is uncompetitive inhibition.', partNumber: 2, partTitle: P2 },
  { id: 'mbf-ent-2c', question: 'On a Lineweaver-Burk plot of $1/v$ against $1/[S]$, the y-intercept equals:', options: ['$-1/K_m$', '$1/V_{max}$', '$K_m/V_{max}$', '$V_{max}/K_m$'], correctIndex: 1, explanation: 'From $1/v = (K_m/V_{max})(1/[S]) + 1/V_{max}$, the y-intercept is $1/V_{max}$, the x-intercept is $-1/K_m$, and the slope is $K_m/V_{max}$. A higher y-intercept therefore means a lower $V_{max}$.', partNumber: 2, partTitle: P2 },

  // Part 3 — Glycolysis & Gluconeogenesis
  { id: 'mbf-ent-3a', question: 'Glycolysis converts one glucose molecule into:', options: ['1 pyruvate, 2 ATP (net) and 1 NADH', '2 acetyl-CoA, 4 ATP and 2 $\\text{FADH}_2$', '2 lactate, 4 ATP (net) and 2 NADH', '2 pyruvate, 2 ATP (net) and 2 NADH'], correctIndex: 3, explanation: 'Glycolysis splits glucose into 2 pyruvate in the cytoplasm, with a net 2 ATP (4 made, 2 invested) and 2 NADH, and needs no oxygen. Acetyl-CoA comes later, from pyruvate dehydrogenase in the mitochondria, and converting pyruvate to lactate uses up the NADH rather than adding ATP.', partNumber: 3, partTitle: P3 },
  { id: 'mbf-ent-3b', question: 'Gluconeogenesis is not simply glycolysis run in reverse because:', options: ['Three glycolytic steps are irreversible', 'It takes place only in muscle cells', 'It makes ATP rather than consuming it', 'It does not use any glycolytic enzymes'], correctIndex: 0, explanation: 'Hexokinase, PFK-1 and pyruvate kinase catalyze steps that are far downhill, so gluconeogenesis bypasses them with its own enzymes while reusing the reversible glycolytic steps. It runs mainly in the liver, not muscle, and it consumes ATP and GTP rather than producing ATP.', partNumber: 3, partTitle: P3 },

  // Part 4 — TCA Cycle & Oxidative Phosphorylation
  { id: 'mbf-ent-4a', question: 'In the first step of the TCA cycle, acetyl-CoA combines with which molecule to form citrate?', options: ['Pyruvate', 'Succinate', 'Oxaloacetate', 'Malonyl-CoA'], correctIndex: 2, explanation: 'Citrate synthase joins the two-carbon acetyl group to four-carbon oxaloacetate, making six-carbon citrate, and the cycle regenerates oxaloacetate at the end. Pyruvate is converted to acetyl-CoA before the cycle, succinate is a later intermediate, and malonyl-CoA belongs to fatty acid synthesis.', partNumber: 4, partTitle: P4 },
  { id: 'mbf-ent-4b', question: 'NADH from the TCA cycle hands its electrons to which component of the electron transport chain?', options: ['Complex I', 'Complex II', 'Complex IV', 'ATP synthase'], correctIndex: 0, explanation: 'NADH donates its electrons to Complex I (NADH dehydrogenase), which pumps protons; $\\text{FADH}_2$ electrons enter at Complex II and skip that pumping step. Complex IV passes electrons on to $\\text{O}_2$, and ATP synthase uses the proton gradient rather than accepting electrons.', partNumber: 4, partTitle: P4 },

  // Part 5 — Lipids & Fatty Acid Metabolism
  { id: 'mbf-ent-5a', question: 'A triglyceride is built from:', options: ['Glycerol, two fatty acids and a phosphate', 'Sphingosine and one fatty acid', 'Four fused hydrocarbon rings', 'Glycerol and three fatty acids'], correctIndex: 3, explanation: 'Triglycerides, the main energy-storage lipid, are three fatty acids esterified to glycerol. Glycerol with two fatty acids and a phosphate head is a phospholipid (membranes), a sphingosine backbone marks a sphingolipid, and four fused rings define a steroid.', partNumber: 5, partTitle: P5 },
  { id: 'mbf-ent-5b', question: 'Where in the cell does beta-oxidation of fatty acids take place?', options: ['Cytosol of the cell', 'Mitochondrial matrix', 'Intermembrane space', 'Smooth ER membrane'], correctIndex: 1, explanation: 'Beta-oxidation runs in the mitochondrial matrix, which is why long-chain fatty acids must cross the inner membrane first. Its acetyl-CoA enters the TCA cycle in the same compartment, and its NADH and $\\text{FADH}_2$ feed the electron transport chain on the adjacent inner membrane.', partNumber: 5, partTitle: P5 },

  // Part 6 — Nucleic Acids & Molecular Biology
  { id: 'mbf-ent-6a', question: 'Which base is found in RNA but not in DNA?', options: ['Thymine', 'Adenine', 'Cytosine', 'Uracil'], correctIndex: 3, explanation: "RNA uses uracil in place of thymine, so U pairs with A in RNA. Adenine, guanine and cytosine occur in both nucleic acids, and thymine is the DNA-only base. RNA also differs in its sugar: ribose carries a $2'$-OH that makes RNA less stable.", partNumber: 6, partTitle: P6 },
  { id: 'mbf-ent-6b', question: 'During DNA replication, which enzyme lays down the short RNA primer that DNA polymerase then extends?', options: ['Helicase', 'DNA primase', 'DNA polymerase III', 'RNA polymerase'], correctIndex: 1, explanation: "DNA polymerase cannot start a chain on its own; it can only add nucleotides to an existing $3'$ end, so primase first makes a short RNA primer. Helicase unwinds the double helix, DNA polymerase III is the enzyme that extends the primer, and RNA polymerase transcribes genes without needing a primer.", partNumber: 6, partTitle: P6 },

  // Part 7 — Metabolic Regulation & Integration
  { id: 'mbf-ent-7a', question: 'A person has just eaten a large carbohydrate-rich meal. Which hormone pattern is expected?', options: ['High insulin and low glucagon', 'Low insulin and high glucagon', 'High insulin and high glucagon', 'Low insulin and low glucagon'], correctIndex: 0, explanation: 'Rising blood glucose after a meal triggers insulin release and suppresses glucagon, switching the body to storage: glycolysis, glycogen synthesis and lipogenesis. Low insulin with high glucagon is the fasting pattern, which mobilizes fuel through glycogenolysis, gluconeogenesis and beta-oxidation.', partNumber: 7, partTitle: P7 },
  { id: 'mbf-ent-7b', question: 'Ketogenesis in the liver is most active during:', options: ['The hour after a large meal', 'A rise in blood insulin', 'A fast lasting several days', 'Rapid glycogen synthesis'], correctIndex: 2, explanation: 'In a prolonged fast, low insulin and high glucagon drive beta-oxidation, and the liver turns the resulting flood of acetyl-CoA into ketone bodies for other tissues to burn. The fed state, high insulin and glycogen synthesis all signal storage, which suppresses ketogenesis.', partNumber: 7, partTitle: P7 },
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
