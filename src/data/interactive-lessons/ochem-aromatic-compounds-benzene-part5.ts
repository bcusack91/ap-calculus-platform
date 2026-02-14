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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of aromatic vs antiaromatic?',
            options: [
              'Antiaromatic',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Antiaromatic: planar, cyclic, conjugated, 4n π electrons → destabilized'
          },
          {
            question: 'In the context of aromatic vs antiaromatic, which is accurate?',
            options: [
              'not fully conjugated, not planar',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Nonaromatic: not fully conjugated, not planar'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Antiaromatic',
            options: ['planar, cyclic, conjugated, 4n π electrons → desta', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Cyclobutadiene (4 π electrons)',
            options: ['antiaromatic, very unstable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Nonaromatic',
            options: ['not fully conjugated, not planar', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['planar, cyclic, conjugated, 4n π electrons → desta', 'antiaromatic, very unstable', 'not fully conjugated, not planar'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Aromatic vs Antiaromatic.'
      }
    }
  ]
}
