export const satRatiosPart1Data = {
  topicSlug: 'sat-ratios-proportions-sat',
  sections: [
    {
      id: 'sat-r1-intro',
      type: 'text' as const,
      content: `
# 📝 Ratios Proportions

**Part 1 of 7 — Ratios and Proportions**

Ratio: comparison of two quantities (a:b or a/b).

Proportion: two equal ratios, a/b = c/d.
      `
    },
    {
      id: 'sat-r1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes ratio?',
            options: [
              'Ratio is a fundamental concept in SAT Math',
              'Proportion: two equal ratios, a/b = c/d',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Ratio: comparison of two quantities (a:b or a/b)'
          }
        ]
      }
    },
    {
      id: 'sat-r1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Cross-multiply to solve: ad = bc.

**SAT Tip:** Part-to-whole vs. part-to-part ratios: context matters on the SAT.
      `
    },
    {
      id: 'sat-r1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for ratios and proportions?',
            options: [
              'Cross-multiply to solve: ad = bc',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Cross-multiply to solve: ad = bc'
          }
        ]
      }
    },
    {
      id: 'sat-r1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Ratios and Proportions:',
            options: ['Ratio: comparison of two quantities (a:b or a/b)', 'Proportion: two equal ratios, a/b = c/d', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Cross-multiply to solve: ad = bc', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Ratio: comparison of two quantities (a:b or a/b)', 'Cross-multiply to solve: ad = bc'],
        hint1: 'Think about ratios and proportions',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Ratio: comparison of two quantities (a:b or a/b). Cross-multiply to solve: ad = bc.'
      }
    }
  ]
}
