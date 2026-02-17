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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Disk method" refer to in calculus?',
            options: [
              'Each cross-section is a disk with radius R(x) = |f(x)|',
              'The volume element is π[R(x)]²Δx — a thin cylinder',
              'Use when the region touches the axis of revolution (no hole)',
              'V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Disk method: V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Volumes Of Revolution, which explains The volume element is π[R(x)]²Δx — a…?',
            options: [
              'V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis',
              'The volume element is π[R(x)]²Δx — a thin cylinder',
              'Use when the region touches the axis of revolution (no hole)',
              'Each cross-section is a disk with radius R(x) = |f(x)|'
            ],
            correctAnswer: 1,
            explanation: 'Correct — The volume element is π[R(x)]²Δx — a thin cylinder. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Use when the region touches the axis of…?',
            options: [
              'V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis',
              'Use when the region touches the axis of revolution (no hole)',
              'Each cross-section is a disk with radius R(x) = |f(x)|',
              'The volume element is π[R(x)]²Δx — a thin cylinder'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Use when the region touches the axis of revolution (no hole). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'volum1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Disk method',
            options: ['The volume element is π[R(x)]²Δx — a thin cylinder', 'Each cross-section is a disk with radius R(x) = |f(x)|', 'V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Use when the region touches the axis of revolution (no hole)']
          },
          {
            label: 'Each cross-section is a disk with…',
            options: ['The volume element is π[R(x)]²Δx — a thin cylinder', 'V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Each cross-section is a disk with radius R(x) = |f(x)|', 'Use when the region touches the axis of revolution (no hole)']
          },
          {
            label: 'The volume element is π[R(x)]²Δx — a…',
            options: ['V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Each cross-section is a disk with radius R(x) = |f(x)|', 'The volume element is π[R(x)]²Δx — a thin cylinder', 'Use when the region touches the axis of revolution (no hole)']
          }
        ],
        correctAnswers: ['V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis', 'Each cross-section is a disk with radius R(x) = |f(x)|', 'The volume element is π[R(x)]²Δx — a thin cylinder'],
        hint1: 'Think about what each concept specifically describes in Volumes Of Revolution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Volumes Of Revolution describes a specific idea. Disk method: V = π∫ₐᵇ [R(x)]² dx for revolution about x-axis. Each cross-section is a disk with radius R(x) = |f(x)|. The volume element is π[R(x)]²Δx — a thin cylinder.'
      }
    }
  ]
}
