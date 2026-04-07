export const chemMixturesSeparationsPart2Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx2-intro',
      type: 'text' as const,
      content: `
# 🔥 Separation by Physical Properties

**Part 2 of 7 — Filtration, Evaporation, and Distillation**

Since mixtures are physically combined (not chemically bonded), they can be separated using **differences in physical properties** — such as particle size, boiling point, and solubility. These techniques are essential lab skills tested on the AP Chemistry exam.
      `
    },
    {
      id: 'mx2-filtration',
      type: 'text' as const,
      content: `
## Filtration

**Principle**: Separates based on **particle size** — solid particles are too large to pass through a filter while the liquid (filtrate) passes through.

### How It Works

1. Pour the mixture through filter paper in a funnel
2. Solid particles are trapped on the filter paper (**residue**)
3. Liquid passes through (**filtrate**)

### When to Use

- Separating an **insoluble solid** from a liquid (e.g., sand from water)
- After a **precipitation reaction** to isolate the precipitate
- Cannot separate dissolved substances (solutes pass through the filter)

### Gravity vs. Vacuum Filtration

| Type | Speed | Use Case |
|------|-------|----------|
| Gravity filtration | Slow | When you want the filtrate (liquid) |
| Vacuum filtration | Fast | When you want the solid (residue) |
      `
    },
    {
      id: 'mx2-evaporation',
      type: 'text' as const,
      content: `
## Evaporation

**Principle**: Separates based on **boiling point** differences — the liquid evaporates, leaving the dissolved solid behind.

### How It Works

1. Heat the solution in an evaporating dish
2. The solvent (liquid) evaporates
3. The solute (solid) remains in the dish

### When to Use

- Recovering a **dissolved solid** from a solution (e.g., salt from saltwater)
- The liquid is not needed (it\'s lost to the atmosphere)

### Limitations

- Destroys volatile or heat-sensitive solutes
- Wastes the solvent
- Cannot separate two dissolved solids from each other
      `
    },
    {
      id: 'mx2-distillation',
      type: 'text' as const,
      content: `
## Distillation

**Principle**: Separates based on **differences in boiling points** — the component with the lower boiling point evaporates first and is condensed separately.

### Simple Distillation

Used when boiling points differ by **at least 25°C**:
1. Heat the mixture — the more volatile component boils first
2. Vapor travels into a condenser (cooled tube)
3. Vapor condenses back to liquid and is collected (**distillate**)
4. Less volatile component stays in the flask

### Fractional Distillation

Used when boiling points are **close together** (< 25°C difference):
- Uses a **fractionating column** packed with glass beads
- Vapor condenses and re-evaporates multiple times
- Each cycle enriches the vapor in the more volatile component
- Example: separating ethanol (bp 78°C) from water (bp 100°C)

### Applications

- Purifying water (removing dissolved salts)
- Petroleum refining (separating crude oil into fractions)
- Producing spirits (concentrating ethanol)
      `
    },
    {
      id: 'mx2-technique-quiz',
      type: 'multiple-choice' as const,
      content: `
**Separation Technique Selection** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs to separate sand from saltwater. The best first step is:',
            options: [
              'Evaporation',
              'Distillation',
              'Filtration',
              'Chromatography'
            ],
            correctAnswer: 2,
            explanation: 'Filtration first removes the insoluble sand (residue) from the saltwater (filtrate). Then evaporation or distillation can be used to recover the salt from the water.'
          },
          {
            question: 'Which technique would you use to separate a mixture of two liquids with boiling points of 65°C and 110°C?',
            options: [
              'Filtration',
              'Simple distillation',
              'Evaporation',
              'Gravity separation'
            ],
            correctAnswer: 1,
            explanation: 'The boiling points differ by 45°C (> 25°C), so simple distillation is sufficient. The liquid with bp 65°C will evaporate first and be collected as distillate.'
          },
          {
            question: 'Evaporation is NOT suitable for:',
            options: [
              'Recovering NaCl from saltwater',
              'Recovering sugar from sugar water',
              'Separating two liquids with different boiling points',
              'Recovering a solid dye from solution'
            ],
            correctAnswer: 2,
            explanation: 'Evaporation only recovers the solid from a solution — the liquid is lost. To separate two liquids, you need distillation, which collects both components.'
          }
        ]
      }
    },
    {
      id: 'mx2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Technique to Separation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx2-dd1',
            label: 'A precipitate (insoluble solid) is best separated from the liquid by _______',
            options: ['filtration', 'evaporation', 'simple distillation', 'fractional distillation'],
            correctIndex: 0,
            explanation: 'A precipitate (insoluble solid) is best separated from the liquid by filtration.'
          },
          {
            id: 'mx2-dd2',
            label: 'To recover a dissolved solid when you don\'t need the solvent',
            options: ['filtration', 'evaporation', 'simple distillation', 'fractional distillation'],
            correctIndex: 1,
            explanation: 'To recover a dissolved solid when you don\'t need the solvent, simply evaporate the liquid away.'
          },
          {
            id: 'mx2-dd3',
            label: 'Ethanol (bp 78°C) and water (bp 100°C) have boiling points only 22°C apart —',
            options: ['filtration', 'evaporation', 'simple distillation', 'fractional distillation'],
            correctIndex: 3,
            explanation: 'Ethanol (bp 78°C) and water (bp 100°C) have boiling points only 22°C apart — use fractional distillation for better separation.'
          },
          {
            id: 'mx2-dd4',
            label: 'To get pure water from saltwater, use _______',
            options: ['filtration', 'evaporation', 'simple distillation', 'fractional distillation'],
            correctIndex: 2,
            explanation: 'To get pure water from saltwater, use simple distillation. Water evaporates at 100°C while NaCl stays behind (bp ~1413°C). The large bp difference makes simple distillation sufficient.'
          }
        ]
      }
    },
    {
      id: 'mx2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Separation Basics** 🧮

**1)** What is the solid material left on filter paper called? (one word)

**2)** What is the liquid that passes through a filter called? (one word)

**3)** In distillation, the collected vapor that has been condensed back to liquid is called the ______. (one word)
      `,
      exercise: {
        inputs: [
          {
            label: 'Solid left on filter',
            correctAnswer: 'residue',
            explanation: 'The residue is the solid material that remains on the filter paper because its particles are too large to pass through.'
          },
          {
            label: 'Liquid through filter',
            correctAnswer: 'filtrate',
            explanation: 'The filtrate is the liquid that passes through the filter, along with any dissolved substances.'
          },
          {
            label: 'Condensed vapor in distillation',
            correctAnswer: 'distillate',
            explanation: 'The distillate is the purified liquid collected after the vapor condenses in the condenser.'
          }
        ]
      }
    },
    {
      id: 'mx2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Physical Separation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A mixture contains salt, sand, and water. Which sequence of steps correctly separates all three?',
            options: [
              'Evaporate → Filter → Distill',
              'Filter → Evaporate',
              'Distill → Filter → Evaporate',
              'Filter → Distill'
            ],
            correctAnswer: 1,
            explanation: 'First filter to remove sand (insoluble solid). Then evaporate the filtrate (saltwater) to recover the solid salt. If you also need the pure water, use distillation instead of evaporation.'
          },
          {
            question: 'Fractional distillation is preferred over simple distillation when:',
            options: [
              'The mixture contains a solid and a liquid',
              'The boiling points of the liquids differ by more than 50°C',
              'The boiling points of the liquids are within about 25°C of each other',
              'One of the substances is a gas'
            ],
            correctAnswer: 2,
            explanation: 'Fractional distillation uses a fractionating column for repeated evaporation-condensation cycles, providing better separation when boiling points are close together (< 25°C apart).'
          }
        ]
      }
    }
  ]
}
