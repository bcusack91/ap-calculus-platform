export const chemMixturesSeparationsPart3Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx3-intro',
      type: 'text' as const,
      content: `
# 📊 Chromatography

**Part 3 of 7 — Separating by Differential Affinity**

Chromatography is a powerful family of separation techniques that work on a single elegant principle: different substances move at **different rates** through a medium based on their relative affinities for a **stationary phase** and a **mobile phase**.
      `
    },
    {
      id: 'mx3-principles',
      type: 'text' as const,
      content: `
## How Chromatography Works

Every chromatographic method has two phases:

| Phase | Description | Examples |
|-------|-------------|----------|
| **Stationary phase** | Fixed material that doesn\'t move | Paper fibers, silica gel, column packing |
| **Mobile phase** | Fluid that moves through/over the stationary phase | Solvent (liquid) or carrier gas |

### The Separation Principle

Components of a mixture interact differently with the two phases:
- Components with **stronger affinity for the stationary phase** move slowly
- Components with **stronger affinity for the mobile phase** move quickly
- This differential movement causes the components to **separate into distinct bands or spots**
      `
    },
    {
      id: 'mx3-paper-chromatography',
      type: 'text' as const,
      content: `
## Paper Chromatography

The simplest form of chromatography:

1. Place a **dot of mixture** near the bottom of chromatography paper
2. Dip the bottom edge into a **solvent** (but below the dot!)
3. The solvent rises by **capillary action**
4. Different components travel different distances

### Rf Values

The **retention factor** ($R_f$) quantifies how far a component travels:

$$R_f = \\frac{\\text{distance traveled by substance}}{\\text{distance traveled by solvent front}}$$

- $R_f$ is always between 0 and 1
- Each substance has a characteristic $R_f$ in a given solvent
- $R_f$ can be used to **identify** unknown substances by comparison

### Example

A spot travels 4.2 cm while the solvent front travels 7.0 cm:

$$R_f = \\frac{4.2}{7.0} = 0.60$$
      `
    },
    {
      id: 'mx3-column-gc',
      type: 'text' as const,
      content: `
## Column Chromatography

- Stationary phase: silica gel or alumina packed in a glass column
- Mobile phase: liquid solvent poured through the top
- Components separate as they travel down the column at different rates
- Fractions are collected from the bottom as they elute

**Use**: Purifying larger quantities of material in organic chemistry labs.

## Gas Chromatography (GC)

- Stationary phase: liquid coating on the inside of a long, thin tube (capillary column)
- Mobile phase: inert carrier gas (He or N₂)
- Sample is **vaporized** and carried through the column
- Components separate based on boiling point and polarity

### The Chromatogram

GC produces a graph of **detector signal vs. time**:
- Each **peak** represents a different component
- **Retention time** (time to reach detector) identifies the substance
- **Peak area** is proportional to the **amount** of that component

### Applications

- Drug testing, environmental analysis, forensics
- Analyzing mixtures of volatile compounds
- Quality control in food and pharmaceutical industries
      `
    },
    {
      id: 'mx3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Chromatography Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In paper chromatography, a substance with a higher Rf value:',
            options: [
              'Has stronger attraction to the stationary phase',
              'Has stronger attraction to the mobile phase',
              'Did not dissolve in the solvent',
              'Is always colorless'
            ],
            correctAnswer: 1,
            explanation: 'A higher $R_f$ means the substance traveled farther with the solvent (mobile phase), indicating a stronger affinity for the mobile phase and weaker interaction with the paper (stationary phase).'
          },
          {
            question: 'In gas chromatography, the component with the longest retention time is:',
            options: [
              'The most volatile component',
              'The component with strongest interaction with the stationary phase',
              'The carrier gas',
              'The lightest molecule'
            ],
            correctAnswer: 1,
            explanation: 'Longer retention time means the component spends more time interacting with the stationary phase coating. It elutes last because it is more strongly attracted to the stationary phase.'
          },
          {
            question: 'What information does the area under a peak in a GC chromatogram provide?',
            options: [
              'The identity of the component',
              'The boiling point of the component',
              'The relative amount (concentration) of the component',
              'The molar mass of the component'
            ],
            correctAnswer: 2,
            explanation: 'Peak area is proportional to the amount of the component. Larger peaks indicate more of that substance. Retention time (not area) is used for identification.'
          }
        ]
      }
    },
    {
      id: 'mx3-rf-calculations',
      type: 'input-boxes' as const,
      content: `
**Rf Value Calculations** 🧮

1) A substance spot traveled 3.5 cm and the solvent front traveled 10.0 cm. What is the Rf value? (to 2 decimal places)

2) In the same experiment, a second substance has Rf = 0.80. How far (in cm) did it travel? (to 1 decimal place)

3) An unknown spot has the same Rf as a known amino acid standard (Rf = 0.45). The solvent front traveled 8.0 cm. How far did the unknown travel? (in cm, to 1 decimal place)
      `,
      exercise: {
        inputs: [
          {
            label: 'Rf value of substance 1',
            correctAnswer: '0.35',
            explanation: '$R_f = 3.5/10.0 = 0.35$.'
          },
          {
            label: 'Distance traveled by substance 2 (cm)',
            correctAnswer: '8.0',
            explanation: 'Distance $= R_f \\times$ solvent front $= 0.80 \\times 10.0 = 8.0$ cm.'
          },
          {
            label: 'Distance traveled by unknown (cm)',
            correctAnswer: '3.6',
            explanation: 'Distance $= R_f \\times$ solvent front $= 0.45 \\times 8.0 = 3.6$ cm.'
          }
        ]
      }
    },
    {
      id: 'mx3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Chromatography Method Selection** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx3-dd1',
            options: ['paper chromatography', 'column chromatography', 'gas chromatography'],
            correctIndex: 2,
            explanation: 'Analyzing a mixture of volatile organic compounds requires GC. The sample is vaporized and carried through the column by a carrier gas.'
          },
          {
            id: 'mx3-dd2',
            options: ['paper chromatography', 'column chromatography', 'gas chromatography'],
            correctIndex: 0,
            explanation: 'Identifying the dyes in a food coloring mixture is a classic paper chromatography application. Each dye will travel a different distance and show as a separate colored spot.'
          },
          {
            id: 'mx3-dd3',
            options: ['paper chromatography', 'column chromatography', 'gas chromatography'],
            correctIndex: 1,
            explanation: 'When you need to purify a large quantity of a product from a reaction mixture, column chromatography allows collection of individual fractions.'
          },
          {
            id: 'mx3-dd4',
            options: ['retention time', 'peak area', 'peak height'],
            correctIndex: 0,
            explanation: 'In GC, each compound has a characteristic retention time under given conditions. Comparing retention times to known standards identifies the compound.'
          }
        ]
      }
    },
    {
      id: 'mx3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Chromatography** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A paper chromatography experiment on ink reveals three spots at distances of 2.0 cm, 4.5 cm, and 6.0 cm. The solvent front is at 8.0 cm. The ink is:',
            options: [
              'A pure substance with one component',
              'A mixture of at least three components',
              'A compound that decomposed',
              'Insoluble in the solvent'
            ],
            correctAnswer: 1,
            explanation: 'Three distinct spots indicate at least three different components in the ink, each with a different $R_f$ value. This confirms the ink is a mixture.'
          },
          {
            question: 'Which factor does NOT affect Rf values in paper chromatography?',
            options: [
              'The solvent used',
              'The type of paper',
              'The amount of sample spotted',
              'The temperature'
            ],
            correctAnswer: 2,
            explanation: 'The $R_f$ value depends on the solvent, paper type, and temperature — but NOT on the amount of sample applied. Applying too much sample may cause streaking, but the $R_f$ remains the same.'
          }
        ]
      }
    }
  ]
}
