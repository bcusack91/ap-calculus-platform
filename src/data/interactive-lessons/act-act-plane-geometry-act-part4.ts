export const actPlaneGeomPart4Data = {
  topicSlug: 'act-plane-geometry-act',
  sections: [
    {
      id: 'act-p4-intro',
      type: 'text' as const,
      content: `
# Circles

**Part 4 of 7 — Circles**

Area = $\\pi r^{2}$; Circumference = 2πr = πd.

Arc length = (central angle/360°) × circumference.
      `
    },
    {
      id: 'act-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Area = $\\pi r^{2}$; Circumference = 2πr = πd.?',
            options: [
              'Arc length = (central angle/360°) × circumference.',
              'Inscribed angle = half the central angle (same arc).',
              'Area = $\\pi r^{2}$; Circumference = 2πr = πd.',
              'Sector area = (central angle/360°) × $\\pi r^{2}$.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area = $\\pi r^{2}$; Circumference = 2πr = πd. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Sector area = (central angle/360°) × $\\pi r^{2}$.',
              'Inscribed angle = half the central angle (same arc).',
              'Area = $\\pi r^{2}$; Circumference = 2πr = πd.',
              'Arc length = (central angle/360°) × circumference.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Sector area = (central angle/360°) × $\\pi r^{2}$. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-p4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Sector area = (central angle/360°) × $\\pi r^{2}$.

**ACT Tip:** Inscribed angle = half the central angle (same arc).
      `
    },
    {
      id: 'act-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Arc length = (central angle/360°) × circumference.',
              'Inscribed angle = half the central angle (same arc).',
              'Sector area = (central angle/360°) × $\\pi r^{2}$.',
              'Area = $\\pi r^{2}$; Circumference = 2πr = πd.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ACT Tip: Inscribed angle = half the central angle (same arc). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Inscribed angle = half the central angle (same arc).', 'Area = $\\pi r^{2}$; Circumference = 2πr = πd.', 'Arc length = (central angle/360°) × circumference.', 'Sector area = (central angle/360°) × $\\pi r^{2}$.']
          },
          {
            label: 'ACT Tip',
            options: ['Arc length = (central angle/360°) × circumference.', 'Area = $\\pi r^{2}$; Circumference = 2πr = πd.', 'Sector area = (central angle/360°) × $\\pi r^{2}$.', 'Inscribed angle = half the central angle (same arc).']
          }
        ],
        correctAnswers: ['Sector area = (central angle/360°) × $\\pi r^{2}$.', 'Inscribed angle = half the central angle (same arc).'],
        hint1: 'Think about what each concept specifically describes in Circles.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Circles describes a specific idea. Key Insight: Sector area = (central angle/360°) × $\\pi r^{2}$. ACT Tip: Inscribed angle = half the central angle (same arc).'
      }
    }
  ]
}
