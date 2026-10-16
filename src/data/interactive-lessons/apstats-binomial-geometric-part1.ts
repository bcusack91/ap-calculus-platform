export const apStatsBinomGeomPart1Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p1-intro',
      type: 'text' as const,
      content: `# 🎰 Binomial Distributions

**Part 1 of 7 — The Binomial Setting**

---

### BINS Criteria

A random variable $X$ is binomial if it counts the number of successes and:

| Letter | Condition |
|--------|-----------|
| **B** | Binary outcomes (success/failure) |
| **I** | Independent trials |
| **N** | Fixed Number of trials ($n$) |
| **S** | Same probability of success ($p$) each trial |

---

### Binomial Distribution: $X \\sim B(n, p)$

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$$

where $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ and $k = 0, 1, 2, \\ldots, n$

---

### Mean and Standard Deviation

$$\\mu = np \\qquad \\sigma = \\sqrt{np(1-p)}$$

**Example:** 20 free throws, $p = 0.8$
- $\\mu = 20(0.8) = 16$
- $\\sigma = \\sqrt{20(0.8)(0.2)} = \\sqrt{3.2} \\approx 1.789$`
    },    {
      id: 'binomialgeometric-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT required for a binomial setting?',
            options: ['A fixed number of trials, n', 'Trials that are independent', 'The same success probability on each trial', 'Outcomes that are numbers'],
            correctAnswer: 3,
            explanation: 'BINS: Binary, Independent, fixed Number, Same probability. Each trial only has to be classified as a success or a failure, so the outcomes do not need to be numbers. A fixed number of trials, independence and a constant success probability are all required.'
          },
          {
            question: '$X \\sim B(10, 0.3)$. $E(X) = ?$',
            options: ['3', '0.3', '7', '1.45'],
            correctAnswer: 0,
            explanation: '$E(X) = np = 10(0.3) = 3$. The value 7 uses $n(1-p)$, 0.3 is just $p$, and 1.45 is the standard deviation $\\sqrt{10(0.3)(0.7)}$, not the mean.'
          },
          {
            question: 'Rolling a die until you get a 6 does NOT give a binomial count because:',
            options: ['Each roll has more than two outcomes', 'The rolls are not independent', 'The number of rolls is not fixed in advance', 'The chance of a 6 changes each roll'],
            correctAnswer: 2,
            explanation: 'There is no fixed $n$: you keep rolling until the first 6 appears. The rolls are independent with a constant $P(6) = 1/6$, and "6" versus "not 6" makes each roll binary even though the die has six faces.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p1-input',
      type: 'input-boxes' as const,
      content: `
**Binomial Basics** 🧮

A basketball player makes 75% of free throws. She shoots 12.

**1)** Expected number of makes?

**2)** Standard deviation? (round to 2 decimal places)

**3)** $P(X = 12)$? (round to 4 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '1.50', '0.0317'],
        hint1: '$np = 12(0.75)$',
        hint2: '$\\sqrt{np(1-p)}$',
        hint3: '$0.75^{12}$',
        explanation: '1) $12(0.75) = 9$. 2) $\\sqrt{12(0.75)(0.25)} = \\sqrt{2.25} = 1.50$. 3) $\\binom{12}{12}(0.75)^{12}(0.25)^0 = 0.75^{12} \\approx 0.0317$.'
      }
    }
  ]
};
