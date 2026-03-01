export const actPunctuationPart6Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Common ACT Punctuation Traps

**Part 6 of 7 — Unnecessary Commas, Comma Splices & Run-On Sentences**

The ACT isn't just testing whether you know where to **put** punctuation — it's also testing whether you know where to **leave it out**. Many of the trickiest ACT questions involve punctuation that seems right but is actually wrong.

**The Three Most Common Traps:**

| Trap | What It Looks Like |
|------|--------------------|
| Unnecessary comma | A comma separating things that shouldn't be separated |
| Comma splice | Two independent clauses joined by only a comma |
| Run-on sentence | Two independent clauses with no punctuation at all |

**Why These Are Tricky:** When you read them aloud, they might "sound" okay. The ACT is testing your knowledge of the rules, not your ear.
      `
    },
    {
      id: 'act-pn6-unnecessary',
      type: 'text' as const,
      content: `
## Unnecessary Commas

**Trap 1 — Comma Between Subject and Verb:**
- ❌ *The students in the advanced class, performed exceptionally well.*
- ✅ *The students in the advanced class performed exceptionally well.*
- No comma should separate a subject from its verb.

**Trap 2 — Comma Between Verb and Object:**
- ❌ *She discovered, that the results were inconclusive.*
- ✅ *She discovered that the results were inconclusive.*
- No comma before "that" when it introduces an essential clause.

**Trap 3 — Comma Before/After a Preposition:**
- ❌ *The results were consistent with, the earlier findings.*
- ✅ *The results were consistent with the earlier findings.*

**Trap 4 — Comma in a Compound Predicate (Two Verbs, One Subject):**
- ❌ *She reviewed the data, and published her results.*
- ✅ *She reviewed the data and published her results.*
- This is NOT a compound sentence — there's only one subject. No comma before "and."

**Trap 5 — Comma Between Two Items (Not a Series):**
- ❌ *He studied math, and science.*
- ✅ *He studied math and science.*

**ACT Strategy:** When you see a comma in an underlined section, ask: "What is this comma separating?" If it's separating a subject from its verb, a verb from its object, or two items that don't form a series, it's unnecessary.
      `
    },
    {
      id: 'act-pn6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Unnecessary Commas — Keep or Delete?** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The professor who teaches biology, is retiring at the end of the year." Should the comma stay or go?',
            options: ['Keep the comma — it separates a clause', 'Delete the comma — it separates the subject from the verb', 'Replace the comma with a semicolon', 'Add another comma before "who"'],
            correctAnswer: 1,
            explanation: 'The comma incorrectly separates the subject ("The professor who teaches biology") from the verb ("is retiring"). "Who teaches biology" is an essential clause — no commas needed.'
          },
          {
            question: '"The team analyzed the results, and then presented their findings to the board." Is the comma correct?',
            options: ['Yes — it separates two independent clauses', 'No — this is a compound predicate (one subject, two verbs)', 'Yes — commas always go before "and"', 'No — a semicolon is needed instead'],
            correctAnswer: 1,
            explanation: 'There is only one subject ("The team") with two actions ("analyzed" and "presented"). This is a compound predicate, not a compound sentence. No comma is needed before "and."'
          }
        ]
      }
    },
    {
      id: 'act-pn6-splices',
      type: 'text' as const,
      content: `
## Comma Splices & Run-On Sentences

**Comma Splice:** Two independent clauses joined by **only a comma**.
- ❌ *The results were surprising, the team decided to repeat the experiment.*
- This is WRONG because both halves are complete sentences.

**Run-On (Fused Sentence):** Two independent clauses with **no punctuation** at all.
- ❌ *The results were surprising the team decided to repeat the experiment.*

**Five Ways to Fix a Comma Splice or Run-On:**

| Fix | Example |
|-----|---------|
| Period | *The results were surprising. The team decided…* |
| Semicolon | *The results were surprising; the team decided…* |
| Comma + FANBOYS | *The results were surprising, so the team decided…* |
| Subordinating conjunction | *Because the results were surprising, the team decided…* |
| Em dash | *The results were surprising — the team decided…* |

**ACT Trap — "However" Is NOT a FANBOYS:**
- ❌ *The sky was clear, however, rain was forecast.* (Comma splice!)
- ✅ *The sky was clear; however, rain was forecast.*
- Words like *however, therefore, moreover, consequently, furthermore* are conjunctive adverbs — they need a semicolon, not a comma.

**ACT Strategy:** When two complete thoughts appear in the same sentence, check the punctuation between them. A comma alone is never enough.
      `
    },
    {
      id: 'act-pn6-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Error** ✏️

Identify the punctuation error in each sentence. Type "comma splice," "unnecessary comma," or "run-on."

1) "The museum opened in 1985, it has since become one of the city\'s most popular attractions."
2) "The researchers conducted a thorough analysis, and concluded that the data supported the hypothesis."
3) "The concert was sold out fans lined up for hours hoping to get standing-room tickets."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma splice', 'unnecessary comma', 'run-on'],
        hint1: 'Two complete sentences separated by only a comma.',
        hint2: 'Is this a compound sentence (two subjects) or a compound predicate (one subject, two verbs)?',
        hint3: 'Where does one thought end and the next begin? What punctuation is between them?',
        explanation: '1) Comma splice — two independent clauses joined by just a comma. 2) Unnecessary comma — "The researchers" is the single subject with two verbs ("conducted" and "concluded"), forming a compound predicate. 3) Run-on — two independent clauses with no punctuation between them.'
      }
    },
    {
      id: 'act-pn6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Punctuation Traps** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A comma between a subject and its verb is …',
            options: ['always correct', 'sometimes correct', 'never correct', 'correct only with long subjects']
          },
          {
            label: 'Two independent clauses joined by only a comma is called …',
            options: ['a compound sentence', 'a comma splice', 'a complex sentence', 'a run-on sentence']
          },
          {
            label: '"However" is a ___, not a FANBOYS conjunction.',
            options: ['subordinating conjunction', 'conjunctive adverb', 'preposition', 'relative pronoun']
          }
        ],
        correctAnswers: ['never correct', 'a comma splice', 'conjunctive adverb'],
        hint1: 'Nothing should interrupt the subject-verb connection.',
        hint2: 'A comma alone can\'t join two independent clauses.',
        hint3: 'Words like "however" and "therefore" belong to a special category.',
        explanation: 'Never place a comma between subject and verb. Two independent clauses joined by only a comma = comma splice. "However" is a conjunctive adverb, requiring a semicolon before it.'
      }
    },
    {
      id: 'act-pn6-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The new policy was controversial, many employees felt it was unfair, however, management argued it was necessary for efficiency." How should this sentence be punctuated?',
            options: ['No change', 'controversial. Many employees felt it was unfair; however, management argued…', 'controversial; many employees felt it was unfair, however management argued…', 'controversial, many employees felt it was unfair. However management argued…'],
            correctAnswer: 1,
            explanation: 'The original contains two comma splices. Fix 1: Period after "controversial" (separates independent clauses). Fix 2: Semicolon before "however" (conjunctive adverb rule). The correct version: "The new policy was controversial. Many employees felt it was unfair; however, management argued it was necessary for efficiency."'
          },
          {
            question: '"The lead actress, delivered a powerful performance that moved the audience to tears." What change is needed?',
            options: ['No change', 'Delete the comma after "actress"', 'Add a comma after "performance"', 'Replace the comma with a dash'],
            correctAnswer: 1,
            explanation: 'The comma incorrectly separates the subject ("The lead actress") from the verb ("delivered"). No comma should ever come between a subject and its verb.'
          }
        ]
      }
    }
  ]
};
