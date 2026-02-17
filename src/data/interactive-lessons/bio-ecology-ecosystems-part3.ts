export const bioEcologyPart3Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol3-intro-p3',
      type: 'text' as const,
      content: `
# ## Ecosystem Structure

**Part 3 of 7 — Ecosystem Structure**

1. Producers (autotrophs): make organic molecules from inorganic
2. Consumers (heterotrophs): eat other organisms
3. Decomposers: break down dead material
4. Trophic levels: producers → primary consumers → secondary → tertiary
      `
    },
    {
      id: 'ecol3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Producers (autotrophs)" refer to in biology?',
            options: [
              'eat other organisms',
              'break down dead material',
              'producers → primary consumers → secondary → tertiary',
              'make organic molecules from inorganic'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Producers (autotrophs): make organic molecules from inorganic. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ecosystem Structure, which explains Decomposers?',
            options: [
              'make organic molecules from inorganic',
              'producers → primary consumers → secondary → tertiary',
              'eat other organisms',
              'break down dead material'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Decomposers: break down dead material. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Producers (autotrophs)**: make organic molecules from inorganic
- **Consumers (heterotrophs)**: eat other organisms
- **Decomposers**: break down dead material
- **Trophic levels**: producers → primary consumers → secondary → tertiary
      `
    },
    {
      id: 'ecol3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Trophic levels is correct?',
            options: [
              'make organic molecules from inorganic',
              'break down dead material',
              'eat other organisms',
              'producers → primary consumers → secondary → tertiary'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Trophic levels: producers → primary consumers → secondary → tertiary. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Producers (autotrophs)',
            options: ['break down dead material', 'producers → primary consumers → secondary → tertiary', 'eat other organisms', 'make organic molecules from inorganic']
          },
          {
            label: 'Consumers (heterotrophs)',
            options: ['make organic molecules from inorganic', 'eat other organisms', 'producers → primary consumers → secondary → tertiary', 'break down dead material']
          },
          {
            label: 'Decomposers',
            options: ['break down dead material', 'make organic molecules from inorganic', 'producers → primary consumers → secondary → tertiary', 'eat other organisms']
          }
        ],
        correctAnswers: ['make organic molecules from inorganic', 'eat other organisms', 'break down dead material'],
        hint1: 'Think about what each concept specifically describes in Ecosystem Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecosystem Structure describes a specific idea. Producers (autotrophs): make organic molecules from inorganic. Consumers (heterotrophs): eat other organisms. Decomposers: break down dead material.'
      }
    }
  ]
}
