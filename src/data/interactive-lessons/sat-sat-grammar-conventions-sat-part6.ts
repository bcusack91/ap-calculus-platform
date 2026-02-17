export const satGrammarPart6Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.

Semicolon: connects two related independent clauses (no conjunction needed).
      `
    },
    {
      id: 'sat-g6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Comma?',
            options: [
              'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.',
              'connects two related independent clauses (no conjunction needed).',
              'before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.',
              'Colon: introduces a list, explanation, or elaboration (independent clause before it).'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.',
              'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.',
              'connects two related independent clauses (no conjunction needed).',
              'Colon: introduces a list, explanation, or elaboration (independent clause before it).'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Colon: introduces a list, explanation, or elaboration (independent clause before it). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-g6-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Colon: introduces a list, explanation, or elaboration (independent clause before it).

**SAT Tip:** Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.
      `
    },
    {
      id: 'sat-g6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes SAT Tip?',
            options: [
              'Colon: introduces a list, explanation, or elaboration (independent clause before it).',
              'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.',
              'connects two related independent clauses (no conjunction needed).',
              'before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Comma',
            options: ['Colon: introduces a list, explanation, or elaboration (independent clause before it).', 'connects two related independent clauses (no conjunction needed).', 'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.', 'before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.']
          },
          {
            label: 'Semicolon',
            options: ['before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.', 'Colon: introduces a list, explanation, or elaboration (independent clause before it).', 'connects two related independent clauses (no conjunction needed).', 'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.']
          },
          {
            label: 'Key Insight',
            options: ['Colon: introduces a list, explanation, or elaboration (independent clause before it).', 'Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.', 'before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.', 'connects two related independent clauses (no conjunction needed).']
          }
        ],
        correctAnswers: ['before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.', 'connects two related independent clauses (no conjunction needed).', 'Colon: introduces a list, explanation, or elaboration (independent clause before it).'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses. Semicolon: connects two related independent clauses (no conjunction needed). Key Insight: Colon: introduces a list, explanation, or elaboration (independent clause before it).'
      }
    }
  ]
}
