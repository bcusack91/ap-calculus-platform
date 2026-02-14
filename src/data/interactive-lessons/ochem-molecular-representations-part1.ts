export const oChemMolRepPart1Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Molecular Representations

**Part 1 of 7 — Condensed & Skeletal Structures**

### 1. Condensed formulas

CH₃CH₂OH

### 2. Skeletal (line-angle) structures

zigzag lines

### 3. Each vertex = carbon, hydrogens are implied

Each vertex = carbon, hydrogens are implied

### 4. Wedge-dash notation for 3D representation

Wedge-dash notation for 3D representation
      `
    },
    {
      id: 'molec1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of condensed & skeletal structures?',
            options: [
              'Condensed formulas',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Condensed formulas: CH₃CH₂OH'
          },
          {
            question: 'In the context of condensed & skeletal structures, which is accurate?',
            options: [
              'Each vertex = carbon, hydrogens are implied',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Each vertex = carbon, hydrogens are implied'
          }
        ]
      }
    },
    {
      id: 'molec1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Condensed formulas**: CH₃CH₂OH
- **Skeletal (line-angle) structures**: zigzag lines
- **Each vertex = carbon, hydrogens are implied**
- **Wedge-dash notation for 3D representation**
      `
    },
    {
      id: 'molec1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to condensed & skeletal structures?',
            options: [
              'Wedge-dash notation for 3D representation',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Wedge-dash notation for 3D representation'
          }
        ]
      }
    },
    {
      id: 'molec1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Condensed formulas',
            options: ['CH₃CH₂OH', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Skeletal (line-angle) structures',
            options: ['zigzag lines', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Each vertex = carbon, hydrogens are implied',
            options: ['Each vertex = carbon, hydrogens are implied', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['CH₃CH₂OH', 'zigzag lines', 'Each vertex = carbon, hydrogens are implied'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Condensed & Skeletal Structures.'
      }
    }
  ]
}
