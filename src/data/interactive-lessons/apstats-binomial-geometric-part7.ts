export const apStatsBinomGeomPart7Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p7-intro',
      type: 'text' as const,
      content: `# 📝 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas

| Distribution | PMF | Mean | SD |
|-------------|-----|------|----|
| Binomial $B(n,p)$ | $\\\\binom{n}{k}p^k(1-p)^{n-k}$ | $np$ | $\\\\sqrt{np(1-p)}$ |
| Geometric $G(p)$ | $(1-p)^{k-1}p$ | $1/p$ | $\\\\frac{\\\\sqrt{1-p}}{p}$ |

### Normal Approximation Conditions
$np \\\\geq 10$ AND $n(1-p) \\\\geq 10$

### Common AP Mistakes
- Using geometric when $n$ is fixed (should be binomial)
- Forgetting $\\\\binom{n}{k}$ in binomial formula
- Starting geometric at $k = 0$ instead of $k = 1$`
    },    {
      id: 'binomialgeometric-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$X \\\\sim B(8, 0.5)$. $\\\\sigma_X = ?$',
            options: ['$\\\\sqrt{2} \\\\approx 1.41$', '2', '4', '$\\\\sqrt{8}$'],
            correctAnswer: 0,
            explanation: '$\\\\sigma = \\\\sqrt{8(0.5)(0.5)} = \\\\sqrt{2} \\\\approx 1.414$.'
          },
          {
            question: 'For $G(0.5)$, $P(X \\\\leq 2) = ?$',
            options: ['0.50', '0.75', '0.25', '1.00'],
            correctAnswer: 1,
            explanation: '$P(1) + P(2) = 0.5 + 0.25 = 0.75$.'
          },
          {
            question: 'The geometric distribution is memoryless. This means:',
            options: ['Past failures reduce future probability', 'Past failures don’t affect future probability', 'The mean changes over time', 'It becomes normal eventually'],
            correctAnswer: 1,
            explanation: '$P(X > s + t | X > s) = P(X > t)$. Previous failures don’t help predict the next trial.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$X \\\\sim B(100, 0.3)$

**1)** $\\\\mu_X = ?$

**2)** $\\\\sigma_X = ?$ (round to 2 decimals)

**3)** Using normal approximation, $P(X > 35) \\\\approx ?$ (Standard normal: $P(Z > 1.09) \\\\approx 0.138$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '4.58', '0.138'],
        hint1: '$np$',
        hint2: '$\\\\sqrt{np(1-p)}$',
        hint3: '$z = (35-30)/4.58 \\\\approx 1.09$',
        explanation: '1) $100(0.3) = 30$. 2) $\\\\sqrt{100(0.3)(0.7)} = \\\\sqrt{21} \\\\approx 4.58$. 3) $z = 5/4.58 \\\\approx 1.09$, $P(Z > 1.09) \\\\approx 0.138$.'
      }
    }
  ]
};
