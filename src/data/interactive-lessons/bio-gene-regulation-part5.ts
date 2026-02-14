export const bioGeneRegPart5Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene5-intro-p5',
      type: 'text' as const,
      content: `
# ## RNA Interference

**Part 5 of 7 — RNA Interference**

1. Small RNA molecules (miRNA, siRNA) silence genes
2. miRNA binds complementary mRNA → blocks translation
3. siRNA triggers mRNA degradation
4. Post-transcriptional regulation
      `
    },
    {
      id: 'gene5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes small rna molecules (mirna, sirna) silence genes?',
            options: [
              'Small RNA molecules (miRNA, siRNA) silence genes',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Small RNA molecules (miRNA, siRNA) silence genes'
          },
          {
            question: 'In the context of rna interference, which statement is accurate?',
            options: [
              'siRNA triggers mRNA degradation',
              'seneg ecnelis )ANRis ,ANRim( selucelom ANR llamS',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'siRNA triggers mRNA degradation'
          }
        ]
      }
    },
    {
      id: 'gene5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Small RNA molecules (miRNA, siRNA) silence genes**
- **miRNA binds complementary mRNA → blocks translation**
- **siRNA triggers mRNA degradation**
- **Post-transcriptional regulation**
      `
    },
    {
      id: 'gene5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to rna interference?',
            options: [
              'Post-transcriptional regulation',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Post-transcriptional regulation'
          }
        ]
      }
    },
    {
      id: 'gene5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Small RNA molecules (miRNA, siRNA) silence genes is important in rna interference because',
            options: ['Small RNA molecules (miRNA, siRNA) silence genes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'miRNA binds complementary mRNA → blocks translation is important in rna interference because',
            options: ['miRNA binds complementary mRNA → blocks translatio', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'siRNA triggers mRNA degradation is important in rna interference because',
            options: ['siRNA triggers mRNA degradation', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Small RNA molecules (miRNA, siRNA) silence genes', 'miRNA binds complementary mRNA → blocks translatio', 'siRNA triggers mRNA degradation'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding RNA Interference.'
      }
    }
  ]
}
