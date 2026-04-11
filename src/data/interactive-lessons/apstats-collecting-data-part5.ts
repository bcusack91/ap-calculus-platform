export const apStatsCollectingDataPart5Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p5-intro',
      type: 'text' as const,
      content: `# 🎰 Random Variables & Expected Value

**Part 5 of 7 — Discrete Random Variables**

---

### What Is a Random Variable?

A **random variable** $X$ assigns a numerical value to each outcome of a random process.

| Type | Values | Example |
|------|--------|---------|
| **Discrete** | Countable (finite or countably infinite) | Number of heads in 10 flips |
| **Continuous** | Any value in an interval | Height, weight, time |

---

### Probability Distribution of a Discrete RV

A table showing all values and their probabilities:

| $x$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X=x)$ | 0.1 | 0.3 | 0.4 | 0.2 |

**Requirements:** All probabilities are between 0 and 1, and they sum to 1:
$$\sum P(X = x) = 1$$

---

### Expected Value (Mean)

$$E(X) = \mu_X = \sum x_i \cdot P(X = x_i)$$

**Example:** $E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7$

> 🔑 The expected value is the **long-run average** — if you repeated the process many times, the average outcome would approach $E(X)$.

---

### Variance and Standard Deviation

$$\text{Var}(X) = \sigma_X^2 = \sum (x_i - \mu_X)^2 \cdot P(X = x_i)$$

$$\sigma_X = \sqrt{\text{Var}(X)}$$`
    },
    {
      id: 'apstats-collectingdata-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Random Variables Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A random variable $X$ has the distribution: $P(X=1)=0.3$, $P(X=2)=0.5$, $P(X=3)=0.2$. What is $E(X)$?',
            options: ['$1.0$', '$1.9$', '$2.0$', '$2.5$'],
            correctAnswer: 1,
            explanation: '$E(X) = 1(0.3) + 2(0.5) + 3(0.2) = 0.3 + 1.0 + 0.6 = 1.9$.'
          },
          {
            question: 'If $E(X) = 5$ and $E(Y) = 3$, and $X$ and $Y$ are independent, then $E(X + Y) =$',
            options: ['$2$', '$5$', '$8$', '$15$'],
            correctAnswer: 2,
            explanation: '$E(X+Y) = E(X) + E(Y) = 5 + 3 = 8$. This holds whether or not $X$ and $Y$ are independent.'
          },
          {
            question: 'The standard deviation of a random variable measures:',
            options: ['The most likely outcome', 'The center of the distribution', 'The typical distance from the mean', 'The range of possible values'],
            correctAnswer: 2,
            explanation: 'Standard deviation measures the typical distance of outcomes from the expected value.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p5-input',
      type: 'input-boxes' as const,
      content: `
**Expected Value Calculations** 🧮

A game costs \$5 to play. You roll a die: if you get a 6, you win \$20; otherwise you win nothing.

**1)** What is $P(\text{win})$? Express as a decimal (round to 2 places).

**2)** What is the expected payout (not profit)? Round to nearest cent.

**3)** What is the expected profit per game? (payout minus cost, round to nearest cent)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.17', '3.33', '-1.67'],
        hint1: '$P(6) = 1/6 \approx 0.17$.',
        hint2: '$E = (1/6)(20) + (5/6)(0) = 20/6 \approx 3.33$.',
        hint3: '$3.33 - 5 = -1.67$. The game has negative expected profit.',
        explanation: '1) $1/6 \approx 0.17$. 2) $\$3.33$. 3) $-\$1.67$ — unfavorable game.'
      }
    }
  ]
};
