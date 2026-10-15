export const chemSolutionsSolubilityPart6Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss6-intro',
      type: 'text' as const,
      content: `# 🧮 Problem-Solving Workshop

**Part 6 of 7 — Multi-Step Molarity, Mixing, and Precipitation Problems**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem combines molarity, dilution, ion counting, and reaction stoichiometry from earlier parts.

> 🔑 **Why this matters:** AP free-response questions often chain three or four solution calculations together. A reliable method keeps each step clean.

---

### What You'll Master in Part 6
- Finding ion concentrations after two solutions are mixed
- Using molarity and volume to find a limiting reactant in a precipitation
- Calculating the mass of precipitate and the ions left over in solution`
    },
    {
      id: 'ss6-strategy',
      type: 'text' as const,
      content: `
## 🛠️ Problem-Solving Strategy

### Step-by-Step Approach

1. **Read** the problem: identify what is given and what is asked
2. **Convert** every solution to **moles** with $n = M \\times V$ (volume in liters)
3. **Split** ionic compounds into ions and count moles of each ion
4. **React** (if a precipitate or neutralization occurs) and find the limiting reactant
5. **Divide** by the **total** volume to get final concentrations
6. **Check:** does the answer make physical sense?


---

### Key Formulas Reference

| Formula | Used For |
|---------|----------|
| $M = n/V$ | Molarity |
| $n = M \\times V$ | Moles from a solution |
| $M_1V_1 = M_2V_2$ | Dilution of one solution |
| $[\\text{ion}] = \\text{subscript} \\times M_{\\text{salt}}$ | Ion concentration |
| $m = n \\times \\mathcal{M}$ | Mass from moles (molar mass $\\mathcal{M}$) |

> ⚠️ **Warning:** When two solutions are mixed, volumes add. Forgetting to use the **combined** volume is the most common error in mixing problems.
      `
    },
    {
      id: 'ss6-worked-example-1',
      type: 'text' as const,
      content: `
## 🧪 Worked Example 1: Mixing Solutions with a Common Ion

> **Problem:** 100.0 mL of 0.200 M NaCl is mixed with 50.0 mL of 0.300 M $CaCl_{2}$. No precipitate forms. Find the concentration of each ion in the mixture.

### Step-by-Step Solution

| Step | Find | Calculation | Result |
|------|------|-------------|--------|
| 1 | Moles NaCl | $(0.200)(0.1000)$ | 0.0200 mol |
| 2 | Moles $CaCl_{2}$ | $(0.300)(0.0500)$ | 0.0150 mol |
| 3 | Moles $Na^{+}$ | $1 \\times 0.0200$ | 0.0200 mol |
| 4 | Moles $Ca^{2+}$ | $1 \\times 0.0150$ | 0.0150 mol |
| 5 | Moles $Cl^{-}$ | $0.0200 + 2(0.0150)$ | 0.0500 mol |
| 6 | Total volume | $100.0 + 50.0$ | 150.0 mL = 0.1500 L |
| 7 | **Concentrations** | divide each by 0.1500 L | $[Na^{+}] = 0.133$ M, $[Ca^{2+}] = 0.100$ M, $[Cl^{-}] = 0.333$ M |

**Check:** Charge balance. Positive: $0.133 + 2(0.100) = 0.333$ M. Negative: $0.333$ M. ✓

> 🔑 **Tip:** Chloride comes from **both** salts, so add its moles before dividing by the total volume.
      `
    },
    {
      id: 'ss6-conversion-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mixing Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Equal volumes of 0.40 M KCl and water are mixed. What is the potassium ion concentration in the mixture?',
            options: [
              '0.10 M',
              '0.20 M',
              '0.40 M',
              '0.80 M'
            ],
            correctAnswer: 1,
            explanation: 'Mixing with an equal volume of water doubles the volume while the moles of $K^{+}$ stay the same, so the concentration halves to 0.20 M.'
          },
          {
            question: '50.0 mL of 0.100 M $Na_{2}SO_{4}$ is mixed with 50.0 mL of 0.100 M NaCl. What is $[Na^{+}]$ in the mixture?',
            options: [
              '0.100 M',
              '0.150 M',
              '0.200 M',
              '0.300 M'
            ],
            correctAnswer: 1,
            explanation: 'Moles $Na^{+}$: $2(0.100)(0.0500) + (0.100)(0.0500) = 0.0100 + 0.00500 = 0.0150$ mol. Total volume is 0.1000 L, so $[Na^{+}] = 0.150$ M. Using 0.300 M forgets to combine volumes, and 0.200 M counts only the sulfate salt before dilution.'
          },
          {
            question: 'Two solutions of the same salt, 0.10 M and 0.30 M, are mixed in equal volumes. The concentration of the mixture is',
            options: [
              '0.40 M, because the concentrations add',
              '0.20 M, because the moles add over double the space',
              '0.30 M, because the stronger solution sets the value',
              '0.10 M, because the weaker solution sets the value'
            ],
            correctAnswer: 1,
            explanation: 'With volume $V$ of each, the moles are $0.10V + 0.30V = 0.40V$ in a total volume of $2V$, giving 0.20 M. Concentrations never simply add, and neither solution alone sets the result.'
          }
        ]
      }
    },
    {
      id: 'ss6-mixed-calc-1',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations — Set 1** 🧮

**1)** 200.0 mL of 0.150 M $MgCl_{2}$ is mixed with 300.0 mL of 0.100 M KCl. What is $[Cl^{-}]$ in the mixture? (in M, to 3 significant figures)

