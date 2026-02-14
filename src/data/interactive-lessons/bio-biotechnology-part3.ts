export const bioBiotechPart3Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot3-intro-p3',
      type: 'text' as const,
      content: `
# ## Genetic Engineering & GMOs

**Part 3 of 7 — Genetic Engineering & GMOs**

1. Recombinant DNA: combining DNA from different sources
2. Plasmid vectors carry foreign genes into bacteria
3. Transgenic organisms express foreign genes
4. Applications: insulin production, Bt crops, gene therapy
      `
    },
    {
      id: 'biot3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes recombinant dna?',
            options: [
              'combining DNA from different sources',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Recombinant DNA: combining DNA from different sources'
          },
          {
            question: 'In the context of genetic engineering & gmos, which statement is accurate?',
            options: [
              'Transgenic organisms express foreign genes',
              'secruos tnereffid morf AND gninibmoc :AND tnanibmoceR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Transgenic organisms express foreign genes'
          }
        ]
      }
    },
    {
      id: 'biot3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Recombinant DNA**: combining DNA from different sources
- **Plasmid vectors carry foreign genes into bacteria**
- **Transgenic organisms express foreign genes**
- **Applications**: insulin production, Bt crops, gene therapy
      `
    },
    {
      id: 'biot3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to genetic engineering & gmos?',
            options: [
              'Applications: insulin production, Bt crops, gene therapy',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Applications: insulin production, Bt crops, gene therapy'
          }
        ]
      }
    },
    {
      id: 'biot3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Recombinant DNA is important in genetic engineering & gmos because',
            options: ['combining DNA from different sources', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Plasmid vectors carry foreign genes into bacteria is important in genetic engineering & gmos because',
            options: ['Plasmid vectors carry foreign genes into bacteria', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Transgenic organisms express foreign genes is important in genetic engineering & gmos because',
            options: ['Transgenic organisms express foreign genes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['combining DNA from different sources', 'Plasmid vectors carry foreign genes into bacteria', 'Transgenic organisms express foreign genes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Genetic Engineering & GMOs.'
      }
    }
  ]
}
