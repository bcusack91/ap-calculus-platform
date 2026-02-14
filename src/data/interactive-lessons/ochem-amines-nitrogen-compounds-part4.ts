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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amine reactions?',
            options: [
              'Alkylation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Alkylation: amines react with alkyl halides (over-alkylation problem)'
          },
          {
            question: 'In the context of amine reactions, which is accurate?',
            options: [
              'amines + sulfonyl chlorides',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Sulfonamide formation: amines + sulfonyl chlorides'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkylation',
            options: ['amines react with alkyl halides (over-alkylation p', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acylation',
            options: ['amines react with acid chlorides → amides', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Sulfonamide formation',
            options: ['amines + sulfonyl chlorides', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['amines react with alkyl halides (over-alkylation p', 'amines react with acid chlorides → amides', 'amines + sulfonyl chlorides'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amine Reactions.'
      }
    }
  ]
}
