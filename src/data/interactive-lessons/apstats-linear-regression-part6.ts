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
| 📐 Compute and interpret the LSRL |
| 📝 Interpret slope, intercept, $r$, and $r^2$ in context |
| 📉 Analyze residuals and residual plots |
| ⚠️ Identify unusual/influential points |
| 🎯 Recognize the limits of the model |

> 🔑 **AP Tip:** Free-response regression questions typically ask you to interpret slope/$r^2$ in context, describe the residual plot, and discuss whether the model is appropriate.

---

### Worked Example 1 — Temperature and Ice Cream Sales

A manager records daily high temperature ($x$, °F) and ice cream sales ($y$, \\$100s) for 15 summer days.

**Computer output:**

| Predictor | Coef | SE Coef | T | P |
|-----------|------|---------|---|---|
| Constant | $-3.50$ | $1.12$ | $-3.13$ | $0.008$ |
| Temperature | $0.15$ | $0.013$ | $11.54$ | $< 0.001$ |

$S = 0.96 \\quad R\\text{-}sq = 91.1\\%$

**Step 1 — Write the LSRL:**
$$\\hat{y} = -3.50 + 0.15x$$

**Step 2 — Interpret the slope:**
"For each additional degree Fahrenheit increase in daily high temperature, the predicted ice cream sales increase by \\$15 (0.15 hundreds)."

**Step 3 — Interpret $r^2$:**
"91.1% of the variability in ice cream sales is explained by the linear relationship with daily high temperature."

**Step 4 — Predict:** At $x = 85°$F:
$$\\hat{y} = -3.50 + 0.15(85) = -3.50 + 12.75 = 9.25 \\text{ (\\$925 in sales)}$$

**Step 5 — Check appropriateness:**
- Residual plot shows no obvious pattern → linear model is appropriate
- $r^2 = 0.911$ → strong linear fit
- No influential points observed in the residual plot

---

### Worked Example 2 — Study Hours and GPA

A sample of 30 college students. $x$ = weekly study hours, $y$ = GPA.

LSRL: $\\hat{y} = 1.85 + 0.052x$, $r = 0.68$, $r^2 = 0.462$

One student studies 42 hours/week (most study 5–25 hours) and has a GPA of 3.9.

**Analysis:**

1. **Slope interpretation:** "For each additional hour of weekly studying, GPA is predicted to increase by 0.052 points."

2. **$r^2$ interpretation:** "46.2% of the variability in GPA is explained by the linear relationship with weekly study hours."

3. **The 42-hour student:**
   - $\\hat{y} = 1.85 + 0.052(42) = 4.034$ — predicted GPA is 4.034
   - Residual $= 3.9 - 4.034 = -0.134$ — small residual
   - $x = 42$ is far from $\\bar{x}$ → **high leverage**
   - But residual is small → likely **not influential** (on the trend line)

4. **Prediction for 50 hours:** $\\hat{y} = 1.85 + 0.052(50) = 4.45$
   - This is **extrapolation** (beyond data range) and the prediction exceeds 4.0 (max GPA) — unreliable!

---

### Common Mistakes on the AP Exam

