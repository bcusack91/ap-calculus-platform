export const precalcSequencesPart7Data = {
  topicSlug: 'sequences-series-precalc',
  sections: [
    {
      id: 'seque7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'seque7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Binomial Theorem?',
            options: [
              '(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k',
              'Pascal\'s Triangle gives binomial coefficients',
              'The (k+1)th term is C(n,k) a^(n-k) b^k',
              'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Binomial Theorem: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Pascal\'s Triangle gives binomial…:',
            options: [
              'The (k+1)th term is C(n,k) a^(n-k) b^k',
              '(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k',
              'Pascal\'s Triangle gives binomial coefficients',
              'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Pascal\'s Triangle gives binomial coefficients. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'seque7-detail',
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
      id: 'seque7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'seque7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Binomial Theorem',
            options: ['Pascal\'s Triangle gives binomial coefficients', 'The (k+1)th term is C(n,k) a^(n-k) b^k', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient', '(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k']
          },
          {
            label: 'C(n,k) = n!/(k!(n-k)!) is the binomial…',
            options: ['The (k+1)th term is C(n,k) a^(n-k) b^k', '(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'Pascal\'s Triangle gives binomial coefficients', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient']
          },
          {
            label: 'Pascal\'s Triangle gives binomial…',
            options: ['Pascal\'s Triangle gives binomial coefficients', 'The (k+1)th term is C(n,k) a^(n-k) b^k', '(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient']
          }
        ],
        correctAnswers: ['(a + b)ⁿ = Σ C(n,k) a^(n-k) b^k', 'C(n,k) = n!/(k!(n-k)!) is the binomial coefficient', 'Pascal\'s Triangle gives binomial coefficients'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Binomial Theorem: (a + b)ⁿ = Σ C(n,k) a^(n-k) b^k. C(n,k) = n!/(k!(n-k)!) is the binomial coefficient. Pascal\'s Triangle gives binomial coefficients.'
      }
    }
  ]
}
