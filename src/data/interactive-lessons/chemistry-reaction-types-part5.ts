export const chemReactionTypesPart5Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt5-intro',
      type: 'text' as const,
      content: `
# 🔮 Predicting Products

**Part 5 of 7 — Using Reaction Types to Predict What Forms**

One of the most important skills in chemistry is being able to look at reactants and predict what the products will be. The key is to first **identify the reaction type**, then apply the pattern for that type.
      `
    },
    {
      id: 'rt5-strategy',
      type: 'text' as const,
      content: `
## Product Prediction Strategy

### Step 1: Classify the Reactants

| Reactant Pattern | Likely Reaction Type |
|-----------------|---------------------|
| Two or more elements/compounds combining | Synthesis |
| One compound alone (+ heat/energy) | Decomposition |
| Element + compound | Single replacement |
| Two ionic compounds in solution | Double replacement |
| Organic compound + O₂ | Combustion |

### Step 2: Apply the Pattern

| Reaction Type | Product Pattern |
|--------------|----------------|
| Synthesis | One compound |
| Decomposition | Simpler substances |
| Single replacement | New element + new compound |
| Double replacement | Two new compounds (swap ions) |
| Combustion | CO₂ + H₂O |

### Step 3: Balance the Equation

After predicting the products, balance the equation using the coefficient method.
      `
    },
    {
      id: 'rt5-synthesis-predictions',
      type: 'text' as const,
      content: `
## Predicting Synthesis Products

### Metal + Nonmetal → Ionic Compound

Use charges to determine the formula:

| Reactants | Charges | Product |
|-----------|---------|---------|
| Na + Cl₂ | Na⁺, Cl⁻ | NaCl |
| Mg + O₂ | Mg²⁺, O²⁻ | MgO |
| Al + Br₂ | Al³⁺, Br⁻ | AlBr₃ |
| Ca + N₂ | Ca²⁺, N³⁻ | Ca₃N₂ |

### Nonmetal Oxide + Water → Acid

| Oxide | + H₂O | Acid |
|-------|--------|------|
| CO₂ | H₂O | H₂CO₃ |
| SO₃ | H₂O | H₂SO₄ |
| N₂O₅ | H₂O | 2HNO₃ |

### Metal Oxide + Water → Base (Metal Hydroxide)

| Oxide | + H₂O | Base |
|-------|--------|------|
| Na₂O | H₂O | 2NaOH |
| CaO | H₂O | Ca(OH)₂ |
| K₂O | H₂O | 2KOH |
      `
    },
    {
      id: 'rt5-decomposition-predictions',
      type: 'text' as const,
      content: `
## Predicting Decomposition Products

### Common Decomposition Patterns

| Compound Type | Products | Example |
|--------------|----------|---------|
| Metal carbonate | Metal oxide + CO₂ | $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$ |
| Metal hydroxide | Metal oxide + H₂O | $\\text{Mg(OH)}_2 \\rightarrow \\text{MgO} + \\text{H}_2\\text{O}$ |
| Metal chlorate | Metal chloride + O₂ | $2\\text{KClO}_3 \\rightarrow 2\\text{KCl} + 3\\text{O}_2$ |
| Metal oxide | Metal + O₂ | $2\\text{HgO} \\rightarrow 2\\text{Hg} + \\text{O}_2$ |
| Acid | Nonmetal oxide + H₂O | $\\text{H}_2\\text{CO}_3 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ |

### Key Memory Tool

Think of decomposition as "un-synthesizing" — the reverse of combining:
- Carbonates → oxide + CO₂
- Hydroxides → oxide + H₂O  
- Chlorates → chloride + O₂
      `
    },
    {
      id: 'rt5-replacement-predictions',
      type: 'text' as const,
      content: `
## Predicting Replacement Products

### Single Replacement

1. Check the activity series — will the reaction occur?
2. The free element replaces the corresponding element in the compound

$$\\text{Zn} + \\text{CuSO}_4 \\rightarrow \\text{ZnSO}_4 + \\text{Cu}$$

Zn replaces Cu because Zn is higher in the activity series.

### Double Replacement

1. Identify the cations and anions
2. Swap partners: cation₁ + anion₂ and cation₂ + anion₁
3. Write correct formulas using ion charges
4. Check for a driving force (precipitate, gas, or water)

$$\\text{Pb(NO}_3)_2 + 2\\text{KI} \\rightarrow \\text{PbI}_2\\downarrow + 2\\text{KNO}_3$$

- Pb²⁺ pairs with I⁻ → PbI₂ (insoluble precipitate — driving force!)
- K⁺ pairs with NO₃⁻ → KNO₃ (soluble)
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
              'BaO₂',
              'BaO',
              'Ba₂O',
              'Ba₂O₃'
            ],
            correctAnswer: 1,
            explanation: 'Ba is in Group 2 (charge +2), O has charge −2. The formula is BaO (1:1 ratio). Balanced: $2\\text{Ba} + \\text{O}_2 \\rightarrow 2\\text{BaO}$. This is a synthesis reaction.'
          },
          {
            question: 'What are the products when sodium carbonate (Na₂CO₃) is heated?',
            options: [
              'Na + CO₃',
              'Na₂O + CO₂',
              'NaO + CO₂',
              'Na₂O + C + O₂'
            ],
            correctAnswer: 1,
            explanation: 'Metal carbonates decompose into metal oxide + CO₂. Na₂CO₃ → Na₂O + CO₂. The metal oxide retains the metal\'s original charge relationship.'
          },
          {
            question: 'Predict: $\\text{Al} + \\text{NiCl}_2 \\rightarrow$ ? (Al is above Ni in activity series)',
            options: [
              'AlCl₂ + Ni',
              'AlCl₃ + Ni (after balancing)',
              'No reaction',
              'AlNi + Cl₂'
            ],
            correctAnswer: 1,
            explanation: 'Al (charge +3) replaces Ni (charge +2) in NiCl₂. Product: AlCl₃ + Ni. Balanced: $2\\text{Al} + 3\\text{NiCl}_2 \\rightarrow 2\\text{AlCl}_3 + 3\\text{Ni}$.'
          },
          {
            question: 'Predict the products of: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow$ ?',
            options: [
              'NaCl + BaSO₄',
              'NaBa + SO₄Cl₂',
              'Na₂Cl₂ + BaSO₄',
              'No reaction'
            ],
            correctAnswer: 0,
            explanation: 'Double replacement: swap the cations. Na⁺ pairs with Cl⁻ → NaCl. Ba²⁺ pairs with SO₄²⁻ → BaSO₄ (insoluble precipitate — driving force!). Balanced: $\\text{Na}_2\\text{SO}_4 + \\text{BaCl}_2 \\rightarrow 2\\text{NaCl} + \\text{BaSO}_4\\downarrow$.'
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

1) Synthesis: $\\text{K} + \\text{Cl}_2 \\rightarrow$ ? (K has charge +1, Cl has charge −1)

2) Decomposition: $\\text{MgCO}_3 \\xrightarrow{\\Delta}$ ? + CO₂ — what is the other product?

3) Combustion: $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow$ ? + 2H₂O — what is the other product?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['KCl', 'MgO', 'CO2'],
        hint1: 'K⁺ and Cl⁻ combine 1:1.',
        hint2: 'Metal carbonates decompose into metal oxide + CO₂.',
        hint3: 'Complete combustion of hydrocarbons produces CO₂ + H₂O.',
        explanation: '1) K (charge +1) + Cl (charge −1) → KCl. Balanced: $2\\text{K} + \\text{Cl}_2 \\rightarrow 2\\text{KCl}$. 2) MgCO₃ → MgO + CO₂ (metal carbonate decomposition pattern). 3) CH₄ + 2O₂ → CO₂ + 2H₂O (complete combustion produces CO₂).'
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
            options: ['H₂', 'H₂O', 'O₂', 'CO₂']
          },
          {
            label: 'In double replacement, if no precipitate, gas, or water forms, then',
            options: ['the reaction is endothermic', 'no reaction occurs', 'synthesis happens instead', 'the reaction is very fast']
          }
        ],
        correctAnswers: ['ion charges', 'activity series', 'H₂O', 'no reaction occurs'],
        hint1: 'The formula of an ionic compound is determined by balancing ion charges.',
        hint2: 'The activity series tells you which element can displace another.',
        hint3: 'Hydroxide = OH⁻. When two OH⁻ combine with a metal oxide...',
        explanation: 'Ion charges determine ionic compound formulas. The activity series predicts single replacement feasibility. Metal hydroxides → metal oxide + H₂O. Double replacement needs a driving force (precipitate, gas, or water), otherwise NR.'
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
              'NaSO₄ + H₂O',
              'Na₂SO₄ + 2H₂O',
              'Na₂SO₄ + H₂',
              'NaHSO₄ + NaOH'
            ],
            correctAnswer: 1,
            explanation: 'This is a neutralization (double replacement): acid + base → salt + water. Na⁺ (×2) pairs with SO₄²⁻ → Na₂SO₄. H⁺ pairs with OH⁻ → H₂O. Balanced: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$.'
          },
          {
            question: 'An unknown compound contains only carbon and hydrogen. When burned in excess O₂, the products will be:',
            options: [
              'CO + H₂',
              'C + H₂O',
              'CO₂ + H₂O',
              'CO₂ + H₂'
            ],
            correctAnswer: 2,
            explanation: 'A compound containing only C and H is a hydrocarbon. Complete combustion of any hydrocarbon in excess O₂ always produces CO₂ + H₂O.'
          }
        ]
      }
    }
  ]
}
