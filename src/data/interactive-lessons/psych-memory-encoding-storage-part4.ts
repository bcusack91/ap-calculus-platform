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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Explicit (declarative)" refer to in psychology?',
            options: [
              'procedural memory, conditioning',
              'conscious recall',
              'personal events (what you had for breakfast)',
              'general knowledge (the capital of France)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Explicit (declarative): conscious recall. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Semantic:',
            options: [
              'general knowledge (the capital of France)',
              'conscious recall',
              'procedural memory, conditioning',
              'personal events (what you had for breakfast)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Semantic: general knowledge (the capital of France). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Explicit (declarative)',
            options: ['general knowledge (the capital of France)', 'personal events (what you had for breakfast)', 'procedural memory, conditioning', 'conscious recall']
          },
          {
            label: 'Episodic',
            options: ['conscious recall', 'personal events (what you had for breakfast)', 'general knowledge (the capital of France)', 'procedural memory, conditioning']
          },
          {
            label: 'Semantic',
            options: ['conscious recall', 'general knowledge (the capital of France)', 'procedural memory, conditioning', 'personal events (what you had for breakfast)']
          }
        ],
        correctAnswers: ['conscious recall', 'personal events (what you had for breakfast)', 'general knowledge (the capital of France)'],
        hint1: 'Think about what each concept specifically describes in Long-Term Memory Types.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Long-Term Memory Types describes a specific idea. Explicit (declarative): conscious recall. Episodic: personal events (what you had for breakfast). Semantic: general knowledge (the capital of France).'
      }
    }
  ]
}
