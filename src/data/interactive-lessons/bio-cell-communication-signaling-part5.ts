export const bioCellCommPart5Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell5-intro-p5',
      type: 'text' as const,
      content: `
# ## Cellular Responses

**Part 5 of 7 — Cellular Responses**

1. Gene expression changes: transcription factors activated
2. Enzyme activation/deactivation
3. Cell division stimulation or inhibition
4. Apoptosis: programmed cell death
      `
    },
    {
      id: 'cell5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes gene expression changes?',
            options: [
              'transcription factors activated',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Gene expression changes: transcription factors activated'
          },
          {
            question: 'In the context of cellular responses, which statement is accurate?',
            options: [
              'Cell division stimulation or inhibition',
              'detavitca srotcaf noitpircsnart :segnahc noisserpxe eneG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Cell division stimulation or inhibition'
          }
        ]
      }
    },
    {
      id: 'cell5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Gene expression changes**: transcription factors activated
- **Enzyme activation/deactivation**
- **Cell division stimulation or inhibition**
- **Apoptosis**: programmed cell death
      `
    },
    {
      id: 'cell5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to cellular responses?',
            options: [
              'Apoptosis: programmed cell death',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Apoptosis: programmed cell death'
          }
        ]
      }
    },
    {
      id: 'cell5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gene expression changes is important in cellular responses because',
            options: ['transcription factors activated', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Enzyme activation/deactivation is important in cellular responses because',
            options: ['Enzyme activation/deactivation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Cell division stimulation or inhibition is important in cellular responses because',
            options: ['Cell division stimulation or inhibition', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['transcription factors activated', 'Enzyme activation/deactivation', 'Cell division stimulation or inhibition'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Cellular Responses.'
      }
    }
  ]
}
