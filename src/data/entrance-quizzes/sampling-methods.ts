/**
 * Entrance Quiz — Sampling Methods (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'sm-ent-1a', question: 'What defines a simple random sample (SRS)?', options: ['Every individual has an equal chance of being selected', 'Every possible sample of size n has an equal chance of being chosen', 'The first n people on a list are selected', 'Subjects volunteer to participate'], correctIndex: 1, explanation: 'In a simple random sample (SRS), every possible sample of size n has an equal chance of being chosen — not just every individual.', partNumber: 1, partTitle: 'Simple Random Sampling' },
  { id: 'sm-ent-1b', question: 'Which tool can be used to select a simple random sample?', options: ['Alphabetical ordering', 'A random number table or random number generator', 'Choosing the first names on a roster', 'Asking for volunteers'], correctIndex: 1, explanation: 'SRS can be implemented with a random number table or random number generator to ensure every sample has an equal chance of selection.', partNumber: 1, partTitle: 'Simple Random Sampling' },
  { id: 'sm-ent-2a', question: 'In stratified sampling, the population is first divided into:', options: ['Random groups of equal size', 'Heterogeneous clusters', 'Homogeneous strata based on a characteristic', 'Alphabetical lists'], correctIndex: 2, explanation: 'In stratified sampling, the population is classified into homogeneous strata, then an SRS is taken from each stratum.', partNumber: 2, partTitle: 'Stratified Sampling' },
  { id: 'sm-ent-2b', question: 'What is a key advantage of stratified sampling over SRS?', options: ['It is always cheaper', 'It reduces variability and ensures representation of all subgroups', 'It eliminates all sampling bias', 'It requires a smaller sample'], correctIndex: 1, explanation: 'Stratified sampling reduces variability and ensures representation of all subgroups in the population.', partNumber: 2, partTitle: 'Stratified Sampling' },
  { id: 'sm-ent-3a', question: 'In cluster sampling, a researcher:', options: ['Selects every 10th person from a list', 'Divides the population into heterogeneous groups and randomly selects entire groups', 'Divides the population into homogeneous groups and samples from each', 'Asks people to volunteer'], correctIndex: 1, explanation: 'In cluster sampling, the population is divided into heterogeneous groups (clusters), and entire clusters are randomly selected.', partNumber: 3, partTitle: 'Cluster Sampling' },
  { id: 'sm-ent-3b', question: 'Why might a researcher choose cluster sampling over SRS?', options: ['It always produces less bias', 'It is cheaper and more practical for geographically spread populations', 'It guarantees a representative sample', 'It requires no randomization'], correctIndex: 1, explanation: 'Cluster sampling is cheaper and more practical than SRS when the population is geographically spread out.', partNumber: 3, partTitle: 'Cluster Sampling' },
  { id: 'sm-ent-4a', question: 'Systematic sampling involves:', options: ['Randomly selecting clusters', 'Selecting every kth individual from a list after a random start', 'Dividing into strata and sampling each', 'Choosing whoever is most convenient'], correctIndex: 1, explanation: 'In systematic sampling, you select every kth individual from a list after choosing a random starting point.', partNumber: 4, partTitle: 'Systematic Sampling' },
  { id: 'sm-ent-4b', question: 'When can systematic sampling introduce bias?', options: ['When the sample size is large', 'When there is a periodic pattern in the list', 'When the population is small', 'It can never introduce bias'], correctIndex: 1, explanation: 'Systematic sampling can introduce bias if there is a periodic pattern in the list that aligns with the sampling interval.', partNumber: 4, partTitle: 'Systematic Sampling' },
  { id: 'sm-ent-5a', question: 'Undercoverage occurs when:', options: ['Too many people are surveyed', 'Some groups in the population are left out of the sampling frame', 'The sample is too large', 'Every member of the population is included'], correctIndex: 1, explanation: 'Undercoverage means some groups in the population are left out of the sampling frame, so they have no chance of being selected.', partNumber: 5, partTitle: 'Bias in Sampling' },
  { id: 'sm-ent-5b', question: 'Voluntary response samples tend to:', options: ['Perfectly represent the population', 'Overrepresent people with strong opinions', 'Underrepresent people with strong opinions', 'Have no particular bias'], correctIndex: 1, explanation: 'Voluntary response samples tend to overrepresent people with strong opinions because those individuals are more motivated to respond.', partNumber: 5, partTitle: 'Bias in Sampling' },
  { id: 'sm-ent-6a', question: 'A school wants to survey students. They randomly pick 5 classrooms and survey ALL students in those rooms. What sampling method is this?', options: ['Simple random sample', 'Stratified sample', 'Cluster sample', 'Systematic sample'], correctIndex: 2, explanation: 'Randomly selecting entire classrooms (groups) and surveying all students in them is cluster sampling.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sm-ent-6b', question: 'Non-response bias occurs when:', options: ['The sample is too small', 'Selected individuals don\'t participate, potentially making the sample unrepresentative', 'Too many people respond', 'The questions are poorly worded'], correctIndex: 1, explanation: 'Non-response bias occurs when selected individuals don\'t participate, and those who don\'t respond may differ systematically from those who do.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'sm-ent-7a', question: 'Which statement about random sampling and random assignment is correct?', options: ['They mean the same thing', 'Random sampling allows generalization to the population; random assignment allows causal conclusions', 'Random assignment allows generalization; random sampling establishes causation', 'Neither is important for statistical inference'], correctIndex: 1, explanation: 'Random sampling allows generalization to the population; random assignment allows causal conclusions. They serve different purposes.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'sm-ent-7b', question: 'On the AP exam, when describing a sampling method you should:', options: ['Only name the method', 'Identify the sampling method AND explain why it is appropriate', 'Just say "random"', 'Describe only the sample size'], correctIndex: 1, explanation: 'The AP exam expects you to identify the sampling method AND explain why the particular method is appropriate for the situation.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Simple Random Sampling' },
    { partNumber: 2, partTitle: 'Stratified Sampling' },
    { partNumber: 3, partTitle: 'Cluster Sampling' },
    { partNumber: 4, partTitle: 'Systematic Sampling' },
    { partNumber: 5, partTitle: 'Bias in Sampling' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
