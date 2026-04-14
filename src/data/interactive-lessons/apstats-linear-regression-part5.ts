export const apStatsLinRegPart5Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p5-intro',
      type: 'text' as const,
      content: `# 📊 Influential Points and Outliers

**Part 5 of 7 — Leverage, Influence, and Unusual Observations**

---

### Topics in This Part

| Section |
|---------|
| ⚠️ Outliers in Regression |
| 📐 High-Leverage Points |
| 🔄 Influential Points |
| 🧪 Diagnosing Unusual Points |

> 🔑 **Key Concept:** Not all unusual points are equally problematic. Some change the regression line dramatically (influential), while others are just far from the pattern (outliers).

---

### Three Types of Unusual Points

**1. Outlier (in $y$-direction)**
- A point whose $y$-value is far from the predicted $\\hat{y}$ (large residual)
- Has an unusually large $|\\text{residual}|$
- Does NOT necessarily change the regression line much

**2. High-Leverage Point (in $x$-direction)**
- A point whose $x$-value is far from $\\bar{x}$
- Has the *potential* to influence the regression line
- May or may not actually change the line — depends on where it falls

**3. Influential Point**
- A point that, *when removed*, substantially changes the slope, intercept, or $r^2$
- High-leverage points that are also outliers are the most influential
- Test: Fit the LSRL with and without the point. If slope/intercept/$r^2$ changes a lot, the point is influential.

---

### Visualizing the Distinction

| Scenario | Large Residual? | Far from $\\bar{x}$? | Influential? |
|----------|:-:|:-:|:-:|
| Regular point near center | No | No | No |
| Outlier near center of $x$ | Yes | No | Usually no |
| Point at extreme $x$, on the line | No | Yes | Usually no |
| Point at extreme $x$, off the line | Yes | Yes | **Yes** |

---

### Worked Example

A researcher collects data on advertising spending ($x$, in thousands) and sales ($y$, in thousands) for 10 stores:

Most stores spend \\$2K–\\$8K. One store spent \\$25K (high leverage).

- **Scenario A:** That store had \\$50K in sales, fitting the overall pattern → high leverage but NOT influential.
- **Scenario B:** That store had \\$5K in sales, far below the trend → high leverage AND influential. Removing it would substantially change the slope.

> ⚠️ **AP Tip:** On the AP exam, "influential" specifically means removing the point changes the regression equation meaningfully. Always describe the effect on slope, intercept, or $r^2$.

---

### What to Do with Unusual Points

1. **Investigate** — is there a data-entry error or special circumstance?
2. **Report both analyses** — with and without the point
3. **Never silently delete data** — explain your reasoning
4. **Check the residual plot** — unusual points often show up clearly`
    },
    {
      id: 'apstats-linearregression-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Identifying Unusual Points** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A point has an $x$-value far from $\\bar{x}$ but falls right on the regression line. This point is:',
            options: ['An outlier', 'An influential point', 'A high-leverage point that is NOT influential', 'A regular point'],
            correctAnswer: 2,
            explanation: 'The point is far from $\\bar{x}$ (high leverage) but does not pull the line away from the pattern (not influential).'
          },
          {
            question: 'An outlier is identified by:',
            options: ['Its $x$-value being far from $\\bar{x}$', 'A large residual (far from predicted $\\hat{y}$)', 'Being the largest data value', 'Having a negative residual'],
            correctAnswer: 1,
            explanation: 'An outlier in regression is a point with a large residual — its observed $y$ is far from the predicted $\\hat{y}$.'
          },
          {
            question: 'Removing point P changes the slope from 2.3 to 4.1 and $r^2$ from 0.58 to 0.91. Point P is:',
            options: ['Not unusual', 'An outlier only', 'A high-leverage point only', 'An influential point'],
            correctAnswer: 3,
            explanation: 'Removing P substantially changes slope and $r^2$, which is the definition of an influential point.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-input',
      type: 'input-boxes' as const,
      content: `
**Diagnosing Points** 🧮

**1)** The LSRL is $\\hat{y} = 10 + 3x$. A point has $x = 5, y = 35$. What is the residual?

**2)** $\\bar{x} = 12$. A point has $x = 45$. Is this point high-leverage? (yes/no)

**3)** With all points: slope $= 1.8$. Without point A: slope $= 1.7$. Without point B: slope $= 4.5$. Which point is more influential? (A/B)
      `,
      exercise: {
        inputs: [
          {
            label: 'Residual',
            correctAnswer: '10',
            explanation: '$\\hat{y} = 10 + 3(5) = 25$. Residual $= y - \\hat{y} = 35 - 25 = 10$. This is a large positive residual — likely an outlier.'
          },
          {
            label: 'High leverage?',
            correctAnswer: 'yes',
            explanation: '$x = 45$ is far from $\\bar{x} = 12$, so this point has high leverage.'
          },
          {
            label: 'More influential point',
            correctAnswer: 'B',
            explanation: 'Removing B changes the slope from 1.8 to 4.5 (a massive change), while removing A barely changes it (1.8 → 1.7). Point B is far more influential.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Leverage and Influence Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr5-dd1',
            label: 'A high-leverage point is defined by its position in the ___ direction',
            options: ['$y$', '$x$', 'both $x$ and $y$', 'residual'],
            correctIndex: 1,
            explanation: 'Leverage is about the $x$-value being far from $\\bar{x}$, not the $y$-value.'
          },
          {
            id: 'lr5-dd2',
            label: 'The most influential points are those with ___',
            options: ['small residuals and central $x$-values', 'large residuals and extreme $x$-values', 'large residuals and central $x$-values', 'small residuals and extreme $x$-values'],
            correctIndex: 1,
            explanation: 'The combination of high leverage (extreme $x$) AND large residual (off the pattern) makes a point most influential.'
          },
          {
            id: 'lr5-dd3',
            label: 'If a point has a large residual but $x \\approx \\bar{x}$, it is ___',
            options: ['not unusual', 'influential', 'an outlier but probably not influential', 'high leverage'],
            correctIndex: 2,
            explanation: 'A point near $\\bar{x}$ with a large residual is an outlier, but lacking leverage, it usually does not strongly influence the LSRL.'
          },
          {
            id: 'lr5-dd4',
            label: 'When you find an influential point, you should ___',
            options: ['delete it immediately', 'ignore it', 'report results with and without it', 'change its value'],
            correctIndex: 2,
            explanation: 'Always report both analyses and investigate the reason for the unusual observation.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Influential Points & Outliers** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A point with high leverage always:',
            options: ['Changes the regression line', 'Has a large residual', 'Has an $x$-value far from $\\bar{x}$', 'Is an outlier'],
            correctAnswer: 2,
            explanation: 'High leverage means the $x$-value is far from $\\bar{x}$. It does not guarantee influence or a large residual.'
          },
          {
            question: 'To determine if a point is influential, you should:',
            options: ['Check if its residual is positive', 'Compute its $x$-value', 'Fit the LSRL with and without it and compare', 'Check if it is the largest $y$-value'],
            correctAnswer: 2,
            explanation: 'Influence is measured by the effect of removing the point on the regression equation.'
          },
          {
            question: 'A scatterplot shows 20 points clustered between $x = 1$ and $x = 5$, plus one point at $x = 30$. The point at $x = 30$ is:',
            options: ['An outlier in $y$', 'A high-leverage point', 'Guaranteed influential', 'A regular data point'],
            correctAnswer: 1,
            explanation: '$x = 30$ is far from the rest, giving it high leverage. Whether it is influential depends on its $y$-value.'
          },
          {
            question: 'An outlier near the center of the $x$-values typically:',
            options: ['Greatly changes the slope', 'Has little effect on the LSRL', 'Is always deleted', 'Increases $r^2$'],
            correctAnswer: 1,
            explanation: 'Without leverage, a central outlier tilts the line very little because points near $\\bar{x}$ have minimal pull.'
          },
          {
            question: 'Removing a point changes $r^2$ from 0.45 to 0.92. The point was:',
            options: ['Not unusual', 'Highly influential', 'Only an outlier', 'Only high leverage'],
            correctAnswer: 1,
            explanation: 'A dramatic change in $r^2$ upon removal indicates the point was very influential.'
          },
          {
            question: 'A point at $(\\bar{x}, \\bar{y})$ is:',
            options: ['Always influential', 'Never influential', 'High leverage', 'An outlier'],
            correctAnswer: 1,
            explanation: 'The point $(\\bar{x}, \\bar{y})$ is always on the LSRL and has zero leverage, so it cannot be influential.'
          },
          {
            question: 'Which is the correct response when you identify an influential point?',
            options: ['Remove it without comment', 'Report it is an error', 'Investigate the point and report analyses with and without it', 'Replace it with the mean'],
            correctAnswer: 2,
            explanation: 'Look for a reason (error, special case), then present both analyses so the reader can judge the impact.'
          },
          {
            question: 'An influential point that inflates $r^2$ artificially is most likely:',
            options: ['Near $\\bar{x}$ and on the line', 'At an extreme $x$ and on the line', 'Near $\\bar{x}$ with a large residual', 'At an extreme $x$ and far from the line but in the direction of the slope'],
            correctAnswer: 3,
            explanation: 'A point at an extreme $x$ that follows the general trend (same direction as slope) pulls the line toward it and artificially increases $r^2$.'
          },
          {
            question: 'On a residual plot, an outlier appears as:',
            options: ['A point near 0', 'A point with a very large or very small residual', 'A point at $x = 0$', 'The last point in the dataset'],
            correctAnswer: 1,
            explanation: 'On a residual plot, outliers stand out as points far from the residual $= 0$ line.'
          },
          {
            question: 'In a regression with $n = 100$ data points, one point at $x = 500$ (all others $x < 50$) falls exactly on the LSRL. This point is:',
            options: ['Influential', 'An outlier', 'High leverage but not influential', 'Neither high leverage nor influential'],
            correctAnswer: 2,
            explanation: 'It has extreme leverage ($x$ far from $\\bar{x}$) but zero residual (on the line), so removing it would not substantially change the LSRL.'
          }
        ]
      }
    }
  ]
};
