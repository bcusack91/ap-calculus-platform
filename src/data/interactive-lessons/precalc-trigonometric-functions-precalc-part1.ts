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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Degree to radian?',
            options: [
              'One full rotation = 2π radians = 360°',
              'multiply by π/180',
              's = rθ where θ is in radians',
              'multiply by 180/π'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Degree to radian: multiply by π/180. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about One full rotation = 2π radians = 360°?',
            options: [
              's = rθ where θ is in radians',
              'multiply by π/180',
              'multiply by 180/π',
              'One full rotation = 2π radians = 360°'
            ],
            correctAnswer: 3,
            explanation: 'Correct — One full rotation = 2π radians = 360°. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Degree to radian',
            options: ['multiply by 180/π', 'multiply by π/180', 'One full rotation = 2π radians = 360°', 's = rθ where θ is in radians']
          },
          {
            label: 'Radian to degree',
            options: ['multiply by π/180', 's = rθ where θ is in radians', 'multiply by 180/π', 'One full rotation = 2π radians = 360°']
          },
          {
            label: 'Arc length',
            options: ['multiply by 180/π', 'multiply by π/180', 'One full rotation = 2π radians = 360°', 's = rθ where θ is in radians']
          }
        ],
        correctAnswers: ['multiply by π/180', 'multiply by 180/π', 's = rθ where θ is in radians'],
        hint1: 'Think about what each concept specifically describes in Trigonometric Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Trigonometric Functions describes a specific idea. Degree to radian: multiply by π/180. Radian to degree: multiply by 180/π. Arc length: s = rθ where θ is in radians.'
      }
    }
  ]
}
