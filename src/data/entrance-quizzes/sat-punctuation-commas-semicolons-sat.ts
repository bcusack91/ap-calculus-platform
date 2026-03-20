/**
 * Entrance Quiz — SAT Commas & Semicolons (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Comma Rules ───────────────────────────
  {
    id: 'spcs-ent-1a',
    question:
      'Which sentence correctly uses a comma before a coordinating conjunction?',
    options: [
      'She wanted to leave early, but the meeting ran long.',
      'She wanted to leave early but, the meeting ran long.',
      'She wanted to leave, early but the meeting ran long.',
      'She wanted to leave early but the, meeting ran long.',
    ],
    correctIndex: 0,
    explanation:
      'A comma is placed before a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) when it joins two independent clauses. "She wanted to leave early" and "the meeting ran long" are both independent clauses, so a comma before "but" is correct.',
    partNumber: 1,
    partTitle: 'Comma Rules',
  },
  {
    id: 'spcs-ent-1b',
    question:
      'Which sentence INCORRECTLY uses a comma with a subordinating conjunction?',
    options: [
      'Because it rained heavily, the game was postponed.',
      'The game was postponed, because it rained heavily.',
      'After the storm passed, the players returned to the field.',
      'Although she was tired, she finished the assignment.',
    ],
    correctIndex: 1,
    explanation:
      'When a subordinate clause comes AFTER the main clause, a comma is generally not used before the subordinating conjunction. "The game was postponed because it rained heavily" should have no comma. Options A, C, and D correctly use a comma after an introductory subordinate clause.',
    partNumber: 1,
    partTitle: 'Comma Rules',
  },

  // ── Part 2: Comma Splices ─────────────────────────
  {
    id: 'spcs-ent-2a',
    question:
      'Which sentence contains a comma splice?',
    options: [
      'I finished my homework, and then I watched television.',
      'I finished my homework; then I watched television.',
      'I finished my homework, then I watched television.',
      'After finishing my homework, I watched television.',
    ],
    correctIndex: 2,
    explanation:
      'A comma splice occurs when two independent clauses are joined with only a comma. "I finished my homework" and "then I watched television" are both independent clauses—joining them with just a comma is incorrect. Options A, B, and D all fix this correctly.',
    partNumber: 2,
    partTitle: 'Comma Splices',
  },
  {
    id: 'spcs-ent-2b',
    question:
      'Which option correctly repairs the comma splice: "The report was due Monday, the team did not finish it in time"?',
    options: [
      'The report was due Monday and, the team did not finish it in time.',
      'The report was due Monday; the team did not finish it in time.',
      'The report was due Monday, but, the team did not finish it in time.',
      'The report was due Monday, the team, did not finish it in time.',
    ],
    correctIndex: 1,
    explanation:
      'The most direct fix for a comma splice is to replace the comma with a semicolon, which correctly joins two closely related independent clauses. Option B does this correctly.',
    partNumber: 2,
    partTitle: 'Comma Splices',
  },

  // ── Part 3: Semicolons ────────────────────────────
  {
    id: 'spcs-ent-3a',
    question:
      'When is it correct to use a semicolon?',
    options: [
      'Before a list introduced by a verb such as "include."',
      'To join a dependent clause to an independent clause.',
      'Between two independent clauses that are closely related in meaning.',
      'After an introductory phrase at the start of a sentence.',
    ],
    correctIndex: 2,
    explanation:
      'A semicolon\'s primary role is to join two independent clauses that are closely related without using a coordinating conjunction. It cannot join a dependent clause to an independent clause, and it is not used after introductory phrases.',
    partNumber: 3,
    partTitle: 'Semicolons',
  },
  {
    id: 'spcs-ent-3b',
    question:
      'Which sentence uses a semicolon INCORRECTLY?',
    options: [
      'She loves hiking; he prefers cycling.',
      'The conference will cover three topics; climate change, renewable energy, and policy reform.',
      'Marcus stayed late; consequently, he missed the bus.',
      'The lab results were inconclusive; the researchers ordered additional tests.',
    ],
    correctIndex: 1,
    explanation:
      'In option B, the semicolon is used before a list that follows the word "topics." A colon (not a semicolon) should introduce a list after a complete clause: "The conference will cover three topics: climate change, renewable energy, and policy reform."',
    partNumber: 3,
    partTitle: 'Semicolons',
  },

  // ── Part 4: Independent Clauses ──────────────────
  {
    id: 'spcs-ent-4a',
    question:
      'Which of the following is an independent clause?',
    options: [
      'Although the research was promising',
      'Because scientists discovered a new compound',
      'Which had been studied for decades',
      'The experiment yielded surprising results',
    ],
    correctIndex: 3,
    explanation:
      'An independent clause has a subject and a verb and expresses a complete thought. "The experiment yielded surprising results" can stand alone as a sentence. The other options are dependent (subordinate) clauses that cannot stand alone.',
    partNumber: 4,
    partTitle: 'Independent Clauses',
  },
  {
    id: 'spcs-ent-4b',
    question:
      'Which sentence correctly joins two independent clauses?',
    options: [
      'The storm intensified, it knocked out power across the city.',
      'The storm intensified it knocked out power across the city.',
      'The storm intensified; it knocked out power across the city.',
      'The storm intensified, and, it knocked out power across the city.',
    ],
    correctIndex: 2,
    explanation:
      'A semicolon correctly joins two independent clauses. Option A is a comma splice, Option B is a run-on, and Option D incorrectly places a comma after the coordinating conjunction "and."',
    partNumber: 4,
    partTitle: 'Independent Clauses',
  },

  // ── Part 5: Lists & Series ────────────────────────
  {
    id: 'spcs-ent-5a',
    question:
      'Which sentence correctly punctuates a series using semicolons?',
    options: [
      'The team included researchers from Austin, Texas, Boston, Massachusetts, and Portland, Oregon.',
      'The team included researchers from Austin, Texas; Boston, Massachusetts; and Portland, Oregon.',
      'The team included researchers from Austin; Texas; Boston; Massachusetts; and Portland; Oregon.',
      'The team included researchers from Austin Texas, Boston Massachusetts, and Portland Oregon.',
    ],
    correctIndex: 1,
    explanation:
      'When items in a list themselves contain commas (city, state), semicolons should be used between items to prevent confusion. Option B is the only one that correctly uses semicolons between the city-state pairs.',
    partNumber: 5,
    partTitle: 'Lists & Series',
  },
  {
    id: 'spcs-ent-5b',
    question:
      'Which sentence uses commas correctly in a simple three-item series?',
    options: [
      'The recipe calls for sugar salt and flour.',
      'The recipe calls for sugar, salt and flour.',
      'The recipe calls for sugar, salt, and flour.',
      'The recipe calls for, sugar, salt, and flour.',
    ],
    correctIndex: 2,
    explanation:
      'In a simple series, commas separate each item. Option C includes the Oxford (serial) comma before "and," which is standard in formal writing and on the SAT. Option A has no commas; B omits the serial comma; D incorrectly places a comma after "for."',
    partNumber: 5,
    partTitle: 'Lists & Series',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'spcs-ent-6a',
    question:
      'A student writes: "I enjoy reading novels especially historical fiction however I rarely have time to finish them." Which revision is most correct?',
    options: [
      '"I enjoy reading novels, especially historical fiction; however, I rarely have time to finish them."',
      '"I enjoy reading novels especially historical fiction, however I rarely have time to finish them."',
      '"I enjoy reading novels; especially historical fiction; however, I rarely have time to finish them."',
      '"I enjoy reading novels especially historical fiction however; I rarely have time to finish them."',
    ],
    correctIndex: 0,
    explanation:
      '"Especially historical fiction" is a nonrestrictive phrase and should be set off with a comma. A semicolon then correctly joins the two independent clauses before "however," and a comma follows "however." Only option A places all punctuation correctly.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'spcs-ent-6b',
    question:
      'Which sentence demonstrates the BEST use of both a comma and a semicolon?',
    options: [
      'After years of research, the cure was announced; it was hailed as a breakthrough.',
      'After years of research the cure was announced; it was hailed, as a breakthrough.',
      'After years of research, the cure was announced, it was hailed as a breakthrough.',
      'After years of research; the cure was announced, it was hailed as a breakthrough.',
    ],
    correctIndex: 0,
    explanation:
      'Option A correctly uses a comma after the introductory adverbial phrase "After years of research" and a semicolon to join two related independent clauses. The other options misplace the comma, create a comma splice, or use a semicolon after an introductory phrase.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'spcs-ent-7a',
    question:
      'On the SAT, you see the sentence: "The architect designed the bridge with two goals in mind safety and efficiency." Which revision is correct?',
    options: [
      '"The architect designed the bridge with two goals in mind, safety and efficiency."',
      '"The architect designed the bridge with two goals in mind: safety and efficiency."',
      '"The architect designed the bridge with two goals in mind; safety and efficiency."',
      '"The architect designed the bridge with two goals in mind safety, and efficiency."',
    ],
    correctIndex: 1,
    explanation:
      '"Two goals in mind" is a complete clause that introduces a list; a colon is the correct punctuation to introduce the listed items. A semicolon in option C would be wrong because what follows ("safety and efficiency") is not an independent clause.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'spcs-ent-7b',
    question:
      'Which general rule about commas and semicolons is TRUE?',
    options: [
      'A semicolon can always replace a comma in any sentence.',
      'A comma can join two independent clauses without a coordinating conjunction.',
      'A semicolon joins two independent clauses; a comma does so only with a coordinating conjunction.',
      'Commas and semicolons are interchangeable when the sentence is long.',
    ],
    correctIndex: 2,
    explanation:
      'This is the core rule: a semicolon alone can join two independent clauses; a comma requires a coordinating conjunction (FANBOYS) to do the same job. A comma alone between two independent clauses is a comma splice.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Comma Rules' },
    { partNumber: 2, partTitle: 'Comma Splices' },
    { partNumber: 3, partTitle: 'Semicolons' },
    { partNumber: 4, partTitle: 'Independent Clauses' },
    { partNumber: 5, partTitle: 'Lists & Series' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
