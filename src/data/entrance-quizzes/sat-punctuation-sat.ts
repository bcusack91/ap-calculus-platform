/**
 * Entrance Quiz — SAT Punctuation (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Comma Usage ───────────────────────────
  {
    id: 'spu-ent-1a',
    question:
      'Which sentence uses commas correctly?\nA. "My sister, who lives in Boston, is a doctor."\nB. "My sister who lives in Boston, is a doctor."\nC. "My sister, who lives in Boston is a doctor."\nD. "My, sister who lives in Boston is a doctor."',
    options: [
      '"My sister, who lives in Boston, is a doctor."',
      '"My sister who lives in Boston, is a doctor."',
      '"My sister, who lives in Boston is a doctor."',
      '"My, sister who lives in Boston is a doctor."',
    ],
    correctIndex: 0,
    explanation:
      '"Who lives in Boston" is a nonrestrictive (nonessential) clause because it adds extra information—we already know which sister is being discussed. Nonrestrictive clauses must be set off with commas on both sides.',
    partNumber: 1,
    partTitle: 'Comma Usage',
  },
  {
    id: 'spu-ent-1b',
    question:
      'Which sentence correctly omits the Oxford comma in a context where ambiguity results?\n(Identify the sentence with a comma error that creates ambiguity.)',
    options: [
      '"I want to thank my parents, Oprah Winfrey, and God."',
      '"I want to thank my parents, Oprah Winfrey and God."',
      '"I want to thank my parents, Oprah Winfrey, and, God."',
      '"I want to thank my parents Oprah Winfrey and God."',
    ],
    correctIndex: 1,
    explanation:
      'Omitting the Oxford comma before "and God" creates ambiguity—it could be read as saying the speaker\'s parents are Oprah Winfrey and God. Option B demonstrates how omitting the serial comma can introduce confusion.',
    partNumber: 1,
    partTitle: 'Comma Usage',
  },

  // ── Part 2: Semicolons & Colons ───────────────────
  {
    id: 'spu-ent-2a',
    question:
      'Which sentence uses a semicolon correctly?',
    options: [
      'She studied all night; however she still felt unprepared.',
      'She studied all night; however, she still felt unprepared.',
      'She studied all night, however; she still felt unprepared.',
      'She studied all night however; she still felt unprepared.',
    ],
    correctIndex: 1,
    explanation:
      'When a conjunctive adverb like "however" connects two independent clauses, the correct pattern is: [clause]; however, [clause]. The semicolon comes before "however" and a comma follows it.',
    partNumber: 2,
    partTitle: 'Semicolons & Colons',
  },
  {
    id: 'spu-ent-2b',
    question:
      'Which sentence uses a colon correctly?',
    options: [
      'The recipe requires: flour, eggs, and butter.',
      'The ingredients are: flour, eggs, and butter.',
      'You will need three things: flour, eggs, and butter.',
      'You will need: flour, eggs, and butter.',
    ],
    correctIndex: 2,
    explanation:
      'A colon should be preceded by a complete independent clause. "You will need three things" is a complete clause, making option C correct. Options A, B, and D place a colon after a verb or incomplete construction, which is incorrect.',
    partNumber: 2,
    partTitle: 'Semicolons & Colons',
  },

  // ── Part 3: Apostrophes ───────────────────────────
  {
    id: 'spu-ent-3a',
    question:
      'Which sentence correctly uses an apostrophe?',
    options: [
      "The student's essays were graded by two professors'.",
      "The students essays were graded by two professor's.",
      "The students' essays were graded by two professors.",
      "The student's essays' were graded by two professors.",
    ],
    correctIndex: 2,
    explanation:
      '"Students\'" is the plural possessive (multiple students own the essays), so the apostrophe follows the s. "Professors" needs no apostrophe because it is simply a plural noun, not a possessive.',
    partNumber: 3,
    partTitle: 'Apostrophes',
  },
  {
    id: 'spu-ent-3b',
    question:
      'Which sentence correctly distinguishes between "its" and "it\'s"?',
    options: [
      "The dog wagged it's tail after it's owner returned.",
      "The dog wagged its tail after its owner returned.",
      "The dog wagged its' tail after its' owner returned.",
      "The dog wagged it's tail after its owner returned.",
    ],
    correctIndex: 1,
    explanation:
      '"Its" (no apostrophe) is the possessive pronoun; "it\'s" (with apostrophe) is the contraction of "it is." Both instances here are possessive, so neither should have an apostrophe.',
    partNumber: 3,
    partTitle: 'Apostrophes',
  },

  // ── Part 4: Dashes & Parentheses ─────────────────
  {
    id: 'spu-ent-4a',
    question:
      'Which sentence correctly uses an em dash?',
    options: [
      'The scientist—who had spent forty years in the field—published her findings at last.',
      'The scientist—who had spent forty years in the field, published her findings at last.',
      'The scientist, who had spent forty years in the field—published her findings at last.',
      'The scientist—who had spent forty years in the field published her findings at last.',
    ],
    correctIndex: 0,
    explanation:
      'Em dashes used as parenthetical insertions must come in pairs, one on each side of the interrupting phrase—just like parentheses. Option A correctly places an em dash both before and after the nonessential clause.',
    partNumber: 4,
    partTitle: 'Dashes & Parentheses',
  },
  {
    id: 'spu-ent-4b',
    question:
      'Which sentence uses parentheses appropriately on the SAT?',
    options: [
      'The Great Wall of China (is not, as is commonly claimed, visible from space).',
      'The Great Wall of China is not (as is commonly claimed) visible from space.',
      'The Great Wall (of China) is not visible from space.',
      'The Great Wall of China is not visible from space (a well-known fact).',
    ],
    correctIndex: 1,
    explanation:
      'Parentheses should enclose supplementary, nonessential information that fits grammatically into the sentence when removed. Option B uses parentheses correctly to set off "as is commonly claimed" without disrupting the main clause.',
    partNumber: 4,
    partTitle: 'Dashes & Parentheses',
  },

  // ── Part 5: End Punctuation ───────────────────────
  {
    id: 'spu-ent-5a',
    question:
      'A sentence ends with a quoted question. Which punctuation is correct?',
    options: [
      'She asked, "Are you coming?".',
      'She asked, "Are you coming?"',
      'She asked, "Are you coming"?',
      'She asked, "Are you coming?."',
    ],
    correctIndex: 1,
    explanation:
      'When a quoted sentence ends with a question mark, the question mark goes inside the closing quotation mark and serves as the end punctuation for the entire sentence—no additional period is needed outside the quotes.',
    partNumber: 5,
    partTitle: 'End Punctuation',
  },
  {
    id: 'spu-ent-5b',
    question:
      'Which sentence is punctuated correctly at its end?',
    options: [
      'He wondered whether the train had left already?',
      'He wondered whether the train had left already.',
      'He wondered whether the train had left already!',
      'He wondered, "whether the train had left already."',
    ],
    correctIndex: 1,
    explanation:
      '"He wondered whether the train had left already" is an indirect question (the wondering is stated, but no direct question is quoted), so it ends with a period, not a question mark.',
    partNumber: 5,
    partTitle: 'End Punctuation',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'spu-ent-6a',
    question:
      'Choose the punctuation option that makes the following sentence correct: "Three cities __ Paris, Rome, and Athens __ were on the tour itinerary."',
    options: [
      'commas: "Three cities, Paris, Rome, and Athens, were on the tour itinerary."',
      'em dashes: "Three cities—Paris, Rome, and Athens—were on the tour itinerary."',
      'colons: "Three cities: Paris, Rome, and Athens: were on the tour itinerary."',
      'semicolons: "Three cities; Paris, Rome, and Athens; were on the tour itinerary."',
    ],
    correctIndex: 1,
    explanation:
      'Because the list itself contains commas, using commas as the enclosing punctuation would be confusing. Em dashes are the correct choice to set off an internally punctuated appositive list, making the sentence clear.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'spu-ent-6b',
    question:
      'Which version of the sentence is correctly punctuated throughout?',
    options: [
      "It's the teams' responsibility to submit it's report by Friday's deadline.",
      "Its the team's responsibility to submit its report by Friday's deadline.",
      "It's the team's responsibility to submit its report by Friday's deadline.",
      "It's the teams responsibility to submit its report by Fridays deadline.",
    ],
    correctIndex: 2,
    explanation:
      '"It\'s" = contraction of "it is" (correct here). "team\'s" = singular possessive. "its" = possessive pronoun (no apostrophe). "Friday\'s" = singular possessive. All four are correctly handled only in option C.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'spu-ent-7a',
    question:
      'On the SAT Writing section, when should you choose NO CHANGE for a punctuation question?',
    options: [
      'Always pick NO CHANGE to save time.',
      'When the original punctuation correctly joins or separates sentence elements without error.',
      'When the sentence seems too long and a period would shorten it.',
      'When all other answer choices use unfamiliar punctuation marks.',
    ],
    correctIndex: 1,
    explanation:
      'NO CHANGE is correct when the existing punctuation accurately reflects the grammatical relationship between sentence elements. Always verify that the original is error-free before selecting it.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'spu-ent-7b',
    question:
      'A sentence reads: "The new policy affects all employees however managers will receive additional guidance." Which punctuation correctly fixes this sentence?',
    options: [
      '"The new policy affects all employees, however, managers will receive additional guidance."',
      '"The new policy affects all employees; however, managers will receive additional guidance."',
      '"The new policy affects all employees however; managers will receive additional guidance."',
      '"The new policy affects all employees; however managers will receive additional guidance."',
    ],
    correctIndex: 1,
    explanation:
      'Two independent clauses joined by the conjunctive adverb "however" require a semicolon before "however" and a comma after it: [IC]; however, [IC]. Option B is the only choice with both marks correctly placed.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Comma Usage' },
    { partNumber: 2, partTitle: 'Semicolons & Colons' },
    { partNumber: 3, partTitle: 'Apostrophes' },
    { partNumber: 4, partTitle: 'Dashes & Parentheses' },
    { partNumber: 5, partTitle: 'End Punctuation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
