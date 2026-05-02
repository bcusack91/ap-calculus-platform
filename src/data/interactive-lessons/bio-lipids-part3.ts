export const bioLipidsPart3Data = {
  topicSlug: 'lipids',
  sections: [
    {
      id: 'lip3-functions',
      type: 'text' as const,
      content: `
## What Lipids Do for Cells

| Role | Lipid responsible |
|------|-------------------|
| **Long-term energy storage** | Triglycerides in adipose tissue |
| **Structural barrier** | Phospholipid bilayer of every membrane |
| **Insulation & cushioning** | Subcutaneous fat, sheath around organs |
| **Chemical signaling** | Steroid hormones (estrogen, testosterone, cortisol) |
| **Membrane fluidity** | Cholesterol |
| **Vitamin transport** | Fats carry vitamins A, D, E, K |

### Why fats beat sugars for storage

Triglycerides yield about **9 kcal/g** vs **4 kcal/g** for carbohydrates. They are also stored without water, making them compact for migrating birds, hibernating mammals, and seeds.
      `
    },
    {
      id: 'lip3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why is fat the preferred long-term energy store rather than carbohydrate?',
            options: [
              'Fat is easier to digest than carbohydrate',
              'Fat is anhydrous and stores roughly twice as much energy per gram',
              'Fat does not require oxygen to break down',
              'Fat can be polymerized into longer chains'
            ],
            correctAnswer: 1,
            explanation: 'Triglycerides yield ~9 kcal/g vs ~4 kcal/g for carbs and are stored without water, making them far more compact reserves.'
          }
        ]
      }
    },
    {
      id: 'lip3-membranes',
      type: 'text' as const,
      content: `
## Phospholipids and the Cell Membrane

A **phospholipid** has:
- A **hydrophilic head** (phosphate + glycerol) — likes water
- Two **hydrophobic tails** (fatty acids) — flee water

In water, phospholipids spontaneously arrange into a **bilayer**: heads outward toward the aqueous environment, tails buried inside. This bilayer is the foundation of every cell membrane.

### Membrane fluidity

| Factor | Effect on fluidity |
|--------|-------------------|
| **Unsaturated fatty acid tails** | Increase fluidity (kinks prevent tight packing) |
| **Cholesterol** at high temp | Decreases fluidity (stabilizes membrane) |
| **Cholesterol** at low temp | Increases fluidity (prevents tight packing) |
| **Higher temperature** | Increases fluidity |

Cholesterol acts as a **fluidity buffer** — it keeps membranes functional across a range of temperatures.
      `
    },
    {
      id: 'lip3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A cell adapted to cold environments would likely contain phospholipids with:',
            options: [
              'More saturated fatty acid tails',
              'More unsaturated fatty acid tails',
              'No cholesterol at all',
              'Replaced phosphate heads with sugars'
            ],
            correctAnswer: 1,
            explanation: 'In cold environments cells need fluidity. Unsaturated tails introduce kinks that prevent tight packing, keeping the membrane fluid.'
          }
        ]
      }
    },
    {
      id: 'lip3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          { label: 'Phospholipid heads are ___', options: ['hydrophobic', 'hydrophilic', 'nonpolar', 'inert'] },
          { label: 'Cholesterol acts as a fluidity ___', options: ['accelerator', 'buffer', 'eliminator', 'pump'] },
          { label: 'Steroid hormones are derived from ___', options: ['cholesterol', 'glucose', 'amino acids', 'nucleotides'] }
        ],
        correctAnswers: ['hydrophilic', 'buffer', 'cholesterol'],
        hint1: 'Phosphate is polar.',
        hint2: 'It works in BOTH directions.',
        hint3: 'Same 4-ring backbone.',
        explanation: 'Phospholipid heads are hydrophilic. Cholesterol buffers membrane fluidity across temperatures. All steroid hormones (testosterone, estrogen, cortisol) share the cholesterol four-ring backbone.'
      }
    }
  ]
}
