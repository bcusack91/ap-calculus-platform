export const psychRetrievalPart6Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri6-intro',
      type: 'text' as const,
      content: `
# ## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Identifying forgetting mechanisms

Identifying forgetting mechanisms

### 2. Analyzing misinformation scenarios

Analyzing misinformation scenarios

### 3. Evaluating eyewitness testimony reliability

Evaluating eyewitness testimony reliability

### 4. Designing memory improvement strategies

Designing memory improvement strategies
      `
    },
    {
      id: 'retri6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Identifying forgetting mechanisms?',
            options: [
              'Designing memory improvement strategies',
              'Analyzing misinformation scenarios',
              'Evaluating eyewitness testimony reliability',
              'Identifying forgetting mechanisms'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Identifying forgetting mechanisms. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Evaluating eyewitness testimony…?',
            options: [
              'Evaluating eyewitness testimony reliability',
              'Designing memory improvement strategies',
              'Identifying forgetting mechanisms',
              'Analyzing misinformation scenarios'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Evaluating eyewitness testimony reliability. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'retri6-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identifying forgetting mechanisms**
- **Analyzing misinformation scenarios**
- **Evaluating eyewitness testimony reliability**
- **Designing memory improvement strategies**
      `
    },
    {
      id: 'retri6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Designing memory improvement strategies',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Designing memory improvement strategies'
          }
        ]
      }
    },
    {
      id: 'retri6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identifying forgetting mechanisms',
            options: ['Analyzing misinformation scenarios', 'Evaluating eyewitness testimony reliability', 'Designing memory improvement strategies', 'Identifying forgetting mechanisms']
          },
          {
            label: 'Analyzing misinformation scenarios',
            options: ['Designing memory improvement strategies', 'Analyzing misinformation scenarios', 'Evaluating eyewitness testimony reliability', 'Identifying forgetting mechanisms']
          },
          {
            label: 'Evaluating eyewitness testimony…',
            options: ['Designing memory improvement strategies', 'Analyzing misinformation scenarios', 'Identifying forgetting mechanisms', 'Evaluating eyewitness testimony reliability']
          }
        ],
        correctAnswers: ['Identifying forgetting mechanisms', 'Analyzing misinformation scenarios', 'Evaluating eyewitness testimony reliability'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Identifying forgetting mechanisms. Analyzing misinformation scenarios. Evaluating eyewitness testimony reliability.'
      }
    }
  ]
}
