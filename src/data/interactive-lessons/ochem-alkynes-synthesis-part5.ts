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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Dehydrohalogenation?',
            options: [
              'Retrosynthetic analysis for alkyne targets',
              'Acetylide alkylation builds carbon-carbon bonds',
              'geminal or vicinal dihalide → alkyne',
              '2 equivalents of base from dihalide → alkyne'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Dehydrohalogenation: 2 equivalents of base from dihalide → alkyne. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Alkyne Synthesis, which explains Acetylide alkylation builds…?',
            options: [
              '2 equivalents of base from dihalide → alkyne',
              'Acetylide alkylation builds carbon-carbon bonds',
              'geminal or vicinal dihalide → alkyne',
              'Retrosynthetic analysis for alkyne targets'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Acetylide alkylation builds carbon-carbon bonds. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dehydrohalogenation',
            options: ['Acetylide alkylation builds carbon-carbon bonds', 'Retrosynthetic analysis for alkyne targets', '2 equivalents of base from dihalide → alkyne', 'geminal or vicinal dihalide → alkyne']
          },
          {
            label: 'Double elimination',
            options: ['geminal or vicinal dihalide → alkyne', 'Acetylide alkylation builds carbon-carbon bonds', 'Retrosynthetic analysis for alkyne targets', '2 equivalents of base from dihalide → alkyne']
          }
        ],
        correctAnswers: ['2 equivalents of base from dihalide → alkyne', 'geminal or vicinal dihalide → alkyne'],
        hint1: 'Think about what each concept specifically describes in Alkyne Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Alkyne Synthesis describes a specific idea. Dehydrohalogenation: 2 equivalents of base from dihalide → alkyne. Double elimination: geminal or vicinal dihalide → alkyne.'
      }
    }
  ]
}
