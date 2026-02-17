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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Gabriel synthesis" refer to in this topic?',
            options: [
              'phthalimide + alkyl halide → primary amine',
              'amide → amine with one fewer carbon',
              'carbonyl + amine + NaBH₃CN → amine',
              'catalytic hydrogenation or Sn/HCl'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Gabriel synthesis: phthalimide + alkyl halide → primary amine. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Reduction of nitro groups:',
            options: [
              'phthalimide + alkyl halide → primary amine',
              'amide → amine with one fewer carbon',
              'carbonyl + amine + NaBH₃CN → amine',
              'catalytic hydrogenation or Sn/HCl'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Reduction of nitro groups: catalytic hydrogenation or Sn/HCl. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gabriel synthesis',
            options: ['carbonyl + amine + NaBH₃CN → amine', 'phthalimide + alkyl halide → primary amine', 'catalytic hydrogenation or Sn/HCl', 'amide → amine with one fewer carbon']
          },
          {
            label: 'Reductive amination',
            options: ['catalytic hydrogenation or Sn/HCl', 'phthalimide + alkyl halide → primary amine', 'carbonyl + amine + NaBH₃CN → amine', 'amide → amine with one fewer carbon']
          },
          {
            label: 'Reduction of nitro groups',
            options: ['amide → amine with one fewer carbon', 'catalytic hydrogenation or Sn/HCl', 'phthalimide + alkyl halide → primary amine', 'carbonyl + amine + NaBH₃CN → amine']
          }
        ],
        correctAnswers: ['phthalimide + alkyl halide → primary amine', 'carbonyl + amine + NaBH₃CN → amine', 'catalytic hydrogenation or Sn/HCl'],
        hint1: 'Think about what each concept specifically describes in Amine Synthesis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Amine Synthesis describes a specific idea. Gabriel synthesis: phthalimide + alkyl halide → primary amine. Reductive amination: carbonyl + amine + NaBH₃CN → amine. Reduction of nitro groups: catalytic hydrogenation or Sn/HCl.'
      }
    }
  ]
}
