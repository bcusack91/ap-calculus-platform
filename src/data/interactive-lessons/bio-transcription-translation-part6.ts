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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Using the genetic code table?',
            options: [
              'Predicting effects of mutations on proteins',
              'Using the genetic code table',
              'Tracing from DNA to mRNA to protein',
              'Identifying frameshift vs point mutations'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Using the genetic code table. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Transcription & Translation: Problem-Solving Workshop, which explains Tracing from DNA to mRNA to protein?',
            options: [
              'Tracing from DNA to mRNA to protein',
              'Predicting effects of mutations on proteins',
              'Identifying frameshift vs point mutations',
              'Using the genetic code table'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Tracing from DNA to mRNA to protein. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Transcription & Translation: Problem-Solving Workshop, which correctly describes Identifying frameshift vs point…?',
            options: [
              'Predicting effects of mutations on proteins',
              'Tracing from DNA to mRNA to protein',
              'Using the genetic code table',
              'Identifying frameshift vs point mutations'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Identifying frameshift vs point mutations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'tran6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Using the genetic code table',
            options: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Identifying frameshift vs point mutations', 'Tracing from DNA to mRNA to protein']
          },
          {
            label: 'Predicting effects of mutations on…',
            options: ['Tracing from DNA to mRNA to protein', 'Identifying frameshift vs point mutations', 'Predicting effects of mutations on proteins', 'Using the genetic code table']
          },
          {
            label: 'Tracing from DNA to mRNA to protein',
            options: ['Predicting effects of mutations on proteins', 'Using the genetic code table', 'Tracing from DNA to mRNA to protein', 'Identifying frameshift vs point mutations']
          }
        ],
        correctAnswers: ['Using the genetic code table', 'Predicting effects of mutations on proteins', 'Tracing from DNA to mRNA to protein'],
        hint1: 'Think about what each concept specifically describes in Transcription & Translation: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription & Translation: Problem-Solving Workshop describes a specific idea. Using the genetic code table. Predicting effects of mutations on proteins. Tracing from DNA to mRNA to protein.'
      }
    }
  ]
}
