/**
 * Entrance Quiz — Acids, Bases & Buffers (MCAT)
 * 9 questions · 3 parts (3 / 3 / 3)
 * Part titles match the interactive lesson's "Part N of 3" lines.
 * Titrations, equilibrium and Ksp moved to
 * mcat-general-chemistry-titrations-equilibrium-mcat when the topic was split (Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'pH, pOH, $K_w$, and Strong vs. Weak Acids/Bases'
const P2 = '$K_a$, $K_b$, Henderson-Hasselbalch & Percent Dissociation'
const P3 = 'Buffers: Mechanism, Capacity & Physiological Relevance'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — pH, pOH, Kw, and Strong vs. Weak Acids/Bases
  { id: 'mgab-ent-1a', question: 'A solution has $[\\text{H}^+] = 1 \\times 10^{-4}$ M. What is its pH?', options: ['2', '4', '7', '10'], correctIndex: 1, explanation: '$\\text{pH} = -\\log[\\text{H}^+] = -\\log(10^{-4}) = 4$. A value of 10 is the matching pOH, since pH + pOH = 14.', partNumber: 1, partTitle: P1 },
  { id: 'mgab-ent-1b', question: 'Which acid is strong in water?', options: ['HF', 'HCN', 'HCl', '$\\text{CH}_3\\text{COOH}$'], correctIndex: 2, explanation: 'HCl dissociates essentially 100% in water. HF, HCN and acetic acid are weak acids that dissociate only partly.', partNumber: 1, partTitle: P1 },
  { id: 'mgab-ent-1c', question: 'What is the conjugate base of $\\text{H}_2\\text{PO}_4^-$?', options: ['$\\text{H}_3\\text{PO}_4$', '$\\text{PO}_4^{3-}$', '$\\text{H}_3\\text{O}^+$', '$\\text{HPO}_4^{2-}$'], correctIndex: 3, explanation: 'A conjugate base has one fewer $\\text{H}^+$ than its acid, so removing one proton from $\\text{H}_2\\text{PO}_4^-$ gives $\\text{HPO}_4^{2-}$. $\\text{H}_3\\text{PO}_4$ is its conjugate ACID (one more $\\text{H}^+$), $\\text{PO}_4^{3-}$ is two protons away, and $\\text{H}_3\\text{O}^+$ belongs to the water pair.', partNumber: 1, partTitle: P1 },

  // Part 2 — Ka, Kb, Henderson-Hasselbalch & Percent Dissociation
  { id: 'mgab-ent-2a', question: 'A weak acid HA has $K_a = 1.0 \\times 10^{-5}$. What is its $\\text{p}K_a$?', options: ['1', '5', '9', '14'], correctIndex: 1, explanation: '$\\text{p}K_a = -\\log K_a = -\\log(10^{-5}) = 5$. Nine is the $\\text{p}K_b$ of its conjugate base, since $\\text{p}K_a + \\text{p}K_b = 14$.', partNumber: 2, partTitle: P2 },
  { id: 'mgab-ent-2b', question: 'By the Henderson-Hasselbalch equation, a buffer with $[\\text{A}^-]/[\\text{HA}] = 1$ has a pH:', options: ['One unit below the $\\text{p}K_a$', 'One unit above the $\\text{p}K_a$', "Equal to the acid's $\\text{p}K_a$", 'Of exactly 7.00, for any acid'], correctIndex: 2, explanation: '$\\text{pH} = \\text{p}K_a + \\log([\\text{A}^-]/[\\text{HA}])$, and $\\log 1 = 0$, so the pH equals the $\\text{p}K_a$. A ratio of 10 or 0.1 would put the pH one unit above or below it, and only a buffer whose $\\text{p}K_a$ is 7 sits at 7.', partNumber: 2, partTitle: P2 },
  { id: 'mgab-ent-2c', question: 'Which statement about the stepwise $K_a$ values of phosphoric acid, $\\text{H}_3\\text{PO}_4$, is correct?', options: ['$K_{a1} = K_{a2} = K_{a3}$, as the three protons are identical', '$K_{a1} < K_{a2} < K_{a3}$, as each step makes the next easier', 'Only $K_{a3}$ sets the pH, as the last proton is most acidic', '$K_{a1} > K_{a2} > K_{a3}$, as each step leaves a more negative ion'], correctIndex: 3, explanation: 'Each proton must leave an ion that is already more negative and holds the next $\\text{H}^+$ more tightly, so $K_{a1} \\gg K_{a2} \\gg K_{a3}$. That is why the first dissociation alone sets the pH in practice.', partNumber: 2, partTitle: P2 },

  // Part 3 — Buffers: Mechanism, Capacity & Physiological Relevance
  { id: 'mgab-ent-3a', question: 'A buffer resists pH change best when the pH is:', options: ["Equal to its acid's $\\text{p}K_a$", 'Exactly 7.0, for any buffer', 'Two or more units from the $\\text{p}K_a$', 'At the equivalence point of a titration'], correctIndex: 0, explanation: 'At pH = $\\text{p}K_a$, $[\\text{A}^-] = [\\text{HA}]$, so the buffer holds equal reserves to absorb added acid or base. It stays useful within about $\\text{p}K_a \\pm 1$; two units away one component has nearly run out, and at equivalence the weak acid is gone.', partNumber: 3, partTitle: P3 },
  { id: 'mgab-ent-3b', question: 'The main buffer system of human blood plasma is:', options: ['Phosphate ($\\text{H}_2\\text{PO}_4^- / \\text{HPO}_4^{2-}$)', 'Carbonic acid / bicarbonate ($\\text{H}_2\\text{CO}_3 / \\text{HCO}_3^-$)', 'Ammonium / ammonia ($\\text{NH}_4^+ / \\text{NH}_3$)', 'Acetic acid / acetate ($\\text{CH}_3\\text{COOH} / \\text{CH}_3\\text{COO}^-$)'], correctIndex: 1, explanation: 'Blood is held near pH 7.40 by carbonic acid and bicarbonate, with the lungs setting $\\text{CO}_2$ and the kidneys setting $\\text{HCO}_3^-$. Phosphate has a $\\text{p}K_a$ closer to 7.4, but bicarbonate dominates plasma because the body can adjust both of its components.', partNumber: 3, partTitle: P3 },
  { id: 'mgab-ent-3c', question: 'A buffer is diluted with an equal volume of pure water. What happens to its pH and to its buffer capacity per litre?', options: ['The pH barely changes, and the capacity falls', 'The pH rises one unit, and the capacity falls', 'The pH barely changes, and the capacity rises', 'The pH falls one unit; the capacity is unchanged'], correctIndex: 0, explanation: 'Dilution lowers [HA] and $[\\text{A}^-]$ by the same factor, so their ratio, and the Henderson-Hasselbalch pH, stay essentially the same. But each millilitre now holds half the acid and base reserves, so the buffer absorbs less added acid or base before its pH swings.', partNumber: 3, partTitle: P3 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
  ]
}
