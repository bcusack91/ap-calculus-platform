export const bioPhotosynthesisPart3Data = {
  topicSlug: 'photosynthesis',
  sections: [
    {
      id: 'phot3-intro-p3',
      type: 'text' as const,
      content: `
# ## Calvin Cycle

**Part 3 of 7 — Calvin Cycle**

1. Occurs in stroma of chloroplast
2. Carbon fixation: CO₂ + RuBP → 2 G3P (by RuBisCO)
3. 3 CO₂ → 1 G3P → glucose
4. Uses 9 ATP and 6 NADPH per G3P
      `
    },
    {
      id: 'phot3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes occurs in stroma of chloroplast?',
            options: [
              'Occurs in stroma of chloroplast',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Occurs in stroma of chloroplast'
          },
          {
            question: 'In the context of calvin cycle, which statement is accurate?',
            options: [
              '3 CO₂ → 1 G3P → glucose',
              'tsalporolhc fo amorts ni sruccO',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: '3 CO₂ → 1 G3P → glucose'
          }
        ]
      }
    },
    {
      id: 'phot3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Occurs in stroma of chloroplast**
- **Carbon fixation**: CO₂ + RuBP → 2 G3P (by RuBisCO)
- **3 CO₂ → 1 G3P → glucose**
- **Uses 9 ATP and 6 NADPH per G3P**
      `
    },
    {
      id: 'phot3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to calvin cycle?',
            options: [
              'Uses 9 ATP and 6 NADPH per G3P',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Uses 9 ATP and 6 NADPH per G3P'
          }
        ]
      }
    },
    {
      id: 'phot3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Occurs in stroma of chloroplast is important in calvin cycle because',
            options: ['Occurs in stroma of chloroplast', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Carbon fixation is important in calvin cycle because',
            options: ['CO₂ + RuBP → 2 G3P (by RuBisCO)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: '3 CO₂ → 1 G3P → glucose is important in calvin cycle because',
            options: ['3 CO₂ → 1 G3P → glucose', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['Occurs in stroma of chloroplast', 'CO₂ + RuBP → 2 G3P (by RuBisCO)', '3 CO₂ → 1 G3P → glucose'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Calvin Cycle.'
      }
    }
  ]
}
