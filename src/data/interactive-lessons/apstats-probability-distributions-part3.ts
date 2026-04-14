export const apStatsProbDistPart3Data = {
  topicSlug: 'probability-distributions-apstats',
  sections: [
    {
      id: 'probdistributions-p3-intro',
      type: 'text' as const,
      content: `# 📖 Normal Probabilities

**Part 3 of 7 — Using the Standard Normal Table**

---

### Finding Probabilities

The Standard Normal Table (Table A) gives $P(Z < z)$ — the area to the LEFT of $z$.

### Three Cases

| Want | Formula |
|------|---------|
| $P(Z < z)$ | Read directly from table |
| $P(Z > z)$ | $1 - P(Z < z)$ |
| $P(a < Z < b)$ | $P(Z < b) - P(Z < a)$ |

---

### Example

$P(Z < 1.25)$: Look up $z = 1.25$ in Table A → $0.8944$

$P(Z > 1.25) = 1 - 0.8944 = 0.1056$

$P(-1 < Z < 1.25) = P(Z < 1.25) - P(Z < -1) = 0.8944 - 0.1587 = 0.7357$

### Working Backwards (Inverse Normal)

To find the z-score for a given percentile:
- 90th percentile: $z = 1.28$
- 95th percentile: $z = 1.645$
- 97.5th percentile: $z = 1.96$`
    },    {
      id: 'probdistributions-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$P(Z < -1.5)$ from Table A is approximately:',
            options: ['0.0668', '0.9332', '0.1587', '0.5000'],
            correctAnswer: 0,
            explanation: 'Looking up $z = -1.5$ in the standard Normal table gives approximately 0.0668.'
          },
          {
            question: '$P(Z > 2.0)$ equals:',
            options: ['$P(Z < 2.0)$', '$1 - P(Z < 2.0)$', '$P(Z < -2.0)$', 'Both B and C'],
            correctAnswer: 3,
            explanation: '$P(Z > 2.0) = 1 - P(Z < 2.0)$, which by symmetry also equals $P(Z < -2.0)$.'
          },
          {
            question: 'The z-score for the 75th percentile is approximately:',
            options: ['0.25', '0.67', '0.75', '1.28'],
            correctAnswer: 1,
            explanation: 'The 75th percentile corresponds to $z \\\\approx 0.67$.'
          }
        ]
      }
    },    {
      id: 'probdistributions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Normal Probability** 🧮

$P(Z < 1.0) = 0.8413$ and $P(Z < -0.5) = 0.3085$.

**1)** $P(Z > 1.0) = ?$

**2)** $P(-0.5 < Z < 1.0) = ?$

**3)** What percent of a Normal distribution falls between $z = -0.5$ and $z = 1.0$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.1587', '0.5328', '53.28'],
        hint1: '$1 - 0.8413$',
        hint2: '$0.8413 - 0.3085$',
        hint3: 'Convert the probability to percent',
        explanation: '1) $1 - 0.8413 = 0.1587$. 2) $0.8413 - 0.3085 = 0.5328$. 3) $53.28\\\\%$.'
      }
    }
  ]
};
