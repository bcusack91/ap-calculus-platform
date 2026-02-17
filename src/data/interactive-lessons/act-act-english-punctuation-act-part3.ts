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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Possessive nouns?',
            options: [
              'singular add \'s (dog\'s); plural ending in s add \' (dogs\').',
              'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").',
              'apostrophe replaces missing letters (don\'t = do not).',
              'Its vs. it\'s: its = possessive, it\'s = it is.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Possessive nouns: singular add \'s (dog\'s); plural ending in s add \' (dogs\'). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'apostrophe replaces missing letters (don\'t = do not).',
              'singular add \'s (dog\'s); plural ending in s add \' (dogs\').',
              'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").',
              'Its vs. it\'s: its = possessive, it\'s = it is.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Key Insight: Its vs. it\'s: its = possessive, it\'s = it is. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Apostrophes, which correctly describes ACT Tip?',
            options: [
              'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").',
              'singular add \'s (dog\'s); plural ending in s add \' (dogs\').',
              'Its vs. it\'s: its = possessive, it\'s = it is.',
              'apostrophe replaces missing letters (don\'t = do not).'
            ],
            correctAnswer: 0,
            explanation: 'Correct — ACT Tip: No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran"). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'act-e3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Possessive nouns',
            options: ['singular add \'s (dog\'s); plural ending in s add \' (dogs\').', 'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").', 'apostrophe replaces missing letters (don\'t = do not).', 'Its vs. it\'s: its = possessive, it\'s = it is.']
          },
          {
            label: 'Contractions',
            options: ['apostrophe replaces missing letters (don\'t = do not).', 'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").', 'Its vs. it\'s: its = possessive, it\'s = it is.', 'singular add \'s (dog\'s); plural ending in s add \' (dogs\').']
          },
          {
            label: 'Key Insight',
            options: ['singular add \'s (dog\'s); plural ending in s add \' (dogs\').', 'Its vs. it\'s: its = possessive, it\'s = it is.', 'apostrophe replaces missing letters (don\'t = do not).', 'No apostrophe for plural nouns: "The dogs ran" (not "The dog\'s ran").']
          }
        ],
        correctAnswers: ['singular add \'s (dog\'s); plural ending in s add \' (dogs\').', 'apostrophe replaces missing letters (don\'t = do not).', 'Its vs. it\'s: its = possessive, it\'s = it is.'],
        hint1: 'Think about what each concept specifically describes in Apostrophes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Apostrophes describes a specific idea. Possessive nouns: singular add \'s (dog\'s); plural ending in s add \' (dogs\'). Contractions: apostrophe replaces missing letters (don\'t = do not). Key Insight: Its vs. it\'s: its = possessive, it\'s = it is.'
      }
    }
  ]
}
