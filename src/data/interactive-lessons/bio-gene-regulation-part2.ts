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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Operon" refer to in biology?',
            options: [
              'inducible (lactose present → genes ON)',
              'promoter + operator + structural genes',
              'repressible (tryptophan present → genes OFF)',
              'Regulatory gene encodes repressor protein'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Operon: promoter + operator + structural genes. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Prokaryotic Regulation (Operons), which explains trp operon?',
            options: [
              'inducible (lactose present → genes ON)',
              'repressible (tryptophan present → genes OFF)',
              'promoter + operator + structural genes',
              'Regulatory gene encodes repressor protein'
            ],
            correctAnswer: 1,
            explanation: 'Correct — trp operon: repressible (tryptophan present → genes OFF). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Regulatory gene encodes repressor…?',
            options: [
              'inducible (lactose present → genes ON)',
              'promoter + operator + structural genes',
              'Regulatory gene encodes repressor protein',
              'repressible (tryptophan present → genes OFF)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Regulatory gene encodes repressor protein. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Operon',
            options: ['inducible (lactose present → genes ON)', 'repressible (tryptophan present → genes OFF)', 'Regulatory gene encodes repressor protein', 'promoter + operator + structural genes']
          },
          {
            label: 'lac operon',
            options: ['promoter + operator + structural genes', 'Regulatory gene encodes repressor protein', 'repressible (tryptophan present → genes OFF)', 'inducible (lactose present → genes ON)']
          },
          {
            label: 'trp operon',
            options: ['Regulatory gene encodes repressor protein', 'promoter + operator + structural genes', 'inducible (lactose present → genes ON)', 'repressible (tryptophan present → genes OFF)']
          }
        ],
        correctAnswers: ['promoter + operator + structural genes', 'inducible (lactose present → genes ON)', 'repressible (tryptophan present → genes OFF)'],
        hint1: 'Think about what each concept specifically describes in Prokaryotic Regulation (Operons).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Prokaryotic Regulation (Operons) describes a specific idea. Operon: promoter + operator + structural genes. lac operon: inducible (lactose present → genes ON). trp operon: repressible (tryptophan present → genes OFF).'
      }
    }
  ]
}
