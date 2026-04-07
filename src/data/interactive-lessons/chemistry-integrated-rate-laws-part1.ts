export const chemIntegratedRateLawsPart1Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir1-intro',
      type: 'text' as const,
      content: `
# 📈 Zero-Order Integrated Rate Law

**Part 1 of 7 — When Rate Doesn\'t Depend on Concentration**

Integrated rate laws connect **concentration** to **time** directly. While the differential rate law tells us how rate depends on concentration, the integrated form lets us calculate concentrations at any future time, determine half-lives, and identify reaction order from graphical data.

We begin with the simplest case: **zero-order** reactions.
      `
    },
    {
      id: 'ir1-derivation',
      type: 'text' as const,
      content: `
## 📏 Derivation of the Zero-Order Integrated Rate Law

For a zero-order reaction: $\\text{Rate} = k$

$$-\\frac{d[A]}{dt} = k$$

Integrating from $[A]_0$ to $[A]$ and from $0$ to $t$:

$$\\int_{[A]_0}^{[A]} d[A] = -\\int_0^t k \\, dt$$

$$[A] - [A]_0 = -kt$$

$$\\boxed{[A] = -kt + [A]_0}$$


---

### This is the equation of a straight line!

$$y = mx + b$$

| Variable | Corresponds To |
|----------|---------------|
| $y$ | $[A]$ |
| $m$ (slope) | $-k$ |
| $x$ | $t$ |
| $b$ (y-intercept) | $[A]_0$ |


---

### Plot: $[A]$ vs $t$ → straight line for zero-order

- Slope = $-k$
- y-intercept = $[A]_0$
- $[A]$ decreases **linearly** with time
      `
    },
    {
      id: 'ir1-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Zero-Order Graphical Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a zero-order reaction, which plot gives a straight line?',
            options: [
              'ln[A] vs t',
              '1/[A] vs t',
              '[A] vs t',
              '[A]² vs t'
            ],
            correctAnswer: 2,
            explanation: 'The zero-order integrated rate law is [A] = −kt + [A]₀, which is linear in [A] vs t. The slope gives −k.'
          },
          {
            question: 'The slope of the [A] vs t plot for a zero-order reaction is:',
            options: [
              'k',
              '−k',
              '1/k',
              '−1/k'
            ],
            correctAnswer: 1,
            explanation: '[A] = −kt + [A]₀ has slope = −k. Since k is always positive, the slope is always negative (concentration decreases).'
          },
          {
            question: 'A zero-order reaction has [A] = 0.80 M at t = 0 and [A] = 0.40 M at t = 100 s. What is k?',
            options: [
              '0.004 M/s',
              '0.008 M/s',
              '0.40 M/s',
              '4.0 × 10⁻³ s⁻¹'
            ],
            correctAnswer: 0,
            explanation: '[A] = −kt + [A]₀. 0.40 = −k(100) + 0.80. k(100) = 0.40. k = 0.004 M/s. Note the units are M/s for zero-order.'
          }
        ]
      }
    },
    {
      id: 'ir1-half-life',
      type: 'text' as const,
      content: `
## 📌 Zero-Order Half-Life

The **half-life** ($t_{1/2}$) is the time for the concentration to drop to half its initial value.

Set $[A] = [A]_0/2$ in the integrated rate law:

$$\\frac{[A]_0}{2} = -kt_{1/2} + [A]_0$$

$$kt_{1/2} = [A]_0 - \\frac{[A]_0}{2} = \\frac{[A]_0}{2}$$

$$\\boxed{t_{1/2} = \\frac{[A]_0}{2k}}$$


---

### Key Feature

The zero-order half-life **depends on** $[A]_0$:
- Higher initial concentration → longer half-life
- Each successive half-life is **shorter** than the previous one
- The reaction reaches [A] = 0 in a finite time: $t_{\\text{complete}} = [A]_0/k$


---

### Successive Half-Lives

| Half-life | [A] at start | [A] at end | Duration |
|-----------|-------------|-----------|----------|
| 1st | $[A]_0$ | $[A]_0/2$ | $[A]_0/(2k)$ |
| 2nd | $[A]_0/2$ | $[A]_0/4$ | $[A]_0/(4k)$ |
| 3rd | $[A]_0/4$ | $[A]_0/8$ | $[A]_0/(8k)$ |

Each successive half-life is exactly **half** the duration of the previous one.
      `
    },
    {
      id: 'ir1-half-life-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Zero-Order Half-Life Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a zero-order reaction, doubling the initial concentration',
            options: ['doubles the half-life', 'halves the half-life', 'does not change the half-life', 'quadruples the half-life']
          },
          {
            label: 'Each successive half-life for a zero-order reaction is',
            options: ['the same', 'longer', 'shorter', 'impossible to predict']
          },
          {
            label: 'A zero-order reaction with [A]₀ = 1.0 M and k = 0.10 M/s reaches [A] = 0 at',
            options: ['t = 5 s', 't = 10 s', 't = 20 s', 'never']
          },
          {
            label: 'Zero-order kinetics often arise when',
            options: ['concentrations are very low', 'a catalyst surface is saturated', 'temperature is constant', 'the reaction is reversible']
          }
        ],
        correctAnswers: ['doubles the half-life', 'shorter', 't = 10 s', 'a catalyst surface is saturated'],
        hint1: 't₁/₂ = [A]₀/(2k) — directly proportional to [A]₀.',
        hint2: 'Each successive half-life starts with half the concentration.',
        hint3: 't = [A]₀/k = 1.0/0.10 = 10 s.',
        explanation: 'Zero-order: t₁/₂ ∝ [A]₀, so doubling [A]₀ doubles t₁/₂. Each successive half-life is shorter. Complete consumption: t = [A]₀/k = 10 s. Zero-order occurs when enzyme/catalyst sites are saturated.'
      }
    },
    {
      id: 'ir1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Zero-Order Calculations** 🧮

A zero-order reaction has $k = 5.0 \\times 10^{-3}$ M/s and $[A]_0 = 0.60$ M.

**1)** What is [A] after 40 s? (in M, 3 significant figures)

