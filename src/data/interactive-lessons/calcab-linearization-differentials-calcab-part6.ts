export const calcABLinearizationPart6Data = {
  topicSlug: 'linearization-differentials-calcab',
  sections: [
    {
      id: 'linea6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'linea6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes L\'Hôpital\'s Rule?',
            options: [
              'May need to apply multiple times',
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)',
              'Only apply when the limit is an indeterminate form',
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first'
            ],
            correctAnswer: 1,
            explanation: 'Correct — L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes May need to apply multiple times:',
            options: [
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)',
              'Only apply when the limit is an indeterminate form',
              'May need to apply multiple times'
            ],
            correctAnswer: 3,
            explanation: 'Correct — May need to apply multiple times. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'linea6-detail',
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
      id: 'linea6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Other indeterminate forms (0·∞, ∞-∞,… is correct?',
            options: [
              'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first',
              'May need to apply multiple times',
              'Only apply when the limit is an indeterminate form',
              'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'linea6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'L\'Hôpital\'s Rule',
            options: ['May need to apply multiple times', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first', 'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form']
          },
          {
            label: 'Only apply when the limit is an…',
            options: ['Only apply when the limit is an indeterminate form', 'May need to apply multiple times', 'Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first', 'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)']
          },
          {
            label: 'May need to apply multiple times',
            options: ['Other indeterminate forms (0·∞, ∞-∞, 0⁰, ∞⁰, 1^∞) must be converted first', 'for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form', 'May need to apply multiple times']
          }
        ],
        correctAnswers: ['for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x)', 'Only apply when the limit is an indeterminate form', 'May need to apply multiple times'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. L\'Hôpital\'s Rule: for 0/0 or ∞/∞ indeterminate forms, lim f(x)/g(x) = lim f\'(x)/g\'(x). Only apply when the limit is an indeterminate form. May need to apply multiple times.'
      }
    }
  ]
}
