export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'sat-e1-intro',
      type: 'text' as const,
      content: `
# 📝 Expression Ideas

**Part 1 of 7 — Conciseness & Redundancy**

Avoid redundancy: don't say the same thing twice in different words.

Shorter is usually better on the SAT (if meaning is preserved).
      `
    },
    {
      id: 'sat-e1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes avoid redundancy?',
            options: [
              'Avoid redundancy is a fundamental concept in SAT Reading & Writing',
              'Shorter is usually better on the SAT (if meaning is preserved)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Avoid redundancy: don\'t say the same thing twice in different words'
          }
        ]
      }
    },
    {
      id: 'sat-e1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Eliminate wordy phrases: "due to the fact that" → "because".

**SAT Tip:** If two answers convey the same meaning, choose the more concise one.
      `
    },
    {
      id: 'sat-e1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for conciseness & redundancy?',
            options: [
              'Eliminate wordy phrases: "due to the fact that" → "because"',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate wordy phrases: "due to the fact that" → "because"'
          }
        ]
      }
    },
    {
      id: 'sat-e1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Conciseness & Redundancy:',
            options: ['Avoid redundancy: don\'t say the same thing twice i', 'Shorter is usually better on the SAT (if meaning i', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Eliminate wordy phrases: "due to the fact that" → ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Avoid redundancy: don\'t say the same thing twice i', 'Eliminate wordy phrases: "due to the fact that" → '],
        hint1: 'Think about conciseness & redundancy',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Avoid redundancy: don\'t say the same thing twice in different words. Eliminate wordy phrases: "due to the fact that" → "because".'
      }
    }
  ]
}
