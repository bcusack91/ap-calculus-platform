export const actScienceDataPart4Data = {
  topicSlug: 'act-science-data-act',
  sections: [
    {
      id: 'act-s4-intro',
      type: 'text' as const,
      content: `
# Comparing Data Sets

**Part 4 of 7 — Comparing Data Sets**

Compare similar measurements across different experiments or conditions.

Look for consistent patterns or notable differences.
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
            question: 'Which statement best describes compare similar measurements across different experiments or conditions?',
            options: [
              'Compare similar measurements across different experiments or conditions is a key concept for ACT Science',
              'Look for consistent patterns or notable differences',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Compare similar measurements across different experiments or conditions'
          }
        ]
      }
    },
    {
      id: 'act-s4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Control vs. experimental groups: what changed?.

**ACT Tip:** Identify which variable was manipulated and which was measured.
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
            question: 'What is a key strategy for comparing data sets?',
            options: [
              'Control vs. experimental groups: what changed?',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Control vs. experimental groups: what changed?'
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
            label: 'Key concept for Comparing Data Sets:',
            options: ['Compare similar measurements across different expe', 'Look for consistent patterns or notable difference', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Control vs. experimental groups: what changed?', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Compare similar measurements across different expe', 'Control vs. experimental groups: what changed?'],
        hint1: 'Think about comparing data sets',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Compare similar measurements across different experiments or conditions. Control vs. experimental groups: what changed?.'
      }
    }
  ]
}
