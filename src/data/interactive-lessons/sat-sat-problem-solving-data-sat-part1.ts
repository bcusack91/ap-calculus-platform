export const satProbSolvDataPart1Data = {
  topicSlug: 'sat-problem-solving-data-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📝 Problem Solving Data

**Part 1 of 7 — Reading Tables & Graphs**

Read axis labels and units carefully.

Identify trends: increasing, decreasing, or constant.
      `
    },
    {
      id: 'sat-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes read axis labels and units carefully?',
            options: [
              'Read axis labels and units carefully is a fundamental concept in SAT Math',
              'Identify trends: increasing, decreasing, or constant',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read axis labels and units carefully'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Interpolate (between data points) and extrapolate (beyond data).

**SAT Tip:** Bar graphs vs. line graphs vs. pie charts: each shows different things.
      `
    },
    {
      id: 'sat-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for reading tables & graphs?',
            options: [
              'Interpolate (between data points) and extrapolate (beyond data)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Interpolate (between data points) and extrapolate (beyond data)'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Reading Tables & Graphs:',
            options: ['Read axis labels and units carefully', 'Identify trends: increasing, decreasing, or consta', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Interpolate (between data points) and extrapolate ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read axis labels and units carefully', 'Interpolate (between data points) and extrapolate '],
        hint1: 'Think about reading tables & graphs',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Read axis labels and units carefully. Interpolate (between data points) and extrapolate (beyond data).'
      }
    }
  ]
}
