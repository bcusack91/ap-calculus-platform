export const satTestDayPart3Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t3-intro',
      type: 'text' as const,
      content: `
# Guessing Strategy

**Part 3 of 7 — Guessing Strategy**

No penalty for wrong answers — ALWAYS guess (never leave blank).

If stuck, eliminate what you can, then guess from remaining choices.
      `
    },
    {
      id: 'sat-t3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes No penalty for wrong answers — ALWAYS…?',
            options: [
              'Letter of the day: if completely stuck, consistently guess the same letter.',
              'On grid-in: any correct form is accepted (1/2 = .5 = 0.5).',
              'No penalty for wrong answers — ALWAYS guess (never leave blank).',
              'If stuck, eliminate what you can, then guess from remaining choices.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — No penalty for wrong answers — ALWAYS guess (never leave blank). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Guessing Strategy, which explains Key Insight?',
            options: [
              'No penalty for wrong answers — ALWAYS guess (never leave blank).',
              'If stuck, eliminate what you can, then guess from remaining choices.',
              'On grid-in: any correct form is accepted (1/2 = .5 = 0.5).',
              'Letter of the day: if completely stuck, consistently guess the same letter.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: On grid-in: any correct form is accepted (1/2 = .5 = 0.5). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-t3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** On grid-in: any correct form is accepted (1/2 = .5 = 0.5).

**SAT Tip:** Letter of the day: if completely stuck, consistently guess the same letter.
      `
    },
    {
      id: 'sat-t3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Letter of the day: if completely stuck, consistently guess the same letter.',
              'No penalty for wrong answers — ALWAYS guess (never leave blank).',
              'On grid-in: any correct form is accepted (1/2 = .5 = 0.5).',
              'If stuck, eliminate what you can, then guess from remaining choices.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Letter of the day: if completely stuck, consistently guess the same letter. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['On grid-in: any correct form is accepted (1/2 = .5 = 0.5).', 'If stuck, eliminate what you can, then guess from remaining choices.', 'No penalty for wrong answers — ALWAYS guess (never leave blank).', 'Letter of the day: if completely stuck, consistently guess the same letter.']
          },
          {
            label: 'SAT Tip',
            options: ['No penalty for wrong answers — ALWAYS guess (never leave blank).', 'On grid-in: any correct form is accepted (1/2 = .5 = 0.5).', 'If stuck, eliminate what you can, then guess from remaining choices.', 'Letter of the day: if completely stuck, consistently guess the same letter.']
          }
        ],
        correctAnswers: ['On grid-in: any correct form is accepted (1/2 = .5 = 0.5).', 'Letter of the day: if completely stuck, consistently guess the same letter.'],
        hint1: 'Think about what each concept specifically describes in Guessing Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Guessing Strategy describes a specific idea. Key Insight: On grid-in: any correct form is accepted (1/2 = .5 = 0.5). SAT Tip: Letter of the day: if completely stuck, consistently guess the same letter.'
      }
    }
  ]
}
