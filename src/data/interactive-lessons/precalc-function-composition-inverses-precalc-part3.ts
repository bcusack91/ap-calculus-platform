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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f⁻¹ is the inverse function?',
            options: [
              'The graph of f⁻¹ is the reflection of f over the line y = x',
              'Only one-to-one functions have inverses',
              'if any horizontal line crosses the graph more than once, no inverse exists',
              'f⁻¹(f(x)) = x and f(f⁻¹(x)) = x'
            ],
            correctAnswer: 3,
            explanation: 'Correct — f⁻¹ is the inverse function: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Functions, which explains Horizontal Line Test?',
            options: [
              'The graph of f⁻¹ is the reflection of f over the line y = x',
              'if any horizontal line crosses the graph more than once, no inverse exists',
              'Only one-to-one functions have inverses',
              'f⁻¹(f(x)) = x and f(f⁻¹(x)) = x'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Horizontal Line Test: if any horizontal line crosses the graph more than once, no inverse exists. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f⁻¹ is the inverse function',
            options: ['Only one-to-one functions have inverses', 'The graph of f⁻¹ is the reflection of f over the line y = x', 'f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'if any horizontal line crosses the graph more than once, no inverse exists']
          },
          {
            label: 'Horizontal Line Test',
            options: ['f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'if any horizontal line crosses the graph more than once, no inverse exists', 'Only one-to-one functions have inverses', 'The graph of f⁻¹ is the reflection of f over the line y = x']
          }
        ],
        correctAnswers: ['f⁻¹(f(x)) = x and f(f⁻¹(x)) = x', 'if any horizontal line crosses the graph more than once, no inverse exists'],
        hint1: 'Think about what each concept specifically describes in Inverse Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Functions describes a specific idea. f⁻¹ is the inverse function: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x. Horizontal Line Test: if any horizontal line crosses the graph more than once, no inverse exists.'
      }
    }
  ]
}
