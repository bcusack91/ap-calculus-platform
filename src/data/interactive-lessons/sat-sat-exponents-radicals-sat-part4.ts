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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.?',
            options: [
              'Example: 8^(2/3) = (∛8)² = 2² = 4.',
              'Apply exponent rules to rational exponents.',
              'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.',
              'Convert between radical and exponent form.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Apply exponent rules to rational exponents.',
              'Convert between radical and exponent form.',
              'Example: 8^(2/3) = (∛8)² = 2² = 4.',
              'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Apply exponent rules to rational exponents. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Convert between radical and exponent form.',
              'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.',
              'Example: 8^(2/3) = (∛8)² = 2² = 4.',
              'Apply exponent rules to rational exponents.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Example: 8^(2/3) = (∛8)² = 2² = 4. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            options: ['Convert between radical and exponent form.', 'Apply exponent rules to rational exponents.', 'Example: 8^(2/3) = (∛8)² = 2² = 4.', 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.']
          },
          {
            label: 'SAT Tip',
            options: ['Example: 8^(2/3) = (∛8)² = 2² = 4.', 'a^(m/n) = ⁿ√(aᵐ) = (ⁿ√a)ᵐ.', 'Convert between radical and exponent form.', 'Apply exponent rules to rational exponents.']
          }
        ],
        correctAnswers: ['Apply exponent rules to rational exponents.', 'Example: 8^(2/3) = (∛8)² = 2² = 4.'],
        hint1: 'Think about what each concept specifically describes in Rational Exponents.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Rational Exponents describes a specific idea. Key Insight: Apply exponent rules to rational exponents. SAT Tip: Example: 8^(2/3) = (∛8)² = 2² = 4.'
      }
    }
  ]
}
