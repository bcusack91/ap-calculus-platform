export const calcBCLagrangePart3Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'lagra3-intro',
      type: 'text' as const,
      content: `
# Applying the Error Bound

**Part 3 of 7 — Applying the Error Bound**

### 1. Step 1

identify f, a, n, and x

### 2. Step 2

find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval

### 3. Step 3

plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!

### 4. Step 4

evaluate to get the numerical bound
      `
    },
    {
      id: 'lagra3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of applying the error bound?',
            options: [
              'Step 1',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Step 1: identify f, a, n, and x'
          },
          {
            question: 'In the context of applying the error bound, which is accurate?',
            options: [
              'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 3: plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!'
          }
        ]
      }
    },
    {
      id: 'lagra3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Step 1**: identify f, a, n, and x
- **Step 2**: find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval
- **Step 3**: plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!
- **Step 4**: evaluate to get the numerical bound
      `
    },
    {
      id: 'lagra3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to applying the error bound?',
            options: [
              'evaluate to get the numerical bound',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Step 4: evaluate to get the numerical bound'
          }
        ]
      }
    },
    {
      id: 'lagra3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Step 1',
            options: ['identify f, a, n, and x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Step 2',
            options: ['find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Step 3',
            options: ['plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['identify f, a, n, and x', 'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on t', 'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Applying the Error Bound.'
      }
    }
  ]
}
