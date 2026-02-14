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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of memory distortion?',
            options: [
              'Misinformation effect (Loftus)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Misinformation effect (Loftus): post-event info alters memory'
          },
          {
            question: 'In the context of memory distortion, which is accurate?',
            options: [
              'confident but inaccurate recollections',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'False memories: confident but inaccurate recollections'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Misinformation effect (Loftus)',
            options: ['post-event info alters memory', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Source monitoring',
            options: ['forgetting where we learned something', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'False memories',
            options: ['confident but inaccurate recollections', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['post-event info alters memory', 'forgetting where we learned something', 'confident but inaccurate recollections'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Memory Distortion.'
      }
    }
  ]
}
