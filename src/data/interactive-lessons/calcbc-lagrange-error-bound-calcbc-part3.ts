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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Step 1?',
            options: [
              'identify f, a, n, and x',
              'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval',
              'evaluate to get the numerical bound'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Step 1: identify f, a, n, and x. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Step 3:',
            options: [
              'evaluate to get the numerical bound',
              'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval',
              'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'identify f, a, n, and x'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Step 3: plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Applying the Error Bound, which correctly describes Step 4?',
            options: [
              'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!',
              'evaluate to get the numerical bound',
              'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval',
              'identify f, a, n, and x'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Step 4: evaluate to get the numerical bound. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'lagra3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Step 1',
            options: ['identify f, a, n, and x', 'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'evaluate to get the numerical bound', 'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval']
          },
          {
            label: 'Step 2',
            options: ['evaluate to get the numerical bound', 'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval', 'identify f, a, n, and x']
          },
          {
            label: 'Step 3',
            options: ['identify f, a, n, and x', 'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!', 'evaluate to get the numerical bound', 'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval']
          }
        ],
        correctAnswers: ['identify f, a, n, and x', 'find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval', 'plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!'],
        hint1: 'Think about what each concept specifically describes in Applying the Error Bound.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Applying the Error Bound describes a specific idea. Step 1: identify f, a, n, and x. Step 2: find f⁽ⁿ⁺¹⁾ and bound its absolute value by M on the interval. Step 3: plug into |Rₙ(x)| ≤ M|x-a|ⁿ⁺¹/(n+1)!.'
      }
    }
  ]
}
