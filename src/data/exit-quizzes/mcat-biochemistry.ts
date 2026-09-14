/**
 * MCAT Biochemistry Foundations Exit Quiz
 * Covers: amino acids, protein structure, enzymes, metabolism, bioenergetics
 */

import { authoredFor } from './mcat-authored-pool'
import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'
import { shuffleArray } from '@/lib/shuffle-options'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'At physiological pH (7.4), a typical amino acid exists as a:',
    options: ['Cation', 'Anion', 'Zwitterion', 'Neutral molecule'],
    correctAnswer: 2,
    explanation: 'At physiological pH, amino acids exist as zwitterions with the amino group protonated $(NH_{3}^{+})$ and the carboxyl group deprotonated $(COO^{-})$, giving a net charge that depends on the side chain. A fully protonated cation or fully deprotonated anion forms only at very low or very high pH, and the uncharged neutral form is negligible in water.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'Which level of protein structure describes the alpha-helix and beta-sheet?',
    options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
    correctAnswer: 1,
    explanation: 'Secondary structure refers to local folding patterns like α-helices and β-sheets, stabilized by hydrogen bonds between backbone N-H and C=O groups.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'In competitive inhibition, adding more substrate:',
    options: ['Cannot reverse it, so Vmax stays lowered', 'Outcompetes the inhibitor, restoring Vmax', 'Strengthens binding of the inhibitor', 'Raises Vmax above its uninhibited value'],
    correctAnswer: 1,
    explanation: 'A competitive inhibitor increases apparent Km (lower apparent affinity) but does not affect Vmax. At sufficiently high substrate concentrations, substrate outcompetes the inhibitor and the normal Vmax is reached, but never exceeded. A Vmax that stays lowered no matter how much substrate is added describes noncompetitive inhibition.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  },
  {
    question: 'How many net ATP molecules are produced from one glucose molecule via glycolysis?',
    options: ['2', '4', '32', '36'],
    correctAnswer: 0,
    explanation: 'Glycolysis produces 4 ATP total but requires 2 ATP in the investment phase, giving a net yield of 2 ATP per glucose (plus 2 NADH and 2 pyruvate).',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'The citric acid cycle occurs in which cellular compartment?',
    options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Endoplasmic reticulum'],
    correctAnswer: 1,
    explanation: 'The citric acid cycle (Krebs cycle) occurs in the mitochondrial matrix. The ETC occurs on the inner mitochondrial membrane, while glycolysis occurs in the cytoplasm.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'Which of the following is an allosteric inhibitor of phosphofructokinase-1 (PFK-1)?',
    options: ['Rising AMP levels', 'Abundant F-2,6-BP', 'High ATP levels', 'Elevated ADP levels'],
    correctAnswer: 2,
    explanation: 'High ATP levels allosterically inhibit PFK-1, the rate-limiting enzyme of glycolysis. This makes sense: when energy is abundant, glycolysis is slowed. AMP, ADP and fructose-2,6-bisphosphate (F-2,6-BP) signal a need for energy or glucose use and activate PFK-1.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'Beta-oxidation of fatty acids produces:',
    options: ['Acetyl-CoA, NADH, and $FADH_{2}$', 'Pyruvate, NADH, and $CO_{2}$', 'Glycerol, $NAD^{+}$, and ATP', 'Malonyl-CoA, NADPH, and ATP'],
    correctAnswer: 0,
    explanation: 'β-oxidation sequentially cleaves 2-carbon units from fatty acids as acetyl-CoA, generating NADH and $FADH_{2}$ in each cycle. These feed into the TCA cycle and ETC. Malonyl-CoA and NADPH belong to fatty acid synthesis, and pyruvate and glycerol are not products of β-oxidation.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'The Lineweaver-Burk plot (double reciprocal) shows uncompetitive inhibition as:',
    options: ['Parallel lines with the same slope', 'Lines intersecting on the y-axis', 'Lines intersecting on the x-axis', 'Lines crossing in quadrant II'],
    correctAnswer: 0,
    explanation: 'In uncompetitive inhibition, both Km and Vmax decrease by the same factor, resulting in parallel lines on a Lineweaver-Burk plot (same slope, different intercepts). Lines meeting on the y-axis indicate competitive inhibition, and lines meeting on the x-axis indicate pure noncompetitive inhibition.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  },
  {
    question: 'Denaturation of a protein disrupts which levels of structure?',
    options: ['Primary only', 'Quaternary only', 'All but primary', 'All four levels'],
    correctAnswer: 2,
    explanation: 'Denaturation disrupts non-covalent interactions (H-bonds, hydrophobic, ionic, van der Waals) that maintain secondary, tertiary, and quaternary structure. Primary structure (covalent peptide bonds) remains intact.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'The electron transport chain generates a proton gradient across the:',
    options: ['Outer mitochondrial membrane', 'Inner mitochondrial membrane', 'Mitochondrial matrix', 'Endoplasmic reticulum membrane'],
    correctAnswer: 1,
    explanation: 'The ETC complexes pump $H^{+}$ from the matrix to the intermembrane space across the inner mitochondrial membrane, creating the proton motive force used by ATP synthase.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'Which amino acid is a common phosphorylation target in signal transduction?',
    options: ['Alanine', 'Serine', 'Glycine', 'Proline'],
    correctAnswer: 1,
    explanation: 'Serine (along with threonine and tyrosine) has a hydroxyl group in its side chain that can be phosphorylated by kinases, a key mechanism in signal transduction.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'Complete aerobic oxidation of one glucose produces approximately how many total ATP?',
    options: ['4-6', '12-14', '30-32', '26-28'],
    correctAnswer: 2,
    explanation: 'Modern estimates put the total yield from complete aerobic oxidation of one glucose at ~30-32 ATP. About 26-28 of that comes from oxidative phosphorylation (ETC + ATP synthase, using NADH and $FADH_{2}$ from glycolysis, pyruvate dehydrogenase, and the TCA cycle), and the rest comes from substrate-level phosphorylation in glycolysis and the TCA cycle, so counting oxidative phosphorylation alone undercounts the total.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'Disulfide bonds form between which amino acid residues?',
    options: ['Lysine', 'Cysteine', 'Methionine', 'Histidine'],
    correctAnswer: 1,
    explanation: 'Disulfide bonds (S-S) form between the thiol (-SH) groups of two cysteine residues through oxidation. These covalent bonds stabilize tertiary and quaternary structure.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'Gluconeogenesis and glycolysis share many enzymes. Which enzyme is unique to gluconeogenesis?',
    options: ['Glyceraldehyde-3-phosphate dehydrogenase', 'Phosphofructokinase-1', 'Fructose-1,6-bisphosphatase', 'Pyruvate kinase'],
    correctAnswer: 2,
    explanation: 'The three irreversible steps of glycolysis are bypassed in gluconeogenesis by different enzymes. Fructose-1,6-bisphosphatase bypasses PFK-1, converting F-1,6-BP to F-6-P. PFK-1 and pyruvate kinase are glycolysis-only enzymes, and glyceraldehyde-3-phosphate dehydrogenase catalyzes a reversible step shared by both pathways.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'Which coenzyme is derived from vitamin B3 (niacin)?',
    options: ['$FADH_{2}$', '$NAD^{+}$', 'Coenzyme A', 'Lipoic acid'],
    correctAnswer: 1,
    explanation: '$NAD^{+}$ (nicotinamide adenine dinucleotide) is derived from niacin (vitamin B3). $FADH_{2}$ is the reduced form of FAD, which comes from riboflavin (B2); CoA comes from pantothenic acid (B5); and lipoic acid is synthesized by the body rather than derived from niacin.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'Which amino acid side chain is most likely to form an ionic bond with lysine at physiological pH?',
    options: ['Leucine', 'Aspartate', 'Serine', 'Phenylalanine'],
    correctAnswer: 1,
    explanation: 'Lysine is positively charged at physiological pH, while aspartate is negatively charged. Opposite charges can form ionic (salt-bridge) interactions in proteins.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'For Michaelis-Menten kinetics, Km is best described as the substrate concentration at which:',
    options: ['The reaction rate reaches Vmax', 'The enzyme begins to denature', 'The reaction rate is half of Vmax', 'Half the substrate is consumed'],
    correctAnswer: 2,
    explanation: 'By definition in Michaelis-Menten kinetics, when [S] = Km, the reaction velocity is Vmax/2. Vmax itself is only approached at saturating substrate, and Km is a substrate concentration, not a point of substrate depletion or denaturation. Lower Km generally indicates higher apparent substrate affinity.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  },
  {
    question: 'Which pathway directly converts pyruvate to glucose under fasting conditions?',
    options: ['Glycolysis', 'Beta-oxidation', 'Gluconeogenesis', 'Pentose phosphate pathway'],
    correctAnswer: 2,
    explanation: 'Gluconeogenesis synthesizes glucose from non-carbohydrate precursors such as pyruvate, lactate, glycerol, and glucogenic amino acids.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'The primary product released in each cycle of beta-oxidation is:',
    options: ['Pyruvate', 'Acetyl-CoA', 'Oxaloacetate', 'Malonyl-CoA'],
    correctAnswer: 1,
    explanation: 'Each beta-oxidation cycle cleaves a two-carbon unit from the fatty acyl chain as acetyl-CoA, while also producing NADH and FADH2. Malonyl-CoA is the committed intermediate of fatty acid synthesis, not a breakdown product.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'ATP synthase generates ATP by using energy from:',
    options: ['Direct oxidation of glucose in the cytosol', 'A proton gradient across the inner membrane', 'Substrate-level phosphorylation of ADP', 'Direct electron transfer from NADH'],
    correctAnswer: 1,
    explanation: 'ATP synthase is driven by proton flow down the electrochemical gradient established by the electron transport chain across the inner mitochondrial membrane. Electrons from NADH power the pumps that build that gradient rather than driving ATP synthase directly, and substrate-level phosphorylation is a separate, enzyme-coupled way of making ATP.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'A noncompetitive inhibitor is added to an enzyme-catalyzed reaction. Which change is expected?',
    options: ['Km increases, Vmax unchanged', 'Km unchanged, Vmax decreases', 'Km decreases, Vmax unchanged', 'Km and Vmax both increase'],
    correctAnswer: 1,
    explanation: 'Pure noncompetitive inhibition lowers Vmax by reducing active enzyme concentration while leaving Km unchanged.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  },
  {
    question: 'If malate dehydrogenase were strongly inhibited, which TCA intermediate would accumulate immediately upstream?',
    options: ['Citrate', 'Succinate', 'Malate', 'Fumarate'],
    correctAnswer: 2,
    explanation: 'Malate dehydrogenase converts malate to oxaloacetate, so malate accumulates when the enzyme is inhibited.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-bioenergetics-mcat',
  },
  {
    question: 'During prolonged fasting, which tissue cannot directly use fatty acids as its major fuel and instead relies heavily on glucose/ketones?',
    options: ['Hepatic tissue', 'Skeletal muscle', 'Brain tissue', 'Cardiac muscle'],
    correctAnswer: 2,
    explanation: 'Long-chain fatty acids do not significantly cross the blood-brain barrier; the brain relies on glucose and, during fasting, ketone bodies.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'Pyruvate carboxylase requires which cofactor and allosteric activator for gluconeogenesis entry?',
    options: ['Biotin and acetyl-CoA', 'Biotin and citrate', 'Thiamine and acetyl-CoA', 'Thiamine and citrate'],
    correctAnswer: 0,
    explanation: 'Pyruvate carboxylase is a biotin-dependent mitochondrial enzyme activated by acetyl-CoA and uses ATP to form oxaloacetate. Thiamine (as TPP) is the cofactor of pyruvate dehydrogenase, and citrate is the allosteric activator of acetyl-CoA carboxylase, not pyruvate carboxylase.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
]

const BIOCHEM_SUBTOPICS = new Set([
  'mcat-biochemistry-amino-acids-proteins-mcat',
  'mcat-biochemistry-enzymes-kinetics-mcat',
  'mcat-biochemistry-carbohydrate-metabolism-mcat',
  'mcat-biochemistry-lipid-metabolism-mcat',
  'mcat-biochemistry-bioenergetics-mcat',
])

// Deep pool: local questions + the authored competitive bank for this area
// (audit F1 — exit quizzes were ~18 questions; the bank holds 30-40 per subtopic).
const fullPool = [...questionPool, ...authoredFor(['mcat-biochemistry-'])]

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const filteredPool = BIOCHEM_SUBTOPICS.has(topicSlug ?? '')
    ? fullPool.filter((q) => q.subtopicSlug === topicSlug)
    : fullPool
  const sourcePool = filteredPool.length > 0 ? filteredPool : fullPool
  const shuffled = shuffleArray(sourcePool)

  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `biochemistry-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    difficulty: q.difficulty,
    explanation: q.explanation,
    category: q.subtopicSlug ?? 'mcat-biochemistry',
  }))
}
