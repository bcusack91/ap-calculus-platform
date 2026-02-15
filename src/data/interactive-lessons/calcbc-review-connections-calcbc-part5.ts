export const calcBCReviewConnectionsPart5Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie5-intro',
      type: 'text' as const,
      content: `
# The Big Picture of Calculus

**Part 5 of 7 — The Big Picture of Calculus**

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
      id: 'revie5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of the big picture of calculus?',
            options: [
              'Calculus = the study of change and accumulation',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Calculus = the study of change and accumulation'
          },
          {
            question: 'In the context of the big picture of calculus, which is accurate?',
            options: [
              'Integrals accumulate rates to recover total change',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Integrals accumulate rates to recover total change'
          }
        ]
      }
    },
    {
      id: 'revie5-detail',
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
      id: 'revie5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to the big picture of calculus?',
            options: [
              'Series extend these ideas to infinite processes',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Series extend these ideas to infinite processes'
          }
        ]
      }
    },
    {
      id: 'revie5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Calculus = the study of change and accumulation',
            options: ['Calculus = the study of change and accumulation', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derivatives measure instantaneous rates of change',
            options: ['Derivatives measure instantaneous rates of change', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integrals accumulate rates to recover total change',
            options: ['Integrals accumulate rates to recover total change', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Calculus = the study of change and accumulation', 'Derivatives measure instantaneous rates of change', 'Integrals accumulate rates to recover total change'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding The Big Picture of Calculus.'
      }
    }
  ]
}
