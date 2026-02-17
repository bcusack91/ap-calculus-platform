export const satPolynomialsPart1Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p1-intro',
      type: 'text' as const,
      content: `
# 📝 Polynomials Factoring

**Part 1 of 7 — Polynomial Operations**

Add/subtract polynomials: combine like terms.

Multiply polynomials: distribute each term (FOIL for binomials).
      `
    },
    {
      id: 'sat-p1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Add/subtract polynomials?',
            options: [
              'combine like terms.',
              'distribute each term (FOIL for binomials).',
              'Leading coefficient: coefficient of the highest-degree term.',
              'Degree of a polynomial: highest power of the variable.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Add/subtract polynomials: combine like terms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'distribute each term (FOIL for binomials).',
              'Leading coefficient: coefficient of the highest-degree term.',
              'combine like terms.',
              'Degree of a polynomial: highest power of the variable.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Degree of a polynomial: highest power of the variable. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Degree of a polynomial: highest power of the variable.

**SAT Tip:** Leading coefficient: coefficient of the highest-degree term.
      `
    },
    {
      id: 'sat-p1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'distribute each term (FOIL for binomials).',
              'Leading coefficient: coefficient of the highest-degree term.',
              'combine like terms.',
              'Degree of a polynomial: highest power of the variable.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Leading coefficient: coefficient of the highest-degree term. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Add/subtract polynomials',
            options: ['combine like terms.', 'Degree of a polynomial: highest power of the variable.', 'Leading coefficient: coefficient of the highest-degree term.', 'distribute each term (FOIL for binomials).']
          },
          {
            label: 'Multiply polynomials',
            options: ['Leading coefficient: coefficient of the highest-degree term.', 'distribute each term (FOIL for binomials).', 'Degree of a polynomial: highest power of the variable.', 'combine like terms.']
          },
          {
            label: 'Key Insight',
            options: ['distribute each term (FOIL for binomials).', 'combine like terms.', 'Degree of a polynomial: highest power of the variable.', 'Leading coefficient: coefficient of the highest-degree term.']
          }
        ],
        correctAnswers: ['combine like terms.', 'distribute each term (FOIL for binomials).', 'Degree of a polynomial: highest power of the variable.'],
        hint1: 'Think about what each concept specifically describes in Polynomials Factoring.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polynomials Factoring describes a specific idea. Add/subtract polynomials: combine like terms. Multiply polynomials: distribute each term (FOIL for binomials). Key Insight: Degree of a polynomial: highest power of the variable.'
      }
    }
  ]
}
