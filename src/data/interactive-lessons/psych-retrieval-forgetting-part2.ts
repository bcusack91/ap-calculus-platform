export const psychRetrievalPart2Data = {
  topicSlug: 'retrieval-forgetting',
  sections: [
    {
      id: 'retri2-intro',
      type: 'text' as const,
      content: `
# ## Forgetting Theories

**Part 2 of 7 — Forgetting Theories**

### 1. Ebbinghaus forgetting curve

rapid initial forgetting

### 2. Encoding failure

information never encoded properly

### 3. Storage decay

memory traces fade over time

### 4. Retrieval failure

information is stored but inaccessible (tip-of-tongue)
      `
    },
    {
      id: 'retri2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of forgetting theories?',
            options: [
              'Ebbinghaus forgetting curve',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Ebbinghaus forgetting curve: rapid initial forgetting'
          },
          {
            question: 'In the context of forgetting theories, which is accurate?',
            options: [
              'memory traces fade over time',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Storage decay: memory traces fade over time'
          }
        ]
      }
    },
    {
      id: 'retri2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Ebbinghaus forgetting curve**: rapid initial forgetting
- **Encoding failure**: information never encoded properly
- **Storage decay**: memory traces fade over time
- **Retrieval failure**: information is stored but inaccessible (tip-of-tongue)
      `
    },
    {
      id: 'retri2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to forgetting theories?',
            options: [
              'information is stored but inaccessible (tip-of-tongue)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Retrieval failure: information is stored but inaccessible (tip-of-tongue)'
          }
        ]
      }
    },
    {
      id: 'retri2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ebbinghaus forgetting curve',
            options: ['rapid initial forgetting', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Encoding failure',
            options: ['information never encoded properly', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Storage decay',
            options: ['memory traces fade over time', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['rapid initial forgetting', 'information never encoded properly', 'memory traces fade over time'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Forgetting Theories.'
      }
    }
  ]
}
