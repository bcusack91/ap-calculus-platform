export const psychOperantPart3Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera3-intro',
      type: 'text' as const,
      content: `
# ## Punishment

**Part 3 of 7 — Punishment**

### 1. Positive punishment

adding aversive stimulus (+P)

### 2. Negative punishment

removing pleasant stimulus (-P)

### 3. Both punishment types DECREASE behavior

Both punishment types DECREASE behavior

### 4. Punishment has limitations

suppresses but doesn't eliminate, can cause aggression
      `
    },
    {
      id: 'opera3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Positive punishment?',
            options: [
              'Both punishment types DECREASE behavior',
              'adding aversive stimulus (+P)',
              'removing pleasant stimulus (-P)',
              'suppresses but doesn\'t eliminate, can cause aggression'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Positive punishment: adding aversive stimulus (+P). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Punishment, which explains Both punishment types DECREASE behavior?',
            options: [
              'removing pleasant stimulus (-P)',
              'Both punishment types DECREASE behavior',
              'suppresses but doesn\'t eliminate, can cause aggression',
              'adding aversive stimulus (+P)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Both punishment types DECREASE behavior. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'opera3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Positive punishment**: adding aversive stimulus (+P)
- **Negative punishment**: removing pleasant stimulus (-P)
- **Both punishment types DECREASE behavior**
- **Punishment has limitations**: suppresses but doesn't eliminate, can cause aggression
      `
    },
    {
      id: 'opera3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to punishment?',
            options: [
              'suppresses but doesn\'t eliminate, can cause aggression',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Punishment has limitations: suppresses but doesn\'t eliminate, can cause aggression'
          }
        ]
      }
    },
    {
      id: 'opera3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Positive punishment',
            options: ['removing pleasant stimulus (-P)', 'adding aversive stimulus (+P)', 'suppresses but doesn\'t eliminate, can cause aggression', 'Both punishment types DECREASE behavior']
          },
          {
            label: 'Negative punishment',
            options: ['adding aversive stimulus (+P)', 'suppresses but doesn\'t eliminate, can cause aggression', 'Both punishment types DECREASE behavior', 'removing pleasant stimulus (-P)']
          },
          {
            label: 'Punishment has limitations',
            options: ['suppresses but doesn\'t eliminate, can cause aggression', 'removing pleasant stimulus (-P)', 'adding aversive stimulus (+P)', 'Both punishment types DECREASE behavior']
          }
        ],
        correctAnswers: ['adding aversive stimulus (+P)', 'removing pleasant stimulus (-P)', 'suppresses but doesn\'t eliminate, can cause aggression'],
        hint1: 'Think about what each concept specifically describes in Punishment.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Punishment describes a specific idea. Positive punishment: adding aversive stimulus (+P). Negative punishment: removing pleasant stimulus (-P). Punishment has limitations: suppresses but doesn\'t eliminate, can cause aggression.'
      }
    }
  ]
}
