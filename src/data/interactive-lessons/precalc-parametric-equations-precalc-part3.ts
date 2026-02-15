export const precalcParametricPart3Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param3-intro',
      type: 'text' as const,
      content: `
# Eliminating the Parameter

**Part 3 of 7 — Eliminating the Parameter**

### 1. Solve one equation for t, substitute into the other

Solve one equation for t, substitute into the other

### 2. For x = cos t, y = sin t

use cos²t + sin²t = 1 → x² + y² = 1

### 3. Eliminating the parameter gives the rectangular equation

Eliminating the parameter gives the rectangular equation

### 4. May need to restrict domain/range after elimination

May need to restrict domain/range after elimination
      `
    },
    {
      id: 'param3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of eliminating the parameter?',
            options: [
              'Solve one equation for t, substitute into the other',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Solve one equation for t, substitute into the other'
          },
          {
            question: 'In the context of eliminating the parameter, which is accurate?',
            options: [
              'Eliminating the parameter gives the rectangular equation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Eliminating the parameter gives the rectangular equation'
          }
        ]
      }
    },
    {
      id: 'param3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Solve one equation for t, substitute into the other**
- **For x = cos t, y = sin t**: use cos²t + sin²t = 1 → x² + y² = 1
- **Eliminating the parameter gives the rectangular equation**
- **May need to restrict domain/range after elimination**
      `
    },
    {
      id: 'param3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to eliminating the parameter?',
            options: [
              'May need to restrict domain/range after elimination',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'May need to restrict domain/range after elimination'
          }
        ]
      }
    },
    {
      id: 'param3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solve one equation for t, substitute into the other',
            options: ['Solve one equation for t, substitute into the othe', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'For x = cos t, y = sin t',
            options: ['use cos²t + sin²t = 1 → x² + y² = 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Eliminating the parameter gives the rectangular equation',
            options: ['Eliminating the parameter gives the rectangular eq', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Solve one equation for t, substitute into the othe', 'use cos²t + sin²t = 1 → x² + y² = 1', 'Eliminating the parameter gives the rectangular eq'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Eliminating the Parameter.'
      }
    }
  ]
}
