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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Take a diagnostic test first — know…?',
            options: [
              'Simulate test conditions: timed, quiet, full-length practice tests.',
              'Practice with official College Board materials.',
              'Focus on your weakest areas for the biggest score gains.',
              'Take a diagnostic test first — know your baseline.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Take a diagnostic test first — know your baseline. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Key Insight?',
            options: [
              'Practice with official College Board materials.',
              'Focus on your weakest areas for the biggest score gains.',
              'Take a diagnostic test first — know your baseline.',
              'Simulate test conditions: timed, quiet, full-length practice tests.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Practice with official College Board materials. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes SAT Tip?',
            options: [
              'Take a diagnostic test first — know your baseline.',
              'Practice with official College Board materials.',
              'Focus on your weakest areas for the biggest score gains.',
              'Simulate test conditions: timed, quiet, full-length practice tests.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Focus on your weakest areas for the biggest score gains.', 'Take a diagnostic test first — know your baseline.', 'Practice with official College Board materials.', 'Simulate test conditions: timed, quiet, full-length practice tests.']
          },
          {
            label: 'SAT Tip',
            options: ['Focus on your weakest areas for the biggest score gains.', 'Practice with official College Board materials.', 'Take a diagnostic test first — know your baseline.', 'Simulate test conditions: timed, quiet, full-length practice tests.']
          }
        ],
        correctAnswers: ['Practice with official College Board materials.', 'Simulate test conditions: timed, quiet, full-length practice tests.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Practice with official College Board materials. SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests.'
      }
    }
  ]
}
