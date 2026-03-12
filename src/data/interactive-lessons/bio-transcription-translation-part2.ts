export const bioTranscriptionPart2Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran2-intro-p2',
      type: 'text' as const,
      content: `
## Transcription

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes RNA polymerase reads template strand…?',
            options: [
              'RNA polymerase reads template strand 3\'→5\'',
              'signals end of transcription',
              'TATA box, signals start of transcription',
              'mRNA is synthesized 5\'→3\''
            ],
            correctAnswer: 0,
            explanation: 'Correct — RNA polymerase reads template strand 3\'→5\'. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Promoter?',
            options: [
              'signals end of transcription',
              'RNA polymerase reads template strand 3\'→5\'',
              'mRNA is synthesized 5\'→3\'',
              'TATA box, signals start of transcription'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Promoter: TATA box, signals start of transcription. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'tran2-detail-p2',
      type: 'text' as const,
      content: `
### Key Details

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Terminator is correct?',
            options: [
              'mRNA is synthesized 5\'→3\'',
              'TATA box, signals start of transcription',
              'signals end of transcription',
              'RNA polymerase reads template strand 3\'→5\''
            ],
            correctAnswer: 2,
            explanation: 'Correct — Terminator: signals end of transcription. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'tran2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Promoter',
            options: ['TATA box, signals start of transcription', 'RNA polymerase reads template strand 3\'→5\'', 'signals end of transcription', 'mRNA is synthesized 5\'→3\'']
          },
          {
            label: 'Terminator',
            options: ['RNA polymerase reads template strand 3\'→5\'', 'TATA box, signals start of transcription', 'signals end of transcription', 'mRNA is synthesized 5\'→3\'']
          }
        ],
        correctAnswers: ['TATA box, signals start of transcription', 'signals end of transcription'],
        hint1: 'Think about what each concept specifically describes in Transcription.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription describes a specific idea. Promoter: TATA box, signals start of transcription. Terminator: signals end of transcription.'
      }
    }
  ]
}
