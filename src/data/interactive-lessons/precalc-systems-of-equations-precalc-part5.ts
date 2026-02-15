export const precalcSystemsPart5Data = {
  topicSlug: 'systems-of-equations-precalc',
  sections: [
    {
      id: 'syste5-intro',
      type: 'text' as const,
      content: `
# Systems of Inequalities

**Part 5 of 7 — Systems of Inequalities**

### 1. Graph each inequality by shading the correct region

Graph each inequality by shading the correct region

### 2. The solution set is the intersection of all shaded regions

The solution set is the intersection of all shaded regions

### 3. Use dashed lines for strict inequalities (<, >)

Use dashed lines for strict inequalities (<, >)

### 4. Use solid lines for non-strict inequalities (≤, ≥)

Use solid lines for non-strict inequalities (≤, ≥)
      `
    },
    {
      id: 'syste5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of systems of inequalities?',
            options: [
              'Graph each inequality by shading the correct region',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Graph each inequality by shading the correct region'
          },
          {
            question: 'In the context of systems of inequalities, which is accurate?',
            options: [
              'Use dashed lines for strict inequalities (<, >)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use dashed lines for strict inequalities (<, >)'
          }
        ]
      }
    },
    {
      id: 'syste5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Graph each inequality by shading the correct region**
- **The solution set is the intersection of all shaded regions**
- **Use dashed lines for strict inequalities (<, >)**
- **Use solid lines for non-strict inequalities (≤, ≥)**
      `
    },
    {
      id: 'syste5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to systems of inequalities?',
            options: [
              'Use solid lines for non-strict inequalities (≤, ≥)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Use solid lines for non-strict inequalities (≤, ≥)'
          }
        ]
      }
    },
    {
      id: 'syste5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Graph each inequality by shading the correct region',
            options: ['Graph each inequality by shading the correct regio', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'The solution set is the intersection of all shaded regions',
            options: ['The solution set is the intersection of all shaded', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Use dashed lines for strict inequalities (<, >)',
            options: ['Use dashed lines for strict inequalities (<, >)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Graph each inequality by shading the correct regio', 'The solution set is the intersection of all shaded', 'Use dashed lines for strict inequalities (<, >)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Systems of Inequalities.'
      }
    }
  ]
}
