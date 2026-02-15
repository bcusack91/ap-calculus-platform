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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of volumes by cross sections?',
            options: [
              'Known cross-sections perpendicular to the x-axis',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Known cross-sections perpendicular to the x-axis: V = ∫ₐᵇ A(x)dx'
          },
          {
            question: 'In the context of volumes by cross sections, which is accurate?',
            options: [
              'squares, semicircles, equilateral triangles, rectangles',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Common shapes: squares, semicircles, equilateral triangles, rectangles'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to volumes by cross sections?',
            options: [
              'The "base" of each cross-section is typically bounded by two curves',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'The "base" of each cross-section is typically bounded by two curves'
          }
        ]
      }
    },
    {
      id: 'volum4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Known cross-sections perpendicular to the x-axis',
            options: ['V = ∫ₐᵇ A(x)dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'A(x) is the area of the cross-section at position x',
            options: ['A(x) is the area of the cross-section at position ', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Common shapes',
            options: ['squares, semicircles, equilateral triangles, recta', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['V = ∫ₐᵇ A(x)dx', 'A(x) is the area of the cross-section at position ', 'squares, semicircles, equilateral triangles, recta'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Volumes by Cross Sections.'
      }
    }
  ]
}
