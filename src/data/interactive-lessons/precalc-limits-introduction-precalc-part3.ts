export const precalcLimitsPart3Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit3-intro',
      type: 'text' as const,
      content: `
# Algebraic Limit Techniques

**Part 3 of 7 — Algebraic Limit Techniques**

### 1. Direct substitution

plug in c if the function is continuous

### 2. Factor and cancel

for 0/0 indeterminate forms

### 3. Rationalize

multiply by conjugate for radical expressions

### 4. Special limits

lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0
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
            question: 'Which of the following correctly describes Direct substitution?',
            options: [
              'multiply by conjugate for radical expressions',
              'for 0/0 indeterminate forms',
              'plug in c if the function is continuous',
              'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Direct substitution: plug in c if the function is continuous. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Algebraic Limit Techniques, which explains Rationalize?',
            options: [
              'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0',
              'for 0/0 indeterminate forms',
              'multiply by conjugate for radical expressions',
              'plug in c if the function is continuous'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Rationalize: multiply by conjugate for radical expressions. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Direct substitution**: plug in c if the function is continuous
- **Factor and cancel**: for 0/0 indeterminate forms
- **Rationalize**: multiply by conjugate for radical expressions
- **Special limits**: lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0
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
            question: 'Which concept relates directly to algebraic limit techniques?',
            options: [
              'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Special limits: lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0'
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
            label: 'Direct substitution',
            options: ['plug in c if the function is continuous', 'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0', 'multiply by conjugate for radical expressions', 'for 0/0 indeterminate forms']
          },
          {
            label: 'Factor and cancel',
            options: ['for 0/0 indeterminate forms', 'plug in c if the function is continuous', 'multiply by conjugate for radical expressions', 'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0']
          },
          {
            label: 'Rationalize',
            options: ['multiply by conjugate for radical expressions', 'lim(x→0) sin(x)/x = 1, lim(x→0) (1-cos(x))/x = 0', 'plug in c if the function is continuous', 'for 0/0 indeterminate forms']
          }
        ],
        correctAnswers: ['plug in c if the function is continuous', 'for 0/0 indeterminate forms', 'multiply by conjugate for radical expressions'],
        hint1: 'Think about what each concept specifically describes in Algebraic Limit Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Algebraic Limit Techniques describes a specific idea. Direct substitution: plug in c if the function is continuous. Factor and cancel: for 0/0 indeterminate forms. Rationalize: multiply by conjugate for radical expressions.'
      }
    }
  ]
}
