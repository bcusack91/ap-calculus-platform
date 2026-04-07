export const chemStoichiometryLimitingReactantsPart6Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Multi-Step Stoichiometry with Limiting Reactants and Yield**

This workshop brings together everything: mass-to-mass conversions, limiting reactants, excess calculations, and percent yield — all in one problem. These are the types of problems you\'ll see on the AP exam.
      `
    },
    {
      id: 'sl6-strategy',
      type: 'text' as const,
      content: `
## The Complete Problem-Solving Strategy

### For Multi-Step Stoichiometry Problems

1. **Write and balance** the equation
2. **Convert** all given amounts to **moles**
3. **Identify the limiting reactant** (compare moles of product each can produce)
4. **Calculate theoretical yield** using the limiting reactant
5. **Find excess** remaining (if asked)
6. **Apply percent yield** (if given or asked)

### Master Formula Chain

$$\\text{grams A} \\xrightarrow{\\div M_A} \\text{mol A} \\xrightarrow{\\text{ratio}} \\text{mol product} \\xrightarrow{\\times M_P} \\text{theoretical yield (g)} \\xrightarrow{\\times \\%/100} \\text{actual yield (g)}$$
      `
    },
    {
      id: 'sl6-worked-example',
      type: 'text' as const,
      content: `
## Comprehensive Worked Example

**Problem:** In the reaction below, 50.0 g of Fe₂O₃ ($M = 159.7$) reacts with 30.0 g of Al ($M = 26.98$). The percent yield is 78%. Find:
a) the limiting reactant
b) the theoretical yield of Fe ($M = 55.85$)
c) the actual yield of Fe
d) the mass of excess reactant remaining

$$\\text{Fe}_2\\text{O}_3 + 2\\text{Al} \\rightarrow \\text{Al}_2\\text{O}_3 + 2\\text{Fe}$$

### Step 1: Convert to Moles

- Moles Fe₂O₃: $50.0 \\; \\cancel{\\text{g Fe}_2\\text{O}_3} \\times \\frac{1 \\text{ mol Fe}_2\\text{O}_3}{159.7 \\; \\cancel{\\text{g Fe}_2\\text{O}_3}} = 0.3131$ mol Fe₂O₃
- Moles Al: $30.0 \\; \\cancel{\\text{g Al}} \\times \\frac{1 \\text{ mol Al}}{26.98 \\; \\cancel{\\text{g Al}}} = 1.112$ mol Al

### Step 2: Find Limiting Reactant

- From Fe₂O₃: $0.3131 \\; \\cancel{\\text{mol Fe}_2\\text{O}_3} \\times \\frac{2 \\text{ mol Fe}}{1 \\; \\cancel{\\text{mol Fe}_2\\text{O}_3}} = 0.6262$ mol Fe
- From Al: $1.112 \\; \\cancel{\\text{mol Al}} \\times \\frac{2 \\text{ mol Fe}}{2 \\; \\cancel{\\text{mol Al}}} = 1.112$ mol Fe
- Fe₂O₃ produces less → **Fe₂O₃ is limiting**

### Step 3: Theoretical Yield

$$m_{\\text{Fe}} = 0.6262 \\; \\cancel{\\text{mol Fe}} \\times \\frac{55.85 \\text{ g Fe}}{1 \\; \\cancel{\\text{mol Fe}}} = 35.0 \\text{ g Fe}$$

### Step 4: Actual Yield

$$\\text{actual} = 35.0 \\times 0.78 = 27.3 \\text{ g Fe}$$

### Step 5: Excess Al Remaining

Al consumed: $0.3131 \\; \\cancel{\\text{mol Fe}_2\\text{O}_3} \\times \\frac{2 \\text{ mol Al}}{1 \\; \\cancel{\\text{mol Fe}_2\\text{O}_3}} = 0.6262$ mol Al

