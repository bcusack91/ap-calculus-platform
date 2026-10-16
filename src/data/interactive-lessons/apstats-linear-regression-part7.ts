export const apStatsLinRegPart7Data = {
  topicSlug: 'linear-regression-apstats',
  sections: [
    {
      id: 'apstats-linearregression-p7-intro',
      type: 'text' as const,
      content: `# 📊 Review & Applications

**Part 7 of 7 — Comprehensive Linear Regression Review**

---

### Complete Reference

| Concept | What to know |
|---------|---------|
| **LSRL** | $\\hat{y} = a + bx$; $a$, $b$ and $r$ come from technology |
| **Point of means** | The LSRL passes through $(\\bar{x}, \\bar{y})$, so $a = \\bar{y} - b\\bar{x}$ |
| **Least squares** | The LSRL minimizes the sum of squared residuals |
| **$r^2$** | $r^2 = r \\times r$, the proportion of variation in $y$ explained |
| **Residual** | residual $= y - \\hat{y}$ |

---

### Interpretation Templates (AP Exam Ready)

**Slope:** "For each additional [1 unit of x], the predicted [y in context] [increases/decreases] by [|b|] [units of y]."

**Intercept:** "When [x in context] is 0, the predicted [y in context] is [a] [units of y]." *(Only if $x = 0$ is within the data and the value makes sense.)*

**$r$:** "There is a [strong/moderate/weak], [positive/negative], linear association between [x] and [y]."

**$r^2$:** "[$r^2 \\times 100$]% of the variation in [y in context] is explained by the linear relationship with [x in context]."

**Residual:** "The actual [y in context] was [e] [units] [above/below] the value predicted by the model."

---

### Key Concepts Summary

| Topic | Key Takeaway |
|-------|-------------|
| **Scatterplot** | Always plot data first; describe form, direction, strength, unusual features |
| **LSRL** | Minimizes the sum of squared residuals; passes through $(\\bar{x}, \\bar{y})$ |
| **Slope & Intercept** | Slope = predicted change per unit of $x$; intercept = prediction at $x = 0$ (if meaningful) |
| **Residuals** | Residual $= y - \\hat{y}$; positive means the model underpredicts; residual plot checks the form |
| **$r$** | Direction + strength of a linear association; $-1 \\leq r \\leq 1$; unit-free |
| **$r^2$** | Proportion of variation explained; $0 \\leq r^2 \\leq 1$ |
| **Unusual features** | Clusters and points that don't fit the pattern; describe and investigate them |
| **Extrapolation** | Predicting beyond the data — less reliable the farther you go |

---

### Decision Guide

$$\\text{Is the relationship linear?}$$
$$\\downarrow$$
$$\\text{Check scatterplot → Fit LSRL → Check residual plot}$$
$$\\downarrow$$
$$\\text{Random scatter → Linear model OK}$$
$$\\text{Curved pattern → Linear model not the most appropriate}$$
$$\\downarrow$$
$$\\text{Interpret: slope, } r, r^2 \\text{ in context}$$
$$\\downarrow$$
$$\\text{Note unusual features}$$
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
            options: ['$(0, 0)$', '$(\\bar{x}, \\bar{y})$', '$(\\bar{y}, \\bar{x})$', '$(0, \\bar{y})$'],
            correctAnswer: 1,
            explanation: 'The LSRL always passes through $(\\bar{x}, \\bar{y})$, the point of means. Swapping the coordinates gives a different point, and the line passes through the origin or $(0, \\bar{y})$ only in special cases.'
          },
          {
            question: 'If $r = -0.6$, which is true?',
            options: ['The slope is positive and $r^2 = 0.36$', 'The slope is negative and $r^2 = -0.36$', 'The slope is negative and $r^2 = 0.36$', 'The slope is negative and $r^2 = 0.60$'],
            correctAnswer: 2,
            explanation: 'A negative $r$ means a negative slope, and $r^2 = (-0.6)^2 = 0.36$: 36% of the variation is explained. $r^2$ is never negative and is not equal to $|r|$.'
          },
          {
            question: 'A residual plot from a linear model shows clear curvature. What does this tell you?',
            options: ['The model fits, since $r$ is close to 1', 'A linear model is not the best model', 'The correlation must be close to 0', 'The slope of the linear model must be negative'],
            correctAnswer: 1,
            explanation: 'Curvature in the residual plot means a linear model is not the most appropriate model for the data. Curved data can still have a large $|r|$, and curvature says nothing about the sign of the slope.'
          }
        ]
      }
    },
    {
      id: 'apstats-linearregression-p7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculations** 🧮

Technology gives $b = 1.5$ and $r = 0.75$. The means are $\\bar{x} = 10$ and $\\bar{y} = 25$.

**1)** Find the intercept $a$.

**2)** Predict $y$ when $x = 14$.

**3)** What is $r^2$? (two decimal places)
      `,
      exercise: {
        inputs: [
          {
            label: 'Intercept a',
            correctAnswer: '10',
            explanation: '$a = \\bar{y} - b\\bar{x} = 25 - 1.5(10) = 25 - 15 = 10$.'
          },
          {
            label: 'Predicted y',
            correctAnswer: '31',
            explanation: '$\\hat{y} = 10 + 1.5(14) = 10 + 21 = 31$.'
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
            label: 'Switching $x$ and $y$ ___ the value of $r$',
            options: ['changes', 'does not change', 'reverses', 'squares'],
            correctIndex: 1,
            explanation: '$r$ is symmetric, so it does not matter which variable is $x$ and which is $y$. The LSRL equation, however, does change.'
          },
          {
            id: 'lr7-dd2',
            label: 'Measuring height in centimeters instead of inches ___ the correlation',
            options: ['makes stronger', 'does not change', 'makes weaker', 'reverses the sign of'],
            correctIndex: 1,
            explanation: 'The correlation coefficient is unit-free, so changing the units of measurement does not change $r$ (the slope of the line does change).'
          },
          {
            id: 'lr7-dd3',
            label: 'A residual plot with no pattern tells us the ___ model is appropriate',
            options: ['nonlinear', 'linear', 'causal', 'curved'],
            correctIndex: 1,
            explanation: 'Random scatter in the residual plot confirms the linear form, so the linear model is appropriate.'
          },
          {
            id: 'lr7-dd4',
            label: 'Predicting $y$ for an $x$-value within the range of the data is called ___',
            options: ['extrapolation', 'interpolation', 'correlation', 'a residual'],
            correctIndex: 1,
            explanation: 'Interpolation is predicting within the data range. Extrapolation is predicting beyond it and is less reliable.'
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
            options: ['The residuals', 'The squared residuals', 'The absolute errors', 'Squared $x$-values'],
            correctAnswer: 1,
            explanation: 'The LSRL minimizes $\\sum (y - \\hat{y})^2$, the sum of squared residuals. The other sums define different criteria.'
          },
          {
            question: 'Technology gives an LSRL slope of $b = 0.4$; the means are $\\bar{x} = 50$ and $\\bar{y} = 32$. The intercept is:',
            options: ['$52$', '$12$', '$31.6$', '$-18$'],
            correctAnswer: 1,
            explanation: '$a = \\bar{y} - b\\bar{x} = 32 - 0.4(50) = 32 - 20 = 12$. Adding instead gives 52, subtracting only $b$ gives 31.6, and $32 - 50$ ignores the slope.'
          },
          {
            question: 'In a scatterplot of hours of sleep vs. reaction time, one student sits far from the otherwise strong negative pattern. How should you describe this student?',
            options: ['As evidence the association is really positive', 'As a point that does not fit the trend', 'As a cluster of students with similar habits', 'As an extrapolation beyond the observed data'],
            correctAnswer: 1,
            explanation: 'A single point far from the overall trend is an unusual point that does not fit the pattern; describe and investigate it. One point does not reverse the direction, a cluster is a group, and extrapolation refers to predictions.'
          },
          {
            question: 'LSRL: $\\hat{y} = 20 - 0.3x$. The slope tells us:',
            options: ['Predicted $y$ rises 0.3 per unit increase in $x$', 'Predicted $y$ falls by 0.3 for each unit increase in $x$', 'The variables $x$ and $y$ are unrelated', 'The correlation between $x$ and $y$ is $-0.3$'],
            correctAnswer: 1,
            explanation: 'Slope $= -0.3$: for each 1-unit increase in $x$, predicted $y$ decreases by 0.3. The slope is not the correlation, and a nonzero slope shows the variables are related.'
          },
          {
            question: 'Output for a regression reports "R-sq = 49%" and a negative slope. What is $r$?',
            options: ['$0.49$', '$-0.49$', '$-0.7$', '$0.7$'],
            correctAnswer: 2,
            explanation: '$|r| = \\sqrt{0.49} = 0.7$, and $r$ takes the sign of the slope, so $r = -0.7$. 0.49 and $-0.49$ forget the square root, and $+0.7$ ignores the negative slope.'
          },
          {
            question: 'Which would make you doubt a linear model?',
            options: ['An $r^2$ of 0.95', 'A random residual plot', 'A U-shaped residual plot', 'Small residuals'],
            correctAnswer: 2,
            explanation: 'A curved (U-shaped) residual plot shows that the linear model misses the form of the relationship. A high $r^2$, random residuals and small residuals all support the model.'
          },
          {
            question: 'If the intercept is $-50$ and the data range for $x$ is $[100, 500]$, you should:',
            options: ['Say the predicted $y$ is $-50$ when $x = 0$', 'Say the intercept has no reasonable meaning here', 'Drop the intercept from the regression line', 'Refit the line forcing the intercept to 0'],
            correctAnswer: 1,
            explanation: '$x = 0$ is far outside the data range, so interpreting the intercept is an extrapolation. The intercept still belongs in the equation for making predictions.'
          },
          {
            question: '$r = 0.45$ for height vs. weight. Switching to weight vs. height gives $r =$',
            options: ['$-0.45$', '$0.45$', '$0.2025$', '$2.22$'],
            correctAnswer: 1,
            explanation: '$r$ is symmetric, so switching $x$ and $y$ does not change it. 0.2025 is $r^2$, and 2.22 is $1/r$.'
          },
          {
            question: 'A model of tree height (ft) on age (years) was fit to trees aged 5 to 40 years. A forester uses it to predict the height of a 150-year-old tree. The main concern is:',
            options: ['It is an extrapolation', 'The residual will be exactly zero', 'The slope must change sign at 150', 'The correlation will become negative'],
            correctAnswer: 0,
            explanation: '150 years is far beyond the 5–40 year data, so the linear pattern may not continue (trees stop growing). Nothing guarantees a zero residual or changes the sign of $r$ or the slope.'
          },
          {
            question: 'On the AP exam, a complete regression analysis includes:',
            options: ['Only the equation of the least-squares regression line', 'Slope and $r^2$ in context, and the residual plot', 'Only the p-value printed in the technology output', 'A list of every data point that was used in the model'],
            correctAnswer: 1,
            explanation: 'Full credit requires interpreting the slope and $r^2$ in context, checking the residual plot for the form, and noting any unusual points. An equation alone is not an analysis.'
          }
        ]
      }
    }
  ]
};
