export const calcBCPartialFractionsPart3Data = {
  topicSlug: 'partial-fractions-calcbc',
  sections: [
    {
      id: 'parti3-intro',
      type: 'text' as const,
      content: `
# Repeated Linear Factors

**Part 3 of 7 — Repeated Linear Factors**

### 1. For repeated factor (ax+b)ⁿ

For repeated factor (ax+b)ⁿ

### 2. Include

A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ

### 3. Need as many terms as the power of the repeated factor

Need as many terms as the power of the repeated factor

### 4. Solve for constants by expanding and matching coefficients

Solve for constants by expanding and matching coefficients
      `
    },
    {
      id: 'parti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of repeated linear factors?',
            options: [
              'For repeated factor (ax+b)ⁿ',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'For repeated factor (ax+b)ⁿ'
          },
          {
            question: 'In the context of repeated linear factors, which is accurate?',
            options: [
              'Need as many terms as the power of the repeated factor',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Need as many terms as the power of the repeated factor'
          }
        ]
      }
    },
    {
      id: 'parti3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **For repeated factor (ax+b)ⁿ**
- **Include**: A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ
- **Need as many terms as the power of the repeated factor**
- **Solve for constants by expanding and matching coefficients**
      `
    },
    {
      id: 'parti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to repeated linear factors?',
            options: [
              'Solve for constants by expanding and matching coefficients',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Solve for constants by expanding and matching coefficients'
          }
        ]
      }
    },
    {
      id: 'parti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For repeated factor (ax+b)ⁿ',
            options: ['For repeated factor (ax+b)ⁿ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Include',
            options: ['A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Need as many terms as the power of the repeated factor',
            options: ['Need as many terms as the power of the repeated fa', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['For repeated factor (ax+b)ⁿ', 'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ', 'Need as many terms as the power of the repeated fa'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Repeated Linear Factors.'
      }
    }
  ]
}
