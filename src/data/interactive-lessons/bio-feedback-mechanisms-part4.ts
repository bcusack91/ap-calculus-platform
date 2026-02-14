export const bioFeedbackPart4Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'feed4-intro-p4',
      type: 'text' as const,
      content: `
# ## Thermoregulation

**Part 4 of 7 — Thermoregulation**

1. Endotherms: internal heat production (mammals, birds)
2. Ectotherms: body temperature follows environment
3. Hypothalamus: thermostat of the body
4. Responses: shivering, sweating, vasodilation/constriction
      `
    },
    {
      id: 'feed4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes endotherms?',
            options: [
              'internal heat production (mammals, birds)',
              'The opposite process occurs',
              'This is not relevant to biology',
              'This only occurs in prokaryotes'
            ],
            correctAnswer: 0,
            explanation: 'Endotherms: internal heat production (mammals, birds)'
          },
          {
            question: 'In the context of thermoregulation, which statement is accurate?',
            options: [
              'Hypothalamus: thermostat of the body',
              ')sdrib ,slammam( noitcudorp taeh lanretni :smrehtodnE',
              'None of the above are correct',
              'This topic is not covered in AP Biology'
            ],
            correctAnswer: 0,
            explanation: 'Hypothalamus: thermostat of the body'
          }
        ]
      }
    },
    {
      id: 'feed4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Endotherms**: internal heat production (mammals, birds)
- **Ectotherms**: body temperature follows environment
- **Hypothalamus**: thermostat of the body
- **Responses**: shivering, sweating, vasodilation/constriction
      `
    },
    {
      id: 'feed4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept is most directly related to thermoregulation?',
            options: [
              'Responses: shivering, sweating, vasodilation/constriction',
              'Photosynthesis only',
              'Abiotic factors exclusively',
              'Mitochondrial DNA only'
            ],
            correctAnswer: 0,
            explanation: 'Responses: shivering, sweating, vasodilation/constriction'
          }
        ]
      }
    },
    {
      id: 'feed4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endotherms is important in thermoregulation because',
            options: ['internal heat production (mammals, birds)', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Ectotherms is important in thermoregulation because',
            options: ['body temperature follows environment', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          },
          {
            label: 'Hypothalamus is important in thermoregulation because',
            options: ['thermostat of the body', 'it is not relevant', 'it only occurs in labs', 'it was disproven']
          }
        ],
        correctAnswers: ['internal heat production (mammals, birds)', 'body temperature follows environment', 'thermostat of the body'],
        hint1: 'Review concept 1.',
        hint2: 'Review concept 2.',
        hint3: 'Review concept 3.',
        explanation: 'These concepts are fundamental to understanding Thermoregulation.'
      }
    }
  ]
}
