export const psychMemoryEncodePart4Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor4-intro',
      type: 'text' as const,
      content: `
# ## Long-Term Memory Types

**Part 4 of 7 — Long-Term Memory Types**

### 1. Explicit (declarative)

conscious recall

### 2. Episodic

personal events (what you had for breakfast)

### 3. Semantic

general knowledge (the capital of France)

### 4. Implicit (nondeclarative)

procedural memory, conditioning
      `
    },
    {
      id: 'memor4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of long-term memory types?',
            options: [
              'Explicit (declarative)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Explicit (declarative): conscious recall'
          },
          {
            question: 'In the context of long-term memory types, which is accurate?',
            options: [
              'general knowledge (the capital of France)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Semantic: general knowledge (the capital of France)'
          }
        ]
      }
    },
    {
      id: 'memor4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Explicit (declarative)**: conscious recall
- **Episodic**: personal events (what you had for breakfast)
- **Semantic**: general knowledge (the capital of France)
- **Implicit (nondeclarative)**: procedural memory, conditioning
      `
    },
    {
      id: 'memor4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to long-term memory types?',
            options: [
              'procedural memory, conditioning',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Implicit (nondeclarative): procedural memory, conditioning'
          }
        ]
      }
    },
    {
      id: 'memor4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Explicit (declarative)',
            options: ['conscious recall', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Episodic',
            options: ['personal events (what you had for breakfast)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Semantic',
            options: ['general knowledge (the capital of France)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['conscious recall', 'personal events (what you had for breakfast)', 'general knowledge (the capital of France)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Long-Term Memory Types.'
      }
    }
  ]
}
