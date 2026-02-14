export const oChemAlkynesPart5Data = {
  topicSlug: 'alkynes-synthesis',
  sections: [
    {
      id: 'alkyn5-intro',
      type: 'text' as const,
      content: `
# Alkyne Synthesis

**Part 5 of 7 — Alkyne Synthesis**

### 1. Dehydrohalogenation

2 equivalents of base from dihalide → alkyne

### 2. Double elimination

geminal or vicinal dihalide → alkyne

### 3. Acetylide alkylation builds carbon-carbon bonds

Acetylide alkylation builds carbon-carbon bonds

### 4. Retrosynthetic analysis for alkyne targets

Retrosynthetic analysis for alkyne targets
      `
    },
    {
      id: 'alkyn5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of alkyne synthesis?',
            options: [
              'Dehydrohalogenation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Dehydrohalogenation: 2 equivalents of base from dihalide → alkyne'
          },
          {
            question: 'In the context of alkyne synthesis, which is accurate?',
            options: [
              'Acetylide alkylation builds carbon-carbon bonds',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Acetylide alkylation builds carbon-carbon bonds'
          }
        ]
      }
    },
    {
      id: 'alkyn5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Dehydrohalogenation**: 2 equivalents of base from dihalide → alkyne
- **Double elimination**: geminal or vicinal dihalide → alkyne
- **Acetylide alkylation builds carbon-carbon bonds**
- **Retrosynthetic analysis for alkyne targets**
      `
    },
    {
      id: 'alkyn5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to alkyne synthesis?',
            options: [
              'Retrosynthetic analysis for alkyne targets',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Retrosynthetic analysis for alkyne targets'
          }
        ]
      }
    },
    {
      id: 'alkyn5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydrohalogenation',
            options: ['2 equivalents of base from dihalide → alkyne', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Double elimination',
            options: ['geminal or vicinal dihalide → alkyne', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Acetylide alkylation builds carbon-carbon bonds',
            options: ['Acetylide alkylation builds carbon-carbon bonds', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['2 equivalents of base from dihalide → alkyne', 'geminal or vicinal dihalide → alkyne', 'Acetylide alkylation builds carbon-carbon bonds'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Alkyne Synthesis.'
      }
    }
  ]
}
