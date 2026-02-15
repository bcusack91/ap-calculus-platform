export const calcABVolumesPart1Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum1-intro',
      type: 'text' as const,
      content: `
# ∫ Volumes Of Revolution

**Part 1 of 7 — Disk Method**

### 1. Disk method

V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis

### 2. Each cross-section is a disk with radius R(x) = |f(x)|

Each cross-section is a disk with radius R(x) = |f(x)|

### 3. The volume element is π[R(x)]²Δx — a thin cylinder

The volume element is π[R(x)]²Δx — a thin cylinder

### 4. Use when the region touches the axis of revolution (no hole)

Use when the region touches the axis of revolution (no hole)
      `
    },
    {
      id: 'volum1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of disk method?',
            options: [
              'Disk method',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Disk method: V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis'
          },
          {
            question: 'In the context of disk method, which is accurate?',
            options: [
              'The volume element is π[R(x)]²Δx — a thin cylinder',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The volume element is π[R(x)]²Δx — a thin cylinder'
          }
        ]
      }
    },
    {
      id: 'volum1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Disk method**: V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis
- **Each cross-section is a disk with radius R(x) = |f(x)|**
- **The volume element is π[R(x)]²Δx — a thin cylinder**
- **Use when the region touches the axis of revolution (no hole)**
      `
    },
    {
      id: 'volum1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to disk method?',
            options: [
              'Use when the region touches the axis of revolution (no hole)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Use when the region touches the axis of revolution (no hole)'
          }
        ]
      }
    },
    {
      id: 'volum1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Disk method',
            options: ['V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Each cross-section is a disk with radius R(x) = |f(x)|',
            options: ['Each cross-section is a disk with radius R(x) = |f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The volume element is π[R(x)]²Δx — a thin cylinder',
            options: ['The volume element is π[R(x)]²Δx — a thin cylinder', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Each cross-section is a disk with radius R(x) = |f', 'The volume element is π[R(x)]²Δx — a thin cylinder'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Disk Method.'
      }
    }
  ]
}
