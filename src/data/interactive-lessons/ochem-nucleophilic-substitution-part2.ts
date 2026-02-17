export const oChemSNPart2Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle2-intro',
      type: 'text' as const,
      content: `
# SN2 Mechanism

**Part 2 of 7 — SN2 Mechanism**

### 1. SN2

one-step, concerted mechanism

### 2. Rate = k[substrate][nucleophile] (bimolecular)

Rate = k[substrate][nucleophile] (bimolecular)

### 3. Backside attack → inversion of configuration (Walden inversion)

Backside attack → inversion of configuration (Walden inversion)

### 4. Best with

methyl/primary substrates, strong nucleophiles, polar aprotic solvents
      `
    },
    {
      id: 'nucle2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "SN2" refer to in this topic?',
            options: [
              'Rate = k[substrate][nucleophile] (bimolecular)',
              'one-step, concerted mechanism',
              'methyl/primary substrates, strong nucleophiles, polar aprotic solvents',
              'Backside attack → inversion of configuration (Walden inversion)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — SN2: one-step, concerted mechanism. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Backside attack → inversion of…?',
            options: [
              'Backside attack → inversion of configuration (Walden inversion)',
              'methyl/primary substrates, strong nucleophiles, polar aprotic solvents',
              'one-step, concerted mechanism',
              'Rate = k[substrate][nucleophile] (bimolecular)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Backside attack → inversion of configuration (Walden inversion). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'nucle2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **SN2**: one-step, concerted mechanism
- **Rate = k[substrate][nucleophile] (bimolecular)**
- **Backside attack → inversion of configuration (Walden inversion)**
- **Best with**: methyl/primary substrates, strong nucleophiles, polar aprotic solvents
      `
    },
    {
      id: 'nucle2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sn2 mechanism?',
            options: [
              'methyl/primary substrates, strong nucleophiles, polar aprotic solvents',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Best with: methyl/primary substrates, strong nucleophiles, polar aprotic solvents'
          }
        ]
      }
    },
    {
      id: 'nucle2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN2',
            options: ['Backside attack → inversion of configuration (Walden inversion)', 'Rate = k[substrate][nucleophile] (bimolecular)', 'methyl/primary substrates, strong nucleophiles, polar aprotic solvents', 'one-step, concerted mechanism']
          },
          {
            label: 'Best with',
            options: ['Backside attack → inversion of configuration (Walden inversion)', 'methyl/primary substrates, strong nucleophiles, polar aprotic solvents', 'Rate = k[substrate][nucleophile] (bimolecular)', 'one-step, concerted mechanism']
          }
        ],
        correctAnswers: ['one-step, concerted mechanism', 'methyl/primary substrates, strong nucleophiles, polar aprotic solvents'],
        hint1: 'Think about what each concept specifically describes in SN2 Mechanism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in SN2 Mechanism describes a specific idea. SN2: one-step, concerted mechanism. Best with: methyl/primary substrates, strong nucleophiles, polar aprotic solvents.'
      }
    }
  ]
}
