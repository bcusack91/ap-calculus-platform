export const oChemAlkenesPart1Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alkenes Reactions

**Part 1 of 7 — Alkene Structure & Stability**

### 1. Alkenes

C=C double bond (sp² hybridized)

### 2. Degree of unsaturation

one for each C=C or ring

### 3. Stability

more substituted = more stable

### 4. E/Z isomerism

priority-based naming of alkene geometry
      `
    },
    {
      id: 'alken1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alkene structure & stability?',
            options: [
              'Alkenes',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Alkenes: C=C double bond (sp² hybridized)'
          },
          {
            question: 'In the context of alkene structure & stability, which is accurate?',
            options: [
              'more substituted = more stable',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Stability: more substituted = more stable'
          }
        ]
      }
    },
    {
      id: 'alken1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alkenes**: C=C double bond (sp² hybridized)
- **Degree of unsaturation**: one for each C=C or ring
- **Stability**: more substituted = more stable
- **E/Z isomerism**: priority-based naming of alkene geometry
      `
    },
    {
      id: 'alken1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkene structure & stability?',
            options: [
              'priority-based naming of alkene geometry',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'E/Z isomerism: priority-based naming of alkene geometry'
          }
        ]
      }
    },
    {
      id: 'alken1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkenes',
            options: ['C=C double bond (sp² hybridized)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Degree of unsaturation',
            options: ['one for each C=C or ring', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Stability',
            options: ['more substituted = more stable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['C=C double bond (sp² hybridized)', 'one for each C=C or ring', 'more substituted = more stable'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alkene Structure & Stability.'
      }
    }
  ]
}
