export const satExpressionPart6Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Rhetorical synthesis: combine notes/bullet points into effective writing.

Match the purpose: inform, argue, compare, etc..
      `
    },
    {
      id: 'sat-e6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes rhetorical synthesis?',
            options: [
              'Rhetorical synthesis is a fundamental concept in SAT Reading & Writing',
              'Match the purpose: inform, argue, compare, etc.',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Rhetorical synthesis: combine notes/bullet points into effective writing'
          }
        ]
      }
    },
    {
      id: 'sat-e6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Choose the option that best accomplishes the stated goal.

**SAT Tip:** Consider audience and tone when selecting the best synthesis.
      `
    },
    {
      id: 'sat-e6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Choose the option that best accomplishes the stated goal',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Choose the option that best accomplishes the stated goal'
          }
        ]
      }
    },
    {
      id: 'sat-e6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['Rhetorical synthesis: combine notes/bullet points ', 'Match the purpose: inform, argue, compare, etc.', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Choose the option that best accomplishes the state', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Rhetorical synthesis: combine notes/bullet points ', 'Choose the option that best accomplishes the state'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Rhetorical synthesis: combine notes/bullet points into effective writing. Choose the option that best accomplishes the stated goal.'
      }
    }
  ]
}
