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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Anterograde amnesia?',
            options: [
              'can\'t recall past memories',
              'can\'t form new memories (H.M.)',
              'memory loss due to psychological trauma',
              'few memories before age 3'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Anterograde amnesia: can\'t form new memories (H.M.). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Amnesia Types, which explains Infantile amnesia?',
            options: [
              'memory loss due to psychological trauma',
              'few memories before age 3',
              'can\'t recall past memories',
              'can\'t form new memories (H.M.)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Infantile amnesia: few memories before age 3. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Anterograde amnesia',
            options: ['can\'t form new memories (H.M.)', 'few memories before age 3', 'can\'t recall past memories', 'memory loss due to psychological trauma']
          },
          {
            label: 'Retrograde amnesia',
            options: ['memory loss due to psychological trauma', 'few memories before age 3', 'can\'t recall past memories', 'can\'t form new memories (H.M.)']
          },
          {
            label: 'Infantile amnesia',
            options: ['can\'t form new memories (H.M.)', 'few memories before age 3', 'memory loss due to psychological trauma', 'can\'t recall past memories']
          }
        ],
        correctAnswers: ['can\'t form new memories (H.M.)', 'can\'t recall past memories', 'few memories before age 3'],
        hint1: 'Think about what each concept specifically describes in Amnesia Types.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Amnesia Types describes a specific idea. Anterograde amnesia: can\'t form new memories (H.M.). Retrograde amnesia: can\'t recall past memories. Infantile amnesia: few memories before age 3.'
      }
    }
  ]
}
