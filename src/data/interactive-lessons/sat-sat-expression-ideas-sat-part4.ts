export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e4-intro',
      type: 'text' as const,
      content: `
# Logical Sequence

**Part 4 of 7 — Logical Sequence**

Place sentences where they logically belong in the paragraph.

Topic sentence usually goes first; conclusion sentence goes last.
      `
    },
    {
      id: 'sat-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes place sentences where they logically belong in the paragraph?',
            options: [
              'Place sentences where they logically belong in the paragraph is a fundamental concept in SAT Reading & Writing',
              'Topic sentence usually goes first; conclusion sentence goes last',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Place sentences where they logically belong in the paragraph'
          }
        ]
      }
    },
    {
      id: 'sat-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Add or delete sentences based on whether they support the main point.

**SAT Tip:** Ask: does this sentence fit the flow and purpose of the paragraph?.
      `
    },
    {
      id: 'sat-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for logical sequence?',
            options: [
              'Add or delete sentences based on whether they support the main point',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Add or delete sentences based on whether they support the main point'
          }
        ]
      }
    },
    {
      id: 'sat-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Logical Sequence:',
            options: ['Place sentences where they logically belong in the', 'Topic sentence usually goes first; conclusion sent', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Add or delete sentences based on whether they supp', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Place sentences where they logically belong in the', 'Add or delete sentences based on whether they supp'],
        hint1: 'Think about logical sequence',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Place sentences where they logically belong in the paragraph. Add or delete sentences based on whether they support the main point.'
      }
    }
  ]
}
