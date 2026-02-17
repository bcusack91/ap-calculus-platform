export const bioBiotechPart3Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot3-intro-p3',
      type: 'text' as const,
      content: `
# ## Genetic Engineering & GMOs

**Part 3 of 7 — Genetic Engineering & GMOs**

1. Recombinant DNA: combining DNA from different sources
2. Plasmid vectors carry foreign genes into bacteria
3. Transgenic organisms express foreign genes
4. Applications: insulin production, Bt crops, gene therapy
      `
    },
    {
      id: 'biot3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Recombinant DNA?',
            options: [
              'combining DNA from different sources',
              'insulin production, Bt crops, gene therapy',
              'Transgenic organisms express foreign genes',
              'Plasmid vectors carry foreign genes into bacteria'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Recombinant DNA: combining DNA from different sources. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Transgenic organisms express foreign…:',
            options: [
              'Plasmid vectors carry foreign genes into bacteria',
              'insulin production, Bt crops, gene therapy',
              'Transgenic organisms express foreign genes',
              'combining DNA from different sources'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Transgenic organisms express foreign genes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Recombinant DNA**: combining DNA from different sources
- **Plasmid vectors carry foreign genes into bacteria**
- **Transgenic organisms express foreign genes**
- **Applications**: insulin production, Bt crops, gene therapy
      `
    },
    {
      id: 'biot3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Applications is correct?',
            options: [
              'Plasmid vectors carry foreign genes into bacteria',
              'insulin production, Bt crops, gene therapy',
              'combining DNA from different sources',
              'Transgenic organisms express foreign genes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Applications: insulin production, Bt crops, gene therapy. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Recombinant DNA',
            options: ['combining DNA from different sources', 'insulin production, Bt crops, gene therapy', 'Transgenic organisms express foreign genes', 'Plasmid vectors carry foreign genes into bacteria']
          },
          {
            label: 'Applications',
            options: ['Transgenic organisms express foreign genes', 'insulin production, Bt crops, gene therapy', 'Plasmid vectors carry foreign genes into bacteria', 'combining DNA from different sources']
          }
        ],
        correctAnswers: ['combining DNA from different sources', 'insulin production, Bt crops, gene therapy'],
        hint1: 'Think about what each concept specifically describes in Genetic Engineering & GMOs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Genetic Engineering & GMOs describes a specific idea. Recombinant DNA: combining DNA from different sources. Applications: insulin production, Bt crops, gene therapy.'
      }
    }
  ]
}
