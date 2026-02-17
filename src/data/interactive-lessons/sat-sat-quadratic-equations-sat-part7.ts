export const satQuadraticsPart7Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).

Maximum height: find the vertex.
      `
    },
    {
      id: 'sat-q7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Projectile motion?',
            options: [
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'find the vertex.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'Area problems: set up quadratic from length/width relationships.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Area problems: set up quadratic from length/width relationships.',
              'find the vertex.',
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: When does it hit the ground? Set h(t) = 0 and solve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-q7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** When does it hit the ground? Set h(t) = 0 and solve.

**SAT Tip:** Area problems: set up quadratic from length/width relationships.
      `
    },
    {
      id: 'sat-q7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'Area problems: set up quadratic from length/width relationships.',
              'find the vertex.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Area problems: set up quadratic from length/width relationships. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projectile motion',
            options: ['Area problems: set up quadratic from length/width relationships.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.']
          },
          {
            label: 'Maximum height',
            options: ['When does it hit the ground? Set h(t) = 0 and solve.', 'Area problems: set up quadratic from length/width relationships.', 'find the vertex.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).']
          },
          {
            label: 'Key Insight',
            options: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.', 'Area problems: set up quadratic from length/width relationships.']
          }
        ],
        correctAnswers: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). Maximum height: find the vertex. Key Insight: When does it hit the ground? Set h(t) = 0 and solve.'
      }
    }
  ]
}
