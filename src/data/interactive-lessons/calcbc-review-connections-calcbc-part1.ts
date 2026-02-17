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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes All AB topics are fair game on the BC…?',
            options: [
              'Limits → derivatives → integrals is the core AB progression',
              'All AB topics are fair game on the BC exam',
              'FTC connects differentiation and integration',
              'Applications (area, volume, motion) are built on these foundations'
            ],
            correctAnswer: 1,
            explanation: 'Correct — All AB topics are fair game on the BC exam. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes FTC connects differentiation and…:',
            options: [
              'All AB topics are fair game on the BC exam',
              'Limits → derivatives → integrals is the core AB progression',
              'Applications (area, volume, motion) are built on these foundations',
              'FTC connects differentiation and integration'
            ],
            correctAnswer: 3,
            explanation: 'Correct — FTC connects differentiation and integration. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Applications (area, volume, motion) are… is correct?',
            options: [
              'Applications (area, volume, motion) are built on these foundations',
              'All AB topics are fair game on the BC exam',
              'Limits → derivatives → integrals is the core AB progression',
              'FTC connects differentiation and integration'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Applications (area, volume, motion) are built on these foundations. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All AB topics are fair game on the BC…',
            options: ['All AB topics are fair game on the BC exam', 'FTC connects differentiation and integration', 'Applications (area, volume, motion) are built on these foundations', 'Limits → derivatives → integrals is the core AB progression']
          },
          {
            label: 'Limits → derivatives → integrals is the…',
            options: ['FTC connects differentiation and integration', 'Applications (area, volume, motion) are built on these foundations', 'Limits → derivatives → integrals is the core AB progression', 'All AB topics are fair game on the BC exam']
          },
          {
            label: 'FTC connects differentiation and…',
            options: ['All AB topics are fair game on the BC exam', 'Applications (area, volume, motion) are built on these foundations', 'FTC connects differentiation and integration', 'Limits → derivatives → integrals is the core AB progression']
          }
        ],
        correctAnswers: ['All AB topics are fair game on the BC exam', 'Limits → derivatives → integrals is the core AB progression', 'FTC connects differentiation and integration'],
        hint1: 'Think about what each concept specifically describes in ∮ Review Connections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Review Connections describes a specific idea. All AB topics are fair game on the BC exam. Limits → derivatives → integrals is the core AB progression. FTC connects differentiation and integration.'
      }
    }
  ]
}
