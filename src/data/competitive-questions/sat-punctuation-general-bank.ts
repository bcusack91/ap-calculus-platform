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
  // ─── EASY (added) ──────────────────────────────────────────────────
  {
    id: 26,
    question: 'Choose the correct word: "The ___ collar was too tight," referring to one dog.',
    options: [
      'dogs',
      'dogs\'',
      'dog\'s',
      'dogss'
    ],
    correctAnswer: 2,
    explanation: 'For a single dog, the singular possessive adds apostrophe + s: dog\'s.',
    difficulty: 'easy',
  },
  {
    id: 27,
    question: 'Choose the correct word: "The company increased ___ profits."',
    options: [
      'it\'s',
      'its',
      'its\'',
      'it is'
    ],
    correctAnswer: 1,
    explanation: 'The possessive "its" has no apostrophe; "it\'s" means "it is."',
    difficulty: 'easy',
  },
  {
    id: 28,
    question: 'Choose the correct word: "___ going to love the new park."',
    options: [
      'Their',
      'There',
      'Theyre',
      'They\'re'
    ],
    correctAnswer: 3,
    explanation: '"They\'re" is the contraction of "they are."',
    difficulty: 'easy',
  },
  {
    id: 29,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'What time does the movie start?',
      'What time does the movie start.',
      'What time does the movie start!',
      'What time does the movie start'
    ],
    correctAnswer: 0,
    explanation: 'A direct question ends with a question mark.',
    difficulty: 'easy',
  },
  {
    id: 30,
    question: 'Which sentence is punctuated correctly?',
    options: [
      '"Let\'s go" she said.',
      '"Let\'s go", she said.',
      '"Let\'s go," she said.',
      '"Let\'s go she said."'
    ],
    correctAnswer: 2,
    explanation: 'The comma that separates the quotation from the tag goes inside the closing quotation mark.',
    difficulty: 'easy',
  },
  {
    id: 31,
    question: 'Choose the correct word: "The ___ toys were scattered," referring to toys belonging to several children.',
    options: [
      'children\'s',
      'childrens\'',
      'childrens',
      'children'
    ],
    correctAnswer: 0,
    explanation: '"Children" is an irregular plural, so the possessive adds apostrophe + s: children\'s.',
    difficulty: 'easy',
  },
  {
    id: 32,
    question: 'Which sentence uses a colon correctly?',
    options: [
      'He had one wish: to travel the world.',
      'He had: one wish to travel the world.',
      'He had one: wish to travel the world.',
      'He: had one wish to travel the world.'
    ],
    correctAnswer: 0,
    explanation: 'A colon follows a complete clause ("He had one wish") to introduce an explanation.',
    difficulty: 'easy',
  },
  {
    id: 33,
    question: 'Choose the correct word: "___ going to need a jacket."',
    options: [
      'Your',
      'Youre',
      'You\'re',
      'Yours'
    ],
    correctAnswer: 2,
    explanation: '"You\'re" is the contraction of "you are"; "your" is possessive.',
    difficulty: 'easy',
  },
  {
    id: 34,
    question: 'Which sentence uses a dash correctly?',
    options: [
      'I finally found—it my missing key.',
      'I—finally found it my missing key.',
      'I finally found it my—missing key.',
      'I finally found it—my missing key.'
    ],
    correctAnswer: 3,
    explanation: 'A dash sets off the added detail "my missing key" from the complete clause before it.',
    difficulty: 'easy',
  },
  {
    id: 35,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The apples were on sale.',
      'The apple\'s were on sale.',
      'The apples\' were on sale.',
      'The apples\'s were on sale.'
    ],
    correctAnswer: 0,
    explanation: 'A simple plural takes no apostrophe; "apples" is correct.',
    difficulty: 'easy',
  },
  {
    id: 36,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'She asked, "Are you ready"?',
      'She asked, "Are you ready?"',
      'She asked "Are you ready?".',
      'She asked, Are you ready?'
    ],
    correctAnswer: 1,
    explanation: 'The quoted words form a question, so the question mark belongs inside the quotation marks, and a comma introduces the quote.',
    difficulty: 'easy',
  },
  {
    id: 37,
    question: 'Choose the correct possessive: "This is ___ book," referring to James.',
    options: [
      'James\'s',
      'Jame\'s',
      'Jamess',
      'Jams\''
    ],
    correctAnswer: 0,
    explanation: 'The singular possessive of James is James\'s.',
    difficulty: 'easy',
  },
  {
    id: 38,
    question: 'Choose the correct word: "___ car is parked outside?"',
    options: [
      'Whose',
      'Who\'s',
      'Whos',
      'Whose\'s'
    ],
    correctAnswer: 0,
    explanation: '"Whose" is the possessive; "who\'s" means "who is."',
    difficulty: 'easy',
  },
  {
    id: 39,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'My favorite colors are red, blue, and green.',
      'My favorite colors are: red, blue, and green.',
      'My favorite: colors are red, blue, and green.',
      'My favorite colors: are red, blue, and green.'
    ],
    correctAnswer: 0,
    explanation: 'A colon cannot follow "are" because "My favorite colors are" is not a complete sentence; no colon is needed.',
    difficulty: 'easy',
  },
  // ─── MEDIUM (added) ────────────────────────────────────────────────
  {
    id: 40,
    question: 'Which sentence uses dashes correctly?',
    options: [
      'The device—small but powerful—fit in her pocket.',
      'The device—small but powerful, fit in her pocket.',
      'The device, small but powerful—fit in her pocket.',
      'The device—small but powerful; fit in her pocket.'
    ],
    correctAnswer: 0,
    explanation: 'Dashes must come in pairs when setting off a nonessential element; mixing a dash with a comma or semicolon is incorrect.',
    difficulty: 'medium',
  },
  {
    id: 41,
    question: 'Choose the correct word: "The ___ locker room was renovated," referring to the room used by the players.',
    options: [
      'player\'s',
      'players',
      'players\'',
      'players\'s'
    ],
    correctAnswer: 2,
    explanation: 'The room belongs to multiple players, so the plural possessive "players\'" (apostrophe after the s) is correct.',
    difficulty: 'medium',
  },
  {
    id: 42,
    question: 'Which sentence uses a colon correctly?',
    options: [
      'The workshop covered three topics: budgeting, saving, and investing.',
      'The workshop covered: budgeting, saving, and investing.',
      'The workshop: covered three topics budgeting, saving, and investing.',
      'The workshop covered three topics; budgeting, saving, and investing.'
    ],
    correctAnswer: 0,
    explanation: 'A colon must follow a complete clause. "The workshop covered three topics" is complete; "The workshop covered" is not.',
    difficulty: 'medium',
  },
  {
    id: 43,
    question: 'Which sentence is correct?',
    options: [
      'Its clear that the plan has it\'s flaws.',
      'It\'s clear that the plan has it\'s flaws.',
      'Its clear that the plan has its flaws.',
      'It\'s clear that the plan has its flaws.'
    ],
    correctAnswer: 3,
    explanation: '"It\'s" means "it is," and "its" is the possessive. The sentence needs "It\'s" at the start and "its" before "flaws."',
    difficulty: 'medium',
  },
  {
    id: 44,
    question: 'Which sentence is punctuated correctly?',
    options: [
      '"I think," he said, "that we should wait."',
      '"I think" he said "that we should wait."',
      '"I think," he said "that we should wait."',
      '"I think" he said, "that we should wait."'
    ],
    correctAnswer: 0,
    explanation: 'When a dialogue tag interrupts a quotation, commas set off the tag and stay inside the quotation marks.',
    difficulty: 'medium',
  },
  {
    id: 45,
    question: 'Which sentence uses a colon correctly?',
    options: [
      'The kit contained the following items: bandages, tape, and scissors.',
      'The kit contained the following items; bandages, tape, and scissors.',
      'The kit contained the following items, bandages, tape, and scissors.',
      'The kit contained the following items bandages, tape, and scissors.'
    ],
    correctAnswer: 0,
    explanation: 'A colon follows the complete clause "The kit contained the following items" to introduce the list.',
    difficulty: 'medium',
  },
  {
    id: 46,
    question: 'Choose the correct word: "The ___ decisions affected everyone," referring to the decisions of two managers.',
    options: [
      'manager\'s',
      'managers\'',
      'managers',
      'managers\'s'
    ],
    correctAnswer: 1,
    explanation: 'The decisions belong to two managers, so the plural possessive "managers\'" is correct.',
    difficulty: 'medium',
  },
  {
    id: 47,
    question: 'Which sentence is punctuated correctly?',
    options: [
      '"Watch out!" she shouted.',
      '"Watch out"! she shouted.',
      '"Watch out!," she shouted.',
      '"Watch out" she shouted!'
    ],
    correctAnswer: 0,
    explanation: 'The exclamation point belongs to the quoted words, so it stays inside the quotation marks, and no comma is added after it.',
    difficulty: 'medium',
  },
  {
    id: 48,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'He brought only one thing,—his guitar.',
      'He brought only one thing—his guitar,.',
      'He brought—only one thing his guitar.',
      'He brought only one thing—his guitar.'
    ],
    correctAnswer: 3,
    explanation: 'A single dash sets off the end appositive "his guitar" after the complete clause; it should not be paired with a comma.',
    difficulty: 'medium',
  },
  {
    id: 49,
    question: 'Which sentence is correct?',
    options: [
      'The city is proud of its new library.',
      'The city is proud of it\'s new library.',
      'The city is proud of its\' new library.',
      'The city is proud of their new library.'
    ],
    correctAnswer: 0,
    explanation: 'Possessive "its" (no apostrophe) is correct, and the singular subject "city" takes "its," not "their."',
    difficulty: 'medium',
  },
  {
    id: 50,
    question: 'Which sentence is punctuated correctly?',
    options: [
      '"It\'s the children\'s turn," the coach announced.',
      '"Its the childrens\' turn," the coach announced.',
      '"It\'s the childrens turn" the coach announced.',
      '"Its the children\'s turn", the coach announced.'
    ],
    correctAnswer: 0,
    explanation: '"It\'s" means "it is," "children\'s" is the correct possessive, and the comma before the tag stays inside the quotation marks.',
    difficulty: 'medium',
  },
  {
    id: 51,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Her explanation—clear and thorough—satisfied everyone.',
      'Her explanation—clear and thorough, satisfied everyone.',
      'Her explanation, clear and thorough—satisfied everyone.',
      'Her explanation—clear and thorough; satisfied everyone.'
    ],
    correctAnswer: 0,
    explanation: 'A pair of dashes sets off the interrupting phrase; mixing a dash with a comma or semicolon is incorrect.',
    difficulty: 'medium',
  },
  {
    id: 52,
    question: 'Choose the correct word: "The ___ team won the championship," referring to a team of women.',
    options: [
      'womens\'',
      'womens',
      'women\'s',
      'woman\'s'
    ],
    correctAnswer: 2,
    explanation: '"Women" is an irregular plural, so the possessive adds apostrophe + s: women\'s.',
    difficulty: 'medium',
  },
  {
    id: 53,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'I wonder whether the store is open.',
      'I wonder whether the store is open?',
      'I wonder whether the store is open!',
      'I wonder whether the store is open,'
    ],
    correctAnswer: 0,
    explanation: 'An indirect question is a statement and ends with a period, not a question mark.',
    difficulty: 'medium',
  },
  // ─── HARD (added) ──────────────────────────────────────────────────
  {
    id: 54,
    question: 'Which revision corrects every error in "The teams mascot, a bulldog, energized the crowd its antics delighted fans of all ages"?',
    options: [
      'The team\'s mascot, a bulldog, energized the crowd; its antics delighted fans of all ages.',
      'The teams\' mascot, a bulldog, energized the crowd; it\'s antics delighted fans of all ages.',
      'The team\'s mascot a bulldog energized the crowd, its antics delighted fans of all ages.',
      'The team\'s mascot, a bulldog energized the crowd; its antics delighted fans of all ages.'
    ],
    correctAnswer: 0,
    explanation: '"Team\'s" is the singular possessive, the appositive "a bulldog" takes paired commas, a semicolon fixes the run-on, and "its" is the correct possessive.',
    difficulty: 'hard',
  },
  {
    id: 55,
    question: 'Which sentence is punctuated correctly?',
    options: [
      '"Success" the coach said "comes from discipline and it\'s constant practice."',
      '"Success," the coach said, "comes from discipline and its constant practice."',
      '"Success," the coach said "comes from discipline and its constant practice."',
      '"Success", the coach said, "comes from discipline and its constant practice."'
    ],
    correctAnswer: 1,
    explanation: 'Commas set off the interrupting tag and stay inside the quotation marks, and "its" is the correct possessive.',
    difficulty: 'hard',
  },
  {
    id: 56,
    question: 'Choose the correct answers for the blanks. "The ___(A) lecture ran long ___(B) nevertheless ___(C) the students stayed ___(D) they were fascinated by ___(E) implications."',
    options: [
      '(A) professor\'s (B) ; (C) , (D) ; (E) its',
      '(A) professors (B) , (C) , (D) ; (E) it\'s',
      '(A) professor\'s (B) ; (C) , (D) , (E) its',
      '(A) professors\' (B) ; (C) , (D) ; (E) it\'s'
    ],
    correctAnswer: 0,
    explanation: 'Singular possessive "professor\'s"; a semicolon precedes and a comma follows "nevertheless"; a semicolon joins the last two independent clauses; and "its" is the correct possessive.',
    difficulty: 'hard',
  },
  {
    id: 57,
    question: 'Choose the correct answers for the blanks. "The ___(A) new headquarters ___(B) which cost millions to build ___(C) opened last spring ___(D) its ___(E) celebrated the move."',
    options: [
      '(A) companys (B) , (C) , (D) , (E) employees',
      '(A) company\'s (B) , (C) , (D) ; (E) employee\'s',
      '(A) company\'s (B) , (C) , (D) ; (E) employees',
      '(A) company\'s (B) ; (C) ; (D) ; (E) employees'
    ],
    correctAnswer: 2,
    explanation: 'Singular possessive "company\'s"; the nonessential clause takes paired commas; a semicolon joins the two independent clauses; and "employees" (plural, no apostrophe) is the subject.',
    difficulty: 'hard',
  },
  {
    id: 58,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'My sister\'s apartment—small but cozy—overlooks the park; it\'s her favorite feature.',
      'My sisters apartment—small but cozy—overlooks the park; its her favorite feature.',
      'My sister\'s apartment, small but cozy—overlooks the park; it\'s her favorite feature.',
      'My sister\'s apartment—small but cozy—overlooks the park, it\'s her favorite feature.'
    ],
    correctAnswer: 0,
    explanation: '"Sister\'s" is possessive, the dashes are paired, a semicolon joins the two independent clauses, and "it\'s" correctly means "it is."',
    difficulty: 'hard',
  },
  {
    id: 59,
    question: 'Which revision is punctuated correctly? Original: "The witnesss account—detailed and consistent, helped the jury reach it\'s verdict."',
    options: [
      'The witnesss account—detailed and consistent—helped the jury reach its verdict.',
      'The witness\'s account—detailed and consistent—helped the jury reach its verdict.',
      'The witness\'s account, detailed and consistent—helped the jury reach it\'s verdict.',
      'The witness\'s account—detailed and consistent—helped the jury reach it\'s verdict.'
    ],
    correctAnswer: 1,
    explanation: '"Witness\'s" is the correct singular possessive, paired dashes set off the interrupting phrase, and "its" is the possessive (not "it\'s").',
    difficulty: 'hard',
  },
  {
    id: 60,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Did she really say, "I quit"?',
      'Did she really say, "I quit?"',
      'Did she really say "I quit"?',
      'Did she really say, "I quit."?'
    ],
    correctAnswer: 0,
    explanation: 'The quoted words form a statement, so the question mark for the whole sentence goes outside the quotation marks; a comma introduces the quotation.',
    difficulty: 'hard',
  },
  {
    id: 61,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'Charles Dickens\' novels remain popular, and his reader\'s devotion endures.',
      'Charles Dickens novels remain popular, and his readers\' devotion endures.',
      'Charles Dickens\'s novels remain popular, and his readers\' devotion endures.',
      'Charles Dickens\'s novels remain popular, and his readers devotion endures.'
    ],
    correctAnswer: 2,
    explanation: '"Dickens\'s" is the singular possessive and "readers\'" is the plural possessive for the devotion of many readers.',
    difficulty: 'hard',
  },
  {
    id: 62,
    question: 'Which sentence contains no punctuation error?',
    options: [
      'After the storm passed, we surveyed the damage: fallen trees, flooded roads, and downed power lines.',
      'After the storm passed we surveyed the damage: fallen trees, flooded roads, and downed power lines.',
      'After the storm passed, we surveyed the damage; fallen trees, flooded roads, and downed power lines.',
      'After the storm passed, we surveyed the damage, fallen trees, flooded roads, and downed power lines.'
    ],
    correctAnswer: 0,
    explanation: 'The introductory clause takes a comma, and a colon (not a semicolon or comma) introduces the list after the complete clause "we surveyed the damage."',
    difficulty: 'hard',
  },
  {
    id: 63,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The ingredients, flour, sugar, and eggs, were measured carefully.',
      'The ingredients: flour, sugar, and eggs: were measured carefully.',
      'The ingredients—flour, sugar, and eggs, were measured carefully.',
      'The ingredients—flour, sugar, and eggs—were measured carefully.'
    ],
    correctAnswer: 3,
    explanation: 'Because the interrupting list already contains commas, paired dashes must set it off; commas would blur with the series and a colon cannot close the interruption.',
    difficulty: 'hard',
  },
  {
    id: 64,
    question: 'Choose the correct punctuation for the four blanks. "The author\'s memoir ___(A) which took years to write ___(B) finally reached bookstores ___(C) readers praised ___(D) unflinching honesty."',
    options: [
      '(A) , (B) , (C) ; (D) its',
      '(A) , (B) , (C) , (D) its',
      '(A) , (B) , (C) ; (D) it\'s',
      '(A) ; (B) ; (C) ; (D) its'
    ],
    correctAnswer: 0,
    explanation: 'The nonessential clause "which took years to write" takes paired commas, a semicolon joins the two independent clauses, and "its" is the correct possessive before "unflinching honesty."',
    difficulty: 'hard',
  },
  {
    id: 65,
    question: 'Which sentence is punctuated correctly?',
    options: [
      'The teachers advice was memorable: "Never stop asking questions."',
      'The teacher\'s advice was memorable, "Never stop asking questions."',
      'The teacher\'s advice was memorable: "Never stop asking questions."',
      'The teacher\'s advice was memorable; "Never stop asking questions."'
    ],
    correctAnswer: 2,
    explanation: '"Teacher\'s" is the possessive, and a colon correctly follows the complete clause to introduce the quotation.',
    difficulty: 'hard',
  },
  {
    id: 66,
    question: 'Which revision produces a fully correct sentence? Original: "Its been a long journey the explorers—exhausted but triumphant reached the summit, they planted their flag."',
    options: [
      'It\'s been a long journey; the explorers—exhausted but triumphant—reached the summit, and they planted their flag.',
      'Its been a long journey; the explorers—exhausted but triumphant—reached the summit, and they planted their flag.',
      'It\'s been a long journey, the explorers—exhausted but triumphant—reached the summit, and they planted their flag.',
      'It\'s been a long journey; the explorers, exhausted but triumphant—reached the summit and they planted their flag.'
    ],
    correctAnswer: 0,
    explanation: '"It\'s" means "it has," a semicolon separates the two main statements, paired dashes set off the interrupting phrase, and a comma before "and" joins the two independent clauses.',
    difficulty: 'hard',
  },
]

export function getSatPunctuationGeneralQuestions(count: number = 10): SatPunctuationGeneralQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
