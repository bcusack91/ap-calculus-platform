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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Context clues?',
            options: [
              'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).',
              'Read 3-5 words before and after the target word.',
              'Replace the word with each answer choice — which makes the most sense?.',
              'look at the surrounding sentence for meaning.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Context clues: look at the surrounding sentence for meaning. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Vocabulary in Context, which explains Key Insight?',
            options: [
              'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).',
              'look at the surrounding sentence for meaning.',
              'Replace the word with each answer choice — which makes the most sense?.',
              'Read 3-5 words before and after the target word.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about SAT Tip is correct?',
            options: [
              'look at the surrounding sentence for meaning.',
              'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).',
              'Read 3-5 words before and after the target word.',
              'Replace the word with each answer choice — which makes the most sense?.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SAT Tip: Read 3-5 words before and after the target word. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-r4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Context clues',
            options: ['Read 3-5 words before and after the target word.', 'Replace the word with each answer choice — which makes the most sense?.', 'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).', 'look at the surrounding sentence for meaning.']
          },
          {
            label: 'Key Insight',
            options: ['look at the surrounding sentence for meaning.', 'Replace the word with each answer choice — which makes the most sense?.', 'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).', 'Read 3-5 words before and after the target word.']
          },
          {
            label: 'SAT Tip',
            options: ['SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).', 'look at the surrounding sentence for meaning.', 'Read 3-5 words before and after the target word.', 'Replace the word with each answer choice — which makes the most sense?.']
          }
        ],
        correctAnswers: ['look at the surrounding sentence for meaning.', 'SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address).', 'Read 3-5 words before and after the target word.'],
        hint1: 'Think about what each concept specifically describes in Vocabulary in Context.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Vocabulary in Context describes a specific idea. Context clues: look at the surrounding sentence for meaning. Key Insight: SAT tests secondary meanings of common words (e.g., "address" = deal with, not a street address). SAT Tip: Read 3-5 words before and after the target word.'
      }
    }
  ]
}
