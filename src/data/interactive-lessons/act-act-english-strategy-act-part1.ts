export const actEnglishStratPart1Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-e1-intro',
      type: 'text' as const,
      content: `
# 📋 English Strategy

**Part 1 of 7 — ACT English Overview**

75 questions in 45 minutes = 36 seconds per question.

5 passages with 15 questions each.
      `
    },
    {
      id: 'act-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes 75 questions in 45 minutes = 36 seconds per question?',
            options: [
              '75 questions in 45 minutes = 36 seconds per question is a key concept for ACT English/Reading',
              '5 passages with 15 questions each',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '75 questions in 45 minutes = 36 seconds per question'
          }
        ]
      }
    },
    {
      id: 'act-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Two main types: conventions of standard English (grammar) and production of writing (rhetoric).

**ACT Tip:** Questions are embedded in the passage — read the full context.
      `
    },
    {
      id: 'act-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for act english overview?',
            options: [
              'Two main types: conventions of standard English (grammar) and production of writing (rhetoric)',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Two main types: conventions of standard English (grammar) and production of writing (rhetoric)'
          }
        ]
      }
    },
    {
      id: 'act-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for ACT English Overview:',
            options: ['75 questions in 45 minutes = 36 seconds per questi', '5 passages with 15 questions each', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Two main types: conventions of standard English (g', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['75 questions in 45 minutes = 36 seconds per questi', 'Two main types: conventions of standard English (g'],
        hint1: 'Think about act english overview',
        hint2: 'Consider the best ACT strategy',
        explanation: '75 questions in 45 minutes = 36 seconds per question. Two main types: conventions of standard English (grammar) and production of writing (rhetoric).'
      }
    }
  ]
}