**2)** In the same mixture, what is $[Mg^{2+}]$? (in M, to 3 significant figures)

**3)** What volume (in mL) of 2.00 M $HNO_{3}$ must be diluted with water to make 250.0 mL of 0.0800 M $HNO_{3}$? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.180', '0.0600', '10.0'],
        hint1: 'Moles $Cl^{-}$ $= 2(0.150)(0.2000) + (0.100)(0.3000)$. Total volume = 0.5000 L.',
        hint2: 'Moles $Mg^{2+}$ $= (0.150)(0.2000)$. Divide by 0.5000 L.',
        hint3: '$V_1 = M_2V_2/M_1 = (0.0800)(250.0)/2.00$.',
        explanation: '1) Moles $Cl^{-}$ $= 0.0600 + 0.0300 = 0.0900$ mol; $0.0900/0.5000 = 0.180$ M. 2) Moles $Mg^{2+}$ $= 0.0300$ mol; $0.0300/0.5000 = 0.0600$ M. 3) $V_1 = (0.0800)(250.0)/2.00 = 10.0$ mL.'
      }
    },
    {
      id: 'ss6-worked-example-2',
      type: 'text' as const,
      content: `
## 🧪 Worked Example 2: Precipitation with a Limiting Reactant

> **Problem:** 50.0 mL of 0.100 M $AgNO_{3}$ is mixed with 30.0 mL of 0.200 M NaCl. Solid AgCl ($\\mathcal{M} = 143.32$ g/mol) forms. Find the mass of AgCl and the concentration of the excess ion left in solution.

Net ionic equation: $Ag^{+}(aq) + Cl^{-}(aq) \\rightarrow AgCl(s)$

### Step-by-Step Solution

| Step | Action | Calculation | Result |
|------|--------|-------------|--------|
| 1 | Moles $Ag^{+}$ | $(0.100)(0.0500)$ | 0.00500 mol |
| 2 | Moles $Cl^{-}$ | $(0.200)(0.0300)$ | 0.00600 mol |
| 3 | Limiting reactant (1 : 1) | 0.00500 < 0.00600 | $Ag^{+}$ limits |
| 4 | Mass of AgCl | $0.00500 \\times 143.32$ | **0.717 g** |
| 5 | Excess $Cl^{-}$ | $0.00600 - 0.00500$ | 0.00100 mol |
| 6 | Total volume | $50.0 + 30.0$ | 0.0800 L |
| 7 | $[Cl^{-}]$ remaining | $0.00100/0.0800$ | **0.0125 M** |

> 🔑 **AP Application:** Gravimetric analysis runs this logic in reverse: weigh the precipitate, convert to moles, and work back to the concentration of the original solution.
      `
    },
    {
      id: 'ss6-mixed-calc-2',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations — Set 2** 🧮

> $\\mathcal{M}(BaSO_{4}) = 233.39$ g/mol. $BaSO_{4}$ is insoluble.

**1)** 40.0 mL of 0.250 M $BaCl_{2}$ is mixed with 60.0 mL of 0.200 M $Na_{2}SO_{4}$. How many moles of $BaSO_{4}$ form? (to 3 significant figures)

