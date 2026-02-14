export const psychMemoryEncodePart3Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor3-intro',
      type: 'text' as const,
      content: `
# ## Sensory & Short-Term Memory

**Part 3 of 7 — Sensory & Short-Term Memory**

### 1. Sensory memory

brief (~0.5s visual, ~3-4s auditory)

### 2. Iconic memory (visual) and echoic memory (auditory)

Iconic memory (visual) and echoic memory (auditory)

### 3. Short-term memory

7±2 items, ~20 seconds without rehearsal

### 4. Chunking

grouping items to expand capacity
      `
    },
    {
      id: 'memor3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sensory & short-term memory?',
            options: [
              'Sensory memory',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Sensory memory: brief (~0.5s visual, ~3-4s auditory)'
          },
          {
            question: 'In the context of sensory & short-term memory, which is accurate?',
            options: [
              '7±2 items, ~20 seconds without rehearsal',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Short-term memory: 7±2 items, ~20 seconds without rehearsal'
          }
        ]
      }
    },
    {
      id: 'memor3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sensory memory**: brief (~0.5s visual, ~3-4s auditory)
- **Iconic memory (visual) and echoic memory (auditory)**
- **Short-term memory**: 7±2 items, ~20 seconds without rehearsal
- **Chunking**: grouping items to expand capacity
      `
    },
    {
      id: 'memor3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sensory & short-term memory?',
            options: [
              'grouping items to expand capacity',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Chunking: grouping items to expand capacity'
          }
        ]
      }
    },
    {
      id: 'memor3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensory memory',
            options: ['brief (~0.5s visual, ~3-4s auditory)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Iconic memory (visual) and echoic memory (auditory)',
            options: ['Iconic memory (visual) and echoic memory (auditory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Short-term memory',
            options: ['7±2 items, ~20 seconds without rehearsal', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['brief (~0.5s visual, ~3-4s auditory)', 'Iconic memory (visual) and echoic memory (auditory', '7±2 items, ~20 seconds without rehearsal'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sensory & Short-Term Memory.'
      }
    }
  ]
}
