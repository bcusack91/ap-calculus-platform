export const bioMembraneTransportPart4Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb4-intro-p4',
      type: 'text' as const,
      content: `
# ## Active Transport

**Part 4 of 7 — Active Transport**

1. Requires ATP
2. Sodium-potassium pump: 3 Na⁺ out, 2 K⁺ in
3. Moves against concentration gradient
4. Electrochemical gradient
      `
    },
    {
      id: 'memb4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Requires ATP?',
            options: [
              '3 Na⁺ out, 2 K⁺ in',
              'Moves against concentration gradient',
              'Requires ATP',
              'Electrochemical gradient'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Requires ATP. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Moves against concentration gradient?',
            options: [
              '3 Na⁺ out, 2 K⁺ in',
              'Electrochemical gradient',
              'Moves against concentration gradient',
              'Requires ATP'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Moves against concentration gradient. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Requires ATP**
- **Sodium-potassium pump**: 3 Na⁺ out, 2 K⁺ in
- **Moves against concentration gradient**
- **Electrochemical gradient**
      `
    },
    {
      id: 'memb4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Electrochemical gradient?',
            options: [
              'Electrochemical gradient',
              '3 Na⁺ out, 2 K⁺ in',
              'Requires ATP',
              'Moves against concentration gradient'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Electrochemical gradient. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Requires ATP',
            options: ['Moves against concentration gradient', 'Requires ATP', '3 Na⁺ out, 2 K⁺ in', 'Electrochemical gradient']
          },
          {
            label: 'Sodium-potassium pump',
            options: ['Moves against concentration gradient', '3 Na⁺ out, 2 K⁺ in', 'Requires ATP', 'Electrochemical gradient']
          },
          {
            label: 'Moves against concentration gradient',
            options: ['Electrochemical gradient', '3 Na⁺ out, 2 K⁺ in', 'Requires ATP', 'Moves against concentration gradient']
          }
        ],
        correctAnswers: ['Requires ATP', '3 Na⁺ out, 2 K⁺ in', 'Moves against concentration gradient'],
        hint1: 'Think about what each concept specifically describes in Active Transport.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Active Transport describes a specific idea. Requires ATP. Sodium-potassium pump: 3 Na⁺ out, 2 K⁺ in. Moves against concentration gradient.'
      }
    }
  ]
}
