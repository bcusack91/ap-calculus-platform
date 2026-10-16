/**
 * Entrance Quiz — Weak Acids & Bases (Ka and Kb) — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-weak-acids-bases-ka-kb-part1..7). Items follow what each
 * part file actually teaches:
 *   1 Weak Acid Equilibria           — ranking by Ka and pKa, weak vs strong at equal concentration
 *   2 ICE Tables for Weak Acids        — weak-acid pH from an ICE table, Ka and % ionization from pH
 *   3 Weak Base Equilibria & Kb      — weak-base pH, acidic and basic salts
 *   4 Relationship Between Ka & Kb   — Ka·Kb = Kw, conjugate-base strength and salt pH
 *   5 Polyprotic Acids               — percent ionization on dilution, first ionization dominates
 *   6 Problem-Solving Workshop       — pH of a basic salt, Kb from pH
 *   7 Synthesis & AP Review          — ranking pH of bases and salts, when the quadratic is needed
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Weak Acid Equilibria
  {
    id: 'wakb-ent-1a',
    question: 'Four weak acids are described: W has $K_a = 2.5 \\times 10^{-4}$, X has $pK_a = 4.20$, Y has $K_a = 1.0 \\times 10^{-5}$ and Z has $pK_a = 3.10$. Which is the strongest acid?',
    options: ['Acid Z', 'Acid W', 'Acid X', 'Acid Y'],
    correctIndex: 0,
    explanation: 'Converting everything to $K_a$: Z is $10^{-3.10} = 7.9 \\times 10^{-4}$, W is $2.5 \\times 10^{-4}$, X is $6.3 \\times 10^{-5}$ and Y is $1.0 \\times 10^{-5}$. The largest $K_a$ (lowest $pK_a$) is the strongest acid.',
    partNumber: 1,
    partTitle: 'Weak Acid Equilibria',
  },
  {
    id: 'wakb-ent-1b',
    question: 'How does 0.10 M HF compare with 0.10 M HCl?',
    options: [
      'Both have pH 1.00, as their concentrations match',
      'HF has the higher pH because it ionizes only partly',
      'HF has the lower pH because its $K_a$ is small',
      'HCl contains more un-ionized acid molecules',
    ],
    correctIndex: 1,
    explanation: 'HCl ionizes completely, giving $[\\text{H}^+] = 0.10$ M and pH 1.00, while HF reaches an equilibrium with most molecules un-ionized, so its $[\\text{H}^+]$ is lower and its pH higher.',
    partNumber: 1,
    partTitle: 'Weak Acid Equilibria',
  },

  // Part 2: ICE Tables for Weak Acids
  {
    id: 'wakb-ent-2a',
    question: 'What is the pH of 0.20 M HOCl ($K_a = 3.5 \\times 10^{-8}$)?',
    options: ['0.70', '7.46', '4.08', '8.15'],
    correctIndex: 2,
    explanation: '$[\\text{H}^+] = \\sqrt{(3.5 \\times 10^{-8})(0.20)} = 8.4 \\times 10^{-5}$ M (0.04% ionized), so pH = 4.08. Treating HOCl as strong gives 0.70, 7.46 is the $pK_a$, and 8.15 skips the square root.',
    partNumber: 2,
    partTitle: 'ICE Tables for Weak Acids',
  },
  {
    id: 'wakb-ent-2b',
    question: 'A 0.050 M solution of a weak acid HA has pH 3.00. What are its percent ionization and $K_a$?',
    options: [
      '2.0%, with $K_a = 1.0 \\times 10^{-6}$',
      '20%, with $K_a = 2.0 \\times 10^{-5}$',
      '2.0%, with $K_a = 1.0 \\times 10^{-3}$',
      '2.0%, with $K_a = 2.0 \\times 10^{-5}$',
    ],
    correctIndex: 3,
    explanation: '$[\\text{H}^+] = 1.0 \\times 10^{-3}$ M, which is 2.0% of 0.050 M, and $K_a = (1.0 \\times 10^{-3})^2/0.049 = 2.0 \\times 10^{-5}$. Leaving out the division by concentration gives $1.0 \\times 10^{-6}$, and $1.0 \\times 10^{-3}$ is just $[\\text{H}^+]$.',
    partNumber: 2,
    partTitle: 'ICE Tables for Weak Acids',
  },

  // Part 3: Weak Base Equilibria & Kb
  {
    id: 'wakb-ent-3a',
    question: 'What is the pH of 0.050 M $\\text{NH}_3$ ($K_b = 1.8 \\times 10^{-5}$) at 25 °C?',
    options: ['10.98', '3.02', '12.70', '9.25'],
    correctIndex: 0,
    explanation: '$[\\text{OH}^-] = \\sqrt{(1.8 \\times 10^{-5})(0.050)} = 9.5 \\times 10^{-4}$ M, so pOH = 3.02 and pH = 10.98. Reporting 3.02 stops at the pOH, 12.70 treats ammonia as a strong base, and 9.25 is the $pK_a$ of $\\text{NH}_4^+$, not the pH of this solution.',
    partNumber: 3,
    partTitle: 'Weak Base Equilibria & Kb',
  },
  {
    id: 'wakb-ent-3b',
    question: 'Which 0.10 M salt solution is acidic?',
    options: ['$\\text{NaCH}_3\\text{COO}$', '$\\text{NH}_4\\text{Cl}$', '$\\text{Na}_2\\text{SO}_4$', '$\\text{NaC}_6\\text{H}_5\\text{COO}$'],
    correctIndex: 1,
    explanation: '$\\text{NH}_4^+$ is the conjugate acid of the weak base $\\text{NH}_3$ and donates protons to water, while $\\text{Cl}^-$ is a spectator. Acetate and benzoate are weak bases, and sodium sulfate is essentially neutral.',
    partNumber: 3,
    partTitle: 'Weak Base Equilibria & Kb',
  },

  // Part 4: Relationship Between Ka & Kb
  {
    id: 'wakb-ent-4a',
    question: 'Pyridine, $\\text{C}_5\\text{H}_5\\text{N}$, has $K_b = 1.7 \\times 10^{-9}$. What is $K_a$ for its conjugate acid, $\\text{C}_5\\text{H}_5\\text{NH}^+$?',
    options: [
      '$1.7 \\times 10^{-9}$',
      '$1.7 \\times 10^{-23}$',
      '$5.9 \\times 10^{-6}$',
      '$5.9 \\times 10^{8}$',
    ],
    correctIndex: 2,
    explanation: '$K_a = K_w/K_b = (1.0 \\times 10^{-14})/(1.7 \\times 10^{-9}) = 5.9 \\times 10^{-6}$. Multiplying by $K_w$ gives $1.7 \\times 10^{-23}$, and $1/K_b$ gives $5.9 \\times 10^{8}$.',
    partNumber: 4,
    partTitle: 'Relationship Between Ka & Kb',
  },
  {
    id: 'wakb-ent-4b',
    question: 'Given $K_a$(HF) $= 6.8 \\times 10^{-4}$, $K_a(\\text{HNO}_2) = 4.5 \\times 10^{-4}$ and $K_a$(HOCl) $= 3.5 \\times 10^{-8}$, which ranks 0.10 M solutions of their sodium salts from lowest to highest pH?',
    options: [
      'NaOCl < $\\text{NaNO}_2$ < NaF',
      '$\\text{NaNO}_2$ < NaF < NaOCl',
      'NaF < NaOCl < $\\text{NaNO}_2$',
      'NaF < $\\text{NaNO}_2$ < NaOCl',
    ],
    correctIndex: 3,
    explanation: 'Since $K_b = K_w/K_a$, the weakest parent acid (HOCl) has the strongest conjugate base, so NaOCl is most basic; HF is the strongest acid, so fluoride is the weakest base and NaF has the lowest pH.',
    partNumber: 4,
    partTitle: 'Relationship Between Ka & Kb',
  },

  // Part 5: Polyprotic Acids
  {
    id: 'wakb-ent-5a',
    question: 'A 0.40 M solution of a weak acid is 0.75% ionized. About what percent is it ionized after dilution to 0.010 M?',
    options: ['4.7%', '0.75%', '30%', '0.12%'],
    correctIndex: 0,
    explanation: 'Percent ionization varies as $1/\\sqrt{C}$; a 40-fold dilution raises it by $\\sqrt{40} \\approx 6.3$, to about 4.7%. A factor of 40 forgets the square root, and it does not stay the same, because dilution shifts the equilibrium toward ions.',
    partNumber: 5,
    partTitle: 'Polyprotic Acids',
  },
  {
    id: 'wakb-ent-5b',
    question: 'In 0.10 M $\\text{H}_3\\text{PO}_4$ ($K_{a1} = 7.5 \\times 10^{-3}$, $K_{a2} = 6.2 \\times 10^{-8}$, $K_{a3} = 4.8 \\times 10^{-13}$), why is $[\\text{H}_3\\text{O}^+]$ nearly equal to $[\\text{H}_2\\text{PO}_4^-]$?',
    options: [
      'All three ionizations add equal amounts of $\\text{H}_3\\text{O}^+$',
      'Almost all $\\text{H}_3\\text{O}^+$ is from the first step',
      'The third ionization constant is the largest of all three',
      'The $\\text{H}_2\\text{PO}_4^-$ ion cannot ionize further at all',
    ],
    correctIndex: 1,
    explanation: 'Because $K_{a1} \\gg K_{a2} \\gg K_{a3}$, the first step produces almost all the $\\text{H}_3\\text{O}^+$, along with an equal amount of $\\text{H}_2\\text{PO}_4^-$. The later steps do occur, but contribute negligibly.',
    partNumber: 5,
    partTitle: 'Polyprotic Acids',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'wakb-ent-6a',
    question: 'What is the pH of 0.20 M NaOCl at 25 °C? ($K_a$ of HOCl $= 3.5 \\times 10^{-8}$)',
    options: ['3.62', '4.08', '10.38', '7.00'],
    correctIndex: 2,
    explanation: '$K_b(\\text{OCl}^-) = K_w/K_a = 2.9 \\times 10^{-7}$, so $[\\text{OH}^-] = \\sqrt{(2.9 \\times 10^{-7})(0.20)} = 2.4 \\times 10^{-4}$ M, pOH = 3.62 and pH = 10.38. Using $K_a$ as if the salt were the acid gives 4.08, and a salt of a weak acid is not neutral.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'wakb-ent-6b',
    question: 'A 0.10 M solution of a weak base B has pH 11.00 at 25 °C. What is $K_b$?',
    options: ['$1.0 \\times 10^{-3}$', '$1.0 \\times 10^{-9}$', '$1.0 \\times 10^{-21}$', '$1.0 \\times 10^{-5}$'],
    correctIndex: 3,
    explanation: 'pOH = 3.00, so $[\\text{OH}^-] = 1.0 \\times 10^{-3}$ M and $K_b = (1.0 \\times 10^{-3})^2/0.099 = 1.0 \\times 10^{-5}$. $1.0 \\times 10^{-3}$ is $[\\text{OH}^-]$ itself, and using $[\\text{H}^+]$ in place of $[\\text{OH}^-]$ gives $1.0 \\times 10^{-21}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'wakb-ent-7a',
    question: 'Rank these 0.10 M solutions from lowest to highest pH: (I) NaOCl, (II) $\\text{NH}_3$, (III) NaF, (IV) $\\text{CH}_3\\text{NH}_2$. ($K_a$: HOCl $3.5 \\times 10^{-8}$, HF $6.8 \\times 10^{-4}$; $K_b$: $\\text{NH}_3$ $1.8 \\times 10^{-5}$, $\\text{CH}_3\\text{NH}_2$ $4.4 \\times 10^{-4}$)',
    options: ['I < III < II < IV', 'III < I < II < IV', 'III < II < I < IV', 'II < IV < III < I'],
    correctIndex: 1,
    explanation: 'Compare $K_b$ values: $\\text{F}^-$ ($1.5 \\times 10^{-11}$) < $\\text{OCl}^-$ ($2.9 \\times 10^{-7}$) < $\\text{NH}_3$ ($1.8 \\times 10^{-5}$) < $\\text{CH}_3\\text{NH}_2$ ($4.4 \\times 10^{-4}$). At equal concentration, the larger $K_b$ gives more $\\text{OH}^-$ and a higher pH.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'wakb-ent-7b',
    question: 'What is the pH of 0.010 M HA with $K_a = 1.0 \\times 10^{-3}$?',
    options: ['2.57', '2.50', '2.00', '3.00'],
    correctIndex: 0,
    explanation: 'The shortcut gives $x = 3.2 \\times 10^{-3}$ M, 32% of 0.010 M, so it fails; solving $x^2 + (1.0 \\times 10^{-3})x - 1.0 \\times 10^{-5} = 0$ gives $x = 2.7 \\times 10^{-3}$ M and pH 2.57. The value 2.50 is the invalid shortcut, and 2.00 treats HA as strong.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Weak Acid Equilibria' },
    { partNumber: 2, partTitle: 'ICE Tables for Weak Acids' },
    { partNumber: 3, partTitle: 'Weak Base Equilibria & Kb' },
    { partNumber: 4, partTitle: 'Relationship Between Ka & Kb' },
    { partNumber: 5, partTitle: 'Polyprotic Acids' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
