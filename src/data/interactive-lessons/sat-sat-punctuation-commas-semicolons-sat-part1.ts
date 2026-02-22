export const satPunctuationCommasPart1Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc1-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 1 of 7 — Comma Basics**

Commas are the most commonly tested punctuation mark on the SAT. Knowing when to use — and when *not* to use — a comma is crucial for a high Writing score.

### The Big Three Comma Rules

1. **Commas in a series (lists)** — Use commas to separate three or more items in a list.
2. **Commas after introductory elements** — Place a comma after a word, phrase, or clause that comes before the main clause.
3. **Commas with coordinating conjunctions** — Use a comma before FANBOYS (for, and, nor, but, or, yet, so) when joining two independent clauses.
      `
    },
    {
      id: 'sat-pc1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses commas correctly in a series?',
            options: [
              'The student studied math, science and, history.',
              'The student studied math, science, and history.',
              'The student studied, math science, and history.',
              'The student studied math science and history.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Items in a series are separated by commas. The Oxford comma (before "and") is accepted on the SAT. The key is that each item in the list is separated by a comma.'
          },
          {
            question: 'What does FANBOYS stand for?',
            options: [
              'First, also, next, because, or, yet, still',
              'For, and, nor, but, or, yet, so',
              'Finally, although, nevertheless, because, only, yet, since',
              'For, also, nor, because, or, yes, so'
            ],
            correctAnswer: 1,
            explanation: 'Correct — FANBOYS is the mnemonic for the seven coordinating conjunctions: for, and, nor, but, or, yet, so. A comma goes before a FANBOYS conjunction when it joins two independent clauses.'
          }
        ]
      }
    },
    {
      id: 'sat-pc1-detail1',
      type: 'text' as const,
      content: `
### Commas in a Series

When you list three or more things, separate them with commas:

> *The lab required beakers, test tubes, and goggles.*

**SAT Tip:** The SAT accepts both the Oxford comma (comma before "and") and no Oxford comma. However, you must be **consistent** — and the answer choices will usually include it.

### Commas After Introductory Elements

If a sentence begins with something that is NOT the subject, place a comma after it:

> *After finishing the experiment, the students cleaned up.*

> *However, the results were inconclusive.*

> *In 2024, enrollment increased by 15%.*

Common introductory elements include:
- **Transitional words:** However, Therefore, Meanwhile, Furthermore
- **Prepositional phrases:** After the concert, In the morning, By next year
- **Dependent clauses:** Although she studied hard, Because they arrived early
      `
    },
    {
      id: 'sat-pc1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly uses a comma after an introductory element?',
            options: [
              'The students, after finishing the test went home.',
              'After finishing the test the students went home.',
              'After finishing the test, the students went home.',
              'After, finishing the test the students went home.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "After finishing the test" is an introductory prepositional phrase and needs a comma before the main clause begins.'
          },
          {
            question: 'Which sentence correctly uses a comma with a coordinating conjunction?',
            options: [
              'She studied hard, and she passed the test.',
              'She studied hard and, she passed the test.',
              'She studied hard, and passed the test.',
              'She studied, hard and she passed the test.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "She studied hard" and "she passed the test" are both independent clauses joined by "and," so a comma goes before the conjunction. Option C is wrong because "passed the test" by itself is not an independent clause.'
          }
        ]
      }
    },
    {
      id: 'sat-pc1-detail2',
      type: 'text' as const,
      content: `
### Commas with Coordinating Conjunctions (FANBOYS)

Use a comma **before** a FANBOYS conjunction only when it joins **two independent clauses** (each side could stand alone as a sentence).

✅ *The experiment failed, but the team tried again.* (Two independent clauses)

❌ *The experiment failed but produced useful data.* (No comma — "produced useful data" is NOT an independent clause)

**Key Test:** Cover up the conjunction and everything before it. Can what remains stand alone as a complete sentence? If yes → comma. If no → no comma.
      `
    },
    {
      id: 'sat-pc1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Comma Rule** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comma in a series',
            options: ['She bought eggs, milk, and bread at the store.', 'Although it rained, the game continued.', 'The dog barked, and the cat ran away.', 'However, the plan did not work.']
          },
          {
            label: 'Comma after introductory element',
            options: ['She bought eggs, milk, and bread at the store.', 'Although it rained, the game continued.', 'The dog barked, and the cat ran away.', 'However, the plan did not work.']
          },
          {
            label: 'Comma with FANBOYS',
            options: ['She bought eggs, milk, and bread at the store.', 'Although it rained, the game continued.', 'The dog barked, and the cat ran away.', 'However, the plan did not work.']
          }
        ],
        correctAnswers: [
          'She bought eggs, milk, and bread at the store.',
          'Although it rained, the game continued.',
          'The dog barked, and the cat ran away.'
        ],
        hint1: 'Look for the sentence that has three items listed with commas.',
        hint2: 'An introductory element comes before the main clause — look for a dependent clause at the start.',
        hint3: 'FANBOYS join two independent clauses with a comma before the conjunction.',
        explanation: 'Each sentence illustrates a different comma rule. A series uses commas between three+ items. An introductory element is a phrase or clause before the main clause. FANBOYS commas separate two independent clauses.'
      }
    }
  ]
}
