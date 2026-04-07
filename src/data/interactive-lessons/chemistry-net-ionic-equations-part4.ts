export const chemNetIonicEquationsPart4Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni4-intro',
      type: 'text' as const,
      content: `
# 🧪 Precipitation Reactions

**Part 4 of 7 — Using Solubility Rules to Predict Precipitates**

Precipitation reactions are among the most common types you\'ll encounter in AP Chemistry. When two aqueous solutions are mixed, an **insoluble solid** (precipitate) may form. Your job is to predict **if** and **what** precipitates, then write the net ionic equation.
      `
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

### Example: Mix AgNO₃(aq) and NaCl(aq)

**Ions present:** Ag⁺, NO₃⁻, Na⁺, Cl⁻

**Possible new combinations:**
- Ag⁺ + Cl⁻ → AgCl — **Check:** Cl⁻ with Ag⁺ is an exception → **insoluble** ✓
- Na⁺ + NO₃⁻ → NaNO₃ — **Check:** Na⁺ always soluble → **soluble**

**Result:** AgCl precipitates!

$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$
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
| Lead(II) iodide | PbI₂ | Bright yellow |
| Lead(II) chloride | PbCl₂ | White |
| Barium sulfate | BaSO₄ | White |
| Lead(II) sulfate | PbSO₄ | White |
| Calcium carbonate | CaCO₃ | White |
| Iron(III) hydroxide | Fe(OH)₃ | Rust brown |
| Copper(II) hydroxide | Cu(OH)₂ | Blue |
| Iron(II) sulfide | FeS | Black |


---

### Net Ionic Patterns

All precipitation reactions follow the same net ionic pattern:

$$\\text{cation}(aq) + \\text{anion}(aq) \\rightarrow \\text{insoluble salt}(s)$$

The spectator ions are always the "other" pair that forms a soluble compound.
      `
    },
    {
      id: 'ni4-multi-step',
      type: 'text' as const,
      content: `
## 🧪 Multi-Step Example

**Mix: $\\text{FeCl}_3(aq) + 3\\text{NaOH}(aq) \\rightarrow$ ?**


---

### Step 1: Identify ions
Fe³⁺, Cl⁻, Na⁺, OH⁻


---

### Step 2: Swap partners
- Fe³⁺ + OH⁻ → Fe(OH)₃ — Solubility? OH⁻ insoluble with most metals → **insoluble**
- Na⁺ + Cl⁻ → NaCl — Solubility? Na⁺ always soluble → **soluble**


---

### Step 3: Molecular equation
$$\\text{FeCl}_3(aq) + 3\\text{NaOH}(aq) \\rightarrow \\text{Fe(OH)}_3(s) + 3\\text{NaCl}(aq)$$


---

### Step 4: Complete ionic equation
$$\\text{Fe}^{3+}(aq) + 3\\text{Cl}^-(aq) + 3\\text{Na}^+(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s) + 3\\text{Na}^+(aq) + 3\\text{Cl}^-(aq)$$


---

