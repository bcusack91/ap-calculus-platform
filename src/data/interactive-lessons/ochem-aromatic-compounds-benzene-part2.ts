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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Benzene" refer to in this topic?',
            options: [
              'Actual structure is a hybrid (delocalized)',
              'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)',
              'Two equivalent resonance structures',
              'six equivalent C-H bonds, all 1.39 Å'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Benzene: six equivalent C-H bonds, all 1.39 Å. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Actual structure is a hybrid…?',
            options: [
              'Actual structure is a hybrid (delocalized)',
              'six equivalent C-H bonds, all 1.39 Å',
              'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)',
              'Two equivalent resonance structures'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Actual structure is a hybrid (delocalized). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Benzene',
            options: ['Two equivalent resonance structures', 'six equivalent C-H bonds, all 1.39 Å', 'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)', 'Actual structure is a hybrid (delocalized)']
          },
          {
            label: 'Two equivalent resonance structures',
            options: ['Two equivalent resonance structures', 'six equivalent C-H bonds, all 1.39 Å', 'Actual structure is a hybrid (delocalized)', 'Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)']
          },
          {
            label: 'Actual structure is a hybrid…',
            options: ['Heat of hydrogenation is 150 kJ/mol LESS than expected (resonance energy)', 'Two equivalent resonance structures', 'six equivalent C-H bonds, all 1.39 Å', 'Actual structure is a hybrid (delocalized)']
          }
        ],
        correctAnswers: ['six equivalent C-H bonds, all 1.39 Å', 'Two equivalent resonance structures', 'Actual structure is a hybrid (delocalized)'],
        hint1: 'Think about what each concept specifically describes in Benzene Structure.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Benzene Structure describes a specific idea. Benzene: six equivalent C-H bonds, all 1.39 Å. Two equivalent resonance structures. Actual structure is a hybrid (delocalized).'
      }
    }
  ]
}
