export const calcABBasicDiffPart4Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic4-intro',
      type: 'text' as const,
      content: `
# Quotient Rule

**Part 4 of 7 — Quotient Rule**

### 1. Quotient Rule

d/dx[f/g] = (f'g - fg')/g²

### 2. Low d-high minus high d-low, over the square of what's below

Low d-high minus high d-low, over the square of what's below

### 3. Can also write as

d/dx[f/g] = (gf' - fg')/g²

### 4. Alternative

rewrite f/g = f·g⁻¹ and use product rule with power rule
      `
    },
    {
      id: 'basic4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of quotient rule?',
            options: [
              'Quotient Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Quotient Rule: d/dx[f/g] = (f\'g - fg\')/g²'
          },
          {
            question: 'In the context of quotient rule, which is accurate?',
            options: [
              'd/dx[f/g] = (gf\' - fg\')/g²',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Can also write as: d/dx[f/g] = (gf\' - fg\')/g²'
          }
        ]
      }
    },
    {
      id: 'basic4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Quotient Rule**: d/dx[f/g] = (f'g - fg')/g²
- **Low d-high minus high d-low, over the square of what's below**
- **Can also write as**: d/dx[f/g] = (gf' - fg')/g²
- **Alternative**: rewrite f/g = f·g⁻¹ and use product rule with power rule
      `
    },
    {
      id: 'basic4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to quotient rule?',
            options: [
              'rewrite f/g = f·g⁻¹ and use product rule with power rule',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Alternative: rewrite f/g = f·g⁻¹ and use product rule with power rule'
          }
        ]
      }
    },
    {
      id: 'basic4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Quotient Rule',
            options: ['d/dx[f/g] = (f\'g - fg\')/g²', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Low d-high minus high d-low, over the square of what\'s below',
            options: ['Low d-high minus high d-low, over the square of wh', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Can also write as',
            options: ['d/dx[f/g] = (gf\' - fg\')/g²', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[f/g] = (f\'g - fg\')/g²', 'Low d-high minus high d-low, over the square of wh', 'd/dx[f/g] = (gf\' - fg\')/g²'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Quotient Rule.'
      }
    }
  ]
}
