export const precalcPolynomialPart4Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'polyn4-intro',
      type: 'text' as const,
      content: `
# Graphing Polynomials

**Part 4 of 7 — Graphing Polynomials**

### 1. Plot zeros and y-intercept first

Plot zeros and y-intercept first

### 2. Use end behavior to sketch the tails

Use end behavior to sketch the tails

### 3. Apply multiplicity to determine crossing vs bouncing

Apply multiplicity to determine crossing vs bouncing

### 4. Connect with a smooth, continuous curve

Connect with a smooth, continuous curve
      `
    },
    {
      id: 'polyn4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of graphing polynomials?',
            options: [
              'Plot zeros and y-intercept first',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Plot zeros and y-intercept first'
          },
          {
            question: 'In the context of graphing polynomials, which is accurate?',
            options: [
              'Apply multiplicity to determine crossing vs bouncing',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Apply multiplicity to determine crossing vs bouncing'
          }
        ]
      }
    },
    {
      id: 'polyn4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Plot zeros and y-intercept first**
- **Use end behavior to sketch the tails**
- **Apply multiplicity to determine crossing vs bouncing**
- **Connect with a smooth, continuous curve**
      `
    },
    {
      id: 'polyn4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to graphing polynomials?',
            options: [
              'Connect with a smooth, continuous curve',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Connect with a smooth, continuous curve'
          }
        ]
      }
    },
    {
      id: 'polyn4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Plot zeros and y-intercept first',
            options: ['Plot zeros and y-intercept first', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use end behavior to sketch the tails',
            options: ['Use end behavior to sketch the tails', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Apply multiplicity to determine crossing vs bouncing',
            options: ['Apply multiplicity to determine crossing vs bounci', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Plot zeros and y-intercept first', 'Use end behavior to sketch the tails', 'Apply multiplicity to determine crossing vs bounci'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Graphing Polynomials.'
      }
    }
  ]
}
