export const apStatsLinRegPart7Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Linear Regression Review**

---

### Complete Formula Reference

| Concept | Formula |
|---------|---------|
| **LSRL** | $\\hat{y} = a + bx$ |
| **Slope** | $b = r \\cdot \\dfrac{s_y}{s_x}$ |
| **Intercept** | $a = \\bar{y} - b\\bar{x}$ |
| **Correlation** | $r = \\dfrac{1}{n-1}\\sum\\left(\\dfrac{x_i - \\bar{x}}{s_x}\\right)\\left(\\dfrac{y_i - \\bar{y}}{s_y}\\right)$ |
| **$r^2$** | $r^2 = 1 - \\dfrac{\\text{SSE}}{\\text{SST}}$ |
| **Residual** | $e_i = y_i - \\hat{y}_i$ |

---

### Interpretation Templates (AP Exam Ready)

**Slope:** "For each additional [1 unit of x], the predicted [y in context] [increases/decreases] by [|b|] [units of y]."

**Intercept:** "When [x in context] is 0, the predicted [y in context] is [a] [units of y]." *(Only if $x = 0$ is in the data range.)*

**$r$:** "There is a [strong/moderate/weak], [positive/negative], linear association between [x] and [y]."

**$r^2$:** "[$r^2 \\times 100$]% of the variability in [y in context] is explained by the linear relationship with [x in context]."

**Residual:** "The actual [y in context] was [e] [units] [above/below] the value predicted by the model."

---

### Key Concepts Summary

| Topic | Key Takeaway |
|-------|-------------|
| **Scatterplot** | Always plot data first; describe direction, form, strength, unusual features |
| **LSRL** | Minimizes $\\sum e_i^2$; passes through $(\\bar{x}, \\bar{y})$; $\\sum e_i = 0$ |
| **Slope & Intercept** | Slope = rate of change; intercept = starting value (if meaningful) |
| **Residuals** | $e = y - \\hat{y}$; residual plot checks model appropriateness |
| **$r$** | Direction + strength; $-1 \\leq r \\leq 1$; only for linear relationships |
| **$r^2$** | Proportion of variability explained; $0 \\leq r^2 \\leq 1$ |
| **Outliers** | Large residual; may or may not be influential |
| **High Leverage** | Extreme $x$-value; potential to influence |
| **Influential** | Removing changes slope/$r^2$ substantially |
| **Extrapolation** | Predicting outside data range — unreliable |

---

### Decision Guide

$$\\text{Is the relationship linear?}$$
$$\\downarrow$$
$$\\text{Check scatterplot → Fit LSRL → Check residual plot}$$
$$\\downarrow$$
$$\\text{Random scatter → Linear model OK}$$
$$\\text{Curved pattern → Nonlinear model needed}$$
$$\\downarrow$$
$$\\text{Interpret: slope, } r, r^2 \\text{ in context}$$
$$\\downarrow$$
$$\\text{Check for unusual points}$$
$$\\downarrow$$
$$\\text{Make predictions (within data range only)}$$

