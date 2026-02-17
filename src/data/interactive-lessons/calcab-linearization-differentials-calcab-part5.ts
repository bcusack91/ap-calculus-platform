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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes L\'Hôpital\'s Rule?',
            options: [
              'Only apply when the limit is an indeterminate form',
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)',
              'May need to apply multiple times'
            ],
            correctAnswer: 2,
            explanation: 'Correct — L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes May need to apply multiple times:',
            options: [
              'Only apply when the limit is an indeterminate form',
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)',
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'May need to apply multiple times'
            ],
            correctAnswer: 3,
            explanation: 'Correct — May need to apply multiple times. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Other indeterminate forms (0·∞, ∞-∞,…?',
            options: [
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)',
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'Only apply when the limit is an indeterminate form',
              'May need to apply multiple times'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'L\'Hôpital\'s Rule',
            options: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'May need to apply multiple times', 'Only apply when the limit is an indeterminate form', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first']
          },
          {
            label: 'Only apply when the limit is an…',
            options: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first', 'May need to apply multiple times', 'Only apply when the limit is an indeterminate form']
          },
          {
            label: 'May need to apply multiple times',
            options: ['May need to apply multiple times', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first', 'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form']
          }
        ],
        correctAnswers: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form', 'May need to apply multiple times'],
        hint1: 'Think about what each concept specifically describes in L\'Hôpital\'s Rule.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in L\'Hôpital\'s Rule describes a specific idea. L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x). Only apply when the limit is an indeterminate form. May need to apply multiple times.'
      }
    }
  ]
}
