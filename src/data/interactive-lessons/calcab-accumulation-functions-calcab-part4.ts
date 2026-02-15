export const calcABAccumulationPart4Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum4-intro',
      type: 'text' as const,
      content: `
# Net Change Theorem

**Part 4 of 7 — Net Change Theorem**

### 1. Net Change Theorem

∫ₐᵇ F'(x)dx = F(b) - F(a)

### 2. The integral of a rate of change gives the net change

The integral of a rate of change gives the net change

### 3. Displacement = ∫ₐᵇ v(t)dt (net change in position)

Displacement = ∫ₐᵇ v(t)dt (net change in position)

### 4. Total distance = ∫ₐᵇ |v(t)|dt (always positive)

Total distance = ∫ₐᵇ |v(t)|dt (always positive)
      `
    },
    {
      id: 'accum4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of net change theorem?',
            options: [
              'Net Change Theorem',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Net Change Theorem: ∫ₐᵇ F\'(x)dx = F(b) - F(a)'
          },
          {
            question: 'In the context of net change theorem, which is accurate?',
            options: [
              'Displacement = ∫ₐᵇ v(t)dt (net change in position)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Displacement = ∫ₐᵇ v(t)dt (net change in position)'
          }
        ]
      }
    },
    {
      id: 'accum4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Net Change Theorem**: ∫ₐᵇ F'(x)dx = F(b) - F(a)
- **The integral of a rate of change gives the net change**
- **Displacement = ∫ₐᵇ v(t)dt (net change in position)**
- **Total distance = ∫ₐᵇ |v(t)|dt (always positive)**
      `
    },
    {
      id: 'accum4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to net change theorem?',
            options: [
              'Total distance = ∫ₐᵇ |v(t)|dt (always positive)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Total distance = ∫ₐᵇ |v(t)|dt (always positive)'
          }
        ]
      }
    },
    {
      id: 'accum4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Net Change Theorem',
            options: ['∫ₐᵇ F\'(x)dx = F(b) - F(a)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The integral of a rate of change gives the net change',
            options: ['The integral of a rate of change gives the net cha', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Displacement = ∫ₐᵇ v(t)dt (net change in position)',
            options: ['Displacement = ∫ₐᵇ v(t)dt (net change in position)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫ₐᵇ F\'(x)dx = F(b) - F(a)', 'The integral of a rate of change gives the net cha', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Net Change Theorem.'
      }
    }
  ]
}