> 🔑 **AP Exam Strategy:** Regression appears on the exam every year. Master the interpretation templates — they earn you full credit on free-response questions.`
    },
    {
      id: 'apstats-linearregression-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The LSRL always passes through:',
            options: ['$(0, 0)$', '$(\\bar{x}, \\bar{y})$', '$(1, b)$', 'The first data point'],
            correctAnswer: 1,
            explanation: 'A fundamental property: the LSRL always passes through the point $(\\bar{x}, \\bar{y})$.'
          },
          {
            question: 'If $r = -0.6$, which is true?',
            options: ['The slope is positive', '$r^2 = -0.36$', 'The slope is negative and $r^2 = 0.36$', 'The model explains 60% of variability'],
            correctAnswer: 2,
            explanation: 'Negative $r$ → negative slope. $r^2 = (-0.6)^2 = 0.36$, meaning 36% of variability is explained.'
          },
          {
            question: 'The sum of all residuals in an LSRL equals:',
            options: ['$n$', '$1$', '$\\bar{y}$', '$0$'],
            correctAnswer: 3,
            explanation: 'A mathematical property of the LSRL: $\\sum(y_i - \\hat{y}_i) = 0$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

Given: $\\bar{x} = 10$, $\\bar{y} = 25$, $s_x = 4$, $s_y = 8$, $r = 0.75$.

**1)** Calculate the slope $b$.

**2)** Calculate the intercept $a$.

**3)** What is $r^2$? (two decimal places)
      `,
      exercise: {
        inputs: [
          {
            label: 'Slope b',
            correctAnswer: '1.5',
            explanation: '$b = r \\cdot s_y/s_x = 0.75 \\cdot 8/4 = 0.75 \\cdot 2 = 1.5$.'
          },
          {
            label: 'Intercept a',
            correctAnswer: '10',
            explanation: '$a = \\bar{y} - b\\bar{x} = 25 - 1.5(10) = 25 - 15 = 10$.'
          },
          {
            label: 'r-squared',
            correctAnswer: '0.56',
            explanation: '$r^2 = 0.75^2 = 0.5625 \\approx 0.56$.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Connections** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'lr7-dd1',
            label: 'Switching $x$ and $y$ in a regression ___ the value of $r$',
            options: ['changes', 'does not change'],
            correctIndex: 1,
            explanation: '$r$ is symmetric — it does not matter which variable is $x$ and which is $y$. However, the LSRL equation DOES change.'
          },
          {
            id: 'lr7-dd2',
            label: 'If you rescale $x$ by multiplying by a constant, the LSRL ___',
            options: ['stays exactly the same', 'changes (slope adjusts, $r$ stays the same)', 'becomes invalid'],
            correctIndex: 1,
            explanation: 'Linear transformations of $x$ or $y$ change the slope and intercept but do not change $r$ or $r^2$.'
          },
          {
            id: 'lr7-dd3',
            label: 'A residual plot with no pattern tells us the ___ model is appropriate',
            options: ['nonlinear', 'linear', 'quadratic', 'exponential'],
            correctIndex: 1,
            explanation: 'Random scatter in the residual plot confirms the linear model captures the relationship well.'
          },
          {
            id: 'lr7-dd4',
            label: 'Predicting $y$ for an $x$-value within the range of the data is called ___',
            options: ['extrapolation', 'interpolation', 'transformation', 'estimation'],
            correctIndex: 1,
            explanation: 'Interpolation = within data range (reliable). Extrapolation = outside data range (unreliable).'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p7-exit',
      type: 'multiple-choice' as const,
      content: `
**Final Exam — Linear Regression** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The least-squares regression line minimizes the sum of:',
            options: ['Residuals', 'Squared residuals', 'Absolute residuals', 'Squared $x$-values'],
            correctAnswer: 1,
            explanation: 'LSRL minimizes $\\sum(y_i - \\hat{y}_i)^2$ — the sum of squared residuals.'
          },
          {
            question: '$b = r \\cdot s_y / s_x$. If $r > 0$ and $s_y > s_x$, then:',
            options: ['$b < r$', '$b = r$', '$b > r$', '$b < 0$'],
            correctAnswer: 2,
            explanation: 'If $s_y/s_x > 1$, then $b = r \\cdot (s_y/s_x) > r$.'
          },
          {
            question: 'A regression has $r^2 = 0.81$. Adding a data point changes $r^2$ to $0.40$. The added point is:',
            options: ['A regular point', 'An outlier only', 'A high-leverage point only', 'An influential point'],
            correctAnswer: 3,
            explanation: 'A dramatic drop in $r^2$ upon adding a point means that point is highly influential.'
          },
          {
            question: 'LSRL: $\\hat{y} = 20 - 0.3x$. The slope tells us:',
            options: ['$y$ increases by 0.3 for each unit increase in $x$', '$y$ decreases by 0.3 for each unit increase in $x$', '$x$ and $y$ are unrelated', 'The correlation is $-0.3$'],
            correctAnswer: 1,
            explanation: 'Slope $= -0.3$: for each 1-unit increase in $x$, predicted $y$ decreases by 0.3.'
          },
          {
            question: 'Computer output shows "S = 3.2." This is:',
            options: ['The slope', 'The standard deviation of the residuals', '$r^2$', 'The sample size'],
            correctAnswer: 1,
            explanation: '$S$ (or $s_e$) is the standard deviation of the residuals — a measure of the typical prediction error.'
          },
          {
            question: 'Which would make you doubt a linear model?',
            options: ['$r^2 = 0.95$', 'Random residual plot', 'U-shaped residual plot', 'All residuals less than 5'],
            correctAnswer: 2,
            explanation: 'A curved (U-shaped) residual plot indicates the linear model is inappropriate.'
          },
          {
            question: 'If the intercept is $-50$ and data range for $x$ is $[100, 500]$, you should:',
            options: ['Interpret it as: predicted $y$ is $-50$ when $x = 0$', 'State the intercept has no meaningful interpretation in this context', 'Delete the intercept', 'Set the intercept to 0'],
            correctAnswer: 1,
            explanation: '$x = 0$ is far outside the data range, so the intercept lacks practical meaning.'
          },
          {
            question: '$r = 0.45$ for height vs. weight. Switching to weight vs. height gives $r =$',
            options: ['$-0.45$', '$0.45$', '$0.2025$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: '$r$ is symmetric — switching $x$ and $y$ does not change its value.'
          },
          {
            question: 'A dataset has $n = 5$ points. One point has leverage AND a large residual. Removing it:',
            options: ['Will not change the LSRL', 'Will likely change the LSRL substantially', 'Will only change $r$', 'Is not allowed'],
            correctAnswer: 1,
            explanation: 'High leverage + large residual = influential. Removing it will substantially change the regression.'
          },
          {
            question: 'On the AP exam, a complete regression interpretation includes:',
            options: ['Just the equation', 'Slope, $r^2$, residual analysis, and context', 'Only the p-value', 'A list of all data points'],
            correctAnswer: 1,
            explanation: 'Full credit requires interpreting slope and $r^2$ in context, analyzing residuals for model fit, and noting any unusual points.'
          }
        ]
      }
    }
  ]
};
