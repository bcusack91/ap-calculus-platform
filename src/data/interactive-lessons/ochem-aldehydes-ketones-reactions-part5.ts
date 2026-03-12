export const oChemAldehydesKetonesPart5Data = {
  topicSlug: 'aldehydes-ketones-reactions',
  sections: [
    {
      id: 'aldeh5-intro',
      type: 'text' as const,
      content: `
# Acetals & Hemiacetals

**Part 5 of 7 — Acetals & Hemiacetals**

### 1. Hemiacetal

one -OH and one -OR on same carbon

### 2. Acetal

two -OR groups on same carbon (formed in acid, excess alcohol)

### 3. Acetals are stable under basic conditions → protecting groups

Acetals are stable under basic conditions → protecting groups

### 4. Cyclic hemiacetals

found in sugars (glucose, fructose)
      `
    },
    {
      id: 'aldeh5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Hemiacetal?',
            options: [
              'Acetals are stable under basic conditions → protecting groups',
              'found in sugars (glucose, fructose)',
              'two -OR groups on same carbon (formed in acid, excess alcohol)',
              'one -OH and one -OR on same carbon'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Hemiacetal: one -OH and one -OR on same carbon. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Acetals & Hemiacetals, which explains Acetals are stable under basic…?',
            options: [
              'found in sugars (glucose, fructose)',
              'two -OR groups on same carbon (formed in acid, excess alcohol)',
              'one -OH and one -OR on same carbon',
              'Acetals are stable under basic conditions → protecting groups'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Acetals are stable under basic conditions → protecting groups. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aldeh5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Hemiacetal**: one -OH and one -OR on same carbon
- **Acetal**: two -OR groups on same carbon (formed in acid, excess alcohol)
- **Acetals are stable under basic conditions → protecting groups**
- **Cyclic hemiacetals**: found in sugars (glucose, fructose)
      `
    },
    {
      id: 'aldeh5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to acetals & hemiacetals?',
            options: [
              'found in sugars (glucose, fructose)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Cyclic hemiacetals: found in sugars (glucose, fructose)'
          }
        ]
      }
    },
    {
      id: 'aldeh5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hemiacetal',
            options: ['found in sugars (glucose, fructose)', 'two -OR groups on same carbon (formed in acid, excess alcohol)', 'one -OH and one -OR on same carbon', 'Acetals are stable under basic conditions → protecting groups']
          },
          {
            label: 'Acetal',
            options: ['two -OR groups on same carbon (formed in acid, excess alcohol)', 'found in sugars (glucose, fructose)', 'one -OH and one -OR on same carbon', 'Acetals are stable under basic conditions → protecting groups']
          },
          {
            label: 'Cyclic hemiacetals',
            options: ['one -OH and one -OR on same carbon', 'Acetals are stable under basic conditions → protecting groups', 'found in sugars (glucose, fructose)', 'two -OR groups on same carbon (formed in acid, excess alcohol)']
          }
        ],
        correctAnswers: ['one -OH and one -OR on same carbon', 'two -OR groups on same carbon (formed in acid, excess alcohol)', 'found in sugars (glucose, fructose)'],
        hint1: 'Think about what each concept specifically describes in Acetals & Hemiacetals.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Acetals & Hemiacetals describes a specific idea. Hemiacetal: one -OH and one -OR on same carbon. Acetal: two -OR groups on same carbon (formed in acid, excess alcohol). Cyclic hemiacetals: found in sugars (glucose, fructose).'
      }
    }
  ]
}
