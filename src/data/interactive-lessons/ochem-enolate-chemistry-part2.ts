export const oChemEnolatePart2Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola2-intro',
      type: 'text' as const,
      content: `
# Enolate Formation

**Part 2 of 7 — Enolate Formation**

### 1. Base removes α-hydrogen → enolate (resonance-stabilized carbanion)

Base removes α-hydrogen → enolate (resonance-stabilized carbanion)

### 2. LDA (lithium diisopropylamide)

strong, non-nucleophilic base

### 3. Kinetic vs thermodynamic enolate

Kinetic vs thermodynamic enolate

### 4. Enolates are nucleophilic at carbon

Enolates are nucleophilic at carbon
      `
    },
    {
      id: 'enola2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Base removes α-hydrogen → enolate…?',
            options: [
              'Kinetic vs thermodynamic enolate',
              'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)',
              'strong, non-nucleophilic base',
              'Enolates are nucleophilic at carbon'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Base removes α-hydrogen → enolate (resonance-stabilized carbanion). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Kinetic vs thermodynamic enolate:',
            options: [
              'strong, non-nucleophilic base',
              'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)',
              'Enolates are nucleophilic at carbon',
              'Kinetic vs thermodynamic enolate'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Kinetic vs thermodynamic enolate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Base removes α-hydrogen → enolate (resonance-stabilized carbanion)**
- **LDA (lithium diisopropylamide)**: strong, non-nucleophilic base
- **Kinetic vs thermodynamic enolate**
- **Enolates are nucleophilic at carbon**
      `
    },
    {
      id: 'enola2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to enolate formation?',
            options: [
              'Enolates are nucleophilic at carbon',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Enolates are nucleophilic at carbon'
          }
        ]
      }
    },
    {
      id: 'enola2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Base removes α-hydrogen → enolate…',
            options: ['strong, non-nucleophilic base', 'Enolates are nucleophilic at carbon', 'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)', 'Kinetic vs thermodynamic enolate']
          },
          {
            label: 'LDA (lithium diisopropylamide)',
            options: ['Enolates are nucleophilic at carbon', 'strong, non-nucleophilic base', 'Kinetic vs thermodynamic enolate', 'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)']
          },
          {
            label: 'Kinetic vs thermodynamic enolate',
            options: ['strong, non-nucleophilic base', 'Kinetic vs thermodynamic enolate', 'Enolates are nucleophilic at carbon', 'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)']
          }
        ],
        correctAnswers: ['Base removes α-hydrogen → enolate (resonance-stabilized carbanion)', 'strong, non-nucleophilic base', 'Kinetic vs thermodynamic enolate'],
        hint1: 'Think about what each concept specifically describes in Enolate Formation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Enolate Formation describes a specific idea. Base removes α-hydrogen → enolate (resonance-stabilized carbanion). LDA (lithium diisopropylamide): strong, non-nucleophilic base. Kinetic vs thermodynamic enolate.'
      }
    }
  ]
}
