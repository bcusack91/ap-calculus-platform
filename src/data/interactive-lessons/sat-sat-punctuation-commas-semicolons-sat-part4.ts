export const satPunctuationCommasPart4Data = {
  topicSlug: 'sat-punctuation-commas-semicolons-sat',
  sections: [
    {
      id: 'sat-pc4-intro',
      type: 'text' as const,
      content: `
# ✏️ Commas, Semicolons, and Colons

**Part 4 of 7 — Colons**

Colons are powerful punctuation marks that signal "here's what I mean." The SAT tests them in specific, predictable ways.

### The Core Rule

A **colon (:)** follows an **independent clause** and introduces:
- A list
- An explanation
- A quotation or example

**The text before the colon MUST be a complete sentence.**

> *She brought three things: a notebook, a pencil, and a calculator.* ✅

> *She brought: a notebook, a pencil, and a calculator.* ❌ ("She brought" is not an independent clause)
      `
    },
    {
      id: 'sat-pc4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses a colon correctly?',
            options: [
              'The ingredients include: flour, sugar, and eggs.',
              'The recipe requires three ingredients: flour, sugar, and eggs.',
              'The recipe: requires three ingredients flour, sugar, and eggs.',
              'The recipe requires: three, ingredients flour sugar, and eggs.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The recipe requires three ingredients" is a complete sentence. A colon introduces the list that follows. In option A, "The ingredients include" is NOT followed by a complete thought before the colon (though some style guides accept it, the SAT prefers a full independent clause).'
          },
          {
            question: 'Which sentence correctly uses a colon to introduce an explanation?',
            options: [
              'The problem was clear: the budget had been exceeded.',
              'The problem: was clear the budget had been exceeded.',
              'The problem was: clear, the budget had been exceeded.',
              'The problem, was clear: the budget had been exceeded.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "The problem was clear" is a complete sentence. The colon introduces an explanation of what the problem was.'
          }
        ]
      }
    },
    {
      id: 'sat-pc4-detail1',
      type: 'text' as const,
      content: `
### Colon vs. Semicolon

Students often confuse colons and semicolons. Here's the key difference:

| | Semicolon (;) | Colon (:) |
|---|---|---|
| **Connects** | Two related independent clauses | An independent clause to a list, explanation, or example |
| **Relationship** | Both sides are equally important | The second part explains or elaborates on the first |
| **After the mark** | Must be an independent clause | Can be a fragment, list, or clause |

> *She had one goal; she wanted to win.* (Semicolon — two equal independent clauses)

> *She had one goal: to win.* (Colon — "to win" explains what the goal was)

### SAT Tip: What Comes BEFORE the Colon

The SAT's #1 colon trick: putting a colon after something that is NOT an independent clause.

❌ *The best qualities are: honesty, kindness, and integrity.*

✅ *The best qualities are honesty, kindness, and integrity.* (No colon needed)

✅ *She exhibited the best qualities: honesty, kindness, and integrity.* (Independent clause before colon)
      `
    },
    {
      id: 'sat-pc4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which option correctly distinguishes when to use a colon vs. a semicolon?',
            options: [
              'Colons join equal ideas; semicolons introduce lists.',
              'Colons introduce explanations or lists after a complete sentence; semicolons join two independent clauses.',
              'They are interchangeable on the SAT.',
              'Semicolons are always used with conjunctive adverbs; colons are only for lists.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Colons follow an independent clause and introduce what comes next (list, explanation, example). Semicolons join two independent clauses of equal weight.'
          },
          {
            question: 'Which sentence is punctuated INCORRECTLY?',
            options: [
              'The museum featured three artists: Monet, Degas, and Renoir.',
              'He had a simple philosophy: work hard and be kind.',
              'The winners were: Maria, James, and Olivia.',
              'One thing was certain: the team would not give up.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "The winners were" is not an independent clause (it feels incomplete). The colon is incorrectly placed. It should be: "The winners were Maria, James, and Olivia" (no colon) or "Three students won: Maria, James, and Olivia."'
          }
        ]
      }
    },
    {
      id: 'sat-pc4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Correct Punctuation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She wanted one thing ___ to travel the world."',
            options: ['colon (:)', 'semicolon (;)', 'comma (,)', 'no punctuation needed']
          },
          {
            label: '"The concert was amazing ___ the band played all their hits."',
            options: ['colon (:)', 'semicolon (;)', 'comma (,)', 'no punctuation needed']
          },
          {
            label: '"He packed three items ___ a tent, a sleeping bag, and a flashlight."',
            options: ['colon (:)', 'semicolon (;)', 'comma (,)', 'no punctuation needed']
          }
        ],
        correctAnswers: [
          'colon (:)',
          'semicolon (;)',
          'colon (:)'
        ],
        hint1: 'If the second part explains or specifies the first, consider a colon.',
        hint2: 'If both parts are independent clauses of equal importance, consider a semicolon.',
        hint3: 'Lists introduced after a complete sentence typically use a colon.',
        explanation: '"To travel the world" explains what the "one thing" is → colon. Both sides of the concert sentence are independent clauses of equal weight → semicolon. "A tent, a sleeping bag, and a flashlight" is a list explaining "three items" → colon.'
      }
    }
  ]
}
