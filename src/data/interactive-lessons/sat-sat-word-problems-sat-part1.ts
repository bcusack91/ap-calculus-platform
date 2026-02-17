export const satWordProblemsPart1Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'sat-w1-intro',
      type: 'text' as const,
      content: `
# 📝 Word Problems

**Part 1 of 7 — Translating Words to Math**

"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.

"Times" or "of" → ×; "per" → ÷.
      `
    },
    {
      id: 'sat-w1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes "Is" or "equals" → =; "more than" or…?',
            options: [
              'Let x = the unknown; write an equation, then solve.',
              '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.',
              'Always define your variable clearly and check units.',
              '"Times" or "of" → ×; "per" → ÷.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Is" or "equals" → =; "more than" or "added to" → +; "less than" → −. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '"Times" or "of" → ×; "per" → ÷.',
              '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.',
              'Always define your variable clearly and check units.',
              'Let x = the unknown; write an equation, then solve.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Let x = the unknown; write an equation, then solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-w1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Let x = the unknown; write an equation, then solve.

**SAT Tip:** Always define your variable clearly and check units.
      `
    },
    {
      id: 'sat-w1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Word Problems, which correctly describes SAT Tip?',
            options: [
              'Always define your variable clearly and check units.',
              '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.',
              'Let x = the unknown; write an equation, then solve.',
              '"Times" or "of" → ×; "per" → ÷.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Always define your variable clearly and check units. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-w1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Always define your variable clearly and check units.', '"Times" or "of" → ×; "per" → ÷.', 'Let x = the unknown; write an equation, then solve.', '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.']
          },
          {
            label: 'SAT Tip',
            options: ['Let x = the unknown; write an equation, then solve.', '"Times" or "of" → ×; "per" → ÷.', 'Always define your variable clearly and check units.', '"Is" or "equals" → =; "more than" or "added to" → +; "less than" → −.']
          }
        ],
        correctAnswers: ['Let x = the unknown; write an equation, then solve.', 'Always define your variable clearly and check units.'],
        hint1: 'Think about what each concept specifically describes in Word Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Word Problems describes a specific idea. Key Insight: Let x = the unknown; write an equation, then solve. SAT Tip: Always define your variable clearly and check units.'
      }
    }
  ]
}
