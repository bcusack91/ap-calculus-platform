export const psychRetrievalPart4Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri4-intro',
      type: 'text' as const,
      content: `
# ## Amnesia Types

**Part 4 of 7 — Amnesia Types**

### 1. Anterograde amnesia

can't form new memories (H.M.)

### 2. Retrograde amnesia

can't recall past memories

### 3. Infantile amnesia

few memories before age 3

### 4. Dissociative amnesia

memory loss due to psychological trauma
      `
    },
    {
      id: 'retri4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amnesia types?',
            options: [
              'Anterograde amnesia',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Anterograde amnesia: can\'t form new memories (H.M.)'
          },
          {
            question: 'In the context of amnesia types, which is accurate?',
            options: [
              'few memories before age 3',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Infantile amnesia: few memories before age 3'
          }
        ]
      }
    },
    {
      id: 'retri4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Anterograde amnesia**: can't form new memories (H.M.)
- **Retrograde amnesia**: can't recall past memories
- **Infantile amnesia**: few memories before age 3
- **Dissociative amnesia**: memory loss due to psychological trauma
      `
    },
    {
      id: 'retri4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amnesia types?',
            options: [
              'memory loss due to psychological trauma',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Dissociative amnesia: memory loss due to psychological trauma'
          }
        ]
      }
    },
    {
      id: 'retri4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Anterograde amnesia',
            options: ['can\'t form new memories (H.M.)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Retrograde amnesia',
            options: ['can\'t recall past memories', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Infantile amnesia',
            options: ['few memories before age 3', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['can\'t form new memories (H.M.)', 'can\'t recall past memories', 'few memories before age 3'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amnesia Types.'
      }
    }
  ]
}
