export const actEnglishGrammarPart7Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Modifiers should be next to what they modify.

Dangling modifier: the subject being modified is missing from the sentence.
      `
    },
    {
      id: 'act-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Modifiers should be next to what they…?',
            options: [
              'Modifiers should be next to what they modify.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.',
              'the subject being modified is missing from the sentence.',
              'Parallel structure: items in a list should have the same grammatical form.'
            ],
            correctAnswer: 0,
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
      id: 'act-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Parallel structure: items in a list should have the same grammatical form.

**ACT Tip:** Not only... but also; either... or; neither... nor — keep both parts parallel.
      `
    },
    {
      id: 'act-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'the subject being modified is missing from the sentence.',
              'Parallel structure: items in a list should have the same grammatical form.',
              'Modifiers should be next to what they modify.',
              'Not only... but also; either... or; neither... nor — keep both parts parallel.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dangling modifier',
            options: ['Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Modifiers should be next to what they modify.', 'the subject being modified is missing from the sentence.', 'Parallel structure: items in a list should have the same grammatical form.']
          },
          {
            label: 'Key Insight',
            options: ['Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.', 'the subject being modified is missing from the sentence.', 'Modifiers should be next to what they modify.']
          },
          {
            label: 'ACT Tip',
            options: ['Not only... but also; either... or; neither... nor — keep both parts parallel.', 'Parallel structure: items in a list should have the same grammatical form.', 'Modifiers should be next to what they modify.', 'the subject being modified is missing from the sentence.']
          }
        ],
        correctAnswers: ['the subject being modified is missing from the sentence.', 'Parallel structure: items in a list should have the same grammatical form.', 'Not only... but also; either... or; neither... nor — keep both parts parallel.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Dangling modifier: the subject being modified is missing from the sentence. Key Insight: Parallel structure: items in a list should have the same grammatical form. ACT Tip: Not only... but also; either... or; neither... nor — keep both parts parallel.'
      }
    }
  ]
}
