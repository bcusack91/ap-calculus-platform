export const satExpressionPart3Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e3-intro',
      type: 'text' as const,
      content: `
# Transitions & Flow

**Part 3 of 7 — Transitions & Flow**

Transitions show relationships: addition, contrast, cause/effect, sequence.

However/nevertheless = contrast; Furthermore/moreover = addition.
      `
    },
    {
      id: 'sat-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes transitions show relationships?',
            options: [
              'Transitions show relationships is a fundamental concept in SAT Reading & Writing',
              'However/nevertheless = contrast; Furthermore/moreover = addition',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Transitions show relationships: addition, contrast, cause/effect, sequence'
          }
        ]
      }
    },
    {
      id: 'sat-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Therefore/consequently = cause-effect; Similarly/likewise = comparison.

**SAT Tip:** Choose transitions based on the logical relationship between ideas.
      `
    },
    {
      id: 'sat-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for transitions & flow?',
            options: [
              'Therefore/consequently = cause-effect; Similarly/likewise = comparison',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Therefore/consequently = cause-effect; Similarly/likewise = comparison'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Transitions & Flow:',
            options: ['Transitions show relationships: addition, contrast', 'However/nevertheless = contrast; Furthermore/moreo', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Therefore/consequently = cause-effect; Similarly/l', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Transitions show relationships: addition, contrast', 'Therefore/consequently = cause-effect; Similarly/l'],
        hint1: 'Think about transitions & flow',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Transitions show relationships: addition, contrast, cause/effect, sequence. Therefore/consequently = cause-effect; Similarly/likewise = comparison.'
      }
    }
  ]
}
