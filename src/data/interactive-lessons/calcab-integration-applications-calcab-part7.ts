export const calcABIntAppsPart7Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position

Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position

### 2. Spring force

F(x) = kx (Hooke's Law)

### 3. Pumping fluid

W = ∫ρg · A(y) · (D-y) dy

### 4. These applications extend the accumulation framework to physics

These applications extend the accumulation framework to physics
      `
    },
    {
      id: 'integ7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Work = ∫ₐᵇ F(x)dx where F(x) is force…?',
            options: [
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'F(x) = kx (Hooke\'s Law)',
              'These applications extend the accumulation framework to physics',
              'W = ∫ρg · A(y) · (D-y) dy'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Pumping fluid?',
            options: [
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'W = ∫ρg · A(y) · (D-y) dy',
              'F(x) = kx (Hooke\'s Law)',
              'These applications extend the accumulation framework to physics'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pumping fluid: W = ∫ρg · A(y) · (D-y) dy. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position**
- **Spring force**: F(x) = kx (Hooke's Law)
- **Pumping fluid**: W = ∫ρg · A(y) · (D-y) dy
- **These applications extend the accumulation framework to physics**
      `
    },
    {
      id: 'integ7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents These applications extend the…?',
            options: [
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'These applications extend the accumulation framework to physics',
              'W = ∫ρg · A(y) · (D-y) dy',
              'F(x) = kx (Hooke\'s Law)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — These applications extend the accumulation framework to physics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spring force',
            options: ['W = ∫ρg · A(y) · (D-y) dy', 'These applications extend the accumulation framework to physics', 'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position', 'F(x) = kx (Hooke\'s Law)']
          },
          {
            label: 'Pumping fluid',
            options: ['Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position', 'W = ∫ρg · A(y) · (D-y) dy', 'These applications extend the accumulation framework to physics', 'F(x) = kx (Hooke\'s Law)']
          }
        ],
        correctAnswers: ['F(x) = kx (Hooke\'s Law)', 'W = ∫ρg · A(y) · (D-y) dy'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Spring force: F(x) = kx (Hooke\'s Law). Pumping fluid: W = ∫ρg · A(y) · (D-y) dy.'
      }
    }
  ]
}
