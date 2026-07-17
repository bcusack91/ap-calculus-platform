export const chemEquilibriumConstantsPart1Data = {
  topicSlug: 'equilibrium-constants-expressions',
  sections: [
    {
      id: 'ece1-intro',
      type: 'text' as const,
      content: `# ⚖️ Equilibrium Constants and Expressions

**Part 1 of 7 — What Is Chemical Equilibrium?**

---

### Topics in This Part

| Section |
|---------|
| ⚖️ Dynamic Equilibrium Revisited |
| Key Features |
| ⚖️ The Equilibrium Constant |
| What $K$ Tells Us |
| Critical Facts About $K$ |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ece1-dynamic-eq',
      type: 'text' as const,
      content: `
## ⚖️ Dynamic Equilibrium Revisited

At **dynamic equilibrium**:

$$\\text{Rate}_{\\text{forward}} = \\text{Rate}_{\\text{reverse}}$$


---

### Key Features

| Feature | What It Means |
|---------|---------------|
| **Dynamic** | Both forward and reverse reactions are still occurring |
| **No net change** | Concentrations of all species remain constant over time |
| **Closed system** | No matter enters or leaves the system |
| **Temperature-dependent** | The equilibrium position depends on temperature |


---

> ⚠️ **Common Misconception:** Equilibrium does **NOT** mean the concentrations of reactants and products are equal. It means they are **constant**.

For example, in the Haber process:

$$\\text{N}_2(g) + 3\\,\\text{H}_2(g) \\rightleftharpoons 2\\,\\text{NH}_3(g)$$

At equilibrium, $[\\text{NH}_3]$ might be much larger or much smaller than $[\\text{N}_2]$ — it depends on conditions. But all concentrations **stop changing**.
      `
    },
    {
      id: 'ece1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Equilibrium Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At dynamic equilibrium, what is true about the forward and reverse reaction rates?',
            options: [
              'The forward rate is greater',
              'The reverse rate is greater',
              'Both rates are equal',
              'Both rates are zero'
            ],
            correctAnswer: 2,
            explanation: 'By definition, dynamic equilibrium is when the forward and reverse reaction rates are equal, so there is no net change in concentrations.'
          },
          {
            question: 'At equilibrium, the concentrations of reactants and products are:',
            options: [
              'Always equal to each other',
              'Constant but not necessarily equal',
              'Continuously increasing',
              'Always zero'
            ],
            correctAnswer: 1,
            explanation: 'Concentrations are constant at equilibrium but are generally NOT equal. Their ratio is determined by the equilibrium constant $K$.'
          },
          {
            question: 'Which condition is required for a system to be at equilibrium?',
            options: [
              'An open container',
              'A closed system at constant temperature',
              'All reactants consumed',
              'A catalyst must be present'
            ],
            correctAnswer: 1,
            explanation: 'Equilibrium requires a closed system (no matter in or out) and constant temperature. A catalyst speeds up the approach to equilibrium but does not change the position.'
          }
        ]
      }
    },
    {
      id: 'ece1-eq-constant-intro',
      type: 'text' as const,
      content: `
## ⚖️ The Equilibrium Constant

The **equilibrium constant** $K$ quantifies the ratio of product concentrations to reactant concentrations at equilibrium.

For the general reaction:

$$a\\text{A} + b\\text{B} \\rightleftharpoons c\\text{C} + d\\text{D}$$

The equilibrium constant expression is:

$$\\boxed{K_c = \\frac{[\\text{C}]^c[\\text{D}]^d}{[\\text{A}]^a[\\text{B}]^b}}$$


---

### What $K$ Tells Us

| Value of $K$ | Meaning |
|--------------|---------|
| $K \\gg 1$ | Products are strongly favored at equilibrium |
| $K \\approx 1$ | Comparable amounts of reactants and products |
| $K \\ll 1$ | Reactants are strongly favored at equilibrium |


---

### Critical Facts About $K$

> 🔑 **Key Concept:** $K$ depends **only on temperature** — not on initial concentrations, pressure, or catalysts.

- $K$ is **unitless** (in the thermodynamic definition using activities)
- A larger $K$ means more products at equilibrium
      `
    },
    {
      id: 'ece1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Equilibrium Fundamentals** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At equilibrium, the forward and reverse reaction rates are',
            options: ['zero', 'equal', 'increasing', 'unrelated']
          },
          {
            label: 'The equilibrium constant $K$ depends only on',
            options: ['concentration', 'pressure', 'temperature', 'volume']
          },
          {
            label: 'When $K \\gg 1$, the equilibrium favors',
            options: ['reactants', 'products', 'neither — the reaction has stopped', 'the catalyst']
          },
          {
            label: 'Adding a catalyst to a system at equilibrium will',
            options: ['increase K', 'decrease K', 'shift equilibrium right', 'not change the value of K']
          }
        ],
        correctAnswers: ['equal', 'temperature', 'products', 'not change the value of K'],
        hint1: 'The definition of equilibrium is based on reaction rates.',
        hint2: 'K changes only when one specific variable changes.',
        hint3: 'A catalyst speeds up both forward and reverse reactions equally.',
        explanation: 'At equilibrium, forward rate = reverse rate. $K$ depends only on temperature. When $K \\gg 1$, products dominate. A catalyst speeds both reactions equally and does not change $K$.'
      }
    },
    {
      id: 'ece1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Quick Practice** 🧮

Answer the following about equilibrium constants:

**1)** If $K = 4.2 \\times 10^8$, are products or reactants favored? (Enter "products" or "reactants")

**2)** If $K = 6.3 \\times 10^{-11}$, are products or reactants favored? (Enter "products" or "reactants")

**3)** Does adding a catalyst change the value of $K$? (Enter "yes" or "no")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['products', 'reactants', 'no'],
        hint1: 'A very large $K$ means the numerator (products) is much bigger than the denominator.',
        hint2: 'A very small $K$ means products are present in tiny amounts compared to reactants.',
        hint3: 'Catalysts affect the rate of reaching equilibrium, not the position.',
        explanation: '1) $K = 4.2 \\times 10^8 \\gg 1$, so products are strongly favored. 2) $K = 6.3 \\times 10^{-11} \\ll 1$, so reactants are strongly favored. 3) No — a catalyst speeds both forward and reverse reactions equally and does not change $K$.'
      }
    },
    {
      id: 'ece1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Check — What Is Equilibrium?** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about chemical equilibrium is correct?',
            options: [
              'At equilibrium, all reactions have stopped',
              'Equilibrium can only be reached with a catalyst',
              'At equilibrium, concentrations are constant because forward and reverse rates are equal',
              'Equilibrium requires that product and reactant concentrations be equal'
            ],
            correctAnswer: 2,
            explanation: 'At dynamic equilibrium, forward and reverse rates are equal, so concentrations remain constant. Reactions continue — they have not stopped. A catalyst is not required, and concentrations need not be equal.'
          },
          {
            question: 'For $\\text{H}_2(g) + \\text{I}_2(g) \\rightleftharpoons 2\\,\\text{HI}(g)$, $K_c = 54$ at 425°C. This tells us that at equilibrium:',
            options: [
              'Very little HI is present',
              'Products (HI) are favored',
              'The reaction does not occur',
              'Reactants are favored'
            ],
            correctAnswer: 1,
            explanation: '$K_c = 54 > 1$ means the products are favored at equilibrium — there is more HI than $H_{2}$ and $I_{2}$ at this temperature.'
          }
        ]
      }
    }
  ]
}
