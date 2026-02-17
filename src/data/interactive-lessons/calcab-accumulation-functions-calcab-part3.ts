export const calcABAccumulationPart3Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum3-intro',
      type: 'text' as const,
      content: `
# Interpreting Accumulation

**Part 3 of 7 — Interpreting Accumulation**

### 1. If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity

If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity

### 2. F'(x) = f(x) means the rate of accumulation equals the integrand

F'(x) = f(x) means the rate of accumulation equals the integrand

### 3. Extrema of F correspond to zeros of f (where accumulation rate changes sign)

Extrema of F correspond to zeros of f (where accumulation rate changes sign)

### 4. Graph of f determines behavior of F

positive f → F increasing
      `
    },
    {
      id: 'accum3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains If f(t) represents a rate, ∫ₐˣ f(t)dt…?',
            options: [
              'Extrema of F correspond to zeros of f (where accumulation rate changes sign)',
              'F\'(x) = f(x) means the rate of accumulation equals the integrand',
              'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity',
              'positive f → F increasing'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Interpreting Accumulation, which explains Extrema of F correspond to zeros of f…?',
            options: [
              'Extrema of F correspond to zeros of f (where accumulation rate changes sign)',
              'positive f → F increasing',
              'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity',
              'F\'(x) = f(x) means the rate of accumulation equals the integrand'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Extrema of F correspond to zeros of f (where accumulation rate changes sign). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'accum3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity**
- **F'(x) = f(x) means the rate of accumulation equals the integrand**
- **Extrema of F correspond to zeros of f (where accumulation rate changes sign)**
- **Graph of f determines behavior of F**: positive f → F increasing
      `
    },
    {
      id: 'accum3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Graph of f determines behavior of F?',
            options: [
              'Extrema of F correspond to zeros of f (where accumulation rate changes sign)',
              'F\'(x) = f(x) means the rate of accumulation equals the integrand',
              'positive f → F increasing',
              'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Graph of f determines behavior of F: positive f → F increasing. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f(t) represents a rate, ∫ₐˣ f(t)dt…',
            options: ['F\'(x) = f(x) means the rate of accumulation equals the integrand', 'positive f → F increasing', 'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity', 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)']
          },
          {
            label: 'F\'(x) = f(x) means the rate of…',
            options: ['Extrema of F correspond to zeros of f (where accumulation rate changes sign)', 'F\'(x) = f(x) means the rate of accumulation equals the integrand', 'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity', 'positive f → F increasing']
          },
          {
            label: 'Extrema of F correspond to zeros of f…',
            options: ['F\'(x) = f(x) means the rate of accumulation equals the integrand', 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)', 'If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity', 'positive f → F increasing']
          }
        ],
        correctAnswers: ['If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity', 'F\'(x) = f(x) means the rate of accumulation equals the integrand', 'Extrema of F correspond to zeros of f (where accumulation rate changes sign)'],
        hint1: 'Think about what each concept specifically describes in Interpreting Accumulation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpreting Accumulation describes a specific idea. If f(t) represents a rate, ∫ₐˣ f(t)dt gives total accumulated quantity. F\'(x) = f(x) means the rate of accumulation equals the integrand. Extrema of F correspond to zeros of f (where accumulation rate changes sign).'
      }
    }
  ]
}
