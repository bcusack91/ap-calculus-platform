export const satTestDayPart7Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Take a diagnostic test first — know your baseline.

Focus on your weakest areas for the biggest score gains.
      `
    },
    {
      id: 'sat-t7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes take a diagnostic test first — know your baseline?',
            options: [
              'Take a diagnostic test first — know your baseline is a fundamental concept in SAT Math',
              'Focus on your weakest areas for the biggest score gains',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Take a diagnostic test first — know your baseline'
          }
        ]
      }
    },
    {
      id: 'sat-t7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice with official College Board materials.

**SAT Tip:** Simulate test conditions: timed, quiet, full-length practice tests.
      `
    },
    {
      id: 'sat-t7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'Practice with official College Board materials',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Practice with official College Board materials'
          }
        ]
      }
    },
    {
      id: 'sat-t7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Take a diagnostic test first — know your baseline', 'Focus on your weakest areas for the biggest score ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Practice with official College Board materials', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Take a diagnostic test first — know your baseline', 'Practice with official College Board materials'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Take a diagnostic test first — know your baseline. Practice with official College Board materials.'
      }
    }
  ]
}
