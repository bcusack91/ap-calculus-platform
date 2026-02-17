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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "f is continuous at x = c if" refer to in precalculus?',
            options: [
              'Polynomials are continuous everywhere',
              'Rational functions are continuous except where the denominator is zero',
              '(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)',
              'you can draw the graph without lifting your pencil'
            ],
            correctAnswer: 2,
            explanation: 'Correct — f is continuous at x = c if: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Polynomials are continuous everywhere?',
            options: [
              'Rational functions are continuous except where the denominator is zero',
              'you can draw the graph without lifting your pencil',
              '(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)',
              'Polynomials are continuous everywhere'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Polynomials are continuous everywhere. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f is continuous at x = c if',
            options: ['Rational functions are continuous except where the denominator is zero', 'you can draw the graph without lifting your pencil', '(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)', 'Polynomials are continuous everywhere']
          },
          {
            label: 'Intuition',
            options: ['(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)', 'Polynomials are continuous everywhere', 'Rational functions are continuous except where the denominator is zero', 'you can draw the graph without lifting your pencil']
          }
        ],
        correctAnswers: ['(1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c)', 'you can draw the graph without lifting your pencil'],
        hint1: 'Think about what each concept specifically describes in Continuity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Continuity describes a specific idea. f is continuous at x = c if: (1) f(c) is defined, (2) lim(x→c) f(x) exists, (3) lim(x→c) f(x) = f(c). Intuition: you can draw the graph without lifting your pencil.'
      }
    }
  ]
}
