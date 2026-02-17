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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Evaluate limits using substitution,…?',
            options: [
              'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule',
              'continuous function on closed interval',
              'removable, jump, infinite',
              'Apply Squeeze Theorem for bounded functions'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Apply Squeeze Theorem for bounded…:',
            options: [
              'continuous function on closed interval',
              'removable, jump, infinite',
              'Apply Squeeze Theorem for bounded functions',
              'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Apply Squeeze Theorem for bounded functions. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about IVT and its conditions is correct?',
            options: [
              'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule',
              'continuous function on closed interval',
              'Apply Squeeze Theorem for bounded functions',
              'removable, jump, infinite'
            ],
            correctAnswer: 1,
            explanation: 'Correct — IVT and its conditions: continuous function on closed interval. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ap-ex1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identify types of discontinuities',
            options: ['continuous function on closed interval', 'Apply Squeeze Theorem for bounded functions', 'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule', 'removable, jump, infinite']
          },
          {
            label: 'IVT and its conditions',
            options: ['Apply Squeeze Theorem for bounded functions', 'continuous function on closed interval', 'Evaluate limits using substitution, factoring, rationalization, L\'Hôpital\'s Rule', 'removable, jump, infinite']
          }
        ],
        correctAnswers: ['removable, jump, infinite', 'continuous function on closed interval'],
        hint1: 'Think about what each concept specifically describes in Ap Exam Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ap Exam Review describes a specific idea. Identify types of discontinuities: removable, jump, infinite. IVT and its conditions: continuous function on closed interval.'
      }
    }
  ]
}
