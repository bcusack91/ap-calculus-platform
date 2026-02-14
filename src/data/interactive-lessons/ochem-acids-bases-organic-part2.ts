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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of pka & acid strength?',
            options: [
              'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)'
          },
          {
            question: 'In the context of pka & acid strength, which is accurate?',
            options: [
              'HI (~-10) to CH₄ (~50)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'pKa scale: HI (~-10) to CH₄ (~50)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)',
            options: ['Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Lower pKa = stronger acid',
            options: ['Lower pKa = stronger acid', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'pKa scale',
            options: ['HI (~-10) to CH₄ (~50)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Ka = [H⁺][A⁻]/[HA]; pKa = -log(Ka)', 'Lower pKa = stronger acid', 'HI (~-10) to CH₄ (~50)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding pKa & Acid Strength.'
      }
    }
  ]
}
