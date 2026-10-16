/**
 * Entrance Quiz — Buffer Solutions & Henderson-Hasselbalch — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-buffer-solutions-henderson-hasselbalch-part1..7):
 *   1 What Is a Buffer?                          — identifying buffers, which component handles which addition
 *   2 How Buffers Neutralize Added Acid or Base  — net ionic equations, particle-count reasoning
 *   3 The Henderson-Hasselbalch Equation         — pH of acidic and basic buffers
 *   4 Buffer Capacity                            — capacity against added base, effect of dilution
 *   5 Preparing Buffers                          — required ratio, partial neutralization amounts
 *   6 Problem-Solving Workshop                   — stoichiometry then H-H, buffer-or-not after mixing
 *   7 Synthesis & AP Review                      — leaving the effective range, equal-mole ammonia buffer
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Is a Buffer?
  {
    id: 'bshh-ent-1a',
    question: 'Which of these aqueous mixtures is a buffer?',
    options: [
      '0.10 M $\\text{HNO}_2$ with 0.10 M $\\text{NaNO}_2$',
      '0.10 M $\\text{HClO}_4$ with 0.10 M $\\text{NaClO}_4$',
      '0.10 M $\\text{NH}_3$ with 0.10 M $\\text{Ba(OH)}_2$',
      '0.10 M $\\text{CH}_3\\text{COOH}$ with 0.10 M $\\text{HCOOH}$',
    ],
    correctIndex: 0,
    explanation: 'Nitrous acid is a weak acid and nitrite is its conjugate base, so together they can absorb both added acid and added base. Perchloric acid is strong, so perchlorate is too weak a base to buffer; ammonia with a strong base has no conjugate acid, and two weak acids have no base.',
    partNumber: 1,
    partTitle: 'What Is a Buffer?',
  },
  {
    id: 'bshh-ent-1b',
    question: 'In a buffer made from $\\text{NH}_3$ and $\\text{NH}_4\\text{Cl}$, which species neutralizes each kind of addition?',
    options: [
      '$\\text{NH}_3$ takes both added $\\text{OH}^-$ and added $\\text{H}_3\\text{O}^+$',
      '$\\text{NH}_4^+$ takes added $\\text{OH}^-$; $\\text{NH}_3$ takes added $\\text{H}_3\\text{O}^+$',
      '$\\text{Cl}^-$ takes added $\\text{H}_3\\text{O}^+$; $\\text{NH}_3$ takes added $\\text{OH}^-$',
      'Both $\\text{NH}_3$ and $\\text{NH}_4^+$ take only added $\\text{H}_3\\text{O}^+$',
    ],
    correctIndex: 1,
    explanation: 'The conjugate acid $\\text{NH}_4^+$ donates a proton to added $\\text{OH}^-$, and the weak base $\\text{NH}_3$ accepts a proton from added $\\text{H}_3\\text{O}^+$. Chloride is a spectator ion.',
    partNumber: 1,
    partTitle: 'What Is a Buffer?',
  },

  // Part 2: How Buffers Neutralize Added Acid or Base
  {
    id: 'bshh-ent-2a',
    question: 'A small amount of NaOH is added to an $\\text{HNO}_2/\\text{NO}_2^-$ buffer. Which net ionic equation shows how the buffer responds?',
    options: [
      '$\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$',
      '$\\text{NO}_2^- + \\text{H}^+ \\to \\text{HNO}_2$',
      '$\\text{HNO}_2 + \\text{OH}^- \\to \\text{NO}_2^- + \\text{H}_2\\text{O}$',
      '$\\text{Na}^+ + \\text{NO}_2^- \\to \\text{NaNO}_2$',
    ],
    correctIndex: 2,
    explanation: 'Added base is consumed by the weak acid of the buffer, converting it into its conjugate base. The reaction of nitrite with $\\text{H}^+$ is the response to added acid, and $\\text{Na}^+$ is a spectator.',
    partNumber: 2,
    partTitle: 'How Buffers Neutralize Added Acid or Base',
  },
  {
    id: 'bshh-ent-2b',
    question: 'A particle diagram of a buffer shows 6 HA and 10 $\\text{A}^-$. Then 4 $\\text{OH}^-$ are added. What does the diagram show after the reaction?',
    options: [
      '10 HA and 6 $\\text{A}^-$; the pH falls slightly',
      '6 HA and 10 $\\text{A}^-$; the pH does not change',
      '2 HA and 14 $\\text{A}^-$; the pH falls slightly',
      '2 HA and 14 $\\text{A}^-$; the pH rises slightly',
    ],
    correctIndex: 3,
    explanation: 'Each $\\text{OH}^-$ converts one HA into one $\\text{A}^-$, giving 2 HA and 14 $\\text{A}^-$. The ratio $[\\text{A}^-]/[\\text{HA}]$ increases, so the pH rises, but only slightly because the added base is consumed.',
    partNumber: 2,
    partTitle: 'How Buffers Neutralize Added Acid or Base',
  },

  // Part 3: The Henderson-Hasselbalch Equation
  {
    id: 'bshh-ent-3a',
    question: 'What is the pH of a buffer that is 0.25 M $\\text{HNO}_2$ ($pK_a = 3.35$) and 0.40 M $\\text{NaNO}_2$?',
    options: ['3.15', '3.35', '3.55', '3.82'],
    correctIndex: 2,
    explanation: 'pH $= 3.35 + \\log(0.40/0.25) = 3.35 + 0.20 = 3.55$. Inverting the ratio gives 3.15, ignoring it gives 3.35, and using the natural log gives 3.82.',
    partNumber: 3,
    partTitle: 'The Henderson-Hasselbalch Equation',
  },
  {
    id: 'bshh-ent-3b',
    question: 'A buffer is 0.15 M $\\text{NH}_3$ and 0.45 M $\\text{NH}_4\\text{Cl}$. The $pK_a$ of $\\text{NH}_4^+$ is 9.25. What is the pH?',
    options: ['8.77', '9.73', '4.27', '5.23'],
    correctIndex: 0,
    explanation: 'pH $= pK_a + \\log([\\text{NH}_3]/[\\text{NH}_4^+]) = 9.25 + \\log(1/3) = 9.25 - 0.48 = 8.77$. Inverting the ratio gives 9.73, and 5.23 is the pOH.',
    partNumber: 3,
    partTitle: 'The Henderson-Hasselbalch Equation',
  },

  // Part 4: Buffer Capacity
  {
    id: 'bshh-ent-4a',
    question: 'Four 1.0 L buffers of the same weak acid are prepared. Which can absorb the most added NaOH before it is overwhelmed?',
    options: [
      '0.10 M HA with 0.50 M $\\text{A}^-$',
      '0.50 M HA with 0.10 M $\\text{A}^-$',
      '0.05 M HA with 0.05 M $\\text{A}^-$',
      '0.20 M HA with 0.40 M $\\text{A}^-$',
    ],
    correctIndex: 1,
    explanation: 'Added base is neutralized by HA, so the buffer with the most HA (0.50 mol) can absorb the most NaOH. The buffer rich in $\\text{A}^-$ is better against added acid instead.',
    partNumber: 4,
    partTitle: 'Buffer Capacity',
  },
  {
    id: 'bshh-ent-4b',
    question: 'A buffer that is 0.20 M HA and 0.20 M $\\text{A}^-$ is diluted tenfold with water. What happens?',
    options: [
      'Both the pH and the capacity stay the same',
      'The pH rises toward 7, and the capacity falls',
      'The pH stays the same, and the capacity rises',
      'The pH is unchanged but capacity drops',
    ],
    correctIndex: 3,
    explanation: 'Both components are diluted by the same factor, so their ratio, and the pH, stay the same. Each liter now holds a tenth as much HA and $\\text{A}^-$, so the buffer can absorb less acid or base.',
    partNumber: 4,
    partTitle: 'Buffer Capacity',
  },

  // Part 5: Preparing Buffers
  {
    id: 'bshh-ent-5a',
    question: 'A buffer at pH 3.45 is to be made from formic acid ($pK_a = 3.75$) and sodium formate. What ratio $[\\text{HCOO}^-]/[\\text{HCOOH}]$ is needed?',
    options: ['0.50', '2.0', '0.30', '1.0'],
    correctIndex: 0,
    explanation: '$[\\text{HCOO}^-]/[\\text{HCOOH}] = 10^{(3.45 - 3.75)} = 10^{-0.30} = 0.50$, so there must be twice as much acid as conjugate base. A ratio of 2.0 would give a pH above the $pK_a$.',
    partNumber: 5,
    partTitle: 'Preparing Buffers',
  },
  {
    id: 'bshh-ent-5b',
    question: 'A chemist has 0.40 mol $\\text{NH}_3$ ($pK_a$ of $\\text{NH}_4^+$ = 9.25) and wants a buffer with pH 9.55 by adding HCl. How many moles of HCl are needed?',
    options: ['0.20 mol', '0.13 mol', '0.27 mol', '0.40 mol'],
    correctIndex: 1,
    explanation: 'pH 9.55 requires $[\\text{NH}_3]/[\\text{NH}_4^+] = 10^{0.30} = 2.0$. Adding x mol HCl gives (0.40 − x)/x = 2.0, so x = 0.13 mol. Using 0.20 mol gives a 1:1 buffer at pH 9.25, and 0.27 mol reverses the ratio.',
    partNumber: 5,
    partTitle: 'Preparing Buffers',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'bshh-ent-6a',
    question: '0.30 mol HF ($pK_a = 3.17$) and 0.20 mol NaOH are combined in water to make 1.0 L of solution. What is the pH?',
    options: ['2.87', '3.17', '3.47', '2.99'],
    correctIndex: 2,
    explanation: 'The base reacts completely: 0.10 mol HF remains and 0.20 mol $\\text{F}^-$ forms, so pH $= 3.17 + \\log(0.20/0.10) = 3.47$. Inverting the ratio gives 2.87, and skipping the reaction step (0.20/0.30) gives 2.99.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'bshh-ent-6b',
    question: 'Which of these mixtures is a buffer once any reaction is complete?',
    options: [
      '50 mL of 0.10 M HF + 50 mL of 0.10 M NaOH',
      '50 mL of 0.10 M HCl + 50 mL of 0.10 M NaCl',
      '50 mL of 0.10 M HF + 75 mL of 0.10 M NaOH',
      '50 mL of 0.10 M HF + 25 mL of 0.10 M NaOH',
    ],
    correctIndex: 3,
    explanation: 'With 5.0 mmol HF and 2.5 mmol NaOH, half the acid is converted, leaving equal amounts of HF and $\\text{F}^-$: a buffer. Equal moles leave only $\\text{F}^-$, excess NaOH leaves free $\\text{OH}^-$, and HCl with NaCl has no weak pair.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'bshh-ent-7a',
    question: 'A 1.0 L buffer contains 0.50 mol HA and 0.50 mol $\\text{A}^-$ ($pK_a = 4.74$). Which addition leaves $[\\text{A}^-]/[\\text{HA}]$ above 10, outside the effective range of pH 3.74–5.74?',
    options: ['0.10 mol NaOH', '0.45 mol NaOH', '0.25 mol NaOH', '0.45 mol HCl'],
    correctIndex: 1,
    explanation: 'Adding 0.45 mol NaOH leaves 0.05 mol HA and 0.95 mol $\\text{A}^-$, a ratio of 19, so the buffer is nearly exhausted. With 0.25 mol the ratio is only 3, and 0.45 mol HCl pushes the ratio below 0.1 instead.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'bshh-ent-7b',
    question: 'A buffer is made from equal moles of $\\text{NH}_3$ and $\\text{NH}_4\\text{Cl}$ ($pK_a$ of $\\text{NH}_4^+$ = 9.25). Which statement is correct?',
    options: [
      'pH = 9.25, and it can absorb as much acid as base',
      'pH = 7.00, since the base and its salt cancel',
      'pH = 4.75, the $pK_b$ of ammonia',
      'pH = 9.25, but it can absorb only added acid',
    ],
    correctIndex: 0,
    explanation: 'With a 1:1 ratio, pH = $pK_a$ of $\\text{NH}_4^+$ = 9.25, and the equal amounts of the two components can neutralize equal amounts of added acid (via $\\text{NH}_3$) or base (via $\\text{NH}_4^+$).',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Is a Buffer?' },
    { partNumber: 2, partTitle: 'How Buffers Neutralize Added Acid or Base' },
    { partNumber: 3, partTitle: 'The Henderson-Hasselbalch Equation' },
    { partNumber: 4, partTitle: 'Buffer Capacity' },
    { partNumber: 5, partTitle: 'Preparing Buffers' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
