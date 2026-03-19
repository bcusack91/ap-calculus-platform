/**
 * Entrance Quiz — Observational Studies vs Experiments (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ove-ent-1a', question: 'In an observational study, the researcher:', options: ['Randomly assigns subjects to treatment groups', 'Observes individuals without imposing any treatments', 'Controls all variables in a laboratory setting', 'Uses a placebo on the control group'], correctIndex: 1, explanation: 'In an observational study, researchers observe individuals and measure variables without imposing treatments or using random assignment.', partNumber: 1, partTitle: 'Observational Studies' },
  { id: 'ove-ent-1b', question: 'Which of the following is a type of observational study?', options: ['Randomized controlled trial', 'Double-blind experiment', 'Cohort study', 'Factorial design experiment'], correctIndex: 2, explanation: 'Surveys, case-control studies, and cohort studies are all types of observational studies — they observe without imposing treatments.', partNumber: 1, partTitle: 'Observational Studies' },
  { id: 'ove-ent-2a', question: 'What is the key difference between an experiment and an observational study?', options: ['Experiments have larger sample sizes', 'Experiments impose treatments and use random assignment; observational studies do not', 'Observational studies are always done in labs', 'There is no meaningful difference'], correctIndex: 1, explanation: 'The key difference is that experiments impose treatments and use random assignment, while observational studies do not.', partNumber: 2, partTitle: 'Experiments vs Observations' },
  { id: 'ove-ent-2b', question: 'Which type of study can establish causation?', options: ['Any observational study', 'Only well-designed experiments', 'Both equally', 'Neither can establish causation'], correctIndex: 1, explanation: 'Only well-designed experiments with random assignment can establish causation.', partNumber: 2, partTitle: 'Experiments vs Observations' },
  { id: 'ove-ent-3a', question: 'What does it mean to say two variables are "associated"?', options: ['One variable directly causes the other', 'The two variables are related in some way', 'They have no connection', 'They are both normally distributed'], correctIndex: 1, explanation: 'Association means two variables are related. This does not necessarily mean one causes the other.', partNumber: 3, partTitle: 'Causation vs Association' },
  { id: 'ove-ent-3b', question: '"Correlation does not imply causation" because:', options: ['Correlation is always zero', 'Lurking variables may explain the observed association', 'Experiments never show correlations', 'Causation requires a negative correlation'], correctIndex: 1, explanation: 'Lurking (confounding) variables may explain the association between two variables, which is why correlation alone does not prove causation.', partNumber: 3, partTitle: 'Causation vs Association' },
  { id: 'ove-ent-4a', question: 'A confounding variable is one that:', options: ['Is controlled by the researcher', 'Is associated with both the explanatory and response variable, distorting the relationship', 'Has no effect on the study', 'Is always a categorical variable'], correctIndex: 1, explanation: 'A confounding variable is associated with both the explanatory and response variable, making it difficult to determine the true relationship.', partNumber: 4, partTitle: 'Confounding Variables' },
  { id: 'ove-ent-4b', question: 'Ice cream sales and drowning rates both increase in summer. What is the confounding variable?', options: ['Ice cream sales', 'Drowning rates', 'Temperature (season)', 'Water depth'], correctIndex: 2, explanation: 'Temperature is the confounding variable — it is associated with both ice cream sales and drowning rates, as both increase in warm weather.', partNumber: 4, partTitle: 'Confounding Variables' },
  { id: 'ove-ent-5a', question: 'To generalize results to a larger population, a study needs:', options: ['A large budget', 'Random sampling from the population', 'At least 1000 participants', 'Double-blinding'], correctIndex: 1, explanation: 'Random sampling allows results to generalize to the population. Random assignment allows causal conclusions — they serve different purposes.', partNumber: 5, partTitle: 'Generalizing Results' },
  { id: 'ove-ent-5b', question: 'A clinical trial randomly assigns volunteers to treatments but does not randomly select them from the population. What can be concluded?', options: ['Results generalize to the population and causation can be established', 'Causation can be established but results may not generalize broadly', 'Results generalize but no causal claims can be made', 'Nothing useful can be concluded'], correctIndex: 1, explanation: 'Random assignment without random selection means causal conclusions are valid but results may not generalize to the broader population.', partNumber: 5, partTitle: 'Generalizing Results' },
  { id: 'ove-ent-6a', question: 'A study finds that coffee drinkers tend to exercise more. Can we conclude coffee causes people to exercise more?', options: ['Yes, because a relationship was found', 'No, because this is an observational study and confounding variables may exist', 'Yes, because coffee contains caffeine', 'No, because the sample was too small'], correctIndex: 1, explanation: 'This is an observational study, so we cannot conclude causation. Confounding variables (e.g., health-conscious lifestyle) may explain the association.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ove-ent-6b', question: 'Which technique helps reduce confounding in experiments?', options: ['Increasing the survey length', 'Matched pairs and blocking', 'Using a convenience sample', 'Eliminating the control group'], correctIndex: 1, explanation: 'Matched pairs and blocking help reduce confounding in experiments by grouping similar subjects together before assigning treatments.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ove-ent-7a', question: 'On the AP exam, when asked "Can we conclude causation?" the first thing to check is:', options: ['Whether the sample size is large', 'Whether the study used random assignment', 'Whether the data is normally distributed', 'Whether a graph was included'], correctIndex: 1, explanation: 'On the AP exam, when asked about causation, check whether the study used random assignment. Only experiments with random assignment can establish causation.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'ove-ent-7b', question: 'What is the purpose of blinding in an experiment?', options: ['To increase sample size', 'To reduce bias from expectations of subjects or researchers', 'To eliminate all confounding variables', 'To make the study observational'], correctIndex: 1, explanation: 'Blinding (single or double) reduces bias that can result from subjects\' or researchers\' expectations about the treatment.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Observational Studies' },
    { partNumber: 2, partTitle: 'Experiments vs Observations' },
    { partNumber: 3, partTitle: 'Causation vs Association' },
    { partNumber: 4, partTitle: 'Confounding Variables' },
    { partNumber: 5, partTitle: 'Generalizing Results' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
