export const satGeometryPart3Data = {
  topicSlug: 'sat-geometry-angles-sat',
  sections: [
    {
      id: 'sat-g3-intro',
      type: 'text' as const,
      content: `
# Circles

**Part 3 of 7 — Circles**

Area = πr²; Circumference = 2πr.

Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².
      `
    },
    {
      id: 'sat-g3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Area = πr²; Circumference = 2πr.?',
            options: [
              'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².',
              'Inscribed angle = half the intercepted arc.',
              'Area = πr²; Circumference = 2πr.',
              'Central angle = arc measure.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area = πr²; Circumference = 2πr. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Circles, which explains Key Insight?',
            options: [
              'Area = πr²; Circumference = 2πr.',
              'Central angle = arc measure.',
              'Inscribed angle = half the intercepted arc.',
              'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Central angle = arc measure. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Central angle = arc measure.

**SAT Tip:** Inscribed angle = half the intercepted arc.
      `
    },
    {
      id: 'sat-g3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Circles, which correctly describes SAT Tip?',
            options: [
              'Inscribed angle = half the intercepted arc.',
              'Area = πr²; Circumference = 2πr.',
              'Central angle = arc measure.',
              'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Inscribed angle = half the intercepted arc. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Central angle = arc measure.', 'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².', 'Inscribed angle = half the intercepted arc.', 'Area = πr²; Circumference = 2πr.']
          },
          {
            label: 'SAT Tip',
            options: ['Inscribed angle = half the intercepted arc.', 'Central angle = arc measure.', 'Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr².', 'Area = πr²; Circumference = 2πr.']
          }
        ],
        correctAnswers: ['Central angle = arc measure.', 'Inscribed angle = half the intercepted arc.'],
        hint1: 'Think about what each concept specifically describes in Circles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Circles describes a specific idea. Key Insight: Central angle = arc measure. SAT Tip: Inscribed angle = half the intercepted arc.'
      }
    }
  ]
}
