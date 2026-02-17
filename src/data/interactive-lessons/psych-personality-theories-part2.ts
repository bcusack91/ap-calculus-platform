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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Rogers" refer to in psychology?',
            options: [
              'self-actualization',
              'self-concept, unconditional positive regard',
              'Emphasis on free will and personal growth',
              'too optimistic, hard to test scientifically'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Rogers: self-concept, unconditional positive regard. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Humanistic Perspective, which explains Emphasis on free will and personal…?',
            options: [
              'self-concept, unconditional positive regard',
              'Emphasis on free will and personal growth',
              'self-actualization',
              'too optimistic, hard to test scientifically'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Emphasis on free will and personal growth. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rogers',
            options: ['too optimistic, hard to test scientifically', 'self-concept, unconditional positive regard', 'self-actualization', 'Emphasis on free will and personal growth']
          },
          {
            label: 'Maslow',
            options: ['too optimistic, hard to test scientifically', 'self-concept, unconditional positive regard', 'self-actualization', 'Emphasis on free will and personal growth']
          },
          {
            label: 'Criticism',
            options: ['self-concept, unconditional positive regard', 'self-actualization', 'too optimistic, hard to test scientifically', 'Emphasis on free will and personal growth']
          }
        ],
        correctAnswers: ['self-concept, unconditional positive regard', 'self-actualization', 'too optimistic, hard to test scientifically'],
        hint1: 'Think about what each concept specifically describes in Humanistic Perspective.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Humanistic Perspective describes a specific idea. Rogers: self-concept, unconditional positive regard. Maslow: self-actualization. Criticism: too optimistic, hard to test scientifically.'
      }
    }
  ]
}
