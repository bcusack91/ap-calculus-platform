export const calcABExamReviewPart4Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex4-intro',
      type: 'text' as const,
      content: `
# Integrals Review

**Part 4 of 7 — Integrals Review**

### 1. Fundamental Theorem of Calculus (Parts 1 and 2)

Fundamental Theorem of Calculus (Parts 1 and 2)

### 2. u-substitution for definite and indefinite integrals

u-substitution for definite and indefinite integrals

### 3. Properties of integrals

linearity, additivity, comparison

### 4. Basic antiderivative formulas and techniques

Basic antiderivative formulas and techniques
      `
    },
    {
      id: 'ap-ex4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integrals review?',
            options: [
              'Fundamental Theorem of Calculus (Parts 1 and 2)',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Fundamental Theorem of Calculus (Parts 1 and 2)'
          },
          {
            question: 'In the context of integrals review, which is accurate?',
            options: [
              'linearity, additivity, comparison',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Properties of integrals: linearity, additivity, comparison'
          }
        ]
      }
    },
    {
      id: 'ap-ex4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Fundamental Theorem of Calculus (Parts 1 and 2)**
- **u-substitution for definite and indefinite integrals**
- **Properties of integrals**: linearity, additivity, comparison
- **Basic antiderivative formulas and techniques**
      `
    },
    {
      id: 'ap-ex4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integrals review?',
            options: [
              'Basic antiderivative formulas and techniques',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Basic antiderivative formulas and techniques'
          }
        ]
      }
    },
    {
      id: 'ap-ex4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fundamental Theorem of Calculus (Parts 1 and 2)',
            options: ['Fundamental Theorem of Calculus (Parts 1 and 2)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'u-substitution for definite and indefinite integrals',
            options: ['u-substitution for definite and indefinite integra', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Properties of integrals',
            options: ['linearity, additivity, comparison', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Fundamental Theorem of Calculus (Parts 1 and 2)', 'u-substitution for definite and indefinite integra', 'linearity, additivity, comparison'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integrals Review.'
      }
    }
  ]
}
