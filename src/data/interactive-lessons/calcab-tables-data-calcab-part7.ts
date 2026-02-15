export const calcABTablesDataPart7Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Always include units in your answer

Always include units in your answer

### 2. State what the computed quantity represents in context

State what the computed quantity represents in context

### 3. Explain whether an approximation is an over- or underestimate

Explain whether an approximation is an over- or underestimate

### 4. "Since f is decreasing, the right Riemann sum is an underestimate"

"Since f is decreasing, the right Riemann sum is an underestimate"
      `
    },
    {
      id: 'table7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Always include units in your answer',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Always include units in your answer'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'Explain whether an approximation is an over- or underestimate',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Explain whether an approximation is an over- or underestimate'
          }
        ]
      }
    },
    {
      id: 'table7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Always include units in your answer**
- **State what the computed quantity represents in context**
- **Explain whether an approximation is an over- or underestimate**
- **"Since f is decreasing, the right Riemann sum is an underestimate"**
      `
    },
    {
      id: 'table7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: '"Since f is decreasing, the right Riemann sum is an underestimate"'
          }
        ]
      }
    },
    {
      id: 'table7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Always include units in your answer',
            options: ['Always include units in your answer', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'State what the computed quantity represents in context',
            options: ['State what the computed quantity represents in con', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Explain whether an approximation is an over- or underestimate',
            options: ['Explain whether an approximation is an over- or un', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Always include units in your answer', 'State what the computed quantity represents in con', 'Explain whether an approximation is an over- or un'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
