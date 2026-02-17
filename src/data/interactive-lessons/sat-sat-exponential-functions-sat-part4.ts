export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-e4-intro',
      type: 'text' as const,
      content: `
# Compound Interest

**Part 4 of 7 — Compound Interest**

A = P(1 + r/n)^(nt) — compound interest formula.

P = principal, r = annual rate, n = compounds per year, t = years.
      `
    },
    {
      id: 'sat-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains A = P(1 + r/n)^(nt) — compound interest…?',
            options: [
              'SAT focuses on interpreting parts of the formula.',
              'A = P(1 + r/n)^(nt) — compound interest formula.',
              'Continuous compounding: A = Pe^(rt).',
              'P = principal, r = annual rate, n = compounds per year, t = years.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — A = P(1 + r/n)^(nt) — compound interest formula. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Compound Interest, which explains Key Insight?',
            options: [
              'SAT focuses on interpreting parts of the formula.',
              'P = principal, r = annual rate, n = compounds per year, t = years.',
              'Continuous compounding: A = Pe^(rt).',
              'A = P(1 + r/n)^(nt) — compound interest formula.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Continuous compounding: A = Pe^(rt). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Continuous compounding: A = Pe^(rt).

**SAT Tip:** SAT focuses on interpreting parts of the formula.
      `
    },
    {
      id: 'sat-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'P = principal, r = annual rate, n = compounds per year, t = years.',
              'SAT focuses on interpreting parts of the formula.',
              'Continuous compounding: A = Pe^(rt).',
              'A = P(1 + r/n)^(nt) — compound interest formula.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: SAT focuses on interpreting parts of the formula. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['SAT focuses on interpreting parts of the formula.', 'A = P(1 + r/n)^(nt) — compound interest formula.', 'Continuous compounding: A = Pe^(rt).', 'P = principal, r = annual rate, n = compounds per year, t = years.']
          },
          {
            label: 'SAT Tip',
            options: ['SAT focuses on interpreting parts of the formula.', 'P = principal, r = annual rate, n = compounds per year, t = years.', 'Continuous compounding: A = Pe^(rt).', 'A = P(1 + r/n)^(nt) — compound interest formula.']
          }
        ],
        correctAnswers: ['Continuous compounding: A = Pe^(rt).', 'SAT focuses on interpreting parts of the formula.'],
        hint1: 'Think about what each concept specifically describes in Compound Interest.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Compound Interest describes a specific idea. Key Insight: Continuous compounding: A = Pe^(rt). SAT Tip: SAT focuses on interpreting parts of the formula.'
      }
    }
  ]
}
