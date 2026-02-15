export const calcABTheoremsPart2Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor2-intro',
      type: 'text' as const,
      content: `
# Mean Value Theorem Applications

**Part 2 of 7 — Mean Value Theorem Applications**

### 1. MVT

f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)

### 2. Interpretation

at some point the instantaneous rate equals the average rate

### 3. If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph

If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph

### 4. Rolle's

if f(a) = f(b), then f'(c) = 0 for some c in (a,b)
      `
    },
    {
      id: 'theor2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of mean value theorem applications?',
            options: [
              'MVT',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'MVT: f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)'
          },
          {
            question: 'In the context of mean value theorem applications, which is accurate?',
            options: [
              'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph'
          }
        ]
      }
    },
    {
      id: 'theor2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **MVT**: f'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)
- **Interpretation**: at some point the instantaneous rate equals the average rate
- **If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph**
- **Rolle's**: if f(a) = f(b), then f'(c) = 0 for some c in (a,b)
      `
    },
    {
      id: 'theor2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to mean value theorem applications?',
            options: [
              'if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Rolle\'s: if f(a) = f(b), then f\'(c) = 0 for some c in (a,b)'
          }
        ]
      }
    },
    {
      id: 'theor2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'MVT',
            options: ['f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Interpretation',
            options: ['at some point the instantaneous rate equals the av', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If a car travels 60 miles in 1 hour, at some moment it was going exactly 60 mph',
            options: ['If a car travels 60 miles in 1 hour, at some momen', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f\'(c) = [f(b)-f(a)]/(b-a) for some c in (a,b)', 'at some point the instantaneous rate equals the av', 'If a car travels 60 miles in 1 hour, at some momen'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Mean Value Theorem Applications.'
      }
    }
  ]
}
