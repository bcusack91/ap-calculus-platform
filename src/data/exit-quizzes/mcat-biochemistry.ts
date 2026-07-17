/**
 * MCAT Biochemistry Foundations Exit Quiz
 * Covers: amino acids, protein structure, enzymes, metabolism, bioenergetics
 */

import type { MCATQuizQuestion } from './mcat-general-chemistry'
import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'At physiological pH (7.4), a typical amino acid exists as a:',
    options: ['Cation (positive charge)', 'Anion (negative charge)', 'Zwitterion', 'Neutral uncharged molecule'],
    correctAnswer: 2,
    explanation: 'At physiological pH, amino acids exist as zwitterions with the amino group protonated $(NH_{3}^{+})$ and the carboxyl group deprotonated $(COO^{-})$, giving a net charge that depends on the side chain.',
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
    options: ['Decreases Vmax', 'Increases Km but restores Vmax at high [S]', 'Decreases both Km and Vmax', 'Has no effect'],
    correctAnswer: 1,
    explanation: 'A competitive inhibitor increases apparent Km (lower apparent affinity) but does not affect Vmax. At sufficiently high substrate concentrations, substrate outcompetes the inhibitor and Vmax is reached.',
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
    options: ['AMP', 'Fructose-2,6-bisphosphate', 'ATP (at high concentrations)', 'ADP'],
    correctAnswer: 2,
    explanation: 'High ATP levels allosterically inhibit PFK-1, the rate-limiting enzyme of glycolysis. This makes sense: when energy is abundant, glycolysis is slowed. AMP and F-2,6-BP activate PFK-1.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'Beta-oxidation of fatty acids produces:',
    options: ['Acetyl-CoA, NADH, and $FADH_{2}$', 'Glucose and $CO_{2}$', 'Lactate and $NAD^{+}$', 'Pyruvate and ATP'],
    correctAnswer: 0,
    explanation: 'β-oxidation sequentially cleaves 2-carbon units from fatty acids as acetyl-CoA, generating NADH and $FADH_{2}$ in each cycle. These feed into the TCA cycle and ETC.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'The Lineweaver-Burk plot (double reciprocal) shows uncompetitive inhibition as:',
    options: ['Parallel lines (same slope, different y-intercept)', 'Lines intersecting on the y-axis', 'Lines intersecting on the x-axis', 'Lines intersecting in the second quadrant'],
    correctAnswer: 0,
    explanation: 'In uncompetitive inhibition, both Km and Vmax decrease by the same factor, resulting in parallel lines on a Lineweaver-Burk plot (same slope, different intercepts).',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-enzymes-kinetics-mcat',
  },
  {
    question: 'Denaturation of a protein disrupts which levels of structure?',
    options: ['Only primary', 'Only secondary', 'Secondary, tertiary, and quaternary', 'All four levels including primary'],
    correctAnswer: 2,
    explanation: 'Denaturation disrupts non-covalent interactions (H-bonds, hydrophobic, ionic, van der Waals) that maintain secondary, tertiary, and quaternary structure. Primary structure (covalent peptide bonds) remains intact.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  },
  {
    question: 'The electron transport chain generates a proton gradient across the:',
    options: ['Outer mitochondrial membrane', 'Inner mitochondrial membrane', 'Cell membrane', 'Nuclear envelope'],
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
    question: 'Oxidative phosphorylation produces approximately how many ATP per glucose?',
    options: ['2', '4', '30-32', '38'],
    correctAnswer: 2,
    explanation: 'Oxidative phosphorylation (ETC + ATP synthase) using NADH and $FADH_{2}$ from glycolysis, pyruvate dehydrogenase, and the TCA cycle produces ~30-32 ATP per glucose (including substrate-level phosphorylation).',
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
    options: ['Hexokinase', 'Phosphofructokinase-1', 'Fructose-1,6-bisphosphatase', 'Pyruvate kinase'],
    correctAnswer: 2,
    explanation: 'The three irreversible steps of glycolysis are bypassed in gluconeogenesis by different enzymes. Fructose-1,6-bisphosphatase bypasses PFK-1, converting F-1,6-BP to F-6-P.',
    difficulty: 'medium',
    subtopicSlug: 'mcat-biochemistry-carbohydrate-metabolism-mcat',
  },
  {
    question: 'Which coenzyme is derived from vitamin B3 (niacin)?',
    options: ['FAD', '$NAD^{+}$', 'Coenzyme A', 'Thiamine pyrophosphate'],
    correctAnswer: 1,
    explanation: '$NAD^{+}$ (nicotinamide adenine dinucleotide) is derived from niacin (vitamin B3). FAD is from riboflavin (B2), CoA from pantothenic acid (B5), and TPP from thiamine (B1).',
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
    options: ['The reaction stops', 'The enzyme is denatured', 'The reaction rate is half of Vmax', 'Product concentration equals substrate concentration'],
    correctAnswer: 2,
    explanation: 'By definition in Michaelis-Menten kinetics, when [S] = Km, the reaction velocity is Vmax/2. Lower Km generally indicates higher apparent substrate affinity.',
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
    options: ['Pyruvate', 'Acetyl-CoA', 'Oxaloacetate', 'Glucose-6-phosphate'],
    correctAnswer: 1,
    explanation: 'Each beta-oxidation cycle cleaves a two-carbon unit from the fatty acyl chain as acetyl-CoA, while also producing NADH and FADH2.',
    difficulty: 'easy',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'ATP synthase generates ATP by using energy from:',
    options: ['Direct oxidation of glucose', 'A proton gradient across the inner mitochondrial membrane', 'Substrate-level phosphorylation in glycolysis', 'Hydrolysis of NADH'],
    correctAnswer: 1,
    explanation: 'ATP synthase is driven by proton flow down the electrochemical gradient established by the electron transport chain across the inner mitochondrial membrane.',
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
    options: ['Liver', 'Skeletal muscle', 'Brain', 'Cardiac muscle'],
    correctAnswer: 2,
    explanation: 'Long-chain fatty acids do not significantly cross the blood-brain barrier; the brain relies on glucose and, during fasting, ketone bodies.',
    difficulty: 'hard',
    subtopicSlug: 'mcat-biochemistry-lipid-metabolism-mcat',
  },
  {
    question: 'Pyruvate carboxylase requires which cofactor and allosteric activator for gluconeogenesis entry?',
    options: ['Biotin and acetyl-CoA', 'NAD+ and citrate', 'Thiamine and ATP', 'FAD and AMP'],
    correctAnswer: 0,
    explanation: 'Pyruvate carboxylase is a biotin-dependent mitochondrial enzyme activated by acetyl-CoA and uses ATP to form oxaloacetate.',
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

export function generateExitQuiz(count: number = 10, topicSlug?: string): ExitQuizQuestion[] {
  const filteredPool = BIOCHEM_SUBTOPICS.has(topicSlug ?? '')
    ? questionPool.filter((q) => q.subtopicSlug === topicSlug)
    : questionPool
  const sourcePool = filteredPool.length > 0 ? filteredPool : questionPool
  const shuffled = [...sourcePool].sort(() => Math.random() - 0.5)

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
