export const calcBCReviewConnectionsPart1Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie1-intro',
      type: 'text' as const,
      content: `
# ∮ Review Connections

**Part 1 of 7 — AB Foundations for BC**

### 1. All AB topics are fair game on the BC exam

All AB topics are fair game on the BC exam

### 2. Limits → derivatives → integrals is the core AB progression

Limits → derivatives → integrals is the core AB progression

### 3. FTC connects differentiation and integration

FTC connects differentiation and integration

### 4. Applications (area, volume, motion) are built on these foundations

Applications (area, volume, motion) are built on these foundations
      `
    },
    {
      id: 'revie1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ab foundations for bc?',
            options: [
              'All AB topics are fair game on the BC exam',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'All AB topics are fair game on the BC exam'
          },
          {
            question: 'In the context of ab foundations for bc, which is accurate?',
            options: [
              'FTC connects differentiation and integration',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'FTC connects differentiation and integration'
          }
        ]
      }
    },
    {
      id: 'revie1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **All AB topics are fair game on the BC exam**
- **Limits → derivatives → integrals is the core AB progression**
- **FTC connects differentiation and integration**
- **Applications (area, volume, motion) are built on these foundations**
      `
    },
    {
      id: 'revie1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ab foundations for bc?',
            options: [
              'Applications (area, volume, motion) are built on these foundations',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Applications (area, volume, motion) are built on these foundations'
          }
        ]
      }
    },
    {
      id: 'revie1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All AB topics are fair game on the BC exam',
            options: ['All AB topics are fair game on the BC exam', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Limits → derivatives → integrals is the core AB progression',
            options: ['Limits → derivatives → integrals is the core AB pr', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'FTC connects differentiation and integration',
            options: ['FTC connects differentiation and integration', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['All AB topics are fair game on the BC exam', 'Limits → derivatives → integrals is the core AB pr', 'FTC connects differentiation and integration'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding AB Foundations for BC.'
      }
    }
  ]
}
