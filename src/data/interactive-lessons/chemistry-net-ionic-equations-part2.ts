export const chemNetIonicEquationsPart2Data = {
  topicSlug: 'net-ionic-equations',
  sections: [
    {
      id: 'ni2-intro',
      type: 'text' as const,
      content: `# 🧪 Complete Ionic Equations

**Part 2 of 7 — Breaking Strong Electrolytes into Ions**

---

### Topics in This Part

| Section |
|---------|
| ✍️ Rules for Writing Complete Ionic Equations |
| What Gets Split into Ions? |
| The Six Strong Acids (memorize these!) |
| Strong Bases |
| 📏 Solubility Rules |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ni2-rules',
      type: 'text' as const,
      content: `
## ✍️ Rules for Writing Complete Ionic Equations

### What Gets Split into Ions?

Only **aqueous strong electrolytes** are written as separated ions:

| Split into ions | Keep as molecular formula |
|----------------|--------------------------|
| Soluble ionic compounds — $(aq)$ | Solids — $(s)$ |
| Strong acids — $(aq)$ | Liquids — $(l)$ |
| Strong bases — $(aq)$ | Gases — $(g)$ |
| | Weak electrolytes — $(aq)$ |
| | Non-electrolytes |


---

### The Six Strong Acids (memorize these!)

$$\\boxed{\\text{HCl, HBr, HI, HNO}_3\\text{, H}_2\\text{SO}_4\\text{, HClO}_4}$$

> 💡 **Tip:** Memorize these six strong acids — everything else is weak. A common mnemonic: **HCl, HBr, HI** (the binary acids) + **HNO₃, H₂SO₄, HClO₄** (the oxy-acids).


---

### Strong Bases

$$\\boxed{\\text{LiOH, NaOH, KOH, Ca(OH)}_2\\text{, Sr(OH)}_2\\text{, Ba(OH)}_2}$$


---

> ⚠️ **Warning:** Weak acids (HF, CH₃COOH, H₂CO₃, H₃PO₄) and weak bases (NH₃) are **NOT** split into ions — they stay as complete formulas. This is the #1 AP exam mistake!
      `
    },
    {
      id: 'ni2-solubility-rules',
      type: 'text' as const,
      content: `
## 📏 Solubility Rules

To determine if an ionic compound is $(aq)$ or $(s)$, use the solubility rules:


---

### Generally Soluble (aqueous)

| Ion | Exception |
|-----|-----------|
| Na⁺, K⁺, NH₄⁺ | No exceptions — always soluble |
| NO₃⁻ (nitrate) | No exceptions |
| CH₃COO⁻ (acetate) | No exceptions |
| Cl⁻, Br⁻, I⁻ | Except with Ag⁺, Pb²⁺, Hg₂²⁺ |
| SO₄²⁻ | Except with Ba²⁺, Pb²⁺, Ca²⁺, Sr²⁺ |


---

### Generally Insoluble (solid precipitate)

| Ion | Exception |
|-----|-----------|
| OH⁻ | Except with Group 1 metals, Ba²⁺, Sr²⁺, Ca²⁺ (slightly) |
| S²⁻ | Except with Group 1 metals, NH₄⁺ |
| CO₃²⁻ | Except with Group 1 metals, NH₄⁺ |
| PO₄³⁻ | Except with Group 1 metals, NH₄⁺ |


---

> 🔑 **Key Concept:** If an ionic compound is **soluble** → label $(aq)$ → split into ions. If an ionic compound is **insoluble** → label $(s)$ → keep as formula.
      `
    },
    {
      id: 'ni2-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** Write the complete ionic equation for:
>
> $$\\text{AgNO}_3(aq) + \\text{NaCl}(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$$

> **Solution:**


---

### Step 1: Identify what splits

| Species | Type | Action |
|---------|------|--------|
| AgNO₃(aq) | Soluble salt | Split → Ag⁺ + NO₃⁻ |
| NaCl(aq) | Soluble salt | Split → Na⁺ + Cl⁻ |
| AgCl(s) | Insoluble solid | Keep as AgCl(s) |
| NaNO₃(aq) | Soluble salt | Split → Na⁺ + NO₃⁻ |


---

### Step 2: Write the complete ionic equation

$$\\boxed{\\text{Ag}^+(aq) + \\text{NO}_3^-(aq) + \\text{Na}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s) + \\text{Na}^+(aq) + \\text{NO}_3^-(aq)}$$


---

### Step 3: Verify

- Atoms balanced ✓
- Charges balanced: $(+1) + (-1) + (+1) + (-1) = 0$ on left; $0 + (+1) + (-1) = 0$ on right ✓
      `
    },
    {
      id: 'ni2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Complete Ionic Equations Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which species should be written as separated ions in a complete ionic equation?',
            options: [
              'AgCl(s)',
              'H₂O(l)',
              'NaOH(aq)',
              'CH₃COOH(aq)'
            ],
            correctAnswer: 2,
            explanation: 'NaOH(aq) is a strong base dissolved in water — a strong electrolyte that fully dissociates into Na⁺(aq) and OH⁻(aq). AgCl(s) is a solid, H₂O(l) is a liquid, and CH₃COOH is a weak acid — none of these are split.'
          },
          {
            question: 'According to solubility rules, which compound is INSOLUBLE?',
            options: [
              'NaCl',
              'KNO₃',
              'BaSO₄',
              'NH₄Br'
            ],
            correctAnswer: 2,
            explanation: 'BaSO₄ is insoluble — sulfate is generally soluble EXCEPT with Ba²⁺, Pb²⁺, Ca²⁺, and Sr²⁺. NaCl, KNO₃, and NH₄Br are all soluble.'
          },
          {
            question: 'When writing Ca(OH)₂(aq) in a complete ionic equation, it becomes:',
            options: [
              'Ca²⁺(aq) + OH⁻(aq)',
              'Ca²⁺(aq) + 2OH⁻(aq)',
              'Ca(aq) + 2OH(aq)',
              'Ca²⁺(aq) + O²⁻(aq) + H⁺(aq)'
            ],
            correctAnswer: 1,
            explanation: 'Ca(OH)₂ dissociates into one Ca²⁺ ion and TWO OH⁻ ions. The formula unit contains 2 hydroxide groups, so you must write 2OH⁻(aq).'
          }
        ]
      }
    },
    {
      id: 'ni2-solubility-drill',
      type: 'input-boxes' as const,
      content: `
**Solubility Predictions** 🧮

For each ionic compound, type **soluble** or **insoluble**.

**1)** PbCl₂

**2)** Na₂CO₃

**3)** Fe(OH)₃
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['insoluble', 'soluble', 'insoluble'],
        hint1: 'Chlorides are generally soluble, but Pb²⁺ is one of the exceptions.',
        hint2: 'Carbonates are generally insoluble, but Na⁺ is an exception.',
        hint3: 'Hydroxides are generally insoluble. Is Fe a Group 1 metal or Ba/Sr/Ca?',
        explanation: '1) PbCl₂ — Cl⁻ is soluble EXCEPT with Ag⁺, Pb²⁺, Hg₂²⁺ → insoluble. 2) Na₂CO₃ — CO₃²⁻ is insoluble EXCEPT with Group 1 and NH₄⁺. Na⁺ is Group 1 → soluble. 3) Fe(OH)₃ — OH⁻ is insoluble except with Group 1 and Ba/Sr/Ca. Fe is not in those exceptions → insoluble.'
      }
    },
    {
      id: 'ni2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Complete Ionic Equation Practice** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a complete ionic equation, HNO₃(aq) is written as',
            options: ['HNO₃', 'H⁺ + NO₃⁻', 'H + N + 3O', 'H⁺ + N⁵⁺ + 3O²⁻']
          },
          {
            label: 'A precipitate in a complete ionic equation is written',
            options: ['as separated ions', 'as a complete formula', 'as atoms', 'it is removed']
          },
          {
            label: 'NH₄NO₃ dissolved in water is',
            options: ['insoluble', 'a weak electrolyte', 'soluble — split into NH₄⁺ and NO₃⁻', 'non-electrolyte']
          },
          {
            label: 'H₂CO₃(aq) in a complete ionic equation is written as',
            options: ['2H⁺ + CO₃²⁻', 'H₂CO₃ (kept molecular)', 'H₂ + C + 3O', 'H⁺ + HCO₃⁻']
          }
        ],
        correctAnswers: ['H⁺ + NO₃⁻', 'as a complete formula', 'soluble — split into NH₄⁺ and NO₃⁻', 'H₂CO₃ (kept molecular)'],
        hint1: 'HNO₃ is a strong acid — it fully dissociates.',
        hint2: 'Precipitates are solids. Do solids dissociate?',
        hint3: 'Both NH₄⁺ and NO₃⁻ always form soluble compounds.',
        explanation: 'HNO₃ is a strong acid → split into H⁺ + NO₃⁻. Precipitates are solids and are kept as complete formulas. NH₄NO₃ is soluble (both ions always soluble) → split. H₂CO₃ is a weak acid → kept as molecular formula.'
      }
    },
    {
      id: 'ni2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Complete Ionic Equations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'How many total ions appear on the reactant side of the complete ionic equation for: Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s) + 2NaCl(aq)?',
            options: [
              '4',
              '5',
              '6',
              '8'
            ],
            correctAnswer: 2,
            explanation: 'Na₂SO₄(aq) → 2Na⁺ + SO₄²⁻ (3 ions). BaCl₂(aq) → Ba²⁺ + 2Cl⁻ (3 ions). Total = 6 ions on the reactant side. Note: BaSO₄(s) stays molecular on the product side.'
          },
          {
            question: 'Which complete ionic equation is correct for HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)?',
            options: [
              '$\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{HCl}(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 1,
            explanation: 'HCl (strong acid), NaOH (strong base), and NaCl (soluble salt) are all strong electrolytes in aqueous solution — all three are split into ions. H₂O(l) stays molecular. The correct complete ionic equation is H⁺ + Cl⁻ + Na⁺ + OH⁻ → Na⁺ + Cl⁻ + H₂O.'
          }
        ]
      }
    }
  ]
}