### Step 5: Net ionic equation (cancel Na⁺ and Cl⁻)
$$\\text{Fe}^{3+}(aq) + 3\\text{OH}^-(aq) \\rightarrow \\text{Fe(OH)}_3(s)$$

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
              'NaCl(aq) + KNO₃(aq)',
              'AgNO₃(aq) + KBr(aq)',
              'NaOH(aq) + KCl(aq)',
              'NH₄Cl(aq) + NaNO₃(aq)'
            ],
            correctAnswer: 1,
            explanation: 'AgNO₃ + KBr: Ag⁺ + Br⁻ → AgBr, which is insoluble (halides with Ag⁺ are exceptions). The other pairs all produce soluble products only.'
          },
          {
            question: 'What is the net ionic equation when BaCl₂(aq) is mixed with K₂SO₄(aq)?',
            options: [
              '$\\text{Ba}^{2+}(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s)$',
              '$\\text{Ba}^{2+}(aq) + 2\\text{Cl}^-(aq) + 2\\text{K}^+(aq) + \\text{SO}_4^{2-}(aq) \\rightarrow \\text{BaSO}_4(s) + 2\\text{KCl}(aq)$',
              '$\\text{K}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{KCl}(s)$',
              'No reaction occurs'
            ],
            correctAnswer: 0,
            explanation: 'Ba²⁺ + SO₄²⁻ → BaSO₄(s) is insoluble. K⁺ and Cl⁻ are spectators. Net ionic: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). Charge: (+2) + (−2) = 0 = 0 ✓.'
          },
          {
            question: 'When Pb(NO₃)₂(aq) is mixed with Na₂S(aq), the precipitate formed is:',
            options: [
              'NaNO₃',
              'PbS',
              'Pb(NO₃)₂',
              'Na₂S'
            ],
            correctAnswer: 1,
            explanation: 'Pb²⁺ + S²⁻ → PbS. Sulfides are generally insoluble except with Group 1 metals and NH₄⁺. Lead is not an exception, so PbS is a black precipitate.'
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
        hint1: 'Ca²⁺ + CO₃²⁻ → CaCO₃. Is it soluble or insoluble?',
        hint2: 'Possible products: KBr and NaNO₃. Are either insoluble?',
        hint3: 'Cu²⁺ + OH⁻ → Cu(OH)₂. Check solubility of hydroxides with transition metals.',
        explanation: '1) CaCO₃ — carbonates are insoluble except with Group 1/NH₄⁺. Ca is Group 2 → precipitate. 2) NR — KBr and NaNO₃ are both soluble. No driving force. 3) Cu(OH)₂ — hydroxides are insoluble with most metals. Cu is not an exception → blue precipitate.'
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
            label: 'AgNO₃(aq) + NaI(aq) produces a precipitate of',
            options: ['NaNO₃', 'AgI', 'AgNa', 'No precipitate']
          },
          {
            label: 'All nitrate salts are',
            options: ['insoluble', 'slightly soluble', 'soluble', 'gases']
          },
          {
            label: 'PbCl₂ is an exception to the rule that chlorides are generally',
            options: ['insoluble', 'soluble', 'gaseous', 'acidic']
          },
          {
            label: 'The spectator ions in the reaction AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) are',
            options: ['Ag⁺ and Cl⁻', 'Na⁺ and NO₃⁻', 'Ag⁺ and Na⁺', 'Cl⁻ and NO₃⁻']
          }
        ],
        correctAnswers: ['AgI', 'soluble', 'soluble', 'Na⁺ and NO₃⁻'],
        hint1: 'Ag⁺ + I⁻ → ? Halides with Ag⁺ are insoluble.',
        hint2: 'NO₃⁻ has no exceptions in the solubility rules.',
        hint3: 'Chlorides are generally _____, but Pb²⁺ is an exception.',
        explanation: 'AgI precipitates (halides with Ag⁺ are insoluble). All nitrates are soluble without exception. Chlorides are generally soluble, with Pb²⁺, Ag⁺, and Hg₂²⁺ as exceptions. Na⁺ and NO₃⁻ don\'t change → spectators.'
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
            explanation: 'Fe³⁺ + 3OH⁻ → Fe(OH)₃(s). Fe(OH)₃ is insoluble (rust-brown precipitate). Na⁺ and Cl⁻ are spectators. Charge check: (+3) + 3(−1) = 0 on left; 0 on right ✓.'
          },
          {
            question: 'A student mixes Ca(NO₃)₂(aq) with Na₂SO₄(aq). What happens?',
            options: [
              'No reaction — both products are soluble',
              'CaSO₄ precipitates — sulfates with Ca²⁺ are insoluble',
              'NaNO₃ precipitates — nitrates with Na⁺ are insoluble',
              'Ca(NO₃)₂ decomposes into CaO and NO₂'
            ],
            correctAnswer: 1,
            explanation: 'CaSO₄ is one of the exceptions to sulfate solubility (along with BaSO₄, PbSO₄, SrSO₄). It forms a white precipitate. The net ionic equation is Ca²⁺(aq) + SO₄²⁻(aq) → CaSO₄(s).'
          }
        ]
      }
    }
  ]
}
