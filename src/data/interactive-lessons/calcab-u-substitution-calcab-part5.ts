export const calcABUSubPart5Data = {
  topicSlug: 'u-substitution-calcab',
  sections: [
    {
      id: 'u-sub5-intro',
      type: 'text' as const,
      content: `
# Completing the Square for Integration

**Part 5 of 7 — Completing the Square for Integration**

### 1. ∫1/(x²+bx+c)dx

complete the square, then use arctan form

### 2. ∫1/√(a²-x²)dx = arcsin(x/a) + C

∫1/√(a²-x²)dx = arcsin(x/a) + C

### 3. ∫1/(x²+a²)dx = (1/a)arctan(x/a) + C

∫1/(x²+a²)dx = (1/a)arctan(x/a) + C

### 4. Completing the square converts quadratics into recognizable integration forms

Completing the square converts quadratics into recognizable integration forms
      `
    },
    {
      id: 'u-sub5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ∫1/(x²+bx+c)dx?',
            options: [
              '∫1/√(a²-x²)dx = arcsin(x/a) + C',
              '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
              'Completing the square converts quadratics into recognizable integration forms',
              'complete the square, then use arctan form'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫1/(x²+bx+c)dx: complete the square, then use arctan form. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ∫1/(x²+a²)dx = (1/a)arctan(x/a) + C?',
            options: [
              '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
              'complete the square, then use arctan form',
              '∫1/√(a²-x²)dx = arcsin(x/a) + C',
              'Completing the square converts quadratics into recognizable integration forms'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ∫1/(x²+a²)dx = (1/a)arctan(x/a) + C. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'u-sub5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫1/(x²+bx+c)dx**: complete the square, then use arctan form
- **∫1/√(a²-x²)dx = arcsin(x/a) + C**
- **∫1/(x²+a²)dx = (1/a)arctan(x/a) + C**
- **Completing the square converts quadratics into recognizable integration forms**
      `
    },
    {
      id: 'u-sub5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Completing the square converts…?',
            options: [
              'Completing the square converts quadratics into recognizable integration forms',
              'complete the square, then use arctan form',
              '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
              '∫1/√(a²-x²)dx = arcsin(x/a) + C'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Completing the square converts quadratics into recognizable integration forms. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'u-sub5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫1/(x²+bx+c)dx',
            options: ['∫1/√(a²-x²)dx = arcsin(x/a) + C', 'complete the square, then use arctan form', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C', 'Completing the square converts quadratics into recognizable integration forms']
          },
          {
            label: '∫1/√(a²-x²)dx = arcsin(x/a) + C',
            options: ['∫1/√(a²-x²)dx = arcsin(x/a) + C', 'Completing the square converts quadratics into recognizable integration forms', 'complete the square, then use arctan form', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C']
          },
          {
            label: '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C',
            options: ['Completing the square converts quadratics into recognizable integration forms', 'complete the square, then use arctan form', '∫1/√(a²-x²)dx = arcsin(x/a) + C', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C']
          }
        ],
        correctAnswers: ['complete the square, then use arctan form', '∫1/√(a²-x²)dx = arcsin(x/a) + C', '∫1/(x²+a²)dx = (1/a)arctan(x/a) + C'],
        hint1: 'Think about what each concept specifically describes in Completing the Square for Integration.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Completing the Square for Integration describes a specific idea. ∫1/(x²+bx+c)dx: complete the square, then use arctan form. ∫1/√(a²-x²)dx = arcsin(x/a) + C. ∫1/(x²+a²)dx = (1/a)arctan(x/a) + C.'
      }
    }
  ]
}
