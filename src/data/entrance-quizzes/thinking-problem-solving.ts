/**
 * Entrance Quiz — Thinking & Problem Solving (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Concepts & Prototypes
  {
    id: 'tps-ent-1a',
    question: 'Asked to sketch "a vehicle," nearly all participants draw a car. Few draw a sled or an elevator, although every participant agrees those are vehicles too. Which explanation fits best?',
    options: ['A car is their prototype of a vehicle', 'Sleds and elevators fall outside their concept', 'They follow an algorithm to define vehicles', 'Functional fixedness limits what they draw'],
    correctIndex: 0,
    explanation: 'A car is the prototype, the most typical example, of the concept "vehicle," so it comes to mind first. Less typical members still belong to the concept.',
    partNumber: 1,
    partTitle: 'Concepts & Prototypes',
  },
  {
    id: 'tps-ent-1b',
    question: 'A boy believes that all dogs are friendly. When a neighbor\'s dog growls and snaps at him, he decides it must have been "just playing" and keeps his belief unchanged. Which process is he using?',
    options: ['Accommodation, since his schema is revised', 'Assimilation, as the schema is kept', 'Mental set, since he reuses an old strategy', 'Divergent thinking, since he finds new ideas'],
    correctIndex: 1,
    explanation: 'He interprets the new experience to fit his existing schema instead of changing it, which is assimilation. Accommodation would mean revising the schema, for example to "some dogs are dangerous."',
    partNumber: 1,
    partTitle: 'Concepts & Prototypes',
  },

  // Part 2: Problem-Solving Strategies
  {
    id: 'tps-ent-2a',
    question: 'Participants solve five water-jar puzzles that all require the same long formula. On the sixth puzzle, which can be solved with one simple step, most still use the long formula. Which obstacle does this show?',
    options: ['Functional fixedness', 'Confirmation bias', 'Insight', 'Mental set'],
    correctIndex: 3,
    explanation: 'Sticking with a strategy that worked before, even when a simpler one is available, is mental set. Functional fixedness concerns an object\'s usual use, not a strategy.',
    partNumber: 2,
    partTitle: 'Problem-Solving Strategies',
  },
  {
    id: 'tps-ent-2b',
    question: 'Looking for her lost keys, Jo searches every room of the house in order, top to bottom. Her brother checks only the three places he usually drops his own keys. Which strategies are they using?',
    options: ['Jo: algorithm; brother: heuristic', 'Jo: heuristic; brother: algorithm', 'Jo: insight; brother: mental set', 'Jo: mental set; brother: insight'],
    correctIndex: 0,
    explanation: 'A systematic search of every room guarantees finding the keys if they are in the house, which is an algorithm. Checking the usual spots is a fast shortcut that may fail, a heuristic.',
    partNumber: 2,
    partTitle: 'Problem-Solving Strategies',
  },

  // Part 3: Heuristics & Biases
  {
    id: 'tps-ent-3a',
    question: 'A man refuses to play the numbers that won last week\'s lottery, explaining that "those numbers won\'t come up again so soon." Each drawing is random and independent. Which error does his reasoning show?',
    options: ['Sunk-cost fallacy', 'Framing effect', 'Gambler\'s fallacy', 'Availability heuristic'],
    correctIndex: 2,
    explanation: 'He treats independent random drawings as if they kept score, so a recent outcome seems less likely. That is the gambler\'s fallacy.',
    partNumber: 3,
    partTitle: 'Heuristics & Biases',
  },
  {
    id: 'tps-ent-3b',
    question: 'Before tasting a new cereal, one group of shoppers completes a short survey about healthy eating, while another completes a survey about weekend plans. The first group rates the cereal as healthier, though both groups taste the same product. Which concept explains this?',
    options: ['Framing effect', 'Priming', 'Sunk-cost fallacy', 'Belief perseverance'],
    correctIndex: 1,
    explanation: 'An earlier, separate stimulus (the health survey) activated related ideas that tilted the later judgment. That is priming; framing would require the same information worded differently at the moment of choice.',
    partNumber: 3,
    partTitle: 'Heuristics & Biases',
  },

  // Part 4: Decision Making
  {
    id: 'tps-ent-4a',
    question: 'After a local news story about a neighbor who won the lottery, a woman estimates her own chances of winning as far higher than they really are. Which heuristic best explains her estimate?',
    options: ['Availability heuristic', 'Representativeness heuristic', 'Framing effect', 'Mental set'],
    correctIndex: 0,
    explanation: 'A vivid, recent example comes easily to mind, so she judges winning as more common than it is. Judging likelihood by ease of recall is the availability heuristic.',
    partNumber: 4,
    partTitle: 'Decision Making',
  },
  {
    id: 'tps-ent-4b',
    question: 'A group contains 70 lawyers and 30 teachers. One member, chosen at random, is described as patient, fond of children\'s books and a library volunteer. Most people guess the member is a teacher. Which explanation fits best?',
    options: ['Availability, as vivid cases come to mind', 'Representativeness, ignoring base rates', 'Confirmation bias, as evidence is sought', 'Framing, as the outcomes are reworded'],
    correctIndex: 1,
    explanation: 'People judge by how well the description matches their prototype of a teacher and ignore the base rate: lawyers outnumber teachers more than two to one.',
    partNumber: 4,
    partTitle: 'Decision Making',
  },

  // Part 5: Creativity
  {
    id: 'tps-ent-5a',
    question: 'Which task best measures divergent thinking?',
    options: ['Solving an anagram that has one correct answer', 'Solving an equation that has one solution', 'Picking the best answer on a vocabulary test', 'Listing as many uses for a brick as you can'],
    correctIndex: 3,
    explanation: 'Divergent thinking expands outward to many possible answers, as in an alternate-uses task. The other tasks narrow to one correct answer, which is convergent thinking.',
    partNumber: 5,
    partTitle: 'Creativity',
  },
  {
    id: 'tps-ent-5b',
    question: 'A designer sketches 40 rough logo ideas in an hour, chooses the one that fits the client\'s budget and brand, and then schedules the remaining steps so the final version is done two days early. Which processes are shown, in order?',
    options: ['Convergent thinking, then functional fixedness', 'Mental set, then divergent thinking', 'Divergent, then convergent thinking and executive functions', 'Insight, then the availability heuristic'],
    correctIndex: 2,
    explanation: 'Producing many ideas is divergent thinking, choosing the one that works is convergent thinking, and planning the steps to a goal draws on executive functions.',
    partNumber: 5,
    partTitle: 'Creativity',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'tps-ent-6a',
    question: 'A student often cites a study showing that a popular supplement improves memory. After the study is retracted for fraud and she reads the retraction, she still insists the supplement works. Which concept best describes her response?',
    options: ['Confirmation bias', 'Hindsight bias', 'Belief perseverance', 'Overconfidence'],
    correctIndex: 2,
    explanation: 'Keeping a belief after the evidence for it has been discredited is belief perseverance. Confirmation bias is the selective search for supporting evidence while gathering information.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'tps-ent-6b',
    question: 'Researchers randomly assign 100 adults to read that a new medicine "works for 70% of patients" or "fails for 30% of patients." Participants then rate their willingness to take it on a 1–7 scale; the means are 5.6 and 4.2. What is the independent variable?',
    options: ['The way the results were worded', 'Willingness ratings on the 1–7 scale', 'The medicine\'s actual 70% success rate', 'The random assignment of the 100 adults'],
    correctIndex: 0,
    explanation: 'The researchers manipulated how the same information was worded, a framing manipulation. The willingness rating is the dependent variable.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'tps-ent-7a',
    question: 'An EBQ on public-health messages includes two sources. Source 1: after weeks of news coverage of a plane crash, people overestimate the risk of flying. Source 2: people are more willing to get a screening test described as "detects 90% of cancers" than one described as "misses 10% of cancers." Which concepts best explain Sources 1 and 2, in order?',
    options: ['Framing, then availability', 'Sunk cost, then mental set', 'Representativeness, then priming', 'Availability, then framing'],
    correctIndex: 3,
    explanation: 'Vivid, heavily covered examples make an event seem common (availability heuristic). Logically identical information worded as a gain or a loss changes choices (framing effect).',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'tps-ent-7b',
    question: 'When a screw on his chair works loose, a coworker insists he must find a screwdriver, never thinking to turn it with the coin in his pocket. Later, he keeps using the slow spreadsheet method he has always used, though a faster one is shown to him. Which concepts describe him, in order?',
    options: ['Mental set, then functional fixedness', 'Insight, then confirmation bias', 'Functional fixedness, then a mental set', 'Priming, then sunk-cost fallacy'],
    correctIndex: 2,
    explanation: 'Failing to see a new use for a familiar object is functional fixedness. Sticking with a familiar strategy when a better one exists is mental set.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Concepts & Prototypes' },
    { partNumber: 2, partTitle: 'Problem-Solving Strategies' },
    { partNumber: 3, partTitle: 'Heuristics & Biases' },
    { partNumber: 4, partTitle: 'Decision Making' },
    { partNumber: 5, partTitle: 'Creativity' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
