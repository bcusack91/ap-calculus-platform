export const satTestDayPart6Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Take a diagnostic test first — know your baseline.

Focus on your weakest areas for the biggest score gains.
      `
    },
    {
      id: 'sat-t6-quiz1',
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
              'Take a diagnostic test first — know your baseline.',
              'Focus on your weakest areas for the biggest score gains.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Take a diagnostic test first — know your baseline. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Key Insight?',
            options: [
              'Focus on your weakest areas for the biggest score gains.',
              'Practice with official College Board materials.',
              'Take a diagnostic test first — know your baseline.',
              'Simulate test conditions: timed, quiet, full-length practice tests.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Practice with official College Board materials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-t6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice with official College Board materials.

**SAT Tip:** Simulate test conditions: timed, quiet, full-length practice tests.
      `
    },
    {
      id: 'sat-t6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Take a diagnostic test first — know your baseline.',
              'Simulate test conditions: timed, quiet, full-length practice tests.',
              'Practice with official College Board materials.',
              'Focus on your weakest areas for the biggest score gains.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Focus on your weakest areas for the biggest score gains.', 'Practice with official College Board materials.', 'Take a diagnostic test first — know your baseline.', 'Simulate test conditions: timed, quiet, full-length practice tests.']
          },
          {
            label: 'SAT Tip',
            options: ['Focus on your weakest areas for the biggest score gains.', 'Take a diagnostic test first — know your baseline.', 'Simulate test conditions: timed, quiet, full-length practice tests.', 'Practice with official College Board materials.']
          }
        ],
        correctAnswers: ['Practice with official College Board materials.', 'Simulate test conditions: timed, quiet, full-length practice tests.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Practice with official College Board materials. SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests.'
      }
    }
  ]
}
