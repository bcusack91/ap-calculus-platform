export const satExponentsPart2Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e2-intro',
      type: 'text' as const,
      content: `
# Negative & Zero Exponents

**Part 2 of 7 — Negative & Zero Exponents**

a⁰ = 1 for any a ≠ 0.

a⁻ⁿ = 1/aⁿ — move to denominator and make positive.
      `
    },
    {
      id: 'sat-e2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains a⁰ = 1 for any a ≠ 0.?',
            options: [
              'Simplify step by step: apply rules, then convert negative exponents.',
              '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.',
              'a⁻ⁿ = 1/aⁿ — move to denominator and make positive.',
              'a⁰ = 1 for any a ≠ 0.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — a⁰ = 1 for any a ≠ 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.',
              'a⁻ⁿ = 1/aⁿ — move to denominator and make positive.',
              'Simplify step by step: apply rules, then convert negative exponents.',
              'a⁰ = 1 for any a ≠ 0.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: (a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** (a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.

**SAT Tip:** Simplify step by step: apply rules, then convert negative exponents.
      `
    },
    {
      id: 'sat-e2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Negative & Zero Exponents, which correctly describes SAT Tip?',
            options: [
              'a⁻ⁿ = 1/aⁿ — move to denominator and make positive.',
              'Simplify step by step: apply rules, then convert negative exponents.',
              '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.',
              'a⁰ = 1 for any a ≠ 0.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Simplify step by step: apply rules, then convert negative exponents. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Simplify step by step: apply rules, then convert negative exponents.', '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.', 'a⁻ⁿ = 1/aⁿ — move to denominator and make positive.', 'a⁰ = 1 for any a ≠ 0.']
          },
          {
            label: 'SAT Tip',
            options: ['a⁻ⁿ = 1/aⁿ — move to denominator and make positive.', 'Simplify step by step: apply rules, then convert negative exponents.', '(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.', 'a⁰ = 1 for any a ≠ 0.']
          }
        ],
        correctAnswers: ['(a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction.', 'Simplify step by step: apply rules, then convert negative exponents.'],
        hint1: 'Think about what each concept specifically describes in Negative & Zero Exponents.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Negative & Zero Exponents describes a specific idea. Key Insight: (a/b)⁻ⁿ = (b/a)ⁿ — flip the fraction. SAT Tip: Simplify step by step: apply rules, then convert negative exponents.'
      }
    }
  ]
}
