export const chemReactionRatesAndRateLawsPart3Data = {
  topicSlug: 'reaction-rates-and-rate-laws',
  sections: [
    {
      id: 'rr3-intro',
      type: 'text' as const,
      content: `# 📐 Rate Laws

**Part 3 of 7 — The Mathematical Heart of Kinetics**

---

### Topics in This Part

| Section |
|---------|
| 📏 The General Rate Law |
| Critical Points |
| What Does Order Mean? |
| 🔍 Determining Order from Experimental Data |
| The Method of Initial Rates |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rr3-rate-law-form',
      type: 'text' as const,
      content: `
## 📏 The General Rate Law

For a reaction $aA + bB \\rightarrow \\text{products}$:

$$\\boxed{\\text{Rate} = k[A]^m[B]^n}$$

| Symbol | Meaning |
|--------|---------|
| $k$ | Rate constant (temperature-dependent) |
| $[A], [B]$ | Molar concentrations of reactants |
| $m$ | Order with respect to A |
| $n$ | Order with respect to B |
| $m + n$ | Overall order of the reaction |


---

### Critical Points

- **$m$ and $n$ are NOT necessarily the stoichiometric coefficients** $a$ and $b$
- Orders must be determined from **experimental data**

> ⚠️ **Warning:** You **cannot** read rate law exponents off the balanced equation! Orders must be determined from experimental data. They only equal coefficients for elementary (single-step) reactions.

- Orders can be 0, 1, 2, or even fractional
- The rate constant $k$ depends on **temperature** but NOT on concentration


---

### What Does Order Mean?

| Order in A ($m$) | Effect of Doubling [A] |
|-----------------|----------------------|
| 0 | Rate unchanged (×1) |
| 1 | Rate doubles (×2) |
| 2 | Rate quadruples (×4) |
| 3 | Rate increases 8× |
      `
    },
    {
      id: 'rr3-order-quiz',
      type: 'multiple-choice' as const,
      content: `
**Reaction Order Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For Rate = k[A]$ {}^{2}$[B], what is the overall order of the reaction?',
            options: [
              '1',
              '2',
              '3',
              '4'
            ],
            correctAnswer: 2,
            explanation: 'Overall order = sum of individual orders = 2 + 1 = 3. The reaction is second-order in A, first-order in B, and third-order overall.'
          },
          {
            question: 'If the rate law is Rate = k[A]$ {}^{2}$[B]$ {}^{0}$, what happens to the rate when [B] is tripled?',
            options: [
              'Rate triples',
              'Rate increases by 9×',
              'Rate is unchanged',
              'Rate decreases'
            ],
            correctAnswer: 2,
            explanation: '[B]$ {}^{0}$ = 1, so the concentration of B does not appear in the rate law. The rate is independent of [B].'
          },
          {
            question: 'The rate constant k depends on:',
            options: [
              'Concentration of reactants',
              'Temperature only',
              'Concentration and temperature',
              'Volume of the container'
            ],
            correctAnswer: 1,
            explanation: 'The rate constant k depends on temperature (through the Arrhenius equation: k = $Ae^{-Ea/RT}$) but is independent of reactant concentrations.'
          }
        ]
      }
    },
    {
      id: 'rr3-determining-order',
      type: 'text' as const,
      content: `
## 🔍 Determining Order from Experimental Data

### The Method of Initial Rates

The most common technique: measure the initial rate of reaction for several experiments where you vary one concentration at a time.

> 🔑 **Key Concept:** In the **method of initial rates**, you vary **one concentration at a time** while keeping others constant, then take ratios to determine each order.


---

### Example Data

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s) |
|-----------|---------|---------|-------------------|
| 1 | 0.10 | 0.10 | 0.015 |
| 2 | 0.20 | 0.10 | 0.060 |
| 3 | 0.10 | 0.20 | 0.030 |


---

### Step 1: Find order in A

Compare Exp 1 and 2 ([B] is constant):
$$\\frac{\\text{Rate}_2}{\\text{Rate}_1} = \\frac{k[A]_2^m[B]^n}{k[A]_1^m[B]^n} = \\left(\\frac{[A]_2}{[A]_1}\\right)^m$$

$$\\frac{0.060}{0.015} = \\left(\\frac{0.20}{0.10}\\right)^m \\Rightarrow 4 = 2^m \\Rightarrow m = 2$$


---

### Step 2: Find order in B

Compare Exp 1 and 3 ([A] is constant):
$$\\frac{0.030}{0.015} = \\left(\\frac{0.20}{0.10}\\right)^n \\Rightarrow 2 = 2^n \\Rightarrow n = 1$$


---

### Step 3: Write the rate law and find k

$$\\boxed{\\text{Rate} = k[A]^2[B]}$$

Using Exp 1: $0.015 = k(0.10)^2(0.10) = k(0.001)$

$$\\boxed{k = \\frac{0.015}{0.001} = 15 \\; \\text{M}^{-2}\\text{s}^{-1}}$$
      `
    },
    {
      id: 'rr3-order-determination-drill',
      type: 'input-boxes' as const,
      content: `
**Order Determination Practice** 🧮

Given:

| Experiment | [X] (M) | [Y] (M) | Initial Rate (M/s) |
|-----------|---------|---------|-------------------|
| 1 | 0.10 | 0.10 | 0.0020 |
| 2 | 0.30 | 0.10 | 0.018 |
| 3 | 0.10 | 0.30 | 0.0060 |

**1)** What is the order with respect to X? (integer)

**2)** What is the order with respect to Y? (integer)

**3)** What is the value of k? (in appropriate units, give the number only — e.g., if k = 2.0, enter 2.0)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1', '2.0'],
        hint1: 'Compare Exp 1 & 2: Rate ratio = 0.018/0.0020 = 9. [X] ratio = 0.30/0.10 = 3. So $3^{m}$ = 9.',
        hint2: 'Compare Exp 1 & 3: Rate ratio = 0.0060/0.0020 = 3. [Y] ratio = 3. So $3^{n}$ = 3.',
        hint3: 'Rate = k[X]$ {}^{2}$[Y]. Use Exp 1: 0.0020 = $k(0.10)^{2}(0.10)$ = k(0.001). k = 2.0 $M^{-2}s^{-1}$.',
        explanation: '1) 0.018/0.0020 = 9 = $3^{m}$, so m = 2. 2) 0.0060/0.0020 = 3 = $3^{n}$, so n = 1. 3) Rate = k[X]$ {}^{2}$[Y]. 0.0020 = k(0.01)(0.10) = 0.001k. k = 2.0 $M^{-2}s^{-1}$.'
      }
    },
    {
      id: 'rr3-common-mistakes',
      type: 'text' as const,
      content: `
## 📌 Common Mistakes to Avoid

### ❌ Mistake 1: Using stoichiometric coefficients as orders

For $2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$, the rate law is experimentally found to be:

$$\\text{Rate} = k[\\text{NO}]^2[\\text{O}_2]$$

The orders *happen* to match the coefficients here, but this is **coincidence** — it only occurs when the reaction happens in a single elementary step.


---

### ❌ Mistake 2: Forgetting to hold one variable constant

When comparing experiments to find the order in A, you must choose experiments where **[B] is the same**. If both change, you cannot isolate the effect of one.


---

### ❌ Mistake 3: Confusing rate with rate constant

- **Rate** changes as concentrations change during a reaction
- **Rate constant $k$** is fixed at a given temperature
      `
    },
    {
      id: 'rr3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Rate Law Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The exponents in a rate law must be determined',
            options: ['from the balanced equation', 'experimentally', 'from the activation energy', 'from thermodynamic data']
          },
          {
            label: 'If doubling [A] causes no change in rate, the order in A is',
            options: ['0', '1', '2', '−1']
          },
          {
            label: 'If tripling [B] causes the rate to increase 27×, the order in B is',
            options: ['1', '2', '3', '1/3']
          },
          {
            label: 'The rate constant k changes when you change',
            options: ['concentration', 'volume', 'temperature', 'pressure']
          }
        ],
        correctAnswers: ['experimentally', '0', '3', 'temperature'],
        hint1: 'Rate laws cannot be deduced from the overall balanced equation alone.',
        hint2: '$2^{0}$ = 1, so rate is unchanged.',
        hint3: '$3^{m}$ = 27 → m = 3.',
        explanation: 'Rate law exponents are experimental. Order 0 means rate is independent of that species. $3^{3}$ = 27 so order is 3. k depends on temperature via the Arrhenius equation.'
      }
    },
    {
      id: 'rr3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rate Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For Rate = k[A][B]$ {}^{2}$, if [A] is doubled and [B] is tripled, the rate changes by a factor of:',
            options: [
              '6',
              '12',
              '18',
              '36'
            ],
            correctAnswer: 2,
            explanation: 'Factor = $(2)^{1}$ × $(3)^{2}$ = 2 × 9 = 18. The rate increases by a factor of 18.'
          },
          {
            question: 'A reaction has overall order 2. Which could be the rate law?',
            options: [
              'Rate = k[A]$ {}^{2}$[B]',
              'Rate = k[A][B]',
              'Rate = k[A]$ {}^{3}$',
              'Rate = k[A]$ {}^{2}$[B]$ {}^{2}$'
            ],
            correctAnswer: 1,
            explanation: 'Rate = k[A][B] has overall order 1 + 1 = 2. The other options give orders of 3, 3, and 4 respectively.'
          }
        ]
      }
    }
  ]
}
