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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Hippocampus" refer to in psychology?',
            options: [
              'procedural/motor memory',
              'neural basis of memory',
              'converts short-term to long-term memory',
              'emotional memories'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Hippocampus: converts short-term to long-term memory. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Cerebellum:',
            options: [
              'procedural/motor memory',
              'neural basis of memory',
              'converts short-term to long-term memory',
              'emotional memories'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cerebellum: procedural/motor memory. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hippocampus',
            options: ['converts short-term to long-term memory', 'neural basis of memory', 'procedural/motor memory', 'emotional memories']
          },
          {
            label: 'Amygdala',
            options: ['procedural/motor memory', 'neural basis of memory', 'emotional memories', 'converts short-term to long-term memory']
          },
          {
            label: 'Cerebellum',
            options: ['procedural/motor memory', 'converts short-term to long-term memory', 'neural basis of memory', 'emotional memories']
          }
        ],
        correctAnswers: ['converts short-term to long-term memory', 'emotional memories', 'procedural/motor memory'],
        hint1: 'Think about what each concept specifically describes in Memory Storage.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Memory Storage describes a specific idea. Hippocampus: converts short-term to long-term memory. Amygdala: emotional memories. Cerebellum: procedural/motor memory.'
      }
    }
  ]
}
