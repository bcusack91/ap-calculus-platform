export const actReadingStratPart3Data = {
  topicSlug: 'act-reading-strategy-act',
  sections: [
    {
      id: 'act-r3-intro',
      type: 'text' as const,
      content: `
# Active Reading

**Part 3 of 7 — Active Reading**

Underline topic sentences and key transitions while reading.

Note the main idea of each paragraph in the margin.
      `
    },
    {
      id: 'act-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Underline topic sentences and key…?',
            options: [
              'Note the main idea of each paragraph in the margin.',
              'Star or mark confusing sections to revisit if needed.',
              'Underline topic sentences and key transitions while reading.',
              'Pay attention to "however," "although," "in contrast" — they signal shifts.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Underline topic sentences and key transitions while reading. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Star or mark confusing sections to revisit if needed.',
              'Underline topic sentences and key transitions while reading.',
              'Pay attention to "however," "although," "in contrast" — they signal shifts.',
              'Note the main idea of each paragraph in the margin.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Star or mark confusing sections to revisit if needed. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Star or mark confusing sections to revisit if needed.

**ACT Tip:** Pay attention to "however," "although," "in contrast" — they signal shifts.
      `
    },
    {
      id: 'act-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Note the main idea of each paragraph in the margin.',
              'Underline topic sentences and key transitions while reading.',
              'Pay attention to "however," "although," "in contrast" — they signal shifts.',
              'Star or mark confusing sections to revisit if needed.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Pay attention to "however," "although," "in contrast" — they signal shifts. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Star or mark confusing sections to revisit if needed.', 'Underline topic sentences and key transitions while reading.', 'Pay attention to "however," "although," "in contrast" — they signal shifts.', 'Note the main idea of each paragraph in the margin.']
          },
          {
            label: 'ACT Tip',
            options: ['Pay attention to "however," "although," "in contrast" — they signal shifts.', 'Note the main idea of each paragraph in the margin.', 'Underline topic sentences and key transitions while reading.', 'Star or mark confusing sections to revisit if needed.']
          }
        ],
        correctAnswers: ['Star or mark confusing sections to revisit if needed.', 'Pay attention to "however," "although," "in contrast" — they signal shifts.'],
        hint1: 'Think about what each concept specifically describes in Active Reading.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Active Reading describes a specific idea. Key Insight: Star or mark confusing sections to revisit if needed. ACT Tip: Pay attention to "however," "although," "in contrast" — they signal shifts.'
      }
    }
  ]
}
