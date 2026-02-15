export const calcBCLagrangePart4Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra4-intro',
      type: 'text' as const,
      content: `
# Finding Sufficient Degree

**Part 4 of 7 — Finding Sufficient Degree**

### 1. Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε

Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε

### 2. Try increasing values of n until the bound is small enough

Try increasing values of n until the bound is small enough

### 3. For eˣ, sin x, cos x

M is often 1 or eˣ (easy to bound)

### 4. The factorial in the denominator grows very fast, so large n usually works

The factorial in the denominator grows very fast, so large n usually works
      `
    },
    {
      id: 'lagra4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of finding sufficient degree?',
            options: [
              'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε'
          },
          {
            question: 'In the context of finding sufficient degree, which is accurate?',
            options: [
              'M is often 1 or eˣ (easy to bound)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'For eˣ, sin x, cos x: M is often 1 or eˣ (easy to bound)'
          }
        ]
      }
    },
    {
      id: 'lagra4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε**
- **Try increasing values of n until the bound is small enough**
- **For eˣ, sin x, cos x**: M is often 1 or eˣ (easy to bound)
- **The factorial in the denominator grows very fast, so large n usually works**
      `
    },
    {
      id: 'lagra4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to finding sufficient degree?',
            options: [
              'The factorial in the denominator grows very fast, so large n usually works',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The factorial in the denominator grows very fast, so large n usually works'
          }
        ]
      }
    },
    {
      id: 'lagra4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε',
            options: ['Given a desired accuracy ε, find n such that M|x-a', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Try increasing values of n until the bound is small enough',
            options: ['Try increasing values of n until the bound is smal', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'For eˣ, sin x, cos x',
            options: ['M is often 1 or eˣ (easy to bound)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Given a desired accuracy ε, find n such that M|x-a', 'Try increasing values of n until the bound is smal', 'M is often 1 or eˣ (easy to bound)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Finding Sufficient Degree.'
      }
    }
  ]
}
