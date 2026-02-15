export const calcABAreaCurvesPart4Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-4-intro',
      type: 'text' as const,
      content: `
# Determining Top & Bottom Functions

**Part 4 of 7 — Determining Top & Bottom Functions**

### 1. Graph the functions or evaluate at test points to determine which is on top

Graph the functions or evaluate at test points to determine which is on top

### 2. The "top" and "bottom" functions can switch at intersection points

The "top" and "bottom" functions can switch at intersection points

### 3. Split the integral at each intersection where functions cross

Split the integral at each intersection where functions cross

### 4. Always subtract the lower function from the upper function in each sub-interval

Always subtract the lower function from the upper function in each sub-interval
      `
    },
    {
      id: 'area-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of determining top & bottom functions?',
            options: [
              'Graph the functions or evaluate at test points to determine which is on top',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Graph the functions or evaluate at test points to determine which is on top'
          },
          {
            question: 'In the context of determining top & bottom functions, which is accurate?',
            options: [
              'Split the integral at each intersection where functions cross',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Split the integral at each intersection where functions cross'
          }
        ]
      }
    },
    {
      id: 'area-4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Graph the functions or evaluate at test points to determine which is on top**
- **The "top" and "bottom" functions can switch at intersection points**
- **Split the integral at each intersection where functions cross**
- **Always subtract the lower function from the upper function in each sub-interval**
      `
    },
    {
      id: 'area-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to determining top & bottom functions?',
            options: [
              'Always subtract the lower function from the upper function in each sub-interval',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Always subtract the lower function from the upper function in each sub-interval'
          }
        ]
      }
    },
    {
      id: 'area-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Graph the functions or evaluate at test points to determine which is on top',
            options: ['Graph the functions or evaluate at test points to ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The "top" and "bottom" functions can switch at intersection points',
            options: ['The "top" and "bottom" functions can switch at int', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Split the integral at each intersection where functions cross',
            options: ['Split the integral at each intersection where func', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Graph the functions or evaluate at test points to ', 'The "top" and "bottom" functions can switch at int', 'Split the integral at each intersection where func'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Determining Top & Bottom Functions.'
      }
    }
  ]
}
