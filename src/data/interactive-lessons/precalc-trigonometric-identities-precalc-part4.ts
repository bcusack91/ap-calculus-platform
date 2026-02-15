export const precalcTrigIdentitiesPart4Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo4-intro',
      type: 'text' as const,
      content: `
# Double & Half Angle Formulas

**Part 4 of 7 — Double & Half Angle Formulas**

### 1. sin(2θ) = 2 sin θ cos θ

sin(2θ) = 2 sin θ cos θ

### 2. cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ

cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ

### 3. sin(θ/2) = ±√((1 - cos θ)/2)

sin(θ/2) = ±√((1 - cos θ)/2)

### 4. cos(θ/2) = ±√((1 + cos θ)/2)

cos(θ/2) = ±√((1 + cos θ)/2)
      `
    },
    {
      id: 'trigo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of double & half angle formulas?',
            options: [
              'sin(2θ) = 2 sin θ cos θ',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'sin(2θ) = 2 sin θ cos θ'
          },
          {
            question: 'In the context of double & half angle formulas, which is accurate?',
            options: [
              'sin(θ/2) = ±√((1 - cos θ)/2)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'sin(θ/2) = ±√((1 - cos θ)/2)'
          }
        ]
      }
    },
    {
      id: 'trigo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sin(2θ) = 2 sin θ cos θ**
- **cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ**
- **sin(θ/2) = ±√((1 - cos θ)/2)**
- **cos(θ/2) = ±√((1 + cos θ)/2)**
      `
    },
    {
      id: 'trigo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to double & half angle formulas?',
            options: [
              'cos(θ/2) = ±√((1 + cos θ)/2)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'cos(θ/2) = ±√((1 + cos θ)/2)'
          }
        ]
      }
    },
    {
      id: 'trigo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin(2θ) = 2 sin θ cos θ',
            options: ['sin(2θ) = 2 sin θ cos θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ',
            options: ['cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'sin(θ/2) = ±√((1 - cos θ)/2)',
            options: ['sin(θ/2) = ±√((1 - cos θ)/2)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['sin(2θ) = 2 sin θ cos θ', 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ', 'sin(θ/2) = ±√((1 - cos θ)/2)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Double & Half Angle Formulas.'
      }
    }
  ]
}
