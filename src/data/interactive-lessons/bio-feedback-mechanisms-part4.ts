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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Endotherms?',
            options: [
              'thermostat of the body',
              'body temperature follows environment',
              'internal heat production (mammals, birds)',
              'shivering, sweating, vasodilation/constriction'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Endotherms: internal heat production (mammals, birds). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Thermoregulation, which explains Hypothalamus?',
            options: [
              'internal heat production (mammals, birds)',
              'body temperature follows environment',
              'shivering, sweating, vasodilation/constriction',
              'thermostat of the body'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Hypothalamus: thermostat of the body. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Responses is correct?',
            options: [
              'internal heat production (mammals, birds)',
              'thermostat of the body',
              'shivering, sweating, vasodilation/constriction',
              'body temperature follows environment'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Responses: shivering, sweating, vasodilation/constriction. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'feed4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Endotherms',
            options: ['shivering, sweating, vasodilation/constriction', 'body temperature follows environment', 'internal heat production (mammals, birds)', 'thermostat of the body']
          },
          {
            label: 'Ectotherms',
            options: ['internal heat production (mammals, birds)', 'body temperature follows environment', 'shivering, sweating, vasodilation/constriction', 'thermostat of the body']
          },
          {
            label: 'Hypothalamus',
            options: ['thermostat of the body', 'internal heat production (mammals, birds)', 'body temperature follows environment', 'shivering, sweating, vasodilation/constriction']
          }
        ],
        correctAnswers: ['internal heat production (mammals, birds)', 'body temperature follows environment', 'thermostat of the body'],
        hint1: 'Think about what each concept specifically describes in Thermoregulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Thermoregulation describes a specific idea. Endotherms: internal heat production (mammals, birds). Ectotherms: body temperature follows environment. Hypothalamus: thermostat of the body.'
      }
    }
  ]
}
