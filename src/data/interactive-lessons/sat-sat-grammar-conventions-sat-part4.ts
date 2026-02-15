export const satGrammarPart4Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-g4-intro',
      type: 'text' as const,
      content: `
# Sentence Structure

**Part 4 of 7 — Sentence Structure**

Run-on sentences: two independent clauses without proper punctuation.

Fix with: period, semicolon, comma + FANBOYS conjunction, or subordination.
      `
    },
    {
      id: 'sat-g4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes run-on sentences?',
            options: [
              'Run-on sentences is a fundamental concept in SAT Reading & Writing',
              'Fix with: period, semicolon, comma + FANBOYS conjunction, or subordination',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Run-on sentences: two independent clauses without proper punctuation'
          }
        ]
      }
    },
    {
      id: 'sat-g4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Fragment: missing subject or verb, or a dependent clause standing alone.

**SAT Tip:** Parallel structure: items in a list or comparison should have the same grammatical form.
      `
    },
    {
      id: 'sat-g4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for sentence structure?',
            options: [
              'Fragment: missing subject or verb, or a dependent clause standing alone',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Fragment: missing subject or verb, or a dependent clause standing alone'
          }
        ]
      }
    },
    {
      id: 'sat-g4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Sentence Structure:',
            options: ['Run-on sentences: two independent clauses without ', 'Fix with: period, semicolon, comma + FANBOYS conju', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Fragment: missing subject or verb, or a dependent ', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Run-on sentences: two independent clauses without ', 'Fragment: missing subject or verb, or a dependent '],
        hint1: 'Think about sentence structure',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Run-on sentences: two independent clauses without proper punctuation. Fragment: missing subject or verb, or a dependent clause standing alone.'
      }
    }
  ]
}
