/**
 * Entrance Quiz — Bias in Sampling & Surveys (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'bss-ent-1a', question: 'Sampling bias is best described as:', options: ['Random variation in results', 'A systematic tendency to favor certain outcomes due to how the sample was selected', 'A result of small sample sizes', 'A statistical test that fails'], correctIndex: 1, explanation: 'Sampling bias is a systematic tendency to favor certain outcomes because of how the sample was selected, not random variation.', partNumber: 1, partTitle: 'Sampling Bias' },
  { id: 'bss-ent-1b', question: 'Undercoverage in sampling means:', options: ['The sample is too large', 'Some members of the population have no chance of being included in the sample', 'The survey questions are too long', 'The sample perfectly represents the population'], correctIndex: 1, explanation: 'Undercoverage occurs when some members of the population have no chance of being included in the sample, leading to biased results.', partNumber: 1, partTitle: 'Sampling Bias' },
  { id: 'bss-ent-2a', question: 'In a voluntary response sample, who participates?', options: ['A randomly selected group', 'Only people who choose to respond, typically those with strong opinions', 'Everyone in the population', 'A stratified group from each subpopulation'], correctIndex: 1, explanation: 'In voluntary response samples, only people who feel strongly enough to respond participate, leading to systematically biased results.', partNumber: 2, partTitle: 'Voluntary Response Bias' },
  { id: 'bss-ent-2b', question: 'Which of the following is a classic example of voluntary response bias?', options: ['A census of all households', 'An online poll or call-in survey', 'A stratified random sample', 'A systematic sample from a voter registry'], correctIndex: 1, explanation: 'Online polls and call-in surveys are classic examples of voluntary response bias because only self-selected individuals participate.', partNumber: 2, partTitle: 'Voluntary Response Bias' },
  { id: 'bss-ent-3a', question: 'Convenience sampling means:', options: ['Using a random number generator', 'Selecting whoever is easiest to reach', 'Surveying every member of the population', 'Using stratified random sampling'], correctIndex: 1, explanation: 'Convenience sampling selects whoever is easiest to reach, which is not representative of the broader population.', partNumber: 3, partTitle: 'Convenience Sampling Issues' },
  { id: 'bss-ent-3b', question: 'A student surveys only people in their school cafeteria at lunch. This is an example of:', options: ['Stratified sampling', 'Cluster sampling', 'Convenience sampling biased toward that population', 'Simple random sampling'], correctIndex: 2, explanation: 'Surveying only people in one location because it is easy is a convenience sample, biased toward the specific population present there.', partNumber: 3, partTitle: 'Convenience Sampling Issues' },
  { id: 'bss-ent-4a', question: 'Non-response bias occurs when:', options: ['Everyone in the sample responds', 'Selected individuals who don\'t respond may differ systematically from those who do', 'The sample is randomly selected', 'The survey uses neutral wording'], correctIndex: 1, explanation: 'Non-response bias occurs when selected individuals who don\'t respond differ systematically from those who do, skewing the results.', partNumber: 4, partTitle: 'Non-Response Bias' },
  { id: 'bss-ent-4b', question: 'Which factor increases the risk of non-response bias?', options: ['High response rates', 'Large sample sizes', 'Low response rates', 'Random sampling methods'], correctIndex: 2, explanation: 'Low response rates increase the risk of non-response bias because a larger proportion of the sample is unaccounted for.', partNumber: 4, partTitle: 'Non-Response Bias' },
  { id: 'bss-ent-5a', question: 'A leading or loaded question is one that:', options: ['Has only two answer choices', 'Uses wording that pushes respondents toward a particular answer', 'Is too long to understand', 'Is asked in a random order'], correctIndex: 1, explanation: 'Leading or loaded questions use wording that pushes respondents toward a particular answer, introducing response bias.', partNumber: 5, partTitle: 'Loaded Questions & Bias' },
  { id: 'bss-ent-5b', question: 'Which question demonstrates response bias due to loaded wording?', options: ['"What is your favorite color?"', '"Don\'t you agree that taxes are too high?"', '"How many hours do you sleep per night?"', '"Which candidate do you prefer?"'], correctIndex: 1, explanation: '"Don\'t you agree that…" is a loaded question that introduces response bias by steering respondents toward agreement.', partNumber: 5, partTitle: 'Loaded Questions & Bias' },
  { id: 'bss-ent-6a', question: 'An online review site mostly gets reviews from very happy or very unhappy customers. What type of bias is this?', options: ['Non-response bias', 'Undercoverage', 'Voluntary response bias', 'Convenience sampling'], correctIndex: 2, explanation: 'This is voluntary response bias — only customers with strong opinions (very happy or very unhappy) choose to leave reviews.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'bss-ent-6b', question: 'Which combination of strategies best reduces bias in a survey?', options: ['Large sample size and convenience sampling', 'Random sampling, neutral question wording, and follow-up on non-responders', 'Voluntary responses and loaded questions', 'Systematic sampling with no follow-up'], correctIndex: 1, explanation: 'To reduce bias, use random sampling, write neutral questions, and follow up on non-responders to minimize multiple sources of bias.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'bss-ent-7a', question: 'Can increasing sample size fix bias in a study?', options: ['Yes, larger samples always eliminate bias', 'No — bias makes results systematically too high or too low regardless of sample size', 'Yes, but only if n > 1000', 'It depends on the type of variable'], correctIndex: 1, explanation: 'Bias makes results systematically too high or too low. Increasing sample size does NOT fix bias — it only reduces random variability.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'bss-ent-7b', question: 'On the AP exam, when identifying bias in a study you should:', options: ['Only name the type of bias', 'Name the bias AND explain how it affects the results (direction of bias)', 'Just say the sample is too small', 'Suggest increasing the sample size'], correctIndex: 1, explanation: 'The AP exam expects you to name the bias AND explain how it affects results, including the likely direction of bias.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Sampling Bias' },
    { partNumber: 2, partTitle: 'Voluntary Response Bias' },
    { partNumber: 3, partTitle: 'Convenience Sampling Issues' },
    { partNumber: 4, partTitle: 'Non-Response Bias' },
    { partNumber: 5, partTitle: 'Loaded Questions & Bias' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
