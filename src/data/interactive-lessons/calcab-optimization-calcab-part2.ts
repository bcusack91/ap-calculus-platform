export const calcABOptimizationPart2Data = {
  topicSlug: 'optimization-calcab',
  sections: [
    {
      id: 'optim2-intro',
      type: 'text' as const,
      content: `
# Setting Up Optimization Problems

**Part 2 of 7 — Setting Up Optimization Problems**

### 1. Write the quantity to optimize as a function of one variable

Write the quantity to optimize as a function of one variable

### 2. Use the constraint to eliminate one variable

Use the constraint to eliminate one variable

### 3. Determine the domain (often a closed interval)

Determine the domain (often a closed interval)

### 4. Draw a picture and label all relevant quantities

Draw a picture and label all relevant quantities
      `
    },
    {
      id: 'optim2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of setting up optimization problems?',
            options: [
              'Write the quantity to optimize as a function of one variable',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Write the quantity to optimize as a function of one variable'
          },
          {
            question: 'In the context of setting up optimization problems, which is accurate?',
            options: [
              'Determine the domain (often a closed interval)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Determine the domain (often a closed interval)'
          }
        ]
      }
    },
    {
      id: 'optim2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Write the quantity to optimize as a function of one variable**
- **Use the constraint to eliminate one variable**
- **Determine the domain (often a closed interval)**
- **Draw a picture and label all relevant quantities**
      `
    },
    {
      id: 'optim2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to setting up optimization problems?',
            options: [
              'Draw a picture and label all relevant quantities',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Draw a picture and label all relevant quantities'
          }
        ]
      }
    },
    {
      id: 'optim2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Write the quantity to optimize as a function of one variable',
            options: ['Write the quantity to optimize as a function of on', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use the constraint to eliminate one variable',
            options: ['Use the constraint to eliminate one variable', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Determine the domain (often a closed interval)',
            options: ['Determine the domain (often a closed interval)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Write the quantity to optimize as a function of on', 'Use the constraint to eliminate one variable', 'Determine the domain (often a closed interval)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Setting Up Optimization Problems.'
      }
    }
  ]
}
