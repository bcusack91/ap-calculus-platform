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
| 🧮 Getting $r^2$ from $r$ |
| 📝 Interpreting $r^2$ on the AP Exam |
| 🔗 $r$ vs. $r^2$ |

> 🔑 **Key Concept:** $r^2$, the **coefficient of determination**, is the proportion of the variation in the response variable $y$ that is explained by the linear relationship with the explanatory variable $x$.

---

### The Definition

In simple linear regression, $r^2$ is the square of the correlation coefficient:

$$\\boxed{r^2 = r \\times r}$$

Technology reports it directly (often as "R-sq" or "$R^2$", sometimes as a percent). Because it is a square, $0 \\leq r^2 \\leq 1$, and it carries no sign.

---

### Interpretation Template

$$\\text{"[}r^2 \\times 100\\text{]\\% of the variation in [y context] is explained by the linear relationship with [x context]."}$$

**Example:** $r^2 = 0.72$, $x$ = hours studied, $y$ = exam score.

✅ "72% of the variation in exam scores is explained by the linear relationship with hours studied."

> ⚠️ **AP Tip:** Always say "variation in [y]" and "linear relationship with [x]." Do not say "caused by," and $r^2$ is NOT the percent of points on the line.

The rest, $1 - r^2$, is the proportion of variation in $y$ that the linear model leaves **unexplained**.

---

### $r$ vs. $r^2$

| Statistic | Measures | Range |
|-----------|---------|-------|
| $r$ | Direction and strength of linear relationship | $-1 \\leq r \\leq 1$ |
| $r^2$ | Proportion of variation in $y$ explained | $0 \\leq r^2 \\leq 1$ |

| $r$ | $r^2$ |
|-----|-------|
| $\\pm 0.9$ | $0.81$ |
| $\\pm 0.7$ | $0.49$ |
| $\\pm 0.5$ | $0.25$ |
| $\\pm 0.3$ | $0.09$ |

