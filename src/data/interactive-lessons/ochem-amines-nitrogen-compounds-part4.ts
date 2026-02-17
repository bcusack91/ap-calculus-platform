export const oChemAminesPart4Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine4-intro',
      type: 'text' as const,
      content: `
# Amine Reactions

**Part 4 of 7 — Amine Reactions**

### 1. Alkylation

amines react with alkyl halides (over-alkylation problem)

### 2. Acylation

amines react with acid chlorides → amides

### 3. Sulfonamide formation

amines + sulfonyl chlorides

### 4. Hinsberg test

distinguishes 1°, 2°, 3° amines
      `
    },
    {
      id: 'amine4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Alkylation" refer to in this topic?',
            options: [
              'amines + sulfonyl chlorides',
              'distinguishes 1°, 2°, 3° amines',
              'amines react with alkyl halides (over-alkylation problem)',
              'amines react with acid chlorides → amides'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Alkylation: amines react with alkyl halides (over-alkylation problem). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Sulfonamide formation:',
            options: [
              'distinguishes 1°, 2°, 3° amines',
              'amines react with alkyl halides (over-alkylation problem)',
              'amines react with acid chlorides → amides',
              'amines + sulfonyl chlorides'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sulfonamide formation: amines + sulfonyl chlorides. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'amine4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alkylation**: amines react with alkyl halides (over-alkylation problem)
- **Acylation**: amines react with acid chlorides → amides
- **Sulfonamide formation**: amines + sulfonyl chlorides
- **Hinsberg test**: distinguishes 1°, 2°, 3° amines
      `
    },
    {
      id: 'amine4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amine reactions?',
            options: [
              'distinguishes 1°, 2°, 3° amines',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hinsberg test: distinguishes 1°, 2°, 3° amines'
          }
        ]
      }
    },
    {
      id: 'amine4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkylation',
            options: ['amines react with alkyl halides (over-alkylation problem)', 'amines react with acid chlorides → amides', 'amines + sulfonyl chlorides', 'distinguishes 1°, 2°, 3° amines']
          },
          {
            label: 'Acylation',
            options: ['amines react with acid chlorides → amides', 'amines react with alkyl halides (over-alkylation problem)', 'amines + sulfonyl chlorides', 'distinguishes 1°, 2°, 3° amines']
          },
          {
            label: 'Sulfonamide formation',
            options: ['distinguishes 1°, 2°, 3° amines', 'amines react with acid chlorides → amides', 'amines + sulfonyl chlorides', 'amines react with alkyl halides (over-alkylation problem)']
          }
        ],
        correctAnswers: ['amines react with alkyl halides (over-alkylation problem)', 'amines react with acid chlorides → amides', 'amines + sulfonyl chlorides'],
        hint1: 'Think about what each concept specifically describes in Amine Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Amine Reactions describes a specific idea. Alkylation: amines react with alkyl halides (over-alkylation problem). Acylation: amines react with acid chlorides → amides. Sulfonamide formation: amines + sulfonyl chlorides.'
      }
    }
  ]
}
