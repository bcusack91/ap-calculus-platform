export const satPolynomialsPart2Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'sat-p2-intro',
      type: 'text' as const,
      content: `
# Factoring Techniques

**Part 2 of 7 — Factoring Techniques**

GCF first: always factor out the greatest common factor.

Difference of squares: a² - b² = (a + b)(a - b).
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
            question: 'Which of the following correctly describes GCF first?',
            options: [
              'Grouping: for 4-term polynomials, group in pairs and factor each.',
              'a² - b² = (a + b)(a - b).',
              'always factor out the greatest common factor.',
              'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — GCF first: always factor out the greatest common factor. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Factoring Techniques, which explains Key Insight?',
            options: [
              'always factor out the greatest common factor.',
              'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.',
              'a² - b² = (a + b)(a - b).',
              'Grouping: for 4-term polynomials, group in pairs and factor each.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-p2-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.

**SAT Tip:** Grouping: for 4-term polynomials, group in pairs and factor each.
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
              'always factor out the greatest common factor.',
              'a² - b² = (a + b)(a - b).',
              'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.',
              'Grouping: for 4-term polynomials, group in pairs and factor each.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Grouping: for 4-term polynomials, group in pairs and factor each. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'GCF first',
            options: ['a² - b² = (a + b)(a - b).', 'Grouping: for 4-term polynomials, group in pairs and factor each.', 'always factor out the greatest common factor.', 'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.']
          },
          {
            label: 'Difference of squares',
            options: ['Grouping: for 4-term polynomials, group in pairs and factor each.', 'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.', 'always factor out the greatest common factor.', 'a² - b² = (a + b)(a - b).']
          },
          {
            label: 'Key Insight',
            options: ['a² - b² = (a + b)(a - b).', 'Grouping: for 4-term polynomials, group in pairs and factor each.', 'always factor out the greatest common factor.', 'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.']
          }
        ],
        correctAnswers: ['always factor out the greatest common factor.', 'a² - b² = (a + b)(a - b).', 'Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.'],
        hint1: 'Think about what each concept specifically describes in Factoring Techniques.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Factoring Techniques describes a specific idea. GCF first: always factor out the greatest common factor. Difference of squares: a² - b² = (a + b)(a - b). Key Insight: Trinomials: x² + bx + c = (x + p)(x + q) where pq = c and p + q = b.'
      }
    }
  ]
}
