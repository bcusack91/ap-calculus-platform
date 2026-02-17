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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Memory is constructive and fallible" refer to in psychology?',
            options: [
              'Multiple memory systems in the brain',
              'Memory is constructive and fallible',
              'memory model applications',
              'Encoding strategies for studying'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Memory is constructive and fallible. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Encoding strategies for studying:',
            options: [
              'memory model applications',
              'Encoding strategies for studying',
              'Memory is constructive and fallible',
              'Multiple memory systems in the brain'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Encoding strategies for studying. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Memory is constructive and fallible',
            options: ['Encoding strategies for studying', 'memory model applications', 'Multiple memory systems in the brain', 'Memory is constructive and fallible']
          },
          {
            label: 'Multiple memory systems in the brain',
            options: ['Memory is constructive and fallible', 'Multiple memory systems in the brain', 'Encoding strategies for studying', 'memory model applications']
          },
          {
            label: 'Encoding strategies for studying',
            options: ['Memory is constructive and fallible', 'Encoding strategies for studying', 'memory model applications', 'Multiple memory systems in the brain']
          }
        ],
        correctAnswers: ['Memory is constructive and fallible', 'Multiple memory systems in the brain', 'Encoding strategies for studying'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Memory is constructive and fallible. Multiple memory systems in the brain. Encoding strategies for studying.'
      }
    }
  ]
}
