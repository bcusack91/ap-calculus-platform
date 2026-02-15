export const calcABTablesDataPart3Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table3-intro',
      type: 'text' as const,
      content: `
# Riemann Sums from Tables

**Part 3 of 7 — Riemann Sums from Tables**

### 1. Left Riemann sum

uses left endpoints of each subinterval

### 2. Right Riemann sum

uses right endpoints

### 3. Midpoint sum

uses the midpoint of each subinterval

### 4. Over/underestimates depend on whether f is increasing or decreasing

Over/underestimates depend on whether f is increasing or decreasing
      `
    },
    {
      id: 'table3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of riemann sums from tables?',
            options: [
              'Left Riemann sum',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Left Riemann sum: uses left endpoints of each subinterval'
          },
          {
            question: 'In the context of riemann sums from tables, which is accurate?',
            options: [
              'uses the midpoint of each subinterval',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Midpoint sum: uses the midpoint of each subinterval'
          }
        ]
      }
    },
    {
      id: 'table3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Left Riemann sum**: uses left endpoints of each subinterval
- **Right Riemann sum**: uses right endpoints
- **Midpoint sum**: uses the midpoint of each subinterval
- **Over/underestimates depend on whether f is increasing or decreasing**
      `
    },
    {
      id: 'table3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to riemann sums from tables?',
            options: [
              'Over/underestimates depend on whether f is increasing or decreasing',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Over/underestimates depend on whether f is increasing or decreasing'
          }
        ]
      }
    },
    {
      id: 'table3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Left Riemann sum',
            options: ['uses left endpoints of each subinterval', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Right Riemann sum',
            options: ['uses right endpoints', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Midpoint sum',
            options: ['uses the midpoint of each subinterval', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['uses left endpoints of each subinterval', 'uses right endpoints', 'uses the midpoint of each subinterval'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Riemann Sums from Tables.'
      }
    }
  ]
}
