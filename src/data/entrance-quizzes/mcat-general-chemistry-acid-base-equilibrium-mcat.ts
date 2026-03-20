/**
 * Entrance Quiz — Acid-Base Equilibrium (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'mgab-ent-1a', question: 'A Lewis acid is defined as a species that:', options: ['Donates a proton', 'Accepts a proton', 'Donates an electron pair', 'Accepts an electron pair'], correctIndex: 3, explanation: 'Lewis acids are electron pair acceptors. This definition is broader than Brønsted-Lowry and includes species like $BF_3$ and $Al^{3+}$.', partNumber: 1, partTitle: 'Acids & Bases Basics' },
  { id: 'mgab-ent-1b', question: 'Which of the following is a weak acid?', options: ['$HCl$', '$HNO_3$', '$H_2SO_4$', '$CH_3COOH$ (acetic acid)'], correctIndex: 3, explanation: 'Acetic acid ($pK_a \\approx 4.75$) is a weak acid — it only partially dissociates. HCl, HNO₃, and H₂SO₄ are strong acids.', partNumber: 1, partTitle: 'Acids & Bases Basics' },
  { id: 'mgab-ent-2a', question: 'If $[H^+] = 1 \\times 10^{-9}$ M, the pH of the solution is:', options: ['9', '5', '−9', '4'], correctIndex: 0, explanation: '$pH = -\\log[H^+] = -\\log(10^{-9}) = 9$. This is a basic solution (pH > 7).', partNumber: 2, partTitle: 'pH & pOH' },
  { id: 'mgab-ent-2b', question: 'A solution has pH = 11. What is the pOH?', options: ['11', '3', '7', '1'], correctIndex: 1, explanation: 'At 25°C, pH + pOH = 14. So pOH = 14 − 11 = 3. This solution is strongly basic.', partNumber: 2, partTitle: 'pH & pOH' },
  { id: 'mgab-ent-3a', question: 'The $K_a$ expression for the dissociation of acetic acid ($CH_3COOH \\rightleftharpoons CH_3COO^- + H^+$) is:', options: ['$K_a = \\frac{[CH_3COOH]}{[CH_3COO^-][H^+]}$', '$K_a = \\frac{[CH_3COO^-][H^+]}{[CH_3COOH]}$', '$K_a = [CH_3COO^-][H^+]$', '$K_a = [CH_3COOH]$'], correctIndex: 1, explanation: 'For an acid dissociation: $K_a = \\frac{[\\text{products}]}{[\\text{reactants}]} = \\frac{[CH_3COO^-][H^+]}{[CH_3COOH]}$.', partNumber: 3, partTitle: 'Ka & Kb' },
  { id: 'mgab-ent-3b', question: 'The relationship between $K_a$ and $K_b$ for a conjugate acid-base pair at 25°C is:', options: ['$K_a + K_b = 14$', '$K_a \\times K_b = K_w = 10^{-14}$', '$K_a = K_b$', '$K_a / K_b = K_w$'], correctIndex: 1, explanation: 'For a conjugate pair: $K_a \\times K_b = K_w = 1.0 \\times 10^{-14}$ at 25°C. A stronger acid has a weaker conjugate base.', partNumber: 3, partTitle: 'Ka & Kb' },
  { id: 'mgab-ent-4a', question: 'A buffer solution resists changes in pH by containing:', options: ['Only a strong acid and water', 'A weak acid and its conjugate base (or weak base and conjugate acid)', 'Only a strong base', 'A strong acid and a strong base in equal amounts'], correctIndex: 1, explanation: 'Buffers consist of a weak acid and its conjugate base (e.g., $CH_3COOH/CH_3COO^-$) that neutralize added acid or base.', partNumber: 4, partTitle: 'Buffers' },
  { id: 'mgab-ent-4b', question: "The Henderson-Hasselbalch equation is $pH = pK_a + \\log([A^-]/[HA])$. A buffer has equal concentrations of acid and conjugate base. Its pH equals:", options: ['0', '$pK_a - 1$', '$pK_a$', '$pK_a + 1$'], correctIndex: 2, explanation: 'When $[A^-] = [HA]$, $\\log(1) = 0$, so $pH = pK_a$. This is the optimal buffering point.', partNumber: 4, partTitle: 'Buffers' },
  { id: 'mgab-ent-5a', question: 'At the equivalence point of a strong acid–strong base titration:', options: ['pH = 7 always', 'The solution is acidic', 'The solution is basic', 'pH equals the pKa of the acid'], correctIndex: 0, explanation: 'Strong acid + strong base → salt + water. The salt does not hydrolyze, so pH = 7 at the equivalence point at 25°C.', partNumber: 5, partTitle: 'Titration Concepts' },
  { id: 'mgab-ent-5b', question: 'During the titration of a weak acid with a strong base, the pH at the half-equivalence point equals:', options: ['7.0', 'pKb of the base', 'pKa of the weak acid', '14 − pKb'], correctIndex: 2, explanation: 'At the half-equivalence point, [HA] = [A⁻], so Henderson-Hasselbalch gives pH = pKa. This is used experimentally to determine pKa.', partNumber: 5, partTitle: 'Titration Concepts' },
  { id: 'mgab-ent-6a', question: 'What is the pH of a 0.10 M solution of HCl (strong acid)?', options: ['0', '1', '2', '7'], correctIndex: 1, explanation: 'HCl fully dissociates: $[H^+] = 0.10 = 10^{-1}$ M. $pH = -\\log(10^{-1}) = 1$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgab-ent-6b', question: 'A buffer is made with 0.1 mol $NH_3$ and 0.1 mol $NH_4^+$ ($pK_a$ of $NH_4^+$ = 9.25). What is the pH?', options: ['4.75', '7.0', '9.25', '11.0'], correctIndex: 2, explanation: 'By Henderson-Hasselbalch: $pH = pK_a + \\log([NH_3]/[NH_4^+]) = 9.25 + \\log(1) = 9.25$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'mgab-ent-7a', question: 'Which indicator would be most appropriate for a strong acid–strong base titration (equivalence point at pH ≈ 7)?', options: ['Methyl orange (range pH 3.1–4.4)', 'Bromothymol blue (range pH 6.0–7.6)', 'Phenolphthalein (range pH 8.2–10.0)', 'Litmus (range pH 5–8)'], correctIndex: 1, explanation: 'Bromothymol blue changes color near pH 7, making it ideal for strong acid–strong base titrations where the equivalence point is neutral.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'mgab-ent-7b', question: 'Polyprotic acids like $H_3PO_4$ have multiple $K_a$ values. Which is always true?', options: ['$K_{a1} < K_{a2} < K_{a3}$', '$K_{a1} > K_{a2} > K_{a3}$', 'All $K_a$ values are equal', '$K_{a2}$ is always greater than $K_{a1}$'], correctIndex: 1, explanation: 'Each successive proton is removed from an increasingly negative ion, requiring more energy. Thus $K_{a1} > K_{a2} > K_{a3}$.', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Acids & Bases Basics' },
    { partNumber: 2, partTitle: 'pH & pOH' },
    { partNumber: 3, partTitle: 'Ka & Kb' },
    { partNumber: 4, partTitle: 'Buffers' },
    { partNumber: 5, partTitle: 'Titration Concepts' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
