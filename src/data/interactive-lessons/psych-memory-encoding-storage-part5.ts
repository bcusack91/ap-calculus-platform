export const psychMemoryEncodePart5Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor5-intro',
      type: 'text' as const,
      content: `
# ## Memory Storage

**Part 5 of 7 — Memory Storage**

### 1. Hippocampus

converts short-term to long-term memory

### 2. Amygdala

emotional memories

### 3. Cerebellum

procedural/motor memory

### 4. Long-term potentiation (LTP)

neural basis of memory
      `
    },
    {
      id: 'memor5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of memory storage?',
            options: [
              'Hippocampus',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Hippocampus: converts short-term to long-term memory'
          },
          {
            question: 'In the context of memory storage, which is accurate?',
            options: [
              'procedural/motor memory',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Cerebellum: procedural/motor memory'
          }
        ]
      }
    },
    {
      id: 'memor5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Hippocampus**: converts short-term to long-term memory
- **Amygdala**: emotional memories
- **Cerebellum**: procedural/motor memory
- **Long-term potentiation (LTP)**: neural basis of memory
      `
    },
    {
      id: 'memor5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to memory storage?',
            options: [
              'neural basis of memory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Long-term potentiation (LTP): neural basis of memory'
          }
        ]
      }
    },
    {
      id: 'memor5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hippocampus',
            options: ['converts short-term to long-term memory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Amygdala',
            options: ['emotional memories', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cerebellum',
            options: ['procedural/motor memory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['converts short-term to long-term memory', 'emotional memories', 'procedural/motor memory'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Memory Storage.'
      }
    }
  ]
}
