export const satGrammarPart5Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g5-intro',
      type: 'text' as const,
      content: `
# Punctuation Rules

**Part 5 of 7 — Punctuation Rules**

Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses.

Semicolon: connects two related independent clauses (no conjunction needed).
      `
    },
    {
      id: 'sat-g5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes comma?',
            options: [
              'Comma is a fundamental concept in SAT Reading & Writing',
              'Semicolon: connects two related independent clauses (no conjunction needed)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses'
          }
        ]
      }
    },
    {
      id: 'sat-g5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Colon: introduces a list, explanation, or elaboration (independent clause before it).

**SAT Tip:** Dash: sets off a parenthetical or emphatic statement — can replace commas or colons for emphasis.
      `
    },
    {
      id: 'sat-g5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for punctuation rules?',
            options: [
              'Colon: introduces a list, explanation, or elaboration (independent clause before it)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Colon: introduces a list, explanation, or elaboration (independent clause before it)'
          }
        ]
      }
    },
    {
      id: 'sat-g5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Punctuation Rules:',
            options: ['Comma: before FANBOYS in compound sentences, after', 'Semicolon: connects two related independent clause', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Colon: introduces a list, explanation, or elaborat', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Comma: before FANBOYS in compound sentences, after', 'Colon: introduces a list, explanation, or elaborat'],
        hint1: 'Think about punctuation rules',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Comma: before FANBOYS in compound sentences, after introductory elements, around nonessential clauses. Colon: introduces a list, explanation, or elaboration (independent clause before it).'
      }
    }
  ]
}
