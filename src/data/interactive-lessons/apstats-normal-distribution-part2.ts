export const apStatsNormalDistPart2Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p2-intro',
      type: 'text' as const,
      content: `# 📏 Z-Scores and the Standard Normal

**Part 2 of 7 — Standardizing Values**

---

### The Z-Score Formula

A z-score tells you how many standard deviations a value is from the mean:

$$z = \\frac{x - \\mu}{\\sigma}$$

| Z-Score | Interpretation |
|---------|---------------|
| $z = 0$ | At the mean |
| $z = 1$ | One SD above the mean |
| $z = -2$ | Two SDs below the mean |

---

### The Standard Normal Distribution

When we standardize: $Z \\sim N(0, 1)$

This allows us to use **one table** (or calculator) for all normal distributions.

**Example:** Heights $\\sim N(70, 3)$. A person is 76 inches tall.
$$z = \\frac{76 - 70}{3} = 2$$
They are 2 standard deviations above the mean.

---

### Using the Z-Table

The z-table gives $P(Z \\leq z)$ — the area to the **left** of $z$.

| To Find | Method |
|---------|--------|
| $P(Z \\leq z)$ | Read directly from table |
| $P(Z \\geq z)$ | $1 - P(Z \\leq z)$ |
| $P(a \\leq Z \\leq b)$ | $P(Z \\leq b) - P(Z \\leq a)$ |

> 🔑 Always sketch the normal curve, shade the region, then calculate.`
    },
    {
      id: 'apstats-normaldistribution-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Z-Score Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A test has $\\mu = 80$ and $\\sigma = 5$. A student scores 90. Their z-score is:',
            options: ['$z = 1$', '$z = 2$', '$z = -2$', '$z = 10$'],
            correctAnswer: 1,
            explanation: '$z = (90 - 80)/5 = 10/5 = 2$. 10 is the raw distance in points before dividing by $\\sigma$, and $-2$ has the subtraction reversed.'
          },
          {
            question: '$P(Z \\leq 1.5) = 0.9332$. What is $P(Z \\geq 1.5)$?',
            options: ['$0.9332$', '$0.0668$', '$0.5000$', '$0.4332$'],
            correctAnswer: 1,
            explanation: '$P(Z \\geq 1.5) = 1 - P(Z \\leq 1.5) = 1 - 0.9332 = 0.0668$. 0.9332 is the area to the left, 0.4332 is the area between 0 and 1.5, and 0.5000 is the area above the mean.'
          },
          {
            question: 'A negative z-score means the value is:',
            options: ['The value was recorded wrong', 'The value lies below the mean', 'The value is above the mean', 'The value is an outlier'],
            correctAnswer: 1,
            explanation: 'The sign of $z$ gives the direction from the mean, so a negative z-score is below the mean; its size gives the distance in SDs. Negative z-scores are ordinary values, and a value is an outlier only if it is unusually far from the mean.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p2-input',
      type: 'input-boxes' as const,
      content: `
**Z-Score Calculations** 🧮

ACT scores follow $N(21, 5)$.

**1)** Find the z-score for a student who scored 31. (Give as a whole number)

**2)** Find the z-score for a student who scored 16.

**3)** A student has $z = -0.4$. What was their ACT score?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '-1', '19'],
        hint1: '$z = (31-21)/5 = 10/5 = 2$.',
        hint2: '$z = (16-21)/5 = -5/5 = -1$.',
        hint3: '$x = \\mu + z\\sigma = 21 + (-0.4)(5) = 21 - 2 = 19$.',
        explanation: '1) $z = 2$. 2) $z = -1$. 3) $x = 19$.'
      }
    }
  ]
};
