export const chemSolutionsSolubilityPart1Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss1-intro',
      type: 'text' as const,
      content: `# 🧪 Solution Terminology

**Part 1 of 7 — Solutes, Solvents, and Solution Types**

---

### Topics in This Part

| Section |
|---------|
| 📌 Solute and Solvent |
| Key Points |
| Aqueous Solutions |
| 🧊 Saturation States |
| Three Saturation States |
| 💧 "Like Dissolves Like" |
| 📏 Which Ionic Compounds Dissolve in Water? |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ss1-basic-definitions',
      type: 'text' as const,
      content: `
## 📌 Solute and Solvent

A **solution** is a homogeneous mixture of two or more substances.

| Term | Definition | Example (Saltwater) |
|------|-----------|-------------------|
| **Solute** | The substance being dissolved (lesser amount) | NaCl (salt) |
| **Solvent** | The substance doing the dissolving (greater amount) | $H_{2}O$ (water) |
| **Solution** | The resulting homogeneous mixture | Saltwater |


---

### Key Points

- The solvent is usually present in the **greater quantity**
- Water is called the **universal solvent** because of its polarity and ability to dissolve many ionic and polar substances
- Solutions can exist in all phases: gas (air), liquid (saltwater), solid (alloys like brass)


---

### Aqueous Solutions

When water is the solvent, we call it an **aqueous solution**, denoted by **(aq)** in chemical equations:

$$\\text{NaCl(s)} \\xrightarrow{\\text{H}_2\\text{O}} \\text{Na}^+(\\text{aq}) + \\text{Cl}^-(\\text{aq})$$
      `
    },
    {
      id: 'ss1-saturation',
      type: 'text' as const,
      content: `
## 🧊 Saturation States

The amount of solute that dissolves depends on the **solubility** of that solute in a given solvent at a specific temperature.


---

### Three Saturation States

| State | Definition | What Happens If You Add More Solute? |
|-------|-----------|--------------------------------------|
| **Unsaturated** | Contains less solute than the maximum amount | More solute dissolves |
| **Saturated** | Contains the maximum amount of dissolved solute | Excess solute remains undissolved |
| **Supersaturated** | Contains more solute than normal saturation allows | Very unstable — crystallization occurs upon disturbance |


---

### Making a Supersaturated Solution

1. Heat the solvent to increase solubility
2. Dissolve more solute than would normally dissolve at room temperature
3. Slowly cool the solution without disturbing it
4. The result: a supersaturated solution that can **crystallize dramatically** when a seed crystal is added


---

### Solubility vs. Temperature

- **Most solid solutes**: solubility **increases** with temperature
- **Gases**: solubility **decreases** with temperature (think of a warm soda going flat)
- Raising the pressure of a gas above a liquid increases how much of that gas dissolves (this is why soda is bottled under pressure); pressure has a negligible effect on dissolving solids and liquids
      `
    },
    {
      id: 'ss1-saturation-quiz',
      type: 'multiple-choice' as const,
      content: `
