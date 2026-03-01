export const actEnglishGrammarPart4Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg4-intro',
      type: 'text' as const,
      content: `
# 🔗 Sentence Structure

**Part 4 of 7 — Fragments, Run-Ons, Comma Splices & How to Fix Them**

The ACT tests your ability to recognize and fix **sentence-structure errors**. These fall into three categories:

| Error | Definition | Example |
|-------|-----------|---------|
| Fragment | Missing a subject, verb, or complete thought | *Because the rain started.* |
| Run-on | Two independent clauses joined with no punctuation | *I studied hard I passed the test.* |
| Comma splice | Two independent clauses joined with only a comma | *I studied hard, I passed the test.* |

**ACT Tip:** If an answer choice creates a fragment or a run-on, eliminate it — the ACT never rewards incomplete or improperly joined sentences.
      `
    },
    {
      id: 'act-eg4-fragments',
      type: 'text' as const,
      content: `
## Sentence Fragments

A **fragment** is a group of words that looks like a sentence but is missing a subject, a verb, or a complete thought.

**Common Fragment Types:**

1. **Dependent clause standing alone:**
   - ❌ *Because she studied every night.*
   - ✅ *Because she studied every night, she passed the exam.*

2. **Phrase without a main verb:**
   - ❌ *Running through the park on a sunny day.*
   - ✅ *She was running through the park on a sunny day.*

3. **"Which" or "That" clause standing alone:**
   - ❌ *Which was surprising to everyone.*
   - ✅ *The result, which was surprising to everyone, changed the experiment.*

**How to Fix a Fragment:**
- Attach it to a nearby independent clause, OR
- Add the missing subject or verb to make it complete.

**ACT Tip:** Words like "because," "although," "since," "when," "which," and "that" create dependent clauses. If you see one standing alone, it's a fragment.
      `
    },
    {
      id: 'act-eg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Fragments & Run-Ons — Identify the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a complete sentence?',
            options: ['Although the weather was perfect for sailing.', 'Running along the riverbank at dawn.', 'The committee reviewed the proposal and voted unanimously.', 'Because the project, which had been delayed twice.'],
            correctAnswer: 2,
            explanation: 'Option C has a clear subject ("The committee") and a complete predicate ("reviewed … and voted …"). The others are fragments — dependent clauses or phrases lacking a main clause.'
          },
          {
            question: '"The concert was canceled, the band could not travel due to the storm." This is an example of a:',
            options: ['Fragment', 'Run-on sentence', 'Comma splice', 'Correct sentence'],
            correctAnswer: 2,
            explanation: 'Two independent clauses ("The concert was canceled" and "the band could not travel…") are joined only by a comma. This is a comma splice.'
          }
        ]
      }
    },
    {
      id: 'act-eg4-fixes',
      type: 'text' as const,
      content: `
## Run-Ons & Comma Splices: Four Ways to Fix Them

**The four correct ways to join two independent clauses:**

1. **Period:** *I studied hard. I passed the test.*
2. **Semicolon:** *I studied hard; I passed the test.*
3. **Comma + coordinating conjunction (FANBOYS):** *I studied hard, and I passed the test.*
4. **Subordination:** *Because I studied hard, I passed the test.*

**FANBOYS** = For, And, Nor, But, Or, Yet, So

**Common Mistakes:**
- ❌ Comma alone: *I studied hard, I passed.* (comma splice)
- ❌ No punctuation: *I studied hard I passed.* (run-on)
- ❌ Comma + non-FANBOYS word: *I studied hard, however I passed.* (still a splice — "however" is not a FANBOYS conjunction)

**Fixing "however," "therefore," "moreover," etc.:**
- ✅ *I studied hard; however, I still failed.*
- ✅ *I studied hard. However, I still failed.*
- These are **conjunctive adverbs**, not coordinating conjunctions. They need a semicolon or period before them.

**ACT Tip:** If you see two complete sentences joined by only a comma, look for an answer that adds a FANBOYS conjunction, a semicolon, or a period.
      `
    },
    {
      id: 'act-eg4-input1',
      type: 'input-boxes' as const,
      content: `
**Classify the Error** ✏️

Type "fragment," "run-on," or "comma splice" for each sentence.

1) "Walking to the store after finishing her homework."
2) "The alarm went off we rushed outside."
3) "The cake looked delicious, nobody wanted to cut it."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fragment', 'run-on', 'comma splice'],
        hint1: 'Is there a subject performing an action with a complete verb?',
        hint2: 'Two independent clauses with no punctuation between them.',
        hint3: 'Two independent clauses joined by only a comma — what is that called?',
        explanation: '1) Fragment — no subject or main verb (just a participial phrase). 2) Run-on — two independent clauses with no punctuation. 3) Comma splice — two independent clauses joined by only a comma.'
      }
    },
    {
      id: 'act-eg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Sentence Structure Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FANBOYS stands for …',
            options: ['For, And, Nor, But, Or, Yet, So', 'First, Also, Next, Before, Or, Yet, Since', 'For, After, Nor, But, Over, Yet, So']
          },
          {
            label: '"However" is a …',
            options: ['coordinating conjunction', 'conjunctive adverb', 'preposition', 'subordinating conjunction']
          },
          {
            label: 'A comma splice can be fixed by replacing the comma with a …',
            options: ['colon', 'semicolon', 'dash', 'All of these could work depending on context']
          }
        ],
        correctAnswers: ['For, And, Nor, But, Or, Yet, So', 'conjunctive adverb', 'semicolon'],
        hint1: 'The seven coordinating conjunctions spell FANBOYS.',
        hint2: '"However" connects ideas but needs a semicolon before it at a clause boundary.',
        hint3: 'A semicolon is the most standard fix for a comma splice on the ACT.',
        explanation: 'FANBOYS = For, And, Nor, But, Or, Yet, So. "However" is a conjunctive adverb (not FANBOYS). A semicolon is the most common ACT-approved fix for a comma splice.'
      }
    },
    {
      id: 'act-eg4-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The museum was closed for renovations, therefore visitors were turned away at the entrance." How should this be corrected?',
            options: ['No change needed', 'Change the comma to a semicolon: "…renovations; therefore, visitors…"', 'Remove "therefore"', 'Change "therefore" to "and"'],
            correctAnswer: 1,
            explanation: '"Therefore" is a conjunctive adverb, not a FANBOYS conjunction. A semicolon is needed before it: "renovations; therefore, visitors…"'
          },
          {
            question: '"Although the hypothesis was well-supported by preliminary data." What is the best revision?',
            options: ['No change needed', 'Remove "Although"', 'Add a comma after "data"', 'Change "Although" to "Moreover"'],
            correctAnswer: 1,
            explanation: '"Although" makes this a dependent clause (fragment). Removing "Although" turns it into a complete sentence: "The hypothesis was well-supported by preliminary data."'
          }
        ]
      }
    }
  ]
};
