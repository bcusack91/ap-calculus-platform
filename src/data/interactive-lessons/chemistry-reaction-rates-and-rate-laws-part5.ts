export const chemReactionRatesAndRateLawsPart5Data = {
  topicSlug: 'reaction-rates-and-rate-laws',
  sections: [
    {
      id: 'rr5-intro',
      type: 'text' as const,
      content: `# 📏 Units of the Rate Constant k

**Part 5 of 7 — How Units Change with Reaction Order**

---

### Topics in This Part

| Section |
|---------|
| 📌 Deriving Units of k |
| Summary Table |
| The Pattern |
| ⚗️ Zero-Order Reactions |
| When Do Zero-Order Reactions Occur? |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rr5-deriving-units',
      type: 'text' as const,
      content: `
## 📌 Deriving Units of k

Start from the general rate law:

$$\\text{Rate} = k[A]^m[B]^n$$

Rate always has units of **M/s** $(or mol\\cdot L^{-1}\\cdot s^{-1})$. Concentration has units of **M** (mol/L).

Solving for $k$:

$$k = \\frac{\\text{Rate}}{[A]^m[B]^n}$$

$$\\boxed{\\text{Units of } k = \\frac{\\text{M/s}}{\\text{M}^{m+n}} = \\text{M}^{1-(m+n)} \\cdot \\text{s}^{-1}}$$


---

### Summary Table

| Overall Order | Units of $k$ | Example |
|--------------|-------------|---------|
| 0 | $M\\cdot s^{-1}$ (or M/s) | $k = \\frac{\\text{M/s}}{\\text{M}^0} = \\text{M/s}$ |
| 1 | $s^{-1}$ | $k = \\frac{\\text{M/s}}{\\text{M}^1} = \\text{s}^{-1}$ |
| 2 | $M^{-1}\\cdot s^{-1}$ | $k = \\frac{\\text{M/s}}{\\text{M}^2} = \\text{M}^{-1}\\text{s}^{-1}$ |
| 3 | $M^{-2}\\cdot s^{-1}$ | $k = \\frac{\\text{M/s}}{\\text{M}^3} = \\text{M}^{-2}\\text{s}^{-1}$ |


---

### The Pattern

$$\\boxed{\\text{Units of } k = \\text{M}^{1-n}\\text{s}^{-1}}$$

where $n$ = overall order. As order increases by 1, the power of M decreases by 1.

> 💡 **Tip:** Units of $k$ vary with reaction order! You can identify the overall order from the units of $k$, and vice versa. This is a common AP exam shortcut.
      `
    },
    {
      id: 'rr5-units-quiz',
      type: 'multiple-choice' as const,
      content: `
**Units of k Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has Rate = k[A]$ {}^{2}$. What are the units of k?',
            options: [
              'M/s',
              '$s^{-1}$',
              '$M^{-1}s^{-1}$',
              '$M^{-2}s^{-1}$'
            ],
            correctAnswer: 2,
            explanation: 'Overall order = 2. Units of k = $M^{1-2}\\cdot s^{-1}$ = $M^{-1}\\cdot s^{-1}$. You can verify: k × $M^{2}$ = $M^{-1}s^{-1}$ × $M^{2}$ = $M\\cdot s^{-1}$ = M/s ✓'
          },
          {
            question: 'If the units of k are $s^{-1}$, the overall order of the reaction is:',
            options: [
              '0',
              '1',
              '2',
              '3'
            ],
            correctAnswer: 1,
            explanation: '$s^{-1}$ = $M^{0}\\cdot s^{-1}$ = $M^{1-n}\\cdot s^{-1}$. So 1 − n = 0, n = 1. This is a first-order reaction.'
          },
          {
            question: 'A zero-order reaction has Rate = k. What are the units of k?',
            options: [
              '$s^{-1}$',
              '$M\\cdot s^{-1}$',
              '$M^{-1}\\cdot s^{-1}$',
              'dimensionless'
            ],
            correctAnswer: 1,
            explanation: 'For zero-order: Rate = k, so k has the same units as rate: M/s or $M\\cdot s^{-1}$.'
          }
        ]
      }
    },
    {
      id: 'rr5-zero-order-detail',
      type: 'text' as const,
      content: `
## ⚗️ Zero-Order Reactions

$$\\boxed{\\text{Rate} = k}$$

- Rate is **constant** — independent of concentration
- Units of $k$: **M/s**
- Half-life: $t_{1/2} = \\frac{[A]_0}{2k}$ (depends on initial concentration)


---

### When Do Zero-Order Reactions Occur?

Zero-order kinetics often occur when:
- A **catalyst or enzyme is saturated** — every active site is occupied
- A reaction occurs on a **surface** that is fully covered
- **Photochemical** reactions where rate depends on light intensity, not concentration


---

### Example

Decomposition of $NH_{3}$ on a hot tungsten surface: Rate = k. The tungsten surface is saturated with $NH_{3}$, so adding more does not increase the rate.
      `
    },
    {
      id: 'rr5-first-second-order',
      type: 'text' as const,
      content: `
## ⚗️ First-Order and Second-Order Reactions

### First-Order ($n = 1$)

$$\\boxed{\\text{Rate} = k[A]}$$

- Units of $k$: **$s^{-1}$**
- Half-life: $\\boxed{t_{1/2} = \\frac{0.693}{k}}$ (**independent** of concentration!)
- Examples: Radioactive decay, many decomposition reactions

> 💡 **Tip:** First-order half-life is **constant** — it doesn't depend on how much reactant you start with. This makes it uniquely useful for radioactive decay and pharmacokinetics.


---

### Second-Order ($n = 2$)

$$\\boxed{\\text{Rate} = k[A]^2 \\quad \\text{or} \\quad \\text{Rate} = k[A][B]}$$

- Units of $k$: **$M^{-1}s^{-1}$** (for both cases)
- Half-life: $t_{1/2} = \\frac{1}{k[A]_0}$ (depends on concentration)
- Example: $2\\text{NO}_2 \\rightarrow 2\\text{NO} + \\text{O}_2$


---

### Comparing Half-Lives

| Order | $t_{1/2}$ | Dependence on $[A]_0$ |
|-------|----------|---------------------|
| 0 | $[A]_0/(2k)$ | Proportional to $[A]_0$ |
| 1 | $0.693/k$ | **Independent** of $[A]_0$ |
| 2 | $1/(k[A]_0)$ | Inversely proportional to $[A]_0$ |
      `
    },
    {
      id: 'rr5-units-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Order to Its Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a first-order reaction, the half-life',
            options: ['depends on [A]$ {}_{0}$', 'is independent of [A]$ {}_{0}$', 'increases with [A]$ {}_{0}$', 'equals [A]$ {}_{0}/2k$']
          },
          {
            label: 'The units $M^{-1}s^{-1}$ correspond to overall order',
            options: ['0', '1', '2', '3']
          },
          {
            label: 'A reaction with k = 0.045 $s^{-1}$ is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'For a zero-order reaction, the rate',
            options: ['increases with concentration', 'decreases with concentration', 'is constant', 'equals k[A]']
          }
        ],
        correctAnswers: ['is independent of [A]$ {}_{0}$', '2', 'first-order', 'is constant'],
        hint1: 'First-order: $t_{1}/_{2}$ = 0.693/k — no [A]$ {}_{0}$ in the formula.',
        hint2: '$M^{1-n}s^{-1}$ = $M^{-1}s^{-1}$ → 1 − n = −1 → n = 2.',
        hint3: 'Units $s^{-1}$ → first-order.',
        explanation: 'First-order half-life depends only on k. $M^{-1}s^{-1}$ → order 2. Units $s^{-1}$ → first-order. Zero-order: Rate = k (constant).'
      }
    },
    {
      id: 'rr5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Units and k Calculations** 🧮

**1)** A third-order reaction has Rate = k[A][B][C]. What is the power of M in the units of k? (e.g., for $M^{-1}$, enter −1)

