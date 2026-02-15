export const precalcContinuityPart1Data = {
  topicSlug: 'continuity-precalc',
  sections: [
    {
      id: 'conti1-intro',
      type: 'text' as const,
      content: `
# 📈 Continuity

**Part 1 of 7 — Definition of Continuity**

### 1. f is continuous at x = c if

(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)

### 2. Intuition

you can draw the graph without lifting your pencil

### 3. Polynomials are continuous everywhere

Polynomials are continuous everywhere

### 4. Rational functions are continuous except where the denominator is zero

Rational functions are continuous except where the denominator is zero
      `
    },
    {
      id: 'conti1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of definition of continuity?',
            options: [
              'f is continuous at x = c if',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'f is continuous at x = c if: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)'
          },
          {
            question: 'In the context of definition of continuity, which is accurate?',
            options: [
              'Polynomials are continuous everywhere',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Polynomials are continuous everywhere'
          }
        ]
      }
    },
    {
      id: 'conti1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f is continuous at x = c if**: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)
- **Intuition**: you can draw the graph without lifting your pencil
- **Polynomials are continuous everywhere**
- **Rational functions are continuous except where the denominator is zero**
      `
    },
    {
      id: 'conti1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to definition of continuity?',
            options: [
              'Rational functions are continuous except where the denominator is zero',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Rational functions are continuous except where the denominator is zero'
          }
        ]
      }
    },
    {
      id: 'conti1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f is continuous at x = c if',
            options: ['(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Intuition',
            options: ['you can draw the graph without lifting your pencil', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Polynomials are continuous everywhere',
            options: ['Polynomials are continuous everywhere', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3)', 'you can draw the graph without lifting your pencil', 'Polynomials are continuous everywhere'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Definition of Continuity.'
      }
    }
  ]
}
