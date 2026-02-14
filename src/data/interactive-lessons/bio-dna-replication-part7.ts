export const bioDnaReplicationPart7Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-7-intro-p7',
      type: 'text' as const,
      content: `
# ## DNA Replication: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Replication accuracy and mutation rates
2. Connection to cell cycle checkpoints
3. Telomeres and aging/cancer
4. AP exam: enzyme identification and function
      `
    },
    {
      id: 'dna-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes replication accuracy and mutation rates?',
            options: [
              'Replication accuracy and mutation rates',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Replication accuracy and mutation rates'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Telomeres and aging/cancer',
              'setar noitatum dna ycarucca noitacilpeR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Telomeres and aging/cancer'
          }
        ]
      }
    },
    {
      id: 'dna-7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Replication accuracy and mutation rates**
- **Connection to cell cycle checkpoints**
- **Telomeres and aging/cancer**
- **AP exam**: enzyme identification and function
      `
    },
    {
      id: 'dna-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: enzyme identification and function',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: enzyme identification and function'
          }
        ]
      }
    },
    {
      id: 'dna-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replication accuracy and mutation rates is important in synthesis & ap review because',
            options: ['Replication accuracy and mutation rates', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Connection to cell cycle checkpoints is important in synthesis & ap review because',
            options: ['Connection to cell cycle checkpoints', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Telomeres and aging/cancer is important in synthesis & ap review because',
            options: ['Telomeres and aging/cancer', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Replication accuracy and mutation rates', 'Connection to cell cycle checkpoints', 'Telomeres and aging/cancer'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
