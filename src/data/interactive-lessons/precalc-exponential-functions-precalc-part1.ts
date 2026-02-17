export const precalcExponentialPart1Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential Functions

**Part 1 of 7 — Exponential Growth & Decay**

### 1. Exponential function

f(x) = a · bˣ where b > 0, b ≠ 1

### 2. b > 1

exponential growth; 0 < b < 1: exponential decay

### 3. Growth factor b = 1 + rate for growth, b = 1 - rate for decay

Growth factor b = 1 + rate for growth, b = 1 - rate for decay

### 4. The y-intercept of f(x) = a · bˣ is the point (0, a)

The y-intercept of f(x) = a · bˣ is the point (0, a)
      `
    },
    {
      id: 'expon1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Exponential function?',
            options: [
              'The y-intercept of f(x) = a · bˣ is the point (0, a)',
              'f(x) = a · bˣ where b > 0, b ≠ 1',
              'Growth factor b = 1 + rate for growth, b = 1 - rate for decay',
              'exponential growth; 0 < b < 1: exponential decay'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Exponential function: f(x) = a · bˣ where b > 0, b ≠ 1. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Exponential Functions, which explains Growth factor b = 1 + rate for growth,…?',
            options: [
              'Growth factor b = 1 + rate for growth, b = 1 - rate for decay',
              'The y-intercept of f(x) = a · bˣ is the point (0, a)',
              'f(x) = a · bˣ where b > 0, b ≠ 1',
              'exponential growth; 0 < b < 1: exponential decay'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Growth factor b = 1 + rate for growth, b = 1 - rate for decay. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Exponential function**: f(x) = a · bˣ where b > 0, b ≠ 1
- **b > 1**: exponential growth; 0 < b < 1: exponential decay
- **Growth factor b = 1 + rate for growth, b = 1 - rate for decay**
- **The y-intercept of f(x) = a · bˣ is the point (0, a)**
      `
    },
    {
      id: 'expon1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential growth & decay?',
            options: [
              'The y-intercept of f(x) = a · bˣ is the point (0, a)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'The y-intercept of f(x) = a · bˣ is the point (0, a)'
          }
        ]
      }
    },
    {
      id: 'expon1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Exponential function',
            options: ['The y-intercept of f(x) = a · bˣ is the point (0, a)', 'Growth factor b = 1 + rate for growth, b = 1 - rate for decay', 'exponential growth; 0 < b < 1: exponential decay', 'f(x) = a · bˣ where b > 0, b ≠ 1']
          },
          {
            label: 'b > 1',
            options: ['Growth factor b = 1 + rate for growth, b = 1 - rate for decay', 'The y-intercept of f(x) = a · bˣ is the point (0, a)', 'exponential growth; 0 < b < 1: exponential decay', 'f(x) = a · bˣ where b > 0, b ≠ 1']
          }
        ],
        correctAnswers: ['f(x) = a · bˣ where b > 0, b ≠ 1', 'exponential growth; 0 < b < 1: exponential decay'],
        hint1: 'Think about what each concept specifically describes in Exponential Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Functions describes a specific idea. Exponential function: f(x) = a · bˣ where b > 0, b ≠ 1. b > 1: exponential growth; 0 < b < 1: exponential decay.'
      }
    }
  ]
}
