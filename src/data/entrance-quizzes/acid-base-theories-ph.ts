/**
 * Entrance Quiz — Acid-Base Theories & pH — 14 questions (2 per part)
 *
 * Part mapping (lesson parts chemistry-acid-base-theories-ph-part1..7). Items follow what each
 * part file actually teaches:
 *   1 Acid-Base Definitions               — strong acids, neutralization net ionic equation
 *   2 Conjugate Acid-Base Pairs           — Brønsted-Lowry pairs, amphiprotic species
 *   3 Molecular Structure & Acid Strength — oxyacids and inductive effects
 *   4 Strong Acids & Bases                — pH/pOH conversions and the logarithmic scale
 *   5 Calculating pH & pOH                — strong base pH, strong acid + strong base mixtures
 *   6 Problem-Solving Workshop            — neutrality when Kw changes, multi-step dilution and mixing
 *   7 Synthesis & AP Review               — sulfuric acid vs other acids, [H+] and [OH−] together
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Acid-Base Definitions
  {
    id: 'abt-ent-1a',
    question: 'What is the net ionic equation for the reaction of aqueous $\\text{HNO}_3$ with aqueous KOH?',
    options: [
      '$\\text{H}^+(aq) + \\text{OH}^-(aq) \\to \\text{H}_2\\text{O}(l)$',
      '$\\text{HNO}_3(aq) + \\text{OH}^-(aq) \\to \\text{NO}_3^-(aq) + \\text{H}_2\\text{O}(l)$',
      '$\\text{H}_3\\text{O}^+(aq) + \\text{NO}_3^-(aq) \\to \\text{HNO}_3(aq) + \\text{H}_2\\text{O}(l)$',
      '$\\text{HNO}_3(aq) + \\text{KOH}(aq) \\to \\text{KNO}_3(aq) + \\text{H}_2\\text{O}(l)$',
    ],
    correctIndex: 0,
    explanation: 'Both reactants are strong and fully ionized, and $\\text{K}^+$ and $\\text{NO}_3^-$ are spectators, so only $\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$ remains. Writing $\\text{HNO}_3$ intact would treat it as a weak acid.',
    partNumber: 1,
    partTitle: 'Acid-Base Definitions',
  },
  {
    id: 'abt-ent-1b',
    question: 'Which pair contains only strong acids?',
    options: [
      'HF and HCl',
      '$\\text{HClO}_4$ and HBr',
      '$\\text{HNO}_3$ and $\\text{HNO}_2$',
      '$\\text{H}_2\\text{SO}_4$ and $\\text{H}_3\\text{PO}_4$',
    ],
    correctIndex: 1,
    explanation: 'The strong acids are HCl, HBr, HI, $\\text{HNO}_3$, $\\text{H}_2\\text{SO}_4$ and $\\text{HClO}_4$. HF, $\\text{HNO}_2$ and $\\text{H}_3\\text{PO}_4$ are weak acids.',
    partNumber: 1,
    partTitle: 'Acid-Base Definitions',
  },

  // Part 2: Conjugate Acid-Base Pairs
  {
    id: 'abt-ent-2a',
    question: 'For $\\text{H}_2\\text{PO}_4^-(aq) + \\text{CO}_3^{2-}(aq) \\rightleftharpoons \\text{HPO}_4^{2-}(aq) + \\text{HCO}_3^-(aq)$, which are the two conjugate acid-base pairs?',
    options: [
      '$\\text{H}_2\\text{PO}_4^-$/$\\text{CO}_3^{2-}$ and $\\text{HPO}_4^{2-}$/$\\text{HCO}_3^-$',
      '$\\text{H}_2\\text{PO}_4^-$/$\\text{HCO}_3^-$ and $\\text{CO}_3^{2-}$/$\\text{HPO}_4^{2-}$',
      '$\\text{H}_2\\text{PO}_4^-$/$\\text{HPO}_4^{2-}$ and $\\text{HCO}_3^-$/$\\text{CO}_3^{2-}$',
      '$\\text{HPO}_4^{2-}$/$\\text{CO}_3^{2-}$ and $\\text{H}_2\\text{PO}_4^-$/$\\text{HCO}_3^-$',
    ],
    correctIndex: 2,
    explanation: '$\\text{H}_2\\text{PO}_4^-$ donates a proton to become $\\text{HPO}_4^{2-}$, and $\\text{CO}_3^{2-}$ accepts it to become $\\text{HCO}_3^-$. Each conjugate pair differs by exactly one $\\text{H}^+$.',
    partNumber: 2,
    partTitle: 'Conjugate Acid-Base Pairs',
  },
  {
    id: 'abt-ent-2b',
    question: 'Which species can act as both a Brønsted-Lowry acid and a Brønsted-Lowry base in water?',
    options: ['$\\text{CO}_3^{2-}$', '$\\text{H}_3\\text{O}^+$', '$\\text{PO}_4^{3-}$', '$\\text{HCO}_3^-$'],
    correctIndex: 3,
    explanation: '$\\text{HCO}_3^-$ can lose a proton (forming $\\text{CO}_3^{2-}$) or gain one (forming $\\text{H}_2\\text{CO}_3$), so it is amphiprotic. Carbonate and phosphate can only accept a proton, and hydronium can only donate one.',
    partNumber: 2,
    partTitle: 'Conjugate Acid-Base Pairs',
  },

  // Part 3: Molecular Structure & Acid Strength
  {
    id: 'abt-ent-3a',
    question: 'Which choice correctly identifies the stronger acid of $\\text{H}_2\\text{SO}_4$ and $\\text{H}_2\\text{SO}_3$ and explains why?',
    options: [
      '$\\text{H}_2\\text{SO}_4$; its extra O withdraws electron density',
      '$\\text{H}_2\\text{SO}_3$; with fewer O atoms, its O–H bonds are weaker',
      '$\\text{H}_2\\text{SO}_4$; it has more H atoms available to donate',
      '$\\text{H}_2\\text{SO}_3$; its conjugate base holds its charge more tightly',
    ],
    correctIndex: 0,
    explanation: 'With the same central atom, the acid with more O atoms is stronger: the extra O withdraws electron density from the O–H bond and lets the conjugate base spread its charge. Both acids have two H atoms, and a base that holds its charge tightly makes a weaker acid.',
    partNumber: 3,
    partTitle: 'Molecular Structure & Acid Strength',
  },
  {
    id: 'abt-ent-3b',
    question: 'Which of these carboxylic acids is the strongest acid?',
    options: ['$\\text{CH}_3\\text{COOH}$', '$\\text{CH}_2\\text{FCOOH}$', '$\\text{CH}_2\\text{ClCOOH}$', '$\\text{CH}_3\\text{CH}_2\\text{COOH}$'],
    correctIndex: 1,
    explanation: 'Fluorine is the most electronegative substituent, so its inductive effect pulls the most electron density toward itself and best stabilizes the carboxylate ion. Chlorine has a smaller effect, and the unsubstituted acids have none.',
    partNumber: 3,
    partTitle: 'Molecular Structure & Acid Strength',
  },

  // Part 4: Strong Acids & Bases
  {
    id: 'abt-ent-4a',
    question: 'A solution at 25 °C has $[\\text{OH}^-] = 3.0 \\times 10^{-5}$ M. What is its pH?',
    options: ['4.52', '8.52', '9.48', '5.48'],
    correctIndex: 2,
    explanation: 'pOH $= -\\log(3.0 \\times 10^{-5}) = 4.52$, so pH $= 14.00 - 4.52 = 9.48$. Stopping at 4.52 reports the pOH, not the pH.',
    partNumber: 4,
    partTitle: 'Strong Acids & Bases',
  },
  {
    id: 'abt-ent-4b',
    question: 'Solution X has pH 3.40 and solution Y has pH 5.40. How do their hydronium ion concentrations compare?',
    options: [
      '[H₃O⁺] in X is twice that in Y',
      '[H₃O⁺] in Y is 100 times that in X',
      '[H₃O⁺] in X is 1.6 times that in Y',
      '[H₃O⁺] in X is 100 times that in Y',
    ],
    correctIndex: 3,
    explanation: 'Each pH unit is a factor of 10, so a difference of 2 units is a factor of 100, and the lower pH (X) has the higher concentration. Subtracting or dividing the pH values gives 2 or 1.6, which ignores the logarithmic scale.',
    partNumber: 4,
    partTitle: 'Strong Acids & Bases',
  },

  // Part 5: Calculating pH & pOH
  {
    id: 'abt-ent-5a',
    question: 'What is the pH of 0.0025 M $\\text{Sr(OH)}_2$ at 25 °C?',
    options: ['11.70', '11.40', '2.30', '2.60'],
    correctIndex: 0,
    explanation: 'Each formula unit releases two $\\text{OH}^-$, so $[\\text{OH}^-] = 0.0050$ M, pOH = 2.30 and pH = 11.70. Forgetting the factor of 2 gives 11.40, and 2.30 is the pOH.',
    partNumber: 5,
    partTitle: 'Calculating pH & pOH',
  },
  {
    id: 'abt-ent-5b',
    question: '30.0 mL of 0.10 M HCl is mixed with 20.0 mL of 0.10 M $\\text{Ba(OH)}_2$. What is the pH of the mixture?',
    options: ['1.70', '12.30', '7.00', '12.70'],
    correctIndex: 1,
    explanation: 'HCl supplies 3.0 mmol $\\text{H}^+$ and $\\text{Ba(OH)}_2$ supplies 4.0 mmol $\\text{OH}^-$, leaving 1.0 mmol $\\text{OH}^-$ in 50.0 mL (0.020 M): pOH = 1.70 and pH = 12.30. Forgetting the 2 hydroxides per formula unit makes the mixture look acidic (1.70).',
    partNumber: 5,
    partTitle: 'Calculating pH & pOH',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'abt-ent-6a',
    question: 'At 40 °C, $K_w = 2.9 \\times 10^{-14}$. A solution at 40 °C has $[\\text{H}_3\\text{O}^+] = 1.0 \\times 10^{-7}$ M. How should it be classified?',
    options: [
      'Neutral, since its pH is exactly 7.00',
      'Acidic, since $K_w$ is larger than at 25 °C',
      'Basic, since its $[\\text{OH}^-]$ exceeds its $[\\text{H}_3\\text{O}^+]$',
      'Neutral, since $K_w$ has increased along with the temperature',
    ],
    correctIndex: 2,
    explanation: '$[\\text{OH}^-] = K_w/[\\text{H}_3\\text{O}^+] = 2.9 \\times 10^{-7}$ M, which is greater than $[\\text{H}_3\\text{O}^+]$, so the solution is basic even though its pH is 7.00. The pH 7 benchmark for neutral water holds only at 25 °C.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'abt-ent-6b',
    question: '10.0 mL of 0.50 M $\\text{HNO}_3$ is diluted to 250.0 mL. Then 25.0 mL of the diluted acid is mixed with 25.0 mL of 0.010 M NaOH. What is the pH of the final mixture?',
    options: ['0.61', '2.00', '1.70', '2.30'],
    correctIndex: 3,
    explanation: 'The diluted acid is 0.020 M, so 25.0 mL holds 0.50 mmol $\\text{H}^+$; the base removes 0.25 mmol, leaving 0.25 mmol in 50.0 mL (0.0050 M) and pH 2.30. Using only the 25.0 mL of acid as the volume gives 2.00, and ignoring the base gives 1.70.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'abt-ent-7a',
    question: 'Which 0.010 M aqueous solution has the lowest pH?',
    options: ['HF', '$\\text{H}_2\\text{SO}_4$', 'HCl', '$\\text{HNO}_3$'],
    correctIndex: 1,
    explanation: 'Sulfuric acid ionizes completely in its first step and partly in its second, so $[\\text{H}^+]$ is between 0.010 and 0.020 M (about 0.015 M). HCl and $\\text{HNO}_3$ give exactly 0.010 M, and HF is weak.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'abt-ent-7b',
    question: 'Which statement about $1.0 \\times 10^{-3}$ M HCl at 25 °C is correct?',
    options: [
      'pH = 3.00 and $[\\text{OH}^-] = 1.0 \\times 10^{-11}$ M',
      'pH = 3.00 and $[\\text{OH}^-] = 1.0 \\times 10^{-3}$ M',
      'pH = 11.00 and $[\\text{OH}^-] = 0.0010$ M',
      'pH = 3.00 and there is no $\\text{OH}^-$ at all',
    ],
    correctIndex: 0,
    explanation: 'The strong acid gives $[\\text{H}^+] = 1.0 \\times 10^{-3}$ M and pH 3.00, and $K_w$ still holds: $[\\text{OH}^-] = 10^{-14}/10^{-3} = 1.0 \\times 10^{-11}$ M. Water always supplies some $\\text{OH}^-$, even in acid.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Acid-Base Definitions' },
    { partNumber: 2, partTitle: 'Conjugate Acid-Base Pairs' },
    { partNumber: 3, partTitle: 'Molecular Structure & Acid Strength' },
    { partNumber: 4, partTitle: 'Strong Acids & Bases' },
    { partNumber: 5, partTitle: 'Calculating pH & pOH' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
