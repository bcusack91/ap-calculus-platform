/**
 * Entrance Quiz — Main Idea and Purpose (ASVAB Paragraph Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Paragraph Comprehension on the CAT-ASVAB'
const P2 = 'Topic and Main Idea'
const P3 = 'Too Broad, Too Narrow: Main Idea vs Detail'
const P4 = "Author's Purpose"
const P5 = 'Best Title, Summary and Implied Main Idea'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'pc-main-idea-ent-1a',
    question: 'On the CAT-ASVAB, the Paragraph Comprehension subtest has',
    options: ['25 questions in 13 minutes', '35 questions in 11 minutes', '10 questions in 27 minutes', '15 questions in 9 minutes'],
    correctIndex: 2,
    explanation: 'CAT-ASVAB PC has 10 scored questions in 27 minutes, about 2 minutes 40 seconds each. Fifteen in 9 minutes is Word Knowledge, and 35 in 11 minutes is paper Word Knowledge.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pc-main-idea-ent-1b',
    question: `Camels are well suited to life in the desert. Their wide, padded feet keep them from sinking into soft sand. Long eyelashes and nostrils that can close protect them from blowing sand. They can also go many days without drinking water.\n\nWhat is the main idea of the passage?`,
    options: [
      'Deserts are among the hottest and driest places anywhere on Earth',
      'Camels have long eyelashes that block the wind',
      'Camels store water in the humps on their backs',
      'Camels have bodies that are adapted to the desert'
    ],
    correctIndex: 3,
    explanation: 'The first sentence states the point, and each detail (feet, eyelashes, nostrils, going without water) shows an adaptation to the desert. The passage never mentions humps, heat rankings are beyond it, and eyelashes are one detail.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'pc-main-idea-ent-2a',
    question: `(1) The new bike lanes on Main Street have been a success. (2) Bike traffic on the street has doubled since spring. (3) Accidents involving cyclists have dropped. (4) Several shop owners say more customers now stop in on their way past.\n\nWhich sentence states the main idea?`,
    options: ['Sentence 3', 'Sentence 4', 'Sentence 1', 'Sentence 2'],
    correctIndex: 2,
    explanation: 'Sentence 1 makes the claim (the lanes are a success), and sentences 2, 3 and 4 each give evidence for it. A detail supports the main idea, not the other way around.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pc-main-idea-ent-2b',
    question: `Some recruits arrive at basic training able to run three miles with ease. Others have never run more than one. Some have lifted weights for years, and some have never set foot in a gym. Because of these differences, training programs start slowly and build up step by step.\n\nWhat is the main idea of the passage?`,
    options: [
      'Some recruits have never set foot in a gym before training',
      'Training builds up gradually because recruits\' fitness varies',
      'Running three miles is the hardest part of basic training',
      'Recruits should begin a weight-lifting program well before they enlist'
    ],
    correctIndex: 1,
    explanation: 'The last sentence states the main idea, signaled by "Because of these differences." The gym detail is one example, and the passage never ranks the hardest part of training or advises lifting before enlisting.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'pc-main-idea-ent-3a',
    question: `Volcanoes can be destructive, but they also build new land. The Hawaiian Islands were formed by eruptions over millions of years. Lava that cools on the ocean floor slowly piles up until it rises above the waves. Even today, eruptions on the island of Hawaii add new land to its coastline.\n\nWhich statement best expresses the main idea?`,
    options: [
      'Volcanic eruptions can build new land as well as destroy it',
      'The surface of the Earth is always changing in many different ways',
      'Volcanoes do nothing but destroy the land around them',
      'Lava cools and hardens when it reaches the ocean floor'
    ],
    correctIndex: 0,
    explanation: 'The first sentence states the point and the rest supports it with the example of Hawaii. Cooling lava is one detail (too narrow), "always changing in many ways" is too broad, and "nothing but destroy" reverses the passage.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pc-main-idea-ent-3b',
    question: `The hospital has started a program that pairs each new nurse with an experienced mentor for the first six months. Mentors answer questions, help with difficult cases and give feedback after each shift. Since the program began, fewer new nurses have quit during their first year.\n\nWhich choice is TOO BROAD to be the main idea of the passage?`,
    options: [
      'Mentors give new nurses feedback after each shift',
      'Fewer new nurses now quit during their first year',
      'Every worker in every job needs a mentor to succeed',
      'A mentoring program is helping the hospital keep new nurses'
    ],
    correctIndex: 2,
    explanation: 'The passage is about one hospital\'s program for nurses; "every worker in every job" reaches far beyond it. The mentoring-program choice is the main idea, and the other two are single details (too narrow, not too broad).',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'pc-main-idea-ent-4a',
    question: `Do not pour used cooking grease down the kitchen drain. As it cools, the grease hardens inside the pipes and can cause backups and costly repairs. Instead, let it cool in an old can and throw the can in the trash.\n\nThe main purpose of the passage is to`,
    options: [
      'warn about a household problem and how to avoid it',
      'persuade readers to cook with less oil and butter',
      'explain how kitchen pipes are made and installed',
      'describe a typical day in the life of a plumber'
    ],
    correctIndex: 0,
    explanation: '"Do not" and the costly results signal a warning, and the last sentence tells how to avoid the problem. The passage never urges cooking with less fat, explains pipe making or follows a plumber.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pc-main-idea-ent-4b',
    question: `The base gym should stay open until midnight. Many soldiers work late shifts and have no other chance to exercise. Keeping the doors open a few extra hours would cost little and would help everyone stay fit for duty.\n\nThe author wrote this passage mainly to`,
    options: [
      'argue that the base gym should have longer hours',
      'explain why soldiers are required to work late shifts',
      'compare the base gym with gyms in the nearby town',
      'describe the equipment available at the base gym'
    ],
    correctIndex: 0,
    explanation: '"Should stay open" states an opinion, and the other sentences give reasons to agree. The passage describes no equipment, does not explain shift schedules and makes no comparison.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'pc-main-idea-ent-5a',
    question: `In the early 1900s, many families in American cities had ice delivered to their homes to keep food cold. A delivery man carried large blocks into the kitchen and set them in a wooden icebox. As electric refrigerators became affordable in the 1930s and 1940s, home ice delivery slowly disappeared.\n\nWhich title best fits the passage?`,
    options: [
      'Kitchens of the Future',
      'How to Make Ice at Home',
      'From Iceboxes to Refrigerators',
      'The Life of a Delivery Driver'
    ],
    correctIndex: 2,
    explanation: 'The passage traces the change from delivered ice and iceboxes to electric refrigerators. It gives no ice-making instructions, says little about the delivery man\'s life and looks back in time, not forward.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pc-main-idea-ent-5b',
    question: `The night before, Maria checked the tire pressure, filled the gas tank and packed a cooler with sandwiches. She printed a paper map in case her phone lost its signal, and she told her sister the route she planned to take.\n\nThe passage suggests that Maria is`,
    options: [
      'planning to travel with her sister',
      'afraid of driving long distances alone',
      'preparing carefully for a long drive',
      'unhappy that her phone is broken'
    ],
    correctIndex: 2,
    explanation: 'Every detail is a step in getting ready for a trip. Nothing shows fear, the phone works (the map is a backup "in case" it loses signal), and telling her sister the route suggests the sister is not coming along.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'pc-main-idea-ent-6a',
    question: `Astronauts on the International Space Station exercise about two hours every day. Without gravity pulling on their bodies, their muscles and bones would weaken quickly. Special machines let them run, cycle and lift weights while strapped in place.\n\nWhat is the main idea of the passage?`,
    options: [
      'Astronauts must be strapped in place to use the exercise machines',
      'Astronauts exercise in space mainly so that they can lose weight',
      'The space station circles Earth about every ninety minutes',
      'Astronauts exercise daily to keep their muscles and bones strong'
    ],
    correctIndex: 3,
    explanation: 'The passage explains that astronauts exercise every day because muscles and bones weaken without gravity. The orbit time may be true but is outside knowledge the passage never mentions, being strapped in is one detail, and weight loss is never given as the reason.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pc-main-idea-ent-6b',
    question: `Many teenagers find it hard to fall asleep early. Researchers have found that during the teen years the body's internal clock shifts later, so teens tend to feel sleepy later at night than younger children do. Partly for this reason, some school districts have moved high school start times later.\n\nWhich statement is best supported by the passage?`,
    options: [
      'Teens may sleep better if they avoid phone screens at night',
      'All teenagers are unable to fall asleep before midnight',
      'A later body clock in teens has led some schools to start later',
      'Every school district in the country has changed its high school start time'
    ],
    correctIndex: 2,
    explanation: 'The passage says teens "tend to" feel sleepy later and that "some" districts responded. Screens are never mentioned, and the other two choices use extreme words (all, every) that go beyond those careful claims.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'pc-main-idea-ent-7a',
    question: `Many towns hold welcome-home events for service members returning from deployment. Volunteers decorate the airport gate, local businesses donate food and families gather with signs and flags. For troops who have been away for months, the welcome is often the moment they finally feel home.\n\nWhat is the main idea of the passage?`,
    options: [
      'Airports are decorated with flags and banners for every holiday of the year',
      'Local businesses often donate food for public events',
      'Communities give returning troops a meaningful welcome',
      'Deployments usually last several months or longer'
    ],
    correctIndex: 2,
    explanation: 'Each sentence describes how communities welcome troops home and why it matters to them. Donated food is one detail, deployment length is mentioned only in passing, and holiday decorations are not discussed.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pc-main-idea-ent-7b',
    question: `Before a new medicine reaches pharmacy shelves, it is tested in three main phases of clinical trials. Phase 1 checks its safety in a small group of volunteers. Phase 2 tests whether it works in a few hundred patients. Phase 3 compares it with existing treatments in thousands of patients.\n\nThe passage was written mainly to`,
    options: [
      'explain how new medicines are tested before sale',
      'warn readers about the side effects of new drugs',
      'describe the history of one famous medicine',
      'persuade readers to volunteer for a clinical trial'
    ],
    correctIndex: 0,
    explanation: 'The passage lays out the three phases of testing in order, with no opinion, warning or story. It never asks for volunteers or names a particular medicine.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
