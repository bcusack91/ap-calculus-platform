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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of definite integrals with u-sub?',
            options: [
              'Option 1',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Option 1: change bounds to u-values: when x = a, u = g(a)'
          },
          {
            question: 'In the context of definite integrals with u-sub, which is accurate?',
            options: [
              'Changing bounds is often cleaner — no need to back-substitute',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Changing bounds is often cleaner — no need to back-substitute'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to definite integrals with u-sub?',
            options: [
              'Don\'t mix x-bounds with u-integrand (or vice versa)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Don\'t mix x-bounds with u-integrand (or vice versa)'
          }
        ]
      }
    },
    {
      id: 'u-sub3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Option 1',
            options: ['change bounds to u-values: when x = a, u = g(a)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Option 2',
            options: ['integrate in u, back-substitute, then use original', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Changing bounds is often cleaner — no need to back-substitute',
            options: ['Changing bounds is often cleaner — no need to back', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['change bounds to u-values: when x = a, u = g(a)', 'integrate in u, back-substitute, then use original', 'Changing bounds is often cleaner — no need to back'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Definite Integrals with u-Sub.'
      }
    }
  ]
}
