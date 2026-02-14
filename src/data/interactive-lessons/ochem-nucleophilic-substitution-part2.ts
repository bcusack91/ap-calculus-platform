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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sn2 mechanism?',
            options: [
              'SN2',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'SN2: one-step, concerted mechanism'
          },
          {
            question: 'In the context of sn2 mechanism, which is accurate?',
            options: [
              'Backside attack → inversion of configuration (Walden inversion)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Backside attack → inversion of configuration (Walden inversion)'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN2',
            options: ['one-step, concerted mechanism', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Rate = k[substrate][nucleophile] (bimolecular)',
            options: ['Rate = k[substrate][nucleophile] (bimolecular)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Backside attack → inversion of configuration (Walden inversion)',
            options: ['Backside attack → inversion of configuration (Wald', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['one-step, concerted mechanism', 'Rate = k[substrate][nucleophile] (bimolecular)', 'Backside attack → inversion of configuration (Wald'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding SN2 Mechanism.'
      }
    }
  ]
}
