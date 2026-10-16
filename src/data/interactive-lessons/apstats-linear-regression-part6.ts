export const apStatsLinRegPart6Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p6-intro',
      type: 'text' as const,
      content: `# 📊 Problem-Solving Workshop

**Part 6 of 7 — Full Regression Analysis Problems**

---

### Workshop Goals

| Skill |
|-------|
| 📐 Read the LSRL from technology output |
| 📝 Interpret slope, intercept, $r$, and $r^2$ in context |
| 📉 Analyze residuals and residual plots |
| ⚠️ Identify unusual points |
| 🎯 Recognize the limits of the model |

> 🔑 **AP Tip:** Free-response regression questions typically ask you to interpret slope/$r^2$ in context, describe the residual plot, and discuss whether the model is appropriate.

---

### Worked Example 1 — Temperature and Ice Cream Sales

A manager records daily high temperature ($x$, °F) and ice cream sales ($y$, \\$100s) for 15 summer days.

**Technology output:**

| Term | Coefficient |
|------|-------------|
| Constant | $-3.50$ |
| Temperature | $0.15$ |

$r^2 = 91.1\\%$

**Step 1 — Write the LSRL:**
$$\\hat{y} = -3.50 + 0.15x$$

**Step 2 — Interpret the slope:**
"For each additional degree Fahrenheit in daily high temperature, the predicted ice cream sales increase by \\$15 (0.15 hundreds of dollars)."

**Step 3 — Interpret $r^2$:**
"91.1% of the variation in ice cream sales is explained by the linear relationship with daily high temperature."

**Step 4 — Predict:** At $x = 85°$F:
$$\\hat{y} = -3.50 + 0.15(85) = -3.50 + 12.75 = 9.25 \\text{ (\\$925 in sales)}$$

**Step 5 — Check appropriateness:**
- Residual plot shows no obvious pattern → linear model is appropriate
- $r^2 = 0.911$ → most of the variation in sales is explained
- No points stand far from the pattern in the residual plot

---

### Worked Example 2 — Study Hours and GPA

A sample of 30 college students. $x$ = weekly study hours, $y$ = GPA.

LSRL: $\\hat{y} = 1.85 + 0.052x$, $r = 0.68$, $r^2 = 0.462$

Most students study 5–25 hours; one student studies 42 hours/week and has a GPA of 3.9.

**Analysis:**

1. **Slope interpretation:** "For each additional hour of weekly studying, the predicted GPA increases by 0.052 points."

2. **$r^2$ interpretation:** "46.2% of the variation in GPA is explained by the linear relationship with weekly study hours."

3. **The 42-hour student:**
   - $\\hat{y} = 1.85 + 0.052(42) = 4.034$, so the predicted GPA is 4.034
   - Residual $= 3.9 - 4.034 = -0.134$, a small residual
   - Although this $x$ is far from the other students, the point fits the general pattern

4. **Prediction for 50 hours:** $\\hat{y} = 1.85 + 0.052(50) = 4.45$
   - This is **extrapolation** (beyond the data), and the prediction exceeds 4.0, the maximum GPA, so it is unreliable!

---

### Common Mistakes on the AP Exam

| Mistake | Correction |
|---------|------------|
| "Temperature causes sales to increase" | Use "is associated with" or "predicts" |
| "91.1% of the data falls on the line" | "$r^2$ measures variation explained, not % of points on the line" |
| Interpreting the intercept literally when $x = 0$ is outside the data | "The intercept has no reasonable interpretation because $x = 0$ is outside the range of data" |
| Forgetting units in slope interpretation | "For each additional [unit of x], the predicted [y] [increases/decreases] by [slope] [units of y]" |`
    },
    {
      id: 'apstats-linearregression-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Regression Analysis Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'LSRL: $\\hat{y} = 12.4 - 0.8x$, where $x$ = age (years) and $y$ = reaction time (ms). Interpret the slope:',
            options: ['Reaction time falls by exactly 0.8 ms for each year', 'Each extra year cuts predicted time by 0.8 ms', 'Age causes reaction time to drop by 0.8 ms per year', 'About 80% of the reaction time is explained by age'],
            correctAnswer: 1,
            explanation: 'The slope is the PREDICTED change in reaction time for each additional year of age. "Exactly" ignores scatter, "causes" claims too much, and the slope is not a percent of variation.'
          },
          {
            question: '$r^2 = 0.73$ in a regression of height ($y$) on shoe size ($x$). Which interpretation is correct?',
            options: ['73% of the data points lie on the regression line', '73% of the variation in height is explained by shoe size', 'Shoe size causes 73% of the variation in height', 'The correlation between height and shoe size is 0.73'],
            correctAnswer: 1,
            explanation: '$r^2$ is the proportion of variation in $y$ explained by the linear relationship with $x$. It is not a percent of points, not causal, and the correlation would be about 0.85.'
          },
          {
            question: 'A residual plot shows a clear U-shape. This suggests:',
            options: ['The linear model is appropriate for the data', 'A linear model is not the best choice', 'There are no unusual points in the data', '$r^2$ must be very close to 1 for this model'],
            correctAnswer: 1,
            explanation: 'Curvature in the residual plot means the linear model misses a systematic pattern. It says nothing about whether unusual points exist, and $r^2$ can be large or small.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p6-input',
      type: 'input-boxes' as const,
      content: `
**Computations** 🧮

LSRL: $\\hat{y} = 5.2 + 1.3x$, $r = 0.85$

**1)** Predict $y$ when $x = 10$.

**2)** What is $r^2$? (two decimal places)

**3)** Observed $y = 22$ when $x = 10$. What is the residual?
      `,
      exercise: {
        inputs: [
          {
            label: 'Predicted y at x=10',
            correctAnswer: '18.2',
            explanation: '$\\hat{y} = 5.2 + 1.3(10) = 5.2 + 13 = 18.2$.'
          },
          {
            label: 'r-squared',
            correctAnswer: '0.72',
            explanation: '$r^2 = 0.85^2 = 0.7225 \\approx 0.72$.'
          },
          {
            label: 'Residual',
            correctAnswer: '3.8',
            explanation: 'Residual $= y - \\hat{y} = 22 - 18.2 = 3.8$. Positive residual — the model underestimated.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpretation Decisions** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr6-dd1',
            label: 'LSRL: $\\hat{y} = 50 + 2.5x$. Data range: $x = 10$ to $x = 40$. Predicting at $x = 60$ is:',
            options: ['interpolation, so reliable', 'extrapolation, so less reliable', 'interpolation, but less reliable', 'extrapolation, but more reliable'],
            correctIndex: 1,
            explanation: '$x = 60$ is beyond the data range (10–40), so this is extrapolation, which is less reliable the farther it goes.'
          },
          {
            id: 'lr6-dd2',
            label: 'Intercept $= 50$. If $x = 0$ is outside the data range, the intercept ___',
            options: ['is the predicted $y$ at $x = 0$', 'has no reasonable interpretation here', 'equals the mean of the $y$ values', 'gives the predicted change in $y$'],
            correctIndex: 1,
            explanation: 'When $x = 0$ falls outside the observed $x$ values, interpreting the intercept is an extrapolation. The mean of $y$ is $\\bar{y}$, and the change in $y$ is the slope.'
          },
          {
            id: 'lr6-dd3',
            label: 'The residual plot shows random scatter around 0. The linear model is ___',
            options: ['inappropriate', 'appropriate', 'causal', 'perfect'],
            correctIndex: 1,
            explanation: 'Random scatter in the residual plot supports the appropriateness of the linear model; it does not make the fit perfect or causal.'
          },
          {
            id: 'lr6-dd4',
            label: 'A negative slope means that as $x$ increases, $\\hat{y}$ ___',
            options: ['increases', 'decreases', 'stays the same', 'becomes negative'],
            correctIndex: 1,
            explanation: 'A negative slope means predicted $y$ decreases as $x$ increases; it need not ever become negative.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Regression Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'LSRL: $\\hat{y} = -2 + 0.5x$. When $x = 20$, $\\hat{y} =$',
            options: ['$10$', '$8$', '$12$', '$-2$'],
            correctAnswer: 1,
            explanation: '$\\hat{y} = -2 + 0.5(20) = -2 + 10 = 8$. 10 forgets the intercept and 12 adds it with the wrong sign.'
          },
          {
            question: 'Which statement correctly interprets a slope of $-1.2$ in a regression of resting heart rate ($y$, beats per minute) on weeks of training ($x$)?',
            options: ['Resting heart rate is $-1.2$ beats per minute for every athlete', 'Each extra week lowers predicted resting rate by 1.2 bpm', 'Training lowers every heart rate by exactly 1.2 bpm each week', 'The correlation between weeks of training and heart rate is $-1.2$'],
            correctAnswer: 1,
            explanation: 'The slope is the predicted change in $y$ for each one-unit increase in $x$: predicted resting heart rate drops 1.2 bpm per extra week. "Exactly" ignores variation, a heart rate cannot be negative, and $r$ is between $-1$ and 1.'
          },
          {
            question: 'If $r = -0.92$ and $r^2 = 0.846$, the model:',
            options: ['Explains 92% of all of the variation in $y$', 'Explains 84.6% of the variation in $y$', 'Shows only a weak linear association overall', 'Has a positive slope, with $y$ rising as $x$ rises'],
            correctAnswer: 1,
            explanation: '$r^2 = 0.846$ means 84.6% of the variation in $y$ is explained. 92% uses $|r|$, $|r| = 0.92$ is strong, and a negative $r$ means a negative slope.'
          },
          {
            question: 'A student writes: "The intercept of $-3.5$ means that at 0 degrees, ice cream sales are $-\\$350$." If temperature data range from 65°F to 100°F, this is:',
            options: ['Correct, since it uses the intercept and its units', 'Incorrect, since $x = 0$ is outside the data range', 'Incorrect, since intercepts are never interpreted', 'Correct, since the data range does not matter for intercepts'],
            correctAnswer: 1,
            explanation: '$x = 0$°F is far outside the 65–100°F data, so the intercept has no reasonable meaning here (and negative sales are impossible). Intercepts can be interpreted when $x = 0$ is within the data.'
          },
          {
            question: 'A residual plot for a linear model shows residuals that are positive at both ends and negative in the middle. This indicates:',
            options: ['A good linear model', 'A curved relationship', 'A perfect fit to the data', 'No relationship between $x$ and $y$'],
            correctAnswer: 1,
            explanation: 'A U-shaped residual pattern is curvature, so the relationship is not linear. A perfect fit would have residuals of 0, and curvature shows there IS a relationship.'
          },
          {
            question: 'Two regressions: Model A has $r^2 = 0.88$ with random residuals. Model B has $r^2 = 0.93$ with a curved residual plot. Which is more appropriate?',
            options: ['Model B, since its $r^2$ value is the higher one', 'Model A, since its residuals lack a pattern', 'Both, since each has a large $r^2$ value', 'Neither, since one residual plot is curved'],
            correctAnswer: 1,
            explanation: 'A curved residual plot means Model B is not the right form, whatever its $r^2$. Model A shows random residuals, so its linear model is appropriate.'
          },
          {
            question: 'Data: $x$ ranges from 5 to 25. You want to predict $y$ at $x = 15$. This is:',
            options: ['Extrapolation', 'Interpolation', 'A residual', 'A cluster'],
            correctAnswer: 1,
            explanation: '$x = 15$ is within the range of the data (5–25), so this is interpolation.'
          },
          {
            question: 'LSRL: $\\hat{y} = 100 - 4x$. Point: $(10, 55)$. Residual $=$',
            options: ['$-5$', '$5$', '$-55$', '$15$'],
            correctAnswer: 0,
            explanation: '$\\hat{y} = 100 - 4(10) = 60$. Residual $= 55 - 60 = -5$; $+5$ reverses the subtraction.'
          },
          {
            question: '"For each additional unit increase in $x$, the predicted $y$ increases by 3.2 units" describes:',
            options: ['The intercept', 'The slope', '$r^2$', 'The residual'],
            correctAnswer: 1,
            explanation: 'The slope gives the predicted change in $y$ for a one-unit increase in $x$.'
          },
          {
            question: 'A researcher finds $r = 0.95$ between ice cream sales and drowning deaths. The best explanation is:',
            options: ['Eating ice cream causes more people to drown', 'Drowning deaths cause ice cream sales to rise', 'Hot weather drives both variables up', 'An $r$ that high must be a calculation error'],
            correctAnswer: 2,
            explanation: 'Correlation does not imply causation. Hot weather is a confounding variable that increases both ice cream sales and swimming (and so drownings).'
          }
        ]
      }
    }
  ]
};
