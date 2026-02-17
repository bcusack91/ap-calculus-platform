export const actIntermAlgPart2Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i2-intro',
      type: 'text' as const,
      content: `
# Polynomial Operations

**Part 2 of 7 — Polynomial Operations**

Add/subtract: combine like terms.

Multiply: distribute (FOIL for binomials).
      `
    },
    {
      id: 'act-i2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Add/subtract" refer to in ACT prep?',
            options: [
              'Factor: GCF, difference of squares, trinomial factoring, grouping.',
              'distribute (FOIL for binomials).',
              'combine like terms.',
              'Divide: long division or synthetic division.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Add/subtract: combine like terms. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polynomial Operations, which explains Key Insight?',
            options: [
              'distribute (FOIL for binomials).',
              'combine like terms.',
              'Factor: GCF, difference of squares, trinomial factoring, grouping.',
              'Divide: long division or synthetic division.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Factor: GCF, difference of squares, trinomial factoring, grouping. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'act-i2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Factor: GCF, difference of squares, trinomial factoring, grouping.

**ACT Tip:** Divide: long division or synthetic division.
      `
    },
    {
      id: 'act-i2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Polynomial Operations, which correctly describes ACT Tip?',
            options: [
              'Divide: long division or synthetic division.',
              'combine like terms.',
              'distribute (FOIL for binomials).',
              'Factor: GCF, difference of squares, trinomial factoring, grouping.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: Divide: long division or synthetic division. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-i2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Add/subtract',
            options: ['Divide: long division or synthetic division.', 'Factor: GCF, difference of squares, trinomial factoring, grouping.', 'combine like terms.', 'distribute (FOIL for binomials).']
          },
          {
            label: 'Multiply',
            options: ['distribute (FOIL for binomials).', 'Divide: long division or synthetic division.', 'Factor: GCF, difference of squares, trinomial factoring, grouping.', 'combine like terms.']
          },
          {
            label: 'Key Insight',
            options: ['Divide: long division or synthetic division.', 'Factor: GCF, difference of squares, trinomial factoring, grouping.', 'distribute (FOIL for binomials).', 'combine like terms.']
          }
        ],
        correctAnswers: ['combine like terms.', 'distribute (FOIL for binomials).', 'Factor: GCF, difference of squares, trinomial factoring, grouping.'],
        hint1: 'Think about what each concept specifically describes in Polynomial Operations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomial Operations describes a specific idea. Add/subtract: combine like terms. Multiply: distribute (FOIL for binomials). Key Insight: Factor: GCF, difference of squares, trinomial factoring, grouping.'
      }
    }
  ]
}
