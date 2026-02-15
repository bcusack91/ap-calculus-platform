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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
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
      id: 'act-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Modifiers should be next to what they modify', 'Dangling modifier: the subject being modified is m', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Parallel structure: items in a list should have th', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Modifiers should be next to what they modify', 'Parallel structure: items in a list should have th'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Modifiers should be next to what they modify. Parallel structure: items in a list should have the same grammatical form.'
      }
    }
  ]
}
