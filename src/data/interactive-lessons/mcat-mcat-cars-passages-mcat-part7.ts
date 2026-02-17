export const mcatCarsPsgPart7Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'mcat-7-intro',
      type: 'text' as const,
      content: `
# Review & MCAT Practice

**Part 7 of 7 — Review & MCAT Practice**

10 minutes per passage (9 passages x 10 min = 90 min total).

Spend ~4 minutes reading, ~6 minutes answering the ~6 questions.
      `
    },
    {
      id: 'mcat-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes a key concept in review & mcat practice?',
            options: [
              '10 minutes per passage (9 passages x 10 min = 90 min total)',
              'This topic is not tested on the MCAT',
              'This applies only to clinical practice, not the MCAT',
              'None of the above'
            ],
            correctAnswer: 0,
            explanation: '10 minutes per passage (9 passages x 10 min = 90 min total)'
          }
        ]
      }
    },
    {
      id: 'mcat-7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** If stuck on a question for >90 seconds, flag it and move on.

**MCAT Tip:** Do all passages — there is no penalty for wrong answers, never leave blanks.
      `
    },
    {
      id: 'mcat-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is an important principle for MCAT CARS related to review & mcat practice?',
            options: [
              'If stuck on a question for >90 seconds, flag it and move on',
              'Memorize without understanding — the MCAT only tests recall',
              'This concept is only relevant to graduate-level courses',
              'Skip this topic — it rarely appears on the MCAT'
            ],
            correctAnswer: 0,
            explanation: 'If stuck on a question for >90 seconds, flag it and move on'
          }
        ]
      }
    },
    {
      id: 'mcat-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['If stuck on a question for >90 seconds, flag it and move on.', 'Spend ~4 minutes reading, ~6 minutes answering the ~6 questions.', '10 minutes per passage (9 passages x 10 min = 90 min total).', 'Do all passages — there is no penalty for wrong answers, never leave blanks.']
          },
          {
            label: 'MCAT Tip',
            options: ['Do all passages — there is no penalty for wrong answers, never leave blanks.', '10 minutes per passage (9 passages x 10 min = 90 min total).', 'If stuck on a question for >90 seconds, flag it and move on.', 'Spend ~4 minutes reading, ~6 minutes answering the ~6 questions.']
          }
        ],
        correctAnswers: ['If stuck on a question for >90 seconds, flag it and move on.', 'Do all passages — there is no penalty for wrong answers, never leave blanks.'],
        hint1: 'Think about what each concept specifically describes in Review & MCAT Practice.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & MCAT Practice describes a specific idea. Key Insight: If stuck on a question for >90 seconds, flag it and move on. MCAT Tip: Do all passages — there is no penalty for wrong answers, never leave blanks.'
      }
    }
  ]
}
