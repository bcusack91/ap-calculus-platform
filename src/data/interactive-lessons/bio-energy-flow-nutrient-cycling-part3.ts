export const bioEnergyFlowPart3Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'ener3-intro-p3',
      type: 'text' as const,
      content: `
# ## Ecological Pyramids

**Part 3 of 7 — Ecological Pyramids**

1. Pyramid of energy: always upright (10% rule)
2. Only ~10% of energy transfers between trophic levels
3. 90% lost as heat through cellular respiration
4. Pyramid of biomass: usually upright (exception: open ocean)
      `
    },
    {
      id: 'ener3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Pyramid of energy" refer to in biology?',
            options: [
              'Only ~10% of energy transfers between trophic levels',
              'always upright (10% rule)',
              '90% lost as heat through cellular respiration',
              'usually upright (exception: open ocean)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Pyramid of energy: always upright (10% rule). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ecological Pyramids, which explains 90% lost as heat through cellular…?',
            options: [
              '90% lost as heat through cellular respiration',
              'usually upright (exception: open ocean)',
              'Only ~10% of energy transfers between trophic levels',
              'always upright (10% rule)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — 90% lost as heat through cellular respiration. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ener3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Pyramid of energy**: always upright (10% rule)
- **Only ~10% of energy transfers between trophic levels**
- **90% lost as heat through cellular respiration**
- **Pyramid of biomass**: usually upright (exception: open ocean)
      `
    },
    {
      id: 'ener3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Pyramid of biomass is correct?',
            options: [
              'Only ~10% of energy transfers between trophic levels',
              'always upright (10% rule)',
              'usually upright (exception: open ocean)',
              '90% lost as heat through cellular respiration'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Pyramid of biomass: usually upright (exception: open ocean). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'ener3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Pyramid of energy',
            options: ['90% lost as heat through cellular respiration', 'Only ~10% of energy transfers between trophic levels', 'always upright (10% rule)', 'usually upright (exception: open ocean)']
          },
          {
            label: 'Pyramid of biomass',
            options: ['always upright (10% rule)', '90% lost as heat through cellular respiration', 'usually upright (exception: open ocean)', 'Only ~10% of energy transfers between trophic levels']
          }
        ],
        correctAnswers: ['always upright (10% rule)', 'usually upright (exception: open ocean)'],
        hint1: 'Think about what each concept specifically describes in Ecological Pyramids.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ecological Pyramids describes a specific idea. Pyramid of energy: always upright (10% rule). Pyramid of biomass: usually upright (exception: open ocean).'
      }
    }
  ]
}
