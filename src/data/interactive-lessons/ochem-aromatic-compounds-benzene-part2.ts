export const oChemAromaticPart2Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma2-intro',
      type: 'text' as const,
      content: `
# Benzene Structure

**Part 2 of 7 — Benzene Structure**

### 1. Benzene

six equivalent C-H bonds, all 1.39 Å

### 2. Two equivalent resonance structures

Two equivalent resonance structures

### 3. Actual structure is a hybrid (delocalized)

Actual structure is a hybrid (delocalized)

### 4. Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)

Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)
      `
    },
    {
      id: 'aroma2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of benzene structure?',
            options: [
              'Benzene',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Benzene: six equivalent C-H bonds, all 1.39 Å'
          },
          {
            question: 'In the context of benzene structure, which is accurate?',
            options: [
              'Actual structure is a hybrid (delocalized)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Actual structure is a hybrid (delocalized)'
          }
        ]
      }
    },
    {
      id: 'aroma2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Benzene**: six equivalent C-H bonds, all 1.39 Å
- **Two equivalent resonance structures**
- **Actual structure is a hybrid (delocalized)**
- **Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)**
      `
    },
    {
      id: 'aroma2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to benzene structure?',
            options: [
              'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)'
          }
        ]
      }
    },
    {
      id: 'aroma2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Benzene',
            options: ['six equivalent C-H bonds, all 1.39 Å', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Two equivalent resonance structures',
            options: ['Two equivalent resonance structures', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Actual structure is a hybrid (delocalized)',
            options: ['Actual structure is a hybrid (delocalized)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['six equivalent C-H bonds, all 1.39 Å', 'Two equivalent resonance structures', 'Actual structure is a hybrid (delocalized)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Benzene Structure.'
      }
    }
  ]
}
