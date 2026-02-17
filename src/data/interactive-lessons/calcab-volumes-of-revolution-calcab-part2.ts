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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Washer method" refer to in calculus?',
            options: [
              'Cross-sections are washers (disks with holes)',
              'Use when there is a gap between the region and the axis of revolution',
              'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx',
              'R(x) = outer radius, r(x) = inner radius'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Washer method: V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Washer Method, which explains Use when there is a gap between the…?',
            options: [
              'Use when there is a gap between the region and the axis of revolution',
              'R(x) = outer radius, r(x) = inner radius',
              'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx',
              'Cross-sections are washers (disks with holes)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Use when there is a gap between the region and the axis of revolution. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Cross-sections are washers (disks with… is correct?',
            options: [
              'Use when there is a gap between the region and the axis of revolution',
              'R(x) = outer radius, r(x) = inner radius',
              'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx',
              'Cross-sections are washers (disks with holes)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Cross-sections are washers (disks with holes). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'volum2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Washer method',
            options: ['R(x) = outer radius, r(x) = inner radius', 'Use when there is a gap between the region and the axis of revolution', 'Cross-sections are washers (disks with holes)', 'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx']
          },
          {
            label: 'R(x) = outer radius, r(x) = inner radius',
            options: ['R(x) = outer radius, r(x) = inner radius', 'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'Use when there is a gap between the region and the axis of revolution', 'Cross-sections are washers (disks with holes)']
          },
          {
            label: 'Use when there is a gap between the…',
            options: ['Use when there is a gap between the region and the axis of revolution', 'V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'Cross-sections are washers (disks with holes)', 'R(x) = outer radius, r(x) = inner radius']
          }
        ],
        correctAnswers: ['V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx', 'R(x) = outer radius, r(x) = inner radius', 'Use when there is a gap between the region and the axis of revolution'],
        hint1: 'Think about what each concept specifically describes in Washer Method.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Washer Method describes a specific idea. Washer method: V = π∫ₐᵇ ([R(x)]² - [r(x)]²) dx. R(x) = outer radius, r(x) = inner radius. Use when there is a gap between the region and the axis of revolution.'
      }
    }
  ]
}
