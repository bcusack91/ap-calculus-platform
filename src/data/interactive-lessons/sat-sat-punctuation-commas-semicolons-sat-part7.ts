export const satPunctuationCommasPart7Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc7-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 7 of 7 — Review & Final Challenge**

You've learned all the major comma, semicolon, and colon rules tested on the SAT. Let's do a comprehensive review and then test everything together.

### Complete Rule Reference

| Punctuation | When to Use |
|---|---|
| **Comma** | Series (3+ items), introductory elements, FANBOYS between independent clauses, nonessential phrases (paired) |
| **Semicolon** | Two related independent clauses (no conjunction), conjunctive adverbs (;however,), complex series with internal commas |
| **Colon** | After an independent clause to introduce a list, explanation, or example |
| **No punctuation** | Between subject & verb, between verb & object, between two items with "and," before "that" in essential clauses |
      `
    },
    {
      id: 'sat-pc7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence contains a comma splice?',
            options: [
              'The movie was long, but it was entertaining.',
              'The movie was long, it was also entertaining.',
              'The movie was long; it was also entertaining.',
              'The movie, which was long, was entertaining.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Two independent clauses joined by only a comma = comma splice. It should be: "The movie was long, but it was also entertaining" or "The movie was long; it was also entertaining."'
          },
          {
            question: 'Identify the correctly punctuated sentence.',
            options: [
              'Although the weather was bad; the event continued.',
              'Although the weather was bad, the event continued.',
              'Although, the weather was bad the event continued.',
              'Although the weather was bad the event, continued.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Although the weather was bad" is an introductory dependent clause. It needs a comma before the main clause. A semicolon would be wrong because the first part is not an independent clause.'
          }
        ]
      }
    },
    {
      id: 'sat-pc7-detail1',
      type: 'text' as const,
      content: `
### Common SAT Punctuation Traps — Final Checklist

✅ **The "which" trap:** "Which" clauses are almost always nonessential → commas on both sides.

✅ **The "that" trap:** "That" clauses are almost always essential → NO commas.

✅ **The conjunction trap:** A comma before "and" only works when BOTH sides are independent clauses. "She danced and sang" → no comma. "She danced, and he sang" → comma.

✅ **The long subject trap:** No matter how long the subject is, never put a single comma between it and its verb.

✅ **The semicolon-as-comma trap:** A semicolon CANNOT replace a comma after an introductory phrase. "After the game; we went home" → WRONG.

✅ **The colon-after-verb trap:** "The colors are: red, blue, green" → WRONG. The part before a colon must be a complete sentence.
      `
    },
    {
      id: 'sat-pc7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Challenge** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Select the sentence with the correct punctuation throughout.',
            options: [
              'Dr. Martinez, who specializes in cardiology has published over fifty papers; and she recently received a grant.',
              'Dr. Martinez who specializes in cardiology, has published over fifty papers, and she recently received a grant.',
              'Dr. Martinez, who specializes in cardiology, has published over fifty papers, and she recently received a grant.',
              'Dr. Martinez, who specializes in cardiology, has published over fifty papers and she recently received a grant.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "who specializes in cardiology" is nonessential (commas on both sides). "Dr. Martinez has published over fifty papers" and "she recently received a grant" are independent clauses joined by "and" → comma before "and."'
          },
          {
            question: 'The research team compiled their findings __(A)__ analyzed three years of data __(B)__ and presented the results to the board. Which punctuation is correct for (A) and (B)?',
            options: [
              '(A) , ... (B) ,',
              '(A) ; ... (B) ;',
              '(A) no punctuation ... (B) no punctuation',
              '(A) : ... (B) ,'
            ],
            correctAnswer: 0,
            explanation: 'Correct — This is a series of three actions: compiled, analyzed, and presented. Items in a series are separated by commas.'
          },
          {
            question: 'Which option best completes this sentence? "The library contains an impressive collection ___ first editions, signed manuscripts, and rare maps."',
            options: [
              ', (comma)',
              ': (colon)',
              '; (semicolon)',
              '— no punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The library contains an impressive collection" is a complete sentence. A colon introduces the list that explains what the collection includes.'
          }
        ]
      }
    },
    {
      id: 'sat-pc7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Master Challenge: Name the Rule** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The volunteers, who worked tirelessly, raised over $10,000."',
            options: ['Nonessential clause (paired commas)', 'Comma splice', 'Introductory element', 'Series comma']
          },
          {
            label: '"She finished the report; then she submitted it."',
            options: ['Semicolon joining independent clauses', 'Comma splice', 'Colon before explanation', 'Unnecessary semicolon']
          },
          {
            label: '"Despite the setback, the team persevered."',
            options: ['Introductory element comma', 'Nonessential clause', 'FANBOYS comma', 'Comma splice']
          },
          {
            label: '"He needed three things: focus, discipline, and patience."',
            options: ['Colon introducing a list', 'Semicolon with conjunctive adverb', 'Nonessential clause', 'Comma splice']
          }
        ],
        correctAnswers: [
          'Nonessential clause (paired commas)',
          'Semicolon joining independent clauses',
          'Introductory element comma',
          'Colon introducing a list'
        ],
        hint1: 'Look for the punctuation mark used and think about what rule it follows.',
        hint2: 'Nonessential clauses have commas on both sides; introductory elements have a comma after them.',
        hint3: 'Semicolons join two independent clauses; colons introduce lists after a complete sentence.',
        explanation: 'Each sentence demonstrates a different punctuation rule: (1) Nonessential "which/who" clause with paired commas. (2) Semicolon between two independent clauses. (3) Comma after an introductory prepositional phrase. (4) Colon after a complete sentence introducing a list.'
      }
    },
    {
      id: 'sat-pc7-summary',
      type: 'text' as const,
      content: `
### 🎉 Congratulations!

You've completed the full interactive lesson on **Commas, Semicolons, and Colons**. Here's what you've mastered:

- ✅ **Part 1:** Comma basics — series, introductory elements, FANBOYS
- ✅ **Part 2:** Nonessential vs. essential clauses
- ✅ **Part 3:** Semicolons — independent clauses & conjunctive adverbs
- ✅ **Part 4:** Colons — introducing lists and explanations
- ✅ **Part 5:** Unnecessary commas & common traps
- ✅ **Part 6:** SAT-style passage practice
- ✅ **Part 7:** Comprehensive review & final challenge

**Next step:** Test your skills in **Competitive Mode** to see how you stack up against other students! 🏆
      `
    }
  ]
}
