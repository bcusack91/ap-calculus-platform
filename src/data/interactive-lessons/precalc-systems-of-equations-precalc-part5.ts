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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Graph each inequality by shading the…" refer to in precalculus?',
            options: [
              'The solution set is the intersection of all shaded regions',
              'Use solid lines for non-strict inequalities (≤, ≥)',
              'Use dashed lines for strict inequalities (<, >)',
              'Graph each inequality by shading the correct region'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Graph each inequality by shading the correct region. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Use dashed lines for strict…?',
            options: [
              'Use solid lines for non-strict inequalities (≤, ≥)',
              'Graph each inequality by shading the correct region',
              'The solution set is the intersection of all shaded regions',
              'Use dashed lines for strict inequalities (<, >)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Use dashed lines for strict inequalities (<, >). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Graph each inequality by shading the…',
            options: ['Use solid lines for non-strict inequalities (≤, ≥)', 'Use dashed lines for strict inequalities (<, >)', 'Graph each inequality by shading the correct region', 'The solution set is the intersection of all shaded regions']
          },
          {
            label: 'The solution set is the intersection of…',
            options: ['Graph each inequality by shading the correct region', 'Use dashed lines for strict inequalities (<, >)', 'Use solid lines for non-strict inequalities (≤, ≥)', 'The solution set is the intersection of all shaded regions']
          },
          {
            label: 'Use dashed lines for strict…',
            options: ['Graph each inequality by shading the correct region', 'Use solid lines for non-strict inequalities (≤, ≥)', 'The solution set is the intersection of all shaded regions', 'Use dashed lines for strict inequalities (<, >)']
          }
        ],
        correctAnswers: ['Graph each inequality by shading the correct region', 'The solution set is the intersection of all shaded regions', 'Use dashed lines for strict inequalities (<, >)'],
        hint1: 'Think about what each concept specifically describes in Systems of Inequalities.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Systems of Inequalities describes a specific idea. Graph each inequality by shading the correct region. The solution set is the intersection of all shaded regions. Use dashed lines for strict inequalities (<, >).'
      }
    }
  ]
}
