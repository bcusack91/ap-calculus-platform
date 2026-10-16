/**
 * Entrance Quiz — Acid-Base Titrations — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-acid-base-titrations-part1..7):
 *   1 Titration Basics              — concentration from titration data, end point vs equivalence point
 *   2 Strong Acid–Strong Base       — pH before and after the equivalence point
 *   3 Weak Acid–Strong Base         — buffer-region pH, equivalence-point pH from Kb
 *   4 Titration Curves              — weak base half-equivalence, diprotic second half-equivalence
 *   5 Indicators & Equivalence Point — matching an indicator, indicator color from pKIn
 *   6 Problem-Solving Workshop      — unknown acid concentration and Ka, molar mass
 *   7 Synthesis & AP Review         — identifying a titration from its curve, Ka from equivalence pH
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Titration Basics
  {
    id: 'abtit-ent-1a',
    question: 'A 25.00 mL sample of $\\text{H}_2\\text{SO}_4$ requires 32.40 mL of 0.1000 M NaOH to reach the equivalence point. What is the concentration of the $\\text{H}_2\\text{SO}_4$?',
    options: ['0.0648 M', '0.130 M', '0.0772 M', '0.0386 M'],
    correctIndex: 0,
    explanation: 'Moles of NaOH = 3.240 mmol, and each $\\text{H}_2\\text{SO}_4$ needs two $\\text{OH}^-$, so the acid is 1.620 mmol in 25.00 mL, or 0.0648 M. Ignoring the 2:1 ratio gives 0.130 M, and inverting the volume ratio gives 0.0772 M.',
    partNumber: 1,
    partTitle: 'Titration Basics',
  },
  {
    id: 'abtit-ent-1b',
    question: 'In a titration of an acid with NaOH, the indicator changes color at 21.30 mL, but pH-meter data place the equivalence point at 20.85 mL. What does this mean for the student who uses 21.30 mL?',
    options: [
      'The end point and equivalence point are the same, so either volume is fine',
      'The end point came after equivalence, so the calculated acid concentration is too high',
      'The end point came after equivalence, so the calculated acid concentration is too low',
      'Equivalence is defined by the color change, so 21.30 mL is the correct volume',
    ],
    correctIndex: 1,
    explanation: 'The end point (color change) passed the true equivalence point, so 21.30 mL counts more moles of base than actually reacted, and the calculated acid concentration comes out too high.',
    partNumber: 1,
    partTitle: 'Titration Basics',
  },

  // Part 2: Strong Acid–Strong Base
  {
    id: 'abtit-ent-2a',
    question: '40.0 mL of 0.100 M HCl is titrated with 0.100 M NaOH. What is the pH after 30.0 mL of NaOH has been added?',
    options: ['1.60', '7.00', '1.85', '12.15'],
    correctIndex: 2,
    explanation: '4.0 mmol $\\text{H}^+$ minus 3.0 mmol $\\text{OH}^-$ leaves 1.0 mmol $\\text{H}^+$ in 70.0 mL, so $[\\text{H}^+] = 0.0143$ M and pH = 1.85. Dividing by only the 40.0 mL of acid gives 1.60.',
    partNumber: 2,
    partTitle: 'Strong Acid–Strong Base',
  },
  {
    id: 'abtit-ent-2b',
    question: '25.0 mL of 0.200 M $\\text{HNO}_3$ is titrated with 0.100 M NaOH. What is the pH after 60.0 mL of NaOH has been added?',
    options: ['1.93', '12.22', '7.00', '12.07'],
    correctIndex: 3,
    explanation: 'The acid holds 5.0 mmol and the base adds 6.0 mmol, leaving 1.0 mmol $\\text{OH}^-$ in 85.0 mL (0.0118 M): pOH = 1.93 and pH = 12.07. Using only the 60.0 mL of base as the volume gives 12.22, and 1.93 is the pOH.',
    partNumber: 2,
    partTitle: 'Strong Acid–Strong Base',
  },

  // Part 3: Weak Acid–Strong Base
  {
    id: 'abtit-ent-3a',
    question: '50.0 mL of 0.100 M HCOOH ($pK_a = 3.75$) is titrated with 0.100 M NaOH. What is the pH after 10.0 mL of NaOH has been added?',
    options: ['3.15', '4.35', '3.75', '3.05'],
    correctIndex: 0,
    explanation: 'The base converts 1.0 mmol of the 5.0 mmol of acid, leaving 4.0 mmol HCOOH and 1.0 mmol $\\text{HCOO}^-$: pH $= 3.75 + \\log(1.0/4.0) = 3.15$. Inverting the ratio gives 4.35, and using the original 5.0 mmol of acid gives 3.05.',
    partNumber: 3,
    partTitle: 'Weak Acid–Strong Base',
  },
  {
    id: 'abtit-ent-3b',
    question: '25.0 mL of 0.20 M HA ($K_a = 1.0 \\times 10^{-5}$) is titrated with 0.20 M NaOH. What is the pH at the equivalence point?',
    options: ['9.15', '9.00', '7.00', '5.00'],
    correctIndex: 1,
    explanation: 'At equivalence, 5.0 mmol $\\text{A}^-$ is in 50.0 mL (0.10 M), with $K_b = K_w/K_a = 1.0 \\times 10^{-9}$; $[\\text{OH}^-] = \\sqrt{(1.0 \\times 10^{-9})(0.10)} = 1.0 \\times 10^{-5}$ M, so pH = 9.00. Forgetting the dilution to 0.10 M gives 9.15.',
    partNumber: 3,
    partTitle: 'Weak Acid–Strong Base',
  },

  // Part 4: Titration Curves
  {
    id: 'abtit-ent-4a',
    question: 'A weak base B ($K_b = 4.0 \\times 10^{-4}$) is titrated with HCl. What is the pH at the half-equivalence point?',
    options: ['3.40', '7.00', '10.60', '5.30'],
    correctIndex: 2,
    explanation: 'At half-equivalence $[\\text{B}] = [\\text{BH}^+]$, so pH equals the $pK_a$ of $\\text{BH}^+$: $14.00 - pK_b = 14.00 - 3.40 = 10.60$. The value 3.40 is the $pK_b$, which equals the pOH there.',
    partNumber: 4,
    partTitle: 'Titration Curves',
  },
  {
    id: 'abtit-ent-4b',
    question: 'A diprotic acid $\\text{H}_2\\text{A}$ is titrated with NaOH, and the first equivalence point is at 18.0 mL. What is the pH after 27.0 mL of NaOH has been added?',
    options: [
      'Equal to $pK_{a1}$',
      'The average of $pK_{a1}$ and $pK_{a2}$',
      'Exactly 7.00',
      'Equal to $pK_{a2}$',
    ],
    correctIndex: 3,
    explanation: '27.0 mL is halfway between the first (18.0 mL) and second (36.0 mL) equivalence points, where $[\\text{HA}^-] = [\\text{A}^{2-}]$, so pH = $pK_{a2}$. The pH equals $pK_{a1}$ at 9.0 mL.',
    partNumber: 4,
    partTitle: 'Titration Curves',
  },

  // Part 5: Indicators & Equivalence Point
  {
    id: 'abtit-ent-5a',
    question: '0.10 M $\\text{NH}_3$ is titrated with 0.10 M HCl, and the equivalence point is near pH 5.3. Which indicator is the best choice?',
    options: [
      'Methyl red (4.4–6.2)',
      'Phenolphthalein (8.2–10.0)',
      'Alizarin yellow (10.1–12.0)',
      'Bromothymol blue (6.0–7.6)',
    ],
    correctIndex: 0,
    explanation: 'An indicator should change color over a range that contains the equivalence-point pH; methyl red covers 4.4–6.2. Phenolphthalein would change far too early, while the solution is still basic.',
    partNumber: 5,
    partTitle: 'Indicators & Equivalence Point',
  },
  {
    id: 'abtit-ent-5b',
    question: 'An indicator HIn has $pK_{In} = 9.0$; the HIn form is clear and the $\\text{In}^-$ form is pink. What is observed in a solution at pH 7.0?',
    options: [
      'Mostly $\\text{In}^-$, so it is pink',
      'Mostly HIn, so no color is seen',
      'Equal HIn and $\\text{In}^-$, so it is pale pink',
      'Neither form, since the indicator falls apart',
    ],
    correctIndex: 1,
    explanation: 'pH $= pK_{In} + \\log([\\text{In}^-]/[\\text{HIn}])$ gives $[\\text{In}^-]/[\\text{HIn}] = 10^{-2}$, so the acid form dominates and the solution is colorless. The two forms are equal only at pH 9.0.',
    partNumber: 5,
    partTitle: 'Indicators & Equivalence Point',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'abtit-ent-6a',
    question: '40.0 mL of an unknown monoprotic weak acid requires 28.0 mL of 0.125 M NaOH to reach equivalence. After 14.0 mL of NaOH, the pH is 4.62. What are the acid concentration and $K_a$?',
    options: [
      '0.179 M; $K_a = 2.4 \\times 10^{-5}$',
      '0.0875 M; $K_a = 4.2 \\times 10^{-10}$',
      '0.0875 M; $K_a = 2.4 \\times 10^{-5}$',
      '0.0438 M; $K_a = 2.4 \\times 10^{-5}$',
    ],
    correctIndex: 2,
    explanation: 'The base delivers 3.50 mmol, so the acid is 3.50 mmol / 40.0 mL = 0.0875 M. 14.0 mL is the half-equivalence point, so $pK_a = 4.62$ and $K_a = 10^{-4.62} = 2.4 \\times 10^{-5}$. Using $14 - 4.62$ gives $4.2 \\times 10^{-10}$.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'abtit-ent-6b',
    question: 'A 0.250 g sample of a monoprotic acid requires 20.5 mL of 0.100 M NaOH to reach the equivalence point. What is the molar mass of the acid?',
    options: ['244 g/mol', '61.0 g/mol', '12.2 g/mol', '122 g/mol'],
    correctIndex: 3,
    explanation: 'Moles of acid = moles of NaOH = $(0.100)(0.0205) = 2.05 \\times 10^{-3}$ mol, so the molar mass is 0.250 g / $2.05 \\times 10^{-3}$ mol = 122 g/mol. Leaving out the molarity gives 12.2 g/mol.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'abtit-ent-7a',
    question: 'A titration curve starts near pH 11.1, has a flat region centered near pH 9.3, and has its equivalence point near pH 5.3. Which titration does it show?',
    options: [
      'Acetic acid titrated with NaOH',
      '$\\text{NH}_3$ titrated with HCl',
      'NaOH titrated with HCl',
      'HCl titrated with ammonia',
    ],
    correctIndex: 1,
    explanation: 'A high starting pH that falls means a base is being titrated with an acid; the buffer region and an acidic equivalence point (from $\\text{NH}_4^+$) mark a weak base with a strong acid. NaOH with HCl would show no buffer region and reach equivalence at pH 7.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'abtit-ent-7b',
    question: '0.10 M HA is titrated with 0.10 M NaOH, and the equivalence point is at pH 8.85, where $[\\text{A}^-] = 0.050$ M. What is $K_a$ of HA?',
    options: [
      '$1.0 \\times 10^{-5}$',
      '$1.0 \\times 10^{-9}$',
      '$7.1 \\times 10^{-6}$',
      '$2.0 \\times 10^{-5}$',
    ],
    correctIndex: 0,
    explanation: 'pOH = 5.15, so $[\\text{OH}^-] = 7.1 \\times 10^{-6}$ M and $K_b = (7.1 \\times 10^{-6})^2/0.050 = 1.0 \\times 10^{-9}$; then $K_a = K_w/K_b = 1.0 \\times 10^{-5}$. Stopping at $K_b$ gives $1.0 \\times 10^{-9}$, and using 0.10 M for $[\\text{A}^-]$ gives $2.0 \\times 10^{-5}$.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Titration Basics' },
    { partNumber: 2, partTitle: 'Strong Acid–Strong Base' },
    { partNumber: 3, partTitle: 'Weak Acid–Strong Base' },
    { partNumber: 4, partTitle: 'Titration Curves' },
    { partNumber: 5, partTitle: 'Indicators & Equivalence Point' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
