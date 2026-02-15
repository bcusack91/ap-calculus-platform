export const actScienceExpPart2Data = {
  topicSlug: 'act-science-experiments-act',
  sections: [
    {
      id: 'act-s2-intro',
      type: 'text' as const,
      content: `
# Variables & Controls

**Part 2 of 7 — Variables & Controls**

Identify the IV, DV, and constants in each experiment.

A good experiment changes only one variable at a time.
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
            question: 'Which statement best describes identify the iv, dv, and constants in each experiment?',
            options: [
              'Identify the IV, DV, and constants in each experiment is a key concept for ACT Science',
              'A good experiment changes only one variable at a time',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Identify the IV, DV, and constants in each experiment'
          }
        ]
      }
    },
    {
      id: 'act-s2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sample size matters: larger samples give more reliable results.

**ACT Tip:** Replication: repeating the experiment to verify results.
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
            question: 'What is a key strategy for variables & controls?',
            options: [
              'Sample size matters: larger samples give more reliable results',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Sample size matters: larger samples give more reliable results'
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
            label: 'Key concept for Variables & Controls:',
            options: ['Identify the IV, DV, and constants in each experim', 'A good experiment changes only one variable at a t', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Sample size matters: larger samples give more reli', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Identify the IV, DV, and constants in each experim', 'Sample size matters: larger samples give more reli'],
        hint1: 'Think about variables & controls',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Identify the IV, DV, and constants in each experiment. Sample size matters: larger samples give more reliable results.'
      }
    }
  ]
}
