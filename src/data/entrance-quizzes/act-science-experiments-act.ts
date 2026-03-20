/**
 * Entrance Quiz — ACT Science: Experiments (ACT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'ase-ent-1a', question: 'What is the key principle of a well-designed experiment?', options: ['Test as many variables as possible at once', 'Avoid using a control group', 'Test one variable at a time while keeping others constant', 'Change all variables simultaneously'], correctIndex: 2, explanation: 'A good experiment tests one variable at a time while keeping others constant to isolate cause and effect.', partNumber: 1, partTitle: 'Experimental Design' },
  { id: 'ase-ent-1b', question: 'A hypothesis is best described as:', options: ['A testable prediction in the form "If X, then Y"', 'A proven scientific law', 'A summary of experimental results', 'An opinion about science'], correctIndex: 0, explanation: 'A hypothesis is a testable prediction: "If X, then Y." It must be possible to test and potentially disprove it.', partNumber: 1, partTitle: 'Experimental Design' },
  { id: 'ase-ent-2a', question: 'In an experiment, the variable that the researcher deliberately changes is called the:', options: ['Dependent variable', 'Control variable', 'Confounding variable', 'Independent variable'], correctIndex: 3, explanation: 'The independent variable is what the researcher manipulates. The dependent variable is what is measured in response.', partNumber: 2, partTitle: 'Variables & Controls' },
  { id: 'ase-ent-2b', question: 'What is the purpose of a control group in an experiment?', options: ['To add more data points', 'To receive no treatment and serve as a baseline for comparison', 'To test an additional variable', 'To repeat the experiment'], correctIndex: 1, explanation: 'The control group receives no treatment and is used for comparison. Constants are variables kept the same across groups.', partNumber: 2, partTitle: 'Variables & Controls' },
  { id: 'ase-ent-3a', question: 'ACT Science research summary passages typically describe:', options: ['A single observation', 'The biography of a scientist', '2–3 related experiments and ask you to compare results', 'Only graphs with no text'], correctIndex: 2, explanation: 'Research summaries describe 2–3 related experiments and ask you to compare their results and methods.', partNumber: 3, partTitle: 'Research Summaries' },
  { id: 'ase-ent-3b', question: 'When analyzing research summaries, you should focus on:', options: ['The length of each experiment', 'The names of the researchers', 'Memorizing all numerical values', 'What changed between experiments and how results differed'], correctIndex: 3, explanation: 'Focus on what changed between experiments and how results differed — this is what the questions will ask about.', partNumber: 3, partTitle: 'Research Summaries' },
  { id: 'ase-ent-4a', question: 'Conflicting viewpoints passages present:', options: ['Two or more hypotheses about the same phenomenon', 'One universally accepted theory', 'Only experimental data', 'A single scientist\'s opinion'], correctIndex: 0, explanation: 'Conflicting viewpoints present 2+ hypotheses about the same phenomenon, each with different explanations.', partNumber: 4, partTitle: 'Conflicting Viewpoints' },
  { id: 'ase-ent-4b', question: 'For each viewpoint in a conflicting viewpoints passage, you should identify:', options: ['Only the scientist\'s credentials', 'What it claims, what evidence it uses, and where it disagrees with others', 'How long the research took', 'Whether the viewpoint is popular'], correctIndex: 1, explanation: 'For each viewpoint, identify what it claims, what evidence it uses, and where it disagrees with the other viewpoints.', partNumber: 4, partTitle: 'Conflicting Viewpoints' },
  { id: 'ase-ent-5a', question: 'A valid scientific conclusion must be:', options: ['Based on the researcher\'s personal beliefs', 'The most interesting possible explanation', 'Supported by the experimental data', 'Agreed upon by all scientists'], correctIndex: 2, explanation: 'A valid conclusion is supported by the experimental data, not by assumptions or personal beliefs.', partNumber: 5, partTitle: 'Evaluating Conclusions' },
  { id: 'ase-ent-5b', question: 'The statement "correlation does not equal causation" means:', options: ['Correlated events always cause each other', 'Causation is impossible to determine', 'All correlations are meaningless', 'Just because two things are related does not mean one causes the other'], correctIndex: 3, explanation: 'Correlation ≠ causation: just because two things are related doesn\'t mean one causes the other. A third factor may be involved.', partNumber: 5, partTitle: 'Evaluating Conclusions' },
  { id: 'ase-ent-6a', question: 'If Experiment 2 added a catalyst and reaction time decreased, the best conclusion is:', options: ['The catalyst speeds up the reaction', 'The catalyst had no effect', 'The reaction would stop without the catalyst', 'Temperature caused the change'], correctIndex: 0, explanation: 'If adding a catalyst decreased reaction time with all else constant, the conclusion is that the catalyst speeds up the reaction.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ase-ent-6b', question: 'Scientist 1 says warming causes ice melt; Scientist 2 says volcanic activity is the cause. What type of evidence would help distinguish between them?', options: ['Evidence about a completely unrelated phenomenon', 'The popularity of each scientist', 'Data showing whether ice melt correlates more strongly with temperature or volcanic events', 'No evidence could help'], correctIndex: 2, explanation: 'To evaluate conflicting viewpoints, look for evidence that directly addresses the point of disagreement — here, the correlation with each proposed cause.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'ase-ent-7a', question: 'What should you read carefully before analyzing an ACT Science passage?', options: ['Only the questions', 'The last paragraph only', 'Nothing — skip straight to questions', 'The passage introduction — it sets up the experimental context'], correctIndex: 3, explanation: 'Read passage introductions carefully — they set up the experimental context and define key terms.', partNumber: 7, partTitle: 'Review & Applications' },
  { id: 'ase-ent-7b', question: 'What is the recommended order for answering ACT Science questions?', options: ['Answer data-based questions first, save conflicting viewpoints for last', 'Answer conflicting viewpoints first', 'Answer in reverse order', 'Skip all and guess'], correctIndex: 0, explanation: 'Answer data-based questions first (they are quicker); save conflicting viewpoints for last (harder and more time-consuming).', partNumber: 7, partTitle: 'Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Experimental Design' },
    { partNumber: 2, partTitle: 'Variables & Controls' },
    { partNumber: 3, partTitle: 'Research Summaries' },
    { partNumber: 4, partTitle: 'Conflicting Viewpoints' },
    { partNumber: 5, partTitle: 'Evaluating Conclusions' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
