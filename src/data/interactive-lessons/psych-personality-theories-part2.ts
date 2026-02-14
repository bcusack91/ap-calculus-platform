export const psychPersonalityPart2Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso2-intro',
      type: 'text' as const,
      content: `
# ## Humanistic Perspective

**Part 2 of 7 — Humanistic Perspective**

### 1. Rogers

self-concept, unconditional positive regard

### 2. Maslow

self-actualization

### 3. Emphasis on free will and personal growth

Emphasis on free will and personal growth

### 4. Criticism

too optimistic, hard to test scientifically
      `
    },
    {
      id: 'perso2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of humanistic perspective?',
            options: [
              'Rogers',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Rogers: self-concept, unconditional positive regard'
          },
          {
            question: 'In the context of humanistic perspective, which is accurate?',
            options: [
              'Emphasis on free will and personal growth',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Emphasis on free will and personal growth'
          }
        ]
      }
    },
    {
      id: 'perso2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Rogers**: self-concept, unconditional positive regard
- **Maslow**: self-actualization
- **Emphasis on free will and personal growth**
- **Criticism**: too optimistic, hard to test scientifically
      `
    },
    {
      id: 'perso2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to humanistic perspective?',
            options: [
              'too optimistic, hard to test scientifically',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Criticism: too optimistic, hard to test scientifically'
          }
        ]
      }
    },
    {
      id: 'perso2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rogers',
            options: ['self-concept, unconditional positive regard', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Maslow',
            options: ['self-actualization', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Emphasis on free will and personal growth',
            options: ['Emphasis on free will and personal growth', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['self-concept, unconditional positive regard', 'self-actualization', 'Emphasis on free will and personal growth'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Humanistic Perspective.'
      }
    }
  ]
}
