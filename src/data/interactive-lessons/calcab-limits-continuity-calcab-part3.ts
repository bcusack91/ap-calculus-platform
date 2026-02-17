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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Direct substitution works for…?',
            options: [
              'Direct substitution works for continuous functions',
              'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L',
              'factor, rationalize, or simplify',
              'lim(x→0) sin(x)/x = 1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Direct substitution works for continuous functions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Special limit?',
            options: [
              'factor, rationalize, or simplify',
              'Direct substitution works for continuous functions',
              'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L',
              'lim(x→0) sin(x)/x = 1'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Special limit: lim(x→0) sin(x)/x = 1. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Evaluating Limits Algebraically, which correctly describes Squeeze Theorem?',
            options: [
              'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L',
              'Direct substitution works for continuous functions',
              'factor, rationalize, or simplify',
              'lim(x→0) sin(x)/x = 1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'limit3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For 0/0 indeterminate form',
            options: ['factor, rationalize, or simplify', 'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L', 'Direct substitution works for continuous functions', 'lim(x→0) sin(x)/x = 1']
          },
          {
            label: 'Special limit',
            options: ['if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L', 'factor, rationalize, or simplify', 'Direct substitution works for continuous functions', 'lim(x→0) sin(x)/x = 1']
          },
          {
            label: 'Squeeze Theorem',
            options: ['if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L', 'factor, rationalize, or simplify', 'lim(x→0) sin(x)/x = 1', 'Direct substitution works for continuous functions']
          }
        ],
        correctAnswers: ['factor, rationalize, or simplify', 'lim(x→0) sin(x)/x = 1', 'if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L'],
        hint1: 'Think about what each concept specifically describes in Evaluating Limits Algebraically.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evaluating Limits Algebraically describes a specific idea. For 0/0 indeterminate form: factor, rationalize, or simplify. Special limit: lim(x→0) sin(x)/x = 1. Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L.'
      }
    }
  ]
}
