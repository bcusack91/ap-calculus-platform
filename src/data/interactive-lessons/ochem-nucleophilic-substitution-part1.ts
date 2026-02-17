export const oChemSNPart1Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Nucleophilic Substitution

**Part 1 of 7 — Introduction to Substitution**

### 1. Nucleophilic substitution

nucleophile replaces leaving group

### 2. Nu

⁻ + R-LG → R-Nu + LG:⁻

### 3. Two mechanisms

SN1 and SN2

### 4. Mechanism depends on substrate, nucleophile, solvent, leaving group

Mechanism depends on substrate, nucleophile, solvent, leaving group
      `
    },
    {
      id: 'nucle1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Nucleophilic substitution" refer to in this topic?',
            options: [
              'Mechanism depends on substrate, nucleophile, solvent, leaving group',
              'SN1 and SN2',
              'nucleophile replaces leaving group',
              '⁻ + R-LG → R-Nu + LG:⁻'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Nucleophilic substitution: nucleophile replaces leaving group. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Two mechanisms?',
            options: [
              'nucleophile replaces leaving group',
              '⁻ + R-LG → R-Nu + LG:⁻',
              'SN1 and SN2',
              'Mechanism depends on substrate, nucleophile, solvent, leaving group'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Two mechanisms: SN1 and SN2. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nucle1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Nucleophilic substitution**: nucleophile replaces leaving group
- **Nu**: ⁻ + R-LG → R-Nu + LG:⁻
- **Two mechanisms**: SN1 and SN2
- **Mechanism depends on substrate, nucleophile, solvent, leaving group**
      `
    },
    {
      id: 'nucle1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to substitution?',
            options: [
              'Mechanism depends on substrate, nucleophile, solvent, leaving group',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Mechanism depends on substrate, nucleophile, solvent, leaving group'
          }
        ]
      }
    },
    {
      id: 'nucle1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Nucleophilic substitution',
            options: ['SN1 and SN2', 'Mechanism depends on substrate, nucleophile, solvent, leaving group', 'nucleophile replaces leaving group', '⁻ + R-LG → R-Nu + LG:⁻']
          },
          {
            label: 'Nu',
            options: ['⁻ + R-LG → R-Nu + LG:⁻', 'nucleophile replaces leaving group', 'Mechanism depends on substrate, nucleophile, solvent, leaving group', 'SN1 and SN2']
          },
          {
            label: 'Two mechanisms',
            options: ['nucleophile replaces leaving group', 'Mechanism depends on substrate, nucleophile, solvent, leaving group', '⁻ + R-LG → R-Nu + LG:⁻', 'SN1 and SN2']
          }
        ],
        correctAnswers: ['nucleophile replaces leaving group', '⁻ + R-LG → R-Nu + LG:⁻', 'SN1 and SN2'],
        hint1: 'Think about what each concept specifically describes in ️ Nucleophilic Substitution.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Nucleophilic Substitution describes a specific idea. Nucleophilic substitution: nucleophile replaces leaving group. Nu: ⁻ + R-LG → R-Nu + LG:⁻. Two mechanisms: SN1 and SN2.'
      }
    }
  ]
}
