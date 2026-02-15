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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of algebraic limit techniques?',
            options: [
              'Direct substitution',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Direct substitution: plug in c if the function is continuous'
          },
          {
            question: 'In the context of algebraic limit techniques, which is accurate?',
            options: [
              'multiply by conjugate for radical expressions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Rationalize: multiply by conjugate for radical expressions'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Direct substitution',
            options: ['plug in c if the function is continuous', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Factor and cancel',
            options: ['for 0/0 indeterminate forms', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Rationalize',
            options: ['multiply by conjugate for radical expressions', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['plug in c if the function is continuous', 'for 0/0 indeterminate forms', 'multiply by conjugate for radical expressions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Algebraic Limit Techniques.'
      }
    }
  ]
}
