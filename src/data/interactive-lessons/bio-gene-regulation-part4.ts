export const bioGeneRegPart4Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene4-intro-p4',
      type: 'text' as const,
      content: `
# ## Epigenetics

**Part 4 of 7 — Epigenetics**

1. DNA methylation: silences genes (adds CH₃ groups)
2. Histone modification: acetylation loosens chromatin (genes ON)
3. Heritable changes without DNA sequence changes
4. Environmental factors can cause epigenetic changes
      `
    },
    {
      id: 'gene4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes dna methylation?',
            options: [
              'silences genes (adds CH₃ groups)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'DNA methylation: silences genes (adds CH₃ groups)'
          },
          {
            question: 'In the context of epigenetics, which statement is accurate?',
            options: [
              'Heritable changes without DNA sequence changes',
              ')spuorg ₃HC sdda( seneg secnelis :noitalyhtem AND',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Heritable changes without DNA sequence changes'
          }
        ]
      }
    },
    {
      id: 'gene4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **DNA methylation**: silences genes (adds CH₃ groups)
- **Histone modification**: acetylation loosens chromatin (genes ON)
- **Heritable changes without DNA sequence changes**
- **Environmental factors can cause epigenetic changes**
      `
    },
    {
      id: 'gene4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to epigenetics?',
            options: [
              'Environmental factors can cause epigenetic changes',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Environmental factors can cause epigenetic changes'
          }
        ]
      }
    },
    {
      id: 'gene4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA methylation is important in epigenetics because',
            options: ['silences genes (adds CH₃ groups)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Histone modification is important in epigenetics because',
            options: ['acetylation loosens chromatin (genes ON)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Heritable changes without DNA sequence changes is important in epigenetics because',
            options: ['Heritable changes without DNA sequence changes', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['silences genes (adds CH₃ groups)', 'acetylation loosens chromatin (genes ON)', 'Heritable changes without DNA sequence changes'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Epigenetics.'
      }
    }
  ]
}
