export const satPolynomialsPart3Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p3-intro',
      type: 'text' as const,
      content: `
# Polynomial Division

**Part 3 of 7 — Polynomial Division**

Long division: divide polynomials like long division with numbers.

Synthetic division: shortcut when dividing by (x - c).
      `
    },
    {
      id: 'sat-p3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Long division?',
            options: [
              'The result: dividend = quotient × divisor + remainder.',
              'divide polynomials like long division with numbers.',
              'Useful for simplifying rational expressions.',
              'shortcut when dividing by (x - c).'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Long division: divide polynomials like long division with numbers. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polynomial Division, which explains Key Insight?',
            options: [
              'shortcut when dividing by (x - c).',
              'Useful for simplifying rational expressions.',
              'The result: dividend = quotient × divisor + remainder.',
              'divide polynomials like long division with numbers.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Key Insight: The result: dividend = quotient × divisor + remainder. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** The result: dividend = quotient × divisor + remainder.

**SAT Tip:** Useful for simplifying rational expressions.
      `
    },
    {
      id: 'sat-p3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Polynomial Division, which correctly describes SAT Tip?',
            options: [
              'Useful for simplifying rational expressions.',
              'The result: dividend = quotient × divisor + remainder.',
              'shortcut when dividing by (x - c).',
              'divide polynomials like long division with numbers.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Useful for simplifying rational expressions. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Long division',
            options: ['shortcut when dividing by (x - c).', 'The result: dividend = quotient × divisor + remainder.', 'Useful for simplifying rational expressions.', 'divide polynomials like long division with numbers.']
          },
          {
            label: 'Synthetic division',
            options: ['shortcut when dividing by (x - c).', 'divide polynomials like long division with numbers.', 'Useful for simplifying rational expressions.', 'The result: dividend = quotient × divisor + remainder.']
          },
          {
            label: 'Key Insight',
            options: ['Useful for simplifying rational expressions.', 'shortcut when dividing by (x - c).', 'The result: dividend = quotient × divisor + remainder.', 'divide polynomials like long division with numbers.']
          }
        ],
        correctAnswers: ['divide polynomials like long division with numbers.', 'shortcut when dividing by (x - c).', 'The result: dividend = quotient × divisor + remainder.'],
        hint1: 'Think about what each concept specifically describes in Polynomial Division.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomial Division describes a specific idea. Long division: divide polynomials like long division with numbers. Synthetic division: shortcut when dividing by (x - c). Key Insight: The result: dividend = quotient × divisor + remainder.'
      }
    }
  ]
}
