export const oChemRadicalsPart3Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic3-intro',
      type: 'text' as const,
      content: `
# Selectivity in Halogenation

**Part 3 of 7 — Selectivity in Halogenation**

### 1. Chlorination

low selectivity (3°:2°:1° ≈ 5:4:1)

### 2. Bromination

high selectivity (3°:2°:1° ≈ 1600:82:1)

### 3. Bromine is more selective because the H-abstraction step is endothermic

Bromine is more selective because the H-abstraction step is endothermic

### 4. NBS

N-bromosuccinimide for allylic/benzylic bromination
      `
    },
    {
      id: 'radic3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of selectivity in halogenation?',
            options: [
              'Chlorination',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Chlorination: low selectivity (3°:2°:1° ≈ 5:4:1)'
          },
          {
            question: 'In the context of selectivity in halogenation, which is accurate?',
            options: [
              'Bromine is more selective because the H-abstraction step is endothermic',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Bromine is more selective because the H-abstraction step is endothermic'
          }
        ]
      }
    },
    {
      id: 'radic3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Chlorination**: low selectivity (3°:2°:1° ≈ 5:4:1)
- **Bromination**: high selectivity (3°:2°:1° ≈ 1600:82:1)
- **Bromine is more selective because the H-abstraction step is endothermic**
- **NBS**: N-bromosuccinimide for allylic/benzylic bromination
      `
    },
    {
      id: 'radic3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to selectivity in halogenation?',
            options: [
              'N-bromosuccinimide for allylic/benzylic bromination',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'NBS: N-bromosuccinimide for allylic/benzylic bromination'
          }
        ]
      }
    },
    {
      id: 'radic3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chlorination',
            options: ['low selectivity (3°:2°:1° ≈ 5:4:1)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Bromination',
            options: ['high selectivity (3°:2°:1° ≈ 1600:82:1)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Bromine is more selective because the H-abstraction step is endothermic',
            options: ['Bromine is more selective because the H-abstractio', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['low selectivity (3°:2°:1° ≈ 5:4:1)', 'high selectivity (3°:2°:1° ≈ 1600:82:1)', 'Bromine is more selective because the H-abstractio'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Selectivity in Halogenation.'
      }
    }
  ]
}
