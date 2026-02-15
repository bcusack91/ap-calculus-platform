export const precalcRationalPart1Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio1-intro',
      type: 'text' as const,
      content: `
# 📈 Rational Functions

**Part 1 of 7 — Rational Function Basics**

### 1. Rational function

f(x) = p(x)/q(x) where p and q are polynomials

### 2. Domain

all real numbers except where q(x) = 0

### 3. Simplification

factor and cancel common factors

### 4. Holes occur where common factors cancel

Holes occur where common factors cancel
      `
    },
    {
      id: 'ratio1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of rational function basics?',
            options: [
              'Rational function',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Rational function: f(x) = p(x)/q(x) where p and q are polynomials'
          },
          {
            question: 'In the context of rational function basics, which is accurate?',
            options: [
              'factor and cancel common factors',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Simplification: factor and cancel common factors'
          }
        ]
      }
    },
    {
      id: 'ratio1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Rational function**: f(x) = p(x)/q(x) where p and q are polynomials
- **Domain**: all real numbers except where q(x) = 0
- **Simplification**: factor and cancel common factors
- **Holes occur where common factors cancel**
      `
    },
    {
      id: 'ratio1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to rational function basics?',
            options: [
              'Holes occur where common factors cancel',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Holes occur where common factors cancel'
          }
        ]
      }
    },
    {
      id: 'ratio1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rational function',
            options: ['f(x) = p(x)/q(x) where p and q are polynomials', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Domain',
            options: ['all real numbers except where q(x) = 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Simplification',
            options: ['factor and cancel common factors', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['f(x) = p(x)/q(x) where p and q are polynomials', 'all real numbers except where q(x) = 0', 'factor and cancel common factors'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Rational Function Basics.'
      }
    }
  ]
}
