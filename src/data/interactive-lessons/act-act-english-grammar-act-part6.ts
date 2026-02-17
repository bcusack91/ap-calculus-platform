export const actEnglishGrammarPart6Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Modifiers should be next to what they modify.

Dangling modifier: the subject being modified is missing from the sentence.
      `
    },
    {
      id: 'act-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Modifiers should be next to what they…" refer to in ACT prep?',
            options: [
              'Parallel structure: items in a list should have the same grammatical form.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'Modifiers should be next to what they modify.',
              'the subject being modified is missing from the sentence.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Modifiers should be next to what they modify. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'the subject being modified is missing from the sentence.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'Modifiers should be next to what they modify.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Parallel structure: items in a list should have the same grammatical form. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parallel structure: items in a list should have the same grammatical form.

**ACT Tip:** Not only... but also; either... or; neither... nor — keep both parts parallel.
      `
    },
    {
      id: 'act-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Modifiers should be next to what they modify.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'the subject being modified is missing from the sentence.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dangling modifier',
            options: ['Not only... but also; either... or; neither... nor — keep both parts parallel.', 'the subject being modified is missing from the sentence.', 'Modifiers should be next to what they modify.', 'Parallel structure: items in a list should have the same grammatical form.']
          },
          {
            label: 'Key Insight',
            options: ['Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Modifiers should be next to what they modify.', 'the subject being modified is missing from the sentence.']
          },
          {
            label: 'ACT Tip',
            options: ['Parallel structure: items in a list should have the same grammatical form.', 'the subject being modified is missing from the sentence.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Modifiers should be next to what they modify.']
          }
        ],
        correctAnswers: ['the subject being modified is missing from the sentence.', 'Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Dangling modifier: the subject being modified is missing from the sentence. Key Insight: Parallel structure: items in a list should have the same grammatical form. ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel.'
      }
    }
  ]
}
