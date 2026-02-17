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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Chlorination" refer to in this topic?',
            options: [
              'N-bromosuccinimide for allylic/benzylic bromination',
              'Bromine is more selective because the H-abstraction step is endothermic',
              'low selectivity (3°:2°:1° ≈ 5:4:1)',
              'high selectivity (3°:2°:1° ≈ 1600:82:1)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Chlorination: low selectivity (3°:2°:1° ≈ 5:4:1). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Selectivity in Halogenation, which explains Bromine is more selective because the…?',
            options: [
              'low selectivity (3°:2°:1° ≈ 5:4:1)',
              'Bromine is more selective because the H-abstraction step is endothermic',
              'high selectivity (3°:2°:1° ≈ 1600:82:1)',
              'N-bromosuccinimide for allylic/benzylic bromination'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Bromine is more selective because the H-abstraction step is endothermic. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chlorination',
            options: ['N-bromosuccinimide for allylic/benzylic bromination', 'high selectivity (3°:2°:1° ≈ 1600:82:1)', 'low selectivity (3°:2°:1° ≈ 5:4:1)', 'Bromine is more selective because the H-abstraction step is endothermic']
          },
          {
            label: 'Bromination',
            options: ['Bromine is more selective because the H-abstraction step is endothermic', 'high selectivity (3°:2°:1° ≈ 1600:82:1)', 'N-bromosuccinimide for allylic/benzylic bromination', 'low selectivity (3°:2°:1° ≈ 5:4:1)']
          },
          {
            label: 'NBS',
            options: ['N-bromosuccinimide for allylic/benzylic bromination', 'high selectivity (3°:2°:1° ≈ 1600:82:1)', 'Bromine is more selective because the H-abstraction step is endothermic', 'low selectivity (3°:2°:1° ≈ 5:4:1)']
          }
        ],
        correctAnswers: ['low selectivity (3°:2°:1° ≈ 5:4:1)', 'high selectivity (3°:2°:1° ≈ 1600:82:1)', 'N-bromosuccinimide for allylic/benzylic bromination'],
        hint1: 'Think about what each concept specifically describes in Selectivity in Halogenation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Selectivity in Halogenation describes a specific idea. Chlorination: low selectivity (3°:2°:1° ≈ 5:4:1). Bromination: high selectivity (3°:2°:1° ≈ 1600:82:1). NBS: N-bromosuccinimide for allylic/benzylic bromination.'
      }
    }
  ]
}
