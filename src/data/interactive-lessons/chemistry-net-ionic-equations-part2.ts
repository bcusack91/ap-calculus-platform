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

> 💡 **Tip:** Memorize these six strong acids — everything else is weak. A common mnemonic: **HCl, HBr, HI** (the binary acids) + **$HNO_{3}$, $H_{2}SO_{4}$, $HClO_{4}$** (the oxy-acids).


---

### Strong Bases

$$\\boxed{\\text{LiOH, NaOH, KOH, Ca(OH)}_2\\text{, Sr(OH)}_2\\text{, Ba(OH)}_2}$$


---

> ⚠️ **Warning:** Weak acids (HF, $CH_{3}COOH$, $H_{2}CO_{3}$, $H_{3}PO_{4}$) and weak bases $(NH_{3})$ are **NOT** split into ions — they stay as complete formulas. This is the #1 AP exam mistake!
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
| $Na^{+}$, $K^{+}$, $NH_{4}^{+}$ | No exceptions — always soluble |
| $NO_{3}^{-}$ (nitrate) | No exceptions |
| $CH_{3}COO^{-}$ (acetate) | No exceptions |
| $Cl^{-}$, $Br^{-}$, $I^{-}$ | Except with $Ag^{+}$, $Pb^{2+}$, $Hg_{2}^{2+}$ |
| $SO_{4}^{2-}$ | Except with $Ba^{2+}$, $Pb^{2+}$, $Ca^{2+}$, $Sr^{2+}$ |


---

### Generally Insoluble (solid precipitate)

| Ion | Exception |
|-----|-----------|
| $OH^{-}$ | Except with Group 1 metals, $Ba^{2+}$, $Sr^{2+}$, $Ca^{2+}$ (slightly) |
| $S^{2-}$ | Except with Group 1 metals, $NH_{4}^{+}$ |
| $CO_{3}^{2-}$ | Except with Group 1 metals, $NH_{4}^{+}$ |
| $PO_{4}^{3-}$ | Except with Group 1 metals, $NH_{4}^{+}$ |


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
| $AgNO_{3}(aq)$ | Soluble salt | Split → $Ag^{+}$ + $NO_{3}^{-}$ |
| NaCl(aq) | Soluble salt | Split → $Na^{+}$ + $Cl^{-}$ |
| AgCl(s) | Insoluble solid | Keep as AgCl(s) |
| $NaNO_{3}(aq)$ | Soluble salt | Split → $Na^{+}$ + $NO_{3}^{-}$ |


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
              '$H_{2}O(l)$',
              'NaOH(aq)',
              '$CH_{3}COOH(aq)$'
            ],
            correctAnswer: 2,
            explanation: 'NaOH(aq) is a strong base dissolved in water — a strong electrolyte that fully dissociates into $Na^{+}(aq)$ and $OH^{-}(aq)$. AgCl(s) is a solid, $H_{2}O(l)$ is a liquid, and $CH_{3}COOH$ is a weak acid — none of these are split.'
          },
          {
            question: 'According to solubility rules, which compound is INSOLUBLE?',
            options: [
              'NaCl',
              '$KNO_{3}$',
              '$BaSO_{4}$',
              '$NH_{4}Br$'
            ],
            correctAnswer: 2,
            explanation: '$BaSO_{4}$ is insoluble — sulfate is generally soluble EXCEPT with $Ba^{2+}$, $Pb^{2+}$, $Ca^{2+}$, and $Sr^{2+}$. NaCl, $KNO_{3}$, and $NH_{4}Br$ are all soluble.'
          },
          {
            question: 'When writing $Ca(OH)_{2}(aq)$ in a complete ionic equation, it becomes:',
            options: [
              '$Ca^{2+}(aq)$ + $OH^{-}(aq)$',
              '$Ca^{2+}(aq)$ + $2OH^{-}(aq)$',
              'Ca(aq) + 2OH(aq)',
              '$Ca^{2+}(aq)$ + $O^{2-}(aq)$ + $H^{+}(aq)$'
            ],
            correctAnswer: 1,
            explanation: '$Ca(OH)_{2}$ dissociates into one $Ca^{2+}$ ion and TWO $OH^{-}$ ions. The formula unit contains 2 hydroxide groups, so you must write $2OH^{-}(aq)$.'
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

**1)** $PbCl_{2}$

**2)** $Na_{2}CO_{3}$

