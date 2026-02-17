export const calcABIntAppsPart6Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'integ6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Work = ∫ₐᵇ F(x)dx where F(x) is force…?',
            options: [
              'W = ∫ρg · A(y) · (D-y) dy',
              'These applications extend the accumulation framework to physics',
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'F(x) = kx (Hooke\'s Law)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Pumping fluid?',
            options: [
              'These applications extend the accumulation framework to physics',
              'W = ∫ρg · A(y) · (D-y) dy',
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'F(x) = kx (Hooke\'s Law)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pumping fluid: W = ∫ρg · A(y) · (D-y) dy. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ6-detail',
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
      id: 'integ6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes These applications extend the…?',
            options: [
              'W = ∫ρg · A(y) · (D-y) dy',
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'These applications extend the accumulation framework to physics',
              'F(x) = kx (Hooke\'s Law)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — These applications extend the accumulation framework to physics. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Spring force',
            options: ['W = ∫ρg · A(y) · (D-y) dy', 'F(x) = kx (Hooke\'s Law)', 'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position', 'These applications extend the accumulation framework to physics']
          },
          {
            label: 'Pumping fluid',
            options: ['F(x) = kx (Hooke\'s Law)', 'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position', 'These applications extend the accumulation framework to physics', 'W = ∫ρg · A(y) · (D-y) dy']
          }
        ],
        correctAnswers: ['F(x) = kx (Hooke\'s Law)', 'W = ∫ρg · A(y) · (D-y) dy'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Spring force: F(x) = kx (Hooke\'s Law). Pumping fluid: W = ∫ρg · A(y) · (D-y) dy.'
      }
    }
  ]
}
