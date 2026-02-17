export const calcABDerivativeDefPart2Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin2-intro',
      type: 'text' as const,
      content: `
# Limit Definition of the Derivative

**Part 2 of 7 — Limit Definition of the Derivative**

### 1. f'(x) = lim(h→0) [f(x+h) - f(x)]/h

f'(x) = lim(h→0) [f(x+h) - f(x)]/h

### 2. Alternative form

f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)

### 3. The limit must exist for the derivative to exist

The limit must exist for the derivative to exist

### 4. This definition connects the slope concept to limits

This definition connects the slope concept to limits
      `
    },
    {
      id: 'defin2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f\'(x) = lim(h→0) [f(x+h) - f(x)]/h?',
            options: [
              'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)',
              'The limit must exist for the derivative to exist',
              'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
              'This definition connects the slope concept to limits'
            ],
            correctAnswer: 2,
            explanation: 'Correct — f\'(x) = lim(h→0) [f(x+h) - f(x)]/h. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about The limit must exist for the derivative…?',
            options: [
              'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)',
              'This definition connects the slope concept to limits',
              'The limit must exist for the derivative to exist',
              'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h'
            ],
            correctAnswer: 2,
            explanation: 'Correct — The limit must exist for the derivative to exist. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f'(x) = lim(h→0) [f(x+h) - f(x)]/h**
- **Alternative form**: f'(a) = lim(x→a) [f(x) - f(a)]/(x - a)
- **The limit must exist for the derivative to exist**
- **This definition connects the slope concept to limits**
      `
    },
    {
      id: 'defin2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents This definition connects the slope…?',
            options: [
              'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
              'The limit must exist for the derivative to exist',
              'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)',
              'This definition connects the slope concept to limits'
            ],
            correctAnswer: 3,
            explanation: 'Correct — This definition connects the slope concept to limits. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h',
            options: ['f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'This definition connects the slope concept to limits', 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'The limit must exist for the derivative to exist']
          },
          {
            label: 'Alternative form',
            options: ['f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'This definition connects the slope concept to limits', 'The limit must exist for the derivative to exist']
          },
          {
            label: 'The limit must exist for the derivative…',
            options: ['This definition connects the slope concept to limits', 'The limit must exist for the derivative to exist', 'f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)']
          }
        ],
        correctAnswers: ['f\'(x) = lim(h→0) [f(x+h) - f(x)]/h', 'f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a)', 'The limit must exist for the derivative to exist'],
        hint1: 'Think about what each concept specifically describes in Limit Definition of the Derivative.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Limit Definition of the Derivative describes a specific idea. f\'(x) = lim(h→0) [f(x+h) - f(x)]/h. Alternative form: f\'(a) = lim(x→a) [f(x) - f(a)]/(x - a). The limit must exist for the derivative to exist.'
      }
    }
  ]
}
