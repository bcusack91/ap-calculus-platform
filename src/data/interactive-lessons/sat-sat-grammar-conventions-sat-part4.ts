export const satGrammarPart4Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr4-intro',
      type: 'text' as const,
      content: `
# 🔨 Sentence Structure

**Part 4 of 7 — Fragments, Run-Ons, Comma Splices, Coordination & Subordination**

A correct sentence must have:
- A **subject**
- A **predicate** (verb)
- A **complete thought**

### Sentence Fragments
A fragment lacks one of those elements.

> ❌ *Because the weather was cold.* (dependent clause — no main clause)
> ✅ *Because the weather was cold, **we stayed inside**.*

> ❌ *Running through the park on a sunny day.* (no subject or main verb)
> ✅ ***She was** running through the park on a sunny day.*

### Run-On Sentences
Two independent clauses joined without proper punctuation or a conjunction.

> ❌ *I love reading I go to the library every week.* (fused sentence)
> ❌ *I love reading, I go to the library every week.* (comma splice)

**Four ways to fix a run-on or comma splice:**
1. **Period:** *I love reading. I go to the library every week.*
2. **Semicolon:** *I love reading; I go to the library every week.*
3. **Comma + conjunction:** *I love reading, so I go to the library every week.*
4. **Subordination:** *Because I love reading, I go to the library every week.*
      `
    },
    {
      id: 'sat-gr4-coord',
      type: 'text' as const,
      content: `
## Coordination vs. Subordination

### Coordination (equal ideas)
Uses **FANBOYS** (for, and, nor, but, or, yet, so) with a comma, or a semicolon:

> *The test was difficult, **but** most students passed.*

### Subordination (unequal ideas)
Uses subordinating conjunctions: **because, although, since, while, if, when, after, before, unless, until**

> ***Although** the test was difficult, most students passed.*

**SAT Tip:** The subordinated idea gets less emphasis. Choose subordination when one idea is more important than the other.

### Comma Splice vs. Correct Semicolon
| Incorrect (comma splice) | Correct |
|--------------------------|---------|
| *The lecture was long, the students were bored.* | *The lecture was long; the students were bored.* |
| | *The lecture was long, and the students were bored.* |
| | *Because the lecture was long, the students were bored.* |

**SAT Trick:** If a sentence has two complete clauses separated only by a comma (no conjunction), it's a comma splice.
      `
    },
    {
      id: 'sat-gr4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Structure Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a fragment? \n(A) After the rain stopped, we went outside. \n(B) While the band played their final song. \n(C) She ran to the store and bought milk. \n(D) The book, written by a famous author, was a bestseller.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'],
            correctAnswer: 1,
            explanation: '"While the band played their final song" is a dependent clause with no main clause to complete the thought — it\'s a fragment.'
          },
          {
            question: 'The experiment failed, the researchers started over. \nHow should this comma splice be corrected?',
            options: ['The experiment failed the researchers started over.', 'The experiment failed; the researchers started over.', 'The experiment failed, researchers started over.', 'The experiment, failed the researchers started over.'],
            correctAnswer: 1,
            explanation: 'A semicolon correctly joins two independent clauses. The original is a comma splice (two independent clauses joined by only a comma).'
          }
        ]
      }
    },
    {
      id: 'sat-gr4-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Error Type** 🧮

Type "fragment," "run-on," "comma splice," or "correct" for each sentence.

1) She studied hard for the final exam, she felt confident on test day.

2) Although he had never traveled abroad before.

3) The sun set behind the mountains, and the sky turned a deep shade of orange.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma splice', 'fragment', 'correct'],
        hint1: 'Two independent clauses separated by only a comma.',
        hint2: '"Although" starts a dependent clause. Where is the main clause?',
        hint3: 'There is a comma + coordinating conjunction ("and") between two independent clauses.',
        explanation: '1) Comma splice — two complete sentences joined by only a comma. 2) Fragment — dependent clause with no main clause. 3) Correct — "comma + and" properly joins two independent clauses.'
      }
    },
    {
      id: 'sat-gr4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Fix the Sentence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"I enjoy hiking ___ my brother prefers swimming." Choose the best connector.',
            options: ['(comma only)', ', but', '; and then', '. Because']
          },
          {
            label: '"___ the museum was closed, we went to the park instead." Choose the correct opening.',
            options: ['Since', 'Also', 'Meanwhile,', 'In addition']
          },
          {
            label: 'FANBOYS stands for: for, and, nor, but, or, yet, ___',
            options: ['since', 'so', 'still', 'such']
          }
        ],
        correctAnswers: [', but', 'Since', 'so'],
        hint1: 'Two independent clauses with contrasting ideas need a comma + conjunction.',
        hint2: 'The second clause is a result of the first — a cause-effect relationship.',
        hint3: 'The last letter in FANBOYS is S.',
        explanation: '", but" correctly joins two contrasting independent clauses. "Since" introduces a subordinate cause clause. "So" completes the FANBOYS acronym (for, and, nor, but, or, yet, so).'
      }
    },
    {
      id: 'sat-gr4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The orchestra performed brilliantly, earning a standing ovation, <u>they</u> had rehearsed every day for three months. \nWhich revision best fixes the error?',
            options: ['brilliantly, earning a standing ovation they', 'brilliantly and earned a standing ovation, they', 'brilliantly, earning a standing ovation; they', 'brilliantly. Earning a standing ovation, they'],
            correctAnswer: 2,
            explanation: 'The original has a comma splice between "ovation" and "they." A semicolon correctly separates the two independent clauses.'
          },
          {
            question: 'Because of the heavy rain and the flooded roads. The school decided to cancel classes for the day. \nWhich revision best fixes the error?',
            options: ['No change needed', 'Because of the heavy rain and the flooded roads, the school decided to cancel classes for the day.', 'Because of the heavy rain and the flooded roads; the school decided to cancel classes for the day.', 'Because of the heavy rain, and the flooded roads the school decided to cancel classes for the day.'],
            correctAnswer: 1,
            explanation: 'The first part is a prepositional/causal phrase that should be connected to the main clause with a comma, not separated by a period.'
          }
        ]
      }
    },
    {
      id: 'sat-gr4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Fragments** lack a subject, verb, or complete thought — watch for dependent clauses standing alone.
2. **Run-ons** fuse two independent clauses with no punctuation.
3. **Comma splices** use only a comma between independent clauses — add a conjunction or use a semicolon.
4. **Coordination** (FANBOYS) joins equal ideas; **subordination** makes one idea dependent.
5. **Period, semicolon, comma + conjunction, or subordination** — four ways to fix run-ons.

**Up next:** Modifier Placement →
      `
    }
  ]
};
