/**
 * Entrance Quiz — Types of Data & Sampling (AP Statistics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'tds-ent-1a', question: 'Which of the following is an example of categorical data?', options: ['Height in centimeters', 'Zip code', 'Weight in kilograms', 'Temperature in Fahrenheit'], correctIndex: 1, explanation: 'Zip codes label geographic areas and are categorical, even though they are numbers. They do not represent measurable quantities.', partNumber: 1, partTitle: 'Categorical vs Quantitative Data' },
  { id: 'tds-ent-1b', question: '"Number of siblings" is what type of variable?', options: ['Categorical', 'Quantitative', 'Neither categorical nor quantitative', 'It depends on context'], correctIndex: 1, explanation: 'Number of siblings is a numerical measurement that can be counted, making it quantitative data.', partNumber: 1, partTitle: 'Categorical vs Quantitative Data' },
  { id: 'tds-ent-2a', question: 'Which variable is discrete?', options: ['The height of a tree', 'The time to finish a race', 'The number of students in a class', 'The weight of a newborn'], correctIndex: 2, explanation: 'The number of students is countable and takes whole-number values, making it discrete. Height, time, and weight are continuous.', partNumber: 2, partTitle: 'Discrete vs Continuous Data' },
  { id: 'tds-ent-2b', question: 'Which of the following is a continuous variable?', options: ['Number of heads in 10 coin flips', 'Number of pets owned', 'Time to run a mile', 'Number of apps on a phone'], correctIndex: 2, explanation: 'Time can take any value within an interval (e.g., 5.237 minutes) and is therefore continuous. The other options are countable (discrete).', partNumber: 2, partTitle: 'Discrete vs Continuous Data' },
  { id: 'tds-ent-3a', question: 'What is the difference between a census and a sample?', options: ['A census uses random selection; a sample does not', 'A census collects data from every member of the population; a sample collects from a subset', 'A sample is always more accurate than a census', 'There is no meaningful difference'], correctIndex: 1, explanation: 'A census attempts to collect data from the entire population, while a sample collects data from a subset of the population.', partNumber: 3, partTitle: 'Sampling Methods Overview' },
  { id: 'tds-ent-3b', question: 'What is a sampling frame?', options: ['The questionnaire used to collect data', 'The statistical method used to analyze data', 'The list of individuals from which a sample is actually drawn', 'The population parameter of interest'], correctIndex: 2, explanation: 'A sampling frame is the list of all individuals from which the sample is drawn. Ideally it matches the population, but sometimes it does not.', partNumber: 3, partTitle: 'Sampling Methods Overview' },
  { id: 'tds-ent-4a', question: 'In a simple random sample (SRS), which statement is true?', options: ['Only certain subgroups are sampled', 'Every individual has an equal chance of being selected', 'The sample is chosen by convenience', 'The largest group in the population is always represented'], correctIndex: 1, explanation: 'In a simple random sample, every individual (and every group of the same size) has an equal probability of being selected.', partNumber: 4, partTitle: 'Simple Random Sampling' },
  { id: 'tds-ent-4b', question: 'Which is the best tool for selecting a simple random sample?', options: ['Asking for volunteers', 'Choosing every 5th person on a list', 'Using a random number generator or table', 'Picking people from the nearest location'], correctIndex: 2, explanation: 'A random number generator or random number table ensures each individual has an equal chance of selection, which is the hallmark of SRS.', partNumber: 4, partTitle: 'Simple Random Sampling' },
  { id: 'tds-ent-5a', question: 'In stratified sampling, the population is divided into:', options: ['Clusters that are randomly selected', 'Homogeneous groups called strata', 'Convenience groups based on accessibility', 'Equal-sized groups chosen alphabetically'], correctIndex: 1, explanation: 'Stratified sampling divides the population into homogeneous groups (strata) and then takes an SRS from each stratum.', partNumber: 5, partTitle: 'Stratified, Cluster & Systematic Sampling' },
  { id: 'tds-ent-5b', question: 'In cluster sampling, the researcher:', options: ['Selects every nth individual from a list', 'Randomly selects entire groups and surveys all members within them', 'Divides the population into strata and samples from each', 'Chooses participants based on convenience'], correctIndex: 1, explanation: 'Cluster sampling randomly selects whole groups (clusters) and then surveys every member within the chosen clusters.', partNumber: 5, partTitle: 'Stratified, Cluster & Systematic Sampling' },
  { id: 'tds-ent-6a', question: 'A researcher emails a survey link to all students and 15% respond. This is an example of:', options: ['Simple random sampling', 'Stratified sampling', 'Voluntary response bias', 'Cluster sampling'], correctIndex: 2, explanation: 'When individuals choose whether to respond, those with strong opinions are overrepresented. This is voluntary response bias.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'tds-ent-6b', question: 'To reduce sampling variability, a researcher should:', options: ['Increase the population size', 'Increase the sample size', 'Use a census instead', 'Switch from quantitative to categorical data'], correctIndex: 1, explanation: 'Increasing the sample size reduces sampling variability (the spread of the sampling distribution). Population size has little effect.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'tds-ent-7a', question: 'A well-designed sample allows researchers to:', options: ['Establish causation between variables', 'Generalize conclusions to the population', 'Eliminate all sources of bias', 'Prove hypotheses with certainty'], correctIndex: 1, explanation: 'A well-designed sample, using random selection, allows findings to be generalized to the larger population.', partNumber: 7, partTitle: 'AP Review & Applications' },
  { id: 'tds-ent-7b', question: 'What is the difference between random selection and random assignment?', options: ['They are the same thing', 'Random selection supports generalization; random assignment supports causal conclusions', 'Random assignment supports generalization; random selection supports causal conclusions', 'Neither is important for statistical studies'], correctIndex: 1, explanation: 'Random selection (choosing who is in the study) supports generalizing to the population. Random assignment (assigning treatments) supports cause-and-effect conclusions.', partNumber: 7, partTitle: 'AP Review & Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Categorical vs Quantitative Data' },
    { partNumber: 2, partTitle: 'Discrete vs Continuous Data' },
    { partNumber: 3, partTitle: 'Sampling Methods Overview' },
    { partNumber: 4, partTitle: 'Simple Random Sampling' },
    { partNumber: 5, partTitle: 'Stratified, Cluster & Systematic Sampling' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review & Applications' },
  ]
}
