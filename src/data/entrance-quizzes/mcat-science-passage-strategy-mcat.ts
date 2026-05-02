/**
 * Entrance Quiz — MCAT Science Passage Strategy
 * 16 questions · 8 parts (2 per part), aligned to interactive lesson part titles.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Reading Science Passages
  { id: 'msps-ent-1a', question: 'For an MCAT science passage, the most efficient first step is to:', options: ['Memorize every numerical value before reading the questions', 'Skip the passage entirely and answer from outside knowledge', 'Skim for passage type, main idea, figures, and any defined variables/terms', 'Read every paragraph word-for-word twice before looking at questions'], correctIndex: 2, explanation: 'A targeted skim (passage type, central question, figures, defined variables) gives you a mental map so you can dive into questions and look up specifics as needed.', partNumber: 1, partTitle: 'Reading Science Passages' },
  { id: 'msps-ent-1b', question: 'In a research-study passage, the single most useful thing to identify on first read is:', options: ['The independent variable, dependent variable, and control', 'The names of all the authors cited', 'Every unit conversion in the methods', 'The exact p-value of every result'], correctIndex: 0, explanation: 'IV, DV, and control let you make sense of the experimental design and answer most "purpose / interpret / weaken" questions efficiently.', partNumber: 1, partTitle: 'Reading Science Passages' },

  // Part 2 — Data Interpretation
  { id: 'msps-ent-2a', question: 'Before reading any data points off a figure, you should always first:', options: ['Calculate the slope of every curve', 'Identify both axis labels with units and the figure caption', 'Estimate the correlation coefficient', 'Check whether the y-axis is logarithmic by guessing'], correctIndex: 1, explanation: 'Orienting to axes (variable + units) and the caption prevents misreading. Trends usually matter more than exact values.', partNumber: 2, partTitle: 'Data Interpretation' },
  { id: 'msps-ent-2b', question: 'A graph shows enzyme activity rising and then plateauing as substrate concentration increases. The plateau most likely reflects:', options: ['Enzyme denaturation', 'Substrate inhibition', 'Enzyme saturation (Vmax reached)', 'Loss of cofactor'], correctIndex: 2, explanation: 'A saturating plateau is the signature of Michaelis–Menten kinetics: at high [S], all enzyme active sites are occupied, so rate approaches Vmax.', partNumber: 2, partTitle: 'Data Interpretation' },

  // Part 3 — Experimental Design
  { id: 'msps-ent-3a', question: 'A control group in an experiment is best defined as:', options: ['The group given the highest dose of treatment', 'A group identical to experimental groups except for the variable being tested', 'A group that always produces a null result', 'The group used to calibrate equipment'], correctIndex: 1, explanation: 'Controls isolate the effect of the IV by matching everything else. Without a control, observed differences cannot be attributed to the IV.', partNumber: 3, partTitle: 'Experimental Design' },
  { id: 'msps-ent-3b', question: "A study finds that drug X correlates with reduced anxiety. Which design weakness most threatens a causal interpretation?", options: ['Use of a placebo control', 'Random assignment of participants', 'Lack of blinding and a placebo group', 'A double-blind, randomized procedure'], correctIndex: 2, explanation: 'Without blinding and placebo, observed effects could be due to expectation/placebo effects rather than the drug itself — undermining causal inference.', partNumber: 3, partTitle: 'Experimental Design' },

  // Part 4 — Discrete Questions
  { id: 'msps-ent-4a', question: 'A discrete (passage-independent) MCAT question is best approached by:', options: ['Re-reading the most recent passage thoroughly first', 'Treating it as a content-only question that pulls from outside knowledge', 'Searching the prior passage for hidden references', 'Skipping it and returning if time allows'], correctIndex: 1, explanation: 'Discretes do not depend on a passage. Recognize them quickly and answer using your foundational content knowledge — usually faster than passage-based questions.', partNumber: 4, partTitle: 'Discrete Questions' },
  { id: 'msps-ent-4b', question: 'On a discrete chemistry question, you don\'t recognize the molecule shown. The best strategy is to:', options: ['Skip and guess randomly', 'Identify functional groups and reason from general principles', 'Wait until later — the answer might appear in a passage', 'Mark all four answers and move on'], correctIndex: 1, explanation: 'Even unfamiliar structures can be analyzed from functional groups, polarity, acidity, etc. Reasoning from first principles often yields the answer.', partNumber: 4, partTitle: 'Discrete Questions' },

  // Part 5 — Integrating Content Knowledge
  { id: 'msps-ent-5a', question: 'A passage describes an enzyme inhibitor and asks how it would affect Km and Vmax. The best approach is to:', options: ['Memorize the passage and ignore your biochemistry background', 'Combine passage details (binding site, reversible vs. irreversible) with your knowledge of competitive vs. non-competitive inhibition', 'Pick whichever answer matches the passage title', 'Skip the question — the passage didn\'t explicitly say'], correctIndex: 1, explanation: 'MCAT science questions reward combining passage info with outside content knowledge. Identify the inhibition type from passage clues, then apply the standard Km/Vmax effects.', partNumber: 5, partTitle: 'Integrating Content Knowledge' },
  { id: 'msps-ent-5b', question: 'A passage uses jargon you don\'t recognize. You should:', options: ['Stop and look it up in a textbook', 'Note its context and treat it as a defined symbol; rely on the passage definition', 'Skip the passage entirely', 'Replace it with a familiar word and hope it works'], correctIndex: 1, explanation: 'Passages often introduce novel terms; the test rewards reading them as defined-in-context. Use surrounding sentences to infer meaning.', partNumber: 5, partTitle: 'Integrating Content Knowledge' },

  // Part 6 — Common Traps & Pitfalls
  { id: 'msps-ent-6a', question: 'A common MCAT trap is selecting an answer that is:', options: ['Factually true but does not answer the specific question asked', 'Phrased in technical language', 'Shorter than the other options', 'Negatively worded'], correctIndex: 0, explanation: 'Distractors are often true statements that simply don\'t address the prompt. Always re-check that the chosen answer answers the actual question.', partNumber: 6, partTitle: 'Common Traps & Pitfalls' },
  { id: 'msps-ent-6b', question: 'When a question asks which answer is "EXCEPT" or "NOT" true, the safest tactic is to:', options: ['Pick the longest option', 'Eliminate the three options that ARE true to find the one that is not', 'Choose the option with the most jargon', 'Always pick the option that mentions the passage author'], correctIndex: 1, explanation: 'Negative-phrased questions reverse the usual logic. Cross out the three statements supported by the passage; the remaining answer is correct.', partNumber: 6, partTitle: 'Common Traps & Pitfalls' },

  // Part 7 — Review & MCAT Practice
  { id: 'msps-ent-7a', question: 'When reviewing missed practice questions, the most important step is to:', options: ['Memorize the correct answer letter', 'Diagnose why the wrong choice was attractive and what content/reasoning gap it reveals', 'Re-do the entire passage from scratch', 'Skip review and just do more questions'], correctIndex: 1, explanation: 'Quality review surfaces patterns: misread the question, weak content area, or fell for a trap. Fixing root causes raises your score; just memorizing answers does not.', partNumber: 7, partTitle: 'Review & MCAT Practice' },
  { id: 'msps-ent-7b', question: 'Pacing on the MCAT science sections (~95 min, 59 questions) suggests roughly how much time per question on average?', options: ['~30 seconds', '~95 seconds (~1.6 min)', '~3 minutes', '~5 minutes'], correctIndex: 1, explanation: '95 min / 59 q ≈ 1.6 min per question on average. Discretes take less; passages with heavy data take more.', partNumber: 7, partTitle: 'Review & MCAT Practice' },

  // Part 8 — Feedback Loop Graph Reasoning
  { id: 'msps-ent-8a', question: 'A graph shows blood glucose rising after a meal, peaking, and then falling back to baseline as insulin secretion rises. This pattern is characteristic of a:', options: ['Positive feedback loop', 'Negative feedback loop', 'Open-loop system', 'Random oscillation'], correctIndex: 1, explanation: 'Negative feedback opposes the change: rising glucose triggers insulin, which lowers glucose back to set point. Most homeostatic systems are negative-feedback loops.', partNumber: 8, partTitle: 'Feedback Loop Graph Reasoning' },
  { id: 'msps-ent-8b', question: 'A passage shows oxytocin release amplifying uterine contractions, which then trigger more oxytocin release. On a feedback-loop diagram this corresponds to:', options: ['Negative feedback (output inhibits input)', 'Positive feedback (output amplifies input)', 'Steady-state equilibrium', 'A simple linear relationship with no feedback'], correctIndex: 1, explanation: 'Childbirth is a textbook positive-feedback example: contractions → oxytocin → stronger contractions → more oxytocin, until delivery breaks the loop.', partNumber: 8, partTitle: 'Feedback Loop Graph Reasoning' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Reading Science Passages' },
    { partNumber: 2, partTitle: 'Data Interpretation' },
    { partNumber: 3, partTitle: 'Experimental Design' },
    { partNumber: 4, partTitle: 'Discrete Questions' },
    { partNumber: 5, partTitle: 'Integrating Content Knowledge' },
    { partNumber: 6, partTitle: 'Common Traps & Pitfalls' },
    { partNumber: 7, partTitle: 'Review & MCAT Practice' },
    { partNumber: 8, partTitle: 'Feedback Loop Graph Reasoning' },
  ]
}
