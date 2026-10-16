export const apStatsDiscreteRVPart6Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Problems**

---

### Strategy for Random Variable Problems

1. **Define** the random variable in context and list its possible values
2. **Check** that the probabilities are between 0 and 1 and sum to 1
3. **Calculate** $E(X)$ using $\\sum x \\cdot P(x)$
4. **Calculate** $\\sigma_X$ using $\\sqrt{\\sum (x - \\mu_X)^2 \\cdot P(x)}$
5. **Interpret** in context for full AP credit

---

### AP Exam Tip

When asked to **interpret** expected value:
“If [process] were repeated many times, the average [variable] would be approximately [value].”

When asked to **interpret** standard deviation:
“The [variable] typically varies by about [value] from the mean of [mean].”`
    },    {
      id: 'discreterandomvariables-p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A fair die costs \\$2 to roll. You win 3 times the face value in dollars. What is the expected profit per roll?',
            options: ['\\$8.50', '\\$10.50', '\\$1.50', '\\$12.50'],
            correctAnswer: 0,
            explanation: 'Expected winnings are $3(3.5) = 10.50$, so expected profit is \\$10.50 - \\$2 = \\$8.50. \\$10.50 ignores the cost, \\$1.50 subtracts the cost from the mean face value without tripling it, and \\$12.50 adds the cost instead of subtracting it.'
          },
          {
            question: '$X$ takes the value 0 with probability 0.5, 10 with probability 0.3 and 20 with probability 0.2. What is $E(X)$?',
            options: ['7', '10', '0', '30'],
            correctAnswer: 0,
            explanation: '$E(X) = 0(0.5) + 10(0.3) + 20(0.2) = 0 + 3 + 4 = 7$. 10 is the unweighted average of the three values, 0 is the most likely value, and 30 adds the values without weighting.'
          },
          {
            question: 'Insurance claims have mean \\$180 and standard deviation about \\$740. Which statement is correct?',
            options: ['Claims typically differ from \\$180 by about \\$740', 'Most claims are \\$740 above the mean', 'The company expects to pay \\$740 each', 'Every claim falls within \\$740 of the \\$180 mean'],
            correctAnswer: 0,
            explanation: 'The standard deviation is a typical distance between a claim and the mean. It does not say claims sit above the mean, the expected payout per customer is the mean (\\$180), and a standard deviation does not set a fixed range.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p6-input',
      type: 'input-boxes' as const,
      content: `
**Insurance Problem** 🧮

An insurance company charges \\$300/year. Claims: \\$0 (prob 0.9), \\$1000 (prob 0.08), \\$5000 (prob 0.02).

**1)** Expected claim per customer?

**2)** Expected profit per customer?

**3)** Standard deviation of claims? (round to nearest dollar)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180', '120', '740'],
        hint1: '$0(0.9) + 1000(0.08) + 5000(0.02)$',
        hint2: '$300 - E(\\text{claim})$',
        hint3: '$\\sqrt{\\sum(x - 180)^2 \\cdot P(x)}$',
        explanation: '1) $0 + 80 + 100 = 180$. 2) $300 - 180 = 120$. 3) $\\sqrt{(180)^2(0.9) + (820)^2(0.08) + (4820)^2(0.02)} = \\sqrt{29160 + 53792 + 464648} = \\sqrt{547600} = 740$.'
      }
    }
  ]
};
