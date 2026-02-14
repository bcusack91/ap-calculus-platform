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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Identifying memory types from scenarios',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identifying memory types from scenarios'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Analyzing amnesia cases',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Analyzing amnesia cases'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying memory types from scenarios',
            options: ['Identifying memory types from scenarios', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Applying encoding strategies',
            options: ['Applying encoding strategies', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Analyzing amnesia cases',
            options: ['Analyzing amnesia cases', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Identifying memory types from scenarios', 'Applying encoding strategies', 'Analyzing amnesia cases'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
