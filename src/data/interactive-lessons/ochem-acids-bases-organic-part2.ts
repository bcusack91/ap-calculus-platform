export const oChemAcidsBasesPart2Data = {
  topicSlug: 'acids-bases-organic',
  sections: [
    {
      id: 'acids2-intro',
      type: 'text' as const,
      content: `
# pKa & Acid Strength

**Part 2 of 7 — pKa & Acid Strength**

### 1. Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)

Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)

### 2. Lower pKa = stronger acid

Lower pKa = stronger acid

### 3. pKa scale

HI (~-10) to CH₄ (~50)

### 4. Equilibrium favors the weaker acid/base side

Equilibrium favors the weaker acid/base side
      `
    },
    {
      id: 'acids2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)" refer to in this topic?',
            options: [
              'Equilibrium favors the weaker acid/base side',
              'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)',
              'HI (~-10) to CH₄ (~50)',
              'Lower pKa = stronger acid'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of pKa & Acid Strength, which explains pKa scale?',
            options: [
              'HI (~-10) to CH₄ (~50)',
              'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)',
              'Equilibrium favors the weaker acid/base side',
              'Lower pKa = stronger acid'
            ],
            correctAnswer: 0,
            explanation: 'Correct — pKa scale: HI (~-10) to CH₄ (~50). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'acids2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)**
- **Lower pKa = stronger acid**
- **pKa scale**: HI (~-10) to CH₄ (~50)
- **Equilibrium favors the weaker acid/base side**
      `
    },
    {
      id: 'acids2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to pka & acid strength?',
            options: [
              'Equilibrium favors the weaker acid/base side',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Equilibrium favors the weaker acid/base side'
          }
        ]
      }
    },
    {
      id: 'acids2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)',
            options: ['Equilibrium favors the weaker acid/base side', 'HI (~-10) to CH₄ (~50)', 'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Lower pKa = stronger acid']
          },
          {
            label: 'Lower pKa = stronger acid',
            options: ['HI (~-10) to CH₄ (~50)', 'Equilibrium favors the weaker acid/base side', 'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Lower pKa = stronger acid']
          },
          {
            label: 'pKa scale',
            options: ['Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Equilibrium favors the weaker acid/base side', 'Lower pKa = stronger acid', 'HI (~-10) to CH₄ (~50)']
          }
        ],
        correctAnswers: ['Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Lower pKa = stronger acid', 'HI (~-10) to CH₄ (~50)'],
        hint1: 'Think about what each concept specifically describes in pKa & Acid Strength.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in pKa & Acid Strength describes a specific idea. Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka). Lower pKa = stronger acid. pKa scale: HI (~-10) to CH₄ (~50).'
      }
    }
  ]
}