Al remaining: $(1.112 - 0.6262) \\; \\cancel{\\text{mol Al}} \\times \\frac{26.98 \\text{ g Al}}{1 \\; \\cancel{\\text{mol Al}}} = 13.1$ g Al
      `
    },
    {
      id: 'sl6-multi-step-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multi-Step Stoichiometry Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$, 8.0 g of H₂ ($M = 2.016$) reacts with 48.0 g of O₂ ($M = 32.00$). The limiting reactant is:',
            options: [
              'H₂ — because it has less mass',
              'O₂ — because it produces fewer moles of H₂O',
              'H₂ — because it produces fewer moles of H₂O',
              'They are in exact stoichiometric ratio'
            ],
            correctAnswer: 1,
            explanation: 'Moles H₂: 8.0/2.016 = 3.97 mol → 3.97 × (2/2) = 3.97 mol H₂O. Moles O₂: 48.0/32.00 = 1.50 mol → 1.50 × (2/1) = 3.00 mol H₂O. O₂ produces fewer moles of product → O₂ is the limiting reactant.'
          },
          {
            question: 'A reaction has a theoretical yield of 25.0 g and a percent yield of 80.0%. The actual yield is:',
            options: [
              '20.0 g',
              '25.0 g',
              '31.3 g',
              '80.0 g'
            ],
            correctAnswer: 0,
            explanation: 'Actual yield = theoretical yield × (% yield / 100) = 25.0 × 0.800 = 20.0 g.'
          },
          {
            question: 'After a limiting reactant problem, you can find the excess remaining by:',
            options: [
              'Subtracting the limiting reactant moles from the excess moles directly',
              'Calculating moles of excess consumed using the mole ratio, then subtracting from initial moles',
              'Dividing the product mass by the excess molar mass',
              'Multiplying the excess moles by 100'
            ],
            correctAnswer: 1,
            explanation: 'Use the limiting reactant moles and the mole ratio to find how much excess was consumed. Then subtract from the initial amount: excess remaining = initial − consumed.'
          }
        ]
      }
    },
    {
      id: 'sl6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Multi-Step Calculation Drill** 🧮

Given: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$

$M_{\\text{N}_2} = 28.02$ g/mol, $M_{\\text{H}_2} = 2.016$ g/mol, $M_{\\text{NH}_3} = 17.03$ g/mol

A reaction starts with 28.02 g of N₂ and 8.064 g of H₂. Percent yield = 85%.

**1)** Which is limiting? Type **N2** or **H2**. (Hint: calculate mol product from each)

**2)** What is the theoretical yield of NH₃ in grams? (to 3 significant figures)

**3)** What is the actual yield of NH₃ in grams? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['N2', '34.1', '29.0'],
        hint1: 'Mol N₂ = 28.02/28.02 = 1.000. Mol H₂ = 8.064/2.016 = 4.000. From N₂: 1.000 × 2 = 2.000 mol NH₃. From H₂: 4.000 × 2/3 = 2.667 mol NH₃. Which is less?',
        hint2: 'Theoretical yield = mol NH₃ (from limiting) × $M_{\\text{NH}_3}$ = 2.000 × 17.03.',
        hint3: 'Actual = theoretical × 0.85.',
        explanation: '1) From N₂: 1.000 × 2 = 2.000 mol NH₃. From H₂: 4.000 × 2/3 = 2.667 mol NH₃. N₂ produces less → N₂ is limiting. 2) Theoretical: 2.000 × 17.03 = 34.1 g. 3) Actual: 34.1 × 0.85 = 29.0 g.'
      }
    },
    {
      id: 'sl6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Workshop Review — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first step in any stoichiometry problem is to',
            options: ['calculate molar mass', 'balance the equation', 'find the limiting reactant', 'apply percent yield']
          },
          {
            label: 'The theoretical yield is calculated using the',
            options: ['excess reactant', 'limiting reactant', 'actual yield', 'percent yield']
          },
          {
            label: 'If you get more product than the theoretical yield, the most likely reason is',
            options: ['a calculation error or impure product', 'the reaction was very fast', 'excess reactant was used', 'the mole ratio was wrong']
          },
          {
            label: 'In an ICE-style table (Initial, Consumed, End), the limiting reactant ends at',
            options: ['half its initial amount', 'zero', 'its initial amount', 'double its initial amount']
          }
        ],
        correctAnswers: ['balance the equation', 'limiting reactant', 'a calculation error or impure product', 'zero'],
        hint1: 'You can\'t use mole ratios without a balanced equation.',
        hint2: 'Theoretical yield comes from the reactant that runs out first.',
        hint3: 'Yield > 100% is physically impossible — something is wrong.',
        explanation: 'Always balance first. Theoretical yield uses the limiting reactant. Yields > 100% suggest error or contamination. The limiting reactant is fully consumed (reaches zero).'
      }
    },
    {
      id: 'sl6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Multi-Step Stoichiometry** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the thermite reaction $\\text{Fe}_2\\text{O}_3 + 2\\text{Al} \\rightarrow \\text{Al}_2\\text{O}_3 + 2\\text{Fe}$, if 100.0 g of Fe₂O₃ ($M = 159.7$) reacts with 100.0 g of Al ($M = 26.98$), which is limiting?',
            options: [
              'Fe₂O₃',
              'Al',
              'Both run out simultaneously',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'Moles Fe₂O₃: 100.0/159.7 = 0.626 mol → 1.252 mol Fe. Moles Al: 100.0/26.98 = 3.706 mol → 3.706 mol Fe. Fe₂O₃ produces less product → Fe₂O₃ is limiting.'
          },
          {
            question: 'Using the previous problem, the theoretical yield of Fe ($M = 55.85$) is approximately:',
            options: [
              '35.0 g',
              '55.9 g',
              '69.9 g',
              '111.7 g'
            ],
            correctAnswer: 2,
            explanation: 'Fe₂O₃ is limiting: 0.626 mol → 0.626 × 2 = 1.252 mol Fe → 1.252 × 55.85 = 69.9 g Fe.'
          }
        ]
      }
    }
  ]
}
