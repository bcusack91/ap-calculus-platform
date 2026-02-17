export const precalcParametricPart4Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param4-intro',
      type: 'text' as const,
      content: `
# Parametric Equations for Conics

**Part 4 of 7 — Parametric Equations for Conics**

### 1. Circle

x = h + r cos t, y = k + r sin t

### 2. Ellipse

x = h + a cos t, y = k + b sin t

### 3. Line

x = x₁ + at, y = y₁ + bt

### 4. Parabola

x = t, y = at² + bt + c (or other parameterizations)
      `
    },
    {
      id: 'param4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Circle?',
            options: [
              'x = h + a cos t, y = k + b sin t',
              'x = t, y = at² + bt + c (or other parameterizations)',
              'x = x₁ + at, y = y₁ + bt',
              'x = h + r cos t, y = k + r sin t'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Circle: x = h + r cos t, y = k + r sin t. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Parametric Equations for Conics, which explains Line?',
            options: [
              'x = h + r cos t, y = k + r sin t',
              'x = x₁ + at, y = y₁ + bt',
              'x = h + a cos t, y = k + b sin t',
              'x = t, y = at² + bt + c (or other parameterizations)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Line: x = x₁ + at, y = y₁ + bt. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'param4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Circle**: x = h + r cos t, y = k + r sin t
- **Ellipse**: x = h + a cos t, y = k + b sin t
- **Line**: x = x₁ + at, y = y₁ + bt
- **Parabola**: x = t, y = at² + bt + c (or other parameterizations)
      `
    },
    {
      id: 'param4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parametric equations for conics?',
            options: [
              'x = t, y = at² + bt + c (or other parameterizations)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Parabola: x = t, y = at² + bt + c (or other parameterizations)'
          }
        ]
      }
    },
    {
      id: 'param4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circle',
            options: ['x = h + r cos t, y = k + r sin t', 'x = h + a cos t, y = k + b sin t', 'x = x₁ + at, y = y₁ + bt', 'x = t, y = at² + bt + c (or other parameterizations)']
          },
          {
            label: 'Ellipse',
            options: ['x = h + a cos t, y = k + b sin t', 'x = x₁ + at, y = y₁ + bt', 'x = t, y = at² + bt + c (or other parameterizations)', 'x = h + r cos t, y = k + r sin t']
          },
          {
            label: 'Line',
            options: ['x = t, y = at² + bt + c (or other parameterizations)', 'x = h + r cos t, y = k + r sin t', 'x = h + a cos t, y = k + b sin t', 'x = x₁ + at, y = y₁ + bt']
          }
        ],
        correctAnswers: ['x = h + r cos t, y = k + r sin t', 'x = h + a cos t, y = k + b sin t', 'x = x₁ + at, y = y₁ + bt'],
        hint1: 'Think about what each concept specifically describes in Parametric Equations for Conics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parametric Equations for Conics describes a specific idea. Circle: x = h + r cos t, y = k + r sin t. Ellipse: x = h + a cos t, y = k + b sin t. Line: x = x₁ + at, y = y₁ + bt.'
      }
    }
  ]
}
