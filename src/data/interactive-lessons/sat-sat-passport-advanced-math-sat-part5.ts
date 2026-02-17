export const satPassportAdvPart5Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p5-intro',
      type: 'text' as const,
      content: `
# SAT Advanced Math Strategy

**Part 5 of 7 — SAT Advanced Math Strategy**

Passport to Advanced Math = ~28% of SAT Math.

Focus on creating, solving, and interpreting nonlinear expressions.
      `
    },
    {
      id: 'sat-p5-quiz1',
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
              'Know how to move between forms of quadratics.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Passport to Advanced Math = ~28% of SAT Math. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Know how to move between forms of quadratics.',
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Focus on creating, solving, and interpreting nonlinear expressions.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Know how to move between forms of quadratics. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Know how to move between forms of quadratics.

**SAT Tip:** Read graphs carefully — the SAT tests interpretation more than computation.
      `
    },
    {
      id: 'sat-p5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Passport to Advanced Math = ~28% of SAT Math.',
              'Read graphs carefully — the SAT tests interpretation more than computation.',
              'Focus on creating, solving, and interpreting nonlinear expressions.',
              'Know how to move between forms of quadratics.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Read graphs carefully — the SAT tests interpretation more than computation.', 'Focus on creating, solving, and interpreting nonlinear expressions.', 'Passport to Advanced Math = ~28% of SAT Math.', 'Know how to move between forms of quadratics.']
          },
          {
            label: 'SAT Tip',
            options: ['Focus on creating, solving, and interpreting nonlinear expressions.', 'Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.', 'Passport to Advanced Math = ~28% of SAT Math.']
          }
        ],
        correctAnswers: ['Know how to move between forms of quadratics.', 'Read graphs carefully — the SAT tests interpretation more than computation.'],
        hint1: 'Think about what each concept specifically describes in SAT Advanced Math Strategy.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in SAT Advanced Math Strategy describes a specific idea. Key Insight: Know how to move between forms of quadratics. SAT Tip: Read graphs carefully — the SAT tests interpretation more than computation.'
      }
    }
  ]
}
