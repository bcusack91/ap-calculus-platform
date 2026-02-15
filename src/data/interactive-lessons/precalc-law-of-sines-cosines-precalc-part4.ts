export const precalcLawSinesCosinesPart4Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o4-intro',
      type: 'text' as const,
      content: `
# Area of Triangles

**Part 4 of 7 — Area of Triangles**

### 1. Area = ½ab sin C (using two sides and included angle)

Area = ½ab sin C (using two sides and included angle)

### 2. Heron's formula

Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2

### 3. Area using Law of Sines

Area = a² sin B sin C / (2 sin A)

### 4. These formulas work for any triangle, not just right triangles

These formulas work for any triangle, not just right triangles
      `
    },
    {
      id: 'law-o4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of area of triangles?',
            options: [
              'Area = ½ab sin C (using two sides and included angle)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Area = ½ab sin C (using two sides and included angle)'
          },
          {
            question: 'In the context of area of triangles, which is accurate?',
            options: [
              'Area = a² sin B sin C / (2 sin A)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Area using Law of Sines: Area = a² sin B sin C / (2 sin A)'
          }
        ]
      }
    },
    {
      id: 'law-o4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Area = ½ab sin C (using two sides and included angle)**
- **Heron's formula**: Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2
- **Area using Law of Sines**: Area = a² sin B sin C / (2 sin A)
- **These formulas work for any triangle, not just right triangles**
      `
    },
    {
      id: 'law-o4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to area of triangles?',
            options: [
              'These formulas work for any triangle, not just right triangles',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'These formulas work for any triangle, not just right triangles'
          }
        ]
      }
    },
    {
      id: 'law-o4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Area = ½ab sin C (using two sides and included angle)',
            options: ['Area = ½ab sin C (using two sides and included ang', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Heron\'s formula',
            options: ['Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Area using Law of Sines',
            options: ['Area = a² sin B sin C / (2 sin A)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Area = ½ab sin C (using two sides and included ang', 'Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'Area = a² sin B sin C / (2 sin A)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Area of Triangles.'
      }
    }
  ]
}
