export const chemMixturesSeparationsPart3Data = {
  topicSlug: 'mixtures-separations',
  sections: [
    {
      id: 'mx3-intro',
      type: 'text' as const,
      content: `# 📊 Chromatography

**Part 3 of 7 — Separating by Differential Affinity**

---

### Topics in This Part

| Section |
|---------|
| 🔧 How Chromatography Works |
| The Separation Principle |
| 📌 Paper Chromatography |
| 📌 Thin-Layer and Column Chromatography |
| 🔍 Reading a Chromatogram: Inferring Polarity |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'mx3-principles',
      type: 'text' as const,
      content: `
## 🔧 How Chromatography Works

Every chromatographic method has two phases:

| Phase | Description | Examples |
|-------|-------------|----------|
| **Stationary phase** | Fixed material that doesn\'t move | Paper fibers, silica gel, column packing |
| **Mobile phase** | Fluid that moves through/over the stationary phase | Solvent (liquid) or carrier gas |


---

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
## 📌 Paper Chromatography

The simplest form of chromatography:

1. Place a **dot of mixture** near the bottom of chromatography paper
2. Dip the bottom edge into a **solvent** (but below the dot!)
3. The solvent rises by **capillary action**
4. Different components travel different distances


---

### Rf Values

The **retention factor** ($R_f$) quantifies how far a component travels:

$$\\boxed{R_f = \\frac{\\text{distance traveled by substance}}{\\text{distance traveled by solvent front}}}$$

> 🔑 **Key Concept:** Each substance has a characteristic $R_f$ in a given solvent system. Use $R_f$ values to **identify unknowns** by comparing to known standards.

- $R_f$ is always between 0 and 1
- Each substance has a characteristic $R_f$ in a given solvent
- $R_f$ can be used to **identify** unknown substances by comparison


---

### Example

> **Problem:** A spot travels 4.2 cm while the solvent front travels 7.0 cm. Calculate the $R_f$ value.

> **Solution:**

$$R_f = \\frac{4.2}{7.0} = 0.60$$
      `
    },
    {
      id: 'mx3-column-gc',
      type: 'text' as const,
      content: `
## 📌 Thin-Layer and Column Chromatography

### Thin-Layer Chromatography (TLC)

- Stationary phase: a thin layer of **silica gel** or alumina coated on a plate
- Mobile phase: a liquid solvent that rises up the plate by capillary action
- Works just like paper chromatography and is read with $R_f$ values, but runs faster and gives sharper spots

### Column Chromatography

- Stationary phase: silica gel or alumina packed in a glass column
- Mobile phase: liquid solvent poured through the top
- Components travel down the column at different rates and are collected as separate fractions from the bottom

**Use**: Purifying larger quantities of material, since each component can be collected and kept.


---

## 🔍 Reading a Chromatogram: Inferring Polarity

Paper (cellulose, with many –OH groups) and silica gel are **polar** stationary phases. Use intermolecular forces to interpret the results:

| Observation | Interpretation |
|-------------|----------------|
| Spot stays near the starting line (low $R_f$) | Strong attractions to the polar stationary phase, so the component is relatively **polar** |
| Spot travels near the solvent front (high $R_f$) | Weaker attraction to the stationary phase and stronger attraction to the solvent |

### The Solvent Matters

- With a **nonpolar** solvent (like hexane), nonpolar components travel far and polar components stay near the start.
- Switching to a **more polar** solvent raises the $R_f$ of polar components, because the solvent now competes with the stationary phase for them.

> 🔑 **Key Concept:** Chromatography separates components because of **differences in the strength of intermolecular interactions** with the stationary and mobile phases. Always explain results in terms of those interactions.
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
              'Was spotted in a larger amount than the others',
              'Has a larger molar mass than the other spots'
            ],
            correctAnswer: 1,
            explanation: 'A higher $R_f$ means the substance traveled farther with the solvent (mobile phase), indicating a stronger affinity for the mobile phase and weaker interaction with the paper (stationary phase). The amount spotted does not change $R_f$.'
          },
          {
            question: 'A TLC plate with a polar silica stationary phase is developed in hexane. Spot X has $R_f$ = 0.85 and spot Y has $R_f$ = 0.10. Which conclusion is best supported?',
            options: [
              'X is more polar than Y',
              'Y is more polar than X',
              'X and Y have the same polarity',
              'Y has the lower molar mass'
            ],
            correctAnswer: 1,
            explanation: 'Y barely moved, so it is held strongly by the polar silica: Y is the more polar component. X traveled with the nonpolar hexane, so it is relatively nonpolar. $R_f$ reflects intermolecular interactions, not molar mass alone.'
          },
          {
            question: 'A polar dye stays near the starting line when the paper is developed in hexane. What change would most likely make the dye travel farther?',
            options: [
              'Using a longer strip of paper',
              'Using a more polar solvent such as ethanol',
              'Spotting a larger amount of the polar dye',
              'Letting the spot dry more completely before developing'
            ],
            correctAnswer: 1,
            explanation: 'A more polar solvent attracts the polar dye more strongly, competing with the polar paper and carrying the dye farther up. A longer strip, a bigger spot, or a drier spot does not change the balance of intermolecular attractions.'
          }
        ]
      }
    },
    {
      id: 'mx3-rf-calculations',
      type: 'input-boxes' as const,
      content: `
**Rf Value Calculations** 🧮

**1)** A substance spot traveled 3.5 cm and the solvent front traveled 10.0 cm. What is the Rf value? (to 3 significant figures)

**2)** In the same experiment, a second substance has Rf = 0.80. How far (in cm) did it travel? (to 3 significant figures)

**3)** An unknown spot has the same Rf as a known amino acid standard (Rf = 0.45). The solvent front traveled 8.0 cm. How far did the unknown travel? (in cm, to 3 significant figures)
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
            label: 'A quick check of how many components are in a reaction mixture, using a silica-coated plate, is _______',
            options: ['paper chromatography', 'thin-layer chromatography', 'column chromatography'],
            correctIndex: 1,
            explanation: 'Thin-layer chromatography uses a plate coated with silica gel and gives a fast picture of how many components a mixture contains.'
          },
          {
            id: 'mx3-dd2',
            label: 'Identifying the dyes in a food coloring mixture is a classic _______ application',
            options: ['paper chromatography', 'thin-layer chromatography', 'column chromatography'],
            correctIndex: 0,
            explanation: 'Identifying the dyes in a food coloring mixture is a classic paper chromatography application. Each dye will travel a different distance and show as a separate colored spot.'
          },
          {
            id: 'mx3-dd3',
            label: 'To purify a large quantity of a product from a reaction mixture, use _______',
            options: ['paper chromatography', 'thin-layer chromatography', 'column chromatography'],
            correctIndex: 2,
            explanation: 'When you need to purify a large quantity of a product from a reaction mixture, column chromatography allows collection of individual fractions.'
          },
          {
            id: 'mx3-dd4',
            label: 'On a polar stationary phase, the component with the lowest $R_f$ is the most _______',
            options: ['polar', 'nonpolar', 'volatile'],
            correctIndex: 0,
            explanation: 'A low $R_f$ means the component is held strongly by the polar stationary phase, so it is the most polar component.'
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
              'The solvent used as the mobile phase',
              'The type of paper used as stationary phase',
              'The amount of sample spotted',
              'The temperature of the developing chamber'
            ],
            correctAnswer: 2,
            explanation: 'The $R_f$ value depends on the solvent, paper type, and temperature — but NOT on the amount of sample applied. Applying too much sample may cause streaking, but the $R_f$ remains the same.'
          }
        ]
      }
    }
  ]
}
