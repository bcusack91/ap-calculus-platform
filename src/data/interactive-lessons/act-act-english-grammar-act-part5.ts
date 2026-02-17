export const actEnglishGrammarPart5Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e5-intro',
      type: 'text' as const,
      content: `
# Modifiers & Parallelism

**Part 5 of 7 — Modifiers & Parallelism**

Modifiers should be next to what they modify.

Dangling modifier: the subject being modified is missing from the sentence.
      `
    },
    {
      id: 'act-e5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Modifiers should be next to what they…" refer to in ACT prep?',
            options: [
              'the subject being modified is missing from the sentence.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'Modifiers should be next to what they modify.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Modifiers should be next to what they modify. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Modifiers should be next to what they modify.',
              'the subject being modified is missing from the sentence.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Parallel structure: items in a list should have the same grammatical form. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parallel structure: items in a list should have the same grammatical form.

**ACT Tip:** Not only... but also; either... or; neither... nor — keep both parts parallel.
      `
    },
    {
      id: 'act-e5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Modifiers & Parallelism, which correctly describes ACT Tip?',
            options: [
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'the subject being modified is missing from the sentence.',
              'Modifiers should be next to what they modify.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dangling modifier',
            options: ['Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Modifiers should be next to what they modify.', 'Parallel structure: items in a list should have the same grammatical form.', 'the subject being modified is missing from the sentence.']
          },
          {
            label: 'Key Insight',
            options: ['Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Modifiers should be next to what they modify.', 'Parallel structure: items in a list should have the same grammatical form.', 'the subject being modified is missing from the sentence.']
          },
          {
            label: 'ACT Tip',
            options: ['Modifiers should be next to what they modify.', 'the subject being modified is missing from the sentence.', 'Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.']
          }
        ],
        correctAnswers: ['the subject being modified is missing from the sentence.', 'Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.'],
        hint1: 'Think about what each concept specifically describes in Modifiers & Parallelism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Modifiers & Parallelism describes a specific idea. Dangling modifier: the subject being modified is missing from the sentence. Key Insight: Parallel structure: items in a list should have the same grammatical form. ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel.'
      }
    }
  ]
}
