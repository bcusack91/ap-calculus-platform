export const psychMemoryEncodePart1Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memor1-intro',
      type: 'text' as const,
      content: `
# 🧠 Memory: Encoding & Storage

**Part 1 of 7 — Memory Models**

### 1. Atkinson-Shiffrin model

sensory → short-term → long-term

### 2. Working memory model (Baddeley)

central executive + subsystems

### 3. Encoding → Storage → Retrieval

Encoding → Storage → Retrieval

### 4. Memory is constructive, not like a video recording

Memory is constructive, not like a video recording
      `
    },
    {
      id: 'memor1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of memory models?',
            options: [
              'Atkinson-Shiffrin model',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Atkinson-Shiffrin model: sensory → short-term → long-term'
          },
          {
            question: 'In the context of memory models, which is accurate?',
            options: [
              'Encoding → Storage → Retrieval',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Encoding → Storage → Retrieval'
          }
        ]
      }
    },
    {
      id: 'memor1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Atkinson-Shiffrin model**: sensory → short-term → long-term
- **Working memory model (Baddeley)**: central executive + subsystems
- **Encoding → Storage → Retrieval**
- **Memory is constructive, not like a video recording**
      `
    },
    {
      id: 'memor1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to memory models?',
            options: [
              'Memory is constructive, not like a video recording',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Memory is constructive, not like a video recording'
          }
        ]
      }
    },
    {
      id: 'memor1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Atkinson-Shiffrin model',
            options: ['sensory → short-term → long-term', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Working memory model (Baddeley)',
            options: ['central executive + subsystems', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Encoding → Storage → Retrieval',
            options: ['Encoding → Storage → Retrieval', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['sensory → short-term → long-term', 'central executive + subsystems', 'Encoding → Storage → Retrieval'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Memory Models.'
      }
    }
  ]
}
