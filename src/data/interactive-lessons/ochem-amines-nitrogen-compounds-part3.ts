export const oChemAminesPart3Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine3-intro',
      type: 'text' as const,
      content: `
# Amine Synthesis

**Part 3 of 7 — Amine Synthesis**

### 1. Gabriel synthesis

phthalimide + alkyl halide → primary amine

### 2. Reductive amination

carbonyl + amine + NaBH₃CN → amine

### 3. Reduction of nitro groups

catalytic hydrogenation or Sn/HCl

### 4. Hofmann rearrangement

amide → amine with one fewer carbon
      `
    },
    {
      id: 'amine3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of amine synthesis?',
            options: [
              'Gabriel synthesis',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Gabriel synthesis: phthalimide + alkyl halide → primary amine'
          },
          {
            question: 'In the context of amine synthesis, which is accurate?',
            options: [
              'catalytic hydrogenation or Sn/HCl',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reduction of nitro groups: catalytic hydrogenation or Sn/HCl'
          }
        ]
      }
    },
    {
      id: 'amine3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Gabriel synthesis**: phthalimide + alkyl halide → primary amine
- **Reductive amination**: carbonyl + amine + NaBH₃CN → amine
- **Reduction of nitro groups**: catalytic hydrogenation or Sn/HCl
- **Hofmann rearrangement**: amide → amine with one fewer carbon
      `
    },
    {
      id: 'amine3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to amine synthesis?',
            options: [
              'amide → amine with one fewer carbon',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Hofmann rearrangement: amide → amine with one fewer carbon'
          }
        ]
      }
    },
    {
      id: 'amine3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gabriel synthesis',
            options: ['phthalimide + alkyl halide → primary amine', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reductive amination',
            options: ['carbonyl + amine + NaBH₃CN → amine', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Reduction of nitro groups',
            options: ['catalytic hydrogenation or Sn/HCl', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['phthalimide + alkyl halide → primary amine', 'carbonyl + amine + NaBH₃CN → amine', 'catalytic hydrogenation or Sn/HCl'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Amine Synthesis.'
      }
    }
  ]
}
