export const psychPerceptionPart3Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce3-intro',
      type: 'text' as const,
      content: `
# ## Perceptual Constancies & Illusions

**Part 3 of 7 — Perceptual Constancies & Illusions**

### 1. Size constancy

objects appear same size despite distance

### 2. Shape constancy

objects appear same shape despite viewing angle

### 3. Color constancy

colors appear same despite lighting changes

### 4. Visual illusions

Müller-Lyer, Ponzo, Ames room
      `
    },
    {
      id: 'perce3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of perceptual constancies & illusions?',
            options: [
              'Size constancy',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Size constancy: objects appear same size despite distance'
          },
          {
            question: 'In the context of perceptual constancies & illusions, which is accurate?',
            options: [
              'colors appear same despite lighting changes',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Color constancy: colors appear same despite lighting changes'
          }
        ]
      }
    },
    {
      id: 'perce3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Size constancy**: objects appear same size despite distance
- **Shape constancy**: objects appear same shape despite viewing angle
- **Color constancy**: colors appear same despite lighting changes
- **Visual illusions**: Müller-Lyer, Ponzo, Ames room
      `
    },
    {
      id: 'perce3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to perceptual constancies & illusions?',
            options: [
              'Müller-Lyer, Ponzo, Ames room',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Visual illusions: Müller-Lyer, Ponzo, Ames room'
          }
        ]
      }
    },
    {
      id: 'perce3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Size constancy',
            options: ['objects appear same size despite distance', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Shape constancy',
            options: ['objects appear same shape despite viewing angle', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Color constancy',
            options: ['colors appear same despite lighting changes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['objects appear same size despite distance', 'objects appear same shape despite viewing angle', 'colors appear same despite lighting changes'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Perceptual Constancies & Illusions.'
      }
    }
  ]
}
