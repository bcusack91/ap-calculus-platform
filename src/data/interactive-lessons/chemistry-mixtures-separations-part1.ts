export const chemMixturesSeparationsPart1Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx1-intro',
      type: 'text' as const,
      content: `# 🧪 Types of Mixtures

**Part 1 of 7 — Homogeneous vs. Heterogeneous Mixtures**

---

### Topics in This Part

| Section |
|---------|
| 🧪 Pure Substances vs. Mixtures |
| Key Differences |
| 🧪 Homogeneous Mixtures (Solutions) |
| 🧪 Heterogeneous Mixtures |
| Telling Them Apart |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'mx1-pure-vs-mixture',
      type: 'text' as const,
      content: `
## 🧪 Pure Substances vs. Mixtures

| Category | Definition | Examples |
|----------|-----------|----------|
| **Element** | One type of atom | Gold (Au), Oxygen $(O_{2})$ |
| **Compound** | Two+ elements chemically bonded in fixed ratio | $H_{2}O$, NaCl, $CO_{2}$ |
| **Mixture** | Two+ substances physically combined, variable composition | Air, saltwater, trail mix |


---

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
## 🧪 Homogeneous Mixtures (Solutions)

A **homogeneous mixture** has a **uniform composition** throughout — you cannot distinguish the components visually.

> 🔑 **Key Concept:** A **homogeneous** mixture looks the same throughout (uniform composition), while a **heterogeneous** mixture has visibly different regions or phases.


---

### Solutions

The most common type of homogeneous mixture:

| Component | Role | Example in Saltwater |
|-----------|------|---------------------|
| **Solvent** | The substance present in greatest amount | Water |
| **Solute** | The dissolved substance(s) | NaCl |

Solutions can be:
- **Solid in liquid**: sugar in water
- **Gas in liquid**: $CO_{2}$ in soda
- **Liquid in liquid**: ethanol in water
- **Gas in gas**: air $(N_{2} + O_{2} + Ar + ...)$
- **Solid in solid**: alloys (brass = Cu + Zn)


---

### Properties of Solutions
- Transparent (may be colored)
- The macroscopic properties (color, density, concentration) are the **same in every part** of the sample
- Will not separate on standing
- Pass through filter paper: dissolved particles are individual ions or molecules
      `
    },
    {
      id: 'mx1-heterogeneous',
      type: 'text' as const,
      content: `
## 🧪 Heterogeneous Mixtures

A **heterogeneous mixture** has a **non-uniform composition**: its macroscopic properties depend on **where** in the sample you look.


---

### Examples

| Mixture | Why It Is Heterogeneous |
|---------|-------------------------|
| Sand in water | Sand grains sit in some places and not others |
| Oil and vinegar | Two separate liquid layers |
| Granite | Visible grains of different minerals |
| Ice cubes in water | Two phases of the same substance in different regions |


---

### Telling Them Apart

| Test | Solution (Homogeneous) | Heterogeneous Mixture |
|------|------------------------|-----------------------|
| Sample taken from top vs. bottom | Identical composition | Can differ |
| Stand undisturbed | Stays uniform | Layers or solids may separate |
| Filter through paper | All of it passes through | Undissolved solid is caught |

