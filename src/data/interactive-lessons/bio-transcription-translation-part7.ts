export const bioTranscriptionPart7Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran7-intro-p7',
      type: 'text' as const,
      content: `
## Transcription & Translation: Synthesis & AP Review

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Central dogma applications?',
            options: [
              'Gene expression regulation points',
              'codon table practice',
              'Mutation types and consequences',
              'Central dogma applications'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Central dogma applications. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Transcription & Translation: Synthesis & AP Review, which explains Gene expression regulation points?',
            options: [
              'codon table practice',
              'Mutation types and consequences',
              'Gene expression regulation points',
              'Central dogma applications'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Gene expression regulation points. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'tran7-detail-p7',
      type: 'text' as const,
      content: `
### Key Details

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents AP exam?',
            options: [
              'codon table practice',
              'Gene expression regulation points',
              'Central dogma applications',
              'Mutation types and consequences'
            ],
            correctAnswer: 0,
            explanation: 'Correct — AP exam: codon table practice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'tran7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Central dogma applications',
            options: ['codon table practice', 'Mutation types and consequences', 'Gene expression regulation points', 'Central dogma applications']
          },
          {
            label: 'Mutation types and consequences',
            options: ['Mutation types and consequences', 'Gene expression regulation points', 'codon table practice', 'Central dogma applications']
          },
          {
            label: 'Gene expression regulation points',
            options: ['Gene expression regulation points', 'Central dogma applications', 'codon table practice', 'Mutation types and consequences']
          }
        ],
        correctAnswers: ['Central dogma applications', 'Mutation types and consequences', 'Gene expression regulation points'],
        hint1: 'Think about what each concept specifically describes in Transcription & Translation: Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Transcription & Translation: Synthesis & AP Review describes a specific idea. Central dogma applications. Mutation types and consequences. Gene expression regulation points.'
      }
    }
  ]
}
