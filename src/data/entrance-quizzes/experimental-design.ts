/**
 * Entrance Quiz — Experimental Design (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ed-ent-1a', question: 'What is the purpose of random assignment in an experiment?', options: ['To ensure a large sample size', 'To randomly place subjects into treatment groups so the groups are comparable', 'To select a representative sample from the population', 'To eliminate the need for a control group'], correctIndex: 1, explanation: 'Random assignment places subjects randomly into treatment groups to create comparable groups, balancing out confounding variables.', partNumber: 1, partTitle: 'Randomization' },
  { id: 'ed-ent-1b', question: 'Randomization in experiments helps control for:', options: ['Only known confounding variables', 'Only unknown confounding variables', 'Both known and unknown confounding variables', 'Neither known nor unknown variables'], correctIndex: 2, explanation: 'Randomization controls for both known and unknown confounding variables by distributing them roughly equally across treatment groups.', partNumber: 1, partTitle: 'Randomization' },
  { id: 'ed-ent-2a', question: 'A control group in an experiment:', options: ['Receives the most effective treatment', 'Receives no treatment or a placebo, providing a baseline for comparison', 'Is always the largest group', 'Is selected using stratified sampling'], correctIndex: 1, explanation: 'A control group receives no treatment or a placebo, serving as a baseline to compare against the treatment group(s).', partNumber: 2, partTitle: 'Control Groups' },
  { id: 'ed-ent-2b', question: 'The placebo effect occurs when:', options: ['The treatment works exactly as expected', 'Subjects respond to the belief that they are receiving treatment even though they are not', 'The control group has better outcomes', 'The experiment lacks random assignment'], correctIndex: 1, explanation: 'The placebo effect occurs when subjects respond to the belief they are receiving treatment, even when they receive an inactive substance.', partNumber: 2, partTitle: 'Control Groups' },
  { id: 'ed-ent-3a', question: 'In experimental design, replication refers to:', options: ['Repeating the entire experiment next year', 'Using enough subjects so that results are reliable and not due to chance', 'Having exactly two treatment groups', 'Publishing the results in multiple journals'], correctIndex: 1, explanation: 'Replication means using enough subjects so that the results are reliable and differences are unlikely to be due to chance alone.', partNumber: 3, partTitle: 'Replication' },
  { id: 'ed-ent-3b', question: 'How does increasing the sample size affect an experiment?', options: ['It increases bias', 'It reduces variability of results and increases power', 'It eliminates the need for randomization', 'It has no effect on the results'], correctIndex: 1, explanation: 'Larger sample sizes reduce variability of results and increase the power of the experiment to detect real differences.', partNumber: 3, partTitle: 'Replication' },
  { id: 'ed-ent-4a', question: 'In a block design, researchers:', options: ['Randomly select clusters from the population', 'Group similar subjects together, then randomly assign treatments within each block', 'Assign all subjects to the same treatment', 'Eliminate the control group to reduce cost'], correctIndex: 1, explanation: 'Blocking groups similar subjects together based on a known variable, then randomly assigns treatments within each block.', partNumber: 4, partTitle: 'Blocking' },
  { id: 'ed-ent-4b', question: 'Why is blocking used in experiments?', options: ['To increase sample size', 'To reduce variability by accounting for a known confounding variable', 'To avoid the need for random assignment', 'To make the study observational'], correctIndex: 1, explanation: 'Block designs reduce variability by accounting for a known confounding variable, making it easier to detect treatment effects.', partNumber: 4, partTitle: 'Blocking' },
  { id: 'ed-ent-5a', question: 'A 2×2 factorial design studies:', options: ['Two subjects with two responses each', 'Two factors simultaneously, each with 2 levels', 'One factor with 4 levels', 'Two unrelated experiments at once'], correctIndex: 1, explanation: 'A 2×2 factorial design studies two factors simultaneously, each with 2 levels, resulting in 4 treatment combinations.', partNumber: 5, partTitle: 'Factorial Design' },
  { id: 'ed-ent-5b', question: 'A major advantage of factorial designs is that they can detect:', options: ['Only main effects', 'Interaction effects between factors', 'Placebo effects', 'Sampling bias'], correctIndex: 1, explanation: 'Factorial designs allow researchers to detect interaction effects — situations where the effect of one factor depends on the level of the other.', partNumber: 5, partTitle: 'Factorial Design' },
  { id: 'ed-ent-6a', question: 'A researcher tests 3 fertilizers on corn. She groups fields by soil type first, then randomizes fertilizer within each group. This is a:', options: ['Completely randomized design', 'Randomized block design', 'Matched pairs design', 'Observational study'], correctIndex: 1, explanation: 'Grouping by soil type (block) and then randomizing treatments within blocks is a randomized block design.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ed-ent-6b', question: 'In a double-blind experiment:', options: ['Only the subjects are unaware of treatment assignments', 'Neither the subjects nor the researchers know who gets which treatment', 'Only the researchers are unaware of assignments', 'Everyone knows the treatment assignments'], correctIndex: 1, explanation: 'In a double-blind experiment, neither subjects nor researchers know who gets which treatment, reducing bias from both sides.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ed-ent-7a', question: 'The four principles of experimental design are:', options: ['Sampling, stratifying, clustering, and blocking', 'Comparison, random assignment, replication, and control', 'Observation, correlation, regression, and prediction', 'Hypothesis, test, p-value, and conclusion'], correctIndex: 1, explanation: 'The key principles of experimental design are comparison, random assignment, replication, and control.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'ed-ent-7b', question: 'On the AP exam, when asked to describe a complete experiment, you must include:', options: ['Only the hypothesis', 'Randomization, treatments, response variable, and replication', 'Only the sample size and conclusion', 'A graph of the expected results'], correctIndex: 1, explanation: 'The AP exam expects a complete description including randomization, treatments, response variable, and replication.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Randomization' },
    { partNumber: 2, partTitle: 'Control Groups' },
    { partNumber: 3, partTitle: 'Replication' },
    { partNumber: 4, partTitle: 'Blocking' },
    { partNumber: 5, partTitle: 'Factorial Design' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
