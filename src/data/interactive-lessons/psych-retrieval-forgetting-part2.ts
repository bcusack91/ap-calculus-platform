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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ebbinghaus forgetting curve?',
            options: [
              'information never encoded properly',
              'memory traces fade over time',
              'information is stored but inaccessible (tip-of-tongue)',
              'rapid initial forgetting'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Ebbinghaus forgetting curve: rapid initial forgetting. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Storage decay:',
            options: [
              'information is stored but inaccessible (tip-of-tongue)',
              'information never encoded properly',
              'rapid initial forgetting',
              'memory traces fade over time'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Storage decay: memory traces fade over time. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ebbinghaus forgetting curve',
            options: ['information is stored but inaccessible (tip-of-tongue)', 'rapid initial forgetting', 'memory traces fade over time', 'information never encoded properly']
          },
          {
            label: 'Encoding failure',
            options: ['information never encoded properly', 'information is stored but inaccessible (tip-of-tongue)', 'memory traces fade over time', 'rapid initial forgetting']
          },
          {
            label: 'Storage decay',
            options: ['memory traces fade over time', 'rapid initial forgetting', 'information is stored but inaccessible (tip-of-tongue)', 'information never encoded properly']
          }
        ],
        correctAnswers: ['rapid initial forgetting', 'information never encoded properly', 'memory traces fade over time'],
        hint1: 'Think about what each concept specifically describes in Forgetting Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Forgetting Theories describes a specific idea. Ebbinghaus forgetting curve: rapid initial forgetting. Encoding failure: information never encoded properly. Storage decay: memory traces fade over time.'
      }
    }
  ]
}
