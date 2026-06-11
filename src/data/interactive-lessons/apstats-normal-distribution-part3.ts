export const apStatsNormalDistPart3Data = {
  topicSlug: 'normal-distribution-apstats',
  sections: [
    {
      id: 'apstats-normaldistribution-p3-intro',
      type: 'text' as const,
      content: `# 🔢 Normal Probability Calculations

**Part 3 of 7 — Finding Areas and Percentiles**

---

### Forward Problems: X → Z → Probability

**Given a value $x$, find the probability:**
1. Compute $z = \\frac{x - \\mu}{\\sigma}$
2. Look up $P(Z \\leq z)$ in the z-table
3. Adjust for the direction (left tail, right tail, between)

**Example:** Scores $\\sim N(500, 100)$. Find $P(X > 650)$.
- $z = \\frac{650 - 500}{100} = 1.5$
- $P(Z \\leq 1.5) = 0.9332$
- $P(X > 650) = 1 - 0.9332 = 0.0668 = 6.68\\%$

---

### Backward Problems: Probability → Z → X

**Given a percentile, find the value:**
1. Find the z-score from the table that matches the given probability
2. Solve for $x = \\mu + z\\sigma$

**Example:** What score is at the 90th percentile if $\\mu = 500, \\sigma = 100$?
- 90th percentile → $z = 1.28$ (from table: $P(Z \\leq 1.28) = 0.8997 \\approx 0.90$)
- $x = 500 + 1.28(100) = 628$

> 🔑 "Top 10%" = 90th percentile. "Bottom 25%" = 25th percentile.`
    },
    {
      id: 'apstats-normaldistribution-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Normal Calculations** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'GPA follows $N(3.0, 0.5)$. The proportion of students with GPA above 4.0 involves $z =$',
            options: ['$z = 0.5$', '$z = 1.0$', '$z = 2.0$', '$z = 4.0$'],
            correctAnswer: 2,
            explanation: '$z = (4.0 - 3.0)/0.5 = 2.0$.'
          },
          {
            question: 'The 50th percentile of any normal distribution is:',
            options: ['The mode', 'The standard deviation', 'The mean', 'Zero'],
            correctAnswer: 2,
            explanation: 'For a normal distribution (symmetric), the 50th percentile = median = mean.'
          }
        ]
      }
    },
    {
      id: 'apstats-normaldistribution-p3-input',
      type: 'input-boxes' as const,
      content: `
**Finding Percentiles** 🧮

Baby weights at birth follow $N(7.5, 1.2)$ lbs.

**1)** What z-score corresponds to a baby weighing 9.9 lbs?

**2)** Using $P(Z \\leq 2) = 0.9772$, what percent of babies weigh less than 9.9 lbs? (Express as a number, e.g., 97.72)

**3)** The 84th percentile has $z \\approx 1$. What is the 84th percentile weight? (in lbs, one decimal)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '97.72', '8.7'],
        hint1: '$z = (9.9 - 7.5)/1.2 = 2.4/1.2 = 2$.',
        hint2: '$P(Z \\leq 2) = 0.9772 = 97.72\\%$.',
        hint3: '$x = 7.5 + 1(1.2) = 8.7$ lbs.',
        explanation: '1) $z = 2$. 2) 97.72%. 3) 8.7 lbs.'
      }
    }
  ]
};
