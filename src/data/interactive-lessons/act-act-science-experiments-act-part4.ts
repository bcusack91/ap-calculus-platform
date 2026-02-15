export const actScienceExpPart4Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Conflicting Viewpoints

**Part 4 of 7 — Conflicting Viewpoints**

Two or more scientists/students disagree about an explanation.

Read each viewpoint carefully and identify the key claims.
      `
    },
    {
      id: 'act-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes two or more scientists/students disagree about an explanation?',
            options: [
              'Two or more scientists/students disagree about an explanation is a key concept for ACT Science',
              'Read each viewpoint carefully and identify the key claims',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Two or more scientists/students disagree about an explanation'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Find where they agree and where they differ.

**ACT Tip:** Questions ask: which data supports/contradicts which viewpoint?.
      `
    },
    {
      id: 'act-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for conflicting viewpoints?',
            options: [
              'Find where they agree and where they differ',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Find where they agree and where they differ'
          }
        ]
      }
    },
    {
      id: 'act-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Conflicting Viewpoints:',
            options: ['Two or more scientists/students disagree about an ', 'Read each viewpoint carefully and identify the key', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Find where they agree and where they differ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Two or more scientists/students disagree about an ', 'Find where they agree and where they differ'],
        hint1: 'Think about conflicting viewpoints',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Two or more scientists/students disagree about an explanation. Find where they agree and where they differ.'
      }
    }
  ]
}
