export const bioFeedbackPart1Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed1-intro-p1',
      type: 'text' as const,
      content: `
# ## Homeostasis Introduction

**Part 1 of 7 — Homeostasis Introduction**

1. Homeostasis: maintaining internal stability
2. Dynamic equilibrium: constant adjustments
3. Set point: target value for a variable
4. Receptor → control center → effector pathway
      `
    },
    {
      id: 'feed1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes homeostasis?',
            options: [
              'maintaining internal stability',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Homeostasis: maintaining internal stability'
          },
          {
            question: 'In the context of homeostasis introduction, which statement is accurate?',
            options: [
              'Set point: target value for a variable',
              'ytilibats lanretni gniniatniam :sisatsoemoH',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Set point: target value for a variable'
          }
        ]
      }
    },
    {
      id: 'feed1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Homeostasis**: maintaining internal stability
- **Dynamic equilibrium**: constant adjustments
- **Set point**: target value for a variable
- **Receptor → control center → effector pathway**
      `
    },
    {
      id: 'feed1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to homeostasis introduction?',
            options: [
              'Receptor → control center → effector pathway',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Receptor → control center → effector pathway'
          }
        ]
      }
    },
    {
      id: 'feed1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Homeostasis is important in homeostasis introduction because',
            options: ['maintaining internal stability', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Dynamic equilibrium is important in homeostasis introduction because',
            options: ['constant adjustments', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Set point is important in homeostasis introduction because',
            options: ['target value for a variable', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['maintaining internal stability', 'constant adjustments', 'target value for a variable'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Homeostasis Introduction.'
      }
    }
  ]
}
