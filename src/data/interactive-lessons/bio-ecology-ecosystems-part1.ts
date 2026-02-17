export const bioEcologyPart1Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'ecol1-intro-p1',
      type: 'text' as const,
      content: `
# ## Introduction to Ecology

**Part 1 of 7 — Introduction to Ecology**

1. Ecology: study of interactions between organisms and their environment
2. Levels: organism → population → community → ecosystem → biosphere
3. Biotic factors: living components
4. Abiotic factors: nonliving components (temperature, water, light)
      `
    },
    {
      id: 'ecol1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ecology" refer to in biology?',
            options: [
              'study of interactions between organisms and their environment',
              'organism → population → community → ecosystem → biosphere',
              'living components',
              'nonliving components (temperature, water, light)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Ecology: study of interactions between organisms and their environment. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Introduction to Ecology, which explains Biotic factors?',
            options: [
              'study of interactions between organisms and their environment',
              'nonliving components (temperature, water, light)',
              'organism → population → community → ecosystem → biosphere',
              'living components'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Biotic factors: living components. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ecol1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Ecology**: study of interactions between organisms and their environment
- **Levels**: organism → population → community → ecosystem → biosphere
- **Biotic factors**: living components
- **Abiotic factors**: nonliving components (temperature, water, light)
      `
    },
    {
      id: 'ecol1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Introduction to Ecology, which correctly describes Abiotic factors?',
            options: [
              'organism → population → community → ecosystem → biosphere',
              'living components',
              'nonliving components (temperature, water, light)',
              'study of interactions between organisms and their environment'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Abiotic factors: nonliving components (temperature, water, light). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ecol1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ecology',
            options: ['nonliving components (temperature, water, light)', 'study of interactions between organisms and their environment', 'living components', 'organism → population → community → ecosystem → biosphere']
          },
          {
            label: 'Levels',
            options: ['study of interactions between organisms and their environment', 'nonliving components (temperature, water, light)', 'organism → population → community → ecosystem → biosphere', 'living components']
          },
          {
            label: 'Biotic factors',
            options: ['study of interactions between organisms and their environment', 'living components', 'nonliving components (temperature, water, light)', 'organism → population → community → ecosystem → biosphere']
          }
        ],
        correctAnswers: ['study of interactions between organisms and their environment', 'organism → population → community → ecosystem → biosphere', 'living components'],
        hint1: 'Think about what each concept specifically describes in Introduction to Ecology.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Introduction to Ecology describes a specific idea. Ecology: study of interactions between organisms and their environment. Levels: organism → population → community → ecosystem → biosphere. Biotic factors: living components.'
      }
    }
  ]
}
