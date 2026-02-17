export const calcABUSubPart3Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub3-intro',
      type: 'text' as const,
      content: `
# Definite Integrals with u-Sub

**Part 3 of 7 — Definite Integrals with u-Sub**

### 1. Option 1

change bounds to u-values: when x = a, u = g(a)

### 2. Option 2

integrate in u, back-substitute, then use original x-bounds

### 3. Changing bounds is often cleaner — no need to back-substitute

Changing bounds is often cleaner — no need to back-substitute

### 4. Don't mix x-bounds with u-integrand (or vice versa)

Don't mix x-bounds with u-integrand (or vice versa)
      `
    },
    {
      id: 'u-sub3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Option 1?',
            options: [
              'change bounds to u-values: when x = a, u = g(a)',
              'integrate in u, back-substitute, then use original x-bounds',
              'Changing bounds is often cleaner — no need to back-substitute',
              'Don\'t mix x-bounds with u-integrand (or vice versa)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Option 1: change bounds to u-values: when x = a, u = g(a). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Definite Integrals with u-Sub, which explains Changing bounds is often cleaner — no…?',
            options: [
              'Changing bounds is often cleaner — no need to back-substitute',
              'Don\'t mix x-bounds with u-integrand (or vice versa)',
              'integrate in u, back-substitute, then use original x-bounds',
              'change bounds to u-values: when x = a, u = g(a)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Changing bounds is often cleaner — no need to back-substitute. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'u-sub3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Option 1**: change bounds to u-values: when x = a, u = g(a)
- **Option 2**: integrate in u, back-substitute, then use original x-bounds
- **Changing bounds is often cleaner — no need to back-substitute**
- **Don't mix x-bounds with u-integrand (or vice versa)**
      `
    },
    {
      id: 'u-sub3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Definite Integrals with u-Sub, which correctly describes Don\'t mix x-bounds with u-integrand (or…?',
            options: [
              'Changing bounds is often cleaner — no need to back-substitute',
              'integrate in u, back-substitute, then use original x-bounds',
              'change bounds to u-values: when x = a, u = g(a)',
              'Don\'t mix x-bounds with u-integrand (or vice versa)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Don\'t mix x-bounds with u-integrand (or vice versa). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'u-sub3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Option 1',
            options: ['change bounds to u-values: when x = a, u = g(a)', 'Changing bounds is often cleaner — no need to back-substitute', 'Don\'t mix x-bounds with u-integrand (or vice versa)', 'integrate in u, back-substitute, then use original x-bounds']
          },
          {
            label: 'Option 2',
            options: ['Don\'t mix x-bounds with u-integrand (or vice versa)', 'change bounds to u-values: when x = a, u = g(a)', 'integrate in u, back-substitute, then use original x-bounds', 'Changing bounds is often cleaner — no need to back-substitute']
          }
        ],
        correctAnswers: ['change bounds to u-values: when x = a, u = g(a)', 'integrate in u, back-substitute, then use original x-bounds'],
        hint1: 'Think about what each concept specifically describes in Definite Integrals with u-Sub.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Definite Integrals with u-Sub describes a specific idea. Option 1: change bounds to u-values: when x = a, u = g(a). Option 2: integrate in u, back-substitute, then use original x-bounds.'
      }
    }
  ]
}
