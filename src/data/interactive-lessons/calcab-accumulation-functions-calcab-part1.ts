export const calcABAccumulationPart1Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'accum1-intro',
      type: 'text' as const,
      content: `
# ∫ Accumulation Functions

**Part 1 of 7 — Accumulation Functions**

### 1. F(x) = ∫ₐˣ f(t)dt is an accumulation function

F(x) = ∫ₐˣ f(t)dt is an accumulation function

### 2. F(x) accumulates the net signed area from a to x

F(x) accumulates the net signed area from a to x

### 3. F(a) = 0 (no accumulation at the starting point)

F(a) = 0 (no accumulation at the starting point)

### 4. F is increasing where f > 0, decreasing where f < 0

F is increasing where f > 0, decreasing where f < 0
      `
    },
    {
      id: 'accum1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains F(x) = ∫ₐˣ f(t)dt is an accumulation…?',
            options: [
              'F(a) = 0 (no accumulation at the starting point)',
              'F(x) = ∫ₐˣ f(t)dt is an accumulation function',
              'F(x) accumulates the net signed area from a to x',
              'F is increasing where f > 0, decreasing where f < 0'
            ],
            correctAnswer: 1,
            explanation: 'Correct — F(x) = ∫ₐˣ f(t)dt is an accumulation function. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about F(a) = 0 (no accumulation at the…?',
            options: [
              'F(x) accumulates the net signed area from a to x',
              'F(a) = 0 (no accumulation at the starting point)',
              'F is increasing where f > 0, decreasing where f < 0',
              'F(x) = ∫ₐˣ f(t)dt is an accumulation function'
            ],
            correctAnswer: 1,
            explanation: 'Correct — F(a) = 0 (no accumulation at the starting point). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'accum1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **F(x) = ∫ₐˣ f(t)dt is an accumulation function**
- **F(x) accumulates the net signed area from a to x**
- **F(a) = 0 (no accumulation at the starting point)**
- **F is increasing where f > 0, decreasing where f < 0**
      `
    },
    {
      id: 'accum1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about F is increasing where f > 0, decreasing… is correct?',
            options: [
              'F(x) = ∫ₐˣ f(t)dt is an accumulation function',
              'F(x) accumulates the net signed area from a to x',
              'F(a) = 0 (no accumulation at the starting point)',
              'F is increasing where f > 0, decreasing where f < 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — F is increasing where f > 0, decreasing where f < 0. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'accum1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'F(x) = ∫ₐˣ f(t)dt is an accumulation…',
            options: ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F(x) accumulates the net signed area from a to x', 'F(a) = 0 (no accumulation at the starting point)', 'F is increasing where f > 0, decreasing where f < 0']
          },
          {
            label: 'F(x) accumulates the net signed area…',
            options: ['F(a) = 0 (no accumulation at the starting point)', 'F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F is increasing where f > 0, decreasing where f < 0', 'F(x) accumulates the net signed area from a to x']
          },
          {
            label: 'F(a) = 0 (no accumulation at the…',
            options: ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F(x) accumulates the net signed area from a to x', 'F is increasing where f > 0, decreasing where f < 0', 'F(a) = 0 (no accumulation at the starting point)']
          }
        ],
        correctAnswers: ['F(x) = ∫ₐˣ f(t)dt is an accumulation function', 'F(x) accumulates the net signed area from a to x', 'F(a) = 0 (no accumulation at the starting point)'],
        hint1: 'Think about what each concept specifically describes in Accumulation Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Accumulation Functions describes a specific idea. F(x) = ∫ₐˣ f(t)dt is an accumulation function. F(x) accumulates the net signed area from a to x. F(a) = 0 (no accumulation at the starting point).'
      }
    }
  ]
}
