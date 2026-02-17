export const calcBCReviewConnectionsPart7Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie7-intro',
      type: 'text' as const,
      content: `
# Comprehensive Review

**Part 7 of 7 — Comprehensive Review**

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
      id: 'revie7-quiz1',
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
              'Derivatives measure instantaneous rates of change',
              'Integrals accumulate rates to recover total change',
              'Calculus = the study of change and accumulation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Calculus = the study of change and accumulation. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Comprehensive Review, which explains Integrals accumulate rates to recover…?',
            options: [
              'Series extend these ideas to infinite processes',
              'Derivatives measure instantaneous rates of change',
              'Integrals accumulate rates to recover total change',
              'Calculus = the study of change and accumulation'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Integrals accumulate rates to recover total change. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'revie7-detail',
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
      id: 'revie7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Series extend these ideas to infinite… is correct?',
            options: [
              'Series extend these ideas to infinite processes',
              'Integrals accumulate rates to recover total change',
              'Derivatives measure instantaneous rates of change',
              'Calculus = the study of change and accumulation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Series extend these ideas to infinite processes. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculus = the study of change and…',
            options: ['Integrals accumulate rates to recover total change', 'Calculus = the study of change and accumulation', 'Derivatives measure instantaneous rates of change', 'Series extend these ideas to infinite processes']
          },
          {
            label: 'Derivatives measure instantaneous rates…',
            options: ['Integrals accumulate rates to recover total change', 'Derivatives measure instantaneous rates of change', 'Series extend these ideas to infinite processes', 'Calculus = the study of change and accumulation']
          },
          {
            label: 'Integrals accumulate rates to recover…',
            options: ['Integrals accumulate rates to recover total change', 'Calculus = the study of change and accumulation', 'Series extend these ideas to infinite processes', 'Derivatives measure instantaneous rates of change']
          }
        ],
        correctAnswers: ['Calculus = the study of change and accumulation', 'Derivatives measure instantaneous rates of change', 'Integrals accumulate rates to recover total change'],
        hint1: 'Think about what each concept specifically describes in Comprehensive Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Comprehensive Review describes a specific idea. Calculus = the study of change and accumulation. Derivatives measure instantaneous rates of change. Integrals accumulate rates to recover total change.'
      }
    }
  ]
}
