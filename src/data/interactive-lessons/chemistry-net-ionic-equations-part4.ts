export const chemNetIonicEquationsPart4Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni4-intro',
      type: 'text' as const,
      content: `# 🧪 Precipitation Reactions

**Part 4 of 7 — Using Solubility Rules to Predict Precipitates**

---

### Topics in This Part

| Section |
|---------|
| ⚗️ Predicting Precipitation Reactions |
| Strategy: The Ion-Swap Method |
| Example: Mix $AgNO_{3}(aq)$ and NaCl(aq) |
| 📌 Common Precipitates on the AP Exam |
| Net Ionic Patterns |

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
3. **Check solubility** of each possible product
4. If any product is **insoluble** → precipitation occurs!


---

### Example: Mix $AgNO_{3}(aq)$ and NaCl(aq)

**Ions present:** $Ag^{+}$, $NO_{3}^{-}$, $Na^{+}$, $Cl^{-}$

**Possible new combinations:**
- $Ag^{+}$ + $Cl^{-}$ → AgCl — **Check:** $Cl^{-}$ with $Ag^{+}$ is an exception → **insoluble** ✓
- $Na^{+}$ + $NO_{3}^{-}$ → $NaNO_{3}$ — **Check:** $Na^{+}$ always soluble → **soluble**

**Result:** AgCl precipitates!

$$\\boxed{\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)}$$
      `
    },
    {
      id: 'ni4-common-precipitates',
      type: 'text' as const,
      content: `
## 📌 Common Precipitates on the AP Exam

| Precipitate | Formula | Color |
|-------------|---------|-------|
| Silver chloride | AgCl | White |
| Silver bromide | AgBr | Pale yellow |
| Silver iodide | AgI | Yellow |
| Lead(II) iodide | $PbI_{2}$ | Bright yellow |
| Lead(II) chloride | $PbCl_{2}$ | White |
| Barium sulfate | $BaSO_{4}$ | White |
| Lead(II) sulfate | $PbSO_{4}$ | White |
| Calcium carbonate | $CaCO_{3}$ | White |
| Iron(III) hydroxide | $Fe(OH)_{3}$ | Rust brown |
| Copper(II) hydroxide | $Cu(OH)_{2}$ | Blue |
| Iron(II) sulfide | FeS | Black |


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

> **Problem:** Mix $\\text{FeCl}_3(aq) + 3\\text{NaOH}(aq) \\rightarrow$ ? Write the net ionic equation.

> **Solution:**


---

### Step 1: Identify ions
$Fe^{3+}$, $Cl^{-}$, $Na^{+}$, $OH^{-}$


---

### Step 2: Swap partners
- $Fe^{3+}$ + $OH^{-}$ → $Fe(OH)_{3}$ — Solubility? $OH^{-}$ insoluble with most metals → **insoluble**
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
            explanation: '$AgNO_{3}$ + KBr: $Ag^{+}$ + $Br^{-}$ → AgBr, which is insoluble (halides with $Ag^{+}$ are exceptions). The other pairs all produce soluble products only.'
          },
          {
            question: 'What is the net ionic equation when $BaCl_{2}(aq)$ is mixed with $K_{2}SO_{4}(aq)$?',
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
            explanation: '$Pb^{2+}$ + $S^{2-}$ → PbS. Sulfides are generally insoluble except with Group 1 metals and $NH_{4}^{+}$. Lead is not an exception, so PbS is a black precipitate.'
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

**1)** $\\text{CaCl}_2(aq) + \\text{Na}_2\\text{CO}_3(aq) \\rightarrow$

**2)** $\\text{KNO}_3(aq) + \\text{NaBr}(aq) \\rightarrow$

**3)** $\\text{Cu(NO}_3)_2(aq) + 2\\text{NaOH}(aq) \\rightarrow$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['CaCO3', 'NR', 'Cu(OH)2'],
        hint1: '$Ca^{2+}$ + $CO_{3}^{2-}$ → $CaCO_{3}$. Is it soluble or insoluble?',
        hint2: 'Possible products: KBr and $NaNO_{3}$. Are either insoluble?',
        hint3: '$Cu^{2+}$ + $OH^{-}$ → $Cu(OH)_{2}$. Check solubility of hydroxides with transition metals.',
        explanation: '1) $CaCO_{3}$ — carbonates are insoluble except with Group $1/NH_{4}^{+}$. Ca is Group 2 → precipitate. 2) NR — KBr and $NaNO_{3}$ are both soluble. No driving force. 3) $Cu(OH)_{2}$ — hydroxides are insoluble with most metals. Cu is not an exception → blue precipitate.'
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
            label: '$PbCl_{2}$ is an exception to the rule that chlorides are generally',
            options: ['insoluble', 'soluble', 'gaseous', 'acidic']
          },
          {
            label: 'The spectator ions in the reaction $AgNO_{3}(aq)$ + NaCl(aq) → AgCl(s) + $NaNO_{3}(aq)$ are',
            options: ['$Ag^{+}$ and $Cl^{-}$', '$Na^{+}$ and $NO_{3}^{-}$', '$Ag^{+}$ and $Na^{+}$', '$Cl^{-}$ and $NO_{3}^{-}$']
          }
        ],
        correctAnswers: ['AgI', 'soluble', 'soluble', '$Na^{+}$ and $NO_{3}^{-}$'],
        hint1: '$Ag^{+}$ + $I^{-}$ → ? Halides with $Ag^{+}$ are insoluble.',
        hint2: '$NO_{3}^{-}$ has no exceptions in the solubility rules.',
        hint3: 'Chlorides are generally _____, but $Pb^{2+}$ is an exception.',
        explanation: 'AgI precipitates (halides with $Ag^{+}$ are insoluble). All nitrates are soluble without exception. Chlorides are generally soluble, with $Pb^{2+}$, $Ag^{+}$, and $Hg_{2}^{2+}$ as exceptions. $Na^{+}$ and $NO_{3}^{-}$ don\'t change → spectators.'
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
            explanation: '$Fe^{3+}$ + $3OH^{-}$ → $Fe(OH)_{3}(s)$. $Fe(OH)_{3}$ is insoluble (rust-brown precipitate). $Na^{+}$ and $Cl^{-}$ are spectators. Charge check: (+3) + 3(−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: 'A student mixes $Ca(NO_{3})_{2}(aq)$ with $Na_{2}SO_{4}(aq)$. What happens?',
            options: [
              'No reaction — both products are soluble',
              '$CaSO_{4}$ precipitates — sulfates with $Ca^{2+}$ are insoluble',
              '$NaNO_{3}$ precipitates — nitrates with $Na^{+}$ are insoluble',
              '$Ca(NO_{3})_{2}$ decomposes into CaO and $NO_{2}$'
            ],
            correctAnswer: 1,
            explanation: '$CaSO_{4}$ is one of the exceptions to sulfate solubility (along with $BaSO_{4}$, $PbSO_{4}$, $SrSO_{4}$). It forms a white precipitate. The net ionic equation is $Ca^{2+}(aq)$ + $SO_{4}^{2-}(aq)$ → $CaSO_{4}(s)$.'
          }
        ]
      }
    }
  ]
}
