export const calcBCTaylorMaclaurinPart7Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Substitution

replace x in a known series (e.g., e^(-x²) from eˣ)

### 2. Differentiation

differentiate a known series term by term

### 3. Integration

integrate a known series term by term

### 4. Multiplication

multiply series together for products of functions
      `
    },
    {
      id: 'taylo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Substitution',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Substitution: replace x in a known series (e.g., e^(-x²) from eˣ)'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'integrate a known series term by term',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Integration: integrate a known series term by term'
          }
        ]
      }
    },
    {
      id: 'taylo7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Substitution**: replace x in a known series (e.g., e^(-x²) from eˣ)
- **Differentiation**: differentiate a known series term by term
- **Integration**: integrate a known series term by term
- **Multiplication**: multiply series together for products of functions
      `
    },
    {
      id: 'taylo7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'multiply series together for products of functions',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Multiplication: multiply series together for products of functions'
          }
        ]
      }
    },
    {
      id: 'taylo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Substitution',
            options: ['replace x in a known series (e.g., e^(-x²) from eˣ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Differentiation',
            options: ['differentiate a known series term by term', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Integration',
            options: ['integrate a known series term by term', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['replace x in a known series (e.g., e^(-x²) from eˣ', 'differentiate a known series term by term', 'integrate a known series term by term'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
