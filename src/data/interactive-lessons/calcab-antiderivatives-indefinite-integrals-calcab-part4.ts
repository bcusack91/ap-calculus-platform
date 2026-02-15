export const calcABAntiderivativesPart4Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid4-intro',
      type: 'text' as const,
      content: `
# Integrating Exponentials & Logs

**Part 4 of 7 — Integrating Exponentials & Logs**

### 1. ∫eˣ dx = eˣ + C

∫eˣ dx = eˣ + C

### 2. ∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1

∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1

### 3. ∫1/x dx = ln|x| + C

∫1/x dx = ln|x| + C

### 4. ∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C

∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C
      `
    },
    {
      id: 'antid4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integrating exponentials & logs?',
            options: [
              '∫eˣ dx = eˣ + C',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫eˣ dx = eˣ + C'
          },
          {
            question: 'In the context of integrating exponentials & logs, which is accurate?',
            options: [
              '∫1/x dx = ln|x| + C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫1/x dx = ln|x| + C'
          }
        ]
      }
    },
    {
      id: 'antid4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫eˣ dx = eˣ + C**
- **∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1**
- **∫1/x dx = ln|x| + C**
- **∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C**
      `
    },
    {
      id: 'antid4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integrating exponentials & logs?',
            options: [
              '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '∫1/(1+x²) dx = arctan(x) + C; ∫1/√(1-x²) dx = arcsin(x) + C'
          }
        ]
      }
    },
    {
      id: 'antid4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫eˣ dx = eˣ + C',
            options: ['∫eˣ dx = eˣ + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1',
            options: ['∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫1/x dx = ln|x| + C',
            options: ['∫1/x dx = ln|x| + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫eˣ dx = eˣ + C', '∫aˣ dx = aˣ/ln(a) + C for a > 0, a ≠ 1', '∫1/x dx = ln|x| + C'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integrating Exponentials & Logs.'
      }
    }
  ]
}
