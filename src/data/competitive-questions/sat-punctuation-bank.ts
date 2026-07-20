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
  // ─── EASY (added) ──────────────────────────────────────────────────
  {
    id: 26,
    question: 'Which sentence uses commas correctly in a series?',
    options: [
      'We bought apples oranges, and pears.',
      'We bought apples, oranges, and pears.',
      'We bought, apples oranges and pears.',
      'We bought apples, oranges and, pears.'
    ],
    correctAnswer: 1,
    explanation: 'Items in a series are separated by commas: apples, oranges, and pears.',
    difficulty: 'easy',
  },
  {
    id: 27,
    question: 'Which sentence is a comma splice?',
    options: [
      'It rained all day, so we stayed inside.',
      'It rained all day; we stayed inside.',
      'It rained all day, we stayed inside.',
      'It rained all day. We stayed inside.'
    ],
    correctAnswer: 2,
    explanation: 'Joining two independent clauses with only a comma and no conjunction ("It rained all day, we stayed inside") is a comma splice.',
    difficulty: 'easy',
  },
  {
    id: 28,
    question: 'Which sentence correctly places a comma after an introductory phrase?',
    options: [
      'In the morning, we went jogging.',
      'In the morning we, went jogging.',
      'In, the morning we went jogging.',
      'In the morning we went, jogging.'
    ],
    correctAnswer: 0,
    explanation: 'An introductory phrase ("In the morning") is followed by a comma before the main clause.',
    difficulty: 'easy',
  },
  {
    id: 29,
    question: 'Which sentence uses a semicolon correctly?',
    options: [
      'The results; were clear the treatment worked.',
      'The results were clear; but the treatment worked.',
      'The results were, clear; the treatment worked.',
      'The results were clear; the treatment worked.'
    ],
    correctAnswer: 3,
    explanation: 'A semicolon joins two related independent clauses with no conjunction: "The results were clear; the treatment worked."',
    difficulty: 'easy',
  },
  {
    id: 30,
    question: 'Choose the correctly punctuated sentence.',
    options: [
      'The rain stopped, and the sun came out.',
      'The rain stopped and, the sun came out.',
      'The rain, stopped and the sun came out.',
      'The rain stopped, and, the sun came out.'
    ],
    correctAnswer: 0,
    explanation: 'Two independent clauses joined by "and" take a comma before the conjunction.',
    difficulty: 'easy',
  },
  {
    id: 31,
    question: 'Which is the best correction of the comma splice "The movie was long, we enjoyed it"?',
    options: [
      'The movie was long we enjoyed it.',
      'The movie was long, but we enjoyed it.',
      'The movie was, long we enjoyed it.',
      'The movie was long we, enjoyed it.'
    ],
    correctAnswer: 1,
    explanation: 'Adding the conjunction "but" after the comma correctly joins the two independent clauses.',
    difficulty: 'easy',
  },
  {
    id: 32,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'He plays soccer and basketball.',
      'He plays soccer, and basketball.',
      'He plays, soccer and basketball.',
      'He plays soccer and, basketball.'
    ],
    correctAnswer: 0,
    explanation: 'When "and" joins only two items, no comma is needed before it.',
    difficulty: 'easy',
  },
  {
    id: 33,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Because it was late, we went home.',
      'Because it was late we went home.',
      'Because, it was late we went home.',
      'Because it was late we, went home.'
    ],
    correctAnswer: 0,
    explanation: 'An introductory dependent clause ("Because it was late") is followed by a comma.',
    difficulty: 'easy',
  },
  {
    id: 34,
    question: 'Which choice correctly punctuates two independent clauses joined without a conjunction?',
    options: [
      'The store was closed, we went home.',
      'The store was closed; we went home.',
      'The store was closed we went home.',
      'The store, was closed we went home.'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon joins two independent clauses that are not connected by a conjunction; the comma version is a splice.',
    difficulty: 'easy',
  },
  {
    id: 35,
    question: 'Which sentence contains a comma splice?',
    options: [
      'The dog barked, the mail carrier left.',
      'The dog barked, and the mail carrier left.',
      'The dog barked; the mail carrier left.',
      'The dog barked. The mail carrier left.'
    ],
    correctAnswer: 0,
    explanation: 'Two independent clauses joined by only a comma form a comma splice.',
    difficulty: 'easy',
  },
  {
    id: 36,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'I need pens, paper, and glue.',
      'I need pens paper and glue.',
      'I need pens, paper and, glue.',
      'I, need pens paper and glue.'
    ],
    correctAnswer: 0,
    explanation: 'Three items in a series are separated by commas: pens, paper, and glue.',
    difficulty: 'easy',
  },
  {
    id: 37,
    question: 'Which sentence uses a comma correctly?',
    options: [
      'Yes, I will attend the meeting.',
      'Yes I will, attend the meeting.',
      'Yes I will attend, the meeting.',
      'Yes I, will attend the meeting.'
    ],
    correctAnswer: 0,
    explanation: 'The introductory word "Yes" is set off from the rest of the sentence by a comma.',
    difficulty: 'easy',
  },
  {
    id: 38,
    question: 'Choose the correctly punctuated sentence.',
    options: [
      'She cooked dinner, and he washed the dishes.',
      'She cooked dinner and he washed, the dishes.',
      'She cooked, dinner and he washed the dishes.',
      'She cooked dinner and, he washed the dishes.'
    ],
    correctAnswer: 0,
    explanation: 'Two independent clauses joined by "and" take a comma before the conjunction.',
    difficulty: 'easy',
  },
  {
    id: 39,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'I was exhausted; I had run a marathon.',
      'I was exhausted; because I had run a marathon.',
      'I was; exhausted I had run a marathon.',
      'I was exhausted, I had run a marathon.'
    ],
    correctAnswer: 0,
    explanation: 'A semicolon joins two independent clauses. "Because I had run a marathon" is dependent, and the comma version is a splice.',
    difficulty: 'easy',
  },
  // ─── MEDIUM (added) ────────────────────────────────────────────────
  {
    id: 40,
    question: 'Which sentence correctly uses a semicolon with "moreover"?',
    options: [
      'The plan was risky; moreover, it was expensive.',
      'The plan was risky, moreover, it was expensive.',
      'The plan was risky moreover; it was expensive.',
      'The plan was risky; moreover it was expensive.'
    ],
    correctAnswer: 0,
    explanation: 'A conjunctive adverb linking two independent clauses takes a semicolon before it and a comma after it.',
    difficulty: 'medium',
  },
  {
    id: 41,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'My oldest brother, who lives in Denver, is a doctor.',
      'My oldest brother who lives in Denver, is a doctor.',
      'My oldest brother, who lives in Denver is a doctor.',
      'My oldest brother who lives, in Denver is a doctor.'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential clause "who lives in Denver" needs commas on both sides.',
    difficulty: 'medium',
  },
  {
    id: 42,
    question: 'Which sentence is INCORRECT because it is a comma splice?',
    options: [
      'The experiment succeeded; therefore, we published the results.',
      'The experiment succeeded, therefore, we published the results.',
      'The experiment succeeded. Therefore, we published the results.',
      'The experiment succeeded, so we published the results.'
    ],
    correctAnswer: 1,
    explanation: 'A comma before "therefore" joining two independent clauses creates a comma splice; a semicolon or period is required.',
    difficulty: 'medium',
  },
  {
    id: 43,
    question: 'Which sentence uses a colon correctly?',
    options: [
      'She had one goal: to win the championship.',
      'She had one goal; to win the championship.',
      'She had one goal to win the championship.',
      'She had one, goal to win the championship.'
    ],
    correctAnswer: 0,
    explanation: 'A colon follows a complete clause to introduce an explanation. "To win the championship" is not independent, so a semicolon is wrong.',
    difficulty: 'medium',
  },
  {
    id: 44,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The tour visited Rome, Italy, Athens, Greece, and Cairo, Egypt.',
      'The tour visited Rome, Italy: Athens, Greece: and Cairo, Egypt.',
      'The tour visited Rome, Italy; Athens, Greece; and Cairo, Egypt.',
      'The tour visited Rome Italy, Athens Greece, and Cairo Egypt.'
    ],
    correctAnswer: 2,
    explanation: 'When list items contain internal commas (city, country), semicolons separate the items to prevent confusion.',
    difficulty: 'medium',
  },
  {
    id: 45,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The book that I borrowed is overdue.',
      'The book, that I borrowed, is overdue.',
      'The book that I borrowed, is overdue.',
      'The book, that I borrowed is overdue.'
    ],
    correctAnswer: 0,
    explanation: 'A restrictive "that" clause is essential to the meaning and takes no commas.',
    difficulty: 'medium',
  },
  {
    id: 46,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'He studied hard, and passed the test.',
      'He studied, hard and passed the test.',
      'He studied hard and, passed the test.',
      'He studied hard and passed the test.'
    ],
    correctAnswer: 3,
    explanation: '"Passed the test" shares the subject "he" (a compound predicate), so no comma goes before "and."',
    difficulty: 'medium',
  },
  {
    id: 47,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The forecast was grim; heavy snow was expected all week.',
      'The forecast was grim, heavy snow was expected all week.',
      'The forecast was grim heavy snow was expected all week.',
      'The forecast, was grim heavy snow was expected all week.'
    ],
    correctAnswer: 0,
    explanation: 'A semicolon joins the two independent clauses; the comma version is a splice and the third is a run-on.',
    difficulty: 'medium',
  },
  {
    id: 48,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'My neighbor, a retired teacher, tutors kids for free.',
      'My neighbor a retired teacher, tutors kids for free.',
      'My neighbor, a retired teacher tutors kids for free.',
      'My neighbor a retired teacher tutors kids for free.'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential appositive "a retired teacher" needs commas on both sides.',
    difficulty: 'medium',
  },
  {
    id: 49,
    question: 'Which sentence is punctuated INCORRECTLY?',
    options: [
      'When the bell rang, the students left.',
      'The students left when the bell rang.',
      'When the bell rang the students left.',
      'After lunch, we returned to class.'
    ],
    correctAnswer: 2,
    explanation: 'An introductory dependent clause ("When the bell rang") must be followed by a comma; that comma is missing.',
    difficulty: 'medium',
  },
  {
    id: 50,
    question: 'Which sentence uses commas correctly?',
    options: [
      'For the trip we need tickets, passports, and luggage.',
      'For the trip we need tickets, passports and, luggage.',
      'For the trip, we need tickets passports, and luggage.',
      'For the trip we need, tickets passports and luggage.'
    ],
    correctAnswer: 0,
    explanation: 'The three series items are separated by commas: tickets, passports, and luggage.',
    difficulty: 'medium',
  },
  {
    id: 51,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Three cities hosted the games, they were spread across three continents.',
      'Three cities hosted the games; they were spread across three continents.',
      'Three cities hosted the games they were spread across three continents.',
      'Three, cities hosted the games they were spread across three continents.'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon joins the two independent clauses; the comma version is a splice and the third is a run-on.',
    difficulty: 'medium',
  },
  {
    id: 52,
    question: 'Which sentence correctly uses a comma before "and"?',
    options: [
      'The chef prepared the meal, and the waiter served it.',
      'The chef prepared the meal, and served it.',
      'The chef, prepared the meal and served it.',
      'The chef prepared, the meal and served it.'
    ],
    correctAnswer: 0,
    explanation: 'A comma before "and" is correct when it joins two independent clauses; "and served it" would be only a compound predicate.',
    difficulty: 'medium',
  },
  {
    id: 53,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'We were late, consequently we missed the opening.',
      'We were late consequently; we missed the opening.',
      'We were late; consequently, we missed the opening.',
      'We were, late consequently we missed the opening.'
    ],
    correctAnswer: 2,
    explanation: 'The conjunctive adverb "consequently" takes a semicolon before it and a comma after it.',
    difficulty: 'medium',
  },
  // ─── HARD (added) ──────────────────────────────────────────────────
  {
    id: 54,
    question: 'Choose the correct punctuation for the three blanks. "The committee reviewed the proposal ___ which had taken months to prepare ___ and approved it unanimously ___ the chair praised the team\'s effort."',
    options: [
      ', / , / ;',
      ', / , / ,',
      '; / , / ;',
      ', / ; / ;'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential clause "which had taken months to prepare" takes paired commas; a semicolon then joins the two independent clauses before "the chair praised."',
    difficulty: 'hard',
  },
  {
    id: 55,
    question: 'Which revision correctly fixes the comma splice "The road was icy, the driver slowed down"?',
    options: [
      'The road was icy the driver slowed down.',
      'The road was icy, so the driver slowed down.',
      'The road was icy, and, the driver slowed down.',
      'The road, was icy the driver slowed down.'
    ],
    correctAnswer: 1,
    explanation: 'Adding the conjunction "so" after the comma correctly joins the two independent clauses.',
    difficulty: 'hard',
  },
  {
    id: 56,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The finalists were Ana, a violinist; Ben, a pianist; and Cara, a cellist.',
      'The finalists were Ana, a violinist, Ben, a pianist, and Cara, a cellist.',
      'The finalists were Ana a violinist; Ben a pianist; and Cara a cellist.',
      'The finalists were: Ana, a violinist, Ben, a pianist, and Cara, a cellist.'
    ],
    correctAnswer: 0,
    explanation: 'Because each item contains an internal comma, semicolons separate the items in the series.',
    difficulty: 'hard',
  },
  {
    id: 57,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Although she was tired she finished the race, and she set a personal record.',
      'Although she was tired, she finished the race, she set a personal record.',
      'Although she was tired, she finished the race, and she set a personal record.',
      'Although she was tired, she finished the race and, she set a personal record.'
    ],
    correctAnswer: 2,
    explanation: 'The introductory clause takes a comma, and the two independent clauses joined by "and" also take a comma before the conjunction.',
    difficulty: 'hard',
  },
  {
    id: 58,
    question: 'Choose the correct punctuation for the blanks. "The budget was approved ___ nevertheless ___ several members voiced concerns."',
    options: [
      '; nevertheless,',
      ', nevertheless,',
      '; nevertheless;',
      ', nevertheless;'
    ],
    correctAnswer: 0,
    explanation: '"Nevertheless" joins two independent clauses, so it takes a semicolon before it and a comma after it.',
    difficulty: 'hard',
  },
  {
    id: 59,
    question: 'Choose the correct punctuation for the blanks. "The recipe calls for three dry ingredients ___ flour ___ sugar ___ and salt."',
    options: [
      ': / , / ,',
      ', / , / ,',
      ': / ; / ;',
      '; / , / ,'
    ],
    correctAnswer: 0,
    explanation: '"Three dry ingredients" is a complete clause, so a colon introduces the list; the items have no internal commas, so commas separate them.',
    difficulty: 'hard',
  },
  {
    id: 60,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'I wanted to help, however, I had no time.',
      'I wanted to help; however, I had no time.',
      'I wanted to help however; I had no time.',
      'I wanted to help, however I had no time.'
    ],
    correctAnswer: 1,
    explanation: 'The conjunctive adverb "however" between two independent clauses takes a semicolon before and a comma after; the comma-only versions are splices.',
    difficulty: 'hard',
  },
  {
    id: 61,
    question: 'Which sentence contains no punctuation error?',
    options: [
      'The scientists, who had worked for years, celebrated; their discovery changed the field.',
      'The scientists who had worked for years celebrated, their discovery changed the field.',
      'The scientists, who had worked for years celebrated; their discovery changed the field.',
      'The scientists who had worked for years, celebrated their discovery changed the field.'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential clause takes paired commas, and a semicolon joins the two independent clauses.',
    difficulty: 'hard',
  },
  {
    id: 62,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Some critics loved the film, others found it dull.',
      'Some critics loved the film others found it dull.',
      'Some critics loved, the film others found it dull.',
      'Some critics loved the film; others found it dull.'
    ],
    correctAnswer: 3,
    explanation: 'A semicolon joins the two contrasting independent clauses; the comma version is a splice and the second is a run-on.',
    difficulty: 'hard',
  },
  {
    id: 63,
    question: 'Choose the correct punctuation for the five blanks. "The author ___ whose debut novel won several awards ___ published three books ___ a memoir ___ a thriller ___ and a poetry collection."',
    options: [
      ', / , / : / , / ,',
      ', / , / , / , / ,',
      '; / ; / : / , / ,',
      ', / , / ; / , / ,'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential clause takes paired commas; "published three books" is a complete clause, so a colon introduces the list, whose items are separated by commas.',
    difficulty: 'hard',
  },
  {
    id: 64,
    question: 'Which revision corrects both errors in "Because the flight was delayed we missed our connection, the airline offered vouchers"?',
    options: [
      'Because the flight was delayed, we missed our connection; the airline offered vouchers.',
      'Because the flight was delayed we missed our connection; the airline offered vouchers.',
      'Because the flight was delayed, we missed our connection, the airline offered vouchers.',
      'Because the flight was delayed; we missed our connection, the airline offered vouchers.'
    ],
    correctAnswer: 0,
    explanation: 'The introductory clause needs a comma after "delayed," and the comma splice before "the airline" must become a semicolon.',
    difficulty: 'hard',
  },
  {
    id: 65,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The manager, who oversees hiring reviewed the applications, scheduled interviews, and selected three candidates.',
      'The manager who oversees hiring, reviewed the applications, scheduled interviews, and selected three candidates.',
      'The manager who oversees hiring reviewed the applications, scheduled interviews, and selected three candidates.',
      'The manager who oversees hiring reviewed the applications scheduled interviews and selected three candidates.'
    ],
    correctAnswer: 2,
    explanation: 'The essential clause "who oversees hiring" takes no commas, and the three verb phrases form a series separated by commas.',
    difficulty: 'hard',
  },
  {
    id: 66,
    question: 'Choose the correct punctuation for the three blanks. "The novelist spent a decade on the manuscript ___ revising it dozens of times ___ when it was finally published ___ it became an instant bestseller."',
    options: [
      ', / ; / ,',
      ', / , / ,',
      '; / ; / ,',
      ', / ; / ;'
    ],
    correctAnswer: 0,
    explanation: 'A comma sets off the participial phrase "revising it dozens of times"; a semicolon joins the two independent clauses; and a comma follows the introductory clause "when it was finally published."',
    difficulty: 'hard',
  },
]

export function getSatPunctuationQuestions(count: number = 10): SatPunctuationQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
