export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e1-intro',
      type: 'text' as const,
      content: `
# 📝 Exponential Functions

**Part 1 of 7 — Exponential Growth & Decay**

Growth: f(x) = a · bˣ where b > 1.

Decay: f(x) = a · bˣ where 0 < b < 1.
      `
    },
    {
      id: 'sat-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes growth?',
            options: [
              'Growth is a fundamental concept in SAT Math',
              'Decay: f(x) = a · bˣ where 0 < b < 1',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Growth: f(x) = a · bˣ where b > 1'
          }
        ]
      }
    },
    {
      id: 'sat-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** a = initial value (when x = 0).

**SAT Tip:** Growth rate r: b = 1 + r; Decay rate r: b = 1 - r.
      `
    },
    {
      id: 'sat-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for exponential growth & decay?',
            options: [
              'a = initial value (when x = 0)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'a = initial value (when x = 0)'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Exponential Growth & Decay:',
            options: ['Growth: f(x) = a · bˣ where b > 1', 'Decay: f(x) = a · bˣ where 0 < b < 1', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['a = initial value (when x = 0)', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Growth: f(x) = a · bˣ where b > 1', 'a = initial value (when x = 0)'],
        hint1: 'Think about exponential growth & decay',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Growth: f(x) = a · bˣ where b > 1. a = initial value (when x = 0).'
      }
    }
  ]
}
