export const bioTranscriptionPart1Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran1-intro-p1',
      type: 'text' as const,
      content: `
## Central Dogma

**Part 1 of 7 — Central Dogma**

1. DNA → RNA → Protein
2. Transcription: DNA → mRNA
3. Translation: mRNA → protein
4. Exceptions: retroviruses (RNA → DNA via reverse transcriptase)
      `
    },
    {
      id: 'tran1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes DNA → RNA → Protein?',
            options: [
              'mRNA → protein',
              'retroviruses (RNA → DNA via reverse transcriptase)',
              'DNA → RNA → Protein',
              'DNA → mRNA'
            ],
            correctAnswer: 2,
            explanation: 'Correct — DNA → RNA → Protein. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Translation?',
            options: [
              'DNA → mRNA',
              'retroviruses (RNA → DNA via reverse transcriptase)',
              'DNA → RNA → Protein',
              'mRNA → protein'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Translation: mRNA → protein. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'tran1-detail-p1',
      type: 'text' as const,
      content: `
### Key Details

- **DNA → RNA → Protein**
- **Transcription**: DNA → mRNA
- **Translation**: mRNA → protein
- **Exceptions**: retroviruses (RNA → DNA via reverse transcriptase)
      `
    },
    {
      id: 'tran1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Exceptions?',
            options: [
              'retroviruses (RNA → DNA via reverse transcriptase)',
              'DNA → RNA → Protein',
              'mRNA → protein',
              'DNA → mRNA'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Exceptions: retroviruses (RNA → DNA via reverse transcriptase). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'tran1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transcription',
            options: ['retroviruses (RNA → DNA via reverse transcriptase)', 'mRNA → protein', 'DNA → RNA → Protein', 'DNA → mRNA']
          },
          {
            label: 'Translation',
            options: ['retroviruses (RNA → DNA via reverse transcriptase)', 'DNA → mRNA', 'DNA → RNA → Protein', 'mRNA → protein']
          },
          {
            label: 'Exceptions',
            options: ['DNA → RNA → Protein', 'retroviruses (RNA → DNA via reverse transcriptase)', 'DNA → mRNA', 'mRNA → protein']
          }
        ],
        correctAnswers: ['DNA → mRNA', 'mRNA → protein', 'retroviruses (RNA → DNA via reverse transcriptase)'],
        hint1: 'Think about what each concept specifically describes in Central Dogma.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Central Dogma describes a specific idea. Transcription: DNA → mRNA. Translation: mRNA → protein. Exceptions: retroviruses (RNA → DNA via reverse transcriptase).'
      }
    }
  ]
}