**2)** What is the half-life? (in seconds, whole number)

**3)** How long until the reaction is complete ([A] = 0)? (in seconds, whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.40', '60', '120'],
        hint1: '[A] = −kt + [A]₀ = −(5.0e-3)(40) + 0.60 = −0.20 + 0.60 = 0.40.',
        hint2: 't₁/₂ = [A]₀/(2k) = 0.60/(2 × 5.0e-3) = 0.60/0.010 = 60 s.',
        hint3: 't = [A]₀/k = 0.60/5.0e-3 = 120 s.',
        explanation: '1) [A] = −(0.005)(40) + 0.60 = 0.40 M. 2) t₁/₂ = 0.60/(2 × 0.005) = 60 s. 3) t = 0.60/0.005 = 120 s.'
      }
    },
    {
      id: 'ir1-identifying-order',
      type: 'text' as const,
      content: `
## 🔧 How to Identify Zero-Order from Data

### Method: Test Different Plots

Given concentration-time data, make three plots:

| Plot | Straight line if... |
|------|-------------------|
| $[A]$ vs $t$ | Zero-order |
| $\\ln[A]$ vs $t$ | First-order |
| $1/[A]$ vs $t$ | Second-order |

For zero-order, the $[A]$ vs $t$ plot will be linear with slope $= -k$.


---

### Data Test

| $t$ (s) | $[A]$ (M) | $\\ln[A]$ | $1/[A]$ (M⁻¹) |
|---------|----------|---------|--------------|
| 0 | 0.500 | −0.693 | 2.00 |
| 10 | 0.450 | −0.799 | 2.22 |
| 20 | 0.400 | −0.916 | 2.50 |
| 30 | 0.350 | −1.050 | 2.86 |

Check constant differences: Δ[A] = −0.050 M per 10 s → constant → **zero-order** ✓

$k = 0.050/10 = 0.005$ M/s
      `
    },
    {
      id: 'ir1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Zero-Order Integrated Rate Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A zero-order reaction has k = 0.020 M/s and [A]₀ = 1.00 M. After 20 s, [A] is:',
            options: [
              '0.20 M',
              '0.40 M',
              '0.60 M',
              '0.80 M'
            ],
            correctAnswer: 2,
            explanation: '[A] = −kt + [A]₀ = −(0.020)(20) + 1.00 = −0.40 + 1.00 = 0.60 M.'
          },
          {
            question: 'Which statement about zero-order reactions is TRUE?',
            options: [
              'Half-life is independent of initial concentration',
              'A plot of ln[A] vs t is linear',
              'The reaction reaches completion in finite time',
              'Rate increases as concentration decreases'
            ],
            correctAnswer: 2,
            explanation: 'Zero-order: [A] decreases linearly until it hits zero at t = [A]₀/k. This is unique — first and second-order reactions theoretically never reach [A] = 0.'
          }
        ]
      }
    }
  ]
}
