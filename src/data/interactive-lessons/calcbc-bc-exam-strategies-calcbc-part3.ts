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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of parametric & polar strategies?',
            options: [
              'Parametric FRQ',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parametric FRQ: find dy/dx, tangent lines, arc length, area'
          },
          {
            question: 'In the context of parametric & polar strategies, which is accurate?',
            options: [
              'position, velocity, speed, distance, direction',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Vector motion: position, velocity, speed, distance, direction'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parametric & polar strategies?',
            options: [
              'Always set up the integral clearly even if you use a calculator to evaluate',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Always set up the integral clearly even if you use a calculator to evaluate'
          }
        ]
      }
    },
    {
      id: 'bc-ex3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric FRQ',
            options: ['find dy/dx, tangent lines, arc length, area', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Polar FRQ',
            options: ['area = ½∫r²dθ, find tangent lines, intersections', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Vector motion',
            options: ['position, velocity, speed, distance, direction', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['find dy/dx, tangent lines, arc length, area', 'area = ½∫r²dθ, find tangent lines, intersections', 'position, velocity, speed, distance, direction'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parametric & Polar Strategies.'
      }
    }
  ]
}
