export const actScienceDataPart2Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Interpreting Graphs

**Part 2 of 7 — Interpreting Graphs**

Read both axis labels and understand what is being plotted.

Identify the independent (x-axis) and dependent (y-axis) variables.
      `
    },
    {
      id: 'act-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes read both axis labels and understand what is being plotted?',
            options: [
              'Read both axis labels and understand what is being plotted is a key concept for ACT Science',
              'Identify the independent (x-axis) and dependent (y-axis) variables',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read both axis labels and understand what is being plotted'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Note the scale — is it linear, logarithmic, or broken?.

**ACT Tip:** Multiple lines/bars: use the legend to identify each data series.
      `
    },
    {
      id: 'act-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for interpreting graphs?',
            options: [
              'Note the scale — is it linear, logarithmic, or broken?',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Note the scale — is it linear, logarithmic, or broken?'
          }
        ]
      }
    },
    {
      id: 'act-s2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Interpreting Graphs:',
            options: ['Read both axis labels and understand what is being', 'Identify the independent (x-axis) and dependent (y', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Note the scale — is it linear, logarithmic, or bro', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read both axis labels and understand what is being', 'Note the scale — is it linear, logarithmic, or bro'],
        hint1: 'Think about interpreting graphs',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Read both axis labels and understand what is being plotted. Note the scale — is it linear, logarithmic, or broken?.'
      }
    }
  ]
}
