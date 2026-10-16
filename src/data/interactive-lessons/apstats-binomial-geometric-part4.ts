export const apStatsBinomGeomPart4Data = {
  topicSlug: 'binomial-geometric-apstats',
  sections: [
    {
      id: 'binomialgeometric-p4-intro',
      type: 'text' as const,
      content: `# 📈 Simulation and Cumulative Binomial Probabilities

**Part 4 of 7 — Tables of $P(X \\leq k)$ and Estimates from Simulation**

---

### Cumulative Probability Distribution

A **cumulative probability distribution** gives $P(X \\leq k)$ for every value $k$. For $X \\sim B(5, 0.4)$:

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|---|
| $P(X = k)$ | 0.0778 | 0.2592 | 0.3456 | 0.2304 | 0.0768 | 0.0102 |
| $P(X \\leq k)$ | 0.0778 | 0.3370 | 0.6826 | 0.9130 | 0.9898 | 1.0000 |

Each cumulative value adds the next exact probability: $0.3370 + 0.3456 = 0.6826$.

---

### Reading a Cumulative Table

| Want | Use |
|------|-----|
| $P(X \\leq k)$ | Read the table at $k$ (calculator: \`binomcdf(n, p, k)\`) |
| $P(X = k)$ | $P(X \\leq k) - P(X \\leq k-1)$ |
| $P(X \\geq k)$ | $1 - P(X \\leq k-1)$ |

**Example:** $P(X \\geq 3) = 1 - P(X \\leq 2) = 1 - 0.6826 = 0.3174$, which matches the sum of $P(3) + P(4) + P(5)$ from Part 2.`
    },    {
      id: 'binomialgeometric-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $X \\sim B(5, 0.4)$, use the cumulative row of the table to find $P(X = 3)$.',
            options: ['0.9130', '0.2304', '0.0870', '0.6826'],
            correctAnswer: 1,
            explanation: '$P(X = 3) = P(X \\leq 3) - P(X \\leq 2) = 0.9130 - 0.6826 = 0.2304$. Reading 0.9130 alone gives $P(X \\leq 3)$, 0.6826 is $P(X \\leq 2)$, and 0.0870 is $1 - 0.9130 = P(X \\geq 4)$.'
          },
          {
            question: 'A cumulative probability distribution for a discrete random variable shows:',
            options: ['$P(X \\leq k)$ for each value $k$', '$P(X = k)$ for each value $k$', '$P(X \\geq k)$ for each value $k$', '$P(X < k)$ for each value $k$'],
            correctAnswer: 0,
            explanation: 'Cumulative probabilities accumulate from the smallest value up, so each entry is the probability of being less than or equal to $k$. The exact probabilities $P(X = k)$ form the ordinary distribution, and "greater than or equal to" or "strictly less than" values must be found from the cumulative table with a complement or a shift.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p4-sim',
      type: 'text' as const,
      content: `### Estimating Binomial Probabilities by Simulation

When you cannot (or do not want to) use the formula, **simulate** the random process.

**Simulating $X \\sim B(5, 0.4)$ with random digits:**
1. Let digits 0–3 represent a success (4 of the 10 digits, so $p = 0.4$) and 4–9 a failure.
2. Read 5 digits and count the successes: that is one value of $X$.
3. Repeat many times and record each count.
4. Estimate a probability with the relative frequency, e.g. (number of repetitions with $X \\geq 3$) ÷ (total repetitions).

**Example:** In 50 repetitions, 17 had $X \\geq 3$, so the estimate is $17/50 = 0.34$ (the exact value is 0.3174).

> 🔑 **Law of large numbers:** as the number of repetitions grows, the simulated relative frequency tends to get closer to the true probability.`
    },    {
      id: 'binomialgeometric-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Simulation Check** 🎲
      `,
      exercise: {
        questions: [
          {
            question: 'Which plan simulates one value of $X \\sim B(5, 0.4)$ using random digits 0–9?',
            options: ['Let 0–3 be a success, read 5 digits, and count the successes', 'Let 0–4 be a success, read 5 digits, and count the successes', 'Let 0–3 be a success and read digits until a success appears', 'Let 0–3 be a success, read 4 digits, and count the successes'],
            correctAnswer: 0,
            explanation: 'Four of the ten digits gives $p = 0.4$, and one value of $X$ needs exactly $n = 5$ trials. Using 0–4 makes $p = 0.5$, reading until a success does not fix the number of trials, and reading 4 digits simulates $n = 4$.'
          },
          {
            question: 'A simulation of 200 repetitions gives 58 with $X \\geq 3$. Which statement is correct?',
            options: ['The estimate is 0.58, and more repetitions would make it exact', 'The estimate is 0.29, and more repetitions would make it exact', 'The estimate is 0.29, and more repetitions tend to bring it closer', 'The estimate is 0.58, and more repetitions make it closer'],
            correctAnswer: 2,
            explanation: 'The relative frequency is $58/200 = 0.29$. By the law of large numbers, estimates from more repetitions tend to get closer to the true probability, but a simulation never guarantees the exact value. 0.58 divides by 100 instead of 200.'
          }
        ]
      }
    },    {
      id: 'binomialgeometric-p4-input',
      type: 'input-boxes' as const,
      content: `
**Cumulative Practice** 🧮

$X \\sim B(8, 0.25)$.

**1)** $P(X \\leq 1)$? (round to 4 decimals)

**2)** $P(X \\geq 2)$? (round to 4 decimals)

**3)** A simulation of 400 repetitions gives 252 with $X \\geq 2$. What is the simulated estimate of $P(X \\geq 2)$? (2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.3671', '0.6329', '0.63'],
        hint1: '$P(0) + P(1) = 0.75^8 + 8(0.25)(0.75)^7$',
        hint2: '$1 - P(X \\leq 1)$',
        hint3: '$252/400$',
        explanation: '1) $0.75^8 + 8(0.25)(0.75)^7 = 0.1001 + 0.2670 \\approx 0.3671$. 2) $1 - 0.3671 = 0.6329$. 3) $252/400 = 0.63$, close to the exact 0.6329.'
      }
    }
  ]
};
