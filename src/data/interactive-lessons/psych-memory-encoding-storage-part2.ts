export const psychMemoryEncodePart2Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor2-intro',
      type: 'text' as const,
      content: `
# ## Encoding Processes

**Part 2 of 7 — Encoding Processes**

### 1. Automatic processing

unconscious encoding (time, space, frequency)

### 2. Effortful processing

requires attention and rehearsal

### 3. Levels of processing (Craik & Lockhart)

deeper = better

### 4. Semantic encoding is most effective for long-term memory

Semantic encoding is most effective for long-term memory
      `
    },
    {
      id: 'memor2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of encoding processes?',
            options: [
              'Automatic processing',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Automatic processing: unconscious encoding (time, space, frequency)'
          },
          {
            question: 'In the context of encoding processes, which is accurate?',
            options: [
              'deeper = better',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Levels of processing (Craik & Lockhart): deeper = better'
          }
        ]
      }
    },
    {
      id: 'memor2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Automatic processing**: unconscious encoding (time, space, frequency)
- **Effortful processing**: requires attention and rehearsal
- **Levels of processing (Craik & Lockhart)**: deeper = better
- **Semantic encoding is most effective for long-term memory**
      `
    },
    {
      id: 'memor2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to encoding processes?',
            options: [
              'Semantic encoding is most effective for long-term memory',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Semantic encoding is most effective for long-term memory'
          }
        ]
      }
    },
    {
      id: 'memor2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Automatic processing',
            options: ['unconscious encoding (time, space, frequency)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Effortful processing',
            options: ['requires attention and rehearsal', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Levels of processing (Craik & Lockhart)',
            options: ['deeper = better', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['unconscious encoding (time, space, frequency)', 'requires attention and rehearsal', 'deeper = better'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Encoding Processes.'
      }
    }
  ]
}
