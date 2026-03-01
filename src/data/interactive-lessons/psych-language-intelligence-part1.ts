export const psychLanguagePart1Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 1 of 7 — Language Structure & Development**

### 1. Phonemes

basic sound units (~40 in English)

### 2. Morphemes

smallest meaningful units (prefixes, suffixes, words)

### 3. Syntax

rules for combining words into sentences (grammar)

### 4. Language milestones

babbling (4mo), first words (12mo), two-word stage (24mo)
      `
    },
    {
      id: 'langu1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Phonemes?',
            options: [
              'smallest meaningful units (prefixes, suffixes, words)',
              'basic sound units (~40 in English)',
              'rules for combining words into sentences (grammar)',
              'babbling (4mo), first words (12mo), two-word stage (24mo)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Phonemes: basic sound units (~40 in English). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Syntax?',
            options: [
              'rules for combining words into sentences (grammar)',
              'basic sound units (~40 in English)',
              'smallest meaningful units (prefixes, suffixes, words)',
              'babbling (4mo), first words (12mo), two-word stage (24mo)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Syntax: rules for combining words into sentences (grammar). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'langu1-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Phonemes**: basic sound units (~40 in English)
- **Morphemes**: smallest meaningful units (prefixes, suffixes, words)
- **Syntax**: rules for combining words into sentences (grammar)
- **Language milestones**: babbling (4mo), first words (12mo), two-word stage (24mo)
      `
    },
    {
      id: 'langu1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to language structure & development?',
            options: [
              'babbling (4mo), first words (12mo), two-word stage (24mo)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Language milestones: babbling (4mo), first words (12mo), two-word stage (24mo)'
          }
        ]
      }
    },
    {
      id: 'langu1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Phonemes',
            options: ['rules for combining words into sentences (grammar)', 'babbling (4mo), first words (12mo), two-word stage (24mo)', 'basic sound units (~40 in English)', 'smallest meaningful units (prefixes, suffixes, words)']
          },
          {
            label: 'Morphemes',
            options: ['basic sound units (~40 in English)', 'smallest meaningful units (prefixes, suffixes, words)', 'babbling (4mo), first words (12mo), two-word stage (24mo)', 'rules for combining words into sentences (grammar)']
          },
          {
            label: 'Syntax',
            options: ['rules for combining words into sentences (grammar)', 'smallest meaningful units (prefixes, suffixes, words)', 'babbling (4mo), first words (12mo), two-word stage (24mo)', 'basic sound units (~40 in English)']
          }
        ],
        correctAnswers: ['basic sound units (~40 in English)', 'smallest meaningful units (prefixes, suffixes, words)', 'rules for combining words into sentences (grammar)'],
        hint1: 'Think about what each concept specifically describes in Language & Intelligence.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Language & Intelligence describes a specific idea. Phonemes: basic sound units (~40 in English). Morphemes: smallest meaningful units (prefixes, suffixes, words). Syntax: rules for combining words into sentences (grammar).'
      }
    }
  ]
}
