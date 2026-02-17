export const calcBCExamStrategiesPart3Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'bc-ex3-intro',
      type: 'text' as const,
      content: `
# Parametric & Polar Strategies

**Part 3 of 7 — Parametric & Polar Strategies**

### 1. Parametric FRQ

find dy/dx, tangent lines, arc length, area

### 2. Polar FRQ

area = ½∫r²dθ, find tangent lines, intersections

### 3. Vector motion

position, velocity, speed, distance, direction

### 4. Always set up the integral clearly even if you use a calculator to evaluate

Always set up the integral clearly even if you use a calculator to evaluate
      `
    },
    {
      id: 'bc-ex3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Parametric FRQ?',
            options: [
              'find dy/dx, tangent lines, arc length, area',
              'position, velocity, speed, distance, direction',
              'Always set up the integral clearly even if you use a calculator to evaluate',
              'area = ½∫r²dθ, find tangent lines, intersections'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Parametric FRQ: find dy/dx, tangent lines, arc length, area. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Vector motion?',
            options: [
              'position, velocity, speed, distance, direction',
              'area = ½∫r²dθ, find tangent lines, intersections',
              'find dy/dx, tangent lines, arc length, area',
              'Always set up the integral clearly even if you use a calculator to evaluate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Vector motion: position, velocity, speed, distance, direction. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'bc-ex3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parametric FRQ**: find dy/dx, tangent lines, arc length, area
- **Polar FRQ**: area = ½∫r²dθ, find tangent lines, intersections
- **Vector motion**: position, velocity, speed, distance, direction
- **Always set up the integral clearly even if you use a calculator to evaluate**
      `
    },
    {
      id: 'bc-ex3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Always set up the integral clearly even… is correct?',
            options: [
              'area = ½∫r²dθ, find tangent lines, intersections',
              'find dy/dx, tangent lines, arc length, area',
              'position, velocity, speed, distance, direction',
              'Always set up the integral clearly even if you use a calculator to evaluate'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Always set up the integral clearly even if you use a calculator to evaluate. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'bc-ex3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric FRQ',
            options: ['find dy/dx, tangent lines, arc length, area', 'Always set up the integral clearly even if you use a calculator to evaluate', 'position, velocity, speed, distance, direction', 'area = ½∫r²dθ, find tangent lines, intersections']
          },
          {
            label: 'Polar FRQ',
            options: ['area = ½∫r²dθ, find tangent lines, intersections', 'Always set up the integral clearly even if you use a calculator to evaluate', 'position, velocity, speed, distance, direction', 'find dy/dx, tangent lines, arc length, area']
          },
          {
            label: 'Vector motion',
            options: ['Always set up the integral clearly even if you use a calculator to evaluate', 'area = ½∫r²dθ, find tangent lines, intersections', 'position, velocity, speed, distance, direction', 'find dy/dx, tangent lines, arc length, area']
          }
        ],
        correctAnswers: ['find dy/dx, tangent lines, arc length, area', 'area = ½∫r²dθ, find tangent lines, intersections', 'position, velocity, speed, distance, direction'],
        hint1: 'Think about what each concept specifically describes in Parametric & Polar Strategies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parametric & Polar Strategies describes a specific idea. Parametric FRQ: find dy/dx, tangent lines, arc length, area. Polar FRQ: area = ½∫r²dθ, find tangent lines, intersections. Vector motion: position, velocity, speed, distance, direction.'
      }
    }
  ]
}
