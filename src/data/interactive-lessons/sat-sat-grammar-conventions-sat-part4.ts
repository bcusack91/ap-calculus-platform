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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Run-on sentences?',
            options: [
              'Fragment: missing subject or verb, or a dependent clause standing alone.',
              'two independent clauses without proper punctuation.',
              'Parallel structure: items in a list or comparison should have the same grammatical form.',
              'period, semicolon, comma + FANBOYS conjunction, or subordination.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Run-on sentences: two independent clauses without proper punctuation. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Key Insight?',
            options: [
              'period, semicolon, comma + FANBOYS conjunction, or subordination.',
              'two independent clauses without proper punctuation.',
              'Parallel structure: items in a list or comparison should have the same grammatical form.',
              'Fragment: missing subject or verb, or a dependent clause standing alone.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Fragment: missing subject or verb, or a dependent clause standing alone. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'period, semicolon, comma + FANBOYS conjunction, or subordination.',
              'Parallel structure: items in a list or comparison should have the same grammatical form.',
              'two independent clauses without proper punctuation.',
              'Fragment: missing subject or verb, or a dependent clause standing alone.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SAT Tip: Parallel structure: items in a list or comparison should have the same grammatical form. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-g4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Run-on sentences',
            options: ['two independent clauses without proper punctuation.', 'Fragment: missing subject or verb, or a dependent clause standing alone.', 'Parallel structure: items in a list or comparison should have the same grammatical form.', 'period, semicolon, comma + FANBOYS conjunction, or subordination.']
          },
          {
            label: 'Fix with',
            options: ['period, semicolon, comma + FANBOYS conjunction, or subordination.', 'Parallel structure: items in a list or comparison should have the same grammatical form.', 'two independent clauses without proper punctuation.', 'Fragment: missing subject or verb, or a dependent clause standing alone.']
          },
          {
            label: 'Key Insight',
            options: ['two independent clauses without proper punctuation.', 'period, semicolon, comma + FANBOYS conjunction, or subordination.', 'Parallel structure: items in a list or comparison should have the same grammatical form.', 'Fragment: missing subject or verb, or a dependent clause standing alone.']
          }
        ],
        correctAnswers: ['two independent clauses without proper punctuation.', 'period, semicolon, comma + FANBOYS conjunction, or subordination.', 'Fragment: missing subject or verb, or a dependent clause standing alone.'],
        hint1: 'Think about what each concept specifically describes in Sentence Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Sentence Structure describes a specific idea. Run-on sentences: two independent clauses without proper punctuation. Fix with: period, semicolon, comma + FANBOYS conjunction, or subordination. Key Insight: Fragment: missing subject or verb, or a dependent clause standing alone.'
      }
    }
  ]
}
