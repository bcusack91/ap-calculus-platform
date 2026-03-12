export const chemMixturesSeparationsPart1Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx1-intro',
      type: 'text' as const,
      content: `
# 🧪 Types of Mixtures

**Part 1 of 7 — Homogeneous vs. Heterogeneous Mixtures**

Most matter around you is a **mixture** — a combination of two or more substances that are **not chemically bonded** together. Each substance in a mixture retains its own chemical identity and properties. Understanding mixtures is essential for chemistry because separation techniques are the foundation of analytical chemistry and lab work on the AP exam.
      `
    },
    {
      id: 'mx1-pure-vs-mixture',
      type: 'text' as const,
      content: `
## Pure Substances vs. Mixtures

| Category | Definition | Examples |
|----------|-----------|----------|
| **Element** | One type of atom | Gold (Au), Oxygen (O₂) |
| **Compound** | Two+ elements chemically bonded in fixed ratio | H₂O, NaCl, CO₂ |
| **Mixture** | Two+ substances physically combined, variable composition | Air, saltwater, trail mix |

### Key Differences

- **Pure substances** have a **fixed composition** and **definite** melting/boiling points.
- **Mixtures** have **variable composition** and boil/melt over a **range** of temperatures.
- Mixtures can be separated by **physical methods** (no chemical reactions needed).
      `
    },
    {
      id: 'mx1-homogeneous',
      type: 'text' as const,
      content: `
## Homogeneous Mixtures (Solutions)

A **homogeneous mixture** has a **uniform composition** throughout — you cannot distinguish the components visually.

### Solutions

The most common type of homogeneous mixture:

| Component | Role | Example in Saltwater |
|-----------|------|---------------------|
| **Solvent** | The substance present in greatest amount | Water |
| **Solute** | The dissolved substance(s) | NaCl |

Solutions can be:
- **Solid in liquid**: sugar in water
- **Gas in liquid**: CO₂ in soda
- **Liquid in liquid**: ethanol in water
- **Gas in gas**: air (N₂ + O₂ + Ar + ...)
- **Solid in solid**: alloys (brass = Cu + Zn)

### Properties of Solutions
- Transparent (may be colored)
- Do not scatter light (no Tyndall effect)
- Will not separate on standing
- Pass through filter paper
- Particle size: < 1 nm
      `
    },
    {
      id: 'mx1-heterogeneous',
      type: 'text' as const,
      content: `
## Heterogeneous Mixtures

A **heterogeneous mixture** has a **non-uniform composition** — you can see or detect different regions.

### Suspensions

- Particles > 1000 nm (visible to naked eye or microscope)
- Will **settle out** over time
- Can be separated by **filtration**
- Example: muddy water, flour in water, blood cells in plasma

### Colloids

- Particles between 1–1000 nm
- Do **NOT** settle out
- Scatter light (**Tyndall effect** — beam of light becomes visible)
- Cannot pass through semipermeable membranes
- Examples: milk, fog, gelatin, smoke, mayonnaise

### Comparing the Three Types

| Property | Solution | Colloid | Suspension |
|----------|----------|---------|------------|
| Particle size | < 1 nm | 1–1000 nm | > 1000 nm |
| Settles? | No | No | Yes |
| Filter? | No | No | Yes |
| Tyndall effect? | No | Yes | Yes (if not settled) |
| Appearance | Clear | Cloudy/translucent | Opaque |
      `
    },
    {
      id: 'mx1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mixture Classification Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a homogeneous mixture?',
            options: [
              'Oil and vinegar salad dressing',
              'Granite rock',
              'Saltwater',
              'Sand and iron filings'
            ],
            correctAnswer: 2,
            explanation: 'Saltwater is a homogeneous mixture (solution) — NaCl is uniformly dissolved in water. Oil/vinegar and granite are heterogeneous. Sand and iron filings are also heterogeneous.'
          },
          {
            question: 'A beam of light passes through a liquid and becomes clearly visible. This liquid is most likely a:',
            options: [
              'True solution',
              'Colloid',
              'Pure substance',
              'Element'
            ],
            correctAnswer: 1,
            explanation: 'The Tyndall effect — visible scattering of a light beam — is characteristic of colloids. True solutions are transparent and do not scatter light.'
          },
          {
            question: 'Which of these mixtures would separate on standing?',
            options: [
              'Sugar dissolved in water',
              'Fog',
              'Muddy water',
              'Air'
            ],
            correctAnswer: 2,
            explanation: 'Muddy water is a suspension. The solid particles are large enough (>1000 nm) that gravity will cause them to settle out over time. Solutions and colloids do not settle.'
          }
        ]
      }
    },
    {
      id: 'mx1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Mixture** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx1-dd1',
            options: ['solution', 'colloid', 'suspension'],
            correctIndex: 0,
            explanation: 'Air is a homogeneous mixture of gases (N₂, O₂, Ar, etc.) — a true solution.'
          },
          {
            id: 'mx1-dd2',
            options: ['solution', 'colloid', 'suspension'],
            correctIndex: 1,
            explanation: 'Milk is a colloid — fat and protein particles (1–1000 nm) are dispersed in water. Milk shows the Tyndall effect.'
          },
          {
            id: 'mx1-dd3',
            options: ['solution', 'colloid', 'suspension'],
            correctIndex: 2,
            explanation: 'Flour in water is a suspension — the flour particles are large and will settle to the bottom over time.'
          },
          {
            id: 'mx1-dd4',
            options: ['solution', 'colloid', 'suspension'],
            correctIndex: 0,
            explanation: 'Brass is a solid solution (alloy) of copper and zinc. The metals are uniformly mixed at the atomic level.'
          },
          {
            id: 'mx1-dd5',
            options: ['solution', 'colloid', 'suspension'],
            correctIndex: 1,
            explanation: 'Fog is a colloid — tiny water droplets (1–1000 nm) are dispersed in air. Fog scatters headlight beams (Tyndall effect).'
          }
        ]
      }
    },
    {
      id: 'mx1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Knowledge Check** 🧮

1) What is the minimum particle size (in nm) for a suspension?

