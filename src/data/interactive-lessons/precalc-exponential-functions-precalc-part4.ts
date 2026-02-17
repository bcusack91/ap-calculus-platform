export const precalcExponentialPart4Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon4-intro',
      type: 'text' as const,
      content: `
# Exponential Equations

**Part 4 of 7 — Exponential Equations**

### 1. If bˣ = bʸ, then x = y (one-to-one property)

If bˣ = bʸ, then x = y (one-to-one property)

### 2. Rewrite both sides with the same base when possible

Rewrite both sides with the same base when possible

### 3. Use logarithms when bases cannot be matched

Use logarithms when bases cannot be matched

### 4. Check solutions in the original equation

Check solutions in the original equation
      `
    },
    {
      id: 'expon4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains If bˣ = bʸ, then x = y (one-to-one…?',
            options: [
              'Use logarithms when bases cannot be matched',
              'Check solutions in the original equation',
              'If bˣ = bʸ, then x = y (one-to-one property)',
              'Rewrite both sides with the same base when possible'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If bˣ = bʸ, then x = y (one-to-one property). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Use logarithms when bases cannot be…:',
            options: [
              'Check solutions in the original equation',
              'Rewrite both sides with the same base when possible',
              'Use logarithms when bases cannot be matched',
              'If bˣ = bʸ, then x = y (one-to-one property)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Use logarithms when bases cannot be matched. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If bˣ = bʸ, then x = y (one-to-one property)**
- **Rewrite both sides with the same base when possible**
- **Use logarithms when bases cannot be matched**
- **Check solutions in the original equation**
      `
    },
    {
      id: 'expon4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential equations?',
            options: [
              'Check solutions in the original equation',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Check solutions in the original equation'
          }
        ]
      }
    },
    {
      id: 'expon4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If bˣ = bʸ, then x = y (one-to-one…',
            options: ['Check solutions in the original equation', 'Rewrite both sides with the same base when possible', 'Use logarithms when bases cannot be matched', 'If bˣ = bʸ, then x = y (one-to-one property)']
          },
          {
            label: 'Rewrite both sides with the same base…',
            options: ['Use logarithms when bases cannot be matched', 'Check solutions in the original equation', 'Rewrite both sides with the same base when possible', 'If bˣ = bʸ, then x = y (one-to-one property)']
          },
          {
            label: 'Use logarithms when bases cannot be…',
            options: ['Rewrite both sides with the same base when possible', 'If bˣ = bʸ, then x = y (one-to-one property)', 'Use logarithms when bases cannot be matched', 'Check solutions in the original equation']
          }
        ],
        correctAnswers: ['If bˣ = bʸ, then x = y (one-to-one property)', 'Rewrite both sides with the same base when possible', 'Use logarithms when bases cannot be matched'],
        hint1: 'Think about what each concept specifically describes in Exponential Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Exponential Equations describes a specific idea. If bˣ = bʸ, then x = y (one-to-one property). Rewrite both sides with the same base when possible. Use logarithms when bases cannot be matched.'
      }
    }
  ]
}
