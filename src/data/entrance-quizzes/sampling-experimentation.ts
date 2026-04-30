/**
 * Entrance Quiz — Sampling and Experimentation (AP Statistics)
 * 8 questions · 4 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Population vs Sample, Parameter vs Statistic
  {
    id: 'sampexp-ent-1a',
    question: 'The difference between a population and a sample is:',
    options: [
      'A population is smaller; a sample is larger',
      'A population is the entire group of interest; a sample is a subset selected from the population',
      'A sample is always biased; a population is not',
      'Populations are quantitative; samples are categorical'
    ],
    correctIndex: 1,
    explanation: 'A population is the entire group we want information about. A sample is a subset of the population we actually study.',
    partNumber: 1,
    partTitle: 'Population vs Sample, Parameter vs Statistic'
  },
  {
    id: 'sampexp-ent-1b',
    question: 'A parameter is:',
    options: [
      'A number computed from sample data',
      'A number describing the population (usually unknown)',
      'Always equal to a statistic',
      'Only relevant in experiments'
    ],
    correctIndex: 1,
    explanation: 'A parameter describes the population (e.g., μ, p). A statistic describes the sample (e.g., x̄, p̂). We estimate parameters using statistics.',
    partNumber: 1,
    partTitle: 'Population vs Sample, Parameter vs Statistic'
  },

  // Part 2: Simple Random Sample
  {
    id: 'sampexp-ent-2a',
    question: 'A simple random sample is one where:',
    options: [
      'The researcher selects the most convenient subjects',
      'Every possible sample of size n has an equal chance of being selected',
      'The first n subjects who volunteer are included',
      'Subjects are selected based on their characteristics'
    ],
    correctIndex: 1,
    explanation: 'A simple random sample (SRS) gives all possible samples of the same size an equal chance of being chosen, reducing bias.',
    partNumber: 2,
    partTitle: 'Simple Random Sample'
  },
  {
    id: 'sampexp-ent-2b',
    question: 'A primary advantage of simple random sampling is:',
    options: [
      'It is faster than other methods',
      'It reduces selection bias and makes the sample representative',
      'It requires no knowledge of the population',
      'It always produces significant results'
    ],
    correctIndex: 1,
    explanation: 'SRS reduces selection bias and tends to produce samples representative of the population, allowing unbiased estimates.',
    partNumber: 2,
    partTitle: 'Simple Random Sample'
  },

  // Part 3: Bias and Observational Studies
  {
    id: 'sampexp-ent-3a',
    question: 'Voluntary response bias occurs when:',
    options: [
      'The researcher makes an error in data entry',
      'Subjects who feel strongly are more likely to respond than others, creating a biased sample',
      'The sample size is too small',
      'Random assignment is not used'
    ],
    correctIndex: 1,
    explanation: 'Voluntary response bias arises when people choose whether to participate. Those with strong opinions are overrepresented.',
    partNumber: 3,
    partTitle: 'Bias and Observational Studies'
  },
  {
    id: 'sampexp-ent-3b',
    question: 'An observational study:',
    options: [
      'Always establishes causation',
      'Observes the current state; no treatment is imposed by the researcher',
      'Only uses quantitative variables',
      'Requires random assignment to groups'
    ],
    correctIndex: 1,
    explanation: 'An observational study observes the existing state without manipulating variables. It can show association but not prove causation.',
    partNumber: 3,
    partTitle: 'Bias and Observational Studies'
  },

  // Part 4: Experiments, Control Groups, and Random Assignment
  {
    id: 'sampexp-ent-4a',
    question: 'The main difference between an experiment and an observational study is:',
    options: [
      'Experiments use smaller samples',
      'Experiments involve imposing a treatment; observational studies do not',
      'Observational studies are more reliable',
      'Experiments only use quantitative data'
    ],
    correctIndex: 1,
    explanation: 'In an experiment, the researcher assigns subjects to treatments. In an observational study, treatments already exist or occur naturally.',
    partNumber: 4,
    partTitle: 'Experiments, Control Groups, and Random Assignment'
  },
  {
    id: 'sampexp-ent-4b',
    question: 'The purpose of random assignment to groups in an experiment is to:',
    options: [
      'Make the experiment faster',
      'Create groups that are as similar as possible, isolating the treatment effect',
      'Eliminate the need for a large sample size',
      'Ensure all subjects receive the treatment'
    ],
    correctIndex: 1,
    explanation: 'Random assignment (e.g., flipping a coin) creates comparable treatment and control groups, allowing us to attribute differences to the treatment.',
    partNumber: 4,
    partTitle: 'Experiments, Control Groups, and Random Assignment'
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Population vs Sample, Parameter vs Statistic' },
    { partNumber: 2, partTitle: 'Simple Random Sample' },
    { partNumber: 3, partTitle: 'Bias and Observational Studies' },
    { partNumber: 4, partTitle: 'Experiments, Control Groups, and Random Assignment' },
  ]
}
