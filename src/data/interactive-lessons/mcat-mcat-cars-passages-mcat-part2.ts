export const mcatCarsPsgPart2Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-2-intro',
      type: 'text' as const,
      content: `
# Social Science Passages

**Part 2 of 7 — Social Science Passages**

Social science: psychology, sociology, anthropology, economics, political science.

Data or studies may be described — evaluate the methodology and conclusions.
      `
    },
    {
      id: 'mcat-2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in social science passages?',
            options: [
              'Social science: psychology, sociology, anthropology, economics, political science',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: 'Social science: psychology, sociology, anthropology, economics, political science'
          }
        ]
      }
    },
    {
      id: 'mcat-2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Correlation vs. causation: does the author conflate the two?.

**MCAT Tip:** Identify assumptions: what does the author take for granted?.
      `
    },
    {
      id: 'mcat-2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to social science passages?',
            options: [
              'Correlation vs. causation: does the author conflate the two?',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'Correlation vs. causation: does the author conflate the two?'
          }
        ]
      }
    },
    {
      id: 'mcat-2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Core concept for Social Science Passages:',
            options: ['Social science: psychology, sociology, anthropology, economi', 'Data or studies may be described — evaluate the methodology ', 'Not MCAT-relevant', 'Cannot be determined']
          },
          {
            label: 'MCAT application:',
            options: ['Correlation vs. causation: does the author conflate the two?', 'Skip this topic', 'Only on practice tests', 'Not applicable']
          }
        ],
        correctAnswers: ['Social science: psychology, sociology, anthropology, economi', 'Correlation vs. causation: does the author conflate the two?'],
        hint1: 'Think about social science passages',
        hint2: 'Consider the MCAT application',
        explanation: 'Social science: psychology, sociology, anthropology, economics, political science. Correlation vs. causation: does the author conflate the two?.'
      }
    }
  ]
}
