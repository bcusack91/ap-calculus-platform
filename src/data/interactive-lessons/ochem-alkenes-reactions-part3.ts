export const oChemAlkenesPart3Data = {
  topicSlug: 'alkenes-reactions',
  sections: [
    {
      id: 'alken3-intro',
      type: 'text' as const,
      content: `
# Markovnikov & Anti-Markovnikov

**Part 3 of 7 — Markovnikov & Anti-Markovnikov**

### 1. Markovnikov's rule

H adds to carbon with more H's

### 2. Carbocation stability determines regiochemistry

Carbocation stability determines regiochemistry

### 3. Anti-Markovnikov

HBr/peroxides (radical addition)

### 4. Peroxides reverse the selectivity via radical mechanism

Peroxides reverse the selectivity via radical mechanism
      `
    },
    {
      id: 'alken3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Markovnikov\'s rule?',
            options: [
              'Peroxides reverse the selectivity via radical mechanism',
              'Carbocation stability determines regiochemistry',
              'H adds to carbon with more H\'s',
              'HBr/peroxides (radical addition)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Markovnikov\'s rule: H adds to carbon with more H\'s. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Markovnikov & Anti-Markovnikov, which explains Anti-Markovnikov?',
            options: [
              'HBr/peroxides (radical addition)',
              'Carbocation stability determines regiochemistry',
              'Peroxides reverse the selectivity via radical mechanism',
              'H adds to carbon with more H\'s'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Anti-Markovnikov: HBr/peroxides (radical addition). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'alken3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Markovnikov's rule**: H adds to carbon with more H's
- **Carbocation stability determines regiochemistry**
- **Anti-Markovnikov**: HBr/peroxides (radical addition)
- **Peroxides reverse the selectivity via radical mechanism**
      `
    },
    {
      id: 'alken3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to markovnikov & anti-markovnikov?',
            options: [
              'Peroxides reverse the selectivity via radical mechanism',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Peroxides reverse the selectivity via radical mechanism'
          }
        ]
      }
    },
    {
      id: 'alken3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Markovnikov\'s rule',
            options: ['HBr/peroxides (radical addition)', 'Carbocation stability determines regiochemistry', 'Peroxides reverse the selectivity via radical mechanism', 'H adds to carbon with more H\'s']
          },
          {
            label: 'Anti-Markovnikov',
            options: ['HBr/peroxides (radical addition)', 'Peroxides reverse the selectivity via radical mechanism', 'Carbocation stability determines regiochemistry', 'H adds to carbon with more H\'s']
          }
        ],
        correctAnswers: ['H adds to carbon with more H\'s', 'HBr/peroxides (radical addition)'],
        hint1: 'Think about what each concept specifically describes in Markovnikov & Anti-Markovnikov.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Markovnikov & Anti-Markovnikov describes a specific idea. Markovnikov\'s rule: H adds to carbon with more H\'s. Anti-Markovnikov: HBr/peroxides (radical addition).'
      }
    }
  ]
}
