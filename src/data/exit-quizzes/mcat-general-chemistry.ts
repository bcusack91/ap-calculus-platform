/**
 * MCAT General Chemistry Exit Quiz
 * Covers: atomic structure, bonding, acids/bases, kinetics, thermodynamics, electrochemistry
 */

import type { ExitQuizQuestion } from './sat-linear-equations-inequalities'

export interface MCATQuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const questionPool: MCATQuizQuestion[] = [
  {
    question: 'Which quantum number determines the shape of an orbital?',
    options: ['Principal quantum number (n)', 'Angular momentum quantum number (l)', 'Magnetic quantum number (ml)', 'Spin quantum number (ms)'],
    correctAnswer: 1,
    explanation: 'The angular momentum quantum number (l) determines the shape of an orbital: l=0 is s (spherical), l=1 is p (dumbbell), l=2 is d (cloverleaf).',
    difficulty: 'easy',
  },
  {
    question: 'A reaction has an activation energy of 50 kJ/mol without a catalyst and 30 kJ/mol with a catalyst. By what factor does the rate increase at 310 K? (R = 8.314 J/mol·K)',
    options: ['~2,200 times faster', '~1.7 times faster', '~670 times faster', '~20 times faster'],
    correctAnswer: 0,
    explanation: 'Using the Arrhenius equation ratio: k₂/k₁ = e^((Ea₁-Ea₂)/RT) = e^(20000/(8.314×310)) ≈ e^(7.76) ≈ 2,340. The catalyzed reaction is approximately 2,200 times faster.',
    difficulty: 'hard',
  },
  {
    question: 'What is the pH of a 0.01 M HCl solution?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'HCl is a strong acid that fully dissociates. [H⁺] = 0.01 M = 10⁻² M, so pH = -log(10⁻²) = 2.',
    difficulty: 'easy',
  },
  {
    question: 'Which of the following best explains why the second ionization energy of sodium is significantly higher than the first?',
    options: ['The second electron is removed from a 2p orbital', 'The second electron is in a core shell with much higher effective nuclear charge', 'Sodium has low electronegativity', 'The second electron has a higher spin quantum number'],
    correctAnswer: 1,
    explanation: 'Na has the electron configuration [Ne]3s¹. The first IE removes the 3s electron. The second IE removes an electron from the filled 2p subshell (core), which experiences much greater effective nuclear charge, making it dramatically harder to remove.',
    difficulty: 'medium',
  },
  {
    question: 'A buffer solution contains 0.2 M acetic acid (pKa = 4.76) and 0.3 M sodium acetate. What is the pH?',
    options: ['4.58', '4.76', '4.94', '5.12'],
    correctAnswer: 2,
    explanation: 'Using Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA]) = 4.76 + log(0.3/0.2) = 4.76 + log(1.5) = 4.76 + 0.18 = 4.94.',
    difficulty: 'medium',
  },
  {
    question: 'In an electrochemical cell, which process occurs at the cathode?',
    options: ['Oxidation', 'Reduction', 'Neutralization', 'Hydrolysis'],
    correctAnswer: 1,
    explanation: 'Reduction always occurs at the cathode. Remember "An Ox, Red Cat" — Anode = Oxidation, Cathode = Reduction.',
    difficulty: 'easy',
  },
  {
    question: 'For the reaction A → products, doubling [A] quadruples the rate. What is the order with respect to A?',
    options: ['Zero order', 'First order', 'Second order', 'Third order'],
    correctAnswer: 2,
    explanation: 'If rate = k[A]ⁿ, and doubling [A] quadruples rate: 4 = 2ⁿ, so n = 2. The reaction is second order with respect to A.',
    difficulty: 'medium',
  },
  {
    question: 'Which thermodynamic quantity determines the spontaneity of a reaction at constant temperature and pressure?',
    options: ['Enthalpy (ΔH)', 'Entropy (ΔS)', 'Gibbs free energy (ΔG)', 'Internal energy (ΔU)'],
    correctAnswer: 2,
    explanation: 'Gibbs free energy (ΔG = ΔH - TΔS) determines spontaneity. A reaction is spontaneous when ΔG < 0.',
    difficulty: 'easy',
  },
  {
    question: 'A galvanic cell is composed of Zn²⁺/Zn (E° = -0.76 V) and Cu²⁺/Cu (E° = +0.34 V) half-cells. What is the standard cell potential?',
    options: ['0.42 V', '1.10 V', '-1.10 V', '-0.42 V'],
    correctAnswer: 1,
    explanation: 'E°cell = E°cathode - E°anode = 0.34 - (-0.76) = 1.10 V. Cu²⁺ is reduced (cathode) and Zn is oxidized (anode) because Cu²⁺/Cu has the more positive reduction potential.',
    difficulty: 'medium',
  },
  {
    question: 'Le Chatelier\'s principle predicts that adding more product to a system at equilibrium will:',
    options: ['Shift equilibrium toward products', 'Shift equilibrium toward reactants', 'Have no effect on equilibrium', 'Increase the equilibrium constant'],
    correctAnswer: 1,
    explanation: 'Adding more product stresses the system, so it shifts toward reactants to partially consume the added product and re-establish equilibrium. The equilibrium constant K does not change (only temperature changes K).',
    difficulty: 'easy',
  },
  {
    question: 'What is the hybridization of the central carbon in CO₂?',
    options: ['sp', 'sp²', 'sp³', 'sp³d'],
    correctAnswer: 0,
    explanation: 'CO₂ has linear geometry (180°). The central carbon forms two double bonds with oxygen atoms using sp hybridization (2 sigma bonds, no lone pairs on carbon).',
    difficulty: 'easy',
  },
  {
    question: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = -92 kJ. At equilibrium, increasing temperature will:',
    options: ['Increase the yield of NH₃', 'Decrease the yield of NH₃', 'Have no effect', 'Increase Kp but decrease yield'],
    correctAnswer: 1,
    explanation: 'This is an exothermic reaction (ΔH < 0). Increasing temperature shifts equilibrium toward the endothermic direction (reactants), decreasing NH₃ yield and decreasing K.',
    difficulty: 'medium',
  },
  {
    question: 'Which of the following solutions has the highest boiling point? (Assume complete dissociation)',
    options: ['0.1 m glucose', '0.1 m NaCl', '0.1 m CaCl₂', '0.1 m Al₂(SO₄)₃'],
    correctAnswer: 3,
    explanation: 'Boiling point elevation depends on the total number of solute particles (i × m). Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻ gives i = 5 particles, the highest van \'t Hoff factor, producing the greatest boiling point elevation.',
    difficulty: 'medium',
  },
  {
    question: 'What is the relationship between ΔG° and the equilibrium constant K?',
    options: ['ΔG° = RTlnK', 'ΔG° = -RTlnK', 'ΔG° = RT/K', 'ΔG° = -RT/K'],
    correctAnswer: 1,
    explanation: 'The relationship is ΔG° = -RTlnK. When K > 1, ΔG° is negative (spontaneous). When K < 1, ΔG° is positive (non-spontaneous at standard conditions).',
    difficulty: 'medium',
  },
  {
    question: 'In a titration of a weak acid with a strong base, at the half-equivalence point:',
    options: ['pH = pKa', 'pH = pKb', 'pH = 7', 'pH = 14 - pKa'],
    correctAnswer: 0,
    explanation: 'At the half-equivalence point, [HA] = [A⁻]. Using Henderson-Hasselbalch: pH = pKa + log(1) = pKa. This is also the point of maximum buffer capacity.',
    difficulty: 'medium',
  },
  {
    question: 'Which intermolecular force is primarily responsible for the high boiling point of water?',
    options: ['London dispersion forces', 'Dipole-dipole interactions', 'Hydrogen bonding', 'Ion-dipole interactions'],
    correctAnswer: 2,
    explanation: 'Water\'s unusually high boiling point (100°C) is primarily due to extensive hydrogen bonding between the partially positive H atoms and the lone pairs on O atoms of neighboring molecules.',
    difficulty: 'easy',
  },
  {
    question: 'A first-order reaction has a half-life of 20 minutes. How long will it take for the concentration to decrease to 12.5% of its initial value?',
    options: ['40 minutes', '60 minutes', '80 minutes', '100 minutes'],
    correctAnswer: 1,
    explanation: '12.5% = (1/2)³ of the original concentration. Since each half-life reduces the concentration by half, three half-lives are needed: 3 × 20 = 60 minutes.',
    difficulty: 'medium',
  },
  {
    question: 'Which of the following is true about a spontaneous process?',
    options: ['It always releases heat', 'It always increases entropy of the system', 'ΔG < 0', 'It occurs rapidly'],
    correctAnswer: 2,
    explanation: 'A spontaneous process has ΔG < 0. It does not necessarily release heat (endothermic processes can be spontaneous if TΔS > ΔH), nor does it necessarily increase system entropy. Spontaneity says nothing about rate.',
    difficulty: 'easy',
  },
  {
    question: 'The solubility product (Ksp) of AgCl is 1.8 × 10⁻¹⁰. What is the molar solubility of AgCl in pure water?',
    options: ['1.3 × 10⁻⁵ M', '9.0 × 10⁻¹¹ M', '1.8 × 10⁻¹⁰ M', '1.3 × 10⁻³ M'],
    correctAnswer: 0,
    explanation: 'AgCl → Ag⁺ + Cl⁻. If solubility = s, then Ksp = s² = 1.8 × 10⁻¹⁰. So s = √(1.8 × 10⁻¹⁰) ≈ 1.34 × 10⁻⁵ M.',
    difficulty: 'medium',
  },
  {
    question: 'Which statement about catalysts is correct?',
    options: ['Catalysts change the equilibrium constant', 'Catalysts are consumed in the reaction', 'Catalysts lower the activation energy', 'Catalysts make endothermic reactions exothermic'],
    correctAnswer: 2,
    explanation: 'Catalysts lower the activation energy by providing an alternative reaction pathway. They do not change ΔG, ΔH, or K, and they are regenerated at the end of the reaction.',
    difficulty: 'easy',
  },
]

export function generateExitQuiz(count: number = 10): ExitQuizQuestion[] {
  const shuffled = [...questionPool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length)).map((q, i) => ({
    id: `mcat-genchem-${i}`,
    question: q.question,
    options: q.options,
    correctIndex: q.correctAnswer,
    explanation: q.explanation,
    category: 'mcat-general-chemistry',
  }))
}
