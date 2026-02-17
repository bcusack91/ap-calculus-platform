export const satQuadraticsPart6Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).

Maximum height: find the vertex.
      `
    },
    {
      id: 'sat-q6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Projectile motion?',
            options: [
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'find the vertex.',
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'Area problems: set up quadratic from length/width relationships.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'find the vertex.',
              'Area problems: set up quadratic from length/width relationships.',
              'When does it hit the ground? Set h(t) = 0 and solve.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: When does it hit the ground? Set h(t) = 0 and solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-q6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** When does it hit the ground? Set h(t) = 0 and solve.

**SAT Tip:** Area problems: set up quadratic from length/width relationships.
      `
    },
    {
      id: 'sat-q6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'find the vertex.',
              'Area problems: set up quadratic from length/width relationships.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'When does it hit the ground? Set h(t) = 0 and solve.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Area problems: set up quadratic from length/width relationships. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projectile motion',
            options: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'When does it hit the ground? Set h(t) = 0 and solve.', 'Area problems: set up quadratic from length/width relationships.', 'find the vertex.']
          },
          {
            label: 'Maximum height',
            options: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'Area problems: set up quadratic from length/width relationships.', 'When does it hit the ground? Set h(t) = 0 and solve.', 'find the vertex.']
          },
          {
            label: 'Key Insight',
            options: ['When does it hit the ground? Set h(t) = 0 and solve.', 'find the vertex.', 'Area problems: set up quadratic from length/width relationships.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).']
          }
        ],
        correctAnswers: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). Maximum height: find the vertex. Key Insight: When does it hit the ground? Set h(t) = 0 and solve.'
      }
    }
  ]
}
