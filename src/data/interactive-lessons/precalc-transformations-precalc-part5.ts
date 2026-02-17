export const precalcTransformationsPart5Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans5-intro',
      type: 'text' as const,
      content: `
# Parent Functions Gallery

**Part 5 of 7 — Parent Functions Gallery**

### 1. Linear

f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³

### 2. Absolute value

f(x) = |x|; Square root: f(x) = √x

### 3. Reciprocal

f(x) = 1/x; Exponential: f(x) = bˣ

### 4. Logarithmic

f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋
      `
    },
    {
      id: 'trans5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Linear" refer to in precalculus?',
            options: [
              'f(x) = 1/x; Exponential: f(x) = bˣ',
              'f(x) = |x|; Square root: f(x) = √x',
              'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋',
              'f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Linear: f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Reciprocal?',
            options: [
              'f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³',
              'f(x) = 1/x; Exponential: f(x) = bˣ',
              'f(x) = |x|; Square root: f(x) = √x',
              'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Reciprocal: f(x) = 1/x; Exponential: f(x) = bˣ. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'trans5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Linear**: f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³
- **Absolute value**: f(x) = |x|; Square root: f(x) = √x
- **Reciprocal**: f(x) = 1/x; Exponential: f(x) = bˣ
- **Logarithmic**: f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋
      `
    },
    {
      id: 'trans5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parent functions gallery?',
            options: [
              'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Logarithmic: f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋'
          }
        ]
      }
    },
    {
      id: 'trans5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linear',
            options: ['f(x) = 1/x; Exponential: f(x) = bˣ', 'f(x) = |x|; Square root: f(x) = √x', 'f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋']
          },
          {
            label: 'Absolute value',
            options: ['f(x) = |x|; Square root: f(x) = √x', 'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋', 'f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'f(x) = 1/x; Exponential: f(x) = bˣ']
          },
          {
            label: 'Reciprocal',
            options: ['f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'f(x) = 1/x; Exponential: f(x) = bˣ', 'f(x) = log_b(x); Greatest integer: f(x) = ⌊x⌋', 'f(x) = |x|; Square root: f(x) = √x']
          }
        ],
        correctAnswers: ['f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'f(x) = |x|; Square root: f(x) = √x', 'f(x) = 1/x; Exponential: f(x) = bˣ'],
        hint1: 'Think about what each concept specifically describes in Parent Functions Gallery.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parent Functions Gallery describes a specific idea. Linear: f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³. Absolute value: f(x) = |x|; Square root: f(x) = √x. Reciprocal: f(x) = 1/x; Exponential: f(x) = bˣ.'
      }
    }
  ]
}
