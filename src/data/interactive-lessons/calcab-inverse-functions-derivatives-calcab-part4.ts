export const calcABInverseDerivPart4Data = {
  topicSlug: 'inverse-functions-derivatives-calcab',
  sections: [
    {
      id: 'inver4-intro',
      type: 'text' as const,
      content: `
# Integrals Leading to Inverse Trig

**Part 4 of 7 — Integrals Leading to Inverse Trig**

### 1. ∫1/√(a²-x²) dx = arcsin(x/a) + C

∫1/√(a²-x²) dx = arcsin(x/a) + C

### 2. ∫1/(a²+x²) dx = (1/a)arctan(x/a) + C

∫1/(a²+x²) dx = (1/a)arctan(x/a) + C

### 3. Recognize these forms in integrands

Recognize these forms in integrands

### 4. May need to complete the square or factor to reveal these forms

May need to complete the square or factor to reveal these forms
      `
    },
    {
      id: 'inver4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integrals leading to inverse trig?',
            options: [
              '∫1/√(a²-x²) dx = arcsin(x/a) + C',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫1/√(a²-x²) dx = arcsin(x/a) + C'
          },
          {
            question: 'In the context of integrals leading to inverse trig, which is accurate?',
            options: [
              'Recognize these forms in integrands',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Recognize these forms in integrands'
          }
        ]
      }
    },
    {
      id: 'inver4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫1/√(a²-x²) dx = arcsin(x/a) + C**
- **∫1/(a²+x²) dx = (1/a)arctan(x/a) + C**
- **Recognize these forms in integrands**
- **May need to complete the square or factor to reveal these forms**
      `
    },
    {
      id: 'inver4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integrals leading to inverse trig?',
            options: [
              'May need to complete the square or factor to reveal these forms',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'May need to complete the square or factor to reveal these forms'
          }
        ]
      }
    },
    {
      id: 'inver4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫1/√(a²-x²) dx = arcsin(x/a) + C',
            options: ['∫1/√(a²-x²) dx = arcsin(x/a) + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C',
            options: ['∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Recognize these forms in integrands',
            options: ['Recognize these forms in integrands', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫1/√(a²-x²) dx = arcsin(x/a) + C', '∫1/(a²+x²) dx = (1/a)arctan(x/a) + C', 'Recognize these forms in integrands'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integrals Leading to Inverse Trig.'
      }
    }
  ]
}
