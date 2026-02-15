export const satExpressionPart2Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Combining Sentences

**Part 2 of 7 — Combining Sentences**

Combine sentences to improve flow and eliminate repetition.

Use relative clauses (who, which, that), appositives, or participial phrases.
      `
    },
    {
      id: 'sat-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes combine sentences to improve flow and eliminate repetition?',
            options: [
              'Combine sentences to improve flow and eliminate repetition is a fundamental concept in SAT Reading & Writing',
              'Use relative clauses (who, which, that), appositives, or participial phrases',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Combine sentences to improve flow and eliminate repetition'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Maintain the meaning and emphasis of the original sentences.

**SAT Tip:** Shorter combined version is usually preferred.
      `
    },
    {
      id: 'sat-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for combining sentences?',
            options: [
              'Maintain the meaning and emphasis of the original sentences',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Maintain the meaning and emphasis of the original sentences'
          }
        ]
      }
    },
    {
      id: 'sat-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Combining Sentences:',
            options: ['Combine sentences to improve flow and eliminate re', 'Use relative clauses (who, which, that), appositiv', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Maintain the meaning and emphasis of the original ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Combine sentences to improve flow and eliminate re', 'Maintain the meaning and emphasis of the original '],
        hint1: 'Think about combining sentences',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Combine sentences to improve flow and eliminate repetition. Maintain the meaning and emphasis of the original sentences.'
      }
    }
  ]
}
