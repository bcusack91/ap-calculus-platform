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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of radical halogenation?',
            options: [
              'Initiation',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Initiation: light or heat breaks X₂ → 2X•'
          },
          {
            question: 'In the context of radical halogenation, which is accurate?',
            options: [
              'R• + X₂ → R-X + X•',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Propagation step 2: R• + X₂ → R-X + X•'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Initiation',
            options: ['light or heat breaks X₂ → 2X•', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Propagation step 1',
            options: ['X• + R-H → R• + HX', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Propagation step 2',
            options: ['R• + X₂ → R-X + X•', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['light or heat breaks X₂ → 2X•', 'X• + R-H → R• + HX', 'R• + X₂ → R-X + X•'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Radical Halogenation.'
      }
    }
  ]
}
