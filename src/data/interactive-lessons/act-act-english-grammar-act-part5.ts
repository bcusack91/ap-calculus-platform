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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes modifiers should be next to what they modify?',
            options: [
              'Modifiers should be next to what they modify is a key concept for ACT English/Reading',
              'Dangling modifier: the subject being modified is missing from the sentence',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Modifiers should be next to what they modify'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for modifiers & parallelism?',
            options: [
              'Parallel structure: items in a list should have the same grammatical form',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Parallel structure: items in a list should have the same grammatical form'
          }
        ]
      }
    },
    {
      id: 'act-e5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Modifiers & Parallelism:',
            options: ['Modifiers should be next to what they modify', 'Dangling modifier: the subject being modified is m', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Parallel structure: items in a list should have th', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Modifiers should be next to what they modify', 'Parallel structure: items in a list should have th'],
        hint1: 'Think about modifiers & parallelism',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Modifiers should be next to what they modify. Parallel structure: items in a list should have the same grammatical form.'
      }
    }
  ]
}
