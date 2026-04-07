export const chemIntegratedRateLawsPart7Data = {
  topicSlug: 'integrated-rate-laws',
  sections: [
    {
      id: 'ir7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — AP-Style Integrated Rate Law Problems**

This final part challenges you with comprehensive, exam-level problems that combine order identification, integrated rate law calculations, half-life analysis, and graphical interpretation.
      `
    },
    {
      id: 'ir7-master-summary',
      type: 'text' as const,
      content: `
## Complete Integrated Rate Laws Summary

| | Zero-Order | First-Order | Second-Order |
|---|-----------|-------------|-------------|
| **Differential** | Rate = $k$ | Rate = $k[A]$ | Rate = $k[A]^2$ |
| **Integrated** | $[A] = -kt + [A]_0$ | $\\ln[A] = -kt + \\ln[A]_0$ | $\\frac{1}{[A]} = kt + \\frac{1}{[A]_0}$ |
| **Linear plot** | $[A]$ vs $t$ | $\\ln[A]$ vs $t$ | $\\frac{1}{[A]}$ vs $t$ |
| **Slope** | $-k$ | $-k$ | $+k$ |
| **$t_{1/2}$** | $\\frac{[A]_0}{2k}$ | $\\frac{0.693}{k}$ | $\\frac{1}{k[A]_0}$ |
| **Units of $k$** | M/s | s⁻¹ | M⁻¹s⁻¹ |
| **Successive $t_{1/2}$** | Decrease (halve) | Constant | Increase (double) |
      `
    },
    {
      id: 'ir7-ap-problem-1',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 1** 🎯

The decomposition of SO₂Cl₂ is first-order:

$\\text{SO}_2\\text{Cl}_2(g) \\rightarrow \\text{SO}_2(g) + \\text{Cl}_2(g)$

At 320°C, $k = 2.20 \\times 10^{-5}$ s⁻¹.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the half-life at 320°C?',
            options: [
              '3.15 × 10⁴ s (8.75 hours)',
              '4.55 × 10⁴ s (12.6 hours)',
              '2.20 × 10⁵ s (2.55 days)',
              '6.93 × 10⁴ s (19.3 hours)'
            ],
            correctAnswer: 0,
            explanation: 't₁/₂ = 0.693/k = 0.693/(2.20 × 10⁻⁵) = 3.15 × 10⁴ s ≈ 8.75 hours.'
          },
          {
            question: 'If [SO₂Cl₂]₀ = 0.0400 M, how much time for [SO₂Cl₂] to reach 0.0100 M?',
            options: [
              '3.15 × 10⁴ s',
              '6.30 × 10⁴ s',
              '9.45 × 10⁴ s',
              '1.26 × 10⁵ s'
            ],
            correctAnswer: 1,
            explanation: '0.0100/0.0400 = 1/4 = (1/2)². This is 2 half-lives = 2 × 3.15 × 10⁴ = 6.30 × 10⁴ s.'
          },
          {
            question: 'What fraction remains after 1.00 × 10⁵ s?',
            options: [
              '0.111',
              '0.223',
              '0.500',
              '0.803'
            ],
            correctAnswer: 0,
            explanation: 'Fraction = e^(−kt) = e^(−2.20 × 10⁻⁵ × 1.00 × 10⁵) = e^(−2.20) = 0.111.'
          }
        ]
      }
    },
    {
      id: 'ir7-ap-problem-2',
      type: 'input-boxes' as const,
      content: `
**AP Problem 2: Order Determination** 🧮

The decomposition of a compound was studied. Data:

| $t$ (min) | $[A]$ (M) |
|----------|----------|
| 0 | 1.00 |
| 20 | 0.50 |
| 40 | 0.33 |
| 60 | 0.25 |

Verify: $1/[A]$ values are 1.00, 2.00, 3.00, 4.00 (constant Δ of 1.00 per 20 min).

**1)** What is the order? (enter 0, 1, or 2)

**2)** What is k? (in M⁻¹min⁻¹, to 3 significant figures)

**3)** What is [A] at t = 100 min? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '0.05', '0.17'],
        hint1: 'Δ(1/[A]) = 1.00 per 20 min is constant → 1/[A] vs t is linear → second-order.',
        hint2: 'k = slope = 1.00/20 = 0.05 M⁻¹min⁻¹.',
        hint3: '1/[A] = 0.05(100) + 1.00 = 5.0 + 1.0 = 6.0. [A] = 1/6.0 = 0.167 ≈ 0.17.',
        explanation: '1) Second-order (1/[A] vs t is linear). 2) k = 1.00/20 = 0.05 M⁻¹min⁻¹. 3) 1/[A] = 0.05(100) + 1.00 = 6.00 → [A] = 0.17 M.'
      }
    },
    {
      id: 'ir7-ap-problem-3',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 3: Carbon Dating** 🎯

A wooden artifact is found to have 12.5% of the $^{14}$C content of living wood. The half-life of $^{14}$C is 5,730 years.
      `,
      exercise: {
        questions: [
          {
            question: 'How old is the artifact?',
            options: [
              '5,730 years',
              '11,460 years',
              '17,190 years',
              '22,920 years'
            ],
            correctAnswer: 2,
            explanation: '12.5% = 1/8 = (1/2)³ → 3 half-lives = 3 × 5,730 = 17,190 years.'
          },
          {
            question: 'What is the decay constant for ¹⁴C?',
            options: [
              '1.21 × 10⁻⁴ yr⁻¹',
              '8.27 × 10³ yr⁻¹',
              '5.73 × 10³ yr⁻¹',
              '1.75 × 10⁻⁴ yr⁻¹'
            ],
            correctAnswer: 0,
            explanation: 'λ = 0.693/t₁/₂ = 0.693/5730 = 1.21 × 10⁻⁴ yr⁻¹.'
          }
        ]
      }
    },
    {
      id: 'ir7-mixed-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Synthesis: Match the Scenario** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A drug in the body follows [Drug] = [Drug]₀e^(−kt). This is',
            options: ['zero-order', 'first-order', 'second-order', 'non-standard']
          },
          {
            label: 'An enzyme is fully saturated with substrate. The kinetics appear',
            options: ['zero-order', 'first-order', 'second-order', 'third-order']
          },
          {
            label: 'A reaction whose 1/[A] vs t plot has R² = 0.999 is most likely',
            options: ['zero-order', 'first-order', 'second-order', 'undetermined']
          },
          {
            label: 'Radioactive decay of ²³⁸U follows',
            options: ['zero-order', 'first-order', 'second-order', 'variable-order']
          }
        ],
        correctAnswers: ['first-order', 'zero-order', 'second-order', 'first-order'],
        hint1: 'Exponential decay is the hallmark of first-order.',
        hint2: 'When enzyme is saturated, rate is independent of [substrate].',
        hint3: 'Best linear fit in 1/[A] vs t → second-order.',
        explanation: 'Exponential decay → first-order. Saturated enzyme → zero-order. Linear 1/[A] vs t → second-order. All radioactive decay → first-order.'
      }
    },
    {
      id: 'ir7-ap-problem-4',
      type: 'input-boxes' as const,
      content: `
**AP Problem 4: Comprehensive** 🧮

A first-order reaction has $k = 3.46 \\times 10^{-2}$ s⁻¹.

**1)** What is the half-life? (in seconds, to 3 significant figures)

