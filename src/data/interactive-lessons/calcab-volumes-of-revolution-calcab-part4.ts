export const calcABVolumesPart4Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum4-intro',
      type: 'text' as const,
      content: `
# Volumes by Cross Sections

**Part 4 of 7 — Volumes by Cross Sections**

### 1. Known cross-sections perpendicular to the x-axis

V = ∫ₐᵇ A(x)dx

### 2. A(x) is the area of the cross-section at position x

A(x) is the area of the cross-section at position x

### 3. Common shapes

squares, semicircles, equilateral triangles, rectangles

### 4. The "base" of each cross-section is typically bounded by two curves

The "base" of each cross-section is typically bounded by two curves
      `
    },
    {
      id: 'volum4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Known cross-sections perpendicular to the x-axis" refer to in calculus?',
            options: [
              'squares, semicircles, equilateral triangles, rectangles',
              'The "base" of each cross-section is typically bounded by two curves',
              'V = ∫ₐᵇ A(x)dx',
              'A(x) is the area of the cross-section at position x'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Known cross-sections perpendicular to the x-axis: V = ∫ₐᵇ A(x)dx. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Common shapes:',
            options: [
              'The "base" of each cross-section is typically bounded by two curves',
              'V = ∫ₐᵇ A(x)dx',
              'squares, semicircles, equilateral triangles, rectangles',
              'A(x) is the area of the cross-section at position x'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Common shapes: squares, semicircles, equilateral triangles, rectangles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'volum4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Known cross-sections perpendicular to the x-axis**: V = ∫ₐᵇ A(x)dx
- **A(x) is the area of the cross-section at position x**
- **Common shapes**: squares, semicircles, equilateral triangles, rectangles
- **The "base" of each cross-section is typically bounded by two curves**
      `
    },
    {
      id: 'volum4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents The "base" of each cross-section is…?',
            options: [
              'The "base" of each cross-section is typically bounded by two curves',
              'V = ∫ₐᵇ A(x)dx',
              'A(x) is the area of the cross-section at position x',
              'squares, semicircles, equilateral triangles, rectangles'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The "base" of each cross-section is typically bounded by two curves. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'volum4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Known cross-sections perpendicular to the x-axis',
            options: ['A(x) is the area of the cross-section at position x', 'squares, semicircles, equilateral triangles, rectangles', 'V = ∫ₐᵇ A(x)dx', 'The "base" of each cross-section is typically bounded by two curves']
          },
          {
            label: 'Common shapes',
            options: ['V = ∫ₐᵇ A(x)dx', 'A(x) is the area of the cross-section at position x', 'The "base" of each cross-section is typically bounded by two curves', 'squares, semicircles, equilateral triangles, rectangles']
          }
        ],
        correctAnswers: ['V = ∫ₐᵇ A(x)dx', 'squares, semicircles, equilateral triangles, rectangles'],
        hint1: 'Think about what each concept specifically describes in Volumes by Cross Sections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Volumes by Cross Sections describes a specific idea. Known cross-sections perpendicular to the x-axis: V = ∫ₐᵇ A(x)dx. Common shapes: squares, semicircles, equilateral triangles, rectangles.'
      }
    }
  ]
}
