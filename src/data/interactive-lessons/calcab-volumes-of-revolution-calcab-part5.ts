export const calcABVolumesPart5Data = {
  topicSlug: 'volumes-of-revolution-calcab',
  sections: [
    {
      id: 'volum5-intro',
      type: 'text' as const,
      content: `
# Setting Up Volume Integrals

**Part 5 of 7 — Setting Up Volume Integrals**

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
      id: 'volum5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Sketch the region and axis of revolution" refer to in calculus?',
            options: [
              'Determine if you need disks, washers, or known cross-sections',
              'Identify the correct radii and bounds of integration',
              'Integrate with respect to the variable parallel to the axis of revolution',
              'Sketch the region and axis of revolution'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sketch the region and axis of revolution. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Identify the correct radii and bounds…:',
            options: [
              'Identify the correct radii and bounds of integration',
              'Sketch the region and axis of revolution',
              'Determine if you need disks, washers, or known cross-sections',
              'Integrate with respect to the variable parallel to the axis of revolution'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Identify the correct radii and bounds of integration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'volum5-detail',
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
      id: 'volum5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Integrate with respect to the variable… is correct?',
            options: [
              'Determine if you need disks, washers, or known cross-sections',
              'Identify the correct radii and bounds of integration',
              'Sketch the region and axis of revolution',
              'Integrate with respect to the variable parallel to the axis of revolution'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Integrate with respect to the variable parallel to the axis of revolution. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'volum5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sketch the region and axis of revolution',
            options: ['Determine if you need disks, washers, or known cross-sections', 'Integrate with respect to the variable parallel to the axis of revolution', 'Identify the correct radii and bounds of integration', 'Sketch the region and axis of revolution']
          },
          {
            label: 'Determine if you need disks, washers,…',
            options: ['Integrate with respect to the variable parallel to the axis of revolution', 'Identify the correct radii and bounds of integration', 'Determine if you need disks, washers, or known cross-sections', 'Sketch the region and axis of revolution']
          },
          {
            label: 'Identify the correct radii and bounds…',
            options: ['Sketch the region and axis of revolution', 'Identify the correct radii and bounds of integration', 'Integrate with respect to the variable parallel to the axis of revolution', 'Determine if you need disks, washers, or known cross-sections']
          }
        ],
        correctAnswers: ['Sketch the region and axis of revolution', 'Determine if you need disks, washers, or known cross-sections', 'Identify the correct radii and bounds of integration'],
        hint1: 'Think about what each concept specifically describes in Setting Up Volume Integrals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Setting Up Volume Integrals describes a specific idea. Sketch the region and axis of revolution. Determine if you need disks, washers, or known cross-sections. Identify the correct radii and bounds of integration.'
      }
    }
  ]
}
