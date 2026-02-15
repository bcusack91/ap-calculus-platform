export const calcABLimitsContinuityPart3Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit3-intro',
      type: 'text' as const,
      content: `
# Evaluating Limits Algebraically

**Part 3 of 7 — Evaluating Limits Algebraically**

### 1. Direct substitution works for continuous functions

Direct substitution works for continuous functions

### 2. For 0/0 indeterminate form

factor, rationalize, or simplify

### 3. Special limit

lim(x→0) sin(x)/x = 1

### 4. Squeeze Theorem

if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L
      `
    },
    {
      id: 'limit3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of evaluating limits algebraically?',
            options: [
              'Direct substitution works for continuous functions',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Direct substitution works for continuous functions'
          },
          {
            question: 'In the context of evaluating limits algebraically, which is accurate?',
            options: [
              'lim(x→0) sin(x)/x = 1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Special limit: lim(x→0) sin(x)/x = 1'
          }
        ]
      }
    },
    {
      id: 'limit3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Direct substitution works for continuous functions**
- **For 0/0 indeterminate form**: factor, rationalize, or simplify
- **Special limit**: lim(x→0) sin(x)/x = 1
- **Squeeze Theorem**: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L
      `
    },
    {
      id: 'limit3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to evaluating limits algebraically?',
            options: [
              'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L'
          }
        ]
      }
    },
    {
      id: 'limit3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct substitution works for continuous functions',
            options: ['Direct substitution works for continuous functions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'For 0/0 indeterminate form',
            options: ['factor, rationalize, or simplify', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Special limit',
            options: ['lim(x→0) sin(x)/x = 1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Direct substitution works for continuous functions', 'factor, rationalize, or simplify', 'lim(x→0) sin(x)/x = 1'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Evaluating Limits Algebraically.'
      }
    }
  ]
}
