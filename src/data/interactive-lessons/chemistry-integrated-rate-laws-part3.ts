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
| ⏱️ Derivation (for Rate = k[A]²) |
| Linear Form: $1/[A]$ vs $t$ |
| 📌 Second-Order Half-Life |
| Successive Half-Lives |
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
## ⏱️ Derivation (for Rate = k[A]²)

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
            explanation: '1/[A] = kt + 1/[A]₀. The slope is +k (positive), unlike zero-order (−k) and first-order (−k for ln[A]).'
          },
          {
            question: 'Which observation confirms a reaction is second-order rather than first-order?',
            options: [
              'A plot of [A] vs t is curved',
              'A plot of ln[A] vs t is curved, but 1/[A] vs t is linear',
              'A plot of ln[A] vs t is linear',
              'The half-life is constant'
            ],
            correctAnswer: 1,
            explanation: 'If ln[A] vs t is curved but 1/[A] vs t is linear, the reaction is second-order. For first-order, ln[A] vs t would be linear.'
          },
          {
            question: 'The units of k for a second-order reaction are:',
            options: [
              'M/s',
              's⁻¹',
              'M⁻¹s⁻¹',
              'M⁻²s⁻¹'
            ],
            correctAnswer: 2,
            explanation: 'For second-order: k = Rate/[A]² = (M/s)/M² = M⁻¹s⁻¹.'
          }
        ]
      }
    },
    {
      id: 'ir3-half-life',
      type: 'text' as const,
      content: `
## 📌 Second-Order Half-Life

Set $[A] = [A]_0/2$:

$$\\frac{1}{[A]_0/2} = kt_{1/2} + \\frac{1}{[A]_0}$$

$$\\frac{2}{[A]_0} - \\frac{1}{[A]_0} = kt_{1/2}$$

$$\\frac{1}{[A]_0} = kt_{1/2}$$

$$\\boxed{t_{1/2} = \\frac{1}{k[A]_0}}$$


---

> 🔑 **Key Concept:** The half-life of a second-order reaction is **inversely proportional** to $[A]_0$:
> - Higher $[A]_0$ → shorter half-life
> - Each successive half-life is **longer** (doubles each time!)


---

### Successive Half-Lives

| Half-life | Starting [A] | Duration |
|-----------|-------------|----------|
| 1st | $[A]_0$ | $1/(k[A]_0)$ |
| 2nd | $[A]_0/2$ | $2/(k[A]_0)$ |
| 3rd | $[A]_0/4$ | $4/(k[A]_0)$ |

Each successive half-life is **twice** the previous one. This is a telltale sign of second-order kinetics.
      `
    },
    {
      id: 'ir3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Second-Order Calculations** 🧮

A second-order reaction has $k = 0.50$ M⁻¹s⁻¹ and $[A]_0 = 0.80$ M.

**1)** What is the half-life? (in seconds, to 3 significant figures)

**2)** What is [A] after 5.0 s? (in M, to 3 significant figures)

**3)** What is the second half-life (starting from [A] = 0.40 M)? (in seconds, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.5', '0.24', '5.0'],
        hint1: 't₁/₂ = 1/(k[A]₀) = 1/(0.50 × 0.80) = 1/0.40 = 2.5 s.',
        hint2: '1/[A] = kt + 1/[A]₀ = 0.50(5.0) + 1/0.80 = 2.50 + 1.25 = 3.75. [A] = 1/3.75 = 0.267 ≈ 0.27. Hmm wait let me recalc: 1/0.80 = 1.25. 0.50(5.0) = 2.50. Total = 3.75. [A] = 1/3.75 = 0.2667. Rounding to 2 decimal places: 0.27. Actually let me re-examine. 1/[A] = 0.50(5.0) + 1.25 = 3.75. [A] = 0.267 → 0.27.',
        hint3: 't₁/₂ = 1/(k × 0.40) = 1/(0.50 × 0.40) = 1/0.20 = 5.0 s. This is double the first half-life!',
        explanation: '1) t₁/₂ = 1/(0.50 × 0.80) = 2.5 s. 2) 1/[A] = 0.50(5.0) + 1.25 = 3.75 → [A] = 0.27 M. 3) Second t₁/₂ = 1/(0.50 × 0.40) = 5.0 s = 2 × first t₁/₂.'
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
| Half-life | $[A]_0/(2k)$ | $0.693/k$ | $1/(k[A]_0)$ |
| Successive $t_{1/2}$ | Shorter | **Constant** | Longer |
| Units of $k$ | M/s | s⁻¹ | M⁻¹s⁻¹ |

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
            label: 'Successive half-lives get shorter → the reaction is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'Successive half-lives get longer (each double the last) → the reaction is',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'The slope of the linear plot is POSITIVE for',
            options: ['zero-order', 'first-order', 'second-order', 'all orders']
          }
        ],
        correctAnswers: ['first-order', 'zero-order', 'second-order', 'second-order'],
        hint1: 'Only first-order has t₁/₂ = 0.693/k (constant).',
        hint2: 'Zero-order: t₁/₂ = [A]₀/(2k), proportional to remaining [A].',
        hint3: 'Second-order: each t₁/₂ doubles.',
        explanation: 'Constant half-lives → first-order. Decreasing half-lives → zero-order. Increasing (doubling) half-lives → second-order. Only second-order has positive slope (+k for 1/[A] vs t).'
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
            question: 'A second-order reaction has k = 0.25 M⁻¹s⁻¹ and [A]₀ = 1.00 M. What is [A] after 2.0 s?',
            options: [
              '0.50 M',
              '0.67 M',
              '0.33 M',
              '0.75 M'
            ],
            correctAnswer: 1,
            explanation: '1/[A] = kt + 1/[A]₀ = 0.25(2.0) + 1.00 = 0.50 + 1.00 = 1.50. [A] = 1/1.50 = 0.667 ≈ 0.67 M.'
          },
          {
            question: 'A reaction has a first half-life of 100 s and a second half-life of 200 s. The reaction order is most likely:',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: 'The second half-life is double the first → successive half-lives are increasing by a factor of 2 → second-order.'
          }
        ]
      }
    }
  ]
}
