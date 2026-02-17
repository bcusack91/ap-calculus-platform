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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Use the Ratio Test?',
            options: [
              'Or use R = 1/lim|cₙ₊₁/cₙ|',
              'L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1',
              'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|',
              'R = 1/lim|cₙ|^(1/n)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use the Ratio Test: L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Or use R = 1/lim|cₙ₊₁/cₙ|?',
            options: [
              'R = 1/lim|cₙ|^(1/n)',
              'L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1',
              'Or use R = 1/lim|cₙ₊₁/cₙ|',
              'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Or use R = 1/lim|cₙ₊₁/cₙ|. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Finding the Radius, which correctly describes Root test can also be used?',
            options: [
              'R = 1/lim|cₙ|^(1/n)',
              'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|',
              'L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1',
              'Or use R = 1/lim|cₙ₊₁/cₙ|'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Root test can also be used: R = 1/lim|cₙ|^(1/n). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'power3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Use the Ratio Test',
            options: ['Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|', 'R = 1/lim|cₙ|^(1/n)', 'L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'Or use R = 1/lim|cₙ₊₁/cₙ|']
          },
          {
            label: 'Root test can also be used',
            options: ['R = 1/lim|cₙ|^(1/n)', 'L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'Solve for |x-a| < R where R = lim|cₙ/cₙ₊₁|', 'Or use R = 1/lim|cₙ₊₁/cₙ|']
          }
        ],
        correctAnswers: ['L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1', 'R = 1/lim|cₙ|^(1/n)'],
        hint1: 'Think about what each concept specifically describes in Finding the Radius.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Finding the Radius describes a specific idea. Use the Ratio Test: L = lim|cₙ₊₁(x-a)ⁿ⁺¹/(cₙ(x-a)ⁿ)| < 1. Root test can also be used: R = 1/lim|cₙ|^(1/n).'
      }
    }
  ]
}
