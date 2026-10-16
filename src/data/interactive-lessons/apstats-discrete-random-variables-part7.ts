export const apStatsDiscreteRVPart7Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p7-intro',
      type: 'text' as const,
      content: `# 📝 Review & Applications

**Part 7 of 7 — Comprehensive Review**

---

### Key Formulas Summary

| Concept | Formula |
|---------|---------|
| Valid distribution | $0 \\leq P(x_i) \\leq 1$ and $\\sum P(x_i) = 1$ |
| Cumulative probability | $P(X \\leq x)$ = sum of $P(x_i)$ for all $x_i \\leq x$ |
| Expected value | $E(X) = \\sum x_i P(x_i)$ |
| Variance | $\\text{Var}(X) = \\sum(x_i - \\mu_X)^2 P(x_i)$ |
| Standard deviation | $\\sigma_X = \\sqrt{\\text{Var}(X)}$ |

### Common Mistakes on the AP Exam
- Averaging the values without weighting them by their probabilities
- Forgetting the square root when going from variance to standard deviation
- Thinking $E(X)$ has to be a possible value
- Confusing “expected value” with “most likely value”
- Interpreting without context or units`
    },    {
      id: 'discreterandomvariables-p7-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$X$ has $P(X=1) = 0.2$, $P(X=2) = 0.5$, $P(X=3) = 0.3$, so $\\mu_X = 2.1$. What is $\\text{Var}(X)$?',
            options: ['0.70', '0.49', '4.90', '0.68'],
            correctAnswer: 1,
            explanation: '$\\text{Var}(X) = (1-2.1)^2(0.2) + (2-2.1)^2(0.5) + (3-2.1)^2(0.3) = 0.242 + 0.005 + 0.243 = 0.49$. 0.70 is the standard deviation, 4.90 is $\\sum x^2 P(x)$ without subtracting $\\mu^2$, and 0.68 averages the squared deviations without the probabilities.'
          },
          {
            question: 'Which list of probabilities for the values 1, 2, 3 is a valid probability distribution?',
            options: ['0.4, 0.4, 0.4', '0.2, 0.3, 0.5', '0.6, 0.5, -0.1', '0.1, 0.2, 0.3'],
            correctAnswer: 1,
            explanation: 'Valid probabilities are each between 0 and 1 and sum to 1: $0.2 + 0.3 + 0.5 = 1$. The first list sums to 1.2, the third contains a negative probability, and the last sums to only 0.6.'
          },
          {
            question: 'The AP exam asks you to “interpret the expected value.” Which sentence opener fits?',
            options: ['The most common outcome would be about...', 'Over many repetitions, the average would be about...', 'Exactly half of the outcomes would fall below...', 'On the next trial, the outcome would be about...'],
            correctAnswer: 1,
            explanation: 'The expected value is a long-run average over many repetitions. It is not the most common outcome, not a median, and not a prediction for a single trial.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

$X$ has $P(X=0) = 0.3$, $P(X=1) = 0.4$, $P(X=4) = 0.3$.

**1)** $E(X) = ?$

**2)** $\\text{Var}(X) = ?$ (2 decimals)

**3)** $\\sigma_X = ?$ (round to 2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.6', '2.64', '1.62'],
        hint1: '$0(0.3) + 1(0.4) + 4(0.3)$',
        hint2: '$(0-1.6)^2(0.3) + (1-1.6)^2(0.4) + (4-1.6)^2(0.3)$',
        hint3: '$\\sqrt{2.64}$',
        explanation: '1) $0 + 0.4 + 1.2 = 1.6$. 2) $0.768 + 0.144 + 1.728 = 2.64$. 3) $\\sqrt{2.64} \\approx 1.62$.'
      }
    }
  ]
};
