/**
 * Entrance Quiz — Retrieval & Forgetting (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'rf-ent-1a',
    question: 'Retrieval cues are best described as:',
    options: ['The process of encoding new information', 'Stimuli that help access stored memories through associations', 'A type of sensory memory', 'The decay of unused neural connections'],
    correctIndex: 1,
    explanation: 'Retrieval cues are stimuli (associations, context, mood) that help trigger access to stored memories. More and better cues generally lead to better retrieval.',
    partNumber: 1,
    partTitle: 'Retrieval Cues'
  },
  {
    id: 'rf-ent-1b',
    question: 'Context-dependent memory suggests that recall is best when:',
    options: ['You are in a different emotional state than during encoding', 'You are in the same physical environment as during encoding', 'Information was encoded shallowly', 'You use massed practice instead of spaced practice'],
    correctIndex: 1,
    explanation: 'Context-dependent memory means recall improves when the retrieval environment matches the encoding environment. The physical context serves as a retrieval cue.',
    partNumber: 1,
    partTitle: 'Retrieval Cues'
  },
  {
    id: 'rf-ent-2a',
    question: 'An essay exam primarily tests _____, while a multiple-choice exam primarily tests _____.',
    options: ['Recognition; recall', 'Recall; recognition', 'Encoding; storage', 'Storage; retrieval'],
    correctIndex: 1,
    explanation: 'Essay exams require recall — retrieving information without cues. Multiple-choice exams require recognition — identifying the correct answer from provided options.',
    partNumber: 2,
    partTitle: 'Recall vs Recognition'
  },
  {
    id: 'rf-ent-2b',
    question: 'Recognition is generally easier than recall because:',
    options: ['It requires deeper processing', 'More retrieval cues are provided by the answer options', 'It bypasses long-term memory', 'It relies on implicit memory only'],
    correctIndex: 1,
    explanation: 'Recognition is easier because the correct answer is present among the options, providing retrieval cues. Recall requires generating the answer from memory with fewer cues.',
    partNumber: 2,
    partTitle: 'Recall vs Recognition'
  },
  {
    id: 'rf-ent-3a',
    question: 'Ebbinghaus\'s forgetting curve demonstrates that:',
    options: ['Forgetting occurs at a constant rate over time', 'Most forgetting happens slowly and gradually', 'Forgetting is rapid at first and then levels off', 'Information in long-term memory is never forgotten'],
    correctIndex: 2,
    explanation: 'Ebbinghaus found that forgetting is most rapid shortly after learning, with the rate of forgetting slowing down over time — producing a steep initial drop that levels off.',
    partNumber: 3,
    partTitle: 'Forgetting Curve'
  },
  {
    id: 'rf-ent-3b',
    question: 'The spacing effect indicates that long-term retention is better when study sessions are:',
    options: ['Crammed into one long session (massed practice)', 'Distributed over time with breaks between sessions', 'Conducted while multitasking', 'Done only the night before an exam'],
    correctIndex: 1,
    explanation: 'The spacing effect shows that distributed practice (spreading study sessions over time) produces better long-term retention than massed practice (cramming).',
    partNumber: 3,
    partTitle: 'Forgetting Curve'
  },
  {
    id: 'rf-ent-4a',
    question: 'You learned Spanish in high school and are now struggling to learn Italian because Spanish words keep intruding. This is an example of:',
    options: ['Retroactive interference', 'Proactive interference', 'Source amnesia', 'Encoding failure'],
    correctIndex: 1,
    explanation: 'Proactive interference occurs when old memories (Spanish) interfere with the ability to learn new information (Italian). The old learning "proactively" disrupts new learning.',
    partNumber: 4,
    partTitle: 'Interference Theory'
  },
  {
    id: 'rf-ent-4b',
    question: 'After learning your new phone number, you have trouble remembering your old one. This is an example of:',
    options: ['Proactive interference', 'Encoding failure', 'Retroactive interference', 'Motivated forgetting'],
    correctIndex: 2,
    explanation: 'Retroactive interference occurs when new learning (new phone number) interferes with the recall of old information (old phone number). The new information "retroactively" disrupts old memories.',
    partNumber: 4,
    partTitle: 'Interference Theory'
  },
  {
    id: 'rf-ent-5a',
    question: 'The misinformation effect, demonstrated by Elizabeth Loftus, occurs when:',
    options: ['Memories are strengthened through repetition', 'Post-event information distorts the memory of the original event', 'Sensory memory lasts longer than expected', 'Flashbulb memories are perfectly accurate'],
    correctIndex: 1,
    explanation: 'The misinformation effect occurs when information encountered after an event (misleading questions, suggestions) alters or distorts the person\'s memory of the original event.',
    partNumber: 5,
    partTitle: 'Memory Distortion'
  },
  {
    id: 'rf-ent-5b',
    question: 'Source amnesia (source misattribution) refers to:',
    options: ['Completely forgetting an event occurred', 'Remembering information but forgetting where you learned it', 'Being unable to form new memories', 'Deliberately suppressing unpleasant memories'],
    correctIndex: 1,
    explanation: 'Source amnesia is remembering a piece of information but forgetting its source — where, when, or how you learned it. This can contribute to false memories and misinformation.',
    partNumber: 5,
    partTitle: 'Memory Distortion'
  },
  {
    id: 'rf-ent-6a',
    question: 'You learn Spanish and then learn French. You are now struggling to remember your French vocabulary. This difficulty is most likely due to:',
    options: ['Retroactive interference', 'Proactive interference', 'Decay theory', 'Repression'],
    correctIndex: 1,
    explanation: 'Previously learned Spanish (old learning) is interfering with your ability to retrieve newly learned French (new learning). This is proactive interference — old memories disrupt new ones.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'rf-ent-6b',
    question: 'Flashbulb memories are characterized by vivid, detailed recollections of emotionally significant events. Research shows these memories:',
    options: ['Are always perfectly accurate', 'Feel very vivid but are not necessarily more accurate than other memories', 'Cannot be subject to distortion', 'Only form during traumatic events'],
    correctIndex: 1,
    explanation: 'Despite their vividness and emotional intensity, flashbulb memories are not necessarily more accurate than ordinary memories. They are still subject to distortion and reconstruction.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'rf-ent-7a',
    question: 'Freud\'s concept of repression suggests that:',
    options: ['All forgetting is due to interference', 'People may unconsciously push painful memories out of awareness', 'Memories cannot be recovered once forgotten', 'Forgetting only occurs due to physical brain damage'],
    correctIndex: 1,
    explanation: 'Repression is Freud\'s concept of motivated forgetting — the unconscious exclusion of painful or threatening memories from awareness. This concept remains controversial in psychology.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'rf-ent-7b',
    question: 'On the AP exam, if a student knows material but cannot access it during the test, this is best described as:',
    options: ['Encoding failure — the information was never stored', 'Storage decay — the memory trace has faded', 'Retrieval failure — the information is stored but not accessible', 'Anterograde amnesia'],
    correctIndex: 2,
    explanation: 'Retrieval failure means the information was encoded and stored but cannot be accessed at the moment — often due to insufficient retrieval cues, stress, or interference.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Retrieval Cues' },
    { partNumber: 2, partTitle: 'Recall vs Recognition' },
    { partNumber: 3, partTitle: 'Forgetting Curve' },
    { partNumber: 4, partTitle: 'Interference Theory' },
    { partNumber: 5, partTitle: 'Memory Distortion' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
