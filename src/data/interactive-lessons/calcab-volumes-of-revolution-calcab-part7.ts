export const calcABVolumesPart7Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Sketch the region and axis of revolution

Sketch the region and axis of revolution

### 2. Determine if you need disks, washers, or known cross-sections

Determine if you need disks, washers, or known cross-sections

### 3. Identify the correct radii and bounds of integration

Identify the correct radii and bounds of integration

### 4. Integrate with respect to the variable parallel to the axis of revolution

Integrate with respect to the variable parallel to the axis of revolution
      `
    },
    {
      id: 'volum7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Sketch the region and axis of revolution',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Sketch the region and axis of revolution'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'Identify the correct radii and bounds of integration',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Identify the correct radii and bounds of integration'
          }
        ]
      }
    },
    {
      id: 'volum7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Sketch the region and axis of revolution**
- **Determine if you need disks, washers, or known cross-sections**
- **Identify the correct radii and bounds of integration**
- **Integrate with respect to the variable parallel to the axis of revolution**
      `
    },
    {
      id: 'volum7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'Integrate with respect to the variable parallel to the axis of revolution',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Integrate with respect to the variable parallel to the axis of revolution'
          }
        ]
      }
    },
    {
      id: 'volum7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sketch the region and axis of revolution',
            options: ['Sketch the region and axis of revolution', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Determine if you need disks, washers, or known cross-sections',
            options: ['Determine if you need disks, washers, or known cro', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Identify the correct radii and bounds of integration',
            options: ['Identify the correct radii and bounds of integrati', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Sketch the region and axis of revolution', 'Determine if you need disks, washers, or known cro', 'Identify the correct radii and bounds of integrati'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