| Mistake | Correction |
|---------|------------|
| "Temperature causes sales to increase" | Use "is associated with" or "predicts" |
| "91.1% of the data falls on the line" | "$r^2$ measures variability explained, not % of points on the line" |
| Interpreting the intercept literally when $x = 0$ is outside the data | "The intercept has no practical interpretation because $x = 0$ is outside the range of data" |
| Forgetting units in slope interpretation | "For each additional [unit of x], [y] is predicted to [increase/decrease] by [slope] [units of y]" |`
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
            options: ['"Reaction time decreases by 0.8 ms for each year"', '"For each additional year of age, the predicted reaction time decreases by 0.8 ms"', '"Age causes a 0.8 ms decrease in reaction time"', '"80% of reaction time is explained by age"'],
            correctAnswer: 1,
            explanation: 'Use "for each additional [unit of x], the predicted [y] [increases/decreases] by [slope] [units of y]." Never say "causes."'
          },
          {
            question: '$r^2 = 0.73$ in a regression of height ($y$) on shoe size ($x$). Which interpretation is correct?',
            options: ['73% of the data points lie on the regression line', '73% of the variability in height is explained by the linear relationship with shoe size', 'Shoe size causes 73% of height variation', 'The correlation is 0.73'],
            correctAnswer: 1,
            explanation: '$r^2$ measures the proportion of variability in $y$ explained by the linear model with $x$.'
          },
          {
            question: 'A residual plot shows a clear U-shape. This suggests:',
            options: ['The linear model is appropriate', 'A nonlinear model would be more appropriate', 'There are no outliers', '$r^2$ is close to 1'],
            correctAnswer: 1,
            explanation: 'A curved pattern in the residual plot indicates the linear model misses a systematic pattern — a nonlinear model would be better.'
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
            options: ['interpolation — reliable', 'extrapolation — unreliable'],
            correctIndex: 1,
            explanation: '$x = 60$ is beyond the data range (10–40), so this is extrapolation.'
          },
          {
            id: 'lr6-dd2',
            label: 'Intercept $= 50$. If $x = 0$ is outside the data range, the intercept ___',
            options: ['should be interpreted as the predicted $y$ when $x = 0$', 'has no practical interpretation in this context'],
            correctIndex: 1,
            explanation: 'When $x = 0$ falls outside the range of observed data, the intercept should not be interpreted literally.'
          },
          {
            id: 'lr6-dd3',
            label: 'The residual plot shows random scatter around 0. The linear model is ___',
            options: ['inappropriate', 'appropriate'],
            correctIndex: 1,
            explanation: 'Random scatter in the residual plot supports the appropriateness of the linear model.'
          },
          {
            id: 'lr6-dd4',
            label: 'A negative slope means that as $x$ increases, $\\hat{y}$ ___',
            options: ['increases', 'decreases', 'stays the same', 'becomes undefined'],
            correctIndex: 1,
            explanation: 'A negative slope indicates a negative linear association — predicted $y$ decreases as $x$ increases.'
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
            explanation: '$\\hat{y} = -2 + 0.5(20) = -2 + 10 = 8$.'
          },
          {
            question: 'Which statement correctly interprets a slope of $-1.2$ in a regression of weight loss ($y$, lbs) on weeks of exercise ($x$)?',
            options: ['"Weight loss is $-1.2$ lbs"', '"For each additional week of exercise, predicted weight loss increases by 1.2 lbs"', '"Exercise reduces weight by exactly 1.2 lbs per week"', '"The correlation is $-1.2$"'],
            correctAnswer: 1,
            explanation: 'Use the template: "For each additional [x-unit], the predicted [y] changes by [slope] [y-units]." Here $y$ = weight loss, so an increase in weight loss means more weight lost.'
          },
          {
            question: 'If $r = -0.92$ and $r^2 = 0.846$, the model:',
            options: ['Explains 92% of variability', 'Explains 84.6% of variability in $y$', 'Shows a weak relationship', 'Has a positive slope'],
            correctAnswer: 1,
            explanation: '$r^2 = 0.846$ means 84.6% of variability in $y$ is explained. The negative $r$ means the slope is negative.'
          },
          {
            question: 'A student writes: "The intercept of $-3.5$ means that at 0 degrees, ice cream sales are $-\\$350$." If temperature data ranges from 65°F to 100°F, this is:',
            options: ['A correct interpretation', 'Incorrect — the intercept should not be interpreted because $x = 0$ is outside the data range', 'Incorrect — the intercept is always meaningful', 'Correct but unusual'],
            correctAnswer: 1,
            explanation: '$x = 0°$F is far outside the data range, so the intercept has no practical meaning in context.'
          },
          {
            question: 'The residual plot shows residuals increasing in spread as $x$ increases. This indicates:',
            options: ['A good linear model', 'Non-constant variance (heteroscedasticity)', 'A perfect fit', 'No relationship'],
            correctAnswer: 1,
            explanation: 'Increasing spread in residuals (fan shape) violates the constant variance assumption.'
          },
          {
            question: 'Two regressions: Model A has $r^2 = 0.88$ with random residuals. Model B has $r^2 = 0.93$ with a curved residual plot. Which is more appropriate?',
            options: ['Model B (higher $r^2$)', 'Model A (appropriate residual plot)', 'Both are equally valid', 'Neither is appropriate'],
            correctAnswer: 1,
            explanation: 'A curved residual plot means the linear model is inappropriate, regardless of $r^2$. Model A with random residuals is more appropriate.'
          },
          {
            question: 'Data: $x$ ranges from 5 to 25. You want to predict $y$ at $x = 15$. This is:',
            options: ['Extrapolation', 'Interpolation', 'Invalid', 'Dependent on $r^2$'],
            correctAnswer: 1,
            explanation: '$x = 15$ is within the range of the data (5–25), so this is interpolation — generally reliable.'
          },
          {
            question: 'LSRL: $\\hat{y} = 100 - 4x$. Point: $(10, 55)$. Residual $=$',
            options: ['$-5$', '$5$', '$-55$', '$15$'],
            correctAnswer: 0,
            explanation: '$\\hat{y} = 100 - 4(10) = 60$. Residual $= 55 - 60 = -5$.'
          },
          {
            question: '"For each additional unit increase in $x$, $y$ increases by 3.2 units" describes:',
            options: ['The intercept', 'The slope', '$r^2$', 'The residual'],
            correctAnswer: 1,
            explanation: 'The slope tells you the predicted change in $y$ for a one-unit increase in $x$.'
          },
          {
            question: 'A researcher finds $r = 0.95$ between ice cream sales and drowning deaths. The best explanation is:',
            options: ['Ice cream causes drowning', 'Drowning causes ice cream sales', 'A lurking variable (hot weather) explains both', '$r$ must be wrong'],
            correctAnswer: 2,
            explanation: 'High correlation does not imply causation. Hot weather is a confounding variable that increases both ice cream sales and swimming (→ drowning).'
          }
        ]
      }
    }
  ]
};
