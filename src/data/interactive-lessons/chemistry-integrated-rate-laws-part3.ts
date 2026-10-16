export const chemIntegratedRateLawsPart3Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir3-intro',
      type: 'text' as const,
      content: `# 📊 Second-Order Integrated Rate Law

**Part 3 of 7 — Inverse Concentration and Time**

---

### Topics in This Part

| Section |
|---------|
| ⏱️ Derivation (for Rate = k[A]$ {}^{2}$) |
| Linear Form: $1/[A]$ vs $t$ |
| 🧮 Using the Second-Order Equation |
| ⚖️ Comparing All Three Orders |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 3
- Understanding the core concepts covered in Part 3
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ir3-derivation',
      type: 'text' as const,
      content: `
## ⏱️ Derivation (for Rate = k[A]$ {}^{2}$)

$$-\\frac{d[A]}{dt} = k[A]^2$$

Separating variables:

$$\\frac{d[A]}{[A]^2} = -k \\, dt$$

Integrating:

$$\\int_{[A]_0}^{[A]} [A]^{-2} \\, d[A] = -\\int_0^t k \\, dt$$

$$-\\frac{1}{[A]} + \\frac{1}{[A]_0} = -kt$$

$$\\boxed{\\frac{1}{[A]} = kt + \\frac{1}{[A]_0}}$$


---

### Linear Form: $1/[A]$ vs $t$

| Variable | Corresponds To |
|----------|---------------|
| $y$ | $1/[A]$ |
| $m$ (slope) | $+k$ |
| $x$ | $t$ |
| $b$ (y-intercept) | $1/[A]_0$ |


---

> 🔑 **Key Concept:** A plot of $1/[A]$ vs $t$ is **linear** for a second-order reaction. The slope equals $+k$ (positive!).
      `
    },
    {
      id: 'ir3-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Second-Order Graphical Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a second-order reaction, the slope of the 1/[A] vs t plot equals:',
            options: [
              '−k',
              'k',
              '1/k',
              '−1/k'
            ],
            correctAnswer: 1,
            explanation: '1/[A] = kt + 1/[A]$ {}_{0}$. The slope is +k (positive), unlike zero-order (−k) and first-order (−k for ln[A]).'
          },
          {
            question: 'Which observation confirms a reaction is second-order rather than first-order?',
            options: [
              '[A] vs t is curved, but ln[A] vs t is linear',
              'ln[A] vs t is curved, but 1/[A] vs t is linear',
              '1/[A] vs t is curved, but [A] vs t is linear',
              'Successive half-lives stay constant'
            ],
            correctAnswer: 1,
            explanation: 'If ln[A] vs t is curved but 1/[A] vs t is linear, the reaction is second-order. A linear ln[A] plot or constant half-lives point to first-order, and a linear [A] plot points to zero-order.'
          },
          {
            question: 'The units of k for a second-order reaction are:',
            options: [
              'M/s',
              '$s^{-1}$',
              '$M^{-1}s^{-1}$',
              '$M^{-2}s^{-1}$'
            ],
            correctAnswer: 2,
            explanation: 'For second-order: k = Rate/[A]$ {}^{2}$ = $(M/s)/M^{2}$ = $M^{-1}s^{-1}$.'
          }
        ]
      }
    },
    {
      id: 'ir3-half-life',
      type: 'text' as const,
      content: `
## 🧮 Using the Second-Order Equation

Rearranged for time, the integrated rate law answers "how long until...?" questions:

$$\\boxed{t = \\frac{\\frac{1}{[A]} - \\frac{1}{[A]_0}}{k}}$$


---

### Example

> **Problem:** A second-order reaction has $k = 0.20$ $M^{-1}s^{-1}$ and $[A]_0 = 0.50$ M. Find $[A]$ at 10 s, and the time for $[A]$ to reach 0.10 M.

**Solution:**

$$\\frac{1}{[A]} = (0.20)(10) + \\frac{1}{0.50} = 2.0 + 2.0 = 4.0 \\ M^{-1} \\Rightarrow [A] = 0.25 \\text{ M}$$

$$t = \\frac{\\frac{1}{0.10} - \\frac{1}{0.50}}{0.20} = \\frac{10.0 - 2.0}{0.20} = 40 \\text{ s}$$


---

