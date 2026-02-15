export const satReadingEvidencePart3Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 'sat-r3-intro',
      type: 'text' as const,
      content: `
# Author Purpose & Tone

**Part 3 of 7 — Author Purpose & Tone**

Purpose: why did the author write this? (inform, persuade, entertain, analyze).

Tone: the author's attitude (objective, critical, enthusiastic, skeptical).
      `
    },
    {
      id: 'sat-r3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes purpose?',
            options: [
              'Purpose is a fundamental concept in SAT Reading & Writing',
              'Tone: the authors attitude (objective, critical, enthusiastic, skeptical)',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Purpose: why did the author write this? (inform, persuade, entertain, analyze)'
          }
        ]
      }
    },
    {
      id: 'sat-r3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Look at word choice (diction) for tone clues.

**SAT Tip:** Don't confuse the author's tone with a character's or speaker's tone.
      `
    },
    {
      id: 'sat-r3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for author purpose & tone?',
            options: [
              'Look at word choice (diction) for tone clues',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Look at word choice (diction) for tone clues'
          }
        ]
      }
    },
    {
      id: 'sat-r3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Author Purpose & Tone:',
            options: ['Purpose: why did the author write this? (inform, p', 'Tone: the author\'s attitude (objective, critical, ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Look at word choice (diction) for tone clues', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Purpose: why did the author write this? (inform, p', 'Look at word choice (diction) for tone clues'],
        hint1: 'Think about author purpose & tone',
        hint2: 'Consider the best SAT strategy',
        explanation: 'Purpose: why did the author write this? (inform, persuade, entertain, analyze). Look at word choice (diction) for tone clues.'
      }
    }
  ]
}
