export const satWordProblemsPart5Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w5-intro',
      type: 'text' as const,
      content: `
# Multi-Step Strategy

**Part 5 of 7 — Multi-Step Strategy**

Read the entire problem before starting.

Identify what you're solving for.
      `
    },
    {
      id: 'sat-w5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Read the entire problem before starting." refer to in SAT prep?',
            options: [
              'Read the entire problem before starting.',
              'Identify what you\'re solving for.',
              'Set up equations, then solve systematically.',
              'Check: does your answer make sense? Are units correct?.'
            ],
            correctAnswer: 0,
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
      id: 'sat-w5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up equations, then solve systematically.

**SAT Tip:** Check: does your answer make sense? Are units correct?.
      `
    },
    {
      id: 'sat-w5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Identify what you\'re solving for.',
              'Read the entire problem before starting.',
              'Set up equations, then solve systematically.',
              'Check: does your answer make sense? Are units correct?.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Check: does your answer make sense? Are units correct?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Check: does your answer make sense? Are units correct?.', 'Set up equations, then solve systematically.', 'Identify what you\'re solving for.', 'Read the entire problem before starting.']
          },
          {
            label: 'SAT Tip',
            options: ['Read the entire problem before starting.', 'Identify what you\'re solving for.', 'Check: does your answer make sense? Are units correct?.', 'Set up equations, then solve systematically.']
          }
        ],
        correctAnswers: ['Set up equations, then solve systematically.', 'Check: does your answer make sense? Are units correct?.'],
        hint1: 'Think about what each concept specifically describes in Multi-Step Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Multi-Step Strategy describes a specific idea. Key Insight: Set up equations, then solve systematically. SAT Tip: Check: does your answer make sense? Are units correct?.'
      }
    }
  ]
}
