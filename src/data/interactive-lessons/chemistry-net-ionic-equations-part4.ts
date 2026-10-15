export const chemNetIonicEquationsPart4Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni4-intro',
      type: 'text' as const,
      content: `# 🧪 Precipitation Reactions

**Part 4 of 7 — Predicting Precipitates from Given Solubility Information**

---

### Topics in This Part

| Section |
|---------|
| ⚗️ Predicting Precipitation Reactions |
| Strategy: The Ion-Swap Method |
| Example: Mix $AgNO_{3}(aq)$ and NaCl(aq) |
| 🔬 Precipitation at the Particle Level |
| Net Ionic Patterns |
| 🧪 Multi-Step Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ni4-predicting',
      type: 'text' as const,
      content: `
## ⚗️ Predicting Precipitation Reactions

### Strategy: The Ion-Swap Method

When two ionic compounds in solution are mixed:

1. **List all ions** present in solution
2. **Swap partners** — combine each cation with each new anion
3. **Check solubility** of each possible product: sodium, potassium, ammonium, and nitrate salts are always soluble; for anything else, use the information the question gives
4. If any product is **insoluble** → precipitation occurs!


---

### Example: Mix $AgNO_{3}(aq)$ and NaCl(aq) (silver chloride is insoluble)

**Ions present:** $Ag^{+}$, $NO_{3}^{-}$, $Na^{+}$, $Cl^{-}$

**Possible new combinations:**
- $Ag^{+}$ + $Cl^{-}$ → AgCl — **Check:** not covered by the rule; the question states it is **insoluble** ✓
- $Na^{+}$ + $NO_{3}^{-}$ → $NaNO_{3}$ — **Check:** $Na^{+}$ always soluble → **soluble**

**Result:** AgCl precipitates!

$$\\boxed{\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)}$$
      `
    },
    {
      id: 'ni4-particle-view',
      type: 'text' as const,
      content: `
## 🔬 Precipitation at the Particle Level

AP questions often show precipitation with particle diagrams (CED 4.3). Reading them uses the same logic as the equations.

| Before mixing | After mixing |
|---------------|-------------|
| Beaker 1: $\\text{Ag}^+$ and $\\text{NO}_3^-$ ions spread through the water | $\\text{Ag}^+$ and $\\text{Cl}^-$ are now packed together in a solid at the bottom |
| Beaker 2: $\\text{Na}^+$ and $\\text{Cl}^-$ ions spread through the water | $\\text{Na}^+$ and $\\text{NO}_3^-$ are still separate, hydrated ions in solution |

> 🔑 **Key Concept:** Ions drawn **separately** and surrounded by water are dissolved $(aq)$. Ions drawn **packed together in a lattice** are a solid $(s)$. The ions that remain separate after mixing are the spectators.


---

### Using a Diagram to Count What Is Left

If 6 $\\text{Ag}^+$ ions are mixed with 4 $\\text{Cl}^-$ ions, 4 AgCl units form and **2 $\\text{Ag}^+$ ions remain dissolved**. Chloride is the limiting ion, exactly like a limiting reactant. All the $\\text{Na}^+$ and $\\text{NO}_3^-$ ions remain in solution.


---

### Net Ionic Patterns

All precipitation reactions follow the same net ionic pattern:

$$\\boxed{\\text{cation}(aq) + \\text{anion}(aq) \\rightarrow \\text{insoluble salt}(s)}$$

> 🔑 **Key Concept:** The spectator ions are always the "other" pair that forms a soluble compound.
      `
    },
    {
      id: 'ni4-multi-step',
      type: 'text' as const,
      content: `
## 🧪 Multi-Step Example

> **Problem:** Mix $\\text{FeCl}_3(aq) + 3\\text{NaOH}(aq) \\rightarrow$ ? Iron(III) hydroxide is insoluble. Write the net ionic equation.

> **Solution:**


---

### Step 1: Identify ions
$Fe^{3+}$, $Cl^{-}$, $Na^{+}$, $OH^{-}$


---

### Step 2: Swap partners
- $Fe^{3+}$ + $OH^{-}$ → $Fe(OH)_{3}$ — Solubility? Given in the problem → **insoluble**
- $Na^{+}$ + $Cl^{-}$ → NaCl — Solubility? $Na^{+}$ always soluble → **soluble**


