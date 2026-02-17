export const oChemAromaticPart1Data = {
  topicSlug: 'aromatic-compounds-benzene',
  sections: [
    {
      id: 'aroma1-intro',
      type: 'text' as const,
      content: `
# ⚗️ Aromatic Compounds Benzene

**Part 1 of 7 — Aromaticity & Hückel Rule**

### 1. Hückel's rule

planar, cyclic, conjugated, 4n+2 π electrons → aromatic

### 2. Aromatic compounds are exceptionally stable

Aromatic compounds are exceptionally stable

### 3. n=0

2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons

### 4. Benzene

6 π electrons (n=1), aromatic
      `
    },
    {
      id: 'aroma1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Hückel\'s rule" refer to in this topic?',
            options: [
              '2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons',
              '6 π electrons (n=1), aromatic',
              'planar, cyclic, conjugated, 4n+2 π electrons → aromatic',
              'Aromatic compounds are exceptionally stable'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Hückel\'s rule: planar, cyclic, conjugated, 4n+2 π electrons → aromatic. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about n=0?',
            options: [
              'planar, cyclic, conjugated, 4n+2 π electrons → aromatic',
              'Aromatic compounds are exceptionally stable',
              '2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons',
              '6 π electrons (n=1), aromatic'
            ],
            correctAnswer: 2,
            explanation: 'Correct — n=0: 2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'aroma1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Hückel's rule**: planar, cyclic, conjugated, 4n+2 π electrons → aromatic
- **Aromatic compounds are exceptionally stable**
- **n=0**: 2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons
- **Benzene**: 6 π electrons (n=1), aromatic
      `
    },
    {
      id: 'aroma1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to aromaticity & hückel rule?',
            options: [
              '6 π electrons (n=1), aromatic',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Benzene: 6 π electrons (n=1), aromatic'
          }
        ]
      }
    },
    {
      id: 'aroma1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hückel\'s rule',
            options: ['2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons', 'Aromatic compounds are exceptionally stable', '6 π electrons (n=1), aromatic', 'planar, cyclic, conjugated, 4n+2 π electrons → aromatic']
          },
          {
            label: 'n=0',
            options: ['Aromatic compounds are exceptionally stable', '2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons', '6 π electrons (n=1), aromatic', 'planar, cyclic, conjugated, 4n+2 π electrons → aromatic']
          },
          {
            label: 'Benzene',
            options: ['2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons', 'planar, cyclic, conjugated, 4n+2 π electrons → aromatic', 'Aromatic compounds are exceptionally stable', '6 π electrons (n=1), aromatic']
          }
        ],
        correctAnswers: ['planar, cyclic, conjugated, 4n+2 π electrons → aromatic', '2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons', '6 π electrons (n=1), aromatic'],
        hint1: 'Think about what each concept specifically describes in ️ Aromatic Compounds Benzene.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ️ Aromatic Compounds Benzene describes a specific idea. Hückel\'s rule: planar, cyclic, conjugated, 4n+2 π electrons → aromatic. n=0: 2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons. Benzene: 6 π electrons (n=1), aromatic.'
      }
    }
  ]
}
