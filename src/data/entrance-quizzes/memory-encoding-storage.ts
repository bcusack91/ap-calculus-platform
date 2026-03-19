/**
 * Entrance Quiz — Memory: Encoding & Storage (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mes-ent-1a',
    question: 'The Atkinson-Shiffrin model proposes that memory flows through three stages in which order?',
    options: ['Short-term → sensory → long-term', 'Long-term → short-term → sensory', 'Sensory → short-term → long-term', 'Short-term → long-term → sensory'],
    correctIndex: 2,
    explanation: 'The Atkinson-Shiffrin (multi-store) model proposes a three-stage sequence: sensory memory → short-term memory → long-term memory.',
    partNumber: 1,
    partTitle: 'Memory Models'
  },
  {
    id: 'mes-ent-1b',
    question: 'According to Craik and Lockhart\'s levels of processing framework, which type of processing leads to the best memory?',
    options: ['Structural (shallow) processing', 'Phonemic (intermediate) processing', 'Deep (semantic) processing', 'All levels produce equal memory'],
    correctIndex: 2,
    explanation: 'Craik and Lockhart proposed that deeper, more meaningful (semantic) processing of information leads to better and more durable memory than shallow structural or phonemic processing.',
    partNumber: 1,
    partTitle: 'Memory Models'
  },
  {
    id: 'mes-ent-2a',
    question: 'Iconic memory is to _____ as echoic memory is to _____.',
    options: ['Auditory; visual', 'Visual; auditory', 'Short-term; long-term', 'Explicit; implicit'],
    correctIndex: 1,
    explanation: 'Iconic memory is visual sensory memory (lasting ~0.5 seconds), while echoic memory is auditory sensory memory (lasting ~3-4 seconds).',
    partNumber: 2,
    partTitle: 'Sensory Memory'
  },
  {
    id: 'mes-ent-2b',
    question: 'Which statement best describes sensory memory?',
    options: ['Small capacity and long duration', 'Large capacity but very brief duration', 'Small capacity and brief duration', 'Unlimited capacity and unlimited duration'],
    correctIndex: 1,
    explanation: 'Sensory memory has a large capacity (it takes in all sensory information) but very brief duration — iconic lasts about 0.5 seconds and echoic about 3-4 seconds.',
    partNumber: 2,
    partTitle: 'Sensory Memory'
  },
  {
    id: 'mes-ent-3a',
    question: 'George Miller\'s research found that short-term memory can hold approximately:',
    options: ['2 ± 1 items', '7 ± 2 items', '15 ± 3 items', 'Unlimited items'],
    correctIndex: 1,
    explanation: 'Miller\'s "magical number" research found that short-term memory can hold approximately 7 ± 2 items (5 to 9) at a time, for about 20-30 seconds without rehearsal.',
    partNumber: 3,
    partTitle: 'Short-Term & Working Memory'
  },
  {
    id: 'mes-ent-3b',
    question: 'Baddeley\'s working memory model includes the phonological loop and:',
    options: ['The hippocampus', 'The visuospatial sketchpad', 'Sensory registers', 'The cerebellum'],
    correctIndex: 1,
    explanation: 'Baddeley\'s working memory model includes the phonological loop (verbal/auditory information), the visuospatial sketchpad (visual/spatial information), and a central executive that coordinates them.',
    partNumber: 3,
    partTitle: 'Short-Term & Working Memory'
  },
  {
    id: 'mes-ent-4a',
    question: 'Explicit (declarative) memory can be subdivided into:',
    options: ['Procedural and priming', 'Iconic and echoic', 'Episodic (events) and semantic (facts)', 'Sensory and motor'],
    correctIndex: 2,
    explanation: 'Explicit (declarative) memory includes episodic memory (personal events and experiences) and semantic memory (general knowledge and facts).',
    partNumber: 4,
    partTitle: 'Long-Term Memory'
  },
  {
    id: 'mes-ent-4b',
    question: 'Knowing how to ride a bicycle is an example of which type of memory?',
    options: ['Episodic memory', 'Semantic memory', 'Implicit (procedural) memory', 'Sensory memory'],
    correctIndex: 2,
    explanation: 'Riding a bicycle is a procedural skill — a type of implicit (nondeclarative) memory. It is performed automatically without conscious recall of each step.',
    partNumber: 4,
    partTitle: 'Long-Term Memory'
  },
  {
    id: 'mes-ent-5a',
    question: 'Which encoding strategy produces better long-term retention?',
    options: ['Maintenance rehearsal (simple repetition)', 'Elaborative rehearsal (relating to existing knowledge)', 'Reading the material once quickly', 'Writing the material in the same words'],
    correctIndex: 1,
    explanation: 'Elaborative rehearsal — linking new information to existing knowledge — produces better long-term memory than maintenance rehearsal (simple repetition), which mainly helps short-term retention.',
    partNumber: 5,
    partTitle: 'Encoding Strategies'
  },
  {
    id: 'mes-ent-5b',
    question: 'Chunking improves memory by:',
    options: ['Increasing the duration of sensory memory', 'Grouping information into meaningful units to increase effective capacity', 'Eliminating the need for rehearsal', 'Converting implicit memories to explicit ones'],
    correctIndex: 1,
    explanation: 'Chunking groups individual pieces of information into larger, meaningful units (e.g., grouping digits into phone number segments), effectively increasing the capacity of short-term memory.',
    partNumber: 5,
    partTitle: 'Encoding Strategies'
  },
  {
    id: 'mes-ent-6a',
    question: 'The serial position effect shows that people tend to remember:',
    options: ['Only items in the middle of a list', 'Items at the beginning (primacy) and end (recency) of a list best', 'Only the last item presented', 'All items equally regardless of position'],
    correctIndex: 1,
    explanation: 'The serial position effect combines the primacy effect (better recall of first items, due to rehearsal into LTM) and the recency effect (better recall of last items, still in STM).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mes-ent-6b',
    question: 'Self-referential encoding improves memory because:',
    options: ['It uses maintenance rehearsal', 'Relating material to yourself promotes deeper processing', 'It bypasses short-term memory entirely', 'It only works for procedural skills'],
    correctIndex: 1,
    explanation: 'Self-referential encoding — relating material to your own experiences — promotes deeper, more elaborate processing, leading to stronger and more retrievable memories.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mes-ent-7a',
    question: 'The case of patient H.M. demonstrated that the hippocampus is critical for:',
    options: ['Implicit procedural memory', 'Forming new explicit (declarative) memories', 'Sensory memory processing', 'Emotional conditioning'],
    correctIndex: 1,
    explanation: 'After bilateral hippocampal removal, H.M. could not form new explicit (declarative) memories, demonstrating the hippocampus\'s critical role in consolidating new explicit memories.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'mes-ent-7b',
    question: 'Memory is considered reconstructive rather than reproductive because:',
    options: ['Memories are stored as perfect recordings and replayed exactly', 'Memories are rebuilt each time we recall them and are subject to distortion', 'We can only store a limited number of memories', 'Long-term memories never change'],
    correctIndex: 1,
    explanation: 'Memory is reconstructive — each time we recall a memory, we rebuild it from stored fragments, making it subject to distortion, filling in gaps, and incorporating post-event information.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Memory Models' },
    { partNumber: 2, partTitle: 'Sensory Memory' },
    { partNumber: 3, partTitle: 'Short-Term & Working Memory' },
    { partNumber: 4, partTitle: 'Long-Term Memory' },
    { partNumber: 5, partTitle: 'Encoding Strategies' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
