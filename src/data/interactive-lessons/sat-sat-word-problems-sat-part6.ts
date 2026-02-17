export const satWordProblemsPart6Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Read the entire problem before starting.

Identify what you're solving for.
      `
    },
    {
      id: 'sat-w6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Read the entire problem before starting." refer to in SAT prep?',
            options: [
              'Set up equations, then solve systematically.',
              'Check: does your answer make sense? Are units correct?.',
              'Read the entire problem before starting.',
              'Identify what you\'re solving for.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Read the entire problem before starting. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Check: does your answer make sense? Are units correct?.',
              'Set up equations, then solve systematically.',
              'Identify what you\'re solving for.',
              'Read the entire problem before starting.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Set up equations, then solve systematically. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up equations, then solve systematically.

**SAT Tip:** Check: does your answer make sense? Are units correct?.
      `
    },
    {
      id: 'sat-w6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Identify what you\'re solving for.',
              'Read the entire problem before starting.',
              'Check: does your answer make sense? Are units correct?.',
              'Set up equations, then solve systematically.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Check: does your answer make sense? Are units correct?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Check: does your answer make sense? Are units correct?.', 'Read the entire problem before starting.', 'Identify what you\'re solving for.', 'Set up equations, then solve systematically.']
          },
          {
            label: 'SAT Tip',
            options: ['Read the entire problem before starting.', 'Identify what you\'re solving for.', 'Set up equations, then solve systematically.', 'Check: does your answer make sense? Are units correct?.']
          }
        ],
        correctAnswers: ['Set up equations, then solve systematically.', 'Check: does your answer make sense? Are units correct?.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Set up equations, then solve systematically. SAT Tip: Check: does your answer make sense? Are units correct?.'
      }
    }
  ]
}
