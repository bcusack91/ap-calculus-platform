export const satQuadraticsPart5Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q5-intro',
      type: 'text' as const,
      content: `
# Quadratic Word Problems

**Part 5 of 7 — Quadratic Word Problems**

Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).

Maximum height: find the vertex.
      `
    },
    {
      id: 'sat-q5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Projectile motion?',
            options: [
              'find the vertex.',
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'Area problems: set up quadratic from length/width relationships.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'find the vertex.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
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
      id: 'sat-q5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** When does it hit the ground? Set h(t) = 0 and solve.

**SAT Tip:** Area problems: set up quadratic from length/width relationships.
      `
    },
    {
      id: 'sat-q5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Quadratic Word Problems, which correctly describes SAT Tip?',
            options: [
              'Area problems: set up quadratic from length/width relationships.',
              'When does it hit the ground? Set h(t) = 0 and solve.',
              'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).',
              'find the vertex.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Area problems: set up quadratic from length/width relationships. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projectile motion',
            options: ['Area problems: set up quadratic from length/width relationships.', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).']
          },
          {
            label: 'Maximum height',
            options: ['find the vertex.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'When does it hit the ground? Set h(t) = 0 and solve.', 'Area problems: set up quadratic from length/width relationships.']
          },
          {
            label: 'Key Insight',
            options: ['Area problems: set up quadratic from length/width relationships.', 'When does it hit the ground? Set h(t) = 0 and solve.', 'h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.']
          }
        ],
        correctAnswers: ['h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters).', 'find the vertex.', 'When does it hit the ground? Set h(t) = 0 and solve.'],
        hint1: 'Think about what each concept specifically describes in Quadratic Word Problems.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Quadratic Word Problems describes a specific idea. Projectile motion: h(t) = -16t² + v₀t + h₀ (feet) or h(t) = -4.9t² + v₀t + h₀ (meters). Maximum height: find the vertex. Key Insight: When does it hit the ground? Set h(t) = 0 and solve.'
      }
    }
  ]
}
