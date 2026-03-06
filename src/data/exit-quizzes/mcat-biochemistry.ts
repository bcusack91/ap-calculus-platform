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
    explanation: 'At physiological pH, amino acids exist as zwitterions with the amino group protonated (NH₃⁺) and the carboxyl group deprotonated (COO⁻), giving a net charge that depends on the side chain.',
    difficulty: 'easy',
  },
  {
    question: 'Which level of protein structure describes the alpha-helix and beta-sheet?',
    options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
    correctAnswer: 1,
    explanation: 'Secondary structure refers to local folding patterns like α-helices and β-sheets, stabilized by hydrogen bonds between backbone N-H and C=O groups.',
    difficulty: 'easy',
  },
  {
    question: 'In competitive inhibition, adding more substrate:',
    options: ['Decreases Vmax', 'Increases Km but restores Vmax at high [S]', 'Decreases both Km and Vmax', 'Has no effect'],
    correctAnswer: 1,
    explanation: 'A competitive inhibitor increases apparent Km (lower apparent affinity) but does not affect Vmax. At sufficiently high substrate concentrations, substrate outcompetes the inhibitor and Vmax is reached.',
    difficulty: 'medium',
  },
  {
    question: 'How many net ATP molecules are produced from one glucose molecule via glycolysis?',
    options: ['2', '4', '32', '36'],
    correctAnswer: 0,
    explanation: 'Glycolysis produces 4 ATP total but requires 2 ATP in the investment phase, giving a net yield of 2 ATP per glucose (plus 2 NADH and 2 pyruvate).',
    difficulty: 'easy',
  },
  {
    question: 'The citric acid cycle occurs in which cellular compartment?',
    options: ['Cytoplasm', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Endoplasmic reticulum'],
    correctAnswer: 1,
    explanation: 'The citric acid cycle (Krebs cycle) occurs in the mitochondrial matrix. The ETC occurs on the inner mitochondrial membrane, while glycolysis occurs in the cytoplasm.',
    difficulty: 'easy',
  },
  {
    question: 'Which of the following is an allosteric inhibitor of phosphofructokinase-1 (PFK-1)?',
    options: ['AMP', 'Fructose-2,6-bisphosphate', 'ATP (at high concentrations)', 'ADP'],
    correctAnswer: 2,
    explanation: 'High ATP levels allosterically inhibit PFK-1, the rate-limiting enzyme of glycolysis. This makes sense: when energy is abundant, glycolysis is slowed. AMP and F-2,6-BP activate PFK-1.',
    difficulty: 'medium',
  },
  {
    question: 'Beta-oxidation of fatty acids produces:',
    options: ['Acetyl-CoA, NADH, and FADH₂', 'Glucose and CO₂', 'Lactate and NAD⁺', 'Pyruvate and ATP'],
    correctAnswer: 0,
    explanation: 'β-oxidation sequentially cleaves 2-carbon units from fatty acids as acetyl-CoA, generating NADH and FADH₂ in each cycle. These feed into the TCA cycle and ETC.',
    difficulty: 'medium',
  },
  {
    question: 'The Lineweaver-Burk plot (double reciprocal) shows uncompetitive inhibition as:',
    options: ['Parallel lines (same slope, different y-intercept)', 'Lines intersecting on the y-axis', 'Lines intersecting on the x-axis', 'Lines intersecting in the second quadrant'],
    correctAnswer: 0,
    explanation: 'In uncompetitive inhibition, both Km and Vmax decrease by the same factor, resulting in parallel lines on a Lineweaver-Burk plot (same slope, different intercepts).',
    difficulty: 'hard',
  },
  {
    question: 'Denaturation of a protein disrupts which levels of structure?',
    options: ['Only primary', 'Only secondary', 'Secondary, tertiary, and quaternary', 'All four levels including primary'],
    correctAnswer: 2,
    explanation: 'Denaturation disrupts non-covalent interactions (H-bonds, hydrophobic, ionic, van der Waals) that maintain secondary, tertiary, and quaternary structure. Primary structure (covalent peptide bonds) remains intact.',
    difficulty: 'easy',
  },
  {
    question: 'The electron transport chain generates a proton gradient across the:',
    options: ['Outer mitochondrial membrane', 'Inner mitochondrial membrane', 'Cell membrane', 'Nuclear envelope'],
    correctAnswer: 1,
    explanation: 'The ETC complexes pump H⁺ from the matrix to the intermembrane space across the inner mitochondrial membrane, creating the proton motive force used by ATP synthase.',
    difficulty: 'easy',
  },
  {
    question: 'Which amino acid is a common phosphorylation target in signal transduction?',
    options: ['Alanine', 'Serine', 'Glycine', 'Proline'],
    correctAnswer: 1,
    explanation: 'Serine (along with threonine and tyrosine) has a hydroxyl group in its side chain that can be phosphorylated by kinases, a key mechanism in signal transduction.',
    difficulty: 'medium',
  },
  {
    question: 'Oxidative phosphorylation produces approximately how many ATP per glucose?',
    options: ['2', '4', '30-32', '38'],
    correctAnswer: 2,
    explanation: 'Oxidative phosphorylation (ETC + ATP synthase) using NADH and FADH₂ from glycolysis, pyruvate dehydrogenase, and the TCA cycle produces ~30-32 ATP per glucose (including substrate-level phosphorylation).',
    difficulty: 'medium',
  },
  {
    question: 'Disulfide bonds form between which amino acid residues?',
    options: ['Lysine', 'Cysteine', 'Methionine', 'Histidine'],
    correctAnswer: 1,
    explanation: 'Disulfide bonds (S-S) form between the thiol (-SH) groups of two cysteine residues through oxidation. These covalent bonds stabilize tertiary and quaternary structure.',
    difficulty: 'easy',
  },
  {
    question: 'Gluconeogenesis and glycolysis share many enzymes. Which enzyme is unique to gluconeogenesis?',
    options: ['Hexokinase', 'Phosphofructokinase-1', 'Fructose-1,6-bisphosphatase', 'Pyruvate kinase'],
    correctAnswer: 2,
    explanation: 'The three irreversible steps of glycolysis are bypassed in gluconeogenesis by different enzymes. Fructose-1,6-bisphosphatase bypasses PFK-1, converting F-1,6-BP to F-6-P.',
    difficulty: 'medium',
  },
  {
    question: 'Which coenzyme is derived from vitamin B3 (niacin)?',
    options: ['FAD', 'NAD⁺', 'Coenzyme A', 'Thiamine pyrophosphate'],
    correctAnswer: 1,
    explanation: 'NAD⁺ (nicotinamide adenine dinucleotide) is derived from niacin (vitamin B3). FAD is from riboflavin (B2), CoA from pantothenic acid (B5), and TPP from thiamine (B1).',
    difficulty: 'medium',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `biochemistry-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-biochemistry',
  }))
}
