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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of volumes of known cross-sections?',
            options: [
              'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area'
          },
          {
            question: 'In the context of volumes of known cross-sections, which is accurate?',
            options: [
              'A(x) = π/8 · [f(x) - g(x)]²',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Semicircular cross-sections: A(x) = π/8 · [f(x) - g(x)]²'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to volumes of known cross-sections?',
            options: [
              'A(x) = (√3/4)[f(x) - g(x)]²',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Equilateral triangle cross-sections: A(x) = (√3/4)[f(x) - g(x)]²'
          }
        ]
      }
    },
    {
      id: 'integ2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectional area',
            options: ['Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Square cross-sections',
            options: ['A(x) = [f(x) - g(x)]²', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Semicircular cross-sections',
            options: ['A(x) = π/8 · [f(x) - g(x)]²', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Volume = ∫ₐᵇ A(x)dx where A(x) is the cross-sectio', 'A(x) = [f(x) - g(x)]²', 'A(x) = π/8 · [f(x) - g(x)]²'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Volumes of Known Cross-Sections.'
      }
    }
  ]
}
