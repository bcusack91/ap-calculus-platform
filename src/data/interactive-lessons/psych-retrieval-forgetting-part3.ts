export const psychRetrievalPart3Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri3-intro',
      type: 'text' as const,
      content: `
# ## Memory Distortion

**Part 3 of 7 — Memory Distortion**

### 1. Misinformation effect (Loftus)

post-event info alters memory

### 2. Source monitoring

forgetting where we learned something

### 3. False memories

confident but inaccurate recollections

### 4. Imagination inflation

imagining events makes them feel real
      `
    },
    {
      id: 'retri3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Misinformation effect (Loftus)?',
            options: [
              'forgetting where we learned something',
              'imagining events makes them feel real',
              'post-event info alters memory',
              'confident but inaccurate recollections'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Misinformation effect (Loftus): post-event info alters memory. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Memory Distortion, which explains False memories?',
            options: [
              'imagining events makes them feel real',
              'forgetting where we learned something',
              'confident but inaccurate recollections',
              'post-event info alters memory'
            ],
            correctAnswer: 2,
            explanation: 'Correct — False memories: confident but inaccurate recollections. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'retri3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Misinformation effect (Loftus)**: post-event info alters memory
- **Source monitoring**: forgetting where we learned something
- **False memories**: confident but inaccurate recollections
- **Imagination inflation**: imagining events makes them feel real
      `
    },
    {
      id: 'retri3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to memory distortion?',
            options: [
              'imagining events makes them feel real',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Imagination inflation: imagining events makes them feel real'
          }
        ]
      }
    },
    {
      id: 'retri3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Misinformation effect (Loftus)',
            options: ['confident but inaccurate recollections', 'forgetting where we learned something', 'imagining events makes them feel real', 'post-event info alters memory']
          },
          {
            label: 'Source monitoring',
            options: ['imagining events makes them feel real', 'forgetting where we learned something', 'confident but inaccurate recollections', 'post-event info alters memory']
          },
          {
            label: 'False memories',
            options: ['forgetting where we learned something', 'confident but inaccurate recollections', 'post-event info alters memory', 'imagining events makes them feel real']
          }
        ],
        correctAnswers: ['post-event info alters memory', 'forgetting where we learned something', 'confident but inaccurate recollections'],
        hint1: 'Think about what each concept specifically describes in Memory Distortion.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Memory Distortion describes a specific idea. Misinformation effect (Loftus): post-event info alters memory. Source monitoring: forgetting where we learned something. False memories: confident but inaccurate recollections.'
      }
    }
  ]
}
