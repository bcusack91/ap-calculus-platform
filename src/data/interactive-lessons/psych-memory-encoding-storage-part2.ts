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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Automatic processing" refer to in psychology?',
            options: [
              'Semantic encoding is most effective for long-term memory',
              'requires attention and rehearsal',
              'deeper = better',
              'unconscious encoding (time, space, frequency)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Automatic processing: unconscious encoding (time, space, frequency). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Levels of processing (Craik & Lockhart)?',
            options: [
              'deeper = better',
              'unconscious encoding (time, space, frequency)',
              'Semantic encoding is most effective for long-term memory',
              'requires attention and rehearsal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Levels of processing (Craik & Lockhart): deeper = better. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Automatic processing',
            options: ['requires attention and rehearsal', 'unconscious encoding (time, space, frequency)', 'deeper = better', 'Semantic encoding is most effective for long-term memory']
          },
          {
            label: 'Effortful processing',
            options: ['deeper = better', 'unconscious encoding (time, space, frequency)', 'Semantic encoding is most effective for long-term memory', 'requires attention and rehearsal']
          },
          {
            label: 'Levels of processing (Craik & Lockhart)',
            options: ['requires attention and rehearsal', 'unconscious encoding (time, space, frequency)', 'Semantic encoding is most effective for long-term memory', 'deeper = better']
          }
        ],
        correctAnswers: ['unconscious encoding (time, space, frequency)', 'requires attention and rehearsal', 'deeper = better'],
        hint1: 'Think about what each concept specifically describes in Encoding Processes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Encoding Processes describes a specific idea. Automatic processing: unconscious encoding (time, space, frequency). Effortful processing: requires attention and rehearsal. Levels of processing (Craik & Lockhart): deeper = better.'
      }
    }
  ]
}
