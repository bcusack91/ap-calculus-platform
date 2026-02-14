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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of aromaticity & hückel rule?',
            options: [
              'Hückel\'s rule',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Hückel\'s rule: planar, cyclic, conjugated, 4n+2 π electrons → aromatic'
          },
          {
            question: 'In the context of aromaticity & hückel rule, which is accurate?',
            options: [
              '2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'n=0: 2 π electrons; n=1: 6 π electrons; n=2: 10 π electrons'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hückel\'s rule',
            options: ['planar, cyclic, conjugated, 4n+2 π electrons → aro', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Aromatic compounds are exceptionally stable',
            options: ['Aromatic compounds are exceptionally stable', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'n=0',
            options: ['2 π electrons; n=1: 6 π electrons; n=2: 10 π elect', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['planar, cyclic, conjugated, 4n+2 π electrons → aro', 'Aromatic compounds are exceptionally stable', '2 π electrons; n=1: 6 π electrons; n=2: 10 π elect'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Aromaticity & Hückel Rule.'
      }
    }
  ]
}
