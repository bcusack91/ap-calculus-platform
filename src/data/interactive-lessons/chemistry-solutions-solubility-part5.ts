export const chemSolutionsSolubilityPart5Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss5-intro',
      type: 'text' as const,
      content: `# 🔋 Electrolytes and Why Things Dissolve

**Part 5 of 7 — Electrolytes, Conductivity, and Solubility from Intermolecular Forces**

---

### Topics in This Part

| Section |
|---------|
| 🔋 Electrolytes vs. Nonelectrolytes |
| ⚖️ The Three Interactions in Dissolving |
| 📈 Solubility Trends Explained by IMFs |

> 🔑 **Key Concept:** Whether a substance dissolves, and whether its solution conducts, both come down to what happens to its particles in the solvent.

---

### What You'll Master in Part 5
- Classifying solutes as strong, weak, or nonelectrolytes and predicting conductivity
- Explaining solubility by comparing solute–solute, solvent–solvent, and solute–solvent attractions
- Predicting miscibility and solubility trends from molecular structure`
    },
    {
      id: 'ss5-electrolyte-comparison',
      type: 'text' as const,
      content: `
## 🔋 Electrolytes vs. Nonelectrolytes

A solution conducts electricity only if it contains **mobile ions**. How many ions a solute produces decides how well its solution conducts.


---

### Strong Electrolytes
- **Completely** dissociate into ions in solution
- Examples: soluble ionic compounds (NaCl, KBr, $CaCl_{2}$), strong acids (HCl, $HNO_{3}$), strong bases (NaOH)
- Conduct electricity strongly


---

### Weak Electrolytes
- **Partially** ionize in solution; most particles stay as neutral molecules
- Examples: $CH_{3}COOH$ (acetic acid), $NH_{3}$, HF
- Conduct electricity weakly


---

### Nonelectrolytes
- Do **not** produce ions; they dissolve as whole molecules
- Examples: glucose $(C_{6}H_{12}O_{6})$, sucrose, ethanol, urea
- Do not conduct electricity


---

### Comparing Equal Concentrations

For 0.10 M solutions at the same temperature:

| Solute | Type | Approximate Ion Concentration | Conductivity |
|--------|------|-------------------------------|--------------|
| $CaCl_{2}$ | Strong | 0.30 M | Highest |
| NaCl | Strong | 0.20 M | High |
| $CH_{3}COOH$ | Weak | about 0.003 M | Low |
| Glucose | Non | 0 | None |

> 💡 **Tip:** Pure water and solid NaCl are both very poor conductors. Ions must be present **and** free to move, which happens when NaCl dissolves or melts.
      `
    },
    {
      id: 'ss5-electrolyte-quiz',
      type: 'multiple-choice' as const,
      content: `
**Electrolyte Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which 0.10 M aqueous solution is the best conductor of electricity?',
            options: [
              '$CH_{3}COOH$',
              '$C_{2}H_{5}OH$',
              '$K_{2}SO_{4}$',
              'NaCl'
            ],
            correctAnswer: 2,
            explanation: '$K_{2}SO_{4}$ is a strong electrolyte that releases three ions per formula unit (0.30 M of ions). NaCl releases two (0.20 M). Acetic acid only partly ionizes, and ethanol produces no ions at all.'
          },
          {
            question: 'A 0.10 M solution of HF conducts electricity, but much more weakly than 0.10 M HCl. The best explanation is that',
            options: [
              'HF is a nonelectrolyte that does not produce ions',
              'Only a small fraction of HF molecules ionize in water',
              'HF produces more ions per molecule than HCl',
              'Fluoride ions cannot move through water'
            ],
            correctAnswer: 1,
            explanation: 'HF is a weak acid and weak electrolyte: most HF stays as neutral molecules, so the solution contains far fewer ions than 0.10 M HCl, which ionizes completely. It does produce some ions, which is why it conducts at all.'
          },
          {
            question: 'Solid sucrose and solid KCl are each dissolved in water. Which observation correctly distinguishes them?',
            options: [
              'Only the KCl solution conducts electricity',
              'The sucrose solution conducts better than the KCl',
              'Both solutions conduct electricity equally',
              'Neither solution conducts electricity'
            ],
            correctAnswer: 0,
            explanation: 'KCl dissociates into mobile $K^{+}$ and $Cl^{-}$ ions, so its solution conducts. Sucrose is molecular and dissolves without forming ions, so its solution does not conduct.'
          }
        ]
      }
    },
    {
      id: 'ss5-dissolving-energetics',
      type: 'text' as const,
      content: `
## ⚖️ The Three Interactions in Dissolving

Dissolving trades one set of attractions for another. Picture it in three steps:

| Step | What Happens | Energy |
|------|--------------|--------|
| 1 | Solute particles are pulled apart (solute–solute attractions overcome) | Absorbed |
| 2 | Solvent particles move apart to make room (solvent–solvent attractions overcome) | Absorbed |
| 3 | Solute and solvent particles attract each other (solute–solvent attractions form) | Released |


---

### Reading the Balance

- If the new solute–solvent attractions are **comparable to or stronger than** the attractions broken, the solute tends to dissolve.
- If the solute–solvent attractions are **much weaker** than what must be broken, little dissolves.
- Dissolving also spreads matter out (greater dispersal), which favors mixing. That is why some salts, such as $NH_{4}NO_{3}$ in a cold pack, dissolve even though the process absorbs heat.


---

### Applying It: Oil and Water

Water molecules hold each other by strong hydrogen bonds. Oil molecules can offer water only weak London dispersion forces. Separating water molecules costs more than the oil–water attractions return, so oil and water stay separate.

> 🔑 **Key Concept:** "Like dissolves like" is shorthand for this balance: substances with **similar** intermolecular forces can replace each other's attractions without a large energy cost.
      `
    },
    {
      id: 'ss5-solubility-trends',
      type: 'text' as const,
      content: `
## 📈 Solubility Trends Explained by IMFs

### Alcohols in Water

| Alcohol | Formula | Solubility in Water |
|---------|---------|---------------------|
| Methanol | $CH_{3}OH$ | Miscible (mixes in all proportions) |
| 1-Propanol | $C_{3}H_{7}OH$ | Miscible |
| 1-Butanol | $C_{4}H_{9}OH$ | Moderately soluble |
| 1-Hexanol | $C_{6}H_{13}OH$ | Only slightly soluble |

Each alcohol has one O–H group that hydrogen bonds with water. As the nonpolar hydrocarbon chain grows, a larger part of the molecule can interact with water only through dispersion forces, so solubility in water drops. Solubility in a nonpolar solvent such as hexane rises along the same series.


---

### Other Pairings

| Solute | Solvent | Result | Reason |
|--------|---------|--------|--------|
| $I_{2}$ (nonpolar) | $CCl_{4}$ (nonpolar) | Dissolves | Dispersion forces on both sides |
| $I_{2}$ | Water | Barely dissolves | Cannot replace water's hydrogen bonds |
| KBr (ionic) | Hexane | Does not dissolve | No ion–dipole attractions to offset the lattice |
| Acetone (polar) | Water | Miscible | Dipole–dipole forces and hydrogen bonds to water's O–H |
      `
    },
    {
      id: 'ss5-trends-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict and Explain** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The alcohol most soluble in water is',
            options: ['$CH_{3}OH$', '$C_{4}H_{9}OH$', '$C_{6}H_{13}OH$', '$C_{8}H_{17}OH$']
          },
          {
            label: 'The alcohol most soluble in hexane is',
            options: ['$CH_{3}OH$', '$C_{2}H_{5}OH$', '$C_{4}H_{9}OH$', '$C_{8}H_{17}OH$']
          },
          {
            label: 'Dissolving a solute requires energy to overcome',
            options: ['solute–solvent attractions only', 'solute–solute and solvent–solvent attractions', 'covalent bonds within the solvent', 'nuclear attractions inside atoms']
          },
          {
            label: 'Octane does not dissolve in water mainly because',
            options: ['octane is denser than water and sinks below it', 'octane cannot replace the hydrogen bonds water would lose', 'octane reacts with water to form an insoluble product', 'octane molecules are too large to fit between water molecules']
          }
        ],
        correctAnswers: ['$CH_{3}OH$', '$C_{8}H_{17}OH$', 'solute–solute and solvent–solvent attractions', 'octane cannot replace the hydrogen bonds water would lose'],
        hint1: 'A shorter hydrocarbon chain means the O–H group dominates.',
        hint2: 'In a nonpolar solvent, the longer nonpolar chain helps.',
        hint3: 'Steps 1 and 2 of dissolving absorb energy; step 3 releases it.',
        explanation: 'Methanol has the smallest nonpolar part, so it mixes best with water; octanol has the largest, so it mixes best with hexane. Dissolving costs energy to separate solute particles and solvent particles. Octane offers water only dispersion forces, which cannot make up for the hydrogen bonds water would lose.'
      }
    },
    {
      id: 'ss5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Electrolytes and Solubility** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Pentane, $C_{5}H_{12}$, dissolves readily in hexane but not in water. Which explanation is best?',
            options: [
              'Pentane forms hydrogen bonds with the C–H bonds of hexane',
              'Pentane and hexane share the same kind of dispersion forces',
              'Pentane is an ionic solid that dissolves only in nonpolar liquids',
              'Water molecules are too large to surround pentane molecules'
            ],
            correctAnswer: 1,
            explanation: 'Pentane and hexane are both nonpolar, so the dispersion attractions between them are similar to those within each pure liquid and they mix easily. In water, pentane cannot offer attractions strong enough to replace water’s hydrogen bonds. Pentane has no O–H or N–H, so it cannot hydrogen bond, and it is molecular, not ionic.'
          },
          {
            question: 'Which change would most likely increase the solubility of a long-chain alcohol in water?',
            options: [
              'Lengthening its hydrocarbon chain',
              'Replacing its O–H group with a C–H',
              'Adding a second O–H group to the chain',
              'Switching the solvent from water to hexane'
            ],
            correctAnswer: 2,
            explanation: 'A second O–H group gives the molecule another site for hydrogen bonding with water, increasing solute–water attractions. Lengthening the chain or removing the O–H makes the molecule more nonpolar and less water-soluble, and changing the solvent does not raise solubility in water.'
          }
        ]
      }
    }
  ]
}
