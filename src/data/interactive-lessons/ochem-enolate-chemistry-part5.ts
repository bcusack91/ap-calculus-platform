export const oChemEnolatePart5Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola5-intro',
      type: 'text' as const,
      content: `
# Michael & Robinson Reactions

**Part 5 of 7 — Michael & Robinson Reactions**

### 1. Michael reaction

conjugate (1,4-) addition to enone

### 2. Michael donor (nucleophile) + Michael acceptor (enone)

Michael donor (nucleophile) + Michael acceptor (enone)

### 3. Robinson annulation

Michael + aldol cyclization → cyclohexenone

### 4. Powerful method for building six-membered rings

Powerful method for building six-membered rings
      `
    },
    {
      id: 'enola5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Michael reaction?',
            options: [
              'Michael + aldol cyclization → cyclohexenone',
              'conjugate (1,4-) addition to enone',
              'Powerful method for building six-membered rings',
              'Michael donor (nucleophile) + Michael acceptor (enone)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Michael reaction: conjugate (1,4-) addition to enone. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Robinson annulation:',
            options: [
              'Powerful method for building six-membered rings',
              'Michael donor (nucleophile) + Michael acceptor (enone)',
              'Michael + aldol cyclization → cyclohexenone',
              'conjugate (1,4-) addition to enone'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Robinson annulation: Michael + aldol cyclization → cyclohexenone. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'enola5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Michael reaction**: conjugate (1,4-) addition to enone
- **Michael donor (nucleophile) + Michael acceptor (enone)**
- **Robinson annulation**: Michael + aldol cyclization → cyclohexenone
- **Powerful method for building six-membered rings**
      `
    },
    {
      id: 'enola5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to michael & robinson reactions?',
            options: [
              'Powerful method for building six-membered rings',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Powerful method for building six-membered rings'
          }
        ]
      }
    },
    {
      id: 'enola5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Michael reaction',
            options: ['Michael + aldol cyclization → cyclohexenone', 'Powerful method for building six-membered rings', 'conjugate (1,4-) addition to enone', 'Michael donor (nucleophile) + Michael acceptor (enone)']
          },
          {
            label: 'Robinson annulation',
            options: ['Powerful method for building six-membered rings', 'Michael + aldol cyclization → cyclohexenone', 'conjugate (1,4-) addition to enone', 'Michael donor (nucleophile) + Michael acceptor (enone)']
          }
        ],
        correctAnswers: ['conjugate (1,4-) addition to enone', 'Michael + aldol cyclization → cyclohexenone'],
        hint1: 'Think about what each concept specifically describes in Michael & Robinson Reactions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Michael & Robinson Reactions describes a specific idea. Michael reaction: conjugate (1,4-) addition to enone. Robinson annulation: Michael + aldol cyclization → cyclohexenone.'
      }
    }
  ]
}
