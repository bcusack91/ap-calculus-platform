export const calcBCExamStrategiesPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex4-intro',
      type: 'text' as const,
      content: `
# Integration Technique Selection

**Part 4 of 7 — Integration Technique Selection**

### 1. Polynomial × eˣ or trig

integration by parts (tabular method)

### 2. Rational functions

partial fractions

### 3. Recognize inverse trig forms

1/(1+x²), 1/√(1-x²)

### 4. u-substitution

always try this first if the integrand has a composite structure
      `
    },
    {
      id: 'bc-ex4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integration technique selection?',
            options: [
              'Polynomial × eˣ or trig',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Polynomial × eˣ or trig: integration by parts (tabular method)'
          },
          {
            question: 'In the context of integration technique selection, which is accurate?',
            options: [
              '1/(1+x²), 1/√(1-x²)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Recognize inverse trig forms: 1/(1+x²), 1/√(1-x²)'
          }
        ]
      }
    },
    {
      id: 'bc-ex4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Polynomial × eˣ or trig**: integration by parts (tabular method)
- **Rational functions**: partial fractions
- **Recognize inverse trig forms**: 1/(1+x²), 1/√(1-x²)
- **u-substitution**: always try this first if the integrand has a composite structure
      `
    },
    {
      id: 'bc-ex4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integration technique selection?',
            options: [
              'always try this first if the integrand has a composite structure',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'u-substitution: always try this first if the integrand has a composite structure'
          }
        ]
      }
    },
    {
      id: 'bc-ex4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Polynomial × eˣ or trig',
            options: ['integration by parts (tabular method)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Rational functions',
            options: ['partial fractions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Recognize inverse trig forms',
            options: ['1/(1+x²), 1/√(1-x²)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['integration by parts (tabular method)', 'partial fractions', '1/(1+x²), 1/√(1-x²)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integration Technique Selection.'
      }
    }
  ]
}
