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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Condensed formulas?',
            options: [
              'Wedge-dash notation for 3D representation',
              'CH₃CH₂OH',
              'Each vertex = carbon, hydrogens are implied',
              'zigzag lines'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Condensed formulas: CH₃CH₂OH. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Each vertex = carbon, hydrogens are…?',
            options: [
              'Each vertex = carbon, hydrogens are implied',
              'zigzag lines',
              'Wedge-dash notation for 3D representation',
              'CH₃CH₂OH'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Each vertex = carbon, hydrogens are implied. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Condensed formulas',
            options: ['Each vertex = carbon, hydrogens are implied', 'CH₃CH₂OH', 'Wedge-dash notation for 3D representation', 'zigzag lines']
          },
          {
            label: 'Skeletal (line-angle) structures',
            options: ['Each vertex = carbon, hydrogens are implied', 'zigzag lines', 'Wedge-dash notation for 3D representation', 'CH₃CH₂OH']
          }
        ],
        correctAnswers: ['CH₃CH₂OH', 'zigzag lines'],
        hint1: 'Think about what each concept specifically describes in ️ Molecular Representations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Molecular Representations describes a specific idea. Condensed formulas: CH₃CH₂OH. Skeletal (line-angle) structures: zigzag lines.'
      }
    }
  ]
}
