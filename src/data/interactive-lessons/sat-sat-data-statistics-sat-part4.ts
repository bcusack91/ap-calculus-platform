export const satDataStatsPart4Data = {
  topicSlug: 'sat-data-statistics-sat',
  sections: [
    {
      id: 'sat-ds4-intro',
      type: 'text' as const,
      content: `
# 🔬 Scatterplots & Line of Best Fit

**Part 4 of 7 — Interpreting Relationships**

A **scatterplot** shows the relationship between two numerical variables. The SAT tests:

1. **Direction:** Positive (up-right), negative (down-right), or none
2. **Form:** Linear, curved, or no pattern
3. **Strength:** How tightly points cluster around the trend
4. **Line of best fit:** The equation modeling the trend

**Interpreting $y = mx + b$:**
- **$m$ (slope):** Predicted change in $y$ per 1-unit increase in $x$
- **$b$ (y-intercept):** Predicted $y$ when $x = 0$

**Example:** Line of best fit for study hours ($x$) vs. test score ($y$): $y = 5.2x + 62$
- Each additional hour → predicted 5.2-point increase
- Zero hours → predicted score of 62
      `
    },
    {
      id: 'sat-ds4-check',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A scatterplot shows a strong negative linear association. Which equation is most plausible?',
            options: [
              '$y = 3x + 10$',
              '$y = -2.5x + 100$',
              '$y = 0.1x + 50$',
              '$y = -0.01x + 5$'
            ],
            correctAnswer: 1,
            explanation: 'Strong negative = steep downward slope. $y = -2.5x + 100$ has a meaningfully negative slope. The $-0.01$ option is too weak for "strong."'
          }
        ]
      }
    },
    {
      id: 'sat-ds4-residuals',
      type: 'text' as const,
      content: `
**Residuals — Measuring Fit Quality**

$$\\text{Residual} = y_{\\text{actual}} - y_{\\text{predicted}}$$

- Positive residual → point is **above** the line
- Negative residual → point is **below** the line
- Zero residual → point is **on** the line

**Residual plots** (residuals vs. x-values):
- **Random scatter** around 0 → linear model is good ✓
- **Curved pattern** → nonlinear model needed ✗

---

**SAT Tip:** If a residual plot shows a U-shape or any pattern, the answer is "a nonlinear model would be a better fit."
      `
    },
    {
      id: 'sat-ds4-practice',
      type: 'input-boxes' as const,
      content: `
**Calculate the residual.** 🧮

1) Predicted $y = 84$ at $x = 10$, actual $y = 90$. Residual = ?

2) Line: $y = 3x + 20$. At $x = 5$, actual $y = 32$. Residual = ?

3) Line: $y = -2x + 50$. At $x = 8$, actual $y = 34$. Residual = ?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '-3', '0'],
        hint1: 'Residual = actual − predicted = $90 - 84$.',
        hint2: 'Predicted: $3(5)+20 = 35$. Residual = $32-35$.',
        hint3: 'Predicted: $-2(8)+50 = 34$. Residual = $34-34$.',
        explanation: '1) $90-84 = 6$ (above the line). 2) $32-35 = -3$ (below). 3) $34-34 = 0$ (exactly on the line).'
      }
    },
    {
      id: 'sat-ds4-correlation',
      type: 'text' as const,
      content: `
**Correlation Coefficient ($r$) and $r^2$**

| $r$ value | Interpretation |
|-----------|---------------|
| $r = 1$ | Perfect positive linear |
| $r = -1$ | Perfect negative linear |
| $r = 0$ | No linear relationship |
| $|r|$ near 1 | Strong linear |
| $|r|$ near 0 | Weak linear |

**$r^2$ (coefficient of determination):** The fraction of variation in $y$ explained by $x$.
- If $r = 0.8$, then $r^2 = 0.64$ — 64% of $y$'s variation is explained.

**Important:** $r$ only measures *linear* relationships. A strong curve can have $r \\approx 0$!
      `
    },
    {
      id: 'sat-ds4-sat-style',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $r^2 = 0.81$ and the slope is negative, what is $r$?',
            options: [
              '$0.81$',
              '$-0.81$',
              '$0.9$',
              '$-0.9$'
            ],
            correctAnswer: 3,
            explanation: '$|r| = \\sqrt{0.81} = 0.9$. Since slope is negative, $r = -0.9$.'
          },
          {
            question: 'Car age vs. value: $V = -1800a + 25000$. What does $-1800$ represent?',
            options: [
              'Initial car value',
              'Predicted loss of \\$1800 per year',
              'Value after 1800 years',
              'Average resale value'
            ],
            correctAnswer: 1,
            explanation: 'The slope $-1800$ means each additional year predicts a \\$1800 decrease in value.'
          }
        ]
      }
    }
  ]
}
