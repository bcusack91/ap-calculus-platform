export const bioTranscriptionPart6Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran6-intro-p6',
      type: 'text' as const,
      content: `
# ## Transcription & Translation: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Using the genetic code table
2. Predicting effects of mutations on proteins
3. Tracing from DNA to mRNA to protein
4. Identifying frameshift vs point mutations
      `
    },
    {
      id: 'tran6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes using the genetic code table?',
            options: [
              'Using the genetic code table',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Using the genetic code table'
          },
          {
            question: 'In the context of problem-solving, which statement is accurate?',
            options: [
              'Tracing from DNA to mRNA to protein',
              'elbat edoc citeneg eht gnisU',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Tracing from DNA to mRNA to protein'
          }
        ]
      }
    },
    {
      id: 'tran6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Using the genetic code table**
- **Predicting effects of mutations on proteins**
- **Tracing from DNA to mRNA to protein**
- **Identifying frameshift vs point mutations**
      `
    },
    {
      id: 'tran6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to problem-solving?',
            options: [
              'Identifying frameshift vs point mutations',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Identifying frameshift vs point mutations'
          }
        ]
      }
    },
    {
      id: 'tran6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using the genetic code table is important in problem-solving because',
            options: ['Using the genetic code table', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Predicting effects of mutations on proteins is important in problem-solving because',
            options: ['Predicting effects of mutations on proteins', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Tracing from DNA to mRNA to protein is important in problem-solving because',
            options: ['Tracing from DNA to mRNA to protein', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Tracing from DNA to mRNA to protein'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving.'
      }
    }
  ]
}
