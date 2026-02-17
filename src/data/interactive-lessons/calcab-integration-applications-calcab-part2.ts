export const calcABIntAppsPart2Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'integ2-intro',
      type: 'text' as const,
      content: `
# Volumes of Known Cross-Sections

**Part 2 of 7 — Volumes of Known Cross-Sections**

### 1. Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area

Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area

### 2. Square cross-sections

A(x) = [f(x) - g(x)]²

### 3. Semicircular cross-sections

A(x) = π/8 · [f(x) - g(x)]²

### 4. Equilateral triangle cross-sections

A(x) = (√3/4)[f(x) - g(x)]²
      `
    },
    {
      id: 'integ2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Volume = ∫ₐᵇ A(x)dx where A(x) is the…?',
            options: [
              'A(x) = [f(x) - g(x)]²',
              'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area',
              'A(x) = (√3/4)[f(x) - g(x)]²',
              'A(x) = π/8 · [f(x) - g(x)]²'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Semicircular cross-sections?',
            options: [
              'A(x) = π/8 · [f(x) - g(x)]²',
              'A(x) = [f(x) - g(x)]²',
              'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area',
              'A(x) = (√3/4)[f(x) - g(x)]²'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Semicircular cross-sections: A(x) = π/8 · [f(x) - g(x)]². Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'integ2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area**
- **Square cross-sections**: A(x) = [f(x) - g(x)]²
- **Semicircular cross-sections**: A(x) = π/8 · [f(x) - g(x)]²
- **Equilateral triangle cross-sections**: A(x) = (√3/4)[f(x) - g(x)]²
      `
    },
    {
      id: 'integ2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Equilateral triangle cross-sections is correct?',
            options: [
              'A(x) = π/8 · [f(x) - g(x)]²',
              'A(x) = [f(x) - g(x)]²',
              'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area',
              'A(x) = (√3/4)[f(x) - g(x)]²'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Equilateral triangle cross-sections: A(x) = (√3/4)[f(x) - g(x)]². Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'integ2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Square cross-sections',
            options: ['Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area', 'A(x) = [f(x) - g(x)]²', 'A(x) = π/8 · [f(x) - g(x)]²', 'A(x) = (√3/4)[f(x) - g(x)]²']
          },
          {
            label: 'Semicircular cross-sections',
            options: ['A(x) = [f(x) - g(x)]²', 'A(x) = (√3/4)[f(x) - g(x)]²', 'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area', 'A(x) = π/8 · [f(x) - g(x)]²']
          },
          {
            label: 'Equilateral triangle cross-sections',
            options: ['A(x) = (√3/4)[f(x) - g(x)]²', 'A(x) = [f(x) - g(x)]²', 'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area', 'A(x) = π/8 · [f(x) - g(x)]²']
          }
        ],
        correctAnswers: ['A(x) = [f(x) - g(x)]²', 'A(x) = π/8 · [f(x) - g(x)]²', 'A(x) = (√3/4)[f(x) - g(x)]²'],
        hint1: 'Think about what each concept specifically describes in Volumes of Known Cross-Sections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Volumes of Known Cross-Sections describes a specific idea. Square cross-sections: A(x) = [f(x) - g(x)]². Semicircular cross-sections: A(x) = π/8 · [f(x) - g(x)]². Equilateral triangle cross-sections: A(x) = (√3/4)[f(x) - g(x)]².'
      }
    }
  ]
}
