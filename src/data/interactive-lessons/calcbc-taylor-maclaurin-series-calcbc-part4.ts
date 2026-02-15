export const calcBCTaylorMaclaurinPart4Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'taylo4-intro',
      type: 'text' as const,
      content: `
# Taylor Polynomials

**Part 4 of 7 — Taylor Polynomials**

### 1. Taylor polynomial Pₙ(x)

the first n+1 terms of the Taylor series

### 2. P₁(x) = f(a) + f'(a)(x-a) is the linearization

P₁(x) = f(a) + f'(a)(x-a) is the linearization

### 3. Higher-degree polynomials give better approximations near a

Higher-degree polynomials give better approximations near a

### 4. The polynomial "wraps around" the function near the center

The polynomial "wraps around" the function near the center
      `
    },
    {
      id: 'taylo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of taylor polynomials?',
            options: [
              'Taylor polynomial Pₙ(x)',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Taylor polynomial Pₙ(x): the first n+1 terms of the Taylor series'
          },
          {
            question: 'In the context of taylor polynomials, which is accurate?',
            options: [
              'Higher-degree polynomials give better approximations near a',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Higher-degree polynomials give better approximations near a'
          }
        ]
      }
    },
    {
      id: 'taylo4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Taylor polynomial Pₙ(x)**: the first n+1 terms of the Taylor series
- **P₁(x) = f(a) + f'(a)(x-a) is the linearization**
- **Higher-degree polynomials give better approximations near a**
- **The polynomial "wraps around" the function near the center**
      `
    },
    {
      id: 'taylo4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to taylor polynomials?',
            options: [
              'The polynomial "wraps around" the function near the center',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The polynomial "wraps around" the function near the center'
          }
        ]
      }
    },
    {
      id: 'taylo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor polynomial Pₙ(x)',
            options: ['the first n+1 terms of the Taylor series', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization',
            options: ['P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Higher-degree polynomials give better approximations near a',
            options: ['Higher-degree polynomials give better approximatio', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['the first n+1 terms of the Taylor series', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'Higher-degree polynomials give better approximatio'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Taylor Polynomials.'
      }
    }
  ]
}