> 🔑 **Key Insight:** Going from $r^2$ back to $r$, take the square root and give it the sign of the slope: $r^2 = 0.49$ with a negative slope means $r = -0.7$. Even $r = 0.7$ explains only 49% of the variation.`
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
            options: ['$-0.64$', '$0.64$', '$0.80$', '$-1.60$'],
            correctAnswer: 1,
            explanation: '$r^2 = (-0.8)^2 = 0.64$. A square is never negative, $0.80$ is $|r|$ itself, and $-1.60$ doubles $r$ instead of squaring it.'
          },
          {
            question: '$r^2 = 0.85$ means:',
            options: ['The correlation between $x$ and $y$ is 0.85', '85% of the variation in $y$ is explained by the line', 'The slope of the regression line is 0.85', '85% of the data points lie on the regression line'],
            correctAnswer: 1,
            explanation: '$r^2$ is the proportion of the variation in $y$ explained by the linear relationship with $x$. The correlation is $\\pm\\sqrt{0.85}$, the slope is a different quantity, and $r^2$ says nothing about how many points sit exactly on the line.'
          },
          {
            question: 'If $r^2 = 0.36$ and the slope is negative, then $r =$',
            options: ['$-0.36$', '$-0.18$', '$-0.6$', '$0.6$'],
            correctAnswer: 2,
            explanation: '$|r| = \\sqrt{0.36} = 0.6$, and $r$ takes the sign of the slope, so $r = -0.6$. $-0.36$ forgets the square root, $-0.18$ halves instead, and $+0.6$ ignores the slope.'
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

**2)** $r^2 = 0.49$. What percentage of the variation in $y$ is explained?

**3)** $r^2 = 0.49$ and the slope is negative. What is $r$?
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
            explanation: '$r^2 = 0.49$ means 49% of the variation in $y$ is explained by the linear relationship with $x$.'
          },
          {
            label: 'r',
            correctAnswer: '-0.7',
            explanation: '$\\sqrt{0.49} = 0.7$, and $r$ has the same sign as the slope, so $r = -0.7$.'
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
            label: '$r^2 = 0.04$ indicates the linear model explains ___ of the variation in $y$',
            options: ['4%', '40%', '96%', '20%'],
            correctIndex: 0,
            explanation: '$r^2 = 0.04$ means only 4% of the variation is explained, a very weak linear relationship. 96% is the unexplained part, and 20% is $|r|$ written as a percent.'
          },
          {
            id: 'lr4-dd2',
            label: '"72% of the variation in $y$ is caused by $x$" is ___',
            options: ['Correct wording', 'Incorrect wording', 'Correct only if $r > 0$', 'Correct only if $r^2 > 0.5$'],
            correctIndex: 1,
            explanation: 'Never use "caused by." $r^2$ measures the variation explained by the linear relationship, not causation, whatever the sign of $r$ or size of $r^2$.'
          },
          {
            id: 'lr4-dd3',
            label: '$r = 0.5$ and $r = -0.5$ have ___ $r^2$ values',
            options: ['the same', 'different', 'opposite', 'reciprocal'],
            correctIndex: 0,
            explanation: '$r^2 = (0.5)^2 = (-0.5)^2 = 0.25$. The sign of $r$ does not affect $r^2$.'
          },
          {
            id: 'lr4-dd4',
            label: 'If $r^2 = 1$, all points lie ___',
            options: ['near the line', 'exactly on the LSRL', 'above the line', 'at the mean point'],
            correctIndex: 1,
            explanation: '$r^2 = 1$ means all of the variation is explained, so every point is exactly on the regression line (a perfect linear fit).'
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
            options: ['$-1$ and $1$', '$0$ and $1$', '$0$ and $100$', '$-1$ and $0$'],
            correctAnswer: 1,
            explanation: '$r^2$ is a proportion of variation explained, so $0 \\leq r^2 \\leq 1$. $-1$ to $1$ is the range of $r$, and 0 to 100 applies only when it is written as a percent.'
          },
          {
            question: 'If $r^2$ is close to 0:',
            options: ['The line explains most of the variation', 'The line explains almost none of the variation', 'The line passes through every point', 'The linear association is very strong'],
            correctAnswer: 1,
            explanation: '$r^2 \\approx 0$ means the linear relationship with $x$ explains almost none of the variation in $y$. The other choices describe $r^2$ near 1.'
          },
          {
            question: '$r = -0.95$. The model explains about ___ of the variation.',
            options: ['$95\\%$', '$90\\%$', '$5\\%$', '$10\\%$'],
            correctAnswer: 1,
            explanation: '$r^2 = (-0.95)^2 = 0.9025 \\approx 90\\%$. 95% uses $|r|$ instead of $r^2$, and 5% and 10% are unexplained proportions.'
          },
          {
            question: 'A high $r^2$ does NOT mean:',
            options: ['The line explains most of the variation in $y$', 'Changes in $x$ cause changes in $y$', 'The residuals tend to be small relative to $y$', 'There is a strong linear association'],
            correctAnswer: 1,
            explanation: 'A high $r^2$ describes a strong linear association with most of the variation explained, but it can never establish causation; a confounding variable could drive both.'
          },
          {
            question: 'Output for a regression of weight on height shows "R-sq = 64%". Which sentence is correct?',
            options: ['64% of the people have weights that lie on the line', '64% of the variation in weight is explained by the line', 'Height causes 64% of the variation in weight', 'The correlation between height and weight is 0.64'],
            correctAnswer: 1,
            explanation: '$r^2 = 0.64$ means 64% of the variation in weight is explained by the linear relationship with height. It is not a percent of points on the line, not causal, and $r = \\pm 0.8$, not 0.64.'
          },
          {
            question: 'Two models: Model A has $r^2 = 0.82$, Model B has $r^2 = 0.65$. Both residual plots show random scatter. Which explains more of the variation in $y$?',
            options: ['Model A', 'Model B', 'They explain the same', 'Cannot compare $r^2$ values'],
            correctAnswer: 0,
            explanation: 'Model A explains 82% of the variation in $y$ versus 65% for Model B. Both residual plots are random, so both linear models are appropriate and their $r^2$ values can be compared.'
          },
          {
            question: 'A linear model of pulse rate on age has $r^2 = 0.30$. What proportion of the variation in pulse rate is NOT explained by age?',
            options: ['$0.30$', '$0.70$', '$0.55$', '$0.09$'],
            correctAnswer: 1,
            explanation: 'Unexplained proportion $= 1 - r^2 = 1 - 0.30 = 0.70$. 0.30 is the explained part, 0.55 is about $\\sqrt{0.30}$, and 0.09 squares 0.30 again.'
          },
          {
            question: '"$r^2 = 0.56$" on an AP answer should be interpreted as:',
            options: ['56% of the variation in [y] is explained by the linear relationship with [x]', 'The correlation between [x] and [y] is 0.56, a moderate positive association', '56% of the data points lie exactly on the least-squares regression line', 'Changes in [x] cause 56% of the changes that are observed in [y]'],
            correctAnswer: 0,
            explanation: 'The correct AP interpretation uses "variation in [y]" and "linear relationship with [x]." $r$ would be $\\pm 0.75$, $r^2$ is not a percent of points, and it never implies causation.'
          },
          {
            question: '$r^2 = 0.64$. The unexplained variation is:',
            options: ['$64\\%$', '$36\\%$', '$80\\%$', '$20\\%$'],
            correctAnswer: 1,
            explanation: 'Unexplained $= 1 - r^2 = 1 - 0.64 = 0.36 = 36\\%$. 80% is $|r|$, and 20% is $1 - |r|$.'
          },
          {
            question: 'Which $r$ gives the highest $r^2$?',
            options: ['$r = 0.7$', '$r = -0.8$', '$r = 0.6$', '$r = -0.5$'],
            correctAnswer: 1,
            explanation: '$r^2$ values: $0.49, 0.64, 0.36, 0.25$. $r = -0.8$ gives the highest, $0.64$; the sign does not matter once squared.'
          }
        ]
      }
    }
  ]
};
