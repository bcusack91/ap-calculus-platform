export const bioNatSelectionPart5Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu5-intro-p5',
      type: 'text' as const,
      content: `
# ## Genetic Drift & Gene Flow

**Part 5 of 7 — Genetic Drift & Gene Flow**

1. Genetic drift: random changes in allele frequency (stronger in small populations)
2. Bottleneck effect: population crash reduces genetic diversity
3. Founder effect: small group colonizes new area
4. Gene flow: migration of alleles between populations
      `
    },
    {
      id: 'natu5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes genetic drift?',
            options: [
              'random changes in allele frequency (stronger in small populations)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Genetic drift: random changes in allele frequency (stronger in small populations)'
          },
          {
            question: 'In the context of genetic drift & gene flow, which statement is accurate?',
            options: [
              'Founder effect: small group colonizes new area',
              ')snoitalupop llams ni regnorts( ycneuqerf elella ni segnahc modnar :tfird citeneG',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Founder effect: small group colonizes new area'
          }
        ]
      }
    },
    {
      id: 'natu5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Genetic drift**: random changes in allele frequency (stronger in small populations)
- **Bottleneck effect**: population crash reduces genetic diversity
- **Founder effect**: small group colonizes new area
- **Gene flow**: migration of alleles between populations
      `
    },
    {
      id: 'natu5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to genetic drift & gene flow?',
            options: [
              'Gene flow: migration of alleles between populations',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Gene flow: migration of alleles between populations'
          }
        ]
      }
    },
    {
      id: 'natu5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Genetic drift is important in genetic drift & gene flow because',
            options: ['random changes in allele frequency (stronger in sm', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Bottleneck effect is important in genetic drift & gene flow because',
            options: ['population crash reduces genetic diversity', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Founder effect is important in genetic drift & gene flow because',
            options: ['small group colonizes new area', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['random changes in allele frequency (stronger in sm', 'population crash reduces genetic diversity', 'small group colonizes new area'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Genetic Drift & Gene Flow.'
      }
    }
  ]
}
