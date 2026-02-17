export const satPassportAdvPart7Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Passport to Advanced Math = ~28% of SAT Math.

Focus on creating, solving, and interpreting nonlinear expressions.
      `
    },
    {
      id: 'sat-p7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Passport to Advanced Math = ~28% of SAT…?',
            options: [
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Know how to move between forms of quadratics.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Passport to Advanced Math = ~28% of SAT Math. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Focus on creating, solving, and interpreting nonlinear expressions.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Know how to move between forms of quadratics.',
              'Read graphs carefully — the SAT tests interpretation more than computation.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Know how to move between forms of quadratics. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Know how to move between forms of quadratics.

**SAT Tip:** Read graphs carefully — the SAT tests interpretation more than computation.
      `
    },
    {
      id: 'sat-p7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes SAT Tip?',
            options: [
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Know how to move between forms of quadratics.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Know how to move between forms of quadratics.', 'Passport to Advanced Math = ~28% of SAT Math.', 'Read graphs carefully — the SAT tests interpretation more than computation.', 'Focus on creating, solving, and interpreting nonlinear expressions.']
          },
          {
            label: 'SAT Tip',
            options: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.', 'Focus on creating, solving, and interpreting nonlinear expressions.', 'Passport to Advanced Math = ~28% of SAT Math.']
          }
        ],
        correctAnswers: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Key Insight: Know how to move between forms of quadratics. SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation.'
      }
    }
  ]
}
