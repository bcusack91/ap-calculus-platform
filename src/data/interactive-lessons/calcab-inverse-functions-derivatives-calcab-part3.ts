export const calcABInverseDerivPart3Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver3-intro',
      type: 'text' as const,
      content: `
# Derivatives of Inverse Trig Functions

**Part 3 of 7 — Derivatives of Inverse Trig Functions**

### 1. d/dx[arcsin(x)] = 1/√(1-x²)

d/dx[arcsin(x)] = 1/√(1-x²)

### 2. d/dx[arccos(x)] = -1/√(1-x²)

d/dx[arccos(x)] = -1/√(1-x²)

### 3. d/dx[arctan(x)] = 1/(1+x²)

d/dx[arctan(x)] = 1/(1+x²)

### 4. With chain rule

d/dx[arctan(g(x))] = g'(x)/(1+[g(x)]²)
      `
    },
    {
      id: 'inver3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of derivatives of inverse trig functions?',
            options: [
              'd/dx[arcsin(x)] = 1/√(1-x²)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[arcsin(x)] = 1/√(1-x²)'
          },
          {
            question: 'In the context of derivatives of inverse trig functions, which is accurate?',
            options: [
              'd/dx[arctan(x)] = 1/(1+x²)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[arctan(x)] = 1/(1+x²)'
          }
        ]
      }
    },
    {
      id: 'inver3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[arcsin(x)] = 1/√(1-x²)**
- **d/dx[arccos(x)] = -1/√(1-x²)**
- **d/dx[arctan(x)] = 1/(1+x²)**
- **With chain rule**: d/dx[arctan(g(x))] = g'(x)/(1+[g(x)]²)
      `
    },
    {
      id: 'inver3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to derivatives of inverse trig functions?',
            options: [
              'd/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'With chain rule: d/dx[arctan(g(x))] = g\'(x)/(1+[g(x)]²)'
          }
        ]
      }
    },
    {
      id: 'inver3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[arcsin(x)] = 1/√(1-x²)',
            options: ['d/dx[arcsin(x)] = 1/√(1-x²)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[arccos(x)] = -1/√(1-x²)',
            options: ['d/dx[arccos(x)] = -1/√(1-x²)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[arctan(x)] = 1/(1+x²)',
            options: ['d/dx[arctan(x)] = 1/(1+x²)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[arcsin(x)] = 1/√(1-x²)', 'd/dx[arccos(x)] = -1/√(1-x²)', 'd/dx[arctan(x)] = 1/(1+x²)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Derivatives of Inverse Trig Functions.'
      }
    }
  ]
}
