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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of logarithm basics?',
            options: [
              'log_b(x) = y means b^y = x',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'log_b(x) = y means b^y = x'
          },
          {
            question: 'In the context of logarithm basics, which is accurate?',
            options: [
              '(0, ∞); Range: all real numbers',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Domain: (0, ∞); Range: all real numbers'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'log_b(x) = y means b^y = x',
            options: ['log_b(x) = y means b^y = x', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Logarithm is the inverse of the exponential function',
            options: ['Logarithm is the inverse of the exponential functi', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Domain',
            options: ['(0, ∞); Range: all real numbers', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['log_b(x) = y means b^y = x', 'Logarithm is the inverse of the exponential functi', '(0, ∞); Range: all real numbers'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Logarithm Basics.'
      }
    }
  ]
}
