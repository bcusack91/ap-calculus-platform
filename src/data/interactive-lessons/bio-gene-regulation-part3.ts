export const bioGeneRegPart3Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene3-intro-p3',
      type: 'text' as const,
      content: `
# ## Eukaryotic Transcription Factors

**Part 3 of 7 — Eukaryotic Transcription Factors**

1. Transcription factors bind to enhancers/promoters
2. Activators increase transcription
3. Repressors decrease transcription
4. Combinatorial control: multiple factors needed
      `
    },
    {
      id: 'gene3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes transcription factors bind to enhancers/promoters?',
            options: [
              'Transcription factors bind to enhancers/promoters',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Transcription factors bind to enhancers/promoters'
          },
          {
            question: 'In the context of eukaryotic transcription factors, which statement is accurate?',
            options: [
              'Repressors decrease transcription',
              'sretomorp/srecnahne ot dnib srotcaf noitpircsnarT',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Repressors decrease transcription'
          }
        ]
      }
    },
    {
      id: 'gene3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Transcription factors bind to enhancers/promoters**
- **Activators increase transcription**
- **Repressors decrease transcription**
- **Combinatorial control**: multiple factors needed
      `
    },
    {
      id: 'gene3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to eukaryotic transcription factors?',
            options: [
              'Combinatorial control: multiple factors needed',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Combinatorial control: multiple factors needed'
          }
        ]
      }
    },
    {
      id: 'gene3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transcription factors bind to enhancers/promoters is important in eukaryotic transcription factors because',
            options: ['Transcription factors bind to enhancers/promoters', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Activators increase transcription is important in eukaryotic transcription factors because',
            options: ['Activators increase transcription', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Repressors decrease transcription is important in eukaryotic transcription factors because',
            options: ['Repressors decrease transcription', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Transcription factors bind to enhancers/promoters', 'Activators increase transcription', 'Repressors decrease transcription'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Eukaryotic Transcription Factors.'
      }
    }
  ]
}
