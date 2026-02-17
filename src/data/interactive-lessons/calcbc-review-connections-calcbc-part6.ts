export const calcBCReviewConnectionsPart6Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Calculus = the study of change and accumulation

Calculus = the study of change and accumulation

### 2. Derivatives measure instantaneous rates of change

Derivatives measure instantaneous rates of change

### 3. Integrals accumulate rates to recover total change

Integrals accumulate rates to recover total change

### 4. Series extend these ideas to infinite processes

Series extend these ideas to infinite processes
      `
    },
    {
      id: 'revie6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Calculus = the study of change and…?',
            options: [
              'Series extend these ideas to infinite processes',
              'Integrals accumulate rates to recover total change',
              'Calculus = the study of change and accumulation',
              'Derivatives measure instantaneous rates of change'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Calculus = the study of change and accumulation. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Integrals accumulate rates to recover…?',
            options: [
              'Integrals accumulate rates to recover total change',
              'Series extend these ideas to infinite processes',
              'Derivatives measure instantaneous rates of change',
              'Calculus = the study of change and accumulation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Integrals accumulate rates to recover total change. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'revie6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Calculus = the study of change and accumulation**
- **Derivatives measure instantaneous rates of change**
- **Integrals accumulate rates to recover total change**
- **Series extend these ideas to infinite processes**
      `
    },
    {
      id: 'revie6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Series extend these ideas to infinite…?',
            options: [
              'Derivatives measure instantaneous rates of change',
              'Calculus = the study of change and accumulation',
              'Series extend these ideas to infinite processes',
              'Integrals accumulate rates to recover total change'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Series extend these ideas to infinite processes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculus = the study of change and…',
            options: ['Integrals accumulate rates to recover total change', 'Derivatives measure instantaneous rates of change', 'Calculus = the study of change and accumulation', 'Series extend these ideas to infinite processes']
          },
          {
            label: 'Derivatives measure instantaneous rates…',
            options: ['Integrals accumulate rates to recover total change', 'Calculus = the study of change and accumulation', 'Series extend these ideas to infinite processes', 'Derivatives measure instantaneous rates of change']
          },
          {
            label: 'Integrals accumulate rates to recover…',
            options: ['Derivatives measure instantaneous rates of change', 'Series extend these ideas to infinite processes', 'Calculus = the study of change and accumulation', 'Integrals accumulate rates to recover total change']
          }
        ],
        correctAnswers: ['Calculus = the study of change and accumulation', 'Derivatives measure instantaneous rates of change', 'Integrals accumulate rates to recover total change'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Calculus = the study of change and accumulation. Derivatives measure instantaneous rates of change. Integrals accumulate rates to recover total change.'
      }
    }
  ]
}
