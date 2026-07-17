export const chemReactionTypesPart5Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt5-intro',
      type: 'text' as const,
      content: `# 🔮 Predicting Products

**Part 5 of 7 — Using Reaction Types to Predict What Forms**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Product Prediction Strategy |
| Step 1: Classify the Reactants |
| Step 2: Apply the Pattern |
| Step 3: Balance the Equation |
| 🎯 Predicting Synthesis Products |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rt5-strategy',
      type: 'text' as const,
      content: `
## 🎯 Product Prediction Strategy

> 🔑 **Key Concept:** The key to predicting products is to first **identify the reaction type**, then apply the pattern for that type.

### Step 1: Classify the Reactants

| Reactant Pattern | Likely Reaction Type |
|-----------------|---------------------|
| Two or more elements/compounds combining | Synthesis |
| One compound alone (+ heat/energy) | Decomposition |
| Element + compound | Single replacement |
| Two ionic compounds in solution | Double replacement |
| Organic compound + $O_{2}$ | Combustion |


---

### Step 2: Apply the Pattern

| Reaction Type | Product Pattern |
|--------------|----------------|
| Synthesis | One compound |
| Decomposition | Simpler substances |
| Single replacement | New element + new compound |
| Double replacement | Two new compounds (swap ions) |
| Combustion | $CO_{2}$ + $H_{2}O$ |


---

### Step 3: Balance the Equation

After predicting the products, balance the equation using the coefficient method.
      `
    },
    {
      id: 'rt5-synthesis-predictions',
      type: 'text' as const,
      content: `
## 🎯 Predicting Synthesis Products

### Metal + Nonmetal → Ionic Compound

Use charges to determine the formula:

| Reactants | Charges | Product |
|-----------|---------|---------|
| Na + $Cl_{2}$ | $Na^{+}$, $Cl^{-}$ | NaCl |
| Mg + $O_{2}$ | $Mg^{2+}$, $O^{2-}$ | MgO |
| Al + $Br_{2}$ | $Al^{3+}$, $Br^{-}$ | $AlBr_{3}$ |
| Ca + $N_{2}$ | $Ca^{2+}$, $N^{3-}$ | $Ca_{3}N_{2}$ |


---

### Nonmetal Oxide + Water → Acid

| Oxide | + $H_{2}O$ | Acid |
|-------|--------|------|
| $CO_{2}$ | $H_{2}O$ | $H_{2}CO_{3}$ |
| $SO_{3}$ | $H_{2}O$ | $H_{2}SO_{4}$ |
| $N_{2}O_{5}$ | $H_{2}O$ | $2HNO_{3}$ |


---

### Metal Oxide + Water → Base (Metal Hydroxide)

| Oxide | + $H_{2}O$ | Base |
|-------|--------|------|
| $Na_{2}O$ | $H_{2}O$ | 2NaOH |
| CaO | $H_{2}O$ | $Ca(OH)_{2}$ |
| $K_{2}O$ | $H_{2}O$ | 2KOH |
      `
    },
    {
      id: 'rt5-decomposition-predictions',
      type: 'text' as const,
      content: `
## 🔮 Predicting Decomposition Products

### Common Decomposition Patterns

| Compound Type | Products | Example |
|--------------|----------|---------|
| Metal carbonate | Metal oxide + $CO_{2}$ | $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$ |
| Metal hydroxide | Metal oxide + $H_{2}O$ | $\\text{Mg(OH)}_2 \\rightarrow \\text{MgO} + \\text{H}_2\\text{O}$ |
| Metal chlorate | Metal chloride + $O_{2}$ | $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$ |
| Metal oxide | Metal + $O_{2}$ | $2\\text{HgO} \\rightarrow 2\\text{Hg} + \\text{O}_2$ |
| Acid | Nonmetal oxide + $H_{2}O$ | $\\text{H}_2\\text{CO}_3 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ |


---

### Key Memory Tool

