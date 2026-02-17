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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Solve one equation for t, substitute…?',
            options: [
              'use cos²t + sin²t = 1 → x² + y² = 1',
              'Eliminating the parameter gives the rectangular equation',
              'Solve one equation for t, substitute into the other',
              'May need to restrict domain/range after elimination'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Solve one equation for t, substitute into the other. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Eliminating the Parameter, which explains Eliminating the parameter gives the…?',
            options: [
              'use cos²t + sin²t = 1 → x² + y² = 1',
              'Eliminating the parameter gives the rectangular equation',
              'May need to restrict domain/range after elimination',
              'Solve one equation for t, substitute into the other'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Eliminating the parameter gives the rectangular equation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Solve one equation for t, substitute…',
            options: ['May need to restrict domain/range after elimination', 'use cos²t + sin²t = 1 → x² + y² = 1', 'Eliminating the parameter gives the rectangular equation', 'Solve one equation for t, substitute into the other']
          },
          {
            label: 'For x = cos t, y = sin t',
            options: ['Eliminating the parameter gives the rectangular equation', 'May need to restrict domain/range after elimination', 'Solve one equation for t, substitute into the other', 'use cos²t + sin²t = 1 → x² + y² = 1']
          },
          {
            label: 'Eliminating the parameter gives the…',
            options: ['use cos²t + sin²t = 1 → x² + y² = 1', 'Eliminating the parameter gives the rectangular equation', 'May need to restrict domain/range after elimination', 'Solve one equation for t, substitute into the other']
          }
        ],
        correctAnswers: ['Solve one equation for t, substitute into the other', 'use cos²t + sin²t = 1 → x² + y² = 1', 'Eliminating the parameter gives the rectangular equation'],
        hint1: 'Think about what each concept specifically describes in Eliminating the Parameter.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Eliminating the Parameter describes a specific idea. Solve one equation for t, substitute into the other. For x = cos t, y = sin t: use cos²t + sin²t = 1 → x² + y² = 1. Eliminating the parameter gives the rectangular equation.'
      }
    }
  ]
}
