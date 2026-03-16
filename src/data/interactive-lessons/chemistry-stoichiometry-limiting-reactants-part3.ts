export const chemStoichiometryLimitingReactantsPart3Data = {
  topicSlug: 'stoichiometry-limiting-reactants',
  sections: [
    {
      id: 'sl3-intro',
      type: 'text' as const,
      content: `
# 🧪 Limiting Reactant

**Part 3 of 7 — Which Reactant Runs Out First?**

In real chemistry, reactants are rarely present in perfect stoichiometric proportions. One reactant will be used up first, stopping the reaction. That reactant is the **limiting reactant** — it limits how much product can form. The other reactant is in **excess**.
      `
    },
    {
      id: 'sl3-analogy',
      type: 'text' as const,
      content: `
## The Sandwich Analogy

To make 1 sandwich, you need: **2 slices of bread + 1 slice of cheese**

$$2\\text{B} + \\text{C} \\rightarrow \\text{B}_2\\text{C}$$

If you have **10 slices of bread** and **7 slices of cheese**:
- Bread can make: $10/2 = 5$ sandwiches
- Cheese can make: $7/1 = 7$ sandwiches
- You run out of **bread first** → bread is the **limiting reactant**
- You can only make **5 sandwiches**
- Leftover cheese: $7 - 5 = 2$ slices → cheese is in **excess**

### The Principle

The limiting reactant determines the maximum amount of product. The excess reactant is left over.
      `
    },
    {
      id: 'sl3-method',
      type: 'text' as const,
      content: `
## Finding the Limiting Reactant

### Method: Compare Moles of Product Each Reactant Can Produce

1. Convert each reactant\'s given amount to **moles**
2. Use the mole ratio to calculate how much **product** each reactant could produce
3. The reactant that produces the **lesser amount** of product is the **limiting reactant**

### Worked Example

$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

Given: 3.0 mol H₂ and 2.0 mol O₂. Which is limiting?

**From H₂:** $3.0 \\text{ mol H}_2 \\times \\frac{2 \\text{ mol H}_2\\text{O}}{2 \\text{ mol H}_2} = 3.0 \\text{ mol H}_2\\text{O}$

**From O₂:** $2.0 \\text{ mol O}_2 \\times \\frac{2 \\text{ mol H}_2\\text{O}}{1 \\text{ mol O}_2} = 4.0 \\text{ mol H}_2\\text{O}$

H₂ produces less → **H₂ is the limiting reactant**

Maximum H₂O produced = **3.0 mol** (from the limiting reactant)
      `
    },
    {
      id: 'sl3-excess',
      type: 'text' as const,
      content: `
## Finding the Excess Amount

After identifying the limiting reactant, you can find how much excess reactant remains.

### Continuing the Example

$$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$$

H₂ is limiting (3.0 mol). How much O₂ is left over?

**Step 1:** How much O₂ is consumed?

$$\\text{mol O}_2 \\text{ consumed} = 3.0 \\text{ mol H}_2 \\times \\frac{1 \\text{ mol O}_2}{2 \\text{ mol H}_2} = 1.5 \\text{ mol O}_2$$

**Step 2:** How much O₂ remains?

$$\\text{excess O}_2 = 2.0 - 1.5 = 0.5 \\text{ mol O}_2$$

### Summary Table

| Substance | Initial | Consumed | Remaining |
|-----------|---------|----------|-----------|
| H₂ (limiting) | 3.0 mol | 3.0 mol | 0 mol |
| O₂ (excess) | 2.0 mol | 1.5 mol | 0.5 mol |
| H₂O (product) | 0 mol | — | 3.0 mol |
      `
    },
    {
      id: 'sl3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Limiting Reactant Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$, if you have 1 mol N₂ and 2 mol H₂, the limiting reactant is:',
            options: [
              'N₂',
              'H₂',
              'NH₃',
              'Both are limiting'
            ],
            correctAnswer: 1,
            explanation: 'From N₂: 1 mol × 2/1 = 2 mol NH₃. From H₂: 2 mol × 2/3 = 1.33 mol NH₃. H₂ produces less product, so H₂ is the limiting reactant.'
          },
          {
            question: 'The limiting reactant is the one that:',
            options: [
              'Has the smallest mass',
              'Has the fewest moles',
              'Produces the least amount of product',
              'Has the largest molar mass'
            ],
            correctAnswer: 2,
            explanation: 'The limiting reactant is defined as the one that produces the least amount of product when you calculate how much each reactant could produce. It\'s not necessarily the one with the smallest mass or fewest moles — the mole ratio matters!'
          },
          {
            question: 'In the reaction $2\\text{Al} + 3\\text{Cl}_2 \\rightarrow 2\\text{AlCl}_3$, if you have 4.0 mol Al and 3.0 mol Cl₂, the limiting reactant is:',
            options: [
              'Al — because 4.0 > 3.0',
              'Cl₂ — because it produces fewer moles of product',
              'Al — because it produces fewer moles of product',
              'Neither — they are in perfect ratio'
            ],
            correctAnswer: 1,
            explanation: 'From Al: 4.0 × 2/2 = 4.0 mol AlCl₃. From Cl₂: 3.0 × 2/3 = 2.0 mol AlCl₃. Cl₂ produces less product, so Cl₂ is the limiting reactant.'
          }
        ]
      }
    },
    {
      id: 'sl3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Limiting Reactant Calculations** 🧮

Given: $\\text{N}_2 + 3\\text{H}_2 \\rightarrow 2\\text{NH}_3$

You start with **2.0 mol N₂** and **5.0 mol H₂**.

1) How many moles of NH₃ could N₂ produce? (to 3 significant figures)

