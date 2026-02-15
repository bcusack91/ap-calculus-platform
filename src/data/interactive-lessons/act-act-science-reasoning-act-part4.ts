export const actScienceReasonPart4Data = {
  topicSlug: 'act-science-reasoning-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Applying Concepts

**Part 4 of 7 — Applying Concepts**

Apply scientific principles to new situations or data.

If you understand the concept, you can predict outcomes in novel scenarios.
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
            question: 'Which statement best describes apply scientific principles to new situations or data?',
            options: [
              'Apply scientific principles to new situations or data is a key concept for ACT Science',
              'If you understand the concept, you can predict outcomes in novel scenarios',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Apply scientific principles to new situations or data'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Connect findings to real-world applications.

**ACT Tip:** Analogical reasoning: this experiment is like that situation because....
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
            question: 'What is a key strategy for applying concepts?',
            options: [
              'Connect findings to real-world applications',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Connect findings to real-world applications'
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
            label: 'Key concept for Applying Concepts:',
            options: ['Apply scientific principles to new situations or d', 'If you understand the concept, you can predict out', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Connect findings to real-world applications', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Apply scientific principles to new situations or d', 'Connect findings to real-world applications'],
        hint1: 'Think about applying concepts',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Apply scientific principles to new situations or data. Connect findings to real-world applications.'
      }
    }
  ]
}
