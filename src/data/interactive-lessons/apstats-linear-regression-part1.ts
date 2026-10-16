export const apStatsLinRegPart1Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p1-intro',
      type: 'text' as const,
      content: `# 📈 Scatterplots and Correlation

**Part 1 of 7 — Exploring Bivariate Relationships**

---

### Describing Scatterplots

When examining a scatterplot, describe:

| Feature | Options |
|---------|---------|
| **Direction** | Positive, negative, or none |
| **Form** | Linear, curved, or no pattern |
| **Strength** | Strong, moderate, or weak |
| **Unusual features** | Clusters, or points that don't fit the general pattern |

---

### Correlation Coefficient $r$

The correlation $r$ measures the strength and direction of a **linear** relationship. On the AP exam, $r$ is calculated using technology (calculator or computer output); you interpret it rather than compute it by hand.

| Value of $r$ | Interpretation |
|-------------|---------------|
| $r = 1$ | Perfect positive linear |
| $r = -1$ | Perfect negative linear |
| $r = 0$ | No linear relationship |
| $0.8 \\leq |r| \\leq 1$ | Strong linear |
| $0.5 \\leq |r| < 0.8$ | Moderate linear |

---

### Important Properties of $r$

- $-1 \\leq r \\leq 1$ always
- $r$ has no units
- $r$ is not affected by changes in units (e.g., inches to cm)
- $r$ measures only **linear** association — a strong curved relationship can have $r \\approx 0$
- A single point that doesn't fit the pattern can change $r$ a lot
- An $r$ close to $-1$ or $1$ does **not** by itself mean a linear model is appropriate: always look at the scatterplot (and later, the residual plot)

> 🔑 **Correlation does NOT imply causation.** A strong correlation between two variables does not mean one causes the other.`
    },
    {
      id: 'apstats-linearregression-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Correlation Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $r = -0.85$, the relationship is:',
            options: ['Positive and strong', 'Weak and negative', 'Strong and negative', 'Moderate and positive'],
            correctAnswer: 2,
            explanation: '$|r| = 0.85$ is close to 1, so the linear association is strong, and the negative sign means the direction is negative (as $x$ increases, $y$ tends to decrease). The sign gives direction only; it does not make the relationship weak.'
          },
          {
            question: 'Switching the roles of $x$ and $y$ in a scatterplot:',
            options: ['Changes the sign of $r$', 'Does not change $r$', 'Changes $r$ to $1/r$', 'Changes $r$ to $r^2$'],
            correctAnswer: 1,
            explanation: 'Correlation treats the two variables symmetrically, so $r(x,y) = r(y,x)$. The sign, reciprocal and square of $r$ have nothing to do with which variable is on which axis.'
          },
          {
            question: 'A dataset shows a perfect U-shaped pattern. The correlation is likely:',
            options: ['$r = 1$', '$r = -1$', '$r \\approx 0$', '$r = 0.5$'],
            correctAnswer: 2,
            explanation: '$r$ measures linear association only. A perfect U-shape has no overall linear trend, so $r \\approx 0$ despite a clear pattern; $r = \\pm 1$ would require the points to lie on a straight line.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p1-input',
      type: 'input-boxes' as const,
      content: `
**Correlation Practice** 🧮

**1)** If $r = 0.72$, what is $r^2$? (Round to 2 decimal places)

**2)** What percentage of variation in $y$ is explained by the linear relationship with $x$? (Use $r^2$ from #1, express as a whole number)

**3)** If every data point falls exactly on the line $y = 3x + 2$, then $r = $?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.52', '52', '1'],
        hint1: '$0.72^2 = 0.5184 \\approx 0.52$.',
        hint2: '$r^2 = 0.52 = 52\\%$.',
        hint3: 'Perfect linear with positive slope → $r = 1$.',
        explanation: '1) $r^2 = 0.52$. 2) 52% of variation explained. 3) $r = 1$ (perfect positive linear).'
      }
    }
  ]
};
