export const satPassportAdvPart2Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Nonlinear Equations

**Part 2 of 7 — Nonlinear Equations**

Quadratic, polynomial, radical, rational, and absolute value equations.

Extraneous solutions: always check answers in the original equation.
      `
    },
    {
      id: 'sat-p2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Quadratic, polynomial, radical,…?',
            options: [
              'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.',
              'Radical equations: isolate the radical, square both sides, check.',
              'Quadratic, polynomial, radical, rational, and absolute value equations.',
              'always check answers in the original equation.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Quadratic, polynomial, radical, rational, and absolute value equations. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Nonlinear Equations, which explains Key Insight?',
            options: [
              'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.',
              'always check answers in the original equation.',
              'Radical equations: isolate the radical, square both sides, check.',
              'Quadratic, polynomial, radical, rational, and absolute value equations.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: Radical equations: isolate the radical, square both sides, check. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Radical equations: isolate the radical, square both sides, check.

**SAT Tip:** Rational equations: multiply by LCD, solve, exclude values that make denominator 0.
      `
    },
    {
      id: 'sat-p2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.',
              'Quadratic, polynomial, radical, rational, and absolute value equations.',
              'Radical equations: isolate the radical, square both sides, check.',
              'always check answers in the original equation.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Rational equations: multiply by LCD, solve, exclude values that make denominator 0. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Extraneous solutions',
            options: ['always check answers in the original equation.', 'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.', 'Quadratic, polynomial, radical, rational, and absolute value equations.', 'Radical equations: isolate the radical, square both sides, check.']
          },
          {
            label: 'Key Insight',
            options: ['always check answers in the original equation.', 'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.', 'Radical equations: isolate the radical, square both sides, check.', 'Quadratic, polynomial, radical, rational, and absolute value equations.']
          },
          {
            label: 'SAT Tip',
            options: ['always check answers in the original equation.', 'Radical equations: isolate the radical, square both sides, check.', 'Quadratic, polynomial, radical, rational, and absolute value equations.', 'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.']
          }
        ],
        correctAnswers: ['always check answers in the original equation.', 'Radical equations: isolate the radical, square both sides, check.', 'Rational equations: multiply by LCD, solve, exclude values that make denominator 0.'],
        hint1: 'Think about what each concept specifically describes in Nonlinear Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Nonlinear Equations describes a specific idea. Extraneous solutions: always check answers in the original equation. Key Insight: Radical equations: isolate the radical, square both sides, check. SAT Tip: Rational equations: multiply by LCD, solve, exclude values that make denominator 0.'
      }
    }
  ]
}
