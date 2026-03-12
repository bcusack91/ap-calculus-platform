export const psychPerceptionPart6Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying Gestalt principles in images

Identifying Gestalt principles in images

### 2. Analyzing depth cue scenarios

Analyzing depth cue scenarios

### 3. Explaining visual illusions

Explaining visual illusions

### 4. Demonstrating selective attention phenomena

Demonstrating selective attention phenomena
      `
    },
    {
      id: 'perce6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Identifying Gestalt principles in images?',
            options: [
              'Identifying Gestalt principles in images',
              'Demonstrating selective attention phenomena',
              'Analyzing depth cue scenarios',
              'Explaining visual illusions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identifying Gestalt principles in images. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Explaining visual illusions?',
            options: [
              'Explaining visual illusions',
              'Identifying Gestalt principles in images',
              'Analyzing depth cue scenarios',
              'Demonstrating selective attention phenomena'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Explaining visual illusions. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce6-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Identifying Gestalt principles in images**
- **Analyzing depth cue scenarios**
- **Explaining visual illusions**
- **Demonstrating selective attention phenomena**
      `
    },
    {
      id: 'perce6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Demonstrating selective attention phenomena',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Demonstrating selective attention phenomena'
          }
        ]
      }
    },
    {
      id: 'perce6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying Gestalt principles in images',
            options: ['Explaining visual illusions', 'Identifying Gestalt principles in images', 'Demonstrating selective attention phenomena', 'Analyzing depth cue scenarios']
          },
          {
            label: 'Analyzing depth cue scenarios',
            options: ['Demonstrating selective attention phenomena', 'Analyzing depth cue scenarios', 'Identifying Gestalt principles in images', 'Explaining visual illusions']
          },
          {
            label: 'Explaining visual illusions',
            options: ['Explaining visual illusions', 'Demonstrating selective attention phenomena', 'Analyzing depth cue scenarios', 'Identifying Gestalt principles in images']
          }
        ],
        correctAnswers: ['Identifying Gestalt principles in images', 'Analyzing depth cue scenarios', 'Explaining visual illusions'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying Gestalt principles in images. Analyzing depth cue scenarios. Explaining visual illusions.'
      }
    }
  ]
}
