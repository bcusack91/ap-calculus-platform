export const satGrammarPart3Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr3-intro',
      type: 'text' as const,
      content: `
# ⏰ Verb Tense & Mood

**Part 3 of 7 — Consistent Tense, Perfect Tenses, Subjunctive Mood**

The SAT tests whether you can maintain **consistent verb tense** and choose the correct tense based on context.

### The Six Main Tenses

| Tense | Example | When to use |
|-------|---------|-------------|
| Simple present | *She **writes** daily.* | Habitual action, general truth |
| Simple past | *She **wrote** yesterday.* | Completed past action |
| Simple future | *She **will write** tomorrow.* | Future action |
| Present perfect | *She **has written** three essays.* | Past action with present relevance |
| Past perfect | *She **had written** the essay before class started.* | Action completed before another past action |
| Future perfect | *She **will have written** it by Friday.* | Action completed before a future time |

**SAT Rule:** Don't shift tenses unless the meaning requires it.

> ❌ *He walked to the store and **buys** some bread.* (past → present shift)
> ✅ *He walked to the store and **bought** some bread.*
      `
    },
    {
      id: 'sat-gr3-perfect',
      type: 'text' as const,
      content: `
## Perfect Tenses in Detail

### Present Perfect (has/have + past participle)
Links a past action to the present:
> *I **have lived** here for ten years.* (started in the past, still true now)

### Past Perfect (had + past participle)
Shows one past action happened **before** another:
> *By the time the teacher arrived, the students **had already left**.*

**SAT loves this one.** If two past events are mentioned, the earlier one should be in the past perfect.

### Future Perfect (will have + past participle)
Describes what will be completed by a future point:
> *By next month, she **will have completed** the course.*

## The Subjunctive Mood

Used for wishes, demands, suggestions, and hypothetical situations:

| Pattern | Example |
|---------|---------|
| Wish / if…were | *If I **were** rich, I would travel.* (not "was") |
| Demand / suggest / recommend + that | *The professor insists that he **study** harder.* (not "studies") |

> ❌ *If she **was** here, she would help.*
> ✅ *If she **were** here, she would help.*
      `
    },
    {
      id: 'sat-gr3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Verb Tense Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'By the time we arrived at the theater, the movie _____.',
            options: ['already started', 'has already started', 'had already started', 'will have started'],
            correctAnswer: 2,
            explanation: 'The movie starting happened BEFORE arriving (both past events). Use past perfect: "had already started."'
          },
          {
            question: 'The proposal recommends that the company _____ its hiring practices.',
            options: ['reviews', 'reviewed', 'review', 'will review'],
            correctAnswer: 2,
            explanation: 'After verbs like "recommend," "suggest," "insist," use the subjunctive: the base form "review" (not "reviews").'
          }
        ]
      }
    },
    {
      id: 'sat-gr3-input1',
      type: 'input-boxes' as const,
      content: `
**Type the Correct Verb Form** 🧮

1) If I _____ (was/were) the president, I would change that law.

2) She _____ (has lived / had lived) in Paris for three years before moving to London.

3) By 2030, scientists _____ (will discover / will have discovered) a cure for the disease, researchers predict.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['were', 'had lived', 'will have discovered'],
        hint1: 'Hypothetical situation → subjunctive mood → "were" for all subjects.',
        hint2: 'Living in Paris happened BEFORE moving to London (two past events) → past perfect.',
        hint3: '"By 2030" signals a future deadline → future perfect.',
        explanation: '1) "were" — subjunctive for hypothetical. 2) "had lived" — past perfect for the earlier of two past events. 3) "will have discovered" — future perfect for completion by a future point.'
      }
    },
    {
      id: 'sat-gr3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Tense Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She had finished the book before the movie came out" uses …',
            options: ['simple past', 'present perfect', 'past perfect', 'future perfect']
          },
          {
            label: 'The subjunctive "were" is used for …',
            options: ['past tense statements', 'hypothetical or contrary-to-fact situations', 'future predictions', 'completed actions']
          },
          {
            label: '"I have studied French for five years" — this tense is …',
            options: ['simple past', 'past perfect', 'present perfect', 'simple present']
          }
        ],
        correctAnswers: ['past perfect', 'hypothetical or contrary-to-fact situations', 'present perfect'],
        hint1: '"Had + past participle" is the past perfect form.',
        hint2: '"If I were…" expresses something that is not true.',
        hint3: '"Have/has + past participle" with present relevance.',
        explanation: '"Had finished" is past perfect. The subjunctive "were" is for hypothetical situations. "Have studied" is present perfect — the studying started in the past and is still relevant.'
      }
    },
    {
      id: 'sat-gr3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The scientist conducted the experiment in March and **will publish** the results in the same journal two months later. \nWhich correction should be made?',
            options: ['Change "will publish" to "published"', 'Change "conducted" to "conducts"', 'Change "will publish" to "has published"', 'No change needed'],
            correctAnswer: 0,
            explanation: 'Both actions are in the past ("in March" and "two months later"). Using "will publish" is an inappropriate tense shift. "Published" keeps the tense consistent.'
          },
          {
            question: 'If the budget **was** larger, the school could hire more teachers. \nWhich correction should be made?',
            options: ['Change "was" to "were"', 'Change "could hire" to "can hire"', 'Change "was" to "is"', 'No change needed'],
            correctAnswer: 0,
            explanation: 'This is a hypothetical (contrary-to-fact) statement. The subjunctive requires "were," not "was."'
          }
        ]
      }
    },
    {
      id: 'sat-gr3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Keep tenses consistent** unless there's a clear reason to shift (e.g., time markers like "before," "by then").
2. **Past perfect ("had + past participle")** for the earlier of two past events.
3. **Present perfect ("has/have + past participle")** connects past to present.
4. **Future perfect ("will have + past participle")** for actions completed by a future deadline.
5. **Subjunctive:** Use "were" for hypotheticals; use the base verb after "recommend/suggest/insist that."

**Up next:** Sentence Structure →
      `
    }
  ]
};
