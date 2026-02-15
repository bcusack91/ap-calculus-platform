export const precalcCompositionPart3Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'funct3-intro',
      type: 'text' as const,
      content: `
# Inverse Functions

**Part 3 of 7 — Inverse Functions**

### 1. f⁻¹ is the inverse function

f⁻¹(f(x)) = x and f(f⁻¹(x)) = x

### 2. Only one-to-one functions have inverses

Only one-to-one functions have inverses

### 3. Horizontal Line Test

if any horizontal line crosses the graph more than once, no inverse exists

### 4. The graph of f⁻¹ is the reflection of f over the line y = x

The graph of f⁻¹ is the reflection of f over the line y = x
      `
    },
    {
      id: 'funct3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of inverse functions?',
            options: [
              'f⁻¹ is the inverse function',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f⁻¹ is the inverse function: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x'
          },
          {
            question: 'In the context of inverse functions, which is accurate?',
            options: [
              'if any horizontal line crosses the graph more than once, no inverse exists',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Horizontal Line Test: if any horizontal line crosses the graph more than once, no inverse exists'
          }
        ]
      }
    },
    {
      id: 'funct3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f⁻¹ is the inverse function**: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x
- **Only one-to-one functions have inverses**
- **Horizontal Line Test**: if any horizontal line crosses the graph more than once, no inverse exists
- **The graph of f⁻¹ is the reflection of f over the line y = x**
      `
    },
    {
      id: 'funct3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse functions?',
            options: [
              'The graph of f⁻¹ is the reflection of f over the line y = x',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The graph of f⁻¹ is the reflection of f over the line y = x'
          }
        ]
      }
    },
    {
      id: 'funct3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f⁻¹ is the inverse function',
            options: ['f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Only one-to-one functions have inverses',
            options: ['Only one-to-one functions have inverses', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Horizontal Line Test',
            options: ['if any horizontal line crosses the graph more than', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'Only one-to-one functions have inverses', 'if any horizontal line crosses the graph more than'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Inverse Functions.'
      }
    }
  ]
}
