export const satWordProblemsPart7Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Read the entire problem before starting.

Identify what you're solving for.
      `
    },
    {
      id: 'sat-w7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Read the entire problem before starting." refer to in SAT prep?',
            options: [
              'Identify what you\'re solving for.',
              'Read the entire problem before starting.',
              'Set up equations, then solve systematically.',
              'Check: does your answer make sense? Are units correct?.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Read the entire problem before starting. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Read the entire problem before starting.',
              'Identify what you\'re solving for.',
              'Set up equations, then solve systematically.',
              'Check: does your answer make sense? Are units correct?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Set up equations, then solve systematically. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Set up equations, then solve systematically.

**SAT Tip:** Check: does your answer make sense? Are units correct?.
      `
    },
    {
      id: 'sat-w7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes SAT Tip?',
            options: [
              'Read the entire problem before starting.',
              'Check: does your answer make sense? Are units correct?.',
              'Set up equations, then solve systematically.',
              'Identify what you\'re solving for.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Check: does your answer make sense? Are units correct?. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Set up equations, then solve systematically.', 'Check: does your answer make sense? Are units correct?.', 'Identify what you\'re solving for.', 'Read the entire problem before starting.']
          },
          {
            label: 'SAT Tip',
            options: ['Check: does your answer make sense? Are units correct?.', 'Read the entire problem before starting.', 'Identify what you\'re solving for.', 'Set up equations, then solve systematically.']
          }
        ],
        correctAnswers: ['Set up equations, then solve systematically.', 'Check: does your answer make sense? Are units correct?.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Set up equations, then solve systematically. SAT Tip: Check: does your answer make sense? Are units correct?.'
      }
    }
  ]
}
