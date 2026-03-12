export const satPunctuationPart5Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p5-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 5 of 7 — Restrictive vs. Nonrestrictive Elements**

This is one of the **most heavily tested** concepts on the SAT Writing section. The test loves to check whether you know when commas (or dashes) are needed around a phrase or clause.

### The Core Question

> **Can you remove this phrase without changing who or what the sentence is about?**

- **YES → Nonrestrictive (nonessential)** → Use commas (or dashes) on both sides
- **NO → Restrictive (essential)** → No commas
      `
    },
    {
      id: 'sat-p5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly punctuates a nonrestrictive clause?',
            options: [
              'The Eiffel Tower which is in Paris attracts millions of visitors.',
              'The Eiffel Tower, which is in Paris, attracts millions of visitors.',
              'The Eiffel Tower, which is in Paris attracts millions of visitors.',
              'The Eiffel Tower which is in Paris, attracts millions of visitors.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Everyone knows which tower is meant, so "which is in Paris" is extra information (nonrestrictive). It needs commas on BOTH sides.'
          },
          {
            question: 'In which sentence is the underlined clause ESSENTIAL (restrictive)?',
            options: [
              'My mom, *who is a nurse*, works at the hospital.',
              'Students *who cheat on exams* face serious consequences.',
              'Barack Obama, *the 44th president*, wrote two memoirs.',
              'The movie, *which was released last Friday*, received great reviews.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Removing "who cheat on exams" changes the meaning from SOME students to ALL students. The clause is essential to identify which students are meant.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-detail1',
      type: 'text' as const,
      content: `
### "Which" vs. "That"

This shortcut works on nearly every SAT question:

- **"which"** → usually **nonrestrictive** → commas
- **"that"** → usually **restrictive** → NO commas

> *The book, which was published in 1925, is a classic.* ✅ (nonrestrictive)
> *The book that was published in 1925 is a classic.* ✅ (restrictive)

**SAT Rule:** If you see a comma before "that," it is almost always wrong.

### Types of Nonrestrictive Elements

| Type | Example |
|---|---|
| **Appositive** | *Dr. Lee, a cardiologist, performed the surgery.* |
| **Which clause** | *The study, which lasted three years, produced results.* |
| **Who clause** | *The mayor, who took office in 2020, announced the plan.* |
| **Participial phrase** | *The team, exhausted after the game, skipped practice.* |
| **Aside/parenthetical** | *The evidence, not surprisingly, supported the theory.* |

### The Two-Comma Test

If a nonrestrictive element is in the **middle** of a sentence, it MUST have commas on **both** sides. One comma without its partner is always wrong.

❌ *The CEO, who just retired announced the merger.*
✅ *The CEO, who just retired, announced the merger.*
      `
    },
    {
      id: 'sat-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence is correctly punctuated?',
            options: [
              'The car, that was parked outside, belongs to my neighbor.',
              'The car that was parked outside belongs to my neighbor.',
              'The car, that was parked outside belongs to my neighbor.',
              'The car that was parked outside, belongs to my neighbor.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "That" introduces a restrictive clause (it identifies WHICH car). Essential/restrictive clauses do not get commas. Never put a comma before "that."'
          },
          {
            question: 'Select the version with correct punctuation: "Marie Curie ___ the first woman to win a Nobel Prize ___ conducted groundbreaking research on radioactivity."',
            options: [
              'No punctuation / no punctuation',
              ', / ,',
              '; / ,',
              ', / no punctuation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "The first woman to win a Nobel Prize" is a nonrestrictive appositive (we already know who Marie Curie is). It requires commas on both sides.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Restrictive or Nonrestrictive?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Athletes who use performance-enhancing drugs face bans."',
            options: ['Restrictive — no commas', 'Nonrestrictive — needs commas']
          },
          {
            label: '"My brother, who lives in Denver, is a pilot."',
            options: ['Restrictive — no commas', 'Nonrestrictive — needs commas']
          },
          {
            label: '"The app that I downloaded yesterday keeps crashing."',
            options: ['Restrictive — no commas', 'Nonrestrictive — needs commas']
          },
          {
            label: '"The Amazon River, the largest river by volume, flows through Brazil."',
            options: ['Restrictive — no commas', 'Nonrestrictive — needs commas']
          }
        ],
        correctAnswers: [
          'Restrictive — no commas',
          'Nonrestrictive — needs commas',
          'Restrictive — no commas',
          'Nonrestrictive — needs commas'
        ],
        hint1: 'If removing the clause changes WHICH thing is being discussed, it\'s restrictive.',
        hint2: 'Proper nouns and unique things usually have nonrestrictive (extra info) clauses.',
        hint3: '"That" clauses are almost always restrictive; "which" and appositives are usually nonrestrictive.',
        explanation: '"Who use performance-enhancing drugs" specifies which athletes → restrictive. "Who lives in Denver" adds info about a specific brother → nonrestrictive. "That I downloaded yesterday" identifies which app → restrictive. "The largest river by volume" renames the Amazon → nonrestrictive appositive.'
      }
    }
  ]
}
