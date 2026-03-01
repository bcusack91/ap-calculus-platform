export const bioMacromoleculesPart3Data = {
  topicSlug: 'biological-macromolecules',
  sections: [
    {
      id: 'biol3-lipids',
      type: 'text' as const,
      content: `
## Lipids: Fats, Phospholipids & Steroids

### Triglycerides (Fats & Oils)

Trigleride = **glycerol** + **3 fatty acids** (linked by ester bonds)

| Type | Saturation | State at RT | Example |
|------|-----------|-------------|----------|
| **Saturated fat** | No C=C double bonds | Solid | Butter, lard |
| **Unsaturated fat** | One or more C=C | Liquid (oil) | Olive oil |
| **Trans fat** | Artificially hydrogenated | Solid | Margarine |

Fats store **2× more energy per gram** than carbohydrates (9 kcal/g vs 4 kcal/g).

### Phospholipids

Phospholipid = glycerol + 2 fatty acids + phosphate group

- **Amphipathic:** hydrophilic head + hydrophobic tails
- Form the basis of **cell membranes** (phospholipid bilayer)
- Spontaneously form bilayers in water

### Steroids

Four fused carbon rings (e.g., cholesterol, estrogen, testosterone). Cholesterol is a component of animal cell membranes.
      `
    },
    {
      id: 'biol3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Phospholipids are amphipathic because they have:',
            options: [
              'Two identical fatty acid tails',
              'A hydrophilic head and hydrophobic tails',
              'Only polar components',
              'Only nonpolar components'
            ],
            correctAnswer: 1,
            explanation: 'Amphipathic means having both hydrophilic (water-loving) and hydrophobic (water-fearing) regions. The phosphate head is polar; the fatty acid tails are nonpolar.'
          }
        ]
      }
    },
    {
      id: 'biol3-func',
      type: 'text' as const,
      content: `
## Functions of Lipids

| Function | Example |
|----------|--------|
| Long-term energy storage | Adipose tissue (body fat) |
| Insulation | Subcutaneous fat, blubber |
| Cell membranes | Phospholipid bilayer |
| Hormones | Estrogen, testosterone |
| Waterproofing | Waxes on leaves and feathers |
| Protection | Cushioning around organs |
      `
    },
    {
      id: 'biol3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Fats store more energy per gram than carbohydrates because:',
            options: [
              'Fats are larger molecules',
              'Fats have more C-H bonds to oxidize',
              'Fats dissolve in water',
              'Fats are polymers'
            ],
            correctAnswer: 1,
            explanation: 'Fats have many C-H bonds that can be oxidized to release energy. They yield ~9 kcal/g compared to ~4 kcal/g for carbohydrates.'
          }
        ]
      }
    },
    {
      id: 'biol3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A saturated fatty acid has ___ carbon-carbon double bonds',
            options: ['no', 'one', 'many', 'two']
          },
          {
            label: 'Cell membranes are primarily made of ___',
            options: ['triglycerides', 'phospholipids', 'steroids', 'waxes']
          },
          {
            label: 'Cholesterol is classified as a ___',
            options: ['triglyceride', 'phospholipid', 'steroid', 'wax']
          }
        ],
        correctAnswers: ['no', 'phospholipids', 'steroid'],
        hint1: 'Saturated = fully loaded with hydrogens.',
        hint2: 'The fluid mosaic model describes the membrane structure.',
        hint3: 'Cholesterol has four fused carbon rings.',
        explanation: 'Saturated fats have no double bonds. Phospholipids form the bilayer of cell membranes. Cholesterol is a steroid.'
      }
    }
  ]
}
