export const apStatsLinRegPart4Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p4-intro',
      type: 'text' as const,
      content: `# 📊 Coefficient of Determination

**Part 4 of 7 — Understanding $r^2$**

---

### Topics in This Part

| Section |
|---------|
| 📐 What $r^2$ Measures |
| 🧮 Calculating $r^2$ from $r$ |
| 📝 Interpreting $r^2$ on the AP Exam |
| 🔗 $r$ vs. $r^2$ |

> 🔑 **Key Concept:** $r^2$ tells you the fraction of variability in $y$ that is explained by the linear relationship with $x$.

---

### The Definition

$$\\boxed{r^2 = \\frac{\\text{SSR}}{\\text{SST}} = 1 - \\frac{\\text{SSE}}{\\text{SST}}}$$

where:
- **SST** = total sum of squares = $\\sum(y_i - \\bar{y})^2$ (total variability in $y$)
- **SSE** = sum of squared errors = $\\sum(y_i - \\hat{y}_i)^2$ (unexplained variability)
- **SSR** = regression sum of squares = SST $-$ SSE (explained variability)

Or simply: $r^2 = r \\times r$ (square the correlation coefficient).

---

### Interpretation Template

$$\\text{"[}r^2 \\times 100\\text{]\\% of the variability in [y context] is explained by the linear relationship with [x context]."}$$

**Example:** $r^2 = 0.72$, $x$ = hours studied, $y$ = exam score.

✅ "72% of the variability in exam scores is explained by the linear relationship with hours studied."

> ⚠️ **AP Tip:** Always say "variability in [y]" and "linear relationship with [x]." Do not say "caused by" or "due to."

---

### $r$ vs. $r^2$

| Statistic | Measures | Range |
|-----------|---------|-------|
| $r$ | Direction and strength of linear relationship | $-1 \\leq r \\leq 1$ |
| $r^2$ | Proportion of variability explained | $0 \\leq r^2 \\leq 1$ |

| $r$ | $r^2$ | Strength |
|-----|-------|----------|
| $\\pm 0.9$ | $0.81$ | Strong |
| $\\pm 0.7$ | $0.49$ | Moderate |
| $\\pm 0.5$ | $0.25$ | Weak |
| $\\pm 0.3$ | $0.09$ | Very weak |

> 🔑 **Key Insight:** Even a "moderate" $r = 0.7$ only explains 49% of the variability. Much variation remains unexplained.`
    },
    {
      id: 'apstats-linearregression-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**$r^2$ Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '$r = -0.8$. Then $r^2 =$',
            options: ['$-0.64$', '$0.64$', '$0.80$', '$-0.80$'],
            correctAnswer: 1,
            explanation: '$r^2 = (-0.8)^2 = 0.64$. Note that $r^2$ is always non-negative.'
          },
          {
            question: '$r^2 = 0.85$ means:',
            options: ['The correlation is 0.85', '85% of the variability in $y$ is explained by the model', 'The slope is 0.85', '85% of points are on the line'],
            correctAnswer: 1,
            explanation: '85% of the variability in $y$ is accounted for by the linear relationship with $x$.'
          },
          {
            question: 'If $r^2 = 0.36$, then $|r| =$',
            options: ['$0.36$', '$0.18$', '$0.6$', '$0.72$'],
            correctAnswer: 2,
            explanation: '$|r| = \\sqrt{r^2} = \\sqrt{0.36} = 0.6$. The sign of $r$ matches the slope direction.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p4-input',
      type: 'input-boxes' as const,
      content: `
**$r^2$ Calculations** 🧮

**1)** $r = 0.9$. What is $r^2$?

**2)** $r^2 = 0.49$. What percentage of variability is explained?

**3)** SST = 500, SSE = 125. What is $r^2$?
      `,
      exercise: {
        inputs: [
          {
            label: 'r-squared',
            correctAnswer: '0.81',
            explanation: '$r^2 = 0.9^2 = 0.81$.'
          },
          {
            label: 'Percentage explained',
            correctAnswer: '49',
            explanation: '$r^2 = 0.49$ means 49% of the variability is explained.'
          },
          {
            label: 'r-squared from SST/SSE',
            correctAnswer: '0.75',
            explanation: '$r^2 = 1 - SSE/SST = 1 - 125/500 = 1 - 0.25 = 0.75$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Practice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr4-dd1',
            label: '$r^2 = 0.04$ indicates the linear model explains ___ of the variability',
            options: ['4%', '40%', '96%', '0.4%'],
            correctIndex: 0,
            explanation: '$r^2 = 0.04$ means only 4% of variability is explained — a very weak linear relationship.'
          },
          {
            id: 'lr4-dd2',
            label: '"72% of the variation in $y$ is caused by $x$" is ___',
            options: ['Correct', 'Incorrect — should say "explained by the linear relationship with"'],
            correctIndex: 1,
            explanation: 'Never use "caused by." $r^2$ measures explained variability from the linear model, not causation.'
          },
          {
            id: 'lr4-dd3',
            label: '$r = 0.5$ and $r = -0.5$ have ___ $r^2$ values',
            options: ['the same', 'different', 'opposite'],
            correctIndex: 0,
            explanation: '$r^2 = (0.5)^2 = (-0.5)^2 = 0.25$. The sign of $r$ does not affect $r^2$.'
          },
          {
            id: 'lr4-dd4',
            label: 'If $r^2 = 1$, all points lie ___',
            options: ['near the line', 'exactly on the LSRL', 'above the line', 'at the origin'],
            correctIndex: 1,
            explanation: '$r^2 = 1$ means all variability is explained — every point is exactly on the regression line (perfect linear fit).'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — $r^2$** ✅
      `,
      exercise: {
        questions: [
          {
            question: '$r^2$ is always between:',
            options: ['$-1$ and $1$', '$0$ and $1$', '$0$ and $\\infty$', '$-1$ and $0$'],
            correctAnswer: 1,
            explanation: '$r^2$ is a proportion (fraction of variability explained), so $0 \\leq r^2 \\leq 1$.'
          },
          {
            question: 'If $r^2$ is close to 0:',
            options: ['The linear model explains most variability', 'The linear model explains almost none of the variability', 'The line passes through all points', 'The correlation is strong'],
            correctAnswer: 1,
            explanation: '$r^2 \\approx 0$ means the linear model does not explain the variability in $y$.'
          },
          {
            question: '$r = -0.95$. The model explains about ___ of the variability.',
            options: ['$95\\%$', '$90\\%$', '$50\\%$', '$5\\%$'],
            correctAnswer: 1,
            explanation: '$r^2 = (-0.95)^2 = 0.9025 \\approx 90\\%$.'
          },
          {
            question: 'A high $r^2$ does NOT mean:',
            options: ['Good linear fit', '$x$ causes $y$', 'Most variability is explained', 'Small residuals'],
            correctAnswer: 1,
            explanation: 'High $r^2$ means strong linear association, not causation. Lurking variables could explain the relationship.'
          },
          {
            question: 'SST $= 200$, SSE $= 50$. SSR $=$',
            options: ['$150$', '$250$', '$50$', '$100$'],
            correctAnswer: 0,
            explanation: 'SSR = SST $-$ SSE = $200 - 50 = 150$.'
          },
          {
            question: 'Two models: Model A has $r^2 = 0.82$, Model B has $r^2 = 0.65$. Which fits better?',
            options: ['Model A', 'Model B', 'Same', 'Cannot compare $r^2$'],
            correctAnswer: 0,
            explanation: 'Higher $r^2$ means more variability explained. Model A ($82\\%$) fits better than Model B ($65\\%$).'
          },
          {
            question: 'If you add a second explanatory variable, $r^2$:',
            options: ['Always decreases', 'Always stays the same or increases', 'Always equals 1', 'Depends on the data'],
            correctAnswer: 1,
            explanation: 'Adding a variable can never decrease $r^2$ (though adjusted $r^2$ might decrease — that is a different measure).'
          },
          {
            question: '"$r^2 = 0.56$" on an AP answer should be interpreted as:',
            options: ['"56% of the variation in [y] is explained by the linear relationship with [x]"', '"The correlation is 0.56"', '"56% of points are on the line"', '"$x$ causes 56% of $y$"'],
            correctAnswer: 0,
            explanation: 'The correct AP interpretation uses "variability in [y]" and "linear relationship with [x]."'
          },
          {
            question: '$r^2 = 0.64$. The unexplained variability is:',
            options: ['$64\\%$', '$36\\%$', '$0.8$', '$100\\%$'],
            correctAnswer: 1,
            explanation: 'Unexplained $= 1 - r^2 = 1 - 0.64 = 0.36 = 36\\%$.'
          },
          {
            question: 'Which $r$ gives the highest $r^2$?',
            options: ['$r = 0.7$', '$r = -0.8$', '$r = 0.6$', '$r = -0.5$'],
            correctAnswer: 1,
            explanation: '$r^2$ values: $0.49, 0.64, 0.36, 0.25$. $r = -0.8$ gives the highest $r^2 = 0.64$.'
          }
        ]
      }
    }
  ]
};
