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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'W = ∫ρg · A(y) · (D-y) dy',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Pumping fluid: W = ∫ρg · A(y) · (D-y) dy'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'These applications extend the accumulation framework to physics',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'These applications extend the accumulation framework to physics'
          }
        ]
      }
    },
    {
      id: 'integ6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Work = ∫ₐᵇ F(x)dx where F(x) is force as a function of position',
            options: ['Work = ∫ₐᵇ F(x)dx where F(x) is force as a functio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Spring force',
            options: ['F(x) = kx (Hooke\'s Law)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Pumping fluid',
            options: ['W = ∫ρg · A(y) · (D-y) dy', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Work = ∫ₐᵇ F(x)dx where F(x) is force as a functio', 'F(x) = kx (Hooke\'s Law)', 'W = ∫ρg · A(y) · (D-y) dy'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
