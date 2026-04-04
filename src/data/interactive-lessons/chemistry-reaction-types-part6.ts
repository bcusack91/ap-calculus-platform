export const chemReactionTypesPart6Data = {
  topicSlug: 'reaction-types',
  sections: [
    {
      id: 'rt6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Identifying, Balancing, and Predicting**

It\'s time to put together everything you\'ve learned about reaction types. In this workshop, you\'ll practice the complete workflow: **identify** the reaction type, **predict** the products, and **balance** the equation.
      `
    },
    {
      id: 'rt6-workflow',
      type: 'text' as const,
      content: `
## The Complete Workflow

### Step 1: Identify the Reaction Type

| Clue | Reaction Type |
|------|--------------|
| Multiple reactants → one product | Synthesis |
| One reactant → multiple products | Decomposition |
| Element + compound → element + compound | Single replacement |
| Two compounds → two new compounds | Double replacement |
| Fuel + O₂ → CO₂ + H₂O | Combustion |

### Step 2: Predict Products

Apply the rules for that reaction type:
- Synthesis: combine to form one compound
- Decomposition: break into simpler substances
- Single replacement: check activity series, swap element
- Double replacement: swap cations, check for driving force
- Combustion: products are CO₂ + H₂O

### Step 3: Write Correct Formulas

Use ion charges for ionic compounds. Don\'t forget subscripts!

### Step 4: Balance the Equation

Use coefficients. Check every atom. Simplify to smallest whole numbers.
      `
    },
    {
      id: 'rt6-worked-examples',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1

**Given:** $\\text{Mg} + \\text{N}_2 \\rightarrow$ ?

1. **Type:** Two elements combining → **Synthesis**
2. **Product:** Mg²⁺ + N³⁻ → Mg₃N₂ (cross charges: 3 Mg, 2 N)
3. **Balance:** $3\\text{Mg} + \\text{N}_2 \\rightarrow \\text{Mg}_3\\text{N}_2$ ✓

### Example 2

**Given:** $\\text{Fe} + \\text{AgNO}_3 \\rightarrow$ ?

1. **Type:** Element + compound → **Single replacement**
2. **Activity series:** Fe is above Ag → reaction proceeds
3. **Product:** Fe replaces Ag. Fe has charge +2 → Fe(NO₃)₂ + Ag
4. **Balance:** $\\text{Fe} + 2\\text{AgNO}_3 \\rightarrow \\text{Fe(NO}_3)_2 + 2\\text{Ag}$ ✓

### Example 3

**Given:** $\\text{Na}_2\\text{CO}_3 + \\text{CaCl}_2 \\rightarrow$ ?

1. **Type:** Two ionic compounds → **Double replacement**
2. **Swap:** Na⁺ with Cl⁻ → NaCl; Ca²⁺ with CO₃²⁻ → CaCO₃
3. **Driving force:** CaCO₃ is insoluble → precipitate forms ✓
4. **Balance:** $\\text{Na}_2\\text{CO}_3 + \\text{CaCl}_2 \\rightarrow \\text{CaCO}_3\\downarrow + 2\\text{NaCl}$ ✓
      `
    },
    {
      id: 'rt6-classify-quiz',
      type: 'multiple-choice' as const,
      content: `
**Classify and Analyze** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Classify: $2\\text{KI} + \\text{Pb(NO}_3)_2 \\rightarrow \\text{PbI}_2 + 2\\text{KNO}_3$',
            options: [
              'Synthesis',
              'Decomposition',
              'Single replacement',
              'Double replacement'
            ],
            correctAnswer: 3,
            explanation: 'Two ionic compounds exchange ions: K⁺ pairs with NO₃⁻, and Pb²⁺ pairs with I⁻. The precipitate PbI₂ (yellow) drives the reaction. This is double replacement.'
          },
          {
            question: 'Classify: $2\\text{Li} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH} + \\text{H}_2$',
            options: [
              'Synthesis',
              'Decomposition',
              'Single replacement',
              'Double replacement'
            ],
            correctAnswer: 2,
            explanation: 'An element (Li) reacts with a compound (H₂O). Li replaces one of the hydrogen atoms in water. Element + compound → new compound + new element = single replacement.'
          },
          {
            question: 'Classify: $\\text{CaO} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2$',
            options: [
              'Synthesis',
              'Decomposition',
              'Single replacement',
              'Combustion'
            ],
            correctAnswer: 0,
            explanation: 'Two reactants combine to form a single product. This is synthesis (combination). Metal oxide + water → metal hydroxide is a classic synthesis pattern.'
          },
          {
            question: 'Classify: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$',
            options: [
              'Synthesis',
              'Double replacement',
              'Decomposition',
              'Combustion'
            ],
            correctAnswer: 3,
            explanation: 'An organic compound reacts with O₂ to produce CO₂ and H₂O. This is the hallmark of combustion (specifically, the combustion of glucose).'
          }
        ]
      }
    },
    {
      id: 'rt6-full-workflow-drill',
      type: 'input-boxes' as const,
      content: `
**Full Workflow Practice** 🧮

Identify each reaction type. Type: **synthesis**, **decomposition**, **single**, **double**, or **combustion**.

1) $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$

2) $\\text{AgNO}_3 + \\text{NaCl} \\rightarrow \\text{AgCl} + \\text{NaNO}_3$

3) $\\text{C}_2\\text{H}_6 + \\frac{7}{2}\\text{O}_2 \\rightarrow 2\\text{CO}_2 + 3\\text{H}_2\\text{O}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['synthesis', 'double', 'combustion'],
        hint1: 'Two elements combine into one compound.',
        hint2: 'Two ionic compounds swap their ions.',
        hint3: 'A hydrocarbon reacting with O₂ to produce CO₂ + H₂O.',
        explanation: '1) Synthesis: $4\\text{Fe} + 3\\text{O}_2 \\rightarrow 2\\text{Fe}_2\\text{O}_3$ — two elements combine into one product. 2) Double replacement: AgNO₃ + NaCl → AgCl↓ + NaNO₃ — ions swap partners. 3) Combustion: C₂H₆ + O₂ → CO₂ + H₂O — hydrocarbon burns in oxygen.'
      }
    },
    {
      id: 'rt6-predict-and-balance',
      type: 'multiple-choice' as const,
      content: `
**Predict Products and Balance** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Predict and balance: $\\text{Zn} + \\text{HCl} \\rightarrow$ ? (Zn is above H in activity series)',
            options: [
              '$\\text{Zn} + \\text{HCl} \\rightarrow \\text{ZnCl} + \\text{H}_2$',
              '$\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$',
              '$2\\text{Zn} + 2\\text{HCl} \\rightarrow 2\\text{ZnCl} + \\text{H}_2$',
              '$\\text{Zn} + \\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}$'
            ],
            correctAnswer: 1,
            explanation: 'Single replacement: Zn (charge +2) replaces H. Products: ZnCl₂ + H₂. Balanced: $\\text{Zn} + 2\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$. Zn: 1=1 ✓, H: 2=2 ✓, Cl: 2=2 ✓.'
          },
          {
            question: 'Predict and balance: $\\text{Li}_2\\text{O} + \\text{H}_2\\text{O} \\rightarrow$ ?',
            options: [
              '$\\text{Li}_2\\text{O} + \\text{H}_2\\text{O} \\rightarrow \\text{Li}_2\\text{O} + \\text{H}_2$',
              '$\\text{Li}_2\\text{O} + \\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH}$',
              '$\\text{Li}_2\\text{O} + \\text{H}_2\\text{O} \\rightarrow \\text{LiOH}_2$',
              '$\\text{Li}_2\\text{O} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{LiOH}$'
            ],
            correctAnswer: 1,
            explanation: 'Synthesis: Metal oxide + water → metal hydroxide. Li₂O + H₂O → 2LiOH. Li: 2=2 ✓, O: 1+1=2 and 2(1)=2 ✓, H: 2=2 ✓.'
          }
        ]
      }
    },
    {
      id: 'rt6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Workshop Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first step in predicting products is to',
            options: ['balance the equation', 'identify the reaction type', 'calculate molar mass', 'determine the state of matter']
          },
          {
            label: 'If an element and a compound are the reactants, the reaction is likely',
            options: ['synthesis', 'decomposition', 'single replacement', 'combustion']
          },
          {
            label: 'The reaction Na₂O + H₂O → 2NaOH is classified as',
            options: ['decomposition', 'double replacement', 'synthesis', 'neutralization']
          },
          {
            label: 'After predicting products, the final step is to',
            options: ['identify the reaction type again', 'balance the equation', 'add a catalyst', 'determine the color']
          }
        ],
        correctAnswers: ['identify the reaction type', 'single replacement', 'synthesis', 'balance the equation'],
        hint1: 'You need to know the pattern before applying it.',
        hint2: 'Element + compound → new compound + new element.',
        hint3: 'Two reactants forming one product.',
        explanation: 'First identify the type, then predict products using the pattern, then balance. Element + compound = single replacement. Two reactants → one product = synthesis. The final step is always to balance the equation.'
      }
    },
    {
      id: 'rt6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student adds a piece of copper wire to a solution of silver nitrate. Blue crystals of Cu(NO₃)₂ form and silver metal deposits. This reaction is:',
            options: [
              'Synthesis',
              'Double replacement',
              'Single replacement',
              'Decomposition'
            ],
            correctAnswer: 2,
            explanation: '$\\text{Cu} + 2\\text{AgNO}_3 \\rightarrow \\text{Cu(NO}_3)_2 + 2\\text{Ag}$. A free element (Cu) replaces another element (Ag) in a compound. This is single replacement. Cu is above Ag in the activity series.'
          },
          {
            question: 'When potassium chlorate (KClO₃) is heated, it decomposes. The products are:',
            options: [
              'K + Cl₂ + O₂',
              'KCl + O₂',
              'K₂O + ClO₂',
              'KOH + Cl₂'
            ],
            correctAnswer: 1,
            explanation: 'Metal chlorates decompose into metal chloride + oxygen gas: $2\\text{KClO}_3 \\xrightarrow{\\Delta} 2\\text{KCl} + 3\\text{O}_2$. This is a standard decomposition pattern.'
          }
        ]
      }
    }
  ]
}
