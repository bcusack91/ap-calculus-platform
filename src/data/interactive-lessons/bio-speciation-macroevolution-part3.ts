export const bioSpeciationPart3Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'spec3-intro-p3',
      type: 'text' as const,
      content: `
# ## Sympatric Speciation

**Part 3 of 7 — Sympatric Speciation**

1. Speciation without geographic isolation
2. Polyploidy in plants (most common mechanism)
3. Habitat differentiation within same area
4. Temporal isolation: different breeding seasons
      `
    },
    {
      id: 'spec3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Speciation without geographic isolation" refer to in biology?',
            options: [
              'Speciation without geographic isolation',
              'different breeding seasons',
              'Habitat differentiation within same area',
              'Polyploidy in plants (most common mechanism)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Speciation without geographic isolation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Habitat differentiation within same area:',
            options: [
              'Speciation without geographic isolation',
              'Polyploidy in plants (most common mechanism)',
              'different breeding seasons',
              'Habitat differentiation within same area'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Habitat differentiation within same area. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'spec3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Speciation without geographic isolation**
- **Polyploidy in plants (most common mechanism)**
- **Habitat differentiation within same area**
- **Temporal isolation**: different breeding seasons
      `
    },
    {
      id: 'spec3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Temporal isolation is correct?',
            options: [
              'different breeding seasons',
              'Polyploidy in plants (most common mechanism)',
              'Habitat differentiation within same area',
              'Speciation without geographic isolation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Temporal isolation: different breeding seasons. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'spec3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speciation without geographic isolation',
            options: ['Habitat differentiation within same area', 'Speciation without geographic isolation', 'Polyploidy in plants (most common mechanism)', 'different breeding seasons']
          },
          {
            label: 'Polyploidy in plants (most common…',
            options: ['Polyploidy in plants (most common mechanism)', 'Speciation without geographic isolation', 'different breeding seasons', 'Habitat differentiation within same area']
          },
          {
            label: 'Habitat differentiation within same area',
            options: ['Habitat differentiation within same area', 'Speciation without geographic isolation', 'Polyploidy in plants (most common mechanism)', 'different breeding seasons']
          }
        ],
        correctAnswers: ['Speciation without geographic isolation', 'Polyploidy in plants (most common mechanism)', 'Habitat differentiation within same area'],
        hint1: 'Think about what each concept specifically describes in Sympatric Speciation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sympatric Speciation describes a specific idea. Speciation without geographic isolation. Polyploidy in plants (most common mechanism). Habitat differentiation within same area.'
      }
    }
  ]
}
