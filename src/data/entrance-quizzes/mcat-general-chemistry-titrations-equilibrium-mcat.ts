/**
 * Entrance Quiz — Titrations, Equilibrium & Solubility (MCAT)
 * 8 questions · 2 parts (4 / 4)
 * Part titles match the interactive lesson's "Part N of 2" lines.
 * Created when this topic was split off mcat-general-chemistry-acid-base-equilibrium-mcat
 * (Nov 2026); the equivalence-point, half-equivalence and Le Chatelier items came
 * over from that topic's old Parts 4 and 5.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Acid-Base Titrations'
const P2 = "Equilibrium: $K_c$, $K_p$, Le Chatelier's Principle & $K_{sp}$"

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Acid-Base Titrations
  { id: 'mgte-ent-1a', question: 'In a strong acid–strong base titration, the pH at the equivalence point is:', options: ['Below 7, since the salt formed is acidic', 'Exactly 7, since neither ion hydrolyzes', 'Above 7, since the salt formed is basic', 'Equal to the $\\text{p}K_a$ of the strong acid'], correctIndex: 1, explanation: 'At equivalence the flask holds water and a salt such as NaCl, whose ions come from a strong acid and a strong base and do not react with water, so the pH is 7.00 at 25 °C. A weak acid\'s conjugate base would push the pH above 7, and a strong acid has no $\\text{p}K_a$ to read off the curve.', partNumber: 1, partTitle: P1 },
  { id: 'mgte-ent-1b', question: 'An unknown weak acid is titrated with NaOH. After exactly half the equivalence volume has been added, the pH is 5.20. What is the acid\'s $\\text{p}K_a$?', options: ['10.40', '7.00', '5.20', '2.60'], correctIndex: 2, explanation: 'At half-equivalence, half of the HA has become $\\text{A}^-$, so $[\\text{HA}] = [\\text{A}^-]$ and Henderson-Hasselbalch gives pH = $\\text{p}K_a = 5.20$. Doubling or halving the pH has no basis, and 7.00 is the equivalence pH of a strong acid, not a property of this weak one.', partNumber: 1, partTitle: P1 },
  { id: 'mgte-ent-1c', question: 'On a pH titration curve, where does the equivalence point lie?', options: ['In the middle of the flat buffer region', 'Where the pH first begins to change', 'At the steepest point of the curve', 'Wherever the pH equals exactly 7.00'], correctIndex: 2, explanation: 'At equivalence the last of the acid is used up, so one more drop of titrant swings the pH sharply: the equivalence point is the steepest (inflection) point. The flat buffer region centers on HALF-equivalence, and only a strong acid–strong base titration reaches equivalence at pH 7.00.', partNumber: 1, partTitle: P1 },
  { id: 'mgte-ent-1d', question: 'Ammonia, a weak base, is titrated with HCl. At the equivalence point the pH is:', options: ['Below 7, since $\\text{NH}_4^+$ donates protons to water', 'Exactly 7, since all of the ammonia has been neutralized', 'Above 7, since the solution started out basic', 'Equal to the $\\text{p}K_b$ of ammonia'], correctIndex: 0, explanation: 'At equivalence every ammonia molecule has become $\\text{NH}_4^+$, a weak acid that gives some protons to water, so the pH sits below 7 (about 5). Neutralization does not mean neutral pH unless both partners are strong, the basic starting pH is gone once the base is consumed, and the $\\text{p}K_b$ shows up only as the pOH at the half-equivalence point.', partNumber: 1, partTitle: P1 },

  // Part 2 — Equilibrium: Kc, Kp, Le Chatelier's Principle & Ksp
  { id: 'mgte-ent-2a', question: 'For $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta H < 0$. Raising the temperature will:', options: ['Shift it right, forming more $\\text{NH}_3$', 'Shift it left, leaving less $\\text{NH}_3$', 'Leave the equilibrium position unchanged', 'Raise $K$ without shifting the position'], correctIndex: 1, explanation: 'For an exothermic reaction, heat acts like a product. Adding heat shifts the equilibrium toward the reactants, so less $\\text{NH}_3$ remains, and $K$ itself falls, since temperature is the one change that alters $K$.', partNumber: 2, partTitle: P2 },
  { id: 'mgte-ent-2b', question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\text{HI}(g)$, $K_c = 50$. A flask holds $[\\text{HI}] = 1.0$ M and $[\\text{H}_2] = [\\text{I}_2] = 0.10$ M. What is $Q$, and which way does the reaction run?', options: ['$Q = 100$; it runs left', '$Q = 100$; it runs right', '$Q = 10$; it runs right', '$Q = 10$; it runs left'], correctIndex: 0, explanation: '$Q = [\\text{HI}]^2/([\\text{H}_2][\\text{I}_2]) = (1.0)^2/(0.10 \\times 0.10) = 100$. Since $Q > K$, there is too much product, so the reaction runs left toward $\\text{H}_2$ and $\\text{I}_2$. A $Q$ of 10 drops one reactant from the denominator.', partNumber: 2, partTitle: P2 },
  { id: 'mgte-ent-2c', question: 'In which liquid is barium sulfate, $\\text{BaSO}_4$, least soluble?', options: ['Pure water', '0.10 M NaCl', '0.010 M $\\text{Na}_2\\text{SO}_4$', '0.10 M $\\text{Na}_2\\text{SO}_4$'], correctIndex: 3, explanation: 'A common ion pushes $\\text{BaSO}_4(s) \\rightleftharpoons \\text{Ba}^{2+} + \\text{SO}_4^{2-}$ to the left: the more sulfate already present, the less $\\text{BaSO}_4$ dissolves before $Q_{sp}$ reaches $K_{sp}$, so 0.10 M $\\text{Na}_2\\text{SO}_4$ suppresses it most. NaCl shares no ion with $\\text{BaSO}_4$, so it barely changes the solubility from that in pure water.', partNumber: 2, partTitle: P2 },
  { id: 'mgte-ent-2d', question: 'A saturated solution of AgCl is acidified with dilute nitric acid. What happens to the amount of AgCl that can dissolve?', options: ['It rises sharply, since $\\text{H}^+$ ties up $\\text{Cl}^-$ as HCl', 'It falls sharply, since nitrate acts as a common ion', 'It barely changes, since $\\text{Cl}^-$ is not protonated', 'It rises sharply, since $\\text{H}^+$ displaces $\\text{Ag}^+$ from the solid'], correctIndex: 2, explanation: 'Acid raises a salt\'s solubility only when it can remove the anion, and chloride is the anion of a strong acid: at any ordinary pH it stays $\\text{Cl}^-$, so $Q_{sp}$ is untouched and AgCl is about as insoluble in dilute acid as in water. HCl is fully dissociated, so $\\text{H}^+$ cannot tie up $\\text{Cl}^-$; nitrate shares no ion with AgCl; and $\\text{H}^+$ does not displace $\\text{Ag}^+$. A carbonate or fluoride salt, whose anion is protonated, would dissolve far more.', partNumber: 2, partTitle: P2 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
  ]
}
