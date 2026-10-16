/**
 * Entrance Quiz — Mixtures & Separations
 *
 * 14 questions covering all 7 lesson parts (2 per part).
 *
 * Part mapping:
 *  1 — Pure Substances vs Mixtures
 *  2 — Filtration, Evaporation & Distillation
 *  3 — Chromatography
 *  4 — Beer's Law & Absorbance
 *  5 — Quantitative Analysis
 *  6 — Problem-Solving Workshop
 *  7 — Synthesis & AP Review
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Pure Substances vs Mixtures
  {
    id: 'ms-ent-1a',
    question: 'A clear, colorless liquid begins boiling at 82 °C, and its boiling temperature climbs steadily to 91 °C as it boils away. What is the best conclusion?',
    options: [
      'A pure compound, since it is clear and colorless',
      'An element, since it boils at a modest temperature',
      'A mixture, since pure substances boil sharply',
      'A pure substance, since boiling is only a physical change',
    ],
    correctIndex: 2,
    explanation: 'A pure substance has a fixed boiling point, while a mixture boils over a range because its composition changes as the more volatile component leaves. Being clear and colorless says nothing about purity, and the boiling temperature does not identify an element.',
    partNumber: 1,
    partTitle: 'Pure Substances vs Mixtures',
  },
  {
    id: 'ms-ent-1b',
    question: 'Which sample is a heterogeneous mixture?',
    options: [
      'Muddy water that settles on standing',
      'Ice cubes floating in pure water',
      'Brass, an alloy of copper and zinc',
      'Seawater that has been filtered',
    ],
    correctIndex: 0,
    explanation: 'Muddy water has regions of different composition and separates on standing. Ice in water is one pure substance in two phases, while brass and filtered seawater are uniform throughout (homogeneous mixtures).',
    partNumber: 1,
    partTitle: 'Pure Substances vs Mixtures',
  },

  // Part 2: Filtration, Evaporation & Distillation
  {
    id: 'ms-ent-2a',
    question: 'A nonvolatile dye is dissolved in methanol (bp 65 °C). A student wants to recover both the dye and the methanol. Which technique is best?',
    options: ['Evaporation', 'Simple distillation', 'Filtration', 'Paper chromatography'],
    correctIndex: 1,
    explanation: 'Distillation boils off the methanol and condenses it for collection, leaving the dye behind. Evaporation would recover the dye but lose the methanol to the air, filtration cannot remove a dissolved solute, and chromatography does not recover bulk amounts of solvent.',
    partNumber: 2,
    partTitle: 'Filtration, Evaporation & Distillation',
  },
  {
    id: 'ms-ent-2b',
    question: 'Why does fractional distillation separate ethanol (bp 78 °C) from water (bp 100 °C) better than simple distillation does?',
    options: [
      'The column filters out water molecules, which are larger than ethanol',
      'The column heats the vapor until only ethanol can stay a gas',
      'The column reacts with water and holds it as a solid hydrate',
      'Repeated condensing and re-boiling in the column enriches the vapor in ethanol',
    ],
    correctIndex: 3,
    explanation: 'Each time the vapor condenses and re-evaporates on the column packing, the new vapor is richer in the more volatile ethanol, so many small enrichments add up to a good separation. The column neither filters by size nor reacts with water, and it is cooler, not hotter, toward the top.',
    partNumber: 2,
    partTitle: 'Filtration, Evaporation & Distillation',
  },

  // Part 3: Chromatography
  {
    id: 'ms-ent-3a',
    question: 'On paper developed in water, an unknown dye moves 3.6 cm while the solvent front moves 9.0 cm from the starting line. Which reference dye could the unknown be?',
    options: [
      'Dye P ($R_f$ = 0.40)',
      'Dye Q ($R_f$ = 0.60)',
      'Dye R ($R_f$ = 0.36)',
      'Dye S ($R_f$ = 2.5)',
    ],
    correctIndex: 0,
    explanation: '$R_f = 3.6/9.0 = 0.40$, which matches dye P. 0.60 measures the gap above the spot instead of the distance traveled, 2.5 inverts the ratio (an $R_f$ can never exceed 1), and 0.36 does not use the solvent-front distance.',
    partNumber: 3,
    partTitle: 'Chromatography',
  },
  {
    id: 'ms-ent-3b',
    question: 'Compound X is nonpolar, and compound Y has two O–H groups. A mixture of the two is run on a polar silica plate developed with hexane. Which result is expected?',
    options: [
      'Y travels near the solvent front; X stays near the start',
      'Both travel together all the way to the solvent front',
      'X travels near the solvent front; Y stays near the start',
      'Both stay at the start, since hexane dissolves neither one',
    ],
    correctIndex: 2,
    explanation: 'Y\'s O–H groups hydrogen-bond strongly to the polar silica, so it barely moves, while nonpolar X is attracted more to the nonpolar hexane and travels with the solvent. Differences in these attractions are what separate the two compounds.',
    partNumber: 3,
    partTitle: 'Chromatography',
  },

  // Part 4: Beer's Law & Absorbance
  {
    id: 'ms-ent-4a',
    question: 'A $2.50 \\times 10^{-4}$ M standard has an absorbance of 0.300. An unknown solution of the same species, measured in the same cuvette at the same wavelength, has an absorbance of 0.540. What is its concentration?',
    options: [
      '$1.39 \\times 10^{-4}$ M',
      '$4.50 \\times 10^{-4}$ M',
      '$1.35 \\times 10^{-4}$ M',
      '$2.50 \\times 10^{-4}$ M',
    ],
    correctIndex: 1,
    explanation: 'Absorbance is proportional to concentration, so $c = (2.50 \\times 10^{-4})(0.540/0.300) = 4.50 \\times 10^{-4}$ M. $1.39 \\times 10^{-4}$ M inverts the ratio, and $1.35 \\times 10^{-4}$ M multiplies by the absorbance without dividing by the standard\'s absorbance.',
    partNumber: 4,
    partTitle: 'Beer\'s Law & Absorbance',
  },
  {
    id: 'ms-ent-4b',
    question: 'A student zeroes the spectrophotometer with a blank that accidentally contains a little of the colored solute, then measures the samples. How are the calculated concentrations affected?',
    options: [
      'Too high, since the blank adds extra absorbance to each sample',
      'Unaffected, since the blank only sets the instrument\'s zero',
      'Too high, since the tinted blank lengthens the light\'s path',
      'Too low, since some real absorbance is subtracted out',
    ],
    correctIndex: 3,
    explanation: 'Zeroing on a tinted blank tells the instrument to treat some real absorbance as zero, so every measured absorbance is too low, and by $A = \\varepsilon bc$ the calculated concentrations are too low. The path length is set by the cuvette and does not change.',
    partNumber: 4,
    partTitle: 'Beer\'s Law & Absorbance',
  },

  // Part 5: Quantitative Analysis
  {
    id: 'ms-ent-5a',
    question: 'A 0.750 g alloy sample is dissolved, and all of its silver is precipitated as 0.574 g of AgCl (143.32 g/mol; Ag = 107.87 g/mol). What is the mass percent of silver in the alloy?',
    options: ['57.6%', '76.5%', '18.9%', '75.3%'],
    correctIndex: 0,
    explanation: 'Moles of AgCl $= 0.574/143.32 = 0.00401$ mol, so the mass of Ag $= 0.00401 \\times 107.87 = 0.432$ g, and $0.432/0.750 = 57.6\\%$. 76.5% divides the whole AgCl mass by the sample, 18.9% uses the chlorine mass, and 75.3% compares Ag with the precipitate instead of the sample.',
    partNumber: 5,
    partTitle: 'Quantitative Analysis',
  },
  {
    id: 'ms-ent-5b',
    question: 'A 25.0 mL sample of $Ca(OH)_2$ solution needs 18.6 mL of 0.120 M HCl to reach the equivalence point: $Ca(OH)_2 + 2HCl \\rightarrow CaCl_2 + 2H_2O$. What is the concentration of the $Ca(OH)_2$?',
    options: ['0.0893 M', '0.179 M', '0.0446 M', '0.161 M'],
    correctIndex: 2,
    explanation: 'Moles of HCl $= 0.120 \\times 0.0186 = 0.00223$ mol, which react with half as many moles of $Ca(OH)_2$ (0.00112 mol), and $0.00112/0.0250 = 0.0446$ M. 0.0893 M ignores the 1 : 2 ratio, 0.179 M applies it backward, and 0.161 M swaps the two volumes.',
    partNumber: 5,
    partTitle: 'Quantitative Analysis',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'ms-ent-6a',
    question: 'A calibration curve follows $A = (1.50 \\times 10^{3}\\ \\text{M}^{-1})\\,c$. A 2.00 mL sample is diluted to 50.0 mL, and the diluted solution has $A = 0.420$. What was the concentration of the original sample?',
    options: [
      '$2.80 \\times 10^{-4}$ M',
      '$7.00 \\times 10^{-3}$ M',
      '$1.12 \\times 10^{-5}$ M',
      '$6.30 \\times 10^{2}$ M',
    ],
    correctIndex: 1,
    explanation: 'The diluted solution is $0.420/1500 = 2.80 \\times 10^{-4}$ M, and the sample was diluted by a factor of $50.0/2.00 = 25$, so the original was $25 \\times 2.80 \\times 10^{-4} = 7.00 \\times 10^{-3}$ M. Stopping at $2.80 \\times 10^{-4}$ M forgets the dilution, and dividing by 25 gives $1.12 \\times 10^{-5}$ M.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'ms-ent-6b',
    question: 'Which method would best determine the concentration of acetic acid in a sample of vinegar?',
    options: [
      'Filtering the vinegar and weighing the residue',
      'Paper chromatography and comparison of $R_f$ values',
      'Evaporating the vinegar and weighing what remains',
      'Titration with a standard NaOH solution',
    ],
    correctIndex: 3,
    explanation: 'Acetic acid reacts completely with NaOH, so the volume of standard base needed to reach the equivalence point gives the moles of acid directly. The acid is dissolved (nothing to filter) and volatile (it would evaporate), and chromatography identifies components rather than measuring their amounts.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'ms-ent-7a',
    question: 'Before titrating an acid, a student forgets to rinse the buret with the standard NaOH, so water left inside dilutes the titrant. How is the calculated acid concentration affected?',
    options: [
      'Too high, since a larger volume of titrant is needed',
      'Too low, since diluted titrant reacts more slowly',
      'Unaffected, since water does not react with acid',
      'Too low, since less titrant volume is recorded',
    ],
    correctIndex: 0,
    explanation: 'The diluted NaOH is weaker than its labeled concentration, so more volume is needed to neutralize the acid; multiplying that larger volume by the labeled molarity overstates the moles of base, and the acid concentration comes out too high.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
  {
    id: 'ms-ent-7b',
    question: 'A liquid that boils over a range from 64 °C to 99 °C is distilled. The first fraction collected then boils sharply at 65 °C. What is the best conclusion?',
    options: [
      'It is still a mixture, since it came from a mixture',
      'The original liquid was pure, and distilling it changed its identity',
      'The distillate is likely a pure substance taken out of a mixture',
      'Both liquids are pure, since each one boils at some temperature',
    ],
    correctIndex: 2,
    explanation: 'A sharp, constant boiling point is a sign of a pure substance, so the first fraction is likely the more volatile component separated from the original mixture, which boiled over a range. Distillation is a physical separation and does not change a substance\'s identity.',
    partNumber: 7,
    partTitle: 'Synthesis & AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Pure Substances vs Mixtures' },
    { partNumber: 2, partTitle: 'Filtration, Evaporation & Distillation' },
    { partNumber: 3, partTitle: 'Chromatography' },
    { partNumber: 4, partTitle: 'Beer\'s Law & Absorbance' },
    { partNumber: 5, partTitle: 'Quantitative Analysis' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
