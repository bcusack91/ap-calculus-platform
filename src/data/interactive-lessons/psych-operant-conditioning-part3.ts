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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of punishment?',
            options: [
              'Positive punishment',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Positive punishment: adding aversive stimulus (+P)'
          },
          {
            question: 'In the context of punishment, which is accurate?',
            options: [
              'Both punishment types DECREASE behavior',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Both punishment types DECREASE behavior'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Positive punishment',
            options: ['adding aversive stimulus (+P)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Negative punishment',
            options: ['removing pleasant stimulus (-P)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Both punishment types DECREASE behavior',
            options: ['Both punishment types DECREASE behavior', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['adding aversive stimulus (+P)', 'removing pleasant stimulus (-P)', 'Both punishment types DECREASE behavior'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Punishment.'
      }
    }
  ]
}
