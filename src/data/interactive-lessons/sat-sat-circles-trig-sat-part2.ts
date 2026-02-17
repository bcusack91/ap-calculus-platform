export const satCirclesTrigPart2Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c2-intro',
      type: 'text' as const,
      content: `
# Arc Length & Sectors

**Part 2 of 7 — Arc Length & Sectors**

Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).

Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).
      `
    },
    {
      id: 'sat-c2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Arc length = (θ/360°) × 2πr (degrees)…?',
            options: [
              'Convert: radians = degrees × π/180.',
              'SAT gives formulas at the start — know when to use them.',
              'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).',
              'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Arc Length & Sectors, which explains Key Insight?',
            options: [
              'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).',
              'SAT gives formulas at the start — know when to use them.',
              'Convert: radians = degrees × π/180.',
              'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Convert: radians = degrees × π/180. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Convert: radians = degrees × π/180.

**SAT Tip:** SAT gives formulas at the start — know when to use them.
      `
    },
    {
      id: 'sat-c2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Arc Length & Sectors, which correctly describes SAT Tip?',
            options: [
              'SAT gives formulas at the start — know when to use them.',
              'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).',
              'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).',
              'Convert: radians = degrees × π/180.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: SAT gives formulas at the start — know when to use them. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Convert: radians = degrees × π/180.', 'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).', 'Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).', 'SAT gives formulas at the start — know when to use them.']
          },
          {
            label: 'SAT Tip',
            options: ['Arc length = (θ/360°) × 2πr (degrees) or s = rθ (radians).', 'Sector area = (θ/360°) × πr² (degrees) or A = ½r²θ (radians).', 'SAT gives formulas at the start — know when to use them.', 'Convert: radians = degrees × π/180.']
          }
        ],
        correctAnswers: ['Convert: radians = degrees × π/180.', 'SAT gives formulas at the start — know when to use them.'],
        hint1: 'Think about what each concept specifically describes in Arc Length & Sectors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Arc Length & Sectors describes a specific idea. Key Insight: Convert: radians = degrees × π/180. SAT Tip: SAT gives formulas at the start — know when to use them.'
      }
    }
  ]
}
