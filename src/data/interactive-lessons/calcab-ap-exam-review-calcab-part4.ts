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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Fundamental Theorem of Calculus (Parts…?',
            options: [
              'Fundamental Theorem of Calculus (Parts 1 and 2)',
              'linearity, additivity, comparison',
              'Basic antiderivative formulas and techniques',
              'u-substitution for definite and indefinite integrals'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Fundamental Theorem of Calculus (Parts 1 and 2). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Integrals Review, which explains Properties of integrals?',
            options: [
              'linearity, additivity, comparison',
              'Basic antiderivative formulas and techniques',
              'u-substitution for definite and indefinite integrals',
              'Fundamental Theorem of Calculus (Parts 1 and 2)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Properties of integrals: linearity, additivity, comparison. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Basic antiderivative formulas and… is correct?',
            options: [
              'linearity, additivity, comparison',
              'Basic antiderivative formulas and techniques',
              'Fundamental Theorem of Calculus (Parts 1 and 2)',
              'u-substitution for definite and indefinite integrals'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Basic antiderivative formulas and techniques. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Fundamental Theorem of Calculus (Parts…',
            options: ['Basic antiderivative formulas and techniques', 'Fundamental Theorem of Calculus (Parts 1 and 2)', 'linearity, additivity, comparison', 'u-substitution for definite and indefinite integrals']
          },
          {
            label: 'u-substitution for definite and…',
            options: ['Basic antiderivative formulas and techniques', 'linearity, additivity, comparison', 'Fundamental Theorem of Calculus (Parts 1 and 2)', 'u-substitution for definite and indefinite integrals']
          },
          {
            label: 'Properties of integrals',
            options: ['u-substitution for definite and indefinite integrals', 'Fundamental Theorem of Calculus (Parts 1 and 2)', 'Basic antiderivative formulas and techniques', 'linearity, additivity, comparison']
          }
        ],
        correctAnswers: ['Fundamental Theorem of Calculus (Parts 1 and 2)', 'u-substitution for definite and indefinite integrals', 'linearity, additivity, comparison'],
        hint1: 'Think about what each concept specifically describes in Integrals Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrals Review describes a specific idea. Fundamental Theorem of Calculus (Parts 1 and 2). u-substitution for definite and indefinite integrals. Properties of integrals: linearity, additivity, comparison.'
      }
    }
  ]
}
