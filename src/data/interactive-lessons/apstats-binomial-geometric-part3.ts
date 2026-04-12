export const apStatsBinomGeomPart3Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p3-intro',
      type: 'text' as const,
      content: `# 🎯 Geometric Distribution

**Part 3 of 7 — Waiting for First Success**

---

### Geometric Setting

- Binary outcomes (success/failure)
- Independent trials
- Same probability $p$ each trial
- Count trials **until first success**

### Geometric Distribution: $X \\\\sim G(p)$

$$P(X = k) = (1-p)^{k-1} p$$

where $k = 1, 2, 3, \\\\ldots$ (first success on trial $k$)

---

### Mean and Standard Deviation

$$\\\\mu = \\\\frac{1}{p} \\\\qquad \\\\sigma = \\\\frac{\\\\sqrt{1-p}}{p}$$

**Example:** Rolling a die until getting a 6 ($p = 1/6$):
- Expected number of rolls: $\\\\mu = 6$
- This means on average you’ll need 6 rolls`
    },    {
      id: 'binomialgeometric-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The geometric distribution counts:',
            options: ['Number of successes in $n$ trials', 'Number of trials until first success', 'Total number of successes', 'Probability of exactly $k$ successes'],
            correctAnswer: 1,
            explanation: 'Geometric = waiting time until the first success.'
          },
          {
            question: '$X \\\\sim G(0.25)$. $E(X) = ?$ trials.',
            options: ['0.25', '4', '25', '0.75'],
            correctAnswer: 1,
            explanation: '$E(X) = 1/p = 1/0.25 = 4$ trials until first success.'
          },
          {
            question: '$P(X = 3)$ for $G(0.2)$:',
            options: ['$(0.8)^2(0.2)$', '$(0.8)^3(0.2)$', '$(0.2)^3$', '$\\\\binom{3}{1}(0.2)(0.8)^2$'],
            correctAnswer: 0,
            explanation: '$P(X = 3) = (1-p)^{3-1} p = (0.8)^2(0.2) = 0.128$.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p3-input',
      type: 'input-boxes' as const,
      content: `
**Geometric Practice** 🧮

A quality inspector finds defective items with probability $p = 0.1$.

**1)** Expected inspections until first defect?

**2)** $P(\\\\text{first defect on 3rd item})$? (as a decimal)

**3)** $P(X \\\\leq 3)$? (probability within first 3, as a decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '0.081', '0.271'],
        hint1: '$1/p = 1/0.1$',
        hint2: '$(0.9)^2(0.1)$',
        hint3: '$P(1) + P(2) + P(3)$',
        explanation: '1) $1/0.1 = 10$. 2) $(0.9)^2(0.1) = 0.081$. 3) $0.1 + 0.09 + 0.081 = 0.271$.'
      }
    }
  ]
};
