export const psychMemoryEncodePart6Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying memory types from scenarios

Identifying memory types from scenarios

### 2. Applying encoding strategies

Applying encoding strategies

### 3. Analyzing amnesia cases

Analyzing amnesia cases

### 4. Designing memory improvement experiments

Designing memory improvement experiments
      `
    },
    {
      id: 'memor6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Identifying memory types from scenarios" refer to in psychology?',
            options: [
              'Analyzing amnesia cases',
              'Applying encoding strategies',
              'Designing memory improvement experiments',
              'Identifying memory types from scenarios'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Identifying memory types from scenarios. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Analyzing amnesia cases:',
            options: [
              'Identifying memory types from scenarios',
              'Analyzing amnesia cases',
              'Applying encoding strategies',
              'Designing memory improvement experiments'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Analyzing amnesia cases. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'memor6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying memory types from scenarios**
- **Applying encoding strategies**
- **Analyzing amnesia cases**
- **Designing memory improvement experiments**
      `
    },
    {
      id: 'memor6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing memory improvement experiments',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing memory improvement experiments'
          }
        ]
      }
    },
    {
      id: 'memor6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying memory types from scenarios',
            options: ['Applying encoding strategies', 'Identifying memory types from scenarios', 'Designing memory improvement experiments', 'Analyzing amnesia cases']
          },
          {
            label: 'Applying encoding strategies',
            options: ['Identifying memory types from scenarios', 'Analyzing amnesia cases', 'Designing memory improvement experiments', 'Applying encoding strategies']
          },
          {
            label: 'Analyzing amnesia cases',
            options: ['Identifying memory types from scenarios', 'Applying encoding strategies', 'Analyzing amnesia cases', 'Designing memory improvement experiments']
          }
        ],
        correctAnswers: ['Identifying memory types from scenarios', 'Applying encoding strategies', 'Analyzing amnesia cases'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying memory types from scenarios. Applying encoding strategies. Analyzing amnesia cases.'
      }
    }
  ]
}
