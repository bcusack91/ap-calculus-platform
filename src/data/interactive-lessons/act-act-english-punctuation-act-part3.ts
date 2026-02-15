export const actPunctuationPart3Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-e3-intro',
      type: 'text' as const,
      content: `
# Apostrophes

**Part 3 of 7 — Apostrophes**

Possessive nouns: singular add 's (dog's); plural ending in s add ' (dogs').

Contractions: apostrophe replaces missing letters (don't = do not).
      `
    },
    {
      id: 'act-e3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes possessive nouns?',
            options: [
              'Possessive nouns is a key concept for ACT English/Reading',
              'Contractions: apostrophe replaces missing letters (dont = do not)',
              'This concept is not tested on the ACT',
              'None of these apply to ACT preparation'
            ],
            correctAnswer: 0,
            explanation: 'Possessive nouns: singular add \'s (dog\'s); plural ending in s add \' (dogs\')'
          }
        ]
      }
    },
    {
      id: 'act-e3-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Its vs. it's: its = possessive, it's = it is.

**ACT Tip:** No apostrophe for plural nouns: "The dogs ran" (not "The dog's ran").
      `
    },
    {
      id: 'act-e3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for apostrophes?',
            options: [
              'Its vs. it\'s: its = possessive, it\'s = it is',
              'Skip these questions entirely on the ACT',
              'These are only on the optional Writing section',
              'This topic appears only on the SAT'
            ],
            correctAnswer: 0,
            explanation: 'Its vs. it\'s: its = possessive, it\'s = it is'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Apostrophes:',
            options: ['Possessive nouns: singular add \'s (dog\'s); plural ', 'Contractions: apostrophe replaces missing letters ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Its vs. it\'s: its = possessive, it\'s = it is', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['Possessive nouns: singular add \'s (dog\'s); plural ', 'Its vs. it\'s: its = possessive, it\'s = it is'],
        hint1: 'Think about apostrophes',
        hint2: 'Consider the best ACT strategy',
        explanation: 'Possessive nouns: singular add \'s (dog\'s); plural ending in s add \' (dogs\'). Its vs. it\'s: its = possessive, it\'s = it is.'
      }
    }
  ]
}
