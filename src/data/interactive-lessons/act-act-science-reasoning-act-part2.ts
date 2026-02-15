export const actScienceReasonPart2Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Hypothesis Testing

**Part 2 of 7 — Hypothesis Testing**

Hypothesis predicts the relationship between variables.

If the data supports the hypothesis, it is not "proven" — just supported.
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
            question: 'Which statement best describes hypothesis predicts the relationship between variables?',
            options: [
              'Hypothesis predicts the relationship between variables is a key concept for ACT Science',
              'If the data supports the hypothesis, it is not "proven" — just supported',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Hypothesis predicts the relationship between variables'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If the data contradicts the hypothesis, it must be revised or rejected.

**ACT Tip:** Statistical significance: is the result likely due to the variable or just chance?.
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
            question: 'What is a key strategy for hypothesis testing?',
            options: [
              'If the data contradicts the hypothesis, it must be revised or rejected',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'If the data contradicts the hypothesis, it must be revised or rejected'
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
            label: 'Key concept for Hypothesis Testing:',
            options: ['Hypothesis predicts the relationship between varia', 'If the data supports the hypothesis, it is not "pr', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['If the data contradicts the hypothesis, it must be', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Hypothesis predicts the relationship between varia', 'If the data contradicts the hypothesis, it must be'],
        hint1: 'Think about hypothesis testing',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Hypothesis predicts the relationship between variables. If the data contradicts the hypothesis, it must be revised or rejected.'
      }
    }
  ]
}