**3)** $Fe(OH)_{3}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['insoluble', 'soluble', 'insoluble'],
        hint1: 'Chlorides are generally soluble, but $Pb^{2+}$ is one of the exceptions.',
        hint2: 'Carbonates are generally insoluble, but $Na^{+}$ is an exception.',
        hint3: 'Hydroxides are generally insoluble. Is Fe a Group 1 metal or Ba/Sr/Ca?',
        explanation: '1) $PbCl_{2}$ — $Cl^{-}$ is soluble EXCEPT with $Ag^{+}$, $Pb^{2+}$, $Hg_{2}^{2+}$ → insoluble. 2) $Na_{2}CO_{3}$ — $CO_{3}^{2-}$ is insoluble EXCEPT with Group 1 and $NH_{4}^{+}$. $Na^{+}$ is Group 1 → soluble. 3) $Fe(OH)_{3}$ — $OH^{-}$ is insoluble except with Group 1 and Ba/Sr/Ca. Fe is not in those exceptions → insoluble.'
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
            label: 'In a complete ionic equation, $HNO_{3}(aq)$ is written as',
            options: ['$HNO_{3}$', '$H^{+}$ + $NO_{3}^{-}$', 'H + N + 3O', '$H^{+}$ + $N^{5+}$ + $3O^{2-}$']
          },
          {
            label: 'A precipitate in a complete ionic equation is written',
            options: ['as separated ions', 'as a complete formula', 'as atoms', 'it is removed']
          },
          {
            label: '$NH_{4}NO_{3}$ dissolved in water is',
            options: ['insoluble', 'a weak electrolyte', 'soluble — split into $NH_{4}^{+}$ and $NO_{3}^{-}$', 'non-electrolyte']
          },
          {
            label: '$H_{2}CO_{3}(aq)$ in a complete ionic equation is written as',
            options: ['$2H^{+}$ + $CO_{3}^{2-}$', '$H_{2}CO_{3}$ (kept molecular)', '$H_{2}$ + C + 3O', '$H^{+}$ + $HCO_{3}^{-}$']
          }
        ],
        correctAnswers: ['$H^{+}$ + $NO_{3}^{-}$', 'as a complete formula', 'soluble — split into $NH_{4}^{+}$ and $NO_{3}^{-}$', '$H_{2}CO_{3}$ (kept molecular)'],
        hint1: '$HNO_{3}$ is a strong acid — it fully dissociates.',
        hint2: 'Precipitates are solids. Do solids dissociate?',
        hint3: 'Both $NH_{4}^{+}$ and $NO_{3}^{-}$ always form soluble compounds.',
        explanation: '$HNO_{3}$ is a strong acid → split into $H^{+}$ + $NO_{3}^{-}$. Precipitates are solids and are kept as complete formulas. $NH_{4}NO_{3}$ is soluble (both ions always soluble) → split. $H_{2}CO_{3}$ is a weak acid → kept as molecular formula.'
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
            question: 'How many total ions appear on the reactant side of the complete ionic equation for: $Na_{2}SO_{4}(aq)$ + $BaCl_{2}(aq)$ → $BaSO_{4}(s)$ + 2NaCl(aq)?',
            options: [
              '4',
              '5',
              '6',
              '8'
            ],
            correctAnswer: 2,
            explanation: '$Na_{2}SO_{4}(aq)$ → $2Na^{+}$ + $SO_{4}^{2-}$ (3 ions). $BaCl_{2}(aq)$ → $Ba^{2+}$ + $2Cl^{-}$ (3 ions). Total = 6 ions on the reactant side. Note: $BaSO_{4}(s)$ stays molecular on the product side.'
          },
          {
            question: 'Which complete ionic equation is correct for HCl(aq) + NaOH(aq) → NaCl(aq) + $H_{2}O(l)$?',
            options: [
              '$\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{H}^+(aq) + \\text{Cl}^-(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)$',
              '$\\text{HCl}(aq) + \\text{Na}^+(aq) + \\text{OH}^-(aq) \\rightarrow \\text{Na}^+(aq) + \\text{Cl}^-(aq) + \\text{H}_2\\text{O}(l)$'
            ],
            correctAnswer: 1,
            explanation: 'HCl (strong acid), NaOH (strong base), and NaCl (soluble salt) are all strong electrolytes in aqueous solution — all three are split into ions. $H_{2}O(l)$ stays molecular. The correct complete ionic equation is $H^{+}$ + $Cl^{-}$ + $Na^{+}$ + $OH^{-}$ → $Na^{+}$ + $Cl^{-}$ + $H_{2}O$.'
          }
        ]
      }
    }
  ]
}