**2)** How long until 90% has reacted? (in seconds, to 3 significant figures)

**3)** If [A]₀ = 0.500 M, what is [A] after 30.0 s? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20.0', '66.6', '0.177'],
        hint1: 't₁/₂ = 0.693/0.0346 = 20.0 s.',
        hint2: '90% reacted → 10% remains. t = −ln(0.10)/k = 2.303/0.0346 = 66.6 s.',
        hint3: '[A] = 0.500 × e^(−0.0346 × 30.0) = 0.500 × e^(−1.038) = 0.500 × 0.354 = 0.177.',
        explanation: '1) t₁/₂ = 0.693/0.0346 = 20.0 s. 2) t = ln(10)/0.0346 = 2.303/0.0346 = 66.6 s. 3) [A] = 0.500e^(−1.038) = 0.500(0.354) = 0.177 M.'
      }
    },
    {
      id: 'ir7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Integrated Rate Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction\'s concentration data gives: ln[A] vs t is linear with slope −0.020. The half-life is:',
            options: [
              '34.7 s',
              '50.0 s',
              '14.4 s',
              '100 s'
            ],
            correctAnswer: 0,
            explanation: 'Linear ln[A] vs t → first-order. k = 0.020 s⁻¹. t₁/₂ = 0.693/0.020 = 34.65 ≈ 34.7 s.'
          },
          {
            question: 'Which quantity is unique to each reaction order?',
            options: [
              'The rate constant k',
              'The initial concentration',
              'The pattern of successive half-lives',
              'The activation energy'
            ],
            correctAnswer: 2,
            explanation: 'Each order has a distinctive half-life pattern: zero (decreasing), first (constant), second (increasing). This is one of the best ways to identify order from experimental data.'
          }
        ]
      }
    }
  ]
}
