/**
 * Entrance Quiz — Retrieval & Forgetting (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Recall, Recognition and Retrieval Cues
  {
    id: 'rf-ent-1a',
    question: 'Participants study 30 words. Given two minutes to write down the words, they produce 9 on average. On a later test mixing the 30 studied words with 30 new ones, they correctly mark 24 studied words as "old" while marking only 2 new words as "old." Which conclusion is best supported?',
    options: ['Most words were never encoded in the first place', 'Many were stored but hard to reach without cues', 'The two tests measured entirely different memories', 'Recall is a more sensitive measure than recognition'],
    correctIndex: 1,
    explanation: 'Recognition, with few false alarms, shows that far more words were stored than recall revealed. The words were available but not accessible without the cue the recognition test provides.',
    partNumber: 1,
    partTitle: 'Recall, Recognition and Retrieval Cues',
  },
  {
    id: 'rf-ent-1b',
    question: 'A man cannot remember the name of the street he lived on as a child. When his sister mentions the bakery on the corner, the street name pops into his head. Which explanation fits best?',
    options: ['His sister\'s remark created a brand-new memory', 'The memory decayed and was relearned in seconds', 'It was stored, and a cue made it accessible', 'The street name had never been encoded at all'],
    correctIndex: 2,
    explanation: 'The name was available in long-term memory all along; the bakery, linked to it in memory, served as a retrieval cue that made it accessible.',
    partNumber: 1,
    partTitle: 'Recall, Recognition and Retrieval Cues',
  },

  // Part 2: Context, State and Mood
  {
    id: 'rf-ent-2a',
    question: 'A runner memorizes a speech while jogging on a treadmill, heart pounding. Later she recalls it best when she is again physically worked up after a run, wherever she happens to be. Which concept explains this?',
    options: ['Context-dependent memory', 'State-dependent memory', 'Mood-congruent memory', 'Encoding failure'],
    correctIndex: 1,
    explanation: 'Her internal physical state (exercise arousal) at retrieval matches her state at encoding, and the match works as a retrieval cue. Because the location does not matter, this is state-dependent rather than context-dependent memory.',
    partNumber: 2,
    partTitle: 'Context, State and Mood',
  },
  {
    id: 'rf-ent-2b',
    question: 'Students learn a word list in a room that either smells of peppermint or has no scent, and they are tested in a room that either smells of peppermint or has no scent. Which result would show context-dependent memory?',
    options: ['Recall is best in peppermint, whatever the study room', 'Recall is about the same in all four conditions', 'Recall is best whenever the scents match at study and test', 'Recall is best when the scents differ at study and test'],
    correctIndex: 2,
    explanation: 'Context-dependent memory predicts an advantage whenever the external environment at retrieval matches the environment at encoding, not an overall advantage for one scent.',
    partNumber: 2,
    partTitle: 'Context, State and Mood',
  },

  // Part 3: Retrieval Practice and Metacognition
  {
    id: 'rf-ent-3a',
    question: 'Researchers compare students who take practice recall tests on a passage with students who reread it. Which design feature is most essential for concluding that testing itself, rather than extra effort, caused better recall a week later?',
    options: ['Equal study time in both groups', 'Feedback after every practice test', 'A final test only five minutes later', 'Students choosing their own method'],
    correctIndex: 0,
    explanation: 'If the groups spend the same time studying, a later advantage for the tested group cannot be explained by more total study. The testing effect holds even without feedback, and its benefit appears mainly after a delay.',
    partNumber: 3,
    partTitle: 'Retrieval Practice and Metacognition',
  },
  {
    id: 'rf-ent-3b',
    question: 'The night before a quiz, a student wants an accurate sense of which vocabulary terms she has not yet learned, so she can spend her remaining time on them. Which method would give her the most accurate judgment?',
    options: ['Rereading the list until each term looks familiar', 'Covering each definition, then recalling it', 'Rating each card right after reading its definition', 'Highlighting the terms that seem hardest to her'],
    correctIndex: 1,
    explanation: 'Trying to recall a definition before checking it shows what she can actually retrieve, which makes her metacognitive monitoring accurate. Familiarity from rereading or from just having seen the answer creates an illusion of knowing.',
    partNumber: 3,
    partTitle: 'Retrieval Practice and Metacognition',
  },

  // Part 4: The Forgetting Curve
  {
    id: 'rf-ent-4a',
    question: 'A student needed 25 trials to memorize a list. Two weeks later, she relearned it to the same standard in 15 trials. Using the savings method, what were her savings?',
    options: ['10%', '15%', '60%', '40%'],
    correctIndex: 3,
    explanation: 'Savings = (original trials − relearning trials) ÷ original trials × 100 = (25 − 15) ÷ 25 × 100 = 40%.',
    partNumber: 4,
    partTitle: 'The Forgetting Curve',
  },
  {
    id: 'rf-ent-4b',
    question: 'Practice data: retention of a vocabulary list was 60% after 1 hour, 35% after 1 day, 28% after 1 week and 24% after 1 month. Which statement best describes the pattern?',
    options: ['Forgetting is fast at first and then levels off', 'Forgetting proceeds at a steady rate all month', 'Memory for the list is gone within a month', 'Most forgetting happens between week 1 and month 1'],
    correctIndex: 0,
    explanation: 'Retention dropped 25 points in the first day but only 4 points in the last three weeks, the forgetting-curve shape of rapid early loss that levels off without reaching zero.',
    partNumber: 4,
    partTitle: 'The Forgetting Curve',
  },

  // Part 5: Why Memories Fail
  {
    id: 'rf-ent-5a',
    question: 'A teacher taught in Room 112 for ten years. This year she moved to Room 208, but she keeps walking to Room 112 between classes. Which concept best explains her mistake?',
    options: ['Retroactive interference', 'Proactive interference', 'Encoding failure', 'Repression'],
    correctIndex: 1,
    explanation: 'Old learning (Room 112) is disrupting retrieval of new learning (Room 208). Old blocking new is proactive interference.',
    partNumber: 5,
    partTitle: 'Why Memories Fail',
  },
  {
    id: 'rf-ent-5b',
    question: 'An employee has walked through her office lobby every day for two years. Asked the color of its walls, she has no idea, and when shown four color samples she does no better than chance. No hint helps. Which explanation fits best?',
    options: ['Encoding failure', 'Tip-of-the-tongue phenomenon', 'Retroactive interference', 'Repression'],
    correctIndex: 0,
    explanation: 'Because no cue or recognition test helps, the detail was most likely never stored. Seeing something repeatedly does not guarantee that it is encoded.',
    partNumber: 5,
    partTitle: 'Why Memories Fail',
  },

  // Part 6: Constructed Memories and Eyewitness Accuracy
  {
    id: 'rf-ent-6a',
    question: 'After seeing a minor car crash, a witness reads a social media post claiming the driver was texting. A week later she tells police she clearly saw a phone in the driver\'s hand, though video shows none. Which concept best explains her report?',
    options: ['Imagination inflation', 'Proactive interference', 'Mood-congruent memory', 'Misinformation effect'],
    correctIndex: 3,
    explanation: 'Misleading information received after the event was incorporated into her memory of the event, which is the misinformation effect.',
    partNumber: 6,
    partTitle: 'Constructed Memories and Eyewitness Accuracy',
  },
  {
    id: 'rf-ent-6b',
    question: 'Which lineup procedure would best keep the officer running a lineup from unintentionally steering a witness toward the suspect?',
    options: ['Telling the witness that the suspect is present', 'Showing the suspect\'s mugshot beforehand', 'Using someone who does not know who the suspect is', 'Saying "Good, that\'s our suspect" after a choice'],
    correctIndex: 2,
    explanation: 'In a double-blind lineup, the person running it does not know who the suspect is, so they cannot give cues, intentionally or not. The other procedures add suggestion or inflate confidence.',
    partNumber: 6,
    partTitle: 'Constructed Memories and Eyewitness Accuracy',
  },

  // Part 7: Synthesis and EBQ Practice
  {
    id: 'rf-ent-7a',
    question: 'An EBQ source reports that adults who were asked several times to picture in detail getting lost at a county fair as children later rated that event as more likely to have happened. Which concept best explains this source?',
    options: ['Misinformation effect', 'Retroactive interference', 'Imagination inflation', 'Context-dependent memory'],
    correctIndex: 2,
    explanation: 'Vividly imagining an event increases confidence that it really happened, which is imagination inflation, a form of constructive memory.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
  {
    id: 'rf-ent-7b',
    question: 'Which finding most strongly supports the claim that much forgetting is retrieval failure rather than loss of stored information?',
    options: ['Recall of a list declines steadily over several weeks', 'People cannot pick out the real penny design from fakes', 'Witnesses report details that were suggested afterward', 'A "forgotten" list is relearned in fewer trials than before'],
    correctIndex: 3,
    explanation: 'Savings in relearning show that traces of the list remained even when it could not be recalled. Penny errors point to encoding failure, and suggested details point to constructive memory.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Recall, Recognition and Retrieval Cues' },
    { partNumber: 2, partTitle: 'Context, State and Mood' },
    { partNumber: 3, partTitle: 'Retrieval Practice and Metacognition' },
    { partNumber: 4, partTitle: 'The Forgetting Curve' },
    { partNumber: 5, partTitle: 'Why Memories Fail' },
    { partNumber: 6, partTitle: 'Constructed Memories and Eyewitness Accuracy' },
    { partNumber: 7, partTitle: 'Synthesis and EBQ Practice' },
  ]
}
