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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & ap review?',
            options: [
              'Forgetting is normal and adaptive',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Forgetting is normal and adaptive'
          },
          {
            question: 'In the context of synthesis & ap review, which is accurate?',
            options: [
              'Eyewitness testimony is unreliable',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Eyewitness testimony is unreliable'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Forgetting is normal and adaptive',
            options: ['Forgetting is normal and adaptive', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Memory is reconstructive, not reproductive',
            options: ['Memory is reconstructive, not reproductive', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Eyewitness testimony is unreliable',
            options: ['Eyewitness testimony is unreliable', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Forgetting is normal and adaptive', 'Memory is reconstructive, not reproductive', 'Eyewitness testimony is unreliable'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & AP Review.'
      }
    }
  ]
}
