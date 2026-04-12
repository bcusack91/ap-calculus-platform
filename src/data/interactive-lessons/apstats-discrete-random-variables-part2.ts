export const apStatsDiscreteRVPart2Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p2-intro',
      type: 'text' as const,
      content: `# 🎯 Expected Value (Mean of a Random Variable)

**Part 2 of 7 — Expected Value**

---

### The Mean of a Discrete Random Variable

$$\\\\mu_X = E(X) = \\\\sum x_i \\\\cdot P(x_i)$$

The expected value is the **long-run average** — if you repeated the random process many times, the average outcome would approach $E(X)$.

---

### Worked Example

| $X$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X)$ | 0.1 | 0.3 | 0.4 | 0.2 |

$$E(X) = 0(0.1) + 1(0.3) + 2(0.4) + 3(0.2) = 0 + 0.3 + 0.8 + 0.6 = 1.7$$

> ⚠️ The expected value does NOT have to be a possible outcome. $X$ can’t actually equal 1.7, but 1.7 is the long-run average.

---

### Interpretation on the AP Exam

“If we were to repeat this random process many, many times, the average value of $X$ would be approximately 1.7.”`
    },    {
      id: 'discreterandomvariables-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'The expected value of a random variable represents:',
            options: ['The most likely outcome', 'The long-run average', 'The median', 'The mode'],
            correctAnswer: 1,
            explanation: 'Expected value = long-run average over many repetitions.'
          },
          {
            question: 'If $X$ takes values 1, 2, 3 with equal probability $1/3$, then $E(X)$ is:',
            options: ['1', '2', '3', '6'],
            correctAnswer: 1,
            explanation: '$E(X) = 1(1/3) + 2(1/3) + 3(1/3) = 6/3 = 2$.'
          },
          {
            question: 'Expected value must be one of the possible values of $X$:',
            options: ['Always true', 'Sometimes true', 'Never true', 'True only for symmetric distributions'],
            correctAnswer: 1,
            explanation: 'Expected value can be any number — it does not have to be a possible outcome.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p2-input',
      type: 'input-boxes' as const,
      content: `
**Expected Value Calculation** 🧮

A game costs $5 to play. You win $20 with probability 0.2, win $5 with probability 0.3, and win $0 with probability 0.5.

Let $X$ = net gain (winnings minus cost).

**1)** $X$ values: $15, $0, and $\\\\underline{\\\\quad}$ (third net gain value)

**2)** $E(X) = ?$ (expected net gain)

**3)** Is this game favorable for the player? (yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '-1', 'no'],
        hint1: 'Win $0 minus $5 cost = ?',
        hint2: '$E(X) = 15(0.2) + 0(0.3) + (-5)(0.5)$',
        hint3: 'Negative expected value means you lose money on average.',
        explanation: '1) $0 - $5 = -$5. 2) $E(X) = 15(0.2) + 0(0.3) + (-5)(0.5) = 3 + 0 - 2.5 = -1$. 3) No — negative expected value.'
      }
    }
  ]
};
