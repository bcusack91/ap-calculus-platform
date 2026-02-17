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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Area = ½ab sin C (using two sides and…" refer to in precalculus?',
            options: [
              'Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2',
              'These formulas work for any triangle, not just right triangles',
              'Area = ½ab sin C (using two sides and included angle)',
              'Area = a² sin B sin C / (2 sin A)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area = ½ab sin C (using two sides and included angle). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Area using Law of Sines?',
            options: [
              'Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2',
              'Area = ½ab sin C (using two sides and included angle)',
              'Area = a² sin B sin C / (2 sin A)',
              'These formulas work for any triangle, not just right triangles'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area using Law of Sines: Area = a² sin B sin C / (2 sin A). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Heron\'s formula',
            options: ['Area = a² sin B sin C / (2 sin A)', 'Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'These formulas work for any triangle, not just right triangles', 'Area = ½ab sin C (using two sides and included angle)']
          },
          {
            label: 'Area using Law of Sines',
            options: ['These formulas work for any triangle, not just right triangles', 'Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'Area = ½ab sin C (using two sides and included angle)', 'Area = a² sin B sin C / (2 sin A)']
          }
        ],
        correctAnswers: ['Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2', 'Area = a² sin B sin C / (2 sin A)'],
        hint1: 'Think about what each concept specifically describes in Area of Triangles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Area of Triangles describes a specific idea. Heron\'s formula: Area = √(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2. Area using Law of Sines: Area = a² sin B sin C / (2 sin A).'
      }
    }
  ]
}
