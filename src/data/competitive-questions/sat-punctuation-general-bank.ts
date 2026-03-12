export interface SatPunctuationGeneralQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: SatPunctuationGeneralQuestion[] = [
  // ─── EASY ──────────────────────────────────────────────────────────
  {
    id: 1,
    question: 'Which sentence is a comma splice?',
    options: [
      'The train arrived, and the passengers boarded.',
      'The train arrived, the passengers boarded.',
      'The train arrived; the passengers boarded.',
      'The train arrived. The passengers boarded.'
    ],
    correctAnswer: 1,
    explanation: 'A comma splice joins two independent clauses with only a comma and no conjunction. "The train arrived" and "the passengers boarded" are both independent clauses.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Where does the comma go? "Furthermore the evidence was compelling."',
    options: [
      'After "Furthermore"',
      'After "evidence"',
      'After "the"',
      'No comma is needed.'
    ],
    correctAnswer: 0,
    explanation: '"Furthermore" is an introductory word (conjunctive adverb) at the start of a sentence and needs a comma after it.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Which sentence correctly uses an apostrophe?',
    options: [
      'The dog chased it\'s tail around the yard.',
      'The dogs\' owner called it home.',
      'The dogs bark was very loud.',
      'The dog\'s are playing in the park.'
    ],
    correctAnswer: 1,
    explanation: '"Dogs\'" shows possession by multiple dogs (plural possessive). "It\'s" means "it is" (wrong here). "Dogs bark" needs an apostrophe for possession. "Dog\'s are" misuses the apostrophe (not a contraction or possessive).',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which sentence uses a period correctly to fix a run-on?',
    options: [
      'She finished the book. She started a new one.',
      'She finished the book, she started a new one.',
      'She finished the book she started a new one.',
      'She finished. The book she started a new one.'
    ],
    correctAnswer: 0,
    explanation: 'A period between two independent clauses correctly separates them into individual sentences.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Choose the correct form: "___ coming to the party tonight?"',
    options: [
      'Their',
      'There',
      'They\'re',
      'Theyre'
    ],
    correctAnswer: 2,
    explanation: '"They\'re" = "they are." The sentence means "They are coming to the party tonight." "Their" is possessive, "there" refers to a place.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The museum has, paintings sculptures and photographs.',
      'The museum has paintings, sculptures, and photographs.',
      'The museum has paintings sculptures, and photographs.',
      'The museum, has paintings sculptures and photographs.'
    ],
    correctAnswer: 1,
    explanation: 'Three items in a series need commas between them: paintings, sculptures, and photographs (with Oxford comma before "and").',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Which option correctly uses a semicolon?',
    options: [
      'The weather was beautiful; so we went hiking.',
      'The weather was beautiful; we went hiking.',
      'The weather; was beautiful we went hiking.',
      'The weather was; beautiful we went hiking.'
    ],
    correctAnswer: 1,
    explanation: 'A semicolon joins two independent clauses without a conjunction. Both "The weather was beautiful" and "we went hiking" are complete sentences.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'What does "it\'s" mean?',
    options: [
      'Belonging to it (possessive)',
      'It is / it has (contraction)',
      'Plural of "it"',
      'Past tense of "it"'
    ],
    correctAnswer: 1,
    explanation: '"It\'s" is a contraction meaning "it is" or "it has." The possessive form is "its" (no apostrophe).',
    difficulty: 'easy',
  },
  // ─── MEDIUM ────────────────────────────────────────────────────────
  {
    id: 9,
    question: 'Which sentence correctly uses dashes?',
    options: [
      'The project—which took two years, was finally completed.',
      'The project, which took two years—was finally completed.',
      'The project—which took two years—was finally completed.',
      'The project—which took two years; was finally completed.'
    ],
    correctAnswer: 2,
    explanation: 'Dashes must come in pairs when setting off a nonessential element in the middle of a sentence. You cannot mix a dash with a comma or semicolon.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'Which sentence correctly uses a colon?',
    options: [
      'The ingredients are: flour, sugar, and butter.',
      'She excels at three subjects: math, science, and history.',
      'The store sells: clothing, electronics, and furniture.',
      'They offer: premium and standard plans.'
    ],
    correctAnswer: 1,
    explanation: 'A colon must follow a complete sentence (independent clause). "She excels at three subjects" is complete. "The ingredients are," "The store sells," and "They offer" are all incomplete.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Select the sentence with correct punctuation throughout.',
    options: [
      'The team—exhausted after the match—celebrated its victory.',
      'The team—exhausted after the match—celebrated it\'s victory.',
      'The team, exhausted after the match—celebrated its victory.',
      'The team—exhausted after the match, celebrated its victory.'
    ],
    correctAnswer: 0,
    explanation: 'Dashes match on both sides. "Its" (possessive, no apostrophe) is correct for "the team\'s victory." Options C and D mix dashes with commas.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'The researchers published their findings ___ however ___ the sample size was too small to draw definitive conclusions. Choose the correct punctuation.',
    options: [
      ', however,',
      '; however,',
      '; however;',
      ', however;'
    ],
    correctAnswer: 1,
    explanation: '"However" is a conjunctive adverb connecting two independent clauses. The pattern is: clause + semicolon + however + comma + clause.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Which sentence has correct apostrophe usage?',
    options: [
      'The children\'s playground was newly renovated.',
      'The childrens\' playground was newly renovated.',
      'The childrens playground was newly renovated.',
      'The children playground\'s was newly renovated.'
    ],
    correctAnswer: 0,
    explanation: '"Children" is an irregular plural (not ending in "s"), so the possessive is formed by adding \'s → children\'s.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'Which is correct? "The novel ___ which won the Pulitzer Prize ___ was her third book."',
    options: [
      'no punctuation / no punctuation',
      ', / ,',
      ', / no punctuation',
      '; / ,'
    ],
    correctAnswer: 1,
    explanation: '"Which won the Pulitzer Prize" is a nonrestrictive clause — it provides extra information. Nonrestrictive clauses need commas on both sides.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'Which sentence contains an UNNECESSARY comma?',
    options: [
      'After the lecture, the students asked questions.',
      'The professor explained, that the deadline had been extended.',
      'She packed her bag, locked the door, and left.',
      'The dog, who was very old, slept all day.'
    ],
    correctAnswer: 1,
    explanation: 'A comma should never be placed between a verb ("explained") and a "that" clause ("that the deadline had been extended"). This is a common SAT trap.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'The three capitals we visited were ___ Paris, France ___ London, England ___ and Tokyo, Japan. Fill in the correct punctuation.',
    options: [
      ': / , / ,',
      ': / ; / ;',
      ', / , / ,',
      '; / ; / ;'
    ],
    correctAnswer: 1,
    explanation: 'A colon introduces the list after a complete sentence. The list items contain internal commas (city, country), so semicolons separate the items to avoid confusion.',
    difficulty: 'medium',
  },
  // ─── HARD ──────────────────────────────────────────────────────────
  {
    id: 17,
    question: 'The gallery displayed works by several renowned artists ___ among them Frida Kahlo ___ a Mexican painter known for her self-portraits ___ and Claude Monet ___ a founder of the Impressionist movement. Choose the best punctuation for all four blanks.',
    options: [
      ', / , / , / ,',
      ': / , / , / ,',
      '; / , / , / ,',
      ', / — / — / ,'
    ],
    correctAnswer: 1,
    explanation: '"The gallery displayed works by several renowned artists" is a complete sentence → colon introduces the list. The appositives (describing Kahlo and Monet) are nonessential and set off with commas.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Which sentence is completely free of punctuation errors?',
    options: [
      'The principal—who has served for ten years—announced her retirement, the school board praised her leadership.',
      'The principal who has served for ten years, announced her retirement; the school board praised her leadership.',
      'The principal, who has served for ten years, announced her retirement; the school board praised her leadership.',
      'The principal, who has served for ten years announced her retirement; the school board praised her leadership.'
    ],
    correctAnswer: 2,
    explanation: '"Who has served for ten years" is nonrestrictive → paired commas. The two main clauses are joined by a semicolon. Option A has a comma splice. Option B puts a comma between subject and verb. Option D is missing the closing comma.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'The report concluded that the company\'s __(A)__ profits had declined for three consecutive quarters __(B)__ its __(C)__ board of directors __(D)__ therefore __(E)__ voted to restructure operations. Choose the correct answers for all blanks.',
    options: [
      '(A) company\'s (B) ; (C) its (D) , (E) ,',
      '(A) companies (B) , (C) it\'s (D) , (E) ,',
      '(A) company\'s (B) ; (C) it\'s (D) , (E) ,',
      '(A) companies\' (B) , (C) its (D) ; (E) ,'
    ],
    correctAnswer: 0,
    explanation: '(A) Singular possessive → company\'s. (B) Two independent clauses → semicolon. (C) Possessive "its" (no apostrophe). (D) and (E) "therefore" as a conjunctive adverb within the second clause → commas around it.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Select the ONLY sentence where every punctuation mark is used correctly.',
    options: [
      'The scientist whose research changed the field, published her memoirs—a candid account of her struggles and triumphs.',
      'The scientist, whose research changed the field published her memoirs—a candid account of her struggles and triumphs.',
      'The scientist, whose research changed the field, published her memoirs—a candid account of her struggles and triumphs.',
      'The scientist whose research changed the field published her memoirs, a candid account of her struggles and triumphs.'
    ],
    correctAnswer: 2,
    explanation: '"Whose research changed the field" is nonrestrictive → paired commas. The em dash introduces the emphatic appositive at the end. Option D uses a comma instead of a dash (acceptable but less emphatic), however the "whose" clause is restrictive in D (no commas), which changes the meaning.',
    difficulty: 'hard',
  },
  {
    id: 21,
    question: 'The new regulation—introduced without public comment—affected three industries __(F)__ banking, healthcare, and real estate __(G)__ critics argued that the rule was too broad __(H)__ supporters, however, claimed it was necessary. Choose the correct punctuation for (F), (G), and (H).',
    options: [
      '(F) : (G) . (H) ;',
      '(F) , (G) , (H) ,',
      '(F) : (G) ; (H) ,',
      '(F) : (G) . (H) ,'
    ],
    correctAnswer: 0,
    explanation: '(F) Colon introduces the list after a complete sentence. (G) Period ends the first sentence. (H) Semicolon joins the two independent clauses about critics and supporters.',
    difficulty: 'hard',
  },
  {
    id: 22,
    question: 'Which revision eliminates ALL errors? Original: "The teams captain, who was the youngest player on the roster led them to victory, the fans were ecstatic."',
    options: [
      'The team\'s captain, who was the youngest player on the roster, led them to victory; the fans were ecstatic.',
      'The teams\' captain, who was the youngest player on the roster, led them to victory, the fans were ecstatic.',
      'The team\'s captain who was the youngest player on the roster, led them to victory; the fans were ecstatic.',
      'The team\'s captain, who was the youngest player on the roster, led them to victory, and the fans were ecstatic.'
    ],
    correctAnswer: 0,
    explanation: '"Team\'s" (singular possessive). "Who was the youngest player on the roster" is nonrestrictive → paired commas. Semicolon fixes the comma splice before "the fans." Option D also works grammatically but A is more precise.',
    difficulty: 'hard',
  },
  {
    id: 23,
    question: 'After reviewing the data ___ which spanned ten years ___ the committee reached its conclusion ___ the program should be expanded. Choose the best punctuation.',
    options: [
      ', / , / :',
      ', / , / ;',
      '— / — / :',
      ', / , / ,'
    ],
    correctAnswer: 0,
    explanation: '"Which spanned ten years" is nonrestrictive → paired commas. "The committee reached its conclusion" is a complete sentence → colon introduces the explanation. Option C (dashes) is valid for the nonrestrictive element but changes the style; commas + colon is the clearest answer.',
    difficulty: 'hard',
  },
  {
    id: 24,
    question: 'Whose responsibility is it to ensure that ___ rules are followed?',
    options: [
      'whose / the company\'s',
      'who\'s / the companies',
      'whose / the companies\'',
      'who\'s / the company\'s'
    ],
    correctAnswer: 0,
    explanation: '"Whose" is the possessive (not "who\'s" = "who is"). "The company\'s rules" uses singular possessive correctly.',
    difficulty: 'hard',
  },
  {
    id: 25,
    question: 'The orchestra performed three pieces ___ Beethoven\'s Fifth Symphony, Dvořák\'s New World Symphony, and Tchaikovsky\'s 1812 Overture ___ before the intermission. What punctuation goes in the two blanks?',
    options: [
      ': / no punctuation',
      '— / —',
      ', / ,',
      ': / ,'
    ],
    correctAnswer: 1,
    explanation: 'The list is embedded in the middle of the sentence (not at the end), so a colon doesn\'t work (colons don\'t close). Dashes in pairs set off the list as a nonessential element. Commas would also work but could be confusing since the list items contain commas.',
    difficulty: 'hard',
  },
]

export function getSatPunctuationGeneralQuestions(count: number = 10): SatPunctuationGeneralQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
