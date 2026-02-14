export const psychPerceptionPart5Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce5-intro',
      type: 'text' as const,
      content: `
# ## Perceptual Set & Context

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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of perceptual set & context?',
            options: [
              'Perceptual set',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Perceptual set: expectations influence perception'
          },
          {
            question: 'In the context of perceptual set & context, which is accurate?',
            options: [
              'mental frameworks that guide perception',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Schemas: mental frameworks that guide perception'
          }
        ]
      }
    },
    {
      id: 'perce5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Perceptual set',
            options: ['expectations influence perception', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Context effects',
            options: ['surrounding information affects interpretation', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Schemas',
            options: ['mental frameworks that guide perception', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['expectations influence perception', 'surrounding information affects interpretation', 'mental frameworks that guide perception'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Perceptual Set & Context.'
      }
    }
  ]
}
