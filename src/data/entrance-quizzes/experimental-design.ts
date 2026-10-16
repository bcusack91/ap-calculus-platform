/**
 * Entrance Quiz — Experimental Design (AP Statistics)
 * Lesson: experimental-design-apstats (also rendered by observational-vs-experiments).
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Principles of Experimental Design'
const P2 = 'Randomization Techniques'
const P3 = 'Blocking'
const P4 = 'Types of Studies'
const P5 = 'Confounding and Bias'
const P6 = 'Problem-Solving Workshop'
const P7 = 'Mixed Review'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'xd-ent-1a',
    question: 'A coach randomly assigns 48 swimmers to one of three warm-up routines (none, 10 minutes or 20 minutes) and records each swimmer\'s 100 m time. What are the experimental units, and how many treatments are there?',
    options: ['The 48 swimmers; 3 treatments', 'The 100 m times; 3 treatments', 'The 48 swimmers; 2 treatments', 'The 48 swimmers; 48 treatments'],
    correctIndex: 0,
    explanation: 'The units are the swimmers the treatments are applied to, and each of the three routines, including no warm-up, is a treatment. The 100 m times are the response, not the units.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'xd-ent-1b',
    question: 'A gardener flips a coin to decide which of two tomato plants gets a new fertilizer; the other gets none. The fertilized plant grows taller. Which element of a good experiment is most clearly missing?',
    options: ['Random assignment', 'A control group', 'Replication', 'A response variable'],
    correctIndex: 2,
    explanation: 'With one plant per treatment, the difference could easily come from the particular plants chosen; replication means using enough units in each group to see past that chance variation. The coin flip is random assignment, the unfertilized plant is the control, and height is the response.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'xd-ent-2a',
    question: 'A researcher numbers 30 subjects 01 to 30 and must create two groups of exactly 15 at random. Which procedure does this correctly?',
    options: ['Subjects numbered 01 to 15 get A and those numbered 16 to 30 get B', 'Each subject flips a coin, heads for A and tails for B', 'Subjects with the first 15 distinct numbers generated get A', 'The researcher picks the 15 healthiest subjects to get A'],
    correctIndex: 2,
    explanation: 'Generating random numbers from 01 to 30, skipping repeats, until 15 different subjects are chosen gives every group of 15 the same chance, and the rest form group B. Coin flips are random but will not reliably give 15 per group, and splitting by list position or by judgment is not random.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'xd-ent-2b',
    question: 'Researchers randomly assign 20 patients to two treatments. By chance, 8 of the 10 smokers end up in the same group. What does this illustrate?',
    options: ['The assignment could not have been truly random', 'The study has turned into an observational study', 'Smoking cannot affect the response variable', 'Small samples can stay unbalanced despite randomization'],
    correctIndex: 3,
    explanation: 'Random assignment balances other variables only on average, and with small groups chance imbalances are common; more units per group make balance more likely. A lopsided split does not mean the process was not random, and the treatments were still imposed.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'xd-ent-3a',
    question: 'Researchers want to compare how fast two sole materials wear out on children\'s shoes. Children differ a great deal in how much they run. Which design best controls for those differences?',
    options: ['Half of the children, chosen at random, get each material', 'Each child gets one sole of each, foot chosen at random', 'Active children get material A; less active children get B', 'Children choose one material for both of their shoes'],
    correctIndex: 1,
    explanation: 'Putting both materials on the same child, with a random choice of foot, is a matched pairs design: each child\'s activity level affects both soles equally. Assigning materials by activity confounds material with running, and letting children choose is not random.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'xd-ent-3b',
    question: 'A study groups 60 patients by age (under 40, 40 to 60, over 60) and then randomly assigns a new or standard therapy within each age group. What is the main advantage over a completely randomized design?',
    options: ['It removes age-related variation from the comparison', 'It allows the results to be generalized to all patients', 'It removes the need for random assignment of the therapies', 'It turns age into a confounding variable in the study'],
    correctIndex: 0,
    explanation: 'Comparing treatments within groups of similar age removes age-related variation from the comparison, which makes a treatment effect easier to detect. Blocking does not create a random sample, still uses random assignment within blocks, and keeps age from being confounded.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'xd-ent-4a',
    question: 'Which of these studies is an experiment?',
    options: ['Researchers ask 300 adults how much coffee they drink and test their memory', 'Researchers follow 300 newborns for 20 years and record their diets', 'Researchers give 150 adults decaf and 150 regular coffee and test memory', 'Researchers examine past coffee sales and dementia rates by county'],
    correctIndex: 2,
    explanation: 'Only that study imposes a treatment, the type of coffee, on the subjects. Asking about habits, following people forward in time and examining past records all observe without intervening.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'xd-ent-4b',
    question: 'A prospective study follows 5,000 adults for 10 years and finds that those who eat more fish have fewer heart attacks. Which conclusion is justified?',
    options: ['Eating fish is linked to fewer heart attacks', 'Fish consumption causes fewer heart attacks', 'Fish has no effect, since no one was surveyed', 'Heart attacks cause people to eat less fish'],
    correctIndex: 0,
    explanation: 'Following people forward in time is still observational: no one was assigned to eat fish, so only an association can be claimed. People who eat more fish may also differ in exercise, income or other habits.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'xd-ent-5a',
    question: 'In a randomized trial of a new headache drug, 40% of the patients who received an identical-looking sugar pill reported relief. What does this most likely show?',
    options: ['The sugar pill contained an active drug', 'Headaches never respond to any medicine', 'The patients were not randomly assigned', 'Belief in being treated can ease pain'],
    correctIndex: 3,
    explanation: 'Improvement from an inactive treatment is the placebo effect, which is why trials compare the drug with a placebo instead of with no treatment. Nothing suggests the pill was active or that the assignment was not random.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'xd-ent-5b',
    question: 'A city notices that neighborhoods with more trees have lower crime rates and plans to plant trees to reduce crime. Which is the most likely confounding variable?',
    options: ['Number of trees planted', 'Residents\' income', 'The crime rate itself', 'The city\'s total area'],
    correctIndex: 1,
    explanation: 'Wealthier neighborhoods tend to have both more trees and less crime, so income could explain the association. A confounder must be linked to both variables and must vary across neighborhoods, which the city\'s total area does not.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'xd-ent-6a',
    question: 'A teacher with 60 students wants to compare three vocabulary apps. Which plan is a completely randomized design?',
    options: ['Let each student pick an app, then compare mean scores', 'Randomly pick one class period per app, then compare mean scores', 'Randomly assign 20 students to each app, then compare mean scores', 'Give all 60 students all three apps in the same fixed order'],
    correctIndex: 2,
    explanation: 'A completely randomized design assigns every unit to a treatment at random, here 20 per app, and compares the groups. Self-selection, and assigning whole class periods, confound the app with other differences, and a fixed order confounds the app with practice.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'xd-ent-6b',
    question: 'A company gives a new energy drink to 50 randomly chosen employees and finds that their afternoon productivity rose 8% compared with the previous month. What is the main weakness of this study?',
    options: ['There is no control group', 'The sample of 50 employees is too large', 'Productivity is not a quantitative variable', 'The employees were chosen at random'],
    correctIndex: 0,
    explanation: 'Without a control group, the 8% rise could come from a seasonal change, the novelty of being studied or the placebo effect. A randomly assigned control group would show how much productivity changes without the drink.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'xd-ent-7a',
    question: 'A researcher wants to know whether a new keyboard layout increases typing speed. She has 20 typists whose speeds vary widely. Which design is best?',
    options: ['Randomly assign 10 typists to each of the layouts', 'Each typist uses both layouts in a random order', 'All typists use the old layout first, then the new', 'Let the faster typists try the new layout first'],
    correctIndex: 1,
    explanation: 'Because typists vary so much, comparing each typist with herself (matched pairs) removes that variation, and randomizing the order guards against a practice effect. Two random groups of 10 is valid but less precise, and a fixed order confounds layout with practice.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'xd-ent-7b',
    question: 'Which change would most reduce the chance that an experiment\'s result is due only to the luck of the random assignment?',
    options: ['Add a third treatment group', 'Make the experiment double-blind', 'Recruit only volunteers for the study', 'Use more units in each treatment group'],
    correctIndex: 3,
    explanation: 'Replication, using more units per treatment, makes chance differences between groups smaller, so a real effect is easier to tell apart from luck. Blinding addresses expectations, not chance variation.',
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
