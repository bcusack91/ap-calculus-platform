export const calcBCPowerSeriesPart3Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'power3-intro',
      type: 'text' as const,
      content: `
# Finding the Radius

**Part 3 of 7 — Finding the Radius**

### 1. Use the Ratio Test

L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1

### 2. Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|

Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|

### 3. Or use R = 1/lim|cₙ₊₁/cₙ|

Or use R = 1/lim|cₙ₊₁/cₙ|

### 4. Root test can also be used

R = 1/lim|cₙ|^(1/n)
      `
    },
    {
      id: 'power3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of finding the radius?',
            options: [
              'Use the Ratio Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Use the Ratio Test: L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1'
          },
          {
            question: 'In the context of finding the radius, which is accurate?',
            options: [
              'Or use R = 1/lim|cₙ₊₁/cₙ|',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Or use R = 1/lim|cₙ₊₁/cₙ|'
          }
        ]
      }
    },
    {
      id: 'power3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Use the Ratio Test**: L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1
- **Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|**
- **Or use R = 1/lim|cₙ₊₁/cₙ|**
- **Root test can also be used**: R = 1/lim|cₙ|^(1/n)
      `
    },
    {
      id: 'power3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to finding the radius?',
            options: [
              'R = 1/lim|cₙ|^(1/n)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Root test can also be used: R = 1/lim|cₙ|^(1/n)'
          }
        ]
      }
    },
    {
      id: 'power3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use the Ratio Test',
            options: ['L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|',
            options: ['Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Or use R = 1/lim|cₙ₊₁/cₙ|',
            options: ['Or use R = 1/lim|cₙ₊₁/cₙ|', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|', 'Or use R = 1/lim|cₙ₊₁/cₙ|'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Finding the Radius.'
      }
    }
  ]
}
