export const satPunctuationPart1Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation — Complete Guide

**Part 1 of 7 — Overview & End-of-Sentence Punctuation**

Punctuation questions appear on every SAT Reading & Writing section. Mastering punctuation rules is one of the fastest ways to boost your score because the rules are **consistent and predictable**.

### What the SAT Tests

The SAT tests these punctuation marks:
- **Periods, question marks, exclamation points** — end-of-sentence
- **Commas** — the most frequently tested
- **Semicolons** — joining independent clauses
- **Colons** — introducing lists and explanations
- **Dashes (em dashes)** — setting off information
- **Apostrophes** — possession and contractions

### The Foundation: What Is a Sentence?

Before diving into punctuation, you must know:
- An **independent clause** has a subject + verb and expresses a complete thought.
- A **dependent clause** has a subject + verb but cannot stand alone (starts with words like *although, because, when, if*).
- A **phrase** lacks either a subject or a verb (or both).

Every punctuation rule on the SAT comes down to understanding these three things.
      `
    },
    {
      id: 'sat-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is an independent clause?',
            options: [
              'Although the rain stopped',
              'Running through the park on a sunny day',
              'The team won the championship',
              'Because she studied hard for the test'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "The team won the championship" has a subject ("the team"), a verb ("won"), and expresses a complete thought. The others are either dependent clauses (starting with "although" or "because") or phrases (no main verb).'
          },
          {
            question: 'Which word group is a phrase (NOT a clause)?',
            options: [
              'She runs every morning.',
              'After finishing dinner',
              'Although it was late, she continued.',
              'The dog barked loudly.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "After finishing dinner" has no subject performing a main action and no finite verb. It\'s a prepositional/participial phrase, not a clause.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail1',
      type: 'text' as const,
      content: `
### Periods — The Basics

A **period** ends a complete sentence (independent clause).

> *The experiment produced unexpected results.*

**SAT Application:** When you see a period (or the choice to add one), check:
1. Is what comes before it a complete sentence? ✅
2. Is what comes after it a complete sentence? ✅

If both sides are complete sentences, a period works.

### Run-On Sentences

A **run-on sentence** fuses two independent clauses without proper punctuation:

❌ *The experiment succeeded the results were published.* (fused sentence)

❌ *The experiment succeeded, the results were published.* (comma splice)

**Correct Options:**
- *The experiment succeeded. The results were published.* (period)
- *The experiment succeeded; the results were published.* (semicolon)
- *The experiment succeeded, and the results were published.* (comma + conjunction)
      `
    },
    {
      id: 'sat-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly fixes this run-on? "The library closed early we went to the café instead."',
            options: [
              'The library closed early we went, to the café instead.',
              'The library closed early, we went to the café instead.',
              'The library closed early; we went to the café instead.',
              'The library, closed early we went to the café instead.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — A semicolon correctly joins two independent clauses. Option B creates a comma splice. Options A and D place commas incorrectly.'
          },
          {
            question: 'How many independent clauses are in this sentence? "Although it rained all morning, the game continued, and the fans stayed in their seats."',
            options: [
              'One',
              'Two',
              'Three',
              'Four'
            ],
            correctAnswer: 1,
            explanation: 'Correct — There are two independent clauses: "the game continued" and "the fans stayed in their seats." "Although it rained all morning" is a dependent clause.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Word Group** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She finished her homework."',
            options: ['Independent clause', 'Dependent clause', 'Phrase']
          },
          {
            label: '"Because the storm was approaching"',
            options: ['Independent clause', 'Dependent clause', 'Phrase']
          },
          {
            label: '"On the top shelf of the bookcase"',
            options: ['Independent clause', 'Dependent clause', 'Phrase']
          },
          {
            label: '"When the bell rings"',
            options: ['Independent clause', 'Dependent clause', 'Phrase']
          }
        ],
        correctAnswers: [
          'Independent clause',
          'Dependent clause',
          'Phrase',
          'Dependent clause'
        ],
        hint1: 'An independent clause can stand alone as a sentence.',
        hint2: 'Dependent clauses start with subordinating conjunctions like "because," "when," "although."',
        hint3: 'Phrases lack a subject-verb pair that makes a complete thought.',
        explanation: '"She finished her homework" is a complete thought → independent clause. "Because the storm was approaching" starts with "because" → dependent. "On the top shelf of the bookcase" has no verb → phrase. "When the bell rings" starts with "when" → dependent.'
      }
    }
  ]
}
