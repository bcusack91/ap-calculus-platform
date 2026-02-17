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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "sin(A + B) = sin A cos B + cos A sin B" refer to in precalculus?',
            options: [
              'cos(A - B) = cos A cos B + sin A sin B',
              'sin(A + B) = sin A cos B + cos A sin B',
              'sin(A - B) = sin A cos B - cos A sin B',
              'cos(A + B) = cos A cos B - sin A sin B'
            ],
            correctAnswer: 1,
            explanation: 'Correct — sin(A + B) = sin A cos B + cos A sin B. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes cos(A + B) = cos A cos B - sin A sin B:',
            options: [
              'sin(A - B) = sin A cos B - cos A sin B',
              'sin(A + B) = sin A cos B + cos A sin B',
              'cos(A - B) = cos A cos B + sin A sin B',
              'cos(A + B) = cos A cos B - sin A sin B'
            ],
            correctAnswer: 3,
            explanation: 'Correct — cos(A + B) = cos A cos B - sin A sin B. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sin(A + B) = sin A cos B + cos A sin B',
            options: ['cos(A - B) = cos A cos B + sin A sin B', 'cos(A + B) = cos A cos B - sin A sin B', 'sin(A + B) = sin A cos B + cos A sin B', 'sin(A - B) = sin A cos B - cos A sin B']
          },
          {
            label: 'sin(A - B) = sin A cos B - cos A sin B',
            options: ['sin(A - B) = sin A cos B - cos A sin B', 'cos(A - B) = cos A cos B + sin A sin B', 'sin(A + B) = sin A cos B + cos A sin B', 'cos(A + B) = cos A cos B - sin A sin B']
          },
          {
            label: 'cos(A + B) = cos A cos B - sin A sin B',
            options: ['sin(A - B) = sin A cos B - cos A sin B', 'cos(A - B) = cos A cos B + sin A sin B', 'cos(A + B) = cos A cos B - sin A sin B', 'sin(A + B) = sin A cos B + cos A sin B']
          }
        ],
        correctAnswers: ['sin(A + B) = sin A cos B + cos A sin B', 'sin(A - B) = sin A cos B - cos A sin B', 'cos(A + B) = cos A cos B - sin A sin B'],
        hint1: 'Think about what each concept specifically describes in Sum & Difference Formulas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sum & Difference Formulas describes a specific idea. sin(A + B) = sin A cos B + cos A sin B. sin(A - B) = sin A cos B - cos A sin B. cos(A + B) = cos A cos B - sin A sin B.'
      }
    }
  ]
}
