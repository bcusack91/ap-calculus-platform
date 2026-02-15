export const actMathStrategyPart3Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m3-intro',
      type: 'text' as const,
      content: `
# Backsolving

**Part 3 of 7 — Backsolving**

Plug answer choices into the question to see which works.

Start with choice C (middle value) — if too big, try A/B; if too small, try D/E.
      `
    },
    {
      id: 'act-m3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes plug answer choices into the question to see which works?',
            options: [
              'Plug answer choices into the question to see which works is a key concept for ACT Math',
              'Start with choice C (middle value) — if too big, try A/B; if too small, try D/E',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Plug answer choices into the question to see which works'
          }
        ]
      }
    },
    {
      id: 'act-m3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Works great for "what value of x" questions.

**ACT Tip:** Saves time on complex algebra.
      `
    },
    {
      id: 'act-m3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for backsolving?',
            options: [
              'Works great for "what value of x" questions',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Works great for "what value of x" questions'
          }
        ]
      }
    },
    {
      id: 'act-m3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Backsolving:',
            options: ['Plug answer choices into the question to see which', 'Start with choice C (middle value) — if too big, t', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Works great for "what value of x" questions', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Plug answer choices into the question to see which', 'Works great for "what value of x" questions'],
        hint1: 'Think about backsolving',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Plug answer choices into the question to see which works. Works great for "what value of x" questions.'
      }
    }
  ]
}
