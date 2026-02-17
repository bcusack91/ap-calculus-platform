export const calcABLimitsContinuityPart4Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `
# Continuity

**Part 4 of 7 — Continuity**

### 1. f is continuous at c if

f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)

### 2. Polynomials are continuous everywhere

Polynomials are continuous everywhere

### 3. Removable discontinuity

the limit exists but doesn't equal f(c)

### 4. Jump and infinite discontinuities are non-removable

Jump and infinite discontinuities are non-removable
      `
    },
    {
      id: 'limit4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains f is continuous at c if?',
            options: [
              'the limit exists but doesn\'t equal f(c)',
              'Polynomials are continuous everywhere',
              'Jump and infinite discontinuities are non-removable',
              'f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — f is continuous at c if: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Removable discontinuity?',
            options: [
              'Polynomials are continuous everywhere',
              'Jump and infinite discontinuities are non-removable',
              'f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)',
              'the limit exists but doesn\'t equal f(c)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Removable discontinuity: the limit exists but doesn\'t equal f(c). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f is continuous at c if**: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)
- **Polynomials are continuous everywhere**
- **Removable discontinuity**: the limit exists but doesn't equal f(c)
- **Jump and infinite discontinuities are non-removable**
      `
    },
    {
      id: 'limit4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Jump and infinite discontinuities are… is correct?',
            options: [
              'f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)',
              'Polynomials are continuous everywhere',
              'the limit exists but doesn\'t equal f(c)',
              'Jump and infinite discontinuities are non-removable'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Jump and infinite discontinuities are non-removable. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f is continuous at c if',
            options: ['the limit exists but doesn\'t equal f(c)', 'Jump and infinite discontinuities are non-removable', 'Polynomials are continuous everywhere', 'f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)']
          },
          {
            label: 'Removable discontinuity',
            options: ['Jump and infinite discontinuities are non-removable', 'the limit exists but doesn\'t equal f(c)', 'Polynomials are continuous everywhere', 'f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)']
          }
        ],
        correctAnswers: ['f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c)', 'the limit exists but doesn\'t equal f(c)'],
        hint1: 'Think about what each concept specifically describes in Continuity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Continuity describes a specific idea. f is continuous at c if: f(c) is defined, lim(x→c) f(x) exists, and lim(x→c) f(x) = f(c). Removable discontinuity: the limit exists but doesn\'t equal f(c).'
      }
    }
  ]
}
