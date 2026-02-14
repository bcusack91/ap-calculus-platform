export const bioTranscriptionPart7Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran7-intro-p7',
      type: 'text' as const,
      content: `
# ## Transcription & Translation: Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

1. Central dogma applications
2. Mutation types and consequences
3. Gene expression regulation points
4. AP exam: codon table practice
      `
    },
    {
      id: 'tran7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes central dogma applications?',
            options: [
              'Central dogma applications',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Central dogma applications'
          },
          {
            question: 'In the context of synthesis & ap review, which statement is accurate?',
            options: [
              'Gene expression regulation points',
              'snoitacilppa amgod lartneC',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Gene expression regulation points'
          }
        ]
      }
    },
    {
      id: 'tran7-detail-p7',
      type: 'text' as const,
      content: `
# ### Key Details

- **Central dogma applications**
- **Mutation types and consequences**
- **Gene expression regulation points**
- **AP exam**: codon table practice
      `
    },
    {
      id: 'tran7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to synthesis & ap review?',
            options: [
              'AP exam: codon table practice',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: codon table practice'
          }
        ]
      }
    },
    {
      id: 'tran7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central dogma applications is important in synthesis & ap review because',
            options: ['Central dogma applications', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Mutation types and consequences is important in synthesis & ap review because',
            options: ['Mutation types and consequences', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Gene expression regulation points is important in synthesis & ap review because',
            options: ['Gene expression regulation points', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Central dogma applications', 'Mutation types and consequences', 'Gene expression regulation points'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
