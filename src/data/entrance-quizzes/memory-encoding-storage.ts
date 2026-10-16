/**
 * Entrance Quiz — Memory Encoding & Storage (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Memory Systems Overview
  {
    id: 'mes-ent-1a',
    question: 'A student absorbed in a book notices the hallway clock chiming only partway through. When it stops, she can still count back over the chimes she was not attending to and work out that it struck five. Which memory store made this possible?',
    options: ['Iconic memory', 'Echoic memory', 'Procedural memory', 'Prospective memory'],
    correctIndex: 1,
    explanation: 'Echoic memory holds a brief, raw copy of sounds for a few seconds, long enough to "replay" chimes that were not attended to at first.',
    partNumber: 1,
    partTitle: 'Memory Systems Overview',
  },
  {
    id: 'mes-ent-1b',
    question: 'After a museum field trip, students can say roughly how many stops the group made and in what order, though no one tried to remember this. They recall very few of the facts the guide explained. Which explanation fits best?',
    options: ['The guide\'s facts were held only in sensory memory', 'Order and frequency need effortful rehearsal', 'Long-term memory had reached its capacity', 'Sequence and frequency are encoded automatically'],
    correctIndex: 3,
    explanation: 'Information about time, sequence and frequency is encoded with little effort, while new facts require attention and effortful processing.',
    partNumber: 1,
    partTitle: 'Memory Systems Overview',
  },

  // Part 2: Levels of Processing and Rehearsal
  {
    id: 'mes-ent-2a',
    question: 'Participants see a list of words. Group 1 counts the vowels in each word, Group 2 decides whether each word rhymes with "cat," and Group 3 rates how pleasant each word\'s meaning is. On a surprise memory test, which ranking of recall, from best to worst, is most likely?',
    options: ['Vowels, then rhyme, then pleasantness', 'Rhyme, then pleasantness, then vowels', 'Pleasantness, then rhyme, then vowels', 'All three groups about equal'],
    correctIndex: 2,
    explanation: 'Rating meaning is semantic processing (deepest), judging rhyme is phonemic (intermediate) and counting vowels is structural (shallowest). Deeper processing produces better memory.',
    partNumber: 2,
    partTitle: 'Levels of Processing and Rehearsal',
  },
  {
    id: 'mes-ent-2b',
    question: 'A student wants to remember what the sympathetic nervous system does. Which method is the AP framework most likely to predict will produce the best long-term memory?',
    options: ['Repeating the definition aloud twenty times', 'Linking it to her own racing heart', 'Copying the definition in large capital letters', 'Noting that "sympathetic" rhymes with "pathetic"'],
    correctIndex: 1,
    explanation: 'Relating the concept to her own experience is elaborative, self-relevant semantic encoding, which builds many links for later retrieval. Repetition, letter shapes and rhymes are shallower.',
    partNumber: 2,
    partTitle: 'Levels of Processing and Rehearsal',
  },

  // Part 3: Encoding Strategies
  {
    id: 'mes-ent-3a',
    question: 'Group A studies a chapter for 2 hours the night before a test. Group B studies the same chapter for 30 minutes on each of four days. Both groups are tested one day later and again one month later. Which pattern does the spacing effect predict?',
    options: ['Group A higher on both tests', 'Similar at one day; Group B far ahead at one month', 'Group B far ahead at one day; similar at one month', 'No difference on either test'],
    correctIndex: 1,
    explanation: 'Massed practice can do reasonably well on an immediate test, but distributed practice produces stronger long-term retention, so the advantage of spacing grows as the delay grows.',
    partNumber: 3,
    partTitle: 'Encoding Strategies',
  },
  {
    id: 'mes-ent-3b',
    question: 'An experienced barista remembers a five-drink order after hearing it once, while a new hire forgets half of it. When both hear a random string of coffee words that do not form real drinks, the barista does no better. What best explains the barista\'s usual advantage?',
    options: ['She has a larger short-term memory span', 'She uses the method of loci for every order', 'She groups familiar orders into chunks', 'Her sensory memory lasts longer than others\''],
    correctIndex: 2,
    explanation: 'Her knowledge lets her group each drink into a meaningful chunk, so the order takes up fewer units. When the words form no familiar patterns, the advantage disappears.',
    partNumber: 3,
    partTitle: 'Encoding Strategies',
  },

  // Part 4: Sensory, Short-Term and Working Memory: Reading the Data
  {
    id: 'mes-ent-4a',
    question: 'According to the working memory model, which pair of tasks should interfere with each other the least?',
    options: ['Remembering a phone number while reciting a poem', 'Picturing a room\'s layout while rotating a shape', 'Recalling a phone number while picturing a room', 'Repeating a word list while hearing a podcast'],
    correctIndex: 2,
    explanation: 'A phone number uses the phonological loop and picturing a room uses the visuospatial sketchpad, so they draw on different components. The other pairs compete for the same component.',
    partNumber: 4,
    partTitle: 'Sensory, Short-Term and Working Memory: Reading the Data',
  },
  {
    id: 'mes-ent-4b',
    question: 'Practice data: participants heard three letters, then counted backward by threes before recalling them. Correct recall was 85% after 3 seconds, 60% after 6 seconds, 25% after 12 seconds and 10% after 18 seconds. Which conclusion is best supported?',
    options: ['Without rehearsal, most fades within 20 seconds', 'Counting backward strengthens storage over time', 'Recall drops the same amount every few seconds', 'Short-term memory holds about seven letters'],
    correctIndex: 0,
    explanation: 'With rehearsal blocked, recall falls steeply and is nearly gone by 18 seconds, showing that short-term memory lasts only seconds without rehearsal. The drop is steep at first and then levels off, not constant.',
    partNumber: 4,
    partTitle: 'Sensory, Short-Term and Working Memory: Reading the Data',
  },

  // Part 5: Long-Term Memory: Types, Biology and Storage Problems
  {
    id: 'mes-ent-5a',
    question: 'In the middle of a busy workday, a woman suddenly realizes she has a dentist appointment at 3 p.m. and leaves the office on time. Which type of memory did she use?',
    options: ['Procedural memory', 'Prospective memory', 'Episodic memory', 'Semantic memory'],
    correctIndex: 1,
    explanation: 'Remembering to carry out an intended action in the future is prospective memory.',
    partNumber: 5,
    partTitle: 'Long-Term Memory: Types, Biology and Storage Problems',
  },
  {
    id: 'mes-ent-5b',
    question: 'After a stroke damages his hippocampus, a man still tells detailed stories about his career, but he cannot remember a doctor he has met many times since. His golf swing improves with each practice session, though he never recalls having practiced. Which description fits best?',
    options: ['Anterograde amnesia, implicit memory spared', 'Retrograde amnesia with explicit memory spared', 'Infantile amnesia that began in adulthood', 'Alzheimer\'s disease affecting only skills'],
    correctIndex: 0,
    explanation: 'He cannot form new explicit memories after the damage (anterograde amnesia), yet his procedural, implicit learning continues, because it depends on different brain systems.',
    partNumber: 5,
    partTitle: 'Long-Term Memory: Types, Biology and Storage Problems',
  },

  // Part 6: AP Exam Practice: Article Analysis and Evidence-Based Questions
  {
    id: 'mes-ent-6a',
    question: 'In a practice study, 60 adults were randomly assigned to learn 30 word pairs by forming mental images or by repeating the pairs aloud. Two days later, each adult saw the first word of each pair and wrote the second. Memory was scored as the number of second words written correctly. What is the operational definition of the dependent variable?',
    options: ['Imagery versus repeating the pairs aloud', 'How well each adult can remember things', 'Count of pairs right on the two-day test', 'The random assignment of the 60 adults'],
    correctIndex: 2,
    explanation: 'Memory was measured as how many of the 30 second words were written correctly two days later. The study method is the independent variable, and "how well they remember" is not a measure.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Article Analysis and Evidence-Based Questions',
  },
  {
    id: 'mes-ent-6b',
    question: 'An EBQ source reports that among 400 students, hours spent studying with lyrical music correlated r = −.30 with test scores. Which explanation of the source is accurate without overclaiming?',
    options: ['Lyrical music causes students to score lower', 'The negative r shows that there is no link', 'Lyrics boost encoding through elaboration', 'Lyrics may tie up the phonological loop'],
    correctIndex: 3,
    explanation: 'Lyrics compete with verbal study material for the phonological loop, which fits the negative link. The source is correlational, so it cannot show that music causes lower scores.',
    partNumber: 6,
    partTitle: 'AP Exam Practice: Article Analysis and Evidence-Based Questions',
  },

  // Part 7: Synthesis Review
  {
    id: 'mes-ent-7a',
    question: 'Which study plan would the AP framework predict produces the best retention for a cumulative final exam?',
    options: ['Sort terms into categories, link each to her own life, then review over weeks', 'Read the terms in order, recopy them, review all in one long night', 'Repeat each term aloud, highlight it, review it during the week of the test', 'Read the textbook once, then reread it twice the evening before the test'],
    correctIndex: 0,
    explanation: 'Organizing material into categories, encoding it semantically through self-relevant examples and spacing practice over weeks each strengthen long-term retention. The other plans rely on shallow processing or massed practice.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
  {
    id: 'mes-ent-7b',
    question: 'In rats, blocking glutamate receptors in the hippocampus during training keeps them from learning where a hidden platform sits in a pool, though they swim normally. What does this finding suggest?',
    options: ['The cerebellum stores all spatial memories', 'Glutamate is the main inhibitory transmitter', 'Swimming is a skill that needs the hippocampus', 'Hippocampal LTP aids new spatial memory'],
    correctIndex: 3,
    explanation: 'Long-term potentiation depends heavily on glutamate and was first shown in the hippocampus. Blocking it disrupted new explicit (spatial) learning while the swimming skill was intact.',
    partNumber: 7,
    partTitle: 'Synthesis Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Memory Systems Overview' },
    { partNumber: 2, partTitle: 'Levels of Processing and Rehearsal' },
    { partNumber: 3, partTitle: 'Encoding Strategies' },
    { partNumber: 4, partTitle: 'Sensory, Short-Term and Working Memory: Reading the Data' },
    { partNumber: 5, partTitle: 'Long-Term Memory: Types, Biology and Storage Problems' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Article Analysis and Evidence-Based Questions' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
