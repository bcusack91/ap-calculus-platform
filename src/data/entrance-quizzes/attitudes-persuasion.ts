/**
 * Entrance Quiz — Attitudes & Persuasion (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Attitude Formation
  {
    id: 'ap-ent-1a',
    question: 'The ABC model of attitudes includes which three components?',
    options: [
      'Attention, Bias, Conformity',
      'Affective (feelings), Behavioral (actions), Cognitive (beliefs)',
      'Association, Belief, Conditioning',
      'Acceptance, Balance, Control'
    ],
    correctIndex: 1,
    explanation: 'Attitudes have three components known as the ABC model: Affective (feelings), Behavioral (actions), and Cognitive (beliefs).',
    partNumber: 1,
    partTitle: 'Attitude Formation'
  },
  {
    id: 'ap-ent-1b',
    question: 'Attitudes are shaped by all of the following EXCEPT:',
    options: [
      'Direct personal experience with the attitude object',
      'Social learning from parents and peers',
      'Classical and operant conditioning',
      'Genetically inherited instincts that determine preferences at birth'
    ],
    correctIndex: 3,
    explanation: 'Attitudes are shaped by direct experience, social learning, and conditioning. While genetics may play a small role in temperament, attitudes are not determined by inherited instincts at birth.',
    partNumber: 1,
    partTitle: 'Attitude Formation'
  },
  // Part 2: Cognitive Dissonance
  {
    id: 'ap-ent-2a',
    question: 'Cognitive dissonance, as described by Festinger, refers to:',
    options: [
      'The tendency to seek out information that confirms existing beliefs',
      'Discomfort experienced when holding contradictory beliefs or acting against one\'s beliefs',
      'The inability to form new memories after a traumatic event',
      'A bias toward attributing others\' behavior to personality traits'
    ],
    correctIndex: 1,
    explanation: 'Cognitive dissonance (Festinger) is the psychological discomfort experienced when a person holds contradictory beliefs or when their behavior conflicts with their attitudes.',
    partNumber: 2,
    partTitle: 'Cognitive Dissonance'
  },
  {
    id: 'ap-ent-2b',
    question: 'Which is NOT a common strategy for reducing cognitive dissonance?',
    options: [
      'Changing one\'s attitude to be consistent with behavior',
      'Adding new cognitions that are consonant with the behavior',
      'Minimizing the importance of the inconsistency',
      'Increasing the number of contradictory beliefs one holds'
    ],
    correctIndex: 3,
    explanation: 'To reduce dissonance, people change attitudes, add consonant (supportive) cognitions, or minimize the importance of the conflict. Increasing contradictory beliefs would worsen dissonance, not reduce it.',
    partNumber: 2,
    partTitle: 'Cognitive Dissonance'
  },
  // Part 3: Persuasion Techniques
  {
    id: 'ap-ent-3a',
    question: 'The door-in-the-face technique involves:',
    options: [
      'Making a small request first, then following up with a larger request',
      'Making a large request first (which is refused), then making a smaller, more reasonable request',
      'Offering a product at a low price, then revealing hidden costs',
      'Repeatedly exposing someone to a stimulus until they agree'
    ],
    correctIndex: 1,
    explanation: 'The door-in-the-face technique starts with a large, unreasonable request that is likely to be refused, followed by a smaller, more reasonable request that seems like a concession.',
    partNumber: 3,
    partTitle: 'Persuasion Techniques'
  },
  {
    id: 'ap-ent-3b',
    question: 'The foot-in-the-door technique works by first:',
    options: [
      'Presenting an extreme position and then moderating it',
      'Gaining compliance with a small request before making a larger one',
      'Offering a reward that is later taken away',
      'Using authority to demand obedience'
    ],
    correctIndex: 1,
    explanation: 'The foot-in-the-door technique involves gaining compliance with a small initial request, which makes a person more likely to agree to a subsequent larger request.',
    partNumber: 3,
    partTitle: 'Persuasion Techniques'
  },
  // Part 4: Central vs Peripheral
  {
    id: 'ap-ent-4a',
    question: 'According to the Elaboration Likelihood Model (ELM), the central route to persuasion involves:',
    options: [
      'Being influenced by the attractiveness of the speaker',
      'Thoughtful consideration of the strength and quality of the message arguments',
      'Responding to emotional appeals and catchy slogans',
      'Following the crowd because everyone else seems persuaded'
    ],
    correctIndex: 1,
    explanation: 'The central route to persuasion in the ELM involves careful, thoughtful consideration of the quality and strength of the message arguments.',
    partNumber: 4,
    partTitle: 'Central vs Peripheral'
  },
  {
    id: 'ap-ent-4b',
    question: 'A commercial uses a celebrity endorsement and upbeat music rather than presenting factual evidence. This is an example of:',
    options: [
      'Central route processing',
      'Cognitive dissonance reduction',
      'Peripheral route processing',
      'Informational social influence'
    ],
    correctIndex: 2,
    explanation: 'The peripheral route to persuasion relies on superficial cues such as celebrity endorsements, attractiveness, emotional appeals, and music rather than the strength of the argument.',
    partNumber: 4,
    partTitle: 'Central vs Peripheral'
  },
  // Part 5: Attitude Change
  {
    id: 'ap-ent-5a',
    question: 'Self-perception theory (Bem) proposes that people:',
    options: [
      'Form attitudes by observing others\' behavior and imitating it',
      'Infer their own attitudes by observing their own behavior',
      'Change their attitudes only when experiencing cognitive dissonance',
      'Develop attitudes exclusively through classical conditioning'
    ],
    correctIndex: 1,
    explanation: 'Self-perception theory (Bem) suggests that when internal cues are weak or ambiguous, people infer their own attitudes by observing their own behavior, much as an outside observer would.',
    partNumber: 5,
    partTitle: 'Attitude Change'
  },
  {
    id: 'ap-ent-5b',
    question: 'The attitude-behavior connection is strongest when attitudes are:',
    options: [
      'General and formed through indirect experience',
      'Specific to the situation and easily accessible in memory',
      'Based solely on peripheral cues like advertising',
      'Held by a majority of people in the same culture'
    ],
    correctIndex: 1,
    explanation: 'Research shows the attitude-behavior connection is strongest when attitudes are specific to the behavior in question and are readily accessible in memory.',
    partNumber: 5,
    partTitle: 'Attitude Change'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'ap-ent-6a',
    question: 'In Festinger\'s classic experiment, participants who were paid only $1 to describe a boring task as enjoyable later rated the task more positively than those paid $20. This is best explained by:',
    options: [
      'Self-perception theory — they observed themselves enjoying the task',
      'Cognitive dissonance with insufficient justification — $1 was not enough to justify lying, so they changed their attitude',
      'The mere exposure effect — they were exposed to the task longer',
      'Social facilitation — the experimenter\'s presence improved their mood'
    ],
    correctIndex: 1,
    explanation: 'The $1 group experienced greater cognitive dissonance because the small payment was insufficient justification for lying, so they reduced dissonance by actually changing their attitude about the task.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'ap-ent-6b',
    question: 'The mere exposure effect demonstrates that:',
    options: [
      'People dislike stimuli they encounter frequently',
      'Repeated exposure to a stimulus increases liking for it',
      'First impressions are always the most accurate',
      'Persuasion is more effective through the central route'
    ],
    correctIndex: 1,
    explanation: 'The mere exposure effect is the phenomenon in which repeated exposure to a stimulus tends to increase a person\'s liking for that stimulus.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review
  {
    id: 'ap-ent-7a',
    question: 'According to the contact hypothesis, prejudice reduction through intergroup contact works best under which conditions?',
    options: [
      'When one group has higher status and authority over the other',
      'When groups compete against each other for limited resources',
      'When groups have equal status, cooperate toward shared goals, and receive institutional support',
      'When groups interact briefly in informal, unstructured settings'
    ],
    correctIndex: 2,
    explanation: 'The contact hypothesis states that intergroup prejudice is best reduced when groups have equal status, work cooperatively toward common goals, and have institutional support for the contact.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'ap-ent-7b',
    question: 'On the AP Psychology exam, Festinger\'s cognitive dissonance theory and the Elaboration Likelihood Model are commonly tested by asking students to:',
    options: [
      'List all experiments conducted by Festinger and Petty',
      'Apply these theories to analyze real-world or hypothetical scenarios',
      'Compare these theories exclusively to Freud\'s psychoanalytic approach',
      'Calculate effect sizes from persuasion research studies'
    ],
    correctIndex: 1,
    explanation: 'The AP Psychology exam tests Festinger\'s cognitive dissonance theory and the ELM by presenting applied scenarios and asking students to identify which theory best explains the behavior described.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Attitude Formation' },
    { partNumber: 2, partTitle: 'Cognitive Dissonance' },
    { partNumber: 3, partTitle: 'Persuasion Techniques' },
    { partNumber: 4, partTitle: 'Central vs Peripheral' },
    { partNumber: 5, partTitle: 'Attitude Change' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
