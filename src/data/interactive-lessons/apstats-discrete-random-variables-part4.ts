export const apStatsDiscreteRVPart4Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p4-intro',
      type: 'text' as const,
      content: `# ⚖️ Cumulative Distributions and Simulation

**Part 4 of 7 — Building and Estimating Distributions**

---

### Building a Distribution with Probability Rules

A bag holds 3 red and 2 blue marbles. Draw 2 without replacement and let $X$ = number of red marbles.

- $P(X = 0) = \\frac{2}{5} \\cdot \\frac{1}{4} = 0.10$
- $P(X = 2) = \\frac{3}{5} \\cdot \\frac{2}{4} = 0.30$
- $P(X = 1) = \\frac{3}{5} \\cdot \\frac{2}{4} + \\frac{2}{5} \\cdot \\frac{3}{4} = 0.60$ (red then blue, or blue then red)

---

### Cumulative Probability Distribution

A **cumulative probability distribution** lists $P(X \\leq x)$ for each value $x$:

| $x$ | 0 | 1 | 2 |
|-----|---|---|---|
| $P(X = x)$ | 0.10 | 0.60 | 0.30 |
| $P(X \\leq x)$ | 0.10 | 0.70 | 1.00 |

- Each cumulative value adds the next probability.
- The last cumulative value is always 1.
- Recover an exact probability by subtracting neighbors: $P(X = 1) = 0.70 - 0.10 = 0.60$.`
    },    {
      id: 'discreterandomvariables-p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The number of customers waiting, $X$, has $P(X=0) = 0.05$, $P(X=1) = 0.25$, $P(X=2) = 0.30$, $P(X=3) = 0.25$, $P(X=4) = 0.15$. What is $P(X \\leq 2)$?',
            options: ['0.30', '0.60', '0.40', '0.70'],
            correctAnswer: 1,
            explanation: '$P(X \\leq 2) = 0.05 + 0.25 + 0.30 = 0.60$. 0.30 is only $P(X = 2)$, 0.40 is $P(X \\geq 3)$, and 0.70 is $P(X \\geq 2)$.'
          },
          {
            question: 'A cumulative table shows $P(X \\leq 3) = 0.82$ and $P(X \\leq 4) = 0.95$. What is $P(X = 4)$?',
            options: ['0.95', '0.05', '0.18', '0.13'],
            correctAnswer: 3,
            explanation: '$P(X = 4) = P(X \\leq 4) - P(X \\leq 3) = 0.95 - 0.82 = 0.13$. 0.95 is the cumulative value itself, 0.05 is $P(X \\geq 5)$, and 0.18 is $P(X \\geq 4)$.'
          },
          {
            question: 'In the marble example, which change would make $P(X = 1)$ equal $2(0.6)(0.4) = 0.48$?',
            options: ['Drawing the two marbles with replacement', 'Drawing three marbles instead of two', 'Adding one more blue marble to the bag', 'Counting blue marbles instead of red'],
            correctAnswer: 0,
            explanation: 'With replacement each draw has $P(\\text{red}) = 0.6$ regardless of the first draw, so $P(X = 1) = 0.6(0.4) + 0.4(0.6) = 0.48$. Counting blue gives the same $P(X = 1) = 0.60$ by symmetry, and the other changes alter the counts without making the draws independent at 0.6.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p4-sim',
      type: 'text' as const,
      content: `### Estimating a Distribution by Simulation

When the rules are hard to apply, simulate.

**Setting:** Each cereal box holds one of 3 prizes, equally likely. Let $X$ = number of **different** prizes in 4 boxes ($X$ = 1, 2 or 3).

**Simulation with random digits:**
1. Let digits 1, 2, 3 stand for the three prizes; skip 0 and 4–9.
2. Read four usable digits (one per box) and record how many different prizes appear.
3. Repeat many times.

**Results of 50 repetitions:**

| $x$ | 1 | 2 | 3 |
|-----|---|---|---|
| Count | 2 | 26 | 22 |
| Estimated $P(X = x)$ | 0.04 | 0.52 | 0.44 |
| Estimated $P(X \\leq x)$ | 0.04 | 0.56 | 1.00 |

The exact probabilities are 0.037, 0.519 and 0.444. With more repetitions, the estimates tend to get closer to them.`
    },    {
      id: 'discreterandomvariables-p4-input',
      type: 'input-boxes' as const,
      content: `
**Simulation Practice** 🧮

A different simulation of the prize setting gives these counts in 80 repetitions: $X = 1$: 4, $X = 2$: 40, $X = 3$: 36.

**1)** Estimated $P(X = 2)$? (2 decimals)

**2)** Estimated $P(X \\leq 2)$? (2 decimals)

**3)** Estimated $P(X \\geq 2)$? (2 decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.50', '0.55', '0.95'],
        hint1: '$40/80$',
        hint2: '$(4 + 40)/80$',
        hint3: '$(40 + 36)/80$',
        explanation: '1) $40/80 = 0.50$. 2) $44/80 = 0.55$. 3) $76/80 = 0.95$, which also equals $1 - P(X = 1) = 1 - 0.05$.'
      }
    }
  ]
};
