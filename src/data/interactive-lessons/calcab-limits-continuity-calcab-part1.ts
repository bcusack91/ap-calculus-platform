export const calcABLimitsContinuityPart1Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit1-intro',
      type: 'text' as const,
      content: `
# ∫ Limits Continuity

**Part 1 of 7 — Understanding Limits**

### 1. A limit describes the value a function approaches as x approaches a specific value

A limit describes the value a function approaches as x approaches a specific value

### 2. lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c

lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c

### 3. A limit can exist even when f(c) is undefined or different from L

A limit can exist even when f(c) is undefined or different from L

### 4. Limits are the foundation of all calculus concepts

Limits are the foundation of all calculus concepts
      `
    },
    {
      id: 'limit1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of understanding limits?',
            options: [
              'A limit describes the value a function approaches as x approaches a specific value',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'A limit describes the value a function approaches as x approaches a specific value'
          },
          {
            question: 'In the context of understanding limits, which is accurate?',
            options: [
              'A limit can exist even when f(c) is undefined or different from L',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'A limit can exist even when f(c) is undefined or different from L'
          }
        ]
      }
    },
    {
      id: 'limit1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **A limit describes the value a function approaches as x approaches a specific value**
- **lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c**
- **A limit can exist even when f(c) is undefined or different from L**
- **Limits are the foundation of all calculus concepts**
      `
    },
    {
      id: 'limit1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to understanding limits?',
            options: [
              'Limits are the foundation of all calculus concepts',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Limits are the foundation of all calculus concepts'
          }
        ]
      }
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A limit describes the value a function approaches as x approaches a specific value',
            options: ['A limit describes the value a function approaches ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c',
            options: ['lim(x→c) f(x) = L means f(x) gets arbitrarily clos', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'A limit can exist even when f(c) is undefined or different from L',
            options: ['A limit can exist even when f(c) is undefined or d', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['A limit describes the value a function approaches ', 'lim(x→c) f(x) = L means f(x) gets arbitrarily clos', 'A limit can exist even when f(c) is undefined or d'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Understanding Limits.'
      }
    }
  ]
}
