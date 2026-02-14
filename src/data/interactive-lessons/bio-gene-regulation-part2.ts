export const bioGeneRegPart2Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene2-intro-p2',
      type: 'text' as const,
      content: `
# ## Prokaryotic Regulation (Operons)

**Part 2 of 7 — Prokaryotic Regulation (Operons)**

1. Operon: promoter + operator + structural genes
2. lac operon: inducible (lactose present → genes ON)
3. trp operon: repressible (tryptophan present → genes OFF)
4. Regulatory gene encodes repressor protein
      `
    },
    {
      id: 'gene2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes operon?',
            options: [
              'promoter + operator + structural genes',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Operon: promoter + operator + structural genes'
          },
          {
            question: 'In the context of prokaryotic regulation (operons), which statement is accurate?',
            options: [
              'trp operon: repressible (tryptophan present → genes OFF)',
              'seneg larutcurts + rotarepo + retomorp :norepO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'trp operon: repressible (tryptophan present → genes OFF)'
          }
        ]
      }
    },
    {
      id: 'gene2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Operon**: promoter + operator + structural genes
- **lac operon**: inducible (lactose present → genes ON)
- **trp operon**: repressible (tryptophan present → genes OFF)
- **Regulatory gene encodes repressor protein**
      `
    },
    {
      id: 'gene2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to prokaryotic regulation (operons)?',
            options: [
              'Regulatory gene encodes repressor protein',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Regulatory gene encodes repressor protein'
          }
        ]
      }
    },
    {
      id: 'gene2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Operon is important in prokaryotic regulation (operons) because',
            options: ['promoter + operator + structural genes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'lac operon is important in prokaryotic regulation (operons) because',
            options: ['inducible (lactose present → genes ON)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'trp operon is important in prokaryotic regulation (operons) because',
            options: ['repressible (tryptophan present → genes OFF)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['promoter + operator + structural genes', 'inducible (lactose present → genes ON)', 'repressible (tryptophan present → genes OFF)'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Prokaryotic Regulation (Operons).'
      }
    }
  ]
}
