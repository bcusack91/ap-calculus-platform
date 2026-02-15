export const calcABLinearizationPart5Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea5-intro',
      type: 'text' as const,
      content: `
# L'Hôpital's Rule

**Part 5 of 7 — L'Hôpital's Rule**

### 1. L'Hôpital's Rule

for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f'(x)/g'(x)

### 2. Only apply when the limit is an indeterminate form

Only apply when the limit is an indeterminate form

### 3. May need to apply multiple times

May need to apply multiple times

### 4. Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first

Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first
      `
    },
    {
      id: 'linea5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of l\'hôpital\'s rule?',
            options: [
              'L\'Hôpital\'s Rule',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)'
          },
          {
            question: 'In the context of l\'hôpital\'s rule, which is accurate?',
            options: [
              'May need to apply multiple times',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'May need to apply multiple times'
          }
        ]
      }
    },
    {
      id: 'linea5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **L'Hôpital's Rule**: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f'(x)/g'(x)
- **Only apply when the limit is an indeterminate form**
- **May need to apply multiple times**
- **Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first**
      `
    },
    {
      id: 'linea5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to l\'hôpital\'s rule?',
            options: [
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first'
          }
        ]
      }
    },
    {
      id: 'linea5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'L\'Hôpital\'s Rule',
            options: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Only apply when the limit is an indeterminate form',
            options: ['Only apply when the limit is an indeterminate form', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'May need to apply multiple times',
            options: ['May need to apply multiple times', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) ', 'Only apply when the limit is an indeterminate form', 'May need to apply multiple times'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding L\'Hôpital\'s Rule.'
      }
    }
  ]
}
