export const satPunctuationPart3Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 3 of 7 — Semicolons & Colons**

Semicolons and colons appear less often than commas, but when they show up, the rules are absolute. There is no gray area.

### Semicolon Rules

A **semicolon (;)** does exactly TWO things on the SAT:

1. **Joins two independent clauses** without a conjunction
2. **Separates items in a complex list** (when items already contain commas)

That's it. If one side of a semicolon is not an independent clause (or it's not a complex list), the semicolon is wrong.
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses a semicolon correctly?',
            options: [
              'The students were exhausted; after the long exam.',
              'The students were exhausted; they had studied all night.',
              'The students; were exhausted after the long exam.',
              'The students were; exhausted after the long exam.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Both "The students were exhausted" and "they had studied all night" are independent clauses. In all other options, at least one side of the semicolon is not a complete sentence.'
          },
          {
            question: 'When can semicolons separate list items?',
            options: [
              'Always — semicolons are stronger than commas in lists.',
              'Only when list items themselves contain commas.',
              'Only when there are more than five items in the list.',
              'Never — semicolons only join independent clauses.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Semicolons replace commas in a list when the individual items contain internal commas, preventing confusion. Example: "Austin, Texas; Portland, Oregon; and Miami, Florida."'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail1',
      type: 'text' as const,
      content: `
### Semicolons with Conjunctive Adverbs

When a **conjunctive adverb** (however, therefore, moreover, nevertheless, consequently, furthermore, meanwhile, instead) connects two independent clauses, use this pattern:

> **Independent clause ; conjunctive adverb , independent clause**

> *The data was inconclusive; however, the team continued research.*

**Common SAT Trap:** Using a comma instead of a semicolon before the conjunctive adverb creates a comma splice:

❌ *The data was inconclusive, however, the team continued.* (COMMA SPLICE)

### Colon Rules

A **colon (:)** follows an **independent clause** and introduces:
- A **list**
- An **explanation** or elaboration
- A **quotation** or example

**Critical Rule:** What comes BEFORE the colon must be a complete sentence.

✅ *She packed three items: a tent, a lantern, and a map.*
❌ *She packed: a tent, a lantern, and a map.* ("She packed" is incomplete)
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which option correctly fixes this comma splice? "The experiment was successful, the results confirmed the hypothesis."',
            options: [
              'The experiment was successful; the results confirmed the hypothesis.',
              'The experiment was successful the results confirmed the hypothesis.',
              'The experiment; was successful, the results confirmed the hypothesis.',
              'The experiment was successful: the results confirmed the hypothesis.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — A semicolon between two independent clauses fixes the comma splice. Option D (colon) could also work since the second clause explains the first, but a semicolon is the standard fix and the best answer here.'
          },
          {
            question: 'Which sentence uses a colon INCORRECTLY?',
            options: [
              'The museum featured works by three artists: Monet, Degas, and Renoir.',
              'One thing was certain: the project would be completed on time.',
              'The winners were: first place, Maria; second place, Jin.',
              'Her advice was simple: work hard and stay focused.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "The winners were" is not a complete sentence (the verb "were" needs a complement). A colon requires a full independent clause before it.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail2',
      type: 'text' as const,
      content: `
### Colon vs. Semicolon — Quick Reference

| Feature | Semicolon (;) | Colon (:) |
|---------|---------------|-----------|
| Before it | Independent clause | Independent clause |
| After it | Independent clause | List, explanation, fragment, or clause |
| Purpose | Link equal ideas | Introduce/explain what follows |
| With conjunctive adverbs | ✅ ; however, | ❌ Never |

### SAT Decision Tree for Semicolons & Colons

1. Are **both** sides independent clauses? → **Semicolon** or **period**
2. Does the second part explain or list what the first part mentions? → **Colon**
3. Is a conjunctive adverb connecting two clauses? → **Semicolon** before, **comma** after
4. Is it a list with internal commas? → **Semicolons** between items
      `
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Correct Mark** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The policy had one goal ___ reduce carbon emissions by 50%."',
            options: ['Colon (:)', 'Semicolon (;)', 'Comma (,)', 'Period (.)']
          },
          {
            label: '"She trained for months ___ she was ready for the marathon."',
            options: ['Colon (:)', 'Semicolon (;)', 'Comma (,)', 'Period (.)']
          },
          {
            label: '"The results were surprising ___ therefore, the team repeated the study."',
            options: ['Colon (:)', 'Semicolon (;)', 'Comma (,)', 'Period (.)']
          }
        ],
        correctAnswers: [
          'Colon (:)',
          'Semicolon (;)',
          'Semicolon (;)'
        ],
        hint1: 'If the second part explains the "one goal," it\'s an introduction → colon.',
        hint2: 'Two related independent clauses with no conjunction → semicolon.',
        hint3: 'Conjunctive adverb ("therefore") between clauses → semicolon before it.',
        explanation: 'Sentence 1: "reduce carbon emissions by 50%" explains what the "one goal" is → colon. Sentence 2: two independent clauses of equal weight → semicolon. Sentence 3: "therefore" is a conjunctive adverb → semicolon before, comma after.'
      }
    }
  ]
}
