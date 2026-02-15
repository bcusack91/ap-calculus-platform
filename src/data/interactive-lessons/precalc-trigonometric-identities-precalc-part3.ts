export const precalcTrigIdentitiesPart3Data = {
  topicSlug: 'trigonometric-identities-precalc',
  sections: [
    {
      id: 'trigo3-intro',
      type: 'text' as const,
      content: `
# Sum & Difference Formulas

**Part 3 of 7 — Sum & Difference Formulas**

### 1. sin(A + B) = sin A cos B + cos A sin B

sin(A + B) = sin A cos B + cos A sin B

### 2. sin(A - B) = sin A cos B - cos A sin B

sin(A - B) = sin A cos B - cos A sin B

### 3. cos(A + B) = cos A cos B - sin A sin B

cos(A + B) = cos A cos B - sin A sin B

### 4. cos(A - B) = cos A cos B + sin A sin B

cos(A - B) = cos A cos B + sin A sin B
      `
    },
    {
      id: 'trigo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sum & difference formulas?',
            options: [
              'sin(A + B) = sin A cos B + cos A sin B',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'sin(A + B) = sin A cos B + cos A sin B'
          },
          {
            question: 'In the context of sum & difference formulas, which is accurate?',
            options: [
              'cos(A + B) = cos A cos B - sin A sin B',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'cos(A + B) = cos A cos B - sin A sin B'
          }
        ]
      }
    },
    {
      id: 'trigo3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **sin(A + B) = sin A cos B + cos A sin B**
- **sin(A - B) = sin A cos B - cos A sin B**
- **cos(A + B) = cos A cos B - sin A sin B**
- **cos(A - B) = cos A cos B + sin A sin B**
      `
    },
    {
      id: 'trigo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sum & difference formulas?',
            options: [
              'cos(A - B) = cos A cos B + sin A sin B',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'cos(A - B) = cos A cos B + sin A sin B'
          }
        ]
      }
    },
    {
      id: 'trigo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin(A + B) = sin A cos B + cos A sin B',
            options: ['sin(A + B) = sin A cos B + cos A sin B', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'sin(A - B) = sin A cos B - cos A sin B',
            options: ['sin(A - B) = sin A cos B - cos A sin B', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'cos(A + B) = cos A cos B - sin A sin B',
            options: ['cos(A + B) = cos A cos B - sin A sin B', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['sin(A + B) = sin A cos B + cos A sin B', 'sin(A - B) = sin A cos B - cos A sin B', 'cos(A + B) = cos A cos B - sin A sin B'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Sum & Difference Formulas.'
      }
    }
  ]
}
