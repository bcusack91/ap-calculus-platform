export const bioTranscriptionPart1Data = {
  topicSlug: 'transcription-translation',
  sections: [
    {
      id: 'tran1-intro-p1',
      type: 'text' as const,
      content: `
# ## Central Dogma

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes dna → rna → protein?',
            options: [
              'DNA → RNA → Protein',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'DNA → RNA → Protein'
          },
          {
            question: 'In the context of central dogma, which statement is accurate?',
            options: [
              'Translation: mRNA → protein',
              'nietorP → ANR → AND',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Translation: mRNA → protein'
          }
        ]
      }
    },
    {
      id: 'tran1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to central dogma?',
            options: [
              'Exceptions: retroviruses (RNA → DNA via reverse transcriptase)',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Exceptions: retroviruses (RNA → DNA via reverse transcriptase)'
          }
        ]
      }
    },
    {
      id: 'tran1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'DNA → RNA → Protein is important in central dogma because',
            options: ['DNA → RNA → Protein', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Transcription is important in central dogma because',
            options: ['DNA → mRNA', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Translation is important in central dogma because',
            options: ['mRNA → protein', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['DNA → RNA → Protein', 'DNA → mRNA', 'mRNA → protein'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Central Dogma.'
      }
    }
  ]
}
