export const bioCellCommPart7Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
# ## Cell Communication: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Signal transduction in homeostasis
2. Signaling errors and disease
3. Evolution of signaling pathways
4. AP free-response: pathway analysis
      `
    },
    {
      id: 'cell7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Signal transduction in homeostasis?',
            options: [
              'pathway analysis',
              'Evolution of signaling pathways',
              'Signaling errors and disease',
              'Signal transduction in homeostasis'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Signal transduction in homeostasis. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Evolution of signaling pathways:',
            options: [
              'Signaling errors and disease',
              'Signal transduction in homeostasis',
              'pathway analysis',
              'Evolution of signaling pathways'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Evolution of signaling pathways. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Signal transduction in homeostasis**
- **Signaling errors and disease**
- **Evolution of signaling pathways**
- **AP free-response**: pathway analysis
      `
    },
    {
      id: 'cell7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents AP free-response?',
            options: [
              'pathway analysis',
              'Signal transduction in homeostasis',
              'Signaling errors and disease',
              'Evolution of signaling pathways'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP free-response: pathway analysis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Signal transduction in homeostasis',
            options: ['Signaling errors and disease', 'pathway analysis', 'Signal transduction in homeostasis', 'Evolution of signaling pathways']
          },
          {
            label: 'Signaling errors and disease',
            options: ['Evolution of signaling pathways', 'pathway analysis', 'Signal transduction in homeostasis', 'Signaling errors and disease']
          },
          {
            label: 'Evolution of signaling pathways',
            options: ['pathway analysis', 'Evolution of signaling pathways', 'Signal transduction in homeostasis', 'Signaling errors and disease']
          }
        ],
        correctAnswers: ['Signal transduction in homeostasis', 'Signaling errors and disease', 'Evolution of signaling pathways'],
        hint1: 'Think about what each concept specifically describes in Cell Communication: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Cell Communication: Synthesis & AP Review describes a specific idea. Signal transduction in homeostasis. Signaling errors and disease. Evolution of signaling pathways.'
      }
    }
  ]
}
