export const apStatsDiscreteRVPart5Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p5-intro',
      type: 'text' as const,
      content: `# 🔄 Interpreting Expected Value and Standard Deviation

**Part 5 of 7 — Using $\\mu_X$ and $\\sigma_X$ in Context**

---

### Interpretation Templates

| Parameter | Interpretation |
|-----------|----------------|
| $\\mu_X$ | "If this random process were repeated many times, the average [value of $X$ in context] would be about [$\\mu_X$]." |
| $\\sigma_X$ | "[$X$ in context] typically varies by about [$\\sigma_X$] from the mean of [$\\mu_X$]." |

Both are **parameters**: single fixed numbers that describe the distribution, given in the units of $X$.

---

### Worked Example: A Raffle

A school sells 500 raffle tickets at \\$2 each. One ticket wins \\$300 and four tickets win \\$50. Let $X$ = net gain for one ticket.

| Outcome | $X$ | $P(X)$ |
|---------|-----|--------|
| Grand prize | \\$298 | 1/500 = 0.002 |
| Small prize | \\$48 | 4/500 = 0.008 |
| No prize | $-$\\$2 | 495/500 = 0.990 |

$$E(X) = 298(0.002) + 48(0.008) + (-2)(0.990) = 0.596 + 0.384 - 1.98 = -1.00$$

**Interpretation:** Over many tickets, buyers lose about \\$1.00 per ticket on average. (The school raises about \\$1 per ticket.)`
    },    {
      id: 'discreterandomvariables-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For the raffle, $E(X)$ = -\\$1.00. Which interpretation is correct?',
            options: ['Every ticket buyer loses exactly \\$1.00 on each ticket', 'Over many tickets, the average net gain is about -\\$1.00', 'The most likely net gain for one ticket is -\\$1.00', 'About 1% of tickets lose money, so most tickets gain'],
            correctAnswer: 1,
            explanation: 'The expected value is a long-run average over many tickets. No single ticket loses exactly \\$1 (the possible values are \\$298, \\$48 and -\\$2), the most likely value is -\\$2, and a ticket loses money 99% of the time.'
          },
          {
            question: 'A carnival game costs \\$3. You win \\$10 with probability 0.2 and nothing otherwise. What is the expected net gain per play?',
            options: ['\\$2.00', '-\\$1.00', '\\$4.00', '\\$1.40'],
            correctAnswer: 1,
            explanation: 'Net gain is \\$7 with probability 0.2 and -\\$3 with probability 0.8: $7(0.2) + (-3)(0.8) = 1.40 - 2.40 = -1.00$. \\$2.00 is the expected payout before the cost, \\$4.00 is $7 - 3$, and \\$1.40 keeps only the winning term.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p5-decide',
      type: 'text' as const,
      content: `### Using $\\sigma_X$ to Compare Options

Two options can have the **same mean** but very different risk.

| Delivery route | Mean time | SD of time |
|----------------|-----------|------------|
| Route A | 30 min | 2 min |
| Route B | 30 min | 9 min |

On average both routes take 30 minutes, but Route B's times typically vary by about 9 minutes from that mean, so Route B is much less predictable. If a package must arrive within 35 minutes, Route A is the safer choice.

> 🔑 Use the mean to compare typical outcomes and the standard deviation to compare consistency or risk.`
    },    {
      id: 'discreterandomvariables-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Decisions with $\\mu$ and $\\sigma$** 🧭
      `,
      exercise: {
        questions: [
          {
            question: 'Investment A has mean return \\$50 and SD \\$10. Investment B has mean return \\$50 and SD \\$40. Which statement is correct?',
            options: ['B will earn more because its SD is larger', 'A and B carry the same risk because their means match', 'A earns less on average because its returns vary less', 'B is riskier because its returns vary more around \\$50'],
            correctAnswer: 3,
            explanation: 'Equal means give the same long-run average return, and the larger standard deviation makes B\'s returns less predictable. A larger $\\sigma$ does not raise the average, and equal means say nothing about risk.'
          },
          {
            question: 'A random variable $X$ has $\\mu_X = 4.2$ and $\\sigma_X = 1.1$ hours of homework per night. Which describes $\\sigma_X$?',
            options: ['Homework time typically varies by about 1.1 hours from 4.2', 'About 1.1 hours of homework are assigned on a typical night', 'Homework time is always between 3.1 and 5.3 hours each night', 'Homework time changes by about 1.1 percent from night to night'],
            correctAnswer: 0,
            explanation: 'The standard deviation is a typical distance from the mean, in the units of $X$ (hours). It is not the typical amount itself, it does not set fixed limits, and it is not a percent.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p5-input',
      type: 'input-boxes' as const,
      content: `
**Mean and SD in Context** 🧮

The number of defective items in a box, $X$, has $P(X=0) = 0.7$, $P(X=1) = 0.2$, $P(X=2) = 0.1$.

**1)** $E(X)$?

**2)** $\\sigma_X$? (round to 2 decimals)

**3)** Over 100 boxes, about how many defective items in total would you expect?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.4', '0.66', '40'],
        hint1: '$0(0.7) + 1(0.2) + 2(0.1)$',
        hint2: '$\\sqrt{(0-0.4)^2(0.7) + (1-0.4)^2(0.2) + (2-0.4)^2(0.1)}$',
        hint3: '$100 \\times E(X)$',
        explanation: '1) $0 + 0.2 + 0.2 = 0.4$ defective items per box. 2) $\\sqrt{0.112 + 0.072 + 0.256} = \\sqrt{0.44} \\approx 0.66$. 3) The long-run average is 0.4 per box, so about $100(0.4) = 40$ defective items in 100 boxes.'
      }
    }
  ]
};
