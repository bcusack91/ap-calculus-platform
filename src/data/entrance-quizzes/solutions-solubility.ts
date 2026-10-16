/**
 * Entrance Quiz — Solutions & Solubility
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Solution Terminology
 *  2 — Molarity and Ion Concentrations
 *  3 — Dilution
 *  4 — Picturing Solutions
 *  5 — Electrolytes and Why Things Dissolve
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Solution Terminology
  {
    id: 'sol-ent-1a',
    question: 'The solubility of $KNO_3$ at 40 °C is 64 g per 100 g of water. A clear solution at 40 °C holds 80 g of dissolved $KNO_3$ in 100 g of water. What is the solution, and what happens when a seed crystal is added?',
    options: [
      'Saturated; nothing visible happens',
      'Unsaturated; the seed crystal dissolves',
      'Supersaturated; about 16 g of solid crystallizes',
      'Supersaturated; all 80 g of solid crystallizes',
    ],
    correctIndex: 2,
    explanation: 'Holding 80 g where only 64 g is stable makes the solution supersaturated, and the seed crystal triggers crystallization of the excess, $80 - 64 = 16$ g, leaving a saturated solution. The 64 g that the water can hold stays dissolved.',
    partNumber: 1,
    partTitle: 'Solution Terminology',
  },
  {
    id: 'sol-ent-1b',
    question: 'Solutions of ammonium carbonate, $(NH_4)_2CO_3$, and calcium chloride, $CaCl_2$, are mixed, and a white precipitate forms. What is the precipitate?',
    options: ['$CaCO_3$', '$NH_4Cl$', '$CaCl_2$', '$(NH_4)_2CO_3$'],
    correctIndex: 0,
    explanation: 'Swapping partners gives $NH_4Cl$ and $CaCO_3$. Every ammonium salt is soluble, so the solid must be $CaCO_3$; the two starting compounds were already dissolved.',
    partNumber: 1,
    partTitle: 'Solution Terminology',
  },

  // Part 2: Molarity and Ion Concentrations
  {
    id: 'sol-ent-2a',
    question: 'How many total moles of ions are present in 75.0 mL of 0.400 M $Al_2(SO_4)_3$?',
    options: ['0.0300 mol', '0.150 mol', '0.0900 mol', '0.0600 mol'],
    correctIndex: 1,
    explanation: 'Moles of salt $= 0.400 \\times 0.0750 = 0.0300$ mol, and each formula unit releases 2 $Al^{3+}$ and 3 $SO_4^{2-}$, 5 ions in all: $5 \\times 0.0300 = 0.150$ mol. 0.0300 mol counts formula units, 0.0600 mol only the $Al^{3+}$ and 0.0900 mol only the sulfate.',
    partNumber: 2,
    partTitle: 'Molarity and Ion Concentrations',
  },
  {
    id: 'sol-ent-2b',
    question: 'A solution is made from 32.0 g of methanol ($CH_3OH$, 32.04 g/mol) and 54.0 g of water (18.02 g/mol). What is the mole fraction of methanol?',
    options: ['0.333', '0.372', '0.750', '0.250'],
    correctIndex: 3,
    explanation: 'Methanol is $32.0/32.04 = 0.999$ mol and water is $54.0/18.02 = 3.00$ mol, so $\\chi = 0.999/(0.999 + 3.00) = 0.250$. 0.333 divides by the moles of water alone, 0.372 is the mass fraction, and 0.750 is water\'s mole fraction.',
    partNumber: 2,
    partTitle: 'Molarity and Ion Concentrations',
  },

  // Part 3: Dilution
  {
    id: 'sol-ent-3a',
    question: 'A 20.0 mL sample of 0.800 M $CuSO_4$ is diluted by adding 60.0 mL of water. What is the new concentration?',
    options: ['0.200 M', '0.267 M', '3.20 M', '0.800 M'],
    correctIndex: 0,
    explanation: 'The final volume is $20.0 + 60.0 = 80.0$ mL, so $M_2 = (0.800)(20.0)/80.0 = 0.200$ M. Using 60.0 mL as the final volume gives 0.267 M, inverting the ratio gives 3.20 M, and dilution always lowers the concentration.',
    partNumber: 3,
    partTitle: 'Dilution',
  },
  {
    id: 'sol-ent-3b',
    question: 'A 10.0 mL portion of 0.500 M stock solution is diluted to a total volume of 50.0 mL. Then 5.00 mL of that solution is diluted to a total volume of 100.0 mL. What is the final concentration?',
    options: ['0.100 M', '0.0250 M', '0.00500 M', '0.00397 M'],
    correctIndex: 2,
    explanation: 'The first step dilutes by $10.0/50.0$ to 0.100 M, and the second by $5.00/100.0$ to $0.100 \\times 0.0500 = 0.00500$ M. 0.100 M stops after one step, 0.0250 M skips the first step, and 0.00397 M treats the stated totals as volumes of water added.',
    partNumber: 3,
    partTitle: 'Dilution',
  },

  // Part 4: Picturing Solutions
  {
    id: 'sol-ent-4a',
    question: 'Equal volumes of 0.20 M $K_2SO_4$ and 0.20 M $NaNO_3$ are mixed, and no precipitate forms. Which describes a correct particle diagram of the mixture?',
    options: [
      'Equal numbers of $K^+$ and $Na^+$, with solid $KNO_3$ at the bottom',
      'Separated ions with twice as many $K^+$ as $Na^+$ and no solid',
      'Twice as many $K^+$ as $Na^+$, with solid $Na_2SO_4$ at the bottom',
      'Intact $K_2SO_4$ units and intact $NaNO_3$ units spread apart',
    ],
    correctIndex: 1,
    explanation: 'Each $K_2SO_4$ releases two $K^+$ while each $NaNO_3$ releases one $Na^+$, so equal amounts of the salts give twice as many $K^+$ as $Na^+$, all as separate ions. Every possible pairing contains $K^+$, $Na^+$ or $NO_3^-$, so no solid forms, and strong electrolytes are never drawn as intact formula units.',
    partNumber: 4,
    partTitle: 'Picturing Solutions',
  },
  {
    id: 'sol-ent-4b',
    question: 'Beaker X holds 0.10 M $CaCl_2$ and beaker Y holds 0.15 M NaCl. In particle diagrams of equal volumes from each beaker, how do the numbers of chloride ions compare?',
    options: [
      'Y shows 3 chloride ions for every 2 in X',
      'Neither, since both show the same number',
      'Y shows more, since its molarity is higher',
      'X shows 4 chloride ions for each 3 shown in Y',
    ],
    correctIndex: 3,
    explanation: 'Each $CaCl_2$ releases two $Cl^-$, so beaker X has $[Cl^-] = 0.20$ M while beaker Y has 0.15 M: a ratio of 4 to 3 in favor of X. Comparing the salt molarities alone ignores the subscript 2.',
    partNumber: 4,
    partTitle: 'Picturing Solutions',
  },

  // Part 5: Electrolytes and Why Things Dissolve
  {
    id: 'sol-ent-5a',
    question: 'Which ranks these 0.10 M solutions from poorest to best electrical conductor: methanol ($CH_3OH$), acetic acid ($CH_3COOH$), KBr and $MgCl_2$?',
    options: [
      '$CH_3OH$ < $CH_3COOH$ < KBr < $MgCl_2$',
      '$CH_3COOH$ < $CH_3OH$ < KBr < $MgCl_2$',
      '$CH_3OH$ < $CH_3COOH$ < $MgCl_2$ < KBr',
      'KBr < $MgCl_2$ < $CH_3COOH$ < $CH_3OH$',
    ],
    correctIndex: 0,
    explanation: 'Methanol is a nonelectrolyte (no ions), acetic acid is a weak electrolyte (few ions), and the two salts dissociate completely, with $MgCl_2$ giving 3 ions per formula unit (0.30 M) versus 2 for KBr (0.20 M). More mobile ions mean better conduction.',
    partNumber: 5,
    partTitle: 'Electrolytes and Why Things Dissolve',
  },
  {
    id: 'sol-ent-5b',
    question: 'Ethanol, $CH_3CH_2OH$, mixes with water in all proportions, but hexane, $C_6H_{14}$, does not mix with water. Which explanation is best?',
    options: [
      'Hexane is denser than water, so it sinks and stays separate',
      'Ethanol reacts with water to form ions that stay dissolved',
      'Ethanol\'s O–H groups hydrogen-bond with water, replacing what is lost',
      'Hexane molecules are too large to fit between water molecules',
    ],
    correctIndex: 2,
    explanation: 'Mixing requires breaking water\'s hydrogen bonds; ethanol can hydrogen-bond to water and make up for them, but hexane offers only weak dispersion forces, so separating the water molecules costs more than it returns. Hexane is actually less dense than water, and ethanol dissolves as intact molecules.',
    partNumber: 5,
    partTitle: 'Electrolytes and Why Things Dissolve',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'sol-ent-6a',
    question: '50.0 mL of 0.200 M $CaCl_2$ is mixed with 150.0 mL of 0.100 M NaCl. No precipitate forms. What is $[Cl^-]$ in the mixture?',
    options: ['0.125 M', '0.175 M', '0.250 M', '0.500 M'],
    correctIndex: 1,
    explanation: 'Moles of $Cl^-$ $= 2(0.200)(0.0500) + (0.100)(0.1500) = 0.0200 + 0.0150 = 0.0350$ mol in 0.2000 L, giving 0.175 M. Dropping the 2 for $CaCl_2$ gives 0.125 M, averaging 0.400 M and 0.100 M gives 0.250 M, and adding them gives 0.500 M.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'sol-ent-6b',
    question: '40.0 mL of 0.150 M $AgNO_3$ is mixed with 20.0 mL of 0.200 M $Na_2CrO_4$, and insoluble $Ag_2CrO_4$ (331.7 g/mol) precipitates: $2Ag^+ + CrO_4^{2-} \\rightarrow Ag_2CrO_4(s)$. What mass of precipitate forms?',
    options: ['1.33 g', '1.99 g', '0.663 g', '0.995 g'],
    correctIndex: 3,
    explanation: 'There are 0.00600 mol $Ag^+$ and 0.00400 mol $CrO_4^{2-}$; using all the chromate would need 0.00800 mol $Ag^+$, so $Ag^+$ limits and forms $0.00600/2 = 0.00300$ mol of solid, or 0.995 g. 1.33 g treats chromate as limiting and 1.99 g ignores the 2 : 1 ratio.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'sol-ent-7a',
    question: 'To find the sulfate concentration of a sample, a student adds excess $BaCl_2$, then filters, dries and weighs the $BaSO_4$ precipitate. Some fine precipitate passes through the filter paper. How does this affect the calculated sulfate concentration?',
    options: [
      'Too low, since less $BaSO_4$ mass is recorded',
      'Too high, since lost solid makes the sample seem richer',
      'Unaffected, since excess $BaCl_2$ was added anyway',
      'Too high, since the filtrate still holds extra sulfate',
    ],
    correctIndex: 0,
    explanation: 'The calculation turns the mass of $BaSO_4$ into moles of sulfate, so any solid lost through the filter lowers the recorded mass and the calculated concentration. Adding excess $BaCl_2$ makes sure all the sulfate precipitates, but it cannot recover solid that was not collected.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'sol-ent-7b',
    question: 'Which solution has the same total concentration of dissolved particles as 0.20 M $CaCl_2$?',
    options: ['0.20 M $K_3PO_4$', '0.40 M $C_6H_{12}O_6$', '0.30 M NaCl', '0.20 M $NaNO_3$'],
    correctIndex: 2,
    explanation: '0.20 M $CaCl_2$ gives $3 \\times 0.20 = 0.60$ M of ions, and 0.30 M NaCl gives $2 \\times 0.30 = 0.60$ M. $K_3PO_4$ gives 0.80 M, $NaNO_3$ gives 0.40 M, and glucose is a nonelectrolyte that stays at 0.40 M.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Solution Terminology' },
    { partNumber: 2, partTitle: 'Molarity and Ion Concentrations' },
    { partNumber: 3, partTitle: 'Dilution' },
    { partNumber: 4, partTitle: 'Picturing Solutions' },
    { partNumber: 5, partTitle: 'Electrolytes and Why Things Dissolve' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
