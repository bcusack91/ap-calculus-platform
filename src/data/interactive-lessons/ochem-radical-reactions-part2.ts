export const oChemRadicalsPart2Data = {
  topicSlug: 'radical-reactions',
  sections: [
    {
      id: 'radic2-intro',
      type: 'text' as const,
      content: `
# Radical Halogenation

**Part 2 of 7 — Radical Halogenation**

### 1. Initiation

light or heat breaks X₂ → 2X•

### 2. Propagation step 1

X• + R-H → R• + HX

### 3. Propagation step 2

R• + X₂ → R-X + X•

### 4. Termination

any two radicals combine
      `
    },
    {
      id: 'radic2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Initiation" refer to in this topic?',
            options: [
              'R• + X₂ → R-X + X•',
              'light or heat breaks X₂ → 2X•',
              'any two radicals combine',
              'X• + R-H → R• + HX'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Initiation: light or heat breaks X₂ → 2X•. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Radical Halogenation, which explains Propagation step 2?',
            options: [
              'X• + R-H → R• + HX',
              'light or heat breaks X₂ → 2X•',
              'R• + X₂ → R-X + X•',
              'any two radicals combine'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Propagation step 2: R• + X₂ → R-X + X•. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'radic2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Initiation**: light or heat breaks X₂ → 2X•
- **Propagation step 1**: X• + R-H → R• + HX
- **Propagation step 2**: R• + X₂ → R-X + X•
- **Termination**: any two radicals combine
      `
    },
    {
      id: 'radic2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to radical halogenation?',
            options: [
              'any two radicals combine',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Termination: any two radicals combine'
          }
        ]
      }
    },
    {
      id: 'radic2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Initiation',
            options: ['any two radicals combine', 'light or heat breaks X₂ → 2X•', 'R• + X₂ → R-X + X•', 'X• + R-H → R• + HX']
          },
          {
            label: 'Propagation step 1',
            options: ['light or heat breaks X₂ → 2X•', 'X• + R-H → R• + HX', 'R• + X₂ → R-X + X•', 'any two radicals combine']
          },
          {
            label: 'Propagation step 2',
            options: ['any two radicals combine', 'light or heat breaks X₂ → 2X•', 'R• + X₂ → R-X + X•', 'X• + R-H → R• + HX']
          }
        ],
        correctAnswers: ['light or heat breaks X₂ → 2X•', 'X• + R-H → R• + HX', 'R• + X₂ → R-X + X•'],
        hint1: 'Think about what each concept specifically describes in Radical Halogenation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Radical Halogenation describes a specific idea. Initiation: light or heat breaks X₂ → 2X•. Propagation step 1: X• + R-H → R• + HX. Propagation step 2: R• + X₂ → R-X + X•.'
      }
    }
  ]
}
