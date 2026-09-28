export const satPunctuationPart7Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p7-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 7 of 7 — Review & Final Challenge**

You've covered every major punctuation concept the SAT tests. Let's do a comprehensive review and push your skills with challenging, test-day-level questions.

### Complete SAT Punctuation Cheat Sheet

| Mark | Rule | Example |
|---|---|---|
| **Comma (,)** | Series of 3+ items | *eggs, milk, and bread* |
| **Comma (,)** | After introductory element | *After the game, we celebrated.* |
| **Comma (,)** | Before FANBOYS (two independent clauses) | *She ran, and he cheered.* |
| **Comma (,) pair** | Nonessential element | *The CEO, who retired, was honored.* |
| **Semicolon (;)** | Two independent clauses (no conjunction) | *She ran; he cheered.* |
| **Semicolon (;)** | Before conjunctive adverb | *She ran; however, he stayed.* |
| **Colon (:)** | After complete sentence → list/explanation | *She packed three items: hat, coat, gloves.* |
| **Dash (—) pair** | Nonessential element (emphatic) | *The team—exhausted—kept going.* |
| **Apostrophe (')** | Possession | *the student's book, the students' books* |
| **Apostrophe (')** | Contraction | *it's = it is, who's = who is* |
| **NO punctuation** | Subject–verb, verb–object, before "that" | *The team won. She said that...* |
      `
    },
    {
      id: 'sat-p7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Identify the punctuation error: "The company, which was founded in 2010 has expanded to twelve countries, and it plans to enter three more markets by next year."',
            options: [
              'The comma after "company" should be removed.',
              'A comma is missing after "2010."',
              'The comma before "and" should be removed.',
              'A semicolon should replace the comma before "and."'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Which was founded in 2010" is a nonrestrictive clause. It has a comma before it ("company,") but is missing the closing comma after "2010." Nonrestrictive elements need commas on BOTH sides.'
          },
          {
            question: 'Which sentence uses ALL punctuation correctly?',
            options: [
              'The researchers who conducted the study, concluded that the drug was effective; however their findings were met with skepticism.',
              'The researchers, who conducted the study concluded that the drug was effective, however, their findings were met with skepticism.',
              'The researchers who conducted the study concluded that the drug was effective; however, their findings were met with skepticism.',
              'The researchers who conducted the study concluded, that the drug was effective; however, their findings were met with skepticism.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Who conducted the study" is restrictive (tells us WHICH researchers) → no commas. No comma between "concluded" and "that." Semicolon before "however" and comma after it.'
          }
        ]
      }
    },
    {
      id: 'sat-p7-detail1',
      type: 'text' as const,
      content: `
### Top 10 SAT Punctuation Traps

1. **Comma splice** — Joining two independent clauses with just a comma
2. **Missing second comma** — Opening a nonrestrictive element but forgetting to close it
3. **Comma before "that"** — "That" clauses are essential → no comma
4. **Subject–verb comma** — Never separate subject from verb with one comma
5. **Mixing marks** — Starting with a dash but closing with a comma (or vice versa)
6. **Semicolon after a fragment** — Both sides of a semicolon must be independent clauses
7. **Colon after an incomplete sentence** — "The colors are:" → WRONG
8. **It's vs. its** — "It's" = "it is." "Its" = possessive.
9. **Comma before conjunction without two clauses** — "She danced, and sang" → no comma needed
10. **Confusing conjunctive adverbs with conjunctions** — "However" needs a semicolon, not a comma
      `
    },
    {
      id: 'sat-p7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Challenge** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The city council—facing mounting pressure from residents—voted to approve the new _____ however, expressed reservations about its impact on the annual budget. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              'park, the mayor,',
              'park; the mayor,',
              'park the mayor,',
              'park: the mayor,'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The city council… voted to approve the new park" and "the mayor, however, expressed reservations" are two independent clauses, so a semicolon goes before "the mayor." "However" sits inside the second clause and is set off with commas. A comma alone creates a comma splice, no punctuation fuses the clauses, and a colon would present the mayor\'s view as an explanation of the vote.'
          },
          {
            question: 'Dr. Vasquez, a professor of marine biology, has studied coral reef ecosystems in three _____ Caribbean, the South Pacific, and the Indian Ocean. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: [
              'regions: the',
              'regions, the',
              'regions; the',
              'regions the'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "Dr. Vasquez… has studied coral reef ecosystems in three regions" is a complete sentence, so a colon can introduce the list that names the regions. A semicolon needs an independent clause on both sides, a comma makes the list look like more items in a series, and no punctuation runs the list into the sentence.'
          },
          {
            question: 'Which version is completely error-free?',
            options: [
              'The students\' whose projects were selected, will present their findings at the conference; which begins on Monday.',
              'The students whose projects were selected will present their findings at the conference, which begins on Monday.',
              'The students whose projects were selected, will present their findings at the conference which begins on Monday.',
              'The students\', whose projects were selected will present their findings at the conference, which begins on Monday.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Whose projects were selected" is restrictive (identifies which students) → no commas. No comma between subject and verb. "Which begins on Monday" is nonrestrictive → comma before "which."'
          }
        ]
      }
    },
    {
      id: 'sat-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Challenge: Identify the Error** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The doctor examined the patient, and prescribed medication."',
            options: ['Unnecessary comma (not two independent clauses)', 'Correct as written', 'Needs a semicolon', 'Missing second comma']
          },
          {
            label: '"She said, that the results were promising."',
            options: ['Unnecessary comma before "that"', 'Correct as written', 'Needs a colon instead', 'Missing comma after "results"']
          },
          {
            label: '"The building—designed by a famous architect, is a landmark."',
            options: ['Mismatched marks (dash and comma)', 'Correct as written', 'Needs a semicolon', 'Missing apostrophe']
          },
          {
            label: '"Its been a long day, the team is exhausted."',
            options: ['Should be "It\'s" + comma splice', 'Correct as written', 'Only needs "It\'s"', 'Only needs a semicolon']
          }
        ],
        correctAnswers: [
          'Unnecessary comma (not two independent clauses)',
          'Unnecessary comma before "that"',
          'Mismatched marks (dash and comma)',
          'Should be "It\'s" + comma splice'
        ],
        hint1: 'A comma before "and" needs two independent clauses on each side.',
        hint2: 'Never put a comma between a verb and a "that" clause.',
        hint3: 'If a dash opens a nonessential phrase, a dash must close it.',
        explanation: 'Sentence 1: "prescribed medication" is not an independent clause → remove comma. Sentence 2: No comma between "said" and "that." Sentence 3: The dash opens the phrase but a comma tries to close it — must use matching marks. Sentence 4: "Its" should be "It\'s" (it has) AND the comma between clauses is a comma splice.'
      }
    },
    {
      id: 'sat-p7-summary',
      type: 'text' as const,
      content: `
### 🎉 Congratulations!

You've completed the full interactive lesson on **SAT Punctuation**. Here's what you've mastered:

- ✅ **Part 1:** Sentence fundamentals & run-on sentences
- ✅ **Part 2:** The six comma rules
- ✅ **Part 3:** Semicolons & colons
- ✅ **Part 4:** Dashes & apostrophes
- ✅ **Part 5:** Restrictive vs. nonrestrictive elements
- ✅ **Part 6:** SAT-style passage practice
- ✅ **Part 7:** Comprehensive review & final challenge

**Next step:** Test your skills in **Competitive Mode** to see how you stack up! 🏆
      `
    }
  ]
}
