export const bioCellCommPart1Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell1-intro-p1',
      type: 'text' as const,
      content: `
# ## Signal Transduction Overview

**Part 1 of 7 — Signal Transduction Overview**

1. Cells communicate through chemical signals
2. Three stages: reception, transduction, response
3. Signal molecules: hormones, neurotransmitters, growth factors
4. Specificity: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes cells communicate through chemical signals?',
            options: [
              'Cells communicate through chemical signals',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Cells communicate through chemical signals'
          },
          {
            question: 'In the context of signal transduction overview, which statement is accurate?',
            options: [
              'Signal molecules: hormones, neurotransmitters, growth factors',
              'slangis lacimehc hguorht etacinummoc slleC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Signal molecules: hormones, neurotransmitters, growth factors'
          }
        ]
      }
    },
    {
      id: 'cell1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Cells communicate through chemical signals**
- **Three stages**: reception, transduction, response
- **Signal molecules**: hormones, neurotransmitters, growth factors
- **Specificity**: only target cells with correct receptors respond
      `
    },
    {
      id: 'cell1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to signal transduction overview?',
            options: [
              'Specificity: only target cells with correct receptors respond',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Specificity: only target cells with correct receptors respond'
          }
        ]
      }
    },
    {
      id: 'cell1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cells communicate through chemical signals is important in signal transduction overview because',
            options: ['Cells communicate through chemical signals', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Three stages is important in signal transduction overview because',
            options: ['reception, transduction, response', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Signal molecules is important in signal transduction overview because',
            options: ['hormones, neurotransmitters, growth factors', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Cells communicate through chemical signals', 'reception, transduction, response', 'hormones, neurotransmitters, growth factors'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Signal Transduction Overview.'
      }
    }
  ]
}
