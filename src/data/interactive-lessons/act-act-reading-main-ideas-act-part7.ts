export const actReadingMainPart7Data = {
  topicSlug: 'act-reading-main-ideas-act',
  sections: [
    {
      id: 'act-r7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

Context clues: the surrounding words reveal the meaning.

Substitute each answer choice — which one makes the most sense?.
      `
    },
    {
      id: 'act-r7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes context clues?',
            options: [
              'Context clues is a key concept for ACT English/Reading',
              'Substitute each answer choice — which one makes the most sense?',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Context clues: the surrounding words reveal the meaning'
          }
        ]
      }
    },
    {
      id: 'act-r7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** ACT tests common words with uncommon meanings.

**ACT Tip:** Read the full sentence, not just the phrase around the word.
      `
    },
    {
      id: 'act-r7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for review & applications?',
            options: [
              'ACT tests common words with uncommon meanings',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'ACT tests common words with uncommon meanings'
          }
        ]
      }
    },
    {
      id: 'act-r7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Review & Applications:',
            options: ['Context clues: the surrounding words reveal the me', 'Substitute each answer choice — which one makes th', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['ACT tests common words with uncommon meanings', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Context clues: the surrounding words reveal the me', 'ACT tests common words with uncommon meanings'],
        hint1: 'Think about review & applications',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Context clues: the surrounding words reveal the meaning. ACT tests common words with uncommon meanings.'
      }
    }
  ]
}
