export const satReadingEvidencePart4Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r4-intro',
      type: 'text' as const,
      content: `
# Vocabulary in Context

**Part 4 of 7 — Vocabulary in Context**

Context clues: look at the surrounding sentence for meaning.

Replace the word with each answer choice — which makes the most sense?.
      `
    },
    {
      id: 'sat-r4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes context clues?',
            options: [
              'Context clues is a fundamental concept in SAT Reading & Writing',
              'Replace the word with each answer choice — which makes the most sense?',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Context clues: look at the surrounding sentence for meaning'
          }
        ]
      }
    },
    {
      id: 'sat-r4-detail',
      type: 'text' as const,
      content: `
**Key Insight:** SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).

**SAT Tip:** Read 3-5 words before and after the target word.
      `
    },
    {
      id: 'sat-r4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for vocabulary in context?',
            options: [
              'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address)',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address)'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Vocabulary in Context:',
            options: ['Context clues: look at the surrounding sentence fo', 'Replace the word with each answer choice — which m', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['SAT tests secondary meanings of common words (e.g.', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Context clues: look at the surrounding sentence fo', 'SAT tests secondary meanings of common words (e.g.'],
        hint1: 'Think about vocabulary in context',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Context clues: look at the surrounding sentence for meaning. SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).'
      }
    }
  ]
}
