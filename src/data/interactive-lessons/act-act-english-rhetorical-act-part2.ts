export const actRhetoricalPart2Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh2-intro',
      type: 'text' as const,
      content: `
# 🗂️ Organization

**Part 2 of 7 — Logical Order, Transitions, and Topic Sentences**

Organization questions test whether you can tell if sentences and paragraphs are arranged **logically**. You'll see questions like:

- *"For the sake of logic and coherence, Sentence 3 should be placed …"*
- *"Which of the following sentences would best introduce this paragraph?"*
- *"Which sequence of sentences makes this paragraph most logical?"*

**Three Key Principles:**

| Principle | What to Look For |
|-----------|-----------------|
| **Chronological order** | Time words: first, then, later, finally |
| **Cause → Effect** | Because, as a result, consequently |
| **General → Specific** | Topic sentence first, then supporting details |

Approximately **4–6 questions per test** focus on organization and paragraph structure.
      `
    },
    {
      id: 'act-rh2-logical',
      type: 'text' as const,
      content: `
## Logical Sentence Order

When the ACT asks you to move a sentence, follow these steps:

**Step 1:** Read the sentence carefully. Does it introduce a new idea, give a detail, or conclude?

**Step 2:** Look for **transition clues** — words like "this," "that," "these results," "however," or "for example" that point to a preceding idea.

**Step 3:** Find where the sentence fits so that **every pronoun and transition has a clear reference**.

**Worked Example:**

> [1] The museum opened in 1995 and quickly became a local landmark.
> [2] For example, the dinosaur exhibit alone attracted over 50,000 visitors in its first year.
> [3] It was founded by a group of retired teachers who wanted to make science accessible.
> [4] The museum's popularity grew steadily over the following decade.

**Best order:** 3 → 1 → 4 → 2

- Sentence 3 introduces the founding (earliest event).
- Sentence 1 mentions the opening (next chronologically).
- Sentence 4 describes growth over time.
- Sentence 2 gives a specific example of that popularity ("For example" needs something to refer to).
      `
    },
    {
      id: 'act-rh2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Placement** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"These findings suggest that sleep deprivation significantly impacts memory." Where should this sentence most logically be placed?',
            options: [
              'Before any study details are mentioned',
              'After a paragraph describing a sleep study\'s results',
              'At the very beginning of the essay as a hook',
              'In a paragraph about exercise and health'
            ],
            correctAnswer: 1,
            explanation: '"These findings" is a demonstrative reference — it must follow a description of the study and its data. Placing it before the study details would leave "these findings" without a referent.'
          },
          {
            question: 'A paragraph begins: "The city council voted to expand the park." Which sentence best follows this opening?',
            options: [
              'Parks are found in many cities around the world.',
              'The expansion would add three acres of walking trails and a new playground.',
              'In 1920, the first public park in America was established.',
              'Swimming pools require regular maintenance and cleaning.'
            ],
            correctAnswer: 1,
            explanation: 'The best follow-up provides specific details about the expansion mentioned in the topic sentence. The other options are either too broad, historically tangential, or completely off-topic.'
          }
        ]
      }
    },
    {
      id: 'act-rh2-topic',
      type: 'text' as const,
      content: `
## Topic Sentences & Paragraph Introductions

A **topic sentence** introduces the main idea of a paragraph. On the ACT, you may be asked to choose the best opening sentence.

**A strong topic sentence:**
- States the paragraph's main point clearly.
- Connects to the previous paragraph (if it's not the first).
- Is neither too broad nor too narrow.

**Example:**

Paragraph discusses how bees pollinate wildflowers, crops, and fruit trees.

Which is the best topic sentence?
- (A) "Bees are insects." — Too broad.
- (B) "Pollination is essential for agriculture." — Doesn't mention bees.
- (C) "Bees play a vital role in pollinating a wide variety of plants." — ✅ Perfect.
- (D) "Honey production is a multi-billion-dollar industry." — Wrong focus.

**Transition Tip for Topic Sentences:** If the previous paragraph discussed threats to bee populations, the topic sentence might begin with "Despite these challenges, bees continue to play a vital role …" to create a bridge.
      `
    },
    {
      id: 'act-rh2-input1',
      type: 'input-boxes' as const,
      content: `
**Organization Concepts** 📝

Fill in the correct term for each description.

1) A sentence that states the main idea of a paragraph is called a __________ sentence (two words).
2) Arranging events by when they happened is called __________ order (one word).
3) "These results," "this approach," and "such methods" are examples of __________ references (one word, starts with "d").
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['topic', 'chronological', 'demonstrative'],
        hint1: 'It "announces" what the paragraph will be about — a ______ sentence.',
        hint2: 'From the Greek word for time: chrono-.',
        hint3: 'Words like "this," "that," "these" are called d_________ pronouns or references.',
        explanation: 'A topic sentence introduces the paragraph\'s main idea. Chronological order arranges events by time. Demonstrative references (this, that, these, those) point back to previously mentioned ideas.'
      }
    },
    {
      id: 'act-rh2-transitions',
      type: 'text' as const,
      content: `
## Paragraph-Level Transitions

The ACT tests whether the **first sentence of a new paragraph** smoothly connects to the previous paragraph.

**Common transition functions:**

| Function | Example Openers |
|----------|----------------|
| Continuation | "In addition," "Furthermore," "Similarly," |
| Contrast | "However," "On the other hand," "Despite this," |
| Cause/Effect | "As a result," "Consequently," "Therefore," |
| Example | "For instance," "To illustrate," |
| Time shift | "Later that year," "By the 1990s," |

**Red Flag:** If a new paragraph starts with "Also" but the previous paragraph made an opposing point, the transition is wrong — you likely need "However" or "Nevertheless."

**ACT Tip:** Read the **last sentence of the previous paragraph** and the **first sentence of the current one** back-to-back. The connection should feel natural and logical.
      `
    },
    {
      id: 'act-rh2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Organization Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A sentence with "For example" should be placed …',
            options: ['before the general claim it illustrates', 'after the general claim it illustrates', 'at the beginning of the essay', 'in a different paragraph from the claim']
          },
          {
            label: 'If a paragraph discusses a problem and the next discusses a solution, the best transition word is …',
            options: ['Similarly', 'However', 'Furthermore', 'To address this issue']
          },
          {
            label: '"First … then … finally" signal which type of organization?',
            options: ['Cause and effect', 'Compare and contrast', 'Chronological / sequential', 'Spatial']
          }
        ],
        correctAnswers: ['after the general claim it illustrates', 'To address this issue', 'Chronological / sequential'],
        hint1: 'Examples support claims — they follow them, not precede them.',
        hint2: 'Moving from problem to solution is neither contrast nor addition — it is addressing the issue.',
        hint3: '"First, then, finally" = time/sequence order.',
        explanation: '"For example" introduces supporting evidence after a claim. Problem-to-solution transitions use phrases like "To address this issue." Sequential signal words like "first, then, finally" indicate chronological organization.'
      }
    }
  ]
};
