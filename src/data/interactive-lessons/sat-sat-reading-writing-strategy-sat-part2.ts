export const satRWStrategyPart2Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'sat-r2-intro',
      type: 'text' as const,
      content: `
# Passage Strategy

**Part 2 of 7 — Passage Strategy**

Read the blurb (italicized intro) — it gives context.

Underline topic sentences and key transitions as you read.
      `
    },
    {
      id: 'sat-r2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes read the blurb (italicized intro) — it gives context?',
            options: [
              'Read the blurb (italicized intro) — it gives context is a fundamental concept in SAT Reading & Writing',
              'Underline topic sentences and key transitions as you read',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Read the blurb (italicized intro) — it gives context'
          }
        ]
      }
    },
    {
      id: 'sat-r2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Main idea questions: what is the passage MOSTLY about?.

**SAT Tip:** Don't bring outside knowledge — answers must be supported by the passage text.
      `
    },
    {
      id: 'sat-r2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for passage strategy?',
            options: [
              'Main idea questions: what is the passage MOSTLY about?',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Main idea questions: what is the passage MOSTLY about?'
          }
        ]
      }
    },
    {
      id: 'sat-r2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Passage Strategy:',
            options: ['Read the blurb (italicized intro) — it gives conte', 'Underline topic sentences and key transitions as y', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Main idea questions: what is the passage MOSTLY ab', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Read the blurb (italicized intro) — it gives conte', 'Main idea questions: what is the passage MOSTLY ab'],
        hint1: 'Think about passage strategy',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Read the blurb (italicized intro) — it gives context. Main idea questions: what is the passage MOSTLY about?.'
      }
    }
  ]
}
