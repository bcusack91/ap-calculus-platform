export const chemStoichiometryLimitingReactantsPart2Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl2-intro',
      type: 'text' as const,
      content: `
# 🔬 Mass-to-Mass Stoichiometry

**Part 2 of 7 — Converting Between Grams**

In the lab, you weigh substances in **grams**, not moles. Mass-to-mass stoichiometry lets you convert grams of one substance to grams of another using the balanced equation. The key is the **three-step bridge**: grams → moles → moles → grams.
      `
    },
    {
      id: 'sl2-roadmap',
      type: 'text' as const,
      content: `
## The Stoichiometry Roadmap

$$\\text{grams A} \\xrightarrow{\\div M_A} \\text{moles A} \\xrightarrow{\\text{mole ratio}} \\text{moles B} \\xrightarrow{\\times M_B} \\text{grams B}$$

### The Three Steps

| Step | Conversion | Tool Used |
|------|-----------|-----------|
| 1 | Grams A → Moles A | Divide by molar mass of A |
| 2 | Moles A → Moles B | Multiply by mole ratio |
| 3 | Moles B → Grams B | Multiply by molar mass of B |

### Combined Formula

$$\\text{grams B} = \\text{grams A} \\times \\frac{1}{M_A} \\times \\frac{\\text{coeff B}}{\\text{coeff A}} \\times M_B$$

### Key Point

You **cannot** skip steps! You must go through moles — there is no direct grams-to-grams conversion factor from the balanced equation.
      `
    },
    {
      id: 'sl2-worked-example-1',
      type: 'text' as const,
      content: `
## Worked Example 1

**Problem:** How many grams of water are produced from burning 32.0 g of methane?

$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$$

**Molar masses:** CH₄ = 16.04 g/mol, H₂O = 18.02 g/mol

### Step 1: Grams CH₄ → Moles CH₄
$$n_{\\text{CH}_4} = \\frac{32.0}{16.04} = 1.995 \\text{ mol}$$

### Step 2: Moles CH₄ → Moles H₂O
$$n_{\\text{H}_2\\text{O}} = 1.995 \\times \\frac{2 \\text{ mol H}_2\\text{O}}{1 \\text{ mol CH}_4} = 3.990 \\text{ mol}$$

### Step 3: Moles H₂O → Grams H₂O
$$m_{\\text{H}_2\\text{O}} = 3.990 \\times 18.02 = 71.9 \\text{ g}$$

### Answer: 71.9 g of H₂O
      `
    },
    {
      id: 'sl2-worked-example-2',
      type: 'text' as const,
      content: `
## Worked Example 2

**Problem:** How many grams of aluminum are needed to produce 51.0 g of aluminum oxide?

$$4\\text{Al} + 3\\text{O}_2 \\rightarrow 2\\text{Al}_2\\text{O}_3$$

**Molar masses:** Al = 26.98 g/mol, Al₂O₃ = 101.96 g/mol

### Step 1: Grams Al₂O₃ → Moles Al₂O₃
$$n_{\\text{Al}_2\\text{O}_3} = \\frac{51.0}{101.96} = 0.5002 \\text{ mol}$$

### Step 2: Moles Al₂O₃ → Moles Al
$$n_{\\text{Al}} = 0.5002 \\times \\frac{4 \\text{ mol Al}}{2 \\text{ mol Al}_2\\text{O}_3} = 1.000 \\text{ mol}$$

### Step 3: Moles Al → Grams Al
$$m_{\\text{Al}} = 1.000 \\times 26.98 = 27.0 \\text{ g}$$

### Answer: 27.0 g of Al

### One-Line Setup

$$51.0 \\text{ g Al}_2\\text{O}_3 \\times \\frac{1 \\text{ mol}}{101.96 \\text{ g}} \\times \\frac{4 \\text{ mol Al}}{2 \\text{ mol Al}_2\\text{O}_3} \\times \\frac{26.98 \\text{ g}}{1 \\text{ mol}} = 27.0 \\text{ g Al}$$
      `
    },
    {
      id: 'sl2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Mass-to-Mass Stoichiometry Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The correct order of conversions for mass-to-mass stoichiometry is:',
            options: [
              'grams A → grams B directly',
              'grams A → moles A → moles B → grams B',
              'moles A → grams A → grams B → moles B',
              'grams A → moles B → grams B'
            ],
            correctAnswer: 1,
            explanation: 'Mass-to-mass stoichiometry requires three steps: grams A → moles A (using molar mass of A) → moles B (using mole ratio) → grams B (using molar mass of B). You must go through moles as the bridge.'
          },
          {
            question: 'Given $2\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\text{NaCl}$, how many grams of NaCl are produced from 46.0 g of Na? ($M_{\\text{Na}}$ = 23.0, $M_{\\text{NaCl}}$ = 58.44)',
            options: [
              '58.4 g',
              '116.9 g',
              '29.2 g',
              '175.3 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles Na: 46.0/23.0 = 2.00 mol. Mole ratio: 2 mol NaCl / 2 mol Na = 1. Moles NaCl = 2.00 mol. Grams NaCl = 2.00 × 58.44 = 116.9 g.'
          },
          {
            question: 'In the conversion grams A → moles A, you divide by:',
            options: [
              'Avogadro\'s number',
              'The molar mass of A',
              'The coefficient of A',
              'The mole ratio'
            ],
            correctAnswer: 1,
            explanation: 'To convert grams to moles, divide by the molar mass: $n = m/M$. Avogadro\'s number converts moles to particles, not grams to moles.'
          }
        ]
      }
    },
    {
      id: 'sl2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Mass-to-Mass Calculation Drill** 🧮

Use the equation: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$

Molar masses: Fe₂O₃ = 159.7 g/mol, CO = 28.01 g/mol, Fe = 55.85 g/mol, CO₂ = 44.01 g/mol

1) How many grams of Fe are produced from 159.7 g of Fe₂O₃? (to 3 significant figures)

