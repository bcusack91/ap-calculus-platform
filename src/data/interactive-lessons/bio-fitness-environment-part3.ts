export const bioFitnessPart3Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'fitn3-intro-p3',
      type: 'text' as const,
      content: `
# ## Acclimation & Adaptation

**Part 3 of 7 — Acclimation & Adaptation**

1. Acclimation: short-term physiological adjustment (not genetic)
2. Adaptation: genetic change over generations
3. Acclimatization vs adaptation timescales
4. Examples: altitude acclimation, arctic fur color change
      `
    },
    {
      id: 'fitn3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes acclimation?',
            options: [
              'short-term physiological adjustment (not genetic)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Acclimation: short-term physiological adjustment (not genetic)'
          },
          {
            question: 'In the context of acclimation & adaptation, which statement is accurate?',
            options: [
              'Acclimatization vs adaptation timescales',
              ')citeneg ton( tnemtsujda lacigoloisyhp mret-trohs :noitamilccA',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Acclimatization vs adaptation timescales'
          }
        ]
      }
    },
    {
      id: 'fitn3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Acclimation**: short-term physiological adjustment (not genetic)
- **Adaptation**: genetic change over generations
- **Acclimatization vs adaptation timescales**
- **Examples**: altitude acclimation, arctic fur color change
      `
    },
    {
      id: 'fitn3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to acclimation & adaptation?',
            options: [
              'Examples: altitude acclimation, arctic fur color change',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Examples: altitude acclimation, arctic fur color change'
          }
        ]
      }
    },
    {
      id: 'fitn3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Acclimation is important in acclimation & adaptation because',
            options: ['short-term physiological adjustment (not genetic)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Adaptation is important in acclimation & adaptation because',
            options: ['genetic change over generations', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Acclimatization vs adaptation timescales is important in acclimation & adaptation because',
            options: ['Acclimatization vs adaptation timescales', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['short-term physiological adjustment (not genetic)', 'genetic change over generations', 'Acclimatization vs adaptation timescales'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Acclimation & Adaptation.'
      }
    }
  ]
}
