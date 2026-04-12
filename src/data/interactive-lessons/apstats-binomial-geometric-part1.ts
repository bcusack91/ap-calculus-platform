export const apStatsBinomGeomPart1Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p1-intro',
      type: 'text' as const,
      content: `# 🎰 Binomial & Geometric Distributions

**Part 1 of 7 — The Binomial Setting**

---

### BINS Criteria

A random variable $X$ is binomial if:

| Letter | Condition |
|--------|-----------|
| **B** | Binary outcomes (success/failure) |
| **I** | Independent trials |
| **N** | Fixed Number of trials ($n$) |
| **S** | Same probability of success ($p$) each trial |

---

### Binomial Distribution: $X \\\\sim B(n, p)$

$$P(X = k) = \\\\binom{n}{k} p^k (1-p)^{n-k}$$

where $\\\\binom{n}{k} = \\\\frac{n!}{k!(n-k)!}$

---

### Mean and Standard Deviation

$$\\\\mu = np \\\\qquad \\\\sigma = \\\\sqrt{np(1-p)}$$

**Example:** 20 free throws, $p = 0.8$
- $\\\\mu = 20(0.8) = 16$
- $\\\\sigma = \\\\sqrt{20(0.8)(0.2)} = \\\\sqrt{3.2} \\\\approx 1.789$`
    },    {
      id: 'binomialgeometric-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT required for a binomial setting?',
            options: ['Fixed number of trials', 'Independent trials', 'Constant probability', 'Outcomes must be numerical'],
            correctAnswer: 3,
            explanation: 'BINS: Binary, Independent, fixed Number, Same probability. Outcomes just need to be success/failure.'
          },
          {
            question: '$X \\\\sim B(10, 0.3)$. $E(X) = ?$',
            options: ['3', '7', '0.3', '10'],
            correctAnswer: 0,
            explanation: '$E(X) = np = 10(0.3) = 3$.'
          },
          {
            question: 'Rolling a die until you get a 6 is NOT binomial because:',
            options: ['Outcomes aren’t binary', 'Trials aren’t independent', 'There’s no fixed number of trials', 'Probability changes'],
            correctAnswer: 2,
            explanation: 'No fixed $n$ — you keep rolling until success. This is geometric, not binomial.'
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
        hint2: '$\\\\sqrt{np(1-p)}$',
        hint3: '$0.75^{12}$',
        explanation: '1) $12(0.75) = 9$. 2) $\\\\sqrt{12(0.75)(0.25)} = \\\\sqrt{2.25} = 1.50$. 3) $\\\\binom{12}{12}(0.75)^{12}(0.25)^0 = 0.75^{12} \\\\approx 0.0317$.'
      }
    }
  ]
};
