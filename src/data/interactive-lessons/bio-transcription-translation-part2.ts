export const bioTranscriptionPart2Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran2-intro-p2',
      type: 'text' as const,
      content: `
# ## Transcription

**Part 2 of 7 — Transcription**

1. RNA polymerase reads template strand 3'→5'
2. mRNA is synthesized 5'→3'
3. Promoter: TATA box, signals start of transcription
4. Terminator: signals end of transcription
      `
    },
    {
      id: 'tran2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes rna polymerase reads template strand 3\'→5\'?',
            options: [
              'RNA polymerase reads template strand 3\'→5\'',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'RNA polymerase reads template strand 3\'→5\''
          },
          {
            question: 'In the context of transcription, which statement is accurate?',
            options: [
              'Promoter: TATA box, signals start of transcription',
              '\'5→\'3 dnarts etalpmet sdaer esaremylop ANR',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Promoter: TATA box, signals start of transcription'
          }
        ]
      }
    },
    {
      id: 'tran2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **RNA polymerase reads template strand 3'→5'**
- **mRNA is synthesized 5'→3'**
- **Promoter**: TATA box, signals start of transcription
- **Terminator**: signals end of transcription
      `
    },
    {
      id: 'tran2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to transcription?',
            options: [
              'Terminator: signals end of transcription',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Terminator: signals end of transcription'
          }
        ]
      }
    },
    {
      id: 'tran2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'RNA polymerase reads template strand 3\'→5\' is important in transcription because',
            options: ['RNA polymerase reads template strand 3\'→5\'', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'mRNA is synthesized 5\'→3\' is important in transcription because',
            options: ['mRNA is synthesized 5\'→3\'', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Promoter is important in transcription because',
            options: ['TATA box, signals start of transcription', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['RNA polymerase reads template strand 3\'→5\'', 'mRNA is synthesized 5\'→3\'', 'TATA box, signals start of transcription'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Transcription.'
      }
    }
  ]
}
