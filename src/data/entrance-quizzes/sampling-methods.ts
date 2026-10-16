/**
 * Entrance Quiz — Collecting Data & Study Design (AP Statistics)
 * Lesson: collecting-data-apstats (also rendered by bias-sampling-surveys).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Types of Studies'
const P2 = 'Sampling Methods'
const P3 = 'Bias in Sampling'
const P4 = 'Experimental Design'
const P5 = 'Random Variables'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Review & Applications'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cd-ent-1a',
    question: 'Researchers look through the medical records of 2,000 adults to compare how many colds were reported over the past ten years by those who took a daily vitamin and those who did not. What kind of study is this?',
    options: ['A retrospective observational study', 'An experiment on vitamins', 'A prospective observational study', 'A matched pairs experiment'],
    correctIndex: 0,
    explanation: 'No treatment is imposed and the data describe the past, so this is a retrospective observational study. A prospective study would follow people forward in time, and an experiment would assign the vitamin.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'cd-ent-1b',
    question: 'A study finds that teenagers who play a musical instrument have higher GPAs than teenagers who do not. Why can\'t the study conclude that playing an instrument raises GPA?',
    options: ['The sample of teenagers was probably too small', 'Family resources may drive both music and grades', 'GPA is a categorical variable, not a quantitative one', 'Music and GPA cannot be measured in the same study'],
    correctIndex: 1,
    explanation: 'This is an observational study, so a confounding variable such as family income or parental involvement could raise both the chance of playing an instrument and GPA. Only an experiment with random assignment can show cause and effect.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'cd-ent-2a',
    question: 'A school has 1,200 students: 480 in 9th grade, 360 in 10th, 240 in 11th and 120 in 12th. A stratified random sample of 100 students is taken in proportion to grade size. How many 11th graders are in the sample?',
    options: ['25', '24', '20', '30'],
    correctIndex: 2,
    explanation: '11th graders are $240/1200 = 20\\%$ of the school, so a proportional sample of 100 includes 20 of them. Splitting the sample equally gives 25, and 30 is the 10th-grade share.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'cd-ent-2b',
    question: 'A teacher puts the names of the 20 boys in her class in one hat and the 20 girls in another, then draws 5 names from each hat. Is this a simple random sample of 10 students from the class of 40?',
    options: ['Yes, because each student has a 1 in 4 chance', 'It is a cluster sample, not an SRS', 'Yes, because the names are drawn at random', 'No, because some groups of 10 can never be drawn'],
    correctIndex: 3,
    explanation: 'In an SRS every possible group of 10 is equally likely, but this stratified method can never pick, say, 7 girls and 3 boys. An equal chance for each individual is not enough, and drawing within gender groups is stratifying, not clustering.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'cd-ent-3a',
    question: 'A city mails a survey about a new bike lane to a random sample of 500 residents. Only 90 return it, and most of those oppose the lane. Which kind of bias is the biggest concern?',
    options: ['Undercoverage', 'Voluntary response bias', 'Nonresponse bias', 'Response bias'],
    correctIndex: 2,
    explanation: 'The residents were chosen at random, but 410 of them did not answer, and nonrespondents may feel differently from the 90 who replied. Voluntary response bias applies when people select themselves into the sample.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'cd-ent-3b',
    question: 'A pollster asks a random sample of 2,000 voters: "Do you support the governor\'s reckless plan to cut school funding?" Which statement is correct?',
    options: ['The random sample removes any bias the wording causes', 'The large sample size makes the results unbiased', 'The question causes nonresponse bias, not response bias', 'The loaded wording biases results regardless of n'],
    correctIndex: 3,
    explanation: 'Calling the plan "reckless" pushes people toward opposing it, which is response bias. Random selection and a large sample reduce chance variation, but they do nothing about a biased question.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'cd-ent-4a',
    question: 'An agronomist will compare two fertilizers on 40 plots: 20 plots are on a sunny hillside and 20 are in a shaded valley. Which design best keeps sunlight from clouding the comparison?',
    options: ['Use fertilizer A on the hillside and B in the valley', 'Randomly assign fertilizers within each location', 'Let the farmer pick the best plots for each fertilizer', 'Assign fertilizers to the 40 plots in alphabetical order'],
    correctIndex: 1,
    explanation: 'Blocking by location and randomizing within each block compares the fertilizers under the same sunlight conditions. Putting one fertilizer on each site confounds fertilizer with sunlight, and choosing plots by hand or by a fixed order is not random.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'cd-ent-4b',
    question: 'In a study of a new sleep aid, volunteers decide for themselves whether to take the aid or a placebo. Those who chose the aid slept longer. What is the main flaw in the design?',
    options: ['The groups may differ in other ways', 'A placebo should not be used in a sleep study', 'The study needed more than two treatments', 'Sleep time cannot be measured precisely enough'],
    correctIndex: 0,
    explanation: 'People who choose the aid may already differ, for example in how badly they sleep or how much they expect it to help. Random assignment would balance such variables between the groups.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'cd-ent-5a',
    question: 'Let $X$ be the number of cars a household owns, with $P(X = 0) = 0.10$, $P(X = 1) = 0.40$, $P(X = 3) = 0.15$, and $X = 2$ for all other households. What is $E(X)$?',
    options: ['1.50', '1.55', '0.85', '2.00'],
    correctIndex: 1,
    explanation: 'The probabilities must sum to 1, so $P(X = 2) = 0.35$. Then $E(X) = 0(0.10) + 1(0.40) + 2(0.35) + 3(0.15) = 1.55$. The value 0.85 leaves out $X = 2$, and 1.50 is the plain average of the values.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'cd-ent-5b',
    question: 'A raffle ticket costs \\$2. A ticket has a 1/500 chance to win \\$400 and a 1/100 chance to win \\$50; otherwise it wins nothing. What is the expected net gain per ticket?',
    options: ['A gain of \\$1.30', 'A loss of \\$2.00', 'A gain of \\$0.70', 'A loss of \\$0.70'],
    correctIndex: 3,
    explanation: 'The expected payout is $400/500 + 50/100 = 0.80 + 0.50 = 1.30$ dollars, and subtracting the \\$2 cost gives $-0.70$. \\$1.30 is the payout before the cost is taken out.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'cd-ent-6a',
    question: 'A company tries a new sales-training program in its Denver office while its Chicago office keeps the old program. Denver\'s sales rise more over the year. What is the best critique of this study?',
    options: ['The two cities differ in other ways too', 'There is no response variable in the study', 'The offices were chosen with undercoverage', 'Sales cannot be compared across two cities'],
    correctIndex: 0,
    explanation: 'Denver and Chicago differ in markets, managers and staff, so any of those could explain the difference; the effect of the program cannot be separated from the effect of the office. Sales growth is the response variable.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'cd-ent-6b',
    question: 'Researchers recruit 120 volunteers with migraines, randomly assign 60 to a new drug and 60 to a placebo, and find that the drug group reports significantly fewer migraines. What can be concluded?',
    options: ['It causes fewer migraines in people like these', 'It causes fewer migraines in all migraine sufferers', 'It is only associated with fewer migraines', 'Nothing, since the subjects were not randomly selected'],
    correctIndex: 0,
    explanation: 'Random assignment supports a cause-and-effect conclusion, but without random selection the result generalizes only to people similar to these volunteers. Lacking a random sample limits the scope, not the causal claim.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'cd-ent-7a',
    question: 'Which plan would let researchers conclude that a new meditation app causes better sleep among all students at a large university?',
    options: ['Survey a random sample about app use and sleep', 'Randomly assign app use among student volunteers', 'A random sample, then random assignment of app use', 'Compare students who already use the app with others'],
    correctIndex: 2,
    explanation: 'Random selection lets the result generalize to all students, and random assignment supports a causal conclusion; the plan needs both. A survey or a comparison of existing users is observational, and volunteers do not represent the university.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'cd-ent-7b',
    question: 'The number of defective bulbs in a box has expected value $E(X) = 0.6$. Which interpretation is correct?',
    options: ['Most boxes contain exactly 0.6 defective bulbs', 'The long-run average count per box is 0.6', '60% of boxes contain at least one defective bulb', 'Each box has a 0.6 chance of having one defect'],
    correctIndex: 1,
    explanation: 'An expected value is a long-run average: across many boxes, the mean number of defective bulbs approaches 0.6. No single box can hold 0.6 bulbs, and $E(X)$ alone does not give the probability of any particular count.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [P1, P2, P3, P4, P5, P6, P7].map((partTitle, i) => ({ partNumber: i + 1, partTitle }))
}
