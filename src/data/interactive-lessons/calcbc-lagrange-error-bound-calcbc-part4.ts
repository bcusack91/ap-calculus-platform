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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Given a desired accuracy ε, find n such…?',
            options: [
              'M is often 1 or eˣ (easy to bound)',
              'Try increasing values of n until the bound is small enough',
              'The factorial in the denominator grows very fast, so large n usually works',
              'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Finding Sufficient Degree, which explains For eˣ, sin x, cos x?',
            options: [
              'M is often 1 or eˣ (easy to bound)',
              'Try increasing values of n until the bound is small enough',
              'The factorial in the denominator grows very fast, so large n usually works',
              'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε'
            ],
            correctAnswer: 0,
            explanation: 'Correct — For eˣ, sin x, cos x: M is often 1 or eˣ (easy to bound). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about The factorial in the denominator grows… is correct?',
            options: [
              'The factorial in the denominator grows very fast, so large n usually works',
              'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε',
              'M is often 1 or eˣ (easy to bound)',
              'Try increasing values of n until the bound is small enough'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The factorial in the denominator grows very fast, so large n usually works. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Given a desired accuracy ε, find n such…',
            options: ['Try increasing values of n until the bound is small enough', 'The factorial in the denominator grows very fast, so large n usually works', 'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε', 'M is often 1 or eˣ (easy to bound)']
          },
          {
            label: 'Try increasing values of n until the…',
            options: ['Try increasing values of n until the bound is small enough', 'M is often 1 or eˣ (easy to bound)', 'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε', 'The factorial in the denominator grows very fast, so large n usually works']
          },
          {
            label: 'For eˣ, sin x, cos x',
            options: ['The factorial in the denominator grows very fast, so large n usually works', 'Try increasing values of n until the bound is small enough', 'Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε', 'M is often 1 or eˣ (easy to bound)']
          }
        ],
        correctAnswers: ['Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε', 'Try increasing values of n until the bound is small enough', 'M is often 1 or eˣ (easy to bound)'],
        hint1: 'Think about what each concept specifically describes in Finding Sufficient Degree.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Finding Sufficient Degree describes a specific idea. Given a desired accuracy ε, find n such that M|x-a|ⁿ⁺¹/(n+1)! < ε. Try increasing values of n until the bound is small enough. For eˣ, sin x, cos x: M is often 1 or eˣ (easy to bound).'
      }
    }
  ]
}
