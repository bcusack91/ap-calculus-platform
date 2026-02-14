export const psychSensationPart2Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensa2-intro',
      type: 'text' as const,
      content: `
# ## Vision

**Part 2 of 7 — Vision**

### 1. Light enters eye

cornea → pupil → lens → retina

### 2. Rods

dim light, peripheral vision

### 3. Cones

color, detail, fovea (3 types: RGB)

### 4. Trichromatic theory (Young-Helmholtz) vs opponent-process theory

Trichromatic theory (Young-Helmholtz) vs opponent-process theory
      `
    },
    {
      id: 'sensa2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of vision?',
            options: [
              'Light enters eye',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Light enters eye: cornea → pupil → lens → retina'
          },
          {
            question: 'In the context of vision, which is accurate?',
            options: [
              'color, detail, fovea (3 types: RGB)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cones: color, detail, fovea (3 types: RGB)'
          }
        ]
      }
    },
    {
      id: 'sensa2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Light enters eye**: cornea → pupil → lens → retina
- **Rods**: dim light, peripheral vision
- **Cones**: color, detail, fovea (3 types: RGB)
- **Trichromatic theory (Young-Helmholtz) vs opponent-process theory**
      `
    },
    {
      id: 'sensa2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to vision?',
            options: [
              'Trichromatic theory (Young-Helmholtz) vs opponent-process theory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Trichromatic theory (Young-Helmholtz) vs opponent-process theory'
          }
        ]
      }
    },
    {
      id: 'sensa2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Light enters eye',
            options: ['cornea → pupil → lens → retina', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Rods',
            options: ['dim light, peripheral vision', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cones',
            options: ['color, detail, fovea (3 types: RGB)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['cornea → pupil → lens → retina', 'dim light, peripheral vision', 'color, detail, fovea (3 types: RGB)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Vision.'
      }
    }
  ]
}
