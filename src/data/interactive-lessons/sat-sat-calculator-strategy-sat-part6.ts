export const satCalcStrategyPart6Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Average time per question: ~75 seconds (no-calc), ~87 seconds (calc).

Do easy questions first — every question is worth the same.
      `
    },
    {
      id: 'sat-c6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Average time per question" refer to in SAT prep?',
            options: [
              'Last 5 minutes: answer every remaining question (no penalty for guessing).',
              '~75 seconds (no-calc), ~87 seconds (calc).',
              'Mark and skip questions that seem time-consuming, return later.',
              'Do easy questions first — every question is worth the same.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Average time per question: ~75 seconds (no-calc), ~87 seconds (calc). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Do easy questions first — every question is worth the same.',
              'Mark and skip questions that seem time-consuming, return later.',
              'Last 5 minutes: answer every remaining question (no penalty for guessing).',
              '~75 seconds (no-calc), ~87 seconds (calc).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Mark and skip questions that seem time-consuming, return later. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Mark and skip questions that seem time-consuming, return later.

**SAT Tip:** Last 5 minutes: answer every remaining question (no penalty for guessing).
      `
    },
    {
      id: 'sat-c6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'Mark and skip questions that seem time-consuming, return later.',
              '~75 seconds (no-calc), ~87 seconds (calc).',
              'Last 5 minutes: answer every remaining question (no penalty for guessing).',
              'Do easy questions first — every question is worth the same.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Last 5 minutes: answer every remaining question (no penalty for guessing). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Average time per question',
            options: ['Mark and skip questions that seem time-consuming, return later.', 'Do easy questions first — every question is worth the same.', '~75 seconds (no-calc), ~87 seconds (calc).', 'Last 5 minutes: answer every remaining question (no penalty for guessing).']
          },
          {
            label: 'Key Insight',
            options: ['Do easy questions first — every question is worth the same.', 'Last 5 minutes: answer every remaining question (no penalty for guessing).', '~75 seconds (no-calc), ~87 seconds (calc).', 'Mark and skip questions that seem time-consuming, return later.']
          },
          {
            label: 'SAT Tip',
            options: ['Last 5 minutes: answer every remaining question (no penalty for guessing).', 'Do easy questions first — every question is worth the same.', 'Mark and skip questions that seem time-consuming, return later.', '~75 seconds (no-calc), ~87 seconds (calc).']
          }
        ],
        correctAnswers: ['~75 seconds (no-calc), ~87 seconds (calc).', 'Mark and skip questions that seem time-consuming, return later.', 'Last 5 minutes: answer every remaining question (no penalty for guessing).'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Average time per question: ~75 seconds (no-calc), ~87 seconds (calc). Key Insight: Mark and skip questions that seem time-consuming, return later. SAT Tip: Last 5 minutes: answer every remaining question (no penalty for guessing).'
      }
    }
  ]
}
