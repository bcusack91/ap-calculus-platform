export const precalcTransformationsPart7Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'trans7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Linear',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Linear: f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'f(x) = 1/x; Exponential: f(x) = bˣ',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocal: f(x) = 1/x; Exponential: f(x) = bˣ'
          }
        ]
      }
    },
    {
      id: 'trans7-detail',
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
      id: 'trans7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'trans7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Linear',
            options: ['f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Absolute value',
            options: ['f(x) = |x|; Square root: f(x) = √x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Reciprocal',
            options: ['f(x) = 1/x; Exponential: f(x) = bˣ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(x) = x; Quadratic: f(x) = x²; Cubic: f(x) = x³', 'f(x) = |x|; Square root: f(x) = √x', 'f(x) = 1/x; Exponential: f(x) = bˣ'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
