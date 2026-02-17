export const calcABDerivativeDefPart4Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin4-intro',
      type: 'text' as const,
      content: `
# Differentiability

**Part 4 of 7 — Differentiability**

### 1. If f is differentiable at c, then f is continuous at c

If f is differentiable at c, then f is continuous at c

### 2. Continuous does NOT imply differentiable (example

|x| at x=0)

### 3. Not differentiable at corners, cusps, vertical tangents, or discontinuities

Not differentiable at corners, cusps, vertical tangents, or discontinuities

### 4. Differentiability is a stronger condition than continuity

Differentiability is a stronger condition than continuity
      `
    },
    {
      id: 'defin4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes If f is differentiable at c, then f is…?',
            options: [
              'Not differentiable at corners, cusps, vertical tangents, or discontinuities',
              'If f is differentiable at c, then f is continuous at c',
              '|x| at x=0)',
              'Differentiability is a stronger condition than continuity'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If f is differentiable at c, then f is continuous at c. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Not differentiable at corners, cusps,…?',
            options: [
              '|x| at x=0)',
              'Differentiability is a stronger condition than continuity',
              'Not differentiable at corners, cusps, vertical tangents, or discontinuities',
              'If f is differentiable at c, then f is continuous at c'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Not differentiable at corners, cusps, vertical tangents, or discontinuities. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **If f is differentiable at c, then f is continuous at c**
- **Continuous does NOT imply differentiable (example**: |x| at x=0)
- **Not differentiable at corners, cusps, vertical tangents, or discontinuities**
- **Differentiability is a stronger condition than continuity**
      `
    },
    {
      id: 'defin4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Differentiability, which correctly describes Differentiability is a stronger…?',
            options: [
              'Differentiability is a stronger condition than continuity',
              '|x| at x=0)',
              'Not differentiable at corners, cusps, vertical tangents, or discontinuities',
              'If f is differentiable at c, then f is continuous at c'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Differentiability is a stronger condition than continuity. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If f is differentiable at c, then f is…',
            options: ['Differentiability is a stronger condition than continuity', '|x| at x=0)', 'If f is differentiable at c, then f is continuous at c', 'Not differentiable at corners, cusps, vertical tangents, or discontinuities']
          },
          {
            label: 'Continuous does NOT imply differentiable (example',
            options: ['Not differentiable at corners, cusps, vertical tangents, or discontinuities', '|x| at x=0)', 'Differentiability is a stronger condition than continuity', 'If f is differentiable at c, then f is continuous at c']
          },
          {
            label: 'Not differentiable at corners, cusps,…',
            options: ['Not differentiable at corners, cusps, vertical tangents, or discontinuities', 'If f is differentiable at c, then f is continuous at c', '|x| at x=0)', 'Differentiability is a stronger condition than continuity']
          }
        ],
        correctAnswers: ['If f is differentiable at c, then f is continuous at c', '|x| at x=0)', 'Not differentiable at corners, cusps, vertical tangents, or discontinuities'],
        hint1: 'Think about what each concept specifically describes in Differentiability.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Differentiability describes a specific idea. If f is differentiable at c, then f is continuous at c. Continuous does NOT imply differentiable (example: |x| at x=0). Not differentiable at corners, cusps, vertical tangents, or discontinuities.'
      }
    }
  ]
}
