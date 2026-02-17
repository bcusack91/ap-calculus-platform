export const oChemConjugatedPart4Data = {
  topicSlug: 'conjugated-systems-dienes',
  sections: [
    {
      id: 'conju4-intro',
      type: 'text' as const,
      content: `
# Molecular Orbital Theory of Dienes

**Part 4 of 7 — Molecular Orbital Theory of Dienes**

### 1. Conjugation extends π system across multiple atoms

Conjugation extends π system across multiple atoms

### 2. HOMO of diene interacts with LUMO of dienophile

HOMO of diene interacts with LUMO of dienophile

### 3. Symmetry-allowed thermal [4+2] cycloaddition

Symmetry-allowed thermal [4+2] cycloaddition

### 4. Frontier molecular orbital theory explains selectivity

Frontier molecular orbital theory explains selectivity
      `
    },
    {
      id: 'conju4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Conjugation extends π system across…?',
            options: [
              'HOMO of diene interacts with LUMO of dienophile',
              'Frontier molecular orbital theory explains selectivity',
              'Symmetry-allowed thermal [4+2] cycloaddition',
              'Conjugation extends π system across multiple atoms'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Conjugation extends π system across multiple atoms. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Symmetry-allowed thermal [4+2]…?',
            options: [
              'Conjugation extends π system across multiple atoms',
              'Symmetry-allowed thermal [4+2] cycloaddition',
              'HOMO of diene interacts with LUMO of dienophile',
              'Frontier molecular orbital theory explains selectivity'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Symmetry-allowed thermal [4+2] cycloaddition. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conju4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Conjugation extends π system across multiple atoms**
- **HOMO of diene interacts with LUMO of dienophile**
- **Symmetry-allowed thermal [4+2] cycloaddition**
- **Frontier molecular orbital theory explains selectivity**
      `
    },
    {
      id: 'conju4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to molecular orbital theory of dienes?',
            options: [
              'Frontier molecular orbital theory explains selectivity',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Frontier molecular orbital theory explains selectivity'
          }
        ]
      }
    },
    {
      id: 'conju4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Conjugation extends π system across…',
            options: ['Symmetry-allowed thermal [4+2] cycloaddition', 'Conjugation extends π system across multiple atoms', 'HOMO of diene interacts with LUMO of dienophile', 'Frontier molecular orbital theory explains selectivity']
          },
          {
            label: 'HOMO of diene interacts with LUMO of…',
            options: ['HOMO of diene interacts with LUMO of dienophile', 'Frontier molecular orbital theory explains selectivity', 'Conjugation extends π system across multiple atoms', 'Symmetry-allowed thermal [4+2] cycloaddition']
          },
          {
            label: 'Symmetry-allowed thermal [4+2]…',
            options: ['HOMO of diene interacts with LUMO of dienophile', 'Conjugation extends π system across multiple atoms', 'Frontier molecular orbital theory explains selectivity', 'Symmetry-allowed thermal [4+2] cycloaddition']
          }
        ],
        correctAnswers: ['Conjugation extends π system across multiple atoms', 'HOMO of diene interacts with LUMO of dienophile', 'Symmetry-allowed thermal [4+2] cycloaddition'],
        hint1: 'Think about what each concept specifically describes in Molecular Orbital Theory of Dienes.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Molecular Orbital Theory of Dienes describes a specific idea. Conjugation extends π system across multiple atoms. HOMO of diene interacts with LUMO of dienophile. Symmetry-allowed thermal [4+2] cycloaddition.'
      }
    }
  ]
}
