export const satQuadraticsPart1Data = {
  topicSlug: 'sat-quadratic-equations-sat',
  sections: [
    {
      id: 'sat-q1-intro',
      type: 'text' as const,
      content: `
# 📝 Quadratic Equations

**Part 1 of 7 — Quadratic Form & Factoring**

Standard form: ax² + bx + c = 0.

Factoring: find two numbers that multiply to ac and add to b.
      `
    },
    {
      id: 'sat-q1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Standard form?',
            options: [
              'ax² + bx + c = 0.',
              'find two numbers that multiply to ac and add to b.',
              'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.',
              'Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Standard form: ax² + bx + c = 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.',
              'find two numbers that multiply to ac and add to b.',
              'ax² + bx + c = 0.',
              'Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Zero product property: if (x - r)(x - s) = 0, then x = r or x = s. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-q1-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.

**SAT Tip:** Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.
      `
    },
    {
      id: 'sat-q1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'find two numbers that multiply to ac and add to b.',
              'Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.',
              'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.',
              'ax² + bx + c = 0.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-q1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Standard form',
            options: ['ax² + bx + c = 0.', 'find two numbers that multiply to ac and add to b.', 'Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.', 'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.']
          },
          {
            label: 'Factoring',
            options: ['Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.', 'find two numbers that multiply to ac and add to b.', 'ax² + bx + c = 0.', 'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.']
          },
          {
            label: 'Key Insight',
            options: ['find two numbers that multiply to ac and add to b.', 'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.', 'ax² + bx + c = 0.', 'Special patterns: difference of squares a² - b² = (a+b)(a-b), perfect square trinomials.']
          }
        ],
        correctAnswers: ['ax² + bx + c = 0.', 'find two numbers that multiply to ac and add to b.', 'Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.'],
        hint1: 'Think about what each concept specifically describes in Quadratic Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Quadratic Equations describes a specific idea. Standard form: ax² + bx + c = 0. Factoring: find two numbers that multiply to ac and add to b. Key Insight: Zero product property: if (x - r)(x - s) = 0, then x = r or x = s.'
      }
    }
  ]
}
