/**
 * Entrance Quiz — Acid-Base Equilibrium (MCAT)
 * 10 questions · 5 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — pH, pOH & Strong vs. Weak Acids
  { id: 'mgab-ent-1a', question: 'A solution has [H⁺] = 1 × 10⁻⁴ M. What is its pH?', options: ['2', '4', '7', '10'], correctIndex: 1, explanation: 'pH = −log[H⁺] = −log(10⁻⁴) = 4.', partNumber: 1, partTitle: 'pH, pOH & Strong vs. Weak Acids' },
  { id: 'mgab-ent-1b', question: 'Which is a strong acid in water?', options: ['HF', 'HCN', 'HCl', 'CH₃COOH'], correctIndex: 2, explanation: 'HCl dissociates ~100% in water. HF, HCN, and acetic acid are weak (only partial dissociation).', partNumber: 1, partTitle: 'pH, pOH & Strong vs. Weak Acids' },

  // Part 2 — Ka, Kb & Henderson-Hasselbalch
  { id: 'mgab-ent-2a', question: 'For a weak acid HA with $K_a = 1.0 \\times 10^{-5}$, what is its $pK_a$?', options: ['1', '5', '9', '14'], correctIndex: 1, explanation: '$pK_a = -\\log K_a = -\\log(10^{-5}) = 5$.', partNumber: 2, partTitle: 'Ka, Kb & Henderson-Hasselbalch' },
  { id: 'mgab-ent-2b', question: 'Henderson-Hasselbalch: a buffer with [A⁻]/[HA] = 1 has a pH equal to:', options: ['$pK_a - 1$', '$pK_a$', '$pK_a + 1$', '7.00 always'], correctIndex: 1, explanation: '$pH = pK_a + \\log([A^-]/[HA])$. When the ratio is 1, log(1) = 0 → pH = pKa.', partNumber: 2, partTitle: 'Ka, Kb & Henderson-Hasselbalch' },

  // Part 3 — Buffers & Physiological Chemistry
  { id: 'mgab-ent-3a', question: 'A buffer is most effective at pH:', options: ['Equal to its $pK_a$', 'Equal to 7.0 only', 'More than 2 units away from $pK_a$', 'At the equivalence point of titration'], correctIndex: 0, explanation: 'Buffers have maximum capacity within ±1 pH unit of their pKa, where [A⁻] ≈ [HA] and the buffer can absorb added acid or base.', partNumber: 3, partTitle: 'Buffers & Physiological Chemistry' },
  { id: 'mgab-ent-3b', question: 'The primary buffer system in human blood plasma is:', options: ['Phosphate (H₂PO₄⁻ / HPO₄²⁻)', 'Carbonic acid / bicarbonate (H₂CO₃ / HCO₃⁻)', 'Ammonia / ammonium', 'Acetic acid / acetate'], correctIndex: 1, explanation: 'Blood pH (~7.4) is maintained by the carbonic acid/bicarbonate system, regulated by the lungs (CO₂) and kidneys (HCO₃⁻).', partNumber: 3, partTitle: 'Buffers & Physiological Chemistry' },

  // Part 4 — Titrations & Indicators
  { id: 'mgab-ent-4a', question: 'In a strong acid–strong base titration, the pH at the equivalence point is:', options: ['Less than 7', 'Exactly 7', 'Greater than 7', 'Equal to the $pK_a$ of the acid'], correctIndex: 1, explanation: 'Both ions in solution at equivalence are spectator ions (Na⁺, Cl⁻ etc.) — neither hydrolyzes, so pH = 7.', partNumber: 4, partTitle: 'Titrations & Indicators' },
  { id: 'mgab-ent-4b', question: 'A weak acid is titrated with a strong base. The half-equivalence point is significant because at it:', options: ['The solution is most acidic', 'pH = pKa of the weak acid', 'The indicator first changes color', 'All the acid has been neutralized'], correctIndex: 1, explanation: 'At half-equivalence, [HA] = [A⁻], so the Henderson-Hasselbalch equation gives pH = pKa. This is how pKa values are commonly measured.', partNumber: 4, partTitle: 'Titrations & Indicators' },

  // Part 5 — Equilibrium, Ksp & Le Chatelier's Principle
  { id: 'mgab-ent-5a', question: 'For AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), if Ksp = 1.8 × 10⁻¹⁰, what is the molar solubility of AgCl in pure water?', options: ['1.8 × 10⁻¹⁰ M', '1.3 × 10⁻⁵ M', '9.0 × 10⁻⁶ M', '1.0 × 10⁻⁵ M'], correctIndex: 1, explanation: 'Let s = solubility. Ksp = s² = 1.8 × 10⁻¹⁰ → s ≈ √(1.8 × 10⁻¹⁰) ≈ 1.3 × 10⁻⁵ M.', partNumber: 5, partTitle: "Equilibrium, Ksp & Le Chatelier's Principle" },
  { id: 'mgab-ent-5b', question: 'For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ΔH < 0. Increasing temperature will:', options: ['Shift equilibrium right (more NH₃)', 'Shift equilibrium left (less NH₃)', 'Have no effect on the position of equilibrium', 'Increase Kp without shifting'], correctIndex: 1, explanation: "For an exothermic reaction, heat is a 'product.' Adding heat (raising T) shifts equilibrium toward reactants — Le Châtelier.", partNumber: 5, partTitle: "Equilibrium, Ksp & Le Chatelier's Principle" },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'pH, pOH & Strong vs. Weak Acids' },
    { partNumber: 2, partTitle: 'Ka, Kb & Henderson-Hasselbalch' },
    { partNumber: 3, partTitle: 'Buffers & Physiological Chemistry' },
    { partNumber: 4, partTitle: 'Titrations & Indicators' },
    { partNumber: 5, partTitle: "Equilibrium, Ksp & Le Chatelier's Principle" },
  ]
}
