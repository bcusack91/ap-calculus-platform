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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Atkinson-Shiffrin model" refer to in psychology?',
            options: [
              'Encoding → Storage → Retrieval',
              'sensory → short-term → long-term',
              'Memory is constructive, not like a video recording',
              'central executive + subsystems'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Atkinson-Shiffrin model: sensory → short-term → long-term. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Encoding → Storage → Retrieval?',
            options: [
              'Memory is constructive, not like a video recording',
              'central executive + subsystems',
              'Encoding → Storage → Retrieval',
              'sensory → short-term → long-term'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Encoding → Storage → Retrieval. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Atkinson-Shiffrin model',
            options: ['Encoding → Storage → Retrieval', 'Memory is constructive, not like a video recording', 'sensory → short-term → long-term', 'central executive + subsystems']
          },
          {
            label: 'Working memory model (Baddeley)',
            options: ['sensory → short-term → long-term', 'central executive + subsystems', 'Encoding → Storage → Retrieval', 'Memory is constructive, not like a video recording']
          }
        ],
        correctAnswers: ['sensory → short-term → long-term', 'central executive + subsystems'],
        hint1: 'Think about what each concept specifically describes in Memory: Encoding & Storage.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Memory: Encoding & Storage describes a specific idea. Atkinson-Shiffrin model: sensory → short-term → long-term. Working memory model (Baddeley): central executive + subsystems.'
      }
    }
  ]
}
