/**
 * Entrance Quiz — Inference, Tone and Word Meaning (ASVAB Paragraph Comprehension) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Reading Between the Lines'
const P2 = 'Drawing Supported Conclusions'
const P3 = 'Implied Contrasts and Unstated Assumptions'
const P4 = 'Tone, Attitude and Style'
const P5 = 'Word Meaning in a Passage'
const P6 = 'Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'pc-inference-ent-1a',
    question: `The grass in the yard was soaked, puddles filled the low spots in the driveway, and the air smelled fresh and clean.\n\nIt can most reasonably be inferred that`,
    options: [
      'it was the middle of winter',
      'it had rained not long before',
      'someone had just washed the car',
      'a pipe had burst under the yard'
    ],
    correctIndex: 1,
    explanation: 'Soaked grass, puddles across the driveway and fresh-smelling air all point to recent rain. Washing a car or a burst pipe would not explain the whole yard and the fresh air, and nothing suggests winter.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'pc-inference-ent-1b',
    question: 'A question asks, "As used in the passage, \'issue\' most nearly means…" What is it asking you to do?',
    options: [
      'Name the part of speech of the word',
      'Give the most common meaning of the word',
      'Find the meaning the word has in that sentence',
      'Find a word that is spelled the same way'
    ],
    correctIndex: 2,
    explanation: '"As used in the passage" means the meaning that fits the passage\'s sentence, which is often not the most common meaning.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'pc-inference-ent-2a',
    question: `At noon on a Tuesday, the diner's parking lot was empty, the chairs were stacked on the tables, and the "Open" sign in the window was dark.\n\nWhich conclusion is best supported?`,
    options: [
      'The diner had gone out of business',
      'The diner\'s food had become worse',
      'The diner was busy earlier that morning',
      'The diner was not open at that time'
    ],
    correctIndex: 3,
    explanation: 'An empty lot, stacked chairs and a dark "Open" sign show the diner was closed then. Going out of business goes too far (it may simply be closed that day), and nothing supports the other two.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'pc-inference-ent-2b',
    question: `Mia has scored 100 percent on each of the last five weekly spelling tests.\n\nWhich statement is most strongly supported?`,
    options: [
      'Mia will score 100 percent on every future test',
      'Mia may have been studying with a tutor this term',
      'Mia is the best speller in her whole school',
      'Mia has done very well on recent spelling tests'
    ],
    correctIndex: 3,
    explanation: 'Five perfect scores in a row clearly mean she has done very well recently. The other choices go too far or lack support: the passage compares her with no one, says nothing about the future and never mentions a tutor.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'pc-inference-ent-3a',
    question: `No longer just a place to borrow books, the town library now offers 3-D printers, coding classes and a recording studio.\n\nThe passage suggests that in the past the library`,
    options: [
      'did not lend any books at all',
      'charged a fee for every service',
      'was located in a different town',
      'was mainly a place to borrow books'
    ],
    correctIndex: 3,
    explanation: '"No longer just a place to borrow books" implies that it used to be mostly that. The other choices are unsupported or contradict the passage.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'pc-inference-ent-3b',
    question: `The park should put more trash cans along the trail, because the amount of litter on the trail has grown this year.\n\nThe author's argument assumes that`,
    options: [
      'hikers would use trash cans if more were available',
      'the park has no trash cans anywhere on the trail',
      'litter on the trail was worse last year',
      'park rangers are responsible for the litter'
    ],
    correctIndex: 0,
    explanation: 'More cans only reduce litter if hikers actually use them; that is the missing link. "No trash cans anywhere" goes beyond "more," litter grew this year rather than last, and the rangers are never blamed.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'pc-inference-ent-4a',
    question: `My first attempt at baking bread produced something closer to a brick. The dog sniffed it, gave me a look of deep pity and walked away.\n\nThe tone of the passage is best described as`,
    options: ['objective', 'humorous', 'bitter', 'alarmed'],
    correctIndex: 1,
    explanation: 'Comparing the bread to a brick and imagining the dog\'s "look of deep pity" are meant to be funny. The writer is not bitter or alarmed, and the playful exaggeration is not objective.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'pc-inference-ent-4b',
    question: `"Most people badly underestimate how fast floodwater rises," says a rescue swimmer with twenty years of experience. Just six inches of moving water can knock an adult off his or her feet.\n\nThe author supports the warning partly by`,
    options: [
      'comparing floods in two different states',
      'describing how flood walls are built',
      'telling the story of one flood victim',
      'quoting an experienced rescue swimmer'
    ],
    correctIndex: 3,
    explanation: 'The passage opens with a quotation from a rescue swimmer with twenty years of experience, an expert source. No single victim\'s story, comparison or construction description appears.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'pc-inference-ent-5a',
    question: `The coach decided to bench the team's star player for missing two practices in a row.\n\nAs used in the passage, "bench" most nearly means`,
    options: ['trade to another team', 'keep out of the game', 'build a seat for', 'praise in public'],
    correctIndex: 1,
    explanation: 'Benching a player for missing practice means keeping him or her out of the game as a penalty. "Build a seat for" plays on the noun meaning of bench.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'pc-inference-ent-5b',
    question: `The museum's collection spans three centuries of American military history, from the Revolution to the present day.\n\nAs used in the passage, "spans" most nearly means`,
    options: ['covers', 'crosses over a river', 'measures with the hand', 'repairs'],
    correctIndex: 0,
    explanation: 'A collection that spans three centuries covers that whole period. A bridge spans a river and a hand can span a distance, but neither meaning fits a collection.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'pc-inference-ent-6a',
    question: `Several studies have found that people who walk for thirty minutes a day tend to sleep better than people who rarely exercise.\n\nWhich statement is best supported?`,
    options: [
      'Walking in the evening may work better than walking in the morning',
      'Walking every day cures all sleep problems',
      'Daily walking may help people sleep better',
      'Everyone who walks daily sleeps perfectly'
    ],
    correctIndex: 2,
    explanation: '"Tend to sleep better" supports a careful claim: daily walking may help. The time of day is never discussed, and the other two choices use extreme words (all, everyone) that go far beyond the studies.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'pc-inference-ent-6b',
    question: `The proposal has some good points, but a few of its cost estimates seem too low and deserve a second look.\n\nThe author's attitude toward the proposal is best described as`,
    options: ['completely indifferent', 'furious', 'mildly skeptical', 'wildly enthusiastic'],
    correctIndex: 2,
    explanation: 'The author praises "some good points" but questions the estimates, which is mild skepticism. Furious is far too strong, enthusiastic ignores the doubts, and the author clearly cares.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'pc-inference-ent-7a',
    question: `Carlos packed his gear the night before, set three alarms and was standing at the bus stop an hour before the bus was due.\n\nIt can be inferred that Carlos`,
    options: [
      'had forgotten some of his gear',
      'did not want to miss the bus',
      'had never ridden a bus before',
      'disliked the place he was going'
    ],
    correctIndex: 1,
    explanation: 'Three alarms and arriving an hour early show he was determined not to miss the bus. Nothing suggests it was his first bus ride or that he disliked his destination, and he packed the night before.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'pc-inference-ent-7b',
    question: `Once common across the Great Plains, bison numbered only a few hundred in the wild by the late 1800s. Today, thanks to decades of protection efforts, there are hundreds of thousands.\n\nThe passage suggests that`,
    options: [
      'protection efforts helped bison numbers recover',
      'bison have always been rare on the Great Plains',
      'there are fewer bison now than in the late 1800s',
      'bison no longer need any protection at all'
    ],
    correctIndex: 0,
    explanation: 'The passage credits protection efforts for the rise from a few hundred to hundreds of thousands. Bison were "once common," there are more now, and nothing says protection is no longer needed.',
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
