export const actScienceReasonPart3Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s3-intro',
      type: 'text' as const,
      content: `
# Drawing Conclusions

**Part 3 of 7 — Drawing Conclusions**

Conclusions must be based on the actual data, not assumptions.

Correlation does not equal causation.
      `
    },
    {
      id: 'act-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes conclusions must be based on the actual data, not assumptions?',
            options: [
              'Conclusions must be based on the actual data, not assumptions is a key concept for ACT Science',
              'Correlation does not equal causation',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Conclusions must be based on the actual data, not assumptions'
          }
        ]
      }
    },
    {
      id: 'act-s3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look for alternative explanations before accepting a conclusion.

**ACT Tip:** Valid conclusions are limited to the scope of the experiment.
      `
    },
    {
      id: 'act-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for drawing conclusions?',
            options: [
              'Look for alternative explanations before accepting a conclusion',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Look for alternative explanations before accepting a conclusion'
          }
        ]
      }
    },
    {
      id: 'act-s3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Drawing Conclusions:',
            options: ['Conclusions must be based on the actual data, not ', 'Correlation does not equal causation', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look for alternative explanations before accepting', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Conclusions must be based on the actual data, not ', 'Look for alternative explanations before accepting'],
        hint1: 'Think about drawing conclusions',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Conclusions must be based on the actual data, not assumptions. Look for alternative explanations before accepting a conclusion.'
      }
    }
  ]
}
