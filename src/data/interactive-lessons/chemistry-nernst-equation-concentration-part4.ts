export const chemNernstEquationConcentrationPart4Data = {
  topicSlug: 'nernst-equation-concentration',
  sections: [
    {
      id: 'ne4-intro',
      type: 'text' as const,
      content: `
# 🔗 Relationship Between E° and K

**Part 4 of 7 — E° = (0.0592/n) log K**

At equilibrium, $E = 0$ and $Q = K$. This gives us a direct relationship between the standard cell potential and the equilibrium constant — one of the most tested connections on the AP exam.
      `
    },
    {
      id: 'ne4-derivation',
      type: 'text' as const,
      content: `
## Deriving the E°-K Relationship

Starting from the Nernst equation at equilibrium ($E = 0$, $Q = K$):

$$0 = E° - \\frac{0.0592}{n}\\log K$$

Rearranging:

$$\\boxed{E° = \\frac{0.0592}{n}\\log K} \\quad \\text{(at 25°C)}$$

Or equivalently:

$$\\log K = \\frac{nE°}{0.0592}$$

$$K = 10^{nE°/0.0592}$$

### What This Tells Us

| $E°$ | $\\log K$ | $K$ | Meaning |
|------|---------|-----|---------|
| $> 0$ | Positive | $> 1$ | Products favored |
| $= 0$ | Zero | $= 1$ | Neither favored |
| $< 0$ | Negative | $< 1$ | Reactants favored |

### How Sensitive Is K to E°?

For a 2-electron process:
- $E° = +0.10$ V → $K = 10^{2(0.10)/0.0592} = 10^{3.38} \\approx 2400$
- $E° = +0.50$ V → $K = 10^{16.9} \\approx 10^{17}$
- $E° = +1.00$ V → $K = 10^{33.8}$

Even small $E°$ values correspond to **enormous** equilibrium constants!
      `
    },
    {
      id: 'ne4-worked-example',
      type: 'text' as const,
      content: `
## Worked Examples

### Example 1: Find K from E°

For the Daniell cell: $E° = 1.10$ V, $n = 2$

$$\\log K = \\frac{nE°}{0.0592} = \\frac{(2)(1.10)}{0.0592} = 37.2$$

$$K = 10^{37.2} = 1.6 \\times 10^{37}$$

This enormous $K$ means the reaction goes essentially to completion.

### Example 2: Find E° from K

A reaction has $K = 1.0 \\times 10^{10}$ and $n = 2$.

$$E° = \\frac{0.0592}{2}\\log(10^{10}) = 0.0296 \\times 10 = 0.296 \\text{ V}$$

### Example 3: The Complete Thermodynamic Triangle

$$\\Delta G° = -nFE° = -RT\\ln K$$

All three quantities are interconnected:
- Know any one → calculate the other two
      `
    },
    {
      id: 'ne4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**E° and K Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If E° = 0.30 V for a 2-electron process, K is approximately:',
            options: [
              '10¹⁰',
              '10⁵',
              '10²',
              '10¹'
            ],
            correctAnswer: 0,
            explanation: '$\\log K = (2)(0.30)/0.0592 = 0.60/0.0592 = 10.1$. So $K = 10^{10.1} \\approx 10^{10}$.'
          },
          {
            question: 'A reaction with K = 1 has E° equal to:',
            options: [
              '+1.00 V',
              '−1.00 V',
              '0 V',
              'Undefined'
            ],
            correctAnswer: 2,
            explanation: '$E° = (0.0592/n)\\log(1) = (0.0592/n)(0) = 0$ V. When K = 1, neither direction is favored, and E° = 0.'
          },
          {
            question: 'Even a small positive E° (like 0.10 V) gives a large K because:',
            options: [
              'K is linear with E°',
              'K is exponential with E° (K = 10^{nE°/0.0592})',
              'K does not depend on E°',
              'The Faraday constant is very large'
            ],
            correctAnswer: 1,
            explanation: '$K = 10^{nE°/0.0592}$ is an exponential relationship. The exponent $nE°/0.0592$ grows rapidly even for moderate $E°$ values.'
          }
        ]
      }
    },
    {
      id: 'ne4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**E° and K Calculations** 🧮

At 25°C:

1) $E° = 0.46$ V, $n = 2$. Calculate $\\log K$. (to 3 significant figures)

2) $K = 10^{20}$, $n = 4$. Calculate $E°$. (in V, to 3 significant figures)

3) $E° = -0.10$ V, $n = 1$. Is $K$ greater or less than 1? (type "greater" or "less")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15.5', '0.296', 'less'],
        hint1: '$\\log K = (2)(0.46)/0.0592$',
        hint2: '$E° = (0.0592/4)(20)$',
        hint3: 'Negative $E°$ → negative $\\log K$ → $K < 1$.',
        explanation: '1) $\\log K = 0.92/0.0592 = 15.5$. 2) $E° = (0.0592/4)(20) = (0.0148)(20) = 0.296$ V. 3) $E° < 0$ → $\\log K < 0$ → $K < 1$.'
      }
    },
    {
      id: 'ne4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**E° and K Connections** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'E° > 0 corresponds to K',
            options: ['< 1', '= 1', '> 1', '= 0']
          },
          {
            label: 'The E°-K relationship is derived by setting E = 0 because',
            options: ['the cell is broken', 'E° is always zero', 'the cell is at equilibrium', 'Q = 0 at equilibrium']
          },
          {
            label: 'Doubling n in E° = (0.0592/n) log K means',
            options: ['K doubles', 'E° doubles', 'the same E° corresponds to K²', 'K is halved']
          },
          {
            label: 'The three interconnected quantities are ΔG°, E°, and',
            options: ['ΔH°', 'Q', 'K', 'T']
          }
        ],
        correctAnswers: ['> 1', 'the cell is at equilibrium', 'the same E° corresponds to K²', 'K'],
        hint1: 'Positive E° → spontaneous → products favored → K > 1.',
        hint2: 'At equilibrium: E = 0 and Q = K.',
        hint3: 'If n doubles, log K doubles too (to keep E° the same), so K becomes K².',
        explanation: 'E° > 0 → K > 1. The derivation uses equilibrium conditions (E = 0, Q = K). If n doubles: log K = nE°/0.0592 doubles, meaning K squares. The triangle: ΔG° ↔ E° ↔ K.'
      }
    },
    {
      id: 'ne4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — E° and K** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 3-electron cell has E° = 0.40 V. K is approximately:',
            options: [
              '10⁷',
              '10¹⁰',
              '10²⁰',
              '10³⁰'
            ],
            correctAnswer: 2,
            explanation: '$\\log K = (3)(0.40)/0.0592 = 1.20/0.0592 = 20.3$. So $K \\approx 10^{20}$.'
          },
          {
            question: 'Two cells have E° = 0.50 V but different n values (n₁ = 1, n₂ = 2). Which has the larger K?',
            options: [
              'Cell 1 (n = 1) — fewer electrons means larger K',
              'Cell 2 (n = 2) — more electrons means larger K',
              'They have the same K because E° is the same',
              'Cannot be determined without ΔG°'
            ],
            correctAnswer: 1,
            explanation: '$\\log K_1 = (1)(0.50)/0.0592 = 8.45$, $K_1 = 10^{8.45}$. $\\log K_2 = (2)(0.50)/0.0592 = 16.9$, $K_2 = 10^{16.9}$. Cell 2 has the much larger K.'
          }
        ]
      }
    }
  ]
}
