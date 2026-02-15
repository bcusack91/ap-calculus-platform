export const precalcParametricPart6Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Horizontal

x = v₀ cos(θ) · t

### 2. Vertical

y = v₀ sin(θ) · t - ½gt² + h₀

### 3. Maximum height at t = v₀ sin(θ)/g

Maximum height at t = v₀ sin(θ)/g

### 4. Range (horizontal distance) = v₀² sin(2θ)/g

Range (horizontal distance) = v₀² sin(2θ)/g
      `
    },
    {
      id: 'param6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Horizontal',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal: x = v₀ cos(θ) · t'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Maximum height at t = v₀ sin(θ)/g',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Maximum height at t = v₀ sin(θ)/g'
          }
        ]
      }
    },
    {
      id: 'param6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Horizontal**: x = v₀ cos(θ) · t
- **Vertical**: y = v₀ sin(θ) · t - ½gt² + h₀
- **Maximum height at t = v₀ sin(θ)/g**
- **Range (horizontal distance) = v₀² sin(2θ)/g**
      `
    },
    {
      id: 'param6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Range (horizontal distance) = v₀² sin(2θ)/g',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Range (horizontal distance) = v₀² sin(2θ)/g'
          }
        ]
      }
    },
    {
      id: 'param6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Horizontal',
            options: ['x = v₀ cos(θ) · t', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Vertical',
            options: ['y = v₀ sin(θ) · t - ½gt² + h₀', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Maximum height at t = v₀ sin(θ)/g',
            options: ['Maximum height at t = v₀ sin(θ)/g', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x = v₀ cos(θ) · t', 'y = v₀ sin(θ) · t - ½gt² + h₀', 'Maximum height at t = v₀ sin(θ)/g'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
