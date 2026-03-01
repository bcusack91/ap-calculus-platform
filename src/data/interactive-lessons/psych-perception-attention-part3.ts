export const psychPerceptionPart3Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce3-intro',
      type: 'text' as const,
      content: `
## Perceptual Constancies & Illusions

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Size constancy?',
            options: [
              'objects appear same shape despite viewing angle',
              'colors appear same despite lighting changes',
              'Müller-Lyer, Ponzo, Ames room',
              'objects appear same size despite distance'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Size constancy: objects appear same size despite distance. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Perceptual Constancies & Illusions, which explains Color constancy?',
            options: [
              'objects appear same size despite distance',
              'objects appear same shape despite viewing angle',
              'Müller-Lyer, Ponzo, Ames room',
              'colors appear same despite lighting changes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Color constancy: colors appear same despite lighting changes. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce3-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Size constancy',
            options: ['colors appear same despite lighting changes', 'objects appear same size despite distance', 'objects appear same shape despite viewing angle', 'Müller-Lyer, Ponzo, Ames room']
          },
          {
            label: 'Shape constancy',
            options: ['Müller-Lyer, Ponzo, Ames room', 'objects appear same shape despite viewing angle', 'objects appear same size despite distance', 'colors appear same despite lighting changes']
          },
          {
            label: 'Color constancy',
            options: ['colors appear same despite lighting changes', 'Müller-Lyer, Ponzo, Ames room', 'objects appear same shape despite viewing angle', 'objects appear same size despite distance']
          }
        ],
        correctAnswers: ['objects appear same size despite distance', 'objects appear same shape despite viewing angle', 'colors appear same despite lighting changes'],
        hint1: 'Think about what each concept specifically describes in Perceptual Constancies & Illusions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Perceptual Constancies & Illusions describes a specific idea. Size constancy: objects appear same size despite distance. Shape constancy: objects appear same shape despite viewing angle. Color constancy: colors appear same despite lighting changes.'
      }
    }
  ]
}