---

### Step 3: Molecular equation
$$\\text{FeCl}_3(aq) + 3\\text{NaOH}(aq) \\rightarrow \\text{Fe(OH)}_3(s) + 3\\text{NaCl}(aq)$$


---

### Step 4: Complete ionic equation
$$\\text{Fe}^{3+}(aq) + 3\\text{Cl}^-(aq) + 3\\text{Na}^+(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s) + 3\\text{Na}^+(aq) + 3\\text{Cl}^-(aq)$$

**Cancel spectators:**
$$\\text{Fe}^{3+}(aq) + \\cancel{3\\text{Cl}^-(aq)} + \\cancel{3\\text{Na}^+(aq)} + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s) + \\cancel{3\\text{Na}^+(aq)} + \\cancel{3\\text{Cl}^-(aq)}$$


---

### Step 5: Net ionic equation
$$\\boxed{\\text{Fe}^{3+}(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s)}$$

**Charge check:** (+3) + 3(−1) = 0 on left; 0 on right ✓
      `
    },
    {
      id: 'ni4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Precipitation Reactions Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of solutions will produce a precipitate when mixed?',
            options: [
              'NaCl(aq) + $KNO_{3}(aq)$',
              '$AgNO_{3}(aq)$ + KBr(aq)',
              'NaOH(aq) + KCl(aq)',
              '$NH_{4}Cl(aq)$ + $NaNO_{3}(aq)$'
            ],
            correctAnswer: 1,
            explanation: 'In every other mixture, both new pairings are sodium, potassium, ammonium, or nitrate salts, so nothing can precipitate. Only $AgNO_{3}$ + KBr creates a pairing outside that rule: $Ag^{+}$ + $Br^{-}$ → AgBr, the solid. The other new pairing, $KNO_{3}$, stays dissolved.'
          },
          {
            question: 'What is the net ionic equation when $BaCl_{2}(aq)$ is mixed with $K_{2}SO_{4}(aq)$? (Barium sulfate is insoluble.)',
            options: [
              '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$',
              '$\\text{Ba}^{2+}(aq) + 2\\text{Cl}^-(aq) + 2\\text{K}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{KCl}(aq)$',
              '$\\text{K}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{KCl}(s)$',
              'No reaction occurs'
            ],
            correctAnswer: 0,
            explanation: '$Ba^{2+}$ + $SO_{4}^{2-}$ → $BaSO_{4}(s)$ is insoluble. $K^{+}$ and $Cl^{-}$ are spectators. Net ionic: $Ba^{2+}(aq)$ + $SO_{4}^{2-}(aq)$ → $BaSO_{4}(s)$. Charge: (+2) + (−2) = 0 = 0 ✓.'
          },
          {
            question: 'When $Pb(NO_{3})_{2}(aq)$ is mixed with $Na_{2}S(aq)$, the precipitate formed is:',
            options: [
              '$NaNO_{3}$',
              'PbS',
              '$Pb(NO_{3})_{2}$',
              '$Na_{2}S$'
            ],
            correctAnswer: 1,
            explanation: 'The new pairings are $Pb^{2+}$ with $S^{2-}$ and $Na^{+}$ with $NO_{3}^{-}$. Sodium nitrate is always soluble, so the precipitate must be PbS. Lead(II) nitrate and sodium sulfide are the starting solutions, which are dissolved.'
          }
        ]
      }
    },
    {
      id: 'ni4-predict-drill',
      type: 'input-boxes' as const,
      content: `
**Predict the Precipitate** 🧮

For each pair of solutions mixed, write the formula of the precipitate that forms. If no reaction occurs, type **NR**.

**1)** $\\text{CaCl}_2(aq) + \\text{Na}_2\\text{CO}_3(aq) \\rightarrow$ (calcium carbonate is insoluble)

**2)** $\\text{KNO}_3(aq) + \\text{NaBr}(aq) \\rightarrow$

