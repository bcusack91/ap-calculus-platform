export const apStatsBinomGeomPart2Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p2-intro',
      type: 'text' as const,
      content: `# 🔢 Binomial Calculations

**Part 2 of 7 — Computing Binomial Probabilities**

---

### Using the Formula

$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$

### Cumulative Probabilities

- $P(X \\\\leq k)$: use \`binomcdf(n, p, k)\` on calculator
- $P(X \\\\geq k) = 1 - P(X \\\\leq k-1)$
- $P(a \\\\leq X \\\\leq b) = P(X \\\\leq b) - P(X \\\\leq a-1)$

---

### Worked Example

$X \\\\sim B(5, 0.4)$. Find $P(X \\\\geq 3)$.

$P(X \\\\geq 3) = P(3) + P(4) + P(5)$

$= \\\\binom{5}{3}(0.4)^3(0.6)^2 + \\\\binom{5}{4}(0.4)^4(0.6)^1 + \\\\binom{5}{5}(0.4)^5$

$= 10(0.064)(0.36) + 5(0.0256)(0.6) + 1(0.01024)$

$= 0.2304 + 0.0768 + 0.01024 = 0.3174$`
    },    {
      id: 'binomialgeometric-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$P(X \\\\geq 3)$ equals:',
            options: ['$1 - P(X \\\\leq 3)$', '$1 - P(X \\\\leq 2)$', '$P(X \\\\leq 3) - P(X \\\\leq 2)$', '$P(X = 3)$'],
            correctAnswer: 1,
            explanation: '$P(X \\\\geq 3) = 1 - P(X \\\\leq 2)$ since we want 3 or more.'
          },
          {
            question: '$\\\\binom{6}{2}$ equals:',
            options: ['12', '15', '30', '6'],
            correctAnswer: 1,
            explanation: '$\\\\binom{6}{2} = \\\\frac{6!}{2!4!} = \\\\frac{720}{2 \\\\cdot 24} = 15$.'
          },
          {
            question: 'For $X \\\\sim B(100, 0.05)$, the mean and SD are:',
            options: ['$\\\\mu=5, \\\\sigma \\\\approx 2.18$', '$\\\\mu=50, \\\\sigma=5$', '$\\\\mu=5, \\\\sigma=5$', '$\\\\mu=95, \\\\sigma \\\\approx 2.18$'],
            correctAnswer: 0,
            explanation: '$\\\\mu = 100(0.05) = 5$, $\\\\sigma = \\\\sqrt{100(0.05)(0.95)} = \\\\sqrt{4.75} \\\\approx 2.18$.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p2-input',
      type: 'input-boxes' as const,
      content: `
**Binomial Calculation** 🧮

$X \\\\sim B(4, 0.5)$.

**1)** $P(X = 2) = ?$ (as a fraction, e.g., 3/8)

**2)** $P(X \\\\leq 1) = ?$ (as a fraction)

**3)** $P(X \\\\geq 3) = ?$ (as a fraction)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6/16', '5/16', '5/16'],
        hint1: '$\\\\binom{4}{2}(0.5)^4 = 6/16$',
        hint2: '$P(0) + P(1) = 1/16 + 4/16$',
        hint3: 'By symmetry, same as $P(X \\\\leq 1)$',
        explanation: '1) $\\\\binom{4}{2}(0.5)^2(0.5)^2 = 6(1/16) = 6/16$. 2) $1/16 + 4/16 = 5/16$. 3) $4/16 + 1/16 = 5/16$.'
      }
    }
  ]
};
