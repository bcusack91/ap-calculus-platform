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
              'Skim the entire passage, then answer all of its questions.',
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

**Calibration check:** "NO CHANGE" is one choice out of four, not your default. If you find yourself picking it on most questions in a passage — or never picking it at all — slow down and recheck.
      `
    },
    {
      id: 'act-es2-input1',
      type: 'input-boxes' as const,
      content: `
**Strategy Recall** 📝

1) The recommended reading method is called "Read-As-You-__________."

2) For pronoun questions, check the __________ (the noun the pronoun replaces).

3) For a transition question, read the sentence __________ the transition AND the sentence after it.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Go', 'antecedent', 'before'],
        hint1: 'Read as you … (short word meaning "proceed").',
        hint2: 'The grammar term for the noun a pronoun refers back to.',
        hint3: 'A transition links two ideas — the one that comes first and the one that follows.',
        explanation: '"Read-As-You-Go" means answering questions sequentially. The antecedent is the noun a pronoun replaces. A transition connects the sentence before it to the sentence after it, so you need both.'
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

**Strategy:** You absorb the passage's overall purpose naturally if you use the Read-As-You-Go method. By the time you reach the passage's last question, you already have a strong sense of its main idea and tone.

**Common Mistake:** Answering "Yes" or "No" correctly but choosing the wrong *reason*. Always check that the explanation matches the passage's actual content.

**Choosing a concluding sentence:** The best conclusion **ties back to the main idea** of the paragraph or essay — often by echoing the opening. Reject choices that introduce a new topic, add a stray detail, or merely repeat one minor point.
- *Essay opens:* "Community gardens turn empty lots into shared spaces."
- *Strong conclusion:* "By reclaiming forgotten land, these gardens give neighbors a place to grow food — and to know one another." (returns to the opening idea)
- *Weak conclusion:* "Tomatoes need six hours of sun a day." (a new, narrow detail)
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
            label: 'A student who picks "NO CHANGE" for 30 of the 50 questions is likely …',
            options: ['performing well — "NO CHANGE" is usually right', 'over-selecting it — it should not be the default answer', 'under-selecting it — they should pick it more', 'within normal range — any rate is fine']
          },
          {
            label: 'The last question for each passage typically asks about …',
            options: ['a specific comma placement', 'the passage as a whole', 'vocabulary definitions', 'the title only']
          }
        ],
        correctAnswers: ['the sentence before AND after the transition', 'over-selecting it — it should not be the default answer', 'the passage as a whole'],
        hint1: 'Transitions connect ideas — you need to know what\'s on both sides.',
        hint2: '30 of 50 is 60% — "NO CHANGE" is one of four choices, not the usual answer.',
        hint3: 'These "big picture" questions come after you\'ve read the full passage.',
        explanation: 'Transition questions need surrounding context. Choosing "NO CHANGE" on most questions means the student is accepting errors instead of checking for them. The final question often addresses the passage as a whole.'
      }
    }
  ]
};
