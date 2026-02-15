export const satExponentsPart3Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e3-intro',
      type: 'text' as const,
      content: `
# Radical Expressions

**Part 3 of 7 — Radical Expressions**

√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).

Simplify radicals by factoring out perfect squares/cubes.
      `
    },
    {
      id: 'sat-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes √a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n)?',
            options: [
              '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n) is a fundamental concept in SAT Math',
              'Simplify radicals by factoring out perfect squares/cubes',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n)'
          }
        ]
      }
    },
    {
      id: 'sat-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rationalize denominators: multiply by √a/√a.

**SAT Tip:** Add/subtract radicals: only combine like radicals (same radicand).
      `
    },
    {
      id: 'sat-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for radical expressions?',
            options: [
              'Rationalize denominators: multiply by √a/√a',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Rationalize denominators: multiply by √a/√a'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Radical Expressions:',
            options: ['√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n)', 'Simplify radicals by factoring out perfect squares', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Rationalize denominators: multiply by √a/√a', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n)', 'Rationalize denominators: multiply by √a/√a'],
        hint1: 'Think about radical expressions',
        hint2: 'Consider the best SAT strategy',
        explanation: '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n). Rationalize denominators: multiply by √a/√a.'
      }
    }
  ]
}