> 💡 **Tip:** Think of decomposition as "un-synthesizing" — the reverse of combining:

- Carbonates → oxide + $CO_{2}$
- Hydroxides → oxide + $H_{2}O$  
- Chlorates → chloride + $O_{2}$
      `
    },
    {
      id: 'rt5-replacement-predictions',
      type: 'text' as const,
      content: `
## 🔮 Predicting Replacement Products

### Single Replacement

1. Check the activity series — will the reaction occur?
2. The free element replaces the corresponding element in the compound

$$\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$$

Zn replaces Cu because Zn is higher in the activity series.

> ⚠️ **Warning:** A common error is forgetting to check the activity series. If the free element is **below** the element in the compound, write **NR** (no reaction).


---

### Double Replacement

1. Identify the cations and anions
2. Swap partners: $cation_{1}$ + $anion_{2}$ and $cation_{2}$ + $anion_{1}$
3. Write correct formulas using ion charges
4. Check for a driving force (precipitate, gas, or water)

$$\\text{Pb(NO}_3)_2 + 2\\text{KI} \\rightarrow \\text{PbI}_2\\downarrow + 2\\text{KNO}_3$$

- $Pb^{2+}$ pairs with $I^{-}$ → $PbI_{2}$ (insoluble precipitate — driving force!)
- $K^{+}$ pairs with $NO_{3}^{-}$ → $KNO_{3}$ (soluble)
      `
    },
    {
      id: 'rt5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Product Prediction Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Predict the product(s) of: $\\text{Ba} + \\text{O}_2 \\rightarrow$ ?',
            options: [
              '$BaO_{2}$',
              'BaO',
              '$Ba_{2}O$',
              '$Ba_{2}O_{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Ba is in Group 2 (charge +2), O has charge −2. The formula is BaO (1:1 ratio). Balanced: $2\\text{Ba} + \\text{O}_2 \\rightarrow 2\\text{BaO}$. This is a synthesis reaction.'
          },
          {
            question: 'What are the products when sodium carbonate $(Na_{2}CO_{3})$ is heated?',
            options: [
              'Na + $CO_{3}$',
              '$Na_{2}O$ + $CO_{2}$',
              'NaO + $CO_{2}$',
              '$Na_{2}O$ + C + $O_{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Metal carbonates decompose into metal oxide + $CO_{2}$. $Na_{2}CO_{3}$ → $Na_{2}O$ + $CO_{2}$. The metal oxide retains the metal\'s original charge relationship.'
          },
          {
            question: 'Predict: $\\text{Al} + \\text{NiCl}_2 \\rightarrow$ ? (Al is above Ni in activity series)',
            options: [
              '$AlCl_{2}$ + Ni',
              '$AlCl_{3}$ + Ni (after balancing)',
              'No reaction',
              'AlNi + $Cl_{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Al (charge +3) replaces Ni (charge +2) in $NiCl_{2}$. Product: $AlCl_{3}$ + Ni. Balanced: $2\\text{Al} + 3\\text{NiCl}_2 \\rightarrow 2\\text{AlCl}_3 + 3\\text{Ni}$.'
          },
          {
            question: 'Predict the products of: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow$ ?',
            options: [
              'NaCl + $BaSO_{4}$',
              'NaBa + $SO_{4}Cl_{2}$',
              '$Na_{2}Cl_{2}$ + $BaSO_{4}$',
              'No reaction'
            ],
            correctAnswer: 0,
            explanation: 'Double replacement: swap the cations. $Na^{+}$ pairs with $Cl^{-}$ → NaCl. $Ba^{2+}$ pairs with $SO_{4}^{2-}$ → $BaSO_{4}$ (insoluble precipitate — driving force!). Balanced: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow 2\\text{NaCl} + \\text{BaSO}_4\\downarrow$.'
          }
        ]
      }
    },
    {
      id: 'rt5-predict-drill',
      type: 'input-boxes' as const,
      content: `
**Predict the Products** 🧮

