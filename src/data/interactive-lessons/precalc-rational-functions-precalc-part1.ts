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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Rational function" refer to in precalculus?',
            options: [
              'all real numbers except where q(x) = 0',
              'factor and cancel common factors',
              'f(x) = p(x)/q(x) where p and q are polynomials',
              'Holes occur where common factors cancel'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Rational function: f(x) = p(x)/q(x) where p and q are polynomials. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Rational Functions, which explains Simplification?',
            options: [
              'all real numbers except where q(x) = 0',
              'f(x) = p(x)/q(x) where p and q are polynomials',
              'Holes occur where common factors cancel',
              'factor and cancel common factors'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Simplification: factor and cancel common factors. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Rational function',
            options: ['all real numbers except where q(x) = 0', 'Holes occur where common factors cancel', 'f(x) = p(x)/q(x) where p and q are polynomials', 'factor and cancel common factors']
          },
          {
            label: 'Domain',
            options: ['factor and cancel common factors', 'all real numbers except where q(x) = 0', 'Holes occur where common factors cancel', 'f(x) = p(x)/q(x) where p and q are polynomials']
          },
          {
            label: 'Simplification',
            options: ['f(x) = p(x)/q(x) where p and q are polynomials', 'factor and cancel common factors', 'all real numbers except where q(x) = 0', 'Holes occur where common factors cancel']
          }
        ],
        correctAnswers: ['f(x) = p(x)/q(x) where p and q are polynomials', 'all real numbers except where q(x) = 0', 'factor and cancel common factors'],
        hint1: 'Think about what each concept specifically describes in Rational Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rational Functions describes a specific idea. Rational function: f(x) = p(x)/q(x) where p and q are polynomials. Domain: all real numbers except where q(x) = 0. Simplification: factor and cancel common factors.'
      }
    }
  ]
}