**Saturation Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A solution has some solid solute sitting at the bottom of the beaker that will not dissolve no matter how much you stir. The solution is:',
            options: [
              'Unsaturated',
              'Saturated',
              'Supersaturated',
              'Dilute'
            ],
            correctAnswer: 1,
            explanation: 'If additional solute will not dissolve and remains as a solid at the bottom, the solution has reached its maximum capacity — it is saturated. A saturated solution is in dynamic equilibrium: the rate of dissolving equals the rate of crystallization.'
          },
          {
            question: 'A student heats water, dissolves a large amount of sugar, then carefully cools the solution. No crystals form. If she drops in a single sugar crystal, massive crystallization occurs. The original cooled solution was:',
            options: [
              'Unsaturated',
              'Saturated',
              'Supersaturated',
              'Concentrated'
            ],
            correctAnswer: 2,
            explanation: 'The solution contained more dissolved solute than it could normally hold at that temperature. It was metastable — supersaturated. The seed crystal triggered rapid crystallization because the excess solute precipitated out.'
          },
          {
            question: 'Which statement about gas solubility is correct?',
            options: [
              'Gas solubility rises with increasing temperature',
              'Gas solubility decreases with increasing temperature',
              'Gas solubility is not affected by temperature',
              'Gas solubility increases with decreasing pressure'
            ],
            correctAnswer: 1,
            explanation: 'Gas solubility in liquids decreases as temperature increases. This is why hot water holds less dissolved oxygen than cold water, and why a warm soda loses its fizz faster.'
          }
        ]
      }
    },
    {
      id: 'ss1-like-dissolves-like',
      type: 'text' as const,
      content: `
## 💧 "Like Dissolves Like"

This is the most important rule for predicting solubility:

> 🔑 **Key Concept:** Polar solutes dissolve in polar solvents. Nonpolar solutes dissolve in nonpolar solvents.


---

### Why?

Dissolving occurs when solute-solvent interactions are strong enough to overcome:
- **Solute-solute** attractions (breaking apart the solute)
- **Solvent-solvent** attractions (making room in the solvent)

| Solute Type | Solvent Type | Dissolves? | Example |
|-------------|-------------|-----------|---------|
| Ionic / Polar | Polar $(H_{2}O)$ | ✅ Yes | NaCl in water |
| Nonpolar | Nonpolar (hexane) | ✅ Yes | Oil in hexane |
| Nonpolar | Polar $(H_{2}O)$ | ❌ No | Oil in water |
| Ionic | Nonpolar | ❌ No | NaCl in hexane |


---

### The Dissolving Process for Ionic Compounds

When NaCl dissolves in water:
1. Water molecules surround ions — **hydration** (or solvation)
2. The partially negative oxygen of $H_{2}O$ attracts $Na^{+}$
3. The partially positive hydrogens attract $Cl^{-}$
4. Ion-dipole forces pull ions away from the crystal lattice

The energy released by hydration must be comparable to the lattice energy for dissolution to occur.
      `
    },
    {
      id: 'ss1-polarity-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Solubility** 🔽

Use the "like dissolves like" principle to predict whether each solute dissolves in the given solvent.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ethanol ($CH_{3}CH_{2}OH$, polar) in water (polar)',
            options: ['Soluble', 'Insoluble', 'Cannot determine']
          },
          {
            label: 'Vegetable oil (nonpolar) in water (polar)',
            options: ['Soluble', 'Insoluble', 'Cannot determine']
          },
          {
            label: '$I_{2}$ (nonpolar) in $CCl_{4}$ (nonpolar)',
            options: ['Soluble', 'Insoluble', 'Cannot determine']
          },
          {
            label: 'KBr (ionic) in hexane (nonpolar)',
            options: ['Soluble', 'Insoluble', 'Cannot determine']
          },
          {
            label: 'Glucose ($C_{6}H_{12}O_{6}$, many -OH groups, polar) in water (polar)',
            options: ['Soluble', 'Insoluble', 'Cannot determine']
          }
        ],
        correctAnswers: ['Soluble', 'Insoluble', 'Soluble', 'Insoluble', 'Soluble'],
        hint1: 'Polar dissolves in polar; nonpolar dissolves in nonpolar.',
        hint2: 'Oil is nonpolar and water is polar — they don\'t mix.',
        hint3: 'Ionic compounds require a polar solvent to stabilize the separated ions.',
        explanation: 'Ethanol is polar and miscible with water. Oil is nonpolar and immiscible with polar water. $I_{2}$ is nonpolar and dissolves in nonpolar $CCl_{4}$. KBr is ionic and needs a polar solvent — it won\'t dissolve in hexane. Glucose has many hydroxyl groups that hydrogen-bond with water, making it very soluble.'
      }
    },
    {
      id: 'ss1-solubility-rules',
      type: 'text' as const,
      content: `
## 📏 Which Ionic Compounds Dissolve in Water?

For the AP exam, you need to memorize only **one** solubility rule:

> 🔑 **Key Concept:** All salts containing $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, or $NO_{3}^{-}$ are soluble in water.

For every other ionic compound, an AP question will **give you** the information you need: a statement that the compound is insoluble, a $K_{sp}$ value, or an observation such as "a yellow precipitate forms." Long tables of exceptions (chlorides except silver and lead, sulfates except barium, and so on) are not assessed.


---

### Using the One Rule

| Compound | Contains $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, or $NO_{3}^{-}$? | Conclusion |
|----------|-----------|-----------|
| $KBr$ | Yes ($K^{+}$) | Soluble |
| $Pb(NO_{3})_{2}$ | Yes ($NO_{3}^{-}$) | Soluble |
| $(NH_{4})_{2}SO_{4}$ | Yes ($NH_{4}^{+}$) | Soluble |
| $AgCl$ | No | Not decided by the rule; the problem must tell you |


---

### Spotting the Precipitate

When two soluble salts are mixed and a solid forms, swap partners and ask which new pairing could be the solid:

1. Write the two possible new pairings (the "swapped" combinations).
2. Any pairing that contains $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, or $NO_{3}^{-}$ stays dissolved.
3. The remaining pairing is the precipitate.

For example, mixing $AgNO_{3}(aq)$ and $NaCl(aq)$ gives the possible pairings $NaNO_{3}$ and $AgCl$. Since $NaNO_{3}$ must be soluble, the observed solid is $AgCl$.

> 💡 **Tip:** The ions that stay dissolved are **spectator ions**. They are left out of the net ionic equation: $Ag^{+}(aq) + Cl^{-}(aq) \\rightarrow AgCl(s)$.
      `
    },
    {
      id: 'ss1-solubility-rules-quiz',
      type: 'multiple-choice' as const,
      content: `
**Solubility Rules Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which compound is INSOLUBLE in water?',
            options: [
              'NaCl',
              'AgCl',
              '$KNO_{3}$',
              '$NH_{4}Br$'
            ],
            correctAnswer: 1,
            explanation: 'NaCl contains $Na^{+}$, $KNO_{3}$ contains both $K^{+}$ and $NO_{3}^{-}$, and $NH_{4}Br$ contains $NH_{4}^{+}$, so all three must be soluble. AgCl contains none of those ions, and it is in fact the white solid that forms when silver and chloride ions meet.'
          },
          {
            question: 'Three of these compounds are insoluble in water. Which one is SOLUBLE?',
            options: [
              '$BaSO_{4}$',
              '$Ag_{2}CO_{3}$',
              '$CaCO_{3}$',
              '$Na_{2}CO_{3}$'
            ],
            correctAnswer: 3,
            explanation: 'Every sodium salt is soluble, so $Na_{2}CO_{3}$ dissolves. The other three contain none of $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, or $NO_{3}^{-}$, which is consistent with the stem telling you they are the insoluble ones.'
          },
          {
            question: 'When solutions of $Pb(NO_{3})_{2}$ and KI are mixed, a yellow precipitate forms. The precipitate is:',
            options: [
              '$KNO_{3}$',
              '$PbI_{2}$',
              '$Pb(NO_{3})_{2}$',
              'KI'
            ],
            correctAnswer: 1,
            explanation: 'Swapping partners gives two possible new compounds, $KNO_{3}$ and $PbI_{2}$. $KNO_{3}$ contains $K^{+}$ and $NO_{3}^{-}$, so it must stay dissolved; the yellow solid has to be $PbI_{2}$. The two starting reactants are both soluble, which is why they were solutions to begin with.'
          }
        ]
      }
    },
    {
      id: 'ss1-exit-quiz',
      type: 'input-boxes' as const,
      content: `
**Exit Drill — Solution Terminology** 🧮

**1)** In a solution of 5.0 g of sugar dissolved in 95.0 g of water, the solvent is water. What is the total mass of the solution in grams?

**2)** At 25°C, the solubility of NaCl is 36.0 g per 100 g of water. If 30.0 g of NaCl is added to 100 g of water at 25°C, how many grams of NaCl dissolve?

**3)** Using the same conditions as problem 2, how many grams of NaCl remain undissolved at the bottom?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100.0', '30.0', '0.0'],
        hint1: 'Total mass = mass of solute + mass of solvent.',
        hint2: 'The solubility limit is 36.0 g per 100 g water. Is 30.0 g less than or greater than this limit?',
        hint3: 'Since 30.0 g < 36.0 g solubility limit, all of the NaCl dissolves.',
        explanation: '1) Total mass = 5.0 + 95.0 = 100.0 g. 2) Since 30.0 g < 36.0 g (the maximum that can dissolve), all 30.0 g dissolves — the solution is unsaturated. 3) Because all the NaCl dissolves, 0.0 g remains undissolved.'
      }
    }
  ]
}
