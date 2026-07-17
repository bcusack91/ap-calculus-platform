/** Entrance Quiz — Acid-Base Theories & pH — 14 questions (2 per part) */
import type { EntranceQuizQuestion } from './moles-molar-mass'
const questions: EntranceQuizQuestion[] = [
  { id: 'abt-ent-1a', question: 'According to Arrhenius, an acid is a substance that:', options: ['Donates a proton', 'Produces $H^+$ ions in aqueous solution', 'Accepts an electron pair', 'Produces $OH^-$ ions'], correctIndex: 1, explanation: 'Arrhenius defined acids as substances that increase $H^+$ (or $H_3O^+$) concentration in water.', partNumber: 1, partTitle: 'Arrhenius & Brønsted-Lowry' },
  { id: 'abt-ent-1b', question: 'A Brønsted-Lowry base is a substance that:', options: ['Produces $OH^-$ in water', 'Accepts a proton ($H^+$)', 'Donates a proton', 'Donates an electron pair'], correctIndex: 1, explanation: 'Brønsted-Lowry bases are proton acceptors. This is broader than Arrhenius — it includes non-aqueous species like $NH_3$.', partNumber: 1, partTitle: 'Arrhenius & Brønsted-Lowry' },
  { id: 'abt-ent-2a', question: 'In the reaction $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$, the conjugate acid of $NH_3$ is:', options: ['$OH^-$', '$NH_4^+$', '$H_2O$', '$H_3O^+$'], correctIndex: 1, explanation: '$NH_3$ gains a proton → $NH_4^+$. A conjugate acid is formed when a base accepts a proton.', partNumber: 2, partTitle: 'Conjugate Acid-Base Pairs' },
  { id: 'abt-ent-2b', question: 'The conjugate base of $H_2SO_4$ is:', options: ['$SO_4^{2-}$', '$HSO_4^-$', '$H_3O^+$', '$OH^-$'], correctIndex: 1, explanation: '$H_2SO_4$ donates one proton → $HSO_4^-$. The conjugate base has one fewer proton.', partNumber: 2, partTitle: 'Conjugate Acid-Base Pairs' },
  { id: 'abt-ent-3a', question: 'A solution with pH = 3 has an $[H^+]$ of:', options: ['$3$ M', '$10^{-3}$ M', '$10^{3}$ M', '$10^{-11}$ M'], correctIndex: 1, explanation: '$pH = -\\log[H^+]$, so $[H^+] = 10^{-pH} = 10^{-3}$ M.', partNumber: 3, partTitle: 'The pH Scale' },
  { id: 'abt-ent-3b', question: 'A neutral aqueous solution at 25°C has pH:', options: ['0', '7', '14', '1'], correctIndex: 1, explanation: 'At 25°C, $[H^+] = [OH^-] = 10^{-7}$ M in pure water, giving pH = 7.', partNumber: 3, partTitle: 'The pH Scale' },
  { id: 'abt-ent-4a', question: 'Which of the following is a strong acid?', options: ['$CH_3COOH$', '$HF$', '$HCl$', '$H_2CO_3$'], correctIndex: 2, explanation: 'HCl is one of the six common strong acids (HCl, HBr, HI, $HNO_{3}$, $H_{2}SO_{4}$, $HClO_{4}$) that fully dissociate in water.', partNumber: 4, partTitle: 'Strong Acids & Bases' },
  { id: 'abt-ent-4b', question: 'A 0.010 M solution of NaOH has $[OH^-]$ =:', options: ['$0.010$ M', '$0.020$ M', '$0.005$ M', '$10^{-12}$ M'], correctIndex: 0, explanation: 'NaOH is a strong base that fully dissociates: $NaOH \\to Na^+ + OH^-$. So $[OH^-] = 0.010$ M.', partNumber: 4, partTitle: 'Strong Acids & Bases' },
  { id: 'abt-ent-5a', question: 'If $[H^+] = 2.5 \\times 10^{-4}$ M, the pH is approximately:', options: ['2.5', '3.6', '4.0', '10.4'], correctIndex: 1, explanation: '$pH = -\\log(2.5 \\times 10^{-4}) = -(\\log 2.5 + \\log 10^{-4}) = -(0.40 - 4) = 3.6$.', partNumber: 5, partTitle: 'pH & pOH Calculations' },
  { id: 'abt-ent-5b', question: 'At 25°C, pH + pOH always equals:', options: ['7', '10', '14', 'It varies'], correctIndex: 2, explanation: '$K_w = [H^+][OH^-] = 10^{-14}$ at 25°C, so $pH + pOH = 14$.', partNumber: 5, partTitle: 'pH & pOH Calculations' },
  { id: 'abt-ent-6a', question: 'The pH of a 0.0010 M $HNO_{3}$ solution is:', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: '$HNO_3$ is a strong acid: $[H^+] = 0.0010 = 10^{-3}$ M. $pH = -\\log(10^{-3}) = 3$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'abt-ent-6b', question: 'A solution has pOH = 2.0. Its pH at 25°C is:', options: ['2.0', '7.0', '12.0', '14.0'], correctIndex: 2, explanation: '$pH = 14 - pOH = 14 - 2.0 = 12.0$. This is a strongly basic solution.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'abt-ent-7a', question: 'Water acts as both an acid and a base. This property is called being:', options: ['Amphiprotic (amphoteric)', 'Diprotic', 'Monoprotic', 'Aprotic'], correctIndex: 0, explanation: 'Water is amphiprotic — it can donate a proton (act as acid) or accept a proton (act as base).', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'abt-ent-7b', question: 'The autoionization of water produces equal concentrations of:', options: ['$Na^+$ and $Cl^-$', '$H_3O^+$ and $OH^-$', '$H_2$ and $O_2$', '$H^+$ and $e^-$'], correctIndex: 1, explanation: '$2H_2O \\rightleftharpoons H_3O^+ + OH^-$. In pure water, $[H_3O^+] = [OH^-] = 10^{-7}$ M at 25°C.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]
export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Arrhenius & Brønsted-Lowry' }, { partNumber: 2, partTitle: 'Conjugate Acid-Base Pairs' },
    { partNumber: 3, partTitle: 'The pH Scale' }, { partNumber: 4, partTitle: 'Strong Acids & Bases' },
    { partNumber: 5, partTitle: 'pH & pOH Calculations' }, { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
