export const satExponentsPart4Data = {
  topicSlug: 'sat-exponents-radicals-sat',
  sections: [
    {
      id: 'sat-e4-intro',
      type: 'text' as const,
      content: `
# Rational Exponents

**Part 4 of 7 — Rational Exponents**

a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.

Convert between radical and exponent form.
      `
    },
    {
      id: 'sat-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ?',
            options: [
              'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ is a fundamental concept in SAT Math',
              'Convert between radical and exponent form',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ'
          }
        ]
      }
    },
    {
      id: 'sat-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Apply exponent rules to rational exponents.

**SAT Tip:** Example: 8^(2/3) = (∛8)² = 2² = 4.
      `
    },
    {
      id: 'sat-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for rational exponents?',
            options: [
              'Apply exponent rules to rational exponents',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Apply exponent rules to rational exponents'
          }
        ]
      }
    },
    {
      id: 'sat-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Rational Exponents:',
            options: ['a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ', 'Convert between radical and exponent form', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Apply exponent rules to rational exponents', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ', 'Apply exponent rules to rational exponents'],
        hint1: 'Think about rational exponents',
        hint2: 'Consider the best SAT strategy',
        explanation: 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. Apply exponent rules to rational exponents.'
      }
    }
  ]
}