> 🔑 **Key Concept:** Notice that $[A]$ halved from 0.50 M to 0.25 M in 10 s, but needs 20 s more to halve again to 0.125 M ($1/[A] = 8.0$ at $t = 30$ s). Only a **first-order** reaction has a constant half-life, so unequal "halving times" rule first order out. The AP exam asks for half-life calculations only for first-order reactions.
      `
    },
    {
      id: 'ir3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Second-Order Calculations** 🧮

A second-order reaction has $k = 0.50$ $M^{-1}s^{-1}$ and $[A]_0 = 0.80$ M.

**1)** What is [A] after 5.0 s? (in M, to 3 significant figures)

**2)** How long until [A] = 0.40 M? (in seconds, to 2 significant figures)

**3)** How long, measured from t = 0, until [A] = 0.20 M? (in seconds, to 2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.267', '2.5', '7.5'],
        hint1: '1/[A] = kt + 1/[A]$ {}_{0}$ = 0.50(5.0) + 1/0.80 = 2.50 + 1.25 = 3.75. [A] = 1/3.75 = 0.267 M.',
        hint2: 't = (1/[A] − 1/[A]$ {}_{0}$)/k = (2.50 − 1.25)/0.50 = 2.5 s.',
        hint3: 't = (5.00 − 1.25)/0.50 = 3.75/0.50 = 7.5 s.',
        explanation: '1) 1/[A] = 0.50(5.0) + 1.25 = 3.75 → [A] = 0.267 M. 2) t = (2.50 − 1.25)/0.50 = 2.5 s. 3) t = (5.00 − 1.25)/0.50 = 7.5 s. Halving from 0.80 to 0.40 M took 2.5 s, but halving again from 0.40 to 0.20 M took 5.0 s more, so the half-life is not constant: a sign the reaction is not first order.'
      }
    },
    {
      id: 'ir3-comparison-table',
      type: 'text' as const,
      content: `
## ⚖️ Comparing All Three Orders

| Feature | Zero-Order | First-Order | Second-Order |
|---------|-----------|-------------|-------------|
| Rate law | $k$ | $k[A]$ | $k[A]^2$ |
| Integrated law | $[A] = -kt + [A]_0$ | $\\ln[A] = -kt + \\ln[A]_0$ | $1/[A] = kt + 1/[A]_0$ |
| Linear plot | $[A]$ vs $t$ | $\\ln[A]$ vs $t$ | $1/[A]$ vs $t$ |
| Slope | $-k$ | $-k$ | $+k$ |
| Half-life | Not constant | **Constant**: $0.693/k$ | Not constant |
| Units of $k$ | M/s | $s^{-1}$ | $M^{-1}s^{-1}$ |

> 💡 **Tip:** Only second-order has a **positive** slope in its linear plot. Zero and first-order both have slope $= -k$.
      `
    },
    {
      id: 'ir3-order-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Order** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Successive half-lives are constant → the reaction is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'A plot of 1/[A] vs t is linear → the reaction is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'A plot of [A] vs t is linear → the reaction is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'The slope of the linear plot is POSITIVE for',
            options: ['zero-order', 'first-order', 'second-order', 'all orders']
          }
        ],
        correctAnswers: ['first-order', 'second-order', 'zero-order', 'second-order'],
        hint1: 'Only first-order has $t_{1}/_{2}$ = 0.693/k (constant).',
        hint2: 'Match each linear plot to its integrated rate law.',
        hint3: 'Only one integrated rate law has +k as its slope.',
        explanation: 'Constant half-lives → first-order. Linear 1/[A] vs t → second-order. Linear [A] vs t → zero-order. Only second-order has positive slope (+k for 1/[A] vs t).'
      }
    },
    {
      id: 'ir3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Second-Order Integrated Rate Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A second-order reaction has k = 0.25 $M^{-1}s^{-1}$ and [A]$ {}_{0}$ = 1.00 M. What is [A] after 2.0 s?',
            options: [
              '0.50 M',
              '0.67 M',
              '0.33 M',
              '0.75 M'
            ],
            correctAnswer: 1,
            explanation: '1/[A] = kt + 1/[A]$ {}_{0}$ = 0.25(2.0) + 1.00 = 0.50 + 1.00 = 1.50. [A] = 1/1.50 = 0.667 ≈ 0.67 M.'
          },
          {
            question: 'For A → products, [A] = 0.80 M at t = 0 s, 0.40 M at t = 100 s and 0.20 M at t = 300 s. Which plot of these data is linear?',
            options: [
              '[A] vs t',
              'ln[A] vs t',
              '1/[A] vs t',
              'None of the three'
            ],
            correctAnswer: 2,
            explanation: '1/[A] = 1.25, 2.50 and 5.00 $M^{-1}$ at 0, 100 and 300 s: it rises 1.25 in the first 100 s and 2.50 in the next 200 s, the same 0.0125 $M^{-1}s^{-1}$ each time, so 1/[A] vs t is linear (second order). ln[A] falls by 0.693 in 100 s and then by 0.693 in 200 s, so the half-life is not constant and ln[A] vs t curves; [A] drops 0.40 M in 100 s and then only 0.20 M in 200 s, so [A] vs t curves too.'
          }
        ]
      }
    }
  ]
}