**3)** $\\text{Cu(NO}_3)_2(aq) + 2\\text{NaOH}(aq) \\rightarrow$ (copper(II) hydroxide is insoluble)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['CaCO3', 'NR', 'Cu(OH)2'],
        hint1: 'The new pairings are $CaCO_{3}$ and NaCl. Which one does the problem say is insoluble?',
        hint2: 'Possible products: KBr and $NaNO_{3}$. Are they potassium, sodium, or nitrate salts?',
        hint3: 'The new pairings are $Cu(OH)_{2}$ and $NaNO_{3}$. Which can never precipitate?',
        explanation: '1) $CaCO_{3}$ — given as insoluble; NaCl is a sodium salt and stays dissolved. 2) NR — KBr and $NaNO_{3}$ are both covered by the always-soluble rule, so no solid can form. 3) $Cu(OH)_{2}$ — given as insoluble; $NaNO_{3}$ stays dissolved.'
      }
    },
    {
      id: 'ni4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Precipitation Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: '$AgNO_{3}(aq)$ + NaI(aq) produces a precipitate of',
            options: ['$NaNO_{3}$', 'AgI', 'AgNa', 'No precipitate']
          },
          {
            label: 'All nitrate salts are',
            options: ['insoluble', 'slightly soluble', 'soluble', 'gases']
          },
          {
            label: 'A precipitate can never be a salt of',
            options: ['silver', 'potassium', 'barium', 'lead']
          },
          {
            label: 'The spectator ions in the reaction $AgNO_{3}(aq)$ + NaCl(aq) → AgCl(s) + $NaNO_{3}(aq)$ are',
            options: ['$Ag^{+}$ and $Cl^{-}$', '$Na^{+}$ and $NO_{3}^{-}$', '$Ag^{+}$ and $Na^{+}$', '$Cl^{-}$ and $NO_{3}^{-}$']
          }
        ],
        correctAnswers: ['AgI', 'soluble', 'potassium', '$Na^{+}$ and $NO_{3}^{-}$'],
        hint1: 'The new pairings are AgI and $NaNO_{3}$. Which one can never be a solid?',
        hint2: 'Nitrate is one of the four always-soluble groups.',
        hint3: 'Which of these is sodium, potassium, ammonium, or nitrate?',
        explanation: '$NaNO_{3}$ is always soluble, so the precipitate is AgI. All nitrates are soluble (CED 4.7.A.5). Potassium salts are always soluble, so a potassium salt is never a precipitate. $Na^{+}$ and $NO_{3}^{-}$ don\'t change → spectators.'
      }
    },
    {
      id: 'ni4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Precipitation Reactions** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which net ionic equation correctly represents the reaction when solutions of iron(III) chloride and sodium hydroxide are mixed?',
            options: [
              '$\\text{Fe}^{3+}(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s)$',
              '$\\text{Fe}^{3+}(aq) + \\text{OH}^-(aq) \\rightarrow \\text{FeOH}(s)$',
              '$\\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{NaCl}(s)$',
              '$3\\text{Na}^+(aq) + 3\\text{Cl}^-(aq) \\rightarrow 3\\text{NaCl}(s)$'
            ],
            correctAnswer: 0,
            explanation: '$Fe^{3+}$ + $3OH^{-}$ → $Fe(OH)_{3}(s)$. NaCl is a sodium salt and cannot precipitate, so the solid is iron(III) hydroxide, which needs three $OH^{-}$ per $Fe^{3+}$. $Na^{+}$ and $Cl^{-}$ are spectators. Charge check: (+3) + 3(−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: 'A student mixes $Ca(NO_{3})_{2}(aq)$ with $Na_{2}SO_{4}(aq)$ and a white solid forms. Which net ionic equation represents the reaction?',
            options: [
              '$\\text{Na}^+(aq) + \\text{NO}_3^-(aq) \\rightarrow \\text{NaNO}_3(s)$',
              '$\\text{Ca}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{CaSO}_4(s)$',
              '$2\\text{Na}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{Na}_2\\text{SO}_4(s)$',
              '$\\text{Ca}^{2+}(aq) + 2\\text{NO}_3^-(aq) \\rightarrow \\text{Ca(NO}_3)_2(s)$'
            ],
            correctAnswer: 1,
            explanation: 'Sodium nitrate, sodium sulfate, and calcium nitrate are all sodium or nitrate salts, so none of them can be the solid. The only remaining pairing is calcium with sulfate, so the white solid is $CaSO_{4}$: $Ca^{2+}(aq)$ + $SO_{4}^{2-}(aq)$ → $CaSO_{4}(s)$.'
          }
        ]
      }
    }
  ]
}
