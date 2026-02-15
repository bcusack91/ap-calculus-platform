export const actTrigPart4Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t4-intro',
      type: 'text' as const,
      content: `
# Trig Identities

**Part 4 of 7 — Trig Identities**

Pythagorean: sin²θ + cos²θ = 1.

tan θ = sin θ / cos θ.
      `
    },
    {
      id: 'act-t4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes pythagorean?',
            options: [
              'Pythagorean is a key concept for ACT Math',
              'tan θ = sin θ / cos θ',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Pythagorean: sin²θ + cos²θ = 1'
          }
        ]
      }
    },
    {
      id: 'act-t4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.

**ACT Tip:** Double angle: sin 2θ = 2 sin θ cos θ; cos 2θ = cos²θ - sin²θ.
      `
    },
    {
      id: 'act-t4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for trig identities?',
            options: [
              'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan'
          }
        ]
      }
    },
    {
      id: 'act-t4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Trig Identities:',
            options: ['Pythagorean: sin²θ + cos²θ = 1', 'tan θ = sin θ / cos θ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Pythagorean: sin²θ + cos²θ = 1', 'Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan'],
        hint1: 'Think about trig identities',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Pythagorean: sin²θ + cos²θ = 1. Reciprocal: csc = 1/sin, sec = 1/cos, cot = 1/tan.'
      }
    }
  ]
}
