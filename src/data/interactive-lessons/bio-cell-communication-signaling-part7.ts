export const bioCellCommPart7Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell7-intro-p7',
      type: 'text' as const,
      content: `
## Cell Communication: Synthesis & AP Review

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
              'Pathways respond to signals only during embryonic growth',
              'Homeostasis is maintained without any cell signaling',
              'Signals act only to raise a variable, never to lower it',
              'Pathways trigger responses that return a variable to its set point'
            ],
            correctAnswer: 3,
            explanation: 'In homeostasis, signal transduction pathways (for example, insulin and glucagon signaling) trigger responses that return a variable such as blood glucose toward its set point.'
          },
          {
            question: 'Select the statement that correctly describes Evolution of signaling pathways:',
            options: [
              'Each species evolved its own, entirely unrelated pathways',
              'Signaling pathways appeared only after animals evolved',
              'Similar pathways in many species show they share no ancestors',
              'Shared pathway parts across species point to common ancestry'
            ],
            correctAnswer: 3,
            explanation: 'Many signaling components (such as G protein-coupled receptors and kinase cascades) are shared by yeast, plants, and animals, evidence that these pathways evolved early and were conserved from common ancestors.'
          }
        ]
      }
    },
    {
      id: 'cell7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

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
              'Predicting how a change at one step alters the output',
              'Reciting signaling molecules without explaining their roles',
              'Describing the stages in any order, without linking them',
              'Drawing the full 3D structure of each receptor protein'
            ],
            correctAnswer: 0,
            explanation: 'AP free-response questions on signaling usually ask for pathway analysis: predicting and justifying how a mutation, drug, or blocked step changes the pathway\'s output and the cell\'s response.'
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