**2)** A first-order reaction has k = 0.0250 $s^{-1}$. What is the half-life in seconds? (3 significant figures)

**3)** A zero-order reaction has k = 0.0040 M/s and [A]$ {}_{0}$ = 0.80 M. What is the half-life in seconds? (whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2', '27.7', '100'],
        hint1: 'Units of k = $M^{1-n}s^{-1}$. For n = 3: 1 − 3 = −2.',
        hint2: '$t_{1}/_{2}$ = 0.693/k = 0.693/0.0250.',
        hint3: '$t_{1}/_{2}$ = [A]$ {}_{0}/(2k)$ = 0.80/(2 × 0.0040).',
        explanation: '1) $M^{1-3}$ = $M^{-2}$, power is −2. 2) $t_{1}/_{2}$ = 0.693/0.0250 = 27.72 ≈ 27.7 s. 3) $t_{1}/_{2}$ = 0.80/(2 × 0.0040) = 0.80/0.008 = 100 s.'
      }
    },
    {
      id: 'rr5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Units of k** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has the rate law Rate = k[X]$ {}^{2}$[Y]. What are the units of k?',
            options: [
              '$M^{-1}s^{-1}$',
              '$M^{-2}s^{-1}$',
              '$M^{-3}s^{-1}$',
              '$s^{-1}$'
            ],
            correctAnswer: 1,
            explanation: 'Overall order = 2 + 1 = 3. Units = $M^{1-3}s^{-1}$ = $M^{-2}s^{-1}$.'
          },
          {
            question: 'Which reaction order has a half-life that is independent of the initial concentration?',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Third-order'
            ],
            correctAnswer: 1,
            explanation: 'First-order: $t_{1}/_{2}$ = 0.693/k. The initial concentration does not appear, so the half-life is the same regardless of how much reactant you start with.'
          }
        ]
      }
    }
  ]
}
