export const actEnglishStratPart2Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es2-intro',
      type: 'text' as const,
      content: `
# 📖 Passage Reading Strategy

**Part 2 of 7 — How to Read ACT English Passages Efficiently**

Should you read the whole passage first or jump straight to the questions? The answer depends on your skill level, but one approach consistently works best:

**The "Read-As-You-Go" Method:**
1. Start reading from the beginning of the passage.
2. When you hit an underlined portion, pause and answer that question.
3. Continue reading and answering in sequence.

This works because ACT English questions are **ordered by their position** in the passage. You never need to jump around.

**Why NOT skim first?** Unlike ACT Reading, English questions test *local* grammar and style. Skimming wastes time because you'll have to re-read when you reach the questions anyway.
      `
    },
    {
      id: 'act-es2-context',
      type: 'text' as const,
      content: `
## Using Context Clues

Many questions require you to understand the **surrounding sentences** — not just the underlined portion.

**When to read beyond the underline:**
- **Transition questions** — you need to know what comes before AND after.
- **Pronoun reference** — check what noun the pronoun replaces.
- **Verb tense** — the rest of the paragraph establishes the tense.
- **Add/delete questions** — you must understand the paragraph's main idea.

**Example:**

> "The ancient Romans built aqueducts to transport water over long distances. \[Underlined: They was\] engineering marvels that lasted for centuries."

You need the previous sentence to realise "They" refers to "aqueducts" (plural) and the verb must be "were," not "was."

**Rule of Thumb:** Always read at least the sentence before and after the underlined section.
      `
    },
    {
      id: 'act-es2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Strategy Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the recommended approach for reading ACT English passages?',
            options: [
              'Skim the entire passage, then answer all 15 questions.',
              'Read the questions first, then search for answers in the passage.',
              'Read the passage from the start and answer each question as you reach the underlined portion.',
              'Read only the underlined portions and ignore the rest.'
            ],
            correctAnswer: 2,
            explanation: 'The "Read-As-You-Go" method is most efficient: read sequentially and answer questions as you encounter the underlined portions.'
          },
          {
            question: 'Why is context important for pronoun-reference questions?',
            options: [
              'Pronouns are always incorrect on the ACT.',
              'You need to identify the noun the pronoun replaces, which is usually in a nearby sentence.',
              'Context helps you guess the passage topic.',
              'The ACT penalises you for wrong answers, so context reduces risk.'
            ],
            correctAnswer: 1,
            explanation: 'You must find the antecedent (the noun the pronoun replaces) in the surrounding text to check agreement in number and person.'
          }
        ]
      }
    },
    {
      id: 'act-es2-nochange',
      type: 'text' as const,
      content: `
## Navigating the "NO CHANGE" Trap

Students fall into two traps with "NO CHANGE":

**Trap 1 — Always picking it:** If the original sounds okay, they select "NO CHANGE" without checking the other options. This leads to missed errors.

**Trap 2 — Never picking it:** Some students assume there must always be an error. They change things that are already correct, introducing new mistakes.

**How to handle it:**
1. Read the underlined portion and **actively look for an error**.
2. If you spot one, find the choice that fixes ONLY that error.
3. If you don't spot an error, compare all remaining choices — if they all introduce new problems, "NO CHANGE" is correct.

**Stat:** On a typical ACT, "NO CHANGE" is correct for roughly **18–20 out of 75 questions**. If you're picking it much more or less often, recalibrate.
      `
    },
    {
      id: 'act-es2-input1',
      type: 'input-boxes' as const,
      content: `
**Strategy Recall** 📝

1) The recommended reading method is called "Read-As-You-__________."
2) For pronoun questions, check the __________ (the noun the pronoun replaces).
3) "NO CHANGE" is correct for roughly __________–20 out of 75 questions.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Go', 'antecedent', '18'],
        hint1: 'Read as you … (short word meaning "proceed").',
        hint2: 'The grammar term for the noun a pronoun refers back to.',
        hint3: 'It\'s close to 25% of 75, which is about 18 or 19.',
        explanation: '"Read-As-You-Go" means answering questions sequentially. The antecedent is the noun a pronoun replaces. "NO CHANGE" is correct ~18–20 times per test.'
      }
    },
    {
      id: 'act-es2-detail',
      type: 'text' as const,
      content: `
## Questions That Ask About the Whole Passage

A few questions (usually the last one for each passage) ask about the passage **as a whole**:

- *"Suppose the writer's goal had been to write an essay about X. Would this essay successfully fulfil that goal?"*
- *"Which choice would most effectively conclude the essay?"*

**Strategy:** You absorb the passage's overall purpose naturally if you use the Read-As-You-Go method. By the time you reach question 15, you already have a strong sense of the passage's main idea and tone.

**Common Mistake:** Answering "Yes" or "No" correctly but choosing the wrong *reason*. Always check that the explanation matches the passage's actual content.
      `
    },
    {
      id: 'act-es2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Approach Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you encounter a transition question, you should read …',
            options: ['only the underlined word', 'the sentence before AND after the transition', 'the entire passage again', 'just the question stem']
          },
          {
            label: 'A student who picks "NO CHANGE" for 40 out of 75 questions is likely …',
            options: ['performing well — "NO CHANGE" is usually right', 'over-selecting it — the expected rate is ~18–20', 'under-selecting it — they should pick it more', 'within normal range']
          },
          {
            label: 'The last question for each passage typically asks about …',
            options: ['a specific comma placement', 'the passage as a whole', 'vocabulary definitions', 'the title only']
          }
        ],
        correctAnswers: ['the sentence before AND after the transition', 'over-selecting it — the expected rate is ~18–20', 'the passage as a whole'],
        hint1: 'Transitions connect ideas — you need to know what\'s on both sides.',
        hint2: '40 out of 75 is over 53%, far above the expected ~25%.',
        hint3: 'These "big picture" questions come after you\'ve read the full passage.',
        explanation: 'Transition questions need surrounding context. "NO CHANGE" should be selected ~25% of the time (18–20 out of 75). The final question often addresses the passage as a whole.'
      }
    }
  ]
};
