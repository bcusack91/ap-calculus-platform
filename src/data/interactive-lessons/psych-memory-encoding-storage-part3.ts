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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Sensory memory" refer to in psychology?',
            options: [
              'brief (~0.5s visual, ~3-4s auditory)',
              'grouping items to expand capacity',
              '7±2 items, ~20 seconds without rehearsal',
              'Iconic memory (visual) and echoic memory (auditory)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Sensory memory: brief (~0.5s visual, ~3-4s auditory). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Short-term memory?',
            options: [
              'Iconic memory (visual) and echoic memory (auditory)',
              'brief (~0.5s visual, ~3-4s auditory)',
              '7±2 items, ~20 seconds without rehearsal',
              'grouping items to expand capacity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Short-term memory: 7±2 items, ~20 seconds without rehearsal. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensory memory',
            options: ['7±2 items, ~20 seconds without rehearsal', 'brief (~0.5s visual, ~3-4s auditory)', 'grouping items to expand capacity', 'Iconic memory (visual) and echoic memory (auditory)']
          },
          {
            label: 'Short-term memory',
            options: ['brief (~0.5s visual, ~3-4s auditory)', '7±2 items, ~20 seconds without rehearsal', 'grouping items to expand capacity', 'Iconic memory (visual) and echoic memory (auditory)']
          },
          {
            label: 'Chunking',
            options: ['Iconic memory (visual) and echoic memory (auditory)', '7±2 items, ~20 seconds without rehearsal', 'brief (~0.5s visual, ~3-4s auditory)', 'grouping items to expand capacity']
          }
        ],
        correctAnswers: ['brief (~0.5s visual, ~3-4s auditory)', '7±2 items, ~20 seconds without rehearsal', 'grouping items to expand capacity'],
        hint1: 'Think about what each concept specifically describes in Sensory & Short-Term Memory.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sensory & Short-Term Memory describes a specific idea. Sensory memory: brief (~0.5s visual, ~3-4s auditory). Short-term memory: 7±2 items, ~20 seconds without rehearsal. Chunking: grouping items to expand capacity.'
      }
    }
  ]
}