> 💡 **Tip:** Filtration can separate an undissolved solid from a liquid, but it can never separate the components of a solution. Separating a solution requires a method that takes advantage of differences in intermolecular interactions, such as distillation or chromatography.
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
            question: 'Samples taken from the top and bottom of a beaker of liquid have different densities. The liquid is best described as',
            options: [
              'A pure substance',
              'A heterogeneous mixture',
              'A solution',
              'A compound'
            ],
            correctAnswer: 1,
            explanation: 'If a property such as density depends on where the sample is taken, the composition is not uniform, so the mixture is heterogeneous. A solution, like a pure substance or compound, has the same properties throughout.'
          },
          {
            question: 'Which of these mixtures would separate on standing?',
            options: [
              'Sugar dissolved in water',
              'Ethanol mixed with water',
              'Sand stirred into water',
              'Food coloring in water'
            ],
            correctAnswer: 2,
            explanation: 'Sand does not dissolve in water, so the sand grains settle to the bottom over time. Sugar, ethanol, and food coloring all form solutions with water, which stay uniform indefinitely.'
          }
        ]
      }
    },
    {
      id: 'mx1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Sample** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'mx1-dd1',
            label: 'Air (a uniform mixture of $N_{2}$, $O_{2}$, Ar, etc.) is classified as a',
            options: ['homogeneous mixture', 'heterogeneous mixture', 'pure substance'],
            correctIndex: 0,
            explanation: 'Air is a uniform mixture of gases ($N_{2}$, $O_{2}$, Ar, etc.) — a gaseous solution.'
          },
          {
            id: 'mx1-dd2',
            label: 'Granite (visible grains of different minerals) is classified as a',
            options: ['homogeneous mixture', 'heterogeneous mixture', 'pure substance'],
            correctIndex: 1,
            explanation: 'Granite contains visibly different grains, so its composition depends on location — a heterogeneous mixture.'
          },
          {
            id: 'mx1-dd3',
            label: 'Flour stirred into water (it settles to the bottom) is classified as a',
            options: ['homogeneous mixture', 'heterogeneous mixture', 'pure substance'],
            correctIndex: 1,
            explanation: 'Flour does not dissolve; the particles settle out, so the composition is not uniform. This is a heterogeneous mixture.'
          },
          {
            id: 'mx1-dd4',
            label: 'Brass (an alloy of copper and zinc) is classified as a',
            options: ['homogeneous mixture', 'heterogeneous mixture', 'pure substance'],
            correctIndex: 0,
            explanation: 'Brass is a solid solution (alloy) of copper and zinc. The metals are uniformly mixed at the atomic level.'
          },
          {
            id: 'mx1-dd5',
            label: 'Distilled water is classified as a',
            options: ['homogeneous mixture', 'heterogeneous mixture', 'pure substance'],
            correctIndex: 2,
            explanation: 'Distilled water is a single compound, $H_{2}O$, with a fixed composition — a pure substance, not a mixture.'
          }
        ]
      }
    },
    {
      id: 'mx1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Knowledge Check** 🧮

A mixture of 5.0 g of sand and 20.0 g of table salt is stirred into 100 g of water until all the salt dissolves. The mixture is filtered.

**1)** After drying, what mass of solid (in g) is left on the filter paper?

**2)** The filtrate is boiled until all the water is gone. What mass of solid (in g) remains?

**3)** In the filtrate, the solvent is ______ (enter the substance name).
      `,
      exercise: {
        inputs: [
          {
            label: 'Solid on filter paper (g)',
            correctAnswer: '5.0',
            explanation: 'Sand does not dissolve, so all 5.0 g is caught by the filter paper. The dissolved salt passes through with the water.'
          },
          {
            label: 'Solid after evaporating filtrate (g)',
            correctAnswer: '20.0',
            explanation: 'The salt passed through the filter as part of the solution. Evaporating the water leaves all 20.0 g of salt behind.'
          },
          {
            label: 'Solvent in the filtrate',
            correctAnswer: 'water',
            explanation: 'The solvent is the substance present in the greatest amount. In salt water, water is the solvent and salt is the solute.'
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
            question: 'Which observation BEST shows that a liquid sample is a solution rather than a heterogeneous mixture?',
            options: [
              'It is a liquid at room temperature',
              'It contains more than one substance',
              'Its composition is the same in every part',
              'It changes color when heated'
            ],
            correctAnswer: 2,
            explanation: 'A solution is a homogeneous mixture: its composition and properties are the same everywhere in the sample. Containing more than one substance is true of every mixture, and being liquid or changing color on heating says nothing about uniformity.'
          },
          {
            question: 'A sample has variable composition, its components retain their chemical identities, and it can be separated by physical means. This describes:',
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
