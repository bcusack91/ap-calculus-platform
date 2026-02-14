export const chemIntegratedRateLawsPart4Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir4-intro',
      type: 'text' as const,
      content: `
# 📊 Graphical Analysis

**Part 4 of 7 — Identifying Reaction Order from Plots**

On the AP exam, you may be given data or graphs and asked to determine the reaction order. The key technique: make three plots and see which one is linear. This part gives you systematic practice with this approach.
      `
    },
    {
      id: 'ir4-strategy',
      type: 'text' as const,
      content: `
## The Three-Plot Strategy

Given concentration-vs-time data, create:

| Plot | If Linear → | Slope = | y-intercept = |
|------|-----------|---------|--------------|
| $[A]$ vs $t$ | Zero-order | $-k$ | $[A]_0$ |
| $\\ln[A]$ vs $t$ | First-order | $-k$ | $\\ln[A]_0$ |
| $1/[A]$ vs $t$ | Second-order | $+k$ | $1/[A]_0$ |

### How to Check Linearity

1. **Visual inspection**: Does it look like a straight line?
2. **Constant slope**: Calculate $\\Delta y / \\Delta x$ between successive points — is it constant?
3. **$R^2$ value**: In a calculator, the best fit gives $R^2$ closest to 1.

### AP Exam Shortcut

If you are given just the raw data, calculate the transformed values and check which set has constant spacing:

- If $\\Delta[A]$ is constant per $\\Delta t$ → **zero-order**
- If $\\Delta(\\ln[A])$ is constant per $\\Delta t$ → **first-order**
- If $\\Delta(1/[A])$ is constant per $\\Delta t$ → **second-order**
      `
    },
    {
      id: 'ir4-data-analysis-1',
      type: 'text' as const,
      content: `
## Worked Example: Identifying Order

| $t$ (s) | $[A]$ (M) | $\\ln[A]$ | $1/[A]$ (M⁻¹) |
|---------|----------|---------|--------------|
| 0 | 1.000 | 0.000 | 1.000 |
| 10 | 0.607 | −0.500 | 1.648 |
| 20 | 0.368 | −1.000 | 2.718 |
| 30 | 0.223 | −1.500 | 4.484 |
| 40 | 0.135 | −2.000 | 7.407 |

**Test [A] vs t:** Differences in [A]: −0.393, −0.239, −0.145, −0.088 → NOT constant ✗

**Test ln[A] vs t:** Differences in ln[A]: −0.500, −0.500, −0.500, −0.500 → CONSTANT ✓

**Test 1/[A] vs t:** Differences: +0.648, +1.070, +1.766, +2.923 → NOT constant ✗

**Conclusion:** The reaction is **first-order**.

$k = -\\text{slope} = -(-0.500/10) = 0.0500 \\text{ s}^{-1}$
      `
    },
    {
      id: 'ir4-practice-quiz',
      type: 'multiple-choice' as const,
      content: `
**Graphical Analysis Practice** 🎯

Given this data:

| $t$ (s) | $[B]$ (M) |
|---------|----------|
| 0 | 0.400 |
| 100 | 0.300 |
| 200 | 0.200 |
| 300 | 0.100 |
      `,
      exercise: {
        questions: [
          {
            question: 'What is the order of this reaction?',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Cannot determine'
            ],
            correctAnswer: 0,
            explanation: 'Δ[B] = −0.100 M per 100 s, consistently. Constant decrease in [A] → zero-order. [B] vs t is linear.'
          },
          {
            question: 'What is the value of k?',
            options: [
              '0.0010 M/s',
              '0.0010 s⁻¹',
              '0.0010 M⁻¹s⁻¹',
              '1.0 × 10⁻³ M⁻¹s⁻¹'
            ],
            correctAnswer: 0,
            explanation: 'Slope = −k = −0.100/100 = −0.0010. k = 0.0010 M/s. Units M/s confirm zero-order.'
          },
          {
            question: 'At what time will [B] = 0?',
            options: [
              '200 s',
              '300 s',
              '400 s',
              'Never (asymptotic)'
            ],
            correctAnswer: 2,
            explanation: '[B] = −kt + [B]₀. 0 = −(0.0010)t + 0.400. t = 400 s. Zero-order reactions reach completion in finite time.'
          }
        ]
      }
    },
    {
      id: 'ir4-data-analysis-2',
      type: 'input-boxes' as const,
      content: `
**Identify the Order** 🧮

| $t$ (min) | $[C]$ (M) | $\\ln[C]$ | $1/[C]$ (M⁻¹) |
|----------|----------|---------|--------------|
| 0 | 0.500 | −0.693 | 2.00 |
| 5 | 0.333 | −1.099 | 3.00 |
| 10 | 0.250 | −1.386 | 4.00 |
| 15 | 0.200 | −1.609 | 5.00 |

1) What is the order? (enter 0, 1, or 2)

2) What is k? (number only, to 1 decimal place)

3) What is [C] at t = 25 min? (in M, to 2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0.2', '0.13'],
        hint1: 'Check Δ(1/[C]): 1.00, 1.00, 1.00 → constant → second-order.',
        hint2: 'Slope = k = 1.00/5 = 0.20 M⁻¹min⁻¹.',
        hint3: '1/[C] = 0.20(25) + 2.00 = 5.00 + 2.00 = 7.00. [C] = 1/7.00 = 0.143 ≈ 0.14. Hmm let me recalc: 0.20 × 25 = 5.0; 5.0 + 2.0 = 7.0; 1/7.0 = 0.1429 ≈ 0.14.',
        explanation: '1) Δ(1/[C]) = 1.00 per 5 min (constant) → second-order. 2) k = slope = 1.00/5 = 0.20 M⁻¹min⁻¹. 3) 1/[C] = 0.20(25) + 2.00 = 7.00 → [C] = 0.14 M.'
      }
    },
    {
      id: 'ir4-slope-interpretation',
      type: 'dropdown-select' as const,
      content: `
**Slope Interpretation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a ln[A] vs t plot, a negative slope indicates',
            options: ['the reaction is reversible', 'k = |slope|', 'k = 1/slope', 'the reaction is zero-order']
          },
          {
            label: 'In a 1/[A] vs t plot, the slope is',
            options: ['always negative', 'always positive', 'zero', 'depends on order']
          },
          {
            label: 'If [A] vs t is linear but ln[A] vs t is curved, the order is',
            options: ['zero', 'first', 'second', 'third']
          },
          {
            label: 'If none of the three standard plots is linear, the reaction',
            options: ['has no rate law', 'may have fractional or higher order', 'is at equilibrium', 'must be zero-order']
          }
        ],
        correctAnswers: ['k = |slope|', 'always positive', 'zero', 'may have fractional or higher order'],
        hint1: 'ln[A] vs t: slope = −k, so k = |slope|.',
        hint2: '1/[A] vs t: slope = +k (positive).',
        hint3: 'Linear [A] vs t → zero-order.',
        explanation: 'For first-order ln[A] vs t, slope = −k so k = |slope|. For second-order, slope of 1/[A] vs t = +k (always positive). Linear [A] vs t = zero-order. If no standard plot works, the order may be fractional.'
      }
    },
    {
      id: 'ir4-ap-style',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Problem** 🎯

A student collects concentration-time data and plots all three standard graphs. She finds:
- [A] vs t: curved
- ln[A] vs t: curved
- 1/[A] vs t: straight line with slope 0.45
      `,
      exercise: {
        questions: [
          {
            question: 'What is the reaction order?',
            options: [
              'Zero',
              'First',
              'Second',
              'Third'
            ],
            correctAnswer: 2,
            explanation: 'Only 1/[A] vs t is linear → second-order reaction.'
          },
          {
            question: 'What is the rate constant k?',
            options: [
              '0.45 M/s',
              '0.45 s⁻¹',
              '0.45 M⁻¹s⁻¹',
              '−0.45 M⁻¹s⁻¹'
            ],
            correctAnswer: 2,
            explanation: 'For second-order, slope of 1/[A] vs t = +k. k = 0.45 M⁻¹s⁻¹.'
          }
        ]
      }
    },
    {
      id: 'ir4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Graphical Analysis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'You observe that successive half-lives of a reaction are 40 s, 40 s, and 40 s. The reaction is:',
            options: [
              'Zero-order',
              'First-order',
              'Second-order',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Constant half-lives → first-order. Zero-order half-lives decrease; second-order half-lives increase.'
          },
          {
            question: 'A plot of 1/[A] vs t is linear with y-intercept 4.0 M⁻¹. What is [A]₀?',
            options: [
              '4.0 M',
              '0.25 M',
              '0.50 M',
              '2.0 M'
            ],
            correctAnswer: 1,
            explanation: 'y-intercept = 1/[A]₀ = 4.0 M⁻¹. So [A]₀ = 1/4.0 = 0.25 M.'
          }
        ]
      }
    }
  ]
}
