export const precalcConicsPart2Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'conic2-intro',
      type: 'text' as const,
      content: `
# Circles

**Part 2 of 7 — Circles**

### 1. Circle

set of points equidistant from center

### 2. Standard form

(x-h)² + (y-k)² = r²

### 3. Center (h,k) and radius r

Center (h,k) and radius r

### 4. General form

x² + y² + Dx + Ey + F = 0; complete the square to convert
      `
    },
    {
      id: 'conic2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Circle?',
            options: [
              'set of points equidistant from center',
              'x² + y² + Dx + Ey + F = 0; complete the square to convert',
              'Center (h,k) and radius r',
              '(x-h)² + (y-k)² = r²'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Circle: set of points equidistant from center. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Circles, which explains Center (h,k) and radius r?',
            options: [
              '(x-h)² + (y-k)² = r²',
              'set of points equidistant from center',
              'x² + y² + Dx + Ey + F = 0; complete the square to convert',
              'Center (h,k) and radius r'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Center (h,k) and radius r. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conic2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Circle**: set of points equidistant from center
- **Standard form**: (x-h)² + (y-k)² = r²
- **Center (h,k) and radius r**
- **General form**: x² + y² + Dx + Ey + F = 0; complete the square to convert
      `
    },
    {
      id: 'conic2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to circles?',
            options: [
              'x² + y² + Dx + Ey + F = 0; complete the square to convert',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'General form: x² + y² + Dx + Ey + F = 0; complete the square to convert'
          }
        ]
      }
    },
    {
      id: 'conic2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circle',
            options: ['set of points equidistant from center', '(x-h)² + (y-k)² = r²', 'Center (h,k) and radius r', 'x² + y² + Dx + Ey + F = 0; complete the square to convert']
          },
          {
            label: 'Standard form',
            options: ['(x-h)² + (y-k)² = r²', 'Center (h,k) and radius r', 'x² + y² + Dx + Ey + F = 0; complete the square to convert', 'set of points equidistant from center']
          },
          {
            label: 'General form',
            options: ['set of points equidistant from center', 'x² + y² + Dx + Ey + F = 0; complete the square to convert', 'Center (h,k) and radius r', '(x-h)² + (y-k)² = r²']
          }
        ],
        correctAnswers: ['set of points equidistant from center', '(x-h)² + (y-k)² = r²', 'x² + y² + Dx + Ey + F = 0; complete the square to convert'],
        hint1: 'Think about what each concept specifically describes in Circles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Circles describes a specific idea. Circle: set of points equidistant from center. Standard form: (x-h)² + (y-k)² = r². General form: x² + y² + Dx + Ey + F = 0; complete the square to convert.'
      }
    }
  ]
}
