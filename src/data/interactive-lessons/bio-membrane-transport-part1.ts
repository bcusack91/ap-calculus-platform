export const bioMembraneTransportPart1Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb1-intro-p1',
      type: 'text' as const,
      content: `
# ## Membrane Structure

**Part 1 of 7 — Membrane Structure**

1. Fluid mosaic model
2. Phospholipid bilayer: hydrophilic heads, hydrophobic tails
3. Membrane proteins: integral and peripheral
4. Cholesterol: maintains fluidity
      `
    },
    {
      id: 'memb1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Fluid mosaic model?',
            options: [
              'integral and peripheral',
              'maintains fluidity',
              'Fluid mosaic model',
              'hydrophilic heads, hydrophobic tails'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Fluid mosaic model. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Membrane Structure, which explains Membrane proteins?',
            options: [
              'maintains fluidity',
              'integral and peripheral',
              'hydrophilic heads, hydrophobic tails',
              'Fluid mosaic model'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Membrane proteins: integral and peripheral. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Fluid mosaic model**
- **Phospholipid bilayer**: hydrophilic heads, hydrophobic tails
- **Membrane proteins**: integral and peripheral
- **Cholesterol**: maintains fluidity
      `
    },
    {
      id: 'memb1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Cholesterol?',
            options: [
              'Fluid mosaic model',
              'maintains fluidity',
              'hydrophilic heads, hydrophobic tails',
              'integral and peripheral'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Cholesterol: maintains fluidity. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phospholipid bilayer',
            options: ['hydrophilic heads, hydrophobic tails', 'integral and peripheral', 'Fluid mosaic model', 'maintains fluidity']
          },
          {
            label: 'Membrane proteins',
            options: ['Fluid mosaic model', 'hydrophilic heads, hydrophobic tails', 'integral and peripheral', 'maintains fluidity']
          },
          {
            label: 'Cholesterol',
            options: ['Fluid mosaic model', 'integral and peripheral', 'hydrophilic heads, hydrophobic tails', 'maintains fluidity']
          }
        ],
        correctAnswers: ['hydrophilic heads, hydrophobic tails', 'integral and peripheral', 'maintains fluidity'],
        hint1: 'Think about what each concept specifically describes in Membrane Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Membrane Structure describes a specific idea. Phospholipid bilayer: hydrophilic heads, hydrophobic tails. Membrane proteins: integral and peripheral. Cholesterol: maintains fluidity.'
      }
    }
  ]
}
