export const bioWaterPropertiesPart1Data = {
  topicSlug: 'water-properties-biochemistry',
  sections: [
    {
      id: 'wate1-intro',
      type: 'text' as const,
      content: `
# 💧 Water: The Molecule of Life

Water is the most abundant molecule in living organisms, making up 60-70% of your body mass. Its unique properties arise from its **polar covalent bonds** and **hydrogen bonding**.

### Why Water Matters

- All known life requires water
- Biochemical reactions occur in aqueous solutions
- Water's properties directly enable biological processes
- Understanding water is fundamental to understanding biology
      `
    },
    {
      id: 'wate1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Water molecules are held together by which type of intermolecular force?',
            options: [
              'Ionic bonds',
              'Hydrogen bonds',
              'Covalent bonds',
              'Van der Waals forces'
            ],
            correctAnswer: 1,
            explanation: 'Water molecules are held together by hydrogen bonds — the attraction between the δ⁺ hydrogen of one molecule and the δ⁻ oxygen of another.'
          },
          {
            question: 'The bond angle in a water molecule is approximately:',
            options: [
              '180°',
              '120°',
              '109.5°',
              '104.5°'
            ],
            correctAnswer: 3,
            explanation: 'Water has a bent geometry with a bond angle of approximately 104.5°, slightly less than the tetrahedral angle due to lone pair repulsion.'
          }
        ]
      }
    },
    {
      id: 'wate1-polarity',
      type: 'text' as const,
      content: `
## Polarity & Hydrogen Bonding

Water ($H_2O$) has a **bent molecular geometry** with a bond angle of approximately 104.5°.

| Property | Detail |
|----------|--------|
| **Electronegativity** | Oxygen (3.44) >> Hydrogen (2.20) |
| **Bond type** | Polar covalent |
| **Molecular shape** | Bent (angular) |
| **Partial charges** | δ⁻ on O, δ⁺ on H |

### Hydrogen Bonds

The partial positive charge on hydrogen atoms attracts the partial negative charge on oxygen atoms of neighboring water molecules. Each water molecule can form up to **4 hydrogen bonds**.

- Hydrogen bonds are **weak individually** (~5% the strength of covalent bonds)
- But **collectively powerful** — they give water its extraordinary properties
- They are constantly breaking and reforming (about every picosecond)
      `
    },
    {
      id: 'wate1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many hydrogen bonds can a single water molecule form?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 3,
            explanation: 'Each water molecule can form up to 4 hydrogen bonds — 2 through its hydrogen atoms (as donors) and 2 through its lone pairs on oxygen (as acceptors).'
          }
        ]
      }
    },
    {
      id: 'wate1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Oxygen has a partial ___ charge in water',
            options: ['positive', 'negative', 'neutral', 'zero']
          },
          {
            label: 'Water has a ___ molecular geometry',
            options: ['linear', 'bent', 'tetrahedral', 'trigonal']
          },
          {
            label: 'Hydrogen bonds are ___ than covalent bonds',
            options: ['stronger', 'weaker', 'equal to', 'unrelated to']
          }
        ],
        correctAnswers: ['negative', 'bent', 'weaker'],
        hint1: 'Think about electronegativity differences.',
        hint2: 'Consider the two lone pairs on oxygen.',
        hint3: 'Hydrogen bonds are about 5% the strength of covalent bonds.',
        explanation: 'Oxygen is more electronegative, giving it a partial negative charge. The two lone pairs on oxygen create a bent shape. Hydrogen bonds are individually weak but collectively important.'
      }
    }
  ]
}
