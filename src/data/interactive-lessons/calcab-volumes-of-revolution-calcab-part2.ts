export const calcABVolumesPart2Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum2-intro',
      type: 'text' as const,
      content: `
# Washer Method

**Part 2 of 7 — Washer Method**

### 1. Washer method

V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx

### 2. R(x) = outer radius, r(x) = inner radius

R(x) = outer radius, r(x) = inner radius

### 3. Use when there is a gap between the region and the axis of revolution

Use when there is a gap between the region and the axis of revolution

### 4. Cross-sections are washers (disks with holes)

Cross-sections are washers (disks with holes)
      `
    },
    {
      id: 'volum2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of washer method?',
            options: [
              'Washer method',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Washer method: V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx'
          },
          {
            question: 'In the context of washer method, which is accurate?',
            options: [
              'Use when there is a gap between the region and the axis of revolution',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Use when there is a gap between the region and the axis of revolution'
          }
        ]
      }
    },
    {
      id: 'volum2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Washer method**: V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx
- **R(x) = outer radius, r(x) = inner radius**
- **Use when there is a gap between the region and the axis of revolution**
- **Cross-sections are washers (disks with holes)**
      `
    },
    {
      id: 'volum2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to washer method?',
            options: [
              'Cross-sections are washers (disks with holes)',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Cross-sections are washers (disks with holes)'
          }
        ]
      }
    },
    {
      id: 'volum2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Washer method',
            options: ['V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'R(x) = outer radius, r(x) = inner radius',
            options: ['R(x) = outer radius, r(x) = inner radius', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use when there is a gap between the region and the axis of revolution',
            options: ['Use when there is a gap between the region and the', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'R(x) = outer radius, r(x) = inner radius', 'Use when there is a gap between the region and the'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Washer Method.'
      }
    }
  ]
}