**2)** What mass (in grams) of $BaSO_{4}$ forms? (to 3 significant figures)

**3)** What is the concentration (in M) of the excess sulfate ion left in solution? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.0100', '2.33', '0.0200'],
        hint1: 'Moles $Ba^{2+}$ $= (0.250)(0.0400) = 0.0100$; moles $SO_{4}^{2-}$ $= (0.200)(0.0600) = 0.0120$. They react 1 : 1.',
        hint2: 'Mass = moles of $BaSO_{4}$ × 233.39.',
        hint3: 'Excess sulfate = 0.0120 − 0.0100 mol, in a total volume of 0.1000 L.',
        explanation: '1) $Ba^{2+}$ (0.0100 mol) is limiting against $SO_{4}^{2-}$ (0.0120 mol), so 0.0100 mol $BaSO_{4}$ forms. 2) $0.0100 \\times 233.39 = 2.33$ g. 3) Excess $SO_{4}^{2-}$ $= 0.00200$ mol in 0.1000 L, so $[SO_{4}^{2-}] = 0.0200$ M.'
      }
    },
    {
      id: 'ss6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Problem-Solving Strategies** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Before combining amounts from two solutions, convert each to',
            options: ['moles', 'grams', 'milliliters', 'molarity']
          },
          {
            label: 'After mixing, each ion concentration is found by dividing its moles by',
            options: ['the volume of its original solution', 'the combined volume of both solutions', 'the volume of the larger solution', 'one liter, regardless of volume']
          },
          {
            label: 'In a precipitation problem, the mass of solid formed is set by the',
            options: ['ion present in excess', 'limiting ion', 'spectator ions', 'total volume']
          },
          {
            label: 'In the AgCl worked example, the ions that stay dissolved after the reaction are',
            options: ['$Na^{+}$, $NO_{3}^{-}$, and leftover $Cl^{-}$', '$Ag^{+}$ and $Cl^{-}$ only', '$Na^{+}$ and $Cl^{-}$ only', 'no ions at all']
          }
        ],
        correctAnswers: ['moles', 'the combined volume of both solutions', 'limiting ion', '$Na^{+}$, $NO_{3}^{-}$, and leftover $Cl^{-}$'],
        hint1: 'Moles are what react and what add up when solutions combine.',
        hint2: 'Mixing makes one solution whose volume is the sum of the two.',
        hint3: 'Once the limiting ion runs out, no more solid can form.',
        explanation: 'Work in moles, then divide by the combined volume. The limiting ion fixes how much precipitate forms. In the AgCl example, $Na^{+}$ and $NO_{3}^{-}$ are spectators, and the excess $Cl^{-}$ also stays in solution.'
      }
    },
    {
      id: 'ss6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: '25.0 mL of 0.200 M $Pb(NO_{3})_{2}$ is mixed with 25.0 mL of 0.200 M KI, and yellow $PbI_{2}$ precipitates. Which ion is the limiting reactant?',
            options: [
              '$Pb^{2+}$',
              '$I^{-}$',
              '$K^{+}$',
              '$NO_{3}^{-}$'
            ],
            correctAnswer: 1,
            explanation: 'Each ion starts at 0.00500 mol, but the reaction $Pb^{2+} + 2I^{-} \\rightarrow PbI_{2}$ uses two iodide ions per lead ion. Using all 0.00250 mol of $Pb^{2+}$ would need 0.0100 mol $I^{-}$, more than is present, so iodide runs out first. $K^{+}$ and $NO_{3}^{-}$ are spectators.'
          },
          {
            question: 'A 2.00 g sample of $BaSO_{4}$ ($\\mathcal{M} = 233.39$ g/mol) is collected after adding excess $Na_{2}SO_{4}$ to 50.0 mL of a $BaCl_{2}$ solution. What was the original $BaCl_{2}$ concentration?',
            options: [
              '0.0857 M',
              '0.171 M',
              '0.343 M',
              '0.00857 M'
            ],
            correctAnswer: 1,
            explanation: 'Moles $BaSO_{4}$ $= 2.00/233.39 = 0.00857$ mol, equal to the moles of $Ba^{2+}$ (1 : 1). Dividing by 0.0500 L gives 0.171 M. Leaving the answer as 0.00857 skips the volume step, and the other values come from using the wrong volume.'
          }
        ]
      }
    }
  ]
}
