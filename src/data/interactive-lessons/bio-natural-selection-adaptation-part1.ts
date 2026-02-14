export const bioNatSelectionPart1Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'natu1-intro-p1',
      type: 'text' as const,
      content: `
# ## Darwin's Theory

**Part 1 of 7 — Darwin's Theory**

1. Variation exists within populations
2. More offspring produced than can survive
3. Individuals with favorable traits survive and reproduce more
4. Favorable traits are inherited → population changes over time
      `
    },
    {
      id: 'natu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes variation exists within populations?',
            options: [
              'Variation exists within populations',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Variation exists within populations'
          },
          {
            question: 'In the context of darwin\'s theory, which statement is accurate?',
            options: [
              'Individuals with favorable traits survive and reproduce more',
              'snoitalupop nihtiw stsixe noitairaV',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Individuals with favorable traits survive and reproduce more'
          }
        ]
      }
    },
    {
      id: 'natu1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Variation exists within populations**
- **More offspring produced than can survive**
- **Individuals with favorable traits survive and reproduce more**
- **Favorable traits are inherited → population changes over time**
      `
    },
    {
      id: 'natu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to darwin\'s theory?',
            options: [
              'Favorable traits are inherited → population changes over time',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Favorable traits are inherited → population changes over time'
          }
        ]
      }
    },
    {
      id: 'natu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Variation exists within populations is important in darwin\'s theory because',
            options: ['Variation exists within populations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'More offspring produced than can survive is important in darwin\'s theory because',
            options: ['More offspring produced than can survive', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Individuals with favorable traits survive and reproduce more is important in darwin\'s theory because',
            options: ['Individuals with favorable traits survive and repr', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Variation exists within populations', 'More offspring produced than can survive', 'Individuals with favorable traits survive and repr'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Darwin\'s Theory.'
      }
    }
  ]
}
