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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Run-on" refer to in ACT prep?',
            options: [
              'two independent clauses improperly joined.',
              'lacks a subject, verb, or complete thought.',
              'Semicolons connect two related independent clauses.',
              'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Run-on: two independent clauses improperly joined. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'Semicolons connect two related independent clauses.',
              'two independent clauses improperly joined.',
              'lacks a subject, verb, or complete thought.',
              'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ACT Tip is correct?',
            options: [
              'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.',
              'two independent clauses improperly joined.',
              'Semicolons connect two related independent clauses.',
              'lacks a subject, verb, or complete thought.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ACT Tip: Semicolons connect two related independent clauses. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Run-on',
            options: ['two independent clauses improperly joined.', 'lacks a subject, verb, or complete thought.', 'Semicolons connect two related independent clauses.', 'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.']
          },
          {
            label: 'Fragment',
            options: ['Semicolons connect two related independent clauses.', 'two independent clauses improperly joined.', 'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.', 'lacks a subject, verb, or complete thought.']
          },
          {
            label: 'Key Insight',
            options: ['Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.', 'Semicolons connect two related independent clauses.', 'lacks a subject, verb, or complete thought.', 'two independent clauses improperly joined.']
          }
        ],
        correctAnswers: ['two independent clauses improperly joined.', 'lacks a subject, verb, or complete thought.', 'Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.'],
        hint1: 'Think about what each concept specifically describes in Sentence Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sentence Structure describes a specific idea. Run-on: two independent clauses improperly joined. Fragment: lacks a subject, verb, or complete thought. Key Insight: Fix run-ons with: period, semicolon, comma + FANBOYS, or subordination.'
      }
    }
  ]
}
