export const chemIceTablesCalculationsPart4Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic4-intro',
      type: 'text' as const,
      content: `# 🧊 The 5% Approximation

**Part 4 of 7 — When x Is Small Enough to Ignore**

---

### Topics in This Part

| Section |
|---------|
| 📌 When Can You Use the Approximation? |
| Why This Works |
| 🧪 Worked Example |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'ic4-when-to-use',
      type: 'text' as const,
      content: `
## 📌 When Can You Use the Approximation?

> 💡 **Tip — Rule of Thumb:** If $\\frac{[\\text{initial}]}{K} > 100$ (or equivalently, $K < 0.01 \\times [\\text{initial}]$), then $x$ is small enough to approximate:

$$\\boxed{[\\text{initial}] - x \\approx [\\text{initial}]}$$


---

### Why This Works

When K is very small, the reaction barely shifts — very little product forms. So $x$ is tiny compared to the initial concentration, and subtracting it doesn\'t meaningfully change the value.


---

> 🔑 **The 5% Test:** After solving, check:

$$\\boxed{\\frac{x}{[\\text{initial}]} \\times 100\\% < 5\\%}$$

> If the change is less than 5% of the initial concentration, the approximation is valid.


---

> ⚠️ **Warning:** If the 5% test fails (change > 5%), your approximated answer is inaccurate. Discard it and solve the full quadratic equation instead.
      `
    },
    {
      id: 'ic4-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

> **Problem:** For $\\text{N}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\,\\text{NO}(g)$ with $K_c = 4.0 \\times 10^{-4}$, find the equilibrium concentrations given $[\\text{N}_2] = 0.80$ M, $[\\text{O}_2] = 0.20$ M, $[\\text{NO}] = 0$.

> **Solution:** **Check:** $0.20 / (4.0 \\times 10^{-4}) = 500 > 100$ ✓ → approximation valid

|  | $N_{2}$ | $O_{2}$ | NO |
|--|-----|-----|-----|
| **I** | 0.80 | 0.20 | 0 |
| **C** | $-x$ | $-x$ | $+2x$ |
| **E** | $0.80 - x$ | $0.20 - x$ | $2x$ |

$$K_c = \\frac{(2x)^2}{(0.80 - x)(0.20 - x)}$$

**With approximation** ($x \\ll 0.20$):

$$4.0 \\times 10^{-4} = \\frac{4x^2}{(0.80)(0.20)} = \\frac{4x^2}{0.16}$$

$$4x^2 = (4.0 \\times 10^{-4})(0.16) = 6.4 \\times 10^{-5}$$

$$x^2 = 1.6 \\times 10^{-5} \\implies x = 4.0 \\times 10^{-3}$$

**5% Check:** $\\frac{x}{0.20} \\times 100\\% = \\frac{4.0 \\times 10^{-3}}{0.20} \\times 100\\% = 2.0\\%$ ✓ (< 5%)

**Equilibrium:**
- $[\\text{NO}] = 2(4.0 \\times 10^{-3}) = 8.0 \\times 10^{-3}$ M
- $[\\text{N}_2] \\approx 0.80$ M
- $[\\text{O}_2] \\approx 0.20$ M
      `
    },
    {
      id: 'ic4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**The 5% Approximation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The small-x approximation is valid when:',
            options: [
              'K is very large, so the reaction goes nearly to completion',
              'K is very small relative to initial concentrations',
              'K is close to 1, so reactants and products are balanced',
              'The initial concentration is small compared with the value of K'
            ],
            correctAnswer: 1,
            explanation: 'When K is very small (typically $< 10^{-3}$) relative to initial concentrations, very little product forms and $x$ is negligible. Note the direction of the comparison: K must be small relative to the initial concentration, not the other way around. A large K or a K near 1 means $x$ is a sizable fraction of the starting amount.'
          },
          {
            question: 'After using the approximation, you find $x = 0.15$ and $[\\text{A}]_0 = 1.00$ M. Is the approximation valid?',
            options: [
              'Yes — 15% is within a 20% margin',
              'No — 15% exceeds the 5% threshold',
              'Yes — x is less than 1.00 M',
              'No — x must be under 0.010 M'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{0.15}{1.00} \\times 100\\% = 15\\%$, which exceeds 5%. The approximation is NOT valid. You must solve the full quadratic. The test is the percentage of the initial concentration (5%), not an absolute cutoff for $x$, and $x < [\\text{A}]_0$ only guarantees a positive concentration, not a valid approximation.'
          },
          {
            question: 'Which simplification does the small-x approximation make?',
            options: [
              '$K \\approx [\\text{initial}]$',
              '$[\\text{initial}] - x \\approx [\\text{initial}]$',
              '$x \\approx [\\text{initial}]$',
              '$x^2 \\approx 0$ in the numerator'
            ],
            correctAnswer: 1,
            explanation: 'The approximation says that $x$ is so small that subtracting it from the initial concentration doesn\'t significantly change the value: $[\\text{A}]_0 - x \\approx [\\text{A}]_0$. The $x^2$ in the numerator is kept — dropping it would leave nothing to solve for.'
          }
        ]
      }
    },
    {
      id: 'ic4-practice',
      type: 'input-boxes' as const,
      content: `
**Practice: Using the Approximation** 🧮

$\\text{A}(g) \\rightleftharpoons \\text{B}(g) + \\text{C}(g)$, $K_c = 1.0 \\times 10^{-6}$

Initial: $[\\text{A}] = 0.50$ M, $[\\text{B}] = [\\text{C}] = 0$

Using the approximation $0.50 - x \\approx 0.50$:

$$1.0 \\times 10^{-6} = \\frac{x^2}{0.50}$$

**1)** Solve for $x$. (Enter in scientific notation, e.g. 3.5e-6)

**2)** What percent of the initial [A] is $x$? (Enter as a percentage to 3 significant figures, e.g. 2.50)

**3)** Is the approximation valid? (Enter "yes" or "no")
      `,
      exercise: {
        questions: [{ question: '1)', answer: '7.07e-4', acceptableAnswers: ['7.07e-4', '7.1e-4'] }, { question: '2)', answer: '0.141', acceptableAnswers: ['0.141', '0.14', '0.142'] }, { question: '3)', answer: 'yes', acceptableAnswers: ['yes'] }],
        hint1: '$x^2 = (1.0 \\times 10^{-6})(0.50) = 5.0 \\times 10^{-7}$. $x = \\sqrt{5.0 \\times 10^{-7}}$',
        hint2: '$\\frac{7.07 \\times 10^{-4}}{0.50} \\times 100\\%$',
        hint3: 'Less than 5% means the approximation is valid.',
        explanation: '1) $x = \\sqrt{5.0 \\times 10^{-7}} = 7.07 \\times 10^{-4} \\approx 7.1 \\times 10^{-4}$. 2) $\\frac{7.07 \\times 10^{-4}}{0.50} \\times 100\\% = 0.141\\%$. 3) $0.141\\% < 5\\%$, so yes, the approximation is valid.'
      }
    },
    {
      id: 'ic4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Approximation Guidelines** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The approximation is most useful when K is',
            options: ['very large', 'very small', 'equal to 1', 'greater than 1']
          },
          {
            label: 'The 5% test checks whether',
            options: ['K is large enough to trust the answer', 'x is small enough relative to initial concentrations', 'the reaction has actually reached equilibrium', 'the temperature stayed constant throughout']
          },
          {
            label: 'If the 5% test fails, you must',
            options: ['use a different value of K', 'solve the full quadratic', 'keep the approximate x anyway', 'double the initial concentration']
          },
          {
            label: 'The approximation converts a quadratic equation into a',
            options: ['cubic equation', 'simple algebra problem', 'differential equation', 'system of two equations']
          }
        ],
        correctAnswers: [
          'very small',
          'x is small enough relative to initial concentrations',
          'solve the full quadratic',
          'simple algebra problem'
        ],
        hint1: 'Small K means the reaction barely proceeds → x is small.',
        hint2: '5% test: is $x/[\\text{initial}] < 0.05$?',
        hint3: 'If the approximation fails, fall back to the quadratic formula.',
        explanation: 'Small K → small x → valid approximation. The 5% test verifies this. If it fails, use the quadratic. The approximation simplifies the quadratic into simple algebra.'
      }
    },
    {
      id: 'ic4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — 5% Approximation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{HA}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{A}^-(aq)$, $K_a = 1.8 \\times 10^{-5}$, $[\\text{HA}]_0 = 0.10$ M. Is the approximation likely valid?',
            options: [
              'Yes — $0.10 / (1.8 \\times 10^{-5}) = 5556 > 100$',
              'No — $1.8 \\times 10^{-5} / 0.10 = 1.8 \\times 10^{-4} < 100$',
              'No — 0.10 M is too dilute for x to be considered negligible',
              'Cannot determine without first solving the quadratic'
            ],
            correctAnswer: 0,
            explanation: '$[\\text{initial}]/K = 0.10/(1.8 \\times 10^{-5}) = 5556 \\gg 100$. The ratio is far greater than 100, so the approximation will be valid. Dividing K by the concentration (instead of the concentration by K) flips the ratio and the conclusion. No quadratic is needed to make this check — that is the point of it.'
          },
          {
            question: 'Using the approximation for the problem above, $x \\approx$:',
            options: [
              '$1.8 \\times 10^{-5}$',
              '$1.3 \\times 10^{-3}$',
              '$4.2 \\times 10^{-3}$',
              '$0.10$'
            ],
            correctAnswer: 1,
            explanation: '$K_a = x^2/0.10 \\implies x^2 = (1.8 \\times 10^{-5})(0.10) = 1.8 \\times 10^{-6} \\implies x = \\sqrt{1.8 \\times 10^{-6}} = 1.34 \\times 10^{-3} \\approx 1.3 \\times 10^{-3}$.'
          }
        ]
      }
    }
  ]
}
