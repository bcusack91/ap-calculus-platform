/**
 * Entrance Quiz — MCAT Science Passage Strategy
 * 16 questions · 8 parts (2 per part)
 * Part titles match the interactive lesson's "Part N of 8" lines
 * (re-aligned Nov 2026).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Understanding MCAT Science Passages'
const P2 = 'Data Interpretation'
const P3 = 'Experimental Design'
const P4 = 'Question Types & Strategies'
const P5 = 'Chemistry & Physics Passage Tactics'
const P6 = 'Biology & Biochemistry Passage Tactics'
const P7 = 'Psych/Soc Passage Tactics'
const P8 = 'Feedback Loop Graph Reasoning'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Understanding MCAT Science Passages
  { id: 'msps-ent-1a', question: 'A passage introduces a new class of receptors, defines its terms, and compares two subtypes, but describes no experiment. This passage is best classified as:', options: ['Experiment-based', 'Information-based', 'A research study', 'A discrete set'], correctIndex: 1, explanation: 'An information-based passage presents new concepts, definitions and comparisons, so the reading focus is on the key terms and how they relate. Experiment-based passages and research studies describe methods and results, where the focus shifts to variables, controls and data trends. Discrete questions come with no passage at all.', partNumber: 1, partTitle: P1 },
  { id: 'msps-ent-1b', question: 'On a first read of a science passage, which habit wastes the most time?', options: ['Noting the research question', 'Checking figure axes and trends', 'Trying to memorize every detail', 'Spotting the independent variable'], correctIndex: 2, explanation: 'The passage stays on screen, so the first read only needs a map: the hypothesis, the variables, and what each figure shows. Memorizing every value or mechanism spends minutes on details most questions never ask about; you can look them up when a question points to them. The other three habits are exactly what active reading targets.', partNumber: 1, partTitle: P1 },

  // Part 2 — Data Interpretation
  { id: 'msps-ent-2a', question: 'Before reading any values off a figure, you should first:', options: ['Identify each axis, its units, and the caption', 'Calculate the slope of every curve shown', 'Estimate the correlation coefficient by eye', 'Decide which curve the question will ask about'], correctIndex: 0, explanation: 'Knowing what each axis measures, in what units, and what the caption says the figure shows prevents the most common data errors: misreading a log axis as linear, confusing two similar curves, or missing that the y-axis plots a change rather than an absolute value. Only then does it pay to read trends.', partNumber: 2, partTitle: P2 },
  { id: 'msps-ent-2b', question: 'Two groups in a figure have different mean values, but their error bars overlap heavily. The safest interpretation is:', options: ['The higher mean proves a real effect', 'The lower group must be the control', 'The difference may not be meaningful', 'The error bars show the data are wrong'], correctIndex: 2, explanation: 'Heavily overlapping error bars mean the spread within each group is large compared with the gap between them, so the difference may be due to chance rather than to the treatment. A difference in means alone proves nothing, and error bars describe variability, not mistakes in the data.', partNumber: 2, partTitle: P2 },

  // Part 3 — Experimental Design
  { id: 'msps-ent-3a', question: 'A control group in an experiment is best defined as a group that:', options: ['Receives the highest dose of the treatment', 'Is certain to show no change in the outcome', 'Is used only to calibrate the equipment', 'Matches the test group except for the IV'], correctIndex: 3, explanation: 'A control isolates the independent variable: everything else is held the same, so any difference in outcome can be attributed to the one thing that changed. A control is defined by this matching, not by its result; a placebo group, for example, can show a real effect.', partNumber: 3, partTitle: P3 },
  { id: 'msps-ent-3b', question: 'In a randomized controlled trial, the main purpose of random assignment is to:', options: ['Ensure every participant gets the drug', 'Spread confounders evenly between groups', 'Make the sample match the population', 'Keep participants unaware of their group'], correctIndex: 1, explanation: 'Randomization lets chance, not the researcher or the participant, decide who gets the treatment, so known and unknown confounders tend to balance out across groups, and that is what supports a causal conclusion. Matching the wider population is random sampling, which bears on external validity, and keeping participants unaware of their group is blinding.', partNumber: 3, partTitle: P3 },

  // Part 4 — Question Types & Strategies
  { id: 'msps-ent-4a', question: 'A discrete (standalone) MCAT science question is best approached by:', options: ['Answering it from your content knowledge', 'Rereading the most recent passage carefully', 'Searching the last passage for a hidden clue', 'Skipping it and returning only if time allows'], correctIndex: 0, explanation: 'Discrete questions stand alone and test content knowledge with no passage behind them, so recognizing one immediately saves the time others spend hunting for context that does not exist. They usually go quickly, which makes them a place to bank time rather than to defer.', partNumber: 4, partTitle: P4 },
  { id: 'msps-ent-4b', question: 'After reading a question stem, the recommended step before looking at the answer choices is to:', options: ['Reread the whole passage from the start', 'Predict the answer in your own words', 'Pick the longest answer choice first', 'Eliminate any choice with technical terms'], correctIndex: 1, explanation: 'A prediction made before reading the choices gives you a target, so tempting distractors (true but irrelevant, extreme, or the opposite of correct) are easier to reject. Rereading the whole passage costs minutes, and surface features such as length or jargon say nothing about whether a choice is right.', partNumber: 4, partTitle: P4 },

  // Part 5 — Chemistry & Physics Passage Tactics
  { id: 'msps-ent-5a', question: 'A chemistry passage requires $(4.1 \\times 10^{3})(1.9 \\times 10^{-5})$. The fastest reliable estimate is about:', options: ['$8 \\times 10^{-3}$', '$6 \\times 10^{-2}$', '$8 \\times 10^{-2}$', '$8 \\times 10^{-8}$'], correctIndex: 2, explanation: 'Round each factor and handle the powers of ten separately: $4 \\times 2 = 8$ and $10^{3} \\times 10^{-5} = 10^{-2}$, so the product is about $8 \\times 10^{-2}$ (the exact value is $7.8 \\times 10^{-2}$). Mishandling the exponents gives $10^{-3}$ or $10^{-8}$, and adding 4.1 and 1.9 instead of multiplying gives 6.', partNumber: 5, partTitle: P5 },
  { id: 'msps-ent-5b', question: 'You finish a physics calculation for a speed, and the result comes out in units of m/s$^2$. The best next step is to:', options: ['Report it, since the number looks reasonable', 'Convert it by multiplying by one second', 'Pick the answer choice closest in value', 'Recheck the setup, since a speed is in m/s'], correctIndex: 3, explanation: 'Dimensional analysis is a built-in check: a speed must come out in m/s, so units of m/s$^2$ mean a step in the setup went wrong, such as dividing by time once too often. Patching the units or choosing the nearest number hides the error instead of fixing it.', partNumber: 5, partTitle: P5 },

  // Part 6 — Biology & Biochemistry Passage Tactics
  { id: 'msps-ent-6a', question: 'In an ELISA run on several samples, a higher absorbance reading indicates:', options: ['A larger DNA fragment', 'Less of the target protein', 'A smaller protein band', 'More of the target protein'], correctIndex: 3, explanation: 'ELISA measures protein concentration: the more target protein binds, the more colored product the linked enzyme makes, so absorbance rises with the amount of target. DNA fragment size is read from a gel, and protein size from an SDS-PAGE or Western blot band.', partNumber: 6, partTitle: P6 },
  { id: 'msps-ent-6b', question: 'On SDS-PAGE, proteins are separated mainly by their:', options: ['Molecular size', 'Net charge at pH 7', 'Isoelectric point', 'Side-chain polarity'], correctIndex: 0, explanation: 'SDS unfolds proteins and coats them with negative charge roughly in proportion to their length, so native charge and shape no longer matter and the gel sorts them by size: smaller proteins run farther. Separating proteins by isoelectric point is a different technique, isoelectric focusing.', partNumber: 6, partTitle: P6 },

  // Part 7 — Psych/Soc Passage Tactics
  { id: 'msps-ent-7a', question: "In a Psych/Soc passage, a larger standard deviation for a group's scores means the scores are:", options: ['Higher on average', 'More significant', 'More widely spread', 'More tightly clustered'], correctIndex: 2, explanation: 'Standard deviation measures how far scores typically fall from the mean, so a larger value means a wider spread. It says nothing about whether the mean is high or whether a result is statistically significant, which is what a p-value addresses.', partNumber: 7, partTitle: P7 },
  { id: 'msps-ent-7b', question: 'Which correlation coefficient shows the strongest linear relationship?', options: ['$r = +0.40$', '$r = +0.70$', '$r = -0.10$', '$r = -0.85$'], correctIndex: 3, explanation: 'Strength is read from the magnitude of $r$; the sign shows only the direction. $|-0.85| = 0.85$ is the largest magnitude, so it is the strongest relationship even though it is negative.', partNumber: 7, partTitle: P7 },

  // Part 8 — Feedback Loop Graph Reasoning
  { id: 'msps-ent-8a', question: 'Across ordered conditions, a response reads 50, 44, 40, 38. Its first differences are best described as:', options: ['Negative and shrinking in size', 'Negative and growing in size', 'Positive and shrinking in size', 'Constant from step to step'], correctIndex: 0, explanation: 'The differences are $-6$, $-4$, $-2$: every step is a drop, and each drop is smaller than the last, so the response is leveling off, a damping-like (decelerating) shape. Growing negative steps would mean an accelerating fall, and constant steps would mean a near-linear trend.', partNumber: 8, partTitle: P8 },
  { id: 'msps-ent-8b', question: 'When judging whether a graph supports a positive-feedback claim, why compare first differences rather than only the raw values?', options: ['They remove the need for a control', 'They show if the rise speeds up', 'They prove the mechanism behind it', 'They turn the data into p-values'], correctIndex: 1, explanation: 'Rising raw values fit amplification and damping alike; the differences tell them apart. Growing increments mean an accelerating, amplification-like trend, while shrinking increments mean damping. Even a matching shape is only consistent with feedback in the measured range; testing the mechanism takes an experiment that perturbs the proposed mediator.', partNumber: 8, partTitle: P8 },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
    { partNumber: 8, partTitle: P8 },
  ]
}
