export const chemIntegratedRateLawsPart2Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir2-intro',
      type: 'text' as const,
      content: `
# 📉 First-Order Integrated Rate Law

**Part 2 of 7 — Exponential Decay**

First-order reactions are the most common type in chemistry. Radioactive decay, many decomposition reactions, and most biochemical processes follow first-order kinetics. The math involves logarithms, and the behavior is **exponential decay**.
      `
    },
    {
      id: 'ir2-derivation',
      type: 'text' as const,
      content: `
## Derivation

For a first-order reaction: $\\text{Rate} = k[A]$

$$-\\frac{d[A]}{dt} = k[A]$$

Separating variables and integrating:

$$\\int_{[A]_0}^{[A]} \\frac{d[A]}{[A]} = -\\int_0^t k \\, dt$$

$$\\ln[A] - \\ln[A]_0 = -kt$$

$$\\boxed{\\ln[A] = -kt + \\ln[A]_0}$$

Or equivalently:

$$\\boxed{[A] = [A]_0 e^{-kt}}$$

### Linear Form: $\\ln[A]$ vs $t$

| Variable | Corresponds To |
|----------|---------------|
| $y$ | $\\ln[A]$ |
| $m$ (slope) | $-k$ |
| $x$ | $t$ |
| $b$ (y-intercept) | $\\ln[A]_0$ |

### Key Feature

A plot of $\\ln[A]$ vs $t$ is **linear** for a first-order reaction. The slope equals $-k$.
      `
    },
    {
      id: 'ir2-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**First-Order Graphical Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For a first-order reaction, which plot gives a straight line?',
            options: [
              '[A] vs t',
              'ln[A] vs t',
              '1/[A] vs t',
              '[A]² vs t'
            ],
            correctAnswer: 1,
            explanation: 'The first-order integrated rate law is ln[A] = −kt + ln[A]₀, which is linear in ln[A] vs t.'
          },
          {
            question: 'If a plot of ln[A] vs t gives a straight line with slope −0.035, what is k?',
            options: [
              '0.035 s⁻¹',
              '−0.035 s⁻¹',
              '28.6 s',
              '0.035 M/s'
            ],
            correctAnswer: 0,
            explanation: 'Slope = −k, so k = −(−0.035) = 0.035 s⁻¹. The rate constant is always positive; the units s⁻¹ confirm first-order.'
          },
          {
            question: 'For [A] = [A]₀e^(−kt), the concentration:',
            options: [
              'Decreases linearly with time',
              'Decreases exponentially, never reaching zero',
              'Decreases to zero in finite time',
              'Remains constant'
            ],
            correctAnswer: 1,
            explanation: 'Exponential decay: [A] approaches zero asymptotically but theoretically never reaches it. This contrasts with zero-order, where [A] = 0 at t = [A]₀/k.'
          }
        ]
      }
    },
    {
      id: 'ir2-half-life',
      type: 'text' as const,
      content: `
## First-Order Half-Life

Set $[A] = [A]_0/2$:

$$\\ln\\frac{[A]_0/2}{[A]_0} = -kt_{1/2}$$

$$\\ln\\frac{1}{2} = -kt_{1/2}$$

$$-0.693 = -kt_{1/2}$$

$$\\boxed{t_{1/2} = \\frac{0.693}{k}}$$

### The Most Important Feature

The half-life of a first-order reaction is **independent of initial concentration**.

This means:
- Every half-life has the **same duration**
- After 1 half-life: 50% remains
- After 2 half-lives: 25% remains
- After 3 half-lives: 12.5% remains
- After $n$ half-lives: $(1/2)^n$ remains

### Connection to Radioactive Decay

All radioactive decay follows first-order kinetics:

$$N = N_0 e^{-\\lambda t}, \\quad t_{1/2} = \\frac{0.693}{\\lambda}$$

where $\\lambda$ is the decay constant (equivalent to $k$).
      `
    },
    {
      id: 'ir2-half-life-drill',
      type: 'input-boxes' as const,
      content: `
**First-Order Calculations** 🧮

A first-order reaction has $k = 0.0100$ s⁻¹ and $[A]_0 = 2.00$ M.

1) What is the half-life? (in seconds, 3 significant figures)

2) What is [A] after 100 s? (in M, 3 significant figures)

3) How long until only 10% of A remains? (in seconds, 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['69.3', '0.736', '230.3'],
        hint1: 't₁/₂ = 0.693/k = 0.693/0.0100 = 69.3 s.',
        hint2: '[A] = 2.00 × e^(−0.0100 × 100) = 2.00 × e^(−1.00) = 2.00 × 0.3679 = 0.736.',
        hint3: '10% remains: [A]/[A]₀ = 0.10. ln(0.10) = −kt. t = −ln(0.10)/0.0100 = 2.303/0.0100 = 230.3 s.',
        explanation: '1) t₁/₂ = 0.693/0.0100 = 69.3 s. 2) [A] = 2.00e^(−1.00) = 2.00(0.3679) = 0.736 M. 3) ln(0.10) = −0.0100t → t = 2.303/0.0100 = 230.3 s.'
      }
    },
    {
      id: 'ir2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**First-Order Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For first-order, doubling [A]₀ changes the half-life by a factor of',
            options: ['2', '1/2', '1 (no change)', '4']
          },
          {
            label: 'After 3 half-lives, the fraction of A remaining is',
            options: ['1/3', '1/4', '1/8', '1/16']
          },
          {
            label: 'The units of a first-order rate constant are',
            options: ['M/s', 's⁻¹', 'M⁻¹s⁻¹', 'M⁻²s⁻¹']
          },
          {
            label: 'A first-order [A] vs t curve is',
            options: ['linear', 'exponential decay', 'parabolic', 'sigmoidal']
          }
        ],
        correctAnswers: ['1 (no change)', '1/8', 's⁻¹', 'exponential decay'],
        hint1: 't₁/₂ = 0.693/k — does not contain [A]₀.',
        hint2: '(1/2)³ = 1/8.',
        hint3: 'k = Rate/[A] = (M/s)/M = s⁻¹.',
        explanation: 'First-order t₁/₂ is independent of [A]₀. After n half-lives: fraction = (1/2)^n = 1/8 for n = 3. k has units s⁻¹. [A] vs t shows exponential decay.'
      }
    },
    {
      id: 'ir2-ratio-form',
      type: 'text' as const,
      content: `
## Useful Ratio Form

Often you need to find how much reactant remains at time $t$ without knowing $[A]_0$ explicitly:

$$\\ln\\frac{[A]_t}{[A]_0} = -kt$$

$$\\frac{[A]_t}{[A]_0} = e^{-kt}$$

### Quick Calculations with Half-Lives

| Time | Fraction remaining | Percent remaining |
|------|-------------------|------------------|
| $0$ | 1 | 100% |
| $t_{1/2}$ | 1/2 | 50% |
| $2t_{1/2}$ | 1/4 | 25% |
| $3t_{1/2}$ | 1/8 | 12.5% |
| $4t_{1/2}$ | 1/16 | 6.25% |
| $10t_{1/2}$ | 1/1024 | ~0.1% |
      `
    },
    {
      id: 'ir2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — First-Order Integrated Rate Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Carbon-14 has a half-life of 5,730 years. What is its decay constant?',
            options: [
              '1.21 × 10⁻⁴ yr⁻¹',
              '8.27 × 10³ yr⁻¹',
              '5.73 × 10³ yr⁻¹',
              '3.83 × 10⁻³ yr⁻¹'
            ],
            correctAnswer: 0,
            explanation: 'k = 0.693/t₁/₂ = 0.693/5730 = 1.21 × 10⁻⁴ yr⁻¹.'
          },
          {
            question: 'A first-order reaction is 87.5% complete. How many half-lives have passed?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: '87.5% complete → 12.5% remains = 1/8 = (1/2)³. So 3 half-lives have passed.'
          }
        ]
      }
    }
  ]
}