2) How many moles of NH₃ could H₂ produce? (to 3 significant figures)

3) Which is limiting? Type **N2** or **H2**.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4.0', '3.3', 'H2'],
        hint1: '2.0 mol N₂ × (2 mol NH₃ / 1 mol N₂).',
        hint2: '5.0 mol H₂ × (2 mol NH₃ / 3 mol H₂).',
        hint3: 'Which reactant produces less NH₃?',
        explanation: '1) From N₂: 2.0 × 2/1 = 4.0 mol NH₃. 2) From H₂: 5.0 × 2/3 = 3.33 ≈ 3.3 mol NH₃. 3) H₂ produces less (3.3 < 4.0), so H₂ is the limiting reactant.'
      }
    },
    {
      id: 'sl3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Limiting Reactant Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The reactant that is completely consumed is called the',
            options: ['excess reactant', 'limiting reactant', 'catalyst', 'product']
          },
          {
            label: 'The amount of product formed is determined by the',
            options: ['excess reactant', 'total mass of reactants', 'limiting reactant', 'temperature']
          },
          {
            label: 'Having more moles of a reactant does NOT necessarily mean it is',
            options: ['the limiting reactant', 'in excess', 'a gas', 'solid']
          },
          {
            label: 'After a reaction with a limiting reactant, the excess reactant will be',
            options: ['completely consumed', 'partially remaining', 'converted to a gas', 'destroyed']
          }
        ],
        correctAnswers: ['limiting reactant', 'limiting reactant', 'in excess', 'partially remaining'],
        hint1: 'This reactant runs out and stops the reaction.',
        hint2: 'Product yield is limited by the reactant that runs out.',
        hint3: 'The mole ratio determines which is limiting, not just the number of moles.',
        explanation: 'The limiting reactant is completely consumed, determining product yield. More moles doesn\'t guarantee excess — the mole ratio matters. After the reaction, leftover excess reactant remains unreacted.'
      }
    },
    {
      id: 'sl3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Limiting Reactant** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $2\\text{Fe} + 3\\text{Cl}_2 \\rightarrow 2\\text{FeCl}_3$, if 56.0 g of Fe ($M = 55.85$) reacts with 142 g of Cl₂ ($M = 70.90$), the limiting reactant is:',
            options: [
              'Fe',
              'Cl₂',
              'FeCl₃',
              'They are in exact stoichiometric ratio'
            ],
            correctAnswer: 0,
            explanation: 'Moles Fe: 56.0/55.85 = 1.003 mol. Moles Cl₂: 142/70.90 = 2.003 mol. From Fe: 1.003 × 2/2 = 1.003 mol FeCl₃. From Cl₂: 2.003 × 2/3 = 1.335 mol FeCl₃. Fe produces less product → Fe is the limiting reactant.'
          },
          {
            question: 'Given $\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$, if 16.04 g of CH₄ ($M = 16.04$) reacts with 48.00 g of O₂ ($M = 32.00$), what mass of CO₂ ($M = 44.01$) is produced?',
            options: [
              '22.0 g',
              '33.0 g',
              '44.0 g',
              '66.0 g'
            ],
            correctAnswer: 1,
            explanation: 'Moles CH₄: 16.04/16.04 = 1.000 mol. Moles O₂: 48.00/32.00 = 1.500 mol. From CH₄: 1.000 × 1 = 1.000 mol CO₂. From O₂: 1.500 × 1/2 = 0.750 mol CO₂. O₂ produces less → O₂ is limiting. CO₂ produced: 0.750 × 44.01 = 33.0 g.'
          }
        ]
      }
    }
  ]
}
