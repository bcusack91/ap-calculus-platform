export const satCalcStrategyPart4Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'sat-c4-intro',
      type: 'text' as const,
      content: `
# Backsolving & Plugging In

**Part 4 of 7 — Backsolving & Plugging In**

Backsolving: plug answer choices into the question to see which works.

Start with choice B or C (middle values) to narrow down.
      `
    },
    {
      id: 'sat-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Backsolving" refer to in SAT prep?',
            options: [
              'plug answer choices into the question to see which works.',
              'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.',
              'Start with choice B or C (middle values) to narrow down.',
              'Plugging in: replace variables with simple numbers to test.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Backsolving: plug answer choices into the question to see which works. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.',
              'Plugging in: replace variables with simple numbers to test.',
              'plug answer choices into the question to see which works.',
              'Start with choice B or C (middle values) to narrow down.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Plugging in: replace variables with simple numbers to test. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Plugging in: replace variables with simple numbers to test.

**SAT Tip:** Pick numbers that are easy to work with: 2, 3, 5, 10, 100.
      `
    },
    {
      id: 'sat-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Plugging in: replace variables with simple numbers to test.',
              'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.',
              'plug answer choices into the question to see which works.',
              'Start with choice B or C (middle values) to narrow down.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Pick numbers that are easy to work with: 2, 3, 5, 10, 100. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Backsolving',
            options: ['Plugging in: replace variables with simple numbers to test.', 'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.', 'Start with choice B or C (middle values) to narrow down.', 'plug answer choices into the question to see which works.']
          },
          {
            label: 'Key Insight',
            options: ['Pick numbers that are easy to work with: 2, 3, 5, 10, 100.', 'plug answer choices into the question to see which works.', 'Plugging in: replace variables with simple numbers to test.', 'Start with choice B or C (middle values) to narrow down.']
          },
          {
            label: 'SAT Tip',
            options: ['Start with choice B or C (middle values) to narrow down.', 'plug answer choices into the question to see which works.', 'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.', 'Plugging in: replace variables with simple numbers to test.']
          }
        ],
        correctAnswers: ['plug answer choices into the question to see which works.', 'Plugging in: replace variables with simple numbers to test.', 'Pick numbers that are easy to work with: 2, 3, 5, 10, 100.'],
        hint1: 'Think about what each concept specifically describes in Backsolving & Plugging In.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Backsolving & Plugging In describes a specific idea. Backsolving: plug answer choices into the question to see which works. Key Insight: Plugging in: replace variables with simple numbers to test. SAT Tip: Pick numbers that are easy to work with: 2, 3, 5, 10, 100.'
      }
    }
  ]
}
