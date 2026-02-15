export const actScienceReasonPart1Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s1-intro',
      type: 'text' as const,
      content: `
# 📋 Science Reasoning

**Part 1 of 7 — Scientific Method**

Observation → Question → Hypothesis → Experiment → Analysis → Conclusion.

A hypothesis is testable and falsifiable.
      `
    },
    {
      id: 'act-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes observation → question → hypothesis → experiment → analysis → conclusion?',
            options: [
              'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion is a key concept for ACT Science',
              'A hypothesis is testable and falsifiable',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion'
          }
        ]
      }
    },
    {
      id: 'act-s1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Theory: well-supported explanation; Law: describes a consistent pattern.

**ACT Tip:** Scientific method is iterative — new questions arise from conclusions.
      `
    },
    {
      id: 'act-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for scientific method?',
            options: [
              'Theory: well-supported explanation; Law: describes a consistent pattern',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Theory: well-supported explanation; Law: describes a consistent pattern'
          }
        ]
      }
    },
    {
      id: 'act-s1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Scientific Method:',
            options: ['Observation → Question → Hypothesis → Experiment →', 'A hypothesis is testable and falsifiable', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Theory: well-supported explanation; Law: describes', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Observation → Question → Hypothesis → Experiment →', 'Theory: well-supported explanation; Law: describes'],
        hint1: 'Think about scientific method',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Observation → Question → Hypothesis → Experiment → Analysis → Conclusion. Theory: well-supported explanation; Law: describes a consistent pattern.'
      }
    }
  ]
}
