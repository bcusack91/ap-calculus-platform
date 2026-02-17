export const actTestDayPart4Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t4-intro',
      type: 'text' as const,
      content: `
# Guessing Strategy

**Part 4 of 7 — Guessing Strategy**

No penalty for wrong answers — NEVER leave a question blank.

If completely stuck, pick one letter and use it consistently for all guesses.
      `
    },
    {
      id: 'act-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "No penalty for wrong answers — NEVER…" refer to in ACT prep?',
            options: [
              'If completely stuck, pick one letter and use it consistently for all guesses.',
              'No penalty for wrong answers — NEVER leave a question blank.',
              'Last 2 minutes of each section: answer every remaining question.',
              'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — No penalty for wrong answers — NEVER leave a question blank. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.',
              'Last 2 minutes of each section: answer every remaining question.',
              'No penalty for wrong answers — NEVER leave a question blank.',
              'If completely stuck, pick one letter and use it consistently for all guesses.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Educated guessing: eliminate 1-2 wrong answers, then guess from the rest. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.

**ACT Tip:** Last 2 minutes of each section: answer every remaining question.
      `
    },
    {
      id: 'act-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents ACT Tip?',
            options: [
              'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.',
              'If completely stuck, pick one letter and use it consistently for all guesses.',
              'Last 2 minutes of each section: answer every remaining question.',
              'No penalty for wrong answers — NEVER leave a question blank.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Last 2 minutes of each section: answer every remaining question. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.', 'No penalty for wrong answers — NEVER leave a question blank.', 'If completely stuck, pick one letter and use it consistently for all guesses.', 'Last 2 minutes of each section: answer every remaining question.']
          },
          {
            label: 'ACT Tip',
            options: ['If completely stuck, pick one letter and use it consistently for all guesses.', 'No penalty for wrong answers — NEVER leave a question blank.', 'Last 2 minutes of each section: answer every remaining question.', 'Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.']
          }
        ],
        correctAnswers: ['Educated guessing: eliminate 1-2 wrong answers, then guess from the rest.', 'Last 2 minutes of each section: answer every remaining question.'],
        hint1: 'Think about what each concept specifically describes in Guessing Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Guessing Strategy describes a specific idea. Key Insight: Educated guessing: eliminate 1-2 wrong answers, then guess from the rest. ACT Tip: Last 2 minutes of each section: answer every remaining question.'
      }
    }
  ]
}
