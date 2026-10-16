/**
 * Entrance Quiz — Attitudes and Persuasion (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: What Attitudes Are and How They Form
  {
    id: 'ap-ent-1a',
    question: 'During a frightening emergency-room visit, a nurse spent an hour calming 12-year-old Malik and explaining every step. Years later, he still holds a strong, warm attitude toward nurses and volunteers at a clinic each summer. Which source of attitude formation is most clearly at work?',
    options: ['Mere exposure effect', 'Observational learning', 'Classical conditioning', 'Direct personal experience'],
    correctIndex: 3,
    explanation: 'Malik\'s attitude grew out of his own encounter with a nurse, which is direct experience, and attitudes formed this way tend to be strong. Nothing was simply repeated, paired with another stimulus or modeled by someone else.',
    partNumber: 1,
    partTitle: 'What Attitudes Are and How They Form',
  },
  {
    id: 'ap-ent-1b',
    question: 'Which of Lena\'s attitudes is most likely to predict whether she puts her empty soda can in the recycling bin at school tomorrow?',
    options: ['Her general feeling that the planet matters somewhat', 'Her vague dislike of litter that she rarely thinks about', 'Her firm, often-stated view that cans belong in recycling', 'Her belief that most of her classmates ignore recycling'],
    correctIndex: 2,
    explanation: 'Attitudes predict behavior best when they are strong, often expressed and specific to the behavior. A general or seldom-considered attitude predicts a specific act poorly, and peer norms can push against an attitude rather than express it.',
    partNumber: 1,
    partTitle: 'What Attitudes Are and How They Form',
  },

  // Part 2: Explaining Behavior: Explanatory Style and Locus of Control
  {
    id: 'ap-ent-2a',
    question: 'In a practice survey of 250 students, those who explain their failures as internal, stable and global report more depressive symptoms (r = +0.40). Which conclusion is best supported?',
    options: ['Pessimism goes with more symptoms, cause unclear', 'A pessimistic style causes depression in students', 'An optimistic style goes with more symptoms', 'Explanatory style and symptoms are unrelated'],
    correctIndex: 0,
    explanation: 'Internal, stable and global explanations for bad events are the pessimistic style, and the positive correlation links it to more symptoms. A survey cannot show which comes first or rule out a third variable.',
    partNumber: 2,
    partTitle: 'Explaining Behavior: Explanatory Style and Locus of Control',
  },
  {
    id: 'ap-ent-2b',
    question: 'Which statement best reflects an external locus of control?',
    options: ['"If I prepare well, I can do well in this interview."', '"Getting hired mostly depends on who you know."', '"I did badly on that one because I didn\'t practice enough."', '"With enough effort, I can solve these practice problems."'],
    correctIndex: 1,
    explanation: 'An external locus of control is a general expectation that outcomes depend on luck, fate or powerful others rather than on one\'s own actions.',
    partNumber: 2,
    partTitle: 'Explaining Behavior: Explanatory Style and Locus of Control',
  },

  // Part 3: Person Perception: Mere Exposure, Self-Fulfilling Prophecy, and Social Comparison
  {
    id: 'ap-ent-3a',
    question: 'A manager believes a new hire is exceptionally talented, so she gives him challenging projects and frequent feedback. Within a year he is outperforming everyone else hired at the same time. Which concept does this best illustrate?',
    options: ['Self-fulfilling prophecy', 'Confirmation bias', 'Mere exposure effect', 'Belief perseverance'],
    correctIndex: 0,
    explanation: 'The manager\'s expectation changed how she treated the employee, and his actual performance changed to match it. In confirmation bias, only the perceiver\'s interpretation would change.',
    partNumber: 3,
    partTitle: 'Person Perception: Mere Exposure, Self-Fulfilling Prophecy, and Social Comparison',
  },
  {
    id: 'ap-ent-3b',
    question: 'Participants see photos of unfamiliar faces flashed 0, 2, 10 or 25 times during an unrelated task. Afterward, they rate faces they saw more often as more likable, though no face was ever paired with anything pleasant. Which concept explains this?',
    options: ['Downward social comparison', 'Mere exposure effect', 'The halo effect', 'Relative deprivation'],
    correctIndex: 1,
    explanation: 'Liking that grows with repeated exposure alone, with nothing paired or rewarded, is the mere exposure effect.',
    partNumber: 3,
    partTitle: 'Person Perception: Mere Exposure, Self-Fulfilling Prophecy, and Social Comparison',
  },

  // Part 4: Holding On and Changing Our Minds: Belief Perseverance, Confirmation Bias, and Cognitive Dissonance
  {
    id: 'ap-ent-4a',
    question: 'A student convinced that a new energy drink improves focus searches online only for "energy drink focus benefits" and skims past the studies that found no effect. Which concept does this demonstrate?',
    options: ['Belief perseverance', 'Cognitive dissonance', 'Self-fulfilling prophecy', 'Confirmation bias'],
    correctIndex: 3,
    explanation: 'Seeking out and favoring information that supports an existing belief while ignoring contrary evidence is confirmation bias. Belief perseverance would be clinging to the belief after its evidence had been discredited.',
    partNumber: 4,
    partTitle: 'Holding On and Changing Our Minds: Belief Perseverance, Confirmation Bias, and Cognitive Dissonance',
  },
  {
    id: 'ap-ent-4b',
    question: 'Students who survived a grueling, embarrassing audition to join a choir rate the choir as more enjoyable than students who joined with no audition at all. Which explanation fits best?',
    options: ['Mere exposure through repeated contact', 'The halo effect from admired members', 'Relative deprivation from comparing groups', 'Dissonance eased by valuing effort'],
    correctIndex: 3,
    explanation: '"I suffered for something dull" is dissonant, so people raise their opinion of what they worked for. This effort justification is a form of cognitive dissonance reduction.',
    partNumber: 4,
    partTitle: 'Holding On and Changing Our Minds: Belief Perseverance, Confirmation Bias, and Cognitive Dissonance',
  },

  // Part 5: Persuasion in Depth: Routes, the Halo Effect, and Sequential Requests
  {
    id: 'ap-ent-5a',
    question: 'Two groups of students come to favor a new school policy. The first group changed its mind after studying detailed evidence; the second changed after seeing a popular athlete endorse the policy. A month later, both groups hear strong arguments against it. What does the elaboration likelihood model predict?',
    options: ['Both groups revert at the same rate', 'The first group\'s new attitudes last longer', 'The second group\'s new attitudes last longer', 'Neither group truly changed its attitude'],
    correctIndex: 1,
    explanation: 'Attitudes changed through the central route, by thinking carefully about arguments, last longer and resist counterarguments better than attitudes changed through peripheral cues such as a celebrity endorsement.',
    partNumber: 5,
    partTitle: 'Persuasion in Depth: Routes, the Halo Effect, and Sequential Requests',
  },
  {
    id: 'ap-ent-5b',
    question: 'A neighborhood group first asks residents to put a small "Drive Safely" card in a front window. Two weeks later, it asks the same residents to put a large sign on their lawns, and most of those with cards agree. Which technique and principle explain this?',
    options: ['Foot-in-the-door, through consistency', 'Door-in-the-face, through reciprocity', 'Halo effect on the peripheral route', 'Mere exposure through repetition'],
    correctIndex: 0,
    explanation: 'A small request followed later by a larger one is foot-in-the-door. Having agreed once, residents see themselves as supporters and want to act consistently with that commitment.',
    partNumber: 5,
    partTitle: 'Persuasion in Depth: Routes, the Halo Effect, and Sequential Requests',
  },

  // Part 6: AP Exam Practice: Analyzing Attitude Research
  {
    id: 'ap-ent-6a',
    question: 'In a practice study, researchers randomly assigned students to read either strong or weak arguments for a later school start time, rather than letting each student choose which version to read. What is the main reason for random assignment?',
    options: ['So the sample stands for every teenager in the country', 'So the groups begin alike, allowing a causal claim', 'So participants know which condition they are in', 'So the dependent variable is measured precisely'],
    correctIndex: 1,
    explanation: 'Random assignment spreads differences such as prior opinions evenly across conditions, so a difference in attitudes afterward can be credited to argument strength. Representing a population depends on how the sample is drawn, not on assignment.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Analyzing Attitude Research',
  },
  {
    id: 'ap-ent-6b',
    question: 'Researchers randomly assigned 160 juniors at one suburban high school to read strong or weak arguments. A student claims that because of random assignment, the results apply to all teenagers. Which correction is most accurate?',
    options: ['Random assignment means the results fit every teenager', 'Generalizing depends only on how many conditions exist', 'Assignment shows cause, but sampling aids generalizing', 'No experiment can be generalized beyond its laboratory'],
    correctIndex: 2,
    explanation: 'Random assignment strengthens the causal conclusion, but it does not make a sample representative. Because all participants came from one school, generalizing to all teenagers requires a broader, ideally random, sample.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Analyzing Attitude Research',
  },

  // Part 7: Synthesis Review: From Perception to Persuasion
  {
    id: 'ap-ent-7a',
    question: 'Which pairing of a scenario clue with a concept is accurate?',
    options: ['One trait colors other judgments: confirmation bias', 'A discredited belief survives: relative deprivation', 'Liking grows with repetition alone: mere exposure', 'A small request precedes a big one: door-in-the-face'],
    correctIndex: 2,
    explanation: 'Liking that grows from repeated encounters with nothing paired is the mere exposure effect. One trait coloring other judgments is the halo effect, a surviving discredited belief is belief perseverance, and small-then-large is foot-in-the-door.',
    partNumber: 7,
    partTitle: 'Synthesis Review: From Perception to Persuasion',
  },
  {
    id: 'ap-ent-7b',
    question: 'Students freely sign a public letter supporting a new lunch schedule. When the shorter lunch periods start and feel rushed, most of the signers insist, "It\'s really not that bad." Which concept best explains their reaction?',
    options: ['Belief perseverance', 'Upward social comparison', 'Mere exposure effect', 'Cognitive dissonance'],
    correctIndex: 3,
    explanation: 'Their public, freely chosen action conflicts with their experience, and because the signature cannot be undone, they shift their attitude to reduce the dissonance.',
    partNumber: 7,
    partTitle: 'Synthesis Review: From Perception to Persuasion',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'What Attitudes Are and How They Form' },
    { partNumber: 2, partTitle: 'Explaining Behavior: Explanatory Style and Locus of Control' },
    { partNumber: 3, partTitle: 'Person Perception: Mere Exposure, Self-Fulfilling Prophecy, and Social Comparison' },
    { partNumber: 4, partTitle: 'Holding On and Changing Our Minds: Belief Perseverance, Confirmation Bias, and Cognitive Dissonance' },
    { partNumber: 5, partTitle: 'Persuasion in Depth: Routes, the Halo Effect, and Sequential Requests' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Analyzing Attitude Research' },
    { partNumber: 7, partTitle: 'Synthesis Review: From Perception to Persuasion' },
  ]
}
