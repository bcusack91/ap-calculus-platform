export const apStatsBinomGeomPart4Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p4-intro',
      type: 'text' as const,
      content: `# 📈 Normal Approximation to Binomial

**Part 4 of 7 — When $n$ is Large**

---

### When to Use Normal Approximation

The binomial distribution $B(n, p)$ is approximately normal when:

$$np \\\\geq 10 \\\\quad \\\\text{AND} \\\\quad n(1-p) \\\\geq 10$$

This is the **Large Counts Condition**.

Use: $X \\\\dot\\\\sim N(np, \\\\sqrt{np(1-p)})$

---

### Worked Example

$X \\\\sim B(200, 0.35)$

Check: $np = 70 \\\\geq 10$ ✓, $n(1-p) = 130 \\\\geq 10$ ✓

$\\\\mu = 70$, $\\\\sigma = \\\\sqrt{200(0.35)(0.65)} = \\\\sqrt{45.5} \\\\approx 6.745$

$P(X \\\\geq 80) \\\\approx P\\\\left(Z \\\\geq \\\\frac{80 - 70}{6.745}\\\\right) = P(Z \\\\geq 1.48) \\\\approx 0.0694$`
    },    {
      id: 'binomialgeometric-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The Large Counts Condition requires:',
            options: ['$n \\\\geq 30$', '$np \\\\geq 10$ and $n(1-p) \\\\geq 10$', '$p \\\\geq 0.5$', '$np \\\\geq 5$'],
            correctAnswer: 1,
            explanation: 'Both $np$ and $n(1-p)$ must be at least 10 for the normal approximation.'
          },
          {
            question: '$X \\\\sim B(50, 0.1)$. Can we use the normal approximation?',
            options: ['Yes, $n$ is large enough', 'No, $np = 5 < 10$', 'Yes, $n(1-p) = 45 \\\\geq 10$', 'No, $p$ is too small'],
            correctAnswer: 1,
            explanation: '$np = 50(0.1) = 5 < 10$. The condition fails.'
          },
          {
            question: 'The purpose of the normal approximation is to:',
            options: ['Avoid calculator computations', 'Approximate binomial probabilities using the normal curve', 'Make the binomial exact', 'Change discrete to continuous'],
            correctAnswer: 1,
            explanation: 'When $n$ is large enough, the bell-shaped normal curve closely matches the binomial distribution.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p4-input',
      type: 'input-boxes' as const,
      content: `
**Normal Approximation** 🧮

$X \\\\sim B(400, 0.6)$

**1)** $\\\\mu = ?$

**2)** $\\\\sigma = ?$ (round to 2 decimals)

**3)** $z$-score for $X = 260$? (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['240', '9.80', '2.04'],
        hint1: '$np = 400(0.6)$',
        hint2: '$\\\\sqrt{400(0.6)(0.4)}$',
        hint3: '$(260 - 240)/\\\\sigma$',
        explanation: '1) $400(0.6) = 240$. 2) $\\\\sqrt{96} \\\\approx 9.80$. 3) $(260-240)/9.80 \\\\approx 2.04$.'
      }
    }
  ]
};