2) What is the maximum particle size (in nm) for a solution?

3) In a solution of sugar dissolved in water, the solvent is ______ (enter the substance name).
      `,
      exercise: {
        inputs: [
          {
            label: 'Minimum suspension particle size (nm)',
            correctAnswer: '1000',
            explanation: 'Suspensions have particles > 1000 nm, which are large enough to settle out and be filtered.'
          },
          {
            label: 'Maximum solution particle size (nm)',
            correctAnswer: '1',
            explanation: 'True solutions have particles smaller than 1 nm — these are individual ions or molecules dissolved at the molecular level.'
          },
          {
            label: 'Solvent in sugar water',
            correctAnswer: 'water',
            explanation: 'The solvent is the substance present in the greatest amount. In sugar water, water is the solvent and sugar is the solute.'
          }
        ]
      }
    },
    {
      id: 'mx1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Types of Mixtures** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which property BEST distinguishes a colloid from a true solution?',
            options: [
              'Color of the mixture',
              'Whether it conducts electricity',
              'The Tyndall effect (light scattering)',
              'Whether it can be stirred'
            ],
            correctAnswer: 2,
            explanation: 'The Tyndall effect is the defining test for colloids. Colloid particles are large enough to scatter light, while solution particles are not. This creates a visible beam when light passes through a colloid.'
          },
          {
            question: 'A mixture has variable composition, its components retain their chemical identities, and it can be separated by physical means. This describes:',
            options: [
              'A compound',
              'An element',
              'A mixture',
              'A pure substance'
            ],
            correctAnswer: 2,
            explanation: 'Mixtures have variable composition, components keep their identities, and can be separated physically. Compounds have fixed composition, components lose their identity, and require chemical methods to separate.'
          }
        ]
      }
    }
  ]
}
