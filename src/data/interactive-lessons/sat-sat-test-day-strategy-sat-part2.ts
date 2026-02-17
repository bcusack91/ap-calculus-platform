export const satTestDayPart2Data = {
  topicSlug: 'sat-test-day-strategy-sat',
  sections: [
    {
      id: 'sat-t2-intro',
      type: 'text' as const,
      content: `
# Process of Elimination

**Part 2 of 7 — Process of Elimination**

Eliminate wrong answers before guessing.

On math: estimate to eliminate impossible answers.
      `
    },
    {
      id: 'sat-t2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Eliminate wrong answers before guessing.?',
            options: [
              'On reading: eliminate answers that are too extreme, unsupported, or opposite.',
              'estimate to eliminate impossible answers.',
              'Usually 2 answers are clearly wrong, leaving a 50/50 guess.',
              'Eliminate wrong answers before guessing.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Eliminate wrong answers before guessing. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Eliminate wrong answers before guessing.',
              'On reading: eliminate answers that are too extreme, unsupported, or opposite.',
              'Usually 2 answers are clearly wrong, leaving a 50/50 guess.',
              'estimate to eliminate impossible answers.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: On reading: eliminate answers that are too extreme, unsupported, or opposite. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-t2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** On reading: eliminate answers that are too extreme, unsupported, or opposite.

**SAT Tip:** Usually 2 answers are clearly wrong, leaving a 50/50 guess.
      `
    },
    {
      id: 'sat-t2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Process of Elimination, which correctly describes SAT Tip?',
            options: [
              'Usually 2 answers are clearly wrong, leaving a 50/50 guess.',
              'On reading: eliminate answers that are too extreme, unsupported, or opposite.',
              'estimate to eliminate impossible answers.',
              'Eliminate wrong answers before guessing.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Usually 2 answers are clearly wrong, leaving a 50/50 guess. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-t2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'On math',
            options: ['Usually 2 answers are clearly wrong, leaving a 50/50 guess.', 'Eliminate wrong answers before guessing.', 'On reading: eliminate answers that are too extreme, unsupported, or opposite.', 'estimate to eliminate impossible answers.']
          },
          {
            label: 'Key Insight',
            options: ['On reading: eliminate answers that are too extreme, unsupported, or opposite.', 'estimate to eliminate impossible answers.', 'Usually 2 answers are clearly wrong, leaving a 50/50 guess.', 'Eliminate wrong answers before guessing.']
          },
          {
            label: 'SAT Tip',
            options: ['estimate to eliminate impossible answers.', 'Usually 2 answers are clearly wrong, leaving a 50/50 guess.', 'On reading: eliminate answers that are too extreme, unsupported, or opposite.', 'Eliminate wrong answers before guessing.']
          }
        ],
        correctAnswers: ['estimate to eliminate impossible answers.', 'On reading: eliminate answers that are too extreme, unsupported, or opposite.', 'Usually 2 answers are clearly wrong, leaving a 50/50 guess.'],
        hint1: 'Think about what each concept specifically describes in Process of Elimination.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Process of Elimination describes a specific idea. On math: estimate to eliminate impossible answers. Key Insight: On reading: eliminate answers that are too extreme, unsupported, or opposite. SAT Tip: Usually 2 answers are clearly wrong, leaving a 50/50 guess.'
      }
    }
  ]
}
