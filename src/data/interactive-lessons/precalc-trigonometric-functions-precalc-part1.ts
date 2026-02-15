export const precalcTrigFunctionsPart1Data = {
  topicSlug: 'trigonometric-functions-precalc',
  sections: [
    {
      id: 'trigo1-intro',
      type: 'text' as const,
      content: `
# 📈 Trigonometric Functions

**Part 1 of 7 — Angles & Radian Measure**

### 1. Degree to radian

multiply by π/180

### 2. Radian to degree

multiply by 180/π

### 3. One full rotation = 2π radians = 360°

One full rotation = 2π radians = 360°

### 4. Arc length

s = rθ where θ is in radians
      `
    },
    {
      id: 'trigo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of angles & radian measure?',
            options: [
              'Degree to radian',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Degree to radian: multiply by π/180'
          },
          {
            question: 'In the context of angles & radian measure, which is accurate?',
            options: [
              'One full rotation = 2π radians = 360°',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'One full rotation = 2π radians = 360°'
          }
        ]
      }
    },
    {
      id: 'trigo1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Degree to radian**: multiply by π/180
- **Radian to degree**: multiply by 180/π
- **One full rotation = 2π radians = 360°**
- **Arc length**: s = rθ where θ is in radians
      `
    },
    {
      id: 'trigo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to angles & radian measure?',
            options: [
              's = rθ where θ is in radians',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Arc length: s = rθ where θ is in radians'
          }
        ]
      }
    },
    {
      id: 'trigo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degree to radian',
            options: ['multiply by π/180', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Radian to degree',
            options: ['multiply by 180/π', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'One full rotation = 2π radians = 360°',
            options: ['One full rotation = 2π radians = 360°', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['multiply by π/180', 'multiply by 180/π', 'One full rotation = 2π radians = 360°'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Angles & Radian Measure.'
      }
    }
  ]
}
