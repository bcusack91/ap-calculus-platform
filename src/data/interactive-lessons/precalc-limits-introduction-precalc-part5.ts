export const precalcLimitsPart5Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit5-intro',
      type: 'text' as const,
      content: `
# Limits at Infinity

**Part 5 of 7 — Limits at Infinity**

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
      id: 'limit5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of limits at infinity?',
            options: [
              'lim(x→∞)',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'lim(x→∞): behavior as x grows without bound'
          },
          {
            question: 'In the context of limits at infinity, which is accurate?',
            options: [
              'limit = ratio of leading coefficients',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Same degree: limit = ratio of leading coefficients'
          }
        ]
      }
    },
    {
      id: 'limit5-detail',
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
      id: 'limit5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to limits at infinity?',
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
      id: 'limit5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'lim(x→∞)',
            options: ['behavior as x grows without bound', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'For rational functions',
            options: ['compare degrees of numerator and denominator', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Same degree',
            options: ['limit = ratio of leading coefficients', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['behavior as x grows without bound', 'compare degrees of numerator and denominator', 'limit = ratio of leading coefficients'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Limits at Infinity.'
      }
    }
  ]
}
