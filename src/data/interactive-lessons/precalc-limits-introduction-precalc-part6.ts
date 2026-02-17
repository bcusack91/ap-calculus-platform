export const precalcLimitsPart6Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. lim(x→∞)

behavior as x grows without bound

### 2. For rational functions

compare degrees of numerator and denominator

### 3. Same degree

limit = ratio of leading coefficients

### 4. Numerator degree < denominator degree

limit = 0; greater: limit = ±∞
      `
    },
    {
      id: 'limit6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes lim(x→∞)?',
            options: [
              'limit = ratio of leading coefficients',
              'compare degrees of numerator and denominator',
              'behavior as x grows without bound',
              'limit = 0; greater: limit = ±∞'
            ],
            correctAnswer: 2,
            explanation: 'Correct — lim(x→∞): behavior as x grows without bound. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Same degree?',
            options: [
              'limit = ratio of leading coefficients',
              'limit = 0; greater: limit = ±∞',
              'behavior as x grows without bound',
              'compare degrees of numerator and denominator'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Same degree: limit = ratio of leading coefficients. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **lim(x→∞)**: behavior as x grows without bound
- **For rational functions**: compare degrees of numerator and denominator
- **Same degree**: limit = ratio of leading coefficients
- **Numerator degree < denominator degree**: limit = 0; greater: limit = ±∞
      `
    },
    {
      id: 'limit6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to problem-solving workshop?',
            options: [
              'limit = 0; greater: limit = ±∞',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Numerator degree < denominator degree: limit = 0; greater: limit = ±∞'
          }
        ]
      }
    },
    {
      id: 'limit6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'lim(x→∞)',
            options: ['limit = ratio of leading coefficients', 'behavior as x grows without bound', 'compare degrees of numerator and denominator', 'limit = 0; greater: limit = ±∞']
          },
          {
            label: 'For rational functions',
            options: ['compare degrees of numerator and denominator', 'limit = ratio of leading coefficients', 'limit = 0; greater: limit = ±∞', 'behavior as x grows without bound']
          },
          {
            label: 'Same degree',
            options: ['compare degrees of numerator and denominator', 'limit = 0; greater: limit = ±∞', 'behavior as x grows without bound', 'limit = ratio of leading coefficients']
          }
        ],
        correctAnswers: ['behavior as x grows without bound', 'compare degrees of numerator and denominator', 'limit = ratio of leading coefficients'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. lim(x→∞): behavior as x grows without bound. For rational functions: compare degrees of numerator and denominator. Same degree: limit = ratio of leading coefficients.'
      }
    }
  ]
}
