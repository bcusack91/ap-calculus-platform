export const satCirclesTrigPart4Data = {
  topicSlug: 'sat-circles-trig-sat',
  sections: [
    {
      id: 'sat-c4-intro',
      type: 'text' as const,
      content: `
# Unit Circle Basics

**Part 4 of 7 — Unit Circle Basics**

Unit circle: radius = 1, x = cos θ, y = sin θ.

Key angles: 0°, 30°, 45°, 60°, 90° and their radian equivalents.
      `
    },
    {
      id: 'sat-c4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Unit circle?',
            options: [
              'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.',
              '0°, 30°, 45°, 60°, 90° and their radian equivalents.',
              'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.',
              'radius = 1, x = cos θ, y = sin θ.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Unit circle: radius = 1, x = cos θ, y = sin θ. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Unit Circle Basics, which explains Key Insight?',
            options: [
              'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.',
              'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.',
              '0°, 30°, 45°, 60°, 90° and their radian equivalents.',
              'radius = 1, x = cos θ, y = sin θ.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-c4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.

**SAT Tip:** sin(45°) = cos(45°) = √2/2, tan(45°) = 1.
      `
    },
    {
      id: 'sat-c4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'radius = 1, x = cos θ, y = sin θ.',
              'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.',
              'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.',
              '0°, 30°, 45°, 60°, 90° and their radian equivalents.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: sin(45°) = cos(45°) = √2/2, tan(45°) = 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-c4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Unit circle',
            options: ['radius = 1, x = cos θ, y = sin θ.', 'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.', '0°, 30°, 45°, 60°, 90° and their radian equivalents.', 'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.']
          },
          {
            label: 'Key angles',
            options: ['sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.', '0°, 30°, 45°, 60°, 90° and their radian equivalents.', 'radius = 1, x = cos θ, y = sin θ.', 'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.']
          },
          {
            label: 'Key Insight',
            options: ['0°, 30°, 45°, 60°, 90° and their radian equivalents.', 'radius = 1, x = cos θ, y = sin θ.', 'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.', 'sin(45°) = cos(45°) = √2/2, tan(45°) = 1.']
          }
        ],
        correctAnswers: ['radius = 1, x = cos θ, y = sin θ.', '0°, 30°, 45°, 60°, 90° and their radian equivalents.', 'sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.'],
        hint1: 'Think about what each concept specifically describes in Unit Circle Basics.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Unit Circle Basics describes a specific idea. Unit circle: radius = 1, x = cos θ, y = sin θ. Key angles: 0°, 30°, 45°, 60°, 90° and their radian equivalents. Key Insight: sin(30°) = ½, cos(30°) = √3/2, tan(30°) = √3/3.'
      }
    }
  ]
}
