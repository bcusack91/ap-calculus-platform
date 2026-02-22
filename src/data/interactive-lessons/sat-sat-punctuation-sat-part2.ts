export const satPunctuationPart2Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 2 of 7 — Commas: The Most-Tested Mark**

Commas account for the majority of SAT punctuation questions. There are exactly **six** comma rules the SAT tests. Master these and you'll handle most punctuation questions confidently.

### The Six SAT Comma Rules

1. **Series** — Three or more items in a list
2. **Introductory elements** — Before the main clause
3. **FANBOYS** — Joining two independent clauses with a coordinating conjunction
4. **Nonessential elements** — Extra information set off in pairs
5. **Coordinate adjectives** — Two or more adjectives that independently modify a noun
6. **NO unnecessary commas** — Don't separate subjects from verbs, verbs from objects, or elements that shouldn't be separated
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence demonstrates a comma in a series?',
            options: [
              'After the meeting, we grabbed lunch.',
              'The store sells shoes, hats, and scarves.',
              'She studied hard, and she passed the exam.',
              'The professor, who won an award, retired.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "shoes, hats, and scarves" is a list of three items separated by commas. The other sentences demonstrate an introductory element, FANBOYS, and a nonessential clause respectively.'
          },
          {
            question: 'What does FANBOYS stand for?',
            options: [
              'For, and, nor, but, or, yet, so',
              'First, also, next, because, or, yet, still',
              'For, also, nor, because, or, yes, so',
              'Finally, and, nor, but, once, yet, so'
            ],
            correctAnswer: 0,
            explanation: 'Correct — FANBOYS = for, and, nor, but, or, yet, so. These are the seven coordinating conjunctions. Use a comma before one ONLY when it joins two independent clauses.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail1',
      type: 'text' as const,
      content: `
### Rule 1: Commas in a Series

Separate three or more items with commas. The SAT uses the Oxford comma.

> *The lab required beakers, test tubes, and goggles.*

### Rule 2: Commas After Introductory Elements

Place a comma after an introductory word, phrase, or clause:

> *However, the data was inconclusive.*
> *After reviewing the results, the team published their findings.*
> *Although it rained, the game continued.*

### Rule 3: Commas with FANBOYS

Use a comma **before** a FANBOYS conjunction **only** when joining two **independent clauses**:

✅ *She studied hard, and she passed.* (Two independent clauses)
❌ *She studied hard, and passed.* (No comma — "passed" alone is not independent)

**SAT Shortcut:** Cover everything before "and" (or the conjunction). Can what's left stand alone? If YES → comma. If NO → no comma.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly uses a comma with an introductory element?',
            options: [
              'In the morning she went running.',
              'In the morning, she went running.',
              'In, the morning she went running.',
              'In the morning she, went running.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "In the morning" is an introductory prepositional phrase. A comma goes after it, before the main clause begins.'
          },
          {
            question: 'Should there be a comma before "and" in this sentence? "The athlete trained intensely and won the gold medal."',
            options: [
              'Yes — it separates two actions.',
              'No — "won the gold medal" is not an independent clause.',
              'Yes — it comes before a conjunction.',
              'No — commas never come before "and."'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Won the gold medal" cannot stand alone as a sentence (no subject). The FANBOYS comma rule only applies when BOTH sides are independent clauses.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail2',
      type: 'text' as const,
      content: `
### Rule 4: Nonessential Elements (Paired Commas)

Information that can be removed without changing the meaning gets commas on **both** sides:

> *Dr. Patel, a renowned biologist, published a study.*
> *The novel, which was published last year, became a bestseller.*

**Essential** information (removing it changes meaning) → NO commas:
> *Students who study regularly perform better.* (Which students? Essential.)

### Rule 5: Coordinate Adjectives

If two adjectives independently modify the same noun, separate them with a comma:

> *It was a long, difficult exam.* ("long exam" ✓, "difficult exam" ✓ → coordinate)

**Test:** Can you put "and" between the adjectives? Can you reverse their order? If YES to both → comma.

> *She wore a dark blue shirt.* ("dark" modifies "blue shirt," not "shirt" alone → no comma)

### Rule 6: No Unnecessary Commas

Never place a comma between:
- Subject and verb: ❌ *The team, won.*
- Verb and object: ❌ *She said, that it was fine.*
- Two items with "and": ❌ *He likes math, and science.*
      `
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Comma Rule** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The teacher graded essays, quizzes, and exams."',
            options: ['Series comma', 'Introductory element', 'FANBOYS', 'Nonessential element', 'Coordinate adjective', 'Unnecessary comma']
          },
          {
            label: '"Because the power went out, the lab was cancelled."',
            options: ['Series comma', 'Introductory element', 'FANBOYS', 'Nonessential element', 'Coordinate adjective', 'Unnecessary comma']
          },
          {
            label: '"It was a bright, sunny day."',
            options: ['Series comma', 'Introductory element', 'FANBOYS', 'Nonessential element', 'Coordinate adjective', 'Unnecessary comma']
          },
          {
            label: '"The CEO, who is retiring, gave a speech."',
            options: ['Series comma', 'Introductory element', 'FANBOYS', 'Nonessential element', 'Coordinate adjective', 'Unnecessary comma']
          }
        ],
        correctAnswers: [
          'Series comma',
          'Introductory element',
          'Coordinate adjective',
          'Nonessential element'
        ],
        hint1: 'Count the items — three or more in a list means series.',
        hint2: 'Something before the main clause is an introductory element.',
        hint3: 'Two adjectives that each modify the noun independently are coordinate.',
        explanation: 'Series: three items in a list. Introductory: dependent clause before the main clause. Coordinate adjective: "bright" and "sunny" each independently describe "day." Nonessential: "who is retiring" adds extra info about a specific CEO.'
      }
    }
  ]
}
