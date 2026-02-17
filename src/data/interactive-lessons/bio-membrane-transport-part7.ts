export const bioMembraneTransportPart7Data = {
  topicSlug: 'membrane-transport',
  sections: [
    {
      id: 'memb7-intro-p7',
      type: 'text' as const,
      content: `
# ## Membrane Transport: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Water potential equation: Ψ = Ψs + Ψp
2. Membrane transport in homeostasis
3. Transport defects cause diseases
4. Free-response practice
      `
    },
    {
      id: 'memb7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Water potential equation?',
            options: [
              'Transport defects cause diseases',
              'Free-response practice',
              'Membrane transport in homeostasis',
              'Ψ = Ψs + Ψp'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Water potential equation: Ψ = Ψs + Ψp. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Transport defects cause diseases?',
            options: [
              'Free-response practice',
              'Ψ = Ψs + Ψp',
              'Membrane transport in homeostasis',
              'Transport defects cause diseases'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Transport defects cause diseases. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memb7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Water potential equation**: Ψ = Ψs + Ψp
- **Membrane transport in homeostasis**
- **Transport defects cause diseases**
- **Free-response practice**
      `
    },
    {
      id: 'memb7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Free-response practice?',
            options: [
              'Transport defects cause diseases',
              'Free-response practice',
              'Membrane transport in homeostasis',
              'Ψ = Ψs + Ψp'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Free-response practice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'memb7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Water potential equation',
            options: ['Ψ = Ψs + Ψp', 'Free-response practice', 'Membrane transport in homeostasis', 'Transport defects cause diseases']
          },
          {
            label: 'Membrane transport in homeostasis',
            options: ['Transport defects cause diseases', 'Ψ = Ψs + Ψp', 'Free-response practice', 'Membrane transport in homeostasis']
          },
          {
            label: 'Transport defects cause diseases',
            options: ['Membrane transport in homeostasis', 'Free-response practice', 'Transport defects cause diseases', 'Ψ = Ψs + Ψp']
          }
        ],
        correctAnswers: ['Ψ = Ψs + Ψp', 'Membrane transport in homeostasis', 'Transport defects cause diseases'],
        hint1: 'Think about what each concept specifically describes in Membrane Transport: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Membrane Transport: Synthesis & AP Review describes a specific idea. Water potential equation: Ψ = Ψs + Ψp. Membrane transport in homeostasis. Transport defects cause diseases.'
      }
    }
  ]
}
