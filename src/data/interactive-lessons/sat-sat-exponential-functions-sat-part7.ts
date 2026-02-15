export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

y-intercept: initial value in context.

Base: growth/decay factor per time period.
      `
    },
    {
      id: 'sat-e7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes y-intercept?',
            options: [
              'y-intercept is a fundamental concept in SAT Math',
              'Base: growth/decay factor per time period',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'y-intercept: initial value in context'
          }
        ]
      }
    },
    {
      id: 'sat-e7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Exponent: often involves time.

**SAT Tip:** Doubling time: solve a · 2ᵗ/ᵈ or use the formula d = ln(2)/ln(b).
      `
    },
    {
      id: 'sat-e7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Exponent: often involves time',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Exponent: often involves time'
          }
        ]
      }
    },
    {
      id: 'sat-e7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['y-intercept: initial value in context', 'Base: growth/decay factor per time period', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Exponent: often involves time', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['y-intercept: initial value in context', 'Exponent: often involves time'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'y-intercept: initial value in context. Exponent: often involves time.'
      }
    }
  ]
}
