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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Taylor polynomial Pₙ(x)?',
            options: [
              'Higher-degree polynomials give better approximations near a',
              'the first n+1 terms of the Taylor series',
              'The polynomial "wraps around" the function near the center',
              'P₁(x) = f(a) + f\'(a)(x-a) is the linearization'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Taylor polynomial Pₙ(x): the first n+1 terms of the Taylor series. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Higher-degree polynomials give better…?',
            options: [
              'The polynomial "wraps around" the function near the center',
              'the first n+1 terms of the Taylor series',
              'Higher-degree polynomials give better approximations near a',
              'P₁(x) = f(a) + f\'(a)(x-a) is the linearization'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Higher-degree polynomials give better approximations near a. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about The polynomial "wraps around" the… is correct?',
            options: [
              'the first n+1 terms of the Taylor series',
              'The polynomial "wraps around" the function near the center',
              'P₁(x) = f(a) + f\'(a)(x-a) is the linearization',
              'Higher-degree polynomials give better approximations near a'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The polynomial "wraps around" the function near the center. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'taylo4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Taylor polynomial Pₙ(x)',
            options: ['The polynomial "wraps around" the function near the center', 'Higher-degree polynomials give better approximations near a', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'the first n+1 terms of the Taylor series']
          },
          {
            label: 'P₁(x) = f(a) + f\'(a)(x-a) is the…',
            options: ['the first n+1 terms of the Taylor series', 'Higher-degree polynomials give better approximations near a', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'The polynomial "wraps around" the function near the center']
          },
          {
            label: 'Higher-degree polynomials give better…',
            options: ['Higher-degree polynomials give better approximations near a', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'The polynomial "wraps around" the function near the center', 'the first n+1 terms of the Taylor series']
          }
        ],
        correctAnswers: ['the first n+1 terms of the Taylor series', 'P₁(x) = f(a) + f\'(a)(x-a) is the linearization', 'Higher-degree polynomials give better approximations near a'],
        hint1: 'Think about what each concept specifically describes in Taylor Polynomials.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Taylor Polynomials describes a specific idea. Taylor polynomial Pₙ(x): the first n+1 terms of the Taylor series. P₁(x) = f(a) + f\'(a)(x-a) is the linearization. Higher-degree polynomials give better approximations near a.'
      }
    }
  ]
}
