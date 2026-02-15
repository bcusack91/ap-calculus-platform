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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of circles?',
            options: [
              'Circle',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Circle: set of points equidistant from center'
          },
          {
            question: 'In the context of circles, which is accurate?',
            options: [
              'Center (h,k) and radius r',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Center (h,k) and radius r'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Circle',
            options: ['set of points equidistant from center', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard form',
            options: ['(x-h)² + (y-k)² = r²', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Center (h,k) and radius r',
            options: ['Center (h,k) and radius r', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['set of points equidistant from center', '(x-h)² + (y-k)² = r²', 'Center (h,k) and radius r'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Circles.'
      }
    }
  ]
}
