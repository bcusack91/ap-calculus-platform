export const oChemAromaticPart5Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma5-intro',
      type: 'text' as const,
      content: `
# Aromatic vs Antiaromatic

**Part 5 of 7 — Aromatic vs Antiaromatic**

### 1. Antiaromatic

planar, cyclic, conjugated, 4n π electrons → destabilized

### 2. Cyclobutadiene (4 π electrons)

antiaromatic, very unstable

### 3. Nonaromatic

not fully conjugated, not planar

### 4. Charged species can be aromatic

cyclopentadienyl anion (6 π e⁻)
      `
    },
    {
      id: 'aroma5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Antiaromatic" refer to in this topic?',
            options: [
              'planar, cyclic, conjugated, 4n π electrons → destabilized',
              'not fully conjugated, not planar',
              'cyclopentadienyl anion (6 π e⁻)',
              'antiaromatic, very unstable'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Antiaromatic: planar, cyclic, conjugated, 4n π electrons → destabilized. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Nonaromatic?',
            options: [
              'planar, cyclic, conjugated, 4n π electrons → destabilized',
              'antiaromatic, very unstable',
              'not fully conjugated, not planar',
              'cyclopentadienyl anion (6 π e⁻)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Nonaromatic: not fully conjugated, not planar. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aroma5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Antiaromatic**: planar, cyclic, conjugated, 4n π electrons → destabilized
- **Cyclobutadiene (4 π electrons)**: antiaromatic, very unstable
- **Nonaromatic**: not fully conjugated, not planar
- **Charged species can be aromatic**: cyclopentadienyl anion (6 π e⁻)
      `
    },
    {
      id: 'aroma5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to aromatic vs antiaromatic?',
            options: [
              'cyclopentadienyl anion (6 π e⁻)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Charged species can be aromatic: cyclopentadienyl anion (6 π e⁻)'
          }
        ]
      }
    },
    {
      id: 'aroma5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Antiaromatic',
            options: ['antiaromatic, very unstable', 'planar, cyclic, conjugated, 4n π electrons → destabilized', 'cyclopentadienyl anion (6 π e⁻)', 'not fully conjugated, not planar']
          },
          {
            label: 'Cyclobutadiene (4 π electrons)',
            options: ['antiaromatic, very unstable', 'planar, cyclic, conjugated, 4n π electrons → destabilized', 'not fully conjugated, not planar', 'cyclopentadienyl anion (6 π e⁻)']
          },
          {
            label: 'Nonaromatic',
            options: ['not fully conjugated, not planar', 'cyclopentadienyl anion (6 π e⁻)', 'planar, cyclic, conjugated, 4n π electrons → destabilized', 'antiaromatic, very unstable']
          }
        ],
        correctAnswers: ['planar, cyclic, conjugated, 4n π electrons → destabilized', 'antiaromatic, very unstable', 'not fully conjugated, not planar'],
        hint1: 'Think about what each concept specifically describes in Aromatic vs Antiaromatic.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Aromatic vs Antiaromatic describes a specific idea. Antiaromatic: planar, cyclic, conjugated, 4n π electrons → destabilized. Cyclobutadiene (4 π electrons): antiaromatic, very unstable. Nonaromatic: not fully conjugated, not planar.'
      }
    }
  ]
}
