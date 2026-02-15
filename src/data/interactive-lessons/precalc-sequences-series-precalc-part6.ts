export const precalcSequencesPart6Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Binomial Theorem

(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k

### 2. C(n,k) = n!/(k!(n-k)!) is the binomial coefficient

C(n,k) = n!/(k!(n-k)!) is the binomial coefficient

### 3. Pascal's Triangle gives binomial coefficients

Pascal's Triangle gives binomial coefficients

### 4. The (k+1)th term is C(n,k) a^(n-k) b^k

The (k+1)th term is C(n,k) a^(n-k) b^k
      `
    },
    {
      id: 'seque6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of problem-solving workshop?',
            options: [
              'Binomial Theorem',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Binomial Theorem: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k'
          },
          {
            question: 'In the context of problem-solving workshop, which is accurate?',
            options: [
              'Pascal\'s Triangle gives binomial coefficients',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Pascal\'s Triangle gives binomial coefficients'
          }
        ]
      }
    },
    {
      id: 'seque6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Binomial Theorem**: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k
- **C(n,k) = n!/(k!(n-k)!) is the binomial coefficient**
- **Pascal's Triangle gives binomial coefficients**
- **The (k+1)th term is C(n,k) a^(n-k) b^k**
      `
    },
    {
      id: 'seque6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'The (k+1)th term is C(n,k) a^(n-k) b^k',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The (k+1)th term is C(n,k) a^(n-k) b^k'
          }
        ]
      }
    },
    {
      id: 'seque6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Binomial Theorem',
            options: ['(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient',
            options: ['C(n,k) = n!/(k!(n-k)!) is the binomial coefficient', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Pascal\'s Triangle gives binomial coefficients',
            options: ['Pascal\'s Triangle gives binomial coefficients', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient', 'Pascal\'s Triangle gives binomial coefficients'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Problem-Solving Workshop.'
      }
    }
  ]
}
