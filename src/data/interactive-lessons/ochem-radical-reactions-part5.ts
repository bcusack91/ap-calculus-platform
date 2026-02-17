export const oChemRadicalsPart5Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic5-intro',
      type: 'text' as const,
      content: `
# Radical Stability

**Part 5 of 7 — Radical Stability**

### 1. Radical stability

3° > 2° > 1° > methyl (same as carbocations)

### 2. Allylic and benzylic radicals

stabilized by resonance

### 3. Bond dissociation energy (BDE)

energy to break bond homolytically

### 4. Lower BDE = easier radical formation

Lower BDE = easier radical formation
      `
    },
    {
      id: 'radic5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Radical stability" refer to in this topic?',
            options: [
              'Lower BDE = easier radical formation',
              '3° > 2° > 1° > methyl (same as carbocations)',
              'energy to break bond homolytically',
              'stabilized by resonance'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Radical stability: 3° > 2° > 1° > methyl (same as carbocations). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Bond dissociation energy (BDE)?',
            options: [
              '3° > 2° > 1° > methyl (same as carbocations)',
              'energy to break bond homolytically',
              'Lower BDE = easier radical formation',
              'stabilized by resonance'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bond dissociation energy (BDE): energy to break bond homolytically. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'radic5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Radical stability**: 3° > 2° > 1° > methyl (same as carbocations)
- **Allylic and benzylic radicals**: stabilized by resonance
- **Bond dissociation energy (BDE)**: energy to break bond homolytically
- **Lower BDE = easier radical formation**
      `
    },
    {
      id: 'radic5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to radical stability?',
            options: [
              'Lower BDE = easier radical formation',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Lower BDE = easier radical formation'
          }
        ]
      }
    },
    {
      id: 'radic5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radical stability',
            options: ['3° > 2° > 1° > methyl (same as carbocations)', 'Lower BDE = easier radical formation', 'stabilized by resonance', 'energy to break bond homolytically']
          },
          {
            label: 'Allylic and benzylic radicals',
            options: ['3° > 2° > 1° > methyl (same as carbocations)', 'Lower BDE = easier radical formation', 'energy to break bond homolytically', 'stabilized by resonance']
          },
          {
            label: 'Bond dissociation energy (BDE)',
            options: ['Lower BDE = easier radical formation', 'stabilized by resonance', 'energy to break bond homolytically', '3° > 2° > 1° > methyl (same as carbocations)']
          }
        ],
        correctAnswers: ['3° > 2° > 1° > methyl (same as carbocations)', 'stabilized by resonance', 'energy to break bond homolytically'],
        hint1: 'Think about what each concept specifically describes in Radical Stability.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radical Stability describes a specific idea. Radical stability: 3° > 2° > 1° > methyl (same as carbocations). Allylic and benzylic radicals: stabilized by resonance. Bond dissociation energy (BDE): energy to break bond homolytically.'
      }
    }
  ]
}
