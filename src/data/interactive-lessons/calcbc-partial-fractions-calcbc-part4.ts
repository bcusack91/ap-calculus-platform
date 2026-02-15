export const calcBCPartialFractionsPart4Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti4-intro',
      type: 'text' as const,
      content: `
# Irreducible Quadratic Factors

**Part 4 of 7 — Irreducible Quadratic Factors**

### 1. For irreducible quadratic ax²+bx+c (b²-4ac < 0)

For irreducible quadratic ax²+bx+c (b²-4ac < 0)

### 2. Include

(Ax+B)/(ax²+bx+c) for each irreducible quadratic factor

### 3. The numerator has degree one less than the quadratic

The numerator has degree one less than the quadratic

### 4. If repeated

add (Cx+D)/(ax²+bx+c)² etc.
      `
    },
    {
      id: 'parti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of irreducible quadratic factors?',
            options: [
              'For irreducible quadratic ax²+bx+c (b²-4ac < 0)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For irreducible quadratic ax²+bx+c (b²-4ac < 0)'
          },
          {
            question: 'In the context of irreducible quadratic factors, which is accurate?',
            options: [
              'The numerator has degree one less than the quadratic',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The numerator has degree one less than the quadratic'
          }
        ]
      }
    },
    {
      id: 'parti4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For irreducible quadratic ax²+bx+c (b²-4ac < 0)**
- **Include**: (Ax+B)/(ax²+bx+c) for each irreducible quadratic factor
- **The numerator has degree one less than the quadratic**
- **If repeated**: add (Cx+D)/(ax²+bx+c)² etc.
      `
    },
    {
      id: 'parti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to irreducible quadratic factors?',
            options: [
              'add (Cx+D)/(ax²+bx+c)² etc.',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'If repeated: add (Cx+D)/(ax²+bx+c)² etc.'
          }
        ]
      }
    },
    {
      id: 'parti4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For irreducible quadratic ax²+bx+c (b²-4ac < 0)',
            options: ['For irreducible quadratic ax²+bx+c (b²-4ac < 0)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Include',
            options: ['(Ax+B)/(ax²+bx+c) for each irreducible quadratic f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The numerator has degree one less than the quadratic',
            options: ['The numerator has degree one less than the quadrat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['For irreducible quadratic ax²+bx+c (b²-4ac < 0)', '(Ax+B)/(ax²+bx+c) for each irreducible quadratic f', 'The numerator has degree one less than the quadrat'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Irreducible Quadratic Factors.'
      }
    }
  ]
}
