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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Light enters eye?',
            options: [
              'dim light, peripheral vision',
              'color, detail, fovea (3 types: RGB)',
              'Trichromatic theory (Young-Helmholtz) vs opponent-process theory',
              'cornea → pupil → lens → retina'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Light enters eye: cornea → pupil → lens → retina. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Vision, which explains Cones?',
            options: [
              'dim light, peripheral vision',
              'Trichromatic theory (Young-Helmholtz) vs opponent-process theory',
              'cornea → pupil → lens → retina',
              'color, detail, fovea (3 types: RGB)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cones: color, detail, fovea (3 types: RGB). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Light enters eye',
            options: ['cornea → pupil → lens → retina', 'Trichromatic theory (Young-Helmholtz) vs opponent-process theory', 'color, detail, fovea (3 types: RGB)', 'dim light, peripheral vision']
          },
          {
            label: 'Rods',
            options: ['dim light, peripheral vision', 'color, detail, fovea (3 types: RGB)', 'cornea → pupil → lens → retina', 'Trichromatic theory (Young-Helmholtz) vs opponent-process theory']
          },
          {
            label: 'Cones',
            options: ['Trichromatic theory (Young-Helmholtz) vs opponent-process theory', 'dim light, peripheral vision', 'color, detail, fovea (3 types: RGB)', 'cornea → pupil → lens → retina']
          }
        ],
        correctAnswers: ['cornea → pupil → lens → retina', 'dim light, peripheral vision', 'color, detail, fovea (3 types: RGB)'],
        hint1: 'Think about what each concept specifically describes in Vision.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Vision describes a specific idea. Light enters eye: cornea → pupil → lens → retina. Rods: dim light, peripheral vision. Cones: color, detail, fovea (3 types: RGB).'
      }
    }
  ]
}
