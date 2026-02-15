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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes underline topic sentences and key transitions while reading?',
            options: [
              'Underline topic sentences and key transitions while reading is a key concept for ACT English/Reading',
              'Note the main idea of each paragraph in the margin',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Underline topic sentences and key transitions while reading'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for active reading?',
            options: [
              'Star or mark confusing sections to revisit if needed',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Star or mark confusing sections to revisit if needed'
          }
        ]
      }
    },
    {
      id: 'act-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Active Reading:',
            options: ['Underline topic sentences and key transitions whil', 'Note the main idea of each paragraph in the margin', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Star or mark confusing sections to revisit if need', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Underline topic sentences and key transitions whil', 'Star or mark confusing sections to revisit if need'],
        hint1: 'Think about active reading',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Underline topic sentences and key transitions while reading. Star or mark confusing sections to revisit if needed.'
      }
    }
  ]
}
