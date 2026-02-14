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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of markovnikov & anti-markovnikov?',
            options: [
              'Markovnikov\'s rule',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Markovnikov\'s rule: H adds to carbon with more H\'s'
          },
          {
            question: 'In the context of markovnikov & anti-markovnikov, which is accurate?',
            options: [
              'HBr/peroxides (radical addition)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Anti-Markovnikov: HBr/peroxides (radical addition)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Markovnikov\'s rule',
            options: ['H adds to carbon with more H\'s', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Carbocation stability determines regiochemistry',
            options: ['Carbocation stability determines regiochemistry', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Anti-Markovnikov',
            options: ['HBr/peroxides (radical addition)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['H adds to carbon with more H\'s', 'Carbocation stability determines regiochemistry', 'HBr/peroxides (radical addition)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Markovnikov & Anti-Markovnikov.'
      }
    }
  ]
}
