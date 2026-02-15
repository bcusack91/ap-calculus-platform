export const actIntermAlgPart3Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-i3-intro',
      type: 'text' as const,
      content: `
# Radical Expressions

**Part 3 of 7 — Radical Expressions**

√(ab) = √a · √b; √(a/b) = √a/√b.

Simplify by factoring out perfect squares.
      `
    },
    {
      id: 'act-i3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes √(ab) = √a · √b; √(a/b) = √a/√b?',
            options: [
              '√(ab) = √a · √b; √(a/b) = √a/√b is a key concept for ACT Math',
              'Simplify by factoring out perfect squares',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: '√(ab) = √a · √b; √(a/b) = √a/√b'
          }
        ]
      }
    },
    {
      id: 'act-i3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Rationalize denominators: multiply by √n/√n.

**ACT Tip:** Cannot add unlike radicals: √2 + √3 ≠ √5.
      `
    },
    {
      id: 'act-i3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for radical expressions?',
            options: [
              'Rationalize denominators: multiply by √n/√n',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Rationalize denominators: multiply by √n/√n'
          }
        ]
      }
    },
    {
      id: 'act-i3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Radical Expressions:',
            options: ['√(ab) = √a · √b; √(a/b) = √a/√b', 'Simplify by factoring out perfect squares', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Rationalize denominators: multiply by √n/√n', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['√(ab) = √a · √b; √(a/b) = √a/√b', 'Rationalize denominators: multiply by √n/√n'],
        hint1: 'Think about radical expressions',
        hint2: 'Consider the best ACT strategy',
        explanation: '√(ab) = √a · √b; √(a/b) = √a/√b. Rationalize denominators: multiply by √n/√n.'
      }
    }
  ]
}
