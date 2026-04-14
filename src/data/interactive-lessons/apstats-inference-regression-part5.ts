export const apStatsInfRegPart5Data = {
  topicSlug: 'inference-regression-apstats',
  sections: [
    {
      id: 'apstats-inferenceregression-p5-intro',
      type: 'text' as const,
      content: `# 📊 Prediction Intervals

**Part 5 of 7 — Predicting Individual Values vs. Mean Responses**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Confidence Interval for Mean Response |
| 📐 Prediction Interval for Individual Response |
| 🔍 Why Prediction Intervals Are Wider |
| ⚠️ Limitations of Predictions |

> 🔑 **Key Concept:** A prediction interval for a single future observation is always wider than a confidence interval for the mean response at the same $x$-value.

---

### Two Types of Intervals at a Given $x^*$

**1. Confidence Interval for Mean Response $\\mu_{y|x^*}$**
- Estimates the *average* $y$-value for all individuals with $x = x^*$
- Variability comes only from estimating the line (uncertainty in $a$ and $b$)

**2. Prediction Interval for Individual Response $y_{\\text{new}}$**
- Predicts a *single new* $y$-value when $x = x^*$
- Variability comes from estimating the line AND the natural scatter of individuals around the line

---

### Formulas (Conceptual)

Both center on $\\hat{y} = a + bx^*$, but the standard errors differ:

$$\\text{CI for mean: } \\hat{y} \\pm t^* \\cdot \\text{SE}_{\\hat{\\mu}}$$

$$\\text{PI for individual: } \\hat{y} \\pm t^* \\cdot \\text{SE}_{\\text{pred}}$$

where $\\text{SE}_{\\text{pred}} > \\text{SE}_{\\hat{\\mu}}$ because:

$$\\text{SE}_{\\text{pred}}^2 = \\text{SE}_{\\hat{\\mu}}^2 + S^2$$

The extra $S^2$ accounts for the individual-to-individual scatter.

> ⚠️ **AP Note:** The formulas for these SEs are not on the AP formula sheet. You should understand the *concept* — why prediction intervals are wider — but you will not be asked to compute them by hand on the AP exam.

---

### Visual Intuition

At a given $x^*$:

$$\\underbrace{\\text{Narrow band}}_{\\text{CI for mean}} \\quad \\subset \\quad \\underbrace{\\text{Wide band}}_{\\text{Prediction interval}}$$

Both intervals are narrowest near $\\bar{x}$ and widen as $x^*$ moves away from $\\bar{x}$.

---

### Why Wider at Extreme $x$?

The further $x^*$ is from $\\bar{x}$:
- More uncertainty in where the true line is → wider CI for mean
- Same extra scatter for individuals → prediction interval grows similarly
- At the extremes of the data, both intervals are widest

This is related to the concept of **extrapolation** — predicting outside the data range is unreliable because both intervals become very wide.

---

### Summary Comparison

| Feature | CI for Mean Response | Prediction Interval |
|---------|:---:|:---:|
| Estimates | $\\mu_{y|x^*}$ (average) | $y_{\\text{new}}$ (individual) |
| Width | Narrower | **Wider** |
| Extra source of variability | No | Yes ($S^2$) |
| Narrowest at | $\\bar{x}$ | $\\bar{x}$ |
| As $n \\to \\infty$ | Shrinks to 0 | Shrinks to $\\pm z^* \\cdot S$ |

> 🔑 **Key Insight:** Even with infinite data, a prediction interval never shrinks to zero width because individual variability ($S$) always remains.`
    },
    {
      id: 'apstats-inferenceregression-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Prediction Interval Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A prediction interval for a single observation is wider than the CI for the mean because:',
            options: ['It uses a different $t^*$', 'Individual observations have extra variability beyond the estimated line', 'It has fewer degrees of freedom', 'The slope is larger'],
            correctAnswer: 1,
            explanation: 'Individual observations scatter around the mean, adding variability beyond the uncertainty in the regression line itself.'
          },
          {
            question: 'Both intervals are narrowest when $x^*$ equals:',
            options: ['$0$', '$\\bar{x}$', '$x_{\\max}$', '$x_{\\min}$'],
            correctAnswer: 1,
            explanation: 'At $x^* = \\bar{x}$, there is the least uncertainty about where the regression line is.'
          },
          {
            question: 'As $n$ increases, which interval approaches zero width?',
            options: ['Prediction interval', 'CI for mean response', 'Both', 'Neither'],
            correctAnswer: 1,
            explanation: 'The CI for the mean shrinks as we get more precise estimates. The PI retains the individual scatter term $S$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p5-input',
      type: 'input-boxes' as const,
      content: `
**Conceptual Calculations** 🧮

$\\hat{y} = 50$ at $x^* = 10$. The CI for the mean is $(47, 53)$.

**1)** What is the margin of error of the CI for the mean?

**2)** Would the prediction interval at $x^* = 10$ be narrower or wider? (narrower/wider)

**3)** If $x^* = \\bar{x}$, the intervals are at their ___ width. (narrowest/widest)
      `,
      exercise: {
        inputs: [
          {
            label: 'Margin of error',
            correctAnswer: '3',
            explanation: 'ME $= (53 - 47)/2 = 3$.'
          },
          {
            label: 'PI vs CI width',
            correctAnswer: 'wider',
            explanation: 'The prediction interval is always wider than the CI for the mean at the same $x^*$.'
          },
          {
            label: 'Width at x-bar',
            correctAnswer: 'narrowest',
            explanation: 'Both intervals are narrowest when $x^* = \\bar{x}$.'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Applying the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            id: 'ir5-dd1',
            label: '"What is the average GPA of all students who study 10 hours?" calls for a ___',
            options: ['prediction interval', 'confidence interval for the mean response'],
            correctIndex: 1,
            explanation: 'We are estimating the average (mean) for a group, not a single individual\'s value.'
          },
          {
            id: 'ir5-dd2',
            label: '"What GPA will the next student who studies 10 hours earn?" calls for a ___',
            options: ['prediction interval', 'confidence interval for the mean response'],
            correctIndex: 0,
            explanation: 'We are predicting an individual\'s value, which requires the wider prediction interval.'
          },
          {
            id: 'ir5-dd3',
            label: 'Both intervals use the same center point, which is ___',
            options: ['$\\bar{y}$', '$\\hat{y}$ at $x^*$', '$b$', '$\\bar{x}$'],
            correctIndex: 1,
            explanation: 'Both intervals center on the predicted value $\\hat{y} = a + bx^*$.'
          },
          {
            id: 'ir5-dd4',
            label: 'Predicting at $x^* = 100$ when data ranges from $x = 5$ to $x = 30$ produces ___',
            options: ['very narrow intervals', 'very wide and unreliable intervals (extrapolation)'],
            correctIndex: 1,
            explanation: '$x^* = 100$ is far outside the data range — both intervals become very wide (extrapolation).'
          }
        ]
      }
    },
    {
      id: 'apstats-inferenceregression-p5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Prediction Intervals** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A CI for the mean response estimates:',
            options: ['A single future $y$-value', 'The average $y$ for all individuals at a given $x$', 'The slope', 'The correlation'],
            correctAnswer: 1,
            explanation: 'The CI for the mean response estimates $\\mu_{y|x^*}$, the average of all $y$-values at $x = x^*$.'
          },
          {
            question: 'A prediction interval estimates:',
            options: ['The average $y$ for a population', 'A single new individual\'s $y$-value at a given $x$', 'The slope $\\beta$', 'The standard error'],
            correctAnswer: 1,
            explanation: 'The PI predicts where a single new observation will fall.'
          },
          {
            question: 'The extra variability in a prediction interval comes from:',
            options: ['Sampling error in $a$ and $b$', 'Individual scatter around the regression line ($S$)', 'Both A and B', 'Neither'],
            correctAnswer: 2,
            explanation: 'The PI includes both the uncertainty in the line AND the scatter of individuals. The CI for the mean only has the first.'
          },
          {
            question: 'At $x^* = \\bar{x}$, the CI for the mean is at its ___ and equals approximately:',
            options: ['widest; $\\hat{y} \\pm t^* \\cdot S$', 'narrowest; $\\hat{y} \\pm t^* \\cdot S/\\sqrt{n}$', 'widest; $\\hat{y} \\pm t^* \\cdot S/\\sqrt{n}$', 'narrowest; $\\hat{y} \\pm 0$'],
            correctAnswer: 1,
            explanation: 'At $\\bar{x}$, the CI is narrowest and approximately $\\hat{y} \\pm t^* \\cdot S/\\sqrt{n}$ (simplified).'
          },
          {
            question: 'With a very large sample, the prediction interval approaches:',
            options: ['Zero width', '$\\hat{y} \\pm z^* \\cdot S$ (a fixed width based on individual scatter)', 'The CI for the mean', 'Infinity'],
            correctAnswer: 1,
            explanation: 'As $n \\to \\infty$, the line uncertainty vanishes, but individual scatter $S$ remains.'
          },
          {
            question: 'A 95% PI at $x^* = 20$ is $(15, 35)$. A 95% CI for the mean at $x^* = 20$ is:',
            options: ['Wider than $(15, 35)$', 'Narrower than $(15, 35)$', 'Equal to $(15, 35)$', 'Cannot be determined without more data'],
            correctAnswer: 1,
            explanation: 'The CI for the mean is always narrower than the PI at the same $x^*$.'
          },
          {
            question: 'Which question requires a prediction interval?',
            options: ['"What is the average salary of all employees with 5 years of experience?"', '"What salary will a specific new hire with 5 years of experience earn?"', '"Is there a linear relationship between experience and salary?"', '"What is the slope of the regression line?"'],
            correctAnswer: 1,
            explanation: 'Predicting a specific individual\'s value requires a prediction interval.'
          },
          {
            question: 'The intervals widen as $x^*$ moves away from $\\bar{x}$ because:',
            options: ['The slope changes', 'There is more uncertainty about the true line at extreme $x$ values', 'The sample size decreases', '$r^2$ drops'],
            correctAnswer: 1,
            explanation: 'Far from $\\bar{x}$, small errors in estimating the slope get amplified, widening the interval.'
          },
          {
            question: 'On the AP exam, you are most likely to be asked to:',
            options: ['Compute prediction intervals by hand', 'Explain conceptually why PIs are wider than CIs for the mean', 'Derive the SE formula', 'Calculate exact SE values'],
            correctAnswer: 1,
            explanation: 'The AP exam focuses on conceptual understanding: PIs are wider because they include individual variability.'
          },
          {
            question: 'A student says "the 95% prediction interval means 95% of all data points are in this range." This is:',
            options: ['Correct', 'Incorrect — it means we are 95% confident a single new observation at this $x$ will be in the interval', 'Incorrect — it refers to all possible slopes', 'Correct but informal'],
            correctAnswer: 1,
            explanation: 'The PI captures a single new observation with the given confidence, not a percentage of existing data.'
          }
        ]
      }
    }
  ]
};
