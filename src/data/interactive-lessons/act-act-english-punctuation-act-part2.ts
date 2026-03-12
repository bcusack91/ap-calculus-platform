export const actPunctuationPart2Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn2-intro',
      type: 'text' as const,
      content: `
# 🔗 Semicolons & Colons

**Part 2 of 7 — Joining Independent Clauses, Introducing Lists & Semicolons vs. Commas**

Semicolons and colons appear on nearly every ACT English section. They look intimidating, but the rules are straightforward once you learn them.

**Key Principle:** Both semicolons and colons **must** be preceded by a complete sentence (independent clause). If the words before the mark can't stand alone, the punctuation is wrong.

| Mark | Primary Use | Example |
|------|------------|---------|
| Semicolon (;) | Joins two related independent clauses | *She studied hard; she earned an A.* |
| Colon (:) | Introduces a list, explanation, or elaboration | *He needed three things: focus, practice, and patience.* |
      `
    },
    {
      id: 'act-pn2-semicolon',
      type: 'text' as const,
      content: `
## The Semicolon

**Rule 1 — Join Two Independent Clauses:**
A semicolon replaces a period between two closely related sentences.
- ✅ *The experiment failed; the researchers adjusted their method.*
- ❌ *The experiment failed; and the researchers adjusted their method.* (Don't use a semicolon + FANBOYS together.)

**Rule 2 — Semicolon with Conjunctive Adverbs:**
When you use words like *however, therefore, moreover, consequently, furthermore*, place a semicolon before and a comma after:
- ✅ *The data was inconclusive; however, the team continued.*
- ❌ *The data was inconclusive, however, the team continued.* (This is a comma splice!)

**Rule 3 — Semicolons in Complex Lists:**
Use semicolons to separate items in a list when the items themselves contain commas:
- ✅ *The team traveled to Austin, Texas; Portland, Oregon; and Miami, Florida.*

**ACT Trap:** The ACT will offer a semicolon between a dependent clause and an independent clause. Remember — **both sides** of a semicolon must be independent clauses.
- ❌ *Although she studied hard; she didn't pass.* ("Although she studied hard" is dependent.)
      `
    },
    {
      id: 'act-pn2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Semicolons — Right or Wrong?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence uses the semicolon correctly? (A) She ran the experiment; the results surprised everyone. (B) Although the weather was cold; they went hiking. (C) He likes soccer; and basketball.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'All are correct'],
            correctAnswer: 0,
            explanation: 'Sentence A correctly joins two independent clauses with a semicolon. Sentence B incorrectly places a semicolon after a dependent clause. Sentence C incorrectly pairs a semicolon with a conjunction for a simple list.'
          },
          {
            question: '"The mayor promised to reduce taxes, however, funding for schools would remain unchanged." What is the error?',
            options: ['No error', 'Comma splice — use a semicolon before "however"', 'Remove the comma after "however"', '"However" should be replaced with "but"'],
            correctAnswer: 1,
            explanation: 'This is a comma splice. "However" is a conjunctive adverb, not a FANBOYS conjunction. The correct punctuation is: "…taxes; however, funding…"'
          }
        ]
      }
    },
    {
      id: 'act-pn2-colon',
      type: 'text' as const,
      content: `
## The Colon

**Rule 1 — Introduce a List (After a Complete Sentence):**
- ✅ *The kit includes the following items: a wrench, pliers, and a screwdriver.*
- ❌ *The kit includes: a wrench, pliers, and a screwdriver.* ("The kit includes" isn't a complete thought when used this way on the ACT — the colon often needs a complete clause.)

**Rule 2 — Introduce an Explanation or Elaboration:**
- ✅ *There was one problem: the bridge had collapsed.*
- ✅ *She had a simple philosophy: work hard, stay humble.*

**Rule 3 — What NOT to Put After a Colon:**
Don't use a colon after a preposition or a verb that directly leads into its object:
- ❌ *She enjoys: reading, hiking, and swimming.*
- ✅ *She enjoys reading, hiking, and swimming.*

**Colon vs. Semicolon Quick Test:**
- **Semicolon** → both sides must be independent clauses
- **Colon** → left side must be an independent clause; right side can be a list, clause, or fragment

**ACT Tip:** If the part before the colon can stand alone as a sentence, the colon is probably correct. If it can't, it's wrong.
      `
    },
    {
      id: 'act-pn2-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Punctuation** ✏️

Type "semicolon" or "colon" for each blank.

1) "The museum has an impressive collection ___ ancient sculptures, Renaissance paintings, and modern art." — The blank needs a …
2) "She finished her essay early ___ therefore, she had time to review it." — The blank needs a …
3) "He had one goal ___ to finish the marathon." — The blank needs a …
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['colon', 'semicolon', 'colon'],
        hint1: 'A list follows — and the clause before the blank is a complete sentence.',
        hint2: '"Therefore" is a conjunctive adverb. Think about what comes before conjunctive adverbs.',
        hint3: 'The right side explains or elaborates on "one goal."',
        explanation: '1) A colon introduces the list. 2) A semicolon precedes the conjunctive adverb "therefore." 3) A colon introduces the explanation of "one goal."'
      }
    },
    {
      id: 'act-pn2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Semicolons & Colons** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A semicolon can join two …',
            options: ['independent clauses', 'dependent clauses', 'phrases', 'single words']
          },
          {
            label: 'Before a colon, there must be …',
            options: ['a dependent clause', 'a complete sentence', 'a conjunction', 'a comma']
          },
          {
            label: '"She likes hiking, however, she dislikes camping" is an example of …',
            options: ['correct punctuation', 'a comma splice', 'a sentence fragment', 'a run-on with a colon error']
          }
        ],
        correctAnswers: ['independent clauses', 'a complete sentence', 'a comma splice'],
        hint1: 'Both sides of a semicolon must be able to stand alone.',
        hint2: 'The text before a colon must form a complete thought.',
        hint3: '"However" is a conjunctive adverb, not a FANBOYS conjunction.',
        explanation: 'Semicolons join independent clauses. Colons follow complete sentences. Using a comma before "however" instead of a semicolon creates a comma splice.'
      }
    },
    {
      id: 'act-pn2-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The research revealed a surprising trend: students who slept more performed better on exams." Is the colon used correctly?',
            options: ['Yes — the colon introduces an explanation after a complete sentence', 'No — a semicolon should replace the colon', 'No — a comma should replace the colon', 'No — the colon should be removed entirely'],
            correctAnswer: 0,
            explanation: 'The clause before the colon ("The research revealed a surprising trend") is a complete sentence. The clause after explains the "surprising trend." The colon is correct.'
          },
          {
            question: '"The committee discussed the budget; and they voted to approve it." What is wrong with this sentence?',
            options: ['Nothing — the sentence is correct', 'The semicolon should be a comma (FANBOYS needs a comma, not a semicolon)', 'The semicolon should be a colon', '"And" should be removed'],
            correctAnswer: 1,
            explanation: 'When joining independent clauses with a FANBOYS conjunction ("and"), use a comma — not a semicolon. Correct: "The committee discussed the budget, and they voted to approve it."'
          }
        ]
      }
    }
  ]
};
