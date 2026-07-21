/**
 * Entrance Quiz — SAT Reading & Writing Overall Strategy (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: SAT R&W Overview ──────────────────────
  {
    id: 'srws-ent-1a',
    question:
      'On the digital SAT, the Reading and Writing (R&W) section is structured as:',
    options: [
      'One long section with 80 questions over 100 minutes.',
      'Two separately timed modules of 27 questions each, for a total of 54 questions in 64 minutes.',
      'Three modules: reading, grammar, and vocabulary, each 20 minutes.',
      'Four passages, each followed by 10 questions, totaling 40 questions.',
    ],
    correctIndex: 1,
    explanation:
      'The digital SAT R&W section consists of two 32-minute modules with 27 questions each (54 questions total, 64 minutes combined). Performance on Module 1 determines whether Module 2 is easier or harder (adaptive testing).',
    partNumber: 1,
    partTitle: 'SAT R&W Overview',
  },
  {
    id: 'srws-ent-1b',
    question:
      'Which of the following best describes the adaptive nature of the digital SAT R&W section?',
    options: [
      'Each question adapts based on your answer to the previous question.',
      'All students receive identical questions regardless of performance.',
      'Performance on Module 1 determines the difficulty level of Module 2.',
      'Students may choose which difficulty level to attempt.',
    ],
    correctIndex: 2,
    explanation:
      'The digital SAT uses multistage adaptive testing: all students take the same Module 1. Students who perform well receive a harder Module 2 (with higher scoring potential), while those who struggle receive an easier Module 2. Individual questions within a module do not adapt.',
    partNumber: 1,
    partTitle: 'SAT R&W Overview',
  },

  // ── Part 2: Question Types ────────────────────────
  {
    id: 'srws-ent-2a',
    question:
      'Which of the following is NOT a major question type in the SAT Reading and Writing section?',
    options: [
      'Words in Context (vocabulary)',
      'Rhetorical Synthesis (combining notes into a sentence)',
      'Standard English Conventions (grammar and mechanics)',
      'Extended Reasoning (multi-passage comparison with historical context)',
    ],
    correctIndex: 3,
    explanation:
      '"Extended Reasoning" with multi-passage historical comparison is an ACT Reading concept, not a standalone SAT R&W question type. The four SAT R&W domains are: Craft and Structure, Information and Ideas, Expression of Ideas, and Standard English Conventions.',
    partNumber: 2,
    partTitle: 'Question Types',
  },
  {
    id: 'srws-ent-2b',
    question:
      'A "Words in Context" question on the SAT asks: "As used in line 14, \'acute\' most nearly means…" What is the best strategy for answering this?',
    options: [
      'Read the surrounding sentences to determine the meaning that fits the passage\'s context.',
      'Select the longest answer choice, as it is usually the most precise.',
      'Pick the definition you have memorized from vocabulary study.',
      'Choose the most common everyday definition of the word.',
    ],
    correctIndex: 0,
    explanation:
      'Context is king on "Words in Context" questions. Many words have multiple meanings ("acute" can mean sharp, severe, intelligent, or less than 90 degrees). The correct answer is the meaning that fits the specific usage in the passage, which requires reading surrounding context.',
    partNumber: 2,
    partTitle: 'Question Types',
  },

  // ── Part 3: Passage Strategy ──────────────────────
  {
    id: 'srws-ent-3a',
    question:
      'Which approach to reading SAT R&W passages is most effective for most students?',
    options: [
      'Read the entire passage carefully before looking at the questions.',
      'Read the questions first, then skim the passage for keywords.',
      'Read the passage actively, noting the main idea and structure, then tackle the questions.',
      'Skip the passage entirely and answer all questions from the answer choices alone.',
    ],
    correctIndex: 2,
    explanation:
      'Active reading—noting the main idea, the author\'s purpose, and the passage structure—gives you a mental map before the questions. This is more efficient than blind skimming or rereading from scratch. The best approach varies by student, but active engagement beats passive reading or skipping.',
    partNumber: 3,
    partTitle: 'Passage Strategy',
  },
  {
    id: 'srws-ent-3b',
    question:
      'On the SAT, paired passages appear in the "Cross-Text Connections" question type. When both passages discuss the same topic, what should you determine first?',
    options: [
      'Which passage is longer and therefore more authoritative.',
      'The relationship between the two passages: do they agree, disagree, or complement each other?',
      'The publication date of each passage to determine which is more current.',
      'The vocabulary level to decide which passage is harder.',
    ],
    correctIndex: 1,
    explanation:
      'Cross-Text Connection questions ask about the relationship between passages. Identifying whether they agree, contradict, or complement each other is the essential first step—it frames how you interpret the questions that follow.',
    partNumber: 3,
    partTitle: 'Passage Strategy',
  },

  // ── Part 4: Elimination Techniques ───────────────
  {
    id: 'srws-ent-4a',
    question:
      'Which type of answer choice should be eliminated first on SAT Reading questions?',
    options: [
      'Choices that are too short or concise.',
      'Choices that use absolute language ("always," "never," "all") when the passage is nuanced.',
      'Choices that include vocabulary you do not recognize.',
      'Choices that reference ideas mentioned early in the passage.',
    ],
    correctIndex: 1,
    explanation:
      'Absolute language ("always," "never," "all," "none") is a red flag because SAT Reading passages are typically nuanced—they rarely make absolute claims. Meanwhile, unfamiliar vocabulary in an answer choice is not itself a reason to eliminate it.',
    partNumber: 4,
    partTitle: 'Elimination Techniques',
  },
  {
    id: 'srws-ent-4b',
    question:
      'You are down to two answer choices on an SAT Reading question. One is directly supported by a specific phrase in the passage; the other is a reasonable inference. Which should you choose?',
    options: [
      'The reasonable inference, because SAT questions reward deeper thinking.',
      'The directly supported choice, because SAT answers must be grounded in the passage.',
      'The longer choice, because it provides more detail.',
      'Flip a coin—both are equally valid.',
    ],
    correctIndex: 1,
    explanation:
      'SAT Reading questions are designed so that correct answers are always directly supported by the text. "Reasonable" inferences that go beyond what the passage states are attractive distractors. Always select the choice with the strongest textual basis.',
    partNumber: 4,
    partTitle: 'Elimination Techniques',
  },

  // ── Part 5: Time Management ────────────────────────
  {
    id: 'srws-ent-5a',
    question:
      'With 27 R&W questions in 32 minutes per module, approximately how much time does a student have per question?',
    options: [
      'About 45 seconds per question',
      'About 1 minute per question',
      'About 1 minute 10 seconds per question',
      'About 2 minutes per question',
    ],
    correctIndex: 2,
    explanation:
      '32 minutes $\\div$ 27 questions $\\approx$ 1.19 minutes $\\approx$ 1 minute 10 seconds per question. This is tight, so skipping a question and flagging it for review (rather than spending 3+ minutes on one hard item) is a key strategy.',
    partNumber: 5,
    partTitle: 'Time Management',
  },
  {
    id: 'srws-ent-5b',
    question:
      'Which time management strategy is MOST effective when you encounter a very difficult SAT R&W question?',
    options: [
      'Spend as much time as needed—every question is worth the same points.',
      'Skip it immediately and never return.',
      'Make a quick elimination, flag the question, move on, and return if time allows.',
      'Choose option A (the first choice) for any question you cannot solve.',
    ],
    correctIndex: 2,
    explanation:
      'Every question on the SAT is worth the same number of points. Spending too long on one hard question costs you time on easier questions. The optimal strategy is to make a quick best-guess using elimination, flag the question for review, and return to it if time allows.',
    partNumber: 5,
    partTitle: 'Time Management',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'srws-ent-6a',
    question:
      'A student is struggling with "Rhetorical Synthesis" questions that ask her to "introduce a study." Which of the following best describes what an introductory sentence should do?',
    options: [
      'Provide the most detailed summary of all the notes given.',
      'Use the most technical vocabulary from the notes.',
      'Present the study\'s topic and key finding in a way that gives the reader essential context.',
      'Agree with the study\'s conclusion and emphasize it strongly.',
    ],
    correctIndex: 2,
    explanation:
      'An introductory sentence orients the reader by presenting the topic and a key finding—giving context without burying the reader in every detail. Rhetorical Synthesis questions test whether students can match sentence function (introduce, contrast, emphasize) to the stated goal.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'srws-ent-6b',
    question:
      'A "Boundaries" (punctuation) question reads: "Which choice completes the text so that it conforms to the conventions of Standard Written English?" When should you choose a semicolon versus a comma + coordinating conjunction?',
    options: [
      'Use a semicolon when the second clause is shorter.',
      'Use either interchangeably—they are grammatically equivalent.',
      'Use a semicolon between two independent clauses with no coordinating conjunction; use a comma only when followed by a coordinating conjunction (FANBOYS).',
      'Use a comma for formal writing; use a semicolon for informal writing.',
    ],
    correctIndex: 2,
    explanation:
      'The rule is precise: a semicolon alone can join two independent clauses; a comma requires a coordinating conjunction (for, and, nor, but, or, yet, so). A comma alone between two independent clauses is a comma splice—one of the most tested errors on the SAT.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'srws-ent-7a',
    question:
      'Which domain of the SAT R&W section includes questions about transitions, adding/deleting sentences, and revising for conciseness?',
    options: [
      'Standard English Conventions',
      'Craft and Structure',
      'Expression of Ideas',
      'Information and Ideas',
    ],
    correctIndex: 2,
    explanation:
      '"Expression of Ideas" covers rhetorical choices: transitions, relevance, conciseness, organization, and developing ideas. "Standard English Conventions" covers grammar and punctuation. "Craft and Structure" covers vocabulary, text structure, and author\'s purpose. "Information and Ideas" covers comprehension and evidence.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'srws-ent-7b',
    question:
      'What is the most important habit a student should develop to improve SAT R&W performance over time?',
    options: [
      'Memorizing long vocabulary lists of uncommon words.',
      'Reading widely across genres—science articles, literary fiction, history, and opinion—to build reading fluency and contextual vocabulary.',
      'Practicing only the grammar rules, since vocabulary is untestable.',
      'Focusing exclusively on timed practice tests without reviewing mistakes.',
    ],
    correctIndex: 1,
    explanation:
      'Wide reading builds the background knowledge, vocabulary in context, and comprehension speed that the SAT R&W rewards. Reviewing mistakes on practice tests is also essential, but neither vocabulary lists nor grammar drills alone produce the flexible reading skills the SAT demands.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'SAT R&W Overview' },
    { partNumber: 2, partTitle: 'Question Types' },
    { partNumber: 3, partTitle: 'Passage Strategy' },
    { partNumber: 4, partTitle: 'Elimination Techniques' },
    { partNumber: 5, partTitle: 'Time Management' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
