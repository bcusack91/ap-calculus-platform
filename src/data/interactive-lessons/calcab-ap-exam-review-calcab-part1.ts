export const calcABExamReviewPart1Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'ap-ex1-intro',
      type: 'text' as const,
      content: `
# ∫ Ap Exam Review

**Part 1 of 7 — Limits & Continuity Review**

### 1. Evaluate limits using substitution, factoring, rationalization, L'Hôpital's Rule

Evaluate limits using substitution, factoring, rationalization, L'Hôpital's Rule

### 2. Identify types of discontinuities

removable, jump, infinite

### 3. Apply Squeeze Theorem for bounded functions

Apply Squeeze Theorem for bounded functions

### 4. IVT and its conditions

continuous function on closed interval
      `
    },
    {
      id: 'ap-ex1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of limits & continuity review?',
            options: [
              'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule'
          },
          {
            question: 'In the context of limits & continuity review, which is accurate?',
            options: [
              'Apply Squeeze Theorem for bounded functions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Apply Squeeze Theorem for bounded functions'
          }
        ]
      }
    },
    {
      id: 'ap-ex1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Evaluate limits using substitution, factoring, rationalization, L'Hôpital's Rule**
- **Identify types of discontinuities**: removable, jump, infinite
- **Apply Squeeze Theorem for bounded functions**
- **IVT and its conditions**: continuous function on closed interval
      `
    },
    {
      id: 'ap-ex1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to limits & continuity review?',
            options: [
              'continuous function on closed interval',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'IVT and its conditions: continuous function on closed interval'
          }
        ]
      }
    },
    {
      id: 'ap-ex1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule',
            options: ['Evaluate limits using substitution, factoring, rat', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Identify types of discontinuities',
            options: ['removable, jump, infinite', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Apply Squeeze Theorem for bounded functions',
            options: ['Apply Squeeze Theorem for bounded functions', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Evaluate limits using substitution, factoring, rat', 'removable, jump, infinite', 'Apply Squeeze Theorem for bounded functions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Limits & Continuity Review.'
      }
    }
  ]
}
