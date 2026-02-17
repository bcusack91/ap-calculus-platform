export const satPassportAdvPart6Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Passport to Advanced Math = ~28% of SAT Math.

Focus on creating, solving, and interpreting nonlinear expressions.
      `
    },
    {
      id: 'sat-p6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Passport to Advanced Math = ~28% of SAT…?',
            options: [
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Know how to move between forms of quadratics.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Passport to Advanced Math = ~28% of SAT Math. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Know how to move between forms of quadratics.',
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Know how to move between forms of quadratics. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Know how to move between forms of quadratics.

**SAT Tip:** Read graphs carefully — the SAT tests interpretation more than computation.
      `
    },
    {
      id: 'sat-p6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Know how to move between forms of quadratics.',
              'Focus on creating, solving, and interpreting nonlinear expressions.',
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Passport to Advanced Math = ~28% of SAT Math.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.', 'Passport to Advanced Math = ~28% of SAT Math.', 'Focus on creating, solving, and interpreting nonlinear expressions.']
          },
          {
            label: 'SAT Tip',
            options: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.', 'Passport to Advanced Math = ~28% of SAT Math.', 'Focus on creating, solving, and interpreting nonlinear expressions.']
          }
        ],
        correctAnswers: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Key Insight: Know how to move between forms of quadratics. SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation.'
      }
    }
  ]
}