2) How many grams of CO are needed to react with 79.85 g of Fe₂O₃? (to 3 significant figures)

3) How many grams of CO₂ are produced from 84.03 g of CO? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['111.7', '42.0', '132.0'],
        hint1: '159.7 g Fe₂O₃ = 1.000 mol → 2.000 mol Fe → ? g Fe.',
        hint2: '79.85 g Fe₂O₃ = 0.500 mol → 1.500 mol CO → ? g CO.',
        hint3: '84.03 g CO = 3.000 mol → 3.000 mol CO₂ → ? g CO₂.',
        explanation: '1) 159.7/159.7 = 1.000 mol Fe₂O₃ × (2/1) = 2.000 mol Fe × 55.85 = 111.7 g Fe. 2) 79.85/159.7 = 0.500 mol Fe₂O₃ × (3/1) = 1.500 mol CO × 28.01 = 42.0 g CO. 3) 84.03/28.01 = 3.000 mol CO × (3/3) = 3.000 mol CO₂ × 44.01 = 132.0 g CO₂.'
      }
    },
    {
      id: 'sl2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Mass-to-Mass Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To convert grams of A to moles of A, you use the',
            options: ['mole ratio', 'molar mass of A', 'molar mass of B', 'density of A']
          },
          {
            label: 'To convert moles of A to moles of B, you use the',
            options: ['molar mass', 'mole ratio from the balanced equation', 'density', 'Avogadro\'s number']
          },
          {
            label: 'If 1 mol of reactant A produces 3 mol of product B, then doubling the grams of A will',
            options: ['triple the grams of B', 'double the grams of B', 'have no effect', 'halve the grams of B']
          },
          {
            label: 'The total mass of products in a reaction equals the total mass of reactants because of',
            options: ['the mole ratio', 'the activity series', 'the law of conservation of mass', 'Avogadro\'s law']
          }
        ],
        correctAnswers: ['molar mass of A', 'mole ratio from the balanced equation', 'double the grams of B', 'the law of conservation of mass'],
        hint1: '$n = m / M$, where $M$ is the molar mass of the substance.',
        hint2: 'The bridge between moles of different substances.',
        hint3: 'Double the input → double the output (proportional).',
        explanation: 'Use molar mass of A for grams → moles. The mole ratio from balanced equation converts moles A → moles B. Doubling input doubles output (linear relationship). Conservation of mass: total mass in = total mass out.'
      }
    },
    {
      id: 'sl2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mass-to-Mass Stoichiometry** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Given $\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2$, how many grams of CaO are produced from 200.0 g of CaCO₃? ($M_{\\text{CaCO}_3}$ = 100.09, $M_{\\text{CaO}}$ = 56.08)',
            options: [
              '56.1 g',
              '87.9 g',
              '100.1 g',
              '112.1 g'
            ],
            correctAnswer: 3,
            explanation: 'Moles CaCO₃: 200.0/100.09 = 1.998 mol. Mole ratio: 1:1 → 1.998 mol CaO. Grams CaO: 1.998 × 56.08 = 112.1 g.'
          },
          {
            question: 'In the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, if 4.04 g of H₂ reacts completely, how many grams of O₂ are consumed? ($M_{\\text{H}_2}$ = 2.016, $M_{\\text{O}_2}$ = 32.00)',
            options: [
              '16.0 g',
              '32.0 g',
              '64.0 g',
              '8.0 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles H₂: 4.04/2.016 = 2.00 mol. Ratio: 1 mol O₂ / 2 mol H₂ → 1.00 mol O₂. Grams: 1.00 × 32.00 = 32.0 g O₂.'
          }
        ]
      }
    }
  ]
}
