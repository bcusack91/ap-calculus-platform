export const satTestDayPart5Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t5-intro',
      type: 'text' as const,
      content: `
# Score Improvement Plan

**Part 5 of 7 — Score Improvement Plan**

Take a diagnostic test first — know your baseline.

Focus on your weakest areas for the biggest score gains.
      `
    },
    {
      id: 'sat-t5-quiz1',
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
              'Take a diagnostic test first — know your baseline.',
              'Focus on your weakest areas for the biggest score gains.',
              'Practice with official College Board materials.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Take a diagnostic test first — know your baseline. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Score Improvement Plan, which explains Key Insight?',
            options: [
              'Focus on your weakest areas for the biggest score gains.',
              'Practice with official College Board materials.',
              'Simulate test conditions: timed, quiet, full-length practice tests.',
              'Take a diagnostic test first — know your baseline.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Practice with official College Board materials. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-t5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Practice with official College Board materials.

**SAT Tip:** Simulate test conditions: timed, quiet, full-length practice tests.
      `
    },
    {
      id: 'sat-t5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Practice with official College Board materials.',
              'Simulate test conditions: timed, quiet, full-length practice tests.',
              'Focus on your weakest areas for the biggest score gains.',
              'Take a diagnostic test first — know your baseline.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Simulate test conditions: timed, quiet, full-length practice tests.', 'Take a diagnostic test first — know your baseline.', 'Focus on your weakest areas for the biggest score gains.', 'Practice with official College Board materials.']
          },
          {
            label: 'SAT Tip',
            options: ['Practice with official College Board materials.', 'Simulate test conditions: timed, quiet, full-length practice tests.', 'Focus on your weakest areas for the biggest score gains.', 'Take a diagnostic test first — know your baseline.']
          }
        ],
        correctAnswers: ['Practice with official College Board materials.', 'Simulate test conditions: timed, quiet, full-length practice tests.'],
        hint1: 'Think about what each concept specifically describes in Score Improvement Plan.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Score Improvement Plan describes a specific idea. Key Insight: Practice with official College Board materials. SAT Tip: Simulate test conditions: timed, quiet, full-length practice tests.'
      }
    }
  ]
}
