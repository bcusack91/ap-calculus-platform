export const apStatsDiscreteRVPart1Data = {
  topicSlug: 'discrete-random-variables-apstats',
  sections: [
    {
      id: 'discreterandomvariables-p1-intro',
      type: 'text' as const,
      content: `# 🎲 Discrete Random Variables

**Part 1 of 7 — Probability Distributions**

---

### What Is a Random Variable?

A **random variable** assigns a numerical value to each outcome of a random process.

| Type | Values | Examples |
|------|--------|---------|
| **Discrete** | Countable (finite or countably infinite) | Number of heads in 10 flips, dice roll |
| **Continuous** | Any value in an interval | Height, weight, time |

> 🔑 **Key Idea:** A discrete random variable has a **probability distribution** that lists every possible value and its probability.

---

### Probability Distribution Table

| $X$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $P(X)$ | 0.1 | 0.3 | 0.4 | 0.2 |

**Requirements:**
- Every probability is between 0 and 1: $0 \\leq P(X = x) \\leq 1$
- All probabilities sum to 1: $\\sum P(X = x) = 1$

---

### Reading the Table

From the table above:
- $P(X = 2) = 0.4$
- $P(X \\geq 2) = P(X=2) + P(X=3) = 0.4 + 0.2 = 0.6$
- $P(X < 2) = P(X=0) + P(X=1) = 0.1 + 0.3 = 0.4$`
    },    {
      id: 'discreterandomvariables-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A valid probability distribution must have probabilities that sum to:',
            options: ['100', '1', '0.5', 'The number of possible values'],
            correctAnswer: 1,
            explanation: 'The probabilities of all possible values must add to exactly 1. A total of 100 only works if the probabilities are written as percents, and the total never depends on how many values there are.'
          },
          {
            question: 'If $P(X=1) = 0.3$, $P(X=2) = 0.4$, and $P(X=3) = 0.2$, then $P(X=0)$ equals:',
            options: ['0', '0.1', '0.9', 'Cannot be determined'],
            correctAnswer: 1,
            explanation: 'The probabilities must sum to 1, so $P(X=0) = 1 - 0.3 - 0.4 - 0.2 = 0.1$. 0.9 is the sum of the given probabilities, not what is left over, and 0 would make the total only 0.9.'
          },
          {
            question: 'A discrete random variable can take:',
            options: ['Any value in an interval', 'A countable number of values', 'Only positive values', 'Only whole-number values'],
            correctAnswer: 1,
            explanation: 'A discrete random variable has a countable (finite or countably infinite) set of possible values. Any value in an interval describes a continuous variable, and discrete values can be negative or non-integers, such as a net gain of -\\$2.50.'
          }
        ]
      }
    },    {
      id: 'discreterandomvariables-p1-input',
      type: 'input-boxes' as const,
      content: `
**Probability Distribution Practice** 🧮

Given: $P(X=1) = 0.25$, $P(X=2) = 0.35$, $P(X=3) = 0.30$, $P(X=4) = 0.10$

**1)** $P(X \\leq 2)$?

**2)** $P(X > 2)$?

**3)** Do the probabilities sum to 1? (yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.60', '0.40', 'yes'],
        hint1: '$P(X=1) + P(X=2) = 0.25 + 0.35$',
        hint2: '$P(X=3) + P(X=4) = 0.30 + 0.10$',
        hint3: '$0.25 + 0.35 + 0.30 + 0.10 = 1.00$',
        explanation: '1) 0.25 + 0.35 = 0.60. 2) 0.30 + 0.10 = 0.40. 3) Yes, they sum to 1.'
      }
    }
  ]
};
