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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of enolate formation?',
            options: [
              'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)'
          },
          {
            question: 'In the context of enolate formation, which is accurate?',
            options: [
              'Kinetic vs thermodynamic enolate',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Kinetic vs thermodynamic enolate'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Base removes α-hydrogen → enolate (resonance-stabilized carbanion)',
            options: ['Base removes α-hydrogen → enolate (resonance-stabi', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'LDA (lithium diisopropylamide)',
            options: ['strong, non-nucleophilic base', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Kinetic vs thermodynamic enolate',
            options: ['Kinetic vs thermodynamic enolate', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Base removes α-hydrogen → enolate (resonance-stabi', 'strong, non-nucleophilic base', 'Kinetic vs thermodynamic enolate'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Enolate Formation.'
      }
    }
  ]
}
