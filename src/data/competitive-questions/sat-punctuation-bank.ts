export interface SatPunctuationQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: SatPunctuationQuestion[] = [
  // ─── EASY ──────────────────────────────────────────────────────────
  {
    id: 1,
    question: 'Which sentence uses commas correctly in a series?',
    options: [
      'She packed shirts, pants, and shoes.',
      'She packed shirts pants, and shoes.',
      'She packed, shirts pants and shoes.',
      'She packed shirts, pants and, shoes.'
    ],
    correctAnswer: 0,
    explanation: 'Items in a series are separated by commas: shirts, pants, and shoes.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which sentence correctly uses a comma after an introductory element?',
    options: [
      'After the game the players celebrated.',
      'After the game, the players celebrated.',
      'After, the game the players celebrated.',
      'After the game the, players celebrated.'
    ],
    correctAnswer: 1,
    explanation: '"After the game" is an introductory prepositional phrase and needs a comma before the main clause.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Choose the correct sentence.',
    options: [
      'The dog barked loudly, and the cat hid under the bed.',
      'The dog barked loudly and, the cat hid under the bed.',
      'The dog barked, loudly and the cat hid under the bed.',
      'The dog, barked loudly and the cat hid under the bed.'
    ],
    correctAnswer: 0,
    explanation: 'Two independent clauses joined by "and" require a comma before the conjunction.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which sentence contains a comma splice?',
    options: [
      'The sun was setting, and the sky turned pink.',
      'The sun was setting; the sky turned pink.',
      'The sun was setting, the sky turned pink.',
      'The sun was setting. The sky turned pink.'
    ],
    correctAnswer: 2,
    explanation: 'A comma splice occurs when two independent clauses are joined by only a comma, without a conjunction.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Which sentence uses a semicolon correctly?',
    options: [
      'I love pizza; it is my favorite food.',
      'I love; pizza it is my favorite food.',
      'I love pizza; and it is my favorite food.',
      'I love pizza it; is my favorite food.'
    ],
    correctAnswer: 0,
    explanation: 'A semicolon correctly joins two related independent clauses without a conjunction.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which sentence correctly uses a colon?',
    options: [
      'She needed: eggs, milk, and flour.',
      'She needed three items: eggs, milk, and flour.',
      'She: needed three items eggs, milk, and flour.',
      'She needed three items eggs: milk, and flour.'
    ],
    correctAnswer: 1,
    explanation: 'A colon must follow a complete sentence. "She needed three items" is independent; "She needed" is not.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Where should the comma go? "However the results were inconclusive."',
    options: [
      'After "However"',
      'After "results"',
      'After "were"',
      'No comma is needed.'
    ],
    correctAnswer: 0,
    explanation: '"However" at the start of a sentence is an introductory word and needs a comma after it.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'Which sentence has CORRECT punctuation?',
    options: [
      'The teacher, explained the lesson clearly.',
      'The teacher explained the lesson clearly.',
      'The teacher explained, the lesson clearly.',
      'The, teacher explained the lesson clearly.'
    ],
    correctAnswer: 1,
    explanation: 'No comma should separate a subject ("the teacher") from its verb ("explained").',
    difficulty: 'easy',
  },
  // ─── MEDIUM ────────────────────────────────────────────────────────
  {
    id: 9,
    question: 'Which sentence correctly punctuates a nonessential clause?',
    options: [
      'The CEO who founded the company retired last year.',
      'The CEO, who founded the company, retired last year.',
      'The CEO, who founded the company retired last year.',
      'The CEO who founded the company, retired last year.'
    ],
    correctAnswer: 1,
    explanation: '"Who founded the company" is nonessential — it adds info but doesn\'t identify which CEO. Nonessential clauses need commas on both sides.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Choose the correctly punctuated version: "The experiment failed ___ the team decided to start over."',
    options: [
      'The experiment failed, the team decided to start over.',
      'The experiment failed; the team decided to start over.',
      'The experiment failed the team decided to start over.',
      'The experiment failed: the team decided to start over.'
    ],
    correctAnswer: 1,
    explanation: 'Two independent clauses without a conjunction must be joined by a semicolon (or period), not a comma.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Which sentence correctly uses a semicolon with a conjunctive adverb?',
    options: [
      'She studied all night, therefore she passed the exam.',
      'She studied all night; therefore, she passed the exam.',
      'She studied all night therefore; she passed the exam.',
      'She studied all night; therefore she passed, the exam.'
    ],
    correctAnswer: 1,
    explanation: 'The pattern is: independent clause + semicolon + conjunctive adverb + comma + independent clause.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'The painting ___ which was completed in 1889 ___ hangs in the Musée d\'Orsay. Choose the correct punctuation for the blanks.',
    options: [
      'No punctuation / no punctuation',
      ', (comma) / , (comma)',
      '; (semicolon) / , (comma)',
      ', (comma) / no punctuation'
    ],
    correctAnswer: 1,
    explanation: '"Which was completed in 1889" is a nonessential clause — it provides extra info. Nonessential clauses require commas on both sides.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Which sentence is punctuated INCORRECTLY?',
    options: [
      'The band played drums, guitars, and keyboards.',
      'After arriving at the venue, the band set up their equipment.',
      'The lead singer, who had a cold performed anyway.',
      'The concert lasted three hours; the audience loved every minute.'
    ],
    correctAnswer: 2,
    explanation: '"Who had a cold" is a nonessential clause and needs commas on BOTH sides. The closing comma after "cold" is missing.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Select the correctly punctuated sentence.',
    options: [
      'The coach told the players, that they needed to improve.',
      'The coach told the players that they needed to improve.',
      'The coach, told the players that they needed to improve.',
      'The coach told, the players that they needed to improve.'
    ],
    correctAnswer: 1,
    explanation: 'No comma should come between a verb ("told") and its object clause ("that they needed to improve"). "That" introduces an essential clause.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'The delegates came from three cities ___ Tokyo, Japan; London, England; and Sydney, Australia. Which punctuation fills the blank?',
    options: [
      ': (colon)',
      '; (semicolon)',
      ', (comma)',
      '— (dash)'
    ],
    correctAnswer: 0,
    explanation: '"The delegates came from three cities" is a complete sentence. A colon introduces the list. The list items use semicolons because they contain internal commas.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'Which version is correct? "She enjoys reading ___ and writing."',
    options: [
      'She enjoys reading, and writing.',
      'She enjoys reading; and writing.',
      'She enjoys reading and writing.',
      'She enjoys reading: and writing.'
    ],
    correctAnswer: 2,
    explanation: 'When only two items are joined by "and," no comma is needed. A comma before "and" only applies to a series of 3+ items or two independent clauses.',
    difficulty: 'medium',
  },
  // ─── HARD ──────────────────────────────────────────────────────────
  {
    id: 17,
    question: 'Although the data suggested a correlation between exercise and mood improvement, Dr. Torres ___ a leading researcher in behavioral psychology ___ cautioned that more studies were needed before drawing definitive conclusions. Choose the correct punctuation for the blanks.',
    options: [
      'No punctuation / no punctuation',
      ', (comma) / , (comma)',
      '; (semicolon) / , (comma)',
      ', (comma) / ; (semicolon)'
    ],
    correctAnswer: 1,
    explanation: '"A leading researcher in behavioral psychology" is a nonessential appositive renaming Dr. Torres. Appositives need commas on both sides.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Which sentence is correctly punctuated throughout?',
    options: [
      'The orchestra, which had been rehearsing for months performed brilliantly; the audience gave a standing ovation.',
      'The orchestra which had been rehearsing for months, performed brilliantly, the audience gave a standing ovation.',
      'The orchestra, which had been rehearsing for months, performed brilliantly; the audience gave a standing ovation.',
      'The orchestra, which had been rehearsing for months, performed brilliantly, the audience gave a standing ovation.'
    ],
    correctAnswer: 2,
    explanation: '"Which had been rehearsing for months" is nonessential (paired commas). The two main clauses are joined by a semicolon. Option D is a comma splice.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'The committee announced its three priorities for the coming year ___ reducing waste by 20 percent ___ expanding community outreach programs ___ and investing in renewable energy infrastructure. Choose the best punctuation.',
    options: [
      ': (colon) / , (comma) / , (comma)',
      ', (comma) / , (comma) / , (comma)',
      ': (colon) / ; (semicolon) / ; (semicolon)',
      '; (semicolon) / , (comma) / , (comma)'
    ],
    correctAnswer: 0,
    explanation: '"The committee announced its three priorities for the coming year" is a complete sentence → colon. The list items don\'t have internal commas, so regular commas separate them.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Many critics praised the novel ___ however ___ others argued that the plot was predictable and the characters lacked depth. Choose the correct punctuation.',
    options: [
      ', however, ',
      '; however, ',
      '; however; ',
      ', however; '
    ],
    correctAnswer: 1,
    explanation: '"However" is a conjunctive adverb connecting two independent clauses. The correct pattern is semicolon + however + comma.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'Select the ONLY sentence that is completely free of punctuation errors.',
    options: [
      'The students, who passed the final exam will graduate in June, and those who did not will attend summer school.',
      'The students who passed the final exam will graduate in June, and those who did not will attend summer school.',
      'The students who passed the final exam, will graduate in June and those who did not will attend summer school.',
      'The students who passed the final exam will graduate in June and those who did not, will attend summer school.'
    ],
    correctAnswer: 1,
    explanation: '"Who passed the final exam" is essential — it tells us WHICH students. No commas around it. "The students who passed...will graduate in June" and "those who did not will attend summer school" are independent clauses joined by "and" → comma before "and."',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'Renaissance artists such as Leonardo da Vinci ___ Michelangelo ___ and Raphael transformed European art ___ their innovations in perspective ___ anatomy ___ and composition influenced generations of painters. Choose the best punctuation for all five blanks.',
    options: [
      ', / , / ; / , / ,',
      ', / , / , / , / ,',
      '; / ; / . / , / ,',
      ', / , / : / , / ,'
    ],
    correctAnswer: 0,
    explanation: 'The first three blanks create a series (commas). A semicolon joins the two independent clauses. The final two blanks are another series (commas).',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'Which option correctly fixes this sentence? "The report concluded that, the new policy would reduce costs, it would also improve efficiency."',
    options: [
      'Remove the comma after "that" and change the comma after "costs" to a semicolon.',
      'Remove the comma after "that" and add "and" after the comma.',
      'Keep the comma after "that" and change the comma after "costs" to a period.',
      'Both A and B would create correct sentences.'
    ],
    correctAnswer: 3,
    explanation: 'The comma after "that" is always wrong (no comma between verb and "that" clause). The comma after "costs" creates a comma splice. Fix A: semicolon between the clauses. Fix B: "and" makes a compound predicate. Both work.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'The museum ___ which opened in 1929 ___ houses works by Picasso, Matisse, and Warhol ___ it also features a sculpture garden ___ however ___ the garden is only open during summer.',
    options: [
      ', / , / ; / ; / ,',
      ', / , / , / ; / ,',
      ', / , / . / , / ,',
      ', / . / ; / ; / ,'
    ],
    correctAnswer: 0,
    explanation: '"Which opened in 1929" is nonessential (paired commas). Semicolon joins the two main clauses. "However" gets semicolon before and comma after.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'The principal explained the new policy to the students ___ it would take effect immediately. Which punctuation correctly fills the blank?',
    options: [
      ', (comma)',
      ': (colon)',
      '; (semicolon)',
      'Both B and C are correct.'
    ],
    correctAnswer: 3,
    explanation: 'Both a colon (introducing an explanation) and a semicolon (joining two independent clauses) work here. The colon emphasizes that the second clause explains the policy; the semicolon simply links two related ideas.',
    difficulty: 'hard',
  },
]

export function getSatPunctuationQuestions(count: number = 10): SatPunctuationQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
