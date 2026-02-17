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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains A limit describes the value a function…?',
            options: [
              'A limit can exist even when f(c) is undefined or different from L',
              'A limit describes the value a function approaches as x approaches a specific value',
              'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c',
              'Limits are the foundation of all calculus concepts'
            ],
            correctAnswer: 1,
            explanation: 'Correct — A limit describes the value a function approaches as x approaches a specific value. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about A limit can exist even when f(c) is…?',
            options: [
              'A limit can exist even when f(c) is undefined or different from L',
              'A limit describes the value a function approaches as x approaches a specific value',
              'Limits are the foundation of all calculus concepts',
              'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c'
            ],
            correctAnswer: 0,
            explanation: 'Correct — A limit can exist even when f(c) is undefined or different from L. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Limits are the foundation of all… is correct?',
            options: [
              'A limit describes the value a function approaches as x approaches a specific value',
              'A limit can exist even when f(c) is undefined or different from L',
              'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c',
              'Limits are the foundation of all calculus concepts'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limits are the foundation of all calculus concepts. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A limit describes the value a function…',
            options: ['Limits are the foundation of all calculus concepts', 'A limit can exist even when f(c) is undefined or different from L', 'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c', 'A limit describes the value a function approaches as x approaches a specific value']
          },
          {
            label: 'lim(x→c) f(x) = L means f(x) gets…',
            options: ['Limits are the foundation of all calculus concepts', 'A limit can exist even when f(c) is undefined or different from L', 'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c', 'A limit describes the value a function approaches as x approaches a specific value']
          },
          {
            label: 'A limit can exist even when f(c) is…',
            options: ['lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c', 'A limit can exist even when f(c) is undefined or different from L', 'A limit describes the value a function approaches as x approaches a specific value', 'Limits are the foundation of all calculus concepts']
          }
        ],
        correctAnswers: ['A limit describes the value a function approaches as x approaches a specific value', 'lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c', 'A limit can exist even when f(c) is undefined or different from L'],
        hint1: 'Think about what each concept specifically describes in Limits Continuity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Limits Continuity describes a specific idea. A limit describes the value a function approaches as x approaches a specific value. lim(x→c) f(x) = L means f(x) gets arbitrarily close to L as x → c. A limit can exist even when f(c) is undefined or different from L.'
      }
    }
  ]
}
