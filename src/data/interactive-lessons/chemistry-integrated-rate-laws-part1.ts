export const chemIntegratedRateLawsPart1Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir1-intro',
      type: 'text' as const,
      content: `# 📈 Zero-Order Integrated Rate Law

**Part 1 of 7 — When Rate Doesn\'t Depend on Concentration**

---

### Topics in This Part

| Section |
|---------|
| 📏 Derivation of the Zero-Order Integrated Rate Law |
| This is the equation of a straight line! |
| Plot: $[A]$ vs $t$ → straight line for zero-order |
| ⏳ Zero-Order Reactions Run Out |
| 🔧 How to Identify Zero-Order from Data |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
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

> 🔑 **Key Concept:** If $[A]$ vs $t$ is a straight line, the reaction is **zero-order**. The slope gives $-k$.

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
              '[A]$ {}^{2}$ vs t'
            ],
            correctAnswer: 2,
            explanation: 'The zero-order integrated rate law is [A] = −kt + [A]$ {}_{0}$, which is linear in [A] vs t. The slope gives −k.'
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
            explanation: '[A] = −kt + [A]$ {}_{0}$ has slope = −k. Since k is always positive, the slope is always negative (concentration decreases).'
          },
          {
            question: 'A zero-order reaction has [A] = 0.80 M at t = 0 and [A] = 0.40 M at t = 100 s. What is k?',
            options: [
              '0.004 M/s',
              '0.008 M/s',
              '0.40 M/s',
              '$4.0 \\times 10^{-3}$ $s^{-1}$'
            ],
            correctAnswer: 0,
            explanation: '[A] = −kt + [A]$ {}_{0}$. 0.40 = −k(100) + 0.80. k(100) = 0.40. k = 0.004 M/s. Note the units are M/s for zero-order.'
          }
        ]
      }
    },
    {
      id: 'ir1-half-life',
      type: 'text' as const,
      content: `
## ⏳ Zero-Order Reactions Run Out

Because the rate is constant, a zero-order reaction removes the **same amount** of reactant in every equal time interval. The line keeps its slope until $[A]$ reaches zero.

Set $[A] = 0$ in the integrated rate law:

$$0 = -kt + [A]_0 \\quad\\Rightarrow\\quad \\boxed{t_{\\text{complete}} = \\frac{[A]_0}{k}}$$


---

### Example

> **Problem:** A zero-order reaction has $k = 0.010$ M/s and $[A]_0 = 0.50$ M. How long until $[A] = 0.20$ M, and when is A used up?

**Solution:**

$$t = \\frac{[A]_0 - [A]}{k} = \\frac{0.50 - 0.20}{0.010} = 30 \\text{ s}$$

$$t_{\\text{complete}} = \\frac{0.50}{0.010} = 50 \\text{ s}$$


---

> 🔑 **Key Concept:** Zero order loses the same **amount** per second; first order (Part 2) loses the same **fraction** per unit time. Only first-order reactions have a constant half-life, and the AP exam uses half-life only for first-order reactions.

> ⚠️ **Warning:** Zero-order is the only order where the reaction reaches $[A] = 0$ in finite time. Don't assume all reactions behave this way!
      `
    },
    {
      id: 'ir1-half-life-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Zero-Order Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For a zero-order reaction, doubling the initial concentration',
            options: ['doubles the rate', 'halves the rate', 'does not change the rate', 'quadruples the rate']
          },
          {
            label: 'In each 10 s interval, a zero-order reaction uses up',
            options: ['the same fraction of A', 'the same amount of A', 'more A than before', 'less A than before']
          },
          {
            label: 'A zero-order reaction with [A]$ {}_{0}$ = 1.0 M and k = 0.10 M/s reaches [A] = 0 at',
            options: ['t = 5 s', 't = 10 s', 't = 20 s', 'never']
          },
          {
            label: 'The units of k for a zero-order reaction are',
            options: ['M/s', '$s^{-1}$', '$M^{-1}s^{-1}$', 'unitless']
          }
        ],
        correctAnswers: ['does not change the rate', 'the same amount of A', 't = 10 s', 'M/s'],
        hint1: 'Rate = k, with no concentration term.',
        hint2: 'The slope of [A] vs t is the same everywhere on the line.',
        hint3: 't = [A]$ {}_{0}/k$ = 1.0/0.10 = 10 s.',
        explanation: 'Zero-order: rate = k, so changing [A] does not change the rate, and [A] falls by the same amount (k × 10 s) in every 10 s interval. Complete consumption: t = [A]$ {}_{0}/k$ = 10 s. Since rate = k, k has the units of a rate, M/s.'
      }
    },
    {
      id: 'ir1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Zero-Order Calculations** 🧮

A zero-order reaction has $k = 5.0 \\times 10^{-3}$ M/s and $[A]_0 = 0.60$ M.

**1)** What is [A] after 40 s? (in M, 3 significant figures)

**2)** How long until [A] falls to 0.30 M? (in seconds, whole number)

**3)** How long until the reaction is complete ([A] = 0)? (in seconds, whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.40', '60', '120'],
        hint1: '[A] = −kt + [A]$ {}_{0}$ = −(5.0e-3)(40) + 0.60 = −0.20 + 0.60 = 0.40.',
        hint2: 't = ([A]$ {}_{0}$ − [A])/k = (0.60 − 0.30)/5.0e-3 = 60 s.',
        hint3: 't = [A]$ {}_{0}/k$ = 0.60/5.0e-3 = 120 s.',
        explanation: '1) [A] = −(0.005)(40) + 0.60 = 0.40 M. 2) t = (0.60 − 0.30)/0.005 = 60 s. 3) t = 0.60/0.005 = 120 s.'
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

| $t$ (s) | $[A]$ (M) | $\\ln[A]$ | $1/[A]$ $(M^{-1})$ |
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
            question: 'A zero-order reaction has k = 0.020 M/s and [A]$ {}_{0}$ = 1.00 M. After 20 s, [A] is:',
            options: [
              '0.20 M',
              '0.40 M',
              '0.60 M',
              '0.80 M'
            ],
            correctAnswer: 2,
            explanation: '[A] = −kt + [A]$ {}_{0}$ = −(0.020)(20) + 1.00 = −0.40 + 1.00 = 0.60 M.'
          },
          {
            question: 'Which statement about zero-order reactions is TRUE?',
            options: [
              'Half-life is independent of [A]$ {}_{0}$',
              'A plot of ln[A] vs t is linear',
              'The reaction reaches completion in finite time',
              'Rate increases as concentration decreases'
            ],
            correctAnswer: 2,
            explanation: 'Zero-order: [A] decreases linearly until it hits zero at t = [A]$ {}_{0}/k$. This is unique — first and second-order reactions theoretically never reach [A] = 0. A half-life that does not depend on [A]$ {}_{0}$ is the mark of first order; ln[A] vs t is linear for first-order; and a zero-order rate stays constant as concentration falls.'
          }
        ]
      }
    }
  ]
}
