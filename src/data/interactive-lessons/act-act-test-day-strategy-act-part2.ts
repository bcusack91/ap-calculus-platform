export const actTestDayPart2Data = {
  topicSlug: 'act-test-day-strategy-act',
  sections: [
    {
      id: 'act-t2-intro',
      type: 'text' as const,
      content: `
# What to Bring

**Part 2 of 7 — What to Bring**

Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.

Snacks and water for breaks (keep in your bag, not on the desk).
      `
    },
    {
      id: 'act-t2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Admission ticket (printed), valid photo…" refer to in ACT prep?',
            options: [
              'Watch (no smartwatch) for time tracking.',
              'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.',
              'Snacks and water for breaks (keep in your bag, not on the desk).',
              'Backup calculator and extra pencils — be prepared.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Watch (no smartwatch) for time tracking.',
              'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.',
              'Snacks and water for breaks (keep in your bag, not on the desk).',
              'Backup calculator and extra pencils — be prepared.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Watch (no smartwatch) for time tracking. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-t2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Watch (no smartwatch) for time tracking.

**ACT Tip:** Backup calculator and extra pencils — be prepared.
      `
    },
    {
      id: 'act-t2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding What to Bring, which correctly describes ACT Tip?',
            options: [
              'Backup calculator and extra pencils — be prepared.',
              'Snacks and water for breaks (keep in your bag, not on the desk).',
              'Watch (no smartwatch) for time tracking.',
              'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Backup calculator and extra pencils — be prepared. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Snacks and water for breaks (keep in your bag, not on the desk).', 'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.', 'Watch (no smartwatch) for time tracking.', 'Backup calculator and extra pencils — be prepared.']
          },
          {
            label: 'ACT Tip',
            options: ['Snacks and water for breaks (keep in your bag, not on the desk).', 'Watch (no smartwatch) for time tracking.', 'Admission ticket (printed), valid photo ID, #2 pencils (no mechanical), approved calculator.', 'Backup calculator and extra pencils — be prepared.']
          }
        ],
        correctAnswers: ['Watch (no smartwatch) for time tracking.', 'Backup calculator and extra pencils — be prepared.'],
        hint1: 'Think about what each concept specifically describes in What to Bring.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in What to Bring describes a specific idea. Key Insight: Watch (no smartwatch) for time tracking. ACT Tip: Backup calculator and extra pencils — be prepared.'
      }
    }
  ]
}
