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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Net Change Theorem?',
            options: [
              'Displacement = ∫ₐᵇ v(t)dt (net change in position)',
              'The integral of a rate of change gives the net change',
              'Total distance = ∫ₐᵇ |v(t)|dt (always positive)',
              '∫ₐᵇ F\'(x)dx = F(b) - F(a)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Net Change Theorem: ∫ₐᵇ F\'(x)dx = F(b) - F(a). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Net Change Theorem, which explains Displacement = ∫ₐᵇ v(t)dt (net change…?',
            options: [
              'Total distance = ∫ₐᵇ |v(t)|dt (always positive)',
              'The integral of a rate of change gives the net change',
              'Displacement = ∫ₐᵇ v(t)dt (net change in position)',
              '∫ₐᵇ F\'(x)dx = F(b) - F(a)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Displacement = ∫ₐᵇ v(t)dt (net change in position). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Total distance = ∫ₐᵇ |v(t)|dt (always… is correct?',
            options: [
              'The integral of a rate of change gives the net change',
              '∫ₐᵇ F\'(x)dx = F(b) - F(a)',
              'Displacement = ∫ₐᵇ v(t)dt (net change in position)',
              'Total distance = ∫ₐᵇ |v(t)|dt (always positive)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Total distance = ∫ₐᵇ |v(t)|dt (always positive). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Net Change Theorem',
            options: ['The integral of a rate of change gives the net change', '∫ₐᵇ F\'(x)dx = F(b) - F(a)', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)', 'Total distance = ∫ₐᵇ |v(t)|dt (always positive)']
          },
          {
            label: 'The integral of a rate of change gives…',
            options: ['The integral of a rate of change gives the net change', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)', 'Total distance = ∫ₐᵇ |v(t)|dt (always positive)', '∫ₐᵇ F\'(x)dx = F(b) - F(a)']
          },
          {
            label: 'Displacement = ∫ₐᵇ v(t)dt (net change…',
            options: ['The integral of a rate of change gives the net change', 'Total distance = ∫ₐᵇ |v(t)|dt (always positive)', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)', '∫ₐᵇ F\'(x)dx = F(b) - F(a)']
          }
        ],
        correctAnswers: ['∫ₐᵇ F\'(x)dx = F(b) - F(a)', 'The integral of a rate of change gives the net change', 'Displacement = ∫ₐᵇ v(t)dt (net change in position)'],
        hint1: 'Think about what each concept specifically describes in Net Change Theorem.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Net Change Theorem describes a specific idea. Net Change Theorem: ∫ₐᵇ F\'(x)dx = F(b) - F(a). The integral of a rate of change gives the net change. Displacement = ∫ₐᵇ v(t)dt (net change in position).'
      }
    }
  ]
}
