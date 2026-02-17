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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Left Riemann sum" refer to in calculus?',
            options: [
              'uses left endpoints of each subinterval',
              'uses the midpoint of each subinterval',
              'uses right endpoints',
              'Over/underestimates depend on whether f is increasing or decreasing'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Left Riemann sum: uses left endpoints of each subinterval. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Midpoint sum:',
            options: [
              'uses the midpoint of each subinterval',
              'Over/underestimates depend on whether f is increasing or decreasing',
              'uses right endpoints',
              'uses left endpoints of each subinterval'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Midpoint sum: uses the midpoint of each subinterval. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Over/underestimates depend on whether f…?',
            options: [
              'uses left endpoints of each subinterval',
              'uses right endpoints',
              'Over/underestimates depend on whether f is increasing or decreasing',
              'uses the midpoint of each subinterval'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Over/underestimates depend on whether f is increasing or decreasing. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Left Riemann sum',
            options: ['uses left endpoints of each subinterval', 'uses the midpoint of each subinterval', 'Over/underestimates depend on whether f is increasing or decreasing', 'uses right endpoints']
          },
          {
            label: 'Right Riemann sum',
            options: ['uses the midpoint of each subinterval', 'uses left endpoints of each subinterval', 'uses right endpoints', 'Over/underestimates depend on whether f is increasing or decreasing']
          },
          {
            label: 'Midpoint sum',
            options: ['Over/underestimates depend on whether f is increasing or decreasing', 'uses left endpoints of each subinterval', 'uses the midpoint of each subinterval', 'uses right endpoints']
          }
        ],
        correctAnswers: ['uses left endpoints of each subinterval', 'uses right endpoints', 'uses the midpoint of each subinterval'],
        hint1: 'Think about what each concept specifically describes in Riemann Sums from Tables.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Riemann Sums from Tables describes a specific idea. Left Riemann sum: uses left endpoints of each subinterval. Right Riemann sum: uses right endpoints. Midpoint sum: uses the midpoint of each subinterval.'
      }
    }
  ]
}
