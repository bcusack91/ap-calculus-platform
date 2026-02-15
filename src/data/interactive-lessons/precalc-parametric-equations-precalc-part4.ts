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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of parametric equations for conics?',
            options: [
              'Circle',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Circle: x = h + r cos t, y = k + r sin t'
          },
          {
            question: 'In the context of parametric equations for conics, which is accurate?',
            options: [
              'x = x₁ + at, y = y₁ + bt',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Line: x = x₁ + at, y = y₁ + bt'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circle',
            options: ['x = h + r cos t, y = k + r sin t', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Ellipse',
            options: ['x = h + a cos t, y = k + b sin t', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Line',
            options: ['x = x₁ + at, y = y₁ + bt', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x = h + r cos t, y = k + r sin t', 'x = h + a cos t, y = k + b sin t', 'x = x₁ + at, y = y₁ + bt'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parametric Equations for Conics.'
      }
    }
  ]
}
