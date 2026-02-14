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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of michael & robinson reactions?',
            options: [
              'Michael reaction',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Michael reaction: conjugate (1,4-) addition to enone'
          },
          {
            question: 'In the context of michael & robinson reactions, which is accurate?',
            options: [
              'Michael + aldol cyclization → cyclohexenone',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Robinson annulation: Michael + aldol cyclization → cyclohexenone'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Michael reaction',
            options: ['conjugate (1,4-) addition to enone', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Michael donor (nucleophile) + Michael acceptor (enone)',
            options: ['Michael donor (nucleophile) + Michael acceptor (en', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Robinson annulation',
            options: ['Michael + aldol cyclization → cyclohexenone', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['conjugate (1,4-) addition to enone', 'Michael donor (nucleophile) + Michael acceptor (en', 'Michael + aldol cyclization → cyclohexenone'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Michael & Robinson Reactions.'
      }
    }
  ]
}
