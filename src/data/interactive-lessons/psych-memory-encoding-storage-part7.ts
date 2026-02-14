export const psychMemoryEncodePart7Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Memory is constructive and fallible

Memory is constructive and fallible

### 2. Multiple memory systems in the brain

Multiple memory systems in the brain

### 3. Encoding strategies for studying

Encoding strategies for studying

### 4. AP exam

memory model applications
      `
    },
    {
      id: 'memor7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Memory is constructive and fallible',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Memory is constructive and fallible'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Encoding strategies for studying',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Encoding strategies for studying'
          }
        ]
      }
    },
    {
      id: 'memor7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Memory is constructive and fallible**
- **Multiple memory systems in the brain**
- **Encoding strategies for studying**
- **AP exam**: memory model applications
      `
    },
    {
      id: 'memor7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'memory model applications',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: memory model applications'
          }
        ]
      }
    },
    {
      id: 'memor7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Memory is constructive and fallible',
            options: ['Memory is constructive and fallible', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Multiple memory systems in the brain',
            options: ['Multiple memory systems in the brain', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Encoding strategies for studying',
            options: ['Encoding strategies for studying', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Memory is constructive and fallible', 'Multiple memory systems in the brain', 'Encoding strategies for studying'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
