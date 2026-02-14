export const oChemAlkynesPart1Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Alkynes Synthesis

**Part 1 of 7 — Alkyne Structure & Properties**

### 1. Alkynes

C≡C triple bond (sp hybridized, linear)

### 2. Terminal alkynes

H-C≡C-R

### 3. Internal alkynes

R-C≡C-R

### 4. Bond strength

triple > double > single
      `
    },
    {
      id: 'alkyn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alkyne structure & properties?',
            options: [
              'Alkynes',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Alkynes: C≡C triple bond (sp hybridized, linear)'
          },
          {
            question: 'In the context of alkyne structure & properties, which is accurate?',
            options: [
              'R-C≡C-R',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Internal alkynes: R-C≡C-R'
          }
        ]
      }
    },
    {
      id: 'alkyn1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Alkynes**: C≡C triple bond (sp hybridized, linear)
- **Terminal alkynes**: H-C≡C-R
- **Internal alkynes**: R-C≡C-R
- **Bond strength**: triple > double > single
      `
    },
    {
      id: 'alkyn1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkyne structure & properties?',
            options: [
              'triple > double > single',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Bond strength: triple > double > single'
          }
        ]
      }
    },
    {
      id: 'alkyn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Alkynes',
            options: ['C≡C triple bond (sp hybridized, linear)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Terminal alkynes',
            options: ['H-C≡C-R', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Internal alkynes',
            options: ['R-C≡C-R', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['C≡C triple bond (sp hybridized, linear)', 'H-C≡C-R', 'R-C≡C-R'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alkyne Structure & Properties.'
      }
    }
  ]
}
