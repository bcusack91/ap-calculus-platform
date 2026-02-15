export const calcABAreaCurvesPart6Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Find all intersection points by setting f(x) = g(x)

Find all intersection points by setting f(x) = g(x)

### 2. Create separate integrals for each region between consecutive intersection points

Create separate integrals for each region between consecutive intersection points

### 3. Sum the areas of all regions (each area is positive)

Sum the areas of all regions (each area is positive)

### 4. Watch for functions that intersect more than twice

Watch for functions that intersect more than twice
      `
    },
    {
      id: 'area-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Find all intersection points by setting f(x) = g(x)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Find all intersection points by setting f(x) = g(x)'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Sum the areas of all regions (each area is positive)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sum the areas of all regions (each area is positive)'
          }
        ]
      }
    },
    {
      id: 'area-6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Find all intersection points by setting f(x) = g(x)**
- **Create separate integrals for each region between consecutive intersection points**
- **Sum the areas of all regions (each area is positive)**
- **Watch for functions that intersect more than twice**
      `
    },
    {
      id: 'area-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'Watch for functions that intersect more than twice',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Watch for functions that intersect more than twice'
          }
        ]
      }
    },
    {
      id: 'area-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find all intersection points by setting f(x) = g(x)',
            options: ['Find all intersection points by setting f(x) = g(x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Create separate integrals for each region between consecutive intersection points',
            options: ['Create separate integrals for each region between ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Sum the areas of all regions (each area is positive)',
            options: ['Sum the areas of all regions (each area is positiv', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Find all intersection points by setting f(x) = g(x', 'Create separate integrals for each region between ', 'Sum the areas of all regions (each area is positiv'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
