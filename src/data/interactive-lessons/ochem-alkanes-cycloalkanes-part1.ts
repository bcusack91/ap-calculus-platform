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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of nomenclature?',
            options: [
              'IUPAC naming',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'IUPAC naming: find longest chain, number from end nearest substituent'
          },
          {
            question: 'In the context of nomenclature, which is accurate?',
            options: [
              'Substituents listed alphabetically',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Substituents listed alphabetically'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'IUPAC naming',
            options: ['find longest chain, number from end nearest substi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Prefixes',
            options: ['meth-, eth-, prop-, but-, pent-, hex-', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Substituents listed alphabetically',
            options: ['Substituents listed alphabetically', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['find longest chain, number from end nearest substi', 'meth-, eth-, prop-, but-, pent-, hex-', 'Substituents listed alphabetically'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Nomenclature.'
      }
    }
  ]
}