Write the chemical formula of the main product. Use standard notation (no spaces, no charges).

**1)** Synthesis: $\\text{K} + \\text{Cl}_2 \\rightarrow$ ? (K has charge +1, Cl has charge −1)

**2)** Decomposition: $\\text{MgCO}_3 \\xrightarrow{\\Delta}$ ? + $CO_{2}$ — what is the other product?

**3)** Combustion: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow$ ? + $2H_{2}O$ — what is the other product?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['KCl', 'MgO', 'CO2'],
        hint1: '$K^{+}$ and $Cl^{-}$ combine 1:1.',
        hint2: 'Metal carbonates decompose into metal oxide + $CO_{2}$.',
        hint3: 'Complete combustion of hydrocarbons produces $CO_{2}$ + $H_{2}O$.',
        explanation: '1) K (charge +1) + Cl (charge −1) → KCl. Balanced: $2\\text{K} + \\text{Cl}_2 \\rightarrow 2\\text{KCl}$. 2) $MgCO_{3}$ → MgO + $CO_{2}$ (metal carbonate decomposition pattern). 3) $CH_{4}$ + $2O_{2}$ → $CO_{2}$ + $2H_{2}O$ (complete combustion produces $CO_{2}$).'
      }
    },
    {
      id: 'rt5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Prediction Strategy — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When a metal and nonmetal react, you can predict the product by using their',
            options: ['atomic masses', 'ion charges', 'electron configurations', 'melting points']
          },
          {
            label: 'To predict if a single replacement reaction occurs, you consult the',
            options: ['periodic table period', 'solubility rules', 'activity series', 'electronegativity chart']
          },
          {
            label: 'Metal hydroxides decompose into metal oxide and',
            options: ['$H_{2}$', '$H_{2}O$', '$O_{2}$', '$CO_{2}$']
          },
          {
            label: 'In double replacement, if no precipitate, gas, or water forms, then',
            options: ['the reaction is endothermic', 'no reaction occurs', 'synthesis happens instead', 'the reaction is very fast']
          }
        ],
        correctAnswers: ['ion charges', 'activity series', '$H_{2}O$', 'no reaction occurs'],
        hint1: 'The formula of an ionic compound is determined by balancing ion charges.',
        hint2: 'The activity series tells you which element can displace another.',
        hint3: 'Hydroxide = $OH^{-}$. When two $OH^{-}$ combine with a metal oxide...',
        explanation: 'Ion charges determine ionic compound formulas. The activity series predicts single replacement feasibility. Metal hydroxides → metal oxide + $H_{2}O$. Double replacement needs a driving force (precipitate, gas, or water), otherwise NR.'
      }
    },
    {
      id: 'rt5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Predicting Products** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'What are the products of: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow$ ?',
            options: [
              '$NaSO_{4}$ + $H_{2}O$',
              '$Na_{2}SO_{4}$ + $2H_{2}O$',
              '$Na_{2}SO_{4}$ + $H_{2}$',
              '$NaHSO_{4}$ + NaOH'
            ],
            correctAnswer: 1,
            explanation: 'This is a neutralization (double replacement): acid + base → salt + water. $Na^{+}$ (×2) pairs with $SO_{4}^{2-}$ → $Na_{2}SO_{4}$. $H^{+}$ pairs with $OH^{-}$ → $H_{2}O$. Balanced: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$.'
          },
          {
            question: 'An unknown compound contains only carbon and hydrogen. When burned in excess $O_{2}$, the products will be:',
            options: [
              'CO + $H_{2}$',
              'C + $H_{2}O$',
              '$CO_{2}$ + $H_{2}O$',
              '$CO_{2}$ + $H_{2}$'
            ],
            correctAnswer: 2,
            explanation: 'A compound containing only C and H is a hydrocarbon. Complete combustion of any hydrocarbon in excess $O_{2}$ always produces $CO_{2}$ + $H_{2}O$.'
          }
        ]
      }
    }
  ]
}
