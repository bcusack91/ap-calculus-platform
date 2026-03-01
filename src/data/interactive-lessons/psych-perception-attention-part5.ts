export const psychPerceptionPart5Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce5-intro',
      type: 'text' as const,
      content: `
## Perceptual Set & Context

**Part 5 of 7 — Perceptual Set & Context**

### 1. Perceptual set

expectations influence perception

### 2. Context effects

surrounding information affects interpretation

### 3. Schemas

mental frameworks that guide perception

### 4. Cultural influences on perception

Cultural influences on perception
      `
    },
    {
      id: 'perce5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Perceptual set?',
            options: [
              'surrounding information affects interpretation',
              'mental frameworks that guide perception',
              'expectations influence perception',
              'Cultural influences on perception'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Perceptual set: expectations influence perception. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Schemas?',
            options: [
              'surrounding information affects interpretation',
              'Cultural influences on perception',
              'mental frameworks that guide perception',
              'expectations influence perception'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Schemas: mental frameworks that guide perception. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce5-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Perceptual set**: expectations influence perception
- **Context effects**: surrounding information affects interpretation
- **Schemas**: mental frameworks that guide perception
- **Cultural influences on perception**
      `
    },
    {
      id: 'perce5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to perceptual set & context?',
            options: [
              'Cultural influences on perception',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Cultural influences on perception'
          }
        ]
      }
    },
    {
      id: 'perce5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Perceptual set',
            options: ['mental frameworks that guide perception', 'surrounding information affects interpretation', 'Cultural influences on perception', 'expectations influence perception']
          },
          {
            label: 'Context effects',
            options: ['surrounding information affects interpretation', 'Cultural influences on perception', 'expectations influence perception', 'mental frameworks that guide perception']
          },
          {
            label: 'Schemas',
            options: ['mental frameworks that guide perception', 'Cultural influences on perception', 'expectations influence perception', 'surrounding information affects interpretation']
          }
        ],
        correctAnswers: ['expectations influence perception', 'surrounding information affects interpretation', 'mental frameworks that guide perception'],
        hint1: 'Think about what each concept specifically describes in Perceptual Set & Context.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Perceptual Set & Context describes a specific idea. Perceptual set: expectations influence perception. Context effects: surrounding information affects interpretation. Schemas: mental frameworks that guide perception.'
      }
    }
  ]
}
