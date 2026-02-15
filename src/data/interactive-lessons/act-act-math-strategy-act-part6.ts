export const actMathStrategyPart6Data = {
  topicSlug: 'act-math-strategy-act',
  sections: [
    {
      id: 'act-m6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

First pass: do all easy questions (1-30) quickly.

Second pass: tackle medium questions (31-50).
      `
    },
    {
      id: 'act-m6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes first pass?',
            options: [
              'First pass is a key concept for ACT Math',
              'Second pass: tackle medium questions (31-50)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'First pass: do all easy questions (1-30) quickly'
          }
        ]
      }
    },
    {
      id: 'act-m6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Final pass: attempt hard questions (51-60) with remaining time.

**ACT Tip:** Never leave a question blank — guess if needed (no penalty).
      `
    },
    {
      id: 'act-m6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for problem-solving workshop?',
            options: [
              'Final pass: attempt hard questions (51-60) with remaining time',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Final pass: attempt hard questions (51-60) with remaining time'
          }
        ]
      }
    },
    {
      id: 'act-m6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Problem-Solving Workshop:',
            options: ['First pass: do all easy questions (1-30) quickly', 'Second pass: tackle medium questions (31-50)', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Final pass: attempt hard questions (51-60) with re', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['First pass: do all easy questions (1-30) quickly', 'Final pass: attempt hard questions (51-60) with re'],
        hint1: 'Think about problem-solving workshop',
        hint2: 'Consider the best ACT strategy',
        explanation: 'First pass: do all easy questions (1-30) quickly. Final pass: attempt hard questions (51-60) with remaining time.'
      }
    }
  ]
}
