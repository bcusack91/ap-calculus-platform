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

| Quantity | Formula |
|----------|---------|
| Probability | $P(X = k) = \\binom{n}{k}p^k(1-p)^{n-k}$ |
| Mean | $\\mu_X = np$ |
| Standard deviation | $\\sigma_X = \\sqrt{np(1-p)}$ |
| "At least" | $P(X \\geq k) = 1 - P(X \\leq k-1)$ |

### Common AP Mistakes
- Calling a variable binomial when the number of trials is not fixed
- Forgetting $\\binom{n}{k}$ in the binomial formula
- Writing $P(X \\geq k) = 1 - P(X \\leq k)$, which drops $X = k$
- Leaving out the square root in $\\sigma_X$
- Interpreting the mean as the count that "will happen" instead of a long-run average`
    },    {
      id: 'binomialgeometric-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$X \\sim B(8, 0.5)$. $\\sigma_X = ?$',
            options: ['$\\approx 1.41$', '$2.00$', '$4.00$', '$\\approx 2.83$'],
            correctAnswer: 0,
            explanation: '$\\sigma = \\sqrt{8(0.5)(0.5)} = \\sqrt{2} \\approx 1.41$. 2.00 is $np(1-p)$ without the square root, 4.00 is the mean $np$, and 2.83 is $\\sqrt{8}$, which leaves out $p(1-p)$.'
          },
          {
            question: '$X \\sim B(3, 0.4)$. $P(X \\leq 1) = ?$',
            options: ['0.432', '0.648', '0.352', '0.216'],
            correctAnswer: 1,
            explanation: '$P(0) + P(1) = 0.6^3 + 3(0.4)(0.6)^2 = 0.216 + 0.432 = 0.648$. 0.432 is only $P(X = 1)$, 0.216 is only $P(X = 0)$, and 0.352 is $P(X \\geq 2)$.'
          },
          {
            question: 'A binomial count has $\\mu_X = 30$. Which statement interprets the mean correctly?',
            options: ['Exactly 30 successes will occur each time the trials are run', 'Over many repetitions, the average is about 30', 'The probability of getting exactly 30 successes is 0.5', 'Half of all repetitions will produce more than 30 successes'],
            correctAnswer: 1,
            explanation: 'The mean is a long-run average of $X$ over many repetitions of the $n$ trials. Any single repetition can differ from 30, $P(X = 30)$ is usually small, and "half above" describes a median, which need not equal the mean.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$X \\sim B(100, 0.3)$

**1)** $\\mu_X = ?$

**2)** $\\sigma_X = ?$ (round to 2 decimals)

**3)** How many standard deviations above the mean is $X = 40$? (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '4.58', '2.18'],
        hint1: '$np$',
        hint2: '$\\sqrt{np(1-p)}$',
        hint3: '$(40 - 30)/4.583$',
        explanation: '1) $100(0.3) = 30$. 2) $\\sqrt{100(0.3)(0.7)} = \\sqrt{21} \\approx 4.58$. 3) $(40 - 30)/4.583 \\approx 2.18$ standard deviations above the mean.'
      }
    }
  ]
};
