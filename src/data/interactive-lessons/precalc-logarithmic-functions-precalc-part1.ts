export const precalcLogarithmicPart1Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar1-intro',
      type: 'text' as const,
      content: `
# 📈 Logarithmic Functions

**Part 1 of 7 — Logarithm Basics**

### 1. log_b(x) = y means b^y = x

log_b(x) = y means b^y = x

### 2. Logarithm is the inverse of the exponential function

Logarithm is the inverse of the exponential function

### 3. Domain

(0, ∞); Range: all real numbers

### 4. The graph of y = log_b(x) passes through (1, 0) and (b, 1)

The graph of y = log_b(x) passes through (1, 0) and (b, 1)
      `
    },
    {
      id: 'logar1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains log_b(x) = y means b^y = x?',
            options: [
              'The graph of y = log_b(x) passes through (1, 0) and (b, 1)',
              'log_b(x) = y means b^y = x',
              'Logarithm is the inverse of the exponential function',
              '(0, ∞); Range: all real numbers'
            ],
            correctAnswer: 1,
            explanation: 'Correct — log_b(x) = y means b^y = x. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Domain?',
            options: [
              'log_b(x) = y means b^y = x',
              'The graph of y = log_b(x) passes through (1, 0) and (b, 1)',
              'Logarithm is the inverse of the exponential function',
              '(0, ∞); Range: all real numbers'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Domain: (0, ∞); Range: all real numbers. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logar1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **log_b(x) = y means b^y = x**
- **Logarithm is the inverse of the exponential function**
- **Domain**: (0, ∞); Range: all real numbers
- **The graph of y = log_b(x) passes through (1, 0) and (b, 1)**
      `
    },
    {
      id: 'logar1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logarithm basics?',
            options: [
              'The graph of y = log_b(x) passes through (1, 0) and (b, 1)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The graph of y = log_b(x) passes through (1, 0) and (b, 1)'
          }
        ]
      }
    },
    {
      id: 'logar1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'log_b(x) = y means b^y = x',
            options: ['Logarithm is the inverse of the exponential function', '(0, ∞); Range: all real numbers', 'The graph of y = log_b(x) passes through (1, 0) and (b, 1)', 'log_b(x) = y means b^y = x']
          },
          {
            label: 'Logarithm is the inverse of the…',
            options: ['(0, ∞); Range: all real numbers', 'log_b(x) = y means b^y = x', 'Logarithm is the inverse of the exponential function', 'The graph of y = log_b(x) passes through (1, 0) and (b, 1)']
          },
          {
            label: 'Domain',
            options: ['Logarithm is the inverse of the exponential function', '(0, ∞); Range: all real numbers', 'The graph of y = log_b(x) passes through (1, 0) and (b, 1)', 'log_b(x) = y means b^y = x']
          }
        ],
        correctAnswers: ['log_b(x) = y means b^y = x', 'Logarithm is the inverse of the exponential function', '(0, ∞); Range: all real numbers'],
        hint1: 'Think about what each concept specifically describes in Logarithmic Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logarithmic Functions describes a specific idea. log_b(x) = y means b^y = x. Logarithm is the inverse of the exponential function. Domain: (0, ∞); Range: all real numbers.'
      }
    }
  ]
}
