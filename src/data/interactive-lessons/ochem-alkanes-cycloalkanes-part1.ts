export const oChemAlkanesPart1Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alkanes Cycloalkanes

**Part 1 of 7 — Nomenclature**

### 1. IUPAC naming

find longest chain, number from end nearest substituent

### 2. Prefixes

meth-, eth-, prop-, but-, pent-, hex-

### 3. Substituents listed alphabetically

Substituents listed alphabetically

### 4. Cycloalkanes

prefix "cyclo-" before alkane name
      `
    },
    {
      id: 'alkan1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes IUPAC naming?',
            options: [
              'find longest chain, number from end nearest substituent',
              'prefix "cyclo-" before alkane name',
              'meth-, eth-, prop-, but-, pent-, hex-',
              'Substituents listed alphabetically'
            ],
            correctAnswer: 0,
            explanation: 'Correct — IUPAC naming: find longest chain, number from end nearest substituent. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Substituents listed alphabetically?',
            options: [
              'find longest chain, number from end nearest substituent',
              'prefix "cyclo-" before alkane name',
              'meth-, eth-, prop-, but-, pent-, hex-',
              'Substituents listed alphabetically'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Substituents listed alphabetically. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alkan1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **IUPAC naming**: find longest chain, number from end nearest substituent
- **Prefixes**: meth-, eth-, prop-, but-, pent-, hex-
- **Substituents listed alphabetically**
- **Cycloalkanes**: prefix "cyclo-" before alkane name
      `
    },
    {
      id: 'alkan1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to nomenclature?',
            options: [
              'prefix "cyclo-" before alkane name',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cycloalkanes: prefix "cyclo-" before alkane name'
          }
        ]
      }
    },
    {
      id: 'alkan1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IUPAC naming',
            options: ['meth-, eth-, prop-, but-, pent-, hex-', 'find longest chain, number from end nearest substituent', 'prefix "cyclo-" before alkane name', 'Substituents listed alphabetically']
          },
          {
            label: 'Prefixes',
            options: ['find longest chain, number from end nearest substituent', 'meth-, eth-, prop-, but-, pent-, hex-', 'Substituents listed alphabetically', 'prefix "cyclo-" before alkane name']
          },
          {
            label: 'Cycloalkanes',
            options: ['Substituents listed alphabetically', 'find longest chain, number from end nearest substituent', 'prefix "cyclo-" before alkane name', 'meth-, eth-, prop-, but-, pent-, hex-']
          }
        ],
        correctAnswers: ['find longest chain, number from end nearest substituent', 'meth-, eth-, prop-, but-, pent-, hex-', 'prefix "cyclo-" before alkane name'],
        hint1: 'Think about what each concept specifically describes in ️ Alkanes Cycloalkanes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Alkanes Cycloalkanes describes a specific idea. IUPAC naming: find longest chain, number from end nearest substituent. Prefixes: meth-, eth-, prop-, but-, pent-, hex-. Cycloalkanes: prefix "cyclo-" before alkane name.'
      }
    }
  ]
}
