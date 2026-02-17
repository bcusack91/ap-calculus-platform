export const psychRetrievalPart7Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri7-intro',
      type: 'text' as const,
      content: `
# ## Synthesis & AP Review

**Part 7 of 7 — Synthesis & AP Review**

### 1. Forgetting is normal and adaptive

Forgetting is normal and adaptive

### 2. Memory is reconstructive, not reproductive

Memory is reconstructive, not reproductive

### 3. Eyewitness testimony is unreliable

Eyewitness testimony is unreliable

### 4. AP exam

forgetting and distortion questions
      `
    },
    {
      id: 'retri7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Forgetting is normal and adaptive?',
            options: [
              'Memory is reconstructive, not reproductive',
              'Forgetting is normal and adaptive',
              'forgetting and distortion questions',
              'Eyewitness testimony is unreliable'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Forgetting is normal and adaptive. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Synthesis & AP Review, which explains Eyewitness testimony is unreliable?',
            options: [
              'Eyewitness testimony is unreliable',
              'forgetting and distortion questions',
              'Forgetting is normal and adaptive',
              'Memory is reconstructive, not reproductive'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Eyewitness testimony is unreliable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'retri7-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Forgetting is normal and adaptive**
- **Memory is reconstructive, not reproductive**
- **Eyewitness testimony is unreliable**
- **AP exam**: forgetting and distortion questions
      `
    },
    {
      id: 'retri7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & ap review?',
            options: [
              'forgetting and distortion questions',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'AP exam: forgetting and distortion questions'
          }
        ]
      }
    },
    {
      id: 'retri7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Forgetting is normal and adaptive',
            options: ['Eyewitness testimony is unreliable', 'Forgetting is normal and adaptive', 'Memory is reconstructive, not reproductive', 'forgetting and distortion questions']
          },
          {
            label: 'Memory is reconstructive, not…',
            options: ['forgetting and distortion questions', 'Eyewitness testimony is unreliable', 'Memory is reconstructive, not reproductive', 'Forgetting is normal and adaptive']
          },
          {
            label: 'Eyewitness testimony is unreliable',
            options: ['forgetting and distortion questions', 'Memory is reconstructive, not reproductive', 'Forgetting is normal and adaptive', 'Eyewitness testimony is unreliable']
          }
        ],
        correctAnswers: ['Forgetting is normal and adaptive', 'Memory is reconstructive, not reproductive', 'Eyewitness testimony is unreliable'],
        hint1: 'Think about what each concept specifically describes in Synthesis & AP Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & AP Review describes a specific idea. Forgetting is normal and adaptive. Memory is reconstructive, not reproductive. Eyewitness testimony is unreliable.'
      }
    }
  ]
}
