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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "For repeated factor (ax+b)ⁿ" refer to in calculus?',
            options: [
              'For repeated factor (ax+b)ⁿ',
              'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ',
              'Solve for constants by expanding and matching coefficients',
              'Need as many terms as the power of the repeated factor'
            ],
            correctAnswer: 0,
            explanation: 'Correct — For repeated factor (ax+b)ⁿ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Need as many terms as the power of the…?',
            options: [
              'For repeated factor (ax+b)ⁿ',
              'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ',
              'Need as many terms as the power of the repeated factor',
              'Solve for constants by expanding and matching coefficients'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Need as many terms as the power of the repeated factor. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Repeated Linear Factors, which correctly describes Solve for constants by expanding and…?',
            options: [
              'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ',
              'Need as many terms as the power of the repeated factor',
              'For repeated factor (ax+b)ⁿ',
              'Solve for constants by expanding and matching coefficients'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Solve for constants by expanding and matching coefficients. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For repeated factor (ax+b)ⁿ',
            options: ['Solve for constants by expanding and matching coefficients', 'Need as many terms as the power of the repeated factor', 'For repeated factor (ax+b)ⁿ', 'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ']
          },
          {
            label: 'Include',
            options: ['Solve for constants by expanding and matching coefficients', 'Need as many terms as the power of the repeated factor', 'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ', 'For repeated factor (ax+b)ⁿ']
          },
          {
            label: 'Need as many terms as the power of the…',
            options: ['Solve for constants by expanding and matching coefficients', 'Need as many terms as the power of the repeated factor', 'For repeated factor (ax+b)ⁿ', 'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ']
          }
        ],
        correctAnswers: ['For repeated factor (ax+b)ⁿ', 'A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ', 'Need as many terms as the power of the repeated factor'],
        hint1: 'Think about what each concept specifically describes in Repeated Linear Factors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Repeated Linear Factors describes a specific idea. For repeated factor (ax+b)ⁿ. Include: A₁/(ax+b) + A₂/(ax+b)² + ... + Aₙ/(ax+b)ⁿ. Need as many terms as the power of the repeated factor.'
      }
    }
  ]
}
