export const actEnglishGrammarPart4Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-e4-intro',
      type: 'text' as const,
      content: `
# Sentence Structure

**Part 4 of 7 — Sentence Structure**

Run-on: two independent clauses improperly joined.

Fragment: lacks a subject, verb, or complete thought.
      `
    },
    {
      id: 'act-e4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes run-on?',
            options: [
              'Run-on is a key concept for ACT English/Reading',
              'Fragment: lacks a subject, verb, or complete thought',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Run-on: two independent clauses improperly joined'
          }
        ]
      }
    },
    {
      id: 'act-e4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.

**ACT Tip:** Semicolons connect two related independent clauses.
      `
    },
    {
      id: 'act-e4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for sentence structure?',
            options: [
              'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Sentence Structure:',
            options: ['Run-on: two independent clauses improperly joined', 'Fragment: lacks a subject, verb, or complete thoug', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Fix run-ons with: period, semicolon, comma + FANBO', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Run-on: two independent clauses improperly joined', 'Fix run-ons with: period, semicolon, comma + FANBO'],
        hint1: 'Think about sentence structure',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Run-on: two independent clauses improperly joined. Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.'
      }
    }
  ]
}
