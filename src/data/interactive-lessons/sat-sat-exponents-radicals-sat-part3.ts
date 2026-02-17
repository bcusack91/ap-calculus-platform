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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains √a = a^(1/2); ∛a = a^(1/3); ⁿ√a =…?',
            options: [
              'Rationalize denominators: multiply by √a/√a.',
              '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).',
              'Add/subtract radicals: only combine like radicals (same radicand).',
              'Simplify radicals by factoring out perfect squares/cubes.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — √a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Rationalize denominators: multiply by √a/√a.',
              'Simplify radicals by factoring out perfect squares/cubes.',
              'Add/subtract radicals: only combine like radicals (same radicand).',
              '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Rationalize denominators: multiply by √a/√a. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Simplify radicals by factoring out perfect squares/cubes.',
              'Add/subtract radicals: only combine like radicals (same radicand).',
              '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).',
              'Rationalize denominators: multiply by √a/√a.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Add/subtract radicals: only combine like radicals (same radicand). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key Insight',
            options: ['Simplify radicals by factoring out perfect squares/cubes.', 'Add/subtract radicals: only combine like radicals (same radicand).', 'Rationalize denominators: multiply by √a/√a.', '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).']
          },
          {
            label: 'SAT Tip',
            options: ['Rationalize denominators: multiply by √a/√a.', '√a = a^(1/2); ∛a = a^(1/3); ⁿ√a = a^(1/n).', 'Simplify radicals by factoring out perfect squares/cubes.', 'Add/subtract radicals: only combine like radicals (same radicand).']
          }
        ],
        correctAnswers: ['Rationalize denominators: multiply by √a/√a.', 'Add/subtract radicals: only combine like radicals (same radicand).'],
        hint1: 'Think about what each concept specifically describes in Radical Expressions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radical Expressions describes a specific idea. Key Insight: Rationalize denominators: multiply by √a/√a. SAT Tip: Add/subtract radicals: only combine like radicals (same radicand).'
      }
    }
  ]
}
