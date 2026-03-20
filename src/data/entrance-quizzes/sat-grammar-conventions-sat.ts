/**
 * Entrance Quiz — SAT Grammar Conventions (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // ── Part 1: Subject-Verb Agreement ───────────────
  {
    id: 'sgc-ent-1a',
    question:
      'Which sentence demonstrates correct subject-verb agreement?',
    options: [
      'The committee have reached a decision after hours of debate.',
      'The committee has reached a decision after hours of debate.',
      'The committees has reached a decision after hours of debate.',
      'The committee have been reaching a decision after hours of debate.',
    ],
    correctIndex: 1,
    explanation:
      '"Committee" is a collective noun treated as singular in American English, so it takes a singular verb ("has"). "The committees" (plural) would take "have," but "committee" (singular) requires "has."',
    partNumber: 1,
    partTitle: 'Subject-Verb Agreement',
  },
  {
    id: 'sgc-ent-1b',
    question:
      'Choose the sentence with correct subject-verb agreement when a prepositional phrase separates subject and verb.',
    options: [
      'The results of the experiment was surprising to everyone.',
      'The results of the experiment were surprising to everyone.',
      'The result of the experiments were surprising to everyone.',
      'The results of the experiment is surprising to everyone.',
    ],
    correctIndex: 1,
    explanation:
      'The subject is "results" (plural), not "experiment" (part of the prepositional phrase "of the experiment"). A plural subject requires a plural verb: "were." Crossing out the prepositional phrase helps identify the true subject.',
    partNumber: 1,
    partTitle: 'Subject-Verb Agreement',
  },

  // ── Part 2: Pronoun Agreement ─────────────────────
  {
    id: 'sgc-ent-2a',
    question:
      'Which sentence correctly uses a pronoun that agrees with its antecedent?',
    options: [
      'Each of the students must bring their own pencil.',
      'Each of the students must bring his or her own pencil.',
      'Each of the students must bring our own pencil.',
      'Each of the students must bring its own pencil.',
    ],
    correctIndex: 1,
    explanation:
      '"Each" is an indefinite pronoun that is grammatically singular, so it requires a singular pronoun. "His or her" is the formally correct singular agreement. Note: on the SAT, "their" with singular antecedents is increasingly accepted, but "his or her" remains the safest formal choice.',
    partNumber: 2,
    partTitle: 'Pronoun Agreement',
  },
  {
    id: 'sgc-ent-2b',
    question:
      'Which sentence contains a pronoun-antecedent agreement error?',
    options: [
      'The jury reached their verdict after three days of deliberation.',
      'The dog chased its tail for several minutes.',
      'Neither of the boys remembered their lines.',
      'The team celebrated its championship victory.',
    ],
    correctIndex: 2,
    explanation:
      '"Neither" is an indefinite singular pronoun and should take a singular pronoun: "Neither of the boys remembered his line." Using "their" with "neither" is a common agreement error on the SAT.',
    partNumber: 2,
    partTitle: 'Pronoun Agreement',
  },

  // ── Part 3: Verb Tense ────────────────────────────
  {
    id: 'sgc-ent-3a',
    question:
      'A passage describes historical events in the past tense. Which verb correctly maintains tense consistency?',
    options: [
      'By the time the treaty was signed, the army has already retreated.',
      'By the time the treaty was signed, the army had already retreated.',
      'By the time the treaty was signed, the army retreated already.',
      'By the time the treaty is signed, the army had already retreated.',
    ],
    correctIndex: 1,
    explanation:
      'The past perfect ("had retreated") correctly indicates that the retreat happened before another past event (the signing of the treaty). "By the time [simple past], [past perfect]" is the standard sequence-of-events pattern.',
    partNumber: 3,
    partTitle: 'Verb Tense',
  },
  {
    id: 'sgc-ent-3b',
    question:
      'Which sentence contains a verb tense error?',
    options: [
      'She has lived in New York since 2010.',
      'She lived in New York when she was a child.',
      'She has lived in New York before she moved to Boston.',
      'She had lived in New York for a decade before relocating.',
    ],
    correctIndex: 2,
    explanation:
      'Present perfect ("has lived") implies an action that continues to the present or has present relevance. "Before she moved to Boston" signals a completed sequence in the past, requiring the past perfect: "She had lived in New York before she moved to Boston."',
    partNumber: 3,
    partTitle: 'Verb Tense',
  },

  // ── Part 4: Modifiers ─────────────────────────────
  {
    id: 'sgc-ent-4a',
    question:
      'Which sentence contains a dangling modifier?',
    options: [
      'Running through the park, the dog startled the children.',
      'Running through the park, the children startled the dog.',
      'Having finished the assignment, Maria submitted it online.',
      'Exhausted from the hike, the campers set up their tents.',
    ],
    correctIndex: 0,
    explanation:
      'In option A, "Running through the park" should modify the subject that follows, but it illogically modifies "the dog"—dogs don\'t typically startle children while running. Option B is correct because the children are the ones running through the park.',
    partNumber: 4,
    partTitle: 'Modifiers',
  },
  {
    id: 'sgc-ent-4b',
    question:
      'Which sentence places a modifying clause correctly to avoid ambiguity?',
    options: [
      'I almost drove my car to the store every day last week.',
      'I drove my car to the store almost every day last week.',
      'I drove almost my car to the store every day last week.',
      'Almost I drove my car to the store every day last week.',
    ],
    correctIndex: 1,
    explanation:
      '"Almost" should be placed immediately before the word it modifies: "almost every day." Placing it before "drove" (option A) implies the speaker nearly drove but didn\'t, which changes the meaning. Option B is the only one that places "almost" correctly.',
    partNumber: 4,
    partTitle: 'Modifiers',
  },

  // ── Part 5: Parallel Structure ────────────────────
  {
    id: 'sgc-ent-5a',
    question:
      'Which sentence correctly uses parallel structure?',
    options: [
      'The candidate promised to lower taxes, creating jobs, and that she would improve education.',
      'The candidate promised to lower taxes, create jobs, and improve education.',
      'The candidate promised lowering taxes, to create jobs, and improving education.',
      'The candidate promised she would lower taxes, creation of jobs, and improve education.',
    ],
    correctIndex: 1,
    explanation:
      'Parallel structure requires that items in a series use the same grammatical form. In option B, all three items are infinitive phrases: "to lower," "create," and "improve" (the "to" is understood for the second and third). The other options mix forms inconsistently.',
    partNumber: 5,
    partTitle: 'Parallel Structure',
  },
  {
    id: 'sgc-ent-5b',
    question:
      'Which sentence is NOT parallel in structure?',
    options: [
      'She enjoys hiking, swimming, and cycling.',
      'The essay was thoughtful, well-organized, and had good evidence.',
      'He works quickly, carefully, and efficiently.',
      'The study was thorough, objective, and peer-reviewed.',
    ],
    correctIndex: 1,
    explanation:
      'Option B mixes adjectives ("thoughtful," "well-organized") with a verb phrase ("had good evidence"). The parallel version would be: "thoughtful, well-organized, and well-evidenced." The other options maintain consistent grammatical form throughout their series.',
    partNumber: 5,
    partTitle: 'Parallel Structure',
  },

  // ── Part 6: Problem-Solving Workshop ─────────────
  {
    id: 'sgc-ent-6a',
    question:
      'A sentence reads: "Neither the principal nor the teachers was prepared for the announcement." What is the error, and how should it be corrected?',
    options: [
      'No error; the sentence is correct.',
      'Change "was" to "were" because "teachers" (the noun closer to the verb) is plural.',
      'Change "nor" to "or" because only "or" can connect plural nouns.',
      'Change "the principal" to "the principals" to make both subjects plural.',
    ],
    correctIndex: 1,
    explanation:
      'With "neither…nor" constructions, the verb agrees with the subject closest to it. "Teachers" is plural, so the verb should be "were," not "was." This rule is called proximity agreement or the "nearest subject" rule.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'sgc-ent-6b',
    question:
      'Which revision correctly fixes all grammar errors in: "Everyone on the team did their best but the coach knew that some players needed to improve their techniques"?',
    options: [
      'Everyone on the team did their best, but the coach knew that some players needed to improve their techniques.',
      'Everyone on the team did his or her best, but the coach knew that some players needed to improve his or her techniques.',
      'Everyone on the team did his or her best, but the coach knew that some players needed to improve their techniques.',
      'Everyone on the team did their best; but the coach knew that some players needed to improve their techniques.',
    ],
    correctIndex: 2,
    explanation:
      '"Everyone" is singular, so "his or her best" is the formally correct pronoun. However, "some players" is plural, so "their techniques" is correct for that clause. Option C makes both choices correctly. Option D incorrectly places a semicolon before "but."',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // ── Part 7: Review & Applications ────────────────
  {
    id: 'sgc-ent-7a',
    question:
      'An SAT sentence reads: "The data suggests that climate change are accelerating faster than previously predicted." How many grammar errors does this sentence contain?',
    options: [
      'Zero — the sentence is correct.',
      'One — "suggests" should be "suggest" because "data" is plural.',
      'Two — "suggests" should be "suggest" and "are" should be "is."',
      'One — "are" should be "is" because "climate change" is a singular concept.',
    ],
    correctIndex: 2,
    explanation:
      '"Data" is the plural of "datum," so it takes a plural verb: "suggest." Additionally, the subordinate clause says "climate change are accelerating"—"climate change" is singular, so "is" is correct. There are two agreement errors: "suggests→suggest" and "are→is."',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
  {
    id: 'sgc-ent-7b',
    question:
      'Which sentence is grammatically correct in all respects?',
    options: [
      'Having studied hard, the exam seemed easy to Maria.',
      'Having studied hard, Maria found the exam easy.',
      'Maria, having studied hard, the exam seemed easy.',
      'The exam seemed easy to Maria, having studied hard.',
    ],
    correctIndex: 1,
    explanation:
      'Option B correctly places the participle phrase "Having studied hard" next to its subject "Maria." In the other options, the participial phrase dangles or is misplaced—in A and D, it seems to modify "the exam," which cannot study.',
    partNumber: 7,
    partTitle: 'Review & Applications',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Subject-Verb Agreement' },
    { partNumber: 2, partTitle: 'Pronoun Agreement' },
    { partNumber: 3, partTitle: 'Verb Tense' },
    { partNumber: 4, partTitle: 'Modifiers' },
    { partNumber: 5, partTitle: 'Parallel Structure' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' },
  ]
}
