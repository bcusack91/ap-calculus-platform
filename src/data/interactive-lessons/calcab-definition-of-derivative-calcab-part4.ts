export const calcABDerivativeDefPart4Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin4-intro',
      type: 'text' as const,
      content: `
# Differentiability

**Part 4 of 7 — Differentiability**

### 1. If f is differentiable at c, then f is continuous at c

If f is differentiable at c, then f is continuous at c

### 2. Continuous does NOT imply differentiable (example

|x| at x=0)

### 3. Not differentiable at corners, cusps, vertical tangents, or discontinuities

Not differentiable at corners, cusps, vertical tangents, or discontinuities

### 4. Differentiability is a stronger condition than continuity

Differentiability is a stronger condition than continuity
      `
    },
    {
      id: 'defin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of differentiability?',
            options: [
              'If f is differentiable at c, then f is continuous at c',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'If f is differentiable at c, then f is continuous at c'
          },
          {
            question: 'In the context of differentiability, which is accurate?',
            options: [
              'Not differentiable at corners, cusps, vertical tangents, or discontinuities',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Not differentiable at corners, cusps, vertical tangents, or discontinuities'
          }
        ]
      }
    },
    {
      id: 'defin4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If f is differentiable at c, then f is continuous at c**
- **Continuous does NOT imply differentiable (example**: |x| at x=0)
- **Not differentiable at corners, cusps, vertical tangents, or discontinuities**
- **Differentiability is a stronger condition than continuity**
      `
    },
    {
      id: 'defin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to differentiability?',
            options: [
              'Differentiability is a stronger condition than continuity',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Differentiability is a stronger condition than continuity'
          }
        ]
      }
    },
    {
      id: 'defin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f is differentiable at c, then f is continuous at c',
            options: ['If f is differentiable at c, then f is continuous ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Continuous does NOT imply differentiable (example',
            options: ['|x| at x=0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Not differentiable at corners, cusps, vertical tangents, or discontinuities',
            options: ['Not differentiable at corners, cusps, vertical tan', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['If f is differentiable at c, then f is continuous ', '|x| at x=0)', 'Not differentiable at corners, cusps, vertical tan'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Differentiability.'
      }
    }
  ]
}
